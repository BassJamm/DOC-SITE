"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8054],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:3,id:"Exchange Online",title:"Exchange Online",tags:["Command Line","Exchange Online","PowerShell"]},l="1. Exchange Online Commands",o={unversionedId:"Code Snippets/Exchange Online",id:"Code Snippets/Exchange Online",title:"Exchange Online",description:"1.1. Get-Calendar Permissions",source:"@site/docs/Code Snippets/Exchange Online.md",sourceDirName:"Code Snippets",slug:"/Code Snippets/Exchange Online",permalink:"/Code Snippets/Exchange Online",draft:!1,tags:[{label:"Command Line",permalink:"/tags/command-line"},{label:"Exchange Online",permalink:"/tags/exchange-online"},{label:"PowerShell",permalink:"/tags/power-shell"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"Exchange Online",title:"Exchange Online",tags:["Command Line","Exchange Online","PowerShell"]},sidebar:"tutorialSidebar",previous:{title:"Bicep",permalink:"/Code Snippets/Bicep"},next:{title:"Miscellaneous Code",permalink:"/Code Snippets/Miscellaneous Code"}},s={},c=[{value:"1.1. Get-Calendar Permissions",id:"11-get-calendar-permissions",level:2},{value:"1.2. Set-Calendar permssions",id:"12-set-calendar-permssions",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-exchange-online-commands"},"1. Exchange Online Commands"),(0,a.kt)("h2",{id:"11-get-calendar-permissions"},"1.1. Get-Calendar Permissions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# Manually connect to Exchange Online.\nConnect-ExchangeOnline\n\n# Get all User Mailboxes.\n$userObject = Get-Mailbox -RecipientTypeDetails UserMailbox | select UserPrincipalName\n\n# Single mailbox command.\n# Get-MailboxFolderPermission -Identity Ryan.Wilson@traderemedies.gov.uk:\\Calendar -User Default | ft\n\n# Loop through each user and get calendar permissions of the default user.\nforeach($user in $userObject){\n    $calendar = $user.UserPrincipalName+":\\Calendar"\n    Get-MailboxFolderPermission -Identity $calendar | Export-csv -Append $env:USERPROFILE\\Downloads\\calendar-perms.csv\n}\n')),(0,a.kt)("h2",{id:"12-set-calendar-permssions"},"1.2. Set-Calendar permssions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# Manually connect to Exchange Online.\nConnect-ExchangeOnline\n\n# Get all User Mailboxes.\n$userObject = Get-Mailbox -RecipientTypeDetails UserMailbox | select UserPrincipalName\n\n# Single mailbox command.\n# Set-MailboxFolderPermission -Identity firstname.Lastname@fordway.com:\\Calendar -User Default -AccessRights LimitedDetails\n\n# Loop through each user and set calendar permissions of the default user.\nforeach($user in $userObject){\n    $calendar = $user.UserPrincipalName+":\\Calendar"\n    Set-MailboxFolderPermission -Identity $calendar -User Default -AccessRights LimitedDetails\n}\n')))}d.isMDXComponent=!0}}]);