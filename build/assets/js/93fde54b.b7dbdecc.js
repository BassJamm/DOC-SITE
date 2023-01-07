"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),h=i,w=u["".concat(c,".").concat(h)]||u[h]||d[h]||l;return r?n.createElement(w,a(a({ref:t},p),{},{components:r})):n.createElement(w,a({ref:t},p))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const l={sidebar_position:2,id:"Manage Active Directory with PowerShell",title:"Manage Active Directory with PowerShell",tags:["PowerShell","AD"]},a="Manging AD with PowerShell",o={unversionedId:"Articles/PowerShell/Manage Active Directory with PowerShell",id:"Articles/PowerShell/Manage Active Directory with PowerShell",title:"Manage Active Directory with PowerShell",description:"Filter by an attribute",source:"@site/docs/Articles/PowerShell/Manage Active Directory with PowerShell.md",sourceDirName:"Articles/PowerShell",slug:"/Articles/PowerShell/Manage Active Directory with PowerShell",permalink:"/docs/Articles/PowerShell/Manage Active Directory with PowerShell",draft:!1,tags:[{label:"PowerShell",permalink:"/docs/tags/power-shell"},{label:"AD",permalink:"/docs/tags/ad"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Manage Active Directory with PowerShell",title:"Manage Active Directory with PowerShell",tags:["PowerShell","AD"]},sidebar:"tutorialSidebar",previous:{title:"Assign Managed Identity permissions",permalink:"/docs/Articles/PowerShell/Assign Managed Identity permissions"},next:{title:"Export AAD Secrets and Certs",permalink:"/docs/Articles/PowerShell/Export AAD Secrets and Certs"}},c={},s=[{value:"Filter by an attribute",id:"filter-by-an-attribute",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manging-ad-with-powershell"},"Manging AD with PowerShell"),(0,i.kt)("h2",{id:"filter-by-an-attribute"},"Filter by an attribute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"\n# Filter mail address is like & the user has to be enabled.\nGet-ADUser -Filter \"Mail -like '*@<domain>co.uk' -and enabled -eq '$true'\" | Select Name, UserPrincipalname\n\n# Fitler where user is disabled.\nGet-ADUser -Filter 'enabled -eq $false' | Select name, DistinguishedName\n\n")))}u.isMDXComponent=!0}}]);