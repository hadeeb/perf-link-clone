function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function r(e){return e()}function o(){return Object.create(null)}function a(e){e.forEach(r)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t,n){e.$$.on_destroy.push(t.subscribe(n))}function l(e,t,n){if(e){const r=u(e,t,n);return e[0](r)}}function u(e,t,r){return e[1]?n({},n(t.$$scope.ctx,e[1](r?r(t):{}))):t.$$scope.ctx}function d(e,t,r,o){return e[1]?n({},n(t.$$scope.changed||{},e[1](o?o(r):{}))):t.$$scope.changed||{}}const f=new Set;let p=!1,g;function m(){f.forEach(e=>{e[0](window.performance.now())||(f.delete(e),e[1]())}),(p=f.size>0)&&requestAnimationFrame(m)}function h(e){let t;return p||(p=!0,requestAnimationFrame(m)),{promise:new Promise(n=>{f.add(t=[e,n])}),abort(){f.delete(t)}}}function $(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n)}function b(e){e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function k(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function F(){return x(" ")}function A(){return x("")}function _(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function C(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function N(e){return Array.from(e.childNodes)}function j(e,t){t=""+t,e.data!==t&&(e.data=t)}function P(e,t,n){e.classList[n?"add":"remove"](t)}function E(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}function O(e){g=e}function S(){if(!g)throw new Error("Function called outside component initialization");return g}function z(e){S().$$.on_mount.push(e)}function T(){const e=g;return(t,n)=>{const r=e.$$.callbacks[t];if(r){const o=E(t,n);r.slice().forEach(t=>{t.call(e,o)})}}}function M(e){return S().$$.context.get(e)}const L=[];let W;const D=[],H=[];function B(){W||(W=Promise.resolve()).then(R)}function q(e){H.push(e)}function I(e){D.push(e)}function R(){const e=new Set;do{for(;L.length;){const e=L.shift();O(e),Z(e.$$)}for(;D.length;)D.shift()();for(;H.length;){const t=H.pop();e.has(t)||(t(),e.add(t))}}while(L.length);W=null}function Z(e){e.fragment&&(e.update(e.dirty),a(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(q))}let U;function G(){U={remaining:0,callbacks:[]}}function J(){U.remaining||a(U.callbacks)}function V(e){U.callbacks.push(e)}function K(e,t){const n={},r={},o={};let a=e.length;for(;a--;){const s=e[a],i=t[a];if(i){for(const e in s)e in i||(r[e]=1);for(const e in i)o[e]||(n[e]=i[e],o[e]=1);e[a]=i}else for(const e in s)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function X(e,t,n){-1!==e.$$.props.indexOf(t)&&(e.$$.bound[t]=n,n(e.$$.ctx[t]))}function Q(e,t,n){const{fragment:o,on_mount:i,on_destroy:c,after_render:l}=e.$$;o.m(t,n),q(()=>{const t=i.map(r).filter(s);c?c.push(...t):a(t),e.$$.on_mount=[]}),l.forEach(q)}function Y(e,t){e.$$&&(a(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function ee(e,t){e.$$.dirty||(L.push(e),B(),e.$$.dirty={}),e.$$.dirty[t]=!0}function te(t,n,r,s,i,c){const l=g;O(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(l?l.$$.context:[]),callbacks:o(),dirty:null};let f=!1;d.ctx=r?r(t,u,(e,n)=>{if(d.bound[e]&&d.bound[e](n),d.ctx){const r=i(n,d.ctx[e]);return f&&r&&ee(t,e),d.ctx[e]=n,r}}):u,d.update(),f=!0,a(d.before_render),d.fragment=s(d.ctx),n.target&&(n.hydrate?d.fragment.l(N(n.target)):d.fragment.c(),n.intro&&t.$$.fragment.i&&t.$$.fragment.i(),Q(t,n.target,n.anchor),R()),O(l)}class ne{$destroy(){Y(this,!0),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const re={},oe={match:{path:"/"},root:!0};function ae(e){var t,n;const r=e.$$slots.default,o=l(r,e,null);return{c(){o||(t=x("No component")),o&&o.c()},l(e){o&&o.l(e)},m(e,r){o?o.m(e,r):v(e,t,r),n=!0},p(e,t){o&&o.p&&e.$$scope&&o.p(d(r,t,e),u(r,t,null))},i(e){n||(o&&o.i&&o.i(e),n=!0)},o(e){o&&o.o&&o.o(e),n=!1},d(e){o||e&&b(t),o&&o.d(e)}}}function se(e){var t,r,o=[e.selected.props],a=e.selected.component;function s(e){let t={};for(var r=0;r<o.length;r+=1)t=n(t,o[r]);return{props:t}}if(a)var i=new a(s());return{c(){i&&i.$$.fragment.c(),t=A()},m(e,n){i&&Q(i,e,n),v(e,t,n),r=!0},p(e,n){var r=e.selected?K(o,[n.selected.props]):{};if(a!==(a=n.selected.component)){if(i){G();const e=i;V(()=>{e.$destroy()}),e.$$.fragment.o(1),J()}a?((i=new a(s())).$$.fragment.c(),i.$$.fragment.i(1),Q(i,t.parentNode,t)):i=null}else a&&i.$set(r)},i(e){r||(i&&i.$$.fragment.i(e),r=!0)},o(e){i&&i.$$.fragment.o(e),r=!1},d(e){e&&b(t),i&&i.$destroy(e)}}}function ie(e){var t,n,r,o,a,s=[se,ae],i=[];function c(e){return e.selected?0:1}return t=c(e),n=i[t]=s[t](e),{c(){n.c(),r=A(),a=_(window,"hashchange",e.onHashChange)},m(e,n){i[t].m(e,n),v(e,r,n),o=!0},p(e,o){var a=t;(t=c(o))===a?i[t].p(e,o):(G(),V(()=>{i[a].d(1),i[a]=null}),n.o(1),J(),(n=i[t])||(n=i[t]=s[t](o)).c(),n.i(1),n.m(r.parentNode,r))},i(e){o||(n&&n.i(),o=!0)},o(e){n&&n.o(),o=!1},d(e){i[t].d(e),e&&b(r),a()}}}function ce(e,t,n){let{routes:r}=t;const{match:o,root:a}=M(re)||oe;let s=null;function i(){const e=location.hash.slice(o.path.length),t=r.find(t=>!t.path||"*"===t.path&&e||e.startsWith(t.path));t?s&&s.component===t.component||(s={component:t.component,props:t.props||{}},n("selected",s)):n("selected",s=null)}z(i);let{$$slots:c={},$$scope:l}=t;return e.$set=(e=>{"routes"in e&&n("routes",r=e.routes),"$$scope"in e&&n("$$scope",l=e.$$scope)}),{routes:r,selected:s,onHashChange:function(){a&&i()},$$slots:c,$$scope:l}}class le extends ne{constructor(e){super(),te(this,e,ce,ie,i,["routes"])}}function ue(e,t,n){e.addEventListener("message",function(r){var o=r.data,a=o.id;if("RPC"===o.type&&null!=a)if(o.method){var s=t[o.method];null==s?e.postMessage({type:"RPC",id:a,error:"NO_SUCH_METHOD"}):Promise.resolve().then(function(){return s.apply(null,o.params)}).then(function(t){e.postMessage({type:"RPC",id:a,result:t})}).catch(function(t){e.postMessage({type:"RPC",id:a,error:""+t})})}else{var i=n[a];if(null==i)throw Error("Unknown callback "+a);delete n[a],o.error?i[1](Error(o.error)):i[0](o.result)}})}function de(e,t){var n=this,r={},o="__xpo"+Math.random().toString().substring(2)+"__";"function"==typeof e&&(e="("+Function.prototype.toString.call(e)+")("+o+")"),e=function(e,t,n){return e=(e=e.replace(/^(\s*)export\s+default\s+/m,function(e,r){return n.default=!0,""+r+t+".default="})).replace(/^(\s*)export\s+((?:async\s*)?function(?:\s*\*)?|const|let|var)(\s+)([a-zA-Z$_][a-zA-Z0-9$_]*)/gm,function(e,r,o,a,s){return n[s]=!0,""+r+t+"."+s+"="+o+a+s}),"var "+t+"={};\n"+e+"\n"+t+";"}(e,o,r)+"\n("+Function.prototype.toString.call(ue)+")(self,"+o+",{})";var a,s=URL.createObjectURL(new Blob([e])),i=new Worker(s,t),c=i.terminate,l={},u=0;for(a in i.kill=function(e){i.postMessage({type:"KILL",signal:e}),setTimeout(i.terminate)},i.terminate=function(){URL.revokeObjectURL(s),c.call(n)},i.call=function(e,t){return new Promise(function(n,r){var o="rpc"+ ++u;l[o]=[n,r],i.postMessage({type:"RPC",id:o,method:e,params:t})})},i.rpcMethods={},ue(i,i.rpcMethods,l),i.expose=function(e){i[a]=function(){return i.call(e,[].slice.call(arguments))}},r)a in i||i.expose(a);return i}const fe=100,pe=e=>e.sort()[Math.ceil(e.length/2)],ge=e=>Math.floor(1e3*e);async function me(e){const t=[];try{let n=fe;for(;n>0;){let r=eval(`()=> {${e.before};let start = performance.now();${e.code};let end = performance.now();return end - start;}`)();t.push(r),n--}return{error:!1,median:pe(t)}}catch(e){return{error:!0,median:0}}}async function he(e){const t=`function run() {try{${e.before};let start = performance.now();${e.code};let end = performance.now();return end - start;}catch(e){return -1}}`;try{eval(t)}catch(e){return{error:!0,median:0}}const n=de(`export ${t}`),r=[];let o=fe,a=!1;for(;o>0;){let e=await n.run();if(e<0){a=!0;break}r.push(e),o--}return a?{error:!0,median:0}:{error:!1,median:pe(r)}}function $e(e,t){location.hash=`${btoa(e)}/${btoa(JSON.stringify(t))}`}function ve(e,t){var n;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout(function(){n=null,e.apply(r,o)},t)}}function be(t){var n,r,o,a,s,i,c,l,u;return{c(){n=w("main"),(r=w("h1")).textContent="Home",o=F(),(a=w("button")).textContent="Start Tests",s=F(),(i=w("a")).textContent="About",c=F(),l=w("div"),r.className="svelte-u72uzs",i.href="#about",i.className="svelte-u72uzs",l.className="svelte-u72uzs",u=_(a,"click",ye)},m(e,t){v(e,n,t),$(n,r),$(n,o),$(n,a),$(n,s),$(n,i),$(n,c),$(n,l)},p:e,i:e,o:e,d(e){e&&b(n),u()}}}function ye(){$e("const data = [...Array(10000).keys()]",["data.find(x => x === 5000)","data.find(x => x === 1000)"])}class we extends ne{constructor(e){super(),te(this,e,null,be,i,[])}}function ke(t){var n,r,o;return{c(){(n=w("h1")).textContent="About",r=F(),(o=w("a")).textContent="Home",n.className="svelte-1rrmtdn",o.href="/"},m(e,t){v(e,n,t),v(e,r,t),v(e,o,t)},p:e,i:e,o:e,d(e){e&&(b(n),b(r),b(o))}}}class xe extends ne{constructor(e){super(),te(this,e,null,ke,i,[])}}var Fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ae(e,t){return e(t={exports:{}},t.exports),t.exports}var _e=Ae(function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof o?new o(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var o,a,s=r.util.type(t);switch(n=n||{},s){case"Object":if(a=r.util.objId(t),n[a])return n[a];for(var i in o={},n[a]=o,t)t.hasOwnProperty(i)&&(o[i]=e(t[i],n));return o;case"Array":return a=r.util.objId(t),n[a]?n[a]:(o=[],n[a]=o,t.forEach(function(t,r){o[r]=e(t,n)}),o);default:return t}}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var o in t)n[o]=t[o];return n},insertBefore:function(e,t,n,o){var a=(o=o||r.languages)[e],s={};for(var i in a)if(a.hasOwnProperty(i)){if(i==t)for(var c in n)n.hasOwnProperty(c)&&(s[c]=n[c]);n.hasOwnProperty(i)||(s[i]=a[i])}var l=o[e];return o[e]=s,r.languages.DFS(r.languages,function(t,n){n===l&&t!=e&&(this[t]=s)}),s},DFS:function e(t,n,o,a){a=a||{};var s=r.util.objId;for(var i in t)if(t.hasOwnProperty(i)){n.call(t,i,t[i],o||i);var c=t[i],l=r.util.type(c);"Object"!==l||a[s(c)]?"Array"!==l||a[s(c)]||(a[s(c)]=!0,e(c,n,i,a)):(a[s(c)]=!0,e(c,n,null,a))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var o={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",o);for(var a,s=o.elements||e.querySelectorAll(o.selector),i=0;a=s[i++];)r.highlightElement(a,!0===t,o.callback)},highlightElement:function(n,o,a){for(var s,i,c=n;c&&!t.test(c.className);)c=c.parentNode;c&&(s=(c.className.match(t)||[,""])[1].toLowerCase(),i=r.languages[s]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s,n.parentNode&&(c=n.parentNode,/pre/i.test(c.nodeName)&&(c.className=c.className.replace(t,"").replace(/\s+/g," ")+" language-"+s));var l={element:n,language:s,grammar:i,code:n.textContent},u=function(e){l.highlightedCode=e,r.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,r.hooks.run("after-highlight",l),r.hooks.run("complete",l),a&&a.call(l.element)};if(r.hooks.run("before-sanity-check",l),l.code)if(r.hooks.run("before-highlight",l),l.grammar)if(o&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(r.highlight(l.code,l.grammar,l.language));else u(r.util.encode(l.code));else r.hooks.run("complete",l)},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",a),a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),o.stringify(r.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,n,a,s,i,c){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==c)return;var u=n[l];u="Array"===r.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var f=u[d],p=f.inside,g=!!f.lookbehind,m=!!f.greedy,h=0,$=f.alias;if(m&&!f.pattern.global){var v=f.pattern.toString().match(/[imuy]*$/)[0];f.pattern=RegExp(f.pattern.source,v+"g")}f=f.pattern||f;for(var b=a,y=s;b<t.length;y+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof o)){if(m&&b!=t.length-1){if(f.lastIndex=y,!(C=f.exec(e)))break;for(var k=C.index+(g?C[1].length:0),x=C.index+C[0].length,F=b,A=y,_=t.length;F<_&&(A<x||!t[F].type&&!t[F-1].greedy);++F)k>=(A+=t[F].length)&&(++b,y=A);if(t[b]instanceof o)continue;N=F-b,w=e.slice(y,A),C.index-=y}else{f.lastIndex=0;var C=f.exec(w),N=1}if(C){g&&(h=C[1]?C[1].length:0);x=(k=C.index+h)+(C=C[0].slice(h)).length;var j=w.slice(0,k),P=w.slice(x),E=[b,N];j&&(++b,y+=j.length,E.push(j));var O=new o(l,p?r.tokenize(C,p):C,$,C,m);if(E.push(O),P&&E.push(P),Array.prototype.splice.apply(t,E),1!=N&&r.matchGrammar(e,t,n,b,y,!0,l),i)break}else if(i)break}}}}},tokenize:function(e,t){var n=[e],o=t.rest;if(o){for(var a in o)t[a]=o[a];delete t.rest}return r.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var o,a=0;o=n[a++];)o(t)}},Token:o};function o(e,t,n,r,o){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!o}if(e.Prism=r,o.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(n){return o.stringify(n,t,e)}).join("");var a={type:e.type,content:o.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,s)}r.hooks.run("wrap",a);var i=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(i?" "+i:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),o=n.language,a=n.code,s=n.immediateClose;e.postMessage(r.highlight(a,r.languages[o],o)),s&&e.close()},!1),r):r;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(r.filename=a.src,r.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==Fe&&(Fe.Prism=t)});function Ce(t){var n,r,o,a,s;return{c(){n=w("div"),r=w("textarea"),o=F(),a=w("pre"),C(r,"aria-label",t.label),r.className="svelte-sjzmsw",C(a,"aria-hidden","true"),a.className="svelte-sjzmsw",n.className="editor svelte-sjzmsw",s=_(r,"input",t.textarea_input_handler)},m(e,s){v(e,n,s),$(n,r),r.value=t.code,$(n,o),$(n,a),a.innerHTML=t.styledCode},p(e,t){e.code&&(r.value=t.code),e.label&&C(r,"aria-label",t.label),e.styledCode&&(a.innerHTML=t.styledCode)},i:e,o:e,d(e){e&&b(n),s()}}}function Ne(e,t,n){let r,{code:o,label:a}=t;return e.$set=(e=>{"code"in e&&n("code",o=e.code),"label"in e&&n("label",a=e.label)}),e.$$.update=((e={code:1})=>{e.code&&(r=Prism.highlight(o,Prism.languages.javascript)+"<br />",n("styledCode",r))}),{code:o,label:a,styledCode:r,textarea_input_handler:function(){o=this.value,n("code",o)}}}Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;class je extends ne{constructor(e){super(),te(this,e,Ne,Ce,i,["code","label"])}}function Pe(t,n=e){let r;const o=[];function a(e){if(i(t,e)){if(t=e,!r)return;o.forEach(e=>e[1]()),o.forEach(e=>e[0](t))}}return{set:a,update:function(e){a(e(t))},subscribe:function(s,i=e){const c=[s,i];return o.push(c),1===o.length&&(r=n(a)||e),s(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&r()}}}}function Ee(e){var t=e-1;return t*t*t+1}function Oe(e){return"[object Date]"===Object.prototype.toString.call(e)}function Se(e,t){if(e===t||e!=e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const n=t.map((t,n)=>Se(e[n],t));return e=>n.map(t=>t(e))}if("object"===n){if(!e||!t)throw new Error("Object cannot be null");if(Oe(e)&&Oe(t)){e=e.getTime();const n=(t=t.getTime())-e;return t=>new Date(e+t*n)}const n=Object.keys(t),r={};return n.forEach(n=>{r[n]=Se(e[n],t[n])}),e=>{const t={};return n.forEach(n=>{t[n]=r[n](e)}),t}}if("number"===n){const n=t-e;return t=>e+t*n}throw new Error(`Cannot interpolate ${n} values`)}function ze(e,r={}){const o=Pe(e);let a,s=e;function i(i,c){s=i;let l=a,u=!1,{delay:d=0,duration:f=400,easing:p=t,interpolate:g=Se}=n(n({},r),c);const m=window.performance.now()+d;let $;return(a=h(t=>{if(t<m)return!0;u||($=g(e,i),"function"==typeof f&&(f=f(e,i)),u=!0),l&&(l.abort(),l=null);const n=t-m;return n>f?(o.set(e=i),!1):(o.set(e=$(p(n/f))),!0)})).promise}return{set:i,update:(t,n)=>i(t(s,e),n),subscribe:o.subscribe}}function Te(t){var n,r;return{c(){n=k("svg"),C(r=k("path"),"d","M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"width","24"),C(n,"height","24"),C(n,"viewBox","0 0 24 24"),C(n,"fill","#ffffff4d")},m(e,t){v(e,n,t),$(n,r)},p:e,i:e,o:e,d(e){e&&b(n)}}}class Me extends ne{constructor(e){super(),te(this,e,null,Te,i,[])}}function Le(t){var n,r;return{c(){n=k("svg"),C(r=k("path"),"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"width","24"),C(n,"height","24"),C(n,"viewBox","0 0 24 24"),C(n,"fill","#ffffff4d")},m(e,t){v(e,n,t),$(n,r)},p:e,i:e,o:e,d(e){e&&b(n)}}}class We extends ne{constructor(e){super(),te(this,e,null,Le,i,[])}}function De(e){var t,n,r=parseInt(e.$progress);return{c(){t=x(r),n=x(" μs")},m(e,r){v(e,t,r),v(e,n,r)},p(e,n){e.$progress&&r!==(r=parseInt(n.$progress))&&j(t,r)},d(e){e&&(b(t),b(n))}}}function He(t){var n;return{c(){n=x("Failed")},m(e,t){v(e,n,t)},p:e,d(e){e&&b(n)}}}function Be(e){var t,n,r,o,s,i,c,l;function u(e){return e.error?He:De}var d=u(e),f=d(e),p=new Me({}),g=new We({});return{c(){t=w("div"),n=w("p"),f.c(),r=F(),o=w("button"),p.$$.fragment.c(),s=F(),i=w("button"),g.$$.fragment.c(),n.className="svelte-1mf9pqj",C(o,"aria-label","copy test"),o.className="svelte-1mf9pqj",C(i,"aria-label","delete test"),i.className="svelte-1mf9pqj",t.className="svelte-1mf9pqj",l=[_(o,"click",e.onCopy),_(i,"click",e.onDelete)]},m(e,a){v(e,t,a),$(t,n),f.m(n,null),$(t,r),$(t,o),Q(p,o,null),$(t,s),$(t,i),Q(g,i,null),c=!0},p(e,t){d===(d=u(t))&&f?f.p(e,t):(f.d(1),(f=d(t))&&(f.c(),f.m(n,null)))},i(e){c||(p.$$.fragment.i(e),g.$$.fragment.i(e),c=!0)},o(e){p.$$.fragment.o(e),g.$$.fragment.o(e),c=!1},d(e){e&&b(t),f.d(),p.$destroy(),g.$destroy(),a(l)}}}function qe(e,t,n){let r,{time:o=0,error:a=!1}=t;const s=ze(0,{duration:1e3,easing:Ee});c(e,s,e=>{n("$progress",r=e)});const i=T();return e.$set=(e=>{"time"in e&&n("time",o=e.time),"error"in e&&n("error",a=e.error)}),e.$$.update=((e={time:1})=>{e.time&&s.set(o||0)}),{time:o,error:a,progress:s,onCopy:function(){i("copy")},onDelete:function(){i("delete")},$progress:r}}class Ie extends ne{constructor(e){super(),te(this,e,qe,Be,i,["time","error"])}}function Re(t){var n;return{c(){(n=w("progress")).value=t.$progress,n.className="svelte-38fkjr",P(n,"error",t.error)},m(e,t){v(e,n,t)},p(e,t){e.$progress&&(n.value=t.$progress),e.error&&P(n,"error",t.error)},i:e,o:e,d(e){e&&b(n)}}}function Ze(e,t,n){let r,{value:o=0,error:a=!1}=t;const s=ze(0,{duration:1e3,easing:Ee});return c(e,s,e=>{n("$progress",r=e)}),e.$set=(e=>{"value"in e&&n("value",o=e.value),"error"in e&&n("error",a=e.error)}),e.$$.update=((e={value:1})=>{e.value&&s.set(o||0)}),{value:o,error:a,progress:s,$progress:r}}class Ue extends ne{constructor(e){super(),te(this,e,Ze,Re,i,["value","error"])}}function Ge(e,t,n){const r=Object.create(e);return r.result=t[n],r.i=n,r}function Je(e){var t,n=new Ue({props:{value:e.result,error:e.data[e.i].error}});return{c(){n.$$.fragment.c()},m(e,r){Q(n,e,r),t=!0},p(e,t){var r={};e.graphData&&(r.value=t.result),e.data&&(r.error=t.data[t.i].error),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function Ve(e){for(var t,n,r=e.graphData,o=[],a=0;a<r.length;a+=1)o[a]=Je(Ge(e,r,a));function s(e,t,n){o[e]&&(t&&V(()=>{o[e].d(t),o[e]=null}),o[e].o(n))}return{c(){t=w("aside");for(var e=0;e<o.length;e+=1)o[e].c()},m(e,r){v(e,t,r);for(var a=0;a<o.length;a+=1)o[a].m(t,null);n=!0},p(e,n){if(e.graphData||e.data){r=n.graphData;for(var a=0;a<r.length;a+=1){const s=Ge(n,r,a);o[a]?(o[a].p(e,s),o[a].i(1)):(o[a]=Je(s),o[a].c(),o[a].i(1),o[a].m(t,null))}for(G();a<o.length;a+=1)s(a,1,1);J()}},i(e){if(!n){for(var t=0;t<r.length;t+=1)o[t].i();n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)s(e,0);n=!1},d(e){e&&b(t),y(o,e)}}}function Ke(e,t,n){let{data:r=[]}=t,o=[];return e.$set=(e=>{"data"in e&&n("data",r=e.data)}),e.$$.update=((e={data:1,graphData:1})=>{if(e.data||e.graphData){const e=r.reduce((e,t)=>t.median>e?t.median:e,0);o=r.map(t=>t.error||!e?1:t.median/e),n("graphData",o),console.log(r,o)}}),{data:r,graphData:o}}class Xe extends ne{constructor(e){super(),te(this,e,Ke,Ve,i,["data"])}}function Qe(e,t,n){const r=Object.create(e);return r.code=t[n],r.each_value=t,r.i=n,r}function Ye(e){var t;return{c(){(t=w("div")).textContent="Add a test"},m(e,n){v(e,t,n)},d(e){e&&b(t)}}}function et(e){var t,n,r,o;function a(t){e.editor_code_binding_1.call(null,t,e)&&(n=!0)}let s={label:"Test case "+e.i};void 0!==e.code&&(s.code=e.code);var i=new je({props:s});I(()=>X(i,"code",a));var c=new Ie({props:{time:e.vals[e.i],error:e.errors[e.i]}});return c.$on("copy",function(){return e.copy_handler(e)}),c.$on("delete",function(){return e.delete_handler(e)}),{c(){t=w("li"),i.$$.fragment.c(),r=F(),c.$$.fragment.c(),t.className="svelte-ukl2e"},m(e,n){v(e,t,n),Q(i,t,null),$(t,r),Q(c,t,null),o=!0},p(t,r){e=r;var o={};!n&&t.codes&&(o.code=e.code),i.$set(o),n=!1;var a={};t.vals&&(a.time=e.vals[e.i]),t.errors&&(a.error=e.errors[e.i]),c.$set(a)},i(e){o||(i.$$.fragment.i(e),c.$$.fragment.i(e),o=!0)},o(e){i.$$.fragment.o(e),c.$$.fragment.o(e),o=!1},d(e){e&&b(t),i.$destroy(),c.$destroy()}}}function tt(e){var t,n,r,o,a=new Xe({props:{data:e.results}});return{c(){(t=w("button")).textContent="Run Tests",n=F(),a.$$.fragment.c(),t.className="svelte-ukl2e",o=_(t,"click",e.runTests)},m(e,o){v(e,t,o),v(e,n,o),Q(a,e,o),r=!0},p(e,t){var n={};e.results&&(n.data=t.results),a.$set(n)},i(e){r||(a.$$.fragment.i(e),r=!0)},o(e){a.$$.fragment.o(e),r=!1},d(e){e&&(b(t),b(n)),a.$destroy(e),o()}}}function nt(e){var t,n,r,o,s,i,c,l,u,d,f,p,g,m,h,k,N,j,P,E,O;function S(t){e.editor_code_binding.call(null,t)&&(l=!0)}let z={label:"Setup Code"};void 0!==e.before&&(z.code=e.before);var T=new je({props:z});I(()=>X(T,"code",S));for(var M=e.codes,L=[],W=0;W<M.length;W+=1)L[W]=et(Qe(e,M,W));function D(e,t,n){L[e]&&(t&&V(()=>{L[e].d(t),L[e]=null}),L[e].o(n))}var H=null;M.length||(H=Ye(e)).c();var B=e.codes.length&&tt(e);return{c(){t=w("div"),(n=w("h3")).textContent="Setup Code",r=F(),o=w("label"),s=w("input"),i=x(" Run\n    In WebWorker"),c=F(),T.$$.fragment.c(),u=F(),d=w("br"),f=F(),p=w("div"),(g=w("h3")).textContent="Test cases",m=F(),(h=w("button")).textContent="Add Case",k=F(),N=w("ul");for(var a=0;a<L.length;a+=1)L[a].c();j=F(),B&&B.c(),P=A(),n.className="svelte-ukl2e",s.className="checkbox svelte-ukl2e",C(s,"type","checkbox"),o.className="svelte-ukl2e",t.className="tests-heading svelte-ukl2e",g.className="svelte-ukl2e",h.className="add-button svelte-ukl2e",p.className="tests-heading svelte-ukl2e",O=[_(window,"hashchange",e.onHashChange),_(s,"change",e.input_change_handler),_(h,"click",e.addTestCase)]},m(a,l){v(a,t,l),$(t,n),$(t,r),$(t,o),$(o,s),s.checked=e.useWorker,$(o,i),v(a,c,l),Q(T,a,l),v(a,u,l),v(a,d,l),v(a,f,l),v(a,p,l),$(p,g),$(p,m),$(p,h),v(a,k,l),v(a,N,l);for(var b=0;b<L.length;b+=1)L[b].m(N,null);H&&H.m(N,null),v(a,j,l),B&&B.m(a,l),v(a,P,l),E=!0},p(e,t){e.useWorker&&(s.checked=t.useWorker);var n={};if(!l&&e.before&&(n.code=t.before),T.$set(n),l=!1,e.vals||e.errors||e.codes){M=t.codes;for(var r=0;r<M.length;r+=1){const n=Qe(t,M,r);L[r]?(L[r].p(e,n),L[r].i(1)):(L[r]=et(n),L[r].c(),L[r].i(1),L[r].m(N,null))}for(G();r<L.length;r+=1)D(r,1,1);J()}M.length?H&&(H.d(1),H=null):H||((H=Ye(t)).c(),H.m(N,null)),t.codes.length?B?(B.p(e,t),B.i(1)):((B=tt(t)).c(),B.i(1),B.m(P.parentNode,P)):B&&(G(),V(()=>{B.d(1),B=null}),B.o(1),J())},i(e){if(!E){T.$$.fragment.i(e);for(var t=0;t<M.length;t+=1)L[t].i();B&&B.i(),E=!0}},o(e){T.$$.fragment.o(e),L=L.filter(Boolean);for(let e=0;e<L.length;e+=1)D(e,0);B&&B.o(),E=!1},d(e){e&&(b(t),b(c)),T.$destroy(e),e&&(b(u),b(d),b(f),b(p),b(k),b(N)),y(L,e),H&&H.d(),e&&b(j),B&&B.d(e),e&&b(P),a(O)}}}function rt(e,t,n){let r=!0,o="",a=[],s=[],i=[],c=[];const l=ve(p,500);function u(){o=atob(location.hash.slice(1).split("/")[0]),n("before",o),a=JSON.parse(atob(location.hash.slice(1).split("/")[1])),n("codes",a)}function d(e,t){a=[...a.slice(0,t),e,...a.slice(t)],n("codes",a)}function f(e){a=[...a.slice(0,e),...a.slice(e+1)],n("codes",a)}function p(){s=Array(a.length).fill({error:!1,median:0}),n("results",s),requestAnimationFrame(()=>requestAnimationFrame(async()=>{const e=a.map(e=>(r?he:me)({code:e,before:o}));s=await Promise.all(e),n("results",s)}))}return z(u),e.$$.update=((e={results:1,before:1,codes:1,useWorker:1})=>{e.results&&(c=s.map(e=>ge(e.median)),n("vals",c),i=s.map(e=>e.error),n("errors",i)),(e.before||e.codes||e.useWorker)&&(o&&a.length&&$e(o,a),l())}),{useWorker:r,before:o,codes:a,results:s,errors:i,vals:c,onHashChange:u,addTestCase:function(){a=["",...a],n("codes",a)},addTestCaseBefore:d,deleteTestCaseAt:f,runTests:p,input_change_handler:function(){r=this.checked,n("useWorker",r)},editor_code_binding:function(e){return n("before",o=e)},editor_code_binding_1:function(e,{code:t,each_value:r,i:o}){return r[o]=e,n("codes",a)},copy_handler:function({code:e,i:t}){return d(e,t)},delete_handler:function({i:e}){return f(e)}}}class ot extends ne{constructor(e){super(),te(this,e,rt,nt,i,[])}}function at(e){var t,n=new le({props:{routes:e.routes}});return{c(){n.$$.fragment.c()},m(e,r){Q(n,e,r),t=!0},p(e,t){var r={};e.routes&&(r.routes=t.routes),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function st(e){return{routes:[{path:"about",component:xe},{path:"*",component:ot},{component:we}]}}class it extends ne{constructor(e){super(),te(this,e,st,at,i,[])}}new it({target:document.body,data:{name:"world"}});
//# sourceMappingURL=bundle.js.map
