"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5,id:"Automation Account Setup Cheatsheet",title:"Automation Account Setup Cheatsheet",tags:["Azure"]},i=void 0,s={unversionedId:"Azure Resources Management/Automation Account Setup Cheatsheet",id:"Azure Resources Management/Automation Account Setup Cheatsheet",title:"Automation Account Setup Cheatsheet",description:"Microsoft doc - Create a standalone Azure Automation account.",source:"@site/docs/Azure Resources Management/Automation Account Setup Cheatsheet.md",sourceDirName:"Azure Resources Management",slug:"/Azure Resources Management/Automation Account Setup Cheatsheet",permalink:"/docs/Azure Resources Management/Automation Account Setup Cheatsheet",draft:!1,tags:[{label:"Azure",permalink:"/docs/tags/azure"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"Automation Account Setup Cheatsheet",title:"Automation Account Setup Cheatsheet",tags:["Azure"]},sidebar:"tutorialSidebar",previous:{title:"Azure Backup Setup CheatSheet",permalink:"/docs/Azure Resources Management/Azure Backup Setup CheatSheet"},next:{title:"Assign Managed Identity permissions via CMDLine",permalink:"/docs/Azure Resources Management/Assign Managed Identity permissions via CMDLine"}},u={},c=[{value:"1. Creating the Automation Account",id:"1-creating-the-automation-account",level:2},{value:"1.1. Considerations",id:"11-considerations",level:3},{value:"1.2. Creation steps",id:"12-creation-steps",level:3},{value:"1.2.1. Using a system-assigned managed identity",id:"121-using-a-system-assigned-managed-identity",level:4},{value:"2. Notes",id:"2-notes",level:2},{value:"2.1. Managed Identity",id:"21-managed-identity",level:3}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-gb/azure/automation/automation-create-standalone-account?tabs=azureportal"},"Microsoft doc - Create a standalone Azure Automation account"),"."),(0,o.kt)("h2",{id:"1-creating-the-automation-account"},"1. Creating the Automation Account"),(0,o.kt)("h3",{id:"11-considerations"},"1.1. Considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Naming convention."),(0,o.kt)("li",{parentName:"ul"},"Purpose of the Automation Account."),(0,o.kt)("li",{parentName:"ul"},"Will it need a Managed identity?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Naming conventions")," matter in Azure because you cannot change the name after the resource has been created, suggsted naming convention would be ",(0,o.kt)("inlineCode",{parentName:"p"},"aa-<company name>-<region>-<workload type>-<resource>-<number>"),", this would translate to ",(0,o.kt)("inlineCode",{parentName:"p"},"aa-wh-uks-prod-automationacc-001"),"."),(0,o.kt)("p",null,"The same can be said of the Resource Group, a suggested name could be ",(0,o.kt)("inlineCode",{parentName:"p"},"rg-wh-uks-prod-Automation-001"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Purpose of the resource")," is also important, are you going to use the resource for patch management, is it being specifically used for a particalar solution or workload? "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Importantly, will it be created and possibly deleted along with other resources; in which case it can live in the same resource group as those resources.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A Managed identity")," will be needed should the Automation Account need to authenticate to carry out any tasks. It will also be tied to the lifecycle of the Automation account."),(0,o.kt)("h3",{id:"12-creation-steps"},"1.2. Creation steps"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-gb/azure/automation/automation-create-standalone-account?tabs=azureportal#create-a-new-automation-account-in-the-azure-portal"},"Microsoft doc - Create a new Automation account in the Azure portal"),"."),(0,o.kt)("h4",{id:"121-using-a-system-assigned-managed-identity"},"1.2.1. Using a system-assigned managed identity"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-gb/azure/automation/enable-managed-identity-for-automation"},"Microsoft doc - Using a system-assigned managed identity for an Azure Automation account"),"."),(0,o.kt)("h2",{id:"2-notes"},"2. Notes"),(0,o.kt)("h3",{id:"21-managed-identity"},"2.1. Managed Identity"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You'll find the managed Identity itself under ",(0,o.kt)("strong",{parentName:"li"},"Enterprise App Registrations"),"."),(0,o.kt)("li",{parentName:"ul"},"You cannot assign Azure AD or Microsoft Graph roles to the System Managed Identity through the GUI, you must do this from command line. ",(0,o.kt)("a",{parentName:"li",href:"/docs/Azure%20Resources%20Management/Assign%20Managed%20Identity%20permissions%20via%20CMDLine"},"See here for more info"),".")))}p.isMDXComponent=!0}}]);