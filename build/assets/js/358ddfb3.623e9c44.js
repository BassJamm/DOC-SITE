"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2308],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return t?o.createElement(f,i(i({ref:r},u),{},{components:t})):o.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8840:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:3,id:"Restore Errors",title:"Restore Errors",tags:["VBO"]},i=void 0,s={unversionedId:"Veeam Backup for O365/Restore Errors",id:"Veeam Backup for O365/Restore Errors",title:"Restore Errors",description:"Capturing information on the restoration errors.",source:"@site/docs/Veeam Backup for O365/Restore Errors.md",sourceDirName:"Veeam Backup for O365",slug:"/Veeam Backup for O365/Restore Errors",permalink:"/docs/Veeam Backup for O365/Restore Errors",draft:!1,tags:[{label:"VBO",permalink:"/docs/tags/vbo"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"Restore Errors",title:"Restore Errors",tags:["VBO"]},sidebar:"tutorialSidebar",previous:{title:"Removing data and licenses",permalink:"/docs/Veeam Backup for O365/Removing data and licenses"},next:{title:"Azure Cli",permalink:"/docs/category/azure-cli"}},l={},c=[{value:"Failing to open mailbox",id:"failing-to-open-mailbox",level:2},{value:"Scenario",id:"scenario",level:3},{value:"The error",id:"the-error",level:3},{value:"Solution",id:"solution",level:3}],u={toc:c};function p(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Capturing information on the restoration errors."),(0,n.kt)("h2",{id:"failing-to-open-mailbox"},"Failing to open mailbox"),(0,n.kt)("h3",{id:"scenario"},"Scenario"),(0,n.kt)("p",null,"Your Veeam Backup for Office 365 solution is pretty new and it's being tested or you've a member of your team who always gets this error for some reason."),(0,n.kt)("h3",{id:"the-error"},"The error"),(0,n.kt)("p",null,"Failed to access mailbox. Mailbox does not exist.\n",(0,n.kt)("img",{alt:"screenshot of error",src:t(397).Z,width:"914",height:"244"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This issue mostly presents that error when you're using Modern Authentication.")),(0,n.kt)("h3",{id:"solution"},"Solution"),(0,n.kt)("p",null,"It turns out that in order to restore objects the user who authenticates to do the restore action must have the impersonation role, this is a custom role that you need to create via command line."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"restore using Modern Auth",src:t(724).Z,width:"1004",height:"448"})))}p.isMDXComponent=!0},397:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/VBO_RestoreErrors_FailingToOpenMailbox-9196400fbe32a808925a67797e1b5609.png"},724:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/VBO_RestoreErrors_FailingToOpenMailbox_Img2-bb8eb0d440749b2eeaabeeb5b77fa077.png"}}]);