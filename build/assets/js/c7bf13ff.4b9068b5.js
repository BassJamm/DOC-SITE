"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:1,id:"PwshCli CheatSheet",title:"PwshCli CheatSheet",tags:["PowerShell","AD"]},o=void 0,i={unversionedId:"PowerShell/PwshCli CheatSheet",id:"PowerShell/PwshCli CheatSheet",title:"PwshCli CheatSheet",description:"Helpful Commands to use every day.",source:"@site/docs/PowerShell/PwshCli CheatSheet.md",sourceDirName:"PowerShell",slug:"/PowerShell/PwshCli CheatSheet",permalink:"/docs/PowerShell/PwshCli CheatSheet",draft:!1,tags:[{label:"PowerShell",permalink:"/docs/tags/power-shell"},{label:"AD",permalink:"/docs/tags/ad"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"PwshCli CheatSheet",title:"PwshCli CheatSheet",tags:["PowerShell","AD"]},sidebar:"tutorialSidebar",previous:{title:"PowerShell",permalink:"/docs/category/powershell"},next:{title:"Manage Active Directory with PowerShell",permalink:"/docs/PowerShell/Manage Active Directory with PowerShell"}},s={},d=[{value:"1. Command Syntax Help",id:"1-command-syntax-help",level:2},{value:"2. Troubleshooting Commands",id:"2-troubleshooting-commands",level:2},{value:"3. Variables",id:"3-variables",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Helpful Commands to use every day."),(0,n.kt)("h2",{id:"1-command-syntax-help"},"1. Command Syntax Help"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Get-help <command you want help with>")),(0,n.kt)("td",{parentName:"tr",align:null},"Will return cmd syntax.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Get-help <command you want help with> -example")),(0,n.kt)("td",{parentName:"tr",align:null},"Will return cmd examples (if available.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Get-Command")),(0,n.kt)("td",{parentName:"tr",align:null},"Will return all available comamnds from installed modules.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Get-Command -Name Get-*")),(0,n.kt)("td",{parentName:"tr",align:null},"Will search from whatever string between, after or before wildcards ",(0,n.kt)("inlineCode",{parentName:"td"},"*"),".")))),(0,n.kt)("h2",{id:"2-troubleshooting-commands"},"2. Troubleshooting Commands"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Get-NetIPAddress -All")),(0,n.kt)("td",{parentName:"tr",align:null},"Returns IPv4 and IPv6 configuration data and information about the interfaces those addresses are associated with.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Get-NetIPConfiguration")),(0,n.kt)("td",{parentName:"tr",align:null},"Returns networking configuration, including usable interfaces, IP addresses, and DNS servers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Test-NetConnection")),(0,n.kt)("td",{parentName:"tr",align:null},"Will run a ping and TCP connection to the designated destionation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Test-NetConnection -port 8080 -ComputerName imagine01")),(0,n.kt)("td",{parentName:"tr",align:null},"Will run a ping and TCP connection to the designated destionation on the chosen port.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"dsregcmd /status")),(0,n.kt)("td",{parentName:"tr",align:null},"Will return the Azure Active Directory configuration of a machine.")))),(0,n.kt)("h2",{id:"3-variables"},"3. Variables"),(0,n.kt)("p",null,"Variables are useful for storing data that will need to referenced or used later on, perfect for making scripts. You can store all types of information in variables for example, commands, results, names, paths, settings and values."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_variables?view=powershell-7.2#long-description"},"Microsoft link - Long Description of Variables"),"."),(0,n.kt)("p",null,"There are a few types of variables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Automatic variables"),", these can be refernced, for example, $PSHOME or $PROFILE, these cannot be changed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User-created variables"),", the user creates these and can freely, delete and change them."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preference variables"),", these variables store user preferences for PowerShell, for example, the $MaximumHistoryCount.")),(0,n.kt)("p",null,"Example of User-Crated variables"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$MyVariable = 1, 2, 3\n\n$Path = "C:\\Windows\\System32"\n')))}m.isMDXComponent=!0}}]);