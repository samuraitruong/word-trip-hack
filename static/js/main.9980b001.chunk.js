(this["webpackJsonpword-trip-hack"]=this["webpackJsonpword-trip-hack"]||[]).push([[0],{15:function(e,t,r){},17:function(e,t,r){},26:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(9),s=r.n(c),u=(r(15),r(2)),o=r.n(u),i=r(4),l=r(3),f=(r(17),r(6)),p=r(10),h=r.n(p);function v(){return(v=Object(i.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},n=JSON.parse(localStorage.getItem("CACHE")||"{}"),a=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="https://samuraitruong.github.io/open-vn-en-dict/data/".concat(t.toLowerCase(),".json"),r[t]=n[t],void 0!==r[t]){e.next=13;break}return e.prev=3,e.next=6,fetch(a,{method:"HEAD"});case 6:c=e.sent,r[t]=c&&200===c.status&&(c.headers.get("content-length")||0)>10,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(a,t,e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),e.next=5,h()(50,t,a);case 5:return localStorage.setItem("CACHE",JSON.stringify(Object(f.a)(Object(f.a)({},n),r))),e.abrupt("return",Object.entries(r).filter((function(e){var t=Object(l.a)(e,2);t[0];return t[1]})).map((function(e){return e[0]})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){for(var t=Array.from(e.replace(/\\s/gi,"")),r=t.length,n=[],a=0;a<r;a++)for(var c=0;c<r;c++)for(var s=0;s<r;s++)3===new Set([a,c,s]).size&&n.push(t[a]+t[c]+t[s]);return n.sort()}var b=r(0);function O(e){var t=Object(n.useState)(""),r=Object(l.a)(t,2),a=r[0],c=r[1],s=Object(n.useCallback)((function(e){return function(e){return v.apply(this,arguments)}(e)}),[]);return Object(n.useEffect)((function(){function t(){return(t=Object(i.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:r=t.sent,c(r.join("\n"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c("Please wait ...."),function(){t.apply(this,arguments)}()}),[s,e]),a}var d=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(j(r)),s=Object(l.a)(c,2),u=s[0],o=s[1],i=O(u),f=function(e){var t=[];switch(e){case 3:t=j(r);break;case 4:t=function(e){var t=Array.from(e.replace(/\\s/gi,"")),r=t.length;if(r<4)return[];for(var n=[],a=0;a<r;a++)for(var c=0;c<r;c++)for(var s=0;s<r;s++)for(var u=0;u<r;u++)4===new Set([a,c,s,u]).size&&n.push(t[a]+t[c]+t[s]+t[u]);return n}(r);break;case 5:t=function(e){var t=Array.from(e.replace(/\\s/gi,"")),r=t.length;if(r<5)return[];for(var n=[],a=0;a<r;a++)for(var c=0;c<r;c++)for(var s=0;s<r;s++)for(var u=0;u<r;u++)for(var o=0;o<r;o++)5===new Set([a,c,s,u,o]).size&&n.push(t[a]+t[c]+t[s]+t[u]+t[o]);return n}(r)}o(t)};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"InputWrap",children:[Object(b.jsx)("input",{type:"text",className:"Input",onChange:function(e){a(e.target.value.toUpperCase())},value:r,placeholder:"INPUT"}),Object(b.jsxs)("ul",{className:"ButtonList",children:[r.length>=3&&Object(b.jsx)("li",{onClick:function(){return f(3)},children:"3"}),r.length>=4&&Object(b.jsx)("li",{onClick:function(){return f(4)},children:"4"}),r.length>=5&&Object(b.jsx)("li",{onClick:function(){return f(5)},children:"5"})]})]}),Object(b.jsx)("textarea",{className:"Result","aria-label":"Output",placeholder:"No Results",value:i,readOnly:!0})]})},g=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,27)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),g()}},[[26,1,2]]]);
//# sourceMappingURL=main.9980b001.chunk.js.map