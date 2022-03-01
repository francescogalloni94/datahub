from dataclasses import dataclass
from typing import Iterable, Iterator, Union
from datahub.ingestion.api.source import SourceReport
from datahub.ingestion.api.workunit import MetadataWorkUnit
from datahub.ingestion.api.common import PipelineContext
from datahub.metadata.com.linkedin.pegasus2avro.mxe import MetadataChangeEvent
from datahub.emitter.mce_builder import (
    DEFAULT_ENV,
    make_dataset_urn_with_platform_instance,
    dataset_urn_to_key,
    make_data_platform_urn,
    make_dataplatform_instance_urn
)
from datahub.configuration.common import AllowDenyPattern
from datahub.metadata.com.linkedin.pegasus2avro.metadata.snapshot import DatasetSnapshot
from datahub.metadata.schema_classes import DatasetPropertiesClass
from datahub.metadata.com.linkedin.pegasus2avro.schema import (
    ArrayTypeClass,
    BooleanTypeClass,
    NullTypeClass,
    NumberTypeClass,
    RecordTypeClass,
    SchemaField,
    SchemaFieldDataType,
    SchemalessClass,
    SchemaMetadata,
    StringTypeClass,
    BytesTypeClass
)
from datahub.metadata.schema_classes import (
    ChangeTypeClass,
    DataPlatformInstanceClass
)
from datahub.configuration import ConfigModel
from datahub.ingestion.source.state.checkpoint import Checkpoint
from datahub.metadata.com.linkedin.pegasus2avro.common import Status
from datahub.ingestion.source.state.bigtable_state import BigTableCheckpointState
from datahub.configuration.source_common import DatasetSourceConfigBase
from datahub.emitter.mcp import MetadataChangeProposalWrapper
from datahub.ingestion.source.state.stateful_ingestion_base import (
    JobId,
    StatefulIngestionConfig,
    StatefulIngestionConfigBase,
    StatefulIngestionSourceBase,
)
from google.cloud import bigtable
from typing import Dict, Type, List, Optional, Any, cast
import json
import tempfile
import os
import logging


_field_type_mapping: Dict[Union[Type, str], Type] = {
    list: ArrayTypeClass,
    bool: BooleanTypeClass,
    type(None): NullTypeClass,
    int: NumberTypeClass,
    float: NumberTypeClass,
    str: StringTypeClass,
    dict: RecordTypeClass,
    bytes: BytesTypeClass
}


class BigTableCredential(ConfigModel):
    project_id: str
    private_key_id: str
    private_key: str
    client_email: str
    client_id: str
    auth_uri: str = "https://accounts.google.com/o/oauth2/auth"
    token_uri: str = "https://oauth2.googleapis.com/token"
    auth_provider_x509_cert_url: str = "https://www.googleapis.com/oauth2/v1/certs"
    type: str = "service_account"
    client_x509_cert_url: Optional[str]

    def __init__(self, **data: Any):
        super().__init__(**data)
        if not self.client_x509_cert_url:
            self.client_x509_cert_url = (
                f"https://www.googleapis.com/robot/v1/metadata/x509/{self.client_email}"
            )


def create_credential_temp_file(credential: BigTableCredential) -> str:
    with tempfile.NamedTemporaryFile(delete=False) as fp:
        cred_json = json.dumps(credential.dict(), indent=4, separators=(",", ": "))
        fp.write(cred_json.encode())
        return fp.name


class BigTableSourceStatefulIngestionConfig(StatefulIngestionConfig):
    remove_stale_metadata: bool = True


class BigTableSourceConfig(StatefulIngestionConfigBase, DatasetSourceConfigBase):
    project_id: str
    instance_name: str
    platform_instance: Optional[str]
    schemaSamplingSize: int
    env: str = DEFAULT_ENV
    table_pattern: AllowDenyPattern = AllowDenyPattern.allow_all()
    credential: Optional[BigTableCredential]
    credentials_path: Optional[str] = None
    stateful_ingestion: Optional[BigTableSourceStatefulIngestionConfig] = None

    def __init__(self, **data: Any):
        super().__init__(**data)

        if self.credential:
            self.credentials_path = create_credential_temp_file(self.credential)
            logging.debug(
                f"Creating temporary credential file at {self.credentials_path}"
            )
            os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = self.credentials_path


