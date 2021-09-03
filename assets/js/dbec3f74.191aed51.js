(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[846],{4137:function(n,e,t){"use strict";t.d(e,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),u=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},d=function(n){var e=u(n.components);return a.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return t?a.createElement(h,o(o({ref:e},d),{},{components:t})):a.createElement(h,o({ref:e},d))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3986:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=t(2122),r=t(9756),i=(t(7294),t(4137)),o=["components"],l={title:"DataHub GMS GraphQL Service",sidebar_label:"GMS GraphQL Service",slug:"/datahub-gms-graphql-service",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/datahub-gms-graphql-service/README.md"},s="DataHub GMS GraphQL Service",u={unversionedId:"datahub-gms-graphql-service/README",id:"datahub-gms-graphql-service/README",isDocsHomePage:!1,title:"DataHub GMS GraphQL Service",description:"Disclaimer: DataHub's standalone GraphQL Service is now deprecated. The GraphQL API is now served from the Metadata Service directly.",source:"@site/genDocs/datahub-gms-graphql-service/README.md",sourceDirName:"datahub-gms-graphql-service",slug:"/datahub-gms-graphql-service",permalink:"/docs/datahub-gms-graphql-service",editUrl:"https://github.com/linkedin/datahub/blob/master/datahub-gms-graphql-service/README.md",version:"current",frontMatter:{title:"DataHub GMS GraphQL Service",sidebar_label:"GMS GraphQL Service",slug:"/datahub-gms-graphql-service",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/datahub-gms-graphql-service/README.md"},sidebar:"overviewSidebar",previous:{title:"Metadata Service (Also known as GMS)",permalink:"/docs/metadata-service"},next:{title:"MetadataAuditEvent (MAE) Consumer Job",permalink:"/docs/metadata-jobs/mae-consumer-job"}},d=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Start via Docker image",id:"start-via-docker-image",children:[]},{value:"Start via command line",id:"start-via-command-line",children:[]},{value:"API Calls",id:"api-calls",children:[]},{value:"Sample API Calls",id:"sample-api-calls",children:[{value:"Query Dataset",id:"query-dataset",children:[]},{value:"Query MLModel",id:"query-mlmodel",children:[]},{value:"Query DataFlow",id:"query-dataflow",children:[]},{value:"Query DataJob",id:"query-datajob",children:[]}]}],p={toc:d};function c(n){var e=n.components,t=(0,r.Z)(n,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-gms-graphql-service"},"DataHub GMS GraphQL Service"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Disclaimer"),": DataHub's standalone GraphQL Service is now deprecated. The GraphQL API is now served from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-service"},"Metadata Service")," directly.\nTo explore the GraphQL Query & Mutation types, visit ",(0,i.kt)("inlineCode",{parentName:"p"},"<your-datahub-url>/api/graphiql"),". ")),(0,i.kt)("p",null,"Datahub GMS GraphQL Service wraps the Generalized Metadata Store (GMS) Rest.li calls around a GraphQL API."),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need to have ",(0,i.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8"),"\ninstalled on your machine to be able to build ",(0,i.kt)("inlineCode",{parentName:"li"},"Datahub GMS GraphQL Service"),".")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"To build ",(0,i.kt)("inlineCode",{parentName:"p"},"Datahub GMS GraphQL Service")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew :datahub-gms-graphql-service:build")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Before starting ",(0,i.kt)("inlineCode",{parentName:"p"},"Datahub GMS GraphQL Service"),", you need to make sure that ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-service"},"DataHub GMS")," is up and running."),(0,i.kt)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,i.kt)("p",null,"Quickest way to try out ",(0,i.kt)("inlineCode",{parentName:"p"},"Datahub GMS Graphql Service")," is running the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms-graphql-service"},"Docker image"),"."),(0,i.kt)("h2",{id:"start-via-command-line"},"Start via command line"),(0,i.kt)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,i.kt)("a",{parentName:"p",href:"#build"},"build"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./gradlew :datahub-gms-graphql-service:bootRun\n")),(0,i.kt)("h2",{id:"api-calls"},"API Calls"),(0,i.kt)("p",null,"Inorder to Start using the graphql API we would recommend you download ",(0,i.kt)("a",{parentName:"p",href:"https://www.electronjs.org/apps/graphiql"},"GraphiQL")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Endpoint"),": http://localhost:8091/graphql"),(0,i.kt)("h2",{id:"sample-api-calls"},"Sample API Calls"),(0,i.kt)("h3",{id:"query-dataset"},"Query Dataset"),(0,i.kt)("p",null,"Request: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)") {\n    urn\n    platform\n    name\n    origin\n    description\n    platformNativeType\n    uri\n    tags\n    ownership {\n      owners {\n        owner {\n          username\n          urn\n          info {\n            displayName\n            email\n            fullName\n            manager {\n              urn\n            }\n          }\n          editableInfo {\n            aboutMe\n            skills\n          }\n        }\n        type\n        source {\n          url\n        }\n      }\n      lastModified {\n        actor\n      }\n    }\n    created {\n      actor\n    }\n    lastModified {\n      actor\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Sample Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "dataset": {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)",\n      "platform": "urn:li:dataPlatform:foo",\n      "name": "bar",\n      "origin": "PROD",\n      "description": "Sample Dataset",\n      "platformNativeType": null,\n      "uri": null,\n      "tags": [\n        "Datahub",\n        "Sample"\n      ],\n      "ownership": {\n        "owners": [\n          {\n            "owner": {\n              "username": "fbar",\n              "urn": "urn:li:corpuser:fbar",\n              "info": {\n                "displayName": "Foo Bar",\n                "email": "fbar@linkedin.com",\n                "fullName": "Foo Bar",\n                "manager": {\n                  "urn": "urn:li:corpuser:datahub"\n                }\n              },\n              "editableInfo": {\n                "aboutMe": "About Me",\n                "skills": [\n                  "Java",\n                  "SQL"\n                ]\n              }\n            },\n            "type": "DATAOWNER",\n            "source": null\n          }\n        ],\n        "lastModified": {\n          "actor": "urn:li:corpuser:fbar"\n        }\n      },\n      "created": {\n        "actor": "urn:li:corpuser:fbar"\n      },\n      "lastModified": {\n        "actor": "urn:li:corpuser:fbar"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"query-mlmodel"},"Query MLModel"),(0,i.kt)("p",null,"Sample Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  mlModel(urn: "urn:li:mlModel:(urn:li:dataPlatform:science,scienceModel,PROD)") {\n    urn\n    type\n    name\n    origin\n    description\n    tags\n    ownership {\n      owners {\n        owner {\n          urn\n          username\n          editableInfo {\n            pictureLink\n          }\n          info {\n            firstName\n          }\n        }\n        type\n        source {\n          type\n          url\n        }\n      }\n    }\n    properties {\n      description\n      date\n      version\n      type\n      hyperParameters {\n        key\n        value {\n          ...on StringBox {\n            stringValue\n          }\n          ... on IntBox {\n            intValue\n          }\n          ... on FloatBox {\n            floatValue\n          }\n          ... on BooleanBox {\n            booleanValue\n          }\n        }\n      }\n      mlFeatures\n      tags\n    }\n    status {\n      removed\n    }\n    institutionalMemory {\n      elements {\n        url\n        description\n        created {\n          actor\n        }\n      }\n    }\n    intendedUse {\n      primaryUses\n      primaryUsers\n      outOfScopeUses\n    }\n    factorPrompts {\n      relevantFactors {\n        groups\n        instrumentation\n        environment\n      }\n      evaluationFactors {\n        groups\n        instrumentation\n        environment\n      }\n    }\n    metrics {\n      decisionThreshold\n      performanceMeasures\n    }\n    trainingData {\n      dataset\n      motivation\n      preProcessing\n    }\n    evaluationData {\n      dataset\n      motivation\n      preProcessing\n    }\n    quantitativeAnalyses {\n      unitaryResults {\n        ...on StringBox {\n          stringValue\n        }\n      }\n      intersectionalResults {\n        ...on StringBox {\n          stringValue\n        }\n      }\n    }\n    ethicalConsiderations {\n      useCases\n      humanLife\n      mitigations\n      risksAndHarms\n      useCases\n      data\n    }\n    caveatsAndRecommendations {\n      caveats {\n        caveatDescription\n        needsFurtherTesting\n        groupsNotRepresented\n      }\n      recommendations \n      idealDatasetCharacteristics\n    }\n    cost {\n      costType\n      costValue {\n        costId\n        costCode\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Sample Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "mlModel": {\n      "urn": "urn:li:mlModel:(urn:li:dataPlatform:science,scienceModel,PROD)",\n      "type": "MLMODEL",\n      "name": "scienceModel",\n      "origin": "PROD",\n      "description": "A sample model for predicting some outcome.",\n      "tags": [\n        "Sample"\n      ],\n      "ownership": {\n        "owners": [\n          {\n            "owner": {\n              "urn": "urn:li:corpuser:jdoe",\n              "username": "jdoe",\n              "editableInfo": null,\n              "info": {\n                "firstName": null\n              }\n            },\n            "type": "DATAOWNER",\n            "source": null\n          },\n          {\n            "owner": {\n              "urn": "urn:li:corpuser:datahub",\n              "username": "datahub",\n              "editableInfo": {\n                "pictureLink": "https://raw.githubusercontent.com/linkedin/datahub/master/datahub-web-react/src/images/default_avatar.png"\n              },\n              "info": {\n                "firstName": null\n              }\n            },\n            "type": "DATAOWNER",\n            "source": null\n          }\n        ]\n      },\n      "properties": {\n        "description": "A sample model for predicting some outcome.",\n        "date": null,\n        "version": null,\n        "type": "Naive Bayes classifier",\n        "hyperParameters": null,\n        "mlFeatures": null,\n        "tags": [\n          "Sample"\n        ]\n      },\n      "status": {\n        "removed": false\n      },\n      "institutionalMemory": {\n        "elements": [\n          {\n            "url": "https://www.linkedin.com",\n            "description": "Sample doc",\n            "created": {\n              "actor": "urn:li:corpuser:jdoe"\n            }\n          }\n        ]\n      },\n      "intendedUse": {\n        "primaryUses": [\n          "Sample Model",\n          "Primary Use"\n        ],\n        "primaryUsers": [\n          "ENTERPRISE"\n        ],\n        "outOfScopeUses": [\n          "Production Deployment"\n        ]\n      },\n      "factorPrompts": null,\n      "metrics": {\n        "decisionThreshold": [\n          "decisionThreshold"\n        ],\n        "performanceMeasures": [\n          "performanceMeasures"\n        ]\n      },\n      "trainingData": [\n        {\n          "dataset": "urn:li:dataset:(urn:li:dataPlatform:hive,pageViewsHive,PROD)",\n          "motivation": "For science!",\n          "preProcessing": [\n            "Aggregation"\n          ]\n        }\n      ],\n      "evaluationData": [\n        {\n          "dataset": "urn:li:dataset:(urn:li:dataPlatform:hive,pageViewsHive,PROD)",\n          "motivation": null,\n          "preProcessing": null\n        }\n      ],\n      "quantitativeAnalyses": null,\n      "ethicalConsiderations": {\n        "useCases": [\n          "useCases"\n        ],\n        "humanLife": [\n          "humanLife"\n        ],\n        "mitigations": [\n          "mitigations"\n        ],\n        "risksAndHarms": [\n          "risksAndHarms"\n        ],\n        "data": [\n          "data"\n        ]\n      },\n      "caveatsAndRecommendations": {\n        "caveats": null,\n        "recommendations": "recommendations",\n        "idealDatasetCharacteristics": [\n          "idealDatasetCharacteristics"\n        ]\n      },\n      "cost": {\n        "costType": "ORG_COST_TYPE",\n        "costValue": {\n          "costId": null,\n          "costCode": "costCode"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"query-dataflow"},"Query DataFlow"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  dataFlow(urn: "urn:li:dataFlow:(airflow,flow1,foo)") {\n    urn\n    type\n    orchestrator\n    flowId\n    info {\n      name\n      description\n      project\n    }\n    ownership {\n      owners {\n        owner {\n          username\n          urn\n          info {\n            displayName\n            email\n            fullName\n            manager {\n              urn\n            }\n          }\n          editableInfo {\n            aboutMe\n            skills\n          }\n        }\n        type\n        source {\n          url\n        }\n      }\n      lastModified {\n        actor\n      }\n    }\n    }\n}\n')),(0,i.kt)("p",null,"Sample response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "dataFlow": {\n      "urn": "urn:li:dataFlow:(airflow,flow1,foo)",\n      "type": "DATA_FLOW",\n      "orchestrator": "airflow",\n      "flowId": "flow1",\n      "info": {\n        "name": "flow1",\n        "description": "My own workflow",\n        "project": "X"\n      },\n      "ownership": {\n        "owners": [\n          {\n            "owner": {\n              "username": "test-user",\n              "urn": "urn:li:corpuser:test-user",\n              "info": null,\n              "editableInfo": null\n            },\n            "type": "DEVELOPER",\n            "source": null\n          }\n        ],\n        "lastModified": {\n          "actor": "urn:li:corpuser:datahub"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"query-datajob"},"Query DataJob"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  dataJob(urn: "urn:li:dataJob:(urn:li:dataFlow:(airflow,flow1,foo),task1)") {\n    urn\n    type\n    jobId\n    dataFlow {\n      urn\n      flowId\n    }\n    inputOutput {\n      inputDatasets {\n        urn\n        name\n      }\n      outputDatasets {\n        urn\n        name\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Sample response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "dataJob": {\n      "urn": "urn:li:dataJob:(urn:li:dataFlow:(airflow,flow1,foo),task1)",\n      "type": "DATA_JOB",\n      "jobId": "task1",\n      "dataFlow": {\n        "urn": "urn:li:dataFlow:(airflow,flow1,foo)",\n        "flowId": "flow1"\n      },\n      "inputOutput": {\n        "inputDatasets": [\n          {\n            "urn": "urn:li:dataset:(urn:li:dataPlatform:redis,stuff,PROD)",\n            "name": "stuff"\n          }\n        ],\n        "outputDatasets": []\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);