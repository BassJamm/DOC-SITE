"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var A=i.createContext({}),c=function(e){var t=i.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(A.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,A=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(A,".").concat(d)]||u[d]||p[d]||a;return r?i.createElement(h,o(o({ref:t},l),{},{components:r})):i.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var A in t)hasOwnProperty.call(t,A)&&(s[A]=t[A]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>A,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2,id:"Restore from Snapshot",title:"Restore from Snapshot",tags:["Azure"]},o=void 0,s={unversionedId:"Azure Resources Management/Restore from Snapshot",id:"Azure Resources Management/Restore from Snapshot",title:"Restore from Snapshot",description:"1. Before you begin",source:"@site/docs/Azure Resources Management/Restore from Snapshot.md",sourceDirName:"Azure Resources Management",slug:"/Azure Resources Management/Restore from Snapshot",permalink:"/docs/Azure Resources Management/Restore from Snapshot",draft:!1,tags:[{label:"Azure",permalink:"/docs/tags/azure"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Restore from Snapshot",title:"Restore from Snapshot",tags:["Azure"]},sidebar:"tutorialSidebar",previous:{title:"Azure SQL Server setup cheatsheet",permalink:"/docs/Azure Resources Management/Azure SQL Server setup cheatsheet"},next:{title:"Azure Backup Setup CheatSheet",permalink:"/docs/Azure Resources Management/Azure Backup Setup CheatSheet"}},A={},c=[{value:"1. Before you begin",id:"1-before-you-begin",level:2},{value:"2. Create your snapshot",id:"2-create-your-snapshot",level:2},{value:"3. Confirm disk is visibile in the OS",id:"3-confirm-disk-is-visibile-in-the-os",level:2},{value:"4. Detach the disk",id:"4-detach-the-disk",level:2}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-before-you-begin"},"1. Before you begin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Confirm snapshot data is valid.")),(0,n.kt)("h2",{id:"2-create-your-snapshot"},"2. Create your snapshot"),(0,n.kt)("p",null,"Navigate to a VM that is available to have a disk attached to it.\nClick Disks.\nCreate new disk."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Attach the disk",src:r(2375).Z,width:"1376",height:"175"})),(0,n.kt)("p",null,"Click Edit on the far right hand side. As shown in red above.\nName your Disk, I'd suggest, snapshot_ServerName_Date_Time\nSource, select snapshot."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a new disk2",src:r(8552).Z,width:"798",height:"242"})),(0,n.kt)("p",null,"Select the Snapshot you wish to attach."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Select the snapshot",src:r(9984).Z,width:"562",height:"107"})),(0,n.kt)("p",null,"Make any changes to the Encryption Type.\nI'd suggest it not to be a shared disk.\nPress Save."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Save the changes",src:r(889).Z,width:"569",height:"215"})),(0,n.kt)("p",null,"This shouldn't take too long."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'If you see the error below, change the Host Caching optio\nn to "none".')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Host Caching error",src:r(3176).Z,width:"1309",height:"150"})),(0,n.kt)("h2",{id:"3-confirm-disk-is-visibile-in-the-os"},"3. Confirm disk is visibile in the OS"),(0,n.kt)("p",null,"The share should be available from the get go however, you may need to bring the disk online within computer management."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"RDP into your VM & check File Explorer for your disk, the name will be what the share was called originally."),(0,n.kt)("li",{parentName:"ol"},"Open Computer Management, Click Disk Management."),(0,n.kt)("li",{parentName:"ol"},"Right-Click on the disk, mark it as Oneline."),(0,n.kt)("li",{parentName:"ol"},"You should now see it in File Explorer.")),(0,n.kt)("h2",{id:"4-detach-the-disk"},"4. Detach the disk"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Close any open sessions to the disk that you attached."),(0,n.kt)("li",{parentName:"ol"},"Navigate back to the VM in Azure Management Portal."),(0,n.kt)("li",{parentName:"ol"},"Click the X button next to the disk.")))}u.isMDXComponent=!0},2375:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/Attach_Disk01-e37eb1606b5037d11e77fdb6936be49e.png"},9984:(e,t,r)=>{r.d(t,{Z:()=>i});const i="data:image/png;base64,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"},889:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/Attach_Disk03-ad31eec3c84e50d88e192c2fa0141006.png"},3176:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/Detach_Disk_Error01-f18a55d7401087d3f2f31d37becbe145.png"},8552:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/ReSizeVM-02-d16659f103ef8937c90d8cfc1bf2a715.png"}}]);