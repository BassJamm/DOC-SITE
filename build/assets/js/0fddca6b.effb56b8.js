"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6948],{3905:(e,A,t)=>{t.d(A,{Zo:()=>m,kt:()=>d});var o=t(7294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function a(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);A&&(o=o.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?a(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function p(e,A){if(null==e)return{};var t,o,n=function(e,A){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),l=function(e){var A=o.useContext(i),t=A;return e&&(t="function"==typeof e?e(A):r(r({},A),e)),t},m=function(e){var A=l(e.components);return o.createElement(i.Provider,{value:A},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var A=e.children;return o.createElement(o.Fragment,{},A)}},s=o.forwardRef((function(e,A){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=l(t),s=n,d=g["".concat(i,".").concat(s)]||g[s]||c[s]||a;return t?o.createElement(d,r(r({ref:A},m),{},{components:t})):o.createElement(d,r({ref:A},m))}));function d(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var a=t.length,r=new Array(a);r[0]=s;var p={};for(var i in A)hasOwnProperty.call(A,i)&&(p[i]=A[i]);p.originalType=e,p[g]="string"==typeof e?e:n,r[1]=p;for(var l=2;l<a;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4884:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:2,id:"Deploy Google Play store app",title:"Deploy Google Play store app",tags:["KB","Intune","Google Play","App Deployment"]},r=void 0,p={unversionedId:"Articles/Microsoft/Intune/Deploy Google Play store app",id:"Articles/Microsoft/Intune/Deploy Google Play store app",title:"Deploy Google Play store app",description:"Definition of a Managed Google Play store app: Public apps that are generally available in the Play Store. Manage these apps in Intune by browsing for the apps you want to manage, approving them, and then synchronizing them into Intune.",source:"@site/docs/Articles/Microsoft/Intune/Deploy Managed Google Play store app.md",sourceDirName:"Articles/Microsoft/Intune",slug:"/Articles/Microsoft/Intune/Deploy Google Play store app",permalink:"/Articles/Microsoft/Intune/Deploy Google Play store app",draft:!1,tags:[{label:"KB",permalink:"/tags/kb"},{label:"Intune",permalink:"/tags/intune"},{label:"Google Play",permalink:"/tags/google-play"},{label:"App Deployment",permalink:"/tags/app-deployment"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Deploy Google Play store app",title:"Deploy Google Play store app",tags:["KB","Intune","Google Play","App Deployment"]},sidebar:"tutorialSidebar",previous:{title:"AutoPilot Reset",permalink:"/Articles/Microsoft/Intune/AutoPilot Reset"},next:{title:"Renew Apple Tokens and Certs",permalink:"/Articles/Microsoft/Intune/Renew Apple Tokens and Certs"}},i={},l=[{value:"Add the App into Intune",id:"add-the-app-into-intune",level:2},{value:"Creating a dynamic group to include only company owned android devices.",id:"creating-a-dynamic-group-to-include-only-company-owned-android-devices",level:2}],m={toc:l};function g(e){let{components:A,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Definition of a Managed Google Play store app"),": Public apps that are generally available in the Play Store. Manage these apps in Intune by browsing for the apps you want to manage, approving them, and then synchronizing them into Intune."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/mem/intune/apps/apps-add-android-for-work#managed-google-play-app-types"},"Read more in this Microsoft Article"),"."),(0,n.kt)("h2",{id:"add-the-app-into-intune"},"Add the App into Intune"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login to ",(0,n.kt)("a",{parentName:"li",href:"https://endpoint.microsoft.com/"},"https://endpoint.microsoft.com/")),(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," >",(0,n.kt)("strong",{parentName:"li"}," Android")," >",(0,n.kt)("strong",{parentName:"li"}," Add App")," (Click the plus icon)."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Managed Google Play app")," from the list."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Search")," the app store."),(0,n.kt)("li",{parentName:"ol"},"Find and ",(0,n.kt)("strong",{parentName:"li"},"select the app"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Approve"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Accept the agreement")," for what the application will have access to on the deice."),(0,n.kt)("li",{parentName:"ol"},"For the next screen ",(0,n.kt)("strong",{parentName:"li"},"select one of the two options"),' presented to you. For quality of life for your users, I\'d select the top option "Keep approved when app requests new permissions."')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"App Deployment Ts&amp;Cs",src:t(761).Z,width:"541",height:"187"})),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Click Sync")," in the top left corner of the screen.")),(0,n.kt)("p",null,"Go back the list of Android apps and you should see the new app appear shortly."),(0,n.kt)("h2",{id:"creating-a-dynamic-group-to-include-only-company-owned-android-devices"},"Creating a dynamic group to include only company owned android devices."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login to, ",(0,n.kt)("a",{parentName:"li",href:"https://aad.portal.azure.com"},"https://aad.portal.azure.com"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Click")," on ",(0,n.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Groups"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"New Group"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill in the information, make sure to select ",(0,n.kt)("strong",{parentName:"li"},"Dynamic Device")," option under membership type.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("img",{alt:"App Deployment Ts&amp;Cs",src:t(2025).Z,width:"784",height:"265"})))),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add dynamic query")," at the bottom."),(0,n.kt)("li",{parentName:"ol"},"Add the two queries below to check the OS device type and the device ownership properties.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"deviceOSType Equals AndroidEnterprise"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"deviceOwnership Equals Company"),"."))),(0,n.kt)("li",{parentName:"ol"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"App Deployment Ts&amp;Cs",src:t(5194).Z,width:"987",height:"298"})))}g.isMDXComponent=!0},2025:(e,A,t)=>{t.d(A,{Z:()=>o});const o="data:image/png;base64,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"},761:(e,A,t)=>{t.d(A,{Z:()=>o});const o=t.p+"assets/images/Google-App-Deploy-001-f8b24467ca708c2b71a16b8e1f9067ad.png"},5194:(e,A,t)=>{t.d(A,{Z:()=>o});const o=t.p+"assets/images/Google-App-Deploy-002-8dcdc275691dd047ce7997013745aefa.png"}}]);