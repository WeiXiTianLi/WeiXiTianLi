import{c as y,a as E,d as f,E as b,b as x,e as k,f as L,o as m,g as v,w as a,h as c,u as C,p as I,i as F,j as l,k as u,l as M,r as S,m as G,n as T,q as A}from"./vendor.3e4e072a.js";const B=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};B();const O="modulepreload",g={},H="/WeiXiTianTianLi/dist/",w=function(s,i){return!i||i.length===0?s():Promise.all(i.map(n=>{if(n=`${H}${n}`,n in g)return;g[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":O,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((_,p)=>{o.addEventListener("load",_),o.addEventListener("error",p)})})).then(()=>s())},N=[{path:"/",name:"home",component:()=>w(()=>import("./Home.4c5d5e9b.js"),["assets/Home.4c5d5e9b.js","assets/Home.349dba72.css","assets/vendor.3e4e072a.js","assets/vendor.b3836bd4.css"]),meta:{title:"\u9996\u9875 | \u5929\u7406\u5730\u56FE"}},{path:"/readme",name:"readme",component:()=>w(()=>import("./Readme.deefb7c0.js"),["assets/Readme.deefb7c0.js","assets/Readme.edbbcee9.css","assets/vendor.3e4e072a.js","assets/vendor.b3836bd4.css"]),meta:{title:"\u4F7F\u7528\u8BF4\u660E | \u5929\u7406\u5730\u56FE"}}],h=y({history:E(),routes:N});var P=(r,s)=>{const i=r.__vccOpts||r;for(const[n,e]of s)i[n]=e;return i};const d=r=>(I("data-v-50cfcd04"),r=r(),F(),r),$=d(()=>l("span",{class:"title"},"\u5929\u7406\u5730\u56FE",-1)),z=d(()=>l("span",null,"\u4F7F\u7528\u8BF4\u660E",-1)),R=u("\u4E0B\u8F7D"),V=u("Gitee"),j=u("Github"),W=u(" Github "),X=d(()=>l("svg",{class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15","data-v-b8818f8c":""},[l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})],-1)),q=u(" Gitee "),D=d(()=>l("svg",{class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15","data-v-b8818f8c":""},[l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})],-1)),Y=f({setup(r){let s=`https://${window.location.host}`;/github/.test(s)&&(s+="/WeiXiTianTianLi/");const i=(n,e)=>{switch(e[0]){case"1":h.push({path:"/readme"});break;case"2":switch(e[1]){case"2-1":window.open("https://gitee.com/Yu_Sui_Xian/GenshinImpact_AutoMap/attach_files/861886/download/GenshinImpact_AutoMap.zip");case"2-2":window.open("/download/GenshinImpact_AutoMap.zip")}break}};return(n,e)=>{const t=b,o=x,_=k,p=L;return m(),v(p,{mode:"horizontal",onSelect:i},{default:a(()=>[c(t,{href:C(s),underline:!1},{default:a(()=>[$]),_:1},8,["href"]),c(o,{index:"1",style:{"margin-left":"auto"}},{default:a(()=>[z]),_:1}),c(_,{"show-timeout":"50","hide-timeout":"50",index:"2"},{title:a(()=>[R]),default:a(()=>[c(o,{index:"2-1"},{default:a(()=>[V]),_:1}),c(o,{index:"2-2"},{default:a(()=>[j]),_:1})]),_:1}),c(t,{href:"https://github.com/GengGode/TianLi_Map",underline:!1,target:"_blank"},{default:a(()=>[W,X]),_:1}),c(t,{href:"https://gitee.com/Yu_Sui_Xian/GenshinImpact_AutoMap",underline:!1,target:"_blank"},{default:a(()=>[q,D]),_:1})]),_:1})}}});var K=P(Y,[["__scopeId","data-v-50cfcd04"]]);const J=f({setup(r){return(s,i)=>{const n=M,e=S("router-view"),t=G,o=T;return m(),v(o,null,{default:a(()=>[c(n,null,{default:a(()=>[c(K)]),_:1}),c(t,null,{default:a(()=>[c(e)]),_:1})]),_:1})}}});A(J).use(h).mount("#app");h.beforeEach((r,s,i)=>{r.meta.title&&(document.title=r.meta.title),i()});export{P as _,h as r};
