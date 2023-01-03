"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||n;return r?o.createElement(h,s(s({ref:t},u),{},{components:r})):o.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2,id:"Removing data and licenses",title:"Removing data and licenses",tags:["VBO"]},s=void 0,i={unversionedId:"Veeam Backup for O365/Removing data and licenses",id:"Veeam Backup for O365/Removing data and licenses",title:"Removing data and licenses",description:"How to remove a license from a user in VBO.",source:"@site/docs/Veeam Backup for O365/Removing data and licenses.md",sourceDirName:"Veeam Backup for O365",slug:"/Veeam Backup for O365/Removing data and licenses",permalink:"/docs/Veeam Backup for O365/Removing data and licenses",draft:!1,tags:[{label:"VBO",permalink:"/docs/tags/vbo"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Removing data and licenses",title:"Removing data and licenses",tags:["VBO"]},sidebar:"tutorialSidebar",previous:{title:"Managing Backup Jobs",permalink:"/docs/Veeam Backup for O365/Managing Backup Jobs"},next:{title:"Restore Errors",permalink:"/docs/Veeam Backup for O365/Restore Errors"}},l={},c=[{value:"References",id:"references",level:2},{value:"Overview",id:"overview",level:2},{value:"Checking for stored data",id:"checking-for-stored-data",level:2},{value:"Delete the user data from each repo",id:"delete-the-user-data-from-each-repo",level:2},{value:"Issues",id:"issues",level:2},{value:"Commands returning &quot;Null&quot;",id:"commands-returning-null",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to remove a license from a user in VBO."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,"Veeam Blog post - ",(0,a.kt)("a",{parentName:"p",href:"https://www.veeam.com/blog/remove-user-license-vbo365.html"},"How to remove a license from a user in Veeam Backup for Microsoft Office 365"),".\nVeeam Rest API Reference - ",(0,a.kt)("a",{parentName:"p",href:"https://helpcenter.veeam.com/docs/vbo365/rest/delete_licensedusers.html?ver=60"},"Revoking Licenses from users"),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"To remove a license from a user, you first need to delete that user\u2019s data from all configured repositories and run the remove license command with PowerShell. This can be useful if you accidently backed up a user and no longer need to keep the data. Otherwise, you must wait the 31-day threshold for the license to be reallocated."),(0,a.kt)("h2",{id:"checking-for-stored-data"},"Checking for stored data"),(0,a.kt)("p",null,"Firstly, you'll need to check if there is any data stored for the user you want to remove the licnese from.\nOpen the Veeam Backup console on your application host, select the hamburger menu in the top left, navigate to Console and click on PowerShell."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# This script will show you what a data a user has on a particular repository\n# Fill in "REPOSITORY" with the name of the repository as it is showing in \n# Veeam Backup for Office 365 and the email address of the user you wish to remove the data for "USER@DOMAIN.com"\n\n$repository = Get-VBORepository -Name "REPOSITORY" \n$user = Get-VBOEntityData -Type User -Repository $repository -Name "USER@DOMAIN.com" \n$user\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Provided the command above runs successfully, you'll get a table returned showing the repositories as headings, with True or False under them depending on whether the user has data in them.")),(0,a.kt)("h2",{id:"delete-the-user-data-from-each-repo"},"Delete the user data from each repo"),(0,a.kt)("p",null,"I won't regurgitate the perfectly good Veeam article, the link is below for all of the commands needed."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.veeam.com/blog/remove-user-license-vbo365.html"},"How to remove a license from a user in Veeam Backup for Microsoft Office 365"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Make sure to follow each section in the rough order of the article, skip over the ones where your user has no data.")),(0,a.kt)("h2",{id:"issues"},"Issues"),(0,a.kt)("p",null,"I ended up having to raise a support request in the end as I had some troublesome admin users who'd had their data backed up in error. I was asked by the support team member who helped me to not store the script that was used."),(0,a.kt)("h3",{id:"commands-returning-null"},'Commands returning "Null"'),(0,a.kt)("p",null,"Some of the commands above for some reason will return a \u201cnull\u201d error when using them, you will need to pipe the command into a search to find the relevant data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'Get-VBOLicensedUser -Organization $org | ?{$_.username -like "*-adm*"} \n# You can then loop through an array if you store the above command into a variable. \nGet-VBOLicensedUser -Organization $org |?{$_.username -like "*-adm*"}|foreach-object {remove-vbolicenseduser $_} \n')))}d.isMDXComponent=!0}}]);