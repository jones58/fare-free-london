(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{8097:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(418)}])},7393:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var l=n(5893),r=n(5675),s=n.n(r),i=n(1664),a=n.n(i);function c(e){let{title:t,coverImage:n,slug:r}=e,i=(0,l.jsx)(s(),{fill:!0,alt:null==n?void 0:n.node.altText,src:null==n?void 0:n.node.sourceUrl,className:"object-cover object-center min-w-100 max-w-100 hover:scale-110 hover:scale-110 transition-transform duration-300 ease-in-out"});return(0,l.jsx)("div",{className:"relative min-w-[30vw] min-h-[30vh] lg:min-w-[18vw] lg:min-h-[24vh] overflow-hidden",children:r?(0,l.jsx)(a(),{href:"/posts/".concat(r),"aria-label":t,children:i}):i})}function o(e){let{title:t,coverImage:n,excerpt:r,slug:s,category:i}=e,o=r?r.split(/[.!?()]/)[0].trim():"";return(0,l.jsx)("div",{className:"mb-6 lg:mb-0 bg-darkerBg bg-opacity-30 hover:bg-opacity-50 p-8 rounded-lg",children:(0,l.jsxs)("div",{className:"flex flex-col space-y-2 lg:space-y-3",children:[n&&(0,l.jsx)(c,{title:t,coverImage:n,slug:s}),(0,l.jsx)("h1",{className:"text-2xl text-link hover:text-hover capitalize",children:(0,l.jsx)(a(),{href:"/posts/".concat(s),dangerouslySetInnerHTML:{__html:t}})}),(0,l.jsx)("div",{className:"font-serif text-lg",dangerouslySetInnerHTML:{__html:o}})]})})}},418:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a},default:function(){return c}});var l=n(5893),r=n(7294),s=n(9568),i=n(7393),a=!0;function c(e){let{allPosts:{edges:t},Categories:n}=e,[a,c]=(0,r.useState)(null),o=a?t.filter(e=>{let{node:t}=e;return t.categories.nodes.some(e=>e.name===a)}):t;return(0,l.jsx)("div",{children:(0,l.jsx)(s.Z,{children:(0,l.jsx)("div",{className:"lg:grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5",children:o.map(e=>{let{node:t}=e;return(0,l.jsx)(i.Z,{title:t.title,coverImage:t.featuredImage,slug:t.slug,excerpt:t.excerpt,category:t.categories.nodes.map(e=>e.name)},t.slug)})})})})}}},function(e){e.O(0,[741,568,888,774,179],function(){return e(e.s=8097)}),_N_E=e.O()}]);