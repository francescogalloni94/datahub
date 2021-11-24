"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4904],{4137:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,p=h["".concat(d,".").concat(m)]||h[m]||u[m]||i;return a?r.createElement(p,o(o({ref:t},l),{},{components:a})):r.createElement(p,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7693:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var r=a(7462),n=a(3366),i=(a(7294),a(4137)),o=["components"],s={title:"Serving Tier",sidebar_label:"Serving Tier",slug:"/architecture/metadata-serving",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/architecture/metadata-serving.md"},d="DataHub Serving Architecture",c={unversionedId:"docs/architecture/metadata-serving",id:"docs/architecture/metadata-serving",isDocsHomePage:!1,title:"Serving Tier",description:"The figure below shows the high-level system diagram for DataHub's Serving Tier.",source:"@site/genDocs/docs/architecture/metadata-serving.md",sourceDirName:"docs/architecture",slug:"/architecture/metadata-serving",permalink:"/docs/architecture/metadata-serving",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/architecture/metadata-serving.md",tags:[],version:"current",frontMatter:{title:"Serving Tier",sidebar_label:"Serving Tier",slug:"/architecture/metadata-serving",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/architecture/metadata-serving.md"},sidebar:"overviewSidebar",previous:{title:"Ingestion Framework",permalink:"/docs/architecture/metadata-ingestion"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},l=[{value:"DataHub Serving Tier Components",id:"datahub-serving-tier-components",children:[{value:"Metadata Storage",id:"metadata-storage",children:[],level:3},{value:"Metadata Commit Log Stream (MAE)",id:"metadata-commit-log-stream-mae",children:[],level:3},{value:"Metadata Index Applier (mae-consumer-job)",id:"metadata-index-applier-mae-consumer-job",children:[],level:3},{value:"Metadata Query Serving",id:"metadata-query-serving",children:[],level:3},{value:"Further Reading",id:"further-reading",children:[],level:3}],level:2}],u={toc:l};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-serving-architecture"},"DataHub Serving Architecture"),(0,i.kt)("p",null,"The figure below shows the high-level system diagram for DataHub's Serving Tier. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"datahub-serving",src:a(7096).Z})),(0,i.kt)("p",null,"The primary service is called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-service"},"gms")," and exposes a REST API and a GraphQL API for performing CRUD operations on metadata. The metadata service also exposes search and graph query API-s to support secondary-index style queries, full-text search queries as well as relationship queries like lineage. In addition, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-frontend"},"datahub-frontend")," service expose a GraphQL API on top of the metadata graph. "),(0,i.kt)("h2",{id:"datahub-serving-tier-components"},"DataHub Serving Tier Components"),(0,i.kt)("h3",{id:"metadata-storage"},"Metadata Storage"),(0,i.kt)("p",null,"The DataHub Metadata Service (gms) persists metadata in a document store (could be an RDBMS like MySQL, Postgres or a key-value store like Couchbase etc.). "),(0,i.kt)("h3",{id:"metadata-commit-log-stream-mae"},"Metadata Commit Log Stream (MAE)"),(0,i.kt)("p",null,"The DataHub Service Tier also emits a commit event ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/mxe#metadata-audit-event-mae"},"Metadata Audit Event (MAE)")," when a metadata change has been successfully committed to persistent storage. This event is sent over Kafka. "),(0,i.kt)("p",null,"The MAE stream is a public API and can be subscribed to by external systems providing an extremely powerful way to react in real-time to changes happening in metadata. For example, you could build an access control enforcer that reacts to change in metadata (e.g. a previously world-readable dataset now has a pii field) to immediately lock down the dataset in question.\nNote that not all MCE-s will result in an MAE, because the DataHub serving tier will ignore any duplicate changes to metadata."),(0,i.kt)("h3",{id:"metadata-index-applier-mae-consumer-job"},"Metadata Index Applier (mae-consumer-job)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/what/mxe#metadata-audit-event-mae"},"MAE"),"-s are consumed by another Kafka Streams job, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mae-consumer-job"},"mae-consumer-job"),", which applies the changes to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/graph"},"graph")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/search-index"},"search index")," accordingly.\nThe job is entity-agnostic and will execute corresponding graph & search index builders, which will be invoked by the job when a specific metadata aspect is changed.\nThe builder should instruct the job how to update the graph and search index based on the metadata change.\nThe builder can optionally use ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-serving#remote-dao"},"Remote DAO")," to fetch additional metadata from other sources to help compute the final update."),(0,i.kt)("p",null,"To ensure that metadata changes are processed in the correct chronological order, MAEs are keyed by the entity ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/urn"},"URN")," \u2014 meaning all MAEs for a particular entity will be processed sequentially by a single Kafka streams thread. "),(0,i.kt)("h3",{id:"metadata-query-serving"},"Metadata Query Serving"),(0,i.kt)("p",null,"Primary-key based reads (e.g. getting schema metadata for a dataset based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataset-urn"),") on metadata are routed to the document store. Secondary index based reads on metadata are routed to the search index (or alternately can use the strongly consistent secondary index support described ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docs/architecture/"},"here"),"). Full-text and advanced search queries are routed to the search index. Complex graph queries such as lineage are routed to the graph index. "),(0,i.kt)("h3",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/how/build-metadata-service"},"metadata service developer guide")," to understand how to customize the DataHub metadata service tier. "))}h.isMDXComponent=!0},7096:function(e,t,a){t.Z=a.p+"assets/images/datahub-serving-0a1f223ecb2d809052fd1eed539b0b3a.png"}}]);