"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:0,Id:"Welcome to the Wiki",title:"Welcome to the Wiki"},a=void 0,l={unversionedId:"Welcome to the Wiki",id:"Welcome to the Wiki",title:"Welcome to the Wiki",description:"This documentation is an almagamation of my knowledge and experiences, to hopefully provide myself and others with refernce material for their jobs and hobbies.",source:"@site/docs/Welcome to the Wiki.md",sourceDirName:".",slug:"/Welcome to the Wiki",permalink:"/docs/Welcome to the Wiki",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,Id:"Welcome to the Wiki",title:"Welcome to the Wiki"},sidebar:"tutorialSidebar",next:{title:"Guides",permalink:"/docs/category/guides"}},s={},c=[{value:"How the site works",id:"how-the-site-works",level:2},{value:"Navigating the Wiki",id:"navigating-the-wiki",level:2},{value:"Guides",id:"guides",level:3},{value:"Articles",id:"articles",level:3},{value:"Tooling",id:"tooling",level:3},{value:"Contact Me",id:"contact-me",level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation is an almagamation of my knowledge and experiences, to hopefully provide myself and others with refernce material for their jobs and hobbies."),(0,o.kt)("p",null,"Each doc may or may not contain personal notes that may appear on other resources on the internet, I will do my best to reference any and all source material that I use."),(0,o.kt)("h2",{id:"how-the-site-works"},"How the site works"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The website is stored within a GitHub Repo, this is then copied over to a Static Web App hosted in Azure using a GitHub action."),(0,o.kt)("li",{parentName:"ul"},"The site is generated using ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus"),", big shout to them for making this incredible beast!")),(0,o.kt)("h2",{id:"navigating-the-wiki"},"Navigating the Wiki"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Naviagte using the navbar on the left hand side."),(0,o.kt)("li",{parentName:"ul"},"There is a search bar in the top right, try searching keywords for what you're after.")),(0,o.kt)("h3",{id:"guides"},"Guides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are deep dives into setting up certain technologies or solutions.")),(0,o.kt)("h3",{id:"articles"},"Articles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are help docs or small snippets of information."),(0,o.kt)("li",{parentName:"ul"},"I'd recommend using the search bar in the top right to search for related information.")),(0,o.kt)("h3",{id:"tooling"},"Tooling"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are notes on tools that I use day to day in my job and at home that I think are cool.")),(0,o.kt)("h2",{id:"contact-me"},"Contact Me"),(0,o.kt)("p",null,"I'm running this site for others and myself to use, should something be wrong then I would love to hear from you."),(0,o.kt)("p",null,"Drop me an email at, ",(0,o.kt)("a",{parentName:"p",href:"mailto:admin@itjamm.co.uk"},"admin@itjamm.co.uk")))}m.isMDXComponent=!0}}]);