"use strict";(self.webpackChunk_05_01_react_router_navigation_location_query=self.webpackChunk_05_01_react_router_navigation_location_query||[]).push([[651],{651:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(885),o=n(791),i=n(396),s=n(444),a=n(731),u=s.ZP.ul.withConfig({displayName:"Customersstyled__CustomersList",componentId:"sc-w0ezm2-0"})(["display:flex;padding:","rem;font-size:1.6rem;flex-flow:column nowrap;"],(function(e){return e.theme.space[1]})),l=(0,s.ZP)(a.rU).withConfig({displayName:"Customersstyled__CustomerLink",componentId:"sc-w0ezm2-1"})(["text-decoration:none;color:",";transition:color 150ms ease-in-out;& + &{margin-top:1rem;}:hover,:focus{color:",";}"],(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.secondary})),c=s.ZP.label.withConfig({displayName:"FilterCustomersstyled__Label",componentId:"sc-18mr9da-0"})(["display:flex;margin-bottom:","rem;flex-flow:column nowrap;font-size:",";"],(function(e){return e.theme.space[1]}),(function(e){return e.theme.fontSizes.l})),m=s.ZP.div.withConfig({displayName:"FilterCustomersstyled__Filter",componentId:"sc-18mr9da-1"})(["border-bottom:",";padding:","rem;"],(function(e){return e.theme.borders[1]}),(function(e){return e.theme.space[1]})),d=s.ZP.input.withConfig({displayName:"FilterCustomersstyled__Input",componentId:"sc-18mr9da-2"})(["margin-top:1rem;max-width:","rem;"],(function(e){return e.theme.space[6]})),f=n(184),p=function(e){var t=e.handleFilter,n=e.value;return(0,f.jsx)(m,{children:(0,f.jsxs)(c,{children:["Filter customers",(0,f.jsx)(d,{type:"text",value:n,placeholder:"Client's name",onChange:function(e){return t(e.target.value)}})]})})},h=n(739),_=function(){var e,t=(0,o.useState)(null),n=(0,r.Z)(t,2),s=n[0],c=n[1],m=(0,a.lr)(),d=(0,r.Z)(m,2),_=d[0],C=d[1],v=(0,h.TH)(),w=null!==(e=_.get("filter"))&&void 0!==e?e:"";(0,o.useEffect)((function(){(0,i.OL)().then(c)}),[]);var y=(0,o.useMemo)((function(){return null===s||void 0===s?void 0:s.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}))}),[s,w]);return(0,f.jsxs)("main",{children:[(0,f.jsx)(p,{handleFilter:function(e){C(""!==e?{filter:e}:{})},value:w}),y&&(0,f.jsx)(u,{children:y.map((function(e){var t=e.name,n=e.id;return(0,f.jsx)(l,{to:"".concat(n),state:{from:v},children:t},n)}))})]})}}}]);
//# sourceMappingURL=651.25e26561.chunk.js.map