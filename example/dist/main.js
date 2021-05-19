(()=>{var t={553:t=>{!function(){"use strict";var e={class:"className",contenteditable:"contentEditable",for:"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function i(t,e){try{return t(e)}catch(t){return e}}var n=document,s=window,r=n.documentElement,o=n.createElement.bind(n),a=o("div"),l=o("table"),h=o("tbody"),c=o("tr"),u=Array.isArray,d=Array.prototype,f=d.concat,p=d.filter,v=d.indexOf,g=d.map,m=d.push,w=d.slice,y=d.some,b=d.splice,S=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,C=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,x=/<.+>/,T=/^\w+$/;function A(t,e){return t&&(z(e)||D(e))?C.test(t)?e.getElementsByClassName(t.slice(1)):T.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t):[]}var E=function(){function t(t,e){if(t){if(L(t))return t;var i=t;if(H(t)){var r=(L(e)?e[0]:e)||n;if(!(i=S.test(t)?r.getElementById(t.slice(1)):x.test(t)?_t(t):A(t,r)))return}else if(B(t))return this.ready(t);(i.nodeType||i===s)&&(i=[i]),this.length=i.length;for(var o=0,a=this.length;o<a;o++)this[o]=i[o]}}return t.prototype.init=function(e,i){return new t(e,i)},t}(),P=E.prototype,k=P.init;k.fn=k.prototype=P,P.length=0,P.splice=b,"function"==typeof Symbol&&(P[Symbol.iterator]=d[Symbol.iterator]),P.map=function(t){return k(f.apply([],g.call(this,(function(e,i){return t.call(e,i,e)}))))},P.slice=function(t,e){return k(w.call(this,t,e))};var I=/-([a-z])/g;function _(t){return t.replace(I,(function(t,e){return e.toUpperCase()}))}function O(t,e){var i=t&&(t.matches||t.webkitMatchesSelector||t.msMatchesSelector);return!!i&&!!e&&i.call(t,e)}function L(t){return t instanceof E}function N(t){return!!t&&t===t.window}function z(t){return!!t&&9===t.nodeType}function D(t){return!!t&&1===t.nodeType}function M(t){return"boolean"==typeof t}function B(t){return"function"==typeof t}function H(t){return"string"==typeof t}function j(t){return void 0===t}function R(t){return null===t}function V(t){return!isNaN(parseFloat(t))&&isFinite(t)}function W(t){if("object"!=typeof t||null===t)return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function Y(t,e,i){if(i){for(var n=t.length;n--;)if(!1===e.call(t[n],n,t[n]))return t}else if(W(t))for(var s=Object.keys(t),r=(n=0,s.length);n<r;n++){var o=s[n];if(!1===e.call(t[o],o,t[o]))return t}else for(n=0,r=t.length;n<r;n++)if(!1===e.call(t[n],n,t[n]))return t;return t}function $(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=!!M(t[0])&&t.shift(),n=t.shift(),s=t.length;if(!n)return{};if(!s)return $(i,k,n);for(var r=0;r<s;r++){var o=t[r];for(var a in o)i&&(u(o[a])||W(o[a]))?(n[a]&&n[a].constructor===o[a].constructor||(n[a]=new o[a].constructor),$(i,n[a],o[a])):n[a]=o[a]}return n}function F(t){return H(t)?function(e,i){return O(i,t)}:B(t)?t:L(t)?function(e,i){return t.is(i)}:t?function(e,i){return i===t}:function(){return!1}}function U(t,e){return e?t.filter(e):t}k.guid=1,k.isWindow=N,k.isFunction=B,k.isArray=u,k.isNumeric=V,k.isPlainObject=W,P.get=function(t){return j(t)?w.call(this):this[(t=Number(t))<0?t+this.length:t]},P.eq=function(t){return k(this.get(t))},P.first=function(){return this.eq(0)},P.last=function(){return this.eq(-1)},k.each=Y,P.each=function(t){return Y(this,t)},P.prop=function(t,i){if(t){if(H(t))return t=e[t]||t,arguments.length<2?this[0]&&this[0][t]:this.each((function(e,n){n[t]=i}));for(var n in t)this.prop(n,t[n]);return this}},P.removeProp=function(t){return this.each((function(i,n){delete n[e[t]||t]}))},k.extend=$,P.extend=function(t){return $(P,t)},P.filter=function(t){var e=F(t);return k(p.call(this,(function(t,i){return e.call(t,i,t)})))};var X=/\S+/g;function q(t){return H(t)&&t.match(X)||[]}function K(t,e,i,n){for(var s=[],r=B(e),o=n&&F(n),a=0,l=t.length;a<l;a++)if(r){var h=e(t[a]);h.length&&m.apply(s,h)}else for(var c=t[a][e];!(null==c||n&&o(-1,c));)s.push(c),c=i?c[e]:null;return s}function J(t){return t.length>1?p.call(t,(function(t,e,i){return v.call(i,t)===e})):t}function G(t,e,i){if(D(t)){var n=s.getComputedStyle(t,null);return i?n.getPropertyValue(e)||void 0:n[e]||t.style[e]}}function Q(t,e){return parseInt(G(t,e),10)||0}P.hasClass=function(t){return!!t&&y.call(this,(function(e){return D(e)&&e.classList.contains(t)}))},P.removeAttr=function(t){var e=q(t);return this.each((function(t,i){D(i)&&Y(e,(function(t,e){i.removeAttribute(e)}))}))},P.attr=function(t,e){if(t){if(H(t)){if(arguments.length<2){if(!this[0]||!D(this[0]))return;var i=this[0].getAttribute(t);return R(i)?void 0:i}return j(e)?this:R(e)?this.removeAttr(t):this.each((function(i,n){D(n)&&n.setAttribute(t,e)}))}for(var n in t)this.attr(n,t[n]);return this}},P.toggleClass=function(t,e){var i=q(t),n=!j(e);return this.each((function(t,s){D(s)&&Y(i,(function(t,i){n?e?s.classList.add(i):s.classList.remove(i):s.classList.toggle(i)}))}))},P.addClass=function(t){return this.toggleClass(t,!0)},P.removeClass=function(t){return arguments.length?this.toggleClass(t,!1):this.attr("class","")},k.unique=J,P.add=function(t,e){return k(J(this.get().concat(k(t,e).get())))};var Z=/^--/;function tt(t){return Z.test(t)}var et={},it=a.style,nt=["webkit","moz","ms"];function st(t,e){if(void 0===e&&(e=tt(t)),e)return t;if(!et[t]){var i=_(t),n=""+i[0].toUpperCase()+i.slice(1);Y((i+" "+nt.join(n+" ")+n).split(" "),(function(e,i){if(i in it)return et[t]=i,!1}))}return et[t]}var rt={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function ot(t,e,i){return void 0===i&&(i=tt(t)),i||rt[t]||!V(e)?e:e+"px"}P.css=function(t,e){if(H(t)){var i=tt(t);return t=st(t,i),arguments.length<2?this[0]&&G(this[0],t,i):t?(e=ot(t,e,i),this.each((function(n,s){D(s)&&(i?s.style.setProperty(t,e):s.style[t]=e)}))):this}for(var n in t)this.css(n,t[n]);return this};var at=/^\s+|\s+$/;function lt(t,e){var n=t.dataset[e]||t.dataset[_(e)];return at.test(n)?n:i(JSON.parse,n)}function ht(t,e,n){n=i(JSON.stringify,n),t.dataset[_(e)]=n}function ct(t,e){var i=t.documentElement;return Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])}function ut(t,e){return Q(t,"border"+(e?"Left":"Top")+"Width")+Q(t,"padding"+(e?"Left":"Top"))+Q(t,"padding"+(e?"Right":"Bottom"))+Q(t,"border"+(e?"Right":"Bottom")+"Width")}P.data=function(t,e){if(!t){if(!this[0])return;var i={};for(var n in this[0].dataset)i[n]=lt(this[0],n);return i}if(H(t))return arguments.length<2?this[0]&&lt(this[0],t):j(e)?this:this.each((function(i,n){ht(n,t,e)}));for(var n in t)this.data(n,t[n]);return this},Y([!0,!1],(function(t,e){Y(["Width","Height"],(function(t,i){P[(e?"outer":"inner")+i]=function(n){if(this[0])return N(this[0])?e?this[0]["inner"+i]:this[0].document.documentElement["client"+i]:z(this[0])?ct(this[0],i):this[0][(e?"offset":"client")+i]+(n&&e?Q(this[0],"margin"+(t?"Top":"Left"))+Q(this[0],"margin"+(t?"Bottom":"Right")):0)}}))})),Y(["Width","Height"],(function(t,e){var i=e.toLowerCase();P[i]=function(n){if(!this[0])return j(n)?void 0:this;if(!arguments.length)return N(this[0])?this[0].document.documentElement["client"+e]:z(this[0])?ct(this[0],e):this[0].getBoundingClientRect()[i]-ut(this[0],!t);var s=parseInt(n,10);return this.each((function(e,n){if(D(n)){var r=G(n,"boxSizing");n.style[i]=ot(i,s+("border-box"===r?ut(n,!t):0))}}))}}));var dt={};function ft(t){return"none"===G(t,"display")}function pt(t,e){return!e||!y.call(e,(function(e){return t.indexOf(e)<0}))}P.toggle=function(t){return this.each((function(e,i){D(i)&&((j(t)?ft(i):t)?(i.style.display=i.___cd||"",ft(i)&&(i.style.display=function(t){if(dt[t])return dt[t];var e=o(t);n.body.insertBefore(e,null);var i=G(e,"display");return n.body.removeChild(e),dt[t]="none"!==i?i:"block"}(i.tagName))):(i.___cd=G(i,"display"),i.style.display="none"))}))},P.hide=function(){return this.toggle(!1)},P.show=function(){return this.toggle(!0)};var vt={focus:"focusin",blur:"focusout"},gt={mouseenter:"mouseover",mouseleave:"mouseout"},mt=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function wt(t){return gt[t]||vt[t]||t}function yt(t){return t.___ce=t.___ce||{}}function bt(t){var e=t.split(".");return[e[0],e.slice(1).sort()]}function St(t,e,i,n,s){var r=yt(t);if(e)r[e]&&(r[e]=r[e].filter((function(r){var o=r[0],a=r[1],l=r[2];if(s&&l.guid!==s.guid||!pt(o,i)||n&&n!==a)return!0;t.removeEventListener(e,l)})));else for(e in r)St(t,e,i,n,s)}function Ct(t){return t.multiple&&t.options?K(p.call(t.options,(function(t){return t.selected&&!t.disabled&&!t.parentNode.disabled})),"value"):t.value||""}P.off=function(t,e,i){var n=this;if(j(t))this.each((function(t,e){(D(e)||z(e)||N(e))&&St(e)}));else if(H(t))B(e)&&(i=e,e=""),Y(q(t),(function(t,s){var r=bt(s),o=r[0],a=r[1],l=wt(o);n.each((function(t,n){(D(n)||z(n)||N(n))&&St(n,l,a,e,i)}))}));else for(var s in t)this.off(s,t[s]);return this},P.on=function(t,e,i,n,s){var r=this;if(!H(t)){for(var o in t)this.on(o,e,i,t[o],s);return this}return H(e)||(j(e)||R(e)?e="":j(i)?(i=e,e=""):(n=i,i=e,e="")),B(n)||(n=i,i=void 0),n?(Y(q(t),(function(t,o){var a=bt(o),l=a[0],h=a[1],c=wt(l),u=l in gt,d=l in vt;c&&r.each((function(t,r){if(D(r)||z(r)||N(r)){var o=function t(o){if(o.target["___i"+o.type])return o.stopImmediatePropagation();if((!o.namespace||pt(h,o.namespace.split(".")))&&(e||!(d&&(o.target!==r||o.___ot===c)||u&&o.relatedTarget&&r.contains(o.relatedTarget)))){var a=r;if(e){for(var l=o.target;!O(l,e);){if(l===r)return;if(!(l=l.parentNode))return}a=l,o.___cd=!0}o.___cd&&Object.defineProperty(o,"currentTarget",{configurable:!0,get:function(){return a}}),Object.defineProperty(o,"data",{configurable:!0,get:function(){return i}});var f=n.call(a,o,o.___td);s&&St(r,c,h,e,t),!1===f&&(o.preventDefault(),o.stopPropagation())}};o.guid=n.guid=n.guid||k.guid++,function(t,e,i,n,s){var r=yt(t);r[e]=r[e]||[],r[e].push([i,n,s]),t.addEventListener(e,s)}(r,c,h,e,o)}}))})),this):this},P.one=function(t,e,i,n){return this.on(t,e,i,n,!0)},P.ready=function(t){var e=function(){return setTimeout(t,0,k)};return"loading"!==n.readyState?e():n.addEventListener("DOMContentLoaded",e),this},P.trigger=function(t,e){if(H(t)){var i=bt(t),s=i[0],r=i[1],o=wt(s);if(!o)return this;var a=mt.test(o)?"MouseEvents":"HTMLEvents";(t=n.createEvent(a)).initEvent(o,!0,!0),t.namespace=r.join("."),t.___ot=s}t.___td=e;var l=t.___ot in vt;return this.each((function(e,i){l&&B(i[t.___ot])&&(i["___i"+t.type]=!0,i[t.___ot](),i["___i"+t.type]=!1),i.dispatchEvent(t)}))};var xt=/%20/g,Tt=/\r?\n/g,At=/file|reset|submit|button|image/i,Et=/radio|checkbox/i;P.serialize=function(){var t="";return this.each((function(e,i){Y(i.elements||[i],(function(e,i){if(!(i.disabled||!i.name||"FIELDSET"===i.tagName||At.test(i.type)||Et.test(i.type)&&!i.checked)){var n=Ct(i);j(n)||Y(u(n)?n:[n],(function(e,n){t+=function(t,e){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(e.replace(Tt,"\r\n")).replace(xt,"+")}(i.name,n)}))}}))})),t.slice(1)},P.val=function(t){return arguments.length?this.each((function(e,i){var n=i.multiple&&i.options;if(n||Et.test(i.type)){var s=u(t)?g.call(t,String):R(t)?[]:[String(t)];n?Y(i.options,(function(t,e){e.selected=s.indexOf(e.value)>=0}),!0):i.checked=s.indexOf(i.value)>=0}else i.value=j(t)||R(t)?"":t})):this[0]&&Ct(this[0])},P.clone=function(){return this.map((function(t,e){return e.cloneNode(!0)}))},P.detach=function(t){return U(this,t).each((function(t,e){e.parentNode&&e.parentNode.removeChild(e)})),this};var Pt=/^\s*<(\w+)[^>]*>/,kt=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,It={"*":a,tr:h,td:c,th:c,thead:l,tbody:l,tfoot:l};function _t(t){if(!H(t))return[];if(kt.test(t))return[o(RegExp.$1)];var e=Pt.test(t)&&RegExp.$1,i=It[e]||It["*"];return i.innerHTML=t,k(i.childNodes).detach().get()}k.parseHTML=_t,P.empty=function(){return this.each((function(t,e){for(;e.firstChild;)e.removeChild(e.firstChild)}))},P.html=function(t){return arguments.length?j(t)?this:this.each((function(e,i){D(i)&&(i.innerHTML=t)})):this[0]&&this[0].innerHTML},P.remove=function(t){return U(this,t).detach().off(),this},P.text=function(t){return j(t)?this[0]?this[0].textContent:"":this.each((function(e,i){D(i)&&(i.textContent=t)}))},P.unwrap=function(){return this.parent().each((function(t,e){if("BODY"!==e.tagName){var i=k(e);i.replaceWith(i.children())}})),this},P.offset=function(){var t=this[0];if(t){var e=t.getBoundingClientRect();return{top:e.top+s.pageYOffset,left:e.left+s.pageXOffset}}},P.offsetParent=function(){return this.map((function(t,e){for(var i=e.offsetParent;i&&"static"===G(i,"position");)i=i.offsetParent;return i||r}))},P.position=function(){var t=this[0];if(t){var e="fixed"===G(t,"position"),i=e?t.getBoundingClientRect():this.offset();if(!e){for(var n=t.ownerDocument,s=t.offsetParent||n.documentElement;(s===n.body||s===n.documentElement)&&"static"===G(s,"position");)s=s.parentNode;if(s!==t&&D(s)){var r=k(s).offset();i.top-=r.top+Q(s,"borderTopWidth"),i.left-=r.left+Q(s,"borderLeftWidth")}}return{top:i.top-Q(t,"marginTop"),left:i.left-Q(t,"marginLeft")}}},P.children=function(t){return U(k(J(K(this,(function(t){return t.children})))),t)},P.contents=function(){return k(J(K(this,(function(t){return"IFRAME"===t.tagName?[t.contentDocument]:"TEMPLATE"===t.tagName?t.content.childNodes:t.childNodes}))))},P.find=function(t){return k(J(K(this,(function(e){return A(t,e)}))))};var Ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Lt=/^$|^module$|\/(java|ecma)script/i,Nt=["type","src","nonce","noModule"];function zt(t,e,i,n,s,a,l,h){return Y(t,(function(t,a){Y(k(a),(function(t,a){Y(k(e),(function(e,l){var h=i?l:a,c=i?t:e;!function(t,e,i,n,s){n?t.insertBefore(e,i?t.firstChild:null):t.parentNode.insertBefore(e,i?t:t.nextSibling),s&&function(t,e){var i=k(t);i.filter("script").add(i.find("script")).each((function(t,i){if(Lt.test(i.type)&&r.contains(i)){var n=o("script");n.text=i.textContent.replace(Ot,""),Y(Nt,(function(t,e){i[e]&&(n[e]=i[e])})),e.head.insertBefore(n,null),e.head.removeChild(n)}}))}(e,t.ownerDocument)}(i?a:l,c?h.cloneNode(!0):h,n,s,!c)}),h)}),l)}),a),e}P.after=function(){return zt(arguments,this,!1,!1,!1,!0,!0)},P.append=function(){return zt(arguments,this,!1,!1,!0)},P.appendTo=function(t){return zt(arguments,this,!0,!1,!0)},P.before=function(){return zt(arguments,this,!1,!0)},P.insertAfter=function(t){return zt(arguments,this,!0,!1,!1,!1,!1,!0)},P.insertBefore=function(t){return zt(arguments,this,!0,!0)},P.prepend=function(){return zt(arguments,this,!1,!0,!0,!0,!0)},P.prependTo=function(t){return zt(arguments,this,!0,!0,!0,!1,!1,!0)},P.replaceWith=function(t){return this.before(t).remove()},P.replaceAll=function(t){return k(t).replaceWith(this),this},P.wrapAll=function(t){for(var e=k(t),i=e[0];i.children.length;)i=i.firstElementChild;return this.first().before(e),this.appendTo(i)},P.wrap=function(t){return this.each((function(e,i){var n=k(t)[0];k(i).wrapAll(e?n.cloneNode(!0):n)}))},P.wrapInner=function(t){return this.each((function(e,i){var n=k(i),s=n.contents();s.length?s.wrapAll(t):n.append(t)}))},P.has=function(t){var e=H(t)?function(e,i){return A(t,i).length}:function(e,i){return i.contains(t)};return this.filter(e)},P.is=function(t){var e=F(t);return y.call(this,(function(t,i){return e.call(t,i,t)}))},P.next=function(t,e,i){return U(k(J(K(this,"nextElementSibling",e,i))),t)},P.nextAll=function(t){return this.next(t,!0)},P.nextUntil=function(t,e){return this.next(e,!0,t)},P.not=function(t){var e=F(t);return this.filter((function(i,n){return(!H(t)||D(n))&&!e.call(n,i,n)}))},P.parent=function(t){return U(k(J(K(this,"parentNode"))),t)},P.index=function(t){var e=t?k(t)[0]:this[0],i=t?this:k(e).parent().children();return v.call(i,e)},P.closest=function(t){var e=this.filter(t);if(e.length)return e;var i=this.parent();return i.length?i.closest(t):e},P.parents=function(t,e){return U(k(J(K(this,"parentElement",!0,e))),t)},P.parentsUntil=function(t,e){return this.parents(e,t)},P.prev=function(t,e,i){return U(k(J(K(this,"previousElementSibling",e,i))),t)},P.prevAll=function(t){return this.prev(t,!0)},P.prevUntil=function(t,e){return this.prev(e,!0,t)},P.siblings=function(t){return U(k(J(K(this,(function(t){return k(t).parent().children().not(t)})))),t)},t.exports=k}()},719:(t,e,i)=>{const n=i(553),s=function(){class t{constructor(t){this.element=n(t),this.hasHoveredClass=!1,this.isTouched=!1,this.element.on({mouseenter:this.activate.bind(this),mouseleave:this.deactivate.bind(this)}),this.element[0].addEventListener("touchend",(()=>{clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.isTouched=!1}),100)})),this.element[0].addEventListener("touchstart",(()=>{this.isTouched=!0,clearTimeout(this.timeout),this.deactivate()}),{passive:!0})}activate(){this.hasHoveredClass||this.isTouched||(this.element.addClass("hovered"),this.hasHoveredClass=!0)}deactivate(){this.hasHoveredClass&&(this.element.removeClass("hovered"),this.hasHoveredClass=!1)}}return function(e){return new t(e)}}();t.exports=s}},e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=i(553),e=i.n(t);const n=function(t,e){let i,n=0;return s=>{const r=(new Date).getTime();r-n>=t?(n=r,e(s)):(clearTimeout(i),i=setTimeout((t=>e.bind(this,t))(s),t))}},s=e()(window),r=e()("body");let o=!1;const a={h:0,w:0,s:0,sizeCheck:()=>{a.h=s.height(),a.w=s.width(),document.documentElement.style.setProperty("--vh",window.innerHeight/100+"px"),window.dispatchEvent(new CustomEvent("layoutChange")),a.scrollCheck(),window.dispatchEvent(new CustomEvent("afterLayoutChange"))},scrollCheck:()=>{a.s=window.scrollY,a.s>10?o||(r.addClass("scrolled"),o=!0):o&&(r.removeClass("scrolled"),o=!1)}};s.on({resize:n(100,a.sizeCheck),load:a.sizeCheck,scroll:a.scrollCheck}),document.addEventListener("ready",a.sizeCheck);const l=a,h=function(){class t{constructor(t,i){this.el=e()(t),this.offset=0,this.height=0,this.addClasses=i.addClasses,this.isAboveScreen=!1,this.isCrossingScreenTop=!1,this.isCrossingScreenBottom=!1,this.isBelowScreen=!1,this.isOnScreen=!1,this.options=i,this.onStateChange=this.options.onStateChange,this.onScroll=this.options.onScroll}_onResize(){this.offset=this.el.offset().top,this.height=this.el.outerHeight(),this._onScroll()}_onScroll(){this.checkScreenRelation(),void 0!==this.onScroll&&this.onScroll.call(this,this)}checkScreenRelation(){return this.offset+this.height<l.s?(this.setPropClass("AboveScreen",!0),this.setPropClass("CrossingScreenTop",!1),this.setPropClass("CrossingScreenBottom",!1),this.setPropClass("BelowScreen",!1),void this.setPropClass("OnScreen",!1)):this.offset>l.s+l.h?(this.setPropClass("AboveScreen",!1),this.setPropClass("CrossingScreenTop",!1),this.setPropClass("CrossingScreenBottom",!1),this.setPropClass("BelowScreen",!0),void this.setPropClass("OnScreen",!1)):(this.setPropClass("AboveScreen",!1),this.setPropClass("BelowScreen",!1),this.setPropClass("OnScreen",!0),this.setPropClass("CrossingScreenTop",this.offset<l.s&&this.offset+this.height>l.s),void this.setPropClass("CrossingScreenBottom",this.offset<l.s+l.h&&this.offset+this.height>l.s+l.h))}setPropClass(t,e){this["is"+t]!==e&&(this["is"+t]=e,this.addClasses&&(e?this.el.addClass(t):this.el.removeClass(t)),void 0!==this.onStateChange&&this.onStateChange.call(this,t,e,this))}screenPos(t){return void 0===t&&(t=0),(this.offset+this.height*t-l.s)/l.h}}const i=[];return window.addEventListener("afterLayoutChange",(function(){i.map((function(t){t._onResize()}))})),window.addEventListener("scroll",n(100,(function(){i.map((function(t){t._onScroll()}))}))),function(e,n){void 0===n&&(n={});const s=new t(e,n);return i.push(s),s}}();var c=i(719),u=i.n(c);function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(i,n){var s=this;d(this,t),this.element=e()(i),1===this.element.length&&(this.content=e()('<div class="single-slide-content">').append(this.element.children()).appendTo(this.element),this.slider=n,this.weight=this.element.data("weight"),void 0===this.weight&&(this.weight=1),this.id=this.slider.slides.length,this.realId=this.id,this.directionToActive=void 0,this.size=0,this.offset=0,this.slider.options.slidesAsLinks&&this.element.on("click",(function(){0!==s.directionToActive&&(s.slider.isSliding||s.goTo())})))}var i,n;return i=t,(n=[{key:"createBullet",value:function(){this.slider.bulletContainer&&(this.slider.options.loop&&(this.id>=2*this.slider.slides.length/3?this.realId-=this.slider.slides.length/3*2:this.id>=this.slider.slides.length/3&&(this.realId-=this.slider.slides.length/3)),!this.slider.options.loop||this.id>=this.slider.slides.length/3&&this.id<2*this.slider.slides.length/3?this.bullet=new v(this.slider,this):this.bulletLink={isLink:!0,target:this.slider.slides[this.realId+this.slider.slides.length/3]})}},{key:"checkSize",value:function(t){return this.slider.isVertical?(this.offset=this.element.offset().top-t,this.size=this.element.outerHeight(!0)):(this.offset=this.element.offset().left-t,this.size=this.element.outerWidth(!0)),this.size}},{key:"goTo",value:function(){this.slider.currentSlideId=this.id,this.slider.applyPosition()}},{key:"activate",value:function(){0!==this.directionToActive&&(void 0!==this.bullet?this.bullet.element.addClass("active"):void 0!==this.bulletLink&&this.bulletLink.target.bullet.element.addClass("active"),this.element.addClass("active").removeClass("slide-prev slide-next"),this.directionToActive=0,void 0!==this.slider.options.onActivate&&this.slider.options.onActivate.call(this,this,this.slider))}},{key:"deactivate",value:function(){0!==this.directionToActive&&void 0!==this.directionToActive||(this.bullet&&this.bullet.element.removeClass("active"),this.element.removeClass("active"),void 0!==this.slider.options.onDeactivate&&this.slider.options.onDeactivate.call(this,this,this.slider))}},{key:"markAsPrev",value:function(){this.deactivate(),(this.directionToActive>=0||void 0===this.directionToActive)&&(this.element.removeClass("slide-next").addClass("slide-prev"),this.directionToActive=-1)}},{key:"markAsNext",value:function(){this.deactivate(),(this.directionToActive<=0||void 0===this.directionToActive)&&(this.element.removeClass("slide-prev").addClass("slide-next"),this.directionToActive=1)}}])&&f(i.prototype,n),t}(),v=function t(i,n,s){var r=this;d(this,t),this.slider=i,this.slide=n,void 0===this.slider.options.bulletSelector?this.element=e()(document.createElement("div")).addClass("slider-bullet").appendTo(this.slider.bulletContainer):this.element=this.slider.bulletContainer.find(this.slider.options.bulletSelector).eq(this.slide.realId),this.element.on("click",(function(){return r.slide.goTo(r.slide)})),u()(this.element)};const g=p,m=function(){var t=this;this.sizer=e()('<div class="slider-sizer">').css({position:"relative",height:"100%"}).appendTo(this.wrap),this.bar=e()('<div class="slider-bar">').appendTo(this.sizer),this.slides=[],this.options.shouldHaveBullets&&(void 0===this.options.bulletContainer&&void 0===this.options.bulletSelector?this.bulletContainer=e()(document.createElement("div")).addClass("slider-bullet-container").appendTo(this.wrap).on("touchstart",(function(e){t.isEnabled&&e.stopPropagation()})):this.bulletContainer=e()(this.options.bulletContainer));var i=this.wrap.find(this.options.slideSelector);this.options.loop&&(i.clone().map((function(e,i){var n=new g(i,t);n.element.appendTo(t.bar),t.slides.push(n)})),i.clone().map((function(e,i){var n=new g(i,t);n.element.appendTo(t.bar),t.slides.push(n)}))),i.map((function(e,i){var n=new g(i,t);n.element.appendTo(t.bar),t.slides.push(n)})),this.slides.forEach((function(t){return t.createBullet()})),this.wrap.css({position:"relative",overflow:"hidden"}),this.bar.css({position:"absolute",height:"100%",width:"100%",left:0});var n=this.slides.reduce((function(t,e){return t+e.weight}),0);this.options.isVertical?(this.bar.css({height:100*n+"%",display:"flex",flexDirection:"column",alignItems:"flex-start"}),this.slides.map((function(t){return t.element.css({height:100*t.weight/n+"%"})}))):(this.bar.css({width:100*n+"%",display:"flex",alignItems:"flex-start"}),this.slides.map((function(t){return t.element.css({width:100*t.weight/n+"%"})})))};function w(){var t=this;this.options.slideOnWheel&&this.wrap.on("wheel",(function(e){t.isEnabled&&(e.stopPropagation(),e.preventDefault(),t.isSliding||(e.deltaY>0?t.slides[t.currentSlideId].size<=t.size-t.slideOffset+1?t.nextSlide():(t.slideOffset=Math.max(t.slideOffset-150,-t.slides[t.currentSlideId].size+t.size),t.applyPosition()):e.deltaY<0&&(0<=t.slideOffset+1?t.prevSlide():(t.slideOffset=Math.min(t.slideOffset+150,0),t.applyPosition()))))}))}function y(){var t=this;this.isArrowPrevActive=!0,this.isArrowNextActive=!0,this.arrowPrev=e()(this.options.arrowPrev),this.arrowNext=e()(this.options.arrowNext),void 0===this.options.arrowNext&&(this.arrowNext=this.wrap.find(".arrow-next")),void 0===this.options.arrowPrev&&(this.arrowPrev=this.wrap.find(".arrow-prev")),this.arrowNext.length>0&&(this.arrowNext.on({click:function(e){return t.nextSlide(e)},touchstart:function(t){return t.stopPropagation()}}),u()(this.arrowNext)),this.arrowPrev.length>0&&(this.arrowPrev.on({click:function(e){return t.prevSlide(e)},touchstart:function(t){return t.stopPropagation()}}),u()(this.arrowPrev)),e()(window).on("keydown",(function(e){t.options.useKeys&&t.isClosest&&(!t.options.isVertical&&39===e.which||t.options.isVertical&&40===e.which?t.nextSlide():(!t.options.isVertical&&37===e.which||t.options.isVertical&&38===e.which)&&t.prevSlide())}))}function b(){var t=this;this.options.touchDrag&&(this.endDrag=A.bind(this),this.onDrag=C.bind(this),this.wrap.on("touchstart",(function(e){t.isEnabled&&(t.options.preventDefaultDrag&&e.preventDefault(),t.isSliding||(t.dragStart={x:e.changedTouches[0].screenX,y:e.changedTouches[0].screenY},S.call(t),window.addEventListener("touchend",t.endDrag),window.addEventListener("touchmove",t.onDrag)))}))),this.options.mouseDrag&&(this.onMouseMove=x.bind(this),this.endMouseMove=E.bind(this),this.wrap.on("mousedown",(function(e){t.isEnabled&&(e.preventDefault(),t.isSliding||(t.dragStart={x:e.screenX,y:e.screenY},S.call(t),window.addEventListener("mouseup",t.endMouseMove),window.addEventListener("mousemove",t.onMouseMove)))})))}function S(){this.isDragged=!0,this.lastDrag={lastSaveId:0,values:[{x:this.dragStart.x,y:this.dragStart.y}]}}function C(t){var e={x:t.changedTouches[0].screenX,y:t.changedTouches[0].screenY};console.log(t.changedTouches[0]),T.call(this,e)}function x(t){var e={x:t.screenX,y:t.screenY};T.call(this,e)}function T(t){this.lastDrag.lastSaveId=(this.lastDrag.lastSaveId+1)%10,this.lastDrag.values[this.lastDrag.lastSaveId]=t;var e=this.options.isVertical?"y":"x",i=t[e]-this.dragStart[e];this.position=this.slides[this.currentSlideId].offset-i-this.slideOffset/2,this.options.isVertical?this.bar.css({top:-this.position}):this.bar.css({left:-this.position})}function A(t){var e={x:t.changedTouches[0].screenX,y:t.changedTouches[0].screenY};P.call(this,e),window.removeEventListener("touchend",this.endDrag),window.removeEventListener("touchmove",this.onDrag)}function E(t){var e={x:t.screenX,y:t.screenY};P.call(this,e),window.removeEventListener("mouseup",this.endMouseMove),window.removeEventListener("mousemove",this.onMouseMove)}function P(t){var e=this;this.isDragged=!1;var i=this.options.isVertical?"y":"x",n=this.options.isVertical?"x":"y",s=this.slides[this.currentSlideId].offset;if(s-=t[i]-this.dragStart[i],Math.abs(t[n]-this.dragStart[n])>2*Math.abs(t[i]-this.dragStart[i]))this.applyPosition();else{var r=function(t){e.currentSlideId=t,e.slideOffset=0};if(t[i]>this.dragStart[i]){for(var o=0,a=0;a<this.slides.length;a++)if(this.slides[a].offset+this.slides[a].size/2>s-this.slideOffset/2){o=a;break}this.currentSlideId===o?t[i]-e.dragStart[i]>.01*e.slides[e.currentSlideId].size&&o>0&&r(o-1):r(o)}else if(t[i]<this.dragStart[i]){for(var l=this.slides.length-1,h=0;h<this.slides.length;h++)if(this.slides[h].offset+this.slides[h].size/2>s-this.slideOffset/2+this.size){l=Math.max(h-1,0);break}this.currentSlideId===l?e.dragStart[i]-t[i]>.01*e.slides[e.currentSlideId].size&&l+1<this.slides.length&&r(l+1):r(l)}this.applyPosition()}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function I(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var _=-1,O=function(){function t(i){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=++_,this.wrap=e()(i.wrap),1===this.wrap.length&&(this.scrollItem=h(this.wrap,{onScroll:function(t){n.distanceFromCenter=Math.abs(t.offset+t.height/2-l.s-l.h/2)}}),this.prepareOptions(i),this.currentSlideId=this.options.initialSlide,this.slideOffset=0,this.position=0,this.barSize=0,this.size=0,this.isSliding=!1,this.isDragged=!1,this.isEnabled=this.options.isEnabled,this.isVertical=this.options.isVertical,y.call(this),m.call(this),w.call(this),b.call(this),this.checkSize=this.checkSize.bind(this),window.addEventListener("layoutChange",this.checkSize),this.options.loop&&(this.currentSlideId=this.slides.length/3,this.applyPosition()),this.slides[this.currentSlideId].activate())}var i,n;return i=t,(n=[{key:"prepareOptions",value:function(t){for(var e in this.options={slideOnWheel:!1,shouldHaveBullets:!0,slideSelector:".single-slide",isVertical:!1,initialSlide:0,duration:300,mouseDrag:!1,touchDrag:!1,preventDefaultDrag:!1,useKeys:!1,loop:!1,slidesAsLinks:!1,adjustHeight:!1,animationType:"slide",isEnabled:!0},t)this.options[e]=t[e]}},{key:"checkSize",value:function(){var t=this;this.options.isVertical?this.size=this.sizer.height():this.size=this.sizer.width(),this.slideOffset=0,this.barSize=0,this.gutter=this.slides[0].element.outerWidth(!0)-this.slides[0].element.outerWidth();var e=this.isVertical?this.bar.offset().top:this.bar.offset().left;if(this.slides.map((function(i){var n=i.checkSize(e);t.barSize+=n})),this.applyPosition(0),!this.isVertical){var i=this.slides.reduce((function(t,e){return Math.max(t,e.element[0].scrollHeight)}),0);this.options.adjustHeight?this.wrap.css({height:this.slides[this.currentSlideId].element[0].scrollHeight}):this.wrap.css({height:i})}}},{key:"prevSlide",value:function(){this.currentSlideId<=0||this.isSliding||(this.currentSlideId--,this.slideOffset=0,this.applyPosition())}},{key:"nextSlide",value:function(){this.currentSlideId>=this.slides.length-1||this.isSliding||(this.currentSlideId++,this.slideOffset=0,this.applyPosition())}}])&&I(i.prototype,n),t}();O.prototype.applyPosition=function(t){var e=this,i=function(){if(e.options.loop){var t=e.slides.length/3,i=!1;e.currentSlideId<t?(e.currentSlideId+=t,i=!0):e.currentSlideId>=2*t&&(e.currentSlideId-=t,i=!0),i&&(e.wrap.addClass("adjusting"),e.applyPosition(0),setTimeout((function(){e.wrap.removeClass("adjusting")}),100))}};this.isSliding=!0,void 0===t&&(t=this.options.duration);var n,s=this.slides[this.currentSlideId];this.position=s.offset-this.slideOffset/2,this.slides.forEach((function(t,i){i<e.currentSlideId?t.markAsPrev():i>e.currentSlideId?t.markAsNext():t.activate()})),this.handleArrows(),n="fade"===this.options.animationType?{transition:"opacity ".concat(t/2/1e3,"s"),opacity:0}:{transition:"".concat(t/1e3,"s")},this.bar.css(n),this.options.isVertical?n.top=-this.position:n.left=-this.position,"fade"===this.options.animationType?setTimeout((function(){e.bar.css(n),e.bar.css({opacity:1}),e.isSliding=!1,i()}),t/2):(this.bar.css(n),setTimeout((function(){e.bar.css({transition:"none"}),e.isSliding=!1,i()}),t)),setTimeout((function(){e.options.adjustHeight&&e.wrap.css({height:e.slides[e.currentSlideId].element[0].scrollHeight})}),t)},O.prototype.handleArrows=function(){this.currentSlideId===this.slides.length-1?this.isArrowNextActive&&(this.arrowNext.addClass("disabled"),this.isArrowNextActive=!1):this.isArrowNextActive||(this.arrowNext.removeClass("disabled"),this.isArrowNextActive=!0),0===this.currentSlideId?this.isArrowPrevActive&&(this.arrowPrev.addClass("disabled"),this.isArrowPrevActive=!1):this.isArrowPrevActive||(this.arrowPrev.removeClass("disabled"),this.isArrowPrevActive=!0)};var L=[];function N(){var t,e,i=1/0,n=function(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return k(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?k(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,s=function(){};return{s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){a=!0,r=t},f:function(){try{o||null==i.return||i.return()}finally{if(a)throw r}}}}(L);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.isClosest=!1,s.distanceFromCenter<i&&(i=s.distanceFromCenter,t=s)}}catch(t){n.e(t)}finally{n.f()}void 0!==t&&(t.isClosest=!0)}window.addEventListener("afterLayoutChange",N),window.addEventListener("scroll",n(100,N));var z;window.slider=(z=new O({wrap:"#slider",mouseDrag:!0,touchDrag:!0,useKeys:!0,slideOnWheel:!0}),L.push(z),z)})()})();