"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,m=h["".concat(s,".").concat(c)]||h[c]||u[c]||i;return n?o.createElement(m,l(l({ref:t},d),{},{components:n})):o.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[h]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,id:"Prettier Terminal Window",title:"Prettier Terminal Window",tags:["PowerShell","Admin"]},l=void 0,a={unversionedId:"Tooling/Prettier Terminal Window",id:"Tooling/Prettier Terminal Window",title:"Prettier Terminal Window",description:"This isn't original material, please check out the links below to the location of where I found the information:",source:"@site/docs/Tooling/Pretty Terminal Window.md",sourceDirName:"Tooling",slug:"/Tooling/Prettier Terminal Window",permalink:"/Tooling/Prettier Terminal Window",draft:!1,tags:[{label:"PowerShell",permalink:"/tags/power-shell"},{label:"Admin",permalink:"/tags/admin"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"Prettier Terminal Window",title:"Prettier Terminal Window",tags:["PowerShell","Admin"]},sidebar:"tutorialSidebar",previous:{title:"Tooling",permalink:"/category/tooling"}},s={},p=[{value:"Install the Windows Terminal App",id:"install-the-windows-terminal-app",level:2},{value:"Install OH-MY-POSH",id:"install-oh-my-posh",level:2},{value:"Download fonts from Nerd Fonts",id:"download-fonts-from-nerd-fonts",level:2},{value:"Edit the PowerShell profile",id:"edit-the-powershell-profile",level:2},{value:"Other suggestions",id:"other-suggestions",level:2},{value:"Install PSReadLine",id:"install-psreadline",level:3}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This isn't original material, please check out the links below to the location of where I found the information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=VT2L1SXFq9U"},"Video from Scott Hanselman on how to do this."),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hanselman.com/blog/my-ultimate-powershell-prompt-with-oh-my-posh-and-the-windows-terminal."},"My Ultimate PowerShell prompt with Oh My Posh and the Windows Terminal"))),(0,r.kt)("h2",{id:"install-the-windows-terminal-app"},"Install the Windows Terminal App"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/store/productId/9N0DX20HK701"},"Download it free from the Microsoft store"),", once installed run the terminal application."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you're doing this on a domain joined machine, you'll need to run the terminal application on both the user account and the administrator account to create the profiles.")),(0,r.kt)("h2",{id:"install-oh-my-posh"},"Install OH-MY-POSH"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ohmyposh.dev/docs/installation/windows"},"Follow these instructions for Windows machines"),", this is the official website. I recommend using winget via PowerShell to get the stuff."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"winget install JanDeDobbeleer.OhMyPosh -s winget\n")),(0,r.kt)("h2",{id:"download-fonts-from-nerd-fonts"},"Download fonts from Nerd Fonts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ohmyposh.dev/docs/installation/fonts"},"These are some instructions from the Oh My Posh site to do this"),"."),(0,r.kt)("p",null,"In your ",(0,r.kt)("strong",{parentName:"p"},"terminal prompt"),", type ",(0,r.kt)("inlineCode",{parentName:"p"},"oh-my-posh font install"),", this should then install the on my posh font."),(0,r.kt)("p",null,"Next you need to configure the Terminal app to use the new font. You can edit the JSON file or you can do it in the ",(0,r.kt)("strong",{parentName:"p"},"GUI")," by ",(0,r.kt)("strong",{parentName:"p"},"clicking on the down arrow")," next to your open tab in Terminal."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Settings"),", then click ",(0,r.kt)("strong",{parentName:"p"},"Defaults")," and click ",(0,r.kt)("strong",{parentName:"p"},"Appearance"),"."),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"font list")," ",(0,r.kt)("strong",{parentName:"p"},"next to")," the option, ",(0,r.kt)("strong",{parentName:"p"},"Font Face"),", ",(0,r.kt)("strong",{parentName:"p"},"select")," the ",(0,r.kt)("strong",{parentName:"p"},"Oh my posh font"),"."),(0,r.kt)("h2",{id:"edit-the-powershell-profile"},"Edit the PowerShell profile"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ohmyposh.dev/docs/installation/prompt."},"Check out this link for the source matierial for the below")),(0,r.kt)("p",null,"Edit your PowerShell profile script, you can find its location under the $PROFILE variable in your preferred PowerShell version. For example, using notepad, ",(0,r.kt)("inlineCode",{parentName:"p"},"notepad $PROFILE"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the command errors, you will need to create the profiel first, ",(0,r.kt)("inlineCode",{parentName:"p"},"New-Item -Path $PROFILE -Type File -Force"),".")),(0,r.kt)("p",null,"Inside your profile, add the following line into it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"oh-my-posh init pwsh --config 'C:/Users/Posh/jandedobbeleer.omp.json' | Invoke-Expression\n")),(0,r.kt)("p",null,"If you want to change the theme, navigate to the theme folder, if you don't know where that is, enter the following command ",(0,r.kt)("inlineCode",{parentName:"p"},"(Get-Command oh-my-posh).Source"),"."),(0,r.kt)("h2",{id:"other-suggestions"},"Other suggestions"),(0,r.kt)("h3",{id:"install-psreadline"},"Install PSReadLine"),(0,r.kt)("p",null,"This module shows autocomplete suggestions based on the recent commands you've run, it's a great addition."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/powershell/announcing-psreadline-2-1-with-predictive-intellisense/"},"Reference blog post from the Microsoft DevBlogs"),"."),(0,r.kt)("p",null,"Install the module, ",(0,r.kt)("inlineCode",{parentName:"p"},"Install-Module PSReadLine"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You need version 2.1.0 or higher for this to work properly.")),(0,r.kt)("p",null,"Enable Predictive IntelliSense by running this command, ",(0,r.kt)("inlineCode",{parentName:"p"},"Set-PSReadLineOption -PredictionSource History"),", you should then start to see grey text in your PowerShell prompt that's running currently."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The default key binding to use the prediction is right-arrow.")),(0,r.kt)("p",null,"You can change the color for those predictions by using the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-PSReadLineOption -Colors @{ InlinePrediction = '#8A0303'} # This is dark red.\nSet-PSReadLineOption -Colors @{ InlinePrediction = '#2F7004'} # This is a dark green.\n\n# This will set it back to default.\nSet-PSReadLineOption -Colors @{ InlinePrediction = \"$([char]0x1b)[36;7;238m\"}\n")),(0,r.kt)("p",null,"Make sure to update your PowerShell profile to load this module."),(0,r.kt)("p",null,"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"notepad $profile")," into your terminal window, this should load your profile into notepad. Paste in the following lines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-PSReadLineOption -PredictionSource History\nSet-PSReadLineOption -PredictionViewStyle ListView\n")))}h.isMDXComponent=!0}}]);