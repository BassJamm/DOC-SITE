"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,h=p["".concat(l,".").concat(g)]||p[g]||m[g]||n;return r?o.createElement(h,s(s({ref:t},u),{},{components:r})):o.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={slug:"Azure Permission & Resource Management",title:"Azure Permission & Resource Management",author:"itjamm",tags:["KB","Azure","Permissions"]},s=void 0,i={permalink:"/blog/Azure Permission & Resource Management",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/test-post.md",source:"@site/blog/test-post.md",title:"Azure Permission & Resource Management",description:"Something that can be quite annoying to grasp are the varying permission levels and roles involved in the Microsoft Cloud platforms.",date:"2023-01-03T12:36:46.720Z",formattedDate:"January 3, 2023",tags:[{label:"KB",permalink:"/blog/tags/kb"},{label:"Azure",permalink:"/blog/tags/azure"},{label:"Permissions",permalink:"/blog/tags/permissions"}],readingTime:3.21,hasTruncateMarker:!0,authors:[{name:"itjamm"}],frontMatter:{slug:"Azure Permission & Resource Management",title:"Azure Permission & Resource Management",author:"itjamm",tags:["KB","Azure","Permissions"]}},l={authorsImageUrls:[void 0]},c=[{value:"The 4 management levels",id:"the-4-management-levels",level:2},{value:"Managing Access to resources",id:"managing-access-to-resources",level:2},{value:"Resource tagging",id:"resource-tagging",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Something that can be quite annoying to grasp are the varying permission levels and roles involved in the Microsoft Cloud platforms."),(0,a.kt)("p",null,"For the most part, us techies will learn from the group up starting from on-prem NTFS\\Share permissions, to have then to learn Office 365 roles."),(0,a.kt)("p",null,"Now we've got those two down, time to shove another layer on top which is the permissions inside Azure, hopefully the below can simplify this for you."),(0,a.kt)("h2",{id:"the-4-management-levels"},"The 4 management levels"),(0,a.kt)("p",null,"The below is nothing original by the way, I've lifted it and re-written the concepts into another format from a Microsoft docs article here, you may prefer their version."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-setup-guide/organize-resources"},"Organize your Azure resources effectively")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Management group"),"s help to manage access via policy and compliance over multiple subscriptions. When a subscription is part of a management group, it'll automatically inherit all conditionas\\settings setup in the management group."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Subscriptions")," logically associate permissions with resources they create. Each individual subscription has limits\\quotas regarding the amount of resources it can create\\use. Subscriptions also help to organise costs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resource Groups")," are logical containers, where you can deploy Azure resources to; you could think of them being along the lines of Folders. You can also apply tags to help better manage resources and what they're for."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resources")," are instances of services that you can create."),(0,a.kt)("h2",{id:"managing-access-to-resources"},"Managing Access to resources"),(0,a.kt)("p",null,"We should always plan for the least privileges required to allow a team to work, the permission model in Azure is designed to allow this however, I'd say it is so granular that it generates more work that necessary in most cases."),(0,a.kt)("p",null,"Here's a basic list from my experience setting up a permission model in the past; it covers a service desk team."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Call Agent team - No access to Azure resources."),(0,a.kt)("li",{parentName:"ul"},"Level 1, 2 and 3 teams - Reader access at the Subscription level, providing Contributor role at the Resource Group or Resource level where appropriate."),(0,a.kt)("li",{parentName:"ul"},'Infrastructure - If the team also performs security functions, I would suggest the Contributor role be assigned of at the Subscription Level where appropriate and to assign the Owner role at the resource group level where the Infrastructure they "own" is situated.')),(0,a.kt)("p",null,"Permission elevation controls and experience levels should be taken into account. In previous companies, I'd trust the L2 team to have the same access as L3 and, in some cases I'd not even consider it!"),(0,a.kt)("p",null,"You can also control Service Desk team access using Change Control. Asking them to justify their access requirements via a change process not only allows others to check what they're doing, it could also show that they do not need to access rights in the first place."),(0,a.kt)("p",null,"Speaking from experience, I'd highly recommend trusting your Infrastructure team to have the Contributor role at the Subscription level where possible. It will make a lot of difference to all teams \"quality of life\" if they've access to someone who can carry out actions they cannot."),(0,a.kt)("h2",{id:"resource-tagging"},"Resource tagging"),(0,a.kt)("p",null,"Tags can be an absolute godsent and can help you to quickly identify your resources and resource groups. You apply tags to your Azure resources and resource groups to logically organize them into categories.  "),(0,a.kt)("p",null,"Tags can include context about the resource's associated workload or application, operational requirements, and ownership information."),(0,a.kt)("p",null,"Some suggested uses for tags;\n",(0,a.kt)("strong",{parentName:"p"},"Metadata and documentation"),", Admins can apply a tag to all resources matching a specific workload or project.\n",(0,a.kt)("strong",{parentName:"p"},"Automation"),", you can target a tag for scripts etc.\n",(0,a.kt)("strong",{parentName:"p"},"Cost analysis"),", this is the most common use case that I've come across for tags."),(0,a.kt)("p",null,"Each resource or resource group can have a maximum of 50 tag name and value pairs. This limitation only applies to tags directly applied to the resource group or resource."),(0,a.kt)("p",null,"That turned out to be a little longer than I'd hoped for, with any luck it'll be of some use."))}p.isMDXComponent=!0}}]);