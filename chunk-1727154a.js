function n(){}const t=n=>n;function e(n,t){for(const e in t)n[e]=t[e];return n}function o(n){return n()}function r(){return Object.create(null)}function c(n){n.forEach(o)}function s(n){return"function"==typeof n}function a(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function u(n,t,e){n.$$.on_destroy.push(t.subscribe(e))}function i(n,t,e){if(n){const o=f(n,t,e);return n[0](o)}}function f(n,t,o){return n[1]?e({},e(t.$$scope.ctx,n[1](o?o(t):{}))):t.$$scope.ctx}function l(n,t,o,r){return n[1]?e({},e(t.$$scope.changed||{},n[1](r?r(o):{}))):t.$$scope.changed||{}}const d=new Set;let $,h=!1;function p(){d.forEach(n=>{n[0](window.performance.now())||(d.delete(n),n[1]())}),(h=d.size>0)&&requestAnimationFrame(p)}function m(n){let t;return h||(h=!0,requestAnimationFrame(p)),{promise:new Promise(e=>{d.add(t=[n,e])}),abort(){d.delete(t)}}}function b(n,t){n.appendChild(t)}function g(n,t,e){n.insertBefore(t,e)}function y(n){n.parentNode.removeChild(n)}function v(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function x(n){return document.createElement(n)}function k(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function _(n){return document.createTextNode(n)}function E(){return _(" ")}function w(){return _("")}function A(n,t,e,o){return n.addEventListener(t,e,o),()=>n.removeEventListener(t,e,o)}function C(n,t,e){null==e?n.removeAttribute(t):n.setAttribute(t,e)}function q(n,t){t=""+t,n.data!==t&&(n.data=t)}function N(n,t,e){n.style.setProperty(t,e)}function j(n,t,e){n.classList[e?"add":"remove"](t)}function F(n){$=n}function L(){const n=$;return(t,e)=>{const o=n.$$.callbacks[t];if(o){const r=function(n,t){const e=document.createEvent("CustomEvent");return e.initCustomEvent(n,!1,!1,t),e}(t,e);o.slice().forEach(t=>{t.call(n,r)})}}}const O=[];let P;const S=[],z=[],B=[];function D(n){S.push(n)}function G(n){z.push(n)}function H(n){B.push(n)}function I(){const n=new Set;do{for(;O.length;){const n=O.shift();F(n),M(n.$$)}for(;S.length;)S.shift()();for(;z.length;){const t=z.pop();n.has(t)||(t(),n.add(t))}}while(O.length);for(;B.length;)B.pop()();P=null}function M(n){n.fragment&&(n.update(n.dirty),c(n.before_render),n.fragment.p(n.dirty,n.ctx),n.dirty=null,n.after_render.forEach(G))}let T;function J(){T={remaining:0,callbacks:[]}}function K(){T.remaining||c(T.callbacks)}function Q(n){T.callbacks.push(n)}function R(n,t){const o=t.token={};function r(n,r,c,s){if(t.token!==o)return;t.resolved=c&&{[c]:s};const a=e(e({},t.ctx),t.resolved),u=n&&(t.current=n)(a);t.block&&(t.blocks?t.blocks.forEach((n,e)=>{e!==r&&n&&(J(),Q(()=>{n.d(1),t.blocks[e]=null}),n.o(1),K())}):t.block.d(1),u.c(),u.i&&u.i(1),u.m(t.mount(),t.anchor),I()),t.block=u,t.blocks&&(t.blocks[r]=u)}if((c=n)&&"function"==typeof c.then){if(n.then(n=>{r(t.then,1,t.value,n)},n=>{r(t.catch,2,t.error,n)}),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,n),!0;t.resolved={[t.value]:n}}var c}function U(n,t,e){-1!==n.$$.props.indexOf(t)&&(n.$$.bound[t]=e,e(n.$$.ctx[t]))}function V(n,t,e){const{fragment:r,on_mount:a,on_destroy:u,after_render:i}=n.$$;r.m(t,e),G(()=>{const t=a.map(o).filter(s);u?u.push(...t):c(t),n.$$.on_mount=[]}),i.forEach(G)}function W(n,t){n.$$.dirty||(O.push(n),P||(P=Promise.resolve()).then(I),n.$$.dirty={}),n.$$.dirty[t]=!0}function X(t,e,o,s,a,u){const i=$;F(t);const f=e.props||{},l=t.$$={fragment:null,ctx:null,props:u,update:n,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let d=!1;var h;l.ctx=o?o(t,f,(n,e)=>{l.ctx&&a(l.ctx[n],l.ctx[n]=e)&&(l.bound[n]&&l.bound[n](e),d&&W(t,n))}):f,l.update(),d=!0,c(l.before_render),l.fragment=s(l.ctx),e.target&&(e.hydrate?l.fragment.l((h=e.target,Array.from(h.childNodes))):l.fragment.c(),e.intro&&t.$$.fragment.i&&t.$$.fragment.i(),V(t,e.target,e.anchor),I()),F(i)}class Y{$destroy(){var t,e;e=!0,(t=this).$$&&(c(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(){}}export{k as A,c as B,u as C,L as D,j as E,v as F,D as G,U as H,H as I,Y as a,X as b,a as c,R as d,w as e,A as f,g,e as h,y as i,i as j,x as k,_ as l,N as m,b as n,q as o,l as p,f as q,V as r,J as s,Q as t,K as u,E as v,n as w,C as x,t as y,m as z};
//# sourceMappingURL=chunk-1727154a.js.map
