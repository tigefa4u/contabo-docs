"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[8407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:11},l="Cloudberry Explorer",i={unversionedId:"products/Object-Storage/Tools/cloudberry-explorer",id:"products/Object-Storage/Tools/cloudberry-explorer",title:"Cloudberry Explorer",description:"Cloudberry Explorer is a tool to manage files in desktop application. It runs on Windows and Mac.",source:"@site/docs/products/Object-Storage/Tools/cloudberry-explorer.md",sourceDirName:"products/Object-Storage/Tools",slug:"/products/Object-Storage/Tools/cloudberry-explorer",permalink:"/docs/products/Object-Storage/Tools/cloudberry-explorer",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/Tools/cloudberry-explorer.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"productSidebar",previous:{title:"s3cmd",permalink:"/docs/products/Object-Storage/Tools/s3cmd"},next:{title:"BucketAnywhere",permalink:"/docs/products/Object-Storage/Tools/bucketanywhere"}},p={},c=[{value:"Required data",id:"required-data",level:2},{value:"Example data",id:"example-data",level:3},{value:"Setup",id:"setup",level:2}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloudberry-explorer"},"Cloudberry Explorer"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.msp360.com/explorer.aspx"},"Cloudberry Explorer")," is a tool to manage files in desktop application. It runs on Windows and Mac."),(0,o.kt)("p",null,"Please follow the installation instruction like described on ",(0,o.kt)("a",{parentName:"p",href:"https://www.msp360.com/explorer.aspx"},"Cloudberry Explorer"),"."),(0,o.kt)("h2",{id:"required-data"},"Required data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access_key")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secret_key")),(0,o.kt)("li",{parentName:"ul"},"Contabo's S3 URL")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"access_key"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"secret_key")," and the S3 URL please check ",(0,o.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/s3-connection-settings"},"here"),"."),(0,o.kt)("h3",{id:"example-data"},"Example data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access_key")," = 82046e8110804a43bf29c1ae426a724d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secret_key")," = 82e69bd7a52076c527154297a76c2233"),(0,o.kt)("li",{parentName:"ul"},"S3 URL = ",(0,o.kt)("a",{parentName:"li",href:"https://eu2.contabostorage.com"},"https://eu2.contabostorage.com"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Start ",(0,o.kt)("inlineCode",{parentName:"p"},"Cloudberry Explorer")," it should open a window ",(0,o.kt)("inlineCode",{parentName:"p"},"Select Cloud Storage")," or click on ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Add New Account")," to get there."),(0,o.kt)("p",null,"Please follow the steps in order to use Contabo's Object Storage like shown in the screenshot ",(0,o.kt)("img",{alt:"S3 Credentials",src:r(6568).Z,width:"557",height:"419"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Double-Click  ",(0,o.kt)("inlineCode",{parentName:"li"},"S3 Compatible")),(0,o.kt)("li",{parentName:"ol"},"In sthat screen please fill out like the following",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specify a ",(0,o.kt)("inlineCode",{parentName:"li"},"Display name")," of your choice"),(0,o.kt)("li",{parentName:"ul"},"Specify ",(0,o.kt)("inlineCode",{parentName:"li"},"https://eu2.contabostorage.com")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"Service point")),(0,o.kt)("li",{parentName:"ul"},"Specify ",(0,o.kt)("inlineCode",{parentName:"li"},"82046e8110804a43bf29c1ae426a724d")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"Access Key")),(0,o.kt)("li",{parentName:"ul"},"Specify ",(0,o.kt)("inlineCode",{parentName:"li"},"82e69bd7a52076c527154297a76c2233")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"Secret Key")),(0,o.kt)("li",{parentName:"ul"},"Check ",(0,o.kt)("inlineCode",{parentName:"li"},"Use SSL")),(0,o.kt)("li",{parentName:"ul"},"Check ",(0,o.kt)("inlineCode",{parentName:"li"},"Use native multipart upload")))),(0,o.kt)("li",{parentName:"ol"},"That's it.")))}d.isMDXComponent=!0},6568:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cloudberry-explorer-settings-3f4d653265fa875518fcad77dac4f5aa.png"}}]);