var PR=Object.defineProperty;var LR=(i,t,e)=>t in i?PR(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ad=(i,t,e)=>(LR(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();function Rr(){}function Kx(i){return i()}function v0(){return Object.create(null)}function rh(i){i.forEach(Kx)}function Zx(i){return typeof i=="function"}function sh(i,t){return i!=i?t==t:i!==t||i&&typeof i=="object"||typeof i=="function"}function DR(i){return Object.keys(i).length===0}function Oo(i,t){i.appendChild(t)}function rr(i,t,e){i.insertBefore(t,e||null)}function Fi(i){i.parentNode&&i.parentNode.removeChild(i)}function IR(i,t){for(let e=0;e<i.length;e+=1)i[e]&&i[e].d(t)}function Xs(i){return document.createElement(i)}function cf(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function UR(i){return document.createTextNode(i)}function Fo(){return UR(" ")}function NR(i,t,e,n){return i.addEventListener(t,e,n),()=>i.removeEventListener(t,e,n)}function gn(i,t,e){e==null?i.removeAttribute(t):i.getAttribute(t)!==e&&i.setAttribute(t,e)}function OR(i){return Array.from(i.childNodes)}let mu;function tu(i){mu=i}function Jx(){if(!mu)throw new Error("Function called outside component initialization");return mu}function Qx(i){Jx().$$.on_mount.push(i)}function FR(i){Jx().$$.on_destroy.push(i)}const Bo=[],Pf=[];let qo=[];const x0=[],BR=Promise.resolve();let Rp=!1;function zR(){Rp||(Rp=!0,BR.then(jx))}function Cp(i){qo.push(i)}const Rd=new Set;let po=0;function jx(){if(po!==0)return;const i=mu;do{try{for(;po<Bo.length;){const t=Bo[po];po++,tu(t),kR(t.$$)}}catch(t){throw Bo.length=0,po=0,t}for(tu(null),Bo.length=0,po=0;Pf.length;)Pf.pop()();for(let t=0;t<qo.length;t+=1){const e=qo[t];Rd.has(e)||(Rd.add(e),e())}qo.length=0}while(Bo.length);for(;x0.length;)x0.pop()();Rp=!1,Rd.clear(),tu(i)}function kR(i){if(i.fragment!==null){i.update(),rh(i.before_update);const t=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,t),i.after_update.forEach(Cp)}}function HR(i){const t=[],e=[];qo.forEach(n=>i.indexOf(n)===-1?t.push(n):e.push(n)),e.forEach(n=>n()),qo=t}const ff=new Set;let GR;function hf(i,t){i&&i.i&&(ff.delete(i),i.i(t))}function Cd(i,t,e,n){if(i&&i.o){if(ff.has(i))return;ff.add(i),GR.c.push(()=>{ff.delete(i),n&&(e&&i.d(1),n())}),i.o(t)}else n&&n()}function y0(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Pd(i){i&&i.c()}function df(i,t,e){const{fragment:n,after_update:r}=i.$$;n&&n.m(t,e),Cp(()=>{const a=i.$$.on_mount.map(Kx).filter(Zx);i.$$.on_destroy?i.$$.on_destroy.push(...a):rh(a),i.$$.on_mount=[]}),r.forEach(Cp)}function pf(i,t){const e=i.$$;e.fragment!==null&&(HR(e.after_update),rh(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function VR(i,t){i.$$.dirty[0]===-1&&(Bo.push(i),zR(),i.$$.dirty.fill(0)),i.$$.dirty[t/31|0]|=1<<t%31}function ah(i,t,e,n,r,a,u=null,l=[-1]){const c=mu;tu(i);const f=i.$$={fragment:null,ctx:[],props:a,update:Rr,not_equal:r,bound:v0(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:v0(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};u&&u(f.root);let d=!1;if(f.ctx=e?e(i,t.props||{},(_,p,...m)=>{const S=m.length?m[0]:p;return f.ctx&&r(f.ctx[_],f.ctx[_]=S)&&(!f.skip_bound&&f.bound[_]&&f.bound[_](S),d&&VR(i,_)),p}):[],f.update(),d=!0,rh(f.before_update),f.fragment=n?n(f.ctx):!1,t.target){if(t.hydrate){const _=OR(t.target);f.fragment&&f.fragment.l(_),_.forEach(Fi)}else f.fragment&&f.fragment.c();t.intro&&hf(i.$$.fragment),df(i,t.target,t.anchor),jx()}tu(c)}class oh{constructor(){Ad(this,"$$");Ad(this,"$$set")}$destroy(){pf(this,1),this.$destroy=Rr}$on(t,e){if(!Zx(e))return Rr;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!DR(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const WR="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(WR);class S0 extends Map{constructor(t,e=qR){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(M0(this,t))}has(t){return super.has(M0(this,t))}set(t,e){return super.set(XR(this,t),e)}delete(t){return super.delete(YR(this,t))}}function M0({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):e}function XR({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):(i.set(n,e),e)}function YR({_intern:i,_key:t},e){const n=t(e);return i.has(n)&&(e=i.get(n),i.delete(n)),e}function qR(i){return i!==null&&typeof i=="object"?i.valueOf():i}function $R(i,t,e){i=+i,t=+t,e=(r=arguments.length)<2?(t=i,i=0,1):r<3?1:+e;for(var n=-1,r=Math.max(0,Math.ceil((t-i)/e))|0,a=new Array(r);++n<r;)a[n]=i+n*e;return a}function KR(i){return i}var Ld=1,Dd=2,Pp=3,Mc=4,E0=1e-6;function ZR(i){return"translate("+i+",0)"}function JR(i){return"translate(0,"+i+")"}function QR(i){return t=>+i(t)}function jR(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),e=>+i(e)+t}function tC(){return!this.__axis}function eC(i,t){var e=[],n=null,r=null,a=6,u=6,l=3,c=typeof window<"u"&&window.devicePixelRatio>1?0:.5,f=i===Ld||i===Mc?-1:1,d=i===Mc||i===Dd?"x":"y",_=i===Ld||i===Pp?ZR:JR;function p(m){var S=n??(t.ticks?t.ticks.apply(t,e):t.domain()),y=r??(t.tickFormat?t.tickFormat.apply(t,e):KR),x=Math.max(a,0)+l,g=t.range(),R=+g[0]+c,E=+g[g.length-1]+c,w=(t.bandwidth?jR:QR)(t.copy(),c),C=m.selection?m.selection():m,U=C.selectAll(".domain").data([null]),b=C.selectAll(".tick").data(S,t).order(),k=b.exit(),T=b.enter().append("g").attr("class","tick"),L=b.select("line"),Z=b.select("text");U=U.merge(U.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),b=b.merge(T),L=L.merge(T.append("line").attr("stroke","currentColor").attr(d+"2",f*a)),Z=Z.merge(T.append("text").attr("fill","currentColor").attr(d,f*x).attr("dy",i===Ld?"0em":i===Pp?"0.71em":"0.32em")),m!==C&&(U=U.transition(m),b=b.transition(m),L=L.transition(m),Z=Z.transition(m),k=k.transition(m).attr("opacity",E0).attr("transform",function(X){return isFinite(X=w(X))?_(X+c):this.getAttribute("transform")}),T.attr("opacity",E0).attr("transform",function(X){var ut=this.parentNode.__axis;return _((ut&&isFinite(ut=ut(X))?ut:w(X))+c)})),k.remove(),U.attr("d",i===Mc||i===Dd?u?"M"+f*u+","+R+"H"+c+"V"+E+"H"+f*u:"M"+c+","+R+"V"+E:u?"M"+R+","+f*u+"V"+c+"H"+E+"V"+f*u:"M"+R+","+c+"H"+E),b.attr("opacity",1).attr("transform",function(X){return _(w(X)+c)}),L.attr(d+"2",f*a),Z.attr(d,f*x).text(y),C.filter(tC).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===Dd?"start":i===Mc?"end":"middle"),C.each(function(){this.__axis=w})}return p.scale=function(m){return arguments.length?(t=m,p):t},p.ticks=function(){return e=Array.from(arguments),p},p.tickArguments=function(m){return arguments.length?(e=m==null?[]:Array.from(m),p):e.slice()},p.tickValues=function(m){return arguments.length?(n=m==null?null:Array.from(m),p):n&&n.slice()},p.tickFormat=function(m){return arguments.length?(r=m,p):r},p.tickSize=function(m){return arguments.length?(a=u=+m,p):a},p.tickSizeInner=function(m){return arguments.length?(a=+m,p):a},p.tickSizeOuter=function(m){return arguments.length?(u=+m,p):u},p.tickPadding=function(m){return arguments.length?(l=+m,p):l},p.offset=function(m){return arguments.length?(c=+m,p):c},p}function nC(i){return eC(Pp,i)}var iC={value:()=>{}};function ty(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e||/[\s.]/.test(n))throw new Error("illegal type: "+n);e[n]=[]}return new mf(e)}function mf(i){this._=i}function rC(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}mf.prototype=ty.prototype={constructor:mf,on:function(i,t){var e=this._,n=rC(i+"",e),r,a=-1,u=n.length;if(arguments.length<2){for(;++a<u;)if((r=(i=n[a]).type)&&(r=sC(e[r],i.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++a<u;)if(r=(i=n[a]).type)e[r]=T0(e[r],i.name,t);else if(t==null)for(r in e)e[r]=T0(e[r],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new mf(i)},call:function(i,t){if((r=arguments.length-2)>0)for(var e=new Array(r),n=0,r,a;n<r;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(a=this._[i],n=0,r=a.length;n<r;++n)a[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,a=n.length;r<a;++r)n[r].value.apply(t,e)}};function sC(i,t){for(var e=0,n=i.length,r;e<n;++e)if((r=i[e]).name===t)return r.value}function T0(i,t,e){for(var n=0,r=i.length;n<r;++n)if(i[n].name===t){i[n]=iC,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}var Lp="http://www.w3.org/1999/xhtml";const w0={svg:"http://www.w3.org/2000/svg",xhtml:Lp,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function lh(i){var t=i+="",e=t.indexOf(":");return e>=0&&(t=i.slice(0,e))!=="xmlns"&&(i=i.slice(e+1)),w0.hasOwnProperty(t)?{space:w0[t],local:i}:i}function aC(i){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Lp&&t.documentElement.namespaceURI===Lp?t.createElement(i):t.createElementNS(e,i)}}function oC(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function ey(i){var t=lh(i);return(t.local?oC:aC)(t)}function lC(){}function vm(i){return i==null?lC:function(){return this.querySelector(i)}}function uC(i){typeof i!="function"&&(i=vm(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var a=t[r],u=a.length,l=n[r]=new Array(u),c,f,d=0;d<u;++d)(c=a[d])&&(f=i.call(c,c.__data__,d,a))&&("__data__"in c&&(f.__data__=c.__data__),l[d]=f);return new Wi(n,this._parents)}function cC(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function fC(){return[]}function ny(i){return i==null?fC:function(){return this.querySelectorAll(i)}}function hC(i){return function(){return cC(i.apply(this,arguments))}}function dC(i){typeof i=="function"?i=hC(i):i=ny(i);for(var t=this._groups,e=t.length,n=[],r=[],a=0;a<e;++a)for(var u=t[a],l=u.length,c,f=0;f<l;++f)(c=u[f])&&(n.push(i.call(c,c.__data__,f,u)),r.push(c));return new Wi(n,r)}function iy(i){return function(){return this.matches(i)}}function ry(i){return function(t){return t.matches(i)}}var pC=Array.prototype.find;function mC(i){return function(){return pC.call(this.children,i)}}function _C(){return this.firstElementChild}function gC(i){return this.select(i==null?_C:mC(typeof i=="function"?i:ry(i)))}var vC=Array.prototype.filter;function xC(){return Array.from(this.children)}function yC(i){return function(){return vC.call(this.children,i)}}function SC(i){return this.selectAll(i==null?xC:yC(typeof i=="function"?i:ry(i)))}function MC(i){typeof i!="function"&&(i=iy(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var a=t[r],u=a.length,l=n[r]=[],c,f=0;f<u;++f)(c=a[f])&&i.call(c,c.__data__,f,a)&&l.push(c);return new Wi(n,this._parents)}function sy(i){return new Array(i.length)}function EC(){return new Wi(this._enter||this._groups.map(sy),this._parents)}function Lf(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}Lf.prototype={constructor:Lf,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function TC(i){return function(){return i}}function wC(i,t,e,n,r,a){for(var u=0,l,c=t.length,f=a.length;u<f;++u)(l=t[u])?(l.__data__=a[u],n[u]=l):e[u]=new Lf(i,a[u]);for(;u<c;++u)(l=t[u])&&(r[u]=l)}function bC(i,t,e,n,r,a,u){var l,c,f=new Map,d=t.length,_=a.length,p=new Array(d),m;for(l=0;l<d;++l)(c=t[l])&&(p[l]=m=u.call(c,c.__data__,l,t)+"",f.has(m)?r[l]=c:f.set(m,c));for(l=0;l<_;++l)m=u.call(i,a[l],l,a)+"",(c=f.get(m))?(n[l]=c,c.__data__=a[l],f.delete(m)):e[l]=new Lf(i,a[l]);for(l=0;l<d;++l)(c=t[l])&&f.get(p[l])===c&&(r[l]=c)}function AC(i){return i.__data__}function RC(i,t){if(!arguments.length)return Array.from(this,AC);var e=t?bC:wC,n=this._parents,r=this._groups;typeof i!="function"&&(i=TC(i));for(var a=r.length,u=new Array(a),l=new Array(a),c=new Array(a),f=0;f<a;++f){var d=n[f],_=r[f],p=_.length,m=CC(i.call(d,d&&d.__data__,f,n)),S=m.length,y=l[f]=new Array(S),x=u[f]=new Array(S),g=c[f]=new Array(p);e(d,_,y,x,g,m,t);for(var R=0,E=0,w,C;R<S;++R)if(w=y[R]){for(R>=E&&(E=R+1);!(C=x[E])&&++E<S;);w._next=C||null}}return u=new Wi(u,n),u._enter=l,u._exit=c,u}function CC(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function PC(){return new Wi(this._exit||this._groups.map(sy),this._parents)}function LC(i,t,e){var n=this.enter(),r=this,a=this.exit();return typeof i=="function"?(n=i(n),n&&(n=n.selection())):n=n.append(i+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?a.remove():e(a),n&&r?n.merge(r).order():r}function DC(i){for(var t=i.selection?i.selection():i,e=this._groups,n=t._groups,r=e.length,a=n.length,u=Math.min(r,a),l=new Array(r),c=0;c<u;++c)for(var f=e[c],d=n[c],_=f.length,p=l[c]=new Array(_),m,S=0;S<_;++S)(m=f[S]||d[S])&&(p[S]=m);for(;c<r;++c)l[c]=e[c];return new Wi(l,this._parents)}function IC(){for(var i=this._groups,t=-1,e=i.length;++t<e;)for(var n=i[t],r=n.length-1,a=n[r],u;--r>=0;)(u=n[r])&&(a&&u.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(u,a),a=u);return this}function UC(i){i||(i=NC);function t(_,p){return _&&p?i(_.__data__,p.__data__):!_-!p}for(var e=this._groups,n=e.length,r=new Array(n),a=0;a<n;++a){for(var u=e[a],l=u.length,c=r[a]=new Array(l),f,d=0;d<l;++d)(f=u[d])&&(c[d]=f);c.sort(t)}return new Wi(r,this._parents).order()}function NC(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function OC(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function FC(){return Array.from(this)}function BC(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,a=n.length;r<a;++r){var u=n[r];if(u)return u}return null}function zC(){let i=0;for(const t of this)++i;return i}function kC(){return!this.node()}function HC(i){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],a=0,u=r.length,l;a<u;++a)(l=r[a])&&i.call(l,l.__data__,a,r);return this}function GC(i){return function(){this.removeAttribute(i)}}function VC(i){return function(){this.removeAttributeNS(i.space,i.local)}}function WC(i,t){return function(){this.setAttribute(i,t)}}function XC(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function YC(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(i):this.setAttribute(i,e)}}function qC(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,e)}}function $C(i,t){var e=lh(i);if(arguments.length<2){var n=this.node();return e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}return this.each((t==null?e.local?VC:GC:typeof t=="function"?e.local?qC:YC:e.local?XC:WC)(e,t))}function ay(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function KC(i){return function(){this.style.removeProperty(i)}}function ZC(i,t,e){return function(){this.style.setProperty(i,t,e)}}function JC(i,t,e){return function(){var n=t.apply(this,arguments);n==null?this.style.removeProperty(i):this.style.setProperty(i,n,e)}}function QC(i,t,e){return arguments.length>1?this.each((t==null?KC:typeof t=="function"?JC:ZC)(i,t,e??"")):il(this.node(),i)}function il(i,t){return i.style.getPropertyValue(t)||ay(i).getComputedStyle(i,null).getPropertyValue(t)}function jC(i){return function(){delete this[i]}}function tP(i,t){return function(){this[i]=t}}function eP(i,t){return function(){var e=t.apply(this,arguments);e==null?delete this[i]:this[i]=e}}function nP(i,t){return arguments.length>1?this.each((t==null?jC:typeof t=="function"?eP:tP)(i,t)):this.node()[i]}function oy(i){return i.trim().split(/^|\s+/)}function xm(i){return i.classList||new ly(i)}function ly(i){this._node=i,this._names=oy(i.getAttribute("class")||"")}ly.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function uy(i,t){for(var e=xm(i),n=-1,r=t.length;++n<r;)e.add(t[n])}function cy(i,t){for(var e=xm(i),n=-1,r=t.length;++n<r;)e.remove(t[n])}function iP(i){return function(){uy(this,i)}}function rP(i){return function(){cy(this,i)}}function sP(i,t){return function(){(t.apply(this,arguments)?uy:cy)(this,i)}}function aP(i,t){var e=oy(i+"");if(arguments.length<2){for(var n=xm(this.node()),r=-1,a=e.length;++r<a;)if(!n.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?sP:t?iP:rP)(e,t))}function oP(){this.textContent=""}function lP(i){return function(){this.textContent=i}}function uP(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function cP(i){return arguments.length?this.each(i==null?oP:(typeof i=="function"?uP:lP)(i)):this.node().textContent}function fP(){this.innerHTML=""}function hP(i){return function(){this.innerHTML=i}}function dP(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function pP(i){return arguments.length?this.each(i==null?fP:(typeof i=="function"?dP:hP)(i)):this.node().innerHTML}function mP(){this.nextSibling&&this.parentNode.appendChild(this)}function _P(){return this.each(mP)}function gP(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function vP(){return this.each(gP)}function xP(i){var t=typeof i=="function"?i:ey(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function yP(){return null}function SP(i,t){var e=typeof i=="function"?i:ey(i),n=t==null?yP:typeof t=="function"?t:vm(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),n.apply(this,arguments)||null)})}function MP(){var i=this.parentNode;i&&i.removeChild(this)}function EP(){return this.each(MP)}function TP(){var i=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function wP(){var i=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function bP(i){return this.select(i?wP:TP)}function AP(i){return arguments.length?this.property("__data__",i):this.node().__data__}function RP(i){return function(t){i.call(this,t,this.__data__)}}function CP(i){return i.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}function PP(i){return function(){var t=this.__on;if(t){for(var e=0,n=-1,r=t.length,a;e<r;++e)a=t[e],(!i.type||a.type===i.type)&&a.name===i.name?this.removeEventListener(a.type,a.listener,a.options):t[++n]=a;++n?t.length=n:delete this.__on}}}function LP(i,t,e){return function(){var n=this.__on,r,a=RP(t);if(n){for(var u=0,l=n.length;u<l;++u)if((r=n[u]).type===i.type&&r.name===i.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=a,r.options=e),r.value=t;return}}this.addEventListener(i.type,a,e),r={type:i.type,name:i.name,value:t,listener:a,options:e},n?n.push(r):this.__on=[r]}}function DP(i,t,e){var n=CP(i+""),r,a=n.length,u;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,f=l.length,d;c<f;++c)for(r=0,d=l[c];r<a;++r)if((u=n[r]).type===d.type&&u.name===d.name)return d.value}return}for(l=t?LP:PP,r=0;r<a;++r)this.each(l(n[r],t,e));return this}function fy(i,t,e){var n=ay(i),r=n.CustomEvent;typeof r=="function"?r=new r(t,e):(r=n.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),i.dispatchEvent(r)}function IP(i,t){return function(){return fy(this,i,t)}}function UP(i,t){return function(){return fy(this,i,t.apply(this,arguments))}}function NP(i,t){return this.each((typeof t=="function"?UP:IP)(i,t))}function*OP(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,a=n.length,u;r<a;++r)(u=n[r])&&(yield u)}var hy=[null];function Wi(i,t){this._groups=i,this._parents=t}function Lu(){return new Wi([[document.documentElement]],hy)}function FP(){return this}Wi.prototype=Lu.prototype={constructor:Wi,select:uC,selectAll:dC,selectChild:gC,selectChildren:SC,filter:MC,data:RC,enter:EC,exit:PC,join:LC,merge:DC,selection:FP,order:IC,sort:UC,call:OC,nodes:FC,node:BC,size:zC,empty:kC,each:HC,attr:$C,style:QC,property:nP,classed:aP,text:cP,html:pP,raise:_P,lower:vP,append:xP,insert:SP,remove:EP,clone:bP,datum:AP,on:DP,dispatch:NP,[Symbol.iterator]:OP};function BP(i){return typeof i=="string"?new Wi([[document.querySelector(i)]],[document.documentElement]):new Wi([[i]],hy)}function ym(i,t,e){i.prototype=t.prototype=e,e.constructor=i}function dy(i,t){var e=Object.create(i.prototype);for(var n in t)e[n]=t[n];return e}function Du(){}var _u=.7,Df=1/_u,$o="\\s*([+-]?\\d+)\\s*",gu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",zr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",zP=/^#([0-9a-f]{3,8})$/,kP=new RegExp(`^rgb\\(${$o},${$o},${$o}\\)$`),HP=new RegExp(`^rgb\\(${zr},${zr},${zr}\\)$`),GP=new RegExp(`^rgba\\(${$o},${$o},${$o},${gu}\\)$`),VP=new RegExp(`^rgba\\(${zr},${zr},${zr},${gu}\\)$`),WP=new RegExp(`^hsl\\(${gu},${zr},${zr}\\)$`),XP=new RegExp(`^hsla\\(${gu},${zr},${zr},${gu}\\)$`),b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ym(Du,vu,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:A0,formatHex:A0,formatHex8:YP,formatHsl:qP,formatRgb:R0,toString:R0});function A0(){return this.rgb().formatHex()}function YP(){return this.rgb().formatHex8()}function qP(){return py(this).formatHsl()}function R0(){return this.rgb().formatRgb()}function vu(i){var t,e;return i=(i+"").trim().toLowerCase(),(t=zP.exec(i))?(e=t[1].length,t=parseInt(t[1],16),e===6?C0(t):e===3?new Si(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Ec(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Ec(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=kP.exec(i))?new Si(t[1],t[2],t[3],1):(t=HP.exec(i))?new Si(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=GP.exec(i))?Ec(t[1],t[2],t[3],t[4]):(t=VP.exec(i))?Ec(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=WP.exec(i))?D0(t[1],t[2]/100,t[3]/100,1):(t=XP.exec(i))?D0(t[1],t[2]/100,t[3]/100,t[4]):b0.hasOwnProperty(i)?C0(b0[i]):i==="transparent"?new Si(NaN,NaN,NaN,0):null}function C0(i){return new Si(i>>16&255,i>>8&255,i&255,1)}function Ec(i,t,e,n){return n<=0&&(i=t=e=NaN),new Si(i,t,e,n)}function $P(i){return i instanceof Du||(i=vu(i)),i?(i=i.rgb(),new Si(i.r,i.g,i.b,i.opacity)):new Si}function Dp(i,t,e,n){return arguments.length===1?$P(i):new Si(i,t,e,n??1)}function Si(i,t,e,n){this.r=+i,this.g=+t,this.b=+e,this.opacity=+n}ym(Si,Dp,dy(Du,{brighter(i){return i=i==null?Df:Math.pow(Df,i),new Si(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?_u:Math.pow(_u,i),new Si(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Si(Aa(this.r),Aa(this.g),Aa(this.b),If(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:P0,formatHex:P0,formatHex8:KP,formatRgb:L0,toString:L0}));function P0(){return`#${Ta(this.r)}${Ta(this.g)}${Ta(this.b)}`}function KP(){return`#${Ta(this.r)}${Ta(this.g)}${Ta(this.b)}${Ta((isNaN(this.opacity)?1:this.opacity)*255)}`}function L0(){const i=If(this.opacity);return`${i===1?"rgb(":"rgba("}${Aa(this.r)}, ${Aa(this.g)}, ${Aa(this.b)}${i===1?")":`, ${i})`}`}function If(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Aa(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function Ta(i){return i=Aa(i),(i<16?"0":"")+i.toString(16)}function D0(i,t,e,n){return n<=0?i=t=e=NaN:e<=0||e>=1?i=t=NaN:t<=0&&(i=NaN),new wr(i,t,e,n)}function py(i){if(i instanceof wr)return new wr(i.h,i.s,i.l,i.opacity);if(i instanceof Du||(i=vu(i)),!i)return new wr;if(i instanceof wr)return i;i=i.rgb();var t=i.r/255,e=i.g/255,n=i.b/255,r=Math.min(t,e,n),a=Math.max(t,e,n),u=NaN,l=a-r,c=(a+r)/2;return l?(t===a?u=(e-n)/l+(e<n)*6:e===a?u=(n-t)/l+2:u=(t-e)/l+4,l/=c<.5?a+r:2-a-r,u*=60):l=c>0&&c<1?0:u,new wr(u,l,c,i.opacity)}function ZP(i,t,e,n){return arguments.length===1?py(i):new wr(i,t,e,n??1)}function wr(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}ym(wr,ZP,dy(Du,{brighter(i){return i=i==null?Df:Math.pow(Df,i),new wr(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?_u:Math.pow(_u,i),new wr(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,t=isNaN(i)||isNaN(this.s)?0:this.s,e=this.l,n=e+(e<.5?e:1-e)*t,r=2*e-n;return new Si(Id(i>=240?i-240:i+120,r,n),Id(i,r,n),Id(i<120?i+240:i-120,r,n),this.opacity)},clamp(){return new wr(I0(this.h),Tc(this.s),Tc(this.l),If(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=If(this.opacity);return`${i===1?"hsl(":"hsla("}${I0(this.h)}, ${Tc(this.s)*100}%, ${Tc(this.l)*100}%${i===1?")":`, ${i})`}`}}));function I0(i){return i=(i||0)%360,i<0?i+360:i}function Tc(i){return Math.max(0,Math.min(1,i||0))}function Id(i,t,e){return(i<60?t+(e-t)*i/60:i<180?e:i<240?t+(e-t)*(240-i)/60:t)*255}const my=i=>()=>i;function JP(i,t){return function(e){return i+e*t}}function QP(i,t,e){return i=Math.pow(i,e),t=Math.pow(t,e)-i,e=1/e,function(n){return Math.pow(i+n*t,e)}}function jP(i){return(i=+i)==1?_y:function(t,e){return e-t?QP(t,e,i):my(isNaN(t)?e:t)}}function _y(i,t){var e=t-i;return e?JP(i,e):my(isNaN(i)?t:i)}const U0=function i(t){var e=jP(t);function n(r,a){var u=e((r=Dp(r)).r,(a=Dp(a)).r),l=e(r.g,a.g),c=e(r.b,a.b),f=_y(r.opacity,a.opacity);return function(d){return r.r=u(d),r.g=l(d),r.b=c(d),r.opacity=f(d),r+""}}return n.gamma=i,n}(1);function Os(i,t){return i=+i,t=+t,function(e){return i*(1-e)+t*e}}var Ip=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ud=new RegExp(Ip.source,"g");function tL(i){return function(){return i}}function eL(i){return function(t){return i(t)+""}}function nL(i,t){var e=Ip.lastIndex=Ud.lastIndex=0,n,r,a,u=-1,l=[],c=[];for(i=i+"",t=t+"";(n=Ip.exec(i))&&(r=Ud.exec(t));)(a=r.index)>e&&(a=t.slice(e,a),l[u]?l[u]+=a:l[++u]=a),(n=n[0])===(r=r[0])?l[u]?l[u]+=r:l[++u]=r:(l[++u]=null,c.push({i:u,x:Os(n,r)})),e=Ud.lastIndex;return e<t.length&&(a=t.slice(e),l[u]?l[u]+=a:l[++u]=a),l.length<2?c[0]?eL(c[0].x):tL(t):(t=c.length,function(f){for(var d=0,_;d<t;++d)l[(_=c[d]).i]=_.x(f);return l.join("")})}var N0=180/Math.PI,Up={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function gy(i,t,e,n,r,a){var u,l,c;return(u=Math.sqrt(i*i+t*t))&&(i/=u,t/=u),(c=i*e+t*n)&&(e-=i*c,n-=t*c),(l=Math.sqrt(e*e+n*n))&&(e/=l,n/=l,c/=l),i*n<t*e&&(i=-i,t=-t,c=-c,u=-u),{translateX:r,translateY:a,rotate:Math.atan2(t,i)*N0,skewX:Math.atan(c)*N0,scaleX:u,scaleY:l}}var wc;function iL(i){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return t.isIdentity?Up:gy(t.a,t.b,t.c,t.d,t.e,t.f)}function rL(i){return i==null||(wc||(wc=document.createElementNS("http://www.w3.org/2000/svg","g")),wc.setAttribute("transform",i),!(i=wc.transform.baseVal.consolidate()))?Up:(i=i.matrix,gy(i.a,i.b,i.c,i.d,i.e,i.f))}function vy(i,t,e,n){function r(f){return f.length?f.pop()+" ":""}function a(f,d,_,p,m,S){if(f!==_||d!==p){var y=m.push("translate(",null,t,null,e);S.push({i:y-4,x:Os(f,_)},{i:y-2,x:Os(d,p)})}else(_||p)&&m.push("translate("+_+t+p+e)}function u(f,d,_,p){f!==d?(f-d>180?d+=360:d-f>180&&(f+=360),p.push({i:_.push(r(_)+"rotate(",null,n)-2,x:Os(f,d)})):d&&_.push(r(_)+"rotate("+d+n)}function l(f,d,_,p){f!==d?p.push({i:_.push(r(_)+"skewX(",null,n)-2,x:Os(f,d)}):d&&_.push(r(_)+"skewX("+d+n)}function c(f,d,_,p,m,S){if(f!==_||d!==p){var y=m.push(r(m)+"scale(",null,",",null,")");S.push({i:y-4,x:Os(f,_)},{i:y-2,x:Os(d,p)})}else(_!==1||p!==1)&&m.push(r(m)+"scale("+_+","+p+")")}return function(f,d){var _=[],p=[];return f=i(f),d=i(d),a(f.translateX,f.translateY,d.translateX,d.translateY,_,p),u(f.rotate,d.rotate,_,p),l(f.skewX,d.skewX,_,p),c(f.scaleX,f.scaleY,d.scaleX,d.scaleY,_,p),f=d=null,function(m){for(var S=-1,y=p.length,x;++S<y;)_[(x=p[S]).i]=x.x(m);return _.join("")}}}var sL=vy(iL,"px, ","px)","deg)"),aL=vy(rL,", ",")",")"),rl=0,Xl=0,Ol=0,xy=1e3,Uf,Yl,Nf=0,za=0,uh=0,xu=typeof performance=="object"&&performance.now?performance:Date,yy=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Sm(){return za||(yy(oL),za=xu.now()+uh)}function oL(){za=0}function Of(){this._call=this._time=this._next=null}Of.prototype=Sy.prototype={constructor:Of,restart:function(i,t,e){if(typeof i!="function")throw new TypeError("callback is not a function");e=(e==null?Sm():+e)+(t==null?0:+t),!this._next&&Yl!==this&&(Yl?Yl._next=this:Uf=this,Yl=this),this._call=i,this._time=e,Np()},stop:function(){this._call&&(this._call=null,this._time=1/0,Np())}};function Sy(i,t,e){var n=new Of;return n.restart(i,t,e),n}function lL(){Sm(),++rl;for(var i=Uf,t;i;)(t=za-i._time)>=0&&i._call.call(void 0,t),i=i._next;--rl}function O0(){za=(Nf=xu.now())+uh,rl=Xl=0;try{lL()}finally{rl=0,cL(),za=0}}function uL(){var i=xu.now(),t=i-Nf;t>xy&&(uh-=t,Nf=i)}function cL(){for(var i,t=Uf,e,n=1/0;t;)t._call?(n>t._time&&(n=t._time),i=t,t=t._next):(e=t._next,t._next=null,t=i?i._next=e:Uf=e);Yl=i,Np(n)}function Np(i){if(!rl){Xl&&(Xl=clearTimeout(Xl));var t=i-za;t>24?(i<1/0&&(Xl=setTimeout(O0,i-xu.now()-uh)),Ol&&(Ol=clearInterval(Ol))):(Ol||(Nf=xu.now(),Ol=setInterval(uL,xy)),rl=1,yy(O0))}}function F0(i,t,e){var n=new Of;return t=t==null?0:+t,n.restart(r=>{n.stop(),i(r+t)},t,e),n}var fL=ty("start","end","cancel","interrupt"),hL=[],My=0,B0=1,Op=2,_f=3,z0=4,Fp=5,gf=6;function ch(i,t,e,n,r,a){var u=i.__transition;if(!u)i.__transition={};else if(e in u)return;dL(i,e,{name:t,index:n,group:r,on:fL,tween:hL,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:My})}function Mm(i,t){var e=Pr(i,t);if(e.state>My)throw new Error("too late; already scheduled");return e}function Wr(i,t){var e=Pr(i,t);if(e.state>_f)throw new Error("too late; already running");return e}function Pr(i,t){var e=i.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function dL(i,t,e){var n=i.__transition,r;n[t]=e,e.timer=Sy(a,0,e.time);function a(f){e.state=B0,e.timer.restart(u,e.delay,e.time),e.delay<=f&&u(f-e.delay)}function u(f){var d,_,p,m;if(e.state!==B0)return c();for(d in n)if(m=n[d],m.name===e.name){if(m.state===_f)return F0(u);m.state===z0?(m.state=gf,m.timer.stop(),m.on.call("interrupt",i,i.__data__,m.index,m.group),delete n[d]):+d<t&&(m.state=gf,m.timer.stop(),m.on.call("cancel",i,i.__data__,m.index,m.group),delete n[d])}if(F0(function(){e.state===_f&&(e.state=z0,e.timer.restart(l,e.delay,e.time),l(f))}),e.state=Op,e.on.call("start",i,i.__data__,e.index,e.group),e.state===Op){for(e.state=_f,r=new Array(p=e.tween.length),d=0,_=-1;d<p;++d)(m=e.tween[d].value.call(i,i.__data__,e.index,e.group))&&(r[++_]=m);r.length=_+1}}function l(f){for(var d=f<e.duration?e.ease.call(null,f/e.duration):(e.timer.restart(c),e.state=Fp,1),_=-1,p=r.length;++_<p;)r[_].call(i,d);e.state===Fp&&(e.on.call("end",i,i.__data__,e.index,e.group),c())}function c(){e.state=gf,e.timer.stop(),delete n[t];for(var f in n)return;delete i.__transition}}function pL(i,t){var e=i.__transition,n,r,a=!0,u;if(e){t=t==null?null:t+"";for(u in e){if((n=e[u]).name!==t){a=!1;continue}r=n.state>Op&&n.state<Fp,n.state=gf,n.timer.stop(),n.on.call(r?"interrupt":"cancel",i,i.__data__,n.index,n.group),delete e[u]}a&&delete i.__transition}}function mL(i){return this.each(function(){pL(this,i)})}function _L(i,t){var e,n;return function(){var r=Wr(this,i),a=r.tween;if(a!==e){n=e=a;for(var u=0,l=n.length;u<l;++u)if(n[u].name===t){n=n.slice(),n.splice(u,1);break}}r.tween=n}}function gL(i,t,e){var n,r;if(typeof e!="function")throw new Error;return function(){var a=Wr(this,i),u=a.tween;if(u!==n){r=(n=u).slice();for(var l={name:t,value:e},c=0,f=r.length;c<f;++c)if(r[c].name===t){r[c]=l;break}c===f&&r.push(l)}a.tween=r}}function vL(i,t){var e=this._id;if(i+="",arguments.length<2){for(var n=Pr(this.node(),e).tween,r=0,a=n.length,u;r<a;++r)if((u=n[r]).name===i)return u.value;return null}return this.each((t==null?_L:gL)(e,i,t))}function Em(i,t,e){var n=i._id;return i.each(function(){var r=Wr(this,n);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return Pr(r,n).value[t]}}function Ey(i,t){var e;return(typeof t=="number"?Os:t instanceof vu?U0:(e=vu(t))?(t=e,U0):nL)(i,t)}function xL(i){return function(){this.removeAttribute(i)}}function yL(i){return function(){this.removeAttributeNS(i.space,i.local)}}function SL(i,t,e){var n,r=e+"",a;return function(){var u=this.getAttribute(i);return u===r?null:u===n?a:a=t(n=u,e)}}function ML(i,t,e){var n,r=e+"",a;return function(){var u=this.getAttributeNS(i.space,i.local);return u===r?null:u===n?a:a=t(n=u,e)}}function EL(i,t,e){var n,r,a;return function(){var u,l=e(this),c;return l==null?void this.removeAttribute(i):(u=this.getAttribute(i),c=l+"",u===c?null:u===n&&c===r?a:(r=c,a=t(n=u,l)))}}function TL(i,t,e){var n,r,a;return function(){var u,l=e(this),c;return l==null?void this.removeAttributeNS(i.space,i.local):(u=this.getAttributeNS(i.space,i.local),c=l+"",u===c?null:u===n&&c===r?a:(r=c,a=t(n=u,l)))}}function wL(i,t){var e=lh(i),n=e==="transform"?aL:Ey;return this.attrTween(i,typeof t=="function"?(e.local?TL:EL)(e,n,Em(this,"attr."+i,t)):t==null?(e.local?yL:xL)(e):(e.local?ML:SL)(e,n,t))}function bL(i,t){return function(e){this.setAttribute(i,t.call(this,e))}}function AL(i,t){return function(e){this.setAttributeNS(i.space,i.local,t.call(this,e))}}function RL(i,t){var e,n;function r(){var a=t.apply(this,arguments);return a!==n&&(e=(n=a)&&AL(i,a)),e}return r._value=t,r}function CL(i,t){var e,n;function r(){var a=t.apply(this,arguments);return a!==n&&(e=(n=a)&&bL(i,a)),e}return r._value=t,r}function PL(i,t){var e="attr."+i;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var n=lh(i);return this.tween(e,(n.local?RL:CL)(n,t))}function LL(i,t){return function(){Mm(this,i).delay=+t.apply(this,arguments)}}function DL(i,t){return t=+t,function(){Mm(this,i).delay=t}}function IL(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?LL:DL)(t,i)):Pr(this.node(),t).delay}function UL(i,t){return function(){Wr(this,i).duration=+t.apply(this,arguments)}}function NL(i,t){return t=+t,function(){Wr(this,i).duration=t}}function OL(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?UL:NL)(t,i)):Pr(this.node(),t).duration}function FL(i,t){if(typeof t!="function")throw new Error;return function(){Wr(this,i).ease=t}}function BL(i){var t=this._id;return arguments.length?this.each(FL(t,i)):Pr(this.node(),t).ease}function zL(i,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Wr(this,i).ease=e}}function kL(i){if(typeof i!="function")throw new Error;return this.each(zL(this._id,i))}function HL(i){typeof i!="function"&&(i=iy(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var a=t[r],u=a.length,l=n[r]=[],c,f=0;f<u;++f)(c=a[f])&&i.call(c,c.__data__,f,a)&&l.push(c);return new gs(n,this._parents,this._name,this._id)}function GL(i){if(i._id!==this._id)throw new Error;for(var t=this._groups,e=i._groups,n=t.length,r=e.length,a=Math.min(n,r),u=new Array(n),l=0;l<a;++l)for(var c=t[l],f=e[l],d=c.length,_=u[l]=new Array(d),p,m=0;m<d;++m)(p=c[m]||f[m])&&(_[m]=p);for(;l<n;++l)u[l]=t[l];return new gs(u,this._parents,this._name,this._id)}function VL(i){return(i+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function WL(i,t,e){var n,r,a=VL(t)?Mm:Wr;return function(){var u=a(this,i),l=u.on;l!==n&&(r=(n=l).copy()).on(t,e),u.on=r}}function XL(i,t){var e=this._id;return arguments.length<2?Pr(this.node(),e).on.on(i):this.each(WL(e,i,t))}function YL(i){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==i)return;t&&t.removeChild(this)}}function qL(){return this.on("end.remove",YL(this._id))}function $L(i){var t=this._name,e=this._id;typeof i!="function"&&(i=vm(i));for(var n=this._groups,r=n.length,a=new Array(r),u=0;u<r;++u)for(var l=n[u],c=l.length,f=a[u]=new Array(c),d,_,p=0;p<c;++p)(d=l[p])&&(_=i.call(d,d.__data__,p,l))&&("__data__"in d&&(_.__data__=d.__data__),f[p]=_,ch(f[p],t,e,p,f,Pr(d,e)));return new gs(a,this._parents,t,e)}function KL(i){var t=this._name,e=this._id;typeof i!="function"&&(i=ny(i));for(var n=this._groups,r=n.length,a=[],u=[],l=0;l<r;++l)for(var c=n[l],f=c.length,d,_=0;_<f;++_)if(d=c[_]){for(var p=i.call(d,d.__data__,_,c),m,S=Pr(d,e),y=0,x=p.length;y<x;++y)(m=p[y])&&ch(m,t,e,y,p,S);a.push(p),u.push(d)}return new gs(a,u,t,e)}var ZL=Lu.prototype.constructor;function JL(){return new ZL(this._groups,this._parents)}function QL(i,t){var e,n,r;return function(){var a=il(this,i),u=(this.style.removeProperty(i),il(this,i));return a===u?null:a===e&&u===n?r:r=t(e=a,n=u)}}function Ty(i){return function(){this.style.removeProperty(i)}}function jL(i,t,e){var n,r=e+"",a;return function(){var u=il(this,i);return u===r?null:u===n?a:a=t(n=u,e)}}function t2(i,t,e){var n,r,a;return function(){var u=il(this,i),l=e(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(i),il(this,i))),u===c?null:u===n&&c===r?a:(r=c,a=t(n=u,l))}}function e2(i,t){var e,n,r,a="style."+t,u="end."+a,l;return function(){var c=Wr(this,i),f=c.on,d=c.value[a]==null?l||(l=Ty(t)):void 0;(f!==e||r!==d)&&(n=(e=f).copy()).on(u,r=d),c.on=n}}function n2(i,t,e){var n=(i+="")=="transform"?sL:Ey;return t==null?this.styleTween(i,QL(i,n)).on("end.style."+i,Ty(i)):typeof t=="function"?this.styleTween(i,t2(i,n,Em(this,"style."+i,t))).each(e2(this._id,i)):this.styleTween(i,jL(i,n,t),e).on("end.style."+i,null)}function i2(i,t,e){return function(n){this.style.setProperty(i,t.call(this,n),e)}}function r2(i,t,e){var n,r;function a(){var u=t.apply(this,arguments);return u!==r&&(n=(r=u)&&i2(i,u,e)),n}return a._value=t,a}function s2(i,t,e){var n="style."+(i+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,r2(i,t,e??""))}function a2(i){return function(){this.textContent=i}}function o2(i){return function(){var t=i(this);this.textContent=t??""}}function l2(i){return this.tween("text",typeof i=="function"?o2(Em(this,"text",i)):a2(i==null?"":i+""))}function u2(i){return function(t){this.textContent=i.call(this,t)}}function c2(i){var t,e;function n(){var r=i.apply(this,arguments);return r!==e&&(t=(e=r)&&u2(r)),t}return n._value=i,n}function f2(i){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(i==null)return this.tween(t,null);if(typeof i!="function")throw new Error;return this.tween(t,c2(i))}function h2(){for(var i=this._name,t=this._id,e=wy(),n=this._groups,r=n.length,a=0;a<r;++a)for(var u=n[a],l=u.length,c,f=0;f<l;++f)if(c=u[f]){var d=Pr(c,t);ch(c,i,e,f,u,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new gs(n,this._parents,i,e)}function d2(){var i,t,e=this,n=e._id,r=e.size();return new Promise(function(a,u){var l={value:u},c={value:function(){--r===0&&a()}};e.each(function(){var f=Wr(this,n),d=f.on;d!==i&&(t=(i=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),f.on=t}),r===0&&a()})}var p2=0;function gs(i,t,e,n){this._groups=i,this._parents=t,this._name=e,this._id=n}function wy(){return++p2}var es=Lu.prototype;gs.prototype={constructor:gs,select:$L,selectAll:KL,selectChild:es.selectChild,selectChildren:es.selectChildren,filter:HL,merge:GL,selection:JL,transition:h2,call:es.call,nodes:es.nodes,node:es.node,size:es.size,empty:es.empty,each:es.each,on:XL,attr:wL,attrTween:PL,style:n2,styleTween:s2,text:l2,textTween:f2,remove:qL,tween:vL,delay:IL,duration:OL,ease:BL,easeVarying:kL,end:d2,[Symbol.iterator]:es[Symbol.iterator]};function m2(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var _2={time:null,delay:0,duration:250,ease:m2};function g2(i,t){for(var e;!(e=i.__transition)||!(e=e[t]);)if(!(i=i.parentNode))throw new Error(`transition ${t} not found`);return e}function v2(i){var t,e;i instanceof gs?(t=i._id,i=i._name):(t=wy(),(e=_2).time=Sm(),i=i==null?null:i+"");for(var n=this._groups,r=n.length,a=0;a<r;++a)for(var u=n[a],l=u.length,c,f=0;f<l;++f)(c=u[f])&&ch(c,i,t,f,u,e||g2(c,t));return new gs(n,this._parents,i,t)}Lu.prototype.interrupt=mL;Lu.prototype.transition=v2;function by(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}const k0=Symbol("implicit");function Tm(){var i=new S0,t=[],e=[],n=k0;function r(a){let u=i.get(a);if(u===void 0){if(n!==k0)return n;i.set(a,u=t.push(a)-1)}return e[u%e.length]}return r.domain=function(a){if(!arguments.length)return t.slice();t=[],i=new S0;for(const u of a)i.has(u)||i.set(u,t.push(u)-1);return r},r.range=function(a){return arguments.length?(e=Array.from(a),r):e.slice()},r.unknown=function(a){return arguments.length?(n=a,r):n},r.copy=function(){return Tm(t,e).unknown(n)},by.apply(r,arguments),r}function Ay(){var i=Tm().unknown(void 0),t=i.domain,e=i.range,n=0,r=1,a,u,l=!1,c=0,f=0,d=.5;delete i.unknown;function _(){var p=t().length,m=r<n,S=m?r:n,y=m?n:r;a=(y-S)/Math.max(1,p-c+f*2),l&&(a=Math.floor(a)),S+=(y-S-a*(p-c))*d,u=a*(1-c),l&&(S=Math.round(S),u=Math.round(u));var x=$R(p).map(function(g){return S+a*g});return e(m?x.reverse():x)}return i.domain=function(p){return arguments.length?(t(p),_()):t()},i.range=function(p){return arguments.length?([n,r]=p,n=+n,r=+r,_()):[n,r]},i.rangeRound=function(p){return[n,r]=p,n=+n,r=+r,l=!0,_()},i.bandwidth=function(){return u},i.step=function(){return a},i.round=function(p){return arguments.length?(l=!!p,_()):l},i.padding=function(p){return arguments.length?(c=Math.min(1,f=+p),_()):c},i.paddingInner=function(p){return arguments.length?(c=Math.min(1,p),_()):c},i.paddingOuter=function(p){return arguments.length?(f=+p,_()):f},i.align=function(p){return arguments.length?(d=Math.max(0,Math.min(1,p)),_()):d},i.copy=function(){return Ay(t(),[n,r]).round(l).paddingInner(c).paddingOuter(f).align(d)},by.apply(_(),arguments)}function ql(i,t,e){this.k=i,this.x=t,this.y=e}ql.prototype={constructor:ql,scale:function(i){return i===1?this:new ql(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new ql(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ql.prototype;function H0(i,t,e){const n=i.slice();return n[9]=t[e],n[11]=e,n}function G0(i){let t,e,n,r,a,u;return{c(){t=cf("rect"),gn(t,"x",e=i[2](i[11])),gn(t,"y",n=Ff-i[4].bottom-i[9]),gn(t,"width",r=i[2].bandwidth()),gn(t,"height",a=i[9]),gn(t,"fill",u=i[3](i[11]))},m(l,c){rr(l,t,c)},p(l,c){c&4&&e!==(e=l[2](l[11]))&&gn(t,"x",e),c&1&&n!==(n=Ff-l[4].bottom-l[9])&&gn(t,"y",n),c&4&&r!==(r=l[2].bandwidth())&&gn(t,"width",r),c&1&&a!==(a=l[9])&&gn(t,"height",a),c&8&&u!==(u=l[3](l[11]))&&gn(t,"fill",u)},d(l){l&&Fi(t)}}}function x2(i){let t,e,n,r,a,u,l,c,f=y0(i[0]),d=[];for(let _=0;_<f.length;_+=1)d[_]=G0(H0(i,f,_));return{c(){t=Xs("div"),e=cf("svg"),n=cf("g");for(let _=0;_<d.length;_+=1)d[_].c();r=cf("g"),a=Fo(),u=Xs("button"),u.textContent=` 
    random `,gn(n,"transform",`translate(${i[4].left},${i[4].top})`),gn(e,"width",Ry),gn(e,"height",Ff),gn(u,"class","bar-chart-random-btn"),gn(t,"class","bar-chart-demo-wrapper"),gn(t,"id","wrapper_bar-chart-demo")},m(_,p){rr(_,t,p),Oo(t,e),Oo(e,n);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(n,null);Oo(n,r),i[7](r),Oo(t,a),Oo(t,u),l||(c=NR(u,"click",i[8]),l=!0)},p(_,[p]){if(p&29){f=y0(_[0]);let m;for(m=0;m<f.length;m+=1){const S=H0(_,f,m);d[m]?d[m].p(S,p):(d[m]=G0(S),d[m].c(),d[m].m(n,r))}for(;m<d.length;m+=1)d[m].d(1);d.length=f.length}},i:Rr,o:Rr,d(_){_&&Fi(t),IR(d,_),i[7](null),l=!1,c()}}}const Ry=500,Ff=350;function y2(i,t,e){let n,r,a;const u={top:10,right:10,bottom:30,left:10};let l=[30,50,80,90,20];const c=()=>{const p=Math.floor(Math.random()*Math.floor(6))+3;return Array.from({length:p},()=>Math.floor(Math.random()*300)+10)};let f;function d(p){Pf[p?"unshift":"push"](()=>{f=p,e(1,f)})}const _=()=>e(0,l=c());return i.$$.update=()=>{i.$$.dirty&1&&e(2,n=Ay().domain(l.map((p,m)=>m)).range([0,Ry-u.left-u.right]).padding(.05)),i.$$.dirty&1&&e(3,r=Tm().domain(l.map((p,m)=>m)).range(["#f72585","#b5179e","#7209b7","#560bad","#480ca8","#3f37c9","#4895ef"])),i.$$.dirty&4&&e(6,a=p=>p.attr("transform",`translate(0, ${Ff-u.bottom})`).call(nC(n)).call(m=>m.select(".domain").remove())),i.$$.dirty&66&&f&&BP(f).call(a)},[l,f,n,r,u,c,a,d,_]}class S2 extends oh{constructor(t){super(),ah(this,t,y2,x2,sh,{})}}var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bf={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Bf.exports;(function(i,t){(function(){var e,n="4.17.21",r=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",l="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",_=1,p=2,m=4,S=1,y=2,x=1,g=2,R=4,E=8,w=16,C=32,U=64,b=128,k=256,T=512,L=30,Z="...",X=800,ut=16,z=1,K=2,st=3,$=1/0,lt=9007199254740991,ct=17976931348623157e292,N=0/0,V=4294967295,rt=V-1,Lt=V>>>1,wt=[["ary",b],["bind",x],["bindKey",g],["curry",E],["curryRight",w],["flip",T],["partial",C],["partialRight",U],["rearg",k]],bt="[object Arguments]",Bt="[object Array]",Jt="[object AsyncFunction]",zt="[object Boolean]",Xt="[object Date]",De="[object DOMException]",Qt="[object Error]",j="[object Function]",oe="[object GeneratorFunction]",At="[object Map]",Gt="[object Number]",Kt="[object Null]",Q="[object Object]",ee="[object Promise]",re="[object Proxy]",he="[object RegExp]",ae="[object Set]",Fe="[object String]",O="[object Symbol]",P="[object Undefined]",J="[object WeakMap]",_t="[object WeakSet]",mt="[object ArrayBuffer]",vt="[object DataView]",Ot="[object Float32Array]",Mt="[object Float64Array]",Rt="[object Int8Array]",B="[object Int16Array]",St="[object Int32Array]",ht="[object Uint8Array]",te="[object Uint8ClampedArray]",kt="[object Uint16Array]",qt="[object Uint32Array]",Ft=/\b__p \+= '';/g,yt=/\b(__p \+=) '' \+/g,me=/(__e\(.*?\)|\b__t\)) \+\n'';/g,G=/&(?:amp|lt|gt|quot|#39);/g,Et=/[&<>"']/g,gt=RegExp(G.source),ot=RegExp(Et.source),Tt=/<%-([\s\S]+?)%>/g,Yt=/<%([\s\S]+?)%>/g,Dt=/<%=([\s\S]+?)%>/g,Nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_e=/^\w*$/,le=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pt=/[\\^$.*+?()[\]{}|]/g,de=RegExp(Pt.source),se=/^\s+/,ye=/\s/,je=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,be=/\{\n\/\* \[wrapped with (.+)\] \*/,Xe=/,? & /,xn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,cn=/[()=,{}\[\]\/\s]/,qe=/\\(\\)?/g,ze=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Wn=/\w*$/,I=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,et=/^\[object .+?Constructor\]$/,it=/^0o[0-7]+$/i,nt=/^(?:0|[1-9]\d*)$/,Ct=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ht=/($^)/,ne=/['\n\r\u2028\u2029\\]/g,Vt="\\ud800-\\udfff",Zt="\\u0300-\\u036f",ie="\\ufe20-\\ufe2f",pe="\\u20d0-\\u20ff",$e=Zt+ie+pe,fn="\\u2700-\\u27bf",Be="a-z\\xdf-\\xf6\\xf8-\\xff",Fn="\\xac\\xb1\\xd7\\xf7",Ve="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ge="\\u2000-\\u206f",vl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",sn="A-Z\\xc0-\\xd6\\xd8-\\xde",Lr="\\ufe0e\\ufe0f",xl=Fn+Ve+ge+vl,Xr="['’]",yl="["+Vt+"]",Pn="["+xl+"]",Yi="["+$e+"]",Za="\\d+",ei="["+fn+"]",Ja="["+Be+"]",Ou="[^"+Vt+xl+Za+fn+Be+sn+"]",Qa="\\ud83c[\\udffb-\\udfff]",DM="(?:"+Yi+"|"+Qa+")",i_="[^"+Vt+"]",xh="(?:\\ud83c[\\udde6-\\uddff]){2}",yh="[\\ud800-\\udbff][\\udc00-\\udfff]",ja="["+sn+"]",r_="\\u200d",s_="(?:"+Ja+"|"+Ou+")",IM="(?:"+ja+"|"+Ou+")",a_="(?:"+Xr+"(?:d|ll|m|re|s|t|ve))?",o_="(?:"+Xr+"(?:D|LL|M|RE|S|T|VE))?",l_=DM+"?",u_="["+Lr+"]?",UM="(?:"+r_+"(?:"+[i_,xh,yh].join("|")+")"+u_+l_+")*",NM="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",OM="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",c_=u_+l_+UM,FM="(?:"+[ei,xh,yh].join("|")+")"+c_,BM="(?:"+[i_+Yi+"?",Yi,xh,yh,yl].join("|")+")",zM=RegExp(Xr,"g"),kM=RegExp(Yi,"g"),Sh=RegExp(Qa+"(?="+Qa+")|"+BM+c_,"g"),HM=RegExp([ja+"?"+Ja+"+"+a_+"(?="+[Pn,ja,"$"].join("|")+")",IM+"+"+o_+"(?="+[Pn,ja+s_,"$"].join("|")+")",ja+"?"+s_+"+"+a_,ja+"+"+o_,OM,NM,Za,FM].join("|"),"g"),GM=RegExp("["+r_+Vt+$e+Lr+"]"),VM=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,WM=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],XM=-1,tn={};tn[Ot]=tn[Mt]=tn[Rt]=tn[B]=tn[St]=tn[ht]=tn[te]=tn[kt]=tn[qt]=!0,tn[bt]=tn[Bt]=tn[mt]=tn[zt]=tn[vt]=tn[Xt]=tn[Qt]=tn[j]=tn[At]=tn[Gt]=tn[Q]=tn[he]=tn[ae]=tn[Fe]=tn[J]=!1;var Qe={};Qe[bt]=Qe[Bt]=Qe[mt]=Qe[vt]=Qe[zt]=Qe[Xt]=Qe[Ot]=Qe[Mt]=Qe[Rt]=Qe[B]=Qe[St]=Qe[At]=Qe[Gt]=Qe[Q]=Qe[he]=Qe[ae]=Qe[Fe]=Qe[O]=Qe[ht]=Qe[te]=Qe[kt]=Qe[qt]=!0,Qe[Qt]=Qe[j]=Qe[J]=!1;var YM={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},qM={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$M={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},KM={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ZM=parseFloat,JM=parseInt,f_=typeof Fl=="object"&&Fl&&Fl.Object===Object&&Fl,QM=typeof self=="object"&&self&&self.Object===Object&&self,Bn=f_||QM||Function("return this")(),Mh=t&&!t.nodeType&&t,ia=Mh&&!0&&i&&!i.nodeType&&i,h_=ia&&ia.exports===Mh,Eh=h_&&f_.process,qi=function(){try{var W=ia&&ia.require&&ia.require("util").types;return W||Eh&&Eh.binding&&Eh.binding("util")}catch{}}(),d_=qi&&qi.isArrayBuffer,p_=qi&&qi.isDate,m_=qi&&qi.isMap,__=qi&&qi.isRegExp,g_=qi&&qi.isSet,v_=qi&&qi.isTypedArray;function Ai(W,ft,at){switch(at.length){case 0:return W.call(ft);case 1:return W.call(ft,at[0]);case 2:return W.call(ft,at[0],at[1]);case 3:return W.call(ft,at[0],at[1],at[2])}return W.apply(ft,at)}function jM(W,ft,at,Wt){for(var ve=-1,ke=W==null?0:W.length;++ve<ke;){var Tn=W[ve];ft(Wt,Tn,at(Tn),W)}return Wt}function $i(W,ft){for(var at=-1,Wt=W==null?0:W.length;++at<Wt&&ft(W[at],at,W)!==!1;);return W}function tE(W,ft){for(var at=W==null?0:W.length;at--&&ft(W[at],at,W)!==!1;);return W}function x_(W,ft){for(var at=-1,Wt=W==null?0:W.length;++at<Wt;)if(!ft(W[at],at,W))return!1;return!0}function Ss(W,ft){for(var at=-1,Wt=W==null?0:W.length,ve=0,ke=[];++at<Wt;){var Tn=W[at];ft(Tn,at,W)&&(ke[ve++]=Tn)}return ke}function Fu(W,ft){var at=W==null?0:W.length;return!!at&&to(W,ft,0)>-1}function Th(W,ft,at){for(var Wt=-1,ve=W==null?0:W.length;++Wt<ve;)if(at(ft,W[Wt]))return!0;return!1}function rn(W,ft){for(var at=-1,Wt=W==null?0:W.length,ve=Array(Wt);++at<Wt;)ve[at]=ft(W[at],at,W);return ve}function Ms(W,ft){for(var at=-1,Wt=ft.length,ve=W.length;++at<Wt;)W[ve+at]=ft[at];return W}function wh(W,ft,at,Wt){var ve=-1,ke=W==null?0:W.length;for(Wt&&ke&&(at=W[++ve]);++ve<ke;)at=ft(at,W[ve],ve,W);return at}function eE(W,ft,at,Wt){var ve=W==null?0:W.length;for(Wt&&ve&&(at=W[--ve]);ve--;)at=ft(at,W[ve],ve,W);return at}function bh(W,ft){for(var at=-1,Wt=W==null?0:W.length;++at<Wt;)if(ft(W[at],at,W))return!0;return!1}var nE=Ah("length");function iE(W){return W.split("")}function rE(W){return W.match(xn)||[]}function y_(W,ft,at){var Wt;return at(W,function(ve,ke,Tn){if(ft(ve,ke,Tn))return Wt=ke,!1}),Wt}function Bu(W,ft,at,Wt){for(var ve=W.length,ke=at+(Wt?1:-1);Wt?ke--:++ke<ve;)if(ft(W[ke],ke,W))return ke;return-1}function to(W,ft,at){return ft===ft?_E(W,ft,at):Bu(W,S_,at)}function sE(W,ft,at,Wt){for(var ve=at-1,ke=W.length;++ve<ke;)if(Wt(W[ve],ft))return ve;return-1}function S_(W){return W!==W}function M_(W,ft){var at=W==null?0:W.length;return at?Ch(W,ft)/at:N}function Ah(W){return function(ft){return ft==null?e:ft[W]}}function Rh(W){return function(ft){return W==null?e:W[ft]}}function E_(W,ft,at,Wt,ve){return ve(W,function(ke,Tn,Ke){at=Wt?(Wt=!1,ke):ft(at,ke,Tn,Ke)}),at}function aE(W,ft){var at=W.length;for(W.sort(ft);at--;)W[at]=W[at].value;return W}function Ch(W,ft){for(var at,Wt=-1,ve=W.length;++Wt<ve;){var ke=ft(W[Wt]);ke!==e&&(at=at===e?ke:at+ke)}return at}function Ph(W,ft){for(var at=-1,Wt=Array(W);++at<W;)Wt[at]=ft(at);return Wt}function oE(W,ft){return rn(ft,function(at){return[at,W[at]]})}function T_(W){return W&&W.slice(0,R_(W)+1).replace(se,"")}function Ri(W){return function(ft){return W(ft)}}function Lh(W,ft){return rn(ft,function(at){return W[at]})}function Sl(W,ft){return W.has(ft)}function w_(W,ft){for(var at=-1,Wt=W.length;++at<Wt&&to(ft,W[at],0)>-1;);return at}function b_(W,ft){for(var at=W.length;at--&&to(ft,W[at],0)>-1;);return at}function lE(W,ft){for(var at=W.length,Wt=0;at--;)W[at]===ft&&++Wt;return Wt}var uE=Rh(YM),cE=Rh(qM);function fE(W){return"\\"+KM[W]}function hE(W,ft){return W==null?e:W[ft]}function eo(W){return GM.test(W)}function dE(W){return VM.test(W)}function pE(W){for(var ft,at=[];!(ft=W.next()).done;)at.push(ft.value);return at}function Dh(W){var ft=-1,at=Array(W.size);return W.forEach(function(Wt,ve){at[++ft]=[ve,Wt]}),at}function A_(W,ft){return function(at){return W(ft(at))}}function Es(W,ft){for(var at=-1,Wt=W.length,ve=0,ke=[];++at<Wt;){var Tn=W[at];(Tn===ft||Tn===d)&&(W[at]=d,ke[ve++]=at)}return ke}function zu(W){var ft=-1,at=Array(W.size);return W.forEach(function(Wt){at[++ft]=Wt}),at}function mE(W){var ft=-1,at=Array(W.size);return W.forEach(function(Wt){at[++ft]=[Wt,Wt]}),at}function _E(W,ft,at){for(var Wt=at-1,ve=W.length;++Wt<ve;)if(W[Wt]===ft)return Wt;return-1}function gE(W,ft,at){for(var Wt=at+1;Wt--;)if(W[Wt]===ft)return Wt;return Wt}function no(W){return eo(W)?xE(W):nE(W)}function mr(W){return eo(W)?yE(W):iE(W)}function R_(W){for(var ft=W.length;ft--&&ye.test(W.charAt(ft)););return ft}var vE=Rh($M);function xE(W){for(var ft=Sh.lastIndex=0;Sh.test(W);)++ft;return ft}function yE(W){return W.match(Sh)||[]}function SE(W){return W.match(HM)||[]}var ME=function W(ft){ft=ft==null?Bn:io.defaults(Bn.Object(),ft,io.pick(Bn,WM));var at=ft.Array,Wt=ft.Date,ve=ft.Error,ke=ft.Function,Tn=ft.Math,Ke=ft.Object,Ih=ft.RegExp,EE=ft.String,Ki=ft.TypeError,ku=at.prototype,TE=ke.prototype,ro=Ke.prototype,Hu=ft["__core-js_shared__"],Gu=TE.toString,We=ro.hasOwnProperty,wE=0,C_=function(){var s=/[^.]+$/.exec(Hu&&Hu.keys&&Hu.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Vu=ro.toString,bE=Gu.call(Ke),AE=Bn._,RE=Ih("^"+Gu.call(We).replace(Pt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wu=h_?ft.Buffer:e,Ts=ft.Symbol,Xu=ft.Uint8Array,P_=Wu?Wu.allocUnsafe:e,Yu=A_(Ke.getPrototypeOf,Ke),L_=Ke.create,D_=ro.propertyIsEnumerable,qu=ku.splice,I_=Ts?Ts.isConcatSpreadable:e,Ml=Ts?Ts.iterator:e,ra=Ts?Ts.toStringTag:e,$u=function(){try{var s=ua(Ke,"defineProperty");return s({},"",{}),s}catch{}}(),CE=ft.clearTimeout!==Bn.clearTimeout&&ft.clearTimeout,PE=Wt&&Wt.now!==Bn.Date.now&&Wt.now,LE=ft.setTimeout!==Bn.setTimeout&&ft.setTimeout,Ku=Tn.ceil,Zu=Tn.floor,Uh=Ke.getOwnPropertySymbols,DE=Wu?Wu.isBuffer:e,U_=ft.isFinite,IE=ku.join,UE=A_(Ke.keys,Ke),wn=Tn.max,Xn=Tn.min,NE=Wt.now,OE=ft.parseInt,N_=Tn.random,FE=ku.reverse,Nh=ua(ft,"DataView"),El=ua(ft,"Map"),Oh=ua(ft,"Promise"),so=ua(ft,"Set"),Tl=ua(ft,"WeakMap"),wl=ua(Ke,"create"),Ju=Tl&&new Tl,ao={},BE=ca(Nh),zE=ca(El),kE=ca(Oh),HE=ca(so),GE=ca(Tl),Qu=Ts?Ts.prototype:e,bl=Qu?Qu.valueOf:e,O_=Qu?Qu.toString:e;function A(s){if(hn(s)&&!xe(s)&&!(s instanceof Ie)){if(s instanceof Zi)return s;if(We.call(s,"__wrapped__"))return Fg(s)}return new Zi(s)}var oo=function(){function s(){}return function(o){if(!an(o))return{};if(L_)return L_(o);s.prototype=o;var h=new s;return s.prototype=e,h}}();function ju(){}function Zi(s,o){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=e}A.templateSettings={escape:Tt,evaluate:Yt,interpolate:Dt,variable:"",imports:{_:A}},A.prototype=ju.prototype,A.prototype.constructor=A,Zi.prototype=oo(ju.prototype),Zi.prototype.constructor=Zi;function Ie(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=V,this.__views__=[]}function VE(){var s=new Ie(this.__wrapped__);return s.__actions__=mi(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=mi(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=mi(this.__views__),s}function WE(){if(this.__filtered__){var s=new Ie(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function XE(){var s=this.__wrapped__.value(),o=this.__dir__,h=xe(s),v=o<0,M=h?s.length:0,D=iw(0,M,this.__views__),F=D.start,H=D.end,q=H-F,dt=v?H:F-1,pt=this.__iteratees__,xt=pt.length,Ut=0,jt=Xn(q,this.__takeCount__);if(!h||!v&&M==q&&jt==q)return ag(s,this.__actions__);var ce=[];t:for(;q--&&Ut<jt;){dt+=o;for(var Ee=-1,fe=s[dt];++Ee<xt;){var Ce=pt[Ee],Ue=Ce.iteratee,Li=Ce.type,ri=Ue(fe);if(Li==K)fe=ri;else if(!ri){if(Li==z)continue t;break t}}ce[Ut++]=fe}return ce}Ie.prototype=oo(ju.prototype),Ie.prototype.constructor=Ie;function sa(s){var o=-1,h=s==null?0:s.length;for(this.clear();++o<h;){var v=s[o];this.set(v[0],v[1])}}function YE(){this.__data__=wl?wl(null):{},this.size=0}function qE(s){var o=this.has(s)&&delete this.__data__[s];return this.size-=o?1:0,o}function $E(s){var o=this.__data__;if(wl){var h=o[s];return h===c?e:h}return We.call(o,s)?o[s]:e}function KE(s){var o=this.__data__;return wl?o[s]!==e:We.call(o,s)}function ZE(s,o){var h=this.__data__;return this.size+=this.has(s)?0:1,h[s]=wl&&o===e?c:o,this}sa.prototype.clear=YE,sa.prototype.delete=qE,sa.prototype.get=$E,sa.prototype.has=KE,sa.prototype.set=ZE;function Yr(s){var o=-1,h=s==null?0:s.length;for(this.clear();++o<h;){var v=s[o];this.set(v[0],v[1])}}function JE(){this.__data__=[],this.size=0}function QE(s){var o=this.__data__,h=tc(o,s);if(h<0)return!1;var v=o.length-1;return h==v?o.pop():qu.call(o,h,1),--this.size,!0}function jE(s){var o=this.__data__,h=tc(o,s);return h<0?e:o[h][1]}function tT(s){return tc(this.__data__,s)>-1}function eT(s,o){var h=this.__data__,v=tc(h,s);return v<0?(++this.size,h.push([s,o])):h[v][1]=o,this}Yr.prototype.clear=JE,Yr.prototype.delete=QE,Yr.prototype.get=jE,Yr.prototype.has=tT,Yr.prototype.set=eT;function qr(s){var o=-1,h=s==null?0:s.length;for(this.clear();++o<h;){var v=s[o];this.set(v[0],v[1])}}function nT(){this.size=0,this.__data__={hash:new sa,map:new(El||Yr),string:new sa}}function iT(s){var o=hc(this,s).delete(s);return this.size-=o?1:0,o}function rT(s){return hc(this,s).get(s)}function sT(s){return hc(this,s).has(s)}function aT(s,o){var h=hc(this,s),v=h.size;return h.set(s,o),this.size+=h.size==v?0:1,this}qr.prototype.clear=nT,qr.prototype.delete=iT,qr.prototype.get=rT,qr.prototype.has=sT,qr.prototype.set=aT;function aa(s){var o=-1,h=s==null?0:s.length;for(this.__data__=new qr;++o<h;)this.add(s[o])}function oT(s){return this.__data__.set(s,c),this}function lT(s){return this.__data__.has(s)}aa.prototype.add=aa.prototype.push=oT,aa.prototype.has=lT;function _r(s){var o=this.__data__=new Yr(s);this.size=o.size}function uT(){this.__data__=new Yr,this.size=0}function cT(s){var o=this.__data__,h=o.delete(s);return this.size=o.size,h}function fT(s){return this.__data__.get(s)}function hT(s){return this.__data__.has(s)}function dT(s,o){var h=this.__data__;if(h instanceof Yr){var v=h.__data__;if(!El||v.length<r-1)return v.push([s,o]),this.size=++h.size,this;h=this.__data__=new qr(v)}return h.set(s,o),this.size=h.size,this}_r.prototype.clear=uT,_r.prototype.delete=cT,_r.prototype.get=fT,_r.prototype.has=hT,_r.prototype.set=dT;function F_(s,o){var h=xe(s),v=!h&&fa(s),M=!h&&!v&&Cs(s),D=!h&&!v&&!M&&fo(s),F=h||v||M||D,H=F?Ph(s.length,EE):[],q=H.length;for(var dt in s)(o||We.call(s,dt))&&!(F&&(dt=="length"||M&&(dt=="offset"||dt=="parent")||D&&(dt=="buffer"||dt=="byteLength"||dt=="byteOffset")||Jr(dt,q)))&&H.push(dt);return H}function B_(s){var o=s.length;return o?s[qh(0,o-1)]:e}function pT(s,o){return dc(mi(s),oa(o,0,s.length))}function mT(s){return dc(mi(s))}function Fh(s,o,h){(h!==e&&!gr(s[o],h)||h===e&&!(o in s))&&$r(s,o,h)}function Al(s,o,h){var v=s[o];(!(We.call(s,o)&&gr(v,h))||h===e&&!(o in s))&&$r(s,o,h)}function tc(s,o){for(var h=s.length;h--;)if(gr(s[h][0],o))return h;return-1}function _T(s,o,h,v){return ws(s,function(M,D,F){o(v,M,h(M),F)}),v}function z_(s,o){return s&&Ir(o,Ln(o),s)}function gT(s,o){return s&&Ir(o,gi(o),s)}function $r(s,o,h){o=="__proto__"&&$u?$u(s,o,{configurable:!0,enumerable:!0,value:h,writable:!0}):s[o]=h}function Bh(s,o){for(var h=-1,v=o.length,M=at(v),D=s==null;++h<v;)M[h]=D?e:vd(s,o[h]);return M}function oa(s,o,h){return s===s&&(h!==e&&(s=s<=h?s:h),o!==e&&(s=s>=o?s:o)),s}function Ji(s,o,h,v,M,D){var F,H=o&_,q=o&p,dt=o&m;if(h&&(F=M?h(s,v,M,D):h(s)),F!==e)return F;if(!an(s))return s;var pt=xe(s);if(pt){if(F=sw(s),!H)return mi(s,F)}else{var xt=Yn(s),Ut=xt==j||xt==oe;if(Cs(s))return ug(s,H);if(xt==Q||xt==bt||Ut&&!M){if(F=q||Ut?{}:Rg(s),!H)return q?$T(s,gT(F,s)):qT(s,z_(F,s))}else{if(!Qe[xt])return M?s:{};F=aw(s,xt,H)}}D||(D=new _r);var jt=D.get(s);if(jt)return jt;D.set(s,F),i0(s)?s.forEach(function(fe){F.add(Ji(fe,o,h,fe,s,D))}):e0(s)&&s.forEach(function(fe,Ce){F.set(Ce,Ji(fe,o,h,Ce,s,D))});var ce=dt?q?rd:id:q?gi:Ln,Ee=pt?e:ce(s);return $i(Ee||s,function(fe,Ce){Ee&&(Ce=fe,fe=s[Ce]),Al(F,Ce,Ji(fe,o,h,Ce,s,D))}),F}function vT(s){var o=Ln(s);return function(h){return k_(h,s,o)}}function k_(s,o,h){var v=h.length;if(s==null)return!v;for(s=Ke(s);v--;){var M=h[v],D=o[M],F=s[M];if(F===e&&!(M in s)||!D(F))return!1}return!0}function H_(s,o,h){if(typeof s!="function")throw new Ki(u);return Ul(function(){s.apply(e,h)},o)}function Rl(s,o,h,v){var M=-1,D=Fu,F=!0,H=s.length,q=[],dt=o.length;if(!H)return q;h&&(o=rn(o,Ri(h))),v?(D=Th,F=!1):o.length>=r&&(D=Sl,F=!1,o=new aa(o));t:for(;++M<H;){var pt=s[M],xt=h==null?pt:h(pt);if(pt=v||pt!==0?pt:0,F&&xt===xt){for(var Ut=dt;Ut--;)if(o[Ut]===xt)continue t;q.push(pt)}else D(o,xt,v)||q.push(pt)}return q}var ws=pg(Dr),G_=pg(kh,!0);function xT(s,o){var h=!0;return ws(s,function(v,M,D){return h=!!o(v,M,D),h}),h}function ec(s,o,h){for(var v=-1,M=s.length;++v<M;){var D=s[v],F=o(D);if(F!=null&&(H===e?F===F&&!Pi(F):h(F,H)))var H=F,q=D}return q}function yT(s,o,h,v){var M=s.length;for(h=Se(h),h<0&&(h=-h>M?0:M+h),v=v===e||v>M?M:Se(v),v<0&&(v+=M),v=h>v?0:s0(v);h<v;)s[h++]=o;return s}function V_(s,o){var h=[];return ws(s,function(v,M,D){o(v,M,D)&&h.push(v)}),h}function zn(s,o,h,v,M){var D=-1,F=s.length;for(h||(h=lw),M||(M=[]);++D<F;){var H=s[D];o>0&&h(H)?o>1?zn(H,o-1,h,v,M):Ms(M,H):v||(M[M.length]=H)}return M}var zh=mg(),W_=mg(!0);function Dr(s,o){return s&&zh(s,o,Ln)}function kh(s,o){return s&&W_(s,o,Ln)}function nc(s,o){return Ss(o,function(h){return Qr(s[h])})}function la(s,o){o=As(o,s);for(var h=0,v=o.length;s!=null&&h<v;)s=s[Ur(o[h++])];return h&&h==v?s:e}function X_(s,o,h){var v=o(s);return xe(s)?v:Ms(v,h(s))}function ni(s){return s==null?s===e?P:Kt:ra&&ra in Ke(s)?nw(s):mw(s)}function Hh(s,o){return s>o}function ST(s,o){return s!=null&&We.call(s,o)}function MT(s,o){return s!=null&&o in Ke(s)}function ET(s,o,h){return s>=Xn(o,h)&&s<wn(o,h)}function Gh(s,o,h){for(var v=h?Th:Fu,M=s[0].length,D=s.length,F=D,H=at(D),q=1/0,dt=[];F--;){var pt=s[F];F&&o&&(pt=rn(pt,Ri(o))),q=Xn(pt.length,q),H[F]=!h&&(o||M>=120&&pt.length>=120)?new aa(F&&pt):e}pt=s[0];var xt=-1,Ut=H[0];t:for(;++xt<M&&dt.length<q;){var jt=pt[xt],ce=o?o(jt):jt;if(jt=h||jt!==0?jt:0,!(Ut?Sl(Ut,ce):v(dt,ce,h))){for(F=D;--F;){var Ee=H[F];if(!(Ee?Sl(Ee,ce):v(s[F],ce,h)))continue t}Ut&&Ut.push(ce),dt.push(jt)}}return dt}function TT(s,o,h,v){return Dr(s,function(M,D,F){o(v,h(M),D,F)}),v}function Cl(s,o,h){o=As(o,s),s=Dg(s,o);var v=s==null?s:s[Ur(ji(o))];return v==null?e:Ai(v,s,h)}function Y_(s){return hn(s)&&ni(s)==bt}function wT(s){return hn(s)&&ni(s)==mt}function bT(s){return hn(s)&&ni(s)==Xt}function Pl(s,o,h,v,M){return s===o?!0:s==null||o==null||!hn(s)&&!hn(o)?s!==s&&o!==o:AT(s,o,h,v,Pl,M)}function AT(s,o,h,v,M,D){var F=xe(s),H=xe(o),q=F?Bt:Yn(s),dt=H?Bt:Yn(o);q=q==bt?Q:q,dt=dt==bt?Q:dt;var pt=q==Q,xt=dt==Q,Ut=q==dt;if(Ut&&Cs(s)){if(!Cs(o))return!1;F=!0,pt=!1}if(Ut&&!pt)return D||(D=new _r),F||fo(s)?wg(s,o,h,v,M,D):tw(s,o,q,h,v,M,D);if(!(h&S)){var jt=pt&&We.call(s,"__wrapped__"),ce=xt&&We.call(o,"__wrapped__");if(jt||ce){var Ee=jt?s.value():s,fe=ce?o.value():o;return D||(D=new _r),M(Ee,fe,h,v,D)}}return Ut?(D||(D=new _r),ew(s,o,h,v,M,D)):!1}function RT(s){return hn(s)&&Yn(s)==At}function Vh(s,o,h,v){var M=h.length,D=M,F=!v;if(s==null)return!D;for(s=Ke(s);M--;){var H=h[M];if(F&&H[2]?H[1]!==s[H[0]]:!(H[0]in s))return!1}for(;++M<D;){H=h[M];var q=H[0],dt=s[q],pt=H[1];if(F&&H[2]){if(dt===e&&!(q in s))return!1}else{var xt=new _r;if(v)var Ut=v(dt,pt,q,s,o,xt);if(!(Ut===e?Pl(pt,dt,S|y,v,xt):Ut))return!1}}return!0}function q_(s){if(!an(s)||cw(s))return!1;var o=Qr(s)?RE:et;return o.test(ca(s))}function CT(s){return hn(s)&&ni(s)==he}function PT(s){return hn(s)&&Yn(s)==ae}function LT(s){return hn(s)&&xc(s.length)&&!!tn[ni(s)]}function $_(s){return typeof s=="function"?s:s==null?vi:typeof s=="object"?xe(s)?J_(s[0],s[1]):Z_(s):_0(s)}function Wh(s){if(!Il(s))return UE(s);var o=[];for(var h in Ke(s))We.call(s,h)&&h!="constructor"&&o.push(h);return o}function DT(s){if(!an(s))return pw(s);var o=Il(s),h=[];for(var v in s)v=="constructor"&&(o||!We.call(s,v))||h.push(v);return h}function Xh(s,o){return s<o}function K_(s,o){var h=-1,v=_i(s)?at(s.length):[];return ws(s,function(M,D,F){v[++h]=o(M,D,F)}),v}function Z_(s){var o=ad(s);return o.length==1&&o[0][2]?Pg(o[0][0],o[0][1]):function(h){return h===s||Vh(h,s,o)}}function J_(s,o){return ld(s)&&Cg(o)?Pg(Ur(s),o):function(h){var v=vd(h,s);return v===e&&v===o?xd(h,s):Pl(o,v,S|y)}}function ic(s,o,h,v,M){s!==o&&zh(o,function(D,F){if(M||(M=new _r),an(D))IT(s,o,F,h,ic,v,M);else{var H=v?v(cd(s,F),D,F+"",s,o,M):e;H===e&&(H=D),Fh(s,F,H)}},gi)}function IT(s,o,h,v,M,D,F){var H=cd(s,h),q=cd(o,h),dt=F.get(q);if(dt){Fh(s,h,dt);return}var pt=D?D(H,q,h+"",s,o,F):e,xt=pt===e;if(xt){var Ut=xe(q),jt=!Ut&&Cs(q),ce=!Ut&&!jt&&fo(q);pt=q,Ut||jt||ce?xe(H)?pt=H:mn(H)?pt=mi(H):jt?(xt=!1,pt=ug(q,!0)):ce?(xt=!1,pt=cg(q,!0)):pt=[]:Nl(q)||fa(q)?(pt=H,fa(H)?pt=a0(H):(!an(H)||Qr(H))&&(pt=Rg(q))):xt=!1}xt&&(F.set(q,pt),M(pt,q,v,D,F),F.delete(q)),Fh(s,h,pt)}function Q_(s,o){var h=s.length;if(h)return o+=o<0?h:0,Jr(o,h)?s[o]:e}function j_(s,o,h){o.length?o=rn(o,function(D){return xe(D)?function(F){return la(F,D.length===1?D[0]:D)}:D}):o=[vi];var v=-1;o=rn(o,Ri(ue()));var M=K_(s,function(D,F,H){var q=rn(o,function(dt){return dt(D)});return{criteria:q,index:++v,value:D}});return aE(M,function(D,F){return YT(D,F,h)})}function UT(s,o){return tg(s,o,function(h,v){return xd(s,v)})}function tg(s,o,h){for(var v=-1,M=o.length,D={};++v<M;){var F=o[v],H=la(s,F);h(H,F)&&Ll(D,As(F,s),H)}return D}function NT(s){return function(o){return la(o,s)}}function Yh(s,o,h,v){var M=v?sE:to,D=-1,F=o.length,H=s;for(s===o&&(o=mi(o)),h&&(H=rn(s,Ri(h)));++D<F;)for(var q=0,dt=o[D],pt=h?h(dt):dt;(q=M(H,pt,q,v))>-1;)H!==s&&qu.call(H,q,1),qu.call(s,q,1);return s}function eg(s,o){for(var h=s?o.length:0,v=h-1;h--;){var M=o[h];if(h==v||M!==D){var D=M;Jr(M)?qu.call(s,M,1):Zh(s,M)}}return s}function qh(s,o){return s+Zu(N_()*(o-s+1))}function OT(s,o,h,v){for(var M=-1,D=wn(Ku((o-s)/(h||1)),0),F=at(D);D--;)F[v?D:++M]=s,s+=h;return F}function $h(s,o){var h="";if(!s||o<1||o>lt)return h;do o%2&&(h+=s),o=Zu(o/2),o&&(s+=s);while(o);return h}function we(s,o){return fd(Lg(s,o,vi),s+"")}function FT(s){return B_(ho(s))}function BT(s,o){var h=ho(s);return dc(h,oa(o,0,h.length))}function Ll(s,o,h,v){if(!an(s))return s;o=As(o,s);for(var M=-1,D=o.length,F=D-1,H=s;H!=null&&++M<D;){var q=Ur(o[M]),dt=h;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(M!=F){var pt=H[q];dt=v?v(pt,q,H):e,dt===e&&(dt=an(pt)?pt:Jr(o[M+1])?[]:{})}Al(H,q,dt),H=H[q]}return s}var ng=Ju?function(s,o){return Ju.set(s,o),s}:vi,zT=$u?function(s,o){return $u(s,"toString",{configurable:!0,enumerable:!1,value:Sd(o),writable:!0})}:vi;function kT(s){return dc(ho(s))}function Qi(s,o,h){var v=-1,M=s.length;o<0&&(o=-o>M?0:M+o),h=h>M?M:h,h<0&&(h+=M),M=o>h?0:h-o>>>0,o>>>=0;for(var D=at(M);++v<M;)D[v]=s[v+o];return D}function HT(s,o){var h;return ws(s,function(v,M,D){return h=o(v,M,D),!h}),!!h}function rc(s,o,h){var v=0,M=s==null?v:s.length;if(typeof o=="number"&&o===o&&M<=Lt){for(;v<M;){var D=v+M>>>1,F=s[D];F!==null&&!Pi(F)&&(h?F<=o:F<o)?v=D+1:M=D}return M}return Kh(s,o,vi,h)}function Kh(s,o,h,v){var M=0,D=s==null?0:s.length;if(D===0)return 0;o=h(o);for(var F=o!==o,H=o===null,q=Pi(o),dt=o===e;M<D;){var pt=Zu((M+D)/2),xt=h(s[pt]),Ut=xt!==e,jt=xt===null,ce=xt===xt,Ee=Pi(xt);if(F)var fe=v||ce;else dt?fe=ce&&(v||Ut):H?fe=ce&&Ut&&(v||!jt):q?fe=ce&&Ut&&!jt&&(v||!Ee):jt||Ee?fe=!1:fe=v?xt<=o:xt<o;fe?M=pt+1:D=pt}return Xn(D,rt)}function ig(s,o){for(var h=-1,v=s.length,M=0,D=[];++h<v;){var F=s[h],H=o?o(F):F;if(!h||!gr(H,q)){var q=H;D[M++]=F===0?0:F}}return D}function rg(s){return typeof s=="number"?s:Pi(s)?N:+s}function Ci(s){if(typeof s=="string")return s;if(xe(s))return rn(s,Ci)+"";if(Pi(s))return O_?O_.call(s):"";var o=s+"";return o=="0"&&1/s==-$?"-0":o}function bs(s,o,h){var v=-1,M=Fu,D=s.length,F=!0,H=[],q=H;if(h)F=!1,M=Th;else if(D>=r){var dt=o?null:QT(s);if(dt)return zu(dt);F=!1,M=Sl,q=new aa}else q=o?[]:H;t:for(;++v<D;){var pt=s[v],xt=o?o(pt):pt;if(pt=h||pt!==0?pt:0,F&&xt===xt){for(var Ut=q.length;Ut--;)if(q[Ut]===xt)continue t;o&&q.push(xt),H.push(pt)}else M(q,xt,h)||(q!==H&&q.push(xt),H.push(pt))}return H}function Zh(s,o){return o=As(o,s),s=Dg(s,o),s==null||delete s[Ur(ji(o))]}function sg(s,o,h,v){return Ll(s,o,h(la(s,o)),v)}function sc(s,o,h,v){for(var M=s.length,D=v?M:-1;(v?D--:++D<M)&&o(s[D],D,s););return h?Qi(s,v?0:D,v?D+1:M):Qi(s,v?D+1:0,v?M:D)}function ag(s,o){var h=s;return h instanceof Ie&&(h=h.value()),wh(o,function(v,M){return M.func.apply(M.thisArg,Ms([v],M.args))},h)}function Jh(s,o,h){var v=s.length;if(v<2)return v?bs(s[0]):[];for(var M=-1,D=at(v);++M<v;)for(var F=s[M],H=-1;++H<v;)H!=M&&(D[M]=Rl(D[M]||F,s[H],o,h));return bs(zn(D,1),o,h)}function og(s,o,h){for(var v=-1,M=s.length,D=o.length,F={};++v<M;){var H=v<D?o[v]:e;h(F,s[v],H)}return F}function Qh(s){return mn(s)?s:[]}function jh(s){return typeof s=="function"?s:vi}function As(s,o){return xe(s)?s:ld(s,o)?[s]:Og(Ge(s))}var GT=we;function Rs(s,o,h){var v=s.length;return h=h===e?v:h,!o&&h>=v?s:Qi(s,o,h)}var lg=CE||function(s){return Bn.clearTimeout(s)};function ug(s,o){if(o)return s.slice();var h=s.length,v=P_?P_(h):new s.constructor(h);return s.copy(v),v}function td(s){var o=new s.constructor(s.byteLength);return new Xu(o).set(new Xu(s)),o}function VT(s,o){var h=o?td(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.byteLength)}function WT(s){var o=new s.constructor(s.source,Wn.exec(s));return o.lastIndex=s.lastIndex,o}function XT(s){return bl?Ke(bl.call(s)):{}}function cg(s,o){var h=o?td(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.length)}function fg(s,o){if(s!==o){var h=s!==e,v=s===null,M=s===s,D=Pi(s),F=o!==e,H=o===null,q=o===o,dt=Pi(o);if(!H&&!dt&&!D&&s>o||D&&F&&q&&!H&&!dt||v&&F&&q||!h&&q||!M)return 1;if(!v&&!D&&!dt&&s<o||dt&&h&&M&&!v&&!D||H&&h&&M||!F&&M||!q)return-1}return 0}function YT(s,o,h){for(var v=-1,M=s.criteria,D=o.criteria,F=M.length,H=h.length;++v<F;){var q=fg(M[v],D[v]);if(q){if(v>=H)return q;var dt=h[v];return q*(dt=="desc"?-1:1)}}return s.index-o.index}function hg(s,o,h,v){for(var M=-1,D=s.length,F=h.length,H=-1,q=o.length,dt=wn(D-F,0),pt=at(q+dt),xt=!v;++H<q;)pt[H]=o[H];for(;++M<F;)(xt||M<D)&&(pt[h[M]]=s[M]);for(;dt--;)pt[H++]=s[M++];return pt}function dg(s,o,h,v){for(var M=-1,D=s.length,F=-1,H=h.length,q=-1,dt=o.length,pt=wn(D-H,0),xt=at(pt+dt),Ut=!v;++M<pt;)xt[M]=s[M];for(var jt=M;++q<dt;)xt[jt+q]=o[q];for(;++F<H;)(Ut||M<D)&&(xt[jt+h[F]]=s[M++]);return xt}function mi(s,o){var h=-1,v=s.length;for(o||(o=at(v));++h<v;)o[h]=s[h];return o}function Ir(s,o,h,v){var M=!h;h||(h={});for(var D=-1,F=o.length;++D<F;){var H=o[D],q=v?v(h[H],s[H],H,h,s):e;q===e&&(q=s[H]),M?$r(h,H,q):Al(h,H,q)}return h}function qT(s,o){return Ir(s,od(s),o)}function $T(s,o){return Ir(s,bg(s),o)}function ac(s,o){return function(h,v){var M=xe(h)?jM:_T,D=o?o():{};return M(h,s,ue(v,2),D)}}function lo(s){return we(function(o,h){var v=-1,M=h.length,D=M>1?h[M-1]:e,F=M>2?h[2]:e;for(D=s.length>3&&typeof D=="function"?(M--,D):e,F&&ii(h[0],h[1],F)&&(D=M<3?e:D,M=1),o=Ke(o);++v<M;){var H=h[v];H&&s(o,H,v,D)}return o})}function pg(s,o){return function(h,v){if(h==null)return h;if(!_i(h))return s(h,v);for(var M=h.length,D=o?M:-1,F=Ke(h);(o?D--:++D<M)&&v(F[D],D,F)!==!1;);return h}}function mg(s){return function(o,h,v){for(var M=-1,D=Ke(o),F=v(o),H=F.length;H--;){var q=F[s?H:++M];if(h(D[q],q,D)===!1)break}return o}}function KT(s,o,h){var v=o&x,M=Dl(s);function D(){var F=this&&this!==Bn&&this instanceof D?M:s;return F.apply(v?h:this,arguments)}return D}function _g(s){return function(o){o=Ge(o);var h=eo(o)?mr(o):e,v=h?h[0]:o.charAt(0),M=h?Rs(h,1).join(""):o.slice(1);return v[s]()+M}}function uo(s){return function(o){return wh(p0(d0(o).replace(zM,"")),s,"")}}function Dl(s){return function(){var o=arguments;switch(o.length){case 0:return new s;case 1:return new s(o[0]);case 2:return new s(o[0],o[1]);case 3:return new s(o[0],o[1],o[2]);case 4:return new s(o[0],o[1],o[2],o[3]);case 5:return new s(o[0],o[1],o[2],o[3],o[4]);case 6:return new s(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new s(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var h=oo(s.prototype),v=s.apply(h,o);return an(v)?v:h}}function ZT(s,o,h){var v=Dl(s);function M(){for(var D=arguments.length,F=at(D),H=D,q=co(M);H--;)F[H]=arguments[H];var dt=D<3&&F[0]!==q&&F[D-1]!==q?[]:Es(F,q);if(D-=dt.length,D<h)return Sg(s,o,oc,M.placeholder,e,F,dt,e,e,h-D);var pt=this&&this!==Bn&&this instanceof M?v:s;return Ai(pt,this,F)}return M}function gg(s){return function(o,h,v){var M=Ke(o);if(!_i(o)){var D=ue(h,3);o=Ln(o),h=function(H){return D(M[H],H,M)}}var F=s(o,h,v);return F>-1?M[D?o[F]:F]:e}}function vg(s){return Zr(function(o){var h=o.length,v=h,M=Zi.prototype.thru;for(s&&o.reverse();v--;){var D=o[v];if(typeof D!="function")throw new Ki(u);if(M&&!F&&fc(D)=="wrapper")var F=new Zi([],!0)}for(v=F?v:h;++v<h;){D=o[v];var H=fc(D),q=H=="wrapper"?sd(D):e;q&&ud(q[0])&&q[1]==(b|E|C|k)&&!q[4].length&&q[9]==1?F=F[fc(q[0])].apply(F,q[3]):F=D.length==1&&ud(D)?F[H]():F.thru(D)}return function(){var dt=arguments,pt=dt[0];if(F&&dt.length==1&&xe(pt))return F.plant(pt).value();for(var xt=0,Ut=h?o[xt].apply(this,dt):pt;++xt<h;)Ut=o[xt].call(this,Ut);return Ut}})}function oc(s,o,h,v,M,D,F,H,q,dt){var pt=o&b,xt=o&x,Ut=o&g,jt=o&(E|w),ce=o&T,Ee=Ut?e:Dl(s);function fe(){for(var Ce=arguments.length,Ue=at(Ce),Li=Ce;Li--;)Ue[Li]=arguments[Li];if(jt)var ri=co(fe),Di=lE(Ue,ri);if(v&&(Ue=hg(Ue,v,M,jt)),D&&(Ue=dg(Ue,D,F,jt)),Ce-=Di,jt&&Ce<dt){var _n=Es(Ue,ri);return Sg(s,o,oc,fe.placeholder,h,Ue,_n,H,q,dt-Ce)}var vr=xt?h:this,ts=Ut?vr[s]:s;return Ce=Ue.length,H?Ue=_w(Ue,H):ce&&Ce>1&&Ue.reverse(),pt&&q<Ce&&(Ue.length=q),this&&this!==Bn&&this instanceof fe&&(ts=Ee||Dl(ts)),ts.apply(vr,Ue)}return fe}function xg(s,o){return function(h,v){return TT(h,s,o(v),{})}}function lc(s,o){return function(h,v){var M;if(h===e&&v===e)return o;if(h!==e&&(M=h),v!==e){if(M===e)return v;typeof h=="string"||typeof v=="string"?(h=Ci(h),v=Ci(v)):(h=rg(h),v=rg(v)),M=s(h,v)}return M}}function ed(s){return Zr(function(o){return o=rn(o,Ri(ue())),we(function(h){var v=this;return s(o,function(M){return Ai(M,v,h)})})})}function uc(s,o){o=o===e?" ":Ci(o);var h=o.length;if(h<2)return h?$h(o,s):o;var v=$h(o,Ku(s/no(o)));return eo(o)?Rs(mr(v),0,s).join(""):v.slice(0,s)}function JT(s,o,h,v){var M=o&x,D=Dl(s);function F(){for(var H=-1,q=arguments.length,dt=-1,pt=v.length,xt=at(pt+q),Ut=this&&this!==Bn&&this instanceof F?D:s;++dt<pt;)xt[dt]=v[dt];for(;q--;)xt[dt++]=arguments[++H];return Ai(Ut,M?h:this,xt)}return F}function yg(s){return function(o,h,v){return v&&typeof v!="number"&&ii(o,h,v)&&(h=v=e),o=jr(o),h===e?(h=o,o=0):h=jr(h),v=v===e?o<h?1:-1:jr(v),OT(o,h,v,s)}}function cc(s){return function(o,h){return typeof o=="string"&&typeof h=="string"||(o=tr(o),h=tr(h)),s(o,h)}}function Sg(s,o,h,v,M,D,F,H,q,dt){var pt=o&E,xt=pt?F:e,Ut=pt?e:F,jt=pt?D:e,ce=pt?e:D;o|=pt?C:U,o&=~(pt?U:C),o&R||(o&=~(x|g));var Ee=[s,o,M,jt,xt,ce,Ut,H,q,dt],fe=h.apply(e,Ee);return ud(s)&&Ig(fe,Ee),fe.placeholder=v,Ug(fe,s,o)}function nd(s){var o=Tn[s];return function(h,v){if(h=tr(h),v=v==null?0:Xn(Se(v),292),v&&U_(h)){var M=(Ge(h)+"e").split("e"),D=o(M[0]+"e"+(+M[1]+v));return M=(Ge(D)+"e").split("e"),+(M[0]+"e"+(+M[1]-v))}return o(h)}}var QT=so&&1/zu(new so([,-0]))[1]==$?function(s){return new so(s)}:Td;function Mg(s){return function(o){var h=Yn(o);return h==At?Dh(o):h==ae?mE(o):oE(o,s(o))}}function Kr(s,o,h,v,M,D,F,H){var q=o&g;if(!q&&typeof s!="function")throw new Ki(u);var dt=v?v.length:0;if(dt||(o&=~(C|U),v=M=e),F=F===e?F:wn(Se(F),0),H=H===e?H:Se(H),dt-=M?M.length:0,o&U){var pt=v,xt=M;v=M=e}var Ut=q?e:sd(s),jt=[s,o,h,v,M,pt,xt,D,F,H];if(Ut&&dw(jt,Ut),s=jt[0],o=jt[1],h=jt[2],v=jt[3],M=jt[4],H=jt[9]=jt[9]===e?q?0:s.length:wn(jt[9]-dt,0),!H&&o&(E|w)&&(o&=~(E|w)),!o||o==x)var ce=KT(s,o,h);else o==E||o==w?ce=ZT(s,o,H):(o==C||o==(x|C))&&!M.length?ce=JT(s,o,h,v):ce=oc.apply(e,jt);var Ee=Ut?ng:Ig;return Ug(Ee(ce,jt),s,o)}function Eg(s,o,h,v){return s===e||gr(s,ro[h])&&!We.call(v,h)?o:s}function Tg(s,o,h,v,M,D){return an(s)&&an(o)&&(D.set(o,s),ic(s,o,e,Tg,D),D.delete(o)),s}function jT(s){return Nl(s)?e:s}function wg(s,o,h,v,M,D){var F=h&S,H=s.length,q=o.length;if(H!=q&&!(F&&q>H))return!1;var dt=D.get(s),pt=D.get(o);if(dt&&pt)return dt==o&&pt==s;var xt=-1,Ut=!0,jt=h&y?new aa:e;for(D.set(s,o),D.set(o,s);++xt<H;){var ce=s[xt],Ee=o[xt];if(v)var fe=F?v(Ee,ce,xt,o,s,D):v(ce,Ee,xt,s,o,D);if(fe!==e){if(fe)continue;Ut=!1;break}if(jt){if(!bh(o,function(Ce,Ue){if(!Sl(jt,Ue)&&(ce===Ce||M(ce,Ce,h,v,D)))return jt.push(Ue)})){Ut=!1;break}}else if(!(ce===Ee||M(ce,Ee,h,v,D))){Ut=!1;break}}return D.delete(s),D.delete(o),Ut}function tw(s,o,h,v,M,D,F){switch(h){case vt:if(s.byteLength!=o.byteLength||s.byteOffset!=o.byteOffset)return!1;s=s.buffer,o=o.buffer;case mt:return!(s.byteLength!=o.byteLength||!D(new Xu(s),new Xu(o)));case zt:case Xt:case Gt:return gr(+s,+o);case Qt:return s.name==o.name&&s.message==o.message;case he:case Fe:return s==o+"";case At:var H=Dh;case ae:var q=v&S;if(H||(H=zu),s.size!=o.size&&!q)return!1;var dt=F.get(s);if(dt)return dt==o;v|=y,F.set(s,o);var pt=wg(H(s),H(o),v,M,D,F);return F.delete(s),pt;case O:if(bl)return bl.call(s)==bl.call(o)}return!1}function ew(s,o,h,v,M,D){var F=h&S,H=id(s),q=H.length,dt=id(o),pt=dt.length;if(q!=pt&&!F)return!1;for(var xt=q;xt--;){var Ut=H[xt];if(!(F?Ut in o:We.call(o,Ut)))return!1}var jt=D.get(s),ce=D.get(o);if(jt&&ce)return jt==o&&ce==s;var Ee=!0;D.set(s,o),D.set(o,s);for(var fe=F;++xt<q;){Ut=H[xt];var Ce=s[Ut],Ue=o[Ut];if(v)var Li=F?v(Ue,Ce,Ut,o,s,D):v(Ce,Ue,Ut,s,o,D);if(!(Li===e?Ce===Ue||M(Ce,Ue,h,v,D):Li)){Ee=!1;break}fe||(fe=Ut=="constructor")}if(Ee&&!fe){var ri=s.constructor,Di=o.constructor;ri!=Di&&"constructor"in s&&"constructor"in o&&!(typeof ri=="function"&&ri instanceof ri&&typeof Di=="function"&&Di instanceof Di)&&(Ee=!1)}return D.delete(s),D.delete(o),Ee}function Zr(s){return fd(Lg(s,e,kg),s+"")}function id(s){return X_(s,Ln,od)}function rd(s){return X_(s,gi,bg)}var sd=Ju?function(s){return Ju.get(s)}:Td;function fc(s){for(var o=s.name+"",h=ao[o],v=We.call(ao,o)?h.length:0;v--;){var M=h[v],D=M.func;if(D==null||D==s)return M.name}return o}function co(s){var o=We.call(A,"placeholder")?A:s;return o.placeholder}function ue(){var s=A.iteratee||Md;return s=s===Md?$_:s,arguments.length?s(arguments[0],arguments[1]):s}function hc(s,o){var h=s.__data__;return uw(o)?h[typeof o=="string"?"string":"hash"]:h.map}function ad(s){for(var o=Ln(s),h=o.length;h--;){var v=o[h],M=s[v];o[h]=[v,M,Cg(M)]}return o}function ua(s,o){var h=hE(s,o);return q_(h)?h:e}function nw(s){var o=We.call(s,ra),h=s[ra];try{s[ra]=e;var v=!0}catch{}var M=Vu.call(s);return v&&(o?s[ra]=h:delete s[ra]),M}var od=Uh?function(s){return s==null?[]:(s=Ke(s),Ss(Uh(s),function(o){return D_.call(s,o)}))}:wd,bg=Uh?function(s){for(var o=[];s;)Ms(o,od(s)),s=Yu(s);return o}:wd,Yn=ni;(Nh&&Yn(new Nh(new ArrayBuffer(1)))!=vt||El&&Yn(new El)!=At||Oh&&Yn(Oh.resolve())!=ee||so&&Yn(new so)!=ae||Tl&&Yn(new Tl)!=J)&&(Yn=function(s){var o=ni(s),h=o==Q?s.constructor:e,v=h?ca(h):"";if(v)switch(v){case BE:return vt;case zE:return At;case kE:return ee;case HE:return ae;case GE:return J}return o});function iw(s,o,h){for(var v=-1,M=h.length;++v<M;){var D=h[v],F=D.size;switch(D.type){case"drop":s+=F;break;case"dropRight":o-=F;break;case"take":o=Xn(o,s+F);break;case"takeRight":s=wn(s,o-F);break}}return{start:s,end:o}}function rw(s){var o=s.match(be);return o?o[1].split(Xe):[]}function Ag(s,o,h){o=As(o,s);for(var v=-1,M=o.length,D=!1;++v<M;){var F=Ur(o[v]);if(!(D=s!=null&&h(s,F)))break;s=s[F]}return D||++v!=M?D:(M=s==null?0:s.length,!!M&&xc(M)&&Jr(F,M)&&(xe(s)||fa(s)))}function sw(s){var o=s.length,h=new s.constructor(o);return o&&typeof s[0]=="string"&&We.call(s,"index")&&(h.index=s.index,h.input=s.input),h}function Rg(s){return typeof s.constructor=="function"&&!Il(s)?oo(Yu(s)):{}}function aw(s,o,h){var v=s.constructor;switch(o){case mt:return td(s);case zt:case Xt:return new v(+s);case vt:return VT(s,h);case Ot:case Mt:case Rt:case B:case St:case ht:case te:case kt:case qt:return cg(s,h);case At:return new v;case Gt:case Fe:return new v(s);case he:return WT(s);case ae:return new v;case O:return XT(s)}}function ow(s,o){var h=o.length;if(!h)return s;var v=h-1;return o[v]=(h>1?"& ":"")+o[v],o=o.join(h>2?", ":" "),s.replace(je,`{
/* [wrapped with `+o+`] */
`)}function lw(s){return xe(s)||fa(s)||!!(I_&&s&&s[I_])}function Jr(s,o){var h=typeof s;return o=o??lt,!!o&&(h=="number"||h!="symbol"&&nt.test(s))&&s>-1&&s%1==0&&s<o}function ii(s,o,h){if(!an(h))return!1;var v=typeof o;return(v=="number"?_i(h)&&Jr(o,h.length):v=="string"&&o in h)?gr(h[o],s):!1}function ld(s,o){if(xe(s))return!1;var h=typeof s;return h=="number"||h=="symbol"||h=="boolean"||s==null||Pi(s)?!0:_e.test(s)||!Nt.test(s)||o!=null&&s in Ke(o)}function uw(s){var o=typeof s;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?s!=="__proto__":s===null}function ud(s){var o=fc(s),h=A[o];if(typeof h!="function"||!(o in Ie.prototype))return!1;if(s===h)return!0;var v=sd(h);return!!v&&s===v[0]}function cw(s){return!!C_&&C_ in s}var fw=Hu?Qr:bd;function Il(s){var o=s&&s.constructor,h=typeof o=="function"&&o.prototype||ro;return s===h}function Cg(s){return s===s&&!an(s)}function Pg(s,o){return function(h){return h==null?!1:h[s]===o&&(o!==e||s in Ke(h))}}function hw(s){var o=gc(s,function(v){return h.size===f&&h.clear(),v}),h=o.cache;return o}function dw(s,o){var h=s[1],v=o[1],M=h|v,D=M<(x|g|b),F=v==b&&h==E||v==b&&h==k&&s[7].length<=o[8]||v==(b|k)&&o[7].length<=o[8]&&h==E;if(!(D||F))return s;v&x&&(s[2]=o[2],M|=h&x?0:R);var H=o[3];if(H){var q=s[3];s[3]=q?hg(q,H,o[4]):H,s[4]=q?Es(s[3],d):o[4]}return H=o[5],H&&(q=s[5],s[5]=q?dg(q,H,o[6]):H,s[6]=q?Es(s[5],d):o[6]),H=o[7],H&&(s[7]=H),v&b&&(s[8]=s[8]==null?o[8]:Xn(s[8],o[8])),s[9]==null&&(s[9]=o[9]),s[0]=o[0],s[1]=M,s}function pw(s){var o=[];if(s!=null)for(var h in Ke(s))o.push(h);return o}function mw(s){return Vu.call(s)}function Lg(s,o,h){return o=wn(o===e?s.length-1:o,0),function(){for(var v=arguments,M=-1,D=wn(v.length-o,0),F=at(D);++M<D;)F[M]=v[o+M];M=-1;for(var H=at(o+1);++M<o;)H[M]=v[M];return H[o]=h(F),Ai(s,this,H)}}function Dg(s,o){return o.length<2?s:la(s,Qi(o,0,-1))}function _w(s,o){for(var h=s.length,v=Xn(o.length,h),M=mi(s);v--;){var D=o[v];s[v]=Jr(D,h)?M[D]:e}return s}function cd(s,o){if(!(o==="constructor"&&typeof s[o]=="function")&&o!="__proto__")return s[o]}var Ig=Ng(ng),Ul=LE||function(s,o){return Bn.setTimeout(s,o)},fd=Ng(zT);function Ug(s,o,h){var v=o+"";return fd(s,ow(v,gw(rw(v),h)))}function Ng(s){var o=0,h=0;return function(){var v=NE(),M=ut-(v-h);if(h=v,M>0){if(++o>=X)return arguments[0]}else o=0;return s.apply(e,arguments)}}function dc(s,o){var h=-1,v=s.length,M=v-1;for(o=o===e?v:o;++h<o;){var D=qh(h,M),F=s[D];s[D]=s[h],s[h]=F}return s.length=o,s}var Og=hw(function(s){var o=[];return s.charCodeAt(0)===46&&o.push(""),s.replace(le,function(h,v,M,D){o.push(M?D.replace(qe,"$1"):v||h)}),o});function Ur(s){if(typeof s=="string"||Pi(s))return s;var o=s+"";return o=="0"&&1/s==-$?"-0":o}function ca(s){if(s!=null){try{return Gu.call(s)}catch{}try{return s+""}catch{}}return""}function gw(s,o){return $i(wt,function(h){var v="_."+h[0];o&h[1]&&!Fu(s,v)&&s.push(v)}),s.sort()}function Fg(s){if(s instanceof Ie)return s.clone();var o=new Zi(s.__wrapped__,s.__chain__);return o.__actions__=mi(s.__actions__),o.__index__=s.__index__,o.__values__=s.__values__,o}function vw(s,o,h){(h?ii(s,o,h):o===e)?o=1:o=wn(Se(o),0);var v=s==null?0:s.length;if(!v||o<1)return[];for(var M=0,D=0,F=at(Ku(v/o));M<v;)F[D++]=Qi(s,M,M+=o);return F}function xw(s){for(var o=-1,h=s==null?0:s.length,v=0,M=[];++o<h;){var D=s[o];D&&(M[v++]=D)}return M}function yw(){var s=arguments.length;if(!s)return[];for(var o=at(s-1),h=arguments[0],v=s;v--;)o[v-1]=arguments[v];return Ms(xe(h)?mi(h):[h],zn(o,1))}var Sw=we(function(s,o){return mn(s)?Rl(s,zn(o,1,mn,!0)):[]}),Mw=we(function(s,o){var h=ji(o);return mn(h)&&(h=e),mn(s)?Rl(s,zn(o,1,mn,!0),ue(h,2)):[]}),Ew=we(function(s,o){var h=ji(o);return mn(h)&&(h=e),mn(s)?Rl(s,zn(o,1,mn,!0),e,h):[]});function Tw(s,o,h){var v=s==null?0:s.length;return v?(o=h||o===e?1:Se(o),Qi(s,o<0?0:o,v)):[]}function ww(s,o,h){var v=s==null?0:s.length;return v?(o=h||o===e?1:Se(o),o=v-o,Qi(s,0,o<0?0:o)):[]}function bw(s,o){return s&&s.length?sc(s,ue(o,3),!0,!0):[]}function Aw(s,o){return s&&s.length?sc(s,ue(o,3),!0):[]}function Rw(s,o,h,v){var M=s==null?0:s.length;return M?(h&&typeof h!="number"&&ii(s,o,h)&&(h=0,v=M),yT(s,o,h,v)):[]}function Bg(s,o,h){var v=s==null?0:s.length;if(!v)return-1;var M=h==null?0:Se(h);return M<0&&(M=wn(v+M,0)),Bu(s,ue(o,3),M)}function zg(s,o,h){var v=s==null?0:s.length;if(!v)return-1;var M=v-1;return h!==e&&(M=Se(h),M=h<0?wn(v+M,0):Xn(M,v-1)),Bu(s,ue(o,3),M,!0)}function kg(s){var o=s==null?0:s.length;return o?zn(s,1):[]}function Cw(s){var o=s==null?0:s.length;return o?zn(s,$):[]}function Pw(s,o){var h=s==null?0:s.length;return h?(o=o===e?1:Se(o),zn(s,o)):[]}function Lw(s){for(var o=-1,h=s==null?0:s.length,v={};++o<h;){var M=s[o];v[M[0]]=M[1]}return v}function Hg(s){return s&&s.length?s[0]:e}function Dw(s,o,h){var v=s==null?0:s.length;if(!v)return-1;var M=h==null?0:Se(h);return M<0&&(M=wn(v+M,0)),to(s,o,M)}function Iw(s){var o=s==null?0:s.length;return o?Qi(s,0,-1):[]}var Uw=we(function(s){var o=rn(s,Qh);return o.length&&o[0]===s[0]?Gh(o):[]}),Nw=we(function(s){var o=ji(s),h=rn(s,Qh);return o===ji(h)?o=e:h.pop(),h.length&&h[0]===s[0]?Gh(h,ue(o,2)):[]}),Ow=we(function(s){var o=ji(s),h=rn(s,Qh);return o=typeof o=="function"?o:e,o&&h.pop(),h.length&&h[0]===s[0]?Gh(h,e,o):[]});function Fw(s,o){return s==null?"":IE.call(s,o)}function ji(s){var o=s==null?0:s.length;return o?s[o-1]:e}function Bw(s,o,h){var v=s==null?0:s.length;if(!v)return-1;var M=v;return h!==e&&(M=Se(h),M=M<0?wn(v+M,0):Xn(M,v-1)),o===o?gE(s,o,M):Bu(s,S_,M,!0)}function zw(s,o){return s&&s.length?Q_(s,Se(o)):e}var kw=we(Gg);function Gg(s,o){return s&&s.length&&o&&o.length?Yh(s,o):s}function Hw(s,o,h){return s&&s.length&&o&&o.length?Yh(s,o,ue(h,2)):s}function Gw(s,o,h){return s&&s.length&&o&&o.length?Yh(s,o,e,h):s}var Vw=Zr(function(s,o){var h=s==null?0:s.length,v=Bh(s,o);return eg(s,rn(o,function(M){return Jr(M,h)?+M:M}).sort(fg)),v});function Ww(s,o){var h=[];if(!(s&&s.length))return h;var v=-1,M=[],D=s.length;for(o=ue(o,3);++v<D;){var F=s[v];o(F,v,s)&&(h.push(F),M.push(v))}return eg(s,M),h}function hd(s){return s==null?s:FE.call(s)}function Xw(s,o,h){var v=s==null?0:s.length;return v?(h&&typeof h!="number"&&ii(s,o,h)?(o=0,h=v):(o=o==null?0:Se(o),h=h===e?v:Se(h)),Qi(s,o,h)):[]}function Yw(s,o){return rc(s,o)}function qw(s,o,h){return Kh(s,o,ue(h,2))}function $w(s,o){var h=s==null?0:s.length;if(h){var v=rc(s,o);if(v<h&&gr(s[v],o))return v}return-1}function Kw(s,o){return rc(s,o,!0)}function Zw(s,o,h){return Kh(s,o,ue(h,2),!0)}function Jw(s,o){var h=s==null?0:s.length;if(h){var v=rc(s,o,!0)-1;if(gr(s[v],o))return v}return-1}function Qw(s){return s&&s.length?ig(s):[]}function jw(s,o){return s&&s.length?ig(s,ue(o,2)):[]}function t1(s){var o=s==null?0:s.length;return o?Qi(s,1,o):[]}function e1(s,o,h){return s&&s.length?(o=h||o===e?1:Se(o),Qi(s,0,o<0?0:o)):[]}function n1(s,o,h){var v=s==null?0:s.length;return v?(o=h||o===e?1:Se(o),o=v-o,Qi(s,o<0?0:o,v)):[]}function i1(s,o){return s&&s.length?sc(s,ue(o,3),!1,!0):[]}function r1(s,o){return s&&s.length?sc(s,ue(o,3)):[]}var s1=we(function(s){return bs(zn(s,1,mn,!0))}),a1=we(function(s){var o=ji(s);return mn(o)&&(o=e),bs(zn(s,1,mn,!0),ue(o,2))}),o1=we(function(s){var o=ji(s);return o=typeof o=="function"?o:e,bs(zn(s,1,mn,!0),e,o)});function l1(s){return s&&s.length?bs(s):[]}function u1(s,o){return s&&s.length?bs(s,ue(o,2)):[]}function c1(s,o){return o=typeof o=="function"?o:e,s&&s.length?bs(s,e,o):[]}function dd(s){if(!(s&&s.length))return[];var o=0;return s=Ss(s,function(h){if(mn(h))return o=wn(h.length,o),!0}),Ph(o,function(h){return rn(s,Ah(h))})}function Vg(s,o){if(!(s&&s.length))return[];var h=dd(s);return o==null?h:rn(h,function(v){return Ai(o,e,v)})}var f1=we(function(s,o){return mn(s)?Rl(s,o):[]}),h1=we(function(s){return Jh(Ss(s,mn))}),d1=we(function(s){var o=ji(s);return mn(o)&&(o=e),Jh(Ss(s,mn),ue(o,2))}),p1=we(function(s){var o=ji(s);return o=typeof o=="function"?o:e,Jh(Ss(s,mn),e,o)}),m1=we(dd);function _1(s,o){return og(s||[],o||[],Al)}function g1(s,o){return og(s||[],o||[],Ll)}var v1=we(function(s){var o=s.length,h=o>1?s[o-1]:e;return h=typeof h=="function"?(s.pop(),h):e,Vg(s,h)});function Wg(s){var o=A(s);return o.__chain__=!0,o}function x1(s,o){return o(s),s}function pc(s,o){return o(s)}var y1=Zr(function(s){var o=s.length,h=o?s[0]:0,v=this.__wrapped__,M=function(D){return Bh(D,s)};return o>1||this.__actions__.length||!(v instanceof Ie)||!Jr(h)?this.thru(M):(v=v.slice(h,+h+(o?1:0)),v.__actions__.push({func:pc,args:[M],thisArg:e}),new Zi(v,this.__chain__).thru(function(D){return o&&!D.length&&D.push(e),D}))});function S1(){return Wg(this)}function M1(){return new Zi(this.value(),this.__chain__)}function E1(){this.__values__===e&&(this.__values__=r0(this.value()));var s=this.__index__>=this.__values__.length,o=s?e:this.__values__[this.__index__++];return{done:s,value:o}}function T1(){return this}function w1(s){for(var o,h=this;h instanceof ju;){var v=Fg(h);v.__index__=0,v.__values__=e,o?M.__wrapped__=v:o=v;var M=v;h=h.__wrapped__}return M.__wrapped__=s,o}function b1(){var s=this.__wrapped__;if(s instanceof Ie){var o=s;return this.__actions__.length&&(o=new Ie(this)),o=o.reverse(),o.__actions__.push({func:pc,args:[hd],thisArg:e}),new Zi(o,this.__chain__)}return this.thru(hd)}function A1(){return ag(this.__wrapped__,this.__actions__)}var R1=ac(function(s,o,h){We.call(s,h)?++s[h]:$r(s,h,1)});function C1(s,o,h){var v=xe(s)?x_:xT;return h&&ii(s,o,h)&&(o=e),v(s,ue(o,3))}function P1(s,o){var h=xe(s)?Ss:V_;return h(s,ue(o,3))}var L1=gg(Bg),D1=gg(zg);function I1(s,o){return zn(mc(s,o),1)}function U1(s,o){return zn(mc(s,o),$)}function N1(s,o,h){return h=h===e?1:Se(h),zn(mc(s,o),h)}function Xg(s,o){var h=xe(s)?$i:ws;return h(s,ue(o,3))}function Yg(s,o){var h=xe(s)?tE:G_;return h(s,ue(o,3))}var O1=ac(function(s,o,h){We.call(s,h)?s[h].push(o):$r(s,h,[o])});function F1(s,o,h,v){s=_i(s)?s:ho(s),h=h&&!v?Se(h):0;var M=s.length;return h<0&&(h=wn(M+h,0)),yc(s)?h<=M&&s.indexOf(o,h)>-1:!!M&&to(s,o,h)>-1}var B1=we(function(s,o,h){var v=-1,M=typeof o=="function",D=_i(s)?at(s.length):[];return ws(s,function(F){D[++v]=M?Ai(o,F,h):Cl(F,o,h)}),D}),z1=ac(function(s,o,h){$r(s,h,o)});function mc(s,o){var h=xe(s)?rn:K_;return h(s,ue(o,3))}function k1(s,o,h,v){return s==null?[]:(xe(o)||(o=o==null?[]:[o]),h=v?e:h,xe(h)||(h=h==null?[]:[h]),j_(s,o,h))}var H1=ac(function(s,o,h){s[h?0:1].push(o)},function(){return[[],[]]});function G1(s,o,h){var v=xe(s)?wh:E_,M=arguments.length<3;return v(s,ue(o,4),h,M,ws)}function V1(s,o,h){var v=xe(s)?eE:E_,M=arguments.length<3;return v(s,ue(o,4),h,M,G_)}function W1(s,o){var h=xe(s)?Ss:V_;return h(s,vc(ue(o,3)))}function X1(s){var o=xe(s)?B_:FT;return o(s)}function Y1(s,o,h){(h?ii(s,o,h):o===e)?o=1:o=Se(o);var v=xe(s)?pT:BT;return v(s,o)}function q1(s){var o=xe(s)?mT:kT;return o(s)}function $1(s){if(s==null)return 0;if(_i(s))return yc(s)?no(s):s.length;var o=Yn(s);return o==At||o==ae?s.size:Wh(s).length}function K1(s,o,h){var v=xe(s)?bh:HT;return h&&ii(s,o,h)&&(o=e),v(s,ue(o,3))}var Z1=we(function(s,o){if(s==null)return[];var h=o.length;return h>1&&ii(s,o[0],o[1])?o=[]:h>2&&ii(o[0],o[1],o[2])&&(o=[o[0]]),j_(s,zn(o,1),[])}),_c=PE||function(){return Bn.Date.now()};function J1(s,o){if(typeof o!="function")throw new Ki(u);return s=Se(s),function(){if(--s<1)return o.apply(this,arguments)}}function qg(s,o,h){return o=h?e:o,o=s&&o==null?s.length:o,Kr(s,b,e,e,e,e,o)}function $g(s,o){var h;if(typeof o!="function")throw new Ki(u);return s=Se(s),function(){return--s>0&&(h=o.apply(this,arguments)),s<=1&&(o=e),h}}var pd=we(function(s,o,h){var v=x;if(h.length){var M=Es(h,co(pd));v|=C}return Kr(s,v,o,h,M)}),Kg=we(function(s,o,h){var v=x|g;if(h.length){var M=Es(h,co(Kg));v|=C}return Kr(o,v,s,h,M)});function Zg(s,o,h){o=h?e:o;var v=Kr(s,E,e,e,e,e,e,o);return v.placeholder=Zg.placeholder,v}function Jg(s,o,h){o=h?e:o;var v=Kr(s,w,e,e,e,e,e,o);return v.placeholder=Jg.placeholder,v}function Qg(s,o,h){var v,M,D,F,H,q,dt=0,pt=!1,xt=!1,Ut=!0;if(typeof s!="function")throw new Ki(u);o=tr(o)||0,an(h)&&(pt=!!h.leading,xt="maxWait"in h,D=xt?wn(tr(h.maxWait)||0,o):D,Ut="trailing"in h?!!h.trailing:Ut);function jt(_n){var vr=v,ts=M;return v=M=e,dt=_n,F=s.apply(ts,vr),F}function ce(_n){return dt=_n,H=Ul(Ce,o),pt?jt(_n):F}function Ee(_n){var vr=_n-q,ts=_n-dt,g0=o-vr;return xt?Xn(g0,D-ts):g0}function fe(_n){var vr=_n-q,ts=_n-dt;return q===e||vr>=o||vr<0||xt&&ts>=D}function Ce(){var _n=_c();if(fe(_n))return Ue(_n);H=Ul(Ce,Ee(_n))}function Ue(_n){return H=e,Ut&&v?jt(_n):(v=M=e,F)}function Li(){H!==e&&lg(H),dt=0,v=q=M=H=e}function ri(){return H===e?F:Ue(_c())}function Di(){var _n=_c(),vr=fe(_n);if(v=arguments,M=this,q=_n,vr){if(H===e)return ce(q);if(xt)return lg(H),H=Ul(Ce,o),jt(q)}return H===e&&(H=Ul(Ce,o)),F}return Di.cancel=Li,Di.flush=ri,Di}var Q1=we(function(s,o){return H_(s,1,o)}),j1=we(function(s,o,h){return H_(s,tr(o)||0,h)});function tb(s){return Kr(s,T)}function gc(s,o){if(typeof s!="function"||o!=null&&typeof o!="function")throw new Ki(u);var h=function(){var v=arguments,M=o?o.apply(this,v):v[0],D=h.cache;if(D.has(M))return D.get(M);var F=s.apply(this,v);return h.cache=D.set(M,F)||D,F};return h.cache=new(gc.Cache||qr),h}gc.Cache=qr;function vc(s){if(typeof s!="function")throw new Ki(u);return function(){var o=arguments;switch(o.length){case 0:return!s.call(this);case 1:return!s.call(this,o[0]);case 2:return!s.call(this,o[0],o[1]);case 3:return!s.call(this,o[0],o[1],o[2])}return!s.apply(this,o)}}function eb(s){return $g(2,s)}var nb=GT(function(s,o){o=o.length==1&&xe(o[0])?rn(o[0],Ri(ue())):rn(zn(o,1),Ri(ue()));var h=o.length;return we(function(v){for(var M=-1,D=Xn(v.length,h);++M<D;)v[M]=o[M].call(this,v[M]);return Ai(s,this,v)})}),md=we(function(s,o){var h=Es(o,co(md));return Kr(s,C,e,o,h)}),jg=we(function(s,o){var h=Es(o,co(jg));return Kr(s,U,e,o,h)}),ib=Zr(function(s,o){return Kr(s,k,e,e,e,o)});function rb(s,o){if(typeof s!="function")throw new Ki(u);return o=o===e?o:Se(o),we(s,o)}function sb(s,o){if(typeof s!="function")throw new Ki(u);return o=o==null?0:wn(Se(o),0),we(function(h){var v=h[o],M=Rs(h,0,o);return v&&Ms(M,v),Ai(s,this,M)})}function ab(s,o,h){var v=!0,M=!0;if(typeof s!="function")throw new Ki(u);return an(h)&&(v="leading"in h?!!h.leading:v,M="trailing"in h?!!h.trailing:M),Qg(s,o,{leading:v,maxWait:o,trailing:M})}function ob(s){return qg(s,1)}function lb(s,o){return md(jh(o),s)}function ub(){if(!arguments.length)return[];var s=arguments[0];return xe(s)?s:[s]}function cb(s){return Ji(s,m)}function fb(s,o){return o=typeof o=="function"?o:e,Ji(s,m,o)}function hb(s){return Ji(s,_|m)}function db(s,o){return o=typeof o=="function"?o:e,Ji(s,_|m,o)}function pb(s,o){return o==null||k_(s,o,Ln(o))}function gr(s,o){return s===o||s!==s&&o!==o}var mb=cc(Hh),_b=cc(function(s,o){return s>=o}),fa=Y_(function(){return arguments}())?Y_:function(s){return hn(s)&&We.call(s,"callee")&&!D_.call(s,"callee")},xe=at.isArray,gb=d_?Ri(d_):wT;function _i(s){return s!=null&&xc(s.length)&&!Qr(s)}function mn(s){return hn(s)&&_i(s)}function vb(s){return s===!0||s===!1||hn(s)&&ni(s)==zt}var Cs=DE||bd,xb=p_?Ri(p_):bT;function yb(s){return hn(s)&&s.nodeType===1&&!Nl(s)}function Sb(s){if(s==null)return!0;if(_i(s)&&(xe(s)||typeof s=="string"||typeof s.splice=="function"||Cs(s)||fo(s)||fa(s)))return!s.length;var o=Yn(s);if(o==At||o==ae)return!s.size;if(Il(s))return!Wh(s).length;for(var h in s)if(We.call(s,h))return!1;return!0}function Mb(s,o){return Pl(s,o)}function Eb(s,o,h){h=typeof h=="function"?h:e;var v=h?h(s,o):e;return v===e?Pl(s,o,e,h):!!v}function _d(s){if(!hn(s))return!1;var o=ni(s);return o==Qt||o==De||typeof s.message=="string"&&typeof s.name=="string"&&!Nl(s)}function Tb(s){return typeof s=="number"&&U_(s)}function Qr(s){if(!an(s))return!1;var o=ni(s);return o==j||o==oe||o==Jt||o==re}function t0(s){return typeof s=="number"&&s==Se(s)}function xc(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=lt}function an(s){var o=typeof s;return s!=null&&(o=="object"||o=="function")}function hn(s){return s!=null&&typeof s=="object"}var e0=m_?Ri(m_):RT;function wb(s,o){return s===o||Vh(s,o,ad(o))}function bb(s,o,h){return h=typeof h=="function"?h:e,Vh(s,o,ad(o),h)}function Ab(s){return n0(s)&&s!=+s}function Rb(s){if(fw(s))throw new ve(a);return q_(s)}function Cb(s){return s===null}function Pb(s){return s==null}function n0(s){return typeof s=="number"||hn(s)&&ni(s)==Gt}function Nl(s){if(!hn(s)||ni(s)!=Q)return!1;var o=Yu(s);if(o===null)return!0;var h=We.call(o,"constructor")&&o.constructor;return typeof h=="function"&&h instanceof h&&Gu.call(h)==bE}var gd=__?Ri(__):CT;function Lb(s){return t0(s)&&s>=-lt&&s<=lt}var i0=g_?Ri(g_):PT;function yc(s){return typeof s=="string"||!xe(s)&&hn(s)&&ni(s)==Fe}function Pi(s){return typeof s=="symbol"||hn(s)&&ni(s)==O}var fo=v_?Ri(v_):LT;function Db(s){return s===e}function Ib(s){return hn(s)&&Yn(s)==J}function Ub(s){return hn(s)&&ni(s)==_t}var Nb=cc(Xh),Ob=cc(function(s,o){return s<=o});function r0(s){if(!s)return[];if(_i(s))return yc(s)?mr(s):mi(s);if(Ml&&s[Ml])return pE(s[Ml]());var o=Yn(s),h=o==At?Dh:o==ae?zu:ho;return h(s)}function jr(s){if(!s)return s===0?s:0;if(s=tr(s),s===$||s===-$){var o=s<0?-1:1;return o*ct}return s===s?s:0}function Se(s){var o=jr(s),h=o%1;return o===o?h?o-h:o:0}function s0(s){return s?oa(Se(s),0,V):0}function tr(s){if(typeof s=="number")return s;if(Pi(s))return N;if(an(s)){var o=typeof s.valueOf=="function"?s.valueOf():s;s=an(o)?o+"":o}if(typeof s!="string")return s===0?s:+s;s=T_(s);var h=Y.test(s);return h||it.test(s)?JM(s.slice(2),h?2:8):I.test(s)?N:+s}function a0(s){return Ir(s,gi(s))}function Fb(s){return s?oa(Se(s),-lt,lt):s===0?s:0}function Ge(s){return s==null?"":Ci(s)}var Bb=lo(function(s,o){if(Il(o)||_i(o)){Ir(o,Ln(o),s);return}for(var h in o)We.call(o,h)&&Al(s,h,o[h])}),o0=lo(function(s,o){Ir(o,gi(o),s)}),Sc=lo(function(s,o,h,v){Ir(o,gi(o),s,v)}),zb=lo(function(s,o,h,v){Ir(o,Ln(o),s,v)}),kb=Zr(Bh);function Hb(s,o){var h=oo(s);return o==null?h:z_(h,o)}var Gb=we(function(s,o){s=Ke(s);var h=-1,v=o.length,M=v>2?o[2]:e;for(M&&ii(o[0],o[1],M)&&(v=1);++h<v;)for(var D=o[h],F=gi(D),H=-1,q=F.length;++H<q;){var dt=F[H],pt=s[dt];(pt===e||gr(pt,ro[dt])&&!We.call(s,dt))&&(s[dt]=D[dt])}return s}),Vb=we(function(s){return s.push(e,Tg),Ai(l0,e,s)});function Wb(s,o){return y_(s,ue(o,3),Dr)}function Xb(s,o){return y_(s,ue(o,3),kh)}function Yb(s,o){return s==null?s:zh(s,ue(o,3),gi)}function qb(s,o){return s==null?s:W_(s,ue(o,3),gi)}function $b(s,o){return s&&Dr(s,ue(o,3))}function Kb(s,o){return s&&kh(s,ue(o,3))}function Zb(s){return s==null?[]:nc(s,Ln(s))}function Jb(s){return s==null?[]:nc(s,gi(s))}function vd(s,o,h){var v=s==null?e:la(s,o);return v===e?h:v}function Qb(s,o){return s!=null&&Ag(s,o,ST)}function xd(s,o){return s!=null&&Ag(s,o,MT)}var jb=xg(function(s,o,h){o!=null&&typeof o.toString!="function"&&(o=Vu.call(o)),s[o]=h},Sd(vi)),tA=xg(function(s,o,h){o!=null&&typeof o.toString!="function"&&(o=Vu.call(o)),We.call(s,o)?s[o].push(h):s[o]=[h]},ue),eA=we(Cl);function Ln(s){return _i(s)?F_(s):Wh(s)}function gi(s){return _i(s)?F_(s,!0):DT(s)}function nA(s,o){var h={};return o=ue(o,3),Dr(s,function(v,M,D){$r(h,o(v,M,D),v)}),h}function iA(s,o){var h={};return o=ue(o,3),Dr(s,function(v,M,D){$r(h,M,o(v,M,D))}),h}var rA=lo(function(s,o,h){ic(s,o,h)}),l0=lo(function(s,o,h,v){ic(s,o,h,v)}),sA=Zr(function(s,o){var h={};if(s==null)return h;var v=!1;o=rn(o,function(D){return D=As(D,s),v||(v=D.length>1),D}),Ir(s,rd(s),h),v&&(h=Ji(h,_|p|m,jT));for(var M=o.length;M--;)Zh(h,o[M]);return h});function aA(s,o){return u0(s,vc(ue(o)))}var oA=Zr(function(s,o){return s==null?{}:UT(s,o)});function u0(s,o){if(s==null)return{};var h=rn(rd(s),function(v){return[v]});return o=ue(o),tg(s,h,function(v,M){return o(v,M[0])})}function lA(s,o,h){o=As(o,s);var v=-1,M=o.length;for(M||(M=1,s=e);++v<M;){var D=s==null?e:s[Ur(o[v])];D===e&&(v=M,D=h),s=Qr(D)?D.call(s):D}return s}function uA(s,o,h){return s==null?s:Ll(s,o,h)}function cA(s,o,h,v){return v=typeof v=="function"?v:e,s==null?s:Ll(s,o,h,v)}var c0=Mg(Ln),f0=Mg(gi);function fA(s,o,h){var v=xe(s),M=v||Cs(s)||fo(s);if(o=ue(o,4),h==null){var D=s&&s.constructor;M?h=v?new D:[]:an(s)?h=Qr(D)?oo(Yu(s)):{}:h={}}return(M?$i:Dr)(s,function(F,H,q){return o(h,F,H,q)}),h}function hA(s,o){return s==null?!0:Zh(s,o)}function dA(s,o,h){return s==null?s:sg(s,o,jh(h))}function pA(s,o,h,v){return v=typeof v=="function"?v:e,s==null?s:sg(s,o,jh(h),v)}function ho(s){return s==null?[]:Lh(s,Ln(s))}function mA(s){return s==null?[]:Lh(s,gi(s))}function _A(s,o,h){return h===e&&(h=o,o=e),h!==e&&(h=tr(h),h=h===h?h:0),o!==e&&(o=tr(o),o=o===o?o:0),oa(tr(s),o,h)}function gA(s,o,h){return o=jr(o),h===e?(h=o,o=0):h=jr(h),s=tr(s),ET(s,o,h)}function vA(s,o,h){if(h&&typeof h!="boolean"&&ii(s,o,h)&&(o=h=e),h===e&&(typeof o=="boolean"?(h=o,o=e):typeof s=="boolean"&&(h=s,s=e)),s===e&&o===e?(s=0,o=1):(s=jr(s),o===e?(o=s,s=0):o=jr(o)),s>o){var v=s;s=o,o=v}if(h||s%1||o%1){var M=N_();return Xn(s+M*(o-s+ZM("1e-"+((M+"").length-1))),o)}return qh(s,o)}var xA=uo(function(s,o,h){return o=o.toLowerCase(),s+(h?h0(o):o)});function h0(s){return yd(Ge(s).toLowerCase())}function d0(s){return s=Ge(s),s&&s.replace(Ct,uE).replace(kM,"")}function yA(s,o,h){s=Ge(s),o=Ci(o);var v=s.length;h=h===e?v:oa(Se(h),0,v);var M=h;return h-=o.length,h>=0&&s.slice(h,M)==o}function SA(s){return s=Ge(s),s&&ot.test(s)?s.replace(Et,cE):s}function MA(s){return s=Ge(s),s&&de.test(s)?s.replace(Pt,"\\$&"):s}var EA=uo(function(s,o,h){return s+(h?"-":"")+o.toLowerCase()}),TA=uo(function(s,o,h){return s+(h?" ":"")+o.toLowerCase()}),wA=_g("toLowerCase");function bA(s,o,h){s=Ge(s),o=Se(o);var v=o?no(s):0;if(!o||v>=o)return s;var M=(o-v)/2;return uc(Zu(M),h)+s+uc(Ku(M),h)}function AA(s,o,h){s=Ge(s),o=Se(o);var v=o?no(s):0;return o&&v<o?s+uc(o-v,h):s}function RA(s,o,h){s=Ge(s),o=Se(o);var v=o?no(s):0;return o&&v<o?uc(o-v,h)+s:s}function CA(s,o,h){return h||o==null?o=0:o&&(o=+o),OE(Ge(s).replace(se,""),o||0)}function PA(s,o,h){return(h?ii(s,o,h):o===e)?o=1:o=Se(o),$h(Ge(s),o)}function LA(){var s=arguments,o=Ge(s[0]);return s.length<3?o:o.replace(s[1],s[2])}var DA=uo(function(s,o,h){return s+(h?"_":"")+o.toLowerCase()});function IA(s,o,h){return h&&typeof h!="number"&&ii(s,o,h)&&(o=h=e),h=h===e?V:h>>>0,h?(s=Ge(s),s&&(typeof o=="string"||o!=null&&!gd(o))&&(o=Ci(o),!o&&eo(s))?Rs(mr(s),0,h):s.split(o,h)):[]}var UA=uo(function(s,o,h){return s+(h?" ":"")+yd(o)});function NA(s,o,h){return s=Ge(s),h=h==null?0:oa(Se(h),0,s.length),o=Ci(o),s.slice(h,h+o.length)==o}function OA(s,o,h){var v=A.templateSettings;h&&ii(s,o,h)&&(o=e),s=Ge(s),o=Sc({},o,v,Eg);var M=Sc({},o.imports,v.imports,Eg),D=Ln(M),F=Lh(M,D),H,q,dt=0,pt=o.interpolate||Ht,xt="__p += '",Ut=Ih((o.escape||Ht).source+"|"+pt.source+"|"+(pt===Dt?ze:Ht).source+"|"+(o.evaluate||Ht).source+"|$","g"),jt="//# sourceURL="+(We.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++XM+"]")+`
`;s.replace(Ut,function(fe,Ce,Ue,Li,ri,Di){return Ue||(Ue=Li),xt+=s.slice(dt,Di).replace(ne,fE),Ce&&(H=!0,xt+=`' +
__e(`+Ce+`) +
'`),ri&&(q=!0,xt+=`';
`+ri+`;
__p += '`),Ue&&(xt+=`' +
((__t = (`+Ue+`)) == null ? '' : __t) +
'`),dt=Di+fe.length,fe}),xt+=`';
`;var ce=We.call(o,"variable")&&o.variable;if(!ce)xt=`with (obj) {
`+xt+`
}
`;else if(cn.test(ce))throw new ve(l);xt=(q?xt.replace(Ft,""):xt).replace(yt,"$1").replace(me,"$1;"),xt="function("+(ce||"obj")+`) {
`+(ce?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(H?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+xt+`return __p
}`;var Ee=m0(function(){return ke(D,jt+"return "+xt).apply(e,F)});if(Ee.source=xt,_d(Ee))throw Ee;return Ee}function FA(s){return Ge(s).toLowerCase()}function BA(s){return Ge(s).toUpperCase()}function zA(s,o,h){if(s=Ge(s),s&&(h||o===e))return T_(s);if(!s||!(o=Ci(o)))return s;var v=mr(s),M=mr(o),D=w_(v,M),F=b_(v,M)+1;return Rs(v,D,F).join("")}function kA(s,o,h){if(s=Ge(s),s&&(h||o===e))return s.slice(0,R_(s)+1);if(!s||!(o=Ci(o)))return s;var v=mr(s),M=b_(v,mr(o))+1;return Rs(v,0,M).join("")}function HA(s,o,h){if(s=Ge(s),s&&(h||o===e))return s.replace(se,"");if(!s||!(o=Ci(o)))return s;var v=mr(s),M=w_(v,mr(o));return Rs(v,M).join("")}function GA(s,o){var h=L,v=Z;if(an(o)){var M="separator"in o?o.separator:M;h="length"in o?Se(o.length):h,v="omission"in o?Ci(o.omission):v}s=Ge(s);var D=s.length;if(eo(s)){var F=mr(s);D=F.length}if(h>=D)return s;var H=h-no(v);if(H<1)return v;var q=F?Rs(F,0,H).join(""):s.slice(0,H);if(M===e)return q+v;if(F&&(H+=q.length-H),gd(M)){if(s.slice(H).search(M)){var dt,pt=q;for(M.global||(M=Ih(M.source,Ge(Wn.exec(M))+"g")),M.lastIndex=0;dt=M.exec(pt);)var xt=dt.index;q=q.slice(0,xt===e?H:xt)}}else if(s.indexOf(Ci(M),H)!=H){var Ut=q.lastIndexOf(M);Ut>-1&&(q=q.slice(0,Ut))}return q+v}function VA(s){return s=Ge(s),s&&gt.test(s)?s.replace(G,vE):s}var WA=uo(function(s,o,h){return s+(h?" ":"")+o.toUpperCase()}),yd=_g("toUpperCase");function p0(s,o,h){return s=Ge(s),o=h?e:o,o===e?dE(s)?SE(s):rE(s):s.match(o)||[]}var m0=we(function(s,o){try{return Ai(s,e,o)}catch(h){return _d(h)?h:new ve(h)}}),XA=Zr(function(s,o){return $i(o,function(h){h=Ur(h),$r(s,h,pd(s[h],s))}),s});function YA(s){var o=s==null?0:s.length,h=ue();return s=o?rn(s,function(v){if(typeof v[1]!="function")throw new Ki(u);return[h(v[0]),v[1]]}):[],we(function(v){for(var M=-1;++M<o;){var D=s[M];if(Ai(D[0],this,v))return Ai(D[1],this,v)}})}function qA(s){return vT(Ji(s,_))}function Sd(s){return function(){return s}}function $A(s,o){return s==null||s!==s?o:s}var KA=vg(),ZA=vg(!0);function vi(s){return s}function Md(s){return $_(typeof s=="function"?s:Ji(s,_))}function JA(s){return Z_(Ji(s,_))}function QA(s,o){return J_(s,Ji(o,_))}var jA=we(function(s,o){return function(h){return Cl(h,s,o)}}),tR=we(function(s,o){return function(h){return Cl(s,h,o)}});function Ed(s,o,h){var v=Ln(o),M=nc(o,v);h==null&&!(an(o)&&(M.length||!v.length))&&(h=o,o=s,s=this,M=nc(o,Ln(o)));var D=!(an(h)&&"chain"in h)||!!h.chain,F=Qr(s);return $i(M,function(H){var q=o[H];s[H]=q,F&&(s.prototype[H]=function(){var dt=this.__chain__;if(D||dt){var pt=s(this.__wrapped__),xt=pt.__actions__=mi(this.__actions__);return xt.push({func:q,args:arguments,thisArg:s}),pt.__chain__=dt,pt}return q.apply(s,Ms([this.value()],arguments))})}),s}function eR(){return Bn._===this&&(Bn._=AE),this}function Td(){}function nR(s){return s=Se(s),we(function(o){return Q_(o,s)})}var iR=ed(rn),rR=ed(x_),sR=ed(bh);function _0(s){return ld(s)?Ah(Ur(s)):NT(s)}function aR(s){return function(o){return s==null?e:la(s,o)}}var oR=yg(),lR=yg(!0);function wd(){return[]}function bd(){return!1}function uR(){return{}}function cR(){return""}function fR(){return!0}function hR(s,o){if(s=Se(s),s<1||s>lt)return[];var h=V,v=Xn(s,V);o=ue(o),s-=V;for(var M=Ph(v,o);++h<s;)o(h);return M}function dR(s){return xe(s)?rn(s,Ur):Pi(s)?[s]:mi(Og(Ge(s)))}function pR(s){var o=++wE;return Ge(s)+o}var mR=lc(function(s,o){return s+o},0),_R=nd("ceil"),gR=lc(function(s,o){return s/o},1),vR=nd("floor");function xR(s){return s&&s.length?ec(s,vi,Hh):e}function yR(s,o){return s&&s.length?ec(s,ue(o,2),Hh):e}function SR(s){return M_(s,vi)}function MR(s,o){return M_(s,ue(o,2))}function ER(s){return s&&s.length?ec(s,vi,Xh):e}function TR(s,o){return s&&s.length?ec(s,ue(o,2),Xh):e}var wR=lc(function(s,o){return s*o},1),bR=nd("round"),AR=lc(function(s,o){return s-o},0);function RR(s){return s&&s.length?Ch(s,vi):0}function CR(s,o){return s&&s.length?Ch(s,ue(o,2)):0}return A.after=J1,A.ary=qg,A.assign=Bb,A.assignIn=o0,A.assignInWith=Sc,A.assignWith=zb,A.at=kb,A.before=$g,A.bind=pd,A.bindAll=XA,A.bindKey=Kg,A.castArray=ub,A.chain=Wg,A.chunk=vw,A.compact=xw,A.concat=yw,A.cond=YA,A.conforms=qA,A.constant=Sd,A.countBy=R1,A.create=Hb,A.curry=Zg,A.curryRight=Jg,A.debounce=Qg,A.defaults=Gb,A.defaultsDeep=Vb,A.defer=Q1,A.delay=j1,A.difference=Sw,A.differenceBy=Mw,A.differenceWith=Ew,A.drop=Tw,A.dropRight=ww,A.dropRightWhile=bw,A.dropWhile=Aw,A.fill=Rw,A.filter=P1,A.flatMap=I1,A.flatMapDeep=U1,A.flatMapDepth=N1,A.flatten=kg,A.flattenDeep=Cw,A.flattenDepth=Pw,A.flip=tb,A.flow=KA,A.flowRight=ZA,A.fromPairs=Lw,A.functions=Zb,A.functionsIn=Jb,A.groupBy=O1,A.initial=Iw,A.intersection=Uw,A.intersectionBy=Nw,A.intersectionWith=Ow,A.invert=jb,A.invertBy=tA,A.invokeMap=B1,A.iteratee=Md,A.keyBy=z1,A.keys=Ln,A.keysIn=gi,A.map=mc,A.mapKeys=nA,A.mapValues=iA,A.matches=JA,A.matchesProperty=QA,A.memoize=gc,A.merge=rA,A.mergeWith=l0,A.method=jA,A.methodOf=tR,A.mixin=Ed,A.negate=vc,A.nthArg=nR,A.omit=sA,A.omitBy=aA,A.once=eb,A.orderBy=k1,A.over=iR,A.overArgs=nb,A.overEvery=rR,A.overSome=sR,A.partial=md,A.partialRight=jg,A.partition=H1,A.pick=oA,A.pickBy=u0,A.property=_0,A.propertyOf=aR,A.pull=kw,A.pullAll=Gg,A.pullAllBy=Hw,A.pullAllWith=Gw,A.pullAt=Vw,A.range=oR,A.rangeRight=lR,A.rearg=ib,A.reject=W1,A.remove=Ww,A.rest=rb,A.reverse=hd,A.sampleSize=Y1,A.set=uA,A.setWith=cA,A.shuffle=q1,A.slice=Xw,A.sortBy=Z1,A.sortedUniq=Qw,A.sortedUniqBy=jw,A.split=IA,A.spread=sb,A.tail=t1,A.take=e1,A.takeRight=n1,A.takeRightWhile=i1,A.takeWhile=r1,A.tap=x1,A.throttle=ab,A.thru=pc,A.toArray=r0,A.toPairs=c0,A.toPairsIn=f0,A.toPath=dR,A.toPlainObject=a0,A.transform=fA,A.unary=ob,A.union=s1,A.unionBy=a1,A.unionWith=o1,A.uniq=l1,A.uniqBy=u1,A.uniqWith=c1,A.unset=hA,A.unzip=dd,A.unzipWith=Vg,A.update=dA,A.updateWith=pA,A.values=ho,A.valuesIn=mA,A.without=f1,A.words=p0,A.wrap=lb,A.xor=h1,A.xorBy=d1,A.xorWith=p1,A.zip=m1,A.zipObject=_1,A.zipObjectDeep=g1,A.zipWith=v1,A.entries=c0,A.entriesIn=f0,A.extend=o0,A.extendWith=Sc,Ed(A,A),A.add=mR,A.attempt=m0,A.camelCase=xA,A.capitalize=h0,A.ceil=_R,A.clamp=_A,A.clone=cb,A.cloneDeep=hb,A.cloneDeepWith=db,A.cloneWith=fb,A.conformsTo=pb,A.deburr=d0,A.defaultTo=$A,A.divide=gR,A.endsWith=yA,A.eq=gr,A.escape=SA,A.escapeRegExp=MA,A.every=C1,A.find=L1,A.findIndex=Bg,A.findKey=Wb,A.findLast=D1,A.findLastIndex=zg,A.findLastKey=Xb,A.floor=vR,A.forEach=Xg,A.forEachRight=Yg,A.forIn=Yb,A.forInRight=qb,A.forOwn=$b,A.forOwnRight=Kb,A.get=vd,A.gt=mb,A.gte=_b,A.has=Qb,A.hasIn=xd,A.head=Hg,A.identity=vi,A.includes=F1,A.indexOf=Dw,A.inRange=gA,A.invoke=eA,A.isArguments=fa,A.isArray=xe,A.isArrayBuffer=gb,A.isArrayLike=_i,A.isArrayLikeObject=mn,A.isBoolean=vb,A.isBuffer=Cs,A.isDate=xb,A.isElement=yb,A.isEmpty=Sb,A.isEqual=Mb,A.isEqualWith=Eb,A.isError=_d,A.isFinite=Tb,A.isFunction=Qr,A.isInteger=t0,A.isLength=xc,A.isMap=e0,A.isMatch=wb,A.isMatchWith=bb,A.isNaN=Ab,A.isNative=Rb,A.isNil=Pb,A.isNull=Cb,A.isNumber=n0,A.isObject=an,A.isObjectLike=hn,A.isPlainObject=Nl,A.isRegExp=gd,A.isSafeInteger=Lb,A.isSet=i0,A.isString=yc,A.isSymbol=Pi,A.isTypedArray=fo,A.isUndefined=Db,A.isWeakMap=Ib,A.isWeakSet=Ub,A.join=Fw,A.kebabCase=EA,A.last=ji,A.lastIndexOf=Bw,A.lowerCase=TA,A.lowerFirst=wA,A.lt=Nb,A.lte=Ob,A.max=xR,A.maxBy=yR,A.mean=SR,A.meanBy=MR,A.min=ER,A.minBy=TR,A.stubArray=wd,A.stubFalse=bd,A.stubObject=uR,A.stubString=cR,A.stubTrue=fR,A.multiply=wR,A.nth=zw,A.noConflict=eR,A.noop=Td,A.now=_c,A.pad=bA,A.padEnd=AA,A.padStart=RA,A.parseInt=CA,A.random=vA,A.reduce=G1,A.reduceRight=V1,A.repeat=PA,A.replace=LA,A.result=lA,A.round=bR,A.runInContext=W,A.sample=X1,A.size=$1,A.snakeCase=DA,A.some=K1,A.sortedIndex=Yw,A.sortedIndexBy=qw,A.sortedIndexOf=$w,A.sortedLastIndex=Kw,A.sortedLastIndexBy=Zw,A.sortedLastIndexOf=Jw,A.startCase=UA,A.startsWith=NA,A.subtract=AR,A.sum=RR,A.sumBy=CR,A.template=OA,A.times=hR,A.toFinite=jr,A.toInteger=Se,A.toLength=s0,A.toLower=FA,A.toNumber=tr,A.toSafeInteger=Fb,A.toString=Ge,A.toUpper=BA,A.trim=zA,A.trimEnd=kA,A.trimStart=HA,A.truncate=GA,A.unescape=VA,A.uniqueId=pR,A.upperCase=WA,A.upperFirst=yd,A.each=Xg,A.eachRight=Yg,A.first=Hg,Ed(A,function(){var s={};return Dr(A,function(o,h){We.call(A.prototype,h)||(s[h]=o)}),s}(),{chain:!1}),A.VERSION=n,$i(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){A[s].placeholder=A}),$i(["drop","take"],function(s,o){Ie.prototype[s]=function(h){h=h===e?1:wn(Se(h),0);var v=this.__filtered__&&!o?new Ie(this):this.clone();return v.__filtered__?v.__takeCount__=Xn(h,v.__takeCount__):v.__views__.push({size:Xn(h,V),type:s+(v.__dir__<0?"Right":"")}),v},Ie.prototype[s+"Right"]=function(h){return this.reverse()[s](h).reverse()}}),$i(["filter","map","takeWhile"],function(s,o){var h=o+1,v=h==z||h==st;Ie.prototype[s]=function(M){var D=this.clone();return D.__iteratees__.push({iteratee:ue(M,3),type:h}),D.__filtered__=D.__filtered__||v,D}}),$i(["head","last"],function(s,o){var h="take"+(o?"Right":"");Ie.prototype[s]=function(){return this[h](1).value()[0]}}),$i(["initial","tail"],function(s,o){var h="drop"+(o?"":"Right");Ie.prototype[s]=function(){return this.__filtered__?new Ie(this):this[h](1)}}),Ie.prototype.compact=function(){return this.filter(vi)},Ie.prototype.find=function(s){return this.filter(s).head()},Ie.prototype.findLast=function(s){return this.reverse().find(s)},Ie.prototype.invokeMap=we(function(s,o){return typeof s=="function"?new Ie(this):this.map(function(h){return Cl(h,s,o)})}),Ie.prototype.reject=function(s){return this.filter(vc(ue(s)))},Ie.prototype.slice=function(s,o){s=Se(s);var h=this;return h.__filtered__&&(s>0||o<0)?new Ie(h):(s<0?h=h.takeRight(-s):s&&(h=h.drop(s)),o!==e&&(o=Se(o),h=o<0?h.dropRight(-o):h.take(o-s)),h)},Ie.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},Ie.prototype.toArray=function(){return this.take(V)},Dr(Ie.prototype,function(s,o){var h=/^(?:filter|find|map|reject)|While$/.test(o),v=/^(?:head|last)$/.test(o),M=A[v?"take"+(o=="last"?"Right":""):o],D=v||/^find/.test(o);M&&(A.prototype[o]=function(){var F=this.__wrapped__,H=v?[1]:arguments,q=F instanceof Ie,dt=H[0],pt=q||xe(F),xt=function(Ce){var Ue=M.apply(A,Ms([Ce],H));return v&&Ut?Ue[0]:Ue};pt&&h&&typeof dt=="function"&&dt.length!=1&&(q=pt=!1);var Ut=this.__chain__,jt=!!this.__actions__.length,ce=D&&!Ut,Ee=q&&!jt;if(!D&&pt){F=Ee?F:new Ie(this);var fe=s.apply(F,H);return fe.__actions__.push({func:pc,args:[xt],thisArg:e}),new Zi(fe,Ut)}return ce&&Ee?s.apply(this,H):(fe=this.thru(xt),ce?v?fe.value()[0]:fe.value():fe)})}),$i(["pop","push","shift","sort","splice","unshift"],function(s){var o=ku[s],h=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",v=/^(?:pop|shift)$/.test(s);A.prototype[s]=function(){var M=arguments;if(v&&!this.__chain__){var D=this.value();return o.apply(xe(D)?D:[],M)}return this[h](function(F){return o.apply(xe(F)?F:[],M)})}}),Dr(Ie.prototype,function(s,o){var h=A[o];if(h){var v=h.name+"";We.call(ao,v)||(ao[v]=[]),ao[v].push({name:o,func:h})}}),ao[oc(e,g).name]=[{name:"wrapper",func:e}],Ie.prototype.clone=VE,Ie.prototype.reverse=WE,Ie.prototype.value=XE,A.prototype.at=y1,A.prototype.chain=S1,A.prototype.commit=M1,A.prototype.next=E1,A.prototype.plant=w1,A.prototype.reverse=b1,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=A1,A.prototype.first=A.prototype.head,Ml&&(A.prototype[Ml]=T1),A},io=ME();ia?((ia.exports=io)._=io,Mh._=io):Bn._=io}).call(Fl)})(Bf,Bf.exports);Bf.exports;function ls(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Cy(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sl={duration:.5,overwrite:!1,delay:0},wm,Qn,dn,cr=1e8,Je=1/cr,Bp=Math.PI*2,M2=Bp/4,E2=0,Py=Math.sqrt,T2=Math.cos,w2=Math.sin,On=function(t){return typeof t=="string"},pn=function(t){return typeof t=="function"},vs=function(t){return typeof t=="number"},bm=function(t){return typeof t>"u"},Vr=function(t){return typeof t=="object"},Mi=function(t){return t!==!1},Am=function(){return typeof window<"u"},bc=function(t){return pn(t)||On(t)},Ly=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,zp=/(?:-?\.?\d|\.)+/gi,Dy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Go=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Iy=/[+-]=-?[.\d]+/,Uy=/[^,'"\[\]\s]+/gi,b2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ln,ir,kp,Rm,Xi={},zf={},Ny,Oy=function(t){return(zf=ka(t,Xi))&&bi},Cm=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},kf=function(t,e){return!e&&console.warn(t)},Fy=function(t,e){return t&&(Xi[t]=e)&&zf&&(zf[t]=e)||Xi},yu=function(){return 0},A2={suppressEvents:!0,isStart:!0,kill:!1},vf={suppressEvents:!0,kill:!1},R2={suppressEvents:!0},Pm={},Ys=[],Hp={},By,zi={},Od={},V0=30,xf=[],Lm="",Dm=function(t){var e=t[0],n,r;if(Vr(e)||pn(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=xf.length;r--&&!xf[r].targetTest(e););n=xf[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new lS(t[r],n)))||t.splice(r,1);return t},Ra=function(t){return t._gsap||Dm(fr(t))[0]._gsap},zy=function(t,e,n){return(n=t[e])&&pn(n)?t[e]():bm(n)&&t.getAttribute&&t.getAttribute(e)||n},Ei=function(t,e){return(t=t.split(",")).forEach(e)||t},vn=function(t){return Math.round(t*1e5)/1e5||0},Gn=function(t){return Math.round(t*1e7)/1e7||0},Ko=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},C2=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Hf=function(){var t=Ys.length,e=Ys.slice(0),n,r;for(Hp={},Ys.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ky=function(t,e,n,r){Ys.length&&!Qn&&Hf(),t.render(e,n,r||Qn&&e<0&&(t._initted||t._startAt)),Ys.length&&!Qn&&Hf()},Hy=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Uy).length<2?e:On(t)?t.trim():t},Gy=function(t){return t},pr=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},P2=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},ka=function(t,e){for(var n in e)t[n]=e[n];return t},W0=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Vr(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Gf=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},eu=function(t){var e=t.parent||ln,n=t.keyframes?P2(jn(t.keyframes)):pr;if(Mi(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},L2=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},Vy=function(t,e,n,r,a){n===void 0&&(n="_first"),r===void 0&&(r="_last");var u=t[r],l;if(a)for(l=e[a];u&&u[a]>l;)u=u._prev;return u?(e._next=u._next,u._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=u,e.parent=e._dp=t,e},fh=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e._prev,u=e._next;a?a._next=u:t[n]===e&&(t[n]=u),u?u._prev=a:t[r]===e&&(t[r]=a),e._next=e._prev=e.parent=null},Qs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ca=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},D2=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Gp=function(t,e,n,r){return t._startAt&&(Qn?t._startAt.revert(vf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},I2=function i(t){return!t||t._ts&&i(t.parent)},X0=function(t){return t._repeat?al(t._tTime,t=t.duration()+t._rDelay)*t:0},al=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Vf=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},hh=function(t){return t._end=Gn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Je)||0))},dh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Gn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),hh(t),n._dirty||Ca(n,t)),t},Wy=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Vf(t.rawTime(),e),(!e._dur||Iu(0,e.totalDuration(),n)-e._tTime>Je)&&e.render(n,!0)),Ca(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Je}},Fr=function(t,e,n,r){return e.parent&&Qs(e),e._start=Gn((vs(n)?n:n||t!==ln?nr(t,n,e):t._time)+e._delay),e._end=Gn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Vy(t,e,"_first","_last",t._sort?"_start":0),Vp(e)||(t._recent=e),r||Wy(t,e),t._ts<0&&dh(t,t._tTime),t},Xy=function(t,e){return(Xi.ScrollTrigger||Cm("scrollTrigger",e))&&Xi.ScrollTrigger.create(e,t)},Yy=function(t,e,n,r,a){if(Um(t,e,a),!t._initted)return 1;if(!n&&t._pt&&!Qn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&By!==ki.frame)return Ys.push(t),t._lazy=[a,r],1},U2=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Vp=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},N2=function(t,e,n,r){var a=t.ratio,u=e<0||!e&&(!t._start&&U2(t)&&!(!t._initted&&Vp(t))||(t._ts<0||t._dp._ts<0)&&!Vp(t))?0:1,l=t._rDelay,c=0,f,d,_;if(l&&t._repeat&&(c=Iu(0,t._tDur,e),d=al(c,l),t._yoyo&&d&1&&(u=1-u),d!==al(t._tTime,l)&&(a=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==a||Qn||r||t._zTime===Je||!e&&t._zTime){if(!t._initted&&Yy(t,e,r,n,c))return;for(_=t._zTime,t._zTime=e||(n?Je:0),n||(n=e&&!_),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=c,f=t._pt;f;)f.r(u,f.d),f=f._next;e<0&&Gp(t,e,n,!0),t._onUpdate&&!n&&hr(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&hr(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&Qs(t,1),!n&&!Qn&&(hr(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},O2=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ol=function(t,e,n,r){var a=t._repeat,u=Gn(e)||0,l=t._tTime/t._tDur;return l&&!r&&(t._time*=u/t._dur),t._dur=u,t._tDur=a?a<0?1e10:Gn(u*(a+1)+t._rDelay*a):u,l>0&&!r&&dh(t,t._tTime=t._tDur*l),t.parent&&hh(t),n||Ca(t.parent,t),t},Y0=function(t){return t instanceof yi?Ca(t):ol(t,t._dur)},F2={_start:0,endTime:yu,totalDuration:yu},nr=function i(t,e,n){var r=t.labels,a=t._recent||F2,u=t.duration()>=cr?a.endTime(!1):t._dur,l,c,f;return On(e)&&(isNaN(e)||e in r)?(c=e.charAt(0),f=e.substr(-1)==="%",l=e.indexOf("="),c==="<"||c===">"?(l>=0&&(e=e.replace(/=/,"")),(c==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(e.substr(1))||0)*(f?(l<0?a:n).totalDuration()/100:1)):l<0?(e in r||(r[e]=u),r[e]):(c=parseFloat(e.charAt(l-1)+e.substr(l+1)),f&&n&&(c=c/100*(jn(n)?n[0]:n).totalDuration()),l>1?i(t,e.substr(0,l-1),n)+c:u+c)):e==null?u:+e},nu=function(t,e,n){var r=vs(e[1]),a=(r?2:1)+(t<2?0:1),u=e[a],l,c;if(r&&(u.duration=e[1]),u.parent=n,t){for(l=u,c=n;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=Mi(c.vars.inherit)&&c.parent;u.immediateRender=Mi(l.immediateRender),t<2?u.runBackwards=1:u.startAt=e[a-1]}return new Mn(e[0],u,e[a+1])},na=function(t,e){return t||t===0?e(t):e},Iu=function(t,e,n){return n<t?t:n>e?e:n},Jn=function(t,e){return!On(t)||!(e=b2.exec(t))?"":e[1]},B2=function(t,e,n){return na(n,function(r){return Iu(t,e,r)})},Wp=[].slice,qy=function(t,e){return t&&Vr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Vr(t[0]))&&!t.nodeType&&t!==ir},z2=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var a;return On(r)&&!e||qy(r,1)?(a=n).push.apply(a,fr(r)):n.push(r)})||n},fr=function(t,e,n){return dn&&!e&&dn.selector?dn.selector(t):On(t)&&!n&&(kp||!ll())?Wp.call((e||Rm).querySelectorAll(t),0):jn(t)?z2(t,n):qy(t)?Wp.call(t,0):t?[t]:[]},Xp=function(t){return t=fr(t)[0]||kf("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return fr(e,n.querySelectorAll?n:n===t?kf("Invalid scope")||Rm.createElement("div"):t)}},$y=function(t){return t.sort(function(){return .5-Math.random()})},Ky=function(t){if(pn(t))return t;var e=Vr(t)?t:{each:t},n=Pa(e.ease),r=e.from||0,a=parseFloat(e.base)||0,u={},l=r>0&&r<1,c=isNaN(r)||l,f=e.axis,d=r,_=r;return On(r)?d=_={center:.5,edges:.5,end:1}[r]||0:!l&&c&&(d=r[0],_=r[1]),function(p,m,S){var y=(S||e).length,x=u[y],g,R,E,w,C,U,b,k,T;if(!x){if(T=e.grid==="auto"?0:(e.grid||[1,cr])[1],!T){for(b=-cr;b<(b=S[T++].getBoundingClientRect().left)&&T<y;);T--}for(x=u[y]=[],g=c?Math.min(T,y)*d-.5:r%T,R=T===cr?0:c?y*_/T-.5:r/T|0,b=0,k=cr,U=0;U<y;U++)E=U%T-g,w=R-(U/T|0),x[U]=C=f?Math.abs(f==="y"?w:E):Py(E*E+w*w),C>b&&(b=C),C<k&&(k=C);r==="random"&&$y(x),x.max=b-k,x.min=k,x.v=y=(parseFloat(e.amount)||parseFloat(e.each)*(T>y?y-1:f?f==="y"?y/T:T:Math.max(T,y/T))||0)*(r==="edges"?-1:1),x.b=y<0?a-y:a,x.u=Jn(e.amount||e.each)||0,n=n&&y<0?sS(n):n}return y=(x[p]-x.min)/x.max||0,Gn(x.b+(n?n(y):y)*x.v)+x.u}},Yp=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Gn(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(vs(n)?0:Jn(n))}},Zy=function(t,e){var n=jn(t),r,a;return!n&&Vr(t)&&(r=n=t.radius||cr,t.values?(t=fr(t.values),(a=!vs(t[0]))&&(r*=r)):t=Yp(t.increment)),na(e,n?pn(t)?function(u){return a=t(u),Math.abs(a-u)<=r?a:u}:function(u){for(var l=parseFloat(a?u.x:u),c=parseFloat(a?u.y:0),f=cr,d=0,_=t.length,p,m;_--;)a?(p=t[_].x-l,m=t[_].y-c,p=p*p+m*m):p=Math.abs(t[_]-l),p<f&&(f=p,d=_);return d=!r||f<=r?t[d]:u,a||d===u||vs(u)?d:d+Jn(u)}:Yp(t))},Jy=function(t,e,n,r){return na(jn(t)?!e:n===!0?!!(n=0):!r,function(){return jn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},k2=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(a,u){return u(a)},r)}},H2=function(t,e){return function(n){return t(parseFloat(n))+(e||Jn(n))}},G2=function(t,e,n){return jy(t,e,0,1,n)},Qy=function(t,e,n){return na(n,function(r){return t[~~e(r)]})},V2=function i(t,e,n){var r=e-t;return jn(t)?Qy(t,i(0,t.length),e):na(n,function(a){return(r+(a-t)%r)%r+t})},W2=function i(t,e,n){var r=e-t,a=r*2;return jn(t)?Qy(t,i(0,t.length-1),e):na(n,function(u){return u=(a+(u-t)%a)%a||0,t+(u>r?a-u:u)})},Su=function(t){for(var e=0,n="",r,a,u,l;~(r=t.indexOf("random(",e));)u=t.indexOf(")",r),l=t.charAt(r+7)==="[",a=t.substr(r+7,u-r-7).match(l?Uy:zp),n+=t.substr(e,r-e)+Jy(l?a:+a[0],l?0:+a[1],+a[2]||1e-5),e=u+1;return n+t.substr(e,t.length-e)},jy=function(t,e,n,r,a){var u=e-t,l=r-n;return na(a,function(c){return n+((c-t)/u*l||0)})},X2=function i(t,e,n,r){var a=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!a){var u=On(t),l={},c,f,d,_,p;if(n===!0&&(r=1)&&(n=null),u)t={p:t},e={p:e};else if(jn(t)&&!jn(e)){for(d=[],_=t.length,p=_-2,f=1;f<_;f++)d.push(i(t[f-1],t[f]));_--,a=function(S){S*=_;var y=Math.min(p,~~S);return d[y](S-y)},n=e}else r||(t=ka(jn(t)?[]:{},t));if(!d){for(c in e)Im.call(l,t,c,"get",e[c]);a=function(S){return Fm(S,l)||(u?t.p:t)}}}return na(n,a)},q0=function(t,e,n){var r=t.labels,a=cr,u,l,c;for(u in r)l=r[u]-e,l<0==!!n&&l&&a>(l=Math.abs(l))&&(c=u,a=l);return c},hr=function(t,e,n){var r=t.vars,a=r[e],u=dn,l=t._ctx,c,f,d;if(a)return c=r[e+"Params"],f=r.callbackScope||t,n&&Ys.length&&Hf(),l&&(dn=l),d=c?a.apply(f,c):a.call(f),dn=u,d},$l=function(t){return Qs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qn),t.progress()<1&&hr(t,"onInterrupt"),t},Vo,tS=[],eS=function(t){if(Am()&&t){t=!t.name&&t.default||t;var e=t.name,n=pn(t),r=e&&!n&&t.init?function(){this._props=[]}:t,a={init:yu,render:Fm,add:Im,kill:oD,modifier:aD,rawVars:0},u={targetTest:0,get:0,getSetter:Om,aliases:{},register:0};if(ll(),t!==r){if(zi[e])return;pr(r,pr(Gf(t,a),u)),ka(r.prototype,ka(a,Gf(t,u))),zi[r.prop=e]=r,t.targetTest&&(xf.push(r),Pm[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Fy(e,r),t.register&&t.register(bi,r,Ti)}else t&&tS.push(t)},Ze=255,Kl={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},Fd=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ze+.5|0},nS=function(t,e,n){var r=t?vs(t)?[t>>16,t>>8&Ze,t&Ze]:0:Kl.black,a,u,l,c,f,d,_,p,m,S;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Kl[t])r=Kl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(a=t.charAt(1),u=t.charAt(2),l=t.charAt(3),t="#"+a+a+u+u+l+l+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Ze,r&Ze,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Ze,t&Ze]}else if(t.substr(0,3)==="hsl"){if(r=S=t.match(zp),!e)c=+r[0]%360/360,f=+r[1]/100,d=+r[2]/100,u=d<=.5?d*(f+1):d+f-d*f,a=d*2-u,r.length>3&&(r[3]*=1),r[0]=Fd(c+1/3,a,u),r[1]=Fd(c,a,u),r[2]=Fd(c-1/3,a,u);else if(~t.indexOf("="))return r=t.match(Dy),n&&r.length<4&&(r[3]=1),r}else r=t.match(zp)||Kl.transparent;r=r.map(Number)}return e&&!S&&(a=r[0]/Ze,u=r[1]/Ze,l=r[2]/Ze,_=Math.max(a,u,l),p=Math.min(a,u,l),d=(_+p)/2,_===p?c=f=0:(m=_-p,f=d>.5?m/(2-_-p):m/(_+p),c=_===a?(u-l)/m+(u<l?6:0):_===u?(l-a)/m+2:(a-u)/m+4,c*=60),r[0]=~~(c+.5),r[1]=~~(f*100+.5),r[2]=~~(d*100+.5)),n&&r.length<4&&(r[3]=1),r},iS=function(t){var e=[],n=[],r=-1;return t.split(qs).forEach(function(a){var u=a.match(Go)||[];e.push.apply(e,u),n.push(r+=u.length+1)}),e.c=n,e},$0=function(t,e,n){var r="",a=(t+r).match(qs),u=e?"hsla(":"rgba(",l=0,c,f,d,_;if(!a)return t;if(a=a.map(function(p){return(p=nS(p,e,1))&&u+(e?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(d=iS(t),c=n.c,c.join(r)!==d.c.join(r)))for(f=t.replace(qs,"1").split(Go),_=f.length-1;l<_;l++)r+=f[l]+(~c.indexOf(l)?a.shift()||u+"0,0,0,0)":(d.length?d:a.length?a:n).shift());if(!f)for(f=t.split(qs),_=f.length-1;l<_;l++)r+=f[l]+a[l];return r+f[_]},qs=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Kl)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),Y2=/hsl[a]?\(/,rS=function(t){var e=t.join(" "),n;if(qs.lastIndex=0,qs.test(e))return n=Y2.test(e),t[1]=$0(t[1],n),t[0]=$0(t[0],n,iS(t[1])),!0},Mu,ki=function(){var i=Date.now,t=500,e=33,n=i(),r=n,a=1e3/240,u=a,l=[],c,f,d,_,p,m,S=function y(x){var g=i()-r,R=x===!0,E,w,C,U;if(g>t&&(n+=g-e),r+=g,C=r-n,E=C-u,(E>0||R)&&(U=++_.frame,p=C-_.time*1e3,_.time=C=C/1e3,u+=E+(E>=a?4:a-E),w=1),R||(c=f(y)),w)for(m=0;m<l.length;m++)l[m](C,p,U,x)};return _={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(x){return p/(1e3/(x||60))},wake:function(){Ny&&(!kp&&Am()&&(ir=kp=window,Rm=ir.document||{},Xi.gsap=bi,(ir.gsapVersions||(ir.gsapVersions=[])).push(bi.version),Oy(zf||ir.GreenSockGlobals||!ir.gsap&&ir||{}),d=ir.requestAnimationFrame,tS.forEach(eS)),c&&_.sleep(),f=d||function(x){return setTimeout(x,u-_.time*1e3+1|0)},Mu=1,S(2))},sleep:function(){(d?ir.cancelAnimationFrame:clearTimeout)(c),Mu=0,f=yu},lagSmoothing:function(x,g){t=x||1/0,e=Math.min(g||33,t)},fps:function(x){a=1e3/(x||240),u=_.time*1e3+a},add:function(x,g,R){var E=g?function(w,C,U,b){x(w,C,U,b),_.remove(E)}:x;return _.remove(x),l[R?"unshift":"push"](E),ll(),E},remove:function(x,g){~(g=l.indexOf(x))&&l.splice(g,1)&&m>=g&&m--},_listeners:l},_}(),ll=function(){return!Mu&&ki.wake()},Oe={},q2=/^[\d.\-M][\d.\-,\s]/,$2=/["']/g,K2=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],a=1,u=n.length,l,c,f;a<u;a++)c=n[a],l=a!==u-1?c.lastIndexOf(","):c.length,f=c.substr(0,l),e[r]=isNaN(f)?f.replace($2,"").trim():+f,r=c.substr(l+1).trim();return e},Z2=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},J2=function(t){var e=(t+"").split("("),n=Oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[K2(e[1])]:Z2(t).split(",").map(Hy)):Oe._CE&&q2.test(t)?Oe._CE("",t):n},sS=function(t){return function(e){return 1-t(1-e)}},aS=function i(t,e){for(var n=t._first,r;n;)n instanceof yi?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Pa=function(t,e){return t&&(pn(t)?t:Oe[t]||J2(t))||e},qa=function(t,e,n,r){n===void 0&&(n=function(c){return 1-e(1-c)}),r===void 0&&(r=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var a={easeIn:e,easeOut:n,easeInOut:r},u;return Ei(t,function(l){Oe[l]=Xi[l]=a,Oe[u=l.toLowerCase()]=n;for(var c in a)Oe[u+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Oe[l+"."+c]=a[c]}),a},oS=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Bd=function i(t,e,n){var r=e>=1?e:1,a=(n||(t?.3:.45))/(e<1?e:1),u=a/Bp*(Math.asin(1/r)||0),l=function(d){return d===1?1:r*Math.pow(2,-10*d)*w2((d-u)*a)+1},c=t==="out"?l:t==="in"?function(f){return 1-l(1-f)}:oS(l);return a=Bp/a,c.config=function(f,d){return i(t,f,d)},c},zd=function i(t,e){e===void 0&&(e=1.70158);var n=function(u){return u?--u*u*((e+1)*u+e)+1:0},r=t==="out"?n:t==="in"?function(a){return 1-n(1-a)}:oS(n);return r.config=function(a){return i(t,a)},r};Ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;qa(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;qa("Elastic",Bd("in"),Bd("out"),Bd());(function(i,t){var e=1/t,n=2*e,r=2.5*e,a=function(l){return l<e?i*l*l:l<n?i*Math.pow(l-1.5/t,2)+.75:l<r?i*(l-=2.25/t)*l+.9375:i*Math.pow(l-2.625/t,2)+.984375};qa("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);qa("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});qa("Circ",function(i){return-(Py(1-i*i)-1)});qa("Sine",function(i){return i===1?1:-T2(i*M2)+1});qa("Back",zd("in"),zd("out"),zd());Oe.SteppedEase=Oe.steps=Xi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),a=e?1:0,u=1-Je;return function(l){return((r*Iu(0,u,l)|0)+a)*n}}};sl.ease=Oe["quad.out"];Ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Lm+=i+","+i+"Params,"});var lS=function(t,e){this.id=E2++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:zy,this.set=e?e.getSetter:Om},Eu=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ol(this,+e.duration,1,1),this.data=e.data,dn&&(this._ctx=dn,dn.data.push(this)),Mu||ki.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ol(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(ll(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(dh(this,n),!a._dp||a.parent||Wy(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Je||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ky(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+X0(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+X0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?al(this._tTime,a)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Je?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Vf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Je?0:this._rts,this.totalTime(Iu(-Math.abs(this._delay),this._tDur,r),!0),hh(this),D2(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ll(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Je&&(this._tTime-=Je)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Fr(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Mi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vf(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=R2);var r=Qn;return Qn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qn=r,this},t.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):a},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Y0(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Y0(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(nr(this,n),Mi(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Mi(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Je:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Je,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-Je)},t.eventCallback=function(n,r,a){var u=this.vars;return arguments.length>1?(r?(u[n]=r,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete u[n],this):u[n]},t.then=function(n){var r=this;return new Promise(function(a){var u=pn(n)?n:Gy,l=function(){var f=r.then;r.then=null,pn(u)&&(u=u(r))&&(u.then||u===r)&&(r.then=f),a(u),r.then=f};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){$l(this)},i}();pr(Eu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Je,_prom:0,_ps:!1,_rts:1});var yi=function(i){Cy(t,i);function t(n,r){var a;return n===void 0&&(n={}),a=i.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Mi(n.sortChildren),ln&&Fr(n.parent||ln,ls(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Xy(ls(a),n.scrollTrigger),a}var e=t.prototype;return e.to=function(r,a,u){return nu(0,arguments,this),this},e.from=function(r,a,u){return nu(1,arguments,this),this},e.fromTo=function(r,a,u,l){return nu(2,arguments,this),this},e.set=function(r,a,u){return a.duration=0,a.parent=this,eu(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Mn(r,a,nr(this,u),1),this},e.call=function(r,a,u){return Fr(this,Mn.delayedCall(0,r,a),u)},e.staggerTo=function(r,a,u,l,c,f,d){return u.duration=a,u.stagger=u.stagger||l,u.onComplete=f,u.onCompleteParams=d,u.parent=this,new Mn(r,u,nr(this,c)),this},e.staggerFrom=function(r,a,u,l,c,f,d){return u.runBackwards=1,eu(u).immediateRender=Mi(u.immediateRender),this.staggerTo(r,a,u,l,c,f,d)},e.staggerFromTo=function(r,a,u,l,c,f,d,_){return l.startAt=u,eu(l).immediateRender=Mi(l.immediateRender),this.staggerTo(r,a,l,c,f,d,_)},e.render=function(r,a,u){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,f=this._dur,d=r<=0?0:Gn(r),_=this._zTime<0!=r<0&&(this._initted||!f),p,m,S,y,x,g,R,E,w,C,U,b;if(this!==ln&&d>c&&r>=0&&(d=c),d!==this._tTime||u||_){if(l!==this._time&&f&&(d+=this._time-l,r+=this._time-l),p=d,w=this._start,E=this._ts,g=!E,_&&(f||(l=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(U=this._yoyo,x=f+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,a,u);if(p=Gn(d%x),d===c?(y=this._repeat,p=f):(y=~~(d/x),y&&y===d/x&&(p=f,y--),p>f&&(p=f)),C=al(this._tTime,x),!l&&this._tTime&&C!==y&&this._tTime-C*x-this._dur<=0&&(C=y),U&&y&1&&(p=f-p,b=1),y!==C&&!this._lock){var k=U&&C&1,T=k===(U&&y&1);if(y<C&&(k=!k),l=k?0:d%f?f:d,this._lock=1,this.render(l||(b?0:Gn(y*x)),a,!f)._lock=0,this._tTime=d,!a&&this.parent&&hr(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),l&&l!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,c=this._tDur,T&&(this._lock=2,l=k?f:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;aS(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=O2(this,Gn(l),Gn(p)),R&&(d-=p-(p=R._start))),this._tTime=d,this._time=p,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,l=0),!l&&p&&!a&&!y&&(hr(this,"onStart"),this._tTime!==d))return this;if(p>=l&&r>=0)for(m=this._first;m;){if(S=m._next,(m._act||p>=m._start)&&m._ts&&R!==m){if(m.parent!==this)return this.render(r,a,u);if(m.render(m._ts>0?(p-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(p-m._start)*m._ts,a,u),p!==this._time||!this._ts&&!g){R=0,S&&(d+=this._zTime=-Je);break}}m=S}else{m=this._last;for(var L=r<0?r:p;m;){if(S=m._prev,(m._act||L<=m._end)&&m._ts&&R!==m){if(m.parent!==this)return this.render(r,a,u);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,a,u||Qn&&(m._initted||m._startAt)),p!==this._time||!this._ts&&!g){R=0,S&&(d+=this._zTime=L?-Je:Je);break}}m=S}}if(R&&!a&&(this.pause(),R.render(p>=l?0:-Je)._zTime=p>=l?1:-1,this._ts))return this._start=w,hh(this),this.render(r,a,u);this._onUpdate&&!a&&hr(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&l)&&(w===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!f)&&(d===c&&this._ts>0||!d&&this._ts<0)&&Qs(this,1),!a&&!(r<0&&!l)&&(d||l||!c)&&(hr(this,d===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,a){var u=this;if(vs(a)||(a=nr(this,a,r)),!(r instanceof Eu)){if(jn(r))return r.forEach(function(l){return u.add(l,a)}),this;if(On(r))return this.addLabel(r,a);if(pn(r))r=Mn.delayedCall(0,r);else return this}return this!==r?Fr(this,r,a):this},e.getChildren=function(r,a,u,l){r===void 0&&(r=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),l===void 0&&(l=-cr);for(var c=[],f=this._first;f;)f._start>=l&&(f instanceof Mn?a&&c.push(f):(u&&c.push(f),r&&c.push.apply(c,f.getChildren(!0,a,u)))),f=f._next;return c},e.getById=function(r){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===r)return a[u]},e.remove=function(r){return On(r)?this.removeLabel(r):pn(r)?this.killTweensOf(r):(fh(this,r),r===this._recent&&(this._recent=this._last),Ca(this))},e.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gn(ki.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},e.addLabel=function(r,a){return this.labels[r]=nr(this,a),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,a,u){var l=Mn.delayedCall(0,a||yu,u);return l.data="isPause",this._hasPause=1,Fr(this,l,nr(this,r))},e.removePause=function(r){var a=this._first;for(r=nr(this,r);a;)a._start===r&&a.data==="isPause"&&Qs(a),a=a._next},e.killTweensOf=function(r,a,u){for(var l=this.getTweensOf(r,u),c=l.length;c--;)Bs!==l[c]&&l[c].kill(r,a);return this},e.getTweensOf=function(r,a){for(var u=[],l=fr(r),c=this._first,f=vs(a),d;c;)c instanceof Mn?C2(c._targets,l)&&(f?(!Bs||c._initted&&c._ts)&&c.globalTime(0)<=a&&c.globalTime(c.totalDuration())>a:!a||c.isActive())&&u.push(c):(d=c.getTweensOf(l,a)).length&&u.push.apply(u,d),c=c._next;return u},e.tweenTo=function(r,a){a=a||{};var u=this,l=nr(u,r),c=a,f=c.startAt,d=c.onStart,_=c.onStartParams,p=c.immediateRender,m,S=Mn.to(u,pr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:a.duration||Math.abs((l-(f&&"time"in f?f.time:u._time))/u.timeScale())||Je,onStart:function(){if(u.pause(),!m){var x=a.duration||Math.abs((l-(f&&"time"in f?f.time:u._time))/u.timeScale());S._dur!==x&&ol(S,x,0,1).render(S._time,!0,!0),m=1}d&&d.apply(S,_||[])}},a));return p?S.render(0):S},e.tweenFromTo=function(r,a,u){return this.tweenTo(a,pr({startAt:{time:nr(this,r)}},u))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),q0(this,nr(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),q0(this,nr(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Je)},e.shiftChildren=function(r,a,u){u===void 0&&(u=0);for(var l=this._first,c=this.labels,f;l;)l._start>=u&&(l._start+=r,l._end+=r),l=l._next;if(a)for(f in c)c[f]>=u&&(c[f]+=r);return Ca(this)},e.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ca(this)},e.totalDuration=function(r){var a=0,u=this,l=u._last,c=cr,f,d,_;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(_=u.parent;l;)f=l._prev,l._dirty&&l.totalDuration(),d=l._start,d>c&&u._sort&&l._ts&&!u._lock?(u._lock=1,Fr(u,l,d-l._delay,1)._lock=0):c=d,d<0&&l._ts&&(a-=d,(!_&&!u._dp||_&&_.smoothChildTiming)&&(u._start+=d/u._ts,u._time-=d,u._tTime-=d),u.shiftChildren(-d,!1,-1/0),c=0),l._end>a&&l._ts&&(a=l._end),l=f;ol(u,u===ln&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(r){if(ln._ts&&(ky(ln,Vf(r,ln)),By=ki.frame),ki.frame>=V0){V0+=Gi.autoSleep||120;var a=ln._first;if((!a||!a._ts)&&Gi.autoSleep&&ki._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||ki.sleep()}}},t}(Eu);pr(yi.prototype,{_lock:0,_hasPause:0,_forcing:0});var Q2=function(t,e,n,r,a,u,l){var c=new Ti(this._pt,t,e,0,1,pS,null,a),f=0,d=0,_,p,m,S,y,x,g,R;for(c.b=n,c.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=Su(r)),u&&(R=[n,r],u(R,t,e),n=R[0],r=R[1]),p=n.match(Nd)||[];_=Nd.exec(r);)S=_[0],y=r.substring(f,_.index),m?m=(m+1)%5:y.substr(-5)==="rgba("&&(m=1),S!==p[d++]&&(x=parseFloat(p[d-1])||0,c._pt={_next:c._pt,p:y||d===1?y:",",s:x,c:S.charAt(1)==="="?Ko(x,S)-x:parseFloat(S)-x,m:m&&m<4?Math.round:0},f=Nd.lastIndex);return c.c=f<r.length?r.substring(f,r.length):"",c.fp=l,(Iy.test(r)||g)&&(c.e=0),this._pt=c,c},Im=function(t,e,n,r,a,u,l,c,f,d){pn(r)&&(r=r(a||0,t,u));var _=t[e],p=n!=="get"?n:pn(_)?f?t[e.indexOf("set")||!pn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](f):t[e]():_,m=pn(_)?f?iD:hS:Nm,S;if(On(r)&&(~r.indexOf("random(")&&(r=Su(r)),r.charAt(1)==="="&&(S=Ko(p,r)+(Jn(p)||0),(S||S===0)&&(r=S))),!d||p!==r||qp)return!isNaN(p*r)&&r!==""?(S=new Ti(this._pt,t,e,+p||0,r-(p||0),typeof _=="boolean"?sD:dS,0,m),f&&(S.fp=f),l&&S.modifier(l,this,t),this._pt=S):(!_&&!(e in t)&&Cm(e,r),Q2.call(this,t,e,p,r,m,c||Gi.stringFilter,f))},j2=function(t,e,n,r,a){if(pn(t)&&(t=iu(t,a,e,n,r)),!Vr(t)||t.style&&t.nodeType||jn(t)||Ly(t))return On(t)?iu(t,a,e,n,r):t;var u={},l;for(l in t)u[l]=iu(t[l],a,e,n,r);return u},uS=function(t,e,n,r,a,u){var l,c,f,d;if(zi[t]&&(l=new zi[t]).init(a,l.rawVars?e[t]:j2(e[t],r,a,u,n),n,r,u)!==!1&&(n._pt=c=new Ti(n._pt,a,t,0,1,l.render,l,0,l.priority),n!==Vo))for(f=n._ptLookup[n._targets.indexOf(a)],d=l._props.length;d--;)f[l._props[d]]=c;return l},Bs,qp,Um=function i(t,e,n){var r=t.vars,a=r.ease,u=r.startAt,l=r.immediateRender,c=r.lazy,f=r.onUpdate,d=r.onUpdateParams,_=r.callbackScope,p=r.runBackwards,m=r.yoyoEase,S=r.keyframes,y=r.autoRevert,x=t._dur,g=t._startAt,R=t._targets,E=t.parent,w=E&&E.data==="nested"?E.vars.targets:R,C=t._overwrite==="auto"&&!wm,U=t.timeline,b,k,T,L,Z,X,ut,z,K,st,$,lt,ct;if(U&&(!S||!a)&&(a="none"),t._ease=Pa(a,sl.ease),t._yEase=m?sS(Pa(m===!0?a:m,sl.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!U&&!!r.runBackwards,!U||S&&!r.stagger){if(z=R[0]?Ra(R[0]).harness:0,lt=z&&r[z.prop],b=Gf(r,Pm),g&&(g._zTime<0&&g.progress(1),e<0&&p&&l&&!y?g.render(-1,!0):g.revert(p&&x?vf:A2),g._lazy=0),u){if(Qs(t._startAt=Mn.set(R,pr({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:!g&&Mi(c),startAt:null,delay:0,onUpdate:f,onUpdateParams:d,callbackScope:_,stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qn||!l&&!y)&&t._startAt.revert(vf),l&&x&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(p&&x&&!g){if(e&&(l=!1),T=pr({overwrite:!1,data:"isFromStart",lazy:l&&!g&&Mi(c),immediateRender:l,stagger:0,parent:E},b),lt&&(T[z.prop]=lt),Qs(t._startAt=Mn.set(R,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qn?t._startAt.revert(vf):t._startAt.render(-1,!0)),t._zTime=e,!l)i(t._startAt,Je,Je);else if(!e)return}for(t._pt=t._ptCache=0,c=x&&Mi(c)||c&&!x,k=0;k<R.length;k++){if(Z=R[k],ut=Z._gsap||Dm(R)[k]._gsap,t._ptLookup[k]=st={},Hp[ut.id]&&Ys.length&&Hf(),$=w===R?k:w.indexOf(Z),z&&(K=new z).init(Z,lt||b,t,$,w)!==!1&&(t._pt=L=new Ti(t._pt,Z,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(N){st[N]=L}),K.priority&&(X=1)),!z||lt)for(T in b)zi[T]&&(K=uS(T,b,t,$,Z,w))?K.priority&&(X=1):st[T]=L=Im.call(t,Z,T,"get",b[T],$,w,0,r.stringFilter);t._op&&t._op[k]&&t.kill(Z,t._op[k]),C&&t._pt&&(Bs=t,ln.killTweensOf(Z,st,t.globalTime(e)),ct=!t.parent,Bs=0),t._pt&&c&&(Hp[ut.id]=1)}X&&mS(t),t._onInit&&t._onInit(t)}t._onUpdate=f,t._initted=(!t._op||t._pt)&&!ct,S&&e<=0&&U.render(cr,!0,!0)},tD=function(t,e,n,r,a,u,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],f,d,_,p;if(!c)for(c=t._ptCache[e]=[],_=t._ptLookup,p=t._targets.length;p--;){if(f=_[p][e],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==e&&f.fp!==e;)f=f._next;if(!f)return qp=1,t.vars[e]="+=0",Um(t,l),qp=0,1;c.push(f)}for(p=c.length;p--;)d=c[p],f=d._pt||d,f.s=(r||r===0)&&!a?r:f.s+(r||0)+u*f.c,f.c=n-f.s,d.e&&(d.e=vn(n)+Jn(d.e)),d.b&&(d.b=f.s+Jn(d.b))},eD=function(t,e){var n=t[0]?Ra(t[0]).harness:0,r=n&&n.aliases,a,u,l,c;if(!r)return e;a=ka({},e);for(u in r)if(u in a)for(c=r[u].split(","),l=c.length;l--;)a[c[l]]=a[u];return a},nD=function(t,e,n,r){var a=e.ease||r||"power1.inOut",u,l;if(jn(e))l=n[t]||(n[t]=[]),e.forEach(function(c,f){return l.push({t:f/(e.length-1)*100,v:c,e:a})});else for(u in e)l=n[u]||(n[u]=[]),u==="ease"||l.push({t:parseFloat(t),v:e[u],e:a})},iu=function(t,e,n,r,a){return pn(t)?t.call(e,n,r,a):On(t)&&~t.indexOf("random(")?Su(t):t},cS=Lm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",fS={};Ei(cS+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return fS[i]=1});var Mn=function(i){Cy(t,i);function t(n,r,a,u){var l;typeof r=="number"&&(a.duration=r,r=a,a=null),l=i.call(this,u?r:eu(r))||this;var c=l.vars,f=c.duration,d=c.delay,_=c.immediateRender,p=c.stagger,m=c.overwrite,S=c.keyframes,y=c.defaults,x=c.scrollTrigger,g=c.yoyoEase,R=r.parent||ln,E=(jn(n)||Ly(n)?vs(n[0]):"length"in r)?[n]:fr(n),w,C,U,b,k,T,L,Z;if(l._targets=E.length?Dm(E):kf("GSAP target "+n+" not found. https://greensock.com",!Gi.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=m,S||p||bc(f)||bc(d)){if(r=l.vars,w=l.timeline=new yi({data:"nested",defaults:y||{},targets:R&&R.data==="nested"?R.vars.targets:E}),w.kill(),w.parent=w._dp=ls(l),w._start=0,p||bc(f)||bc(d)){if(b=E.length,L=p&&Ky(p),Vr(p))for(k in p)~cS.indexOf(k)&&(Z||(Z={}),Z[k]=p[k]);for(C=0;C<b;C++)U=Gf(r,fS),U.stagger=0,g&&(U.yoyoEase=g),Z&&ka(U,Z),T=E[C],U.duration=+iu(f,ls(l),C,T,E),U.delay=(+iu(d,ls(l),C,T,E)||0)-l._delay,!p&&b===1&&U.delay&&(l._delay=d=U.delay,l._start+=d,U.delay=0),w.to(T,U,L?L(C,T,E):0),w._ease=Oe.none;w.duration()?f=d=0:l.timeline=0}else if(S){eu(pr(w.vars.defaults,{ease:"none"})),w._ease=Pa(S.ease||r.ease||"none");var X=0,ut,z,K;if(jn(S))S.forEach(function(st){return w.to(E,st,">")}),w.duration();else{U={};for(k in S)k==="ease"||k==="easeEach"||nD(k,S[k],U,S.easeEach);for(k in U)for(ut=U[k].sort(function(st,$){return st.t-$.t}),X=0,C=0;C<ut.length;C++)z=ut[C],K={ease:z.e,duration:(z.t-(C?ut[C-1].t:0))/100*f},K[k]=z.v,w.to(E,K,X),X+=K.duration;w.duration()<f&&w.to({},{duration:f-w.duration()})}}f||l.duration(f=w.duration())}else l.timeline=0;return m===!0&&!wm&&(Bs=ls(l),ln.killTweensOf(E),Bs=0),Fr(R,ls(l),a),r.reversed&&l.reverse(),r.paused&&l.paused(!0),(_||!f&&!S&&l._start===Gn(R._time)&&Mi(_)&&I2(ls(l))&&R.data!=="nested")&&(l._tTime=-Je,l.render(Math.max(0,-d)||0)),x&&Xy(ls(l),x),l}var e=t.prototype;return e.render=function(r,a,u){var l=this._time,c=this._tDur,f=this._dur,d=r<0,_=r>c-Je&&!d?c:r<Je?0:r,p,m,S,y,x,g,R,E,w;if(!f)N2(this,r,a,u);else if(_!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(p=_,E=this.timeline,this._repeat){if(y=f+this._rDelay,this._repeat<-1&&d)return this.totalTime(y*100+r,a,u);if(p=Gn(_%y),_===c?(S=this._repeat,p=f):(S=~~(_/y),S&&S===_/y&&(p=f,S--),p>f&&(p=f)),g=this._yoyo&&S&1,g&&(w=this._yEase,p=f-p),x=al(this._tTime,y),p===l&&!u&&this._initted)return this._tTime=_,this;S!==x&&(E&&this._yEase&&aS(E,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=u=1,this.render(Gn(y*S),!0).invalidate()._lock=0))}if(!this._initted){if(Yy(this,d?r:p,u,a,_))return this._tTime=0,this;if(l!==this._time)return this;if(f!==this._dur)return this.render(r,a,u)}if(this._tTime=_,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(w||this._ease)(p/f),this._from&&(this.ratio=R=1-R),p&&!l&&!a&&!S&&(hr(this,"onStart"),this._tTime!==_))return this;for(m=this._pt;m;)m.r(R,m.d),m=m._next;E&&E.render(r<0?r:!p&&g?-Je:E._dur*E._ease(p/this._dur),a,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(d&&Gp(this,r,a,u),hr(this,"onUpdate")),this._repeat&&S!==x&&this.vars.onRepeat&&!a&&this.parent&&hr(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(d&&!this._onUpdate&&Gp(this,r,!0,!0),(r||!f)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&Qs(this,1),!a&&!(d&&!l)&&(_||l||g)&&(hr(this,_===c?"onComplete":"onReverseComplete",!0),this._prom&&!(_<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,a,u,l){Mu||ki.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Um(this,c),f=this._ease(c/this._dur),tD(this,r,a,u,l,f,c)?this.resetTo(r,a,u,l):(dh(this,0),this.parent||Vy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?$l(this):this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,Bs&&Bs.vars.overwrite!==!0)._first||$l(this),this.parent&&u!==this.timeline.totalDuration()&&ol(this,this._dur*this.timeline._tDur/u,0,1),this}var l=this._targets,c=r?fr(r):l,f=this._ptLookup,d=this._pt,_,p,m,S,y,x,g;if((!a||a==="all")&&L2(l,c))return a==="all"&&(this._pt=0),$l(this);for(_=this._op=this._op||[],a!=="all"&&(On(a)&&(y={},Ei(a,function(R){return y[R]=1}),a=y),a=eD(l,a)),g=l.length;g--;)if(~c.indexOf(l[g])){p=f[g],a==="all"?(_[g]=a,S=p,m={}):(m=_[g]=_[g]||{},S=a);for(y in S)x=p&&p[y],x&&((!("kill"in x.d)||x.d.kill(y)===!0)&&fh(this,x,"_pt"),delete p[y]),m!=="all"&&(m[y]=1)}return this._initted&&!this._pt&&d&&$l(this),this},t.to=function(r,a){return new t(r,a,arguments[2])},t.from=function(r,a){return nu(1,arguments)},t.delayedCall=function(r,a,u,l){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:l})},t.fromTo=function(r,a,u){return nu(2,arguments)},t.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(r,a)},t.killTweensOf=function(r,a,u){return ln.killTweensOf(r,a,u)},t}(Eu);pr(Mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ei("staggerTo,staggerFrom,staggerFromTo",function(i){Mn[i]=function(){var t=new yi,e=Wp.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Nm=function(t,e,n){return t[e]=n},hS=function(t,e,n){return t[e](n)},iD=function(t,e,n,r){return t[e](r.fp,n)},rD=function(t,e,n){return t.setAttribute(e,n)},Om=function(t,e){return pn(t[e])?hS:bm(t[e])&&t.setAttribute?rD:Nm},dS=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},sD=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},pS=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Fm=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},aD=function(t,e,n,r){for(var a=this._pt,u;a;)u=a._next,a.p===r&&a.modifier(t,e,n),a=u},oD=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?fh(this,e,"_pt"):e.dep||(n=1),e=r;return!n},lD=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},mS=function(t){for(var e=t._pt,n,r,a,u;e;){for(n=e._next,r=a;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:u)?e._prev._next=e:a=e,(e._next=r)?r._prev=e:u=e,e=n}t._pt=a},Ti=function(){function i(e,n,r,a,u,l,c,f,d){this.t=n,this.s=a,this.c=u,this.p=r,this.r=l||dS,this.d=c||this,this.set=f||Nm,this.pr=d||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=lD,this.m=n,this.mt=a,this.tween=r},i}();Ei(Lm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Pm[i]=1});Xi.TweenMax=Xi.TweenLite=Mn;Xi.TimelineLite=Xi.TimelineMax=yi;ln=new yi({sortChildren:!1,defaults:sl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gi.stringFilter=rS;var La=[],yf={},uD=[],K0=0,cD=0,kd=function(t){return(yf[t]||uD).map(function(e){return e()})},$p=function(){var t=Date.now(),e=[];t-K0>2&&(kd("matchMediaInit"),La.forEach(function(n){var r=n.queries,a=n.conditions,u,l,c,f;for(l in r)u=ir.matchMedia(r[l]).matches,u&&(c=1),u!==a[l]&&(a[l]=u,f=1);f&&(n.revert(),c&&e.push(n))}),kd("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),K0=t,kd("matchMedia"))},_S=function(){function i(e,n){this.selector=n&&Xp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cD++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,a){pn(n)&&(a=r,r=n,n=pn);var u=this,l=function(){var f=dn,d=u.selector,_;return f&&f!==u&&f.data.push(u),a&&(u.selector=Xp(a)),dn=u,_=r.apply(u,arguments),pn(_)&&u._r.push(_),dn=f,u.selector=d,u.isReverted=!1,_};return u.last=l,n===pn?l(u):n?u[n]=l:l},t.ignore=function(n){var r=dn;dn=null,n(this),dn=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Mn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var a=this;if(n){var u=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(f){return u.splice(u.indexOf(f),1)}))}),u.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof Mn)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,a)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),r)for(var l=La.length;l--;)La[l].id===this.id&&La.splice(l,1)},t.revert=function(n){this.kill(n||{})},i}(),fD=function(){function i(e){this.contexts=[],this.scope=e}var t=i.prototype;return t.add=function(n,r,a){Vr(n)||(n={matches:n});var u=new _S(0,a||this.scope),l=u.conditions={},c,f,d;dn&&!u.selector&&(u.selector=dn.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=n;for(f in n)f==="all"?d=1:(c=ir.matchMedia(n[f]),c&&(La.indexOf(u)<0&&La.push(u),(l[f]=c.matches)&&(d=1),c.addListener?c.addListener($p):c.addEventListener("change",$p)));return d&&r(u),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Wf={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return eS(r)})},timeline:function(t){return new yi(t)},getTweensOf:function(t,e){return ln.getTweensOf(t,e)},getProperty:function(t,e,n,r){On(t)&&(t=fr(t)[0]);var a=Ra(t||{}).get,u=n?Gy:Hy;return n==="native"&&(n=""),t&&(e?u((zi[e]&&zi[e].get||a)(t,e,n,r)):function(l,c,f){return u((zi[l]&&zi[l].get||a)(t,l,c,f))})},quickSetter:function(t,e,n){if(t=fr(t),t.length>1){var r=t.map(function(d){return bi.quickSetter(d,e,n)}),a=r.length;return function(d){for(var _=a;_--;)r[_](d)}}t=t[0]||{};var u=zi[e],l=Ra(t),c=l.harness&&(l.harness.aliases||{})[e]||e,f=u?function(d){var _=new u;Vo._pt=0,_.init(t,n?d+n:d,Vo,0,[t]),_.render(1,_),Vo._pt&&Fm(1,Vo)}:l.set(t,c);return u?f:function(d){return f(t,c,n?d+n:d,l,1)}},quickTo:function(t,e,n){var r,a=bi.to(t,ka((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),u=function(c,f,d){return a.resetTo(e,c,f,d)};return u.tween=a,u},isTweening:function(t){return ln.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Pa(t.ease,sl.ease)),W0(sl,t||{})},config:function(t){return W0(Gi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,a=t.defaults,u=t.extendTimeline;(r||"").split(",").forEach(function(l){return l&&!zi[l]&&!Xi[l]&&kf(e+" effect requires "+l+" plugin.")}),Od[e]=function(l,c,f){return n(fr(l),pr(c||{},a),f)},u&&(yi.prototype[e]=function(l,c,f){return this.add(Od[e](l,Vr(c)?c:(f=c)&&{},this),f)})},registerEase:function(t,e){Oe[t]=Pa(e)},parseEase:function(t,e){return arguments.length?Pa(t,e):Oe},getById:function(t){return ln.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new yi(t),r,a;for(n.smoothChildTiming=Mi(t.smoothChildTiming),ln.remove(n),n._dp=0,n._time=n._tTime=ln._time,r=ln._first;r;)a=r._next,(e||!(!r._dur&&r instanceof Mn&&r.vars.onComplete===r._targets[0]))&&Fr(n,r,r._start-r._delay),r=a;return Fr(ln,n,0),n},context:function(t,e){return t?new _S(t,e):dn},matchMedia:function(t){return new fD(t)},matchMediaRefresh:function(){return La.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||$p()},addEventListener:function(t,e){var n=yf[t]||(yf[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=yf[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:V2,wrapYoyo:W2,distribute:Ky,random:Jy,snap:Zy,normalize:G2,getUnit:Jn,clamp:B2,splitColor:nS,toArray:fr,selector:Xp,mapRange:jy,pipe:k2,unitize:H2,interpolate:X2,shuffle:$y},install:Oy,effects:Od,ticker:ki,updateRoot:yi.updateRoot,plugins:zi,globalTimeline:ln,core:{PropTween:Ti,globals:Fy,Tween:Mn,Timeline:yi,Animation:Eu,getCache:Ra,_removeLinkedListItem:fh,reverting:function(){return Qn},context:function(t){return t&&dn&&(dn.data.push(t),t._ctx=dn),dn},suppressOverwrites:function(t){return wm=t}}};Ei("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Wf[i]=Mn[i]});ki.add(yi.updateRoot);Vo=Wf.to({},{duration:0});var hD=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},dD=function(t,e){var n=t._targets,r,a,u;for(r in e)for(a=n.length;a--;)u=t._ptLookup[a][r],u&&(u=u.d)&&(u._pt&&(u=hD(u,r)),u&&u.modifier&&u.modifier(e[r],t,n[a],r))},Hd=function(t,e){return{name:t,rawVars:1,init:function(r,a,u){u._onInit=function(l){var c,f;if(On(a)&&(c={},Ei(a,function(d){return c[d]=1}),a=c),e){c={};for(f in a)c[f]=e(a[f]);a=c}dD(l,a)}}}},bi=Wf.registerPlugin({name:"attr",init:function(t,e,n,r,a){var u,l,c;this.tween=n;for(u in e)c=t.getAttribute(u)||"",l=this.add(t,"setAttribute",(c||0)+"",e[u],r,a,0,0,u),l.op=u,l.b=c,this._props.push(u)},render:function(t,e){for(var n=e._pt;n;)Qn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Hd("roundProps",Yp),Hd("modifiers"),Hd("snap",Zy))||Wf;Mn.version=yi.version=bi.version="3.12.2";Ny=1;Am()&&ll();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Z0,zs,Zo,Bm,wa,J0,zm,pD=function(){return typeof window<"u"},xs={},va=180/Math.PI,Jo=Math.PI/180,mo=Math.atan2,Q0=1e8,km=/([A-Z])/g,mD=/(left|right|width|margin|padding|x)/i,_D=/[\s,\(]\S/,Br={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gD=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vD=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xD=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},gS=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},vS=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},yD=function(t,e,n){return t.style[e]=n},SD=function(t,e,n){return t.style.setProperty(e,n)},MD=function(t,e,n){return t._gsap[e]=n},ED=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},TD=function(t,e,n,r,a){var u=t._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},wD=function(t,e,n,r,a){var u=t._gsap;u[e]=n,u.renderTransform(a,u)},un="transform",Cr=un+"Origin",bD=function i(t,e){var n=this,r=this.target,a=r.style;if(t in xs&&a){if(this.tfm=this.tfm||{},t!=="transform")t=Br[t]||t,~t.indexOf(",")?t.split(",").forEach(function(u){return n.tfm[u]=us(r,u)}):this.tfm[t]=r._gsap.x?r._gsap[t]:us(r,t);else return Br.transform.split(",").forEach(function(u){return i.call(n,u,e)});if(this.props.indexOf(un)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Cr,e,"")),t=un}(a||e)&&this.props.push(t,e,a[t])},xS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},AD=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,a,u;for(a=0;a<t.length;a+=3)t[a+1]?e[t[a]]=t[a+2]:t[a+2]?n[t[a]]=t[a+2]:n.removeProperty(t[a].substr(0,2)==="--"?t[a]:t[a].replace(km,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),a=zm(),(!a||!a.isStart)&&!n[un]&&(xS(n),r.uncache=1)}},yS=function(t,e){var n={target:t,props:[],revert:AD,save:bD};return t._gsap||bi.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},SS,Zp=function(t,e){var n=zs.createElementNS?zs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):zs.createElement(t);return n.style?n:zs.createElement(t)},kr=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(km,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,ul(e)||e,1)||""},j0="O,Moz,ms,Ms,Webkit".split(","),ul=function(t,e,n){var r=e||wa,a=r.style,u=5;if(t in a&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(j0[u]+t in a););return u<0?null:(u===3?"ms":u>=0?j0[u]:"")+t},Jp=function(){pD()&&window.document&&(Z0=window,zs=Z0.document,Zo=zs.documentElement,wa=Zp("div")||{style:{}},Zp("div"),un=ul(un),Cr=un+"Origin",wa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",SS=!!ul("perspective"),zm=bi.core.reverting,Bm=1)},Gd=function i(t){var e=Zp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,a=this.style.cssText,u;if(Zo.appendChild(e),e.appendChild(this),this.style.display="block",t)try{u=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(u=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Zo.removeChild(e),this.style.cssText=a,u},tv=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},MS=function(t){var e;try{e=t.getBBox()}catch{e=Gd.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Gd||(e=Gd.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+tv(t,["x","cx","x1"])||0,y:+tv(t,["y","cy","y1"])||0,width:0,height:0}:e},ES=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&MS(t))},Tu=function(t,e){if(e){var n=t.style;e in xs&&e!==Cr&&(e=un),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(km,"-$1").toLowerCase())):n.removeAttribute(e)}},ks=function(t,e,n,r,a,u){var l=new Ti(t._pt,e,n,0,1,u?vS:gS);return t._pt=l,l.b=r,l.e=a,t._props.push(n),l},ev={deg:1,rad:1,turn:1},RD={grid:1,flex:1},js=function i(t,e,n,r){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",l=wa.style,c=mD.test(e),f=t.tagName.toLowerCase()==="svg",d=(f?"client":"offset")+(c?"Width":"Height"),_=100,p=r==="px",m=r==="%",S,y,x,g;return r===u||!a||ev[r]||ev[u]?a:(u!=="px"&&!p&&(a=i(t,e,n,"px")),g=t.getCTM&&ES(t),(m||u==="%")&&(xs[e]||~e.indexOf("adius"))?(S=g?t.getBBox()[c?"width":"height"]:t[d],vn(m?a/S*_:a/100*S)):(l[c?"width":"height"]=_+(p?u:r),y=~e.indexOf("adius")||r==="em"&&t.appendChild&&!f?t:t.parentNode,g&&(y=(t.ownerSVGElement||{}).parentNode),(!y||y===zs||!y.appendChild)&&(y=zs.body),x=y._gsap,x&&m&&x.width&&c&&x.time===ki.time&&!x.uncache?vn(a/x.width*_):((m||u==="%")&&!RD[kr(y,"display")]&&(l.position=kr(t,"position")),y===t&&(l.position="static"),y.appendChild(wa),S=wa[d],y.removeChild(wa),l.position="absolute",c&&m&&(x=Ra(y),x.time=ki.time,x.width=y[d]),vn(p?S*a/_:S&&a?_/S*a:0))))},us=function(t,e,n,r){var a;return Bm||Jp(),e in Br&&e!=="transform"&&(e=Br[e],~e.indexOf(",")&&(e=e.split(",")[0])),xs[e]&&e!=="transform"?(a=bu(t,r),a=e!=="transformOrigin"?a[e]:a.svg?a.origin:Yf(kr(t,Cr))+" "+a.zOrigin+"px"):(a=t.style[e],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=Xf[e]&&Xf[e](t,e,n)||kr(t,e)||zy(t,e)||(e==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?js(t,e,a,n)+n:a},CD=function(t,e,n,r){if(!n||n==="none"){var a=ul(e,t,1),u=a&&kr(t,a,1);u&&u!==n?(e=a,n=u):e==="borderColor"&&(n=kr(t,"borderTopColor"))}var l=new Ti(this._pt,t.style,e,0,1,pS),c=0,f=0,d,_,p,m,S,y,x,g,R,E,w,C;if(l.b=n,l.e=r,n+="",r+="",r==="auto"&&(t.style[e]=r,r=kr(t,e)||r,t.style[e]=n),d=[n,r],rS(d),n=d[0],r=d[1],p=n.match(Go)||[],C=r.match(Go)||[],C.length){for(;_=Go.exec(r);)x=_[0],R=r.substring(c,_.index),S?S=(S+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(S=1),x!==(y=p[f++]||"")&&(m=parseFloat(y)||0,w=y.substr((m+"").length),x.charAt(1)==="="&&(x=Ko(m,x)+w),g=parseFloat(x),E=x.substr((g+"").length),c=Go.lastIndex-E.length,E||(E=E||Gi.units[e]||w,c===r.length&&(r+=E,l.e+=E)),w!==E&&(m=js(t,e,y,E)||0),l._pt={_next:l._pt,p:R||f===1?R:",",s:m,c:g-m,m:S&&S<4||e==="zIndex"?Math.round:0});l.c=c<r.length?r.substring(c,r.length):""}else l.r=e==="display"&&r==="none"?vS:gS;return Iy.test(r)&&(l.e=0),this._pt=l,l},nv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PD=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=nv[n]||n,e[1]=nv[r]||r,e.join(" ")},LD=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,a=e.u,u=n._gsap,l,c,f;if(a==="all"||a===!0)r.cssText="",c=1;else for(a=a.split(","),f=a.length;--f>-1;)l=a[f],xs[l]&&(c=1,l=l==="transformOrigin"?Cr:un),Tu(n,l);c&&(Tu(n,un),u&&(u.svg&&n.removeAttribute("transform"),bu(n,1),u.uncache=1,xS(r)))}},Xf={clearProps:function(t,e,n,r,a){if(a.data!=="isFromStart"){var u=t._pt=new Ti(t._pt,e,n,0,0,LD);return u.u=r,u.pr=-10,u.tween=a,t._props.push(n),1}}},wu=[1,0,0,1,0,0],TS={},wS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},iv=function(t){var e=kr(t,un);return wS(e)?wu:e.substr(7).match(Dy).map(vn)},Hm=function(t,e){var n=t._gsap||Ra(t),r=t.style,a=iv(t),u,l,c,f;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,a=[c.a,c.b,c.c,c.d,c.e,c.f],a.join(",")==="1,0,0,1,0,0"?wu:a):(a===wu&&!t.offsetParent&&t!==Zo&&!n.svg&&(c=r.display,r.display="block",u=t.parentNode,(!u||!t.offsetParent)&&(f=1,l=t.nextElementSibling,Zo.appendChild(t)),a=iv(t),c?r.display=c:Tu(t,"display"),f&&(l?u.insertBefore(t,l):u?u.appendChild(t):Zo.removeChild(t))),e&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Qp=function(t,e,n,r,a,u){var l=t._gsap,c=a||Hm(t,!0),f=l.xOrigin||0,d=l.yOrigin||0,_=l.xOffset||0,p=l.yOffset||0,m=c[0],S=c[1],y=c[2],x=c[3],g=c[4],R=c[5],E=e.split(" "),w=parseFloat(E[0])||0,C=parseFloat(E[1])||0,U,b,k,T;n?c!==wu&&(b=m*x-S*y)&&(k=w*(x/b)+C*(-y/b)+(y*R-x*g)/b,T=w*(-S/b)+C*(m/b)-(m*R-S*g)/b,w=k,C=T):(U=MS(t),w=U.x+(~E[0].indexOf("%")?w/100*U.width:w),C=U.y+(~(E[1]||E[0]).indexOf("%")?C/100*U.height:C)),r||r!==!1&&l.smooth?(g=w-f,R=C-d,l.xOffset=_+(g*m+R*y)-g,l.yOffset=p+(g*S+R*x)-R):l.xOffset=l.yOffset=0,l.xOrigin=w,l.yOrigin=C,l.smooth=!!r,l.origin=e,l.originIsAbsolute=!!n,t.style[Cr]="0px 0px",u&&(ks(u,l,"xOrigin",f,w),ks(u,l,"yOrigin",d,C),ks(u,l,"xOffset",_,l.xOffset),ks(u,l,"yOffset",p,l.yOffset)),t.setAttribute("data-svg-origin",w+" "+C)},bu=function(t,e){var n=t._gsap||new lS(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,a=n.scaleX<0,u="px",l="deg",c=getComputedStyle(t),f=kr(t,Cr)||"0",d,_,p,m,S,y,x,g,R,E,w,C,U,b,k,T,L,Z,X,ut,z,K,st,$,lt,ct,N,V,rt,Lt,wt,bt;return d=_=p=y=x=g=R=E=w=0,m=S=1,n.svg=!!(t.getCTM&&ES(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[un]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[un]!=="none"?c[un]:"")),r.scale=r.rotate=r.translate="none"),b=Hm(t,n.svg),n.svg&&(n.uncache?(lt=t.getBBox(),f=n.xOrigin-lt.x+"px "+(n.yOrigin-lt.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),Qp(t,$||f,!!$||n.originIsAbsolute,n.smooth!==!1,b)),C=n.xOrigin||0,U=n.yOrigin||0,b!==wu&&(Z=b[0],X=b[1],ut=b[2],z=b[3],d=K=b[4],_=st=b[5],b.length===6?(m=Math.sqrt(Z*Z+X*X),S=Math.sqrt(z*z+ut*ut),y=Z||X?mo(X,Z)*va:0,R=ut||z?mo(ut,z)*va+y:0,R&&(S*=Math.abs(Math.cos(R*Jo))),n.svg&&(d-=C-(C*Z+U*ut),_-=U-(C*X+U*z))):(bt=b[6],Lt=b[7],N=b[8],V=b[9],rt=b[10],wt=b[11],d=b[12],_=b[13],p=b[14],k=mo(bt,rt),x=k*va,k&&(T=Math.cos(-k),L=Math.sin(-k),$=K*T+N*L,lt=st*T+V*L,ct=bt*T+rt*L,N=K*-L+N*T,V=st*-L+V*T,rt=bt*-L+rt*T,wt=Lt*-L+wt*T,K=$,st=lt,bt=ct),k=mo(-ut,rt),g=k*va,k&&(T=Math.cos(-k),L=Math.sin(-k),$=Z*T-N*L,lt=X*T-V*L,ct=ut*T-rt*L,wt=z*L+wt*T,Z=$,X=lt,ut=ct),k=mo(X,Z),y=k*va,k&&(T=Math.cos(k),L=Math.sin(k),$=Z*T+X*L,lt=K*T+st*L,X=X*T-Z*L,st=st*T-K*L,Z=$,K=lt),x&&Math.abs(x)+Math.abs(y)>359.9&&(x=y=0,g=180-g),m=vn(Math.sqrt(Z*Z+X*X+ut*ut)),S=vn(Math.sqrt(st*st+bt*bt)),k=mo(K,st),R=Math.abs(k)>2e-4?k*va:0,w=wt?1/(wt<0?-wt:wt):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!wS(kr(t,un)),$&&t.setAttribute("transform",$))),Math.abs(R)>90&&Math.abs(R)<270&&(a?(m*=-1,R+=y<=0?180:-180,y+=y<=0?180:-180):(S*=-1,R+=R<=0?180:-180)),e=e||n.uncache,n.x=d-((n.xPercent=d&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-d)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+u,n.y=_-((n.yPercent=_&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-_)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+u,n.z=p+u,n.scaleX=vn(m),n.scaleY=vn(S),n.rotation=vn(y)+l,n.rotationX=vn(x)+l,n.rotationY=vn(g)+l,n.skewX=R+l,n.skewY=E+l,n.transformPerspective=w+u,(n.zOrigin=parseFloat(f.split(" ")[2])||0)&&(r[Cr]=Yf(f)),n.xOffset=n.yOffset=0,n.force3D=Gi.force3D,n.renderTransform=n.svg?ID:SS?bS:DD,n.uncache=0,n},Yf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Vd=function(t,e,n){var r=Jn(e);return vn(parseFloat(e)+parseFloat(js(t,"x",n+"px",r)))+r},DD=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bS(t,e)},ha="0deg",Bl="0px",da=") ",bS=function(t,e){var n=e||this,r=n.xPercent,a=n.yPercent,u=n.x,l=n.y,c=n.z,f=n.rotation,d=n.rotationY,_=n.rotationX,p=n.skewX,m=n.skewY,S=n.scaleX,y=n.scaleY,x=n.transformPerspective,g=n.force3D,R=n.target,E=n.zOrigin,w="",C=g==="auto"&&t&&t!==1||g===!0;if(E&&(_!==ha||d!==ha)){var U=parseFloat(d)*Jo,b=Math.sin(U),k=Math.cos(U),T;U=parseFloat(_)*Jo,T=Math.cos(U),u=Vd(R,u,b*T*-E),l=Vd(R,l,-Math.sin(U)*-E),c=Vd(R,c,k*T*-E+E)}x!==Bl&&(w+="perspective("+x+da),(r||a)&&(w+="translate("+r+"%, "+a+"%) "),(C||u!==Bl||l!==Bl||c!==Bl)&&(w+=c!==Bl||C?"translate3d("+u+", "+l+", "+c+") ":"translate("+u+", "+l+da),f!==ha&&(w+="rotate("+f+da),d!==ha&&(w+="rotateY("+d+da),_!==ha&&(w+="rotateX("+_+da),(p!==ha||m!==ha)&&(w+="skew("+p+", "+m+da),(S!==1||y!==1)&&(w+="scale("+S+", "+y+da),R.style[un]=w||"translate(0, 0)"},ID=function(t,e){var n=e||this,r=n.xPercent,a=n.yPercent,u=n.x,l=n.y,c=n.rotation,f=n.skewX,d=n.skewY,_=n.scaleX,p=n.scaleY,m=n.target,S=n.xOrigin,y=n.yOrigin,x=n.xOffset,g=n.yOffset,R=n.forceCSS,E=parseFloat(u),w=parseFloat(l),C,U,b,k,T;c=parseFloat(c),f=parseFloat(f),d=parseFloat(d),d&&(d=parseFloat(d),f+=d,c+=d),c||f?(c*=Jo,f*=Jo,C=Math.cos(c)*_,U=Math.sin(c)*_,b=Math.sin(c-f)*-p,k=Math.cos(c-f)*p,f&&(d*=Jo,T=Math.tan(f-d),T=Math.sqrt(1+T*T),b*=T,k*=T,d&&(T=Math.tan(d),T=Math.sqrt(1+T*T),C*=T,U*=T)),C=vn(C),U=vn(U),b=vn(b),k=vn(k)):(C=_,k=p,U=b=0),(E&&!~(u+"").indexOf("px")||w&&!~(l+"").indexOf("px"))&&(E=js(m,"x",u,"px"),w=js(m,"y",l,"px")),(S||y||x||g)&&(E=vn(E+S-(S*C+y*b)+x),w=vn(w+y-(S*U+y*k)+g)),(r||a)&&(T=m.getBBox(),E=vn(E+r/100*T.width),w=vn(w+a/100*T.height)),T="matrix("+C+","+U+","+b+","+k+","+E+","+w+")",m.setAttribute("transform",T),R&&(m.style[un]=T)},UD=function(t,e,n,r,a){var u=360,l=On(a),c=parseFloat(a)*(l&&~a.indexOf("rad")?va:1),f=c-r,d=r+f+"deg",_,p;return l&&(_=a.split("_")[1],_==="short"&&(f%=u,f!==f%(u/2)&&(f+=f<0?u:-u)),_==="cw"&&f<0?f=(f+u*Q0)%u-~~(f/u)*u:_==="ccw"&&f>0&&(f=(f-u*Q0)%u-~~(f/u)*u)),t._pt=p=new Ti(t._pt,e,n,r,f,gD),p.e=d,p.u="deg",t._props.push(n),p},rv=function(t,e){for(var n in e)t[n]=e[n];return t},ND=function(t,e,n){var r=rv({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,l,c,f,d,_,p,m,S;r.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),u[un]=e,l=bu(n,1),Tu(n,un),n.setAttribute("transform",f)):(f=getComputedStyle(n)[un],u[un]=e,l=bu(n,1),u[un]=f);for(c in xs)f=r[c],d=l[c],f!==d&&a.indexOf(c)<0&&(m=Jn(f),S=Jn(d),_=m!==S?js(n,c,f,S):parseFloat(f),p=parseFloat(d),t._pt=new Ti(t._pt,l,c,_,p-_,Kp),t._pt.u=S||0,t._props.push(c));rv(l,r)};Ei("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",a="Left",u=(t<3?[e,n,r,a]:[e+a,e+n,r+n,r+a]).map(function(l){return t<2?i+l:"border"+l+i});Xf[t>1?"border"+i:i]=function(l,c,f,d,_){var p,m;if(arguments.length<4)return p=u.map(function(S){return us(l,S,f)}),m=p.join(" "),m.split(p[0]).length===5?p[0]:m;p=(d+"").split(" "),m={},u.forEach(function(S,y){return m[S]=p[y]=p[y]||p[(y-1)/2|0]}),l.init(c,m,_)}});var AS={name:"css",register:Jp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,a){var u=this._props,l=t.style,c=n.vars.startAt,f,d,_,p,m,S,y,x,g,R,E,w,C,U,b,k;Bm||Jp(),this.styles=this.styles||yS(t),k=this.styles.props,this.tween=n;for(y in e)if(y!=="autoRound"&&(d=e[y],!(zi[y]&&uS(y,e,n,r,t,a)))){if(m=typeof d,S=Xf[y],m==="function"&&(d=d.call(n,r,t,a),m=typeof d),m==="string"&&~d.indexOf("random(")&&(d=Su(d)),S)S(this,t,y,d,n)&&(b=1);else if(y.substr(0,2)==="--")f=(getComputedStyle(t).getPropertyValue(y)+"").trim(),d+="",qs.lastIndex=0,qs.test(f)||(x=Jn(f),g=Jn(d)),g?x!==g&&(f=js(t,y,f,g)+g):x&&(d+=x),this.add(l,"setProperty",f,d,r,a,0,0,y),u.push(y),k.push(y,0,l[y]);else if(m!=="undefined"){if(c&&y in c?(f=typeof c[y]=="function"?c[y].call(n,r,t,a):c[y],On(f)&&~f.indexOf("random(")&&(f=Su(f)),Jn(f+"")||(f+=Gi.units[y]||Jn(us(t,y))||""),(f+"").charAt(1)==="="&&(f=us(t,y))):f=us(t,y),p=parseFloat(f),R=m==="string"&&d.charAt(1)==="="&&d.substr(0,2),R&&(d=d.substr(2)),_=parseFloat(d),y in Br&&(y==="autoAlpha"&&(p===1&&us(t,"visibility")==="hidden"&&_&&(p=0),k.push("visibility",0,l.visibility),ks(this,l,"visibility",p?"inherit":"hidden",_?"inherit":"hidden",!_)),y!=="scale"&&y!=="transform"&&(y=Br[y],~y.indexOf(",")&&(y=y.split(",")[0]))),E=y in xs,E){if(this.styles.save(y),w||(C=t._gsap,C.renderTransform&&!e.parseTransform||bu(t,e.parseTransform),U=e.smoothOrigin!==!1&&C.smooth,w=this._pt=new Ti(this._pt,l,un,0,1,C.renderTransform,C,0,-1),w.dep=1),y==="scale")this._pt=new Ti(this._pt,C,"scaleY",C.scaleY,(R?Ko(C.scaleY,R+_):_)-C.scaleY||0,Kp),this._pt.u=0,u.push("scaleY",y),y+="X";else if(y==="transformOrigin"){k.push(Cr,0,l[Cr]),d=PD(d),C.svg?Qp(t,d,0,U,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==C.zOrigin&&ks(this,C,"zOrigin",C.zOrigin,g),ks(this,l,y,Yf(f),Yf(d)));continue}else if(y==="svgOrigin"){Qp(t,d,1,U,0,this);continue}else if(y in TS){UD(this,C,y,p,R?Ko(p,R+d):d);continue}else if(y==="smoothOrigin"){ks(this,C,"smooth",C.smooth,d);continue}else if(y==="force3D"){C[y]=d;continue}else if(y==="transform"){ND(this,d,t);continue}}else y in l||(y=ul(y)||y);if(E||(_||_===0)&&(p||p===0)&&!_D.test(d)&&y in l)x=(f+"").substr((p+"").length),_||(_=0),g=Jn(d)||(y in Gi.units?Gi.units[y]:x),x!==g&&(p=js(t,y,f,g)),this._pt=new Ti(this._pt,E?C:l,y,p,(R?Ko(p,R+_):_)-p,!E&&(g==="px"||y==="zIndex")&&e.autoRound!==!1?xD:Kp),this._pt.u=g||0,x!==g&&g!=="%"&&(this._pt.b=f,this._pt.r=vD);else if(y in l)CD.call(this,t,y,f,R?R+d:d);else if(y in t)this.add(t,y,f||t[y],R?R+d:d,r,a);else if(y!=="parseTransform"){Cm(y,d);continue}E||(y in l?k.push(y,0,l[y]):k.push(y,1,f||t[y])),u.push(y)}}b&&mS(this)},render:function(t,e){if(e.tween._time||!zm())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:us,aliases:Br,getSetter:function(t,e,n){var r=Br[e];return r&&r.indexOf(",")<0&&(e=r),e in xs&&e!==Cr&&(t._gsap.x||us(t,"x"))?n&&J0===n?e==="scale"?ED:MD:(J0=n||{})&&(e==="scale"?TD:wD):t.style&&!bm(t.style[e])?yD:~e.indexOf("-")?SD:Om(t,e)},core:{_removeProperty:Tu,_getMatrix:Hm}};bi.utils.checkPrefix=ul;bi.core.getStyleSaver=yS;(function(i,t,e,n){var r=Ei(i+","+t+","+e,function(a){xs[a]=1});Ei(t,function(a){Gi.units[a]="deg",TS[a]=1}),Br[r[13]]=i+","+t,Ei(n,function(a){var u=a.split(":");Br[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ei("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Gi.units[i]="px"});bi.registerPlugin(AS);var Sf=bi.registerPlugin(AS)||bi;Sf.core.Tween;function sv(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function OD(i,t,e){return t&&sv(i.prototype,t),e&&sv(i,e),i}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn,jp,Hi,Hs,Gs,Qo,RS,xa,ru,CS,hs,Mr,PS,LS=function(){return Vn||typeof window<"u"&&(Vn=window.gsap)&&Vn.registerPlugin&&Vn},DS=1,Wo=[],Pe=[],Hr=[],su=Date.now,tm=function(t,e){return e},FD=function(){var t=ru.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,Pe),r.push.apply(r,Hr),Pe=n,Hr=r,tm=function(u,l){return e[u](l)}},$s=function(t,e){return~Hr.indexOf(t)&&Hr[Hr.indexOf(t)+1][e]},au=function(t){return!!~CS.indexOf(t)},ai=function(t,e,n,r,a){return t.addEventListener(e,n,{passive:!r,capture:!!a})},si=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Ac="scrollLeft",Rc="scrollTop",em=function(){return hs&&hs.isPressed||Pe.cache++},qf=function(t,e){var n=function r(a){if(a||a===0){DS&&(Hi.history.scrollRestoration="manual");var u=hs&&hs.isPressed;a=r.v=Math.round(a)||(hs&&hs.iOS?1:0),t(a),r.cacheID=Pe.cache,u&&tm("ss",a)}else(e||Pe.cache!==r.cacheID||tm("ref"))&&(r.cacheID=Pe.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},di={s:Ac,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qf(function(i){return arguments.length?Hi.scrollTo(i,bn.sc()):Hi.pageXOffset||Hs[Ac]||Gs[Ac]||Qo[Ac]||0})},bn={s:Rc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:di,sc:qf(function(i){return arguments.length?Hi.scrollTo(di.sc(),i):Hi.pageYOffset||Hs[Rc]||Gs[Rc]||Qo[Rc]||0})},xi=function(t,e){return(e&&e._ctx&&e._ctx.selector||Vn.utils.toArray)(t)[0]||(typeof t=="string"&&Vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ta=function(t,e){var n=e.s,r=e.sc;au(t)&&(t=Hs.scrollingElement||Gs);var a=Pe.indexOf(t),u=r===bn.sc?1:2;!~a&&(a=Pe.push(t)-1),Pe[a+u]||ai(t,"scroll",em);var l=Pe[a+u],c=l||(Pe[a+u]=qf($s(t,n),!0)||(au(t)?r:qf(function(f){return arguments.length?t[n]=f:t[n]})));return c.target=t,l||(c.smooth=Vn.getProperty(t,"scrollBehavior")==="smooth"),c},nm=function(t,e,n){var r=t,a=t,u=su(),l=u,c=e||50,f=Math.max(500,c*3),d=function(S,y){var x=su();y||x-u>c?(a=r,r=S,l=u,u=x):n?r+=S:r=a+(S-a)/(x-l)*(u-l)},_=function(){a=r=n?0:r,l=u=0},p=function(S){var y=l,x=a,g=su();return(S||S===0)&&S!==r&&d(S),u===l||g-l>f?0:(r+(n?x:-x))/((n?g:u)-y)*1e3};return{update:d,reset:_,getVelocity:p}},zl=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},av=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},IS=function(){ru=Vn.core.globals().ScrollTrigger,ru&&ru.core&&FD()},US=function(t){return Vn=t||LS(),Vn&&typeof document<"u"&&document.body&&(Hi=window,Hs=document,Gs=Hs.documentElement,Qo=Hs.body,CS=[Hi,Hs,Gs,Qo],Vn.utils.clamp,PS=Vn.core.context||function(){},xa="onpointerenter"in Qo?"pointer":"mouse",RS=En.isTouch=Hi.matchMedia&&Hi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mr=En.eventTypes=("ontouchstart"in Gs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return DS=0},500),IS(),jp=1),jp};di.op=bn;Pe.cache=0;var En=function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){jp||US(Vn)||console.warn("Please gsap.registerPlugin(Observer)"),ru||IS();var r=n.tolerance,a=n.dragMinimum,u=n.type,l=n.target,c=n.lineHeight,f=n.debounce,d=n.preventDefault,_=n.onStop,p=n.onStopDelay,m=n.ignore,S=n.wheelSpeed,y=n.event,x=n.onDragStart,g=n.onDragEnd,R=n.onDrag,E=n.onPress,w=n.onRelease,C=n.onRight,U=n.onLeft,b=n.onUp,k=n.onDown,T=n.onChangeX,L=n.onChangeY,Z=n.onChange,X=n.onToggleX,ut=n.onToggleY,z=n.onHover,K=n.onHoverEnd,st=n.onMove,$=n.ignoreCheck,lt=n.isNormalizer,ct=n.onGestureStart,N=n.onGestureEnd,V=n.onWheel,rt=n.onEnable,Lt=n.onDisable,wt=n.onClick,bt=n.scrollSpeed,Bt=n.capture,Jt=n.allowClicks,zt=n.lockAxis,Xt=n.onLockAxis;this.target=l=xi(l)||Gs,this.vars=n,m&&(m=Vn.utils.toArray(m)),r=r||1e-9,a=a||0,S=S||1,bt=bt||1,u=u||"wheel,touch,pointer",f=f!==!1,c||(c=parseFloat(Hi.getComputedStyle(Qo).lineHeight)||22);var De,Qt,j,oe,At,Gt,Kt,Q=this,ee=0,re=0,he=ta(l,di),ae=ta(l,bn),Fe=he(),O=ae(),P=~u.indexOf("touch")&&!~u.indexOf("pointer")&&Mr[0]==="pointerdown",J=au(l),_t=l.ownerDocument||Hs,mt=[0,0,0],vt=[0,0,0],Ot=0,Mt=function(){return Ot=su()},Rt=function(Nt,_e){return(Q.event=Nt)&&m&&~m.indexOf(Nt.target)||_e&&P&&Nt.pointerType!=="touch"||$&&$(Nt,_e)},B=function(){Q._vx.reset(),Q._vy.reset(),Qt.pause(),_&&_(Q)},St=function(){var Nt=Q.deltaX=av(mt),_e=Q.deltaY=av(vt),le=Math.abs(Nt)>=r,Pt=Math.abs(_e)>=r;Z&&(le||Pt)&&Z(Q,Nt,_e,mt,vt),le&&(C&&Q.deltaX>0&&C(Q),U&&Q.deltaX<0&&U(Q),T&&T(Q),X&&Q.deltaX<0!=ee<0&&X(Q),ee=Q.deltaX,mt[0]=mt[1]=mt[2]=0),Pt&&(k&&Q.deltaY>0&&k(Q),b&&Q.deltaY<0&&b(Q),L&&L(Q),ut&&Q.deltaY<0!=re<0&&ut(Q),re=Q.deltaY,vt[0]=vt[1]=vt[2]=0),(oe||j)&&(st&&st(Q),j&&(R(Q),j=!1),oe=!1),Gt&&!(Gt=!1)&&Xt&&Xt(Q),At&&(V(Q),At=!1),De=0},ht=function(Nt,_e,le){mt[le]+=Nt,vt[le]+=_e,Q._vx.update(Nt),Q._vy.update(_e),f?De||(De=requestAnimationFrame(St)):St()},te=function(Nt,_e){zt&&!Kt&&(Q.axis=Kt=Math.abs(Nt)>Math.abs(_e)?"x":"y",Gt=!0),Kt!=="y"&&(mt[2]+=Nt,Q._vx.update(Nt,!0)),Kt!=="x"&&(vt[2]+=_e,Q._vy.update(_e,!0)),f?De||(De=requestAnimationFrame(St)):St()},kt=function(Nt){if(!Rt(Nt,1)){Nt=zl(Nt,d);var _e=Nt.clientX,le=Nt.clientY,Pt=_e-Q.x,de=le-Q.y,se=Q.isDragging;Q.x=_e,Q.y=le,(se||Math.abs(Q.startX-_e)>=a||Math.abs(Q.startY-le)>=a)&&(R&&(j=!0),se||(Q.isDragging=!0),te(Pt,de),se||x&&x(Q))}},qt=Q.onPress=function(Dt){Rt(Dt,1)||Dt&&Dt.button||(Q.axis=Kt=null,Qt.pause(),Q.isPressed=!0,Dt=zl(Dt),ee=re=0,Q.startX=Q.x=Dt.clientX,Q.startY=Q.y=Dt.clientY,Q._vx.reset(),Q._vy.reset(),ai(lt?l:_t,Mr[1],kt,d,!0),Q.deltaX=Q.deltaY=0,E&&E(Q))},Ft=Q.onRelease=function(Dt){if(!Rt(Dt,1)){si(lt?l:_t,Mr[1],kt,!0);var Nt=!isNaN(Q.y-Q.startY),_e=Q.isDragging&&(Math.abs(Q.x-Q.startX)>3||Math.abs(Q.y-Q.startY)>3),le=zl(Dt);!_e&&Nt&&(Q._vx.reset(),Q._vy.reset(),d&&Jt&&Vn.delayedCall(.08,function(){if(su()-Ot>300&&!Dt.defaultPrevented){if(Dt.target.click)Dt.target.click();else if(_t.createEvent){var Pt=_t.createEvent("MouseEvents");Pt.initMouseEvent("click",!0,!0,Hi,1,le.screenX,le.screenY,le.clientX,le.clientY,!1,!1,!1,!1,0,null),Dt.target.dispatchEvent(Pt)}}})),Q.isDragging=Q.isGesturing=Q.isPressed=!1,_&&!lt&&Qt.restart(!0),g&&_e&&g(Q),w&&w(Q,_e)}},yt=function(Nt){return Nt.touches&&Nt.touches.length>1&&(Q.isGesturing=!0)&&ct(Nt,Q.isDragging)},me=function(){return(Q.isGesturing=!1)||N(Q)},G=function(Nt){if(!Rt(Nt)){var _e=he(),le=ae();ht((_e-Fe)*bt,(le-O)*bt,1),Fe=_e,O=le,_&&Qt.restart(!0)}},Et=function(Nt){if(!Rt(Nt)){Nt=zl(Nt,d),V&&(At=!0);var _e=(Nt.deltaMode===1?c:Nt.deltaMode===2?Hi.innerHeight:1)*S;ht(Nt.deltaX*_e,Nt.deltaY*_e,0),_&&!lt&&Qt.restart(!0)}},gt=function(Nt){if(!Rt(Nt)){var _e=Nt.clientX,le=Nt.clientY,Pt=_e-Q.x,de=le-Q.y;Q.x=_e,Q.y=le,oe=!0,(Pt||de)&&te(Pt,de)}},ot=function(Nt){Q.event=Nt,z(Q)},Tt=function(Nt){Q.event=Nt,K(Q)},Yt=function(Nt){return Rt(Nt)||zl(Nt,d)&&wt(Q)};Qt=Q._dc=Vn.delayedCall(p||.25,B).pause(),Q.deltaX=Q.deltaY=0,Q._vx=nm(0,50,!0),Q._vy=nm(0,50,!0),Q.scrollX=he,Q.scrollY=ae,Q.isDragging=Q.isGesturing=Q.isPressed=!1,PS(this),Q.enable=function(Dt){return Q.isEnabled||(ai(J?_t:l,"scroll",em),u.indexOf("scroll")>=0&&ai(J?_t:l,"scroll",G,d,Bt),u.indexOf("wheel")>=0&&ai(l,"wheel",Et,d,Bt),(u.indexOf("touch")>=0&&RS||u.indexOf("pointer")>=0)&&(ai(l,Mr[0],qt,d,Bt),ai(_t,Mr[2],Ft),ai(_t,Mr[3],Ft),Jt&&ai(l,"click",Mt,!1,!0),wt&&ai(l,"click",Yt),ct&&ai(_t,"gesturestart",yt),N&&ai(_t,"gestureend",me),z&&ai(l,xa+"enter",ot),K&&ai(l,xa+"leave",Tt),st&&ai(l,xa+"move",gt)),Q.isEnabled=!0,Dt&&Dt.type&&qt(Dt),rt&&rt(Q)),Q},Q.disable=function(){Q.isEnabled&&(Wo.filter(function(Dt){return Dt!==Q&&au(Dt.target)}).length||si(J?_t:l,"scroll",em),Q.isPressed&&(Q._vx.reset(),Q._vy.reset(),si(lt?l:_t,Mr[1],kt,!0)),si(J?_t:l,"scroll",G,Bt),si(l,"wheel",Et,Bt),si(l,Mr[0],qt,Bt),si(_t,Mr[2],Ft),si(_t,Mr[3],Ft),si(l,"click",Mt,!0),si(l,"click",Yt),si(_t,"gesturestart",yt),si(_t,"gestureend",me),si(l,xa+"enter",ot),si(l,xa+"leave",Tt),si(l,xa+"move",gt),Q.isEnabled=Q.isPressed=Q.isDragging=!1,Lt&&Lt(Q))},Q.kill=Q.revert=function(){Q.disable();var Dt=Wo.indexOf(Q);Dt>=0&&Wo.splice(Dt,1),hs===Q&&(hs=0)},Wo.push(Q),lt&&au(l)&&(hs=Q),Q.enable(y)},OD(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();En.version="3.12.2";En.create=function(i){return new En(i)};En.register=US;En.getAll=function(){return Wo.slice()};En.getById=function(i){return Wo.filter(function(t){return t.vars.id===i})[0]};LS()&&Vn.registerPlugin(En);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $t,zo,Ne,on,Er,nn,NS,$f,Kf,Xo,Mf,Cc,Kn,ph,im,ui,ov,lv,ko,OS,Wd,FS,Ni,BS,zS,kS,Ns,rm,Gm,jo,Vm,Xd,Pc=1,fi=Date.now,Yd=fi(),dr=0,Zl=0,uv=function(t,e,n){var r=Bi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},cv=function(t,e){return e&&(!Bi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},BD=function i(){return Zl&&requestAnimationFrame(i)},fv=function(){return ph=1},hv=function(){return ph=0},Nr=function(t){return t},Jl=function(t){return Math.round(t*1e5)/1e5||0},HS=function(){return typeof window<"u"},GS=function(){return $t||HS()&&($t=window.gsap)&&$t.registerPlugin&&$t},Ha=function(t){return!!~NS.indexOf(t)},VS=function(t){return(t==="Height"?Vm:Ne["inner"+t])||Er["client"+t]||nn["client"+t]},WS=function(t){return $s(t,"getBoundingClientRect")||(Ha(t)?function(){return Rf.width=Ne.innerWidth,Rf.height=Vm,Rf}:function(){return cs(t)})},zD=function(t,e,n){var r=n.d,a=n.d2,u=n.a;return(u=$s(t,"getBoundingClientRect"))?function(){return u()[r]}:function(){return(e?VS(a):t["client"+a])||0}},kD=function(t,e){return!e||~Hr.indexOf(t)?WS(t):function(){return Rf}},ds=function(t,e){var n=e.s,r=e.d2,a=e.d,u=e.a;return Math.max(0,(n="scroll"+r)&&(u=$s(t,n))?u()-WS(t)()[a]:Ha(t)?(Er[n]||nn[n])-VS(r):t[n]-t["offset"+r])},Lc=function(t,e){for(var n=0;n<ko.length;n+=3)(!e||~e.indexOf(ko[n+1]))&&t(ko[n],ko[n+1],ko[n+2])},Bi=function(t){return typeof t=="string"},pi=function(t){return typeof t=="function"},Ef=function(t){return typeof t=="number"},ya=function(t){return typeof t=="object"},kl=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},qd=function(t,e){if(t.enabled){var n=e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},_o=Math.abs,XS="left",YS="top",Wm="right",Xm="bottom",Da="width",Ia="height",ou="Right",lu="Left",uu="Top",cu="Bottom",Sn="padding",sr="margin",cl="Width",Ym="Height",kn="px",ar=function(t){return Ne.getComputedStyle(t)},HD=function(t){var e=ar(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},dv=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},cs=function(t,e){var n=e&&ar(t)[im]!=="matrix(1, 0, 0, 1, 0, 0)"&&$t.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},sm=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},qS=function(t){var e=[],n=t.labels,r=t.duration(),a;for(a in n)e.push(n[a]/r);return e},GD=function(t){return function(e){return $t.utils.snap(qS(t),e)}},qm=function(t){var e=$t.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,a){return r-a});return n?function(r,a,u){u===void 0&&(u=.001);var l;if(!a)return e(r);if(a>0){for(r-=u,l=0;l<n.length;l++)if(n[l]>=r)return n[l];return n[l-1]}else for(l=n.length,r+=u;l--;)if(n[l]<=r)return n[l];return n[0]}:function(r,a,u){u===void 0&&(u=.001);var l=e(r);return!a||Math.abs(l-r)<u||l-r<0==a<0?l:e(a<0?r-t:r+t)}},VD=function(t){return function(e,n){return qm(qS(t))(e,n.direction)}},Dc=function(t,e,n,r){return n.split(",").forEach(function(a){return t(e,a,r)})},Un=function(t,e,n,r,a){return t.addEventListener(e,n,{passive:!r,capture:!!a})},In=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Ic=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},pv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Uc={toggleActions:"play",anticipatePin:0},Zf={top:0,left:0,center:.5,bottom:1,right:1},Tf=function(t,e){if(Bi(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in Zf?Zf[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Nc=function(t,e,n,r,a,u,l,c){var f=a.startColor,d=a.endColor,_=a.fontSize,p=a.indent,m=a.fontWeight,S=on.createElement("div"),y=Ha(n)||$s(n,"pinType")==="fixed",x=t.indexOf("scroller")!==-1,g=y?nn:n,R=t.indexOf("start")!==-1,E=R?f:d,w="border-color:"+E+";font-size:"+_+";color:"+E+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((x||c)&&y?"fixed;":"absolute;"),(x||c||!y)&&(w+=(r===bn?Wm:Xm)+":"+(u+parseFloat(p))+"px;"),l&&(w+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),S._isStart=R,S.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),S.style.cssText=w,S.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(S,g.children[0]):g.appendChild(S),S._offset=S["offset"+r.op.d2],wf(S,0,r,R),S},wf=function(t,e,n,r){var a={display:"block"},u=n[r?"os2":"p2"],l=n[r?"p2":"os2"];t._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+u+cl]=1,a["border"+l+cl]=0,a[n.p]=e+"px",$t.set(t,a)},Ae=[],am={},Au,mv=function(){return fi()-dr>34&&(Au||(Au=requestAnimationFrame(_s)))},go=function(){(!Ni||!Ni.isPressed||Ni.startX>nn.clientWidth)&&(Pe.cache++,Ni?Au||(Au=requestAnimationFrame(_s)):_s(),dr||Va("scrollStart"),dr=fi())},$d=function(){kS=Ne.innerWidth,zS=Ne.innerHeight},Ql=function(){Pe.cache++,!Kn&&!FS&&!on.fullscreenElement&&!on.webkitFullscreenElement&&(!BS||kS!==Ne.innerWidth||Math.abs(Ne.innerHeight-zS)>Ne.innerHeight*.25)&&$f.restart(!0)},Ga={},WD=[],$S=function i(){return In(Le,"scrollEnd",i)||ba(!0)},Va=function(t){return Ga[t]&&Ga[t].map(function(e){return e()})||WD},Oi=[],KS=function(t){for(var e=0;e<Oi.length;e+=5)(!t||Oi[e+4]&&Oi[e+4].query===t)&&(Oi[e].style.cssText=Oi[e+1],Oi[e].getBBox&&Oi[e].setAttribute("transform",Oi[e+2]||""),Oi[e+3].uncache=1)},$m=function(t,e){var n;for(ui=0;ui<Ae.length;ui++)n=Ae[ui],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));e&&KS(e),e||Va("revert")},ZS=function(t,e){Pe.cache++,(e||!ci)&&Pe.forEach(function(n){return pi(n)&&n.cacheID++&&(n.rec=0)}),Bi(t)&&(Ne.history.scrollRestoration=Gm=t)},ci,Ua=0,_v,XD=function(){if(_v!==Ua){var t=_v=Ua;requestAnimationFrame(function(){return t===Ua&&ba(!0)})}},JS=function(){nn.appendChild(jo),Vm=jo.offsetHeight||Ne.innerHeight,nn.removeChild(jo)},ba=function(t,e){if(dr&&!t){Un(Le,"scrollEnd",$S);return}JS(),ci=Le.isRefreshing=!0,Pe.forEach(function(r){return pi(r)&&++r.cacheID&&(r.rec=r())});var n=Va("refreshInit");OS&&Le.sort(),e||$m(),Pe.forEach(function(r){pi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Ae.slice(0).forEach(function(r){return r.refresh()}),Ae.forEach(function(r,a){if(r._subPinOffset&&r.pin){var u=r.vars.horizontal?"offsetWidth":"offsetHeight",l=r.pin[u];r.revert(!0,1),r.adjustPinSpacing(r.pin[u]-l),r.refresh()}}),Ae.forEach(function(r){var a=ds(r.scroller,r._dir);(r.vars.end==="max"||r._endClamp&&r.end>a)&&r.setPositions(r.start,Math.max(r.start+1,a),!0)}),n.forEach(function(r){return r&&r.render&&r.render(-1)}),Pe.forEach(function(r){pi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),ZS(Gm,1),$f.pause(),Ua++,ci=2,_s(2),Ae.forEach(function(r){return pi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ci=Le.isRefreshing=!1,Va("refresh")},om=0,bf=1,fu,_s=function(t){if(!ci||t===2){Le.isUpdating=!0,fu&&fu.update(0);var e=Ae.length,n=fi(),r=n-Yd>=50,a=e&&Ae[0].scroll();if(bf=om>a?-1:1,ci||(om=a),r&&(dr&&!ph&&n-dr>200&&(dr=0,Va("scrollEnd")),Mf=Yd,Yd=n),bf<0){for(ui=e;ui-- >0;)Ae[ui]&&Ae[ui].update(0,r);bf=1}else for(ui=0;ui<e;ui++)Ae[ui]&&Ae[ui].update(0,r);Le.isUpdating=!1}Au=0},lm=[XS,YS,Xm,Wm,sr+cu,sr+ou,sr+uu,sr+lu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Af=lm.concat([Da,Ia,"boxSizing","max"+cl,"max"+Ym,"position",sr,Sn,Sn+uu,Sn+ou,Sn+cu,Sn+lu]),YD=function(t,e,n){tl(n);var r=t._gsap;if(r.spacerIsNative)tl(r.spacerState);else if(t._gsap.swappedIn){var a=e.parentNode;a&&(a.insertBefore(t,e),a.removeChild(e))}t._gsap.swappedIn=!1},Kd=function(t,e,n,r){if(!t._gsap.swappedIn){for(var a=lm.length,u=e.style,l=t.style,c;a--;)c=lm[a],u[c]=n[c];u.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(u.display="inline-block"),l[Xm]=l[Wm]="auto",u.flexBasis=n.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[Da]=sm(t,di)+kn,u[Ia]=sm(t,bn)+kn,u[Sn]=l[sr]=l[YS]=l[XS]="0",tl(r),l[Da]=l["max"+cl]=n[Da],l[Ia]=l["max"+Ym]=n[Ia],l[Sn]=n[Sn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},qD=/([A-Z])/g,tl=function(t){if(t){var e=t.t.style,n=t.length,r=0,a,u;for((t.t._gsap||$t.core.getCache(t.t)).uncache=1;r<n;r+=2)u=t[r+1],a=t[r],u?e[a]=u:e[a]&&e.removeProperty(a.replace(qD,"-$1").toLowerCase())}},Oc=function(t){for(var e=Af.length,n=t.style,r=[],a=0;a<e;a++)r.push(Af[a],n[Af[a]]);return r.t=t,r},$D=function(t,e,n){for(var r=[],a=t.length,u=n?8:0,l;u<a;u+=2)l=t[u],r.push(l,l in e?e[l]:t[u+1]);return r.t=t.t,r},Rf={left:0,top:0},gv=function(t,e,n,r,a,u,l,c,f,d,_,p,m,S){pi(t)&&(t=t(c)),Bi(t)&&t.substr(0,3)==="max"&&(t=p+(t.charAt(4)==="="?Tf("0"+t.substr(3),n):0));var y=m?m.time():0,x,g,R;if(m&&m.seek(0),isNaN(t)||(t=+t),Ef(t))m&&(t=$t.utils.mapRange(m.scrollTrigger.start,m.scrollTrigger.end,0,p,t)),l&&wf(l,n,r,!0);else{pi(e)&&(e=e(c));var E=(t||"0").split(" "),w,C,U,b;R=xi(e,c)||nn,w=cs(R)||{},(!w||!w.left&&!w.top)&&ar(R).display==="none"&&(b=R.style.display,R.style.display="block",w=cs(R),b?R.style.display=b:R.style.removeProperty("display")),C=Tf(E[0],w[r.d]),U=Tf(E[1]||"0",n),t=w[r.p]-f[r.p]-d+C+a-U,l&&wf(l,U,r,n-U<20||l._isStart&&U>20),n-=n-U}if(S&&(c[S]=t||-.001,t<0&&(t=0)),u){var k=t+n,T=u._isStart;x="scroll"+r.d2,wf(u,k,r,T&&k>20||!T&&(_?Math.max(nn[x],Er[x]):u.parentNode[x])<=k+1),_&&(f=cs(l),_&&(u.style[r.op.p]=f[r.op.p]-r.op.m-u._offset+kn))}return m&&R&&(x=cs(R),m.seek(p),g=cs(R),m._caScrollDist=x[r.p]-g[r.p],t=t/m._caScrollDist*p),m&&m.seek(y),m?t:Math.round(t)},KD=/(webkit|moz|length|cssText|inset)/i,vv=function(t,e,n,r){if(t.parentNode!==e){var a=t.style,u,l;if(e===nn){t._stOrig=a.cssText,l=ar(t);for(u in l)!+u&&!KD.test(u)&&l[u]&&typeof a[u]=="string"&&u!=="0"&&(a[u]=l[u]);a.top=n,a.left=r}else a.cssText=t._stOrig;$t.core.getCache(t).uncache=1,e.appendChild(t)}},QS=function(t,e,n){var r=e,a=r;return function(u){var l=Math.round(t());return l!==r&&l!==a&&Math.abs(l-r)>3&&Math.abs(l-a)>3&&(u=l,n&&n()),a=r,r=u,u}},Fc=function(t,e,n){var r={};r[e.p]="+="+n,$t.set(t,r)},xv=function(t,e){var n=ta(t,e),r="_scroll"+e.p2,a=function u(l,c,f,d,_){var p=u.tween,m=c.onComplete,S={};f=f||n();var y=QS(n,f,function(){p.kill(),u.tween=0});return _=d&&_||0,d=d||l-f,p&&p.kill(),c[r]=l,c.modifiers=S,S[r]=function(){return y(f+d*p.ratio+_*p.ratio*p.ratio)},c.onUpdate=function(){Pe.cache++,_s()},c.onComplete=function(){u.tween=0,m&&m.call(p)},p=u.tween=$t.to(t,c),p};return t[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Un(t,"wheel",n.wheelHandler),Le.isTouch&&Un(t,"touchmove",n.wheelHandler),a},Le=function(){function i(e,n){zo||i.register($t)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),rm(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Zl){this.update=this.refresh=this.kill=Nr;return}n=dv(Bi(n)||Ef(n)||n.nodeType?{trigger:n}:n,Uc);var a=n,u=a.onUpdate,l=a.toggleClass,c=a.id,f=a.onToggle,d=a.onRefresh,_=a.scrub,p=a.trigger,m=a.pin,S=a.pinSpacing,y=a.invalidateOnRefresh,x=a.anticipatePin,g=a.onScrubComplete,R=a.onSnapComplete,E=a.once,w=a.snap,C=a.pinReparent,U=a.pinSpacer,b=a.containerAnimation,k=a.fastScrollEnd,T=a.preventOverlaps,L=n.horizontal||n.containerAnimation&&n.horizontal!==!1?di:bn,Z=!_&&_!==0,X=xi(n.scroller||Ne),ut=$t.core.getCache(X),z=Ha(X),K=("pinType"in n?n.pinType:$s(X,"pinType")||z&&"fixed")==="fixed",st=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=Z&&n.toggleActions.split(" "),lt="markers"in n?n.markers:Uc.markers,ct=z?0:parseFloat(ar(X)["border"+L.p2+cl])||0,N=this,V=n.onRefreshInit&&function(){return n.onRefreshInit(N)},rt=zD(X,z,L),Lt=kD(X,z),wt=0,bt=0,Bt=0,Jt=ta(X,L),zt,Xt,De,Qt,j,oe,At,Gt,Kt,Q,ee,re,he,ae,Fe,O,P,J,_t,mt,vt,Ot,Mt,Rt,B,St,ht,te,kt,qt,Ft,yt,me,G,Et,gt,ot,Tt,Yt;if(N._startClamp=N._endClamp=!1,N._dir=L,x*=45,N.scroller=X,N.scroll=b?b.time.bind(b):Jt,Qt=Jt(),N.vars=n,r=r||n.animation,"refreshPriority"in n&&(OS=1,n.refreshPriority===-9999&&(fu=N)),ut.tweenScroll=ut.tweenScroll||{top:xv(X,bn),left:xv(X,di)},N.tweenTo=zt=ut.tweenScroll[L.p],N.scrubDuration=function(Pt){me=Ef(Pt)&&Pt,me?yt?yt.duration(Pt):yt=$t.to(r,{ease:"expo",totalProgress:"+=0",duration:me,paused:!0,onComplete:function(){return g&&g(N)}}):(yt&&yt.progress(1).kill(),yt=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(_),qt=0,c||(c=r.vars.id)),w&&((!ya(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in nn.style&&$t.set(z?[nn,Er]:X,{scrollBehavior:"auto"}),Pe.forEach(function(Pt){return pi(Pt)&&Pt.target===(z?on.scrollingElement||Er:X)&&(Pt.smooth=!1)}),De=pi(w.snapTo)?w.snapTo:w.snapTo==="labels"?GD(r):w.snapTo==="labelsDirectional"?VD(r):w.directional!==!1?function(Pt,de){return qm(w.snapTo)(Pt,fi()-bt<500?0:de.direction)}:$t.utils.snap(w.snapTo),G=w.duration||{min:.1,max:2},G=ya(G)?Xo(G.min,G.max):Xo(G,G),Et=$t.delayedCall(w.delay||me/2||.1,function(){var Pt=Jt(),de=fi()-bt<500,se=zt.tween;if((de||Math.abs(N.getVelocity())<10)&&!se&&!ph&&wt!==Pt){var ye=(Pt-oe)/ae,je=r&&!Z?r.totalProgress():ye,be=de?0:(je-Ft)/(fi()-Mf)*1e3||0,Xe=$t.utils.clamp(-ye,1-ye,_o(be/2)*be/.185),xn=ye+(w.inertia===!1?0:Xe),cn=Xo(0,1,De(xn,N)),qe=Math.round(oe+cn*ae),ze=w,Wn=ze.onStart,I=ze.onInterrupt,Y=ze.onComplete;if(Pt<=At&&Pt>=oe&&qe!==Pt){if(se&&!se._initted&&se.data<=_o(qe-Pt))return;w.inertia===!1&&(Xe=cn-ye),zt(qe,{duration:G(_o(Math.max(_o(xn-je),_o(cn-je))*.185/be/.05||0)),ease:w.ease||"power3",data:_o(qe-Pt),onInterrupt:function(){return Et.restart(!0)&&I&&I(N)},onComplete:function(){N.update(),wt=Jt(),qt=Ft=r&&!Z?r.totalProgress():N.progress,R&&R(N),Y&&Y(N)}},Pt,Xe*ae,qe-Pt-Xe*ae),Wn&&Wn(N,zt.tween)}}else N.isActive&&wt!==Pt&&Et.restart(!0)}).pause()),c&&(am[c]=N),p=N.trigger=xi(p||m!==!0&&m),Yt=p&&p._gsap&&p._gsap.stRevert,Yt&&(Yt=Yt(N)),m=m===!0?p:xi(m),Bi(l)&&(l={targets:p,className:l}),m&&(S===!1||S===sr||(S=!S&&m.parentNode&&m.parentNode.style&&ar(m.parentNode).display==="flex"?!1:Sn),N.pin=m,Xt=$t.core.getCache(m),Xt.spacer?Fe=Xt.pinState:(U&&(U=xi(U),U&&!U.nodeType&&(U=U.current||U.nativeElement),Xt.spacerIsNative=!!U,U&&(Xt.spacerState=Oc(U))),Xt.spacer=J=U||on.createElement("div"),J.classList.add("pin-spacer"),c&&J.classList.add("pin-spacer-"+c),Xt.pinState=Fe=Oc(m)),n.force3D!==!1&&$t.set(m,{force3D:!0}),N.spacer=J=Xt.spacer,kt=ar(m),Rt=kt[S+L.os2],mt=$t.getProperty(m),vt=$t.quickSetter(m,L.a,kn),Kd(m,J,kt),P=Oc(m)),lt){re=ya(lt)?dv(lt,pv):pv,Q=Nc("scroller-start",c,X,L,re,0),ee=Nc("scroller-end",c,X,L,re,0,Q),_t=Q["offset"+L.op.d2];var Dt=xi($s(X,"content")||X);Gt=this.markerStart=Nc("start",c,Dt,L,re,_t,0,b),Kt=this.markerEnd=Nc("end",c,Dt,L,re,_t,0,b),b&&(Tt=$t.quickSetter([Gt,Kt],L.a,kn)),!K&&!(Hr.length&&$s(X,"fixedMarkers")===!0)&&(HD(z?nn:X),$t.set([Q,ee],{force3D:!0}),St=$t.quickSetter(Q,L.a,kn),te=$t.quickSetter(ee,L.a,kn))}if(b){var Nt=b.vars.onUpdate,_e=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){N.update(0,0,1),Nt&&Nt.apply(b,_e||[])})}if(N.previous=function(){return Ae[Ae.indexOf(N)-1]},N.next=function(){return Ae[Ae.indexOf(N)+1]},N.revert=function(Pt,de){if(!de)return N.kill(!0);var se=Pt!==!1||!N.enabled,ye=Kn;se!==N.isReverted&&(se&&(gt=Math.max(Jt(),N.scroll.rec||0),Bt=N.progress,ot=r&&r.progress()),Gt&&[Gt,Kt,Q,ee].forEach(function(je){return je.style.display=se?"none":"block"}),se&&(Kn=N,N.update(se)),m&&(!C||!N.isActive)&&(se?YD(m,J,Fe):Kd(m,J,ar(m),B)),se||N.update(se),Kn=ye,N.isReverted=se)},N.refresh=function(Pt,de,se,ye){if(!((Kn||!N.enabled)&&!de)){if(m&&Pt&&dr){Un(i,"scrollEnd",$S);return}!ci&&V&&V(N),Kn=N,zt.tween&&!se&&(zt.tween.kill(),zt.tween=0),yt&&yt.pause(),y&&r&&r.revert({kill:!1}).invalidate(),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var je=rt(),be=Lt(),Xe=b?b.duration():ds(X,L),xn=ae<=.01,cn=0,qe=ye||0,ze=ya(se)?se.end:n.end,Wn=n.endTrigger||p,I=ya(se)?se.start:n.start||(n.start===0||!p?0:m?"0 0":"0 100%"),Y=N.pinnedContainer=n.pinnedContainer&&xi(n.pinnedContainer,N),et=p&&Math.max(0,Ae.indexOf(N))||0,it=et,nt,Ct,Ht,ne,Vt,Zt,ie,pe,$e,fn,Be,Fn,Ve;for(lt&&ya(se)&&(Fn=$t.getProperty(Q,L.p),Ve=$t.getProperty(ee,L.p));it--;)Zt=Ae[it],Zt.end||Zt.refresh(0,1)||(Kn=N),ie=Zt.pin,ie&&(ie===p||ie===m||ie===Y)&&!Zt.isReverted&&(fn||(fn=[]),fn.unshift(Zt),Zt.revert(!0,!0)),Zt!==Ae[it]&&(et--,it--);for(pi(I)&&(I=I(N)),I=uv(I,"start",N),oe=gv(I,p,je,L,Jt(),Gt,Q,N,be,ct,K,Xe,b,N._startClamp&&"_startClamp")||(m?-.001:0),pi(ze)&&(ze=ze(N)),Bi(ze)&&!ze.indexOf("+=")&&(~ze.indexOf(" ")?ze=(Bi(I)?I.split(" ")[0]:"")+ze:(cn=Tf(ze.substr(2),je),ze=Bi(I)?I:(b?$t.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,oe):oe)+cn,Wn=p)),ze=uv(ze,"end",N),At=Math.max(oe,gv(ze||(Wn?"100% 0":Xe),Wn,je,L,Jt()+cn,Kt,ee,N,be,ct,K,Xe,b,N._endClamp&&"_endClamp"))||-.001,cn=0,it=et;it--;)Zt=Ae[it],ie=Zt.pin,ie&&Zt.start-Zt._pinPush<=oe&&!b&&Zt.end>0&&(nt=Zt.end-(N._startClamp?Math.max(0,Zt.start):Zt.start),(ie===p&&Zt.start-Zt._pinPush<oe||ie===Y)&&isNaN(I)&&(cn+=nt*(1-Zt.progress)),ie===m&&(qe+=nt));if(oe+=cn,At+=cn,N._startClamp&&(N._startClamp+=cn),N._endClamp&&!ci&&(N._endClamp=At||-.001,At=Math.min(At,ds(X,L))),ae=At-oe||(oe-=.01)&&.001,xn&&(Bt=$t.utils.clamp(0,1,$t.utils.normalize(oe,At,gt))),N._pinPush=qe,Gt&&cn&&(nt={},nt[L.a]="+="+cn,Y&&(nt[L.p]="-="+Jt()),$t.set([Gt,Kt],nt)),m)nt=ar(m),ne=L===bn,Ht=Jt(),Ot=parseFloat(mt(L.a))+qe,!Xe&&At>1&&(Be=(z?on.scrollingElement||Er:X).style,Be={style:Be,value:Be["overflow"+L.a.toUpperCase()]},z&&ar(nn)["overflow"+L.a.toUpperCase()]!=="scroll"&&(Be.style["overflow"+L.a.toUpperCase()]="scroll")),Kd(m,J,nt),P=Oc(m),Ct=cs(m,!0),pe=K&&ta(X,ne?di:bn)(),S&&(B=[S+L.os2,ae+qe+kn],B.t=J,it=S===Sn?sm(m,L)+ae+qe:0,it&&B.push(L.d,it+kn),tl(B),Y&&Ae.forEach(function(ge){ge.pin===Y&&ge.vars.pinSpacing!==!1&&(ge._subPinOffset=!0)}),K&&Jt(gt)),K&&(Vt={top:Ct.top+(ne?Ht-oe:pe)+kn,left:Ct.left+(ne?pe:Ht-oe)+kn,boxSizing:"border-box",position:"fixed"},Vt[Da]=Vt["max"+cl]=Math.ceil(Ct.width)+kn,Vt[Ia]=Vt["max"+Ym]=Math.ceil(Ct.height)+kn,Vt[sr]=Vt[sr+uu]=Vt[sr+ou]=Vt[sr+cu]=Vt[sr+lu]="0",Vt[Sn]=nt[Sn],Vt[Sn+uu]=nt[Sn+uu],Vt[Sn+ou]=nt[Sn+ou],Vt[Sn+cu]=nt[Sn+cu],Vt[Sn+lu]=nt[Sn+lu],O=$D(Fe,Vt,C),ci&&Jt(0)),r?($e=r._initted,Wd(1),r.render(r.duration(),!0,!0),Mt=mt(L.a)-Ot+ae+qe,ht=Math.abs(ae-Mt)>1,K&&ht&&O.splice(O.length-2,2),r.render(0,!0,!0),$e||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Wd(0)):Mt=ae,Be&&(Be.value?Be.style["overflow"+L.a.toUpperCase()]=Be.value:Be.style.removeProperty("overflow-"+L.a));else if(p&&Jt()&&!b)for(Ct=p.parentNode;Ct&&Ct!==nn;)Ct._pinOffset&&(oe-=Ct._pinOffset,At-=Ct._pinOffset),Ct=Ct.parentNode;fn&&fn.forEach(function(ge){return ge.revert(!1,!0)}),N.start=oe,N.end=At,Qt=j=ci?gt:Jt(),!b&&!ci&&(Qt<gt&&Jt(gt),N.scroll.rec=0),N.revert(!1,!0),bt=fi(),Et&&(wt=-1,Et.restart(!0)),Kn=0,r&&Z&&(r._initted||ot)&&r.progress()!==ot&&r.progress(ot||0,!0).render(r.time(),!0,!0),(xn||Bt!==N.progress||b)&&(r&&!Z&&r.totalProgress(b&&oe<-.001&&!Bt?$t.utils.normalize(oe,At,0):Bt,!0),N.progress=xn||(Qt-oe)/ae===Bt?0:Bt),m&&S&&(J._pinOffset=Math.round(N.progress*Mt)),yt&&yt.invalidate(),isNaN(Fn)||(Fn-=$t.getProperty(Q,L.p),Ve-=$t.getProperty(ee,L.p),Fc(Q,L,Fn),Fc(Gt,L,Fn-(ye||0)),Fc(ee,L,Ve),Fc(Kt,L,Ve-(ye||0))),xn&&!ci&&N.update(),d&&!ci&&!he&&(he=!0,d(N),he=!1)}},N.getVelocity=function(){return(Jt()-j)/(fi()-Mf)*1e3||0},N.endAnimation=function(){kl(N.callbackAnimation),r&&(yt?yt.progress(1):r.paused()?Z||kl(r,N.direction<0,1):kl(r,r.reversed()))},N.labelToScroll=function(Pt){return r&&r.labels&&(oe||N.refresh()||oe)+r.labels[Pt]/r.duration()*ae||0},N.getTrailing=function(Pt){var de=Ae.indexOf(N),se=N.direction>0?Ae.slice(0,de).reverse():Ae.slice(de+1);return(Bi(Pt)?se.filter(function(ye){return ye.vars.preventOverlaps===Pt}):se).filter(function(ye){return N.direction>0?ye.end<=oe:ye.start>=At})},N.update=function(Pt,de,se){if(!(b&&!se&&!Pt)){var ye=ci===!0?gt:N.scroll(),je=Pt?0:(ye-oe)/ae,be=je<0?0:je>1?1:je||0,Xe=N.progress,xn,cn,qe,ze,Wn,I,Y,et;if(de&&(j=Qt,Qt=b?Jt():ye,w&&(Ft=qt,qt=r&&!Z?r.totalProgress():be)),x&&!be&&m&&!Kn&&!Pc&&dr&&oe<ye+(ye-j)/(fi()-Mf)*x&&(be=1e-4),be!==Xe&&N.enabled){if(xn=N.isActive=!!be&&be<1,cn=!!Xe&&Xe<1,I=xn!==cn,Wn=I||!!be!=!!Xe,N.direction=be>Xe?1:-1,N.progress=be,Wn&&!Kn&&(qe=be&&!Xe?0:be===1?1:Xe===1?2:3,Z&&(ze=!I&&$[qe+1]!=="none"&&$[qe+1]||$[qe],et=r&&(ze==="complete"||ze==="reset"||ze in r))),T&&(I||et)&&(et||_||!r)&&(pi(T)?T(N):N.getTrailing(T).forEach(function(Ht){return Ht.endAnimation()})),Z||(yt&&!Kn&&!Pc?(yt._dp._time-yt._start!==yt._time&&yt.render(yt._dp._time-yt._start),yt.resetTo?yt.resetTo("totalProgress",be,r._tTime/r._tDur):(yt.vars.totalProgress=be,yt.invalidate().restart())):r&&r.totalProgress(be,!!(Kn&&(bt||Pt)))),m){if(Pt&&S&&(J.style[S+L.os2]=Rt),!K)vt(Jl(Ot+Mt*be));else if(Wn){if(Y=!Pt&&be>Xe&&At+1>ye&&ye+1>=ds(X,L),C)if(!Pt&&(xn||Y)){var it=cs(m,!0),nt=ye-oe;vv(m,nn,it.top+(L===bn?nt:0)+kn,it.left+(L===bn?0:nt)+kn)}else vv(m,J);tl(xn||Y?O:P),ht&&be<1&&xn||vt(Ot+(be===1&&!Y?Mt:0))}}w&&!zt.tween&&!Kn&&!Pc&&Et.restart(!0),l&&(I||E&&be&&(be<1||!Xd))&&Kf(l.targets).forEach(function(Ht){return Ht.classList[xn||E?"add":"remove"](l.className)}),u&&!Z&&!Pt&&u(N),Wn&&!Kn?(Z&&(et&&(ze==="complete"?r.pause().totalProgress(1):ze==="reset"?r.restart(!0).pause():ze==="restart"?r.restart(!0):r[ze]()),u&&u(N)),(I||!Xd)&&(f&&I&&qd(N,f),st[qe]&&qd(N,st[qe]),E&&(be===1?N.kill(!1,1):st[qe]=0),I||(qe=be===1?1:3,st[qe]&&qd(N,st[qe]))),k&&!xn&&Math.abs(N.getVelocity())>(Ef(k)?k:2500)&&(kl(N.callbackAnimation),yt?yt.progress(1):kl(r,ze==="reverse"?1:!be,1))):Z&&u&&!Kn&&u(N)}if(te){var Ct=b?ye/b.duration()*(b._caScrollDist||0):ye;St(Ct+(Q._isFlipped?1:0)),te(Ct)}Tt&&Tt(-ye/b.duration()*(b._caScrollDist||0))}},N.enable=function(Pt,de){N.enabled||(N.enabled=!0,Un(X,"resize",Ql),z||Un(X,"scroll",go),V&&Un(i,"refreshInit",V),Pt!==!1&&(N.progress=Bt=0,Qt=j=wt=Jt()),de!==!1&&N.refresh())},N.getTween=function(Pt){return Pt&&zt?zt.tween:yt},N.setPositions=function(Pt,de,se,ye){if(b){var je=b.scrollTrigger,be=b.duration(),Xe=je.end-je.start;Pt=je.start+Xe*Pt/be,de=je.start+Xe*de/be}N.refresh(!1,!1,{start:cv(Pt,se&&!!N._startClamp),end:cv(de,se&&!!N._endClamp)},ye),N.update()},N.adjustPinSpacing=function(Pt){if(B&&Pt){var de=B.indexOf(L.d)+1;B[de]=parseFloat(B[de])+Pt+kn,B[1]=parseFloat(B[1])+Pt+kn,tl(B)}},N.disable=function(Pt,de){if(N.enabled&&(Pt!==!1&&N.revert(!0,!0),N.enabled=N.isActive=!1,de||yt&&yt.pause(),gt=0,Xt&&(Xt.uncache=1),V&&In(i,"refreshInit",V),Et&&(Et.pause(),zt.tween&&zt.tween.kill()&&(zt.tween=0)),!z)){for(var se=Ae.length;se--;)if(Ae[se].scroller===X&&Ae[se]!==N)return;In(X,"resize",Ql),z||In(X,"scroll",go)}},N.kill=function(Pt,de){N.disable(Pt,de),yt&&!de&&yt.kill(),c&&delete am[c];var se=Ae.indexOf(N);se>=0&&Ae.splice(se,1),se===ui&&bf>0&&ui--,se=0,Ae.forEach(function(ye){return ye.scroller===N.scroller&&(se=1)}),se||ci||(N.scroll.rec=0),r&&(r.scrollTrigger=null,Pt&&r.revert({kill:!1}),de||r.kill()),Gt&&[Gt,Kt,Q,ee].forEach(function(ye){return ye.parentNode&&ye.parentNode.removeChild(ye)}),fu===N&&(fu=0),m&&(Xt&&(Xt.uncache=1),se=0,Ae.forEach(function(ye){return ye.pin===m&&se++}),se||(Xt.spacer=0)),n.onKill&&n.onKill(N)},Ae.push(N),N.enable(!1,!1),Yt&&Yt(N),r&&r.add&&!ae){var le=N.update;N.update=function(){N.update=le,oe||At||N.refresh()},$t.delayedCall(.01,N.update),ae=.01,oe=At=0}else N.refresh();m&&XD()},i.register=function(n){return zo||($t=n||GS(),HS()&&window.document&&i.enable(),zo=Zl),zo},i.defaults=function(n){if(n)for(var r in n)Uc[r]=n[r];return Uc},i.disable=function(n,r){Zl=0,Ae.forEach(function(u){return u[r?"kill":"disable"](n)}),In(Ne,"wheel",go),In(on,"scroll",go),clearInterval(Cc),In(on,"touchcancel",Nr),In(nn,"touchstart",Nr),Dc(In,on,"pointerdown,touchstart,mousedown",fv),Dc(In,on,"pointerup,touchend,mouseup",hv),$f.kill(),Lc(In);for(var a=0;a<Pe.length;a+=3)Ic(In,Pe[a],Pe[a+1]),Ic(In,Pe[a],Pe[a+2])},i.enable=function(){if(Ne=window,on=document,Er=on.documentElement,nn=on.body,$t&&(Kf=$t.utils.toArray,Xo=$t.utils.clamp,rm=$t.core.context||Nr,Wd=$t.core.suppressOverwrites||Nr,Gm=Ne.history.scrollRestoration||"auto",om=Ne.pageYOffset,$t.core.globals("ScrollTrigger",i),nn)){Zl=1,jo=document.createElement("div"),jo.style.height="100vh",jo.style.position="absolute",JS(),BD(),En.register($t),i.isTouch=En.isTouch,Ns=En.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Un(Ne,"wheel",go),NS=[Ne,on,Er,nn],$t.matchMedia?(i.matchMedia=function(c){var f=$t.matchMedia(),d;for(d in c)f.add(d,c[d]);return f},$t.addEventListener("matchMediaInit",function(){return $m()}),$t.addEventListener("matchMediaRevert",function(){return KS()}),$t.addEventListener("matchMedia",function(){ba(0,1),Va("matchMedia")}),$t.matchMedia("(orientation: portrait)",function(){return $d(),$d})):console.warn("Requires GSAP 3.11.0 or later"),$d(),Un(on,"scroll",go);var n=nn.style,r=n.borderTopStyle,a=$t.core.Animation.prototype,u,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",u=cs(nn),bn.m=Math.round(u.top+bn.sc())||0,di.m=Math.round(u.left+di.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Cc=setInterval(mv,250),$t.delayedCall(.5,function(){return Pc=0}),Un(on,"touchcancel",Nr),Un(nn,"touchstart",Nr),Dc(Un,on,"pointerdown,touchstart,mousedown",fv),Dc(Un,on,"pointerup,touchend,mouseup",hv),im=$t.utils.checkPrefix("transform"),Af.push(im),zo=fi(),$f=$t.delayedCall(.2,ba).pause(),ko=[on,"visibilitychange",function(){var c=Ne.innerWidth,f=Ne.innerHeight;on.hidden?(ov=c,lv=f):(ov!==c||lv!==f)&&Ql()},on,"DOMContentLoaded",ba,Ne,"load",ba,Ne,"resize",Ql],Lc(Un),Ae.forEach(function(c){return c.enable(0,1)}),l=0;l<Pe.length;l+=3)Ic(In,Pe[l],Pe[l+1]),Ic(In,Pe[l],Pe[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Xd=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Cc)||(Cc=r)&&setInterval(mv,r),"ignoreMobileResize"in n&&(BS=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Lc(In)||Lc(Un,n.autoRefreshEvents||"none"),FS=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var a=xi(n),u=Pe.indexOf(a),l=Ha(a);~u&&Pe.splice(u,l?6:2),r&&(l?Hr.unshift(Ne,r,nn,r,Er,r):Hr.unshift(a,r))},i.clearMatchMedia=function(n){Ae.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,a){var u=(Bi(n)?xi(n):n).getBoundingClientRect(),l=u[a?Da:Ia]*r||0;return a?u.right-l>0&&u.left+l<Ne.innerWidth:u.bottom-l>0&&u.top+l<Ne.innerHeight},i.positionInViewport=function(n,r,a){Bi(n)&&(n=xi(n));var u=n.getBoundingClientRect(),l=u[a?Da:Ia],c=r==null?l/2:r in Zf?Zf[r]*l:~r.indexOf("%")?parseFloat(r)*l/100:parseFloat(r)||0;return a?(u.left+c)/Ne.innerWidth:(u.top+c)/Ne.innerHeight},i.killAll=function(n){if(Ae.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=Ga.killAll||[];Ga={},r.forEach(function(a){return a()})}},i}();Le.version="3.12.2";Le.saveStyles=function(i){return i?Kf(i).forEach(function(t){if(t&&t.style){var e=Oi.indexOf(t);e>=0&&Oi.splice(e,5),Oi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),$t.core.getCache(t),rm())}}):Oi};Le.revert=function(i,t){return $m(!i,t)};Le.create=function(i,t){return new Le(i,t)};Le.refresh=function(i){return i?Ql():(zo||Le.register())&&ba(!0)};Le.update=function(i){return++Pe.cache&&_s(i===!0?2:0)};Le.clearScrollMemory=ZS;Le.maxScroll=function(i,t){return ds(i,t?di:bn)};Le.getScrollFunc=function(i,t){return ta(xi(i),t?di:bn)};Le.getById=function(i){return am[i]};Le.getAll=function(){return Ae.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Le.isScrolling=function(){return!!dr};Le.snapDirectional=qm;Le.addEventListener=function(i,t){var e=Ga[i]||(Ga[i]=[]);~e.indexOf(t)||e.push(t)};Le.removeEventListener=function(i,t){var e=Ga[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Le.batch=function(i,t){var e=[],n={},r=t.interval||.016,a=t.batchMax||1e9,u=function(f,d){var _=[],p=[],m=$t.delayedCall(r,function(){d(_,p),_=[],p=[]}).pause();return function(S){_.length||m.restart(!0),_.push(S.trigger),p.push(S),a<=_.length&&m.progress(1)}},l;for(l in t)n[l]=l.substr(0,2)==="on"&&pi(t[l])&&l!=="onRefreshInit"?u(l,t[l]):t[l];return pi(a)&&(a=a(),Un(Le,"refresh",function(){return a=t.batchMax()})),Kf(i).forEach(function(c){var f={};for(l in n)f[l]=n[l];f.trigger=c,e.push(Le.create(f))}),e};var yv=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},Zd=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(En.isTouch?" pinch-zoom":""):"none",t===Er&&i(nn,e)},Bc={auto:1,scroll:1},ZD=function(t){var e=t.event,n=t.target,r=t.axis,a=(e.changedTouches?e.changedTouches[0]:e).target,u=a._gsap||$t.core.getCache(a),l=fi(),c;if(!u._isScrollT||l-u._isScrollT>2e3){for(;a&&a!==nn&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(Bc[(c=ar(a)).overflowY]||Bc[c.overflowX]));)a=a.parentNode;u._isScroll=a&&a!==n&&!Ha(a)&&(Bc[(c=ar(a)).overflowY]||Bc[c.overflowX]),u._isScrollT=l}(u._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},jS=function(t,e,n,r){return En.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&ZD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Un(on,En.eventTypes[0],Mv,!1,!0)},onDisable:function(){return In(on,En.eventTypes[0],Mv,!0)}})},JD=/(input|label|select|textarea)/i,Sv,Mv=function(t){var e=JD.test(t.target.tagName);(e||Sv)&&(t._gsapAllow=!0,Sv=e)},QD=function(t){ya(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,a=e.allowNestedScroll,u=e.onRelease,l,c,f=xi(t.target)||Er,d=$t.core.globals().ScrollSmoother,_=d&&d.get(),p=Ns&&(t.content&&xi(t.content)||_&&t.content!==!1&&!_.smooth()&&_.content()),m=ta(f,bn),S=ta(f,di),y=1,x=(En.isTouch&&Ne.visualViewport?Ne.visualViewport.scale*Ne.visualViewport.width:Ne.outerWidth)/Ne.innerWidth,g=0,R=pi(r)?function(){return r(l)}:function(){return r||2.8},E,w,C=jS(f,t.type,!0,a),U=function(){return w=!1},b=Nr,k=Nr,T=function(){c=ds(f,bn),k=Xo(Ns?1:0,c),n&&(b=Xo(0,ds(f,di))),E=Ua},L=function(){p._gsap.y=Jl(parseFloat(p._gsap.y)+m.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",m.offset=m.cacheID=0},Z=function(){if(w){requestAnimationFrame(U);var lt=Jl(l.deltaY/2),ct=k(m.v-lt);if(p&&ct!==m.v+m.offset){m.offset=ct-m.v;var N=Jl((parseFloat(p&&p._gsap.y)||0)-m.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",p._gsap.y=N+"px",m.cacheID=Pe.cache,_s()}return!0}m.offset&&L(),w=!0},X,ut,z,K,st=function(){T(),X.isActive()&&X.vars.scrollY>c&&(m()>c?X.progress(1)&&m(c):X.resetTo("scrollY",c))};return p&&$t.set(p,{y:"+=0"}),t.ignoreCheck=function($){return Ns&&$.type==="touchmove"&&Z()||y>1.05&&$.type!=="touchstart"||l.isGesturing||$.touches&&$.touches.length>1},t.onPress=function(){w=!1;var $=y;y=Jl((Ne.visualViewport&&Ne.visualViewport.scale||1)/x),X.pause(),$!==y&&Zd(f,y>1.01?!0:n?!1:"x"),ut=S(),z=m(),T(),E=Ua},t.onRelease=t.onGestureStart=function($,lt){if(m.offset&&L(),!lt)K.restart(!0);else{Pe.cache++;var ct=R(),N,V;n&&(N=S(),V=N+ct*.05*-$.velocityX/.227,ct*=yv(S,N,V,ds(f,di)),X.vars.scrollX=b(V)),N=m(),V=N+ct*.05*-$.velocityY/.227,ct*=yv(m,N,V,ds(f,bn)),X.vars.scrollY=k(V),X.invalidate().duration(ct).play(.01),(Ns&&X.vars.scrollY>=c||N>=c-1)&&$t.to({},{onUpdate:st,duration:ct})}u&&u($)},t.onWheel=function(){X._ts&&X.pause(),fi()-g>1e3&&(E=0,g=fi())},t.onChange=function($,lt,ct,N,V){if(Ua!==E&&T(),lt&&n&&S(b(N[2]===lt?ut+($.startX-$.x):S()+lt-N[1])),ct){m.offset&&L();var rt=V[2]===ct,Lt=rt?z+$.startY-$.y:m()+ct-V[1],wt=k(Lt);rt&&Lt!==wt&&(z+=wt-Lt),m(wt)}(ct||lt)&&_s()},t.onEnable=function(){Zd(f,n?!1:"x"),Le.addEventListener("refresh",st),Un(Ne,"resize",st),m.smooth&&(m.target.style.scrollBehavior="auto",m.smooth=S.smooth=!1),C.enable()},t.onDisable=function(){Zd(f,!0),In(Ne,"resize",st),Le.removeEventListener("refresh",st),C.kill()},t.lockAxis=t.lockAxis!==!1,l=new En(t),l.iOS=Ns,Ns&&!m()&&m(1),Ns&&$t.ticker.add(Nr),K=l._dc,X=$t.to(l,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:QS(m,m(),function(){return X.pause()})},onUpdate:_s,onComplete:K.vars.onComplete}),l};Le.sort=function(i){return Ae.sort(i||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Le.observe=function(i){return new En(i)};Le.normalizeScroll=function(i){if(typeof i>"u")return Ni;if(i===!0&&Ni)return Ni.enable();if(i===!1)return Ni&&Ni.kill();var t=i instanceof En?i:QD(i);return Ni&&Ni.target===t.target&&Ni.kill(),Ha(t.target)&&(Ni=t),t};Le.core={_getVelocityProp:nm,_inputObserver:jS,_scrollers:Pe,_proxies:Hr,bridge:{ss:function(){dr||Va("scrollStart"),dr=fi()},ref:function(){return Kn}}};GS()&&$t.registerPlugin(Le);function jD(i){let t;return{c(){t=Xs("div"),t.innerHTML='<div class="wrapper_gsap-scrolly-demo"><div class="gsap-scrolly-demo-rect"></div></div> <div>And this is some text after the scrolly.</div>',gn(t,"id","wrapper_gsap-scrolly-demo")},m(e,n){rr(e,t,n),i[1](t)},p:Rr,i:Rr,o:Rr,d(e){e&&Fi(t),i[1](null)}}}function tI(i,t,e){Sf.registerPlugin(Le);let n,r,a;Qx(()=>{a=Sf.context(()=>{r&&r.progress(0).kill(),r=Sf.timeline({paused:!1}).to(".gsap-scrolly-demo-rect",{width:500}),Le.create({trigger:document.querySelector(".wrapper_gsap-scrolly-demo"),animation:r,start:"top top",scrub:!0,pin:!0})},n)}),FR(()=>{a&&a.revert()});function u(l){Pf[l?"unshift":"push"](()=>{n=l,e(0,n)})}return[n,u]}class eI extends oh{constructor(t){super(),ah(this,t,tI,jD,sh,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Km="158",vo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nI=0,Ev=1,iI=2,tM=1,rI=2,os=3,ea=0,wi=1,fs=2,Ks=0,el=1,Tv=2,wv=3,bv=4,sI=5,Ma=100,aI=101,oI=102,Av=103,Rv=104,lI=200,uI=201,cI=202,fI=203,um=204,cm=205,hI=206,dI=207,pI=208,mI=209,_I=210,gI=211,vI=212,xI=213,yI=214,SI=0,MI=1,EI=2,Jf=3,TI=4,wI=5,bI=6,AI=7,eM=0,RI=1,CI=2,Zs=0,PI=1,LI=2,DI=3,II=4,UI=5,nM=300,fl=301,hl=302,fm=303,hm=304,mh=306,dm=1e3,br=1001,pm=1002,hi=1003,Cv=1004,Jd=1005,or=1006,NI=1007,Ru=1008,Js=1009,OI=1010,FI=1011,Zm=1012,iM=1013,Vs=1014,Ws=1015,Cu=1016,rM=1017,sM=1018,Na=1020,BI=1021,Ar=1023,zI=1024,kI=1025,Oa=1026,dl=1027,HI=1028,aM=1029,GI=1030,oM=1031,lM=1033,Qd=33776,jd=33777,tp=33778,ep=33779,Pv=35840,Lv=35841,Dv=35842,Iv=35843,VI=36196,Uv=37492,Nv=37496,Ov=37808,Fv=37809,Bv=37810,zv=37811,kv=37812,Hv=37813,Gv=37814,Vv=37815,Wv=37816,Xv=37817,Yv=37818,qv=37819,$v=37820,Kv=37821,np=36492,Zv=36494,Jv=36495,WI=36283,Qv=36284,jv=36285,tx=36286,uM=3e3,Fa=3001,XI=3200,YI=3201,cM=0,qI=1,ur="",Hn="srgb",ys="srgb-linear",Jm="display-p3",_h="display-p3-linear",Qf="linear",en="srgb",jf="rec709",th="p3",yo=7680,ex=519,$I=512,KI=513,ZI=514,JI=515,QI=516,jI=517,tU=518,eU=519,nx=35044,ix="300 es",mm=1035,ps=2e3,eh=2001;class $a{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,t);t.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rx=1234567;const hu=Math.PI/180,Pu=180/Math.PI;function ml(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[t&255]+qn[t>>8&255]+"-"+qn[t>>16&15|64]+qn[t>>24&255]+"-"+qn[e&63|128]+qn[e>>8&255]+"-"+qn[e>>16&255]+qn[e>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function Zn(i,t,e){return Math.max(t,Math.min(e,i))}function Qm(i,t){return(i%t+t)%t}function nU(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function iU(i,t,e){return i!==t?(e-i)/(t-i):0}function du(i,t,e){return(1-e)*i+e*t}function rU(i,t,e,n){return du(i,t,1-Math.exp(-e*n))}function sU(i,t=1){return t-Math.abs(Qm(i,t*2)-t)}function aU(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function oU(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lU(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uU(i,t){return i+Math.random()*(t-i)}function cU(i){return i*(.5-Math.random())}function fU(i){i!==void 0&&(rx=i);let t=rx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hU(i){return i*hu}function dU(i){return i*Pu}function _m(i){return(i&i-1)===0&&i!==0}function pU(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mU(i,t,e,n,r){const a=Math.cos,u=Math.sin,l=a(e/2),c=u(e/2),f=a((t+n)/2),d=u((t+n)/2),_=a((t-n)/2),p=u((t-n)/2),m=a((n-t)/2),S=u((n-t)/2);switch(r){case"XYX":i.set(l*d,c*_,c*p,l*f);break;case"YZY":i.set(c*p,l*d,c*_,l*f);break;case"ZXZ":i.set(c*_,c*p,l*d,l*f);break;case"XZX":i.set(l*d,c*S,c*m,l*f);break;case"YXY":i.set(c*m,l*d,c*S,l*f);break;case"ZYZ":i.set(c*S,c*m,l*d,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ho(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _U={DEG2RAD:hu,RAD2DEG:Pu,generateUUID:ml,clamp:Zn,euclideanModulo:Qm,mapLinear:nU,inverseLerp:iU,lerp:du,damp:rU,pingpong:sU,smoothstep:aU,smootherstep:oU,randInt:lU,randFloat:uU,randFloatSpread:cU,seededRandom:fU,degToRad:hU,radToDeg:dU,isPowerOfTwo:_m,ceilPowerOfTwo:pU,floorPowerOfTwo:nh,setQuaternionFromProperEuler:mU,normalize:oi,denormalize:Ho};class Me{constructor(t=0,e=0){Me.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),a=this.x-t.x,u=this.y-t.y;return this.x=a*n-u*r+t.x,this.y=a*r+u*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(t,e,n,r,a,u,l,c,f){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,u,l,c,f)}set(t,e,n,r,a,u,l,c,f){const d=this.elements;return d[0]=t,d[1]=r,d[2]=l,d[3]=e,d[4]=a,d[5]=c,d[6]=n,d[7]=u,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,u=n[0],l=n[3],c=n[6],f=n[1],d=n[4],_=n[7],p=n[2],m=n[5],S=n[8],y=r[0],x=r[3],g=r[6],R=r[1],E=r[4],w=r[7],C=r[2],U=r[5],b=r[8];return a[0]=u*y+l*R+c*C,a[3]=u*x+l*E+c*U,a[6]=u*g+l*w+c*b,a[1]=f*y+d*R+_*C,a[4]=f*x+d*E+_*U,a[7]=f*g+d*w+_*b,a[2]=p*y+m*R+S*C,a[5]=p*x+m*E+S*U,a[8]=p*g+m*w+S*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],u=t[4],l=t[5],c=t[6],f=t[7],d=t[8];return e*u*d-e*l*f-n*a*d+n*l*c+r*a*f-r*u*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],u=t[4],l=t[5],c=t[6],f=t[7],d=t[8],_=d*u-l*f,p=l*c-d*a,m=f*a-u*c,S=e*_+n*p+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return t[0]=_*y,t[1]=(r*f-d*n)*y,t[2]=(l*n-r*u)*y,t[3]=p*y,t[4]=(d*e-r*c)*y,t[5]=(r*a-l*e)*y,t[6]=m*y,t[7]=(n*c-f*e)*y,t[8]=(u*e-n*a)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,a,u,l){const c=Math.cos(a),f=Math.sin(a);return this.set(n*c,n*f,-n*(c*u+f*l)+u+t,-r*f,r*c,-r*(-f*u+c*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(ip.makeScale(t,e)),this}rotate(t){return this.premultiply(ip.makeRotation(-t)),this}translate(t,e){return this.premultiply(ip.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ip=new Re;function fM(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ih(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gU(){const i=ih("canvas");return i.style.display="block",i}const sx={};function pu(i){i in sx||(sx[i]=!0,console.warn(i))}const ax=new Re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ox=new Re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zc={[ys]:{transfer:Qf,primaries:jf,toReference:i=>i,fromReference:i=>i},[Hn]:{transfer:en,primaries:jf,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_h]:{transfer:Qf,primaries:th,toReference:i=>i.applyMatrix3(ox),fromReference:i=>i.applyMatrix3(ax)},[Jm]:{transfer:en,primaries:th,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ox),fromReference:i=>i.applyMatrix3(ax).convertLinearToSRGB()}},vU=new Set([ys,_h]),Ye={enabled:!0,_workingColorSpace:ys,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vU.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=zc[t].toReference,r=zc[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return zc[i].primaries},getTransfer:function(i){return i===ur?Qf:zc[i].transfer}};function nl(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rp(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let So;class hM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{So===void 0&&(So=ih("canvas")),So.width=t.width,So.height=t.height;const n=So.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=So}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ih("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=nl(a[u]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(nl(e[n]/255)*255):e[n]=nl(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xU=0;class dM{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xU++}),this.uuid=ml(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,l=r.length;u<l;u++)r[u].isDataTexture?a.push(sp(r[u].image)):a.push(sp(r[u]))}else a=sp(r);n.url=a}return e||(t.images[this.uuid]=n),n}}function sp(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yU=0;class Vi extends $a{constructor(t=Vi.DEFAULT_IMAGE,e=Vi.DEFAULT_MAPPING,n=br,r=br,a=or,u=Ru,l=Ar,c=Js,f=Vi.DEFAULT_ANISOTROPY,d=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yU++}),this.uuid=ml(),this.name="",this.source=new dM(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(pu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Fa?Hn:ur),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nM)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dm:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case pm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dm:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case pm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Hn?Fa:uM}set encoding(t){pu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fa?Hn:ur}}Vi.DEFAULT_IMAGE=null;Vi.DEFAULT_MAPPING=nM;Vi.DEFAULT_ANISOTROPY=1;class Nn{constructor(t=0,e=0,n=0,r=1){Nn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=this.w,u=t.elements;return this.x=u[0]*e+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*e+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*e+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*e+u[7]*n+u[11]*r+u[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,a;const c=t.elements,f=c[0],d=c[4],_=c[8],p=c[1],m=c[5],S=c[9],y=c[2],x=c[6],g=c[10];if(Math.abs(d-p)<.01&&Math.abs(_-y)<.01&&Math.abs(S-x)<.01){if(Math.abs(d+p)<.1&&Math.abs(_+y)<.1&&Math.abs(S+x)<.1&&Math.abs(f+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(f+1)/2,w=(m+1)/2,C=(g+1)/2,U=(d+p)/4,b=(_+y)/4,k=(S+x)/4;return E>w&&E>C?E<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(E),r=U/n,a=b/n):w>C?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=U/r,a=k/r):C<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(C),n=b/a,r=k/a),this.set(n,r,a,e),this}let R=Math.sqrt((x-S)*(x-S)+(_-y)*(_-y)+(p-d)*(p-d));return Math.abs(R)<.001&&(R=1),this.x=(x-S)/R,this.y=(_-y)/R,this.z=(p-d)/R,this.w=Math.acos((f+m+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SU extends $a{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Nn(0,0,t,e),this.scissorTest=!1,this.viewport=new Nn(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(pu("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fa?Hn:ur),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:or,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vi(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dM(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wa extends SU{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pM extends Vi{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class MU extends Vi{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xa{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,a,u,l){let c=n[r+0],f=n[r+1],d=n[r+2],_=n[r+3];const p=a[u+0],m=a[u+1],S=a[u+2],y=a[u+3];if(l===0){t[e+0]=c,t[e+1]=f,t[e+2]=d,t[e+3]=_;return}if(l===1){t[e+0]=p,t[e+1]=m,t[e+2]=S,t[e+3]=y;return}if(_!==y||c!==p||f!==m||d!==S){let x=1-l;const g=c*p+f*m+d*S+_*y,R=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const C=Math.sqrt(E),U=Math.atan2(C,g*R);x=Math.sin(x*U)/C,l=Math.sin(l*U)/C}const w=l*R;if(c=c*x+p*w,f=f*x+m*w,d=d*x+S*w,_=_*x+y*w,x===1-l){const C=1/Math.sqrt(c*c+f*f+d*d+_*_);c*=C,f*=C,d*=C,_*=C}}t[e]=c,t[e+1]=f,t[e+2]=d,t[e+3]=_}static multiplyQuaternionsFlat(t,e,n,r,a,u){const l=n[r],c=n[r+1],f=n[r+2],d=n[r+3],_=a[u],p=a[u+1],m=a[u+2],S=a[u+3];return t[e]=l*S+d*_+c*m-f*p,t[e+1]=c*S+d*p+f*_-l*m,t[e+2]=f*S+d*m+l*p-c*_,t[e+3]=d*S-l*_-c*p-f*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,a=t._z,u=t._order,l=Math.cos,c=Math.sin,f=l(n/2),d=l(r/2),_=l(a/2),p=c(n/2),m=c(r/2),S=c(a/2);switch(u){case"XYZ":this._x=p*d*_+f*m*S,this._y=f*m*_-p*d*S,this._z=f*d*S+p*m*_,this._w=f*d*_-p*m*S;break;case"YXZ":this._x=p*d*_+f*m*S,this._y=f*m*_-p*d*S,this._z=f*d*S-p*m*_,this._w=f*d*_+p*m*S;break;case"ZXY":this._x=p*d*_-f*m*S,this._y=f*m*_+p*d*S,this._z=f*d*S+p*m*_,this._w=f*d*_-p*m*S;break;case"ZYX":this._x=p*d*_-f*m*S,this._y=f*m*_+p*d*S,this._z=f*d*S-p*m*_,this._w=f*d*_+p*m*S;break;case"YZX":this._x=p*d*_+f*m*S,this._y=f*m*_+p*d*S,this._z=f*d*S-p*m*_,this._w=f*d*_-p*m*S;break;case"XZY":this._x=p*d*_-f*m*S,this._y=f*m*_-p*d*S,this._z=f*d*S+p*m*_,this._w=f*d*_+p*m*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],a=e[8],u=e[1],l=e[5],c=e[9],f=e[2],d=e[6],_=e[10],p=n+l+_;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(a-f)*m,this._z=(u-r)*m}else if(n>l&&n>_){const m=2*Math.sqrt(1+n-l-_);this._w=(d-c)/m,this._x=.25*m,this._y=(r+u)/m,this._z=(a+f)/m}else if(l>_){const m=2*Math.sqrt(1+l-n-_);this._w=(a-f)/m,this._x=(r+u)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+_-n-l);this._w=(u-r)/m,this._x=(a+f)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,a=t._z,u=t._w,l=e._x,c=e._y,f=e._z,d=e._w;return this._x=n*d+u*l+r*f-a*c,this._y=r*d+u*c+a*l-n*f,this._z=a*d+u*f+n*c-r*l,this._w=u*d-n*l-r*c-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,a=this._z,u=this._w;let l=u*t._w+n*t._x+r*t._y+a*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=u,this._x=n,this._y=r,this._z=a,this;const c=1-l*l;if(c<=Number.EPSILON){const m=1-e;return this._w=m*u+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*a+e*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(c),d=Math.atan2(f,l),_=Math.sin((1-e)*d)/f,p=Math.sin(e*d)/f;return this._w=u*_+this._w*p,this._x=n*_+this._x*p,this._y=r*_+this._y*p,this._z=a*_+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(a),n*Math.cos(a),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,e=0,n=0){tt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lx.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lx.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*r,this.y=a[1]*e+a[4]*n+a[7]*r,this.z=a[2]*e+a[5]*n+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=t.elements,u=1/(a[3]*e+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*e+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*e+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,a=t.x,u=t.y,l=t.z,c=t.w,f=2*(u*r-l*n),d=2*(l*e-a*r),_=2*(a*n-u*e);return this.x=e+c*f+u*_-l*d,this.y=n+c*d+l*f-a*_,this.z=r+c*_+a*d-u*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r,this.y=a[1]*e+a[5]*n+a[9]*r,this.z=a[2]*e+a[6]*n+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,a=t.z,u=e.x,l=e.y,c=e.z;return this.x=r*c-a*l,this.y=a*u-n*c,this.z=n*l-r*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ap.copy(this).projectOnVector(t),this.sub(ap)}reflect(t){return this.sub(ap.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ap=new tt,lx=new Xa;class Uu{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xr.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xr.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let u=0,l=a.count;u<l;u++)t.isMesh===!0?t.getVertexPosition(u,xr):xr.fromBufferAttribute(a,u),xr.applyMatrix4(t.matrixWorld),this.expandByPoint(xr);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kc.copy(n.boundingBox)),kc.applyMatrix4(t.matrixWorld),this.union(kc)}const r=t.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xr),xr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hl),Hc.subVectors(this.max,Hl),Mo.subVectors(t.a,Hl),Eo.subVectors(t.b,Hl),To.subVectors(t.c,Hl),Ps.subVectors(Eo,Mo),Ls.subVectors(To,Eo),pa.subVectors(Mo,To);let e=[0,-Ps.z,Ps.y,0,-Ls.z,Ls.y,0,-pa.z,pa.y,Ps.z,0,-Ps.x,Ls.z,0,-Ls.x,pa.z,0,-pa.x,-Ps.y,Ps.x,0,-Ls.y,Ls.x,0,-pa.y,pa.x,0];return!op(e,Mo,Eo,To,Hc)||(e=[1,0,0,0,1,0,0,0,1],!op(e,Mo,Eo,To,Hc))?!1:(Gc.crossVectors(Ps,Ls),e=[Gc.x,Gc.y,Gc.z],op(e,Mo,Eo,To,Hc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xr).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xr).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ns=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],xr=new tt,kc=new Uu,Mo=new tt,Eo=new tt,To=new tt,Ps=new tt,Ls=new tt,pa=new tt,Hl=new tt,Hc=new tt,Gc=new tt,ma=new tt;function op(i,t,e,n,r){for(let a=0,u=i.length-3;a<=u;a+=3){ma.fromArray(i,a);const l=r.x*Math.abs(ma.x)+r.y*Math.abs(ma.y)+r.z*Math.abs(ma.z),c=t.dot(ma),f=e.dot(ma),d=n.dot(ma);if(Math.max(-Math.max(c,f,d),Math.min(c,f,d))>l)return!1}return!0}const EU=new Uu,Gl=new tt,lp=new tt;class jm{constructor(t=new tt,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):EU.setFromPoints(t).getCenter(n);let r=0;for(let a=0,u=t.length;a<u;a++)r=Math.max(r,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gl.subVectors(t,this.center);const e=Gl.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gl,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gl.copy(t.center).add(lp)),this.expandByPoint(Gl.copy(t.center).sub(lp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const is=new tt,up=new tt,Vc=new tt,Ds=new tt,cp=new tt,Wc=new tt,fp=new tt;class mM{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,is)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=is.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(is.copy(this.origin).addScaledVector(this.direction,e),is.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){up.copy(t).add(e).multiplyScalar(.5),Vc.copy(e).sub(t).normalize(),Ds.copy(this.origin).sub(up);const a=t.distanceTo(e)*.5,u=-this.direction.dot(Vc),l=Ds.dot(this.direction),c=-Ds.dot(Vc),f=Ds.lengthSq(),d=Math.abs(1-u*u);let _,p,m,S;if(d>0)if(_=u*c-l,p=u*l-c,S=a*d,_>=0)if(p>=-S)if(p<=S){const y=1/d;_*=y,p*=y,m=_*(_+u*p+2*l)+p*(u*_+p+2*c)+f}else p=a,_=Math.max(0,-(u*p+l)),m=-_*_+p*(p+2*c)+f;else p=-a,_=Math.max(0,-(u*p+l)),m=-_*_+p*(p+2*c)+f;else p<=-S?(_=Math.max(0,-(-u*a+l)),p=_>0?-a:Math.min(Math.max(-a,-c),a),m=-_*_+p*(p+2*c)+f):p<=S?(_=0,p=Math.min(Math.max(-a,-c),a),m=p*(p+2*c)+f):(_=Math.max(0,-(u*a+l)),p=_>0?a:Math.min(Math.max(-a,-c),a),m=-_*_+p*(p+2*c)+f);else p=u>0?-a:a,_=Math.max(0,-(u*p+l)),m=-_*_+p*(p+2*c)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(up).addScaledVector(Vc,p),m}intersectSphere(t,e){is.subVectors(t.center,this.origin);const n=is.dot(this.direction),r=is.dot(is)-n*n,a=t.radius*t.radius;if(r>a)return null;const u=Math.sqrt(a-r),l=n-u,c=n+u;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,a,u,l,c;const f=1/this.direction.x,d=1/this.direction.y,_=1/this.direction.z,p=this.origin;return f>=0?(n=(t.min.x-p.x)*f,r=(t.max.x-p.x)*f):(n=(t.max.x-p.x)*f,r=(t.min.x-p.x)*f),d>=0?(a=(t.min.y-p.y)*d,u=(t.max.y-p.y)*d):(a=(t.max.y-p.y)*d,u=(t.min.y-p.y)*d),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),_>=0?(l=(t.min.z-p.z)*_,c=(t.max.z-p.z)*_):(l=(t.max.z-p.z)*_,c=(t.min.z-p.z)*_),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,is)!==null}intersectTriangle(t,e,n,r,a){cp.subVectors(e,t),Wc.subVectors(n,t),fp.crossVectors(cp,Wc);let u=this.direction.dot(fp),l;if(u>0){if(r)return null;l=1}else if(u<0)l=-1,u=-u;else return null;Ds.subVectors(this.origin,t);const c=l*this.direction.dot(Wc.crossVectors(Ds,Wc));if(c<0)return null;const f=l*this.direction.dot(cp.cross(Ds));if(f<0||c+f>u)return null;const d=-l*Ds.dot(fp);return d<0?null:this.at(d/u,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An{constructor(t,e,n,r,a,u,l,c,f,d,_,p,m,S,y,x){An.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,u,l,c,f,d,_,p,m,S,y,x)}set(t,e,n,r,a,u,l,c,f,d,_,p,m,S,y,x){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=a,g[5]=u,g[9]=l,g[13]=c,g[2]=f,g[6]=d,g[10]=_,g[14]=p,g[3]=m,g[7]=S,g[11]=y,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new An().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/wo.setFromMatrixColumn(t,0).length(),a=1/wo.setFromMatrixColumn(t,1).length(),u=1/wo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*u,e[9]=n[9]*u,e[10]=n[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,a=t.z,u=Math.cos(n),l=Math.sin(n),c=Math.cos(r),f=Math.sin(r),d=Math.cos(a),_=Math.sin(a);if(t.order==="XYZ"){const p=u*d,m=u*_,S=l*d,y=l*_;e[0]=c*d,e[4]=-c*_,e[8]=f,e[1]=m+S*f,e[5]=p-y*f,e[9]=-l*c,e[2]=y-p*f,e[6]=S+m*f,e[10]=u*c}else if(t.order==="YXZ"){const p=c*d,m=c*_,S=f*d,y=f*_;e[0]=p+y*l,e[4]=S*l-m,e[8]=u*f,e[1]=u*_,e[5]=u*d,e[9]=-l,e[2]=m*l-S,e[6]=y+p*l,e[10]=u*c}else if(t.order==="ZXY"){const p=c*d,m=c*_,S=f*d,y=f*_;e[0]=p-y*l,e[4]=-u*_,e[8]=S+m*l,e[1]=m+S*l,e[5]=u*d,e[9]=y-p*l,e[2]=-u*f,e[6]=l,e[10]=u*c}else if(t.order==="ZYX"){const p=u*d,m=u*_,S=l*d,y=l*_;e[0]=c*d,e[4]=S*f-m,e[8]=p*f+y,e[1]=c*_,e[5]=y*f+p,e[9]=m*f-S,e[2]=-f,e[6]=l*c,e[10]=u*c}else if(t.order==="YZX"){const p=u*c,m=u*f,S=l*c,y=l*f;e[0]=c*d,e[4]=y-p*_,e[8]=S*_+m,e[1]=_,e[5]=u*d,e[9]=-l*d,e[2]=-f*d,e[6]=m*_+S,e[10]=p-y*_}else if(t.order==="XZY"){const p=u*c,m=u*f,S=l*c,y=l*f;e[0]=c*d,e[4]=-_,e[8]=f*d,e[1]=p*_+y,e[5]=u*d,e[9]=m*_-S,e[2]=S*_-m,e[6]=l*d,e[10]=y*_+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(TU,t,wU)}lookAt(t,e,n){const r=this.elements;return Ii.subVectors(t,e),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),Is.crossVectors(n,Ii),Is.lengthSq()===0&&(Math.abs(n.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),Is.crossVectors(n,Ii)),Is.normalize(),Xc.crossVectors(Ii,Is),r[0]=Is.x,r[4]=Xc.x,r[8]=Ii.x,r[1]=Is.y,r[5]=Xc.y,r[9]=Ii.y,r[2]=Is.z,r[6]=Xc.z,r[10]=Ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,u=n[0],l=n[4],c=n[8],f=n[12],d=n[1],_=n[5],p=n[9],m=n[13],S=n[2],y=n[6],x=n[10],g=n[14],R=n[3],E=n[7],w=n[11],C=n[15],U=r[0],b=r[4],k=r[8],T=r[12],L=r[1],Z=r[5],X=r[9],ut=r[13],z=r[2],K=r[6],st=r[10],$=r[14],lt=r[3],ct=r[7],N=r[11],V=r[15];return a[0]=u*U+l*L+c*z+f*lt,a[4]=u*b+l*Z+c*K+f*ct,a[8]=u*k+l*X+c*st+f*N,a[12]=u*T+l*ut+c*$+f*V,a[1]=d*U+_*L+p*z+m*lt,a[5]=d*b+_*Z+p*K+m*ct,a[9]=d*k+_*X+p*st+m*N,a[13]=d*T+_*ut+p*$+m*V,a[2]=S*U+y*L+x*z+g*lt,a[6]=S*b+y*Z+x*K+g*ct,a[10]=S*k+y*X+x*st+g*N,a[14]=S*T+y*ut+x*$+g*V,a[3]=R*U+E*L+w*z+C*lt,a[7]=R*b+E*Z+w*K+C*ct,a[11]=R*k+E*X+w*st+C*N,a[15]=R*T+E*ut+w*$+C*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],a=t[12],u=t[1],l=t[5],c=t[9],f=t[13],d=t[2],_=t[6],p=t[10],m=t[14],S=t[3],y=t[7],x=t[11],g=t[15];return S*(+a*c*_-r*f*_-a*l*p+n*f*p+r*l*m-n*c*m)+y*(+e*c*m-e*f*p+a*u*p-r*u*m+r*f*d-a*c*d)+x*(+e*f*_-e*l*m-a*u*_+n*u*m+a*l*d-n*f*d)+g*(-r*l*d-e*c*_+e*l*p+r*u*_-n*u*p+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],u=t[4],l=t[5],c=t[6],f=t[7],d=t[8],_=t[9],p=t[10],m=t[11],S=t[12],y=t[13],x=t[14],g=t[15],R=_*x*f-y*p*f+y*c*m-l*x*m-_*c*g+l*p*g,E=S*p*f-d*x*f-S*c*m+u*x*m+d*c*g-u*p*g,w=d*y*f-S*_*f+S*l*m-u*y*m-d*l*g+u*_*g,C=S*_*c-d*y*c-S*l*p+u*y*p+d*l*x-u*_*x,U=e*R+n*E+r*w+a*C;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/U;return t[0]=R*b,t[1]=(y*p*a-_*x*a-y*r*m+n*x*m+_*r*g-n*p*g)*b,t[2]=(l*x*a-y*c*a+y*r*f-n*x*f-l*r*g+n*c*g)*b,t[3]=(_*c*a-l*p*a-_*r*f+n*p*f+l*r*m-n*c*m)*b,t[4]=E*b,t[5]=(d*x*a-S*p*a+S*r*m-e*x*m-d*r*g+e*p*g)*b,t[6]=(S*c*a-u*x*a-S*r*f+e*x*f+u*r*g-e*c*g)*b,t[7]=(u*p*a-d*c*a+d*r*f-e*p*f-u*r*m+e*c*m)*b,t[8]=w*b,t[9]=(S*_*a-d*y*a-S*n*m+e*y*m+d*n*g-e*_*g)*b,t[10]=(u*y*a-S*l*a+S*n*f-e*y*f-u*n*g+e*l*g)*b,t[11]=(d*l*a-u*_*a-d*n*f+e*_*f+u*n*m-e*l*m)*b,t[12]=C*b,t[13]=(d*y*r-S*_*r+S*n*p-e*y*p-d*n*x+e*_*x)*b,t[14]=(S*l*r-u*y*r-S*n*c+e*y*c+u*n*x-e*l*x)*b,t[15]=(u*_*r-d*l*r+d*n*c-e*_*c-u*n*p+e*l*p)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,a=t.z;return e[0]*=n,e[4]*=r,e[8]*=a,e[1]*=n,e[5]*=r,e[9]*=a,e[2]*=n,e[6]*=r,e[10]*=a,e[3]*=n,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),a=1-n,u=t.x,l=t.y,c=t.z,f=a*u,d=a*l;return this.set(f*u+n,f*l-r*c,f*c+r*l,0,f*l+r*c,d*l+n,d*c-r*u,0,f*c-r*l,d*c+r*u,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,a,u){return this.set(1,n,a,0,t,1,u,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,a=e._x,u=e._y,l=e._z,c=e._w,f=a+a,d=u+u,_=l+l,p=a*f,m=a*d,S=a*_,y=u*d,x=u*_,g=l*_,R=c*f,E=c*d,w=c*_,C=n.x,U=n.y,b=n.z;return r[0]=(1-(y+g))*C,r[1]=(m+w)*C,r[2]=(S-E)*C,r[3]=0,r[4]=(m-w)*U,r[5]=(1-(p+g))*U,r[6]=(x+R)*U,r[7]=0,r[8]=(S+E)*b,r[9]=(x-R)*b,r[10]=(1-(p+y))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let a=wo.set(r[0],r[1],r[2]).length();const u=wo.set(r[4],r[5],r[6]).length(),l=wo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],yr.copy(this);const f=1/a,d=1/u,_=1/l;return yr.elements[0]*=f,yr.elements[1]*=f,yr.elements[2]*=f,yr.elements[4]*=d,yr.elements[5]*=d,yr.elements[6]*=d,yr.elements[8]*=_,yr.elements[9]*=_,yr.elements[10]*=_,e.setFromRotationMatrix(yr),n.x=a,n.y=u,n.z=l,this}makePerspective(t,e,n,r,a,u,l=ps){const c=this.elements,f=2*a/(e-t),d=2*a/(n-r),_=(e+t)/(e-t),p=(n+r)/(n-r);let m,S;if(l===ps)m=-(u+a)/(u-a),S=-2*u*a/(u-a);else if(l===eh)m=-u/(u-a),S=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=_,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,a,u,l=ps){const c=this.elements,f=1/(e-t),d=1/(n-r),_=1/(u-a),p=(e+t)*f,m=(n+r)*d;let S,y;if(l===ps)S=(u+a)*_,y=-2*_;else if(l===eh)S=a*_,y=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wo=new tt,yr=new An,TU=new tt(0,0,0),wU=new tt(1,1,1),Is=new tt,Xc=new tt,Ii=new tt,ux=new An,cx=new Xa;class gh{constructor(t=0,e=0,n=0,r=gh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,a=r[0],u=r[4],l=r[8],c=r[1],f=r[5],d=r[9],_=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-_,m),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Zn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(Zn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Zn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ux.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ux,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cx.setFromEuler(this),this.setFromQuaternion(cx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gh.DEFAULT_ORDER="XYZ";class _M{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bU=0;const fx=new tt,bo=new Xa,rs=new An,Yc=new tt,Vl=new tt,AU=new tt,RU=new Xa,hx=new tt(1,0,0),dx=new tt(0,1,0),px=new tt(0,0,1),CU={type:"added"},PU={type:"removed"};class ti extends $a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bU++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new tt,e=new gh,n=new Xa,r=new tt(1,1,1);function a(){n.setFromEuler(e,!1)}function u(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new An},normalMatrix:{value:new Re}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _M,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(hx,t)}rotateY(t){return this.rotateOnAxis(dx,t)}rotateZ(t){return this.rotateOnAxis(px,t)}translateOnAxis(t,e){return fx.copy(t).applyQuaternion(this.quaternion),this.position.add(fx.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hx,t)}translateY(t){return this.translateOnAxis(dx,t)}translateZ(t){return this.translateOnAxis(px,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yc.copy(t):Yc.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(Vl,Yc,this.up):rs.lookAt(Yc,Vl,this.up),this.quaternion.setFromRotationMatrix(rs),r&&(rs.extractRotation(r.matrixWorld),bo.setFromRotationMatrix(rs),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(CU)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(PU)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(rs),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectsByProperty(t,e);u.length>0&&(n=n.concat(u))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,t,AU),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,RU,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const a=e[n];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++){const l=r[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let f=0,d=c.length;f<d;f++){const _=c[f];a(t.shapes,_)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,f=this.material.length;c<f;c++)l.push(a(t.materials,this.material[c]));r.material=l}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(a(t.animations,c))}}if(e){const l=u(t.geometries),c=u(t.materials),f=u(t.textures),d=u(t.images),_=u(t.shapes),p=u(t.skeletons),m=u(t.animations),S=u(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),_.length>0&&(n.shapes=_),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=r,n;function u(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ti.DEFAULT_UP=new tt(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sr=new tt,ss=new tt,hp=new tt,as=new tt,Ao=new tt,Ro=new tt,mx=new tt,dp=new tt,pp=new tt,mp=new tt;let qc=!1;class Tr{constructor(t=new tt,e=new tt,n=new tt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Sr.subVectors(t,e),r.cross(Sr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,n,r,a){Sr.subVectors(r,e),ss.subVectors(n,e),hp.subVectors(t,e);const u=Sr.dot(Sr),l=Sr.dot(ss),c=Sr.dot(hp),f=ss.dot(ss),d=ss.dot(hp),_=u*f-l*l;if(_===0)return a.set(-2,-1,-1);const p=1/_,m=(f*c-l*d)*p,S=(u*d-l*c)*p;return a.set(1-m-S,S,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,as),as.x>=0&&as.y>=0&&as.x+as.y<=1}static getUV(t,e,n,r,a,u,l,c){return qc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qc=!0),this.getInterpolation(t,e,n,r,a,u,l,c)}static getInterpolation(t,e,n,r,a,u,l,c){return this.getBarycoord(t,e,n,r,as),c.setScalar(0),c.addScaledVector(a,as.x),c.addScaledVector(u,as.y),c.addScaledVector(l,as.z),c}static isFrontFacing(t,e,n,r){return Sr.subVectors(n,e),ss.subVectors(t,e),Sr.cross(ss).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sr.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Sr.cross(ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tr.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,a){return qc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qc=!0),Tr.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}getInterpolation(t,e,n,r,a){return Tr.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}containsPoint(t){return Tr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,a=this.c;let u,l;Ao.subVectors(r,n),Ro.subVectors(a,n),dp.subVectors(t,n);const c=Ao.dot(dp),f=Ro.dot(dp);if(c<=0&&f<=0)return e.copy(n);pp.subVectors(t,r);const d=Ao.dot(pp),_=Ro.dot(pp);if(d>=0&&_<=d)return e.copy(r);const p=c*_-d*f;if(p<=0&&c>=0&&d<=0)return u=c/(c-d),e.copy(n).addScaledVector(Ao,u);mp.subVectors(t,a);const m=Ao.dot(mp),S=Ro.dot(mp);if(S>=0&&m<=S)return e.copy(a);const y=m*f-c*S;if(y<=0&&f>=0&&S<=0)return l=f/(f-S),e.copy(n).addScaledVector(Ro,l);const x=d*S-m*_;if(x<=0&&_-d>=0&&m-S>=0)return mx.subVectors(a,r),l=(_-d)/(_-d+(m-S)),e.copy(r).addScaledVector(mx,l);const g=1/(x+y+p);return u=y*g,l=p*g,e.copy(n).addScaledVector(Ao,u).addScaledVector(Ro,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},$c={h:0,s:0,l:0};function _p(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class He{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ye.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Ye.workingColorSpace){if(t=Qm(t,1),e=Zn(e,0,1),n=Zn(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,u=2*n-a;this.r=_p(u,a,t+1/3),this.g=_p(u,a,t),this.b=_p(u,a,t-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(t,e=Hn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const u=r[1],l=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Hn){const n=gM[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nl(t.r),this.g=nl(t.g),this.b=nl(t.b),this}copyLinearToSRGB(t){return this.r=rp(t.r),this.g=rp(t.g),this.b=rp(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hn){return Ye.fromWorkingColorSpace($n.copy(this),t),Math.round(Zn($n.r*255,0,255))*65536+Math.round(Zn($n.g*255,0,255))*256+Math.round(Zn($n.b*255,0,255))}getHexString(t=Hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ye.workingColorSpace){Ye.fromWorkingColorSpace($n.copy(this),e);const n=$n.r,r=$n.g,a=$n.b,u=Math.max(n,r,a),l=Math.min(n,r,a);let c,f;const d=(l+u)/2;if(l===u)c=0,f=0;else{const _=u-l;switch(f=d<=.5?_/(u+l):_/(2-u-l),u){case n:c=(r-a)/_+(r<a?6:0);break;case r:c=(a-n)/_+2;break;case a:c=(n-r)/_+4;break}c/=6}return t.h=c,t.s=f,t.l=d,t}getRGB(t,e=Ye.workingColorSpace){return Ye.fromWorkingColorSpace($n.copy(this),e),t.r=$n.r,t.g=$n.g,t.b=$n.b,t}getStyle(t=Hn){Ye.fromWorkingColorSpace($n.copy(this),t);const e=$n.r,n=$n.g,r=$n.b;return t!==Hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+e,Us.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Us),t.getHSL($c);const n=du(Us.h,$c.h,e),r=du(Us.s,$c.s,e),a=du(Us.l,$c.l,e);return this.setHSL(n,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*r,this.g=a[1]*e+a[4]*n+a[7]*r,this.b=a[2]*e+a[5]*n+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new He;He.NAMES=gM;let LU=0;class Nu extends $a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LU++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=el,this.side=ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=um,this.blendDst=cm,this.blendEquation=Ma,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Jf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ex,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==el&&(n.blending=this.blending),this.side!==ea&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==um&&(n.blendSrc=this.blendSrc),this.blendDst!==cm&&(n.blendDst=this.blendDst),this.blendEquation!==Ma&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jf&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ex&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const u=[];for(const l in a){const c=a[l];delete c.metadata,u.push(c)}return u}if(e){const a=r(t.textures),u=r(t.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vM extends Nu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yn=new tt,Kc=new Me;class Gr{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nx,this.updateRange={offset:0,count:-1},this.gpuType=Ws,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kc.fromBufferAttribute(this,e),Kc.applyMatrix3(t),this.setXY(e,Kc.x,Kc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix3(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ho(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ho(e,this.array)),e}setX(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ho(e,this.array)),e}setY(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ho(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ho(e,this.array)),e}setW(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array),r=oi(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array),r=oi(r,this.array),a=oi(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nx&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class xM extends Gr{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yM extends Gr{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ba extends Gr{constructor(t,e,n){super(new Float32Array(t),e,n)}}let DU=0;const er=new An,gp=new ti,Co=new tt,Ui=new Uu,Wl=new Uu,Dn=new tt;class Ka extends $a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DU++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fM(t)?yM:xM)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Re().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return er.makeRotationFromQuaternion(t),this.applyMatrix4(er),this}rotateX(t){return er.makeRotationX(t),this.applyMatrix4(er),this}rotateY(t){return er.makeRotationY(t),this.applyMatrix4(er),this}rotateZ(t){return er.makeRotationZ(t),this.applyMatrix4(er),this}translate(t,e,n){return er.makeTranslation(t,e,n),this.applyMatrix4(er),this}scale(t,e,n){return er.makeScale(t,e,n),this.applyMatrix4(er),this}lookAt(t){return gp.lookAt(t),gp.updateMatrix(),this.applyMatrix4(gp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ba(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const a=e[n];Ui.setFromBufferAttribute(a),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jm);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new tt,1/0);return}if(t){const n=this.boundingSphere.center;if(Ui.setFromBufferAttribute(t),e)for(let a=0,u=e.length;a<u;a++){const l=e[a];Wl.setFromBufferAttribute(l),this.morphTargetsRelative?(Dn.addVectors(Ui.min,Wl.min),Ui.expandByPoint(Dn),Dn.addVectors(Ui.max,Wl.max),Ui.expandByPoint(Dn)):(Ui.expandByPoint(Wl.min),Ui.expandByPoint(Wl.max))}Ui.getCenter(n);let r=0;for(let a=0,u=t.count;a<u;a++)Dn.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(Dn));if(e)for(let a=0,u=e.length;a<u;a++){const l=e[a],c=this.morphTargetsRelative;for(let f=0,d=l.count;f<d;f++)Dn.fromBufferAttribute(l,f),c&&(Co.fromBufferAttribute(t,f),Dn.add(Co)),r=Math.max(r,n.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,a=e.normal.array,u=e.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gr(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,f=[],d=[];for(let L=0;L<l;L++)f[L]=new tt,d[L]=new tt;const _=new tt,p=new tt,m=new tt,S=new Me,y=new Me,x=new Me,g=new tt,R=new tt;function E(L,Z,X){_.fromArray(r,L*3),p.fromArray(r,Z*3),m.fromArray(r,X*3),S.fromArray(u,L*2),y.fromArray(u,Z*2),x.fromArray(u,X*2),p.sub(_),m.sub(_),y.sub(S),x.sub(S);const ut=1/(y.x*x.y-x.x*y.y);isFinite(ut)&&(g.copy(p).multiplyScalar(x.y).addScaledVector(m,-y.y).multiplyScalar(ut),R.copy(m).multiplyScalar(y.x).addScaledVector(p,-x.x).multiplyScalar(ut),f[L].add(g),f[Z].add(g),f[X].add(g),d[L].add(R),d[Z].add(R),d[X].add(R))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let L=0,Z=w.length;L<Z;++L){const X=w[L],ut=X.start,z=X.count;for(let K=ut,st=ut+z;K<st;K+=3)E(n[K+0],n[K+1],n[K+2])}const C=new tt,U=new tt,b=new tt,k=new tt;function T(L){b.fromArray(a,L*3),k.copy(b);const Z=f[L];C.copy(Z),C.sub(b.multiplyScalar(b.dot(Z))).normalize(),U.crossVectors(k,Z);const ut=U.dot(d[L])<0?-1:1;c[L*4]=C.x,c[L*4+1]=C.y,c[L*4+2]=C.z,c[L*4+3]=ut}for(let L=0,Z=w.length;L<Z;++L){const X=w[L],ut=X.start,z=X.count;for(let K=ut,st=ut+z;K<st;K+=3)T(n[K+0]),T(n[K+1]),T(n[K+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gr(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new tt,a=new tt,u=new tt,l=new tt,c=new tt,f=new tt,d=new tt,_=new tt;if(t)for(let p=0,m=t.count;p<m;p+=3){const S=t.getX(p+0),y=t.getX(p+1),x=t.getX(p+2);r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,y),u.fromBufferAttribute(e,x),d.subVectors(u,a),_.subVectors(r,a),d.cross(_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,y),f.fromBufferAttribute(n,x),l.add(d),c.add(d),f.add(d),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),u.fromBufferAttribute(e,p+2),d.subVectors(u,a),_.subVectors(r,a),d.cross(_),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Dn.fromBufferAttribute(t,e),Dn.normalize(),t.setXYZ(e,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function t(l,c){const f=l.array,d=l.itemSize,_=l.normalized,p=new f.constructor(c.length*d);let m=0,S=0;for(let y=0,x=c.length;y<x;y++){l.isInterleavedBufferAttribute?m=c[y]*l.data.stride+l.offset:m=c[y]*d;for(let g=0;g<d;g++)p[S++]=f[m++]}return new Gr(p,d,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ka,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],f=t(c,n);e.setAttribute(l,f)}const a=this.morphAttributes;for(const l in a){const c=[],f=a[l];for(let d=0,_=f.length;d<_;d++){const p=f[d],m=t(p,n);c.push(m)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let l=0,c=u.length;l<c;l++){const f=u[l];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(t[f]=c[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const f=n[c];t.data.attributes[c]=f.toJSON(t.data)}const r={};let a=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],d=[];for(let _=0,p=f.length;_<p;_++){const m=f[_];d.push(m.toJSON(t.data))}d.length>0&&(r[c]=d,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const f in r){const d=r[f];this.setAttribute(f,d.clone(e))}const a=t.morphAttributes;for(const f in a){const d=[],_=a[f];for(let p=0,m=_.length;p<m;p++)d.push(_[p].clone(e));this.morphAttributes[f]=d}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let f=0,d=u.length;f<d;f++){const _=u[f];this.addGroup(_.start,_.count,_.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _x=new An,_a=new mM,Zc=new jm,gx=new tt,Po=new tt,Lo=new tt,Do=new tt,vp=new tt,Jc=new tt,Qc=new Me,jc=new Me,tf=new Me,vx=new tt,xx=new tt,yx=new tt,ef=new tt,nf=new tt;class ms extends ti{constructor(t=new Ka,e=new vM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(a&&l){Jc.set(0,0,0);for(let c=0,f=a.length;c<f;c++){const d=l[c],_=a[c];d!==0&&(vp.fromBufferAttribute(_,t),u?Jc.addScaledVector(vp,d):Jc.addScaledVector(vp.sub(e),d))}e.add(Jc)}return e}raycast(t,e){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zc.copy(n.boundingSphere),Zc.applyMatrix4(a),_a.copy(t.ray).recast(t.near),!(Zc.containsPoint(_a.origin)===!1&&(_a.intersectSphere(Zc,gx)===null||_a.origin.distanceToSquared(gx)>(t.far-t.near)**2))&&(_x.copy(a).invert(),_a.copy(t.ray).applyMatrix4(_x),!(n.boundingBox!==null&&_a.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_a)))}_computeIntersections(t,e,n){let r;const a=this.geometry,u=this.material,l=a.index,c=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,_=a.attributes.normal,p=a.groups,m=a.drawRange;if(l!==null)if(Array.isArray(u))for(let S=0,y=p.length;S<y;S++){const x=p[S],g=u[x.materialIndex],R=Math.max(x.start,m.start),E=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let w=R,C=E;w<C;w+=3){const U=l.getX(w),b=l.getX(w+1),k=l.getX(w+2);r=rf(this,g,t,n,f,d,_,U,b,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let x=S,g=y;x<g;x+=3){const R=l.getX(x),E=l.getX(x+1),w=l.getX(x+2);r=rf(this,u,t,n,f,d,_,R,E,w),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(u))for(let S=0,y=p.length;S<y;S++){const x=p[S],g=u[x.materialIndex],R=Math.max(x.start,m.start),E=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let w=R,C=E;w<C;w+=3){const U=w,b=w+1,k=w+2;r=rf(this,g,t,n,f,d,_,U,b,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let x=S,g=y;x<g;x+=3){const R=x,E=x+1,w=x+2;r=rf(this,u,t,n,f,d,_,R,E,w),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}}function IU(i,t,e,n,r,a,u,l){let c;if(t.side===wi?c=n.intersectTriangle(u,a,r,!0,l):c=n.intersectTriangle(r,a,u,t.side===ea,l),c===null)return null;nf.copy(l),nf.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(nf);return f<e.near||f>e.far?null:{distance:f,point:nf.clone(),object:i}}function rf(i,t,e,n,r,a,u,l,c,f){i.getVertexPosition(l,Po),i.getVertexPosition(c,Lo),i.getVertexPosition(f,Do);const d=IU(i,t,e,n,Po,Lo,Do,ef);if(d){r&&(Qc.fromBufferAttribute(r,l),jc.fromBufferAttribute(r,c),tf.fromBufferAttribute(r,f),d.uv=Tr.getInterpolation(ef,Po,Lo,Do,Qc,jc,tf,new Me)),a&&(Qc.fromBufferAttribute(a,l),jc.fromBufferAttribute(a,c),tf.fromBufferAttribute(a,f),d.uv1=Tr.getInterpolation(ef,Po,Lo,Do,Qc,jc,tf,new Me),d.uv2=d.uv1),u&&(vx.fromBufferAttribute(u,l),xx.fromBufferAttribute(u,c),yx.fromBufferAttribute(u,f),d.normal=Tr.getInterpolation(ef,Po,Lo,Do,vx,xx,yx,new tt),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const _={a:l,b:c,c:f,normal:new tt,materialIndex:0};Tr.getNormal(Po,Lo,Do,_.normal),d.face=_}return d}class _l extends Ka{constructor(t=1,e=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const l=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const c=[],f=[],d=[],_=[];let p=0,m=0;S("z","y","x",-1,-1,n,e,t,u,a,0),S("z","y","x",1,-1,n,e,-t,u,a,1),S("x","z","y",1,1,t,n,e,r,u,2),S("x","z","y",1,-1,t,n,-e,r,u,3),S("x","y","z",1,-1,t,e,n,r,a,4),S("x","y","z",-1,-1,t,e,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Ba(f,3)),this.setAttribute("normal",new Ba(d,3)),this.setAttribute("uv",new Ba(_,2));function S(y,x,g,R,E,w,C,U,b,k,T){const L=w/b,Z=C/k,X=w/2,ut=C/2,z=U/2,K=b+1,st=k+1;let $=0,lt=0;const ct=new tt;for(let N=0;N<st;N++){const V=N*Z-ut;for(let rt=0;rt<K;rt++){const Lt=rt*L-X;ct[y]=Lt*R,ct[x]=V*E,ct[g]=z,f.push(ct.x,ct.y,ct.z),ct[y]=0,ct[x]=0,ct[g]=U>0?1:-1,d.push(ct.x,ct.y,ct.z),_.push(rt/b),_.push(1-N/k),$+=1}}for(let N=0;N<k;N++)for(let V=0;V<b;V++){const rt=p+V+K*N,Lt=p+V+K*(N+1),wt=p+(V+1)+K*(N+1),bt=p+(V+1)+K*N;c.push(rt,Lt,bt),c.push(Lt,wt,bt),lt+=6}l.addGroup(m,lt,T),m+=lt,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pl(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function li(i){const t={};for(let e=0;e<i.length;e++){const n=pl(i[e]);for(const r in n)t[r]=n[r]}return t}function UU(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function SM(i){return i.getRenderTarget()===null?i.outputColorSpace:Ye.workingColorSpace}const NU={clone:pl,merge:li};var OU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Nu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OU,this.fragmentShader=FU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pl(t.uniforms),this.uniformsGroups=UU(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?e.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[r]={type:"m4",value:u.toArray()}:e.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class MM extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=ps}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class lr extends MM{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pu*2*Math.atan(Math.tan(hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,a,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const c=u.fullWidth,f=u.fullHeight;a+=u.offsetX*r/c,e-=u.offsetY*n/f,r*=u.width/c,n*=u.height/f}const l=this.filmOffset;l!==0&&(a+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Io=-90,Uo=1;class BU extends ti{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new lr(Io,Uo,t,e);r.layers=this.layers,this.add(r);const a=new lr(Io,Uo,t,e);a.layers=this.layers,this.add(a);const u=new lr(Io,Uo,t,e);u.layers=this.layers,this.add(u);const l=new lr(Io,Uo,t,e);l.layers=this.layers,this.add(l);const c=new lr(Io,Uo,t,e);c.layers=this.layers,this.add(c);const f=new lr(Io,Uo,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,a,u,l,c]=e;for(const f of e)this.remove(f);if(t===ps)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===eh)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,u,l,c,f,d]=this.children,_=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,a),t.setRenderTarget(n,1,r),t.render(e,u),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,f),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(_,p,m),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class EM extends Vi{constructor(t,e,n,r,a,u,l,c,f,d){t=t!==void 0?t:[],e=e!==void 0?e:fl,super(t,e,n,r,a,u,l,c,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zU extends Wa{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(pu("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fa?Hn:ur),this.texture=new EM(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:or}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _l(5,5,5),a=new Ya({name:"CubemapFromEquirect",uniforms:pl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wi,blending:Ks});a.uniforms.tEquirect.value=e;const u=new ms(r,a),l=e.minFilter;return e.minFilter===Ru&&(e.minFilter=or),new BU(1,10,this).update(t,u),e.minFilter=l,u.geometry.dispose(),u.material.dispose(),this}clear(t,e,n,r){const a=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,n,r);t.setRenderTarget(a)}}const xp=new tt,kU=new tt,HU=new Re;class Fs{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=xp.subVectors(n,e).cross(kU.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xp),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||HU.getNormalMatrix(t),r=this.coplanarPoint(xp).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ga=new jm,sf=new tt;class t_{constructor(t=new Fs,e=new Fs,n=new Fs,r=new Fs,a=new Fs,u=new Fs){this.planes=[t,e,n,r,a,u]}set(t,e,n,r,a,u){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(u),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ps){const n=this.planes,r=t.elements,a=r[0],u=r[1],l=r[2],c=r[3],f=r[4],d=r[5],_=r[6],p=r[7],m=r[8],S=r[9],y=r[10],x=r[11],g=r[12],R=r[13],E=r[14],w=r[15];if(n[0].setComponents(c-a,p-f,x-m,w-g).normalize(),n[1].setComponents(c+a,p+f,x+m,w+g).normalize(),n[2].setComponents(c+u,p+d,x+S,w+R).normalize(),n[3].setComponents(c-u,p-d,x-S,w-R).normalize(),n[4].setComponents(c-l,p-_,x-y,w-E).normalize(),e===ps)n[5].setComponents(c+l,p+_,x+y,w+E).normalize();else if(e===eh)n[5].setComponents(l,_,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ga.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ga.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ga)}intersectsSprite(t){return ga.center.set(0,0,0),ga.radius=.7071067811865476,ga.applyMatrix4(t.matrixWorld),this.intersectsSphere(ga)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(sf.x=r.normal.x>0?t.max.x:t.min.x,sf.y=r.normal.y>0?t.max.y:t.min.y,sf.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(sf)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function TM(){let i=null,t=!1,e=null,n=null;function r(a,u){e(a,u),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function GU(i,t){const e=t.isWebGL2,n=new WeakMap;function r(f,d){const _=f.array,p=f.usage,m=i.createBuffer();i.bindBuffer(d,m),i.bufferData(d,_,p),f.onUploadCallback();let S;if(_ instanceof Float32Array)S=i.FLOAT;else if(_ instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(e)S=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=i.UNSIGNED_SHORT;else if(_ instanceof Int16Array)S=i.SHORT;else if(_ instanceof Uint32Array)S=i.UNSIGNED_INT;else if(_ instanceof Int32Array)S=i.INT;else if(_ instanceof Int8Array)S=i.BYTE;else if(_ instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:m,type:S,bytesPerElement:_.BYTES_PER_ELEMENT,version:f.version}}function a(f,d,_){const p=d.array,m=d.updateRange;i.bindBuffer(_,f),m.count===-1?i.bufferSubData(_,0,p):(e?i.bufferSubData(_,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(_,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function u(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=n.get(f);d&&(i.deleteBuffer(d.buffer),n.delete(f))}function c(f,d){if(f.isGLBufferAttribute){const p=n.get(f);(!p||p.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const _=n.get(f);_===void 0?n.set(f,r(f,d)):_.version<f.version&&(a(_.buffer,f,d),_.version=f.version)}return{get:u,remove:l,update:c}}class e_ extends Ka{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const a=t/2,u=e/2,l=Math.floor(n),c=Math.floor(r),f=l+1,d=c+1,_=t/l,p=e/c,m=[],S=[],y=[],x=[];for(let g=0;g<d;g++){const R=g*p-u;for(let E=0;E<f;E++){const w=E*_-a;S.push(w,-R,0),y.push(0,0,1),x.push(E/l),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let R=0;R<l;R++){const E=R+f*g,w=R+f*(g+1),C=R+1+f*(g+1),U=R+1+f*g;m.push(E,w,U),m.push(w,C,U)}this.setIndex(m),this.setAttribute("position",new Ba(S,3)),this.setAttribute("normal",new Ba(y,3)),this.setAttribute("uv",new Ba(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e_(t.width,t.height,t.widthSegments,t.heightSegments)}}var VU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WU=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qU=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$U=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tN=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nN=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,iN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uN=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fN=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hN=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_N=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gN="gl_FragColor = linearToOutputTexel( gl_FragColor );",vN=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CN=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,PN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DN=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IN=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UN=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ON=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BN=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,kN=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VN=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WN=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XN=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YN=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qN=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$N=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tO=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eO=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nO=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iO=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rO=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sO=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lO=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uO=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cO=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fO=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hO=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dO=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pO=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mO=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_O=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gO=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vO=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xO=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yO=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SO=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MO=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,EO=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TO=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wO=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bO=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AO=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,RO=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CO=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PO=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LO=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DO=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IO=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UO=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NO=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zO=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kO=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HO=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VO=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XO=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YO=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qO=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$O=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KO=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JO=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QO=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jO=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t3=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_3=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Te={alphahash_fragment:VU,alphahash_pars_fragment:WU,alphamap_fragment:XU,alphamap_pars_fragment:YU,alphatest_fragment:qU,alphatest_pars_fragment:$U,aomap_fragment:KU,aomap_pars_fragment:ZU,begin_vertex:JU,beginnormal_vertex:QU,bsdfs:jU,iridescence_fragment:tN,bumpmap_pars_fragment:eN,clipping_planes_fragment:nN,clipping_planes_pars_fragment:iN,clipping_planes_pars_vertex:rN,clipping_planes_vertex:sN,color_fragment:aN,color_pars_fragment:oN,color_pars_vertex:lN,color_vertex:uN,common:cN,cube_uv_reflection_fragment:fN,defaultnormal_vertex:hN,displacementmap_pars_vertex:dN,displacementmap_vertex:pN,emissivemap_fragment:mN,emissivemap_pars_fragment:_N,colorspace_fragment:gN,colorspace_pars_fragment:vN,envmap_fragment:xN,envmap_common_pars_fragment:yN,envmap_pars_fragment:SN,envmap_pars_vertex:MN,envmap_physical_pars_fragment:UN,envmap_vertex:EN,fog_vertex:TN,fog_pars_vertex:wN,fog_fragment:bN,fog_pars_fragment:AN,gradientmap_pars_fragment:RN,lightmap_fragment:CN,lightmap_pars_fragment:PN,lights_lambert_fragment:LN,lights_lambert_pars_fragment:DN,lights_pars_begin:IN,lights_toon_fragment:NN,lights_toon_pars_fragment:ON,lights_phong_fragment:FN,lights_phong_pars_fragment:BN,lights_physical_fragment:zN,lights_physical_pars_fragment:kN,lights_fragment_begin:HN,lights_fragment_maps:GN,lights_fragment_end:VN,logdepthbuf_fragment:WN,logdepthbuf_pars_fragment:XN,logdepthbuf_pars_vertex:YN,logdepthbuf_vertex:qN,map_fragment:$N,map_pars_fragment:KN,map_particle_fragment:ZN,map_particle_pars_fragment:JN,metalnessmap_fragment:QN,metalnessmap_pars_fragment:jN,morphcolor_vertex:tO,morphnormal_vertex:eO,morphtarget_pars_vertex:nO,morphtarget_vertex:iO,normal_fragment_begin:rO,normal_fragment_maps:sO,normal_pars_fragment:aO,normal_pars_vertex:oO,normal_vertex:lO,normalmap_pars_fragment:uO,clearcoat_normal_fragment_begin:cO,clearcoat_normal_fragment_maps:fO,clearcoat_pars_fragment:hO,iridescence_pars_fragment:dO,opaque_fragment:pO,packing:mO,premultiplied_alpha_fragment:_O,project_vertex:gO,dithering_fragment:vO,dithering_pars_fragment:xO,roughnessmap_fragment:yO,roughnessmap_pars_fragment:SO,shadowmap_pars_fragment:MO,shadowmap_pars_vertex:EO,shadowmap_vertex:TO,shadowmask_pars_fragment:wO,skinbase_vertex:bO,skinning_pars_vertex:AO,skinning_vertex:RO,skinnormal_vertex:CO,specularmap_fragment:PO,specularmap_pars_fragment:LO,tonemapping_fragment:DO,tonemapping_pars_fragment:IO,transmission_fragment:UO,transmission_pars_fragment:NO,uv_pars_fragment:OO,uv_pars_vertex:FO,uv_vertex:BO,worldpos_vertex:zO,background_vert:kO,background_frag:HO,backgroundCube_vert:GO,backgroundCube_frag:VO,cube_vert:WO,cube_frag:XO,depth_vert:YO,depth_frag:qO,distanceRGBA_vert:$O,distanceRGBA_frag:KO,equirect_vert:ZO,equirect_frag:JO,linedashed_vert:QO,linedashed_frag:jO,meshbasic_vert:t3,meshbasic_frag:e3,meshlambert_vert:n3,meshlambert_frag:i3,meshmatcap_vert:r3,meshmatcap_frag:s3,meshnormal_vert:a3,meshnormal_frag:o3,meshphong_vert:l3,meshphong_frag:u3,meshphysical_vert:c3,meshphysical_frag:f3,meshtoon_vert:h3,meshtoon_frag:d3,points_vert:p3,points_frag:m3,shadow_vert:_3,shadow_frag:g3,sprite_vert:v3,sprite_frag:x3},It={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Or={basic:{uniforms:li([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:li([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new He(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:li([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:li([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:li([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new He(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:li([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:li([It.points,It.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:li([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:li([It.common,It.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:li([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:li([It.sprite,It.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:li([It.common,It.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:li([It.lights,It.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Or.physical={uniforms:li([Or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const af={r:0,b:0,g:0};function y3(i,t,e,n,r,a,u){const l=new He(0);let c=a===!0?0:1,f,d,_=null,p=0,m=null;function S(x,g){let R=!1,E=g.isScene===!0?g.background:null;E&&E.isTexture&&(E=(g.backgroundBlurriness>0?e:t).get(E)),E===null?y(l,c):E&&E.isColor&&(y(E,1),R=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,u):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||R)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===mh)?(d===void 0&&(d=new ms(new _l(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:pl(Or.backgroundCube.uniforms),vertexShader:Or.backgroundCube.vertexShader,fragmentShader:Or.backgroundCube.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,U,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=Ye.getTransfer(E.colorSpace)!==en,(_!==E||p!==E.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,_=E,p=E.version,m=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(f===void 0&&(f=new ms(new e_(2,2),new Ya({name:"BackgroundMaterial",uniforms:pl(Or.background.uniforms),vertexShader:Or.background.vertexShader,fragmentShader:Or.background.fragmentShader,side:ea,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=E,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=Ye.getTransfer(E.colorSpace)!==en,E.matrixAutoUpdate===!0&&E.updateMatrix(),f.material.uniforms.uvTransform.value.copy(E.matrix),(_!==E||p!==E.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,_=E,p=E.version,m=i.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null))}function y(x,g){x.getRGB(af,SM(i)),n.buffers.color.setClear(af.r,af.g,af.b,g,u)}return{getClearColor:function(){return l},setClearColor:function(x,g=1){l.set(x),c=g,y(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,y(l,c)},render:S}}function S3(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:t.get("OES_vertex_array_object"),u=n.isWebGL2||a!==null,l={},c=x(null);let f=c,d=!1;function _(z,K,st,$,lt){let ct=!1;if(u){const N=y($,st,K);f!==N&&(f=N,m(f.object)),ct=g(z,$,st,lt),ct&&R(z,$,st,lt)}else{const N=K.wireframe===!0;(f.geometry!==$.id||f.program!==st.id||f.wireframe!==N)&&(f.geometry=$.id,f.program=st.id,f.wireframe=N,ct=!0)}lt!==null&&e.update(lt,i.ELEMENT_ARRAY_BUFFER),(ct||d)&&(d=!1,k(z,K,st,$),lt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(lt).buffer))}function p(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(z){return n.isWebGL2?i.bindVertexArray(z):a.bindVertexArrayOES(z)}function S(z){return n.isWebGL2?i.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function y(z,K,st){const $=st.wireframe===!0;let lt=l[z.id];lt===void 0&&(lt={},l[z.id]=lt);let ct=lt[K.id];ct===void 0&&(ct={},lt[K.id]=ct);let N=ct[$];return N===void 0&&(N=x(p()),ct[$]=N),N}function x(z){const K=[],st=[],$=[];for(let lt=0;lt<r;lt++)K[lt]=0,st[lt]=0,$[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:st,attributeDivisors:$,object:z,attributes:{},index:null}}function g(z,K,st,$){const lt=f.attributes,ct=K.attributes;let N=0;const V=st.getAttributes();for(const rt in V)if(V[rt].location>=0){const wt=lt[rt];let bt=ct[rt];if(bt===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(bt=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(bt=z.instanceColor)),wt===void 0||wt.attribute!==bt||bt&&wt.data!==bt.data)return!0;N++}return f.attributesNum!==N||f.index!==$}function R(z,K,st,$){const lt={},ct=K.attributes;let N=0;const V=st.getAttributes();for(const rt in V)if(V[rt].location>=0){let wt=ct[rt];wt===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(wt=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(wt=z.instanceColor));const bt={};bt.attribute=wt,wt&&wt.data&&(bt.data=wt.data),lt[rt]=bt,N++}f.attributes=lt,f.attributesNum=N,f.index=$}function E(){const z=f.newAttributes;for(let K=0,st=z.length;K<st;K++)z[K]=0}function w(z){C(z,0)}function C(z,K){const st=f.newAttributes,$=f.enabledAttributes,lt=f.attributeDivisors;st[z]=1,$[z]===0&&(i.enableVertexAttribArray(z),$[z]=1),lt[z]!==K&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,K),lt[z]=K)}function U(){const z=f.newAttributes,K=f.enabledAttributes;for(let st=0,$=K.length;st<$;st++)K[st]!==z[st]&&(i.disableVertexAttribArray(st),K[st]=0)}function b(z,K,st,$,lt,ct,N){N===!0?i.vertexAttribIPointer(z,K,st,lt,ct):i.vertexAttribPointer(z,K,st,$,lt,ct)}function k(z,K,st,$){if(n.isWebGL2===!1&&(z.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();const lt=$.attributes,ct=st.getAttributes(),N=K.defaultAttributeValues;for(const V in ct){const rt=ct[V];if(rt.location>=0){let Lt=lt[V];if(Lt===void 0&&(V==="instanceMatrix"&&z.instanceMatrix&&(Lt=z.instanceMatrix),V==="instanceColor"&&z.instanceColor&&(Lt=z.instanceColor)),Lt!==void 0){const wt=Lt.normalized,bt=Lt.itemSize,Bt=e.get(Lt);if(Bt===void 0)continue;const Jt=Bt.buffer,zt=Bt.type,Xt=Bt.bytesPerElement,De=n.isWebGL2===!0&&(zt===i.INT||zt===i.UNSIGNED_INT||Lt.gpuType===iM);if(Lt.isInterleavedBufferAttribute){const Qt=Lt.data,j=Qt.stride,oe=Lt.offset;if(Qt.isInstancedInterleavedBuffer){for(let At=0;At<rt.locationSize;At++)C(rt.location+At,Qt.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Qt.meshPerAttribute*Qt.count)}else for(let At=0;At<rt.locationSize;At++)w(rt.location+At);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let At=0;At<rt.locationSize;At++)b(rt.location+At,bt/rt.locationSize,zt,wt,j*Xt,(oe+bt/rt.locationSize*At)*Xt,De)}else{if(Lt.isInstancedBufferAttribute){for(let Qt=0;Qt<rt.locationSize;Qt++)C(rt.location+Qt,Lt.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let Qt=0;Qt<rt.locationSize;Qt++)w(rt.location+Qt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Qt=0;Qt<rt.locationSize;Qt++)b(rt.location+Qt,bt/rt.locationSize,zt,wt,bt*Xt,bt/rt.locationSize*Qt*Xt,De)}}else if(N!==void 0){const wt=N[V];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(rt.location,wt);break;case 3:i.vertexAttrib3fv(rt.location,wt);break;case 4:i.vertexAttrib4fv(rt.location,wt);break;default:i.vertexAttrib1fv(rt.location,wt)}}}}U()}function T(){X();for(const z in l){const K=l[z];for(const st in K){const $=K[st];for(const lt in $)S($[lt].object),delete $[lt];delete K[st]}delete l[z]}}function L(z){if(l[z.id]===void 0)return;const K=l[z.id];for(const st in K){const $=K[st];for(const lt in $)S($[lt].object),delete $[lt];delete K[st]}delete l[z.id]}function Z(z){for(const K in l){const st=l[K];if(st[z.id]===void 0)continue;const $=st[z.id];for(const lt in $)S($[lt].object),delete $[lt];delete st[z.id]}}function X(){ut(),d=!0,f!==c&&(f=c,m(f.object))}function ut(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:_,reset:X,resetDefaultState:ut,dispose:T,releaseStatesOfGeometry:L,releaseStatesOfProgram:Z,initAttributes:E,enableAttribute:w,disableUnusedAttributes:U}}function M3(i,t,e,n){const r=n.isWebGL2;let a;function u(f){a=f}function l(f,d){i.drawArrays(a,f,d),e.update(d,a,1)}function c(f,d,_){if(_===0)return;let p,m;if(r)p=i,m="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](a,f,d,_),e.update(d,a,_)}this.setMode=u,this.render=l,this.renderInstances=c}function E3(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=e.precision!==void 0?e.precision:"highp";const c=a(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const f=u||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,w=u||t.has("OES_texture_float"),C=E&&w,U=u?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:d,maxTextures:_,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:x,maxVaryings:g,maxFragmentUniforms:R,vertexTextures:E,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:U}}function T3(i){const t=this;let e=null,n=0,r=!1,a=!1;const u=new Fs,l=new Re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(_,p){const m=_.length!==0||p||n!==0||r;return r=p,n=_.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,p){e=d(_,p,0)},this.setState=function(_,p,m){const S=_.clippingPlanes,y=_.clipIntersection,x=_.clipShadows,g=i.get(_);if(!r||S===null||S.length===0||a&&!x)a?d(null):f();else{const R=a?0:n,E=R*4;let w=g.clippingState||null;c.value=w,w=d(S,p,E,m);for(let C=0;C!==E;++C)w[C]=e[C];g.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function f(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(_,p,m,S){const y=_!==null?_.length:0;let x=null;if(y!==0){if(x=c.value,S!==!0||x===null){const g=m+y*4,R=p.matrixWorldInverse;l.getNormalMatrix(R),(x===null||x.length<g)&&(x=new Float32Array(g));for(let E=0,w=m;E!==y;++E,w+=4)u.copy(_[E]).applyMatrix4(R,l),u.normal.toArray(x,w),x[w+3]=u.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}function w3(i){let t=new WeakMap;function e(u,l){return l===fm?u.mapping=fl:l===hm&&(u.mapping=hl),u}function n(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const l=u.mapping;if(l===fm||l===hm)if(t.has(u)){const c=t.get(u).texture;return e(c,u.mapping)}else{const c=u.image;if(c&&c.height>0){const f=new zU(c.height/2);return f.fromEquirectangularTexture(i,u),t.set(u,f),u.addEventListener("dispose",r),e(f.texture,u.mapping)}else return null}}return u}function r(u){const l=u.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class wM extends MM{constructor(t=-1,e=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-t,u=n+t,l=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,u=a+f*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,u,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yo=4,Sx=[.125,.215,.35,.446,.526,.582],Ea=20,yp=new wM,Mx=new He;let Sp=null,Mp=0,Ep=0;const Sa=(1+Math.sqrt(5))/2,No=1/Sa,Ex=[new tt(1,1,1),new tt(-1,1,1),new tt(1,1,-1),new tt(-1,1,-1),new tt(0,Sa,No),new tt(0,Sa,-No),new tt(No,0,Sa),new tt(-No,0,Sa),new tt(Sa,No,0),new tt(-Sa,No,0)];class Tx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ax(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sp,Mp,Ep),t.scissorTest=!1,of(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fl||t.mapping===hl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:or,minFilter:or,generateMipmaps:!1,type:Cu,format:Ar,colorSpace:ys,depthBuffer:!1},r=wx(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wx(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b3(a)),this._blurMaterial=A3(a,t,e)}return r}_compileMaterial(t){const e=new ms(this._lodPlanes[0],t);this._renderer.compile(e,yp)}_sceneToCubeUV(t,e,n,r){const l=new lr(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,_=d.autoClear,p=d.toneMapping;d.getClearColor(Mx),d.toneMapping=Zs,d.autoClear=!1;const m=new vM({name:"PMREM.Background",side:wi,depthWrite:!1,depthTest:!1}),S=new ms(new _l,m);let y=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,y=!0):(m.color.copy(Mx),y=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(l.up.set(0,c[g],0),l.lookAt(f[g],0,0)):R===1?(l.up.set(0,0,c[g]),l.lookAt(0,f[g],0)):(l.up.set(0,c[g],0),l.lookAt(0,0,f[g]));const E=this._cubeSize;of(r,R*E,g>2?E:0,E,E),d.setRenderTarget(r),y&&d.render(S,l),d.render(t,l)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=p,d.autoClear=_,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===fl||t.mapping===hl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ax()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bx());const a=r?this._cubemapMaterial:this._equirectMaterial,u=new ms(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=t;const c=this._cubeSize;of(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(u,yp)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),u=Ex[(r-1)%Ex.length];this._blur(t,r-1,r,a,u)}e.autoClear=n}_blur(t,e,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,n,r,"latitudinal",a),this._halfBlur(u,t,n,n,r,"longitudinal",a)}_halfBlur(t,e,n,r,a,u,l){const c=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,_=new ms(this._lodPlanes[r],f),p=f.uniforms,m=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Ea-1),y=a/S,x=isFinite(a)?1+Math.floor(d*y):Ea;x>Ea&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ea}`);const g=[];let R=0;for(let b=0;b<Ea;++b){const k=b/y,T=Math.exp(-k*k/2);g.push(T),b===0?R+=T:b<x&&(R+=2*T)}for(let b=0;b<g.length;b++)g[b]=g[b]/R;p.envMap.value=t.texture,p.samples.value=x,p.weights.value=g,p.latitudinal.value=u==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:E}=this;p.dTheta.value=S,p.mipInt.value=E-n;const w=this._sizeLods[r],C=3*w*(r>E-Yo?r-E+Yo:0),U=4*(this._cubeSize-w);of(e,C,U,3*w,2*w),c.setRenderTarget(e),c.render(_,yp)}}function b3(i){const t=[],e=[],n=[];let r=i;const a=i-Yo+1+Sx.length;for(let u=0;u<a;u++){const l=Math.pow(2,r);e.push(l);let c=1/l;u>i-Yo?c=Sx[u-i+Yo-1]:u===0&&(c=0),n.push(c);const f=1/(l-2),d=-f,_=1+f,p=[d,d,_,d,_,_,d,d,_,_,d,_],m=6,S=6,y=3,x=2,g=1,R=new Float32Array(y*S*m),E=new Float32Array(x*S*m),w=new Float32Array(g*S*m);for(let U=0;U<m;U++){const b=U%3*2/3-1,k=U>2?0:-1,T=[b,k,0,b+2/3,k,0,b+2/3,k+1,0,b,k,0,b+2/3,k+1,0,b,k+1,0];R.set(T,y*S*U),E.set(p,x*S*U);const L=[U,U,U,U,U,U];w.set(L,g*S*U)}const C=new Ka;C.setAttribute("position",new Gr(R,y)),C.setAttribute("uv",new Gr(E,x)),C.setAttribute("faceIndex",new Gr(w,g)),t.push(C),r>Yo&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wx(i,t,e){const n=new Wa(i,t,e);return n.texture.mapping=mh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function of(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function A3(i,t,e){const n=new Float32Array(Ea),r=new tt(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Ea,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:n_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ks,depthTest:!1,depthWrite:!1})}function bx(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:n_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ks,depthTest:!1,depthWrite:!1})}function Ax(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:n_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ks,depthTest:!1,depthWrite:!1})}function n_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R3(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const c=l.mapping,f=c===fm||c===hm,d=c===fl||c===hl;if(f||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let _=t.get(l);return e===null&&(e=new Tx(i)),_=f?e.fromEquirectangular(l,_):e.fromCubemap(l,_),t.set(l,_),_.texture}else{if(t.has(l))return t.get(l).texture;{const _=l.image;if(f&&_&&_.height>0||d&&_&&r(_)){e===null&&(e=new Tx(i));const p=f?e.fromEquirectangular(l):e.fromCubemap(l);return t.set(l,p),l.addEventListener("dispose",a),p.texture}else return null}}}return l}function r(l){let c=0;const f=6;for(let d=0;d<f;d++)l[d]!==void 0&&c++;return c===f}function a(l){const c=l.target;c.removeEventListener("dispose",a);const f=t.get(c);f!==void 0&&(t.delete(c),f.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:u}}function C3(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function P3(i,t,e,n){const r={},a=new WeakMap;function u(_){const p=_.target;p.index!==null&&t.remove(p.index);for(const S in p.attributes)t.remove(p.attributes[S]);for(const S in p.morphAttributes){const y=p.morphAttributes[S];for(let x=0,g=y.length;x<g;x++)t.remove(y[x])}p.removeEventListener("dispose",u),delete r[p.id];const m=a.get(p);m&&(t.remove(m),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(_,p){return r[p.id]===!0||(p.addEventListener("dispose",u),r[p.id]=!0,e.memory.geometries++),p}function c(_){const p=_.attributes;for(const S in p)t.update(p[S],i.ARRAY_BUFFER);const m=_.morphAttributes;for(const S in m){const y=m[S];for(let x=0,g=y.length;x<g;x++)t.update(y[x],i.ARRAY_BUFFER)}}function f(_){const p=[],m=_.index,S=_.attributes.position;let y=0;if(m!==null){const R=m.array;y=m.version;for(let E=0,w=R.length;E<w;E+=3){const C=R[E+0],U=R[E+1],b=R[E+2];p.push(C,U,U,b,b,C)}}else if(S!==void 0){const R=S.array;y=S.version;for(let E=0,w=R.length/3-1;E<w;E+=3){const C=E+0,U=E+1,b=E+2;p.push(C,U,U,b,b,C)}}else return;const x=new(fM(p)?yM:xM)(p,1);x.version=y;const g=a.get(_);g&&t.remove(g),a.set(_,x)}function d(_){const p=a.get(_);if(p){const m=_.index;m!==null&&p.version<m.version&&f(_)}else f(_);return a.get(_)}return{get:l,update:c,getWireframeAttribute:d}}function L3(i,t,e,n){const r=n.isWebGL2;let a;function u(p){a=p}let l,c;function f(p){l=p.type,c=p.bytesPerElement}function d(p,m){i.drawElements(a,m,l,p*c),e.update(m,a,1)}function _(p,m,S){if(S===0)return;let y,x;if(r)y=i,x="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](a,m,l,p*c,S),e.update(m,a,S)}this.setMode=u,this.setIndex=f,this.render=d,this.renderInstances=_}function D3(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,l){switch(e.calls++,u){case i.TRIANGLES:e.triangles+=l*(a/3);break;case i.LINES:e.lines+=l*(a/2);break;case i.LINE_STRIP:e.lines+=l*(a-1);break;case i.LINE_LOOP:e.lines+=l*a;break;case i.POINTS:e.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function I3(i,t){return i[0]-t[0]}function U3(i,t){return Math.abs(t[1])-Math.abs(i[1])}function N3(i,t,e){const n={},r=new Float32Array(8),a=new WeakMap,u=new Nn,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function c(f,d,_){const p=f.morphTargetInfluences;if(t.isWebGL2===!0){const S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=S!==void 0?S.length:0;let x=a.get(d);if(x===void 0||x.count!==y){let K=function(){ut.dispose(),a.delete(d),d.removeEventListener("dispose",K)};var m=K;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,U=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let T=0;E===!0&&(T=1),w===!0&&(T=2),C===!0&&(T=3);let L=d.attributes.position.count*T,Z=1;L>t.maxTextureSize&&(Z=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const X=new Float32Array(L*Z*4*y),ut=new pM(X,L,Z,y);ut.type=Ws,ut.needsUpdate=!0;const z=T*4;for(let st=0;st<y;st++){const $=U[st],lt=b[st],ct=k[st],N=L*Z*4*st;for(let V=0;V<$.count;V++){const rt=V*z;E===!0&&(u.fromBufferAttribute($,V),X[N+rt+0]=u.x,X[N+rt+1]=u.y,X[N+rt+2]=u.z,X[N+rt+3]=0),w===!0&&(u.fromBufferAttribute(lt,V),X[N+rt+4]=u.x,X[N+rt+5]=u.y,X[N+rt+6]=u.z,X[N+rt+7]=0),C===!0&&(u.fromBufferAttribute(ct,V),X[N+rt+8]=u.x,X[N+rt+9]=u.y,X[N+rt+10]=u.z,X[N+rt+11]=ct.itemSize===4?u.w:1)}}x={count:y,texture:ut,size:new Me(L,Z)},a.set(d,x),d.addEventListener("dispose",K)}let g=0;for(let E=0;E<p.length;E++)g+=p[E];const R=d.morphTargetsRelative?1:1-g;_.getUniforms().setValue(i,"morphTargetBaseInfluence",R),_.getUniforms().setValue(i,"morphTargetInfluences",p),_.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),_.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const S=p===void 0?0:p.length;let y=n[d.id];if(y===void 0||y.length!==S){y=[];for(let w=0;w<S;w++)y[w]=[w,0];n[d.id]=y}for(let w=0;w<S;w++){const C=y[w];C[0]=w,C[1]=p[w]}y.sort(U3);for(let w=0;w<8;w++)w<S&&y[w][1]?(l[w][0]=y[w][0],l[w][1]=y[w][1]):(l[w][0]=Number.MAX_SAFE_INTEGER,l[w][1]=0);l.sort(I3);const x=d.morphAttributes.position,g=d.morphAttributes.normal;let R=0;for(let w=0;w<8;w++){const C=l[w],U=C[0],b=C[1];U!==Number.MAX_SAFE_INTEGER&&b?(x&&d.getAttribute("morphTarget"+w)!==x[U]&&d.setAttribute("morphTarget"+w,x[U]),g&&d.getAttribute("morphNormal"+w)!==g[U]&&d.setAttribute("morphNormal"+w,g[U]),r[w]=b,R+=b):(x&&d.hasAttribute("morphTarget"+w)===!0&&d.deleteAttribute("morphTarget"+w),g&&d.hasAttribute("morphNormal"+w)===!0&&d.deleteAttribute("morphNormal"+w),r[w]=0)}const E=d.morphTargetsRelative?1:1-R;_.getUniforms().setValue(i,"morphTargetBaseInfluence",E),_.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function O3(i,t,e,n){let r=new WeakMap;function a(c){const f=n.render.frame,d=c.geometry,_=t.get(c,d);if(r.get(_)!==f&&(t.update(_),r.set(_,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return _}function u(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:u}}const bM=new Vi,AM=new pM,RM=new MU,CM=new EM,Rx=[],Cx=[],Px=new Float32Array(16),Lx=new Float32Array(9),Dx=new Float32Array(4);function gl(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let a=Rx[r];if(a===void 0&&(a=new Float32Array(r),Rx[r]=a),t!==0){n.toArray(a,0);for(let u=1,l=0;u!==t;++u)l+=e,i[u].toArray(a,l)}return a}function Rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vh(i,t){let e=Cx[t];e===void 0&&(e=new Int32Array(t),Cx[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function F3(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function B3(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2fv(this.addr,t),Cn(e,t)}}function z3(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Rn(e,t))return;i.uniform3fv(this.addr,t),Cn(e,t)}}function k3(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4fv(this.addr,t),Cn(e,t)}}function H3(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,n))return;Dx.set(n),i.uniformMatrix2fv(this.addr,!1,Dx),Cn(e,n)}}function G3(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,n))return;Lx.set(n),i.uniformMatrix3fv(this.addr,!1,Lx),Cn(e,n)}}function V3(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,n))return;Px.set(n),i.uniformMatrix4fv(this.addr,!1,Px),Cn(e,n)}}function W3(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function X3(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2iv(this.addr,t),Cn(e,t)}}function Y3(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;i.uniform3iv(this.addr,t),Cn(e,t)}}function q3(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4iv(this.addr,t),Cn(e,t)}}function $3(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K3(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2uiv(this.addr,t),Cn(e,t)}}function Z3(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;i.uniform3uiv(this.addr,t),Cn(e,t)}}function J3(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4uiv(this.addr,t),Cn(e,t)}}function Q3(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||bM,r)}function j3(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||RM,r)}function tF(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||CM,r)}function eF(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||AM,r)}function nF(i){switch(i){case 5126:return F3;case 35664:return B3;case 35665:return z3;case 35666:return k3;case 35674:return H3;case 35675:return G3;case 35676:return V3;case 5124:case 35670:return W3;case 35667:case 35671:return X3;case 35668:case 35672:return Y3;case 35669:case 35673:return q3;case 5125:return $3;case 36294:return K3;case 36295:return Z3;case 36296:return J3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return j3;case 35680:case 36300:case 36308:case 36293:return tF;case 36289:case 36303:case 36311:case 36292:return eF}}function iF(i,t){i.uniform1fv(this.addr,t)}function rF(i,t){const e=gl(t,this.size,2);i.uniform2fv(this.addr,e)}function sF(i,t){const e=gl(t,this.size,3);i.uniform3fv(this.addr,e)}function aF(i,t){const e=gl(t,this.size,4);i.uniform4fv(this.addr,e)}function oF(i,t){const e=gl(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lF(i,t){const e=gl(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function uF(i,t){const e=gl(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cF(i,t){i.uniform1iv(this.addr,t)}function fF(i,t){i.uniform2iv(this.addr,t)}function hF(i,t){i.uniform3iv(this.addr,t)}function dF(i,t){i.uniform4iv(this.addr,t)}function pF(i,t){i.uniform1uiv(this.addr,t)}function mF(i,t){i.uniform2uiv(this.addr,t)}function _F(i,t){i.uniform3uiv(this.addr,t)}function gF(i,t){i.uniform4uiv(this.addr,t)}function vF(i,t,e){const n=this.cache,r=t.length,a=vh(e,r);Rn(n,a)||(i.uniform1iv(this.addr,a),Cn(n,a));for(let u=0;u!==r;++u)e.setTexture2D(t[u]||bM,a[u])}function xF(i,t,e){const n=this.cache,r=t.length,a=vh(e,r);Rn(n,a)||(i.uniform1iv(this.addr,a),Cn(n,a));for(let u=0;u!==r;++u)e.setTexture3D(t[u]||RM,a[u])}function yF(i,t,e){const n=this.cache,r=t.length,a=vh(e,r);Rn(n,a)||(i.uniform1iv(this.addr,a),Cn(n,a));for(let u=0;u!==r;++u)e.setTextureCube(t[u]||CM,a[u])}function SF(i,t,e){const n=this.cache,r=t.length,a=vh(e,r);Rn(n,a)||(i.uniform1iv(this.addr,a),Cn(n,a));for(let u=0;u!==r;++u)e.setTexture2DArray(t[u]||AM,a[u])}function MF(i){switch(i){case 5126:return iF;case 35664:return rF;case 35665:return sF;case 35666:return aF;case 35674:return oF;case 35675:return lF;case 35676:return uF;case 5124:case 35670:return cF;case 35667:case 35671:return fF;case 35668:case 35672:return hF;case 35669:case 35673:return dF;case 5125:return pF;case 36294:return mF;case 36295:return _F;case 36296:return gF;case 35678:case 36198:case 36298:case 36306:case 35682:return vF;case 35679:case 36299:case 36307:return xF;case 35680:case 36300:case 36308:case 36293:return yF;case 36289:case 36303:case 36311:case 36292:return SF}}class EF{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=nF(e.type)}}class TF{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=MF(e.type)}}class wF{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const l=r[a];l.setValue(t,e[l.id],n)}}}const Tp=/(\w+)(\])?(\[|\.)?/g;function Ix(i,t){i.seq.push(t),i.map[t.id]=t}function bF(i,t,e){const n=i.name,r=n.length;for(Tp.lastIndex=0;;){const a=Tp.exec(n),u=Tp.lastIndex;let l=a[1];const c=a[2]==="]",f=a[3];if(c&&(l=l|0),f===void 0||f==="["&&u+2===r){Ix(e,f===void 0?new EF(l,i,t):new TF(l,i,t));break}else{let _=e.map[l];_===void 0&&(_=new wF(l),Ix(e,_)),e=_}}}class Cf{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),u=t.getUniformLocation(e,a.name);bF(a,u,this)}}setValue(t,e,n,r){const a=this.map[e];a!==void 0&&a.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let a=0,u=e.length;a!==u;++a){const l=e[a],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,a=t.length;r!==a;++r){const u=t[r];u.id in e&&n.push(u)}return n}}function Ux(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const AF=37297;let RF=0;function CF(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let u=r;u<a;u++){const l=u+1;n.push(`${l===t?">":" "} ${l}: ${e[u]}`)}return n.join(`
`)}function PF(i){const t=Ye.getPrimaries(Ye.workingColorSpace),e=Ye.getPrimaries(i);let n;switch(t===e?n="":t===th&&e===jf?n="LinearDisplayP3ToLinearSRGB":t===jf&&e===th&&(n="LinearSRGBToLinearDisplayP3"),i){case ys:case _h:return[n,"LinearTransferOETF"];case Hn:case Jm:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Nx(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const u=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+CF(i.getShaderSource(t),u)}else return r}function LF(i,t){const e=PF(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function DF(i,t){let e;switch(t){case PI:e="Linear";break;case LI:e="Reinhard";break;case DI:e="OptimizedCineon";break;case II:e="ACESFilmic";break;case UI:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function IF(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jl).join(`
`)}function UF(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function NF(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(t,r),u=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),e[u]={type:a.type,location:i.getAttribLocation(t,u),locationSize:l}}return e}function jl(i){return i!==""}function Ox(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fx(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const OF=/^[ \t]*#include +<([\w\d./]+)>/gm;function gm(i){return i.replace(OF,BF)}const FF=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function BF(i,t){let e=Te[t];if(e===void 0){const n=FF.get(t);if(n!==void 0)e=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gm(e)}const zF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bx(i){return i.replace(zF,kF)}function kF(i,t,e,n){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function zx(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function HF(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tM?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rI?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===os&&(t="SHADOWMAP_TYPE_VSM"),t}function GF(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fl:case hl:t="ENVMAP_TYPE_CUBE";break;case mh:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VF(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hl:t="ENVMAP_MODE_REFRACTION";break}return t}function WF(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case eM:t="ENVMAP_BLENDING_MULTIPLY";break;case RI:t="ENVMAP_BLENDING_MIX";break;case CI:t="ENVMAP_BLENDING_ADD";break}return t}function XF(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function YF(i,t,e,n){const r=i.getContext(),a=e.defines;let u=e.vertexShader,l=e.fragmentShader;const c=HF(e),f=GF(e),d=VF(e),_=WF(e),p=XF(e),m=e.isWebGL2?"":IF(e),S=UF(a),y=r.createProgram();let x,g,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(jl).join(`
`),x.length>0&&(x+=`
`),g=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(jl).join(`
`),g.length>0&&(g+=`
`)):(x=[zx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jl).join(`
`),g=[m,zx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",e.envMap?"#define "+_:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zs?"#define TONE_MAPPING":"",e.toneMapping!==Zs?Te.tonemapping_pars_fragment:"",e.toneMapping!==Zs?DF("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,LF("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jl).join(`
`)),u=gm(u),u=Ox(u,e),u=Fx(u,e),l=gm(l),l=Ox(l,e),l=Fx(l,e),u=Bx(u),l=Bx(l),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ix?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ix?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=R+x+u,w=R+g+l,C=Ux(r,r.VERTEX_SHADER,E),U=Ux(r,r.FRAGMENT_SHADER,w);r.attachShader(y,C),r.attachShader(y,U),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(Z){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(y).trim(),ut=r.getShaderInfoLog(C).trim(),z=r.getShaderInfoLog(U).trim();let K=!0,st=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,C,U);else{const $=Nx(r,C,"vertex"),lt=Nx(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+$+`
`+lt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(ut===""||z==="")&&(st=!1);st&&(Z.diagnostics={runnable:K,programLog:X,vertexShader:{log:ut,prefix:x},fragmentShader:{log:z,prefix:g}})}r.deleteShader(C),r.deleteShader(U),k=new Cf(r,y),T=NF(r,y)}let k;this.getUniforms=function(){return k===void 0&&b(this),k};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(y,AF)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=RF++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=U,this}let qF=0;class $F{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new KF(t),e.set(t,n)),n}}class KF{constructor(t){this.id=qF++,this.code=t,this.usedTimes=0}}function ZF(i,t,e,n,r,a,u){const l=new _M,c=new $F,f=[],d=r.isWebGL2,_=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return T===0?"uv":`uv${T}`}function x(T,L,Z,X,ut){const z=X.fog,K=ut.geometry,st=T.isMeshStandardMaterial?X.environment:null,$=(T.isMeshStandardMaterial?e:t).get(T.envMap||st),lt=$&&$.mapping===mh?$.image.height:null,ct=S[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const N=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,V=N!==void 0?N.length:0;let rt=0;K.morphAttributes.position!==void 0&&(rt=1),K.morphAttributes.normal!==void 0&&(rt=2),K.morphAttributes.color!==void 0&&(rt=3);let Lt,wt,bt,Bt;if(ct){const Nt=Or[ct];Lt=Nt.vertexShader,wt=Nt.fragmentShader}else Lt=T.vertexShader,wt=T.fragmentShader,c.update(T),bt=c.getVertexShaderID(T),Bt=c.getFragmentShaderID(T);const Jt=i.getRenderTarget(),zt=ut.isInstancedMesh===!0,Xt=!!T.map,De=!!T.matcap,Qt=!!$,j=!!T.aoMap,oe=!!T.lightMap,At=!!T.bumpMap,Gt=!!T.normalMap,Kt=!!T.displacementMap,Q=!!T.emissiveMap,ee=!!T.metalnessMap,re=!!T.roughnessMap,he=T.anisotropy>0,ae=T.clearcoat>0,Fe=T.iridescence>0,O=T.sheen>0,P=T.transmission>0,J=he&&!!T.anisotropyMap,_t=ae&&!!T.clearcoatMap,mt=ae&&!!T.clearcoatNormalMap,vt=ae&&!!T.clearcoatRoughnessMap,Ot=Fe&&!!T.iridescenceMap,Mt=Fe&&!!T.iridescenceThicknessMap,Rt=O&&!!T.sheenColorMap,B=O&&!!T.sheenRoughnessMap,St=!!T.specularMap,ht=!!T.specularColorMap,te=!!T.specularIntensityMap,kt=P&&!!T.transmissionMap,qt=P&&!!T.thicknessMap,Ft=!!T.gradientMap,yt=!!T.alphaMap,me=T.alphaTest>0,G=!!T.alphaHash,Et=!!T.extensions,gt=!!K.attributes.uv1,ot=!!K.attributes.uv2,Tt=!!K.attributes.uv3;let Yt=Zs;return T.toneMapped&&(Jt===null||Jt.isXRRenderTarget===!0)&&(Yt=i.toneMapping),{isWebGL2:d,shaderID:ct,shaderType:T.type,shaderName:T.name,vertexShader:Lt,fragmentShader:wt,defines:T.defines,customVertexShaderID:bt,customFragmentShaderID:Bt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,instancing:zt,instancingColor:zt&&ut.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Jt===null?i.outputColorSpace:Jt.isXRRenderTarget===!0?Jt.texture.colorSpace:ys,map:Xt,matcap:De,envMap:Qt,envMapMode:Qt&&$.mapping,envMapCubeUVHeight:lt,aoMap:j,lightMap:oe,bumpMap:At,normalMap:Gt,displacementMap:p&&Kt,emissiveMap:Q,normalMapObjectSpace:Gt&&T.normalMapType===qI,normalMapTangentSpace:Gt&&T.normalMapType===cM,metalnessMap:ee,roughnessMap:re,anisotropy:he,anisotropyMap:J,clearcoat:ae,clearcoatMap:_t,clearcoatNormalMap:mt,clearcoatRoughnessMap:vt,iridescence:Fe,iridescenceMap:Ot,iridescenceThicknessMap:Mt,sheen:O,sheenColorMap:Rt,sheenRoughnessMap:B,specularMap:St,specularColorMap:ht,specularIntensityMap:te,transmission:P,transmissionMap:kt,thicknessMap:qt,gradientMap:Ft,opaque:T.transparent===!1&&T.blending===el,alphaMap:yt,alphaTest:me,alphaHash:G,combine:T.combine,mapUv:Xt&&y(T.map.channel),aoMapUv:j&&y(T.aoMap.channel),lightMapUv:oe&&y(T.lightMap.channel),bumpMapUv:At&&y(T.bumpMap.channel),normalMapUv:Gt&&y(T.normalMap.channel),displacementMapUv:Kt&&y(T.displacementMap.channel),emissiveMapUv:Q&&y(T.emissiveMap.channel),metalnessMapUv:ee&&y(T.metalnessMap.channel),roughnessMapUv:re&&y(T.roughnessMap.channel),anisotropyMapUv:J&&y(T.anisotropyMap.channel),clearcoatMapUv:_t&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:mt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:B&&y(T.sheenRoughnessMap.channel),specularMapUv:St&&y(T.specularMap.channel),specularColorMapUv:ht&&y(T.specularColorMap.channel),specularIntensityMapUv:te&&y(T.specularIntensityMap.channel),transmissionMapUv:kt&&y(T.transmissionMap.channel),thicknessMapUv:qt&&y(T.thicknessMap.channel),alphaMapUv:yt&&y(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Gt||he),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:gt,vertexUv2s:ot,vertexUv3s:Tt,pointsUvs:ut.isPoints===!0&&!!K.attributes.uv&&(Xt||yt),fog:!!z,useFog:T.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:ut.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:rt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Xt&&T.map.isVideoTexture===!0&&Ye.getTransfer(T.map.colorSpace)===en,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fs,flipSided:T.side===wi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Et&&T.extensions.derivatives===!0,extensionFragDepth:Et&&T.extensions.fragDepth===!0,extensionDrawBuffers:Et&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Et&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)L.push(Z),L.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(R(L,T),E(L,T),L.push(i.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function R(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function E(T,L){l.disableAll(),L.isWebGL2&&l.enable(0),L.supportsVertexTextures&&l.enable(1),L.instancing&&l.enable(2),L.instancingColor&&l.enable(3),L.matcap&&l.enable(4),L.envMap&&l.enable(5),L.normalMapObjectSpace&&l.enable(6),L.normalMapTangentSpace&&l.enable(7),L.clearcoat&&l.enable(8),L.iridescence&&l.enable(9),L.alphaTest&&l.enable(10),L.vertexColors&&l.enable(11),L.vertexAlphas&&l.enable(12),L.vertexUv1s&&l.enable(13),L.vertexUv2s&&l.enable(14),L.vertexUv3s&&l.enable(15),L.vertexTangents&&l.enable(16),L.anisotropy&&l.enable(17),L.alphaHash&&l.enable(18),T.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.skinning&&l.enable(4),L.morphTargets&&l.enable(5),L.morphNormals&&l.enable(6),L.morphColors&&l.enable(7),L.premultipliedAlpha&&l.enable(8),L.shadowMapEnabled&&l.enable(9),L.useLegacyLights&&l.enable(10),L.doubleSided&&l.enable(11),L.flipSided&&l.enable(12),L.useDepthPacking&&l.enable(13),L.dithering&&l.enable(14),L.transmission&&l.enable(15),L.sheen&&l.enable(16),L.opaque&&l.enable(17),L.pointsUvs&&l.enable(18),L.decodeVideoTexture&&l.enable(19),T.push(l.mask)}function w(T){const L=S[T.type];let Z;if(L){const X=Or[L];Z=NU.clone(X.uniforms)}else Z=T.uniforms;return Z}function C(T,L){let Z;for(let X=0,ut=f.length;X<ut;X++){const z=f[X];if(z.cacheKey===L){Z=z,++Z.usedTimes;break}}return Z===void 0&&(Z=new YF(i,L,T,a),f.push(Z)),Z}function U(T){if(--T.usedTimes===0){const L=f.indexOf(T);f[L]=f[f.length-1],f.pop(),T.destroy()}}function b(T){c.remove(T)}function k(){c.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:C,releaseProgram:U,releaseShaderCache:b,programs:f,dispose:k}}function JF(){let i=new WeakMap;function t(a){let u=i.get(a);return u===void 0&&(u={},i.set(a,u)),u}function e(a){i.delete(a)}function n(a,u,l){i.get(a)[u]=l}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function QF(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hx(){const i=[];let t=0;const e=[],n=[],r=[];function a(){t=0,e.length=0,n.length=0,r.length=0}function u(_,p,m,S,y,x){let g=i[t];return g===void 0?(g={id:_.id,object:_,geometry:p,material:m,groupOrder:S,renderOrder:_.renderOrder,z:y,group:x},i[t]=g):(g.id=_.id,g.object=_,g.geometry=p,g.material=m,g.groupOrder=S,g.renderOrder=_.renderOrder,g.z=y,g.group=x),t++,g}function l(_,p,m,S,y,x){const g=u(_,p,m,S,y,x);m.transmission>0?n.push(g):m.transparent===!0?r.push(g):e.push(g)}function c(_,p,m,S,y,x){const g=u(_,p,m,S,y,x);m.transmission>0?n.unshift(g):m.transparent===!0?r.unshift(g):e.unshift(g)}function f(_,p){e.length>1&&e.sort(_||QF),n.length>1&&n.sort(p||kx),r.length>1&&r.sort(p||kx)}function d(){for(let _=t,p=i.length;_<p;_++){const m=i[_];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:a,push:l,unshift:c,finish:d,sort:f}}function jF(){let i=new WeakMap;function t(n,r){const a=i.get(n);let u;return a===void 0?(u=new Hx,i.set(n,[u])):r>=a.length?(u=new Hx,a.push(u)):u=a[r],u}function e(){i=new WeakMap}return{get:t,dispose:e}}function tB(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new tt,color:new He};break;case"SpotLight":e={position:new tt,direction:new tt,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new He,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new He,groundColor:new He};break;case"RectAreaLight":e={color:new He,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return i[t.id]=e,e}}}function eB(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let nB=0;function iB(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rB(i,t){const e=new tB,n=eB(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new tt);const a=new tt,u=new An,l=new An;function c(d,_){let p=0,m=0,S=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,x=0,g=0,R=0,E=0,w=0,C=0,U=0,b=0,k=0,T=0;d.sort(iB);const L=_===!0?Math.PI:1;for(let X=0,ut=d.length;X<ut;X++){const z=d[X],K=z.color,st=z.intensity,$=z.distance,lt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=K.r*st*L,m+=K.g*st*L,S+=K.b*st*L;else if(z.isLightProbe){for(let ct=0;ct<9;ct++)r.probe[ct].addScaledVector(z.sh.coefficients[ct],st);T++}else if(z.isDirectionalLight){const ct=e.get(z);if(ct.color.copy(z.color).multiplyScalar(z.intensity*L),z.castShadow){const N=z.shadow,V=n.get(z);V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,r.directionalShadow[y]=V,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=z.shadow.matrix,w++}r.directional[y]=ct,y++}else if(z.isSpotLight){const ct=e.get(z);ct.position.setFromMatrixPosition(z.matrixWorld),ct.color.copy(K).multiplyScalar(st*L),ct.distance=$,ct.coneCos=Math.cos(z.angle),ct.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ct.decay=z.decay,r.spot[g]=ct;const N=z.shadow;if(z.map&&(r.spotLightMap[b]=z.map,b++,N.updateMatrices(z),z.castShadow&&k++),r.spotLightMatrix[g]=N.matrix,z.castShadow){const V=n.get(z);V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,r.spotShadow[g]=V,r.spotShadowMap[g]=lt,U++}g++}else if(z.isRectAreaLight){const ct=e.get(z);ct.color.copy(K).multiplyScalar(st),ct.halfWidth.set(z.width*.5,0,0),ct.halfHeight.set(0,z.height*.5,0),r.rectArea[R]=ct,R++}else if(z.isPointLight){const ct=e.get(z);if(ct.color.copy(z.color).multiplyScalar(z.intensity*L),ct.distance=z.distance,ct.decay=z.decay,z.castShadow){const N=z.shadow,V=n.get(z);V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,V.shadowCameraNear=N.camera.near,V.shadowCameraFar=N.camera.far,r.pointShadow[x]=V,r.pointShadowMap[x]=lt,r.pointShadowMatrix[x]=z.shadow.matrix,C++}r.point[x]=ct,x++}else if(z.isHemisphereLight){const ct=e.get(z);ct.skyColor.copy(z.color).multiplyScalar(st*L),ct.groundColor.copy(z.groundColor).multiplyScalar(st*L),r.hemi[E]=ct,E++}}R>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=S;const Z=r.hash;(Z.directionalLength!==y||Z.pointLength!==x||Z.spotLength!==g||Z.rectAreaLength!==R||Z.hemiLength!==E||Z.numDirectionalShadows!==w||Z.numPointShadows!==C||Z.numSpotShadows!==U||Z.numSpotMaps!==b||Z.numLightProbes!==T)&&(r.directional.length=y,r.spot.length=g,r.rectArea.length=R,r.point.length=x,r.hemi.length=E,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=U+b-k,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=T,Z.directionalLength=y,Z.pointLength=x,Z.spotLength=g,Z.rectAreaLength=R,Z.hemiLength=E,Z.numDirectionalShadows=w,Z.numPointShadows=C,Z.numSpotShadows=U,Z.numSpotMaps=b,Z.numLightProbes=T,r.version=nB++)}function f(d,_){let p=0,m=0,S=0,y=0,x=0;const g=_.matrixWorldInverse;for(let R=0,E=d.length;R<E;R++){const w=d[R];if(w.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(g),p++}else if(w.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(g),S++}else if(w.isRectAreaLight){const C=r.rectArea[y];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),l.identity(),u.copy(w.matrixWorld),u.premultiply(g),l.extractRotation(u),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),y++}else if(w.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),m++}else if(w.isHemisphereLight){const C=r.hemi[x];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(g),x++}}}return{setup:c,setupView:f,state:r}}function Gx(i,t){const e=new rB(i,t),n=[],r=[];function a(){n.length=0,r.length=0}function u(_){n.push(_)}function l(_){r.push(_)}function c(_){e.setup(n,_)}function f(_){e.setupView(n,_)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:c,setupLightsView:f,pushLight:u,pushShadow:l}}function sB(i,t){let e=new WeakMap;function n(a,u=0){const l=e.get(a);let c;return l===void 0?(c=new Gx(i,t),e.set(a,[c])):u>=l.length?(c=new Gx(i,t),l.push(c)):c=l[u],c}function r(){e=new WeakMap}return{get:n,dispose:r}}class aB extends Nu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oB extends Nu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uB=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cB(i,t,e){let n=new t_;const r=new Me,a=new Me,u=new Nn,l=new aB({depthPacking:YI}),c=new oB,f={},d=e.maxTextureSize,_={[ea]:wi,[wi]:ea,[fs]:fs},p=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:lB,fragmentShader:uB}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const S=new Ka;S.setAttribute("position",new Gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ms(S,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tM;let g=this.type;this.render=function(C,U,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;const k=i.getRenderTarget(),T=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Ks),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const X=g!==os&&this.type===os,ut=g===os&&this.type!==os;for(let z=0,K=C.length;z<K;z++){const st=C[z],$=st.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const lt=$.getFrameExtents();if(r.multiply(lt),a.copy($.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/lt.x),r.x=a.x*lt.x,$.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/lt.y),r.y=a.y*lt.y,$.mapSize.y=a.y)),$.map===null||X===!0||ut===!0){const N=this.type!==os?{minFilter:hi,magFilter:hi}:{};$.map!==null&&$.map.dispose(),$.map=new Wa(r.x,r.y,N),$.map.texture.name=st.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const ct=$.getViewportCount();for(let N=0;N<ct;N++){const V=$.getViewport(N);u.set(a.x*V.x,a.y*V.y,a.x*V.z,a.y*V.w),Z.viewport(u),$.updateMatrices(st,N),n=$.getFrustum(),w(U,b,$.camera,st,this.type)}$.isPointLightShadow!==!0&&this.type===os&&R($,b),$.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(k,T,L)};function R(C,U){const b=t.update(y);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wa(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,b,p,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,b,m,y,null)}function E(C,U,b,k){let T=null;const L=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)T=L;else if(T=b.isPointLight===!0?c:l,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Z=T.uuid,X=U.uuid;let ut=f[Z];ut===void 0&&(ut={},f[Z]=ut);let z=ut[X];z===void 0&&(z=T.clone(),ut[X]=z),T=z}if(T.visible=U.visible,T.wireframe=U.wireframe,k===os?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:_[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=i.properties.get(T);Z.light=b}return T}function w(C,U,b,k,T){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===os)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const X=t.update(C),ut=C.material;if(Array.isArray(ut)){const z=X.groups;for(let K=0,st=z.length;K<st;K++){const $=z[K],lt=ut[$.materialIndex];if(lt&&lt.visible){const ct=E(C,lt,k,T);i.renderBufferDirect(b,null,X,ct,C,$)}}}else if(ut.visible){const z=E(C,ut,k,T);i.renderBufferDirect(b,null,X,z,C,null)}}const Z=C.children;for(let X=0,ut=Z.length;X<ut;X++)w(Z[X],U,b,k,T)}}function fB(i,t,e){const n=e.isWebGL2;function r(){let G=!1;const Et=new Nn;let gt=null;const ot=new Nn(0,0,0,0);return{setMask:function(Tt){gt!==Tt&&!G&&(i.colorMask(Tt,Tt,Tt,Tt),gt=Tt)},setLocked:function(Tt){G=Tt},setClear:function(Tt,Yt,Dt,Nt,_e){_e===!0&&(Tt*=Nt,Yt*=Nt,Dt*=Nt),Et.set(Tt,Yt,Dt,Nt),ot.equals(Et)===!1&&(i.clearColor(Tt,Yt,Dt,Nt),ot.copy(Et))},reset:function(){G=!1,gt=null,ot.set(-1,0,0,0)}}}function a(){let G=!1,Et=null,gt=null,ot=null;return{setTest:function(Tt){Tt?Xt(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(Tt){Et!==Tt&&!G&&(i.depthMask(Tt),Et=Tt)},setFunc:function(Tt){if(gt!==Tt){switch(Tt){case SI:i.depthFunc(i.NEVER);break;case MI:i.depthFunc(i.ALWAYS);break;case EI:i.depthFunc(i.LESS);break;case Jf:i.depthFunc(i.LEQUAL);break;case TI:i.depthFunc(i.EQUAL);break;case wI:i.depthFunc(i.GEQUAL);break;case bI:i.depthFunc(i.GREATER);break;case AI:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Tt}},setLocked:function(Tt){G=Tt},setClear:function(Tt){ot!==Tt&&(i.clearDepth(Tt),ot=Tt)},reset:function(){G=!1,Et=null,gt=null,ot=null}}}function u(){let G=!1,Et=null,gt=null,ot=null,Tt=null,Yt=null,Dt=null,Nt=null,_e=null;return{setTest:function(le){G||(le?Xt(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(le){Et!==le&&!G&&(i.stencilMask(le),Et=le)},setFunc:function(le,Pt,de){(gt!==le||ot!==Pt||Tt!==de)&&(i.stencilFunc(le,Pt,de),gt=le,ot=Pt,Tt=de)},setOp:function(le,Pt,de){(Yt!==le||Dt!==Pt||Nt!==de)&&(i.stencilOp(le,Pt,de),Yt=le,Dt=Pt,Nt=de)},setLocked:function(le){G=le},setClear:function(le){_e!==le&&(i.clearStencil(le),_e=le)},reset:function(){G=!1,Et=null,gt=null,ot=null,Tt=null,Yt=null,Dt=null,Nt=null,_e=null}}}const l=new r,c=new a,f=new u,d=new WeakMap,_=new WeakMap;let p={},m={},S=new WeakMap,y=[],x=null,g=!1,R=null,E=null,w=null,C=null,U=null,b=null,k=null,T=new He(0,0,0),L=0,Z=!1,X=null,ut=null,z=null,K=null,st=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,ct=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(N)[1]),lt=ct>=1):N.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),lt=ct>=2);let V=null,rt={};const Lt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),bt=new Nn().fromArray(Lt),Bt=new Nn().fromArray(wt);function Jt(G,Et,gt,ot){const Tt=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(G,Yt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<gt;Dt++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(Et,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Et+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Yt}const zt={};zt[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),zt[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(zt[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),zt[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Xt(i.DEPTH_TEST),c.setFunc(Jf),ee(!1),re(Ev),Xt(i.CULL_FACE),Kt(Ks);function Xt(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function De(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function Qt(G,Et){return m[G]!==Et?(i.bindFramebuffer(G,Et),m[G]=Et,n&&(G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Et),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Et)),!0):!1}function j(G,Et){let gt=y,ot=!1;if(G)if(gt=S.get(Et),gt===void 0&&(gt=[],S.set(Et,gt)),G.isWebGLMultipleRenderTargets){const Tt=G.texture;if(gt.length!==Tt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,Dt=Tt.length;Yt<Dt;Yt++)gt[Yt]=i.COLOR_ATTACHMENT0+Yt;gt.length=Tt.length,ot=!0}}else gt[0]!==i.COLOR_ATTACHMENT0&&(gt[0]=i.COLOR_ATTACHMENT0,ot=!0);else gt[0]!==i.BACK&&(gt[0]=i.BACK,ot=!0);ot&&(e.isWebGL2?i.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function oe(G){return x!==G?(i.useProgram(G),x=G,!0):!1}const At={[Ma]:i.FUNC_ADD,[aI]:i.FUNC_SUBTRACT,[oI]:i.FUNC_REVERSE_SUBTRACT};if(n)At[Av]=i.MIN,At[Rv]=i.MAX;else{const G=t.get("EXT_blend_minmax");G!==null&&(At[Av]=G.MIN_EXT,At[Rv]=G.MAX_EXT)}const Gt={[lI]:i.ZERO,[uI]:i.ONE,[cI]:i.SRC_COLOR,[um]:i.SRC_ALPHA,[_I]:i.SRC_ALPHA_SATURATE,[pI]:i.DST_COLOR,[hI]:i.DST_ALPHA,[fI]:i.ONE_MINUS_SRC_COLOR,[cm]:i.ONE_MINUS_SRC_ALPHA,[mI]:i.ONE_MINUS_DST_COLOR,[dI]:i.ONE_MINUS_DST_ALPHA,[gI]:i.CONSTANT_COLOR,[vI]:i.ONE_MINUS_CONSTANT_COLOR,[xI]:i.CONSTANT_ALPHA,[yI]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(G,Et,gt,ot,Tt,Yt,Dt,Nt,_e,le){if(G===Ks){g===!0&&(De(i.BLEND),g=!1);return}if(g===!1&&(Xt(i.BLEND),g=!0),G!==sI){if(G!==R||le!==Z){if((E!==Ma||U!==Ma)&&(i.blendEquation(i.FUNC_ADD),E=Ma,U=Ma),le)switch(G){case el:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tv:i.blendFunc(i.ONE,i.ONE);break;case wv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bv:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case el:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tv:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bv:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}w=null,C=null,b=null,k=null,T.set(0,0,0),L=0,R=G,Z=le}return}Tt=Tt||Et,Yt=Yt||gt,Dt=Dt||ot,(Et!==E||Tt!==U)&&(i.blendEquationSeparate(At[Et],At[Tt]),E=Et,U=Tt),(gt!==w||ot!==C||Yt!==b||Dt!==k)&&(i.blendFuncSeparate(Gt[gt],Gt[ot],Gt[Yt],Gt[Dt]),w=gt,C=ot,b=Yt,k=Dt),(Nt.equals(T)===!1||_e!==L)&&(i.blendColor(Nt.r,Nt.g,Nt.b,_e),T.copy(Nt),L=_e),R=G,Z=!1}function Q(G,Et){G.side===fs?De(i.CULL_FACE):Xt(i.CULL_FACE);let gt=G.side===wi;Et&&(gt=!gt),ee(gt),G.blending===el&&G.transparent===!1?Kt(Ks):Kt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const ot=G.stencilWrite;f.setTest(ot),ot&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ae(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Xt(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(G){X!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),X=G)}function re(G){G!==nI?(Xt(i.CULL_FACE),G!==ut&&(G===Ev?i.cullFace(i.BACK):G===iI?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),ut=G}function he(G){G!==z&&(lt&&i.lineWidth(G),z=G)}function ae(G,Et,gt){G?(Xt(i.POLYGON_OFFSET_FILL),(K!==Et||st!==gt)&&(i.polygonOffset(Et,gt),K=Et,st=gt)):De(i.POLYGON_OFFSET_FILL)}function Fe(G){G?Xt(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function O(G){G===void 0&&(G=i.TEXTURE0+$-1),V!==G&&(i.activeTexture(G),V=G)}function P(G,Et,gt){gt===void 0&&(V===null?gt=i.TEXTURE0+$-1:gt=V);let ot=rt[gt];ot===void 0&&(ot={type:void 0,texture:void 0},rt[gt]=ot),(ot.type!==G||ot.texture!==Et)&&(V!==gt&&(i.activeTexture(gt),V=gt),i.bindTexture(G,Et||zt[G]),ot.type=G,ot.texture=Et)}function J(){const G=rt[V];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(G){bt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),bt.copy(G))}function qt(G){Bt.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Bt.copy(G))}function Ft(G,Et){let gt=_.get(Et);gt===void 0&&(gt=new WeakMap,_.set(Et,gt));let ot=gt.get(G);ot===void 0&&(ot=i.getUniformBlockIndex(Et,G.name),gt.set(G,ot))}function yt(G,Et){const ot=_.get(Et).get(G);d.get(Et)!==ot&&(i.uniformBlockBinding(Et,ot,G.__bindingPointIndex),d.set(Et,ot))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},V=null,rt={},m={},S=new WeakMap,y=[],x=null,g=!1,R=null,E=null,w=null,C=null,U=null,b=null,k=null,T=new He(0,0,0),L=0,Z=!1,X=null,ut=null,z=null,K=null,st=null,bt.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Xt,disable:De,bindFramebuffer:Qt,drawBuffers:j,useProgram:oe,setBlending:Kt,setMaterial:Q,setFlipSided:ee,setCullFace:re,setLineWidth:he,setPolygonOffset:ae,setScissorTest:Fe,activeTexture:O,bindTexture:P,unbindTexture:J,compressedTexImage2D:_t,compressedTexImage3D:mt,texImage2D:ht,texImage3D:te,updateUBOMapping:Ft,uniformBlockBinding:yt,texStorage2D:B,texStorage3D:St,texSubImage2D:vt,texSubImage3D:Ot,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Rt,scissor:kt,viewport:qt,reset:me}}function hB(i,t,e,n,r,a,u){const l=r.isWebGL2,c=r.maxTextures,f=r.maxCubemapSize,d=r.maxTextureSize,_=r.maxSamples,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new WeakMap;let y;const x=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(O,P){return g?new OffscreenCanvas(O,P):ih("canvas")}function E(O,P,J,_t){let mt=1;if((O.width>_t||O.height>_t)&&(mt=_t/Math.max(O.width,O.height)),mt<1||P===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const vt=P?nh:Math.floor,Ot=vt(mt*O.width),Mt=vt(mt*O.height);y===void 0&&(y=R(Ot,Mt));const Rt=J?R(Ot,Mt):y;return Rt.width=Ot,Rt.height=Mt,Rt.getContext("2d").drawImage(O,0,0,Ot,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Ot+"x"+Mt+")."),Rt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function w(O){return _m(O.width)&&_m(O.height)}function C(O){return l?!1:O.wrapS!==br||O.wrapT!==br||O.minFilter!==hi&&O.minFilter!==or}function U(O,P){return O.generateMipmaps&&P&&O.minFilter!==hi&&O.minFilter!==or}function b(O){i.generateMipmap(O)}function k(O,P,J,_t,mt=!1){if(l===!1)return P;if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let vt=P;if(P===i.RED&&(J===i.FLOAT&&(vt=i.R32F),J===i.HALF_FLOAT&&(vt=i.R16F),J===i.UNSIGNED_BYTE&&(vt=i.R8)),P===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(vt=i.R8UI),J===i.UNSIGNED_SHORT&&(vt=i.R16UI),J===i.UNSIGNED_INT&&(vt=i.R32UI),J===i.BYTE&&(vt=i.R8I),J===i.SHORT&&(vt=i.R16I),J===i.INT&&(vt=i.R32I)),P===i.RG&&(J===i.FLOAT&&(vt=i.RG32F),J===i.HALF_FLOAT&&(vt=i.RG16F),J===i.UNSIGNED_BYTE&&(vt=i.RG8)),P===i.RGBA){const Ot=mt?Qf:Ye.getTransfer(_t);J===i.FLOAT&&(vt=i.RGBA32F),J===i.HALF_FLOAT&&(vt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(vt=Ot===en?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(vt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(vt=i.RGB5_A1)}return(vt===i.R16F||vt===i.R32F||vt===i.RG16F||vt===i.RG32F||vt===i.RGBA16F||vt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function T(O,P,J){return U(O,J)===!0||O.isFramebufferTexture&&O.minFilter!==hi&&O.minFilter!==or?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function L(O){return O===hi||O===Cv||O===Jd?i.NEAREST:i.LINEAR}function Z(O){const P=O.target;P.removeEventListener("dispose",Z),ut(P),P.isVideoTexture&&S.delete(P)}function X(O){const P=O.target;P.removeEventListener("dispose",X),K(P)}function ut(O){const P=n.get(O);if(P.__webglInit===void 0)return;const J=O.source,_t=x.get(J);if(_t){const mt=_t[P.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&z(O),Object.keys(_t).length===0&&x.delete(J)}n.remove(O)}function z(O){const P=n.get(O);i.deleteTexture(P.__webglTexture);const J=O.source,_t=x.get(J);delete _t[P.__cacheKey],u.memory.textures--}function K(O){const P=O.texture,J=n.get(O),_t=n.get(P);if(_t.__webglTexture!==void 0&&(i.deleteTexture(_t.__webglTexture),u.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(J.__webglFramebuffer[mt]))for(let vt=0;vt<J.__webglFramebuffer[mt].length;vt++)i.deleteFramebuffer(J.__webglFramebuffer[mt][vt]);else i.deleteFramebuffer(J.__webglFramebuffer[mt]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[mt])}else{if(Array.isArray(J.__webglFramebuffer))for(let mt=0;mt<J.__webglFramebuffer.length;mt++)i.deleteFramebuffer(J.__webglFramebuffer[mt]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let mt=0;mt<J.__webglColorRenderbuffer.length;mt++)J.__webglColorRenderbuffer[mt]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[mt]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let mt=0,vt=P.length;mt<vt;mt++){const Ot=n.get(P[mt]);Ot.__webglTexture&&(i.deleteTexture(Ot.__webglTexture),u.memory.textures--),n.remove(P[mt])}n.remove(P),n.remove(O)}let st=0;function $(){st=0}function lt(){const O=st;return O>=c&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+c),st+=1,O}function ct(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function N(O,P){const J=n.get(O);if(O.isVideoTexture&&ae(O),O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){const _t=O.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(J,O,P);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+P)}function V(O,P){const J=n.get(O);if(O.version>0&&J.__version!==O.version){Xt(J,O,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+P)}function rt(O,P){const J=n.get(O);if(O.version>0&&J.__version!==O.version){Xt(J,O,P);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+P)}function Lt(O,P){const J=n.get(O);if(O.version>0&&J.__version!==O.version){De(J,O,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+P)}const wt={[dm]:i.REPEAT,[br]:i.CLAMP_TO_EDGE,[pm]:i.MIRRORED_REPEAT},bt={[hi]:i.NEAREST,[Cv]:i.NEAREST_MIPMAP_NEAREST,[Jd]:i.NEAREST_MIPMAP_LINEAR,[or]:i.LINEAR,[NI]:i.LINEAR_MIPMAP_NEAREST,[Ru]:i.LINEAR_MIPMAP_LINEAR},Bt={[$I]:i.NEVER,[eU]:i.ALWAYS,[KI]:i.LESS,[JI]:i.LEQUAL,[ZI]:i.EQUAL,[tU]:i.GEQUAL,[QI]:i.GREATER,[jI]:i.NOTEQUAL};function Jt(O,P,J){if(J?(i.texParameteri(O,i.TEXTURE_WRAP_S,wt[P.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,wt[P.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,wt[P.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,bt[P.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,bt[P.minFilter])):(i.texParameteri(O,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(O,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==br||P.wrapT!==br)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(O,i.TEXTURE_MAG_FILTER,L(P.magFilter)),i.texParameteri(O,i.TEXTURE_MIN_FILTER,L(P.minFilter)),P.minFilter!==hi&&P.minFilter!==or&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Bt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const _t=t.get("EXT_texture_filter_anisotropic");if(P.magFilter===hi||P.minFilter!==Jd&&P.minFilter!==Ru||P.type===Ws&&t.has("OES_texture_float_linear")===!1||l===!1&&P.type===Cu&&t.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(O,_t.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function zt(O,P){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",Z));const _t=P.source;let mt=x.get(_t);mt===void 0&&(mt={},x.set(_t,mt));const vt=ct(P);if(vt!==O.__cacheKey){mt[vt]===void 0&&(mt[vt]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,J=!0),mt[vt].usedTimes++;const Ot=mt[O.__cacheKey];Ot!==void 0&&(mt[O.__cacheKey].usedTimes--,Ot.usedTimes===0&&z(P)),O.__cacheKey=vt,O.__webglTexture=mt[vt].texture}return J}function Xt(O,P,J){let _t=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(_t=i.TEXTURE_3D);const mt=zt(O,P),vt=P.source;e.bindTexture(_t,O.__webglTexture,i.TEXTURE0+J);const Ot=n.get(vt);if(vt.version!==Ot.__version||mt===!0){e.activeTexture(i.TEXTURE0+J);const Mt=Ye.getPrimaries(Ye.workingColorSpace),Rt=P.colorSpace===ur?null:Ye.getPrimaries(P.colorSpace),B=P.colorSpace===ur||Mt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const St=C(P)&&w(P.image)===!1;let ht=E(P.image,St,!1,d);ht=Fe(P,ht);const te=w(ht)||l,kt=a.convert(P.format,P.colorSpace);let qt=a.convert(P.type),Ft=k(P.internalFormat,kt,qt,P.colorSpace,P.isVideoTexture);Jt(_t,P,te);let yt;const me=P.mipmaps,G=l&&P.isVideoTexture!==!0,Et=Ot.__version===void 0||mt===!0,gt=T(P,ht,te);if(P.isDepthTexture)Ft=i.DEPTH_COMPONENT,l?P.type===Ws?Ft=i.DEPTH_COMPONENT32F:P.type===Vs?Ft=i.DEPTH_COMPONENT24:P.type===Na?Ft=i.DEPTH24_STENCIL8:Ft=i.DEPTH_COMPONENT16:P.type===Ws&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Oa&&Ft===i.DEPTH_COMPONENT&&P.type!==Zm&&P.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Vs,qt=a.convert(P.type)),P.format===dl&&Ft===i.DEPTH_COMPONENT&&(Ft=i.DEPTH_STENCIL,P.type!==Na&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Na,qt=a.convert(P.type))),Et&&(G?e.texStorage2D(i.TEXTURE_2D,1,Ft,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,kt,qt,null));else if(P.isDataTexture)if(me.length>0&&te){G&&Et&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,me[0].width,me[0].height);for(let ot=0,Tt=me.length;ot<Tt;ot++)yt=me[ot],G?e.texSubImage2D(i.TEXTURE_2D,ot,0,0,yt.width,yt.height,kt,qt,yt.data):e.texImage2D(i.TEXTURE_2D,ot,Ft,yt.width,yt.height,0,kt,qt,yt.data);P.generateMipmaps=!1}else G?(Et&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,ht.width,ht.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,kt,qt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,kt,qt,ht.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){G&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ft,me[0].width,me[0].height,ht.depth);for(let ot=0,Tt=me.length;ot<Tt;ot++)yt=me[ot],P.format!==Ar?kt!==null?G?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,yt.width,yt.height,ht.depth,kt,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Ft,yt.width,yt.height,ht.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,yt.width,yt.height,ht.depth,kt,qt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Ft,yt.width,yt.height,ht.depth,0,kt,qt,yt.data)}else{G&&Et&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,me[0].width,me[0].height);for(let ot=0,Tt=me.length;ot<Tt;ot++)yt=me[ot],P.format!==Ar?kt!==null?G?e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,yt.width,yt.height,kt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Ft,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?e.texSubImage2D(i.TEXTURE_2D,ot,0,0,yt.width,yt.height,kt,qt,yt.data):e.texImage2D(i.TEXTURE_2D,ot,Ft,yt.width,yt.height,0,kt,qt,yt.data)}else if(P.isDataArrayTexture)G?(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ft,ht.width,ht.height,ht.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,kt,qt,ht.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ht.width,ht.height,ht.depth,0,kt,qt,ht.data);else if(P.isData3DTexture)G?(Et&&e.texStorage3D(i.TEXTURE_3D,gt,Ft,ht.width,ht.height,ht.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,kt,qt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ht.width,ht.height,ht.depth,0,kt,qt,ht.data);else if(P.isFramebufferTexture){if(Et)if(G)e.texStorage2D(i.TEXTURE_2D,gt,Ft,ht.width,ht.height);else{let ot=ht.width,Tt=ht.height;for(let Yt=0;Yt<gt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,Ft,ot,Tt,0,kt,qt,null),ot>>=1,Tt>>=1}}else if(me.length>0&&te){G&&Et&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,me[0].width,me[0].height);for(let ot=0,Tt=me.length;ot<Tt;ot++)yt=me[ot],G?e.texSubImage2D(i.TEXTURE_2D,ot,0,0,kt,qt,yt):e.texImage2D(i.TEXTURE_2D,ot,Ft,kt,qt,yt);P.generateMipmaps=!1}else G?(Et&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,ht.width,ht.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,qt,ht)):e.texImage2D(i.TEXTURE_2D,0,Ft,kt,qt,ht);U(P,te)&&b(_t),Ot.__version=vt.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function De(O,P,J){if(P.image.length!==6)return;const _t=zt(O,P),mt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+J);const vt=n.get(mt);if(mt.version!==vt.__version||_t===!0){e.activeTexture(i.TEXTURE0+J);const Ot=Ye.getPrimaries(Ye.workingColorSpace),Mt=P.colorSpace===ur?null:Ye.getPrimaries(P.colorSpace),Rt=P.colorSpace===ur||Ot===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const B=P.isCompressedTexture||P.image[0].isCompressedTexture,St=P.image[0]&&P.image[0].isDataTexture,ht=[];for(let ot=0;ot<6;ot++)!B&&!St?ht[ot]=E(P.image[ot],!1,!0,f):ht[ot]=St?P.image[ot].image:P.image[ot],ht[ot]=Fe(P,ht[ot]);const te=ht[0],kt=w(te)||l,qt=a.convert(P.format,P.colorSpace),Ft=a.convert(P.type),yt=k(P.internalFormat,qt,Ft,P.colorSpace),me=l&&P.isVideoTexture!==!0,G=vt.__version===void 0||_t===!0;let Et=T(P,te,kt);Jt(i.TEXTURE_CUBE_MAP,P,kt);let gt;if(B){me&&G&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,yt,te.width,te.height);for(let ot=0;ot<6;ot++){gt=ht[ot].mipmaps;for(let Tt=0;Tt<gt.length;Tt++){const Yt=gt[Tt];P.format!==Ar?qt!==null?me?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,Yt.width,Yt.height,qt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,yt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,Yt.width,Yt.height,qt,Ft,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,yt,Yt.width,Yt.height,0,qt,Ft,Yt.data)}}}else{gt=P.mipmaps,me&&G&&(gt.length>0&&Et++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,yt,ht[0].width,ht[0].height));for(let ot=0;ot<6;ot++)if(St){me?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,ht[ot].width,ht[ot].height,qt,Ft,ht[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,yt,ht[ot].width,ht[ot].height,0,qt,Ft,ht[ot].data);for(let Tt=0;Tt<gt.length;Tt++){const Dt=gt[Tt].image[ot].image;me?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,Dt.width,Dt.height,qt,Ft,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,yt,Dt.width,Dt.height,0,qt,Ft,Dt.data)}}else{me?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,qt,Ft,ht[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,yt,qt,Ft,ht[ot]);for(let Tt=0;Tt<gt.length;Tt++){const Yt=gt[Tt];me?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,qt,Ft,Yt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,yt,qt,Ft,Yt.image[ot])}}}U(P,kt)&&b(i.TEXTURE_CUBE_MAP),vt.__version=mt.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function Qt(O,P,J,_t,mt,vt){const Ot=a.convert(J.format,J.colorSpace),Mt=a.convert(J.type),Rt=k(J.internalFormat,Ot,Mt,J.colorSpace);if(!n.get(P).__hasExternalTextures){const St=Math.max(1,P.width>>vt),ht=Math.max(1,P.height>>vt);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,vt,Rt,St,ht,P.depth,0,Ot,Mt,null):e.texImage2D(mt,vt,Rt,St,ht,0,Ot,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),he(P)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,mt,n.get(J).__webglTexture,0,re(P)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,mt,n.get(J).__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(O,P,J){if(i.bindRenderbuffer(i.RENDERBUFFER,O),P.depthBuffer&&!P.stencilBuffer){let _t=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||he(P)){const mt=P.depthTexture;mt&&mt.isDepthTexture&&(mt.type===Ws?_t=i.DEPTH_COMPONENT32F:mt.type===Vs&&(_t=i.DEPTH_COMPONENT24));const vt=re(P);he(P)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,_t,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,_t,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,_t,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,O)}else if(P.depthBuffer&&P.stencilBuffer){const _t=re(P);J&&he(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,i.DEPTH24_STENCIL8,P.width,P.height):he(P)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,O)}else{const _t=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let mt=0;mt<_t.length;mt++){const vt=_t[mt],Ot=a.convert(vt.format,vt.colorSpace),Mt=a.convert(vt.type),Rt=k(vt.internalFormat,Ot,Mt,vt.colorSpace),B=re(P);J&&he(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,Rt,P.width,P.height):he(P)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,Rt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),N(P.depthTexture,0);const _t=n.get(P.depthTexture).__webglTexture,mt=re(P);if(P.depthTexture.format===Oa)he(P)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(P.depthTexture.format===dl)he(P)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function At(O){const P=n.get(O),J=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");oe(P.__webglFramebuffer,O)}else if(J){P.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[_t]),P.__webglDepthbuffer[_t]=i.createRenderbuffer(),j(P.__webglDepthbuffer[_t],O,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),j(P.__webglDepthbuffer,O,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(O,P,J){const _t=n.get(O);P!==void 0&&Qt(_t.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&At(O)}function Kt(O){const P=O.texture,J=n.get(O),_t=n.get(P);O.addEventListener("dispose",X),O.isWebGLMultipleRenderTargets!==!0&&(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=P.version,u.memory.textures++);const mt=O.isWebGLCubeRenderTarget===!0,vt=O.isWebGLMultipleRenderTargets===!0,Ot=w(O)||l;if(mt){J.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(l&&P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer[Mt]=[];for(let Rt=0;Rt<P.mipmaps.length;Rt++)J.__webglFramebuffer[Mt][Rt]=i.createFramebuffer()}else J.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(l&&P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer=[];for(let Mt=0;Mt<P.mipmaps.length;Mt++)J.__webglFramebuffer[Mt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(vt)if(r.drawBuffers){const Mt=O.texture;for(let Rt=0,B=Mt.length;Rt<B;Rt++){const St=n.get(Mt[Rt]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&O.samples>0&&he(O)===!1){const Mt=vt?P:[P];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Mt.length;Rt++){const B=Mt[Rt];J.__webglColorRenderbuffer[Rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Rt]);const St=a.convert(B.format,B.colorSpace),ht=a.convert(B.type),te=k(B.internalFormat,St,ht,B.colorSpace,O.isXRRenderTarget===!0),kt=re(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,te,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,J.__webglColorRenderbuffer[Rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),j(J.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,P,Ot);for(let Mt=0;Mt<6;Mt++)if(l&&P.mipmaps&&P.mipmaps.length>0)for(let Rt=0;Rt<P.mipmaps.length;Rt++)Qt(J.__webglFramebuffer[Mt][Rt],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Rt);else Qt(J.__webglFramebuffer[Mt],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);U(P,Ot)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){const Mt=O.texture;for(let Rt=0,B=Mt.length;Rt<B;Rt++){const St=Mt[Rt],ht=n.get(St);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),Jt(i.TEXTURE_2D,St,Ot),Qt(J.__webglFramebuffer,O,St,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,0),U(St,Ot)&&b(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(l?Mt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Mt,_t.__webglTexture),Jt(Mt,P,Ot),l&&P.mipmaps&&P.mipmaps.length>0)for(let Rt=0;Rt<P.mipmaps.length;Rt++)Qt(J.__webglFramebuffer[Rt],O,P,i.COLOR_ATTACHMENT0,Mt,Rt);else Qt(J.__webglFramebuffer,O,P,i.COLOR_ATTACHMENT0,Mt,0);U(P,Ot)&&b(Mt),e.unbindTexture()}O.depthBuffer&&At(O)}function Q(O){const P=w(O)||l,J=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let _t=0,mt=J.length;_t<mt;_t++){const vt=J[_t];if(U(vt,P)){const Ot=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(vt).__webglTexture;e.bindTexture(Ot,Mt),b(Ot),e.unbindTexture()}}}function ee(O){if(l&&O.samples>0&&he(O)===!1){const P=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],J=O.width,_t=O.height;let mt=i.COLOR_BUFFER_BIT;const vt=[],Ot=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(O),Rt=O.isWebGLMultipleRenderTargets===!0;if(Rt)for(let B=0;B<P.length;B++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let B=0;B<P.length;B++){vt.push(i.COLOR_ATTACHMENT0+B),O.depthBuffer&&vt.push(Ot);const St=Mt.__ignoreDepthValues!==void 0?Mt.__ignoreDepthValues:!1;if(St===!1&&(O.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),Rt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[B]),St===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ot]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ot])),Rt){const ht=n.get(P[B]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,J,_t,0,0,J,_t,mt,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Rt)for(let B=0;B<P.length;B++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[B]);const St=n.get(P[B]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}}function re(O){return Math.min(_,O.samples)}function he(O){const P=n.get(O);return l&&O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ae(O){const P=u.render.frame;S.get(O)!==P&&(S.set(O,P),O.update())}function Fe(O,P){const J=O.colorSpace,_t=O.format,mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===mm||J!==ys&&J!==ur&&(Ye.getTransfer(J)===en?l===!1?t.has("EXT_sRGB")===!0&&_t===Ar?(O.format=mm,O.minFilter=or,O.generateMipmaps=!1):P=hM.sRGBToLinear(P):(_t!==Ar||mt!==Js)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),P}this.allocateTextureUnit=lt,this.resetTextureUnits=$,this.setTexture2D=N,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=Lt,this.rebindTextures=Gt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=he}function dB(i,t,e){const n=e.isWebGL2;function r(a,u=ur){let l;const c=Ye.getTransfer(u);if(a===Js)return i.UNSIGNED_BYTE;if(a===rM)return i.UNSIGNED_SHORT_4_4_4_4;if(a===sM)return i.UNSIGNED_SHORT_5_5_5_1;if(a===OI)return i.BYTE;if(a===FI)return i.SHORT;if(a===Zm)return i.UNSIGNED_SHORT;if(a===iM)return i.INT;if(a===Vs)return i.UNSIGNED_INT;if(a===Ws)return i.FLOAT;if(a===Cu)return n?i.HALF_FLOAT:(l=t.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===BI)return i.ALPHA;if(a===Ar)return i.RGBA;if(a===zI)return i.LUMINANCE;if(a===kI)return i.LUMINANCE_ALPHA;if(a===Oa)return i.DEPTH_COMPONENT;if(a===dl)return i.DEPTH_STENCIL;if(a===mm)return l=t.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===HI)return i.RED;if(a===aM)return i.RED_INTEGER;if(a===GI)return i.RG;if(a===oM)return i.RG_INTEGER;if(a===lM)return i.RGBA_INTEGER;if(a===Qd||a===jd||a===tp||a===ep)if(c===en)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Qd)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===jd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===tp)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ep)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Qd)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===jd)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===tp)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ep)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Pv||a===Lv||a===Dv||a===Iv)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Pv)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Lv)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Dv)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Iv)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===VI)return l=t.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Uv||a===Nv)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Uv)return c===en?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Nv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ov||a===Fv||a===Bv||a===zv||a===kv||a===Hv||a===Gv||a===Vv||a===Wv||a===Xv||a===Yv||a===qv||a===$v||a===Kv)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Ov)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Fv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Bv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===zv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===kv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Hv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Gv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Vv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Wv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Xv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Yv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===qv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===$v)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Kv)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===np||a===Zv||a===Jv)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===np)return c===en?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Zv)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Jv)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===WI||a===Qv||a===jv||a===tx)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===np)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Qv)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===jv)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===tx)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Na?n?i.UNSIGNED_INT_24_8:(l=t.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class pB extends lr{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class lf extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mB={type:"move"};class wp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,a=null,u=null;const l=this._targetRay,c=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){u=!0;for(const y of t.hand.values()){const x=e.getJointPose(y,n),g=this._getHandJoint(f,y);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const d=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],p=d.position.distanceTo(_.position),m=.02,S=.005;f.inputState.pinching&&p>m+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&p<=m-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mB)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new lf;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class _B extends Vi{constructor(t,e,n,r,a,u,l,c,f,d){if(d=d!==void 0?d:Oa,d!==Oa&&d!==dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Oa&&(n=Vs),n===void 0&&d===dl&&(n=Na),super(null,r,a,u,l,c,d,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:hi,this.minFilter=c!==void 0?c:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gB extends $a{constructor(t,e){super();const n=this;let r=null,a=1,u=null,l="local-floor",c=1,f=null,d=null,_=null,p=null,m=null,S=null;const y=e.getContextAttributes();let x=null,g=null;const R=[],E=[],w=new lr;w.layers.enable(1),w.viewport=new Nn;const C=new lr;C.layers.enable(2),C.viewport=new Nn;const U=[w,C],b=new pB;b.layers.enable(1),b.layers.enable(2);let k=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let rt=R[V];return rt===void 0&&(rt=new wp,R[V]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(V){let rt=R[V];return rt===void 0&&(rt=new wp,R[V]=rt),rt.getGripSpace()},this.getHand=function(V){let rt=R[V];return rt===void 0&&(rt=new wp,R[V]=rt),rt.getHandSpace()};function L(V){const rt=E.indexOf(V.inputSource);if(rt===-1)return;const Lt=R[rt];Lt!==void 0&&(Lt.update(V.inputSource,V.frame,f||u),Lt.dispatchEvent({type:V.type,data:V.inputSource}))}function Z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",X);for(let V=0;V<R.length;V++){const rt=E[V];rt!==null&&(E[V]=null,R[V].disconnect(rt))}k=null,T=null,t.setRenderTarget(x),m=null,p=null,_=null,r=null,g=null,N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){l=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(V){f=V},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const rt={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:m}),g=new Wa(m.framebufferWidth,m.framebufferHeight,{format:Ar,type:Js,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let rt=null,Lt=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=y.stencil?dl:Oa,Lt=y.stencil?Na:Vs);const bt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:a};_=new XRWebGLBinding(r,e),p=_.createProjectionLayer(bt),r.updateRenderState({layers:[p]}),g=new Wa(p.textureWidth,p.textureHeight,{format:Ar,type:Js,depthTexture:new _B(p.textureWidth,p.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const Bt=t.properties.get(g);Bt.__ignoreDepthValues=p.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),f=null,u=await r.requestReferenceSpace(l),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(V){for(let rt=0;rt<V.removed.length;rt++){const Lt=V.removed[rt],wt=E.indexOf(Lt);wt>=0&&(E[wt]=null,R[wt].disconnect(Lt))}for(let rt=0;rt<V.added.length;rt++){const Lt=V.added[rt];let wt=E.indexOf(Lt);if(wt===-1){for(let Bt=0;Bt<R.length;Bt++)if(Bt>=E.length){E.push(Lt),wt=Bt;break}else if(E[Bt]===null){E[Bt]=Lt,wt=Bt;break}if(wt===-1)break}const bt=R[wt];bt&&bt.connect(Lt)}}const ut=new tt,z=new tt;function K(V,rt,Lt){ut.setFromMatrixPosition(rt.matrixWorld),z.setFromMatrixPosition(Lt.matrixWorld);const wt=ut.distanceTo(z),bt=rt.projectionMatrix.elements,Bt=Lt.projectionMatrix.elements,Jt=bt[14]/(bt[10]-1),zt=bt[14]/(bt[10]+1),Xt=(bt[9]+1)/bt[5],De=(bt[9]-1)/bt[5],Qt=(bt[8]-1)/bt[0],j=(Bt[8]+1)/Bt[0],oe=Jt*Qt,At=Jt*j,Gt=wt/(-Qt+j),Kt=Gt*-Qt;rt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Kt),V.translateZ(Gt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Q=Jt+Gt,ee=zt+Gt,re=oe-Kt,he=At+(wt-Kt),ae=Xt*zt/ee*Q,Fe=De*zt/ee*Q;V.projectionMatrix.makePerspective(re,he,ae,Fe,Q,ee),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function st(V,rt){rt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(rt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;b.near=C.near=w.near=V.near,b.far=C.far=w.far=V.far,(k!==b.near||T!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,T=b.far);const rt=V.parent,Lt=b.cameras;st(b,rt);for(let wt=0;wt<Lt.length;wt++)st(Lt[wt],rt);Lt.length===2?K(b,w,C):b.projectionMatrix.copy(w.projectionMatrix),$(V,b,rt)};function $(V,rt,Lt){Lt===null?V.matrix.copy(rt.matrixWorld):(V.matrix.copy(Lt.matrixWorld),V.matrix.invert(),V.matrix.multiply(rt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(rt.projectionMatrix),V.projectionMatrixInverse.copy(rt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pu*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(V){c=V,p!==null&&(p.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let lt=null;function ct(V,rt){if(d=rt.getViewerPose(f||u),S=rt,d!==null){const Lt=d.views;m!==null&&(t.setRenderTargetFramebuffer(g,m.framebuffer),t.setRenderTarget(g));let wt=!1;Lt.length!==b.cameras.length&&(b.cameras.length=0,wt=!0);for(let bt=0;bt<Lt.length;bt++){const Bt=Lt[bt];let Jt=null;if(m!==null)Jt=m.getViewport(Bt);else{const Xt=_.getViewSubImage(p,Bt);Jt=Xt.viewport,bt===0&&(t.setRenderTargetTextures(g,Xt.colorTexture,p.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(g))}let zt=U[bt];zt===void 0&&(zt=new lr,zt.layers.enable(bt),zt.viewport=new Nn,U[bt]=zt),zt.matrix.fromArray(Bt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Bt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),bt===0&&(b.matrix.copy(zt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),wt===!0&&b.cameras.push(zt)}}for(let Lt=0;Lt<R.length;Lt++){const wt=E[Lt],bt=R[Lt];wt!==null&&bt!==void 0&&bt.update(wt,rt,f||u)}lt&&lt(V,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),S=null}const N=new TM;N.setAnimationLoop(ct),this.setAnimationLoop=function(V){lt=V},this.dispose=function(){}}}function vB(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,SM(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function r(x,g,R,E,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(x,g):g.isMeshToonMaterial?(a(x,g),_(x,g)):g.isMeshPhongMaterial?(a(x,g),d(x,g)):g.isMeshStandardMaterial?(a(x,g),p(x,g),g.isMeshPhysicalMaterial&&m(x,g,w)):g.isMeshMatcapMaterial?(a(x,g),S(x,g)):g.isMeshDepthMaterial?a(x,g):g.isMeshDistanceMaterial?(a(x,g),y(x,g)):g.isMeshNormalMaterial?a(x,g):g.isLineBasicMaterial?(u(x,g),g.isLineDashedMaterial&&l(x,g)):g.isPointsMaterial?c(x,g,R,E):g.isSpriteMaterial?f(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===wi&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===wi&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const R=t.get(g).envMap;if(R&&(x.envMap.value=R,x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;const E=i._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*E,e(g.lightMap,x.lightMapTransform)}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function u(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function l(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,R,E){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*R,x.scale.value=E*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function f(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function _(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function p(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),t.get(g).envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function m(x,g,R){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wi&&x.clearcoatNormalScale.value.negate())),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,g){g.matcap&&(x.matcap.value=g.matcap)}function y(x,g){const R=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function xB(i,t,e,n){let r={},a={},u=[];const l=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(R,E){const w=E.program;n.uniformBlockBinding(R,w)}function f(R,E){let w=r[R.id];w===void 0&&(S(R),w=d(R),r[R.id]=w,R.addEventListener("dispose",x));const C=E.program;n.updateUBOMapping(R,C);const U=t.render.frame;a[R.id]!==U&&(p(R),a[R.id]=U)}function d(R){const E=_();R.__bindingPointIndex=E;const w=i.createBuffer(),C=R.__size,U=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function _(){for(let R=0;R<l;R++)if(u.indexOf(R)===-1)return u.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const E=r[R.id],w=R.uniforms,C=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let U=0,b=w.length;U<b;U++){const k=w[U];if(m(k,U,C)===!0){const T=k.__offset,L=Array.isArray(k.value)?k.value:[k.value];let Z=0;for(let X=0;X<L.length;X++){const ut=L[X],z=y(ut);typeof ut=="number"?(k.__data[0]=ut,i.bufferSubData(i.UNIFORM_BUFFER,T+Z,k.__data)):ut.isMatrix3?(k.__data[0]=ut.elements[0],k.__data[1]=ut.elements[1],k.__data[2]=ut.elements[2],k.__data[3]=ut.elements[0],k.__data[4]=ut.elements[3],k.__data[5]=ut.elements[4],k.__data[6]=ut.elements[5],k.__data[7]=ut.elements[0],k.__data[8]=ut.elements[6],k.__data[9]=ut.elements[7],k.__data[10]=ut.elements[8],k.__data[11]=ut.elements[0]):(ut.toArray(k.__data,Z),Z+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,k.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,E,w){const C=R.value;if(w[E]===void 0){if(typeof C=="number")w[E]=C;else{const U=Array.isArray(C)?C:[C],b=[];for(let k=0;k<U.length;k++)b.push(U[k].clone());w[E]=b}return!0}else if(typeof C=="number"){if(w[E]!==C)return w[E]=C,!0}else{const U=Array.isArray(w[E])?w[E]:[w[E]],b=Array.isArray(C)?C:[C];for(let k=0;k<U.length;k++){const T=U[k];if(T.equals(b[k])===!1)return T.copy(b[k]),!0}}return!1}function S(R){const E=R.uniforms;let w=0;const C=16;let U=0;for(let b=0,k=E.length;b<k;b++){const T=E[b],L={boundary:0,storage:0},Z=Array.isArray(T.value)?T.value:[T.value];for(let X=0,ut=Z.length;X<ut;X++){const z=Z[X],K=y(z);L.boundary+=K.boundary,L.storage+=K.storage}if(T.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,b>0){U=w%C;const X=C-U;U!==0&&X-L.boundary<0&&(w+=C-U,T.__offset=w)}w+=L.storage}return U=w%C,U>0&&(w+=C-U),R.__size=w,R.__cache={},this}function y(R){const E={boundary:0,storage:0};return typeof R=="number"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function x(R){const E=R.target;E.removeEventListener("dispose",x);const w=u.indexOf(E.__bindingPointIndex);u.splice(w,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function g(){for(const R in r)i.deleteBuffer(r[R]);u=[],r={},a={}}return{bind:c,update:f,dispose:g}}class PM{constructor(t={}){const{canvas:e=gU(),context:n=null,depth:r=!0,stencil:a=!0,alpha:u=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=u;const m=new Uint32Array(4),S=new Int32Array(4);let y=null,x=null;const g=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this._useLegacyLights=!1,this.toneMapping=Zs,this.toneMappingExposure=1;const E=this;let w=!1,C=0,U=0,b=null,k=-1,T=null;const L=new Nn,Z=new Nn;let X=null;const ut=new He(0);let z=0,K=e.width,st=e.height,$=1,lt=null,ct=null;const N=new Nn(0,0,K,st),V=new Nn(0,0,K,st);let rt=!1;const Lt=new t_;let wt=!1,bt=!1,Bt=null;const Jt=new An,zt=new Me,Xt=new tt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qt(){return b===null?$:1}let j=n;function oe(I,Y){for(let et=0;et<I.length;et++){const it=I[et],nt=e.getContext(it,Y);if(nt!==null)return nt}return null}try{const I={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Km}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",Et,!1),j===null){const Y=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&Y.shift(),j=oe(Y,I),j===null)throw oe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let At,Gt,Kt,Q,ee,re,he,ae,Fe,O,P,J,_t,mt,vt,Ot,Mt,Rt,B,St,ht,te,kt,qt;function Ft(){At=new C3(j),Gt=new E3(j,At,t),At.init(Gt),te=new dB(j,At,Gt),Kt=new fB(j,At,Gt),Q=new D3(j),ee=new JF,re=new hB(j,At,Kt,ee,Gt,te,Q),he=new w3(E),ae=new R3(E),Fe=new GU(j,Gt),kt=new S3(j,At,Fe,Gt),O=new P3(j,Fe,Q,kt),P=new O3(j,O,Fe,Q),B=new N3(j,Gt,re),Ot=new T3(ee),J=new ZF(E,he,ae,At,Gt,kt,Ot),_t=new vB(E,ee),mt=new jF,vt=new sB(At,Gt),Rt=new y3(E,he,ae,Kt,P,p,c),Mt=new cB(E,P,Gt),qt=new xB(j,Q,Gt,Kt),St=new M3(j,At,Q,Gt),ht=new L3(j,At,Q,Gt),Q.programs=J.programs,E.capabilities=Gt,E.extensions=At,E.properties=ee,E.renderLists=mt,E.shadowMap=Mt,E.state=Kt,E.info=Q}Ft();const yt=new gB(E,j);this.xr=yt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const I=At.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=At.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(I){I!==void 0&&($=I,this.setSize(K,st,!1))},this.getSize=function(I){return I.set(K,st)},this.setSize=function(I,Y,et=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=I,st=Y,e.width=Math.floor(I*$),e.height=Math.floor(Y*$),et===!0&&(e.style.width=I+"px",e.style.height=Y+"px"),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(K*$,st*$).floor()},this.setDrawingBufferSize=function(I,Y,et){K=I,st=Y,$=et,e.width=Math.floor(I*et),e.height=Math.floor(Y*et),this.setViewport(0,0,I,Y)},this.getCurrentViewport=function(I){return I.copy(L)},this.getViewport=function(I){return I.copy(N)},this.setViewport=function(I,Y,et,it){I.isVector4?N.set(I.x,I.y,I.z,I.w):N.set(I,Y,et,it),Kt.viewport(L.copy(N).multiplyScalar($).floor())},this.getScissor=function(I){return I.copy(V)},this.setScissor=function(I,Y,et,it){I.isVector4?V.set(I.x,I.y,I.z,I.w):V.set(I,Y,et,it),Kt.scissor(Z.copy(V).multiplyScalar($).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(I){Kt.setScissorTest(rt=I)},this.setOpaqueSort=function(I){lt=I},this.setTransparentSort=function(I){ct=I},this.getClearColor=function(I){return I.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(I=!0,Y=!0,et=!0){let it=0;if(I){let nt=!1;if(b!==null){const Ct=b.texture.format;nt=Ct===lM||Ct===oM||Ct===aM}if(nt){const Ct=b.texture.type,Ht=Ct===Js||Ct===Vs||Ct===Zm||Ct===Na||Ct===rM||Ct===sM,ne=Rt.getClearColor(),Vt=Rt.getClearAlpha(),Zt=ne.r,ie=ne.g,pe=ne.b;Ht?(m[0]=Zt,m[1]=ie,m[2]=pe,m[3]=Vt,j.clearBufferuiv(j.COLOR,0,m)):(S[0]=Zt,S[1]=ie,S[2]=pe,S[3]=Vt,j.clearBufferiv(j.COLOR,0,S))}else it|=j.COLOR_BUFFER_BIT}Y&&(it|=j.DEPTH_BUFFER_BIT),et&&(it|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),mt.dispose(),vt.dispose(),ee.dispose(),he.dispose(),ae.dispose(),P.dispose(),kt.dispose(),qt.dispose(),J.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",_e),yt.removeEventListener("sessionend",le),Bt&&(Bt.dispose(),Bt=null),Pt.stop()};function me(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const I=Q.autoReset,Y=Mt.enabled,et=Mt.autoUpdate,it=Mt.needsUpdate,nt=Mt.type;Ft(),Q.autoReset=I,Mt.enabled=Y,Mt.autoUpdate=et,Mt.needsUpdate=it,Mt.type=nt}function Et(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function gt(I){const Y=I.target;Y.removeEventListener("dispose",gt),ot(Y)}function ot(I){Tt(I),ee.remove(I)}function Tt(I){const Y=ee.get(I).programs;Y!==void 0&&(Y.forEach(function(et){J.releaseProgram(et)}),I.isShaderMaterial&&J.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,et,it,nt,Ct){Y===null&&(Y=De);const Ht=nt.isMesh&&nt.matrixWorld.determinant()<0,ne=qe(I,Y,et,it,nt);Kt.setMaterial(it,Ht);let Vt=et.index,Zt=1;if(it.wireframe===!0){if(Vt=O.getWireframeAttribute(et),Vt===void 0)return;Zt=2}const ie=et.drawRange,pe=et.attributes.position;let $e=ie.start*Zt,fn=(ie.start+ie.count)*Zt;Ct!==null&&($e=Math.max($e,Ct.start*Zt),fn=Math.min(fn,(Ct.start+Ct.count)*Zt)),Vt!==null?($e=Math.max($e,0),fn=Math.min(fn,Vt.count)):pe!=null&&($e=Math.max($e,0),fn=Math.min(fn,pe.count));const Be=fn-$e;if(Be<0||Be===1/0)return;kt.setup(nt,it,ne,et,Vt);let Fn,Ve=St;if(Vt!==null&&(Fn=Fe.get(Vt),Ve=ht,Ve.setIndex(Fn)),nt.isMesh)it.wireframe===!0?(Kt.setLineWidth(it.wireframeLinewidth*Qt()),Ve.setMode(j.LINES)):Ve.setMode(j.TRIANGLES);else if(nt.isLine){let ge=it.linewidth;ge===void 0&&(ge=1),Kt.setLineWidth(ge*Qt()),nt.isLineSegments?Ve.setMode(j.LINES):nt.isLineLoop?Ve.setMode(j.LINE_LOOP):Ve.setMode(j.LINE_STRIP)}else nt.isPoints?Ve.setMode(j.POINTS):nt.isSprite&&Ve.setMode(j.TRIANGLES);if(nt.isInstancedMesh)Ve.renderInstances($e,Be,nt.count);else if(et.isInstancedBufferGeometry){const ge=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,vl=Math.min(et.instanceCount,ge);Ve.renderInstances($e,Be,vl)}else Ve.render($e,Be)};function Yt(I,Y,et){I.transparent===!0&&I.side===fs&&I.forceSinglePass===!1?(I.side=wi,I.needsUpdate=!0,Xe(I,Y,et),I.side=ea,I.needsUpdate=!0,Xe(I,Y,et),I.side=fs):Xe(I,Y,et)}this.compile=function(I,Y,et=null){et===null&&(et=I),x=vt.get(et),x.init(),R.push(x),et.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(x.pushLight(nt),nt.castShadow&&x.pushShadow(nt))}),I!==et&&I.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(x.pushLight(nt),nt.castShadow&&x.pushShadow(nt))}),x.setupLights(E._useLegacyLights);const it=new Set;return I.traverse(function(nt){const Ct=nt.material;if(Ct)if(Array.isArray(Ct))for(let Ht=0;Ht<Ct.length;Ht++){const ne=Ct[Ht];Yt(ne,et,nt),it.add(ne)}else Yt(Ct,et,nt),it.add(Ct)}),R.pop(),x=null,it},this.compileAsync=function(I,Y,et=null){const it=this.compile(I,Y,et);return new Promise(nt=>{function Ct(){if(it.forEach(function(Ht){ee.get(Ht).currentProgram.isReady()&&it.delete(Ht)}),it.size===0){nt(I);return}setTimeout(Ct,10)}At.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Dt=null;function Nt(I){Dt&&Dt(I)}function _e(){Pt.stop()}function le(){Pt.start()}const Pt=new TM;Pt.setAnimationLoop(Nt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(I){Dt=I,yt.setAnimationLoop(I),I===null?Pt.stop():Pt.start()},yt.addEventListener("sessionstart",_e),yt.addEventListener("sessionend",le),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(Y),Y=yt.getCamera()),I.isScene===!0&&I.onBeforeRender(E,I,Y,b),x=vt.get(I,R.length),x.init(),R.push(x),Jt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Lt.setFromProjectionMatrix(Jt),bt=this.localClippingEnabled,wt=Ot.init(this.clippingPlanes,bt),y=mt.get(I,g.length),y.init(),g.push(y),de(I,Y,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(lt,ct),this.info.render.frame++,wt===!0&&Ot.beginShadows();const et=x.state.shadowsArray;if(Mt.render(et,I,Y),wt===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Rt.render(y,I),x.setupLights(E._useLegacyLights),Y.isArrayCamera){const it=Y.cameras;for(let nt=0,Ct=it.length;nt<Ct;nt++){const Ht=it[nt];se(y,I,Ht,Ht.viewport)}}else se(y,I,Y);b!==null&&(re.updateMultisampleRenderTarget(b),re.updateRenderTargetMipmap(b)),I.isScene===!0&&I.onAfterRender(E,I,Y),kt.resetDefaultState(),k=-1,T=null,R.pop(),R.length>0?x=R[R.length-1]:x=null,g.pop(),g.length>0?y=g[g.length-1]:y=null};function de(I,Y,et,it){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)et=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Lt.intersectsSprite(I)){it&&Xt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Jt);const Ht=P.update(I),ne=I.material;ne.visible&&y.push(I,Ht,ne,et,Xt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Lt.intersectsObject(I))){const Ht=P.update(I),ne=I.material;if(it&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Xt.copy(I.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Xt.copy(Ht.boundingSphere.center)),Xt.applyMatrix4(I.matrixWorld).applyMatrix4(Jt)),Array.isArray(ne)){const Vt=Ht.groups;for(let Zt=0,ie=Vt.length;Zt<ie;Zt++){const pe=Vt[Zt],$e=ne[pe.materialIndex];$e&&$e.visible&&y.push(I,Ht,$e,et,Xt.z,pe)}}else ne.visible&&y.push(I,Ht,ne,et,Xt.z,null)}}const Ct=I.children;for(let Ht=0,ne=Ct.length;Ht<ne;Ht++)de(Ct[Ht],Y,et,it)}function se(I,Y,et,it){const nt=I.opaque,Ct=I.transmissive,Ht=I.transparent;x.setupLightsView(et),wt===!0&&Ot.setGlobalState(E.clippingPlanes,et),Ct.length>0&&ye(nt,Ct,Y,et),it&&Kt.viewport(L.copy(it)),nt.length>0&&je(nt,Y,et),Ct.length>0&&je(Ct,Y,et),Ht.length>0&&je(Ht,Y,et),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function ye(I,Y,et,it){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;const Ct=Gt.isWebGL2;Bt===null&&(Bt=new Wa(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")?Cu:Js,minFilter:Ru,samples:Ct?4:0})),E.getDrawingBufferSize(zt),Ct?Bt.setSize(zt.x,zt.y):Bt.setSize(nh(zt.x),nh(zt.y));const Ht=E.getRenderTarget();E.setRenderTarget(Bt),E.getClearColor(ut),z=E.getClearAlpha(),z<1&&E.setClearColor(16777215,.5),E.clear();const ne=E.toneMapping;E.toneMapping=Zs,je(I,et,it),re.updateMultisampleRenderTarget(Bt),re.updateRenderTargetMipmap(Bt);let Vt=!1;for(let Zt=0,ie=Y.length;Zt<ie;Zt++){const pe=Y[Zt],$e=pe.object,fn=pe.geometry,Be=pe.material,Fn=pe.group;if(Be.side===fs&&$e.layers.test(it.layers)){const Ve=Be.side;Be.side=wi,Be.needsUpdate=!0,be($e,et,it,fn,Be,Fn),Be.side=Ve,Be.needsUpdate=!0,Vt=!0}}Vt===!0&&(re.updateMultisampleRenderTarget(Bt),re.updateRenderTargetMipmap(Bt)),E.setRenderTarget(Ht),E.setClearColor(ut,z),E.toneMapping=ne}function je(I,Y,et){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let nt=0,Ct=I.length;nt<Ct;nt++){const Ht=I[nt],ne=Ht.object,Vt=Ht.geometry,Zt=it===null?Ht.material:it,ie=Ht.group;ne.layers.test(et.layers)&&be(ne,Y,et,Vt,Zt,ie)}}function be(I,Y,et,it,nt,Ct){I.onBeforeRender(E,Y,et,it,nt,Ct),I.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),nt.onBeforeRender(E,Y,et,it,I,Ct),nt.transparent===!0&&nt.side===fs&&nt.forceSinglePass===!1?(nt.side=wi,nt.needsUpdate=!0,E.renderBufferDirect(et,Y,it,nt,I,Ct),nt.side=ea,nt.needsUpdate=!0,E.renderBufferDirect(et,Y,it,nt,I,Ct),nt.side=fs):E.renderBufferDirect(et,Y,it,nt,I,Ct),I.onAfterRender(E,Y,et,it,nt,Ct)}function Xe(I,Y,et){Y.isScene!==!0&&(Y=De);const it=ee.get(I),nt=x.state.lights,Ct=x.state.shadowsArray,Ht=nt.state.version,ne=J.getParameters(I,nt.state,Ct,Y,et),Vt=J.getProgramCacheKey(ne);let Zt=it.programs;it.environment=I.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(I.isMeshStandardMaterial?ae:he).get(I.envMap||it.environment),Zt===void 0&&(I.addEventListener("dispose",gt),Zt=new Map,it.programs=Zt);let ie=Zt.get(Vt);if(ie!==void 0){if(it.currentProgram===ie&&it.lightsStateVersion===Ht)return cn(I,ne),ie}else ne.uniforms=J.getUniforms(I),I.onBuild(et,ne,E),I.onBeforeCompile(ne,E),ie=J.acquireProgram(ne,Vt),Zt.set(Vt,ie),it.uniforms=ne.uniforms;const pe=it.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(pe.clippingPlanes=Ot.uniform),cn(I,ne),it.needsLights=Wn(I),it.lightsStateVersion=Ht,it.needsLights&&(pe.ambientLightColor.value=nt.state.ambient,pe.lightProbe.value=nt.state.probe,pe.directionalLights.value=nt.state.directional,pe.directionalLightShadows.value=nt.state.directionalShadow,pe.spotLights.value=nt.state.spot,pe.spotLightShadows.value=nt.state.spotShadow,pe.rectAreaLights.value=nt.state.rectArea,pe.ltc_1.value=nt.state.rectAreaLTC1,pe.ltc_2.value=nt.state.rectAreaLTC2,pe.pointLights.value=nt.state.point,pe.pointLightShadows.value=nt.state.pointShadow,pe.hemisphereLights.value=nt.state.hemi,pe.directionalShadowMap.value=nt.state.directionalShadowMap,pe.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,pe.spotShadowMap.value=nt.state.spotShadowMap,pe.spotLightMatrix.value=nt.state.spotLightMatrix,pe.spotLightMap.value=nt.state.spotLightMap,pe.pointShadowMap.value=nt.state.pointShadowMap,pe.pointShadowMatrix.value=nt.state.pointShadowMatrix),it.currentProgram=ie,it.uniformsList=null,ie}function xn(I){if(I.uniformsList===null){const Y=I.currentProgram.getUniforms();I.uniformsList=Cf.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function cn(I,Y){const et=ee.get(I);et.outputColorSpace=Y.outputColorSpace,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function qe(I,Y,et,it,nt){Y.isScene!==!0&&(Y=De),re.resetTextureUnits();const Ct=Y.fog,Ht=it.isMeshStandardMaterial?Y.environment:null,ne=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ys,Vt=(it.isMeshStandardMaterial?ae:he).get(it.envMap||Ht),Zt=it.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ie=!!et.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),pe=!!et.morphAttributes.position,$e=!!et.morphAttributes.normal,fn=!!et.morphAttributes.color;let Be=Zs;it.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Be=E.toneMapping);const Fn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ve=Fn!==void 0?Fn.length:0,ge=ee.get(it),vl=x.state.lights;if(wt===!0&&(bt===!0||I!==T)){const ei=I===T&&it.id===k;Ot.setState(it,I,ei)}let sn=!1;it.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==vl.state.version||ge.outputColorSpace!==ne||nt.isInstancedMesh&&ge.instancing===!1||!nt.isInstancedMesh&&ge.instancing===!0||nt.isSkinnedMesh&&ge.skinning===!1||!nt.isSkinnedMesh&&ge.skinning===!0||nt.isInstancedMesh&&ge.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&ge.instancingColor===!1&&nt.instanceColor!==null||ge.envMap!==Vt||it.fog===!0&&ge.fog!==Ct||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ot.numPlanes||ge.numIntersection!==Ot.numIntersection)||ge.vertexAlphas!==Zt||ge.vertexTangents!==ie||ge.morphTargets!==pe||ge.morphNormals!==$e||ge.morphColors!==fn||ge.toneMapping!==Be||Gt.isWebGL2===!0&&ge.morphTargetsCount!==Ve)&&(sn=!0):(sn=!0,ge.__version=it.version);let Lr=ge.currentProgram;sn===!0&&(Lr=Xe(it,Y,nt));let xl=!1,Xr=!1,yl=!1;const Pn=Lr.getUniforms(),Yi=ge.uniforms;if(Kt.useProgram(Lr.program)&&(xl=!0,Xr=!0,yl=!0),it.id!==k&&(k=it.id,Xr=!0),xl||T!==I){Pn.setValue(j,"projectionMatrix",I.projectionMatrix),Pn.setValue(j,"viewMatrix",I.matrixWorldInverse);const ei=Pn.map.cameraPosition;ei!==void 0&&ei.setValue(j,Xt.setFromMatrixPosition(I.matrixWorld)),Gt.logarithmicDepthBuffer&&Pn.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Pn.setValue(j,"isOrthographic",I.isOrthographicCamera===!0),T!==I&&(T=I,Xr=!0,yl=!0)}if(nt.isSkinnedMesh){Pn.setOptional(j,nt,"bindMatrix"),Pn.setOptional(j,nt,"bindMatrixInverse");const ei=nt.skeleton;ei&&(Gt.floatVertexTextures?(ei.boneTexture===null&&ei.computeBoneTexture(),Pn.setValue(j,"boneTexture",ei.boneTexture,re),Pn.setValue(j,"boneTextureSize",ei.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Za=et.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0&&Gt.isWebGL2===!0)&&B.update(nt,et,Lr),(Xr||ge.receiveShadow!==nt.receiveShadow)&&(ge.receiveShadow=nt.receiveShadow,Pn.setValue(j,"receiveShadow",nt.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Yi.envMap.value=Vt,Yi.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),Xr&&(Pn.setValue(j,"toneMappingExposure",E.toneMappingExposure),ge.needsLights&&ze(Yi,yl),Ct&&it.fog===!0&&_t.refreshFogUniforms(Yi,Ct),_t.refreshMaterialUniforms(Yi,it,$,st,Bt),Cf.upload(j,xn(ge),Yi,re)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Cf.upload(j,xn(ge),Yi,re),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Pn.setValue(j,"center",nt.center),Pn.setValue(j,"modelViewMatrix",nt.modelViewMatrix),Pn.setValue(j,"normalMatrix",nt.normalMatrix),Pn.setValue(j,"modelMatrix",nt.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const ei=it.uniformsGroups;for(let Ja=0,Ou=ei.length;Ja<Ou;Ja++)if(Gt.isWebGL2){const Qa=ei[Ja];qt.update(Qa,Lr),qt.bind(Qa,Lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lr}function ze(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function Wn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(I,Y,et){ee.get(I.texture).__webglTexture=Y,ee.get(I.depthTexture).__webglTexture=et;const it=ee.get(I);it.__hasExternalTextures=!0,it.__hasExternalTextures&&(it.__autoAllocateDepthBuffer=et===void 0,it.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,Y){const et=ee.get(I);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(I,Y=0,et=0){b=I,C=Y,U=et;let it=!0,nt=null,Ct=!1,Ht=!1;if(I){const Vt=ee.get(I);Vt.__useDefaultFramebuffer!==void 0?(Kt.bindFramebuffer(j.FRAMEBUFFER,null),it=!1):Vt.__webglFramebuffer===void 0?re.setupRenderTarget(I):Vt.__hasExternalTextures&&re.rebindTextures(I,ee.get(I.texture).__webglTexture,ee.get(I.depthTexture).__webglTexture);const Zt=I.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ht=!0);const ie=ee.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ie[Y])?nt=ie[Y][et]:nt=ie[Y],Ct=!0):Gt.isWebGL2&&I.samples>0&&re.useMultisampledRTT(I)===!1?nt=ee.get(I).__webglMultisampledFramebuffer:Array.isArray(ie)?nt=ie[et]:nt=ie,L.copy(I.viewport),Z.copy(I.scissor),X=I.scissorTest}else L.copy(N).multiplyScalar($).floor(),Z.copy(V).multiplyScalar($).floor(),X=rt;if(Kt.bindFramebuffer(j.FRAMEBUFFER,nt)&&Gt.drawBuffers&&it&&Kt.drawBuffers(I,nt),Kt.viewport(L),Kt.scissor(Z),Kt.setScissorTest(X),Ct){const Vt=ee.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Vt.__webglTexture,et)}else if(Ht){const Vt=ee.get(I.texture),Zt=Y||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Vt.__webglTexture,et||0,Zt)}k=-1},this.readRenderTargetPixels=function(I,Y,et,it,nt,Ct,Ht){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=ee.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ht!==void 0&&(ne=ne[Ht]),ne){Kt.bindFramebuffer(j.FRAMEBUFFER,ne);try{const Vt=I.texture,Zt=Vt.format,ie=Vt.type;if(Zt!==Ar&&te.convert(Zt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pe=ie===Cu&&(At.has("EXT_color_buffer_half_float")||Gt.isWebGL2&&At.has("EXT_color_buffer_float"));if(ie!==Js&&te.convert(ie)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ie===Ws&&(Gt.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-it&&et>=0&&et<=I.height-nt&&j.readPixels(Y,et,it,nt,te.convert(Zt),te.convert(ie),Ct)}finally{const Vt=b!==null?ee.get(b).__webglFramebuffer:null;Kt.bindFramebuffer(j.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(I,Y,et=0){const it=Math.pow(2,-et),nt=Math.floor(Y.image.width*it),Ct=Math.floor(Y.image.height*it);re.setTexture2D(Y,0),j.copyTexSubImage2D(j.TEXTURE_2D,et,0,0,I.x,I.y,nt,Ct),Kt.unbindTexture()},this.copyTextureToTexture=function(I,Y,et,it=0){const nt=Y.image.width,Ct=Y.image.height,Ht=te.convert(et.format),ne=te.convert(et.type);re.setTexture2D(et,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,et.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,et.unpackAlignment),Y.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,it,I.x,I.y,nt,Ct,Ht,ne,Y.image.data):Y.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,it,I.x,I.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ht,Y.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,it,I.x,I.y,Ht,ne,Y.image),it===0&&et.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Kt.unbindTexture()},this.copyTextureToTexture3D=function(I,Y,et,it,nt=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=I.max.x-I.min.x+1,Ht=I.max.y-I.min.y+1,ne=I.max.z-I.min.z+1,Vt=te.convert(it.format),Zt=te.convert(it.type);let ie;if(it.isData3DTexture)re.setTexture3D(it,0),ie=j.TEXTURE_3D;else if(it.isDataArrayTexture)re.setTexture2DArray(it,0),ie=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,it.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,it.unpackAlignment);const pe=j.getParameter(j.UNPACK_ROW_LENGTH),$e=j.getParameter(j.UNPACK_IMAGE_HEIGHT),fn=j.getParameter(j.UNPACK_SKIP_PIXELS),Be=j.getParameter(j.UNPACK_SKIP_ROWS),Fn=j.getParameter(j.UNPACK_SKIP_IMAGES),Ve=et.isCompressedTexture?et.mipmaps[0]:et.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Ve.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ve.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,I.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,I.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,I.min.z),et.isDataTexture||et.isData3DTexture?j.texSubImage3D(ie,nt,Y.x,Y.y,Y.z,Ct,Ht,ne,Vt,Zt,Ve.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(ie,nt,Y.x,Y.y,Y.z,Ct,Ht,ne,Vt,Ve.data)):j.texSubImage3D(ie,nt,Y.x,Y.y,Y.z,Ct,Ht,ne,Vt,Zt,Ve),j.pixelStorei(j.UNPACK_ROW_LENGTH,pe),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,$e),j.pixelStorei(j.UNPACK_SKIP_PIXELS,fn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Be),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Fn),nt===0&&it.generateMipmaps&&j.generateMipmap(ie),Kt.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?re.setTextureCube(I,0):I.isData3DTexture?re.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?re.setTexture2DArray(I,0):re.setTexture2D(I,0),Kt.unbindTexture()},this.resetState=function(){C=0,U=0,b=null,Kt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Jm?"display-p3":"srgb",e.unpackColorSpace=Ye.workingColorSpace===_h?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Hn?Fa:uM}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fa?Hn:ys}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class yB extends PM{}yB.prototype.isWebGL1Renderer=!0;class SB extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class MB extends Nu{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cM,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class LM extends ti{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new He(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const bp=new An,Vx=new tt,Wx=new tt;class EB{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new An,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new t_,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vx.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vx),Wx.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wx),e.updateMatrixWorld(),bp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class TB extends EB{constructor(){super(new wM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wB extends LM{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new TB}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bB extends LM{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xx{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Km}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Km);const Yx={type:"change"},Ap={type:"start"},qx={type:"end"},uf=new mM,$x=new Fs,AB=Math.cos(70*_U.DEG2RAD);class RB extends $a{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vo.ROTATE,MIDDLE:vo.DOLLY,RIGHT:vo.PAN},this.touches={ONE:xo.ROTATE,TWO:xo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",P),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",P),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yx),n.update(),a=r.NONE},this.update=function(){const B=new tt,St=new Xa().setFromUnitVectors(t.up,new tt(0,1,0)),ht=St.clone().invert(),te=new tt,kt=new Xa,qt=new tt,Ft=2*Math.PI;return function(me=null){const G=n.object.position;B.copy(G).sub(n.target),B.applyQuaternion(St),l.setFromVector3(B),n.autoRotate&&a===r.NONE&&Z(T(me)),n.enableDamping?(l.theta+=c.theta*n.dampingFactor,l.phi+=c.phi*n.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let Et=n.minAzimuthAngle,gt=n.maxAzimuthAngle;isFinite(Et)&&isFinite(gt)&&(Et<-Math.PI?Et+=Ft:Et>Math.PI&&(Et-=Ft),gt<-Math.PI?gt+=Ft:gt>Math.PI&&(gt-=Ft),Et<=gt?l.theta=Math.max(Et,Math.min(gt,l.theta)):l.theta=l.theta>(Et+gt)/2?Math.max(Et,l.theta):Math.min(gt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&U||n.object.isOrthographicCamera?l.radius=ct(l.radius):l.radius=ct(l.radius*f),B.setFromSpherical(l),B.applyQuaternion(ht),G.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let ot=!1;if(n.zoomToCursor&&U){let Tt=null;if(n.object.isPerspectiveCamera){const Yt=B.length();Tt=ct(Yt*f);const Dt=Yt-Tt;n.object.position.addScaledVector(w,Dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Yt=new tt(C.x,C.y,0);Yt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),ot=!0;const Dt=new tt(C.x,C.y,0);Dt.unproject(n.object),n.object.position.sub(Dt).add(Yt),n.object.updateMatrixWorld(),Tt=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Tt).add(n.object.position):(uf.origin.copy(n.object.position),uf.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(uf.direction))<AB?t.lookAt(n.target):($x.setFromNormalAndCoplanarPoint(n.object.up,n.target),uf.intersectPlane($x,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),ot=!0);return f=1,U=!1,ot||te.distanceToSquared(n.object.position)>u||8*(1-kt.dot(n.object.quaternion))>u||qt.distanceToSquared(n.target)>0?(n.dispatchEvent(Yx),te.copy(n.object.position),kt.copy(n.object.quaternion),qt.copy(n.target),ot=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",mt),n.domElement.removeEventListener("pointerdown",ee),n.domElement.removeEventListener("pointercancel",he),n.domElement.removeEventListener("wheel",O),n.domElement.removeEventListener("pointermove",re),n.domElement.removeEventListener("pointerup",he),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",P),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const u=1e-6,l=new Xx,c=new Xx;let f=1;const d=new tt,_=new Me,p=new Me,m=new Me,S=new Me,y=new Me,x=new Me,g=new Me,R=new Me,E=new Me,w=new tt,C=new Me;let U=!1;const b=[],k={};function T(B){return B!==null?2*Math.PI/60*n.autoRotateSpeed*B:2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function Z(B){c.theta-=B}function X(B){c.phi-=B}const ut=function(){const B=new tt;return function(ht,te){B.setFromMatrixColumn(te,0),B.multiplyScalar(-ht),d.add(B)}}(),z=function(){const B=new tt;return function(ht,te){n.screenSpacePanning===!0?B.setFromMatrixColumn(te,1):(B.setFromMatrixColumn(te,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(ht),d.add(B)}}(),K=function(){const B=new tt;return function(ht,te){const kt=n.domElement;if(n.object.isPerspectiveCamera){const qt=n.object.position;B.copy(qt).sub(n.target);let Ft=B.length();Ft*=Math.tan(n.object.fov/2*Math.PI/180),ut(2*ht*Ft/kt.clientHeight,n.object.matrix),z(2*te*Ft/kt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ut(ht*(n.object.right-n.object.left)/n.object.zoom/kt.clientWidth,n.object.matrix),z(te*(n.object.top-n.object.bottom)/n.object.zoom/kt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function st(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function lt(B){if(!n.zoomToCursor)return;U=!0;const St=n.domElement.getBoundingClientRect(),ht=B.clientX-St.left,te=B.clientY-St.top,kt=St.width,qt=St.height;C.x=ht/kt*2-1,C.y=-(te/qt)*2+1,w.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function ct(B){return Math.max(n.minDistance,Math.min(n.maxDistance,B))}function N(B){_.set(B.clientX,B.clientY)}function V(B){lt(B),g.set(B.clientX,B.clientY)}function rt(B){S.set(B.clientX,B.clientY)}function Lt(B){p.set(B.clientX,B.clientY),m.subVectors(p,_).multiplyScalar(n.rotateSpeed);const St=n.domElement;Z(2*Math.PI*m.x/St.clientHeight),X(2*Math.PI*m.y/St.clientHeight),_.copy(p),n.update()}function wt(B){R.set(B.clientX,B.clientY),E.subVectors(R,g),E.y>0?st(L()):E.y<0&&$(L()),g.copy(R),n.update()}function bt(B){y.set(B.clientX,B.clientY),x.subVectors(y,S).multiplyScalar(n.panSpeed),K(x.x,x.y),S.copy(y),n.update()}function Bt(B){lt(B),B.deltaY<0?$(L()):B.deltaY>0&&st(L()),n.update()}function Jt(B){let St=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,n.keyPanSpeed),St=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,-n.keyPanSpeed),St=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(n.keyPanSpeed,0),St=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(-n.keyPanSpeed,0),St=!0;break}St&&(B.preventDefault(),n.update())}function zt(){if(b.length===1)_.set(b[0].pageX,b[0].pageY);else{const B=.5*(b[0].pageX+b[1].pageX),St=.5*(b[0].pageY+b[1].pageY);_.set(B,St)}}function Xt(){if(b.length===1)S.set(b[0].pageX,b[0].pageY);else{const B=.5*(b[0].pageX+b[1].pageX),St=.5*(b[0].pageY+b[1].pageY);S.set(B,St)}}function De(){const B=b[0].pageX-b[1].pageX,St=b[0].pageY-b[1].pageY,ht=Math.sqrt(B*B+St*St);g.set(0,ht)}function Qt(){n.enableZoom&&De(),n.enablePan&&Xt()}function j(){n.enableZoom&&De(),n.enableRotate&&zt()}function oe(B){if(b.length==1)p.set(B.pageX,B.pageY);else{const ht=Rt(B),te=.5*(B.pageX+ht.x),kt=.5*(B.pageY+ht.y);p.set(te,kt)}m.subVectors(p,_).multiplyScalar(n.rotateSpeed);const St=n.domElement;Z(2*Math.PI*m.x/St.clientHeight),X(2*Math.PI*m.y/St.clientHeight),_.copy(p)}function At(B){if(b.length===1)y.set(B.pageX,B.pageY);else{const St=Rt(B),ht=.5*(B.pageX+St.x),te=.5*(B.pageY+St.y);y.set(ht,te)}x.subVectors(y,S).multiplyScalar(n.panSpeed),K(x.x,x.y),S.copy(y)}function Gt(B){const St=Rt(B),ht=B.pageX-St.x,te=B.pageY-St.y,kt=Math.sqrt(ht*ht+te*te);R.set(0,kt),E.set(0,Math.pow(R.y/g.y,n.zoomSpeed)),st(E.y),g.copy(R)}function Kt(B){n.enableZoom&&Gt(B),n.enablePan&&At(B)}function Q(B){n.enableZoom&&Gt(B),n.enableRotate&&oe(B)}function ee(B){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",re),n.domElement.addEventListener("pointerup",he)),vt(B),B.pointerType==="touch"?J(B):ae(B))}function re(B){n.enabled!==!1&&(B.pointerType==="touch"?_t(B):Fe(B))}function he(B){Ot(B),b.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",re),n.domElement.removeEventListener("pointerup",he)),n.dispatchEvent(qx),a=r.NONE}function ae(B){let St;switch(B.button){case 0:St=n.mouseButtons.LEFT;break;case 1:St=n.mouseButtons.MIDDLE;break;case 2:St=n.mouseButtons.RIGHT;break;default:St=-1}switch(St){case vo.DOLLY:if(n.enableZoom===!1)return;V(B),a=r.DOLLY;break;case vo.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;rt(B),a=r.PAN}else{if(n.enableRotate===!1)return;N(B),a=r.ROTATE}break;case vo.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;N(B),a=r.ROTATE}else{if(n.enablePan===!1)return;rt(B),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ap)}function Fe(B){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Lt(B);break;case r.DOLLY:if(n.enableZoom===!1)return;wt(B);break;case r.PAN:if(n.enablePan===!1)return;bt(B);break}}function O(B){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(B.preventDefault(),n.dispatchEvent(Ap),Bt(B),n.dispatchEvent(qx))}function P(B){n.enabled===!1||n.enablePan===!1||Jt(B)}function J(B){switch(Mt(B),b.length){case 1:switch(n.touches.ONE){case xo.ROTATE:if(n.enableRotate===!1)return;zt(),a=r.TOUCH_ROTATE;break;case xo.PAN:if(n.enablePan===!1)return;Xt(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case xo.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qt(),a=r.TOUCH_DOLLY_PAN;break;case xo.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;j(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ap)}function _t(B){switch(Mt(B),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(B),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;At(B),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Kt(B),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(B),n.update();break;default:a=r.NONE}}function mt(B){n.enabled!==!1&&B.preventDefault()}function vt(B){b.push(B)}function Ot(B){delete k[B.pointerId];for(let St=0;St<b.length;St++)if(b[St].pointerId==B.pointerId){b.splice(St,1);return}}function Mt(B){let St=k[B.pointerId];St===void 0&&(St=new Me,k[B.pointerId]=St),St.set(B.pageX,B.pageY)}function Rt(B){const St=B.pointerId===b[0].pointerId?b[1]:b[0];return k[St.pointerId]}n.domElement.addEventListener("contextmenu",mt),n.domElement.addEventListener("pointerdown",ee),n.domElement.addEventListener("pointercancel",he),n.domElement.addEventListener("wheel",O,{passive:!1}),this.update()}}function CB(i){let t,e;return{c(){t=Xs("div"),e=Xs("canvas"),gn(e,"class","webgl"),gn(e,"id",i[0]),gn(t,"class","section")},m(n,r){rr(n,t,r),Oo(t,e)},p(n,[r]){r&1&&gn(e,"id",n[0])},i:Rr,o:Rr,d(n){n&&Fi(t)}}}function PB(i,t,e){let{id:n="id"}=t,r,a,u,l,c,f,d,_,p,m;return Qx(()=>{r=document.getElementById(`${n}`);const S=document.querySelector(".webgl"),y=S.getBoundingClientRect().width,x=S.getBoundingClientRect().height;a=new SB,u=new _l(1,1,1,10,10,10),l=new MB({color:"mediumpurple"}),c=new ms(u,l),a.add(c),f=new wB(16777215,1.9),f.position.set(.6,.2,0),a.add(f),d=new bB(4210752,2.5),a.add(d),_=new lr(75,y/x,.1,100),_.position.set(1,.3,1.5),a.add(_),p=new RB(_,r),p.enableDamping=!0,m=new PM({canvas:r,antialias:!0}),m.setSize(y,x),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const g=()=>{p.update(),m.render(a,_),window.requestAnimationFrame(g)};g()}),i.$$set=S=>{"id"in S&&e(0,n=S.id)},[n]}class LB extends oh{constructor(t){super(),ah(this,t,PB,CB,sh,{id:0})}}function DB(i){let t,e,n,r,a,u,l,c,f,d,_,p;return n=new S2({}),l=new eI({}),_=new LB({}),{c(){t=Xs("h2"),t.textContent="D3 chart",e=Fo(),Pd(n.$$.fragment),r=Fo(),a=Xs("h2"),a.textContent="GSAP scrolly",u=Fo(),Pd(l.$$.fragment),c=Fo(),f=Xs("h2"),f.textContent="Three.js 3D scene",d=Fo(),Pd(_.$$.fragment)},m(m,S){rr(m,t,S),rr(m,e,S),df(n,m,S),rr(m,r,S),rr(m,a,S),rr(m,u,S),df(l,m,S),rr(m,c,S),rr(m,f,S),rr(m,d,S),df(_,m,S),p=!0},p:Rr,i(m){p||(hf(n.$$.fragment,m),hf(l.$$.fragment,m),hf(_.$$.fragment,m),p=!0)},o(m){Cd(n.$$.fragment,m),Cd(l.$$.fragment,m),Cd(_.$$.fragment,m),p=!1},d(m){m&&(Fi(t),Fi(e),Fi(r),Fi(a),Fi(u),Fi(c),Fi(f),Fi(d)),pf(n,m),pf(l,m),pf(_,m)}}}class IB extends oh{constructor(t){super(),ah(this,t,null,DB,sh,{})}}new IB({target:document.getElementById("app")});
