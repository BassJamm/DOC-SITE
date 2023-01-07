"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1,id:"AzCli Cheatsheet",title:"AzCli Cheatsheet",tags:["AzureCli","CheatSheet"]},o=void 0,i={unversionedId:"Articles/Microsoft/Azure CLi/AzCli Cheatsheet",id:"Articles/Microsoft/Azure CLi/AzCli Cheatsheet",title:"AzCli Cheatsheet",description:"This document is supposed to be a cheatsheet of commands useful when using the Azure Cli.",source:"@site/docs/Articles/Microsoft/Azure CLi/AzCli Cheatsheet.md",sourceDirName:"Articles/Microsoft/Azure CLi",slug:"/Articles/Microsoft/Azure CLi/AzCli Cheatsheet",permalink:"/docs/Articles/Microsoft/Azure CLi/AzCli Cheatsheet",draft:!1,tags:[{label:"AzureCli",permalink:"/docs/tags/azure-cli"},{label:"CheatSheet",permalink:"/docs/tags/cheat-sheet"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"AzCli Cheatsheet",title:"AzCli Cheatsheet",tags:["AzureCli","CheatSheet"]},sidebar:"tutorialSidebar",previous:{title:"Azure Cli",permalink:"/docs/category/azure-cli"},next:{title:"Microsoft Azure",permalink:"/docs/category/microsoft-azure"}},p={},s=[{value:"1. Connection",id:"1-connection",level:2},{value:"2. Object Management",id:"2-object-management",level:2},{value:"3. Deployment",id:"3-deployment",level:2},{value:"4. Delete Resources",id:"4-delete-resources",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document is supposed to be a cheatsheet of commands useful when using the Azure Cli."),(0,n.kt)("h2",{id:"1-connection"},"1. Connection"),(0,n.kt)("p",null,"Commands relating to connecting to the Azure CLi"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"az login")),(0,n.kt)("td",{parentName:"tr",align:null},"Login to Azure tenant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"az account set --subscription <subscription ID>")),(0,n.kt)("td",{parentName:"tr",align:null},"Set the scope for the session.")))),(0,n.kt)("h2",{id:"2-object-management"},"2. Object Management"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"az group list --output table")),(0,n.kt)("td",{parentName:"tr",align:null},"List resource groups as a table.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"az group create --name exampleRG --location eastus")),(0,n.kt)("td",{parentName:"tr",align:null},"Create a resource group, with a name and location.")))),(0,n.kt)("h2",{id:"3-deployment"},"3. Deployment"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"az deployment list --output table")),(0,n.kt)("td",{parentName:"tr",align:null},"List of deployments.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"az deployment group create --resource-group exampleRG --template-file main.bicep --parameters storageName=uniquename")),(0,n.kt)("td",{parentName:"tr",align:null},"Deploy storage account into an existing Resource Group.")))),(0,n.kt)("h2",{id:"4-delete-resources"},"4. Delete Resources"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"az group delete --resource-group <group name>")),(0,n.kt)("td",{parentName:"tr",align:null},"Delete resource group.")))))}u.isMDXComponent=!0}}]);