def iterate_bt_tables(
        instance: bigtable.instance.Instance, platform: str, config: BigTableSourceConfig) \
        -> Iterator[MetadataChangeEvent]:

    for table in instance.list_tables():
        table_name = table.name.split("/")[-1]
        if not config.table_pattern.allowed(table_name):
            logging.info(f"Skipping denied table {table_name}")
            continue
        logging.info(f"Building mce for table {table_name}")
        dataset_name = table_name
        dataset_urn = make_dataset_urn_with_platform_instance(
            platform=platform,
            name=dataset_name,
            platform_instance=config.platform_instance,
            env=config.env,
        )

        dataset_snapshot = DatasetSnapshot(
            urn=dataset_urn,
            aspects=[],
        )

        dataset_properties = DatasetPropertiesClass(
            tags=[],
            customProperties={
                f"{cf_key}_gc": str(cf.gc_rule.to_pb()).replace('\n', '') for cf_key, cf in table.list_column_families().items()
                if cf.gc_rule
            },
        )

        platform_urn = make_data_platform_urn(platform)

        data_platform_instance = DataPlatformInstanceClass(
            platform=platform_urn,
            instance=make_dataplatform_instance_urn(
                platform, config.platform_instance
            ),
        )

        dataset_snapshot.aspects.append(dataset_properties)
        dataset_snapshot.aspects.append(data_platform_instance)
        table_metadata = get_table_metadata(table, config, platform)
        dataset_snapshot.aspects.append(table_metadata)
        mce = MetadataChangeEvent(proposedSnapshot=dataset_snapshot)

        yield mce


def get_table_metadata(table: bigtable.table, config: BigTableSourceConfig, platform: str) -> SchemaMetadata:
    logging.info("Retrieving table metadata schema")
    table_schema = sample_rows_and_build_schema(table, config.schemaSamplingSize)
    return SchemaMetadata(
        schemaName=table.name,
        platform=f"urn:li:dataPlatform:{platform}",
        version=0,
        hash="",
        platformSchema=SchemalessClass(),
        fields=table_schema,
    )


def sample_rows_and_build_schema(table: bigtable.table, schema_sampling_size: int) -> List[SchemaField]:
    logging.info("Sampling rows and infer schema")
    rows = table.read_rows()
    table_schema = []
    column_names = []
    cf_tracking = []
    row_count = 0
    for row in rows:
        for cf, cols in sorted(row.cells.items()):
            if cf not in cf_tracking:
                table_schema.append(build_column_family_schema(cf))
                cf_tracking.append(cf)
            for col, cells in sorted(cols.items()):
                if col not in column_names:
                    column_names.append(col)
                    table_schema.append(build_column_schema(cf, col))
        row_count += 1
        if row_count == schema_sampling_size:
            break

    return table_schema


def build_column_family_schema(cf) -> SchemaField:
    return SchemaField(
        fieldPath=cf,
        nativeDataType="ColumnFamily",
        type=SchemaFieldDataType(type=_field_type_mapping[dict]()),
        description=None,
        nullable=True,
        recursive=False,

    )


def build_column_schema(cf, col) -> SchemaField:
    return SchemaField(
        fieldPath=".".join([cf, col.decode('utf-8', errors='ignore')]),
        nativeDataType=bytes.__name__,
        type=SchemaFieldDataType(type=_field_type_mapping[bytes]()),
        description=None,
        nullable=True,
        recursive=False,
    )


