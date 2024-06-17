"use strict";(()=>{var e={};e.id=765,e.ids=[765],e.modules={2896:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{config:()=>u,default:()=>m,getServerSideProps:()=>x,getStaticPaths:()=>d,getStaticProps:()=>g,reportWebVitals:()=>f,routeModule:()=>S,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>h});var r=a(7093),i=a(5244),s=a(1323),o=a(7645),l=a(6814),c=a(5025),p=e([c]);c=(p.then?(await p)():p)[0];let m=(0,s.l)(c,"default"),g=(0,s.l)(c,"getStaticProps"),d=(0,s.l)(c,"getStaticPaths"),x=(0,s.l)(c,"getServerSideProps"),u=(0,s.l)(c,"config"),f=(0,s.l)(c,"reportWebVitals"),h=(0,s.l)(c,"unstable_getStaticProps"),j=(0,s.l)(c,"unstable_getStaticPaths"),v=(0,s.l)(c,"unstable_getStaticParams"),y=(0,s.l)(c,"unstable_getServerProps"),b=(0,s.l)(c,"unstable_getServerSideProps"),S=new r.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/issues",pathname:"/issues",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:c});n()}catch(e){n(e)}})},6836:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.d(t,{Z:()=>x});var r=a(997),i=a(5247),s=a(8564),o=a(8936),l=a(968),c=a.n(l),p=a(6197),m=a(9752),g=a(7451),d=e([i,p,m,g]);function x({children:e}){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(c(),{children:[r.jsx("title",{children:"Fare Free London"}),r.jsx("meta",{name:"description",content:"Campaign for free public transport in London"})]}),r.jsx(m.Analytics,{}),r.jsx(g.SpeedInsights,{}),r.jsx(o.Z,{}),r.jsx(i.Z,{}),r.jsx(p.motion.div,{initial:"pageInitial",animate:"pageAnimate",variants:{pageInitial:{y:20,opacity:0,scale:.99},pageAnimate:{y:0,opacity:1,scale:1,transition:{duration:.4,ease:"easeInOut",when:"beforeChildren"}}},children:r.jsx("main",{className:"bg-neutral-50 text-customRed-950 px-5 lg:px-10 lg:mx-10 min-h-[60vh] lg:mt-10 lg:py-5",children:e})}),r.jsx(s.Z,{})]})}[i,p,m,g]=d.then?(await d)():d,n()}catch(e){n(e)}})},8936:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(997),r=a(968),i=a.n(r);function s(){return(0,n.jsxs)(i(),{children:[n.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),n.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),n.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),n.jsx("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),n.jsx("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),n.jsx("meta",{name:"theme-color",content:"#000"}),n.jsx("meta",{name:"msapplication-TileColor",content:"#000000"}),n.jsx("meta",{name:"description",content:"Campaign for free public transport in London"}),n.jsx("title",{children:"Fare Free London"}),n.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),n.jsx("meta",{name:"twitter:title",content:"Fare Free london"}),n.jsx("meta",{name:"twitter:description",content:"Campaign for free public transport in London"}),n.jsx("meta",{name:"twitter:image",content:"/images/banner-draft.png"}),n.jsx("meta",{property:"og:type",content:"website"}),n.jsx("meta",{property:"og:url",content:"https://farefreelondon.org/"}),n.jsx("meta",{property:"og:title",content:"Fare Free London"}),n.jsx("meta",{property:"og:description",content:"Campaign for free public transport in London"}),n.jsx("meta",{property:"og:image",content:"/images/banner-draft.png"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]})}},5025:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>c,getStaticProps:()=>p});var r=a(997),i=a(6836),s=a(8484),o=a(7393),l=e([i]);function c({allPosts:{edges:e}}){return r.jsx("div",{children:r.jsx(i.Z,{children:r.jsx("div",{className:"lg:grid lg:grid-cols-4 lg:gap-x-5 lg:gap-y-5",children:e.map(({node:e})=>r.jsx(o.Z,{title:e.title,coverImage:e.featuredImage,slug:e.slug,excerpt:e.excerpt,category:e.categories.nodes.map(e=>e.name)},e.slug))})})})}i=(l.then?(await l)():l)[0];let p=async({})=>({props:{allPosts:await (0,s.Y8)()},revalidate:10});n()}catch(e){n(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},9752:e=>{e.exports=import("@vercel/analytics/react")},7451:e=>{e.exports=import("@vercel/speed-insights/next")},6197:e=>{e.exports=import("framer-motion")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),n=t.X(0,[859,21,204],()=>a(2896));module.exports=n})();