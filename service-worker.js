if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};s[o]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.663cbc6a.css",revision:null},{url:"/index.html",revision:"dc691475ffad8f00d4e232c96afa50af"},{url:"/js/app.c03535b6.js",revision:null},{url:"/js/chunk-vendors.1937e496.js",revision:null},{url:"/manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