@dataclass
class BigTableSource(StatefulIngestionSourceBase):

    config: BigTableSourceConfig
    report: SourceReport
    platform: str = "bigtable"

    def __init__(self, config: BigTableSourceConfig, ctx: PipelineContext):
        super().__init__(config, ctx)
        self.config = config
        self.bt_client = bigtable.Client(admin=True)
        self.bt_instance = self.bt_client.instance(config.instance_name)
        self.report = SourceReport()

    @classmethod
    def create(cls, config_dict, ctx):
        if 'platform_instance' not in config_dict:
            config_dict['platform_instance'] = config_dict['instance_name']
        config = BigTableSourceConfig.parse_obj(config_dict)
        return cls(config, ctx)

    def get_workunits(self) -> Iterable[MetadataWorkUnit]:
        logging.info("Processing work units")
        for i, mce in enumerate(iterate_bt_tables(self.bt_instance, self.platform, self.config)):
            wu = MetadataWorkUnit(f"bigtable://{self.config.instance_name}:{i}", mce)
            self.report.report_workunit(wu)
            yield wu
            if self.is_stateful_ingestion_configured():
                self._add_table_to_checkpoint(dataset_urn_to_key(mce.proposedSnapshot.urn).name.split(".")[-1])
        if self.is_stateful_ingestion_configured():
            # Clean up stale entities.
            yield from self.gen_removed_entity_workunits()

    def is_checkpointing_enabled(self, job_id: JobId) -> bool:
        if (
                job_id == self.get_default_ingestion_job_id()
                and self.is_stateful_ingestion_configured()
                and self.config.stateful_ingestion
                and self.config.stateful_ingestion.remove_stale_metadata
        ):
            return True

        return False

    def get_default_ingestion_job_id(self) -> JobId:
        return JobId("ingest_from_bigtable_source")

    def get_platform_instance_id(self) -> str:
        assert self.config.platform_instance is not None
        return self.config.platform_instance

    def create_checkpoint(self, job_id: JobId) -> Optional[Checkpoint]:
        assert self.ctx.pipeline_name is not None
        if job_id == self.get_default_ingestion_job_id():
            return Checkpoint(
                job_name=job_id,
                pipeline_name=self.ctx.pipeline_name,
                platform_instance_id=self.get_platform_instance_id(),
                run_id=self.ctx.run_id,
                config=self.config,
                state=BigTableCheckpointState(),
            )
        return None

    def _add_table_to_checkpoint(self, table: str) -> None:
        cur_checkpoint = self.get_current_checkpoint(
            self.get_default_ingestion_job_id()
        )
        if cur_checkpoint is not None:
            checkpoint_state = cast(BigTableCheckpointState, cur_checkpoint.state)
            checkpoint_state.add_tables_urn(
                make_dataset_urn_with_platform_instance(
                    platform=self.platform,
                    name=table,
                    platform_instance=self.config.platform_instance,
                    env=self.config.env,
                )
            )

    def gen_removed_entity_workunits(self) -> Iterable[MetadataWorkUnit]:
        last_checkpoint = self.get_last_checkpoint(
            self.get_default_ingestion_job_id(), BigTableCheckpointState
        )
        cur_checkpoint = self.get_current_checkpoint(
            self.get_default_ingestion_job_id()
        )
        if (
                self.config.stateful_ingestion
                and self.config.stateful_ingestion.remove_stale_metadata
                and last_checkpoint is not None
                and last_checkpoint.state is not None
                and cur_checkpoint is not None
                and cur_checkpoint.state is not None
        ):
            logging.info("Checking for stale entity removal.")

            def soft_delete_dataset(urn: str, type: str) -> Iterable[MetadataWorkUnit]:
                logging.info(f"Soft-deleting stale entity of type {type} - {urn}.")
                mcp = MetadataChangeProposalWrapper(
                    entityType="dataset",
                    entityUrn=urn,
                    changeType=ChangeTypeClass.UPSERT,
                    aspectName="status",
                    aspect=Status(removed=True),
                )
                wu = MetadataWorkUnit(id=f"soft-delete-{type}-{urn}", mcp=mcp)
                self.report.report_workunit(wu)
                yield wu

            last_checkpoint_state = cast(BigTableCheckpointState, last_checkpoint.state)
            cur_checkpoint_state = cast(BigTableCheckpointState, cur_checkpoint.state)

            for table_urn in last_checkpoint_state.get_table_urns_not_in(
                    cur_checkpoint_state
            ):
                yield from soft_delete_dataset(table_urn, "table")

    def get_report(self):
        return self.report

    def close(self):
        self.prepare_for_commit()
        self.bt_client.close()
