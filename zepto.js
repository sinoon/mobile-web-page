var Zepto=function(){function t(t){return null==t?String(t):V[X.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return N.call(t,function(t){return null!=t})}function c(t){return t.length>0?T.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||M[u(t)]?e:e+"px"}function h(t){var e,n;return k[t]||(e=_.createElement(t),_.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),k[t]=n),k[t]}function p(t){return"children"in t?O.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||Y(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Y(e[E])&&!Y(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==w&&(t[E]=e[E])}function m(t,e){return null==e?T(t):T(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function b(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?T.parseJSON(t):t:e):t}catch(n){return t}}function x(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)x(t.childNodes[n],e)}var w,E,T,S,j,C,P=[],O=P.slice,N=P.filter,_=window.document,k={},A={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},Z=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,R=/([A-Z])/g,D=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],I=_.createElement("table"),H=_.createElement("tr"),q={tr:_.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:H,th:H,"*":_.createElement("div")},U=/complete|loaded|interactive/,B=/^[\w-]*$/,V={},X=V.toString,W={},J=_.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=J).appendChild(t),i=~W.qsa(r,e).indexOf(t),o&&J.removeChild(t),i},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var i,r,a;return $.test(t)&&(i=T(_.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(z,"<$1></$2>")),e===w&&(e=Z.test(t)&&RegExp.$1),e in q||(e="*"),a=q[e],a.innerHTML=""+t,i=T.each(O.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=T(i),T.each(n,function(t,e){D.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},W.Z=function(t,e){return t=t||[],t.__proto__=T.fn,t.selector=e||"",t},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){var i;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Z.test(t))i=W.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return T(n).find(t);i=W.qsa(_,t)}else{if(e(t))return T(_).ready(t);if(W.isZ(t))return t;if(Y(t))i=s(t);else if(r(t))i=[t],t=null;else if(Z.test(t))i=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return T(n).find(t);i=W.qsa(_,t)}}return W.Z(i,t)},T=function(t,e){return W.init(t,e)},T.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},W.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=B.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=_.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=Y,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},T.camelCase=j,T.trim=function(t){return null==t?"":String.prototype.trim.call(t)},T.uuid=0,T.support={},T.expr={},T.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return c(o)},T.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},T.grep=function(t,e){return N.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),T.fn={forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,indexOf:P.indexOf,concat:P.concat,map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(O.apply(this,arguments))},ready:function(t){return U.test(_.readyState)&&_.body?t(T):_.addEventListener("DOMContentLoaded",function(){t(T)},!1),this},get:function(t){return t===w?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(N.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return T(C(this.concat(T(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?O.call(t):T(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return r(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:T(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?T(t).filter(function(){var t=this;return P.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):[]},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=T(t));n&&!(r?r.indexOf(n)>=0:W.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(C(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return N.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=T(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=T(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;T(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(E in t)g(this,E,t[E]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&g(this,t)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(R,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?b(i):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=T(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],r=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[j(e)]||r.getPropertyValue(e);if(Y(e)){var o={};return T.each(e,function(t,e){o[e]=i.style[j(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(E in e)e[E]||0===e[E]?a+=u(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(u(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=y(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||S.push(t)},this),S.length&&y(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return y(this,"");S=y(this),v(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),y(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=T(this),r=v(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=L.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,i.top+=parseFloat(T(e[0]).css("border-top-width"))||0,i.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||_.body;t&&!L.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});T.fn[t]=function(r){var o,a=this[0];return r===w?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=T(this),a.css(t,v(this,r,e,a[t]()))})}}),F.forEach(function(e,n){var i=n%2;T.fn[e]=function(){var e,r,o=T.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:W.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=T.contains(_.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return T(t).remove();r.insertBefore(t,e),s&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},T.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),W.Z.prototype=T.fn,W.uniq=C,W.deserializeValue=b,T.zepto=W,T}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),window.seajs&&define(function(t,e,n){n.exports=window.Zepto}),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return x[t]||y&&b[t]||t}function s(n,r,s,c,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in x&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||s;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function c(t,i,r,s,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(S,function(t,i){var r=n[t];e[t]=function(){return this[i]=w,r&&r.apply(n,arguments)},e[i]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)T.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},E=function(){return!1},T=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(d(i)||i===!1)&&(r=i,i=f),r===!1&&(r=E),h.each(function(f,h){o&&(a=function(t){return c(h,t.type,r),r.apply(this,arguments)}),n&&(u=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),s(h,e,r,i,n,u||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=E),r.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),u(n)}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),c(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==E?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(c.name,c.value):"array"==o||!i&&"object"==o?d(e,c,i,n):e.add(n,c)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",T="text/html",S=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++g,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,c){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,c||"error",p,e,n),window[u]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(p,e)===!1?(h("abort"),p):(window[u]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),r=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n);var c=n.dataType,p=/\?.+=\?/.test(n.url);if(p&&(c="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=c&&"jsonp"!=c)||(n.url=f(n.url,"_="+Date.now())),"jsonp"==c)return p||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,r);var d,g=n.accepts[c],y={},b=function(t,e){y[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,w=n.xhr(),E=w.setRequestHeader;if(r&&r.promise(w),n.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",g||"*/*"),(g=n.mimeType||g)&&(g.indexOf(",")>-1&&(g=g.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(g)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&b("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(v in n.headers)b(v,n.headers[v]);if(w.setRequestHeader=b,w.onreadystatechange=function(){if(4==w.readyState){w.onreadystatechange=u,clearTimeout(d);var e,i=!1;if(w.status>=200&&w.status<300||304==w.status||0==w.status&&"file:"==x){c=c||l(n.mimeType||w.getResponseHeader("content-type")),e=w.responseText;try{"script"==c?(1,eval)(e):"xml"==c?e=w.responseXML:"json"==c&&(e=S.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?s(i,"parsererror",w,n,r):a(e,w,n,r)}else s(w.statusText||null,w.status?"error":"abort",w,n,r)}},o(w,n)===!1)return w.abort(),s(null,"abort",w,n,r),w;if(n.xhrFields)for(v in n.xhrFields)w[v]=n.xhrFields[v];var T="async"in n?n.async:!0;w.open(n.type,n.url,T,n.username,n.password);for(v in y)E.apply(w,y[v]);return n.timeout>0&&(d=setTimeout(function(){w.onreadystatechange=u,w.abort(),s(null,"timeout",w,n,r)},n.timeout)),w.send(n.data?n.data:null),w},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=p(e,n,i),c=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(s),this};var j=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(j(t)+"="+j(e))},d(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this),n=e.attr("type"),"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&("radio"!=n&&"checkbox"!=n||this.checked)&&i.push({name:e.attr("name"),value:e.val()})}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=t.match(/(Android);?[\s\/]+([\d.]+)?/),o=!!t.match(/\(Macintosh\; Intel /),a=t.match(/(iPad).*OS\s([\d_]+)/),s=t.match(/(iPod)(.*OS\s([\d_]+))?/),c=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),u=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=t.match(/Windows Phone ([\d.]+)/),f=u&&t.match(/TouchPad/),h=t.match(/Kindle\/([\d.]+)/),p=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),m=t.match(/(BB10).*Version\/([\d.]+)/),v=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),g=t.match(/PlayBook/),y=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),b=t.match(/Firefox\/([\d.]+)/),x=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),w=!y&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),E=w||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),c&&!s&&(e.ios=e.iphone=!0,e.version=c[2].replace(/_/g,".")),a&&(e.ios=e.ipad=!0,e.version=a[2].replace(/_/g,".")),s&&(e.ios=e.ipod=!0,e.version=s[3]?s[3].replace(/_/g,"."):null),l&&(e.wp=!0,e.version=l[1]),u&&(e.webos=!0,e.version=u[2]),f&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),m&&(e.bb10=!0,e.version=m[2]),v&&(e.rimtabletos=!0,e.version=v[2]),g&&(n.playbook=!0),h&&(e.kindle=!0,e.version=h[1]),p&&(n.silk=!0,n.version=p[1]),!p&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),y&&(n.chrome=!0,n.version=y[1]),b&&(n.firefox=!0,n.version=b[1]),x&&(n.ie=!0,n.version=x[1]),E&&(o||e.ios)&&(n.safari=!0,o&&(n.version=E[1])),w&&(n.webview=!0),e.tablet=!!(a||g||r&&!t.match(/Mobile/)||b&&t.match(/Tablet/)||x&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(r||c||u||d||m||y&&t.match(/Android/)||y&&t.match(/CriOS\/([\d.]+)/)||b&&t.match(/Mobile/)||x&&t.match(/Touch/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,a,s,c,u,l,f,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},v=window.document,g=v.createElement("div"),y=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(m,function(t,n){return g.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=d+"transform",b[a=d+"transition-property"]=b[s=d+"transition-duration"]=b[u=d+"transition-delay"]=b[c=d+"transition-timing-function"]=b[l=d+"animation-name"]=b[f=d+"animation-duration"]=b[p=d+"animation-delay"]=b[h=d+"animation-timing-function"]="",t.fx={off:r===e&&g.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(i,r,d,m,v){var g,x,w,E={},T="",S=this,j=t.fx.transitionEnd,C=!1;if(r===e&&(r=t.fx.speeds._default/1e3),v===e&&(v=0),t.fx.off&&(r=0),"string"==typeof i)E[l]=i,E[f]=r+"s",E[p]=v+"s",E[h]=d||"linear",j=t.fx.animationEnd;else{x=[];for(g in i)y.test(g)?T+=g+"("+i[g]+") ":(E[g]=i[g],x.push(n(g)));T&&(E[o]=T,x.push(o)),r>0&&"object"==typeof i&&(E[a]=x.join(", "),E[s]=r+"s",E[u]=v+"s",E[c]=d||"linear")}return w=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(j,w)}else t(this).unbind(j,w);C=!0,t(this).css(b),m&&m.call(this)},r>0&&(this.bind(j,w),setTimeout(function(){C||w.call(S)},1e3*r+25)),this.size()&&this.get(0).clientLeft,this.css(E),0>=r&&setTimeout(function(){S.each(function(){w.call(this)})},0),this},g=null}(Zepto),function(t,e){function n(n,i,r,o,a){"function"!=typeof i||a||(a=i,i=e);var s={opacity:r};return o&&(s.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,i,null,a)}function i(e,i,r,o){return n(e,i,0,r,function(){a.call(t(this)),o&&o.call(this)})}var r=window.document,o=(r.documentElement,t.fn.show),a=t.fn.hide,s=t.fn.toggle;t.fn.show=function(t,i){return o.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",i)},t.fn.hide=function(t,n){return t===e?a.call(this):i(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?s.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,i){return n(this,t,e,null,i)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return i(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t,e){t.tapHandling=!1;var n=function(t){return t.off(".fz.tap")},i=function(n){return n.each(function(){function n(t){e(t.target).trigger("tap",[t,e(t.target).attr("href")]),t.stopPropagation()}function i(t){var e=t.originalEvent||t,n=e.touches||e.targetTouches;return n?[n[0].pageX,n[0].pageY]:null}function r(t){if(t.touches&&t.touches.length>1||t.targetTouches&&t.targetTouches.length>1)return!1;var e=i(t);u=e[0],c=e[1]}function o(t){if(!l){var e=i(t);e&&(Math.abs(c-e[1])>h||Math.abs(u-e[0])>h)&&(l=!0)}}function a(e){if(clearTimeout(s),s=setTimeout(function(){t.tapHandling=!1,l=!1},1e3),!(e.which&&e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){if(e.preventDefault(),l||t.tapHandling&&t.tapHandling!==e.type)return void(l=!1);t.tapHandling=e.type,n(e)}}var s,c,u,l,f=e(this),h=10;f.bind("touchstart.fz.tap MSPointerDown.fz.tap",r).bind("touchmove.fz.tap MSPointerMove.fz.tap",o).bind("touchend.fz.tap MSPointerUp.fz.tap",a).bind("click.fz.tap",a)})};if(e.event&&e.event.special)e.event.special.tap={add:function(){i(e(this))},remove:function(){n(e(this))}};else{var r=e.fn.on,o=e.fn.off;e.fn.on=function(t){return/(^| )tap( |$)/.test(t)&&(n(this),i(this)),r.apply(this,arguments)},e.fn.off=function(t){return/(^| )tap( |$)/.test(t)&&n(this),o.apply(this,arguments)}}e.fn.tap=function(t){this.on("tap",t)}}(this,Zepto),function(t){t.fn.cookie=function(e,n,i){var r,o,a,s;return arguments.length>1&&"[object Object]"!==String(n)?(i=t.extend({},i),(null===n||void 0===n)&&(i.expires=-1),"number"==typeof i.expires&&(r=24*i.expires*60*60*1e3,o=i.expires=new Date,o.setTime(o.getTime()+r)),n=String(n),document.cookie=[encodeURIComponent(e),"=",i.raw?n:encodeURIComponent(n),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")):(i=n||{},s=i.raw?function(t){return t}:decodeURIComponent,(a=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?s(a[1]):null)}}(Zepto);