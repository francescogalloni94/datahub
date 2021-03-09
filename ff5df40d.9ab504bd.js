(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(159),i=n(160),r=(n(0),n(161)),o={title:"React App (Incubating)",hide_title:!0,slug:"/datahub-web-react",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/datahub-web-react/README.md"},l={unversionedId:"datahub-web-react/README",id:"datahub-web-react/README",isDocsHomePage:!1,title:"React App (Incubating)",description:"DataHub React App (Incubating)",source:"@site/genDocs/datahub-web-react/README.md",slug:"/datahub-web-react",permalink:"/docs/datahub-web-react",editUrl:"https://github.com/linkedin/datahub/blob/master/datahub-web-react/README.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Onboarding to GMA Search - searching over a new field",permalink:"/docs/how/search-over-new-field"},next:{title:"Frontend",permalink:"/docs/datahub-frontend"}},c=[{value:"About",id:"about",children:[]},{value:"Functional Goals",id:"functional-goals",children:[]},{value:"Design Goals",id:"design-goals",children:[]},{value:"Starting the Application",id:"starting-the-application",children:[{value:"Quick Start",id:"quick-start",children:[]}]},{value:"Design Details",id:"design-details",children:[{value:"Package Organization",id:"package-organization",children:[]}]},{value:"Adding an Entity",id:"adding-an-entity",children:[]}],b={rightToc:c};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"datahub-react-app-incubating"},"DataHub React App (Incubating)"),Object(r.b)("h2",{id:"about"},"About"),Object(r.b)("p",null,"This module contains a React version of the DataHub UI, which is currently under incubation. Notice that this\nis a completely separate frontend experience from Ember and will remain so as it evolves. "),Object(r.b)("p",null,"Feel free to take a look around, deploy, and make contributions. "),Object(r.b)("p",null,"For details about the motivation please see ",Object(r.b)("a",{parentName:"p",href:"/docs/rfc/active/2055-react-app"},"this RFC"),". "),Object(r.b)("h2",{id:"functional-goals"},"Functional Goals"),Object(r.b)("p",null,"The initial milestone for the app is to achieve functional parity with the existing Ember app. This means supporting"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Dataset Profiles, Search, Browse Experience"),Object(r.b)("li",{parentName:"ul"},"User Profiles, Search"),Object(r.b)("li",{parentName:"ul"},"LDAP Authentication Flow")),Object(r.b)("h2",{id:"design-goals"},"Design Goals"),Object(r.b)("p",null,"In building out a new client experience, we intend to build on learnings from the Ember app and incorporate feedback gathered\nfrom organizations operating DataHub. Two themes have emerged to serve as guideposts: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Configurability"),": The client experience should be configurable, such that deploying organizations can tailor certain\naspects to their needs. This includes theme / styling configurability, showing and hiding specific functionality,\ncustomizing copy & logos, etc. "),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Extensibility"),": Extending the ",Object(r.b)("em",{parentName:"li"},"functionality")," of DataHub should be as simple as possible. Making changes like\nextending an existing entity & adding a new entity should require minimal effort and should be well covered in detailed\ndocumentation. ")),Object(r.b)("h2",{id:"starting-the-application"},"Starting the Application"),Object(r.b)("h3",{id:"quick-start"},"Quick Start"),Object(r.b)("p",null,"Navigate to the ",Object(r.b)("inlineCode",{parentName:"p"},"docker")," directory and run the following to spin up the react app:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"./quickstart-react.sh\n")),Object(r.b)("p",null,"at ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:9002"),"."),Object(r.b)("p",null,"If you want to make changes to the UI see them live without having to rebuild the ",Object(r.b)("inlineCode",{parentName:"p"},"datahub-frontend-react")," docker image, you\ncan run the following in this directory:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"yarn install && yarn run start")),Object(r.b)("p",null,"which will start a forwarding server at ",Object(r.b)("inlineCode",{parentName:"p"},"localhost:3000"),". Note that to fetch real data, ",Object(r.b)("inlineCode",{parentName:"p"},"datahub-frontend")," server will also\nneed to be deployed, still at ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:9002"),", to service GraphQL API requests."),Object(r.b)("h2",{id:"design-details"},"Design Details"),Object(r.b)("h3",{id:"package-organization"},"Package Organization"),Object(r.b)("p",null,"The organization is yet subject to change as the app incubates. As of today (2/11/2021), the ",Object(r.b)("inlineCode",{parentName:"p"},"src")," dir of the app is\nbroken down into the following modules"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"conf")," - Stores global configuration flags that can be referenced across the app. For example, the number of\nsearch results shown per page, or the placeholder text in the search bar box. It serves as a location where levels\nfor functional configurability should reside. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"components")," - Contains all important components of the app. It has a few sub-modules:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"auth"),": Components used to render the user authentication experience. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"browse"),": Shared components used to render the 'browse-by-path' experience. The experience is akin to navigating a filesystem hierarchy.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"preview"),": Shared components used to render Entity 'preview' views. These can appear in search results, browse results,\nand within entity profile pages. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"search"),": Shared components used to render the full-text search experience. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"shared"),": Misc. shared components")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"entity"),": Contains Entity definitions, where entity-specific functionality resides.\nConfiguration is provided by implementing the 'Entity' interface. (See DatasetEntity.tsx for example)\nThere are 2 visual components each entity should supply:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"profiles"),": display relevant details about an individual entity. This serves as the entity's 'profile'.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"previews"),": provide a 'preview', or a smaller details card, containing the most important information about an entity instance."),Object(r.b)("p",{parentName:"li"},"  When rendering a preview, the entity's data and the type of preview (SEARCH, BROWSE, PREVIEW) are provided. This\nallows you to optionally customize the way an entities preview is rendered in different views.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"entity registry"),": There's another very important piece of code living within this module: the ",Object(r.b)("strong",{parentName:"p"},"EntityRegistry"),". This is a layer\nof abstraction over the intimate details of rendering a particular entity. It is used\nto render a view associated with a particular entity type (user, dataset, etc.)."))))),Object(r.b)("p",null,Object(r.b)("img",{alt:"entity-registry",src:n(279).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"graphql")," - The React App talks to the ",Object(r.b)("inlineCode",{parentName:"p"},"dathub-frontend")," server using GraphQL. This module is where the ",Object(r.b)("em",{parentName:"p"},"queries")," issued\nagainst the server are defined. Once defined, running ",Object(r.b)("inlineCode",{parentName:"p"},"yarn run generate")," will code-gen TypeScript objects to make invoking\nthese queries extremely easy. An example can be found at the top of ",Object(r.b)("inlineCode",{parentName:"p"},"SearchPage.tsx.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"images")," - Images to be displayed within the app. This is where one would place a custom logo image. "),Object(r.b)("h2",{id:"adding-an-entity"},"Adding an Entity"),Object(r.b)("p",null,"The following outlines a series of steps required to introduce a new entity into the React app:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Declare the GraphQL Queries required to display the new entity ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'If search functionality should be supported, extend the "search" query within ',Object(r.b)("inlineCode",{parentName:"li"},"search.graphql")," to fetch the new\nentity data."),Object(r.b)("li",{parentName:"ul"},'If browse functionality should be supported, extend the "browse" query within ',Object(r.b)("inlineCode",{parentName:"li"},"browse.graphql")," to fetch the new\nentity data. "),Object(r.b)("li",{parentName:"ul"},"If display a 'profile' should be supported (most often), introduce a new ",Object(r.b)("inlineCode",{parentName:"li"},"<entity-name>.graphql")," file that contains a\n",Object(r.b)("inlineCode",{parentName:"li"},"get")," query to fetch the entity by primary key (urn). ","Note that your new entity ",Object(r.b)("em",{parentName:"li"},"must")," implement the ",Object(r.b)("inlineCode",{parentName:"li"},"Entity")," GraphQL type interface, and thus must have a corresponding\n",Object(r.b)("inlineCode",{parentName:"li"},"EntityType"),".")))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Implement the ",Object(r.b)("inlineCode",{parentName:"li"},"Entity")," interface ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Create a new folder under ",Object(r.b)("inlineCode",{parentName:"li"},"src/components/entity")," corresponding to your entity"),Object(r.b)("li",{parentName:"ul"},"Create a class that implements the ",Object(r.b)("inlineCode",{parentName:"li"},"Entity")," interface (example: ",Object(r.b)("inlineCode",{parentName:"li"},"DatasetEntity.tsx"),")"),Object(r.b)("li",{parentName:"ul"},"Provide an implementation each method defined on the interface. ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This class specifies whether your new entity should be searchable & browsable, defines the names used to\nidentify your entity when instances are rendered in collection / when entity appears\nin the URL path, and provides the ability to render your entity given data returned by the GQL API. ")))))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Register the new entity in the ",Object(r.b)("inlineCode",{parentName:"li"},"EntityRegistry"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Update ",Object(r.b)("inlineCode",{parentName:"li"},"App.tsx")," to register an instance of your new entity. Now your entity will be accessible via the registry\nand appear in the UI. To manually retrieve the info about your entity or others, simply use an instance\nof the ",Object(r.b)("inlineCode",{parentName:"li"},"EntityRegistry"),", which is provided via ",Object(r.b)("inlineCode",{parentName:"li"},"ReactContext")," to ",Object(r.b)("em",{parentName:"li"},"all")," components in the hierarchy.\nFor example",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"entityRegistry.getCollectionName(EntityType.YOUR_NEW_ENTITY)\n")))))),Object(r.b)("p",null,"That's it! For any questions, do not hesitate to reach out on the DataHub Slack community in #datahub-react. "))}p.isMDXComponent=!0},159:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},160:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(o,".").concat(d)]||s[d]||u[d]||r;return n?i.a.createElement(h,l(l({ref:t},b),{},{components:n})):i.a.createElement(h,l({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},279:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/entity-registry-3e7b0f55701bd830ac184b8bcf9f6ce7.png"}}]);