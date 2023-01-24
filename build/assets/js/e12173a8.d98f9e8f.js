"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||l;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2,id:"External chat in Teams",title:"External chat in Teams",tags:["KB","Microsoft","Teams","External Chat"]},o=void 0,s={unversionedId:"Articles/Microsoft/Teams/External chat in Teams",id:"Articles/Microsoft/Teams/External chat in Teams",title:"External chat in Teams",description:"Scenario",source:"@site/docs/Articles/Microsoft/Teams/External chat in Teams.md",sourceDirName:"Articles/Microsoft/Teams",slug:"/Articles/Microsoft/Teams/External chat in Teams",permalink:"/Articles/Microsoft/Teams/External chat in Teams",draft:!1,tags:[{label:"KB",permalink:"/tags/kb"},{label:"Microsoft",permalink:"/tags/microsoft"},{label:"Teams",permalink:"/tags/teams"},{label:"External Chat",permalink:"/tags/external-chat"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"External chat in Teams",title:"External chat in Teams",tags:["KB","Microsoft","Teams","External Chat"]},sidebar:"tutorialSidebar",previous:{title:"Approve or Block an App",permalink:"/Articles/Microsoft/Teams/Approve or Block an App"},next:{title:"PowerShell",permalink:"/category/powershell"}},i={},c=[{value:"Scenario",id:"scenario",level:2},{value:"Options for this feature",id:"options-for-this-feature",level:2},{value:"Setup a new policy",id:"setup-a-new-policy",level:2},{value:"Enabling External Chat",id:"enabling-external-chat",level:2},{value:"See what External Access policies exist",id:"see-what-external-access-policies-exist",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"You want to block external teams chat and features for internal staff to outside organisations."),(0,r.kt)("h2",{id:"options-for-this-feature"},"Options for this feature"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enabled for all external organisations."),(0,r.kt)("li",{parentName:"ol"},"Disabled for all external organisations."),(0,r.kt)("li",{parentName:"ol"},"Enabled for selected external organisations."),(0,r.kt)("li",{parentName:"ol"},"Disabled for external organisations."),(0,r.kt)("li",{parentName:"ol"},"Disable the feature for some users via policy.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Options 1 to 4 above can be actioned within the Teams Admin portal, option 5 needs to be done via command line. This option is the focus of this article.")),(0,r.kt)("h2",{id:"setup-a-new-policy"},"Setup a new policy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Teams PowerShell module, ",(0,r.kt)("a",{parentName:"li",href:"https://www.powershellgallery.com/packages/MicrosoftTeams/4.9.1"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Type the command, ",(0,r.kt)("inlineCode",{parentName:"li"},"Connect-MicrosoftTeams")," to begin the sign-in process, login using the prompt that should appear."),(0,r.kt)("li",{parentName:"ol"},"Follow the commands below to create a new Teams policy, which disables the features of external chat for end users.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'New-CsExternalAccessPolicy -Identity "Block External Teams" # Creates new policy.\n     Set-CsExternalAccessPolicy -Identity "Block External Teams" -EnableTeamsConsumerAccess $False # Disables the feature for the single policy.\n     Set-CsExternalAccessPolicy -Identity "Block External Teams" -EnableFederationAccess $False # Disables the feature for the single policy.\n     Set-CsExternalAccessPolicy -Identity "Block External Teams" -EnableTeamsConsumerInbound $False # Disables the feature for the single policy.\n')),(0,r.kt)("h2",{id:"enabling-external-chat"},"Enabling External Chat"),(0,r.kt)("p",null,"You want to enable the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"EnableTeamsConsumerInbound"),", which is what the feature uses. You could assign the user the ",(0,r.kt)("inlineCode",{parentName:"p"},"FederationAndPICDefault")," policy, I think this exists in all tenants."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Grant-CsExternalAccessPolicy -Identity "username" -PolicyName "FederationAndPICDefault"\n')),(0,r.kt)("h2",{id:"see-what-external-access-policies-exist"},"See what External Access policies exist"),(0,r.kt)("p",null,"The Command below will output a list of all External Access policies in your environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-CsExternalAccessPolicy # Command to find all policies.\n\n# Example of one of the outputs from the command, yours will have more than just this one.\n\nIdentity                                          : Global\nDescription                                       :\nEnableFederationAccess                            : True\nEnableXmppAccess                                  : False\nEnablePublicCloudAccess                           : True\nEnablePublicCloudAudioVideoAccess                 : True\nEnableOutsideAccess                               : True\nEnableAcsFederationAccess                         : True\nEnableTeamsConsumerAccess                         : True\nEnableTeamsConsumerInbound                        : True\nRestrictTeamsConsumerAccessToExternalUserProfiles : False\n")))}u.isMDXComponent=!0}}]);