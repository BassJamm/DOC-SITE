"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2,id:"Assign Managed Identity permissions",title:"Assign Managed Identity permissions",tags:["Azure"]},o=void 0,s={unversionedId:"Articles/PowerShell/Assign Managed Identity permissions",id:"Articles/PowerShell/Assign Managed Identity permissions",title:"Assign Managed Identity permissions",description:"- Refernce for where this came from",source:"@site/docs/Articles/PowerShell/Assign Managed Identity permissions via CMDLine.md",sourceDirName:"Articles/PowerShell",slug:"/Articles/PowerShell/Assign Managed Identity permissions",permalink:"/Articles/PowerShell/Assign Managed Identity permissions",draft:!1,tags:[{label:"Azure",permalink:"/tags/azure"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Assign Managed Identity permissions",title:"Assign Managed Identity permissions",tags:["Azure"]},sidebar:"tutorialSidebar",previous:{title:"PwshCli CheatSheet",permalink:"/Articles/PowerShell/PwshCli CheatSheet"},next:{title:"Manage Active Directory with PowerShell",permalink:"/Articles/PowerShell/Manage Active Directory with PowerShell"}},l={},p=[{value:"1. The command",id:"1-the-command",level:2},{value:"2. Notes",id:"2-notes",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aztoso.com/security/microsoft-graph-permissions-managed-identity/."},"Refernce for where this came from")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/powershell/module/azuread/new-azureadserviceapproleassignment?view=azureadps-2.0"},"Microsoft reference for command"),".")),(0,i.kt)("h2",{id:"1-the-command"},"1. The command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'\n# Your tenant id.\n$TenantID="Add your tenant ID"\n# Microsoft Graph App ID (DON\'T CHANGE).\n$GraphAppId = "00000003-0000-0000-c000-000000000000"\n# Name of the manage identity (same as the Logic App name).\n$DisplayNameOfMSI="Add display name of Enterprise App" \n# Check the Microsoft Graph documentation for the permission you need for the operation.\n$PermissionName = "Add your permission here" \n\n# Install the module (You need admin on the machine)\nInstall-Module AzureAD \n\n# Connect to Azure AD via tenant ID, you\'ll need an admin account to login with though.\nConnect-AzureAD -TenantId $TenantID\n# Collects the Target System Managed Identities information into the MSI variable.\n$MSI = (Get-AzureADServicePrincipal -Filter "displayName eq \'$DisplayNameOfMSI\'")\nStart-Sleep -Seconds 10\n# Store the Microsoft Graph API informaiton into the GraphServicePrincipal variable.\n$GraphServicePrincipal = Get-AzureADServicePrincipal -Filter "appId eq \'$GraphAppId\'"\n# Searches Microsoft Graph API for the value matching the PermissionName variable populated above and stores this in the AppRole Variable.\n$AppRole = $GraphServicePrincipal.AppRoles |  Where-Object {$_.Value -eq $PermissionName -and $_.AllowedMemberTypes -contains "Application"}\n# Assigned the permission from the Microsoft Graph API to the target Managed Identity.\nNew-AzureADServiceAppRoleAssignment -ObjectId $MSI.ObjectId -ResourceId $GraphServicePrincipal.ObjectId -Id $appRole.Id -PrincipalId $MSI.ObjectId\n')),(0,i.kt)("p",null,"Annotated the hell out of it as the command really confused me."),(0,i.kt)("h2",{id:"2-notes"},"2. Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It takes a few minutes for this change to show in the GUI."),(0,i.kt)("li",{parentName:"ul"},"If the permission already exists the promtp will error on the final command.")))}d.isMDXComponent=!0}}]);