package com.linkedin.datahub.graphql.resolvers.mutate.util;

import com.google.common.collect.ImmutableList;

import com.linkedin.common.Owner;
import com.linkedin.common.OwnerArray;
import com.linkedin.common.Ownership;
import com.linkedin.common.OwnershipSource;
import com.linkedin.common.OwnershipSourceType;
import com.linkedin.common.OwnershipType;
import com.linkedin.common.urn.Urn;
import com.linkedin.datahub.graphql.QueryContext;
import com.linkedin.datahub.graphql.authorization.AuthorizationUtils;
import com.linkedin.datahub.graphql.authorization.ConjunctivePrivilegeGroup;
import com.linkedin.datahub.graphql.authorization.DisjunctivePrivilegeGroup;
import com.linkedin.datahub.graphql.generated.OwnerEntityType;
import com.linkedin.datahub.graphql.resolvers.mutate.MutationUtils;
import com.linkedin.metadata.Constants;
import com.linkedin.metadata.authorization.PoliciesConfig;
import com.linkedin.metadata.entity.EntityService;
import javax.annotation.Nonnull;
import lombok.extern.slf4j.Slf4j;

import static com.linkedin.datahub.graphql.resolvers.mutate.MutationUtils.*;


@Slf4j
public class OwnerUtils {
  private static final ConjunctivePrivilegeGroup ALL_PRIVILEGES_GROUP = new ConjunctivePrivilegeGroup(ImmutableList.of(
      PoliciesConfig.EDIT_ENTITY_PRIVILEGE.getType()
  ));

  private OwnerUtils() { }

  public static void addOwner(
      Urn ownerUrn,
      Urn resourceUrn,
      Urn actor,
      EntityService entityService
  ) {
    Ownership ownershipAspect = (Ownership) getAspectFromEntity(
        resourceUrn.toString(),
        Constants.OWNERSHIP_ASPECT_NAME,
        entityService,
        new Ownership());
    addOwner(ownershipAspect, ownerUrn);
    persistAspect(resourceUrn, Constants.OWNERSHIP_ASPECT_NAME, ownershipAspect, actor, entityService);
  }

  public static void removeOwner(
      Urn ownerUrn,
      Urn resourceUrn,
      Urn actor,
      EntityService entityService
  ) {
    Ownership ownershipAspect = (Ownership) MutationUtils.getAspectFromEntity(
        resourceUrn.toString(),
        Constants.OWNERSHIP_ASPECT_NAME,
        entityService,
        new Ownership());
    ownershipAspect.setLastModified(getAuditStamp(actor));
    removeOwner(ownershipAspect, ownerUrn);
    persistAspect(resourceUrn, Constants.OWNERSHIP_ASPECT_NAME, ownershipAspect, actor, entityService);
  }

  private static void addOwner(Ownership ownershipAspect, Urn ownerUrn) {
    if (!ownershipAspect.hasOwners()) {
      ownershipAspect.setOwners(new OwnerArray());
    }

    OwnerArray ownerArray = ownershipAspect.getOwners();

    // if owner exists, do not add it again
    if (ownerArray.stream().anyMatch(association -> association.getOwner().equals(ownerUrn))) {
      return;
    }

    Owner newOwner = new Owner();
    newOwner.setType(OwnershipType.DATAOWNER);
    newOwner.setSource(new OwnershipSource().setType(OwnershipSourceType.MANUAL));
    newOwner.setOwner(ownerUrn);
    ownerArray.add(newOwner);
  }

  private static void removeOwner(Ownership ownership, Urn ownerUrn) {
    if (!ownership.hasOwners()) {
      ownership.setOwners(new OwnerArray());
    }

    OwnerArray ownerArray = ownership.getOwners();
    ownerArray.removeIf(owner -> owner.getOwner().equals(ownerUrn));
  }

  public static boolean isAuthorizedToUpdateOwners(@Nonnull QueryContext context, Urn resourceUrn) {
    final DisjunctivePrivilegeGroup orPrivilegeGroups = new DisjunctivePrivilegeGroup(ImmutableList.of(
        ALL_PRIVILEGES_GROUP,
        new ConjunctivePrivilegeGroup(ImmutableList.of(PoliciesConfig.EDIT_ENTITY_OWNERS_PRIVILEGE.getType()))
    ));

    return AuthorizationUtils.isAuthorized(
        context.getAuthorizer(),
        context.getActorUrn(),
        resourceUrn.getEntityType(),
        resourceUrn.toString(),
        orPrivilegeGroups);
  }

  public static Boolean validateAddInput(
      Urn ownerUrn,
      OwnerEntityType ownerEntityType,
      Urn resourceUrn,
      EntityService entityService
  ) {

    if (OwnerEntityType.CORP_GROUP.equals(ownerEntityType) && !Constants.CORP_GROUP_ENTITY_NAME.equals(ownerUrn.getEntityType())) {
      throw new IllegalArgumentException(String.format("Failed to change ownership for resource %s. Expected a corp group urn.", resourceUrn));
    }

    if (OwnerEntityType.CORP_USER.equals(ownerEntityType) && !Constants.CORP_USER_ENTITY_NAME.equals(ownerUrn.getEntityType())) {
      throw new IllegalArgumentException(String.format("Failed to change ownership for resource %s. Expected a corp user urn.", resourceUrn));
    }

    if (!entityService.exists(resourceUrn)) {
      throw new IllegalArgumentException(String.format("Failed to change ownership for resource %s. Resource does not exist.", resourceUrn));
    }

    return true;
  }

  public static Boolean validateRemoveInput(
      Urn resourceUrn,
      EntityService entityService
  ) {
    if (!entityService.exists(resourceUrn)) {
      throw new IllegalArgumentException(String.format("Failed to change ownership for resource %s. Resource does not exist.", resourceUrn));
    }
    return true;
  }
}
