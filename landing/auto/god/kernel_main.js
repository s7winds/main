; /* /bitrix/js/main/core/core_popup.js*/
; /* /bitrix/js/main/core/core_date.js*/
; /* /bitrix/js/main/core/core.js*/
; /* /bitrix/js/main/core/core_ajax.js*/
; /* /bitrix/js/main/session.js*/
; /* /bitrix/js/main/core/core_window.js*/
; /* /bitrix/js/main/utils.js*/

; /* Start:/bitrix/js/main/core/core.js*/
(function(f){function s(){if(!BX.isReady){if(!document.body)return setTimeout(s,15);BX.isReady=!0;if(t&&0<t.length){for(var a,b=0;t&&(a=t[b++]);)try{a.call(document)}catch(c){BX.debug("BX.ready error: ",c)}t=null}}return null}function I(){if(!BX.isReady){try{document.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}s()}}function Q(){if(this.bxmsg){var a=BX.pos(this),b=a.top;b<BX.GetDocElement().scrollTop&&(b=BX.GetDocElement().scrollTop+5);this.bxmsg.style.top=b+5+"px";this==BX.GetDocElement()?
this.bxmsg.style.right="5px":this.bxmsg.style.left=a.right-this.bxmsg.offsetWidth-5+"px"}}function E(a,b){"undefined"!=typeof b&&(a.BXDISPLAY=b);var c=a.style.display||BX.style(a,"display");if("none"!=c)return a.BXDISPLAY=a.BXDISPLAY||c,!0;a.BXDISPLAY=a.BXDISPLAY||"block";return!1}function v(a,b){b=b||{};if(BX.type.isFunction(b))return b.call(f,a);if(!b.allowTextNodes&&!BX.type.isElementNode(a))return!1;var c,d,e;for(c in b)if(b.hasOwnProperty(c))switch(c){case "tag":case "tagName":if(BX.type.isString(b[c])){if(a.tagName.toUpperCase()!=
b[c].toUpperCase())return!1}else if(b[c]instanceof RegExp&&!b[c].test(a.tagName))return!1;break;case "class":case "className":if(BX.type.isString(b[c])){if(!BX.hasClass(a,b[c]))return!1}else if(b[c]instanceof RegExp&&(!BX.type.isString(a.className)||!b[c].test(a.className)))return!1;break;case "attr":case "attribute":if(BX.type.isString(b[c])){if(!a.getAttribute(b[c]))return!1}else if(BX.type.isArray(b[c]))for(d=0,e=b[c].length;d<e;d++){if(b[c]&&!a.getAttribute(b[c]))return!1}else for(d in b[c])if(b[c].hasOwnProperty(d))if(e=
a.getAttribute(d),b[c][d]instanceof RegExp){if(!BX.type.isString(e)||!b[c][d].test(e))return!1}else if(e!=""+b[c][d])return!1;break;case "property":if(BX.type.isString(b[c])){if(!a[b[c]])return!1}else if(BX.type.isArray(b[c]))for(d=0,e=b[c].length;d<e;d++){if(b[c]&&!a[b[c]])return!1}else for(d in b[c])if(BX.type.isString(b[c][d])){if(a[d]!=b[c][d])return!1}else if(b[c][d]instanceof RegExp&&(!BX.type.isString(a[d])||!b[c][d].test(a[d])))return!1;break;case "callback":return b[c](a)}return!0}function R(a){if(!J){var b=
document.getElementsByTagName("LINK");if(b&&0<b.length)for(var c=0;c<b.length;c++){var d=b[c].getAttribute("href");BX.type.isNotEmptyString(d)&&A.push(BX.getCSSPath(d))}J=!0}return BX.util.in_array(a,A)}function S(a){var b=function(b){b=a.getElementsByTagName(b);for(var c=0,g=b.length;c<g;c++){var p=b[c].getAttribute("data-template-style");if(BX.type.isNotEmptyString(p)&&"true"==p)return b[c]}return null},c=b("link");null===c&&(c=b("style"));return c}function T(a){if(!K){var b=document.getElementsByTagName("script");
if(b&&0<b.length)for(var c=0;c<b.length;c++){var d=b[c].getAttribute("src");BX.type.isNotEmptyString(d)&&B.push(BX.getJSPath(d))}K=!0}return BX.util.in_array(a,B)}function F(){var a,b;a=0;for(b=w.length;a<b;a++)try{w[a].callback.apply(w[a].context||f),delete w[a],w[a]=null}catch(c){}try{BX.unbindAll()}catch(d){}}if(!f.BX||!f.BX.extend){var q;f.BX&&(q=f.BX);f.BX=function(a,b){if(BX.type.isNotEmptyString(a)){var c;b&&null!=C[a]&&(c=C[a]);c=c||document.getElementById(a);b&&(C[a]=c);return c}return BX.type.isDomNode(a)?
a:BX.type.isFunction(a)?BX.ready(a):null};BX.message=function(a){if(BX.type.isString(a))return"undefined"==typeof BX.message[a]&&(BX.onCustomEvent("onBXMessageNotFound",[a]),"undefined"==typeof BX.message[a]&&(BX.debug("message undefined: "+a),BX.message[a]="")),BX.message[a];for(var b in a)a.hasOwnProperty(b)&&(BX.message[b]=a[b]);return!0};if(q){for(var l in q)if(q.hasOwnProperty(l))if(!BX[l])BX[l]=q[l];else if("message"==l)for(var G in q[l])q[l].hasOwnProperty(G)&&(BX.message[G]=q[l][G]);q=null}var x=
null,L=!1,t=[],h=Math.random(),M=1,r=[],C={},y=[],m=[],n={},w=[],A=[],J=!1,B=[],K=!1,U=-1!=navigator.userAgent.toLowerCase().indexOf("webkit"),N=-1!=navigator.userAgent.toLowerCase().indexOf("opera"),V=-1!=navigator.userAgent.toLowerCase().indexOf("firefox"),W=-1!=navigator.userAgent.toLowerCase().indexOf("chrome"),X=document.attachEvent&&!N,Y=/<script([^>]*)>/i,Z=/src=["\']([^"\']+)["\']/i,O=/\s+/,$=/^[\s\r\n]+/g,aa=/[\s\r\n]+$/g,ba=/<link.*?(rel="stylesheet"|type="text\/css")[^>]*>/i,ca=/href=["\']([^"\']+)["\']/i,
P={click:"MouseEvent",dblclick:"MouseEvent",mousedown:"MouseEvent",mousemove:"MouseEvent",mouseout:"MouseEvent",mouseover:"MouseEvent",mouseup:"MouseEvent",focus:"MouseEvent",blur:"MouseEvent"},u=[],da={tagName:/^INPUT|SELECT|TEXTAREA|BUTTON$/i};BX.MSLEFT=1;BX.MSMIDDLE=2;BX.MSRIGHT=4;BX.ext=function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])};BX.extend=function(a,b){var c=function(){};c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.superclass=b.prototype;b.prototype.constructor==
Object.prototype.constructor&&(b.prototype.constructor=b)};BX.namespace=function(a){a=a.split(".");var b=BX;"BX"===a[0]&&(a=a.slice(1));for(var c=0;c<a.length;c++)"undefined"===typeof b[a[c]]&&(b[a[c]]={}),b=b[a[c]];return b};BX.debug=function(){f.BXDEBUG&&(f.console&&f.console.log&&f.console.log("BX.debug: ",0<arguments.length?arguments:arguments[0]),f.console&&f.console.trace&&console.trace())};BX.is_subclass_of=function(a,b){return a instanceof b?!0:b.superclass?BX.is_subclass_of(a,b.superclass):
!1};BX.clearNodeCache=function(){C={};return!1};BX.bitrix_sessid=function(){return BX.message("bitrix_sessid")};BX.create=function(a,b,c){c=c||document;null==b&&"object"==typeof a&&a.constructor!==String&&(b=a,a=a.tag);a=BX.browser.IsIE()&&!BX.browser.IsIE9()&&null!=b&&null!=b.props&&(b.props.name||b.props.id)?c.createElement("<"+a+(b.props.name?' name="'+b.props.name+'"':"")+(b.props.id?' id="'+b.props.id+'"':"")+">"):c.createElement(a);return b?BX.adjust(a,b):a};BX.adjust=function(a,b){var c,d;
if(!a.nodeType)return null;9==a.nodeType&&(a=a.body);if(b.attrs)for(c in b.attrs)b.attrs.hasOwnProperty(c)&&("class"==c||"className"==c?a.className=b.attrs[c]:"for"==c?a.htmlFor=b.attrs[c]:""==b.attrs[c]?a.removeAttribute(c):a.setAttribute(c,b.attrs[c]));if(b.style)for(c in b.style)b.style.hasOwnProperty(c)&&(a.style[c]=b.style[c]);if(b.props)for(c in b.props)b.props.hasOwnProperty(c)&&(a[c]=b.props[c]);if(b.events)for(c in b.events)b.events.hasOwnProperty(c)&&BX.bind(a,c,b.events[c]);if(b.children&&
0<b.children.length)for(c=0,d=b.children.length;c<d;c++)BX.type.isNotEmptyString(b.children[c])?a.innerHTML+=b.children[c]:BX.type.isElementNode(b.children[c])&&a.appendChild(b.children[c]);else b.text?(BX.cleanNode(a),a.appendChild((a.ownerDocument||document).createTextNode(b.text))):b.html&&(a.innerHTML=b.html);return a};BX.remove=function(a){a&&null!=a.parentNode&&a.parentNode.removeChild(a);return null};BX.cleanNode=function(a,b){a=BX(a);b=!!b;if(a&&a.childNodes)for(;0<a.childNodes.length;)a.removeChild(a.firstChild);
a&&b&&(a=BX.remove(a));return a};BX.addClass=function(a,b){var c;a=BX(a);b=BX.util.trim(b);if(""==b)return a;if(a)if(a.className)if(a.classList&&0>b.indexOf(" "))a.classList.add(b);else{c=(b||"").split(O);for(var d=" "+a.className+" ",e=0,g=c.length;e<g;e++)0>d.indexOf(" "+c[e]+" ")&&(a.className+=" "+c[e])}else a.className=b;return a};BX.removeClass=function(a,b){if((a=BX(a))&&a.className&&b)if(BX.type.isString(b))if(a.classList&&0>b.indexOf(" "))a.classList.remove(b);else{for(var c=b.split(O),d=
" "+a.className+" ",e=0,g=c.length;e<g;e++)d=d.replace(" "+c[e]+" "," ");a.className=BX.util.trim(d)}else a.className="";return a};BX.toggleClass=function(a,b){var c;if(BX.type.isArray(b)){c=" "+a.className+" ";for(var d=0,e=b.length;d<e;d++)if(BX.hasClass(a,b[d])){c=(" "+c+" ").replace(" "+b[d]+" "," ");c+=" "+b[d>=e-1?0:d+1];d--;break}a.className=d==e?a.className+(" "+b[0]):c;a.className=BX.util.trim(a.className)}else BX.type.isNotEmptyString(b)&&(a.classList?a.classList.toggle(b):(c=a.className,
c=BX.hasClass(a,b)?(" "+c+" ").replace(" "+b+" "," "):c+(" "+b),a.className=BX.util.trim(c)));return a};BX.hasClass=function(a,b){return a&&BX.type.isDomNode(a)?a.className&&b?a.classList&&b&&0>b.indexOf(" ")?a.classList.contains(BX.util.trim(b)):0<=(" "+a.className+" ").indexOf(" "+b+" "):!1:(BX.debug(a),!1)};BX.setOpacity=function(a,b){null!=a.style.filter?(a.style.zoom="100%",a.style.filter=100==b?"":"alpha(opacity="+b.toString()+")"):null!=a.style.opacity?a.style.opacity=(b/100).toString():null!=
a.style.MozOpacity&&(a.style.MozOpacity=(b/100).toString())};BX.hoverEvents=function(a){return a?BX.adjust(a,{events:BX.hoverEvents()}):{mouseover:BX.hoverEventsHover,mouseout:BX.hoverEventsHout}};BX.hoverEventsHover=function(){BX.addClass(this,"bx-hover");this.BXHOVER=!0};BX.hoverEventsHout=function(){BX.removeClass(this,"bx-hover");this.BXHOVER=!1};BX.focusEvents=function(a){return a?BX.adjust(a,{events:BX.focusEvents()}):{mouseover:BX.focusEventsFocus,mouseout:BX.focusEventsBlur}};BX.focusEventsFocus=
function(){BX.addClass(this,"bx-focus");this.BXFOCUS=!0};BX.focusEventsBlur=function(){BX.removeClass(this,"bx-focus");this.BXFOCUS=!1};BX.setUnselectable=function(a){BX.addClass(a,"bx-unselectable");a.setAttribute("unSelectable","on")};BX.setSelectable=function(a){BX.removeClass(a,"bx-unselectable");a.removeAttribute("unSelectable")};BX.styleIEPropertyName=function(a){if("float"==a)a=BX.browser.IsIE()?"styleFloat":"cssFloat";else{var b=BX.browser.isPropertySupported(a);b?a=b:(b=/(\-([a-z]){1})/g,
b.test(a)&&(a=a.replace(b,function(a,b,e){return e.toUpperCase()})))}return a};BX.style=function(a,b,c){if(!BX.type.isElementNode(a))return null;if(null==c){var d;a.currentStyle?d=a.currentStyle[BX.styleIEPropertyName(b)]:f.getComputedStyle&&((c=BX.browser.isPropertySupported(b,!0))&&(b=c),d=BX.GetContext(a).getComputedStyle(a,null).getPropertyValue(b));d||(d="");return d}a.style[BX.styleIEPropertyName(b)]=c;return a};BX.focus=function(a){try{return a.focus(),!0}catch(b){return!1}};BX.firstChild=
function(a){for(a=a.firstChild;a&&!BX.type.isElementNode(a);)a=a.nextSibling;return a};BX.lastChild=function(a){for(a=a.lastChild;a&&!BX.type.isElementNode(a);)a=a.previousSibling;return a};BX.previousSibling=function(a){for(a=a.previousSibling;a&&!BX.type.isElementNode(a);)a=a.previousSibling;return a};BX.nextSibling=function(a){for(a=a.nextSibling;a&&!BX.type.isElementNode(a);)a=a.nextSibling;return a};BX.findChildren=function(a,b,c){return BX.findChild(a,b,c,!0)};BX.findChild=function(a,b,c,d){if(!a||
!a.childNodes)return null;c=!!c;d=!!d;for(var e=a.childNodes.length,g=[],p=0;p<e;p++){var k=a.childNodes[p];if(v(k,b))if(d)g.push(k);else return k;if(1==c&&(k=BX.findChild(k,b,c,d)))if(d)g=BX.util.array_merge(g,k);else return k}return d||0<g.length?g:null};BX.findParent=function(a,b,c){if(!a)return null;for(;a.parentNode;){a=a.parentNode;if(v(a,b))return a;if(c&&(BX.type.isFunction(c)||"object"==typeof c))if(BX.type.isElementNode(c)){if(a==c)break}else if(v(a,c))break}return null};BX.findNextSibling=
function(a,b){if(!a)return null;for(var c=a;c.nextSibling;)if(c=c.nextSibling,v(c,b))return c;return null};BX.findPreviousSibling=function(a,b){if(!a)return null;for(var c=a;c.previousSibling;)if(c=c.previousSibling,v(c,b))return c;return null};BX.findFormElements=function(a){BX.type.isString(a)&&(a=document.forms[a]||BX(a));var b=[];BX.type.isElementNode(a)&&(b="FORM"==a.tagName.toUpperCase()?a.elements:BX.findChildren(a,da,!0));return b};BX.clone=function(a,b){var c,d,e;!1!==b&&(b=!0);if(null===
a)return null;if(BX.type.isDomNode(a))c=a.cloneNode(b);else if("object"==typeof a)if(BX.type.isArray(a))for(c=[],d=0,e=a.length;d<e;d++)c[d]="object"==typeof a[d]&&b?BX.clone(a[d],b):a[d];else for(d in c={},a.constructor&&(c=a.constructor===Date?new Date(a):new a.constructor),a)c[d]="object"==typeof a[d]&&b?BX.clone(a[d],b):a[d];else c=a;return c};BX.bind=function(a,b,c){if(a){if("mousewheel"===b)BX.bind(a,"DOMMouseScroll",c);else if("transitionend"===b)BX.bind(a,"webkitTransitionEnd",c),BX.bind(a,
"msTransitionEnd",c),BX.bind(a,"oTransitionEnd",c);else if("bxchange"===b){BX.bind(a,"change",c);BX.bind(a,"cut",c);BX.bind(a,"paste",c);BX.bind(a,"drop",c);BX.bind(a,"keyup",c);return}a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,BX.proxy(c,a)):a["on"+b]=c;m[m.length]={element:a,event:b,fn:c}}};BX.unbind=function(a,b,c){if(a){if("mousewheel"===b)BX.unbind(a,"DOMMouseScroll",c);else if("transitionend"===b)BX.unbind(a,"webkitTransitionEnd",c),BX.unbind(a,"msTransitionEnd",
c),BX.unbind(a,"oTransitionEnd",c);else if("bxchange"===b){BX.unbind(a,"change",c);BX.unbind(a,"cut",c);BX.unbind(a,"paste",c);BX.unbind(a,"drop",c);BX.unbind(a,"keyup",c);return}a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,BX.proxy(c,a)):a["on"+b]=null}};BX.getEventButton=function(a){a=a||f.event;var b=0;if("undefined"!=typeof a.which)switch(a.which){case 1:b|=BX.MSLEFT;break;case 2:b|=BX.MSMIDDLE;break;case 3:b|=BX.MSRIGHT}else"undefined"!=typeof a.button&&
(b=event.button);return b||BX.MSLEFT};BX.unbindAll=function(a){if(a){for(var b=0,c=m.length;b<c;b++)try{!m[b]||null!=a&&a!=m[b].element||(BX.unbind(m[b].element,m[b].event,m[b].fn),m[b]=null)}catch(d){}null==a&&(m=[])}};var D=null,z=null;BX.CaptureEvents=function(a,b){if(z)return!1;z=BX.bind;D=[];BX.bind=function(c,d,e){c===a&&d===b&&D.push(e);z.apply(this,arguments)}};BX.CaptureEventsGet=function(){if(z){BX.bind=z;var a=D;D=z=null;return a}};BX.fireEvent=function(a,b){var c=!1,d=null;if(BX.type.isDomNode(a))if(c=
!0,document.createEventObject){if("MouseEvent"!=P[b]&&(d=document.createEventObject(),d.type=b,c=a.fireEvent("on"+b,d)),a[b])a[b]()}else{switch(P[b]){case "MouseEvent":d=document.createEvent("MouseEvent");d.initMouseEvent(b,!0,!0,top,1,0,0,0,0,0,0,0,0,0,null);break;default:d=document.createEvent("Event"),d.initEvent(b,!0,!0)}c=a.dispatchEvent(d)}return c};BX.getWheelData=function(a){a=a||f.event;a.wheelData=a.detail?-1*a.detail:a.wheelDelta/40;return a.wheelData};BX.proxy_context=null;BX.delegate=
function(a,b){return a&&b?function(){var c=BX.proxy_context;BX.proxy_context=this;var d=a.apply(b,arguments);BX.proxy_context=c;return d}:a};BX.delegateLater=function(a,b,c){return function(){if(b[a]){var d=BX.proxy_context;BX.proxy_context=this;var e=b[a].apply(c||b,arguments);BX.proxy_context=d;return e}}};BX._initObjectProxy=function(a){"undefined"==typeof a["__proxy_id_"+h]&&(a["__proxy_id_"+h]=r.length,r[a["__proxy_id_"+h]]={})};BX.proxy=function(a,b){if(!a||!b)return a;BX._initObjectProxy(b);
"undefined"==typeof a["__proxy_id_"+h]&&(a["__proxy_id_"+h]=M++);r[b["__proxy_id_"+h]][a["__proxy_id_"+h]]||(r[b["__proxy_id_"+h]][a["__proxy_id_"+h]]=BX.delegate(a,b));return r[b["__proxy_id_"+h]][a["__proxy_id_"+h]]};BX.defer=function(a,b){return b?BX.defer_proxy(a,b):function(){var b=arguments;setTimeout(function(){a.apply(this,b)},10)}};BX.defer_proxy=function(a,b){if(!a||!b)return a;BX.proxy(a,b);this._initObjectProxy(b);"undefined"==typeof a["__defer_id_"+h]&&(a["__defer_id_"+h]=M++);r[b["__proxy_id_"+
h]][a["__defer_id_"+h]]||(r[b["__proxy_id_"+h]][a["__defer_id_"+h]]=BX.defer(BX.delegate(a,b)));return r[b["__proxy_id_"+h]][a["__defer_id_"+h]]};BX.bindDelegate=function(a,b,c,d){c=BX.delegateEvent(c,d);BX.bind(a,b,c);return c};BX.delegateEvent=function(a,b){return function(c){c=c||f.event;for(var d=c.target||c.srcElement;d!=this;){if(v(d,a))return b.call(d,c);if(d&&d.parentNode)d=d.parentNode;else break}}};BX.False=function(){return!1};BX.DoNothing=function(){};BX.denyEvent=function(a,b){y.push([a,
b,a["on"+b]]);a["on"+b]=BX.DoNothing};BX.allowEvent=function(a,b){for(var c=0,d=y.length;c<d;c++)if(y[c][0]==a&&y[c][1]==b){a["on"+b]=y[c][2];BX.util.deleteFromArray(y,c);break}};BX.fixEventPageXY=function(a){BX.fixEventPageX(a);BX.fixEventPageY(a);return a};BX.fixEventPageX=function(a){null==a.pageX&&null!=a.clientX&&(a.pageX=a.clientX+(document.documentElement&&document.documentElement.scrollLeft||document.body&&document.body.scrollLeft||0)-(document.documentElement.clientLeft||0));return a};BX.fixEventPageY=
function(a){null==a.pageY&&null!=a.clientY&&(a.pageY=a.clientY+(document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0)-(document.documentElement.clientTop||0));return a};BX.PreventDefault=function(a){a||(a=f.event);a.stopPropagation?(a.preventDefault(),a.stopPropagation()):(a.cancelBubble=!0,a.returnValue=!1);return!1};BX.eventReturnFalse=function(a){(a=a||f.event)&&a.preventDefault?a.preventDefault():a.returnValue=!1;return!1};BX.eventCancelBubble=
function(a){(a=a||f.event)&&a.stopPropagation?a.stopPropagation():a.cancelBubble=!0};BX.addCustomEvent=function(a,b,c){BX.type.isString(a)&&(c=b,b=a,a=f);b=b.toUpperCase();n[b]||(n[b]=[]);n[b].push({handler:c,obj:a})};BX.removeCustomEvent=function(a,b,c){BX.type.isString(a)&&(c=b,b=a,a=f);b=b.toUpperCase();if(n[b])for(var d=0,e=n[b].length;d<e;d++)if(n[b][d]&&n[b][d].handler==c&&n[b][d].obj==a){delete n[b][d];break}};BX.onCustomEvent=function(a,b,c,d){BX.type.isString(a)&&(d=c,c=b,b=a,a=f);b=b.toUpperCase();
if(n[b]){c||(c=[]);for(var e,g=0,p=n[b].length;g<p;g++)(e=n[b][g])&&e.handler&&(e.obj!=f&&e.obj!=a||e.handler.apply(a,d?BX.clone(c):c))}};BX.parseJSON=function(a,b){var c=null;if(BX.type.isString(a))try{0<=a.indexOf("\n")?eval("result = "+a):c=(new Function("return "+a))()}catch(d){BX.onCustomEvent(b,"onParseJSONFailure",[a,b])}return c};BX.isReady=!1;BX.ready=function(a){if(!L)if(L=!0,"complete"===document.readyState)s();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
x,!1),f.addEventListener("load",s,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",x);f.attachEvent("onload",s);var b=!1;try{b=null==f.frameElement}catch(c){}document.documentElement.doScroll&&b&&I()}BX.type.isFunction(a)?BX.isReady?a.call(document):t&&t.push(a):BX.debug("READY: not a function! ",a)};BX.submit=function(a,b,c,d){b=b||"save";a["BXFormSubmit_"+b]||(a["BXFormSubmit_"+b]=a.appendChild(BX.create("INPUT",{props:{type:"submit",name:b,value:c||"Y"},style:{display:"none"}})));
a.sessid&&(a.sessid.value=BX.bitrix_sessid());setTimeout(BX.delegate(function(){BX.fireEvent(this,"click");d&&d()},a["BXFormSubmit_"+b]),10)};BX.browser={IsIE:function(){return X},IsIE6:function(){return/MSIE 6/i.test(navigator.userAgent)},IsIE7:function(){return/MSIE 7/i.test(navigator.userAgent)},IsIE8:function(){return/MSIE 8/i.test(navigator.userAgent)},IsIE9:function(){return!!document.documentMode&&9<=document.documentMode},IsIE10:function(){return!!document.documentMode&&10<=document.documentMode},
IsIE11:function(){return 11<=BX.browser.DetectIeVersion()},IsOpera:function(){return N},IsSafari:function(){return U},IsFirefox:function(){return V},IsChrome:function(){return W},IsMac:function(){return/Macintosh/i.test(navigator.userAgent)},IsAndroid:function(){return/Android/i.test(navigator.userAgent)},IsIOS:function(){return/(iPad;)|(iPhone;)/i.test(navigator.userAgent)},DetectIeVersion:function(){if(BX.browser.IsOpera()||BX.browser.IsSafari()||BX.browser.IsFirefox()||BX.browser.IsChrome())return-1;
var a=-1;f.MSStream&&!f.ActiveXObject&&"ActiveXObject"in f?a=11:BX.browser.IsIE10()?a=10:BX.browser.IsIE9()?a=9:BX.browser.IsIE()&&(a=8);if(-1==a||8==a){var b;"Microsoft Internet Explorer"==navigator.appName?(b=/MSIE ([0-9]+[.0-9]*)/,null!=b.exec(navigator.userAgent)&&(a=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(a=11,b=/Trident\/.*rv:([0-9]+[.0-9]*)/,null!=b.exec(navigator.userAgent)&&(a=parseFloat(RegExp.$1)))}return a},IsDoctype:function(a){a=a||document;return a.compatMode?"CSS1Compat"==
a.compatMode:a.documentElement&&a.documentElement.clientHeight?!0:!1},SupportLocalStorage:function(){return!!BX.localStorage&&!!BX.localStorage.checkBrowser()},addGlobalClass:function(){var a="";BX.browser.IsIOS()?a+=" bx-ios":BX.browser.IsMac()?a+=" bx-mac":BX.browser.IsAndroid()&&(a+=" bx-android");var a=a+(BX.browser.IsIOS()||BX.browser.IsAndroid()?" bx-touch":" bx-no-touch"),a=a+(BX.browser.isRetina()?" bx-retina":" bx-no-retina"),b=-1;/AppleWebKit/.test(navigator.userAgent)?a+=" bx-chrome":0<
(b=BX.browser.DetectIeVersion())?(a+=" bx-ie bx-ie"+b,7<b&&10>b&&!BX.browser.IsDoctype()&&(a+=" bx-quirks")):/Opera/.test(navigator.userAgent)?a+=" bx-opera":/Gecko/.test(navigator.userAgent)&&(a+=" bx-firefox");BX.addClass(document.documentElement,a);BX.browser.addGlobalClass=BX.DoNothing},isPropertySupported:function(a,b){function c(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()})}function d(a){var b=/(\-([a-z]){1})/g;return b.test(a)?a.replace(b,function(a,b,c){return c.toUpperCase()}):
a}if(!BX.type.isNotEmptyString(a))return!1;var e=-1<a.indexOf("-")?d(a):a;b=!!b;for(var g=e.charAt(0).toUpperCase()+e.slice(1),p=(e+" "+["Webkit","Moz","O","ms"].join(g+" ")+g).split(" "),k=document.body||document.documentElement,f=0;f<p.length;f++)if(g=p[f],void 0!==k.style[g])return p=g==e?"":"-"+g.substr(0,g.length-e.length).toLowerCase()+"-",b?p+c(e):g;return!1},addGlobalFeatures:function(a,b){if(BX.type.isArray(a)){for(var c=[],d=0;d<a.length;d++){var e=!!BX.browser.isPropertySupported(a[d]);
c.push("bx-"+(e?"":"no-")+a[d].toLowerCase())}BX.addClass(document.documentElement,c.join(" "))}},isRetina:function(){return f.devicePixelRatio&&2<=f.devicePixelRatio}};BX.show=function(a,b){if(a.BXDISPLAY||!E(a,b))a.style.display=a.BXDISPLAY};BX.hide=function(a,b){a.BXDISPLAY||E(a,b);a.style.display="none"};BX.toggle=function(a,b){if(!b&&BX.type.isElementNode(a)){var c=!0;(c=a.BXDISPLAY?!E(a):"none"==a.style.display)?BX.show(a):BX.hide(a)}else if(BX.type.isArray(b)){for(var c=0,d=b.length;c<d;c++)if(a==
b[c]){a=b[c==d-1?0:c+1];break}c==d&&(a=b[0])}return a};BX.util={array_values:function(a){if(!BX.type.isArray(a))return BX.util._array_values_ob(a);for(var b=[],c=0,d=a.length;c<d;c++)null!==a[c]&&"undefined"!=typeof a[c]&&b.push(a[c]);return b},_array_values_ob:function(a){var b=[],c;for(c in a)null!==a[c]&&"undefined"!=typeof a[c]&&b.push(a[c]);return b},array_keys:function(a){if(!BX.type.isArray(a))return BX.util._array_keys_ob(a);for(var b=[],c=0,d=a.length;c<d;c++)null!==a[c]&&"undefined"!=typeof a[c]&&
b.push(c);return b},_array_keys_ob:function(a){var b=[],c;for(c in a)null!==a[c]&&"undefined"!=typeof a[c]&&b.push(c);return b},array_merge:function(a,b){BX.type.isArray(a)||(a=[]);BX.type.isArray(b)||(b=[]);var c=a.length,d=0;if("number"===typeof b.length)for(var e=b.length;d<e;d++)a[c++]=b[d];else for(;void 0!==b[d];)a[c++]=b[d++];a.length=c;return a},array_unique:function(a){var b=0,c,d=a.length;if(2>d)return a;for(;b<d-1;b++)for(c=b+1;c<d;c++)a[b]==a[c]&&(a.splice(c--,1),d--);return a},in_array:function(a,
b){for(var c=0;c<b.length;c++)if(b[c]==a)return!0;return!1},array_search:function(a,b){for(var c=0;c<b.length;c++)if(b[c]==a)return c;return-1},object_search_key:function(a,b){if("undefined"!=typeof b[a])return b[a];for(var c in b)if("object"==typeof b[c]){var d=BX.util.object_search_key(a,b[c]);if(!1!==d)return d}return!1},trim:function(a){return BX.type.isString(a)?a.replace($,"").replace(aa,""):a},urlencode:function(a){return encodeURIComponent(a)},deleteFromArray:function(a,b){return a.slice(0,
b).concat(a.slice(b+1))},insertIntoArray:function(a,b,c){return a.slice(0,b).concat([c]).concat(a.slice(b))},htmlspecialchars:function(a){return a.replace?a.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):a},htmlspecialcharsback:function(a){return a.replace?a.replace(/\&quot;/g,'"').replace(/&#39;/g,"'").replace(/\&lt;/g,"<").replace(/\&gt;/g,">").replace(/\&amp;/g,"&"):a},preg_quote:function(a,b){return a.replace?a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\"+
(b||"")+"-]","g"),"\\$&"):a},jsencode:function(a){if(!a||!a.replace)return a;for(var b=[{c:"\\\\",r:"\\\\"},{c:"\\t",r:"\\t"},{c:"\\n",r:"\\n"},{c:"\\r",r:"\\r"},{c:'"',r:'\\"'},{c:"'",r:"\\'"},{c:"<",r:"\\x3C"},{c:">",r:"\\x3E"},{c:"\\u2028",r:"\\u2028"},{c:"\\u2029",r:"\\u2029"}],c=0;c<b.length;c++)a=a.replace(new RegExp(b[c].c,"g"),b[c].r);return a},str_pad:function(a,b,c,d){c=c||" ";a=a.toString();return"left"==(d||"right")?BX.util.str_pad_left(a,b,c):BX.util.str_pad_right(a,b,c)},str_pad_left:function(a,
b,c){var d=a.length,e=c.length;if(d>=b)return a;for(;d<b;d+=e)a=c+a;return a},str_pad_right:function(a,b,c){var d=a.length,e=c.length;if(d>=b)return a;for(;d<b;d+=e)a+=c;return a},strip_tags:function(a){return a.split(/<[^>]+>/g).join("")},strip_php_tags:function(a){return a.replace(/<\?(.|[\r\n])*?\?>/g,"")},popup:function(a,b,c){var d,e;BX.browser.IsOpera()?(d=document.body.offsetWidth,e=document.body.offsetHeight):(d=screen.width,e=screen.height);return f.open(a,"","status=no,scrollbars=yes,resizable=yes,width="+
b+",height="+c+",top="+Math.floor((e-c)/2-14)+",left="+Math.floor((d-b)/2-5))},objectSort:function(a,b,c){c="asc"==c?"asc":"desc";var d=[],e;for(e in a)a.hasOwnProperty(e)&&a[e][b]&&d.push([e,a[e][b]]);"asc"==c?d.sort(function(a,b){var c,d;isNaN(a[1])||isNaN(b[1])?(c=a[1].toString().toLowerCase(),d=b[1].toString().toLowerCase()):(c=parseInt(a[1]),d=parseInt(b[1]));return c>d?1:c<d?-1:0}):d.sort(function(a,b){var c,d;isNaN(a[1])||isNaN(b[1])?(c=a[1].toString().toLowerCase(),d=b[1].toString().toLowerCase()):
(c=parseInt(a[1]),d=parseInt(b[1]));return c<d?1:c>d?-1:0});b=[];for(e=0;e<d.length;e++)b.push(a[d[e][0]]);return b},hex2rgb:function(a){a=a.replace(/[# ]/g,"").replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3").match(/.{2}/g);for(var b=0;3>b;b++)a[b]=parseInt(a[b],16);return{r:a[0],g:a[1],b:a[2]}},remove_url_param:function(a,b){if(BX.type.isArray(b))for(var c=0;c<b.length;c++)a=BX.util.remove_url_param(a,b[c]);else a=a.replace(new RegExp("([?&])"+b+"=[^&]*[&]*","i"),"$1");return a},even:function(a){return 0==
parseInt(a)%2?!0:!1},hashCode:function(a){if(!BX.type.isNotEmptyString(a))return 0;for(var b=0,c=0;c<a.length;c++)var d=a.charCodeAt(c),b=(b<<5)-b+d,b=b&b;return b},getRandomString:function(a){a=parseInt(a);if(isNaN(a)||0>=a)a=8;for(var b="",c=0;c<a;c++)b+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(61*Math.random()));return b},number_format:function(a,b,c,d){var e,g,f,k="";b=Math.abs(b);if(isNaN(b)||0>b)b=2;c=c||",";d=d||".";a=(+a||0).toFixed(b);0>a&&(k="-",
a=-a);e=parseInt(a,10)+"";f=(g=3<e.length?e.length%3:0)?e.substr(0,g)+d:"";d=e.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d);a=b?c+Math.abs(a-e).toFixed(b).replace(/-/,"0").slice(2):"";return k+f+d+a}};BX.type={isString:function(a){return""===a?!0:a?"string"==typeof a||a instanceof String:!1},isNotEmptyString:function(a){return BX.type.isString(a)?0<a.length:!1},isBoolean:function(a){return!0===a||!1===a},isNumber:function(a){return 0===a?!0:a?"number"==typeof a||a instanceof Number:!1},isFunction:function(a){return null===
a?!1:"function"==typeof a||a instanceof Function},isElementNode:function(a){return a&&"object"==typeof a&&"nodeType"in a&&1==a.nodeType&&a.tagName&&"SCRIPT"!=a.tagName.toUpperCase()&&"STYLE"!=a.tagName.toUpperCase()&&"LINK"!=a.tagName.toUpperCase()},isDomNode:function(a){return a&&"object"==typeof a&&"nodeType"in a},isArray:function(a){return a&&"[object Array]"==Object.prototype.toString.call(a)},isDate:function(a){return a&&"[object Date]"==Object.prototype.toString.call(a)},isPlainObject:function(a){if(!a||
"object"!==typeof a||a.nodeType)return!1;var b=Object.prototype.hasOwnProperty;try{if(a.constructor&&!b.call(a,"constructor")&&!b.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var d in a);return"undefined"===typeof d||b.call(a,d)}};BX.isNodeInDom=function(a,b){return a===(b||document)?!0:a.parentNode?BX.isNodeInDom(a.parentNode):!1};BX.isNodeHidden=function(a){return a===document?!1:"none"==BX.style(a,"display")?!0:a.parentNode?BX.isNodeHidden(a.parentNode):!0};BX.evalPack=
function(a){for(;0<a.length;){var b=a.shift();if("SCRIPT_EXT"==b.TYPE||"SCRIPT_SRC"==b.TYPE){BX.loadScript(b.DATA,function(){BX.evalPack(a)});break}else"SCRIPT"==b.TYPE&&BX.evalGlobal(b.DATA)}};BX.evalGlobal=function(a){if(a){var b=document.getElementsByTagName("head")[0]||document.documentElement,c=document.createElement("script");c.type="text/javascript";BX.browser.IsIE()?c.text=a:c.appendChild(document.createTextNode(a));b.insertBefore(c,b.firstChild);b.removeChild(c)}};BX.processHTML=function(a,
b){for(var c,d,e,g=[],f=[],k=a;null!==(c=k.match(Y));){var H=k.search(/<\/script>/i);if(-1==H)break;var h=b||"-1"!=c[1].indexOf("bxrunfirst");null!==(d=c[1].match(Z))?g.push({bRunFirst:h,isInternal:!1,JS:d[1]}):(d=c.index+c[0].length,d=k.substr(d,H-d),g.push({bRunFirst:h,isInternal:!0,JS:d}));k=k.substr(0,c.index)+k.substr(H+9)}for(;null!==(c=k.match(ba));)null!==(e=c[0].match(ca))&&0>c[0].indexOf('media="')&&f.push(e[1]),k=k.replace(c[0],"");return{HTML:k,SCRIPT:g,STYLE:f}};BX.garbage=function(a,
b){w.push({callback:a,context:b})};BX.GetDocElement=function(a){a=a||document;return BX.browser.IsDoctype(a)?a.documentElement:a.body};BX.GetContext=function(a){return BX.type.isElementNode(a)?a.ownerDocument.parentWindow||a.ownerDocument.defaultView||f:BX.type.isDomNode(a)?a.parentWindow||a.defaultView||f:f};BX.GetWindowInnerSize=function(a){var b,c;a=a||document;f.innerHeight?(b=BX.GetContext(a).innerWidth,c=BX.GetContext(a).innerHeight):a.documentElement&&(a.documentElement.clientHeight||a.documentElement.clientWidth)?
(b=a.documentElement.clientWidth,c=a.documentElement.clientHeight):a.body&&(b=a.body.clientWidth,c=a.body.clientHeight);return{innerWidth:b,innerHeight:c}};BX.GetWindowScrollPos=function(a){var b,c;a=a||document;f.pageYOffset?(b=BX.GetContext(a).pageXOffset,c=BX.GetContext(a).pageYOffset):a.documentElement&&(a.documentElement.scrollTop||a.documentElement.scrollLeft)?(b=a.documentElement.scrollLeft,c=a.documentElement.scrollTop):a.body&&(b=a.body.scrollLeft,c=a.body.scrollTop);return{scrollLeft:b,
scrollTop:c}};BX.GetWindowScrollSize=function(a){var b,c;a||(a=document);a.compatMode&&"CSS1Compat"==a.compatMode?(b=a.documentElement.scrollWidth,c=a.documentElement.scrollHeight):(c=a.body.scrollHeight>a.body.offsetHeight?a.body.scrollHeight:a.body.offsetHeight,b=a.body.scrollWidth>a.body.offsetWidth||a.compatMode&&"BackCompat"==a.compatMode||a.documentElement&&!a.documentElement.clientWidth?a.body.scrollWidth:a.body.offsetWidth);return{scrollWidth:b,scrollHeight:c}};BX.GetWindowSize=function(a){var b=
this.GetWindowInnerSize(a),c=this.GetWindowScrollPos(a);a=this.GetWindowScrollSize(a);return{innerWidth:b.innerWidth,innerHeight:b.innerHeight,scrollLeft:c.scrollLeft,scrollTop:c.scrollTop,scrollWidth:a.scrollWidth,scrollHeight:a.scrollHeight}};BX.hide_object=function(a){a=BX(a);a.style.position="absolute";a.style.top="-1000px";a.style.left="-1000px";a.style.height="10px";a.style.width="10px"};BX.is_relative=function(a){a=BX.style(a,"position");return"relative"==a||"absolute"==a};BX.is_float=function(a){a=
BX.style(a,"float");return"right"==a||"left"==a};BX.is_fixed=function(a){return"fixed"==BX.style(a,"position")};BX.pos=function(a,b){var c={top:0,right:0,bottom:0,left:0,width:0,height:0};b=!!b;if(!a)return c;if("undefined"==typeof a.getBoundingClientRect||a.ownerDocument!=document||b){for(var d=0,e=0,g=a.offsetWidth,f=a.offsetHeight,k=!0;null!=a&&(k||!b||!BX.is_relative(a));a=a.offsetParent)if(d+=a.offsetLeft,e+=a.offsetTop,k)k=!1;else{var h=parseInt(BX.style(a,"border-left-width")),l=parseInt(BX.style(a,
"border-top-width"));!isNaN(h)&&0<h&&(d+=h);!isNaN(l)&&0<l&&(e+=l)}c.top=e;c.left=d;c.width=g;c.height=f;c.right=c.left+g;c.bottom=c.top+f}else{d={};try{d=a.getBoundingClientRect()}catch(n){d={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight,right:a.offsetLeft+a.offsetWidth,bottom:a.offsetTop+a.offsetHeight}}e=document.documentElement;g=document.body;c.top=d.top+(e.scrollTop||g.scrollTop);c.left=d.left+(e.scrollLeft||g.scrollLeft);c.width=d.right-d.left;c.height=d.bottom-
d.top;c.right=d.right+(e.scrollLeft||g.scrollLeft);c.bottom=d.bottom+(e.scrollTop||g.scrollTop)}for(var m in c)c.hasOwnProperty(m)&&(c[m]=parseInt(c[m]));return c};BX.align=function(a,b,c,d){d=d?d.toLowerCase():"";var e=document;BX.type.isElementNode(a)&&(e=a.ownerDocument,a=BX.pos(a));var g=a.left,f=a.bottom,k=BX.GetWindowScrollPos(e),e=BX.GetWindowInnerSize(e);0>e.innerWidth+k.scrollLeft-(a.left+b)&&(g=0<=a.right-b?a.right-b:k.scrollLeft);if(0>e.innerHeight+k.scrollTop-(a.bottom+c)||~d.indexOf("top"))f=
0<=a.top-c||~d.indexOf("top")?a.top-c:k.scrollTop;return{left:g,top:f}};BX.scrollToNode=function(a){a=BX(a);a.scrollIntoView?a.scrollIntoView(!0):(a=BX.pos(a),f.scrollTo(a.left,a.top))};BX.showWait=function(a,b){a=BX(a)||document.body||document.documentElement;b=b||BX.message("JS_CORE_LOADING");var c=a.id||Math.random(),c=a.bxmsg=document.body.appendChild(BX.create("DIV",{props:{id:"wait_"+c,className:"bx-core-waitwindow"},text:b}));setTimeout(BX.delegate(Q,a),10);return u[u.length]=c};BX.closeWait=
function(a,b){a&&!b&&(b=a.bxmsg);a&&!b&&BX.hasClass(a,"bx-core-waitwindow")&&(b=a);a&&!b&&(b=BX("wait_"+a.id));b||(b=u.pop());if(b&&b.parentNode){for(var c=0,d=u.length;c<d;c++)if(b==u[c]){u=BX.util.deleteFromArray(u,c);break}b.parentNode.removeChild(b);a&&(a.bxmsg=null);BX.cleanNode(b,!0)}};BX.setJSList=function(a){BX.type.isArray(a)&&(B=a)};BX.setCSSList=function(a){BX.type.isArray(a)&&(A=a)};BX.getJSPath=function(a){return a.replace(/\.js(\?\d*)/,".js").replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};
BX.getCSSPath=function(a){return a.replace(/\.css(\?\d*)/,".css").replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};BX.getCDNPath=function(a){return a};BX.loadScript=function(a,b,c){if(BX.isReady){c=c||document;BX.type.isString(a)&&(a=[a]);var d=function(e){if(e>=a.length)return b&&BX.type.isFunction(b)?b():null;if(a[e]){var f=BX.getJSPath(a[e]);if(T(f))d(++e);else{var k=c.getElementsByTagName("head")[0]||c.documentElement,h=c.createElement("script");h.src=a[e];var l=!1;h.onload=h.onreadystatechange=function(){l||
h.readyState&&"loaded"!=h.readyState&&"complete"!=h.readyState||(l=!0,setTimeout(function(){d(++e)},50),h.onload=h.onreadystatechange=null,k&&h.parentNode&&k.removeChild(h))};B.push(f);return k.insertBefore(h,k.firstChild)}}else d(++e)};d(0)}else{var e=arguments;BX.ready(function(){BX.loadScript.apply(this,e)})}};BX.loadCSS=function(a,b,c){if(!BX.isReady){var d=arguments;BX.ready(function(){BX.loadCSS.apply(this,d)});return null}var e=!1;BX.type.isString(a)&&(e=!0,a=[a]);var g=0,h=a.length,k=null,
l=[];if(0==h)return null;b=b||document;c=c||f;if(!c.bxhead&&(g=b.getElementsByTagName("HEAD"),c.bxhead=g[0],!c.bxhead))return null;for(g=0;g<h;g++){var m=BX.getCSSPath(a[g]);if(!R(m)){k=document.createElement("LINK");k.href=a[g];k.rel="stylesheet";k.type="text/css";var n=S(c.bxhead);null!==n?n.parentNode.insertBefore(k,n):c.bxhead.appendChild(k);l.push(k);A.push(m)}}return e?k:l};BX.reload=function(a,b){!0===a&&(b=!0,a=null);var c=a||top.location.href,d=c.indexOf("#"),e="";-1!=d&&(e=c.substr(d),c=
c.substr(0,d));b&&0>c.indexOf("clear_cache=Y")&&(c+=(-1==c.indexOf("?")?"?":"&")+"clear_cache=Y");e&&(b&&("view/"==e.substr(0,5)||"#view/"==e.substr(0,6))&&0>e.indexOf("clear_cache%3DY")&&(e+=(-1==e.indexOf("%3F")?"%3F":"%26")+"clear_cache%3DY"),c=c.replace(/(\?|\&)_r=[\d]*/,""),c+=(-1==c.indexOf("?")?"?":"&")+"_r="+Math.round(1E4*Math.random())+e);top.location.href=c};BX.clearCache=function(){BX.showWait();BX.reload(!0)};BX.template=function(a,b,c){BX.ready(function(){var d=BX(a);if(d){c&&d.parentNode.removeChild(d);
for(var e={},g=BX.findChildren(d,{attribute:"data-role"},!0),f=0,k=g.length;f<k;f++)e[g[f].getAttribute("data-role")]=g[f];b.apply(d,[e])}})};BX.isAmPmMode=function(){return null==BX.message("FORMAT_DATETIME").match("T")?!1:!0};BX.formatDate=function(a,b){a=a||new Date;var c=a.getHours()||a.getMinutes()||a.getSeconds();return(b?b:c?BX.message("FORMAT_DATETIME"):BX.message("FORMAT_DATE")).replace(/YYYY/ig,a.getFullYear()).replace(/MMMM/ig,BX.util.str_pad_left((a.getMonth()+1).toString(),2,"0")).replace(/MM/ig,
BX.util.str_pad_left((a.getMonth()+1).toString(),2,"0")).replace(/DD/ig,BX.util.str_pad_left(a.getDate().toString(),2,"0")).replace(/HH/ig,BX.util.str_pad_left(a.getHours().toString(),2,"0")).replace(/MI/ig,BX.util.str_pad_left(a.getMinutes().toString(),2,"0")).replace(/SS/ig,BX.util.str_pad_left(a.getSeconds().toString(),2,"0"))};BX.getNumMonth=function(a){var b="jan feb mar apr may jun jul aug sep oct nov dec".split(" "),c="january february march april may june july august september october november december".split(" "),
d=a.toUpperCase();for(l=1;12>=l;l++)if(d==BX.message("MON_"+l).toUpperCase()||d==BX.message("MONTH_"+l).toUpperCase()||d==b[l-1].toUpperCase()||d==c[l-1].toUpperCase())return l;return a};BX.parseDate=function(a){if(BX.type.isNotEmptyString(a)){for(var b="",c=1;12>=c;c++)b=b+"|"+BX.message("MON_"+c);var d=a.match(new RegExp("([0-9]+|[a-z]+"+b+")","ig")),e=BX.message("FORMAT_DATE").match(/(DD|MI|MMMM|MM|M|YYYY)/ig),c,f,b=[],h=[];a={};if(!d)return null;d.length>e.length&&(e=BX.message("FORMAT_DATETIME").match(/(DD|MI|MMMM|MM|M|YYYY|HH|H|SS|TT|T|GG|G)/ig));
c=0;for(f=d.length;c<f;c++)""!=BX.util.trim(d[c])&&(b[b.length]=d[c]);c=0;for(f=e.length;c<f;c++)""!=BX.util.trim(e[c])&&(h[h.length]=e[c]);c=BX.util.array_search("MMMM",h);0<c?(b[c]=BX.getNumMonth(b[c]),h[c]="MM"):(c=BX.util.array_search("M",h),0<c&&(b[c]=BX.getNumMonth(b[c]),h[c]="MM"));c=0;for(f=h.length;c<f;c++)d=h[c].toUpperCase(),a[d]="T"==d||"TT"==d?b[c]:parseInt(b[c],10);if(0<a.DD&&0<a.MM&&0<a.YYYY)return c=new Date,c.setDate(1),c.setFullYear(a.YYYY),c.setMonth(a.MM-1),c.setDate(a.DD),c.setHours(0,
0,0),isNaN(a.HH)&&isNaN(a.GG)&&isNaN(a.H)&&isNaN(a.G)||isNaN(a.MI)||(isNaN(a.H)&&isNaN(a.G)?a.HH=parseInt(a.HH||a.GG||0,10):(b="PM"==(a.T||a.TT||"am").toUpperCase(),h=parseInt(a.H||a.G||0,10),a.HH=b?h+(12==h?0:12):12>h?h:0),isNaN(a.SS)&&(a.SS=0),c.setHours(a.HH,a.MI,a.SS)),c}return null};BX.selectUtils={addNewOption:function(a,b,c,d,e){if(a=BX(a)){var f=a.length;if(!1!==e)for(e=0;e<f;e++)if(a[e].value==b)return;b=new Option(c,b,!1,!1);a.options[f]=b}!0===d&&this.sortSelect(a)},deleteOption:function(a,
b){if(a=BX(a))for(var c=0;c<a.length;c++)if(a[c].value==b){a.remove(c);break}},deleteSelectedOptions:function(a){if(a=BX(a))for(var b=0;b<a.length;)a[b].selected?(a[b].selected=!1,a.remove(b)):b++},deleteAllOptions:function(a){if(a=BX(a))for(var b=a.length-1;0<=b;b--)a.remove(b)},optionCompare:function(a,b){var c=a.optText.toLowerCase(),d=b.optText.toLowerCase();return c>d?1:c<d?-1:0},sortSelect:function(a){if(a=BX(a)){for(var b=[],c=a.options.length,d=0,d=0;d<c;d++)b[d]={optText:a[d].text,optValue:a[d].value};
b.sort(this.optionCompare);a.length=0;c=b.length;for(d=0;d<c;d++)a[d]=new Option(b[d].optText,b[d].optValue,!1,!1)}},selectAllOptions:function(a){if(a=BX(a))for(var b=a.length,c=0;c<b;c++)a[c].selected=!0},selectOption:function(a,b){if(a=BX(a))for(var c=a.length,d=0;d<c;d++)a[d].selected=a[d].value==b},addSelectedOptions:function(a,b,c,d){if(a=BX(a))for(var e=a.length,f=0;f<e;f++)a[f].selected&&this.addNewOption(b,a[f].value,a[f].text,d,c)},moveOptionsUp:function(a){if(a=BX(a))for(var b=a.length,
c=0;c<b;c++)if(a[c].selected&&0<c&&0==a[c-1].selected){var d=new Option(a[c].text,a[c].value),e=new Option(a[c-1].text,a[c-1].value);a[c]=e;a[c].selected=!1;a[c-1]=d;a[c-1].selected=!0}},moveOptionsDown:function(a){if(a=BX(a))for(var b=a.length,c=b-1;0<=c;c--)if(a[c].selected&&c<b-1&&0==a[c+1].selected){var d=new Option(a[c].text,a[c].value),e=new Option(a[c+1].text,a[c+1].value);a[c]=e;a[c].selected=!1;a[c+1]=d;a[c+1].selected=!0}}};BX.getEventTarget=function(a){return a.target?a.target:a.srcElement?
a.srcElement:null};BX.hint=function(a,b,c,d){null==c&&(c=b,b="");null==a.BXHINT&&(a.BXHINT=new BX.CHint({parent:a,hint:c,title:b,id:d}),a.BXHINT.Show())};BX.hint_replace=function(a,b,c){null==c&&(c=b,b="");if(!a||!a.parentNode||!c)return null;b=new BX.CHint({hint:c,title:b});b.CreateParent();a.parentNode.insertBefore(b.PARENT,a);a.parentNode.removeChild(a);b.PARENT.style.marginLeft="5px";return a};BX.CHint=function(a){this.PARENT=BX(a.parent);this.HINT=a.hint;this.HINT_TITLE=a.title;this.PARAMS={};
for(var b in this.defaultSettings)this.PARAMS[b]=null==a[b]?this.defaultSettings[b]:a[b];null!=a.id&&(this.ID=a.id);this.timer=null;this.bInited=!1;this.msover=!0;this.PARAMS.showOnce?(this.__show(),this.msover=!1,this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)):this.PARENT&&(BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this)),BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this)));BX.addCustomEvent("onMenuOpen",BX.delegate(this.disable,this));BX.addCustomEvent("onMenuClose",
BX.delegate(this.enable,this))};BX.CHint.prototype.defaultSettings={show_timeout:1E3,hide_timeout:500,dx:2,showOnce:!1,preventHide:!0,min_width:250};BX.CHint.prototype.CreateParent=function(a,b){this.PARENT&&(BX.unbind(this.PARENT,"mouseover",BX.proxy(this.Show,this)),BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this)));b||(b={});var c="icon";!b.type||"link"!=b.type&&"icon"!=b.type||(c=b.type);a&&(c="element");"icon"==c?a=BX.create("IMG",{props:{src:b.iconSrc?b.iconSrc:"/bitrix/js/main/core/images/hint.gif"}}):
"link"==c&&(a=BX.create("A",{props:{href:"javascript:void(0)"},html:"[?]"}));this.PARENT=a;BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this));return this.PARENT};BX.CHint.prototype.Show=function(){this.msover=!0;null!=this.timer&&clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),this.PARAMS.show_timeout)};BX.CHint.prototype.Hide=function(){this.msover=!1;null!=this.timer&&clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__hide,
this),this.PARAMS.hide_timeout)};BX.CHint.prototype.__show=function(){this.msover&&!this.disabled&&(this.bInited||this.Init(),this.prepareAdjustPos()&&(this.DIV.style.display="block",this.adjustPos(),BX.bind(f,"scroll",BX.proxy(this.__onscroll,this)),this.PARAMS.showOnce&&(this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout))))};BX.CHint.prototype.__onscroll=function(){BX.admin&&BX.admin.panel&&BX.admin.panel.isFixed()&&(this.scrollTimer&&clearTimeout(this.scrollTimer),this.DIV.style.display=
"none",this.scrollTimer=setTimeout(BX.proxy(this.Reopen,this),this.PARAMS.show_timeout))};BX.CHint.prototype.Reopen=function(){null!=this.timer&&clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),50)};BX.CHint.prototype.__hide=function(){!this.msover&&this.bInited&&(BX.unbind(f,"scroll",BX.proxy(this.Reopen,this)),this.PARAMS.showOnce?this.Destroy():this.DIV.style.display="none")};BX.CHint.prototype.__hide_immediately=function(){this.msover=!1;this.__hide()};BX.CHint.prototype.Init=
function(){this.DIV=document.body.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip"},style:{display:"none"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-top-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'}),this.CONTENT=BX.create("DIV",{props:{className:"bx-panel-tooltip-content"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay"},
children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay-bg"}})]})]}),BX.create("DIV",{props:{className:"bx-panel-tooltip-bottom-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'})]}));this.ID&&this.CONTENT.insertBefore(BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-panel-tooltip-close"},events:{click:BX.delegate(this.Close,
this)}}),this.CONTENT.firstChild);this.HINT_TITLE&&this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-title"},text:this.HINT_TITLE}));this.HINT&&(this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT})));this.PARAMS.preventHide&&(BX.bind(this.DIV,"mouseout",BX.proxy(this.Hide,this)),BX.bind(this.DIV,"mouseover",BX.proxy(this.Show,this)));this.bInited=!0};BX.CHint.prototype.setContent=
function(a){this.HINT=a;this.CONTENT_TEXT?this.CONTENT_TEXT.innerHTML=this.HINT:this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT}))};BX.CHint.prototype.prepareAdjustPos=function(){this._wnd={scrollPos:BX.GetWindowScrollPos(),scrollSize:BX.GetWindowScrollSize()};return"none"!=BX.style(this.PARENT,"display")};BX.CHint.prototype.getAdjustPos=function(){var a={},b=BX.pos(this.PARENT),c=0;a.top=b.bottom+
this.PARAMS.dx;BX.admin&&BX.admin.panel.DIV&&(c=BX.admin.panel.DIV.offsetHeight+this.PARAMS.dx,BX.admin.panel.isFixed()&&(c+=this._wnd.scrollPos.scrollTop));a.top<c?a.top=c:a.top+this.DIV.offsetHeight>this._wnd.scrollSize.scrollHeight&&(a.top=b.top-this.PARAMS.dx-this.DIV.offsetHeight);a.left=b.left;b.left<this.PARAMS.dx?b.left=this.PARAMS.dx:(b=this._wnd.scrollSize.scrollWidth-this.DIV.offsetWidth-this.PARAMS.dx,a.left>b&&(a.left=b));return a};BX.CHint.prototype.adjustWidth=function(){if(!this.bWidthAdjusted){var a=
this.DIV.offsetWidth,b=this.DIV.offsetHeight;a>this.PARAMS.min_width&&(a=Math.round(Math.sqrt(1.618*a*b)));a<this.PARAMS.min_width&&(a=this.PARAMS.min_width);this.DIV.style.width=a+"px";this._adjustWidthInt&&clearInterval(this._adjustWidthInt);this._adjustWidthInt=setInterval(BX.delegate(this._adjustWidthInterval,this),5);this.bWidthAdjusted=!0}};BX.CHint.prototype._adjustWidthInterval=function(){this.DIV&&"none"!=this.DIV.style.display||clearInterval(this._adjustWidthInt);var a=this.DIV.offsetWidth,
b=this.CONTENT_TEXT.offsetWidth;0<a&&0<b&&20>a-b&&1500>a?this.DIV.style.width=a+20+"px":clearInterval(this._adjustWidthInt)};BX.CHint.prototype.adjustPos=function(){this.adjustWidth();var a=this.getAdjustPos();this.DIV.style.top=a.top+"px";this.DIV.style.left=a.left+"px"};BX.CHint.prototype.Close=function(){this.ID&&BX.WindowManager&&BX.WindowManager.saveWindowOptions(this.ID,{display:"off"});this.__hide_immediately();this.Destroy()};BX.CHint.prototype.Destroy=function(){this.PARENT&&(BX.unbind(this.PARENT,
"mouseover",BX.proxy(this.Show,this)),BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this)));this.DIV&&(BX.unbind(this.DIV,"mouseover",BX.proxy(this.Show,this)),BX.unbind(this.DIV,"mouseout",BX.proxy(this.Hide,this)),BX.cleanNode(this.DIV,!0))};BX.CHint.prototype.enable=function(){this.disabled=!1};BX.CHint.prototype.disable=function(){this.__hide_immediately();this.disabled=!0};document.addEventListener?x=function(){document.removeEventListener("DOMContentLoaded",x,!1);s()}:document.attachEvent&&
(x=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",x),s())});f.attachEvent?f.attachEvent("onunload",F):f.addEventListener?f.addEventListener("unload",F,!1):f.onunload=F;BX(BX.DoNothing);f.BX=BX;BX.browser.addGlobalClass();BX.browser.addGlobalFeatures("boxShadow borderRadius flexWrap boxDirection transition transform".split(" "))}})(window);
/* End */
;
; /* Start:/bitrix/js/main/core/core_ajax.js*/
(function(h){if(!h.BX.ajax){var b=h.BX,n={},r={method:"GET",dataType:"html",timeout:0,async:!0,processData:!0,scriptsRunFirst:!1,emulateOnload:!0,skipAuthCheck:!1,start:!0,cache:!0,preparePost:!0,headers:!1,lsTimeout:30,lsForce:!1},l=null,p={},t=/[^\034-\254]+/g,v=/\/bitrix\/js\/main\/core\/core(_ajax)*.js$/i,w=/\/bitrix\/js\/main\/core\/core_window.js$/i,x=/\/bitrix\/js\/main\/core\/core_admin.js$/i,y=/window.onload/g;b.ajax=function(a){var c;if(!a||!a.url||!b.type.isString(a.url))return!1;for(var d in n)"undefined"==
typeof a[d]&&(a[d]=n[d]);n={};for(d in r)"undefined"==typeof a[d]&&(a[d]=r[d]);a.method=a.method.toUpperCase();b.localStorage||(a.lsId=null);if(b.browser.IsIE()&&(d=t.exec(a.url))){do a.url=a.url.replace(d,b.util.urlencode(d)),d=t.exec(a.url);while(d)}"json"==a.dataType&&(a.emulateOnload=!1);a.cache||"GET"!=a.method||(a.url=b.ajax._uncache(a.url));"POST"==a.method&&a.preparePost&&(a.data=b.ajax.prepareData(a.data));d=!0;if(a.lsId&&!a.lsForce){var f=b.localStorage.get("ajax-"+a.lsId);if(null!==f){d=
!1;var e=function(c){if(c.key=="ajax-"+a.lsId&&"BXAJAXWAIT"!=c.value){var d=c.value;if(!c.oldValue||null!=d)b.ajax.__run(a,d);else if(a.onfailure)a.onfailure("timeout");b.removeCustomEvent("onLocalStorageChange",e)}};"BXAJAXWAIT"==f?b.addCustomEvent("onLocalStorageChange",e):setTimeout(function(){e({key:"ajax-"+a.lsId,value:f})},10)}}if(d&&(a.xhr=b.ajax.xhr(),a.xhr)){a.lsId&&b.localStorage.set("ajax-"+a.lsId,"BXAJAXWAIT",a.lsTimeout);a.xhr.open(a.method,a.url,a.async);a.skipBxHeader||b.ajax.isCrossDomain(a.url)||
a.xhr.setRequestHeader("Bx-ajax","true");"POST"==a.method&&a.preparePost&&a.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if("object"==typeof a.headers)for(d=0;d<a.headers.length;d++)a.xhr.setRequestHeader(a.headers[d].name,a.headers[d].value);var g=!1,m=a.xhr.onreadystatechange=function(d){if(!g)if("timeout"===d){if(a.onfailure)a.onfailure("timeout");b.onCustomEvent(a.xhr,"onAjaxFailure",["timeout","",a]);a.xhr.onreadystatechange=b.DoNothing;a.xhr.abort();a.async&&(a.xhr=
null)}else if(4==a.xhr.readyState||"run"==d){c=b.ajax.xhrSuccess(a.xhr)?"success":"error";g=!0;a.xhr.onreadystatechange=b.DoNothing;if("success"==c)if((d=a.skipAuthCheck||b.ajax.isCrossDomain(a.url)?!1:a.xhr.getResponseHeader("X-Bitrix-Ajax-Status"))&&"Authorize"==d){if(a.onfailure)a.onfailure("auth",a.xhr.status);b.onCustomEvent(a.xhr,"onAjaxFailure",["auth",a.xhr.status,a])}else d=a.xhr.responseText,a.lsId&&b.localStorage.set("ajax-"+a.lsId,d,a.lsTimeout),b.ajax.__run(a,d);else{if(a.onfailure)a.onfailure("status",
a.xhr.status);b.onCustomEvent(a.xhr,"onAjaxFailure",["status",a.xhr.status,a])}a.async&&(a.xhr=null)}};a.async&&0<a.timeout&&setTimeout(function(){a.xhr&&!g&&m("timeout")},1E3*a.timeout);a.start&&(a.xhr.send(a.data),a.async||m("run"));return a.xhr}};b.ajax.xhr=function(){if(h.XMLHttpRequest)try{return new XMLHttpRequest}catch(a){}else if(h.ActiveXObject){try{return new h.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(b){}try{return new h.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(d){}try{return new h.ActiveXObject("Msxml2.XMLHTTP")}catch(f){}try{return new h.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw Error("This browser does not support XMLHttpRequest.");
}return null};b.ajax.isCrossDomain=function(a,c){c=c||h.location;0===a.indexOf("//")&&(a=c.protocol+a);if(0!==a.indexOf("http"))return!1;var d=h.document.createElement("a");d.href=a;return d.protocol!==c.protocol||d.hostname!==c.hostname||b.ajax.getHostPort(d.protocol,d.host)!==b.ajax.getHostPort(c.protocol,c.host)};b.ajax.getHostPort=function(a,b){var d=/:(\d+)$/.exec(b);return d?d[1]:"http:"===a?"80":"https:"===a?"443":""};b.ajax.__prepareOnload=function(a){if(0<a.length){b.ajax["onload_"+l]=null;
for(var c=0,d=a.length;c<d;c++)a[c].isInternal&&(a[c].JS=a[c].JS.replace(y,"BX.ajax.onload_"+l))}b.CaptureEventsGet();b.CaptureEvents(h,"load")};b.ajax.__runOnload=function(){null!=b.ajax["onload_"+l]&&(b.ajax["onload_"+l].apply(h),b.ajax["onload_"+l]=null);var a=b.CaptureEventsGet();if(a)for(var c=0;c<a.length;c++)a[c].apply(h)};b.ajax.__run=function(a,c){if(a.processData)b.ajax.processRequestData(c,a);else{if(a.onsuccess)a.onsuccess(c);b.onCustomEvent(a.xhr,"onAjaxSuccess",[c,a])}};b.ajax._onParseJSONFailure=
function(a){this.jsonFailure=!0;this.jsonResponse=a;this.jsonProactive=/^\[WAF\]/.test(a)};b.ajax.processRequestData=function(a,c){var d,f=[],e=[];switch(c.dataType.toUpperCase()){case "JSON":b.addCustomEvent(c.xhr,"onParseJSONFailure",b.proxy(b.ajax._onParseJSONFailure,c));d=b.parseJSON(a,c.xhr);b.removeCustomEvent(c.xhr,"onParseJSONFailure",b.proxy(b.ajax._onParseJSONFailure,c));break;case "SCRIPT":f.push({isInternal:!0,JS:a,bRunFirst:c.scriptsRunFirst});c.processScriptsConsecutive=!0;d=a;break;
default:e=b.processHTML(a,c.scriptsRunFirst),d=e.HTML,f=e.SCRIPT,e=e.STYLE}var g=!1;null==l&&(l=parseInt(1E6*Math.random()),g=!0);0<e.length&&b.loadCSS(e);c.emulateOnload&&b.ajax.__prepareOnload(f);e=b.DoNothing;if(c.emulateOnload||g)e=b.defer(function(){c.emulateOnload&&b.ajax.__runOnload();g&&(l=null);b.onCustomEvent(c.xhr,"onAjaxSuccessFinish",[c])});try{if(c.jsonFailure)throw{type:"json_failure",data:c.jsonResponse,bProactive:c.jsonProactive};c.scripts=f;b.ajax.processScripts(c.scripts,!0);if(c.onsuccess)c.onsuccess(d);
b.onCustomEvent(c.xhr,"onAjaxSuccess",[d,c]);c.processScriptsConsecutive?(b.ajax.processScriptsConsecutive(c.scripts,!1),e()):b.ajax.processScripts(c.scripts,!1,e)}catch(m){if(c.onfailure)c.onfailure("processing",m);b.onCustomEvent(c.xhr,"onAjaxFailure",["processing",m,c])}};b.ajax.processScripts=function(a,c,d){var f=[],e="";d=d||b.DoNothing;for(var g=0,m=a.length;g<m;g++)if("undefined"==typeof c||c==!!a[g].bRunFirst)a[g].isInternal?e+=";"+a[g].JS:f.push(a[g].JS);var f=b.util.array_unique(f),h=a=
f.length,k=0<e.length?function(){b.evalGlobal(e)}:b.DoNothing;if(0<a)for(c=function(){0>=--h&&(k(),d(),k=b.DoNothing)},g=0;g<a;g++)b.loadScript(f[g],c);else k(),d()};b.ajax.processScriptsConsecutive=function(a,c){for(var d=0,f=a.length;d<f;d++)if(null==c||c==!!a[d].bRunFirst)a[d].isInternal?b.evalGlobal(a[d].JS):b.ajax.loadScriptAjax([a[d].JS])};b.ajax.prepareData=function(a,c){var d="";if(b.type.isString(a))d=a;else if(null!=a)for(var f in a)if(a.hasOwnProperty(f)){0<d.length&&(d+="&");var e=b.util.urlencode(f);
c&&(e=c+"["+e+"]");d="object"==typeof a[f]?d+b.ajax.prepareData(a[f],e):d+(e+"="+b.util.urlencode(a[f]))}return d};b.ajax.xhrSuccess=function(a){return 200<=a.status&&300>a.status||304===a.status||1223===a.status||0===a.status};b.ajax.Setup=function(a,b){b=!!b;for(var d in a)b?n[d]=a[d]:r[d]=a[d]};b.ajax.replaceLocalStorageValue=function(a,c,d){b.localStorage&&b.localStorage.set("ajax-"+a,c,d)};b.ajax._uncache=function(a){return a+((-1!==a.indexOf("?")?"&":"?")+"_="+(new Date).getTime())};b.ajax.get=
function(a,c,d){b.type.isFunction(c)&&(d=c,c="");(c=b.ajax.prepareData(c))&&(a+=(-1!==a.indexOf("?")?"&":"?")+c);return b.ajax({method:"GET",dataType:"html",url:a,data:"",onsuccess:d})};b.ajax.getCaptcha=function(a){return b.ajax.loadJSON("http://webunicom.ru/bitrix/tools/ajax_captcha.php",a)};b.ajax.insertToNode=function(a,c){if(c=b(c)){b.onCustomEvent("onAjaxInsertToNode",[{url:a,node:c}]);var d=null;n.denyShowWait||(d=b.showWait(c),delete n.denyShowWait);return b.ajax.get(a,function(a){c.innerHTML=a;b.closeWait(c,
d)})}};b.ajax.post=function(a,c,d){c=b.ajax.prepareData(c);return b.ajax({method:"POST",dataType:"html",url:a,data:c,onsuccess:d})};b.ajax.loadScriptAjax=function(a,c,d){if(b.type.isArray(a))for(var f=0,e=a.length;f<e;f++)b.ajax.loadScriptAjax(a[f],c,d);else{var g=a.replace(/\.js\?.*/,".js");if(!(v.test(g)||w.test(g)&&b.CWindow||x.test(g)&&b.admin)){if("undefined"==typeof p[g])return d?(p[g]="",b.loadScript(a)):b.ajax({url:a,method:"GET",dataType:"script",processData:!0,emulateOnload:!1,scriptsRunFirst:!0,
async:!1,start:!0,onsuccess:function(a){p[g]=a;c&&c(a)}});c&&c(p[g])}}};b.ajax.loadJSON=function(a,c,d,f){b.type.isFunction(c)&&(f=d,d=c,c="");(c=b.ajax.prepareData(c))&&(a+=(-1!==a.indexOf("?")?"&":"?")+c);return b.ajax({method:"GET",dataType:"json",url:a,onsuccess:d,onfailure:f})};b.ajax.load=function(a,c){b.type.isArray(a)||(a=[a]);var d=0;b.type.isFunction(c)||(c=b.DoNothing);for(var f=function(a){b.type.isFunction(this.callback)&&this.callback(a);++d>=g&&c()},e=0,g=a.length;e<g;e++)switch(a[e].type.toUpperCase()){case "SCRIPT":b.loadScript([a[e].url],
b.proxy(f,a[e]));break;case "CSS":b.loadCSS([a[e].url]);++d>=g&&c();break;case "JSON":b.ajax.loadJSON(a[e].url,b.proxy(f,a[e]));break;default:b.ajax.get(a[e].url,"",b.proxy(f,a[e]))}};b.ajax.submit=function(a,c){if(!a.target){if(null==a.BXFormTarget){var d="formTarget_"+Math.random();a.BXFormTarget=document.body.appendChild(b.create("IFRAME",{props:{name:d,id:d,src:"javascript:void(0)"},style:{display:"none"}}))}a.target=a.BXFormTarget.name}a.BXFormCallback=c;b.bind(a.BXFormTarget,"load",b.proxy(b.ajax._submit_callback,
a));b.submit(a);return!1};b.ajax.submitComponentForm=function(a,c,d){if(!a.target){if(null==a.BXFormTarget){var f="formTarget_"+Math.random();a.BXFormTarget=document.body.appendChild(b.create("IFRAME",{props:{name:f,id:f,src:"javascript:void(0)"},style:{display:"none"}}))}a.target=a.BXFormTarget.name}if(d)var e=b.showWait(c);a.BXFormCallback=function(a){d&&b.closeWait(e);b(c).innerHTML=a;b.onCustomEvent("onAjaxSuccess",[null,null,function(){h.bxcompajaxframeonload&&setTimeout(function(){h.bxcompajaxframeonload();
h.bxcompajaxframeonload=null},10)}])};b.bind(a.BXFormTarget,"load",b.proxy(b.ajax._submit_callback,a));return!0};b.ajax._submit_callback=function(){try{if(0!=this.BXFormTarget.contentWindow.location.href.indexOf("http"))return}catch(a){return}this.BXFormCallback&&this.BXFormCallback.apply(this,[this.BXFormTarget.contentWindow.document.body.innerHTML]);b.unbindAll(this.BXFormTarget)};b.ajax.prepareForm=function(a,b){b=b?b:{};var d,f,e,g=[],h=a.elements.length,u=0,k=0;if(a){for(d=0;d<h;d++)if(e=a.elements[d],
!e.disabled)switch(e.type.toLowerCase()){case "text":case "textarea":case "password":case "hidden":case "select-one":g.push({name:e.name,value:e.value});k+=e.name.length+e.value.length;break;case "file":if(e.files)for(f=0;f<e.files.length;f++)u++,g.push({name:e.name,value:e.files[f],file:!0}),k+=e.files[f].size;break;case "radio":case "checkbox":e.checked&&(g.push({name:e.name,value:e.value}),k+=e.name.length+e.value.length);break;case "select-multiple":for(f=0;f<e.options.length;f++)e.options[f].selected&&
(g.push({name:e.name,value:e.options[f].value}),k+=e.name.length+e.options[f].length)}k=d=0;for(e=b;d<g.length;)if(f=g[d].name.indexOf("["),-1==f)e[g[d].name]=g[d].value,e=b,d++;else{h=g[d].name.substring(0,f);f=g[d].name.substring(f+1);e[h]||(e[h]=[]);var q=f.indexOf("]");-1==q?(e=b,d++):0==q?(e=e[h],g[d].name=""+e.length):(e=e[h],g[d].name=f.substring(0,q)+f.substring(q+1))}}return{data:b,filesCount:u,roughSize:k}};b.ajax.submitAjax=function(a,c){c=c&&"object"==typeof c?c:{};c.url=c.url||a.getAttribute("action");
c.data=b.ajax.prepareForm(a).data;if(h.FormData){var d=function(a,b,c){if(c&&"object"==typeof c)for(var e in c)c.hasOwnProperty(e)&&d(a,""==b?e:b+"["+e+"]",c[e]);else a.append(b,c?c:"")},f=function(a){var c={};if(null!=a)if("object"==typeof a)for(var d in a){if(a.hasOwnProperty(d)){var e=b.util.urlencode(d);c[e]="object"==typeof a[d]&&!0!==a[d].file?f(a[d]):b.util.urlencode(a[d])}}else c=b.util.urlencode(a);return c},e=new h.FormData;"POST"!==c.method?(c.data=b.ajax.prepareData(c.data),c.data&&(c.url+=
(-1!==c.url.indexOf("?")?"&":"?")+c.data,c.data="")):(!0===c.preparePost&&(c.data=f(c.data)),d(e,"",c.data),c.data=e);c.preparePost=!1;c.start=!1;var g=b.ajax(c);c.onprogress&&g.upload.addEventListener("progress",function(a){var b=null;a.lengthComputable&&(a.total||a.totalSize)&&(b=100*a.loaded/(a.total||a.totalSize));c.onprogress(a,b)});g.send(e)}else b.ajax(c)};b.ajax.UpdatePageData=function(a){a.TITLE&&b.ajax.UpdatePageTitle(a.TITLE);(a.WINDOW_TITLE||a.TITLE)&&b.ajax.UpdateWindowTitle(a.WINDOW_TITLE||
a.TITLE);a.NAV_CHAIN&&b.ajax.UpdatePageNavChain(a.NAV_CHAIN);a.CSS&&0<a.CSS.length&&b.loadCSS(a.CSS);if(a.SCRIPTS&&0<a.SCRIPTS.length){var c=function(d,e,g){if(e&&b.type.isArray(e.scripts))for(d=0,g=a.SCRIPTS.length;d<g;d++)e.scripts.push({isInternal:!1,JS:a.SCRIPTS[d]});else b.loadScript(a.SCRIPTS,g);b.removeCustomEvent("onAjaxSuccess",c)};b.addCustomEvent("onAjaxSuccess",c)}else{var d=function(a,c,g){b.type.isFunction(g)&&g();b.removeCustomEvent("onAjaxSuccess",d)};b.addCustomEvent("onAjaxSuccess",
d)}};b.ajax.UpdatePageTitle=function(a){var c=b("pagetitle");c&&(c.removeChild(c.firstChild),c.firstChild?c.insertBefore(document.createTextNode(a),c.firstChild):c.appendChild(document.createTextNode(a)))};b.ajax.UpdateWindowTitle=function(a){document.title=a};b.ajax.UpdatePageNavChain=function(a){var c=b("navigation");c&&(c.innerHTML=a)};b.userOptions={options:null,bSend:!1,delay:5E3};b.userOptions.save=function(a,c,d,f,e){null==b.userOptions.options&&(b.userOptions.options={});b.userOptions.options[a+
"."+c+"."+d]=[a,c,d,f,!!e];a=b.userOptions.__get();""!=a&&(document.cookie=b.message("COOKIE_PREFIX")+"_LAST_SETTINGS="+a+"&sessid="+b.bitrix_sessid()+"; expires=Thu, 31 Dec 2020 23:59:59 GMT; path=/;");b.userOptions.bSend||(b.userOptions.bSend=!0,setTimeout(function(){b.userOptions.send(null)},b.userOptions.delay))};b.userOptions.send=function(a){var c=b.userOptions.__get();b.userOptions.options=null;b.userOptions.bSend=!1;""!=c&&(document.cookie=b.message("COOKIE_PREFIX")+"_LAST_SETTINGS=; path=/;",
b.ajax({method:"GET",dataType:"html",processData:!1,cache:!1,url:"/bitrix/admin/user_options.php?"+c+"&sessid="+b.bitrix_sessid(),onsuccess:a}))};b.userOptions.del=function(a,c,d,f){b.ajax.get("http://webunicom.ru/bitrix/admin/user_options.php?action=delete&amp;c="+a+"&n="+c+(1==d?"&common=Y":"")+"&sessid="+b.bitrix_sessid(),f)};b.userOptions.__get=function(){if(!b.userOptions.options)return"";var a="",c=-1,d="",f,e;for(e in b.userOptions.options)b.userOptions.options.hasOwnProperty(e)&&(f=b.userOptions.options[e],d!=f[0]+
"."+f[1]&&(c++,a+="&p["+c+"][c]="+b.util.urlencode(f[0]),a+="&p["+c+"][n]="+b.util.urlencode(f[1]),1==f[4]&&(a+="&p["+c+"][d]=Y"),d=f[0]+"."+f[1]),a+="&p["+c+"][v]["+b.util.urlencode(f[2])+"]="+b.util.urlencode(f[3]));return a.substr(1)};b.ajax.history={expected_hash:"",obParams:null,obFrame:null,obImage:null,obTimer:null,bInited:!1,bHashCollision:!1,bPushState:!(!history.pushState||!b.type.isFunction(history.pushState)),startState:null,init:function(a){b.ajax.history.bInited||(this.obParams=a,a=
this.obParams.getState(),b.ajax.history.bPushState?(b.ajax.history.expected_hash=h.location.pathname,h.location.search&&(b.ajax.history.expected_hash+=h.location.search),b.ajax.history.put(a,b.ajax.history.expected_hash,"",!0),setTimeout(function(){b.bind(h,"popstate",b.ajax.history.__hashListener)},500)):(b.ajax.history.expected_hash=h.location.hash,b.ajax.history.expected_hash&&"#"!=b.ajax.history.expected_hash||(b.ajax.history.expected_hash="__bx_no_hash__"),s.put(b.ajax.history.expected_hash,
a),b.ajax.history.obTimer=setTimeout(b.ajax.history.__hashListener,500),b.browser.IsIE()?(b.ajax.history.obFrame=document.createElement("IFRAME"),b.hide_object(b.ajax.history.obFrame),document.body.appendChild(b.ajax.history.obFrame),b.ajax.history.obFrame.contentWindow.document.open(),b.ajax.history.obFrame.contentWindow.document.write(b.ajax.history.expected_hash),b.ajax.history.obFrame.contentWindow.document.close()):b.browser.IsOpera()&&(b.ajax.history.obImage=document.createElement("IMG"),b.hide_object(b.ajax.history.obImage),
document.body.appendChild(b.ajax.history.obImage),b.ajax.history.obImage.setAttribute("src","javascript:location.href = 'javascript:BX.ajax.history.__hashListener();';"))),b.ajax.history.bInited=!0)},__hashListener:function(a){a=a||h.event||{state:!1};if(b.ajax.history.bPushState)b.ajax.history.obParams.setState(a.state||b.ajax.history.startState);else{b.ajax.history.obTimer&&(h.clearTimeout(b.ajax.history.obTimer),b.ajax.history.obTimer=null);(a=null!=b.ajax.history.obFrame?b.ajax.history.obFrame.contentWindow.document.body.innerText:
h.location.hash)&&"#"!=a||(a="__bx_no_hash__");0==a.indexOf("#")&&(a=a.substring(1));if(a!=b.ajax.history.expected_hash){var c=s.get(a);c&&(b.ajax.history.obParams.setState(c),b.ajax.history.expected_hash=a,null!=b.ajax.history.obFrame&&(a="__bx_no_hash__"==a?"":a,h.location.hash!=a&&h.location.hash!="#"+a&&(h.location.hash=a)))}b.ajax.history.obTimer=setTimeout(b.ajax.history.__hashListener,500)}},put:function(a,c,d,f){this.bPushState?f?b.ajax.history.startState=a:history.pushState(a,"",c):(c="undefined"!=
typeof d?d:"view"+c,s.put(c,a),b.ajax.history.expected_hash=c,h.location.hash=b.util.urlencode(c),null!=b.ajax.history.obFrame&&(b.ajax.history.obFrame.contentWindow.document.open(),b.ajax.history.obFrame.contentWindow.document.write(c),b.ajax.history.obFrame.contentWindow.document.close()))},checkRedirectStart:function(a,c){var d=h.location.hash;"#"==d.substring(0,1)&&(d=d.substring(1));d=d.substring(0,5);if("view/"==d||"view%"==d)b.ajax.history.bHashCollision=!0,document.write('<div id="__ajax_hash_collision_'+
c+'" style="display: none;">')},checkRedirectFinish:function(a,c){document.write("</div>");var d=h.location.hash;"#"==d.substring(0,1)&&(d=d.substring(1));b.ready(function(){var f=d.substring(0,5);if("view/"==f||"view%"==f){var e=b("__ajax_hash_collision_"+c),g=e.firstChild;b.cleanNode(g);e.style.display="block";"view%"!=f&&(d=b.util.urlencode(d));d+=(-1==d.indexOf("%3F")?"%3F":"%26")+a+"="+c;b.ajax.insertToNode("http://webunicom.ru/bitrix/tools/ajax_redirector.php?hash="+d,g)}})}};b.ajax.component=function(a){this.node=
a};b.ajax.component.prototype.getState=function(){var a={node:this.node,title:h.document.title,data:b(this.node).innerHTML},c=b("navigation");null!=c&&(a.nav_chain=c.innerHTML);return a};b.ajax.component.prototype.setState=function(a){b(a.node).innerHTML=a.data;b.ajax.UpdatePageTitle(a.title);a.nav_chain&&b.ajax.UpdatePageNavChain(a.nav_chain)};var s={arHistory:{},put:function(a,b){this.arHistory[a]=b},get:function(a){return this.arHistory[a]}};b.ajax.FormData=function(){this.elements=[];this.files=
[];this.features={};this.isSupported();this.log("BX FormData init")};b.ajax.FormData.isSupported=function(){return(new b.ajax.FormData).features.supported};b.ajax.FormData.prototype.log=function(a){};b.ajax.FormData.prototype.isSupported=function(){var a={};a.fileReader=h.FileReader&&h.FileReader.prototype.readAsBinaryString;a.readFormData=a.sendFormData=!!h.FormData;a.supported=!(!a.readFormData||!a.sendFormData);this.features=a;this.log("features:");this.log(a);return a.supported};b.ajax.FormData.prototype.append=
function(a,b){"object"===typeof b?this.files.push({name:a,value:b}):this.elements.push({name:a,value:b})};b.ajax.FormData.prototype.send=function(a,c,d,f){this.log("FD send");this.xhr=b.ajax({method:"POST",dataType:"html",url:a,onsuccess:c,onfailure:f,start:!1,preparePost:!1});d&&this.xhr.upload.addEventListener("progress",function(a){a.lengthComputable&&d(a.loaded/(a.total||a.totalSize))},!1);if(this.features.readFormData&&this.features.sendFormData){a=new FormData;this.log("use browser formdata");
for(var e in this.elements)this.elements.hasOwnProperty(e)&&a.append(this.elements[e].name,this.elements[e].value);for(e in this.files)this.files.hasOwnProperty(e)&&a.append(this.files[e].name,this.files[e].value);this.xhr.send(a)}return this.xhr};b.addCustomEvent("onAjaxFailure",b.debug)}})(window);
/* End */
;
; /* Start:/bitrix/js/main/session.js*/
function CBXSession()
{
	var _this = this;
	this.mess = {};
	this.timeout = null;
	this.sessid = null;
	this.bShowMess = true;
	this.dateStart = new Date();
	this.dateInput = new Date();
	this.dateCheck = new Date();
	this.activityInterval = 0;
	this.notifier = null;

	this.Expand = function(timeout, sessid, bShowMess, key)
	{
		this.timeout = timeout;
		this.sessid = sessid;
		this.bShowMess = bShowMess;
		this.key = key;

		BX.ready(function(){
			BX.bind(document, "keypress", _this.OnUserInput);
			BX.bind(document.body, "mousemove", _this.OnUserInput);
			BX.bind(document.body, "click", _this.OnUserInput);

			setTimeout(_this.CheckSession, (_this.timeout-60)*1000);
		})
	};

	this.OnUserInput = function()
	{
		var curr = new Date();
		_this.dateInput.setTime(curr.valueOf());
	};

	this.CheckSession = function()
	{
		var curr = new Date();
		if(curr.valueOf() - _this.dateCheck.valueOf() < 30000)
			return;

		_this.activityInterval = Math.round((_this.dateInput.valueOf() - _this.dateStart.valueOf())/1000);
		_this.dateStart.setTime(_this.dateInput.valueOf());
		var interval = (_this.activityInterval > _this.timeout? (_this.timeout-60) : _this.activityInterval);
		BX.ajax.get('http://webunicom.ru/bitrix/tools/public_session.php?sessid='+_this.sessid+'&interval='+interval+'&k='+_this.key, function(data){_this.CheckResult(data)});
	};

	this.CheckResult = function(data)
	{
		if(data == 'SESSION_EXPIRED')
		{
			if(_this.bShowMess)
			{
				if(!_this.notifier)
				{
					_this.notifier = document.body.appendChild(BX.create('DIV', {
						props: {className: 'bx-session-message'},
						style: {top: '0px'},
						html: '<a class="bx-session-message-close" href="javascript:bxSession.Close()"></a>'+_this.mess.messSessExpired
					}));

					var windowScroll = BX.GetWindowScrollPos();
					var windowSize = BX.GetWindowInnerSize();

					_this.notifier.style.left = parseInt(windowScroll.scrollLeft + windowSize.innerWidth / 2 - parseInt(_this.notifier.clientWidth) / 2) + 'px';

					if(BX.browser.IsIE())
					{
						_this.notifier.style.top = windowScroll.scrollTop + 'px';

						BX.bind(window, 'scroll', function()
						{
							var windowScroll = BX.GetWindowScrollPos();
							_this.notifier.style.top = windowScroll.scrollTop + 'px';
						});
					}
					else
					{
						_this.notifier.style.position='fixed';
					}
				}

				_this.notifier.style.display = '';
			}
		}
		else
		{
			var timeout;
			if(data == 'SESSION_CHANGED')
				timeout = (_this.timeout-60);
			else
				timeout = (_this.activityInterval < 60? 60 : (_this.activityInterval > _this.timeout? (_this.timeout-60) : _this.activityInterval));

			var curr = new Date();
			_this.dateCheck.setTime(curr.valueOf());
			setTimeout(_this.CheckSession, timeout*1000);
		}
	};

	this.Close = function()
	{
		this.notifier.style.display = 'none';
	}
}

var bxSession = new CBXSession();
/* End */
;
; /* Start:/bitrix/js/main/core/core_window.js*/
;(function(window) {
if (BX.WindowManager) return;

/* windows manager */
BX.WindowManager = {
	_stack: [],
	_runtime_resize: {},
	_delta: 2,
	_delta_start: 1000,
	currently_loaded: null,

	settings_category: 'BX.WindowManager.9.5',

	register: function (w)
	{
		this.currently_loaded = null;
		var div = w.Get();

		div.style.zIndex = w.zIndex = this.GetZIndex();

		w.WM_REG_INDEX = this._stack.length;
		this._stack.push(w);

		if (this._stack.length < 2)
		{
			BX.bind(document, 'keyup', BX.proxy(this.__checkKeyPress, this));
		}
	},

	unregister: function (w)
	{
		if (null == w.WM_REG_INDEX)
			return null;

		var _current;
		if (this._stack.length > 0)
		{
			while ((_current = this.__pop_stack()) != w)
			{
				if (!_current)
				{
					_current = null;
					break;
				}
			}

			if (this._stack.length <= 0)
			{
				this.enableKeyCheck();
			}

			return _current;
		}
		else
		{
			return null;
		}
	},

	__pop_stack: function(clean)
	{
		if (this._stack.length > 0)
		{
			var _current = this._stack.pop();
			_current.WM_REG_INDEX = null;
			BX.onCustomEvent(_current, 'onWindowUnRegister', [clean === true]);

			return _current;
		}
		else
			return null;
	},

	clean: function()
	{
		while (this.__pop_stack(true)){}
		this._stack = null;
		this.disableKeyCheck();
	},

	Get: function()
	{
		if (this.currently_loaded)
			return this.currently_loaded;
		else if (this._stack.length > 0)
			return this._stack[this._stack.length-1];
		else
			return null;
	},

	setStartZIndex: function(value)
	{
		this._delta_start = value;
	},

	restoreStartZIndex: function()
	{
		this._delta_start = 1000;
	},

	GetZIndex: function()
	{
		var _current;
		return (null != (_current = this._stack[this._stack.length-1])
			? parseInt(_current.Get().style.zIndex) + this._delta
			: this._delta_start
		);
	},

	__get_check_url: function(url)
	{
		var pos = url.indexOf('?');
		return pos == -1 ? url : url.substring(0, pos);
	},

	saveWindowSize: function(url, params)
	{
		var check_url = this.__get_check_url(url);
		if (BX.userOptions)
		{
			BX.userOptions.save(this.settings_category, 'size_' + check_url, 'width', params.width);
			BX.userOptions.save(this.settings_category, 'size_' + check_url, 'height', params.height);
		}

		this._runtime_resize[check_url] = params;
	},

	saveWindowOptions: function(wnd_id, opts)
	{
		if (BX.userOptions)
		{
			for (var i in opts)
			{
				if(opts.hasOwnProperty(i))
				{
					BX.userOptions.save(this.settings_category, 'options_' + wnd_id, i, opts[i]);
				}
			}
		}
	},

	getRuntimeWindowSize: function(url)
	{
		return this._runtime_resize[this.__get_check_url(url)];
	},

	disableKeyCheck: function()
	{
		BX.unbind(document, 'keyup', BX.proxy(this.__checkKeyPress, this));
	},

	enableKeyCheck: function()
	{
		BX.bind(document, 'keyup', BX.proxy(this.__checkKeyPress, this));
	},

	__checkKeyPress: function(e)
	{
		if (null == e)
			e = window.event;

		if (e.keyCode == 27)
		{
			var wnd = BX.WindowManager.Get();
			if (wnd && !wnd.unclosable) wnd.Close();
		}
	}
};

BX.garbage(BX.WindowManager.clean, BX.WindowManager);

/* base button class */
BX.CWindowButton = function(params)
{
	if (params.btn)
	{
		this.btn = params.btn;
		this.parentWindow = params.parentWindow;

		if (/save|apply/i.test(this.btn.name))
		{
			BX.bind(this.btn, 'click', BX.delegate(this.disableUntilError, this));
		}
	}
	else
	{
		this.title = params.title; // html value attr
		this.hint = params.hint; // html title attr
		this.id = params.id; // html name and id attrs
		this.name = params.name; // html name or value attrs when id and title 're absent
		this.className = params.className; // className for button input

		this.action = params.action;
		this.onclick = params.onclick;

		// you can override button creation method
		if (params.Button && BX.type.isFunction(params.Button))
			this.Button = params.Button;

		this.btn = null;
	}
};

BX.CWindowButton.prototype.disable = function()
{
	if (this.btn)
		this.parentWindow.showWait(this.btn);
};
BX.CWindowButton.prototype.enable = function(){
	if (this.btn)
		this.parentWindow.closeWait(this.btn);
};

BX.CWindowButton.prototype.emulate = function()
{
	if (this.btn && this.btn.disabled)
		return;

	var act =
		this.action
		? BX.delegate(this.action, this)
		: (
			this.onclick
			? this.onclick
			: (
				this.btn
				? this.btn.getAttribute('onclick')
				: ''
			)
		);

	if (act)
	{
		setTimeout(act, 50);
		if (this.btn && /save|apply/i.test(this.btn.name) && !this.action)
		{
			this.disableUntilError();
		}
	}
};

BX.CWindowButton.prototype.Button = function(parentWindow)
{
	this.parentWindow = parentWindow;

	var btn = {
		props: {
			'type': 'button',
			'name': this.id ? this.id : this.name,
			'value': this.title ? this.title : this.name,
			'id': this.id
		}
	};

	if (this.hint)
		btn.props.title = this.hint;
	if (!!this.className)
		btn.props.className = this.className;

	if (this.action)
	{
		btn.events = {
			'click': BX.delegate(this.action, this)
		};
	}
	else if (this.onclick)
	{
		if (BX.browser.IsIE())
		{
			btn.events = {
				'click': BX.delegate(function() {eval(this.onclick)}, this)
			};
		}
		else
		{
			btn.attrs = {
				'onclick': this.onclick
			};
		}
	}

	this.btn = BX.create('INPUT', btn);

	return this.btn;
};

BX.CWindowButton.prototype.disableUntilError = function() {
	this.disable();
	if (!this.__window_error_handler_set)
	{
		BX.addCustomEvent(this.parentWindow, 'onWindowError', BX.delegate(this.enable, this));
		this.__window_error_handler_set = true;
	}
};

/* base window class */
BX.CWindow = function(div, type)
{
	this.DIV = div || document.createElement('DIV');

	this.SETTINGS = {
		resizable: false,
		min_height: 0,
		min_width: 0,
		top: 0,
		left: 0,
		draggable: false,
		drag_restrict: true,
		resize_restrict: true
	};

	this.ELEMENTS = {
		draggable: [],
		resizer: [],
		close: []
	};

	this.type = type == 'float' ? 'float' : 'dialog';

	BX.adjust(this.DIV, {
		props: {
			className: 'bx-core-window'
		},
		style: {
			'zIndex': 0,
			'position': 'absolute',
			'display': 'none',
			'top': this.SETTINGS.top + 'px',
			'left': this.SETTINGS.left + 'px',
			'height': '100px',
			'width': '100px'
		}
	});

	this.isOpen = false;

	BX.addCustomEvent(this, 'onWindowRegister', BX.delegate(this.onRegister, this));
	BX.addCustomEvent(this, 'onWindowUnRegister', BX.delegate(this.onUnRegister, this));

	this.MOUSEOVER = null;
	BX.bind(this.DIV, 'mouseover', BX.delegate(this.__set_msover, this));
	BX.bind(this.DIV, 'mouseout', BX.delegate(this.__unset_msover, this));

	BX.ready(BX.delegate(function() {
		document.body.appendChild(this.DIV);
	}, this));
};

BX.CWindow.prototype.Get = function () {return this.DIV};
BX.CWindow.prototype.visible = function() {return this.isOpen;};

BX.CWindow.prototype.Show = function(bNotRegister)
{
	this.DIV.style.display = 'block';

	if (!bNotRegister)
	{
		BX.WindowManager.register(this);
		BX.onCustomEvent(this, 'onWindowRegister');
	}
};

BX.CWindow.prototype.Hide = function()
{
	BX.WindowManager.unregister(this);
	this.DIV.style.display = 'none';
};

BX.CWindow.prototype.onRegister = function()
{
	this.isOpen = true;
};

BX.CWindow.prototype.onUnRegister = function(clean)
{
	this.isOpen = false;

	if (clean || (this.PARAMS && this.PARAMS.content_url))
	{
		if (clean) {BX.onCustomEvent(this, 'onWindowClose', [this, true]);}

		if (this.DIV.parentNode)
			this.DIV.parentNode.removeChild(this.DIV);
	}
	else
	{
		this.DIV.style.display = 'none';
	}
};

BX.CWindow.prototype.CloseDialog = // compatibility
BX.CWindow.prototype.Close = function(bImmediately)
{
	BX.onCustomEvent(this, 'onBeforeWindowClose', [this]);
	if (bImmediately !== true)
	{
		if (this.denyClose)
			return false;
	}

	BX.onCustomEvent(this, 'onWindowClose', [this]);

	//this crashes vis editor in ie via onWindowResizeExt event handler
	//if (this.bExpanded) this.__expand();
	// alternative version:
	if (this.bExpanded)
	{
		var pDocElement = BX.GetDocElement();
		BX.unbind(window, 'resize', BX.proxy(this.__expand_onresize, this));
		pDocElement.style.overflow = this.__expand_settings.overflow;
	}

	BX.WindowManager.unregister(this);

	return true;
};

BX.CWindow.prototype.SetResize = function(elem)
{
	elem.style.cursor = 'se-resize';
	BX.bind(elem, 'mousedown', BX.proxy(this.__startResize, this));

	this.ELEMENTS.resizer.push(elem);
	this.SETTINGS.resizable = true;
};

BX.CWindow.prototype.SetExpand = function(elem, event_name)
{
	event_name = event_name || 'click';
	BX.bind(elem, event_name, BX.proxy(this.__expand, this));
};

BX.CWindow.prototype.__expand_onresize = function()
{
	var windowSize = BX.GetWindowInnerSize();
	this.DIV.style.width = windowSize.innerWidth + "px";
	this.DIV.style.height = windowSize.innerHeight + "px";

	BX.onCustomEvent(this, 'onWindowResize');
};

BX.CWindow.prototype.__expand = function()
{
	var pDocElement = BX.GetDocElement();

	if (!this.bExpanded)
	{
		var wndScroll = BX.GetWindowScrollPos(),
			wndSize = BX.GetWindowInnerSize();

		this.__expand_settings = {
			resizable: this.SETTINGS.resizable,
			draggable: this.SETTINGS.draggable,
			width: this.DIV.style.width,
			height: this.DIV.style.height,
			left: this.DIV.style.left,
			top: this.DIV.style.top,
			scrollTop: wndScroll.scrollTop,
			scrollLeft: wndScroll.scrollLeft,
			overflow: BX.style(pDocElement, 'overflow')
		};

		this.SETTINGS.resizable = false;
		this.SETTINGS.draggable = false;

		window.scrollTo(0,0);
		pDocElement.style.overflow = 'hidden';

		this.DIV.style.top = '0px';
		this.DIV.style.left = '0px';

		this.DIV.style.width = wndSize.innerWidth + 'px';
		this.DIV.style.height = wndSize.innerHeight + 'px';

		this.bExpanded = true;

		BX.onCustomEvent(this, 'onWindowExpand');
		BX.onCustomEvent(this, 'onWindowResize');

		BX.bind(window, 'resize', BX.proxy(this.__expand_onresize, this));
	}
	else
	{
		BX.unbind(window, 'resize', BX.proxy(this.__expand_onresize, this));

		this.SETTINGS.resizable = this.__expand_settings.resizable;
		this.SETTINGS.draggable = this.__expand_settings.draggable;

		pDocElement.style.overflow = this.__expand_settings.overflow;

		this.DIV.style.top = this.__expand_settings.top;
		this.DIV.style.left = this.__expand_settings.left;
		this.DIV.style.width = this.__expand_settings.width;
		this.DIV.style.height = this.__expand_settings.height;

		window.scrollTo(this.__expand_settings.scrollLeft, this.__expand_settings.scrollTop);

		this.bExpanded = false;

		BX.onCustomEvent(this, 'onWindowNarrow');
		BX.onCustomEvent(this, 'onWindowResize');

	}
};

BX.CWindow.prototype.Resize = function(x, y)
{
	var new_width = Math.max(x - this.pos.left + this.dx, this.SETTINGS.min_width);
	var new_height = Math.max(y - this.pos.top + this.dy, this.SETTINGS.min_height);

	if (this.SETTINGS.resize_restrict)
	{
		var scrollSize = BX.GetWindowScrollSize();

		if (this.pos.left + new_width > scrollSize.scrollWidth - this.dw)
			new_width = scrollSize.scrollWidth - this.pos.left - this.dw;
	}

	this.DIV.style.width = new_width + 'px';
	this.DIV.style.height = new_height + 'px';

	BX.onCustomEvent(this, 'onWindowResize');
};

BX.CWindow.prototype.__startResize = function(e)
{
	if (!this.SETTINGS.resizable)
		return false;

	if(!e) e = window.event;

	this.wndSize = BX.GetWindowScrollPos();
	this.wndSize.innerWidth = BX.GetWindowInnerSize().innerWidth;

	this.pos = BX.pos(this.DIV);

	this.x = e.clientX + this.wndSize.scrollLeft;
	this.y = e.clientY + this.wndSize.scrollTop;

	this.dx = this.pos.left + this.pos.width - this.x;
	this.dy = this.pos.top + this.pos.height - this.y;
	this.dw = this.pos.width - parseInt(this.DIV.style.width);

	BX.bind(document, "mousemove", BX.proxy(this.__moveResize, this));
	BX.bind(document, "mouseup", BX.proxy(this.__stopResize, this));

	if(document.body.setCapture)
		document.body.setCapture();

	document.onmousedown = BX.False;

	var b = document.body;
	b.ondrag = b.onselectstart = BX.False;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = 'none';
	b.style.cursor = 'se-resize';

	BX.onCustomEvent(this, 'onWindowResizeStart');

	return true;
};

BX.CWindow.prototype.__moveResize = function(e)
{
	if(!e) e = window.event;

	var windowScroll = BX.GetWindowScrollPos();

	var x = e.clientX + windowScroll.scrollLeft;
	var y = e.clientY + windowScroll.scrollTop;

	if(this.x == x && this.y == y)
		return;

	this.Resize(x, y);

	this.x = x;
	this.y = y;
};

BX.CWindow.prototype.__stopResize = function()
{
	if(document.body.releaseCapture)
		document.body.releaseCapture();

	BX.unbind(document, "mousemove", BX.proxy(this.__moveResize, this));
	BX.unbind(document, "mouseup", BX.proxy(this.__stopResize, this));

	document.onmousedown = null;

	var b = document.body;
	b.ondrag = b.onselectstart = null;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = '';
	b.style.cursor = '';

	BX.onCustomEvent(this, 'onWindowResizeFinished')
};

BX.CWindow.prototype.SetClose = function(elem)
{
	BX.bind(elem, 'click', BX.proxy(this.Close, this));
	this.ELEMENTS.close.push(elem);
};

BX.CWindow.prototype.SetDraggable = function(elem)
{
	BX.bind(elem, 'mousedown', BX.proxy(this.__startDrag, this));

	elem.style.cursor = 'move';

	this.ELEMENTS.draggable.push(elem);
	this.SETTINGS.draggable = true;
};

BX.CWindow.prototype.Move = function(x, y)
{
	var dxShadow = 1; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	var left = parseInt(this.DIV.style.left)+x;
	var top = parseInt(this.DIV.style.top)+y;

	if (this.SETTINGS.drag_restrict)
	{
		//Left side
		if (left < 0)
			left = 0;

		//Right side
		var scrollSize = BX.GetWindowScrollSize();
		var floatWidth = this.DIV.offsetWidth;
		var floatHeight = this.DIV.offsetHeight;

		if (left > (scrollSize.scrollWidth - floatWidth - dxShadow))
			left = scrollSize.scrollWidth - floatWidth - dxShadow;

		if (top > (scrollSize.scrollHeight - floatHeight - dxShadow))
			top = scrollSize.scrollHeight - floatHeight - dxShadow;

		//Top side
		if (top < 0)
			top = 0;
	}

	this.DIV.style.left = left+'px';
	this.DIV.style.top = top+'px';

	//this.AdjustShadow(div);
};

BX.CWindow.prototype.__startDrag = function(e)
{
	if (!this.SETTINGS.draggable)
		return false;

	if(!e) e = window.event;

	this.x = e.clientX + document.body.scrollLeft;
	this.y = e.clientY + document.body.scrollTop;

	this.__bWasDragged = false;
	BX.bind(document, "mousemove", BX.proxy(this.__moveDrag, this));
	BX.bind(document, "mouseup", BX.proxy(this.__stopDrag, this));

	if(document.body.setCapture)
		document.body.setCapture();

	document.onmousedown = BX.False;

	var b = document.body;
	b.ondrag = b.onselectstart = BX.False;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = 'none';
	b.style.cursor = 'move';
	return BX.PreventDefault(e);
};

BX.CWindow.prototype.__moveDrag = function(e)
{
	if(!e) e = window.event;

	var x = e.clientX + document.body.scrollLeft;
	var y = e.clientY + document.body.scrollTop;

	if(this.x == x && this.y == y)
		return;

	this.Move((x - this.x), (y - this.y));
	this.x = x;
	this.y = y;

	if (!this.__bWasDragged)
	{
		BX.onCustomEvent(this, 'onWindowDragStart');
		this.__bWasDragged = true;
		BX.bind(BX.proxy_context, "click", BX.PreventDefault);
	}

	BX.onCustomEvent(this, 'onWindowDrag');
};

BX.CWindow.prototype.__stopDrag = function(e)
{
	if(document.body.releaseCapture)
		document.body.releaseCapture();

	BX.unbind(document, "mousemove", BX.proxy(this.__moveDrag, this));
	BX.unbind(document, "mouseup", BX.proxy(this.__stopDrag, this));

	document.onmousedown = null;

	var b = document.body;
	b.ondrag = b.onselectstart = null;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = '';
	b.style.cursor = '';

	if (this.__bWasDragged)
	{
		BX.onCustomEvent(this, 'onWindowDragFinished');
		var _proxy_context = BX.proxy_context;
		setTimeout(function(){BX.unbind(_proxy_context, "click", BX.PreventDefault)}, 100);
		this.__bWasDragged = false;
	}
	return BX.PreventDefault(e);
};

BX.CWindow.prototype.DenyClose = function()
{
	this.denyClose = true;
};

BX.CWindow.prototype.AllowClose = function()
{
	this.denyClose = false;
};

BX.CWindow.prototype.ShowError = function(str)
{
	BX.onCustomEvent(this, 'onWindowError', [str]);

	if (this._wait)
		BX.closeWait(this._wait);

	window.alert(str);
};

BX.CWindow.prototype.__set_msover = function() {this.MOUSEOVER = true;};
BX.CWindow.prototype.__unset_msover = function() {this.MOUSEOVER = false;};

/* dialog window class extends window class */
BX.CWindowDialog = function() {
	var a = arguments;
	a[1] = 'dialog';
	BX.CWindowDialog.superclass.constructor.apply(this, a);

	this.DIV.style.top = '10px';
	this.OVERLAY = null;
};
BX.extend(BX.CWindowDialog, BX.CWindow);

BX.CWindowDialog.prototype.__resizeOverlay = function()
{
	var windowSize = BX.GetWindowScrollSize();
	this.OVERLAY.style.width = windowSize.scrollWidth + "px";
};

BX.CWindowDialog.prototype.CreateOverlay = function(zIndex)
{
	if (null == this.OVERLAY)
	{
		var windowSize = BX.GetWindowScrollSize();
		this.OVERLAY = document.body.appendChild(BX.create("DIV", {
			style: {
				position: 'absolute',
				top: '0px',
				left: '0px',
				zIndex: zIndex || (parseInt(this.DIV.style.zIndex)-2),
				width: windowSize.scrollWidth + "px",
				height: windowSize.scrollHeight + "px"
			}
		}));
	}

	return this.OVERLAY;
};

BX.CWindowDialog.prototype.Show = function()
{
	BX.CWindowDialog.superclass.Show.apply(this, arguments);

	this.CreateOverlay();

	this.OVERLAY.style.display = 'block';
	this.OVERLAY.style.zIndex = parseInt(this.DIV.style.zIndex)-2;

	BX.unbind(window, 'resize', BX.proxy(this.__resizeOverlay, this));
	BX.bind(window, 'resize', BX.proxy(this.__resizeOverlay, this));
};

BX.CWindowDialog.prototype.onUnRegister = function(clean)
{
	BX.CWindowDialog.superclass.onUnRegister.apply(this, arguments);

	if (this.clean)
	{
		if (this.OVERLAY.parentNode)
			this.OVERLAY.parentNode.removeChild(this.OVERLAY);
	}
	else
	{
		this.OVERLAY.style.display = 'none';
	}

	BX.unbind(window, 'resize', BX.proxy(this.__resizeOverlay, this));
};

/* standard bitrix dialog extends BX.CWindowDialog */
/*
	arParams = {
		(
			title: 'dialog title',
			head: 'head block html',
			content: 'dialog content',
			icon: 'head icon classname or filename',

			resize_id: 'some id to save resize information'// useless if resizable = false
		)
		or
		(
			content_url: url to content load
				loaded content scripts can use BX.WindowManager.Get() to get access to the current window object
		)

		height: window_height_in_pixels,
		width: window_width_in_pixels,

		draggable: true|false,
		resizable: true|false,

		min_height: min_window_height_in_pixels, // useless if resizable = false
		min_width: min_window_width_in_pixels, // useless if resizable = false

		buttons: [
			'html_code',
			BX.CDialog.btnSave, BX.CDialog.btnCancel, BX.CDialog.btnClose
		]
	}
*/
BX.CDialog = function(arParams)
{
	BX.CDialog.superclass.constructor.apply(this);

	this._sender = 'core_window_cdialog';

	this.PARAMS = arParams || {};

	for (var i in this.defaultParams)
	{
		if (typeof this.PARAMS[i] == 'undefined')
			this.PARAMS[i] = this.defaultParams[i];
	}

	this.PARAMS.width = (!isNaN(parseInt(this.PARAMS.width)))
		? this.PARAMS.width
		: this.defaultParams['width'];
	this.PARAMS.height = (!isNaN(parseInt(this.PARAMS.height)))
		? this.PARAMS.height
		: this.defaultParams['height'];

	if (this.PARAMS.resize_id || this.PARAMS.content_url)
	{
		var arSize = BX.WindowManager.getRuntimeWindowSize(this.PARAMS.resize_id || this.PARAMS.content_url);
		if (arSize)
		{
			this.PARAMS.width = arSize.width;
			this.PARAMS.height = arSize.height;
		}
	}

	BX.addClass(this.DIV, 'bx-core-adm-dialog');
	this.DIV.id = 'bx-admin-prefix';

	this.PARTS = {};

	this.DIV.style.height = null;
	this.DIV.style.width = null;

	this.PARTS.TITLEBAR = this.DIV.appendChild(BX.create('DIV', {props: {
			className: 'bx-core-adm-dialog-head'
		}
	}));

	this.PARTS.TITLE_CONTAINER = this.PARTS.TITLEBAR.appendChild(BX.create('SPAN', {
		props: {className: 'bx-core-adm-dialog-head-inner'},
		text: this.PARAMS.title
	}));

	this.PARTS.TITLEBAR_ICONS = this.PARTS.TITLEBAR.appendChild(BX.create('DIV', {
		props: {
			className: 'bx-core-adm-dialog-head-icons'
		},
		children: (this.PARAMS.resizable ? [
			BX.create('SPAN', {props: {className: 'bx-core-adm-icon-expand', title: BX.message('JS_CORE_WINDOW_EXPAND')}}),
			BX.create('SPAN', {props: {className: 'bx-core-adm-icon-close', title: BX.message('JS_CORE_WINDOW_CLOSE')}})
		] : [
			BX.create('SPAN', {props: {className: 'bx-core-adm-icon-close', title: BX.message('JS_CORE_WINDOW_CLOSE')}})
		])
	}));


	this.PARTS.CONTENT = this.DIV.appendChild(BX.create('DIV', {
		props: {className: 'bx-core-adm-dialog-content-wrap adm-workarea'}
	}));

	this.PARTS.CONTENT_DATA = this.PARTS.CONTENT.appendChild(BX.create('DIV', {
		props: {className: 'bx-core-adm-dialog-content'},
		style: {
			height: this.PARAMS.height + 'px',
			width: this.PARAMS.width + 'px'
		}
	}));

	this.PARTS.HEAD = this.PARTS.CONTENT_DATA.appendChild(BX.create('DIV', {
		props: {
			className: 'bx-core-adm-dialog-head-block' + (this.PARAMS.icon ? ' ' + this.PARAMS.icon : '')
		}
	}));

	this.SetHead(this.PARAMS.head);
	this.SetContent(this.PARAMS.content);
	this.SetTitle(this.PARAMS.title);
	this.SetClose(this.PARTS.TITLEBAR_ICONS.lastChild);

	if (this.PARAMS.resizable)
	{
		this.SetExpand(this.PARTS.TITLEBAR_ICONS.firstChild);
		this.SetExpand(this.PARTS.TITLEBAR, 'dblclick');

		BX.addCustomEvent(this, 'onWindowExpand', BX.proxy(this.__onexpand, this));
		BX.addCustomEvent(this, 'onWindowNarrow', BX.proxy(this.__onexpand, this));
	}

	this.PARTS.FOOT = this.PARTS.BUTTONS_CONTAINER = this.PARTS.CONTENT.appendChild(BX.create('DIV', {
			props: {
				className: 'bx-core-adm-dialog-buttons'
			},
			//events: {
			//	'click': BX.delegateEvent({property:{type: /button|submit/}}, BX.delegate(function() {this.showWait(BX.proxy_context)}, this))
			//},
			children: this.ShowButtons()
		}
	));

	if (this.PARAMS.draggable)
		this.SetDraggable(this.PARTS.TITLEBAR);

	if (this.PARAMS.resizable)
	{
		this.PARTS.RESIZER = this.DIV.appendChild(BX.create('DIV', {
			props: {className: 'bx-core-resizer'}
		}));

		this.SetResize(this.PARTS.RESIZER);

		this.SETTINGS.min_width = this.PARAMS.min_width;
		this.SETTINGS.min_height = this.PARAMS.min_height;
	}

	this.auth_callback = BX.delegate(function(){
		this.PARAMS.content = '';
		this.hideNotify();
		this.Show();
	}, this)
};
BX.extend(BX.CDialog, BX.CWindowDialog);

BX.CDialog.prototype.defaultParams = {
	width: 700,
	height: 400,
	min_width: 500,
	min_height: 300,

	resizable: true,
	draggable: true,

	title: '',
	icon: ''
};

BX.CDialog.prototype.showWait = function(el)
{
	if (BX.type.isElementNode(el) && (el.type == 'button' || el.type == 'submit'))
	{
		BX.defer(function(){el.disabled = true})();

		var bSave = (BX.hasClass(el, 'adm-btn-save') || BX.hasClass(el, 'adm-btn-save')),
			pos = BX.pos(el, true);

		el.bxwaiter = this.PARTS.FOOT.appendChild(BX.create('DIV', {
			props: {className: 'adm-btn-load-img' + (bSave ? '-green' : '')},
			style: {
				top: parseInt((pos.bottom + pos.top)/2 - 10) + 'px',
				left: parseInt((pos.right + pos.left)/2 - 10) + 'px'
			}
		}));

		BX.addClass(el, 'adm-btn-load');

		this.lastWaitElement = el;

		return el.bxwaiter;
	}
	return null;
};

BX.CDialog.prototype.closeWait = function(el)
{
	el = el || this.lastWaitElement;

	if (BX.type.isElementNode(el))
	{
		if (el.bxwaiter)
		{
			if(el.bxwaiter.parentNode)
			{
				el.bxwaiter.parentNode.removeChild(el.bxwaiter);
			}

			el.bxwaiter = null;
		}

		el.disabled = false;
		BX.removeClass(el, 'adm-btn-load');

		if (this.lastWaitElement == el)
			this.lastWaitElement = null;
	}
};

BX.CDialog.prototype.Authorize = function(arAuthResult)
{
	this.bSkipReplaceContent = true;
	this.ShowError(BX.message('JSADM_AUTH_REQ'));

	BX.onCustomEvent(this, 'onWindowError', []);

	BX.closeWait();

	(new BX.CAuthDialog({
		content_url: this.PARAMS.content_url,
		auth_result: arAuthResult,
		callback: BX.delegate(function(){
			if (this.auth_callback)
				this.auth_callback()
		}, this)
	})).Show();
};

BX.CDialog.prototype.ShowError = function(str)
{
	BX.onCustomEvent(this, 'onWindowError', [str]);

	this.closeWait();

	if (this._wait)
		BX.closeWait(this._wait);

	this.Notify(str, true);
};


BX.CDialog.prototype.__expandGetSize = function()
{
	var pDocElement = BX.GetDocElement();
	pDocElement.style.overflow = 'hidden';

	var wndSize = BX.GetWindowInnerSize();

	pDocElement.scrollTop = 0;

	this.DIV.style.top = '-' + this.dxShadow + 'px';
	this.DIV.style.left = '-' + this.dxShadow + 'px';

	return {
		width: (wndSize.innerWidth - parseInt(BX.style(this.PARTS.CONTENT, 'padding-right')) - parseInt(BX.style(this.PARTS.CONTENT, 'padding-left'))) + this.dxShadow,
		height: (wndSize.innerHeight - this.PARTS.TITLEBAR.offsetHeight - this.PARTS.FOOT.offsetHeight - parseInt(BX.style(this.PARTS.CONTENT, 'padding-top')) - parseInt(BX.style(this.PARTS.CONTENT, 'padding-bottom'))) + this.dxShadow
	};
};

BX.CDialog.prototype.__expand = function()
{
	var pDocElement = BX.GetDocElement();
	this.dxShadow = 2;

	if (!this.bExpanded)
	{
		var wndScroll = BX.GetWindowScrollPos();

		this.__expand_settings = {
			resizable: this.SETTINGS.resizable,
			draggable: this.SETTINGS.draggable,
			width: this.PARTS.CONTENT_DATA.style.width,
			height: this.PARTS.CONTENT_DATA.style.height,
			left: this.DIV.style.left,
			top: this.DIV.style.top,
			scrollTop: wndScroll.scrollTop,
			scrollLeft: wndScroll.scrollLeft,
			overflow: BX.style(pDocElement, 'overflow')
		};

		this.SETTINGS.resizable = false;
		this.SETTINGS.draggable = false;

		var pos = this.__expandGetSize();

		this.PARTS.CONTENT_DATA.style.width = pos.width + 'px';
		this.PARTS.CONTENT_DATA.style.height = pos.height + 'px';

		window.scrollTo(0,0);
		pDocElement.style.overflow = 'hidden';

		this.bExpanded = true;

		BX.onCustomEvent(this, 'onWindowExpand');
		BX.onCustomEvent(this, 'onWindowResize');
		BX.onCustomEvent(this, 'onWindowResizeExt', [{'width': pos.width, 'height': pos.height}]);

		BX.bind(window, 'resize', BX.proxy(this.__expand_onresize, this));
	}
	else
	{
		BX.unbind(window, 'resize', BX.proxy(this.__expand_onresize, this));

		this.SETTINGS.resizable = this.__expand_settings.resizable;
		this.SETTINGS.draggable = this.__expand_settings.draggable;

		pDocElement.style.overflow = this.__expand_settings.overflow;

		this.DIV.style.top = this.__expand_settings.top;
		this.DIV.style.left = this.__expand_settings.left;
		this.PARTS.CONTENT_DATA.style.width = this.__expand_settings.width;
		this.PARTS.CONTENT_DATA.style.height = this.__expand_settings.height;
		window.scrollTo(this.__expand_settings.scrollLeft, this.__expand_settings.scrollTop);
		this.bExpanded = false;

		BX.onCustomEvent(this, 'onWindowNarrow');
		BX.onCustomEvent(this, 'onWindowResize');
		BX.onCustomEvent(this, 'onWindowResizeExt', [{'width': parseInt(this.__expand_settings.width), 'height': parseInt(this.__expand_settings.height)}]);
	}
};

BX.CDialog.prototype.__expand_onresize = function()
{
	var pos = this.__expandGetSize();

	this.PARTS.CONTENT_DATA.style.width = pos.width + 'px';
	this.PARTS.CONTENT_DATA.style.height = pos.height + 'px';

	BX.onCustomEvent(this, 'onWindowResize');
	BX.onCustomEvent(this, 'onWindowResizeExt', [pos]);
};

BX.CDialog.prototype.__onexpand = function()
{
	var ob = this.PARTS.TITLEBAR_ICONS.firstChild;
	ob.className = BX.toggle(ob.className, ['bx-core-adm-icon-expand', 'bx-core-adm-icon-narrow']);
	ob.title = BX.toggle(ob.title, [BX.message('JS_CORE_WINDOW_EXPAND'), BX.message('JS_CORE_WINDOW_NARROW')]);

	if (this.PARTS.RESIZER)
	{
		this.PARTS.RESIZER.style.display = this.bExpanded ? 'none' : 'block';
	}
};


BX.CDialog.prototype.__startResize = function(e)
{
	if (!this.SETTINGS.resizable)
		return false;

	if(!e) e = window.event;

	this.wndSize = BX.GetWindowScrollPos();
	this.wndSize.innerWidth = BX.GetWindowInnerSize().innerWidth;

	this.pos = BX.pos(this.PARTS.CONTENT_DATA);

	this.x = e.clientX + this.wndSize.scrollLeft;
	this.y = e.clientY + this.wndSize.scrollTop;

	this.dx = this.pos.left + this.pos.width - this.x;
	this.dy = this.pos.top + this.pos.height - this.y;


	// TODO: suspicious
	this.dw = this.pos.width - parseInt(this.PARTS.CONTENT_DATA.style.width) + parseInt(BX.style(this.PARTS.CONTENT, 'padding-right'));

	BX.bind(document, "mousemove", BX.proxy(this.__moveResize, this));
	BX.bind(document, "mouseup", BX.proxy(this.__stopResize, this));

	if(document.body.setCapture)
		document.body.setCapture();

	document.onmousedown = BX.False;

	var b = document.body;
	b.ondrag = b.onselectstart = BX.False;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = 'none';
	b.style.cursor = 'se-resize';

	BX.onCustomEvent(this, 'onWindowResizeStart');

	return true;
};

BX.CDialog.prototype.Resize = function(x, y)
{
	var new_width = Math.max(x - this.pos.left + this.dx, this.SETTINGS.min_width);
	var new_height = Math.max(y - this.pos.top + this.dy, this.SETTINGS.min_height);

	if (this.SETTINGS.resize_restrict)
	{
		var scrollSize = BX.GetWindowScrollSize();

		if (this.pos.left + new_width > scrollSize.scrollWidth - this.dw)
			new_width = scrollSize.scrollWidth - this.pos.left - this.dw;
	}

	this.PARTS.CONTENT_DATA.style.width = new_width + 'px';
	this.PARTS.CONTENT_DATA.style.height = new_height + 'px';

	BX.onCustomEvent(this, 'onWindowResize');
	BX.onCustomEvent(this, 'onWindowResizeExt', [{'height': new_height, 'width': new_width}]);
};

BX.CDialog.prototype.SetSize = function(obSize)
{
	this.PARTS.CONTENT_DATA.style.width = obSize.width + 'px';
	this.PARTS.CONTENT_DATA.style.height = obSize.height + 'px';

	BX.onCustomEvent(this, 'onWindowResize');
	BX.onCustomEvent(this, 'onWindowResizeExt', [obSize]);
};

BX.CDialog.prototype.GetParameters = function(form_name)
{
	var form = this.GetForm();

	if(!form)
		return "";

	var i, s = "";
	var n = form.elements.length;

	var delim = '';
	for(i=0; i<n; i++)
	{
		if (s != '') delim = '&';
		var el = form.elements[i];
		if (el.disabled)
			continue;

		switch(el.type.toLowerCase())
		{
			case 'text':
			case 'textarea':
			case 'password':
			case 'hidden':
				if (null == form_name && el.name.substr(el.name.length-4) == '_alt' && form.elements[el.name.substr(0, el.name.length-4)])
					break;
				s += delim + el.name + '=' + BX.util.urlencode(el.value);
				break;
			case 'radio':
				if(el.checked)
					s += delim + el.name + '=' + BX.util.urlencode(el.value);
				break;
			case 'checkbox':
				s += delim + el.name + '=' + BX.util.urlencode(el.checked ? 'Y':'N');
				break;
			case 'select-one':
				var val = "";
				if (null == form_name && form.elements[el.name + '_alt'] && el.selectedIndex == 0)
					val = form.elements[el.name+'_alt'].value;
				else
					val = el.value;
				s += delim + el.name + '=' + BX.util.urlencode(val);
				break;
			case 'select-multiple':
				var j, bAdded = false;
				var l = el.options.length;
				for (j=0; j<l; j++)
				{
					if (el.options[j].selected)
					{
						s += delim + el.name + '=' + BX.util.urlencode(el.options[j].value);
						bAdded = true;
					}
				}
				if (!bAdded)
					s += delim + el.name + '=';
				break;
			default:
				break;
		}
	}

	return s;
};

BX.CDialog.prototype.PostParameters = function(params)
{
	var url = this.PARAMS.content_url;

	if (null == params)
		params = "";

	params += (params == "" ? "" : "&") + "bxsender=" + this._sender;

	var index = url.indexOf('?');
	if (index == -1)
		url += '?' + params;
	else
		url = url.substring(0, index) + '?' + params + "&" + url.substring(index+1);

	BX.showWait();

	this.auth_callback = BX.delegate(function(){
		this.hideNotify();
		this.PostParameters(params);
	}, this);

	BX.ajax.Setup({skipAuthCheck:true},true);
	BX.ajax.post(url, this.GetParameters(), BX.delegate(function(result) {
		BX.closeWait();
		if (!this.bSkipReplaceContent)
		{
			this.ClearButtons(); // buttons are appended during form reload, so we should clear footer
			this.SetContent(result);
			this.Show(true);
		}

		this.bSkipReplaceContent = false;
	}, this));
};

BX.CDialog.prototype.Submit = function(params, url)
{
	var FORM = this.GetForm();
	if (FORM)
	{
		FORM.onsubmit = null;

		FORM.method = 'POST';
		if (!FORM.action || url)
		{
			url = url || this.PARAMS.content_url;
			if (null != params)
			{
				var index = url.indexOf('?');
				if (index == -1)
					url += '?' + params;
				else
					url = url.substring(0, index) + '?' + params + "&" + url.substring(index+1);
			}

			FORM.action = url;
		}

		if (!FORM._bxsender)
		{
			FORM._bxsender = FORM.appendChild(BX.create('INPUT', {
				attrs: {
					type: 'hidden',
					name: 'bxsender',
					value: this._sender
				}
			}));
		}

		this._wait = BX.showWait();

		this.auth_callback = BX.delegate(function(){
			this.hideNotify();
			this.Submit(params);
		}, this);

		BX.ajax.submit(FORM, BX.delegate(function(){this.closeWait()}, this));
	}
	else
	{
		window.alert('no form registered!');
	}
};

BX.CDialog.prototype.GetForm = function()
{
	if (null == this.__form)
	{
		var forms = this.PARTS.CONTENT_DATA.getElementsByTagName('FORM');
		this.__form = forms[0] ? forms[0] : null;
	}

	return this.__form;
};

BX.CDialog.prototype.GetRealForm = function()
{
	if (null == this.__rform)
	{
		var forms = this.PARTS.CONTENT_DATA.getElementsByTagName('FORM');
		this.__rform = forms[1] ? forms[1] : (forms[0] ? forms[0] : null);
	}

	return this.__rform;
};

BX.CDialog.prototype._checkButton = function(btn)
{
	var arCustomButtons = ['btnSave', 'btnCancel', 'btnClose'];

	for (var i = 0; i < arCustomButtons.length; i++)
	{
		if (this[arCustomButtons[i]] && (btn == this[arCustomButtons[i]]))
			return arCustomButtons[i];
	}

	return false;
};

BX.CDialog.prototype.ShowButtons = function()
{
	var result = [];
	if (this.PARAMS.buttons)
	{
		if (this.PARAMS.buttons.title) this.PARAMS.buttons = [this.PARAMS.buttons];

		for (var i=0, len=this.PARAMS.buttons.length; i<len; i++)
		{
			if (BX.type.isNotEmptyString(this.PARAMS.buttons[i]))
			{
				result.push(this.PARAMS.buttons[i]);
			}
			else if (this.PARAMS.buttons[i])
			{
				//if (!(this.PARAMS.buttons[i] instanceof BX.CWindowButton))
				if (!BX.is_subclass_of(this.PARAMS.buttons[i], BX.CWindowButton))
				{
					var b = this._checkButton(this.PARAMS.buttons[i]); // hack to set links to real CWindowButton object in btnSave etc;
					this.PARAMS.buttons[i] = new BX.CWindowButton(this.PARAMS.buttons[i]);
					if (b) this[b] = this.PARAMS.buttons[i];
				}

				result.push(this.PARAMS.buttons[i].Button(this));
			}
		}
	}

	return result;
};

BX.CDialog.prototype.setAutosave = function () {
	if (!this.bSetAutosaveDelay)
	{
		this.bSetAutosaveDelay = true;
		setTimeout(BX.proxy(this.setAutosave, this), 10);
	}
};

BX.CDialog.prototype.SetTitle = function(title)
{
	this.PARAMS.title = title;
	BX.cleanNode(this.PARTS.TITLE_CONTAINER).appendChild(document.createTextNode(this.PARAMS.title));
};

BX.CDialog.prototype.SetHead = function(head)
{
	this.PARAMS.head = BX.util.trim(head);
	this.PARTS.HEAD.innerHTML = this.PARAMS.head || "&nbsp;";
	this.PARTS.HEAD.style.display = this.PARAMS.head ? 'block' : 'none';
	this.adjustSize();
};

BX.CDialog.prototype.Notify = function(note, bError)
{
	if (!this.PARTS.NOTIFY)
	{
		this.PARTS.NOTIFY = this.DIV.insertBefore(BX.create('DIV', {
			props: {className: 'adm-warning-block'},
			children: [
				BX.create('SPAN', {
					props: {className: 'adm-warning-text'}
				}),
				BX.create('SPAN', {
					props: {className: 'adm-warning-icon'}
				}),
				BX.create('SPAN', {
					props: {className: 'adm-warning-close'},
					events: {click: BX.proxy(this.hideNotify, this)}
				})
			]
		}), this.DIV.firstChild);
	}

	if (bError)
		BX.addClass(this.PARTS.NOTIFY, 'adm-warning-block-red');
	else
		BX.removeClass(this.PARTS.NOTIFY, 'adm-warning-block-red');

	this.PARTS.NOTIFY.firstChild.innerHTML = note || '&nbsp;';
	this.PARTS.NOTIFY.firstChild.style.width = (this.PARAMS.width-50) + 'px';
	BX.removeClass(this.PARTS.NOTIFY, 'adm-warning-animate');
};

BX.CDialog.prototype.hideNotify = function()
{
	BX.addClass(this.PARTS.NOTIFY, 'adm-warning-animate');
};

BX.CDialog.prototype.__adjustHeadToIcon = function()
{
	if (!this.PARTS.HEAD.offsetHeight)
	{
		setTimeout(BX.delegate(this.__adjustHeadToIcon, this), 50);
	}
	else
	{
		if (this.icon_image && this.icon_image.height && this.icon_image.height > this.PARTS.HEAD.offsetHeight - 5)
		{
			this.PARTS.HEAD.style.height = this.icon_image.height + 5 + 'px';
			this.adjustSize();
		}

		this.icon_image.onload = null;
		this.icon_image = null;
	}
};

BX.CDialog.prototype.SetIcon = function(icon_class)
{
	if (this.PARAMS.icon != icon_class)
	{
		if (this.PARAMS.icon)
			BX.removeClass(this.PARTS.HEAD, this.PARAMS.icon);

		this.PARAMS.icon = icon_class;

		if (this.PARAMS.icon)
		{
			BX.addClass(this.PARTS.HEAD, this.PARAMS.icon);

			var icon_file = (BX.style(this.PARTS.HEAD, 'background-image') || BX.style(this.PARTS.HEAD, 'backgroundImage'));
			if (BX.type.isNotEmptyString(icon_file) && icon_file != 'none')
			{
				var match = icon_file.match(new RegExp('url\\s*\\(\\s*(\'|"|)(.+?)(\\1)\\s*\\)'));
				if(match)
				{
					icon_file = match[2];
					if (BX.type.isNotEmptyString(icon_file))
					{
						this.icon_image = new Image();
						this.icon_image.onload = BX.delegate(this.__adjustHeadToIcon, this);
						this.icon_image.src = icon_file;
					}
				}
			}
		}
	}
	this.adjustSize();
};

BX.CDialog.prototype.SetIconFile = function(icon_file)
{
	this.icon_image = new Image();
	this.icon_image.onload = BX.delegate(this.__adjustHeadToIcon, this);
	this.icon_image.src = icon_file;

	BX.adjust(this.PARTS.HEAD, {style: {backgroundImage: 'url(' + icon_file + ')', backgroundPosition: 'right 9px'/*'99% center'*/}});
	this.adjustSize();
};

/*
BUTTON: {
	title: 'title',
	'action': function executed in window object context
}
BX.CDialog.btnSave || BX.CDialog.btnCancel - standard buttons
*/

BX.CDialog.prototype.SetButtons = function(a)
{
	if (BX.type.isString(a))
	{
		if (a.length > 0)
		{
			this.PARTS.BUTTONS_CONTAINER.innerHTML += a;

			var btns = this.PARTS.BUTTONS_CONTAINER.getElementsByTagName('INPUT');
			if (btns.length > 0)
			{
				this.PARAMS.buttons = [];
				for (var i = 0; i < btns.length; i++)
				{
					this.PARAMS.buttons.push(new BX.CWindowButton({btn: btns[i], parentWindow: this}));
				}
			}
		}
	}
	else
	{
		this.PARAMS.buttons = a;
		BX.adjust(this.PARTS.BUTTONS_CONTAINER, {
			children: this.ShowButtons()
		});
	}
	this.adjustSize();
};

BX.CDialog.prototype.ClearButtons = function()
{
	BX.cleanNode(this.PARTS.BUTTONS_CONTAINER);
	this.adjustSize();
};

BX.CDialog.prototype.SetContent = function(html)
{
	this.__form = null;

	if (BX.type.isElementNode(html))
	{
		if (html.parentNode)
			html.parentNode.removeChild(html);
	}
	else if (BX.type.isString(html))
	{
		html = BX.create('DIV', {html: html});
	}

	this.PARAMS.content = html;
	BX.cleanNode(this.PARTS.CONTENT_DATA);

	BX.adjust(this.PARTS.CONTENT_DATA, {
		children: [
			this.PARTS.HEAD,
			BX.create('DIV', {
				props: {
					className: 'bx-core-adm-dialog-content-wrap-inner'
				},
				children: [this.PARAMS.content]
			})
		]
	});

	if (this.PARAMS.content_url && this.GetForm())
	{
		this.__form.submitbtn = this.__form.appendChild(BX.create('INPUT', {props:{type:'submit'},style:{display:'none'}}));
		this.__form.onsubmit = BX.delegate(this.__submit, this);
	}
};

BX.CDialog.prototype.__submit = function(e)
{
	for (var i=0,len=this.PARAMS.buttons.length; i<len; i++)
	{
		if (
			this.PARAMS.buttons[i]
			&& (
				this.PARAMS.buttons[i].name && /save|apply/i.test(this.PARAMS.buttons[i].name)
				||
				this.PARAMS.buttons[i].btn && this.PARAMS.buttons[i].btn.name && /save|apply/i.test(this.PARAMS.buttons[i].btn.name)
			)
		)
		{
			this.PARAMS.buttons[i].emulate();
			break;
		}
	}

	return BX.PreventDefault(e);
};

BX.CDialog.prototype.SwapContent = function(cont)
{
	cont = BX(cont);

	BX.cleanNode(this.PARTS.CONTENT_DATA);
	cont.parentNode.removeChild(cont);
	this.PARTS.CONTENT_DATA.appendChild(cont);
	cont.style.display = 'block';
	this.SetContent(cont.innerHTML);
};

// this method deprecated
BX.CDialog.prototype.adjustSize = function()
{
};

// this method deprecated
BX.CDialog.prototype.__adjustSize = function()
{
};

BX.CDialog.prototype.adjustSizeEx = function()
{
	BX.defer(this.__adjustSizeEx, this)();
};

BX.CDialog.prototype.__adjustSizeEx = function()
{
	var ob = this.PARTS.CONTENT_DATA.firstChild, new_height = 0;
	while (ob)
	{
		new_height += ob.offsetHeight
			+ parseInt(BX.style(ob, 'margin-top'))
			+ parseInt(BX.style(ob, 'margin-bottom'));

		ob = BX.nextSibling(ob);
	}

	if (new_height)
		this.PARTS.CONTENT_DATA.style.height = new_height + 'px';
};


BX.CDialog.prototype.__onResizeFinished = function()
{
	BX.WindowManager.saveWindowSize(
		this.PARAMS.resize_id || this.PARAMS.content_url, {height: parseInt(this.PARTS.CONTENT_DATA.style.height), width: parseInt(this.PARTS.CONTENT_DATA.style.width)}
	);
};

BX.CDialog.prototype.Show = function(bNotRegister)
{
	if ((!this.PARAMS.content) && this.PARAMS.content_url && BX.ajax && !bNotRegister)
	{
		var wait = BX.showWait();

		BX.WindowManager.currently_loaded = this;

		this.CreateOverlay(parseInt(BX.style(wait, 'z-index'))-1);
		this.OVERLAY.style.display = 'block';
		this.OVERLAY.className = 'bx-core-dialog-overlay';

		var post_data = '', method = 'GET';
		if (this.PARAMS.content_post)
		{
			post_data = this.PARAMS.content_post;
			method = 'POST';
		}

		var url = this.PARAMS.content_url
			+ (this.PARAMS.content_url.indexOf('?')<0?'?':'&')+'bxsender=' + this._sender;

		this.auth_callback = BX.delegate(function(){
			this.PARAMS.content = '';
			this.hideNotify();
			this.Show();
		}, this);

		BX.ajax({
			method: method,
			dataType: 'html',
			url: url,
			data: post_data,
			skipAuthCheck: true,
			onsuccess: BX.delegate(function(data) {
				BX.closeWait(null, wait);

				this.SetContent(data || '&nbsp;');
				this.Show();
			}, this),
			processScriptsConsecutive: true
		});
	}
	else
	{
		BX.WindowManager.currently_loaded = null;
		BX.CDialog.superclass.Show.apply(this, arguments);

		this.adjustPos();

		this.OVERLAY.className = 'bx-core-dialog-overlay';

		this.__adjustSize();

		BX.addCustomEvent(this, 'onWindowResize', BX.proxy(this.__adjustSize, this));

		if (this.PARAMS.resizable && (this.PARAMS.content_url || this.PARAMS.resize_id))
			BX.addCustomEvent(this, 'onWindowResizeFinished', BX.delegate(this.__onResizeFinished, this));
	}
};

BX.CDialog.prototype.GetInnerPos = function()
{
	return {'width': parseInt(this.PARTS.CONTENT_DATA.style.width), 'height': parseInt(this.PARTS.CONTENT_DATA.style.height)};
};

BX.CDialog.prototype.adjustPos = function()
{
	if (!this.bExpanded)
	{
		var windowSize = BX.GetWindowInnerSize();
		var windowScroll = BX.GetWindowScrollPos();

		BX.adjust(this.DIV, {
			style: {
				left: parseInt(windowScroll.scrollLeft + windowSize.innerWidth / 2 - parseInt(this.DIV.offsetWidth) / 2) + 'px',
				top: Math.max(parseInt(windowScroll.scrollTop + windowSize.innerHeight / 2 - parseInt(this.DIV.offsetHeight) / 2), 0) + 'px'
			}
		});
	}
};

BX.CDialog.prototype.GetContent = function () {return this.PARTS.CONTENT_DATA};

BX.CDialog.prototype.btnSave = BX.CDialog.btnSave = {
	title: BX.message('JS_CORE_WINDOW_SAVE'),
	id: 'savebtn',
	name: 'savebtn',
	className: BX.browser.IsIE() && BX.browser.IsDoctype() && !BX.browser.IsIE10() ? '' : 'adm-btn-save',
	action: function () {
		this.disableUntilError();
		this.parentWindow.PostParameters();
	}
};

BX.CDialog.prototype.btnCancel = BX.CDialog.btnCancel = {
	title: BX.message('JS_CORE_WINDOW_CANCEL'),
	id: 'cancel',
	name: 'cancel',
	action: function () {
		this.parentWindow.Close();
	}
};

BX.CDialog.prototype.btnClose = BX.CDialog.btnClose = {
	title: BX.message('JS_CORE_WINDOW_CLOSE'),
	id: 'close',
	name: 'close',
	action: function () {
		this.parentWindow.Close();
	}
};

/* special child for admin forms loaded into public page */
BX.CAdminDialog = function(arParams)
{
	BX.CAdminDialog.superclass.constructor.apply(this, arguments);

	this._sender = 'core_window_cadmindialog';

	BX.addClass(this.DIV, 'bx-core-adm-admin-dialog');

	this.PARTS.CONTENT.insertBefore(this.PARTS.HEAD, this.PARTS.CONTENT.firstChild);
	this.PARTS.HEAD.className = 'bx-core-adm-dialog-tabs';
};
BX.extend(BX.CAdminDialog, BX.CDialog);

BX.CAdminDialog.prototype.SetHead = function()
{
	BX.CAdminDialog.superclass.SetHead.apply(this, arguments);

	if (this.PARTS.HEAD.firstChild && BX.type.isElementNode(this.PARTS.HEAD.firstChild))
	{
		var ob = this.PARTS.HEAD.firstChild, new_width = 0, marginLeft = 0, marginRight = 0;

		while (ob)
		{
			marginLeft = parseInt(BX.style(ob, 'margin-left'), 10);
			if (isNaN(marginLeft))
			{
				marginLeft = 0;
			}
			marginRight = parseInt(BX.style(ob, 'margin-right'), 10);
			if (isNaN(marginRight))
			{
				marginRight = 0;
			}
			new_width += ob.offsetWidth + marginLeft + marginRight;
			ob = BX.nextSibling(ob);
		}

		this.SETTINGS.min_width = Math.max(new_width, this.SETTINGS.min_width) - 2;
		if (this.PARAMS.width < this.SETTINGS.min_width)
		{
			BX.adjust(this.PARTS.CONTENT_DATA, {
				style: {
					width: this.SETTINGS.min_width + 'px'
				}
			});
		}
	}
};

BX.CAdminDialog.prototype.SetContent = function(html)
{
	this.__form = null;

	if (BX.type.isElementNode(html))
	{
		if (html.parentNode)
			html.parentNode.removeChild(html);
	}

	this.PARAMS.content = html;
	BX.cleanNode(this.PARTS.CONTENT_DATA);

	BX.adjust(this.PARTS.CONTENT_DATA, {
		children: [
			this.PARAMS.content || '&nbsp;'
		]
	});

	if (this.PARAMS.content_url && this.GetForm())
	{
		this.__form.appendChild(BX.create('INPUT', {props:{type:'submit'},style:{display:'none'}}));
		this.__form.onsubmit = BX.delegate(this.__submit, this);
	}
};

BX.CAdminDialog.prototype.__adjustSizeEx = function()
{
	var new_height = BX.firstChild(this.PARTS.CONTENT_DATA).offsetHeight;
	if (new_height)
		this.PARTS.CONTENT_DATA.style.height = new_height + 'px';
};

BX.CAdminDialog.prototype.__expandGetSize = function()
{
	var res = BX.CAdminDialog.superclass.__expandGetSize.apply(this, arguments);

	res.width -= parseInt(BX.style(this.PARTS.CONTENT_DATA, 'padding-right')) + parseInt(BX.style(this.PARTS.CONTENT_DATA, 'padding-left'));
	res.height -= parseInt(BX.style(this.PARTS.CONTENT_DATA, 'padding-top')) + parseInt(BX.style(this.PARTS.CONTENT_DATA, 'padding-bottom'));

	res.height -= this.PARTS.HEAD.offsetHeight;

	return res;
};

BX.CAdminDialog.prototype.Submit = function()
{
	var FORM = this.GetForm();
	if (FORM && !FORM['bxpublic'] && !/bxpublic=/.test(FORM.action))
	{
		FORM.appendChild(BX.create('INPUT', {
			props: {
				type: 'hidden',
				name: 'bxpublic',
				value: 'Y'
			}
		}));
	}

	return BX.CAdminDialog.superclass.Submit.apply(this, arguments);
};

BX.CAdminDialog.prototype.btnSave = BX.CAdminDialog.btnSave = {
	title: BX.message('JS_CORE_WINDOW_SAVE'),
	id: 'savebtn',
	name: 'savebtn',
	className: 'adm-btn-save',
	action: function () {
		this.disableUntilError();
		this.parentWindow.Submit();
	}
};

BX.CAdminDialog.btnCancel = BX.CAdminDialog.superclass.btnCancel;
BX.CAdminDialog.btnClose = BX.CAdminDialog.superclass.btnClose;

BX.CDebugDialog = function(arParams)
{
	BX.CDebugDialog.superclass.constructor.apply(this, arguments);
};
BX.extend(BX.CDebugDialog, BX.CDialog);

BX.CDebugDialog.prototype.ShowDetails = function(div_id)
{
	var div = BX(div_id);
	if (div)
	{
		if (this.div_detail_current)
			this.div_detail_current.style.display = 'none';

		div.style.display = 'block';
		this.div_detail_current = div;
	}
};

BX.CDebugDialog.prototype.SetContent = function(html)
{
	if (!html)
		return;

	var arHtml = html.split('#DIVIDER#');
	if (arHtml.length > 1)
	{
		this.PARAMS.content = arHtml[1];

		this.PARTS.CONTENT_DATA.style.overflow = 'hidden';

		BX.CDebugDialog.superclass.SetContent.apply(this, [arHtml[1]]);

		this.PARTS.CONTENT_INNER = this.PARTS.CONTENT_DATA.firstChild.nextSibling;
		this.PARTS.CONTENT_TOP = this.PARTS.CONTENT_DATA.insertBefore(BX.create('DIV', {
			props: {
				className: 'bx-debug-content-top'
			},
			html: arHtml[0]
		}), this.PARTS.CONTENT_INNER);
		this.PARTS.CONTENT_INNER.style.overflow = 'auto';
	}
	else
	{
		BX.CDebugDialog.superclass.SetContent.apply(this, arguments);
	}
};

BX.CDebugDialog.prototype.__adjustSize = function()
{
	BX.CDebugDialog.superclass.__adjustSize.apply(this, arguments);

	if (this.PARTS.CONTENT_TOP)
	{
		var new_height = this.PARTS.CONTENT_DATA.offsetHeight - this.PARTS.HEAD.offsetHeight - this.PARTS.CONTENT_TOP.offsetHeight - 38;

		if (new_height > 0)
		{
			this.PARTS.CONTENT_INNER.style.height = new_height + 'px';
		}
	}
};


/* class for dialog window with editors */

BX.CEditorDialog = function(arParams)
{
	BX.CEditorDialog.superclass.constructor.apply(this, arguments);

	BX.removeClass(this.PARTS.CONTENT, 'bx-core-adm-dialog-content-wrap');
	BX.removeClass(this.PARTS.CONTENT_DATA, 'bx-core-adm-dialog-content');

	BX.removeClass(this.PARTS.CONTENT_DATA.lastChild, 'bx-core-adm-dialog-content-wrap-inner');
	BX.removeClass(this.PARTS.BUTTONS_CONTAINER, 'bx-core-adm-dialog-buttons');

	BX.addClass(this.PARTS.CONTENT, 'bx-core-editor-dialog-content-wrap');
	BX.addClass(this.PARTS.CONTENT_DATA, 'bx-core-editor-dialog-content');
	BX.addClass(this.PARTS.BUTTONS_CONTAINER, 'bx-core-editor-dialog-buttons');
};
BX.extend(BX.CEditorDialog, BX.CDialog);

BX.CEditorDialog.prototype.SetContent  = function()
{
	BX.CEditorDialog.superclass.SetContent.apply(this, arguments);

	BX.removeClass(this.PARTS.CONTENT_DATA.lastChild, 'bx-core-adm-dialog-content-wrap-inner');
};

/* class for wizards in admin section */
BX.CWizardDialog = function(arParams)
{
	BX.CWizardDialog.superclass.constructor.apply(this, arguments);

	BX.removeClass(this.PARTS.CONTENT, 'bx-core-adm-dialog-content-wrap');
	BX.removeClass(this.PARTS.CONTENT_DATA, 'bx-core-adm-dialog-content');
	BX.removeClass(this.PARTS.CONTENT_DATA.lastChild, 'bx-core-adm-dialog-content-wrap-inner');
	BX.removeClass(this.PARTS.BUTTONS_CONTAINER, 'bx-core-adm-dialog-buttons');

	BX.addClass(this.PARTS.CONTENT, 'bx-core-wizard-dialog-content-wrap');
};

BX.extend(BX.CWizardDialog, BX.CDialog);

/* class for auth dialog */
BX.CAuthDialog = function(arParams)
{
	arParams.resizable = false;
	arParams.width = 350;
	arParams.height = 200;

	arParams.buttons = [this.btnSave];

	BX.CAuthDialog.superclass.constructor.apply(this, arguments);
	this._sender = 'core_window_cauthdialog';

	BX.addClass(this.DIV, 'bx-core-auth-dialog');

	BX.AUTHAGENT = this;
};
BX.extend(BX.CAuthDialog, BX.CDialog);

BX.CAuthDialog.prototype.btnSave = BX.CAuthDialog.btnSave = {
	title: BX.message('JS_CORE_WINDOW_AUTH'),
	id: 'savebtn',
	name: 'savebtn',
	className: 'adm-btn-save',
	action: function () {
		this.disableUntilError();
		this.parentWindow.Submit('', this.parentWindow.PARAMS.content_url);
	}
};

BX.CAuthDialog.prototype.SetError = function(error)
{
	BX.closeWait();

	if (!!error)
		this.ShowError(error.MESSAGE || error);
};

BX.CAuthDialog.prototype.setAuthResult = function(result)
{
	BX.closeWait();

	if (result === false)
	{
		this.Close();
		if (this.PARAMS.callback)
			this.PARAMS.callback();
	}
	else
	{
		this.SetError(result);
	}
};

/* MENU CLASSES */

BX.CWindowFloat = function(node)
{
	BX.CWindowFloat.superclass.constructor.apply(this, [node, 'float']);

	this.SETTINGS.resizable = false;
};
BX.extend(BX.CWindowFloat, BX.CWindow);

BX.CWindowFloat.prototype.adjustPos = function()
{
	if (this.PARAMS.parent)
		this.adjustToNode();
	else if (this.PARAMS.x && this.PARAMS.y)
		this.adjustToPos([this.PARAMS.x, this.PARAMS.y]);
};

BX.CWindowFloat.prototype.adjustToPos = function(pos)
{
	this.DIV.style.left = parseInt(pos[0]) + 'px';
	this.DIV.style.top = parseInt(pos[1]) + 'px';
};

BX.CWindowFloat.prototype.adjustToNodeGetPos = function()
{
	return BX.pos(this.PARAMS.parent);
};

BX.CWindowFloat.prototype.adjustToNode = function(el)
{
	el = el || this.PARAMS.parent;

	this.PARAMS.parent = BX(el);

	if (this.PARAMS.parent)
	{
		var pos = this.adjustToNodeGetPos();

		this.DIV.style.top = pos.top + 'px';//(pos.top - 26) + 'px';
		this.DIV.style.left = pos.left + 'px';

		this.PARAMS.parent.OPENER = this;
	}
};

BX.CWindowFloat.prototype.Show = function()
{
	this.adjustToPos([-1000, -1000]);
	BX.CWindowFloat.superclass.Show.apply(this, arguments);
	this.adjustPos();
};

/* menu opener class */
/*
{
	DOMNode DIV,
	BX.CMenu or Array MENU,
	TYPE = 'hover' | 'click',
	TIMEOUT: 1000
	ATTACH_MODE: 'top' | 'right'
	ACTIVE_CLASS: className for opener element when menu is opened
}
*/
BX.COpener = function(arParams)
{
	this.PARAMS = arParams || {};

	this.MENU = arParams.MENU || [];

	this.DIV = arParams.DIV;
	this.ATTACH = arParams.ATTACH || arParams.DIV;
	this.ATTACH_MODE = arParams.ATTACH_MODE || 'bottom';

	this.ACTIVE_CLASS = arParams.ACTIVE_CLASS || '';
	this.LEVEL = arParams.LEVEL || 0;

	this.CLOSE_ON_CLICK = typeof arParams.CLOSE_ON_CLICK != 'undefined' ? !!arParams.CLOSE_ON_CLICK : true;
	this.ADJUST_ON_CLICK = typeof arParams.ADJUST_ON_CLICK != 'undefined' ? !!arParams.ADJUST_ON_CLICK : true;

	this.TYPE = this.PARAMS.TYPE == 'hover' ? 'hover' : 'click';

	this._openTimeout = null;

	if (this.PARAMS.TYPE == 'hover' && arParams.TIMEOUT !== 0)
		this.TIMEOUT = arParams.TIMEOUT || 1000;
	else
		this.TIMEOUT = 0;

	if (!!this.PARAMS.MENU_URL)
	{
		this.bMenuLoaded = false;
		this.bMenuLoading = false;

		this.MENU = [{
			TEXT: BX.message('JS_CORE_LOADING'),
			CLOSE_ON_CLICK: false
		}];

		if (this.PARAMS.MENU_PRELOAD)
		{
			BX.defer(this.Load, this)();
		}
	}

	BX.ready(BX.defer(this.Init, this));
};

BX.COpener.prototype.Init = function()
{
	this.DIV = BX(this.DIV);

	switch (this.TYPE)
	{
		case 'hover':
			BX.bind(this.DIV, 'mouseover', BX.proxy(this.Open, this));
			BX.bind(this.DIV, 'click', BX.proxy(this.Toggle, this));
		break;

		case 'click':
			BX.bind(this.DIV, 'click', BX.proxy(this.Toggle, this));
		break;
	}

	//BX.bind(window, 'scroll', BX.delegate(this.__close_immediately, this));

	this.bMenuInit = false;
};

BX.COpener.prototype.Load = function()
{
	if (this.PARAMS.MENU_URL && !this.bMenuLoaded)
	{
		if (!this.bMenuLoading)
		{
			var url = this.PARAMS.MENU_URL;
			if (url.indexOf('sessid=') <= 0)
				url += (url.indexOf('?') > 0 ? '&' : '?') + 'sessid=' + BX.bitrix_sessid();

			this.bMenuLoading = true;
			BX.ajax.loadJSON(url, BX.proxy(this.SetMenu, this), BX.proxy(this.LoadFailed, this));
		}
	}
};

BX.COpener.prototype.SetMenu = function(menu)
{
	this.bMenuLoaded = true;
	this.bMenuLoading = false;
	if (this.bMenuInit)
	{
		this.MENU.setItems(menu);
	}
	else
	{
		this.MENU = menu;
	}
};

BX.COpener.prototype.LoadFailed = function(type, error)
{
	this.bMenuLoading = false;
	this.SetMenu([{
		TEXT: BX.message('JS_CORE_NO_DATA'),
		CLOSE_ON_CLICK: true
	}]);
	BX.debug(arguments);
};

BX.COpener.prototype.checkAdminMenu = function()
{
	if (document.documentElement.id == 'bx-admin-prefix')
		return true;

	return !!BX.findParent(this.DIV, {property: {id: 'bx-admin-prefix'}});
};

BX.COpener.prototype.Toggle = function(e)
{
	this.__clear_timeout();

	if (!this.bMenuInit || !this.MENU.visible())
	{
		var t = this.TIMEOUT;
		this.TIMEOUT = 0;
		this.Open(e);
		this.TIMEOUT = t;
	}
	else
	{
		this.MENU.Close();
	}

	return !!(e||window.event) && BX.PreventDefault(e);
};

BX.COpener.prototype.GetMenu = function()
{
	if (!this.bMenuInit)
	{
		if (BX.type.isArray(this.MENU))
		{
			this.MENU = new BX.CMenu({
				ITEMS: this.MENU,
				ATTACH_MODE: this.ATTACH_MODE,
				SET_ID: this.checkAdminMenu() ? 'bx-admin-prefix' : '',
				CLOSE_ON_CLICK: !!this.CLOSE_ON_CLICK,
				ADJUST_ON_CLICK: !!this.ADJUST_ON_CLICK,
				LEVEL: this.LEVEL,
				parent: BX(this.DIV),
				parent_attach: BX(this.ATTACH)
			});

			if (this.LEVEL > 0)
			{
				BX.bind(this.MENU.DIV, 'mouseover', BX.proxy(this._on_menu_hover, this));
				BX.bind(this.MENU.DIV, 'mouseout', BX.proxy(this._on_menu_hout, this));
			}
		}

		BX.addCustomEvent(this.MENU, 'onMenuOpen', BX.proxy(this.handler_onopen, this));
		BX.addCustomEvent(this.MENU, 'onMenuClose', BX.proxy(this.handler_onclose, this));

		BX.addCustomEvent('onMenuItemHover', BX.proxy(this.handler_onover, this));

		this.bMenuInit = true;
	}

	return this.MENU;
};

BX.COpener.prototype.Open = function()
{
	this.GetMenu();

	this.bOpen = true;

	this.__clear_timeout();

	if (this.TIMEOUT > 0)
	{
		BX.bind(this.DIV, 'mouseout', BX.proxy(this.__clear_timeout, this));
		this._openTimeout = setTimeout(BX.proxy(this.__open, this), this.TIMEOUT);
	}
	else
	{
		this.__open();
	}

	if (!!this.PARAMS.MENU_URL && !this.bMenuLoaded)
	{
		this._loadTimeout = setTimeout(BX.proxy(this.Load, this), parseInt(this.TIMEOUT/2));
	}

	return true;
};

BX.COpener.prototype.__clear_timeout = function()
{
	if (!!this._openTimeout)
		clearTimeout(this._openTimeout);
	if (!!this._loadTimeout)
		clearTimeout(this._loadTimeout);

	BX.unbind(this.DIV, 'mouseout', BX.proxy(this.__clear_timeout, this));
};

BX.COpener.prototype._on_menu_hover = function()
{
	this.bMenuHover = true;

	this.__clear_timeout();

	if (this.ACTIVE_CLASS)
		BX.addClass(this.DIV, this.ACTIVE_CLASS);

};

BX.COpener.prototype._on_menu_hout = function()
{
	this.bMenuHover = false;
};

BX.COpener.prototype.handler_onover = function(level, opener)
{
	if (this.bMenuHover)
		return;

	if (opener != this && level == this.LEVEL-1 && this.ACTIVE_CLASS)
	{
		BX.removeClass(this.DIV, this.ACTIVE_CLASS);
	}

	if (this.bMenuInit && level <= this.LEVEL-1 && this.MENU.visible())
	{
		if (opener != this)
		{
			this.__clear_timeout();
			this._openTimeout = setTimeout(BX.proxy(this.Close, this), this.TIMEOUT);
		}
	}
};

BX.COpener.prototype.handler_onopen = function()
{
	this.bOpen = true;

	if (this.ACTIVE_CLASS)
		BX.addClass(this.DIV, this.ACTIVE_CLASS);

	BX.defer(function() {
		BX.onCustomEvent(this, 'onOpenerMenuOpen');
	}, this)();
};

BX.COpener.prototype.handler_onclose = function()
{
	this.bOpen = false;
	BX.onCustomEvent(this, 'onOpenerMenuClose');

	if (this.ACTIVE_CLASS)
		BX.removeClass(this.DIV, this.ACTIVE_CLASS);
};

BX.COpener.prototype.Close = function()
{
	if (!this.bMenuInit)
		return;

	if (!!this._openTimeout)
		clearTimeout(this._openTimeout);

	this.bOpen = false;

	this.__close();
};

BX.COpener.prototype.__open = function()
{
	this.__clear_timeout();

	if (this.bMenuInit && this.bOpen && !this.MENU.visible())
		this.MENU.Show();
};

BX.COpener.prototype.__close = function()
{
	if (this.bMenuInit && !this.bOpen && this.MENU.visible())
		this.MENU.Hide();
};

BX.COpener.prototype.__close_immediately = function() {
	this.bOpen = false; this.__close();
};

BX.COpener.prototype.isMenuVisible = function() {
	return null != this.MENU.visible && this.MENU.visible()
};

/* common menu class */

BX.CMenu = function(arParams)
{
	BX.CMenu.superclass.constructor.apply(this);

	this.DIV.style.width = 'auto';//this.DIV.firstChild.offsetWidth + 'px';
	this.DIV.style.height = 'auto';//this.DIV.firstChild.offsetHeight + 'px';

	this.PARAMS = arParams || {};
	this.PARTS = {};

	this.PARAMS.ATTACH_MODE = this.PARAMS.ATTACH_MODE || 'bottom';
	this.PARAMS.CLOSE_ON_CLICK = typeof this.PARAMS.CLOSE_ON_CLICK == 'undefined' ? true : this.PARAMS.CLOSE_ON_CLICK;
	this.PARAMS.ADJUST_ON_CLICK = typeof this.PARAMS.ADJUST_ON_CLICK == 'undefined' ? true : this.PARAMS.ADJUST_ON_CLICK;
	this.PARAMS.LEVEL = this.PARAMS.LEVEL || 0;

	this.DIV.className = 'bx-core-popup-menu bx-core-popup-menu-' + this.PARAMS.ATTACH_MODE + ' bx-core-popup-menu-level' + this.PARAMS.LEVEL + (typeof this.PARAMS.ADDITIONAL_CLASS != 'undefined' ? ' ' + this.PARAMS.ADDITIONAL_CLASS : '');
	if (!!this.PARAMS.SET_ID)
		this.DIV.id = this.PARAMS.SET_ID;

	if (this.PARAMS.LEVEL == 0)
	{
		this.ARROW = this.DIV.appendChild(BX.create('SPAN', {props: {className: 'bx-core-popup-menu-angle'}, style: {left:'15px'}}));
	}

	if (!!this.PARAMS.CLASS_NAME)
		this.DIV.className += ' ' + this.PARAMS.CLASS_NAME;

	BX.bind(this.DIV, 'click', BX.eventCancelBubble);

	this.ITEMS = [];

	this.setItems(this.PARAMS.ITEMS);

	BX.addCustomEvent('onMenuOpen', BX.proxy(this._onMenuOpen, this));
	BX.addCustomEvent('onMenuItemSelected', BX.proxy(this.Hide, this));
};
BX.extend(BX.CMenu, BX.CWindowFloat);

BX.CMenu.broadcastCloseEvent = function()
{
	BX.onCustomEvent("onMenuItemSelected");
};

BX.CMenu._toggleChecked = function()
{
	BX.toggleClass(this, 'bx-core-popup-menu-item-checked');
};

BX.CMenu._itemDblClick = function()
{
	window.location.href = this.href;
};

BX.CMenu.prototype.toggleArrow = function(v)
{
	if (!!this.ARROW)
	{
		if (typeof v == 'undefined')
		{
			v = this.ARROW.style.visibility == 'hidden';
		}

		this.ARROW.style.visibility = !!v ? 'visible' : 'hidden';
	}
};

BX.CMenu.prototype.visible = function()
{
	return this.DIV.style.display !== 'none';
};

BX.CMenu.prototype._onMenuOpen = function(menu, menu_level)
{
	if (this.visible())
	{
		if (menu_level == this.PARAMS.LEVEL && menu != this)
		{
			this.Hide();
		}
	}
};

BX.CMenu.prototype.onUnRegister = function()
{
	if (!this.visible())
		return;

	this.Hide();
};

BX.CMenu.prototype.setItems = function(items)
{
	this.PARAMS.ITEMS = items;

	BX.cleanNode(this.DIV);

	if (!!this.ARROW)
		this.DIV.appendChild(this.ARROW);

	if (this.PARAMS.ITEMS)
	{
		this.PARAMS.ITEMS = BX.util.array_values(this.PARAMS.ITEMS);

		var bIcons = false;
		var cnt = 0;
		for (var i = 0, len = this.PARAMS.ITEMS.length; i < len; i++)
		{
			if ((i == 0 || i == len-1) && this.PARAMS.ITEMS[i].SEPARATOR)
				continue;

			cnt++;

			if (!bIcons)
				bIcons = !!this.PARAMS.ITEMS[i].GLOBAL_ICON;

			this.addItem(this.PARAMS.ITEMS[i], i);
		}

		// Occam turning in his grave
		if (cnt === 1)
			BX.addClass(this.DIV, 'bx-core-popup-menu-single-item');
		else
			BX.removeClass(this.DIV, 'bx-core-popup-menu-single-item');

		if (!bIcons)
			BX.addClass(this.DIV, 'bx-core-popup-menu-no-icons');
		else
			BX.removeClass(this.DIV, 'bx-core-popup-menu-no-icons');

	}
};

BX.CMenu.prototype.addItem = function(item)
{
	this.ITEMS.push(item);

	if (item.SEPARATOR)
	{
		item.NODE = BX.create(
			'DIV', {props: {className: 'bx-core-popup-menu-separator'}}
		);
	}
	else
	{
		var bHasMenu = (!!item.MENU
			&& (
				(BX.type.isArray(item.MENU) && item.MENU.length > 0)
				|| item.MENU instanceof BX.CMenu
			) || !!item.MENU_URL
		);

		if (item.DISABLED)
		{
			item.CLOSE_ON_CLICK = false;
			item.LINK = null;
			item.ONCLICK = null;
			item.ACTION = null;
		}

		item.NODE = BX.create(!!item.LINK || BX.browser.IsIE() && !BX.browser.IsDoctype() ? 'A' : 'SPAN', {
			props: {
				className: 'bx-core-popup-menu-item'
					+ (bHasMenu ? ' bx-core-popup-menu-item-opener' : '')
					+ (!!item.DEFAULT ? ' bx-core-popup-menu-item-default' : '')
					+ (!!item.DISABLED ? ' bx-core-popup-menu-item-disabled' : '')
					+ (!!item.CHECKED ? ' bx-core-popup-menu-item-checked' : ''),
					title: !!BX.message['MENU_ENABLE_TOOLTIP'] || !!item.SHOW_TITLE ? item.TITLE || '' : '',
				BXMENULEVEL: this.PARAMS.LEVEL
			},
			attrs: !!item.LINK || BX.browser.IsIE() && !BX.browser.IsDoctype() ? {href: item.LINK || 'javascript:void(0)'} : {},
			events: {
				mouseover: function()
				{
					BX.onCustomEvent('onMenuItemHover', [this.BXMENULEVEL, this.OPENER])
				}
			},
			html: '<span class="bx-core-popup-menu-item-icon' + (item.GLOBAL_ICON ? ' '+item.GLOBAL_ICON : '') + '"></span><span class="bx-core-popup-menu-item-text">'+item.TEXT+'</span>'
		});

		if (bHasMenu && !item.DISABLED)
		{
			item.NODE.OPENER = new BX.COpener({
				DIV: item.NODE,
				ACTIVE_CLASS: 'bx-core-popup-menu-item-opened',
				TYPE: 'hover',
				MENU: item.MENU,
				MENU_URL: item.MENU_URL,
				MENU_PRELOAD: !!item.MENU_PRELOAD,
				LEVEL: this.PARAMS.LEVEL + 1,
				ATTACH_MODE:'right',
				TIMEOUT: 500
			});
		}
		else if (this.PARAMS.CLOSE_ON_CLICK && (typeof item.CLOSE_ON_CLICK == 'undefined' || !!item.CLOSE_ON_CLICK))
		{
			BX.bind(item.NODE, 'click', BX.CMenu.broadcastCloseEvent);
		}
		else if (this.PARAMS.ADJUST_ON_CLICK && (typeof item.ADJUST_ON_CLICK == 'undefined' || !!item.ADJUST_ON_CLICK))
		{
			BX.bind(item.NODE, 'click', BX.defer(this.adjustPos, this));
		}

		if (bHasMenu && !!item.LINK)
		{
			BX.bind(item.NODE, 'dblclick', BX.CMenu._itemDblClick);
		}

		if (typeof item.CHECKED != 'undefined')
		{
			BX.bind(item.NODE, 'click', BX.CMenu._toggleChecked);
		}

		item.ONCLICK = item.ACTION || item.ONCLICK;
		if (!!item.ONCLICK)
		{
			if (BX.type.isString(item.ONCLICK))
			{
				item.ONCLICK = new Function("event", item.ONCLICK);
			}

			BX.bind(item.NODE, 'click', item.ONCLICK);
		}
	}

	this.DIV.appendChild(item.NODE);
};

BX.CMenu.prototype._documentClickBind = function()
{
	this._documentClickUnBind();
	BX.bind(document, 'click', BX.proxy(this._documentClick, this));
};

BX.CMenu.prototype._documentClickUnBind = function()
{
	BX.unbind(document, 'click', BX.proxy(this._documentClick, this));
};

BX.CMenu.prototype._documentClick = function(e)
{
	e = e||window.event;
	if(!!e && !(BX.getEventButton(e) & BX.MSLEFT))
		return;

	this.Close();
};

BX.CMenu.prototype.Show = function()
{
	BX.onCustomEvent(this, 'onMenuOpen', [this, this.PARAMS.LEVEL]);
	BX.CMenu.superclass.Show.apply(this, []);

	this.bCloseEventFired = false;

	BX.addCustomEvent(this.PARAMS.parent_attach, 'onChangeNodePosition', BX.proxy(this.adjustToNode, this));

	(BX.defer(this._documentClickBind, this))();
};

BX.CMenu.prototype.Close = // we shouldn't 'Close' window - only hide
BX.CMenu.prototype.Hide = function()
{
	if (!this.visible())
		return;

	BX.removeCustomEvent(this.PARAMS.parent_attach, 'onChangeNodePosition', BX.proxy(this.adjustToNode, this));

	this._documentClickUnBind();

	if (!this.bCloseEventFired)
	{
		BX.onCustomEvent(this, 'onMenuClose', [this, this.PARAMS.LEVEL]);
		this.bCloseEventFired = true;
	}
	BX.CMenu.superclass.Hide.apply(this, arguments);


//	this.DIV.onclick = null;
	//this.PARAMS.parent.onclick = null;
};

BX.CMenu.prototype.__adjustMenuToNode = function()
{
	var pos = BX.pos(this.PARAMS.parent_attach),
		bFixed = !!BX.findParent(this.PARAMS.parent_attach, BX.is_fixed);

	if (bFixed)
		this.DIV.style.position = 'fixed';
	else
		this.DIV.style.position = 'absolute';

	if (!pos.top)
	{
		this.DIV.style.top = '-1000px';
		this.DIV.style.left = '-1000px';
	}

	if (this.bTimeoutSet) return;

	var floatWidth = this.DIV.offsetWidth, floatHeight = this.DIV.offsetHeight;
	if (!floatWidth)
	{
		setTimeout(BX.delegate(function(){
			this.bTimeoutSet = false; this.__adjustMenuToNode();
		}, this), 100);

		this.bTimeoutSet = true;
		return;
	}

	var menu_pos = {},
		wndSize = BX.GetWindowSize();

/*
	if (BX.browser.IsIE() && !BX.browser.IsDoctype())
	{
		pos.top -= 4; pos.bottom -= 4;
		pos.left -= 2; pos.right -= 2;
	}
*/

	switch (this.PARAMS.ATTACH_MODE)
	{
		case 'bottom':
			menu_pos.top = pos.bottom + 9;
			menu_pos.left = pos.left;

			var arrowPos = 0;
			if (!!this.ARROW)
			{
				if (pos.width > floatWidth)
					arrowPos = parseInt(floatWidth/2 - 7);
				else
					arrowPos = parseInt(Math.min(floatWidth, pos.width)/2 - 7);

				if (arrowPos < 7)
				{
					menu_pos.left -= 15;
					arrowPos += 15;
				}
			}

			if (menu_pos.left > wndSize.scrollWidth - floatWidth - 10)
			{
				var orig_menu_pos = menu_pos.left;
				menu_pos.left = wndSize.scrollWidth - floatWidth - 10;

				if (!!this.ARROW)
					arrowPos += orig_menu_pos - menu_pos.left;
			}

			if (bFixed)
			{
				menu_pos.left -= wndSize.scrollLeft;
			}

			if (!!this.ARROW)
				this.ARROW.style.left = arrowPos + 'px';
		break;
		case 'right':
			menu_pos.top = pos.top-1;
			menu_pos.left = pos.right;

			if (menu_pos.left > wndSize.scrollWidth - floatWidth - 10)
			{
				menu_pos.left = pos.left - floatWidth - 1;
			}
		break;
	}

	if (bFixed)
	{
		menu_pos.top -= wndSize.scrollTop;
	}

	if (!!this.ARROW)
		this.ARROW.className = 'bx-core-popup-menu-angle';

	if((menu_pos.top + floatHeight > wndSize.scrollTop + wndSize.innerHeight)
		|| (menu_pos.top + floatHeight > wndSize.scrollHeight))
	{
		var new_top = this.PARAMS.ATTACH_MODE == 'bottom'
			? pos.top - floatHeight - 9
			: pos.bottom - floatHeight + 1;

		if((new_top > wndSize.scrollTop)
			|| (menu_pos.top + floatHeight > wndSize.scrollHeight))
		{
			if ((menu_pos.top + floatHeight > wndSize.scrollHeight))
			{
				menu_pos.top = Math.max(0, wndSize.scrollHeight-floatHeight);
				this.toggleArrow(false);
			}
			else
			{
				menu_pos.top = new_top;

				if (!!this.ARROW)
					this.ARROW.className = 'bx-core-popup-menu-angle-bottom';
			}
		}
	}

	if (menu_pos.top + menu_pos.left == 0)
	{
		this.Hide();
	}
	else
	{
		this.DIV.style.top = menu_pos.top + 'px';
		this.DIV.style.left = menu_pos.left + 'px';
	}
};

BX.CMenu.prototype.adjustToNode = function(el)
{
	this.PARAMS.parent_attach = BX(el) || this.PARAMS.parent_attach || this.PARAMS.parent;
	this.__adjustMenuToNode();
};


/* components toolbar class */

BX.CMenuOpener = function(arParams)
{
	BX.CMenuOpener.superclass.constructor.apply(this);

	this.PARAMS = arParams || {};
	this.setParent(this.PARAMS.parent);
	this.PARTS = {};

	this.SETTINGS.drag_restrict = true;

	this.defaultAction = null;

	this.timeout = 500;

	this.DIV.className = 'bx-component-opener';
	this.DIV.ondblclick = BX.PreventDefault;

	if (this.PARAMS.component_id)
	{
		this.PARAMS.transform = !!this.PARAMS.transform;
	}

	this.OPENERS = [];

	this.DIV.appendChild(BX.create('SPAN', {
		props: {className: 'bx-context-toolbar' + (this.PARAMS.transform ? ' bx-context-toolbar-vertical-mode' : '')}
	}));

	//set internal structure and register draggable element
	this.PARTS.INNER = this.DIV.firstChild.appendChild(BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-inner'},
		html: '<span class="bx-context-toolbar-drag-icon"></span><span class="bx-context-toolbar-vertical-line"></span><br>'
	}));

	this.EXTRA_BUTTONS = {};

	var btnCount = 0;
	for (var i = 0, len = this.PARAMS.menu.length; i < len; i++)
	{
		var item = this.addItem(this.PARAMS.menu[i]);
		if (null != item)
		{
			btnCount++;
			this.PARTS.INNER.appendChild(item);
			this.PARTS.INNER.appendChild(BX.create('BR'));
		}
	}
	var bHasButtons = btnCount > 0;

	//menu items will be attached here

	this.PARTS.ICONS = this.PARTS.INNER.appendChild(BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-icons'}
	}));

	if (this.PARAMS.component_id)
	{
		this.PARAMS.pin = !!this.PARAMS.pin;

		if (bHasButtons)
			this.PARTS.ICONS.appendChild(BX.create('SPAN', {props: {className: 'bx-context-toolbar-separator'}}));

		this.PARTS.ICON_PIN = this.PARTS.ICONS.appendChild(BX.create('A', {
			attrs: {
				href: 'javascript:void(0)'
			},
			props: {
				className: this.PARAMS.pin
							? 'bx-context-toolbar-pin-fixed'
							: 'bx-context-toolbar-pin'
			},
			events: {
				click: BX.delegate(this.__pin_btn_clicked, this)
			}
		}));
	}


	if (this.EXTRA_BUTTONS['components2_props'])
	{
		var btn = this.EXTRA_BUTTONS['components2_props'] || {URL: 'javascript:void(0)'};
		if (null == this.defaultAction)
		{
			this.defaultAction = btn.ONCLICK;
			this.defaultActionTitle = btn.TITLE || btn.TEXT;
		}

		btn.URL = 'javascript:' + BX.util.urlencode(btn.ONCLICK);

		this.ATTACH = this.PARTS.ICONS.appendChild(BX.create('SPAN', {
			props: {className: 'bx-context-toolbar-button bx-context-toolbar-button-settings' },
			children:
			[
				BX.create('SPAN',
				{
					props:{className: 'bx-context-toolbar-button-inner'},
					children:
					[
						BX.create('A', {
							attrs: {href: btn.URL},
							events: {
								mouseover: BX.proxy(this.__msover_text, this),
								mouseout: BX.proxy(this.__msout_text, this),
								mousedown: BX.proxy(this.__msdown_text, this)
							},
							html: '<span class="bx-context-toolbar-button-icon bx-context-toolbar-settings-icon"></span>'
						}),
						BX.create('A', {
							attrs: {href: 'javascript: void(0)'},
							props: {className: 'bx-context-toolbar-button-arrow'},
							events: {
								mouseover: BX.proxy(this.__msover_arrow, this),
								mouseout: BX.proxy(this.__msout_arrow, this),
								mousedown: BX.proxy(this.__msdown_arrow, this)
							},
							html: '<span class="bx-context-toolbar-button-arrow"></span>'
						})
					]
				})
			]
		}));

		this.OPENER = this.ATTACH.firstChild.lastChild;

		var opener = this.attachMenu(this.EXTRA_BUTTONS['components2_submenu']['MENU']);

		BX.addCustomEvent(opener, 'onOpenerMenuOpen', BX.proxy(this.__menu_open, this));
		BX.addCustomEvent(opener, 'onOpenerMenuClose', BX.proxy(this.__menu_close, this));
	}

	if (btnCount > 1)
	{
		this.PARTS.ICONS.appendChild(BX.create('span', { props: {className: 'bx-context-toolbar-separator bx-context-toolbar-separator-switcher'}}));

		this.ICON_TRANSFORM = this.PARTS.ICONS.appendChild(BX.create('A', {
			attrs: {href: 'javascript: void(0)'},
			props: {className: 'bx-context-toolbar-switcher'},
			events: {
				click: BX.delegate(this.__trf_btn_clicked, this)
			}
		}));
	}

	if (this.PARAMS.HINT)
	{
		this.DIV.BXHINT = this.HINT = new BX.CHint({
			parent: this.DIV,
			hint:this.PARAMS.HINT.TEXT || '',
			title: this.PARAMS.HINT.TITLE || '',
			hide_timeout: this.timeout/2,
			preventHide: false
		});
	}

	BX.addCustomEvent(this, 'onWindowDragFinished', BX.delegate(this.__onMoveFinished, this));
	BX.addCustomEvent('onDynamicModeChange', BX.delegate(this.__onDynamicModeChange, this));
	BX.addCustomEvent('onTopPanelCollapse', BX.delegate(this.__onPanelCollapse, this));

	BX.addCustomEvent('onMenuOpenerMoved', BX.delegate(this.checkPosition, this));
	BX.addCustomEvent('onMenuOpenerUnhide', BX.delegate(this.checkPosition, this));

	if (this.OPENERS)
	{
		for (i=0,len=this.OPENERS.length; i<len; i++)
		{
			BX.addCustomEvent(this.OPENERS[i], 'onOpenerMenuOpen', BX.proxy(this.__hide_hint, this));
		}
	}
};
BX.extend(BX.CMenuOpener, BX.CWindowFloat);

BX.CMenuOpener.prototype.setParent = function(new_parent)
{
	new_parent = BX(new_parent);
	if(new_parent.OPENER && new_parent.OPENER != this)
	{
		new_parent.OPENER.Close();
		new_parent.OPENER.clearHoverHoutEvents();
	}

	if(this.PARAMS.parent && this.PARAMS.parent != new_parent)
	{
		this.clearHoverHoutEvents();
		this.PARAMS.parent.OPENER = null;
	}

	this.PARAMS.parent = new_parent;
	this.PARAMS.parent.OPENER = this;
};

BX.CMenuOpener.prototype.setHoverHoutEvents = function(hover, hout)
{
	if(!this.__opener_events_set)
	{
		BX.bind(this.Get(), 'mouseover', hover);
		BX.bind(this.Get(), 'mouseout', hout);
		this.__opener_events_set = true;
	}
};

BX.CMenuOpener.prototype.clearHoverHoutEvents = function()
{
	if(this.Get())
	{
		BX.unbindAll(this.Get());
		this.__opener_events_set = false;
	}
};


BX.CMenuOpener.prototype.unclosable = true;

BX.CMenuOpener.prototype.__check_intersection = function(pos_self, pos_other)
{
	return !(pos_other.right <= pos_self.left || pos_other.left >= pos_self.right
			|| pos_other.bottom <= pos_self.top || pos_other.top >= pos_self.bottom);
};


BX.CMenuOpener.prototype.__msover_text = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.ATTACH, 'bx-context-toolbar-button-text-hover');
};

BX.CMenuOpener.prototype.__msout_text = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.ATTACH, 'bx-context-toolbar-button-text-hover bx-context-toolbar-button-text-active');
};

BX.CMenuOpener.prototype.__msover_arrow = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.ATTACH, 'bx-context-toolbar-button-arrow-hover');
};

BX.CMenuOpener.prototype.__msout_arrow = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.ATTACH, 'bx-context-toolbar-button-arrow-hover bx-context-toolbar-button-arrow-active');
};

BX.CMenuOpener.prototype.__msdown_text = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.ATTACH, 'bx-context-toolbar-button-text-active');
};

BX.CMenuOpener.prototype.__msdown_arrow = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.ATTACH, 'bx-context-toolbar-button-arrow-active');
};

BX.CMenuOpener.prototype.__menu_close = function() {
	this._menu_open = false;
	this.bx_active = false;
	BX.removeClass(this.ATTACH, 'bx-context-toolbar-button-active bx-context-toolbar-button-text-active bx-context-toolbar-button-arrow-active');
	if (!this.bx_hover)
	{
		BX.removeClass(this.ATTACH, 'bx-context-toolbar-button-hover bx-context-toolbar-button-text-hover bx-context-toolbar-button-arrow-hover');
		this.bx_hover = false;
	}
};

BX.CMenuOpener.prototype.__menu_open = function() {
	this._menu_open = true;
};

BX.CMenuOpener.prototype.checkPosition = function()
{
	if (this.isMenuVisible() || this.DIV.style.display == 'none'
		|| this == BX.proxy_context || BX.proxy_context.zIndex > this.zIndex)
		return;

	this.correctPosition(BX.proxy_context);
};

BX.CMenuOpener.prototype.correctPosition = function(opener)
{
	var pos_self = BX.pos(this.DIV), pos_other = BX.pos(opener.Get());
	if (this.__check_intersection(pos_self, pos_other))
	{
		var new_top = pos_other.top - pos_self.height;
		if (new_top < 0)
			new_top = pos_other.bottom;

		this.DIV.style.top = new_top + 'px';

		BX.addCustomEvent(opener, 'onMenuOpenerHide', BX.proxy(this.restorePosition, this));
		BX.onCustomEvent(this, 'onMenuOpenerMoved');
	}
};

BX.CMenuOpener.prototype.restorePosition = function()
{
	if (!this.MOUSEOVER && !this.isMenuVisible())
	{
		if (this.originalPos)
			this.DIV.style.top = this.originalPos.top + 'px';

		BX.removeCustomEvent(BX.proxy_context, 'onMenuOpenerHide', BX.proxy(this.restorePosition, this));
		if (this.restore_pos_timeout) clearTimeout(this.restore_pos_timeout);
	}
	else
	{
		this.restore_pos_timeout = setTimeout(BX.proxy(this.restorePosition, this), this.timeout);
	}
};


BX.CMenuOpener.prototype.Show = function()
{
	BX.CMenuOpener.superclass.Show.apply(this, arguments);

	this.SetDraggable(this.PARTS.INNER.firstChild);

	this.DIV.style.width = 'auto';
	this.DIV.style.height = 'auto';

	if (!this.PARAMS.pin)
	{
		this.DIV.style.left = '-1000px';
		this.DIV.style.top = '-1000px';

		this.Hide();
	}
	else
	{
		this.bPosAdjusted = true;
		this.bMoved = true;

		if (this.PARAMS.top) this.DIV.style.top = this.PARAMS.top + 'px';
		if (this.PARAMS.left) this.DIV.style.left = this.PARAMS.left + 'px';

		this.DIV.style.display = (!BX.admin.dynamic_mode || BX.admin.dynamic_mode_show_borders) ? 'block' : 'none';

		if (this.DIV.style.display == 'block')
		{
			setTimeout(BX.delegate(function() {BX.onCustomEvent(this, 'onMenuOpenerUnhide')}, this), 50);
		}
	}
};

BX.CMenuOpener.prototype.executeDefaultAction = function()
{
	if (this.defaultAction)
	{
		if (BX.type.isFunction(this.defaultAction))
			this.defaultAction();
		else if(BX.type.isString(this.defaultAction))
			BX.evalGlobal(this.defaultAction);
	}
};

BX.CMenuOpener.prototype.__onDynamicModeChange = function(val)
{
	this.DIV.style.display = val ? 'block' : 'none';
};

BX.CMenuOpener.prototype.__onPanelCollapse = function(bCollapsed, dy)
{
	this.DIV.style.top = (parseInt(this.DIV.style.top) + dy) + 'px';
	if (this.PARAMS.pin)
	{
		this.__savePosition();
	}
};

BX.CMenuOpener.prototype.__onMoveFinished = function()
{
	BX.onCustomEvent(this, 'onMenuOpenerMoved');

	this.bMoved = true;

	if (this.PARAMS.pin)
		this.__savePosition();
};

BX.CMenuOpener.prototype.__savePosition = function()
{
	var arOpts = {};

	arOpts.pin = this.PARAMS.pin;
	if (!this.PARAMS.pin)
	{
		arOpts.top = false; arOpts.left = false; arOpts.transform = false;
	}
	else
	{
		arOpts.transform = this.PARAMS.transform;
		if (this.bMoved)
		{
			arOpts.left = parseInt(this.DIV.style.left);
			arOpts.top = parseInt(this.DIV.style.top);
		}
	}

	BX.WindowManager.saveWindowOptions(this.PARAMS.component_id, arOpts);
};

BX.CMenuOpener.prototype.__pin_btn_clicked = function() {this.Pin()};
BX.CMenuOpener.prototype.Pin = function(val)
{
	if (null == val)
		this.PARAMS.pin = !this.PARAMS.pin;
	else
		this.PARAMS.pin = !!val;

	this.PARTS.ICON_PIN.className = (this.PARAMS.pin ? 'bx-context-toolbar-pin-fixed' : 'bx-context-toolbar-pin');

	this.__savePosition();
};

BX.CMenuOpener.prototype.__trf_btn_clicked = function() {this.Transform()};
BX.CMenuOpener.prototype.Transform = function(val)
{
	var pos = {};

	if (null == val)
		this.PARAMS.transform = !this.PARAMS.transform;
	else
		this.PARAMS.transform = !!val;

	if (this.bMoved)
	{
		pos = BX.pos(this.DIV);
	}

	if (this.PARAMS.transform)
		BX.addClass(this.DIV.firstChild, 'bx-context-toolbar-vertical-mode');
	else
		BX.removeClass(this.DIV.firstChild, 'bx-context-toolbar-vertical-mode');

	if (!this.bMoved)
	{
		this.adjustPos();
	}
	else
	{
		this.DIV.style.left = (pos.right - this.DIV.offsetWidth - (BX.browser.IsIE() && !BX.browser.IsDoctype() ? 2 : 0)) + 'px';
	}

	this.__savePosition();
};

BX.CMenuOpener.prototype.adjustToNodeGetPos = function()
{
	var pos = BX.pos(this.PARAMS.parent/*, true*/);

	var scrollSize = BX.GetWindowScrollSize();
	var floatWidth = this.DIV.offsetWidth;

	pos.left -= BX.admin.__border_dx;
	pos.top -= BX.admin.__border_dx;

	if (true || !this.PARAMS.transform)
	{
		pos.top -= 45;
	}

	if (pos.left > scrollSize.scrollWidth - floatWidth)
	{
		pos.left = scrollSize.scrollWidth - floatWidth;
	}

	return pos;
};

BX.CMenuOpener.prototype.addItem = function(item)
{
	if (item.TYPE)
	{
		this.EXTRA_BUTTONS[item.TYPE] = item;
		return null;
	}
	else
	{
		var q = new BX.CMenuOpenerItem(item);
		if (null == this.defaultAction)
		{
			if (q.item.ONCLICK)
			{
				this.defaultAction = item.ONCLICK;
			}
			else if (q.item.MENU)
			{
				this.defaultAction = BX.delegate(function() {this.Open()}, q.item.OPENER);
			}

			this.defaultActionTitle = item.TITLE || item.TEXT;

			BX.addClass(q.Get(), 'bx-content-toolbar-default');
		}
		if (q.item.OPENER) this.OPENERS[this.OPENERS.length] = q.item.OPENER;
		return q.Get();
	}
};

BX.CMenuOpener.prototype.attachMenu = function(menu)
{
	var opener = new BX.COpener({
		'DIV':  this.OPENER,
		'ATTACH': this.ATTACH,
		'MENU': menu,
		'TYPE': 'click'
	});

	this.OPENERS[this.OPENERS.length] = opener;

	return opener;
};

BX.CMenuOpener.prototype.__hide_hint = function()
{
	if (this.HINT) this.HINT.__hide_immediately();
};

BX.CMenuOpener.prototype.isMenuVisible = function()
{
	for (var i=0,len=this.OPENERS.length; i<len; i++)
	{
		if (this.OPENERS[i].isMenuVisible())
			return true;
	}

	return false;
};

BX.CMenuOpener.prototype.Hide = function()
{
	if (!this.PARAMS.pin)
	{
		this.DIV.style.display = 'none';
		BX.onCustomEvent(this, 'onMenuOpenerHide');
	}
};
BX.CMenuOpener.prototype.UnHide = function()
{
	this.DIV.style.display = 'block';
	if (!this.bPosAdjusted && !this.PARAMS.pin)
	{
		this.adjustPos();
		this.bPosAdjusted = true;
	}

	if (null == this.originalPos && !this.bMoved)
	{
		this.originalPos = BX.pos(this.DIV);
	}

	BX.onCustomEvent(this, 'onMenuOpenerUnhide');
};

BX.CMenuOpenerItem = function(item)
{
	this.item = item;

	if (this.item.ACTION && !this.item.ONCLICK)
	{
		this.item.ONCLICK = this.item.ACTION;
	}

	this.DIV = BX.create('SPAN');
	this.DIV.appendChild(BX.create('SPAN', {props: {className: 'bx-context-toolbar-button-underlay'}}));

	this.WRAPPER = this.DIV.appendChild(BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-button-wrapper'},
		children: [
			BX.create('SPAN', {
				props: {className: 'bx-context-toolbar-button', title: item.TITLE},
				children: [
					BX.create('SPAN', {
						props: {className: 'bx-context-toolbar-button-inner'}
					})
				]
			})
		]
	}));

	var btn_icon = BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-button-icon' + (this.item.ICON || this.item.ICONCLASS ? ' ' + (this.item.ICON || this.item.ICONCLASS) : '')},
		attrs: (
				!(this.item.ICON || this.item.ICONCLASS)
				&&
				(this.item.SRC || this.item.IMAGE)
			)
			? {
				style: 'background: scroll transparent url(' + (this.item.SRC || this.item.IMAGE) + ') no-repeat center center !important;'
			}
			: {}
	}), btn_text = BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-button-text'},
		text: this.item.TEXT
	});

	if (this.item.ACTION && !this.item.ONCLICK)
	{
		this.item.ONCLICK = this.item.ACTION;
	}

	this.bHasMenu = !!this.item.MENU;
	this.bHasAction = !!this.item.ONCLICK;

	if (this.bHasAction)
	{
		this.LINK = this.WRAPPER.firstChild.firstChild.appendChild(BX.create('A', {
			attrs: {
				'href': 'javascript: void(0)'
			},
			events: {
				mouseover: this.bHasMenu ? BX.proxy(this.__msover_text, this) : BX.proxy(this.__msover, this),
				mouseout: this.bHasMenu ? BX.proxy(this.__msout_text, this) : BX.proxy(this.__msout, this),
				mousedown: this.bHasMenu ? BX.proxy(this.__msdown_text, this) : BX.proxy(this.__msdown, this)
			},
			children: [btn_icon, btn_text]
		}));

		if (this.bHasMenu)
		{
			this.LINK_MENU = this.WRAPPER.firstChild.firstChild.appendChild(BX.create('A', {
				props: {className: 'bx-context-toolbar-button-arrow'},
				attrs: {
					'href': 'javascript: void(0)'
				},
				events: {
					mouseover: BX.proxy(this.__msover_arrow, this),
					mouseout: BX.proxy(this.__msout_arrow, this),
					mousedown: BX.proxy(this.__msdown_arrow, this)
				},
				children: [
					BX.create('SPAN', {props: {className: 'bx-context-toolbar-button-arrow'}})
				]
			}));
		}

	}
	else if (this.bHasMenu)
	{
		this.item.ONCLICK = null;

		this.LINK = this.LINK_MENU = this.WRAPPER.firstChild.firstChild.appendChild(BX.create('A', {
			attrs: {
				'href': 'javascript: void(0)'
			},
			events: {
				mouseover: BX.proxy(this.__msover, this),
				mouseout: BX.proxy(this.__msout, this),
				mousedown: BX.proxy(this.__msdown, this)
			},
			children: [
				btn_icon,
				btn_text
			]
		}));

		this.LINK.appendChild(BX.create('SPAN', {props: {className: 'bx-context-toolbar-single-button-arrow'}}));

	}

	if (this.bHasMenu)
	{
		this.item.SUBMENU = new BX.CMenu({
			ATTACH_MODE:'bottom',
			ITEMS:this.item['MENU'],
			//PARENT_MENU:this.parentMenu,
			parent: this.LINK_MENU,
			parent_attach: this.WRAPPER.firstChild
		});

		this.item.OPENER = new BX.COpener({
			DIV: this.LINK_MENU,
			TYPE: 'click',
			MENU: this.item.SUBMENU
		});

		BX.addCustomEvent(this.item.OPENER, 'onOpenerMenuOpen', BX.proxy(this.__menu_open, this));
		BX.addCustomEvent(this.item.OPENER, 'onOpenerMenuClose', BX.proxy(this.__menu_close, this));
	}

	if (this.bHasAction)
	{
		BX.bind(this.LINK, 'click', BX.delegate(this.__click, this));
	}
};

BX.CMenuOpenerItem.prototype.Get = function() {return this.DIV;};
BX.CMenuOpenerItem.prototype.__msover = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-hover');
};
BX.CMenuOpenerItem.prototype.__msout = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-hover bx-context-toolbar-button-active');
};
BX.CMenuOpenerItem.prototype.__msover_text = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-text-hover');
};
BX.CMenuOpenerItem.prototype.__msout_text = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-text-hover bx-context-toolbar-button-text-active');
};
BX.CMenuOpenerItem.prototype.__msover_arrow = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-arrow-hover');
};
BX.CMenuOpenerItem.prototype.__msout_arrow = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-arrow-hover bx-context-toolbar-button-arrow-active');
};
BX.CMenuOpenerItem.prototype.__msdown = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-active');
};
BX.CMenuOpenerItem.prototype.__msdown_text = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-text-active');
};
BX.CMenuOpenerItem.prototype.__msdown_arrow = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-arrow-active');
};
BX.CMenuOpenerItem.prototype.__menu_close = function() {

	this._menu_open = false;
	this.bx_active = false;
	BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-active bx-context-toolbar-button-text-active bx-context-toolbar-button-arrow-active');
	if (!this.bx_hover)
	{
		BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-hover bx-context-toolbar-button-text-hover bx-context-toolbar-button-arrow-hover');
		this.bx_hover = false;
	}
};
BX.CMenuOpenerItem.prototype.__menu_open = function() {
	this._menu_open = true;
};

BX.CMenuOpenerItem.prototype.__click = function() {BX.evalGlobal(this.item.ONCLICK)};

/* global page opener class */
BX.CPageOpener = function(arParams)
{
	//if (null == arParams.pin) arParams.pin = true;
	BX.CPageOpener.superclass.constructor.apply(this, arguments);

	this.timeout = 505;

	window.PAGE_EDIT_CONTROL = this;
};
BX.extend(BX.CPageOpener, BX.CMenuOpener);

BX.CPageOpener.prototype.checkPosition = function()
{
	if (/*this.isMenuVisible() || this.DIV.style.display == 'none' || */this == BX.proxy_context)
		return;

	this.correctPosition(BX.proxy_context);
};

BX.CPageOpener.prototype.correctPosition = function(opener)
{
	if (this.bPosCorrected) return;
	var pos_self;
	if (this.DIV.style.display == 'none')
	{
		pos_self = this.adjustToNodeGetPos();
		pos_self.bottom = pos_self.top + 30;
		pos_self.right = pos_self.left + 300;
	}
	else
	{
		pos_self = BX.pos(this.DIV);
	}

	var pos_other = BX.pos(opener.Get());
	if (this.__check_intersection(pos_self, pos_other))
	{
		this.DIV.style.display = 'none';
		BX.addCustomEvent(opener, 'onMenuOpenerHide', BX.proxy(this.restorePosition, this));

		this.bPosCorrected = true;
	}
};

BX.CPageOpener.prototype.restorePosition = function()
{
	if (BX.proxy_context && BX.proxy_context.Get().style.display == 'none')
	{
		this.bPosCorrected = false;

		if (this.PARAMS.parent.bx_over || this.PARAMS.pin)
			this.UnHide();

		BX.removeCustomEvent('onMenuOpenerHide', BX.proxy(this.restorePosition, this));
	}
};

BX.CPageOpener.prototype.UnHide = function()
{
	if (!this.bPosCorrected)
		BX.CPageOpener.superclass.UnHide.apply(this, arguments);
};

BX.CPageOpener.prototype.Remove = function()
{
	BX.admin.removeComponentBorder(this.PARAMS.parent);
	BX.userOptions.save('global', 'settings', 'page_edit_control_enable', 'N');
	this.DIV.style.display = 'none';
};

/******* HINT ***************/
BX.CHintSimple = function()
{
	BX.CHintSimple.superclass.constructor.apply(this, arguments);
};
BX.extend(BX.CHintSimple, BX.CHint);

BX.CHintSimple.prototype.Init = function()
{
	this.DIV = document.body.appendChild(BX.create('DIV', {props: {className: 'bx-tooltip-simple'}, style: {display: 'none'}, children: [(this.CONTENT = BX.create('DIV'))]}));

	if (this.HINT_TITLE)
		this.CONTENT.appendChild(BX.create('B', {text: this.HINT_TITLE}));

	if (this.HINT)
		this.CONTENT_TEXT = this.CONTENT.appendChild(BX.create('DIV')).appendChild(BX.create('SPAN', {html: this.HINT}));

	if (this.PARAMS.preventHide)
	{
		BX.bind(this.DIV, 'mouseout', BX.proxy(this.Hide, this));
		BX.bind(this.DIV, 'mouseover', BX.proxy(this.Show, this));
	}

	this.bInited = true;
};

/*************************** admin informer **********************************/
BX.adminInformer = {

	itemsShow: 3,

	Init: function (itemsShow)
	{
		if(itemsShow)
			BX.adminInformer.itemsShow = itemsShow;

		var informer = BX("admin-informer");

		if(informer)
			document.body.appendChild(informer);

		BX.addCustomEvent("onTopPanelCollapse", BX.proxy(BX.adminInformer.Close, BX.adminInformer));
	},

	Toggle: function(notifyBlock)
	{
		var informer = BX("admin-informer");

		if(!informer)
			return false;

		var pos = BX.pos(notifyBlock);

		informer.style.top = (parseInt(pos.top)+parseInt(pos.height)+7)+'px';
		informer.style.left = pos.left+'px';

		if(!BX.hasClass(informer, "adm-informer-active"))
			BX.adminInformer.Show(informer);
		else
			BX.adminInformer.Hide(informer);

		return false;
	},

	Close: function()
	{
		BX.adminInformer.Hide(BX("admin-informer"));
	},

	OnInnerClick: function(event)
	{
		var target = event.target || event.srcElement;

		if(target.nodeName.toLowerCase() != 'a' || BX.hasClass(target,"adm-informer-footer"))
		{
			return BX.PreventDefault(event);
		}

		return true;
	},

	ToggleExtra : function()
	{
		var footerLink = BX("adm-informer-footer");

		if (BX.hasClass(footerLink, "adm-informer-footer-collapsed"))
			this.ShowAll();
		else
			this.HideExtra();

		return false;
	},

	ShowAll: function()
	{
		var informer = BX("admin-informer");
		for(var i=0; i<informer.children.length; i++)

			if(BX.hasClass(informer.children[i], "adm-informer-item") && informer.children[i].style.display == "none") {
				informer.children[i].style.display = "block";
			}

		var footerLink = BX("adm-informer-footer");

		if(footerLink.textContent !== undefined)
			footerLink.textContent = BX.message('JSADM_AI_HIDE_EXTRA');
		else
			footerLink.innerText = BX.message('JSADM_AI_HIDE_EXTRA');

		BX.removeClass(footerLink, "adm-informer-footer-collapsed");

		return false;
	},

	HideExtra: function()
	{
		var informer = BX("admin-informer");
		var hided = 0;

		for(var i=BX.adminInformer.itemsShow+1; i<informer.children.length; i++)
		{
			if (BX.hasClass(informer.children[i], "adm-informer-item") && informer.children[i].style.display == "block") {
				informer.children[i].style.display = "none";
				hided++;
			}
		}

		var footerLink = BX("adm-informer-footer");

		var linkText = BX.message('JSADM_AI_ALL_NOTIF')+" ("+(BX.adminInformer.itemsShow+parseInt(hided))+")";

		if(footerLink.textContent !== undefined)
			footerLink.textContent = linkText;
		else
			footerLink.innerText = linkText;

		BX.addClass(footerLink, "adm-informer-footer-collapsed");

		return false;
	},

	Show: function(informer)
	{
		var notifButton = BX("adm-header-notif-block");
		if (notifButton)
			BX.addClass(notifButton, "adm-header-notif-block-active");

		BX.onCustomEvent(informer, 'onBeforeAdminInformerShow');
		setTimeout(
			BX.proxy(function() {
					BX.bind(document, "click", BX.proxy(BX.adminInformer.Close, BX.adminInformer));
				},
				BX.adminInformer
			),0
		);
		BX.addClass(informer, "adm-informer-active");
		setTimeout(function() {BX.addClass(informer, "adm-informer-animate");},0);
	},

	Hide: function(informer)
	{
		var notifButton = BX("adm-header-notif-block");
		if (notifButton)
			BX.removeClass(notifButton, "adm-header-notif-block-active");

		BX.unbind(document, "click", BX.proxy(BX.adminInformer.Close, BX.adminInformer));

		BX.removeClass(informer, "adm-informer-animate");

		if (this.IsAnimationSupported())
			setTimeout(function() {BX.removeClass(informer, "adm-informer-active");}, 300);
		else
			BX.removeClass(informer, "adm-informer-active");

		BX.onCustomEvent(informer, 'onAdminInformerHide');
		//setTimeout(function() {BX.adminInformer.HideExtra();},500);
	},

	IsAnimationSupported : function()
	{
		var d = document.body || document.documentElement;
		if (typeof(d.style.transition) == "string")
			return true;
		else if (typeof(d.style.MozTransition) == "string")
			return true;
		else if (typeof(d.style.OTransition) == "string")
			return true;
		else if (typeof(d.style.WebkitTransition) == "string")
			return true;
		else if (typeof(d.style.msTransition) == "string")
			return true;

		return false;
	},


	SetItemHtml: function(itemIdx, html)
	{
		var itemHtmlDiv = BX("adm-informer-item-html-"+itemIdx);

		if(!itemHtmlDiv)
			return false;

		itemHtmlDiv.innerHTML = html;

		return true;
	},

	SetItemFooter: function(itemIdx, html)
	{
		var itemFooterDiv = BX("adm-informer-item-footer-"+itemIdx);

		if(!itemFooterDiv)
			return false;

		itemFooterDiv.innerHTML = html;

		if(html)
			itemFooterDiv.style.display = "block";
		else
			itemFooterDiv.style.display = "none";

		return true;
	}

};

})(window);

/* End */
;
; /* Start:/bitrix/js/main/utils.js*/
var phpVars;
if(!phpVars)
{
	phpVars = {
		ADMIN_THEME_ID: '.default',
		LANGUAGE_ID: 'en',
		FORMAT_DATE: 'DD.MM.YYYY',
		FORMAT_DATETIME: 'DD.MM.YYYY HH:MI:SS',
		opt_context_ctrl: false,
		cookiePrefix: 'BITRIX_SM',
		titlePrefix: '',
		bitrix_sessid: '',
		messHideMenu: '',
		messShowMenu: '',
		messHideButtons: '',
		messShowButtons: '',
		messFilterInactive: '',
		messFilterActive: '',
		messFilterLess: '',
		messLoading: 'Loading...',
		messMenuLoading: '',
		messMenuLoadingTitle: '',
		messNoData: '',
		messExpandTabs: '',
		messCollapseTabs: '',
		messPanelFixOn: '',
		messPanelFixOff: '',
		messPanelCollapse: '',
		messPanelExpand: ''
	};
}

var jsUtils =
{
	arEvents: Array(),

	addEvent: function(el, evname, func, capture)
	{
		if(el.attachEvent) // IE
			el.attachEvent("on" + evname, func);
		else if(el.addEventListener) // Gecko / W3C
			el.addEventListener(evname, func, false);
		else
			el["on" + evname] = func;
		this.arEvents[this.arEvents.length] = {'element': el, 'event': evname, 'fn': func};
	},

	removeEvent: function(el, evname, func)
	{
		if(el.detachEvent) // IE
			el.detachEvent("on" + evname, func);
		else if(el.removeEventListener) // Gecko / W3C
			el.removeEventListener(evname, func, false);
		else
			el["on" + evname] = null;
	},

	removeAllEvents: function(el)
	{
		var i;
		for(i=0; i<this.arEvents.length; i++)
		{
			if(this.arEvents[i] && (el==false || el==this.arEvents[i].element))
			{
				jsUtils.removeEvent(this.arEvents[i].element, this.arEvents[i].event, this.arEvents[i].fn);
				this.arEvents[i] = null;
			}
		}
		if(el==false)
			this.arEvents.length = 0;
	},

	IsDoctype: function()
	{
		if (document.compatMode)
			return (document.compatMode == "CSS1Compat");

		if (document.documentElement && document.documentElement.clientHeight)
			return true;

		return false;
	},

	GetRealPos: function(el)
	{
		if(window.BX)
			return BX.pos(el);

		if(!el || !el.offsetParent)
			return false;

		var res = Array();
		res["left"] = el.offsetLeft;
		res["top"] = el.offsetTop;
		var objParent = el.offsetParent;

		while(objParent && objParent.tagName != "BODY")
		{
			res["left"] += objParent.offsetLeft;
			res["top"] += objParent.offsetTop;
			objParent = objParent.offsetParent;
		}
		res["right"] = res["left"] + el.offsetWidth;
		res["bottom"] = res["top"] + el.offsetHeight;

		return res;
	},

	FindChildObject: function(obj, tag_name, class_name, recursive)
	{
		if(!obj)
			return null;
		var tag = tag_name.toUpperCase();
		var cl = (class_name? class_name.toLowerCase() : null);
		var n = obj.childNodes.length;
		for(var j=0; j<n; j++)
		{
			var child = obj.childNodes[j];
			if(child.tagName && child.tagName.toUpperCase() == tag)
				if(!class_name || child.className.toLowerCase() == cl)
					return child;
			if(recursive == true)
			{
				var deepChild;
				if((deepChild = jsUtils.FindChildObject(child, tag_name, class_name, true)))
					return deepChild;
			}
		}
		return null;
	},

	FindParentObject: function(obj, tag_name, class_name)
	{
		if(!obj)
			return null;
		var o = obj;
		var tag = tag_name.toUpperCase();
		var cl = (class_name? class_name.toLowerCase() : null);
		while(o.parentNode)
		{
			var parent = o.parentNode;
			if(parent.tagName && parent.tagName.toUpperCase() == tag)
				if(!class_name || parent.className.toLowerCase() == cl)
					return parent;
			o = parent;
		}
		return null;
	},

	FindNextSibling: function(obj, tag_name)
	{
		if(!obj)
			return null;
		var o = obj;
		var tag = tag_name.toUpperCase();
		while(o.nextSibling)
		{
			var sibling = o.nextSibling;
			if(sibling.tagName && sibling.tagName.toUpperCase() == tag)
				return sibling;
			o = sibling;
		}
		return null;
	},

	FindPreviousSibling: function(obj, tag_name)
	{
		if(!obj)
			return null;
		var o = obj;
		var tag = tag_name.toUpperCase();
		while(o.previousSibling)
		{
			var sibling = o.previousSibling;
			if(sibling.tagName && sibling.tagName.toUpperCase() == tag)
				return sibling;
			o = sibling;
		}
		return null;
	},

	bOpera : navigator.userAgent.toLowerCase().indexOf('opera') != -1,
	bIsIE : document.attachEvent && navigator.userAgent.toLowerCase().indexOf('opera') == -1,

	IsIE: function()
	{
		return this.bIsIE;
	},

	IsOpera: function()
	{
		return this.bOpera;
	},

	IsSafari: function()
	{
		var userAgent = navigator.userAgent.toLowerCase();
		return (/webkit/.test(userAgent));
	},

	IsEditor: function()
	{
		var userAgent = navigator.userAgent.toLowerCase();
		var version = (userAgent.match( /.+(msie)[\/: ]([\d.]+)/ ) || [])[2];
		var safari = /webkit/.test(userAgent);

		if (this.IsOpera() || (document.all && !document.compatMode && version < 6) || safari)
			return false;

		return true;
	},

	ToggleDiv: function(div)
	{
		var style = document.getElementById(div).style;
		if(style.display!="none")
			style.display = "none";
		else
			style.display = "block";
		return (style.display != "none");
	},

	urlencode: function(s)
	{
		return escape(s).replace(new RegExp('\\+','g'), '%2B');
	},

	OpenWindow: function(url, width, height)
	{
		var w = screen.width, h = screen.height;
		if(this.IsOpera())
		{
			w = document.body.offsetWidth;
			h = document.body.offsetHeight;
		}
		window.open(url, '', 'status=no,scrollbars=yes,resizable=yes,width='+width+',height='+height+',top='+Math.floor((h - height)/2-14)+',left='+Math.floor((w - width)/2-5));
	},

	SetPageTitle: function(s)
	{
		document.title = phpVars.titlePrefix+s;
		var h1 = document.getElementsByTagName("H1");
		if(h1)
			h1[0].innerHTML = s;
	},

	LoadPageToDiv: function(url, div_id)
	{
		var div = document.getElementById(div_id);
		if(!div)
			return;
		CHttpRequest.Action = function(result)
		{
			CloseWaitWindow();
			document.getElementById(div_id).innerHTML = result;
		}
		ShowWaitWindow();
		CHttpRequest.Send(url);
	},

	trim: function(s)
	{
		if (typeof s == 'string' || typeof s == 'object' && s.constructor == String)
		{
			var r, re;

			re = /^[\s\r\n]+/g;
			r = s.replace(re, "");
			re = /[\s\r\n]+$/g;
			r = r.replace(re, "");
			return r;
		}
		else
			return s;
	},

	Redirect: function(args, url)
	{
		var e = null, bShift = false;
		if(args && args.length > 0)
			e = args[0];
		if(!e)
			e = window.event;
		if(e)
			bShift = e.shiftKey;

		if(bShift)
			window.open(url);
		else
		{
			window.location.href=url;
		}
	},

	False: function(){return false;},

	AlignToPos: function(pos, w, h)
	{
		var x = pos["left"], y = pos["bottom"];

		var scroll = jsUtils.GetWindowScrollPos();
		var size = jsUtils.GetWindowInnerSize();

		if((size.innerWidth + scroll.scrollLeft) - (pos["left"] + w) < 0)
		{
			if(pos["right"] - w >= 0 )
				x = pos["right"] - w;
			else
				x = scroll.scrollLeft;
		}

		if((size.innerHeight + scroll.scrollTop) - (pos["bottom"] + h) < 0)
		{
			if(pos["top"] - h >= 0)
				y = pos["top"] - h;
			else
				y = scroll.scrollTop;
		}

		return {'left':x, 'top':y};
	},

	// evaluate js string in window scope
	EvalGlobal: function(script)
	{
		try {
		if (window.execScript)
			window.execScript(script, 'javascript');
		else if (jsUtils.IsSafari())
			window.setTimeout(script, 0);
		else
			window.eval(script);
		} catch (e) {/*alert("Error! jsUtils.EvalGlobal");*/}
	},

	GetStyleValue: function(el, styleProp)
	{
		var res;
		if(el.currentStyle)
			res = el.currentStyle[styleProp];
		else if(window.getComputedStyle)
			res = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
		if(!res)
			res = '';
		return res;
	},

	GetWindowInnerSize: function(pDoc)
	{
		var width, height;
		if (!pDoc)
			pDoc = document;

		if (self.innerHeight) // all except Explorer
		{
			width = self.innerWidth;
			height = self.innerHeight;
		}
		else if (pDoc.documentElement && (pDoc.documentElement.clientHeight || pDoc.documentElement.clientWidth)) // Explorer 6 Strict Mode
		{
			width = pDoc.documentElement.clientWidth;
			height = pDoc.documentElement.clientHeight;
		}
		else if (pDoc.body) // other Explorers
		{
			width = pDoc.body.clientWidth;
			height = pDoc.body.clientHeight;
		}
		return {innerWidth : width, innerHeight : height};
	},

	GetWindowScrollPos: function(pDoc)
	{
		var left, top;
		if (!pDoc)
			pDoc = document;

		if (self.pageYOffset) // all except Explorer
		{
			left = self.pageXOffset;
			top = self.pageYOffset;
		}
		else if (pDoc.documentElement && (pDoc.documentElement.scrollTop || pDoc.documentElement.scrollLeft)) // Explorer 6 Strict
		{
			left = document.documentElement.scrollLeft;
			top = document.documentElement.scrollTop;
		}
		else if (pDoc.body) // all other Explorers
		{
			left = pDoc.body.scrollLeft;
			top = pDoc.body.scrollTop;
		}
		return {scrollLeft : left, scrollTop : top};
	},

	GetWindowScrollSize: function(pDoc)
	{
		var width, height;
		if (!pDoc)
			pDoc = document;

		if ( (pDoc.compatMode && pDoc.compatMode == "CSS1Compat"))
		{
			width = pDoc.documentElement.scrollWidth;
			height = pDoc.documentElement.scrollHeight;
		}
		else
		{
			if (pDoc.body.scrollHeight > pDoc.body.offsetHeight)
				height = pDoc.body.scrollHeight;
			else
				height = pDoc.body.offsetHeight;

			if (pDoc.body.scrollWidth > pDoc.body.offsetWidth ||
				(pDoc.compatMode && pDoc.compatMode == "BackCompat") ||
				(pDoc.documentElement && !pDoc.documentElement.clientWidth)
			)
				width = pDoc.body.scrollWidth;
			else
				width = pDoc.body.offsetWidth;
		}
		return {scrollWidth : width, scrollHeight : height};
	},

	GetWindowSize: function()
	{
		var innerSize = jsUtils.GetWindowInnerSize();
		var scrollPos = jsUtils.GetWindowScrollPos();
		var scrollSize = jsUtils.GetWindowScrollSize();

		return  {
			innerWidth : innerSize.innerWidth, innerHeight : innerSize.innerHeight,
			scrollLeft : scrollPos.scrollLeft, scrollTop : scrollPos.scrollTop,
			scrollWidth : scrollSize.scrollWidth, scrollHeight : scrollSize.scrollHeight
		};
	},


	arCustomEvents: {},

	addCustomEvent: function(eventName, eventHandler, arParams, handlerContextObject)
	{
		if (!this.arCustomEvents[eventName])
			this.arCustomEvents[eventName] = [];

		if (!arParams)
			arParams = [];
		if (!handlerContextObject)
			handlerContextObject = false;

		this.arCustomEvents[eventName].push(
			{
				handler: eventHandler,
				arParams: arParams,
				obj: handlerContextObject
			}
		);
	},

	removeCustomEvent: function(eventName, eventHandler)
	{
		if (!this.arCustomEvents[eventName])
			return;

		var l = this.arCustomEvents[eventName].length;
		if (l == 1)
		{
			delete this.arCustomEvents[eventName];
			return;
		}

		for (var i = 0; i < l; i++)
		{
			if (!this.arCustomEvents[eventName][i])
				continue;
			if (this.arCustomEvents[eventName][i].handler == eventHandler)
			{
				delete this.arCustomEvents[eventName][i];
				return;
			}
		}
	},

	onCustomEvent: function(eventName, arEventParams)
	{
		if (!this.arCustomEvents[eventName])
			return;

		if (!arEventParams)
			arEventParams = [];

		var h;
		for (var i = 0, l = this.arCustomEvents[eventName].length; i < l; i++)
		{
			h = this.arCustomEvents[eventName][i];
			if (!h || !h.handler)
				continue;

			if (h.obj)
				h.handler.call(h.obj, h.arParams, arEventParams);
			else
				h.handler(h.arParams, arEventParams);
		}
	},

	loadJSFile: function(arJs, oCallBack, pDoc)
	{
		if (!pDoc)
			pDoc = document;
		if (typeof arJs == 'string')
			arJs = [arJs];
		var callback = function()
		{
			if (!oCallBack)
				return;
			if (typeof oCallBack == 'function')
				return oCallBack();
			if (typeof oCallBack != 'object' || !oCallBack.func)
				return;
			var p = oCallBack.params || {};
			if (oCallBack.obj)
				oCallBack.func.apply(oCallBack.obj, p);
			else
				oCallBack.func(p);
		};
		var load_js = function(ind)
		{
			if (ind >= arJs.length)
				return callback();
			var oSript = pDoc.body.appendChild(pDoc.createElement('script'));
			oSript.src = arJs[ind];
			var bLoaded = false;
			oSript.onload = oSript.onreadystatechange = function()
			{
				if (!bLoaded && (!oSript.readyState || oSript.readyState == "loaded" || oSript.readyState == "complete"))
				{
					bLoaded = true;
					setTimeout(function (){load_js(++ind);}, 50);
				}
			};
		};
		load_js(0);
	},

	loadCSSFile: function(arCSS, pDoc, pWin)
	{
		if (typeof arCSS == 'string')
		{
			var bSingle = true;
			arCSS = [arCSS];
		}
		var i, l = arCSS.length, pLnk = [];
		if (l == 0)
			return;
		if (!pDoc)
			pDoc = document;
		if (!pWin)
			pWin = window;
		if (!pWin.bxhead)
		{
			var heads = pDoc.getElementsByTagName('HEAD');
			pWin.bxhead = heads[0];
		}
		if (!pWin.bxhead)
			return;
		for (i = 0; i < l; i++)
		{
			var lnk = document.createElement('LINK');
			lnk.href = arCSS[i];
			lnk.rel = 'stylesheet';
			lnk.type = 'text/css';
			pWin.bxhead.appendChild(lnk);
			pLnk.push(lnk);
		}
		if (bSingle)
			return lnk;
		return pLnk;
	},

	appendBXHint : function(node, html)
	{
		if (!node || !node.parentNode || !html)
			return;
		var oBXHint = new BXHint(html);
		node.parentNode.insertBefore(oBXHint.oIcon, node);
		node.parentNode.removeChild(node);
		oBXHint.oIcon.style.marginLeft = "5px";
	},

	PreventDefault : function(e)
	{
		if(!e) e = window.event;
		if(e.stopPropagation)
		{
			e.preventDefault();
			e.stopPropagation();
		}
		else
		{
			e.cancelBubble = true;
			e.returnValue = false;
		}
		return false;
	},

	CreateElement: function(tag, arAttr, arStyles, pDoc)
	{
		if (!pDoc)
			pDoc = document;
		var pEl = pDoc.createElement(tag), p;
		if(arAttr)
		{
			for(p in arAttr)
			{
				if(p == 'className' || p == 'class')
				{
					pEl.setAttribute('class', arAttr[p]);
					if (jsUtils.IsIE())
						pEl.setAttribute('className', arAttr[p]);
					continue;
				}

				if (arAttr[p] != undefined && arAttr[p] != null)
					pEl.setAttribute(p, arAttr[p]);
			}
		}
		if(arStyles)
		{
			for(p in arStyles)
				pEl.style[p] = arStyles[p];
		}
		return pEl;
	},

	in_array: function(needle, haystack)
	{
		for(var i=0; i<haystack.length; i++)
		{
			if(haystack[i] == needle)
				return true;
		}
		return false;
	},

	htmlspecialchars: function(str)
	{
		if(!str.replace)
			return str;

		return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}
}

/************************************************/

function JCFloatDiv()
{
	var _this = this;
	this.floatDiv = null;
	this.x = this.y = 0;

	this.Create = function(arParams)
	{
		var div = document.body.appendChild(document.createElement("DIV"));
		div.id = arParams.id;
		div.style.position = 'absolute';
		div.style.left = '-10000px';
		div.style.top = '-10000px';
		if(arParams.className)
			div.className = arParams.className;
		if(arParams.zIndex)
			div.style.zIndex = arParams.zIndex;
		if(arParams.width)
			div.style.width = arParams.width+'px';
		if(arParams.height)
			div.style.height = arParams.height+'px';
		return div;
	}

	this.Show = function(div, left, top, dxShadow, restrictDrag, showSubFrame)
	{
		if (showSubFrame !== false)
			showSubFrame = true;
		var zIndex = parseInt(div.style.zIndex);
		if(zIndex <= 0 || isNaN(zIndex))
			zIndex = 100;

		//document.title = 'zIndex = ' + zIndex;
		div.style.zIndex = zIndex;

		if (left < 0)
			left = 0;

		if (top < 0)
			top = 0;

		div.style.left = parseInt(left) + "px";
		div.style.top = parseInt(top) + "px";

		if(jsUtils.IsIE() && showSubFrame === true)
		{
			var frame = document.getElementById(div.id+"_frame");
			if(!frame)
			{
				frame = document.createElement("IFRAME");
				frame.src = "javascript:''";
				frame.id = div.id+"_frame";
				frame.style.position = 'absolute';
				frame.style.borderWidth = '0px';
				frame.style.zIndex = zIndex-1;
				document.body.appendChild(frame);
			}
			frame.style.width = div.offsetWidth + "px";
			frame.style.height = div.offsetHeight + "px";
			frame.style.left = div.style.left;
			frame.style.top = div.style.top;
			frame.style.visibility = 'visible';
		}

		/*Restrict drag*/
		div.restrictDrag = restrictDrag || false;

		/*shadow*/
		if(isNaN(dxShadow))
			dxShadow = 5;

		if(dxShadow > 0)
		{
			var img = document.getElementById(div.id+'_shadow');
			if(!img)
			{
				if(jsUtils.IsIE())
				{
		 			img = document.createElement("DIV");
		 			img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/bitrix/themes/"+phpVars.ADMIN_THEME_ID+"/images/shadow.png',sizingMethod='scale')";
				}
				else
				{
		 			img = document.createElement("IMG");
					img.src = '/bitrix/themes/' + phpVars.ADMIN_THEME_ID+'/images/shadow.png';
				}
				img.id = div.id+'_shadow';
				img.style.position = 'absolute';
				img.style.zIndex = zIndex-2;
				img.style.left = '-1000px';
				img.style.top = '-1000px';
				img.style.lineHeight = 'normal';
				img.className = "bx-js-float-shadow";
				document.body.appendChild(img);
			}
			img.style.width = div.offsetWidth+'px';
			img.style.height = div.offsetHeight+'px';
			img.style.left = parseInt(div.style.left)+dxShadow+'px';
			img.style.top = parseInt(div.style.top)+dxShadow+'px';
			img.style.visibility = 'visible';
		}
		div.dxShadow = dxShadow;
	}

	this.Close = function(div)
	{
		if(!div)
			return;
		var sh = document.getElementById(div.id+"_shadow");
		if(sh)
			sh.style.visibility = 'hidden';

		var frame = document.getElementById(div.id+"_frame");
		if(frame)
			frame.style.visibility = 'hidden';
	}

	this.Move = function(div, x, y)
	{
		if(!div)
			return;

		var dxShadow = div.dxShadow;
		var left = parseInt(div.style.left)+x;
		var top = parseInt(div.style.top)+y;

		if (div.restrictDrag)
		{
			//Left side
			if (left < 0)
				left = 0;

			//Right side
			if ( (document.compatMode && document.compatMode == "CSS1Compat"))
				windowWidth = document.documentElement.scrollWidth;
			else
			{
				if (document.body.scrollWidth > document.body.offsetWidth ||
					(document.compatMode && document.compatMode == "BackCompat") ||
					(document.documentElement && !document.documentElement.clientWidth)
				)
					windowWidth = document.body.scrollWidth;
				else
					windowWidth = document.body.offsetWidth;
			}

			var floatWidth = div.offsetWidth;
			if (left > (windowWidth - floatWidth - dxShadow))
				left = windowWidth - floatWidth - dxShadow;

			//Top side
			if (top < 0)
				top = 0;
		}

		div.style.left = left+'px';
		div.style.top = top+'px';

		this.AdjustShadow(div);
	}

	this.HideShadow = function(div)
	{
		var sh = document.getElementById(div.id + "_shadow");
		sh.style.visibility = 'hidden';
	}

	this.UnhideShadow = function(div)
	{
		var sh = document.getElementById(div.id + "_shadow");
		sh.style.visibility = 'visible';
	}

	this.AdjustShadow = function(div)
	{
		var sh = document.getElementById(div.id + "_shadow");
		if(sh && sh.style.visibility != 'hidden')
		{
			var dxShadow = div.dxShadow;

			sh.style.width = div.offsetWidth+'px';
			sh.style.height = div.offsetHeight+'px';
			sh.style.left = parseInt(div.style.left)+dxShadow+'px';
			sh.style.top = parseInt(div.style.top)+dxShadow+'px';
		}

		var frame = document.getElementById(div.id+"_frame");
		if(frame)
		{
			frame.style.width = div.offsetWidth + "px";
			frame.style.height = div.offsetHeight + "px";
			frame.style.left = div.style.left;
			frame.style.top = div.style.top;
		}
	}

	this.StartDrag = function(e, div)
	{
		if(!e)
			e = window.event;
		this.x = e.clientX + document.body.scrollLeft;
		this.y = e.clientY + document.body.scrollTop;
		this.floatDiv = div;

		jsUtils.addEvent(document, "mousemove", this.MoveDrag);
		document.onmouseup = this.StopDrag;
		if(document.body.setCapture)
			document.body.setCapture();

		document.onmousedown = jsUtils.False;
		var b = document.body;
		b.ondrag = jsUtils.False;
		b.onselectstart = jsUtils.False;
		b.style.MozUserSelect = _this.floatDiv.style.MozUserSelect = 'none';
		b.style.cursor = 'move';
	}

	this.StopDrag = function(e)
	{
		if(document.body.releaseCapture)
			document.body.releaseCapture();

		jsUtils.removeEvent(document, "mousemove", _this.MoveDrag);
		document.onmouseup = null;

		this.floatDiv = null;

		document.onmousedown = null;
		var b = document.body;
		b.ondrag = null;
		b.onselectstart = null;
		b.style.MozUserSelect = _this.floatDiv.style.MozUserSelect = '';
		b.style.cursor = '';
	}

	this.MoveDrag = function(e)
	{
		var x = e.clientX + document.body.scrollLeft;
		var y = e.clientY + document.body.scrollTop;

		if(_this.x == x && _this.y == y)
			return;

		_this.Move(_this.floatDiv, (x - _this.x), (y - _this.y));
		_this.x = x;
		_this.y = y;
	}
}
var jsFloatDiv = new JCFloatDiv();

/************************************************/

var BXHint = function(innerHTML, element, addParams)
{
	this.oDivOver = false;
	this.timeOutID = null;
	this.oIcon = null;
	this.freeze = false;
	this.x = 0;
	this.y = 0;
	this.time = 700;

	if (!innerHTML)
		innerHTML = "";
	this.Create(innerHTML, element, addParams);
}

BXHint.prototype.Create = function(innerHTML, element, addParams)
{
	var
		_this = this,
		width = 0,
		height = 0,
		className = null,
		type = "icon";
	this.bWidth = true;

	if (addParams)
	{
		if (addParams.width === false)
			this.bWidth = false;
		else if (addParams.width)
			width = addParams.width;

		if (addParams.height)
			height = addParams.height;

		if (addParams.className)
			className = addParams.className;

		if (addParams.type && (addParams.type == "link" || addParams.type == "icon"))
			type = addParams.type;
		if (addParams.time > 0)
			this.time = addParams.time;
	}

	if (element)
		type = "element";

	if (type == "icon")
	{
		var element = document.createElement("IMG");
		element.src = (addParams && addParams.iconSrc) ? addParams.iconSrc : "/bitrix/themes/"+phpVars.ADMIN_THEME_ID+"/public/popup/hint.gif";
		element.ondrag = jsUtils.False;
	}
	else if (type == "link")
	{
		var element = document.createElement("A");
		element.href = "";
		element.onclick = function(e){return false;}
		element.innerHTML = "[?]";
	}

	this.element = element;
	if (type == "element")
	{
		if(addParams && addParams.show_on_click)
		{
			jsUtils.addEvent(
				element,
				"click",
				function (event)
				{
					if (!event)
						event = window.event;
					_this.GetMouseXY(event);
					_this.timeOutID = setTimeout(function () {_this.Show(innerHTML,width,height,className) }, 10);
				}
			);
		}
		else
		{
			jsUtils.addEvent(
				element,
				"mouseover",
				function (event)
				{
					if (!event)
						event = window.event;
					_this.GetMouseXY(event);
					_this.timeOutID = setTimeout(function () {_this.Show(innerHTML,width,height,className) }, 750);
				}
			);
		}

		jsUtils.addEvent(
			element,
			"mouseout",
			function(event)
			{
				if (_this.timeOutID)
					clearTimeout(_this.timeOutID);
				_this.SmartHide(_this);
			}
		);
	}
	else
	{
		this.oIcon = element;
		element.onmouseover = function(event) {if (!event) event = window.event; _this.GetMouseXY(event); _this.Show(innerHTML,width,height,className)};
		element.onmouseout = function() {_this.SmartHide(_this);};
	}
}

BXHint.prototype.IsFrozen = function()
{
	return this.freeze;
}

BXHint.prototype.Freeze = function()
{
	this.freeze = true;
	this.Hide();
}

BXHint.prototype.UnFreeze = function()
{
	this.freeze = false;
}

BXHint.prototype.GetMouseXY = function(event)
{
	if (event.pageX || event.pageY)
	{
		this.x = event.pageX;
		this.y = event.pageY;
	}
	else if (event.clientX || event.clientY)
	{
		this.x = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
		this.y = event.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
	}
}

BXHint.prototype.Show = function(innerHTML, width, height, className)
{
	//Delete previous hint
	var old = document.getElementById("__BXHint_div");
	if (old)
		this.Hide();

	if (this.freeze)
		return;

	var _this = this;
	var oDiv = document.body.appendChild(document.createElement("DIV"));
	oDiv.onmouseover = function(){_this.oDivOver = true};
	oDiv.onmouseout = function(){_this.oDivOver = false; _this.SmartHide(_this);}
	oDiv.id = "__BXHint_div";
	oDiv.className = (className) ? className : "bxhint";
	oDiv.style.position = 'absolute';
	if (width && this.bWidth)
		oDiv.style.width = width + "px";

	if (height)
		oDiv.style.height = height + "px";
	oDiv.innerHTML = innerHTML;

	var w = oDiv.offsetWidth;
	var h = oDiv.offsetHeight;
	if (this.bWidth)
	{
		if (!width && w>200)
			w = Math.round(Math.sqrt(1.618*w*h));
		oDiv.style.width = w + "px";
		h = oDiv.offsetHeight;
	}

	var pos = {left : this.x + 10, right : this.x + w, top : this.y, bottom : this.y + h};

	pos = this.AlignToPos(pos, w, h);

	oDiv.style.zIndex = 2100;

	jsFloatDiv.Show(oDiv, pos.left, pos.top,3);

//	oDiv.ondrag = jsUtils.False;
//	oDiv.onselectstart = jsUtils.False;
//	oDiv.style.MozUserSelect = 'none';
	oDiv = null;
}

BXHint.prototype.AlignToPos = function(pos, w, h)
{
	var body = document.body;
	if((body.clientWidth + body.scrollLeft) < (pos.left + w))
		pos.left = (pos.left - w >= 0) ? (pos.left - w) : body.scrollLeft;

	if((body.clientHeight + body.scrollTop) - (pos["bottom"]) < 0)
		pos.top = (pos.top - h >= 0) ? (pos.top - h) : body.scrollTop;

	return pos;
}

BXHint.prototype.Hide = function()
{
	var oDiv = document.getElementById("__BXHint_div");

	if (!oDiv)
		return;

	jsFloatDiv.Close(oDiv);
	oDiv.parentNode.removeChild(oDiv);
	oDiv = null;
}

BXHint.prototype.SmartHide = function(_this)
{
	setTimeout(function ()
		{
			if (!_this.oDivOver)
				_this.Hide();
		}, 100
	);
}

/************************************************/

function WaitOnKeyPress(e)
{
	if(!e) e = window.event
	if(!e) return;
	if(e.keyCode == 27)
		CloseWaitWindow();
}

function ShowWaitWindow()
{
	CloseWaitWindow();

	var obWndSize = jsUtils.GetWindowSize();

	var div = document.body.appendChild(document.createElement("DIV"));
	div.id = "wait_window_div";
	div.innerHTML = phpVars.messLoading;
	div.className = "waitwindow";
	//div.style.left = obWndSize.scrollLeft + (obWndSize.innerWidth - div.offsetWidth) - (jsUtils.IsIE() ? 5 : 20) + "px";
	div.style.right = (5 - obWndSize.scrollLeft) + 'px';
	div.style.top = obWndSize.scrollTop + 5 + "px";

	if(jsUtils.IsIE())
	{
		var frame = document.createElement("IFRAME");
		frame.src = "javascript:''";
		frame.id = "wait_window_frame";
		frame.className = "waitwindow";
		frame.style.width = div.offsetWidth + "px";
		frame.style.height = div.offsetHeight + "px";
		frame.style.right = div.style.right;
		frame.style.top = div.style.top;
		document.body.appendChild(frame);
	}
	jsUtils.addEvent(document, "keypress", WaitOnKeyPress);
}

function CloseWaitWindow()
{
	jsUtils.removeEvent(document, "keypress", WaitOnKeyPress);

	var frame = document.getElementById("wait_window_frame");
	if(frame)
		frame.parentNode.removeChild(frame);

	var div = document.getElementById("wait_window_div");
	if(div)
		div.parentNode.removeChild(div);
}

/************************************************/

var jsSelectUtils =
{
	addNewOption: function(select_id, opt_value, opt_name, do_sort, check_unique)
	{
		var oSelect = (typeof(select_id) == 'string' || select_id instanceof String? document.getElementById(select_id) : select_id);
		if(oSelect)
		{
			var n = oSelect.length;
			if(check_unique !== false)
			{
				for(var i=0;i<n;i++)
					if(oSelect[i].value==opt_value)
						return;
			}
			var newoption = new Option(opt_name, opt_value, false, false);
			oSelect.options[n]=newoption;
		}
		if(do_sort === true)
			this.sortSelect(select_id);
	},

	deleteOption: function(select_id, opt_value)
	{
		var oSelect = (typeof(select_id) == 'string' || select_id instanceof String? document.getElementById(select_id) : select_id);
		if(oSelect)
		{
			for(var i=0;i<oSelect.length;i++)
				if(oSelect[i].value==opt_value)
				{
					oSelect.remove(i);
					break;
				}
		}
	},

	deleteSelectedOptions: function(select_id)
	{
		var oSelect = (typeof(select_id) == 'string' || select_id instanceof String? document.getElementById(select_id) : select_id);
		if(oSelect)
		{
			var i=0;
			while(i<oSelect.length)
				if(oSelect[i].selected)
				{
					oSelect[i].selected=false;
					oSelect.remove(i);
				}
				else
					i++;
		}
	},

	deleteAllOptions: function(oSelect)
	{
		if(oSelect)
		{
			for(var i=oSelect.length-1; i>=0; i--)
				oSelect.remove(i);
		}
	},

	optionCompare: function(record1, record2)
	{
		var value1 = record1.optText.toLowerCase();
		var value2 = record2.optText.toLowerCase();
		if (value1 > value2) return(1);
		if (value1 < value2) return(-1);
		return(0);
	},

	sortSelect: function(select_id)
	{
		var oSelect = (typeof(select_id) == 'string' || select_id instanceof String? document.getElementById(select_id) : select_id);
		if(oSelect)
		{
			var myOptions = [];
			var n = oSelect.options.length;
			for (var i=0;i<n;i++)
			{
				myOptions[i] = {
					optText:oSelect[i].text,
					optValue:oSelect[i].value
				};
			}
			myOptions.sort(this.optionCompare);
			oSelect.length=0;
			n = myOptions.length;
			for(var i=0;i<n;i++)
			{
				var newoption = new Option(myOptions[i].optText, myOptions[i].optValue, false, false);
				oSelect[i]=newoption;
			}
		}
	},

	selectAllOptions: function(select_id)
	{
		var oSelect = (typeof(select_id) == 'string' || select_id instanceof String? document.getElementById(select_id) : select_id);
		if(oSelect)
		{
			var n = oSelect.length;
			for(var i=0;i<n;i++)
				oSelect[i].selected=true;
		}
	},

	selectOption: function(select_id, opt_value)
	{
		var oSelect = (typeof(select_id) == 'string' || select_id instanceof String? document.getElementById(select_id) : select_id);
		if(oSelect)
		{
			var n = oSelect.length;
			for(var i=0;i<n;i++)
				oSelect[i].selected = (oSelect[i].value == opt_value);
		}
	},

	addSelectedOptions: function(oSelect, to_select_id, check_unique, do_sort)
	{
		if(!oSelect)
			return;
		var n = oSelect.length;
		for(var i=0; i<n; i++)
			if(oSelect[i].selected)
				this.addNewOption(to_select_id, oSelect[i].value, oSelect[i].text, do_sort, check_unique);
	},

	moveOptionsUp: function(oSelect)
	{
		if(!oSelect)
			return;
		var n = oSelect.length;
		for(var i=0; i<n; i++)
		{
			if(oSelect[i].selected && i>0 && oSelect[i-1].selected == false)
			{
				var option1 = new Option(oSelect[i].text, oSelect[i].value);
				var option2 = new Option(oSelect[i-1].text, oSelect[i-1].value);
				oSelect[i] = option2;
				oSelect[i].selected = false;
				oSelect[i-1] = option1;
				oSelect[i-1].selected = true;
			}
		}
	},

	moveOptionsDown: function(oSelect)
	{
		if(!oSelect)
			return;
		var n = oSelect.length;
		for(var i=n-1; i>=0; i--)
		{
			if(oSelect[i].selected && i<n-1 && oSelect[i+1].selected == false)
			{
				var option1 = new Option(oSelect[i].text, oSelect[i].value);
				var option2 = new Option(oSelect[i+1].text, oSelect[i+1].value);
				oSelect[i] = option2;
				oSelect[i].selected = false;
				oSelect[i+1] = option1;
				oSelect[i+1].selected = true;
			}
		}
	}

}

/************************************************/
/* End */
;
; /* Start:/bitrix/js/main/core/core_popup.js*/
;(function(window) {

if (BX.PopupWindowManager)
	return;

BX.PopupWindowManager =
{
	_popups : [],
	_currentPopup : null,

	create : function(uniquePopupId, bindElement, params)
	{
		var index = -1;
		if ( (index = this._getPopupIndex(uniquePopupId)) !== -1)
			return this._popups[index];

		var popupWindow = new BX.PopupWindow(uniquePopupId, bindElement, params);

		BX.addCustomEvent(popupWindow, "onPopupShow", BX.delegate(this.onPopupShow, this));
		BX.addCustomEvent(popupWindow, "onPopupClose", BX.delegate(this.onPopupClose, this));
		BX.addCustomEvent(popupWindow, "onPopupDestroy", BX.delegate(this.onPopupDestroy, this));

		this._popups.push(popupWindow);

		return popupWindow;
	},

	onPopupShow : function(popupWindow)
	{
		if (this._currentPopup !== null)
			this._currentPopup.close();

		this._currentPopup = popupWindow;
	},

	onPopupClose : function(popupWindow)
	{
		this._currentPopup = null;
	},

	onPopupDestroy : function(popupWindow)
	{
		var index = -1;
		if ( (index = this._getPopupIndex(popupWindow.uniquePopupId)) !== -1)
			this._popups = BX.util.deleteFromArray(this._popups, index);
	},

	getCurrentPopup : function()
	{
		return this._currentPopup;
	},

	isPopupExists : function(uniquePopupId)
	{
		return this._getPopupIndex(uniquePopupId) !== -1
	},

	_getPopupIndex : function(uniquePopupId)
	{
		var index = -1;

		for (var i = 0; i < this._popups.length; i++)
			if (this._popups[i].uniquePopupId == uniquePopupId)
				return i;

		return index;
	}
};

BX.PopupWindow = function(uniquePopupId, bindElement, params)
{
	BX.onCustomEvent("onPopupWindowInit", [uniquePopupId, bindElement, params ]);

	this.uniquePopupId = uniquePopupId;
	this.params = params || {};
	this.params.zIndex = parseInt(this.params.zIndex);
	this.params.zIndex = isNaN(this.params.zIndex) ? 0 : this.params.zIndex;
	this.buttons = this.params.buttons && BX.type.isArray(this.params.buttons) ? this.params.buttons : [];
	this.offsetTop = BX.PopupWindow.getOption("offsetTop");
	this.offsetLeft = BX.PopupWindow.getOption("offsetLeft");
	this.firstShow = false;
	this.bordersWidth = 20;
	this.bindElementPos = null;
	this.closeIcon = null;
	this.angle = null;
	this.overlay = null;
	this.titleBar = null;
	this.bindOptions = typeof(this.params.bindOptions) == "object" ? this.params.bindOptions : {};
	this.isAutoHideBinded = false;
	this.closeByEsc = !!this.params.closeByEsc;
	this.isCloseByEscBinded = false;

	this.dragged = false;
	this.dragPageX = 0;
	this.dragPageY = 0;

	if (this.params.events)
	{
		for (var eventName in this.params.events)
			BX.addCustomEvent(this, eventName, this.params.events[eventName]);
	}

	this.popupContainer = document.createElement("DIV");

	BX.adjust(this.popupContainer, {
		props : {
			id : uniquePopupId
		},
		style : {
			zIndex: this.getZindex(),
			position: "absolute",
			display: "none",
			top: "0px",
			left: "0px"
		}
	});

	if (params.darkMode)
	{
		BX.addClass(this.popupContainer, 'popup-window-dark');
	}

	var tableClassName = "popup-window";
	if (params.lightShadow)
		tableClassName += " popup-window-light";
	if (params.titleBar)
		tableClassName += params.lightShadow ? " popup-window-titlebar-light" : " popup-window-titlebar";
	if (params.className && BX.type.isNotEmptyString(params.className))
		tableClassName += " " + params.className;

	this.popupContainer.innerHTML = ['<table class="', tableClassName,'" cellspacing="0"> \
		<tr class="popup-window-top-row"> \
			<td class="popup-window-left-column"><div class="popup-window-left-spacer"></div></td> \
			<td class="popup-window-center-column">', (params.titleBar ? '<div class="popup-window-titlebar" id="popup-window-titlebar-' + uniquePopupId + '"></div>' : ""),'</td> \
			<td class="popup-window-right-column"><div class="popup-window-right-spacer"></div></td> \
		</tr> \
		<tr class="popup-window-content-row"> \
			<td class="popup-window-left-column"></td> \
			<td class="popup-window-center-column"><div class="popup-window-content" id="popup-window-content-', uniquePopupId ,'"> \
			</div></td> \
			<td class="popup-window-right-column"></td> \
		</tr> \
		<tr class="popup-window-bottom-row"> \
			<td class="popup-window-left-column"></td> \
			<td class="popup-window-center-column"></td> \
			<td class="popup-window-right-column"></td> \
		</tr> \
	</table>'].join("");
	document.body.appendChild(this.popupContainer);

	if (params.closeIcon)
	{
		this.popupContainer.appendChild(
			(this.closeIcon = BX.create("a", {
				props : { className: "popup-window-close-icon" + (params.titleBar ? " popup-window-titlebar-close-icon" : ""), href : ""},
				style : (typeof(params.closeIcon) == "object" ? params.closeIcon : {} ),
				events : { click : BX.proxy(this._onCloseIconClick, this) } } )
			)
		);

		if (BX.browser.IsIE())
			BX.adjust(this.closeIcon, { attrs: { hidefocus: "true" } });
	}

	this.contentContainer = BX("popup-window-content-" +  uniquePopupId);
	this.titleBar = BX("popup-window-titlebar-" +  uniquePopupId);
	this.buttonsContainer = this.buttonsHr = null;

	if (params.angle)
		this.setAngle(params.angle);

	if (params.overlay)
		this.setOverlay(params.overlay);

	this.setOffset(this.params);
	this.setBindElement(bindElement);
	this.setTitleBar(this.params.titleBar);
	this.setContent(this.params.content);
	this.setButtons(this.params.buttons);

	if (this.params.bindOnResize !== false)
	{
		BX.bind(window, "resize", BX.proxy(this._onResizeWindow, this));
	}
};

BX.PopupWindow.prototype.setContent = function(content)
{
	if (!this.contentContainer || !content)
		return;

	if (BX.type.isElementNode(content))
	{
		BX.cleanNode(this.contentContainer);
		this.contentContainer.appendChild(content.parentNode ? content.parentNode.removeChild(content) : content );
		content.style.display = "block";
	}
	else if (BX.type.isString(content))
	{
		this.contentContainer.innerHTML = content;
	}
	else
		this.contentContainer.innerHTML = "&nbsp;";

};

BX.PopupWindow.prototype.setButtons = function(buttons)
{
	this.buttons = buttons && BX.type.isArray(buttons) ? buttons : [];

	if (this.buttonsHr)
		BX.remove(this.buttonsHr);
	if (this.buttonsContainer)
		BX.remove(this.buttonsContainer);

	if (this.buttons.length > 0 && this.contentContainer)
	{
		var newButtons = [];
		for (var i = 0; i < this.buttons.length; i++)
		{
			var button = this.buttons[i];
			if (button == null || !BX.is_subclass_of(button, BX.PopupWindowButton))
				continue;

			button.popupWindow = this;
			newButtons.push(button.render());
		}

		this.buttonsHr = this.contentContainer.parentNode.appendChild(
			BX.create("div",{
				props : { className : "popup-window-hr popup-window-buttons-hr" },
				children : [ BX.create("i", {}) ]
			})
		);

		this.buttonsContainer = this.contentContainer.parentNode.appendChild(
			BX.create("div",{
				props : { className : "popup-window-buttons" },
				children : newButtons
			})
		);
	}
};

BX.PopupWindow.prototype.setBindElement = function(bindElement)
{
	if (!bindElement || typeof(bindElement) != "object")
		return;

	if (BX.type.isDomNode(bindElement) || (BX.type.isNumber(bindElement.top) && BX.type.isNumber(bindElement.left)))
		this.bindElement = bindElement;
	else if (BX.type.isNumber(bindElement.clientX) && BX.type.isNumber(bindElement.clientY))
	{
		BX.fixEventPageXY(bindElement);
		this.bindElement = { left : bindElement.pageX, top : bindElement.pageY, bottom : bindElement.pageY };
	}
};

BX.PopupWindow.prototype.getBindElementPos = function(bindElement)
{
	if (BX.type.isDomNode(bindElement))
	{
		return BX.pos(bindElement, false);
	}
	else if (bindElement && typeof(bindElement) == "object")
	{
		if (!BX.type.isNumber(bindElement.bottom))
			bindElement.bottom = bindElement.top;
		return bindElement;
	}
	else
	{
		var windowSize =  BX.GetWindowInnerSize();
		var windowScroll = BX.GetWindowScrollPos();
		var popupWidth = this.popupContainer.offsetWidth;
		var popupHeight = this.popupContainer.offsetHeight;

		return {
			left : windowSize.innerWidth/2 - popupWidth/2 + windowScroll.scrollLeft,
			top : windowSize.innerHeight/2 - popupHeight/2 + windowScroll.scrollTop,
			bottom : windowSize.innerHeight/2 - popupHeight/2 + windowScroll.scrollTop,

			//for optimisation purposes
			windowSize : windowSize,
			windowScroll : windowScroll,
			popupWidth : popupWidth,
			popupHeight : popupHeight
		};
	}
};

BX.PopupWindow.prototype.setAngle = function(params)
{
	var className = this.params.lightShadow ? "popup-window-light-angly" : "popup-window-angly";
	if (this.angle == null)
	{
		var position = this.bindOptions.position && this.bindOptions.position == "top" ? "bottom" : "top";
		var angleMinLeft = BX.PopupWindow.getOption(position == "top" ? "angleMinTop" : "angleMinBottom");
		var defaultOffset = BX.type.isNumber(params.offset) ? params.offset : 0;

		var angleLeftOffset = BX.PopupWindow.getOption("angleLeftOffset", null);
		if (defaultOffset > 0 && BX.type.isNumber(angleLeftOffset))
			defaultOffset += angleLeftOffset - BX.PopupWindow.defaultOptions.angleLeftOffset;

		this.angle = {
			element : BX.create("div", { props : { className: className + " " + className +"-" + position }}),
			position : position,
			offset : 0,
			defaultOffset : Math.max(defaultOffset, angleMinLeft)
			//Math.max(BX.type.isNumber(params.offset) ? params.offset : 0, angleMinLeft)
		};
		this.popupContainer.appendChild(this.angle.element);
	}

	if (typeof(params) == "object" && params.position && BX.util.in_array(params.position, ["top", "right", "bottom", "left", "hide"]))
	{
		BX.removeClass(this.angle.element, className + "-" +  this.angle.position);
		BX.addClass(this.angle.element, className + "-" +  params.position);
		this.angle.position = params.position;
	}

	if (typeof(params) == "object" && BX.type.isNumber(params.offset))
	{
		var offset = params.offset;
		var minOffset, maxOffset;
		if (this.angle.position == "top")
		{
			minOffset = BX.PopupWindow.getOption("angleMinTop");
			maxOffset = this.popupContainer.offsetWidth - BX.PopupWindow.getOption("angleMaxTop");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.left = this.angle.offset + "px";
			this.angle.element.style.marginLeft = "auto";
		}
		else if (this.angle.position == "bottom")
		{
			minOffset = BX.PopupWindow.getOption("angleMinBottom");
			maxOffset = this.popupContainer.offsetWidth - BX.PopupWindow.getOption("angleMaxBottom");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.marginLeft = this.angle.offset + "px";
			this.angle.element.style.left = "auto";
		}
		else if (this.angle.position == "right")
		{
			minOffset = BX.PopupWindow.getOption("angleMinRight");
			maxOffset = this.popupContainer.offsetHeight - BX.PopupWindow.getOption("angleMaxRight");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.top = this.angle.offset + "px";
		}
		else if (this.angle.position == "left")
		{
			minOffset = BX.PopupWindow.getOption("angleMinLeft");
			maxOffset = this.popupContainer.offsetHeight - BX.PopupWindow.getOption("angleMaxLeft");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.top = this.angle.offset + "px";
		}
	}
};

BX.PopupWindow.prototype.isTopAngle = function()
{
	return this.angle != null && this.angle.position == "top";
};

BX.PopupWindow.prototype.isBottomAngle = function()
{
	return this.angle != null && this.angle.position == "bottom";
};

BX.PopupWindow.prototype.isTopOrBottomAngle = function()
{
	return this.angle != null && BX.util.in_array(this.angle.position, ["top", "bottom"]);
};

BX.PopupWindow.prototype.getAngleHeight = function()
{
	return (this.isTopOrBottomAngle() ? BX.PopupWindow.getOption("angleTopOffset") : 0);
};

BX.PopupWindow.prototype.setOffset = function(params)
{
	if (typeof(params) != "object")
		return;

	if (params.offsetLeft && BX.type.isNumber(params.offsetLeft))
		this.offsetLeft = params.offsetLeft + BX.PopupWindow.getOption("offsetLeft");

	if (params.offsetTop && BX.type.isNumber(params.offsetTop))
		this.offsetTop = params.offsetTop + BX.PopupWindow.getOption("offsetTop");
};

BX.PopupWindow.prototype.setTitleBar = function(params)
{
	if (!this.titleBar || typeof(params) != "object" || !BX.type.isDomNode(params.content))
		return;

	this.titleBar.innerHTML = "";
	this.titleBar.appendChild(params.content);

	if (this.params.draggable)
	{
		this.titleBar.parentNode.style.cursor = "move";
		BX.bind(this.titleBar.parentNode, "mousedown", BX.proxy(this._startDrag, this));
	}
};

BX.PopupWindow.prototype.setClosingByEsc = function(enable)
{
	enable = !!enable;
	if (enable)
	{
		this.closeByEsc = true;
		if (!this.isCloseByEscBinded)
		{
			BX.bind(document, "keyup", BX.proxy(this._onKeyUp, this));
			this.isCloseByEscBinded = true;
		}
	}
	else
	{
		this.closeByEsc = false;
		if (this.isCloseByEscBinded)
		{
			BX.unbind(document, "keyup", BX.proxy(this._onKeyUp, this));
			this.isCloseByEscBinded = false;
		}
	}
};

BX.PopupWindow.prototype.setOverlay = function(params)
{
	if (this.overlay == null)
	{
		this.overlay = {
			element : BX.create("div", { props : { className: "popup-window-overlay", id : "popup-window-overlay-" + this.uniquePopupId } })
		};

		this.adjustOverlayZindex();
		this.resizeOverlay();
		document.body.appendChild(this.overlay.element);
	}

	if (params && params.opacity && BX.type.isNumber(params.opacity) && params.opacity >= 0 && params.opacity <= 100)
	{
		if (BX.browser.IsIE() && !BX.browser.IsIE9())
			this.overlay.element.style.filter =  "alpha(opacity=" + params.opacity +")";
		else
		{
			this.overlay.element.style.filter = "none";
			this.overlay.element.style.opacity = parseFloat(params.opacity/100).toPrecision(3);
		}
	}

	if (params && params.backgroundColor)
		this.overlay.element.style.backgroundColor = params.backgroundColor;
};

BX.PopupWindow.prototype.removeOverlay = function()
{
	if (this.overlay != null && this.overlay.element != null)
		BX.remove(this.overlay.element);

	this.overlay = null;
};

BX.PopupWindow.prototype.hideOverlay = function()
{
	if (this.overlay != null && this.overlay.element != null)
		this.overlay.element.style.display = "none";
};

BX.PopupWindow.prototype.showOverlay = function()
{
	if (this.overlay != null && this.overlay.element != null)
		this.overlay.element.style.display = "block";
};

BX.PopupWindow.prototype.resizeOverlay = function()
{
	if (this.overlay != null && this.overlay.element != null)
	{
		var windowSize = BX.GetWindowScrollSize();
		this.overlay.element.style.width = windowSize.scrollWidth + "px";
		this.overlay.element.style.height = windowSize.scrollHeight + "px";
	}
};

BX.PopupWindow.prototype.getZindex = function()
{
	if (this.overlay != null)
		return BX.PopupWindow.getOption("popupOverlayZindex") + this.params.zIndex;
	else
		return BX.PopupWindow.getOption("popupZindex") + this.params.zIndex;
};


BX.PopupWindow.prototype.adjustOverlayZindex = function()
{
	if (this.overlay != null && this.overlay.element != null)
	{
		this.overlay.element.style.zIndex = parseInt(this.popupContainer.style.zIndex) - 1;
	}
};


BX.PopupWindow.prototype.show = function()
{
	if (!this.firstShow)
	{
		BX.onCustomEvent(this, "onPopupFirstShow", [this]);
		this.firstShow = true;
	}
	BX.onCustomEvent(this, "onPopupShow", [this]);

	this.showOverlay();
	this.popupContainer.style.display = "block";

	this.adjustPosition();

	BX.onCustomEvent(this, "onAfterPopupShow", [this]);

	if (this.closeByEsc && !this.isCloseByEscBinded)
	{
		BX.bind(document, "keyup", BX.proxy(this._onKeyUp, this));
		this.isCloseByEscBinded = true;
	}

	if (this.params.autoHide && !this.isAutoHideBinded)
	{
		setTimeout(
			BX.proxy(function() {
				this.isAutoHideBinded = true;
				BX.bind(this.popupContainer, "click", this.cancelBubble);
				BX.bind(document, "click", BX.proxy(this.close, this));
			}, this), 0
		);
	}
};

BX.PopupWindow.prototype.isShown = function()
{
   return this.popupContainer.style.display == "block";
};

BX.PopupWindow.prototype.cancelBubble = function(event)
{
	if(!event)
		event = window.event;

	if (event.stopPropagation)
		event.stopPropagation();
	else
		event.cancelBubble = true;
};

BX.PopupWindow.prototype.close = function(event)
{
	if (!this.isShown())
		return;

	if (event && !(BX.getEventButton(event)&BX.MSLEFT))
		return true;

	BX.onCustomEvent(this, "onPopupClose", [this, event]);

	this.hideOverlay();
	this.popupContainer.style.display = "none";

	if (this.isCloseByEscBinded)
	{
		BX.unbind(document, "keyup", BX.proxy(this._onKeyUp, this));
		this.isCloseByEscBinded = false;
	}

	setTimeout(BX.proxy(this._close, this), 0);
};

BX.PopupWindow.prototype._close = function()
{
	if (this.params.autoHide && this.isAutoHideBinded)
	{
		this.isAutoHideBinded = false;
		BX.unbind(this.popupContainer, "click", this.cancelBubble);
		BX.unbind(document, "click", BX.proxy(this.close, this));
	}
};

BX.PopupWindow.prototype._onCloseIconClick = function(event)
{
	event = event || window.event;
	this.close(event);
	BX.PreventDefault(event);
};

BX.PopupWindow.prototype._onKeyUp = function(event)
{
	event = event || window.event;
	if (event.keyCode == 27)
	{
		_checkEscPressed(this.getZindex(), BX.proxy(this.close, this));
	}
};

BX.PopupWindow.prototype.destroy = function()
{
	BX.onCustomEvent(this, "onPopupDestroy", [this]);
	BX.unbindAll(this);
	BX.unbind(document, "keyup", BX.proxy(this._onKeyUp, this));
	BX.unbind(document, "click", BX.proxy(this.close, this));
	BX.unbind(document, "mousemove", BX.proxy(this._moveDrag, this));
	BX.unbind(document, "mouseup", BX.proxy(this._stopDrag, this));
	BX.unbind(window, "resize", BX.proxy(this._onResizeWindow, this));
	BX.remove(this.popupContainer);
	this.removeOverlay();
};

BX.PopupWindow.prototype.adjustPosition = function(bindOptions)
{
	if (bindOptions && typeof(bindOptions) == "object")
		this.bindOptions = bindOptions;

	var bindElementPos = this.getBindElementPos(this.bindElement);

	if (!this.bindOptions.forceBindPosition && this.bindElementPos != null &&
		 bindElementPos.top == this.bindElementPos.top &&
		 bindElementPos.left == this.bindElementPos.left
	)
		return;

	this.bindElementPos = bindElementPos;

	var windowSize = bindElementPos.windowSize ? bindElementPos.windowSize : BX.GetWindowInnerSize();
	var windowScroll = bindElementPos.windowScroll ? bindElementPos.windowScroll : BX.GetWindowScrollPos();
	var popupWidth = bindElementPos.popupWidth ? bindElementPos.popupWidth : this.popupContainer.offsetWidth;
	var popupHeight = bindElementPos.popupHeight ? bindElementPos.popupHeight : this.popupContainer.offsetHeight;

	var angleTopOffset = BX.PopupWindow.getOption("angleTopOffset");

	var left = this.bindElementPos.left + this.offsetLeft -
				(this.isTopOrBottomAngle() ? BX.PopupWindow.getOption("angleLeftOffset") : 0);

	if ( !this.bindOptions.forceLeft &&
		(left + popupWidth + this.bordersWidth) >= (windowSize.innerWidth + windowScroll.scrollLeft) &&
		(windowSize.innerWidth + windowScroll.scrollLeft - popupWidth - this.bordersWidth) > 0)
	{
			var bindLeft = left;
			left = windowSize.innerWidth + windowScroll.scrollLeft - popupWidth - this.bordersWidth;
			if (this.isTopOrBottomAngle())
			{
				this.setAngle({ offset : bindLeft - left + this.angle.defaultOffset});
			}
	}
	else if (this.isTopOrBottomAngle())
	{
		this.setAngle({ offset : this.angle.defaultOffset + (left < 0 ? left : 0) });
	}

	if (left < 0)
		left = 0;

	var top = 0;

	if (this.bindOptions.position && this.bindOptions.position == "top")
	{
		top = this.bindElementPos.top - popupHeight - this.offsetTop - (this.isBottomAngle() ? angleTopOffset : 0);
		if (top < 0 || (!this.bindOptions.forceTop && top < windowScroll.scrollTop))
		{
			top = this.bindElementPos.bottom + this.offsetTop;
			if (this.angle != null)
			{
				top += angleTopOffset;
				this.setAngle({ position: "top"});
			}
		}
		else if (this.isTopAngle())
		{
			top = top - angleTopOffset + BX.PopupWindow.getOption("positionTopXOffset");
			this.setAngle({ position: "bottom"});
		}
		else
		{
			top += BX.PopupWindow.getOption("positionTopXOffset");
		}
	}
	else
	{
		top = this.bindElementPos.bottom + this.offsetTop + this.getAngleHeight();

		if ( !this.bindOptions.forceTop &&
			(top + popupHeight) > (windowSize.innerHeight + windowScroll.scrollTop) &&
			(this.bindElementPos.top - popupHeight - this.getAngleHeight()) >= 0) //Can we place the PopupWindow above the bindElement?
		{
			//The PopupWindow doesn't place below the bindElement. We should place it above.
			top = this.bindElementPos.top - popupHeight;
			if (this.isTopOrBottomAngle())
			{
				top -= angleTopOffset;
				this.setAngle({ position: "bottom"});
			}

			top += BX.PopupWindow.getOption("positionTopXOffset");
		}
		else if (this.isBottomAngle())
		{
			top += angleTopOffset;
			this.setAngle({ position: "top"});
		}
	}

	if (top < 0)
		top = 0;

	BX.adjust(this.popupContainer, { style: {
		top: top + "px",
		left: left + "px",
		zIndex: this.getZindex()
	}});

	this.adjustOverlayZindex();
};

BX.PopupWindow.prototype._onResizeWindow = function(event)
{
	if (this.isShown())
	{
		this.adjustPosition();
		if (this.overlay != null)
			this.resizeOverlay();
	}
};

BX.PopupWindow.prototype.move = function(offsetX, offsetY)
{
	var left = parseInt(this.popupContainer.style.left) + offsetX;
	var top = parseInt(this.popupContainer.style.top) + offsetY;

	if (typeof(this.params.draggable) == "object" && this.params.draggable.restrict)
	{
		//Left side
		if (left < 0)
			left = 0;

		//Right side
		var scrollSize = BX.GetWindowScrollSize();
		var floatWidth = this.popupContainer.offsetWidth;
		var floatHeight = this.popupContainer.offsetHeight;

		if (left > (scrollSize.scrollWidth - floatWidth))
			left = scrollSize.scrollWidth - floatWidth;

		if (top > (scrollSize.scrollHeight - floatHeight))
			top = scrollSize.scrollHeight - floatHeight;

		//Top side
		if (top < 0)
			top = 0;
	}

	this.popupContainer.style.left = left + "px";
	this.popupContainer.style.top = top + "px";
};

BX.PopupWindow.prototype._startDrag = function(event)
{
	event = event || window.event;
	BX.fixEventPageXY(event);

	this.dragPageX = event.pageX;
	this.dragPageY = event.pageY;
	this.dragged = false;

	BX.bind(document, "mousemove", BX.proxy(this._moveDrag, this));
	BX.bind(document, "mouseup", BX.proxy(this._stopDrag, this));

	if (document.body.setCapture)
		document.body.setCapture();

	//document.onmousedown = BX.False;
	document.body.ondrag = BX.False;
	document.body.onselectstart = BX.False;
	document.body.style.cursor = "move";
	document.body.style.MozUserSelect = "none";
	this.popupContainer.style.MozUserSelect = "none";

	return BX.PreventDefault(event);
};

BX.PopupWindow.prototype._moveDrag = function(event)
{
	event = event || window.event;
	BX.fixEventPageXY(event);

	if(this.dragPageX == event.pageX && this.dragPageY == event.pageY)
		return;

	this.move((event.pageX - this.dragPageX), (event.pageY - this.dragPageY));
	this.dragPageX = event.pageX;
	this.dragPageY = event.pageY;

	if (!this.dragged)
	{
		BX.onCustomEvent(this, "onPopupDragStart");
		this.dragged = true;
	}

	BX.onCustomEvent(this, "onPopupDrag");
};

BX.PopupWindow.prototype._stopDrag = function(event)
{
	if(document.body.releaseCapture)
		document.body.releaseCapture();

	BX.unbind(document, "mousemove", BX.proxy(this._moveDrag, this));
	BX.unbind(document, "mouseup", BX.proxy(this._stopDrag, this));

	//document.onmousedown = null;
	document.body.ondrag = null;
	document.body.onselectstart = null;
	document.body.style.cursor = "";
	document.body.style.MozUserSelect = "";
	this.popupContainer.style.MozUserSelect = "";

	BX.onCustomEvent(this, "onPopupDragEnd");
	this.dragged = false;

	return BX.PreventDefault(event);
};

BX.PopupWindow.options = {};
BX.PopupWindow.defaultOptions = {

	angleLeftOffset : 15,

	positionTopXOffset : 0,
	angleTopOffset : 8,

	popupZindex : 1000,
	popupOverlayZindex : 1100,

	angleMinLeft : 10,
	angleMaxLeft : 10,

	angleMinRight : 10,
	angleMaxRight : 10,

	angleMinBottom : 7,
	angleMaxBottom : 25,

	angleMinTop : 7,
	angleMaxTop : 25,

	offsetLeft : 0,
	offsetTop: 0
};
BX.PopupWindow.setOptions = function(options)
{
	if (!options || typeof(options) != "object")
		return;

	for (var option in options)
		BX.PopupWindow.options[option] = options[option];
};

BX.PopupWindow.getOption = function(option, defaultValue)
{
	if (typeof(BX.PopupWindow.options[option]) != "undefined")
		return BX.PopupWindow.options[option];
	else if (typeof(defaultValue) != "undefined")
		return defaultValue;
	else
		return BX.PopupWindow.defaultOptions[option];
};


/*========================================Buttons===========================================*/

BX.PopupWindowButton = function(params)
{
	this.popupWindow = null;

	this.params = params || {};

	this.text = this.params.text || "";
	this.id = this.params.id || "";
	this.className = this.params.className || "";
	this.events = this.params.events || {};

	this.contextEvents = {};
	for (var eventName in this.events)
		this.contextEvents[eventName] = BX.proxy(this.events[eventName], this);

	this.nameNode = BX.create("span", { props : { className : "popup-window-button-text"}, text : this.text } );
	this.buttonNode = BX.create(
		"span",
		{
			props : { className : "popup-window-button" + (this.className.length > 0 ? " " + this.className : ""), id : this.id },
			children : [
				BX.create("span", { props : { className : "popup-window-button-left"} } ),
				this.nameNode,
				BX.create("span", { props : { className : "popup-window-button-right"} } )
			],
			events : this.contextEvents
		}
	);
};

BX.PopupWindowButton.prototype.render = function()
{
	return this.buttonNode;
};

BX.PopupWindowButton.prototype.setName = function(name)
{
	this.text = name || "";
	if (this.nameNode)
	{
		BX.cleanNode(this.nameNode);
		BX.adjust(this.nameNode, { text : this.text} );
	}
};

BX.PopupWindowButton.prototype.setClassName = function(className)
{
	if (this.buttonNode)
	{
		if (BX.type.isString(this.className) && (this.className != ''))
			BX.removeClass(this.buttonNode, this.className);

		BX.addClass(this.buttonNode, className)
	}

	this.className = className;
};

BX.PopupWindowButtonLink = function(params)
{
	BX.PopupWindowButtonLink.superclass.constructor.apply(this, arguments);

	this.nameNode = BX.create("span", { props : { className : "popup-window-button-link-text" }, text : this.text, events : this.contextEvents });
	this.buttonNode = BX.create(
		"span",
		{
			props : { className : "popup-window-button popup-window-button-link" + (this.className.length > 0 ? " " + this.className : ""), id : this.id },
			children : [this.nameNode]
		}
	);

};

BX.extend(BX.PopupWindowButtonLink, BX.PopupWindowButton);

BX.PopupMenu = {

	Data : {},
	currentItem : null,

	show : function(id, bindElement, menuItems, params)
	{
		if (this.currentItem !== null)
		{
			this.currentItem.popupWindow.close();
		}

		this.currentItem = this.create(id, bindElement, menuItems, params);
		this.currentItem.popupWindow.show();
	},

	create : function(id, bindElement, menuItems, params)
	{
		if (!this.Data[id])
		{
			this.Data[id] = new BX.PopupMenuWindow(id, bindElement, menuItems, params);
		}

		return this.Data[id];
	},

	getCurrentMenu : function()
	{
		return this.currentItem;
	},

	getMenuById : function(id)
	{
		return this.Data[id] ? this.Data[id] : null;
	},

	destroy : function(id)
	{
		var menu = this.getMenuById(id);
		if (menu)
		{
			if (this.currentItem == menu)
			{
				this.currentItem = null;
			}
			menu.popupWindow.destroy();
			delete this.Data[id];
		}
	}
};

BX.PopupMenuWindow = function(id, bindElement, menuItems, params)
{
	this.id = id;
	this.bindElement = bindElement;
	this.menuItems = [];
	this.itemsContainer = null;

	if (menuItems && BX.type.isArray(menuItems))
	{
		for (var i = 0; i < menuItems.length; i++)
		{
			this.__addMenuItem(menuItems[i], null);
		}
	}

	this.params = params && typeof(params) == "object" ? params : {};
	this.popupWindow = this.__createPopup();
};

BX.PopupMenuWindow.prototype.__createItem = function(item, position)
{
	if (position > 0)
	{
		item.layout.hr = BX.create("div", { props : { className : "popup-window-hr" }, children : [ BX.create("i", {}) ]});
	}

	if (item.delimiter)
	{
		item.layout.item = BX.create("span", { props: { className: "popup-window-delimiter" },  html: "<i></i>" });
	}
	else
	{
		item.layout.item = BX.create(!!item.href ? "a" : "span", {
			props : { className: "menu-popup-item" +  (BX.type.isNotEmptyString(item.className) ? " " + item.className : " menu-popup-no-icon")},
			attrs : { title : item.title ? item.title : "", onclick: item.onclick && BX.type.isString(item.onclick) ? item.onclick : "" },
			events : item.onclick && BX.type.isFunction(item.onclick) ? { click : BX.proxy(this.onItemClick, {obj : this, item : item }) } : null,
			children : [
				BX.create("span", { props : { className: "menu-popup-item-left"} }),
				BX.create("span", { props : { className: "menu-popup-item-icon"} }),
				(item.layout.text = BX.create("span", { props : { className: "menu-popup-item-text"}, html : item.text })),
				BX.create("span", { props : { className: "menu-popup-item-right"} })
			]
		});

		if (item.href)
			item.layout.item.href = item.href;
	}

	return item;
};

BX.PopupMenuWindow.prototype.__createPopup = function()
{
	var domItems = [];
	for (var i = 0; i < this.menuItems.length; i++)
	{
		this.__createItem(this.menuItems[i], i);
		if (this.menuItems[i].layout.hr != null)
		{
			domItems.push(this.menuItems[i].layout.hr);
		}

		domItems.push(this.menuItems[i].layout.item);
	}

	var popupWindow = new BX.PopupWindow("menu-popup-" + this.id, this.bindElement, {
		closeByEsc : typeof(this.params.closeByEsc) != "undefined" ? this.params.closeByEsc: false,
		bindOptions : typeof(this.params.bindOptions) == "object" ? this.params.bindOptions : {},
		angle : typeof(this.params.angle) != "undefined" ? this.params.angle : false,
		zIndex : this.params.zIndex ? this.params.zIndex : 0,
		overlay: typeof(this.params.overlay) == "object" ? this.params.overlay : null,
		autoHide : typeof(this.params.autoHide) != "undefined" ? this.params.autoHide : true,
		offsetTop : this.params.offsetTop ? this.params.offsetTop : 1,
		offsetLeft : this.params.offsetLeft ? this.params.offsetLeft : 0,

		lightShadow : typeof(this.params.lightShadow) != "undefined" ? this.params.lightShadow : true,

		content : BX.create("div", { props : { className : "menu-popup" }, children: [
			(this.itemsContainer = BX.create("div", { props : { className : "menu-popup-items" }, children: domItems}))
		]})
	});

	if (this.params && this.params.events)
	{
		for (var eventName in this.params.events)
		{
			if (this.params.events.hasOwnProperty(eventName))
			{
				BX.addCustomEvent(popupWindow, eventName, this.params.events[eventName]);
			}
		}
	}

	return popupWindow;
};

BX.PopupMenuWindow.prototype.onItemClick = function(event)
{
	event = event || window.event;
	this.item.onclick.call(this.obj, event, this.item);
};

BX.PopupMenuWindow.prototype.addMenuItem = function(menuItem, refItemId)
{
	var position = this.__addMenuItem(menuItem, refItemId);
	if (position < 0)
	{
		return false;
	}

	this.__createItem(menuItem, position);
	var refItem = this.getMenuItem(refItemId);
	if (refItem != null)
	{
		if (refItem.layout.hr == null)
		{
			refItem.layout.hr = BX.create("div", { props : { className : "popup-window-hr" }, children : [ BX.create("i", {}) ]});
			this.itemsContainer.insertBefore(refItem.layout.hr, refItem.layout.item);
		}

		if (menuItem.layout.hr != null)
		{
			this.itemsContainer.insertBefore(menuItem.layout.hr, refItem.layout.hr);
		}

		this.itemsContainer.insertBefore(menuItem.layout.item, refItem.layout.hr);
	}
	else
	{
		if (menuItem.layout.hr != null)
		{
			this.itemsContainer.appendChild(menuItem.layout.hr);
		}

		this.itemsContainer.appendChild(menuItem.layout.item);
	}

	return true;
};

BX.PopupMenuWindow.prototype.__addMenuItem = function(menuItem, refItemId)
{
	if (!menuItem || (!menuItem.delimiter && !BX.type.isNotEmptyString(menuItem.text)) || (menuItem.id && this.getMenuItem(menuItem.id) != null))
	{
		return -1;
	}

	menuItem.layout = { item : null, text : null, hr : null };

	var position = this.getMenuItemPosition(refItemId);
	if (position >= 0)
	{
		this.menuItems = BX.util.insertIntoArray(this.menuItems, position, menuItem);
	}
	else
	{
		this.menuItems.push(menuItem);
		position = this.menuItems.length - 1;
	}

	return position;
};

BX.PopupMenuWindow.prototype.removeMenuItem = function(itemId)
{
	var item = this.getMenuItem(itemId);
	if (!item)
	{
		return;
	}

	for (var position = 0; position < this.menuItems.length; position++)
	{
		if (this.menuItems[position] == item)
		{
			this.menuItems = BX.util.deleteFromArray(this.menuItems, position);
			break;
		}
	}

	if (position == 0)
	{
		if (this.menuItems[0])
		{
			this.menuItems[0].layout.hr.parentNode.removeChild(this.menuItems[0].layout.hr);
			this.menuItems[0].layout.hr = null;
		}
	}
	else
	{
		item.layout.hr.parentNode.removeChild(item.layout.hr);
	}

	item.layout.item.parentNode.removeChild(item.layout.item);
	item.layout.item = null;
};

BX.PopupMenuWindow.prototype.getMenuItem = function(itemId)
{
	for (var i = 0; i < this.menuItems.length; i++)
	{
		if (this.menuItems[i].id && this.menuItems[i].id == itemId)
		{
			return this.menuItems[i];
		}
	}

	return null;
};

BX.PopupMenuWindow.prototype.getMenuItemPosition = function(itemId)
{
	if (itemId)
	{
		for (var i = 0; i < this.menuItems.length; i++)
		{
			if (this.menuItems[i].id && this.menuItems[i].id == itemId)
			{
				return i;
			}
		}
	}

	return -1;
};

// TODO: copypaste/update/enhance CSS and images from calendar to MAIN CORE
// this.values = [{ID: 1, NAME : '111', DESCRIPTION: '111', URL: 'href://...'}]

window.BXInputPopup = function(params)
{
	this.id = params.id || 'bx-inp-popup-' + Math.round(Math.random() * 1000000);
	this.handler = params.handler || false;
	this.values = params.values || false;
	this.pInput = params.input;
	this.bValues = !!this.values;
	this.defaultValue = params.defaultValue || '';
	this.openTitle = params.openTitle || '';
	this.className = params.className || '';
	this.noMRclassName = params.noMRclassName || 'ec-no-rm';
	this.emptyClassName = params.noMRclassName || 'ec-label';

	var _this = this;
	this.curInd = false;

	if (this.bValues)
	{
		this.pInput.onfocus = this.pInput.onclick = function(e)
		{
			if (this.value == _this.defaultValue)
			{
				this.value = '';
				this.className = _this.className;
			}
			_this.ShowPopup();
			return BX.PreventDefault(e);
		};
		this.pInput.onblur = function()
		{
			if (_this.bShowed)
				setTimeout(function(){_this.ClosePopup(true);}, 200);
			_this.OnChange();
		};
	}
	else
	{
		this.pInput.className = this.noMRclassName;
		this.pInput.onblur = BX.proxy(this.OnChange, this);
	}
}

BXInputPopup.prototype = {
ShowPopup: function()
{
	if (this.bShowed)
		return;

	var _this = this;
	if (!this.oPopup)
	{
		var
			pRow,
			pWnd = BX.create("DIV", {props:{className: "bxecpl-loc-popup " + this.className}});

		for (var i = 0, l = this.values.length; i < l; i++)
		{
			pRow = pWnd.appendChild(BX.create("DIV", {
				props: {id: 'bxecmr_' + i},
				text: this.values[i].NAME,
				events: {
					mouseover: function(){BX.addClass(this, 'bxecplloc-over');},
					mouseout: function(){BX.removeClass(this, 'bxecplloc-over');},
					click: function()
					{
						var ind = this.id.substr('bxecmr_'.length);
						_this.pInput.value = _this.values[ind].NAME;
						_this.curInd = ind;
						_this.OnChange();
						_this.ClosePopup(true);
					}
				}
			}));

			if (this.values[i].DESCRIPTION)
				pRow.title = this.values[i].DESCRIPTION;
			if (this.values[i].CLASS_NAME)
				BX.addClass(pRow, this.values[i].CLASS_NAME);

			if (this.values[i].URL)
				pRow.appendChild(BX.create('A', {props: {href: this.values[i].URL, className: 'bxecplloc-view', target: '_blank', title: this.openTitle}}));
		}

		this.oPopup = new BX.PopupWindow(this.id, this.pInput, {
			autoHide : true,
			offsetTop : 1,
			offsetLeft : 0,
			lightShadow : true,
			closeByEsc : true,
			content : pWnd
		});

		BX.addCustomEvent(this.oPopup, 'onPopupClose', BX.proxy(this.ClosePopup, this));
	}

	this.oPopup.show();
	this.pInput.select();

	this.bShowed = true;
	BX.onCustomEvent(this, 'onInputPopupShow', [this]);
},

ClosePopup: function(bClosePopup)
{
	this.bShowed = false;

	if (this.pInput.value == '')
		this.OnChange();

	BX.onCustomEvent(this, 'onInputPopupClose', [this]);

	if (bClosePopup === true)
		this.oPopup.close();
},

OnChange: function()
{
	var val = this.pInput.value;
	if (this.bValues)
	{
		if (this.pInput.value == '' || this.pInput.value == this.defaultValue)
		{
			this.pInput.value = this.defaultValue;
			this.pInput.className = this.emptyClassName;
			val = '';
		}
		else
		{
			this.pInput.className = '';
		}
	}

	if (isNaN(parseInt(this.curInd)) || this.curInd !==false && val != this.values[this.curInd].NAME)
		this.curInd = false;
	else
		this.curInd = parseInt(this.curInd);

	BX.onCustomEvent(this, 'onInputPopupChanged', [this, this.curInd, val]);
	if (this.handler && typeof this.handler == 'function')
		this.handler({ind: this.curInd, value: val});
},

Set: function(ind, val, bOnChange)
{
	this.curInd = ind;
	if (this.curInd !== false)
		this.pInput.value = this.values[this.curInd].NAME;
	else
		this.pInput.value = val;

	if (bOnChange !== false)
		this.OnChange();
},

Get: function(ind)
{
	var
		id = false;
	if (typeof ind == 'undefined')
		ind = this.curInd;

	if (ind !== false && this.values[ind])
		id = this.values[ind].ID;
	return id;
},

GetIndex: function(id)
{
	for (var i = 0, l = this.values.length; i < l; i++)
		if (this.values[i].ID == id)
			return i;
	return false;
},

Deactivate: function(bDeactivate)
{
	if (this.pInput.value == '' || this.pInput.value == this.defaultValue)
	{
		if (bDeactivate)
		{
			this.pInput.value = '';
			this.pInput.className = this.noMRclassName;
		}
		else if (this.oEC.bUseMR)
		{
			this.pInput.value = this.defaultValue;
			this.pInput.className = this.emptyClassName;
		}
	}
	this.pInput.disabled = bDeactivate;
}
};

/************** utility *************/

var _escCallbackIndex = -1,
	_escCallback = null;

function _checkEscPressed(zIndex, callback)
{
	if(zIndex === false)
	{
		if(_escCallback && _escCallback.length > 0)
		{
			for(var i=0;i<_escCallback.length; i++)
			{
				_escCallback[i]();
			}

			_escCallback = null;
			_escCallbackIndex = -1;
		}
	}
	else
	{
		if(_escCallback === null)
		{
			_escCallback = [];
			_escCallbackIndex = -1;
			BX.defer(_checkEscPressed)(false);
		}

		if(zIndex > _escCallbackIndex)
		{
			_escCallbackIndex = zIndex;
			_escCallback = [callback];
		}
		else if(zIndex == _escCallbackIndex)
		{
			_escCallback.push(callback)
		}
	}
}


})(window);

/* End */
;
; /* Start:/bitrix/js/main/core/core_date.js*/
;(function(){

if (BX.date)
	return;

BX.date = {};


BX.date.format = function(format, timestamp, now, utc)
{
	/*
	PHP to Javascript:
		time() = new Date()
		mktime(...) = new Date(...)
		gmmktime(...) = new Date(Date.UTC(...))
		mktime(0,0,0, 1, 1, 1970) != 0          new Date(1970,0,1).getTime() != 0
		gmmktime(0,0,0, 1, 1, 1970) == 0        new Date(Date.UTC(1970,0,1)).getTime() == 0
		date("d.m.Y H:i:s") = BX.date.format("d.m.Y H:i:s")
		gmdate("d.m.Y H:i:s") = BX.date.format("d.m.Y H:i:s", null, null, true);
	*/
	var date = BX.type.isDate(timestamp) ? new Date(timestamp.getTime()) : BX.type.isNumber(timestamp) ? new Date(timestamp * 1000) : new Date();
	var nowDate = BX.type.isDate(now) ? new Date(now.getTime()) : BX.type.isNumber(now) ? new Date(now * 1000) : new Date();
	var isUTC = !!utc;

	if (BX.type.isArray(format))
		return _formatDateInterval(format, date, nowDate, isUTC);
	else if (!BX.type.isNotEmptyString(format))
		return "";

	var formatRegex = /\\?(sago|iago|isago|Hago|dago|mago|Yago|sdiff|idiff|Hdiff|ddiff|mdiff|Ydiff|yesterday|today|tommorow|[a-z])/gi;

	var dateFormats = {
		d : function() {
			// Day of the month 01 to 31
			return BX.util.str_pad_left(getDate(date).toString(), 2, "0");
		},

		D : function() {
			//Mon through Sun
			return BX.message("DOW_" + getDay(date));
		},

		j : function() {
			//Day of the month 1 to 31
			return getDate(date);
		},

		l : function() {
			//Sunday through Saturday
			return BX.message("DAY_OF_WEEK_" + getDay(date));
		},

		N : function() {
			//1 (for Monday) through 7 (for Sunday)
			return getDay(date) || 7;
		},

		S : function() {
			//st, nd, rd or th. Works well with j
			if (getDate(date) % 10 == 1 && getDate(date) != 11)
				return "st";
			else if (getDate(date) % 10 == 2 && getDate(date) != 12)
				return "nd";
			else if (getDate(date) % 10 == 3 && getDate(date) != 13)
				return "rd";
			else
				return "th";
		},

		w : function() {
			//0 (for Sunday) through 6 (for Saturday)
			return getDay(date);
		},

		z : function() {
			//0 through 365
			var firstDay = new Date(getFullYear(date), 0, 1);
			var currentDay = new Date(getFullYear(date), getMonth(date), getDate(date));
			return Math.ceil( (currentDay - firstDay) / (24 * 3600 * 1000) );
		},

		W : function() {
			//ISO-8601 week number of year
			var newDate  = new Date(date.getTime());
		    var dayNumber   = (getDay(date) + 6) % 7;
			setDate(newDate, getDate(newDate) - dayNumber + 3);
		    var firstThursday = newDate.getTime();
			setMonth(newDate, 0, 1);
		    if (getDay(newDate) != 4)
				setMonth(newDate, 0, 1 + ((4 - getDay(newDate)) + 7) % 7);
			var weekNumber = 1 + Math.ceil((firstThursday - newDate) / (7 * 24 * 3600 * 1000));
		    return BX.util.str_pad_left(weekNumber.toString(), 2, "0");
		},

		F : function() {
			//January through December
			return BX.message("MONTH_" + (getMonth(date) + 1) + "_S");
		},

		f : function() {
			//January through December
			return BX.message("MONTH_" + (getMonth(date) + 1));
		},

		m : function() {
			//Numeric representation of a month 01 through 12
			return BX.util.str_pad_left((getMonth(date) + 1).toString(), 2, "0");
		},

		M : function() {
			//A short textual representation of a month, three letters Jan through Dec
			return BX.message("MON_" + (getMonth(date) + 1));
		},

		n : function() {
			//Numeric representation of a month 1 through 12
			return getMonth(date) + 1;
		},

		t : function() {
			//Number of days in the given month 28 through 31
			var lastMonthDay = isUTC ? new Date(Date.UTC(getFullYear(date), getMonth(date) + 1, 0)) : new Date(getFullYear(date), getMonth(date) + 1, 0);
			return getDate(lastMonthDay);
		},

		L : function() {
			//1 if it is a leap year, 0 otherwise.
			var year = getFullYear(date);
			return (year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 1 : 0);
		},

		o : function() {
			//ISO-8601 year number
			var correctDate  = new Date(date.getTime());
			setDate(correctDate, getDate(correctDate) - ((getDay(date) + 6) % 7) + 3);
   			return getFullYear(correctDate);
		},

		Y : function() {
			//A full numeric representation of a year, 4 digits
			return getFullYear(date);
		},

		y : function() {
			//A two digit representation of a year
			return getFullYear(date).toString().slice(2);
		},

		a : function() {
			//am or pm
			return getHours(date) > 11 ? "pm" : "am";
		},

		A : function() {
			//AM or PM
			return getHours(date) > 11 ? "PM" : "AM";
		},

		B : function() {
			//000 through 999
			var swatch = ((date.getUTCHours() + 1) % 24) + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
			return BX.util.str_pad_left(Math.floor(swatch * 1000 / 24).toString(), 3, "0");
		},

		g : function() {
			//12-hour format of an hour without leading zeros 1 through 12
			return getHours(date) % 12 || 12;
		},

		G : function() {
			//24-hour format of an hour without leading zeros 0 through 23
			return getHours(date);
		},

		h : function() {
			//12-hour format of an hour with leading zeros 01 through 12
			return BX.util.str_pad_left((getHours(date) % 12 || 12).toString(), 2, "0");
		},

		H : function() {
			//24-hour format of an hour with leading zeros 00 through 23
			return BX.util.str_pad_left(getHours(date).toString(), 2, "0");
		},

		i : function() {
			//Minutes with leading zeros 00 to 59
			return BX.util.str_pad_left(getMinutes(date).toString(), 2, "0");
		},

		s : function() {
			//Seconds, with leading zeros 00 through 59
			return BX.util.str_pad_left(getSeconds(date).toString(), 2, "0");
		},

		u : function() {
			//Microseconds
			return BX.util.str_pad_left((getMilliseconds(date) * 1000).toString(), 6, "0");
		},

		e : function() {
			if (isUTC)
				return "UTC";
			return "";
		},

		I : function() {
			if (isUTC)
				return 0;

			//Whether or not the date is in daylight saving time 1 if Daylight Saving Time, 0 otherwise
			var firstJanuary = new Date(getFullYear(date), 0, 1);
			var firstJanuaryUTC = Date.UTC(getFullYear(date), 0, 1);
			var firstJuly = new Date(getFullYear(date), 6, 0);
			var firstJulyUTC = Date.UTC(getFullYear(date), 6, 0);
			return 0 + ((firstJanuary - firstJanuaryUTC) !== (firstJuly - firstJulyUTC));
		},

		O : function() {
			if (isUTC)
				return "+0000";

			//Difference to Greenwich time (GMT) in hours +0200
			var timezoneOffset = date.getTimezoneOffset();
			var timezoneOffsetAbs = Math.abs(timezoneOffset);
			return (timezoneOffset > 0 ? "-" : "+") + BX.util.str_pad_left((Math.floor(timezoneOffsetAbs / 60) * 100 + timezoneOffsetAbs % 60).toString(), 4, "0");
		},

		P : function() {
			if (isUTC)
				return "+00:00";

			//Difference to Greenwich time (GMT) with colon between hours and minutes +02:00
			var difference = this.O();
			return difference.substr(0, 3) + ":" + difference.substr(3);
		},

		Z : function() {
			if (isUTC)
				return 0;
			//Timezone offset in seconds. The offset for timezones west of UTC is always negative,
			//and for those east of UTC is always positive.
			return -date.getTimezoneOffset() * 60;
		},

		c : function() {
			//ISO 8601 date
			return "Y-m-d\\TH:i:sP".replace(formatRegex, _replaceDateFormat);
		},

		r : function() {
			//RFC 2822 formatted date
			return "D, d M Y H:i:s O".replace(formatRegex, _replaceDateFormat);
		},

		U : function() {
			//Seconds since the Unix Epoch
			return Math.floor(date.getTime() / 1000);
		},

		sago : function() {
			return _formatDateMessage(intval((nowDate - date) / 1000), {
				"0" : "FD_SECOND_AGO_0",
				"1" : "FD_SECOND_AGO_1",
				"10_20" : "FD_SECOND_AGO_10_20",
				"MOD_1" : "FD_SECOND_AGO_MOD_1",
				"MOD_2_4" : "FD_SECOND_AGO_MOD_2_4",
				"MOD_OTHER" : "FD_SECOND_AGO_MOD_OTHER"
			});
		},

		sdiff : function() {
			return _formatDateMessage(intval((nowDate - date) / 1000), {
				"0" : "FD_SECOND_DIFF_0",
				"1" : "FD_SECOND_DIFF_1",
				"10_20" : "FD_SECOND_DIFF_10_20",
				"MOD_1" : "FD_SECOND_DIFF_MOD_1",
				"MOD_2_4" : "FD_SECOND_DIFF_MOD_2_4",
				"MOD_OTHER" : "FD_SECOND_DIFF_MOD_OTHER"
			});
		},

		iago : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 1000), {
				"0" : "FD_MINUTE_AGO_0",
				"1" : "FD_MINUTE_AGO_1",
				"10_20" : "FD_MINUTE_AGO_10_20",
				"MOD_1" : "FD_MINUTE_AGO_MOD_1",
				"MOD_2_4" : "FD_MINUTE_AGO_MOD_2_4",
				"MOD_OTHER" : "FD_MINUTE_AGO_MOD_OTHER"
			});
		},

		idiff : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 1000), {
				"0" : "FD_MINUTE_DIFF_0",
				"1" : "FD_MINUTE_DIFF_1",
				"10_20" : "FD_MINUTE_DIFF_10_20",
				"MOD_1" : "FD_MINUTE_DIFF_MOD_1",
				"MOD_2_4" : "FD_MINUTE_DIFF_MOD_2_4",
				"MOD_OTHER" : "FD_MINUTE_DIFF_MOD_OTHER"
			});
		},

		isago : function() {
			var minutesAgo = intval((nowDate - date) / 60 / 1000);
			var result = _formatDateMessage(minutesAgo, {
				"0" : "FD_MINUTE_0",
				"1" : "FD_MINUTE_1",
				"10_20" : "FD_MINUTE_10_20",
				"MOD_1" : "FD_MINUTE_MOD_1",
				"MOD_2_4" : "FD_MINUTE_MOD_2_4",
				"MOD_OTHER" : "FD_MINUTE_MOD_OTHER"
			});

			result += " ";

			var secondsAgo = intval((nowDate - date) / 1000) - (minutesAgo * 60);
			result += _formatDateMessage(secondsAgo, {
				"0" : "FD_SECOND_AGO_0",
				"1" : "FD_SECOND_AGO_1",
				"10_20" : "FD_SECOND_AGO_10_20",
				"MOD_1" : "FD_SECOND_AGO_MOD_1",
				"MOD_2_4" : "FD_SECOND_AGO_MOD_2_4",
				"MOD_OTHER" : "FD_SECOND_AGO_MOD_OTHER"
			});
			return result;
		},

		Hago : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 60 / 1000), {
				"0" : "FD_HOUR_AGO_0",
				"1" : "FD_HOUR_AGO_1",
				"10_20" : "FD_HOUR_AGO_10_20",
				"MOD_1" : "FD_HOUR_AGO_MOD_1",
				"MOD_2_4" : "FD_HOUR_AGO_MOD_2_4",
				"MOD_OTHER" : "FD_HOUR_AGO_MOD_OTHER"
			});
		},

		Hdiff : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 60 / 1000), {
				"0" : "FD_HOUR_DIFF_0",
				"1" : "FD_HOUR_DIFF_1",
				"10_20" : "FD_HOUR_DIFF_10_20",
				"MOD_1" : "FD_HOUR_DIFF_MOD_1",
				"MOD_2_4" : "FD_HOUR_DIFF_MOD_2_4",
				"MOD_OTHER" : "FD_HOUR_DIFF_MOD_OTHER"
			});
		},

		yesterday : function() {
			return BX.message("FD_YESTERDAY");
		},

		today : function() {
			return BX.message("FD_TODAY");
		},

		tommorow : function() {
			return BX.message("FD_TOMORROW");
		},

		dago : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 60 / 24 / 1000), {
				"0" : "FD_DAY_AGO_0",
				"1" : "FD_DAY_AGO_1",
				"10_20" : "FD_DAY_AGO_10_20",
				"MOD_1" : "FD_DAY_AGO_MOD_1",
				"MOD_2_4" : "FD_DAY_AGO_MOD_2_4",
				"MOD_OTHER" : "FD_DAY_AGO_MOD_OTHER"
			});
		},

		ddiff : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 60 / 24 / 1000), {
				"0" : "FD_DAY_DIFF_0",
				"1" : "FD_DAY_DIFF_1",
				"10_20" : "FD_DAY_DIFF_10_20",
				"MOD_1" : "FD_DAY_DIFF_MOD_1",
				"MOD_2_4" : "FD_DAY_DIFF_MOD_2_4",
				"MOD_OTHER" : "FD_DAY_DIFF_MOD_OTHER"
			});
		},

		mago : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 60 / 24 / 31 / 1000), {
				"0" : "FD_MONTH_AGO_0",
				"1" : "FD_MONTH_AGO_1",
				"10_20" : "FD_MONTH_AGO_10_20",
				"MOD_1" : "FD_MONTH_AGO_MOD_1",
				"MOD_2_4" : "FD_MONTH_AGO_MOD_2_4",
				"MOD_OTHER" : "FD_MONTH_AGO_MOD_OTHER"
			});
		},

		mdiff : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 60 / 24 / 31 / 1000), {
				"0" : "FD_MONTH_DIFF_0",
				"1" : "FD_MONTH_DIFF_1",
				"10_20" : "FD_MONTH_DIFF_10_20",
				"MOD_1" : "FD_MONTH_DIFF_MOD_1",
				"MOD_2_4" : "FD_MONTH_DIFF_MOD_2_4",
				"MOD_OTHER" : "FD_MONTH_DIFF_MOD_OTHER"
			});
		},

		Yago : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 60 / 24 / 365 / 1000), {
				"0" : "FD_YEARS_AGO_0",
				"1" : "FD_YEARS_AGO_1",
				"10_20" : "FD_YEARS_AGO_10_20",
				"MOD_1" : "FD_YEARS_AGO_MOD_1",
				"MOD_2_4" : "FD_YEARS_AGO_MOD_2_4",
				"MOD_OTHER" : "FD_YEARS_AGO_MOD_OTHER"
			});
		},

		Ydiff : function() {
			return _formatDateMessage(intval((nowDate - date) / 60 / 60 / 24 / 365 / 1000), {
				"0" : "FD_YEARS_DIFF_0",
				"1" : "FD_YEARS_DIFF_1",
				"10_20" : "FD_YEARS_DIFF_10_20",
				"MOD_1" : "FD_YEARS_DIFF_MOD_1",
				"MOD_2_4" : "FD_YEARS_DIFF_MOD_2_4",
				"MOD_OTHER" : "FD_YEARS_DIFF_MOD_OTHER"
			});
		},

		x : function() {
			return BX.date.format([
				["tommorow", "tommorow, H:i"],
				["-", BX.date.convertBitrixFormat(BX.message("FORMAT_DATETIME")).replace(/:s$/g, "")],
				["s", "sago"],
				["i", "iago"],
				["today", "today, H:i"],
				["yesterday", "yesterday, H:i"],
				["", BX.date.convertBitrixFormat(BX.message("FORMAT_DATETIME")).replace(/:s$/g, "")]
			], date, nowDate, isUTC);
		},

		X : function() {
			var day = BX.date.format([
				["tommorow", "tommorow"],
				["-", BX.date.convertBitrixFormat(BX.message("FORMAT_DATE"))],
				["today", "today"],
				["yesterday", "yesterday"],
				["", BX.date.convertBitrixFormat(BX.message("FORMAT_DATE"))]
			], date, nowDate, isUTC);

			var time = BX.date.format([
				["tommorow", "H:i"],
				["today", "H:i"],
				["yesterday", "H:i"],
				["", ""]
			], date, nowDate, isUTC);

			if (time.length > 0)
				return BX.message("FD_DAY_AT_TIME").replace(/#DAY#/g, day).replace(/#TIME#/g, time);
			else
				return day;
		},

		Q : function() {
			var daysAgo = intval((nowDate - date) / 60 / 60 / 24 / 1000);
			if(daysAgo == 0)
				return BX.message("FD_DAY_DIFF_1").replace(/#VALUE#/g, 1);
			else
				return BX.date.format([ ["d", "ddiff"], ["m", "mdiff"], ["", "Ydiff"] ], date, nowDate);
		}
	};

	var cutZeroTime = false;
	if (format[0] && format[0] == "^")
	{
		cutZeroTime = true;
		format = format.substr(1);
	}

	var result = format.replace(formatRegex, _replaceDateFormat);

	if (cutZeroTime)
	{
		/* 	15.04.12 13:00:00 => 15.04.12 13:00
			00:01:00 => 00:01
			4 may 00:00:00 => 4 may
			01-01-12 00:00 => 01-01-12
		*/

		result = result.replace(/\s*00:00:00\s*/g, "").
						replace(/(\d\d:\d\d)(:00)/g, "$1").
						replace(/(\s*00:00\s*)(?!:)/g, "");
	}

	return result;

	function _formatDateInterval(formats, date, nowDate, isUTC)
	{
		var secondsAgo = intval((nowDate - date) / 1000);
		for (var i = 0; i < formats.length; i++)
		{
			var formatInterval = formats[i][0];
			var formatValue = formats[i][1];
			var match = null;
			if (formatInterval == "s")
			{
				if (secondsAgo < 60)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if ((match = /^s(\d+)/.exec(formatInterval)) != null)
			{
				if (secondsAgo < match[1])
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if (formatInterval == "i")
			{
				if (secondsAgo < 60 * 60)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if ((match = /^i(\d+)/.exec(formatInterval)) != null)
			{
				if (secondsAgo < match[1]*60)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if (formatInterval == "H")
			{
				if (secondsAgo < 24 * 60 * 60)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if ((match = /^H(\d+)/.exec(formatInterval)) != null)
			{
				if (secondsAgo < match[1] * 60 * 60)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if (formatInterval == "d")
			{
				if (secondsAgo < 31 *24 * 60 * 60)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if ((match = /^d(\d+)/.exec(formatInterval)) != null)
			{
				if (secondsAgo < match[1] * 60 * 60)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if (formatInterval == "m")
			{
				if (secondsAgo < 365 * 24 * 60 * 60)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if ((match = /^m(\d+)/.exec(formatInterval)) != null)
			{
				if (secondsAgo < match[1] * 31 * 24 * 60 * 60)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if (formatInterval == "today")
			{
				var year = getFullYear(nowDate), month = getMonth(nowDate), day = getDate(nowDate);
				var todayStart = isUTC ? new Date(Date.UTC(year, month, day, 0, 0, 0, 0)) : new Date(year, month, day, 0, 0, 0, 0);
				var todayEnd = isUTC ? new Date(Date.UTC(year, month, day+1, 0, 0, 0, 0)) : new Date(year, month, day+1, 0, 0, 0, 0);
				if (date >= todayStart && date < todayEnd)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if (formatInterval == "yesterday")
			{
				year = getFullYear(nowDate); month = getMonth(nowDate); day = getDate(nowDate);
				var yesterdayStart = isUTC ? new Date(Date.UTC(year, month, day-1, 0, 0, 0, 0)) : new Date(year, month, day-1, 0, 0, 0, 0);
				var yesterdayEnd = isUTC ? new Date(Date.UTC(year, month, day, 0, 0, 0, 0)) : new Date(year, month, day, 0, 0, 0, 0);
				if (date >= yesterdayStart && date < yesterdayEnd)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if (formatInterval == "tommorow")
			{
				year = getFullYear(nowDate); month = getMonth(nowDate); day = getDate(nowDate);
				var tommorowStart = isUTC ? new Date(Date.UTC(year, month, day+1, 0, 0, 0, 0)) : new Date(year, month, day+1, 0, 0, 0, 0);
				var tommorowEnd = isUTC ? new Date(Date.UTC(year, month, day+2, 0, 0, 0, 0)) : new Date(year, month, day+2, 0, 0, 0, 0);
				if (date >= tommorowStart && date < tommorowEnd)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
			else if (formatInterval == "-")
			{
				if (secondsAgo < 0)
					return BX.date.format(formatValue, date, nowDate, isUTC);
			}
		}

		return formats.length > 0 ? BX.date.format(formats.pop()[1], date, nowDate, isUTC) : "";
	}


	function getFullYear(date) { return isUTC ? date.getUTCFullYear() : date.getFullYear(); }
	function getDate(date) { return isUTC ? date.getUTCDate() : date.getDate(); }
	function getMonth(date) { return isUTC ? date.getUTCMonth() : date.getMonth(); }
	function getHours(date) { return isUTC ? date.getUTCHours() : date.getHours(); }
	function getMinutes(date) { return isUTC ? date.getUTCMinutes() : date.getMinutes(); }
	function getSeconds(date) { return isUTC ? date.getUTCSeconds() : date.getSeconds(); }
	function getMilliseconds(date) { return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds(); }
	function getDay(date) { return isUTC ? date.getUTCDay() : date.getDay(); }
	function setDate(date, dayValue) { return isUTC ? date.setUTCDate(dayValue) : date.setDate(dayValue); }
	function setMonth(date, monthValue, dayValue) { return isUTC ? date.setUTCMonth(monthValue, dayValue) : date.setMonth(monthValue, dayValue); }

	function _formatDateMessage(value, messages)
	{
		var val = value < 100 ? Math.abs(value) : Math.abs(value % 100);
		var dec = val % 10;
		var message = "";

		if(val == 0)
			message = BX.message(messages["0"]);
		else if (val == 1)
			message = BX.message(messages["1"]);
		else if (val >= 10 && val <= 20)
			message = BX.message(messages["10_20"]);
		else if (dec == 1)
			message = BX.message(messages["MOD_1"]);
		else if (2 <= dec && dec <= 4)
			message = BX.message(messages["MOD_2_4"]);
		else
			message = BX.message(messages["MOD_OTHER"]);

		return message.replace(/#VALUE#/g, value);
	}

	function _replaceDateFormat(match, matchFull)
	{
		if (dateFormats[match])
			return dateFormats[match]();
		else
			return matchFull;
	}

	function intval(number)
	{
		return number >= 0 ? Math.floor(number) : Math.ceil(number);
	}
};

BX.date.convertBitrixFormat = function(format)
{
	if (!BX.type.isNotEmptyString(format))
		return "";

	return format.replace("YYYY", "Y")	// 1999
				 .replace("MMMM", "F")	// January - December
				 .replace("MM", "m")	// 01 - 12
				 .replace("M", "M")	// Jan - Dec
				 .replace("DD", "d")	// 01 - 31
				 .replace("G", "g")	//  1 - 12
				 .replace(/GG/i, "G")	//  0 - 23
				 .replace("H", "h")	// 01 - 12
				 .replace(/HH/i, "H")	// 00 - 24
				 .replace("MI", "i")	// 00 - 59
				 .replace("SS", "s")	// 00 - 59
				 .replace("TT", "A")	// AM - PM
				 .replace("T", "a");	// am - pm
};

BX.date.convertToUTC = function(date)
{
	if (!BX.type.isDate(date))
		return null;
	return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
};

/*
 function creates and returns Javascript Date() object from server timestamp regardless of local browser (system) timezone.
 For example can be used to convert timestamp from some exact date on server to the JS Date object with the same value.

 params: {
 timestamp: timestamp in seconds
 }
 */
BX.date.getNewDate = function(timestamp)
{
	return new Date(BX.date.getBrowserTimestamp(timestamp));
};

/*
 function transforms server timestamp (in sec) to javascript timestamp (calculated depend on local browser timezone offset). Returns timestamp in milliseconds.
 Also see BX.date.getNewDate description.

 params: {
 timestamp: timestamp in seconds
 }
 */
BX.date.getBrowserTimestamp = function(timestamp)
{
	timestamp = parseInt(timestamp, 10);
	var browserOffset = new Date(timestamp * 1000).getTimezoneOffset() * 60;
	return (parseInt(timestamp, 10) + parseInt(BX.message('SERVER_TZ_OFFSET')) + browserOffset) * 1000;
};

/*
 function transforms local browser timestamp (in ms) to server timestamp (calculated depend on local browser timezone offset). Returns timestamp in seconds.

 params: {
 timestamp: timestamp in milliseconds
 }
 */
BX.date.getServerTimestamp = function(timestamp)
{
	timestamp = parseInt(timestamp, 10);
	var browserOffset = new Date(timestamp).getTimezoneOffset() * 60;
	return Math.round(timestamp / 1000 - (parseInt(BX.message('SERVER_TZ_OFFSET'), 10) + parseInt(browserOffset, 10)));
};

/************************************** calendar class **********************************/

var obCalendarSingleton = null;

/*
params: {
	node: bind element || document.body

	value - start value in site format (using 'field' param if 'value' does not exist)
	callback - date check handler. can return false to prevent calendar closing.
	callback_after - another handler, called after date picking

	field - field to read/write data

	bTime = true - whether to enable time control
	bHideTime = false - whether to hide time control by default

	currentTime - current UTC time()

}
*/


BX.calendar = function(params)
{
	return BX.calendar.get().Show(params);
};

BX.calendar.get = function()
{
	if (!obCalendarSingleton)
		obCalendarSingleton = new BX.JCCalendar();

	return obCalendarSingleton;
};

// simple func for compatibility with the oldies
BX.calendar.InsertDaysBack = function(input, days)
{
	if (days != '')
	{
		var d = new Date();
		if(days > 0)
		{
			d.setTime(d.valueOf() - days*86400000);
		}

		input.value = BX.date.format(BX.date.convertBitrixFormat(BX.message('FORMAT_DATE')), d, null);
	}
	else
	{
		input.value = '';
	}
};

BX.calendar.ValueToString = function(value, bTime, bUTC)
{
	return BX.date.format(
		BX.date.convertBitrixFormat(BX.message(bTime ? 'FORMAT_DATETIME' : 'FORMAT_DATE')),
		value,
		null,
		!!bUTC
	);
};


BX.CalendarPeriod =
{
	Init: function(inputFrom, inputTo, selPeriod)
	{
		if((inputFrom.value != "" || inputTo.value != "") && selPeriod.value == "")
			selPeriod.value = "interval";

		selPeriod.onchange();
	},

	ChangeDirectOpts: function(peroidValue, selPParent) // "week" || "others"
	{
		var selDirect = BX.findChild(selPParent, {'className':'adm-select adm-calendar-direction'}, true);

		if(peroidValue == "week")
		{
			selDirect.options[0].text = BX.message('JSADM_CALEND_PREV_WEEK');
			selDirect.options[1].text = BX.message('JSADM_CALEND_CURR_WEEK');
			selDirect.options[2].text = BX.message('JSADM_CALEND_NEXT_WEEK');
		}
		else
		{
			selDirect.options[0].text = BX.message('JSADM_CALEND_PREV');
			selDirect.options[1].text = BX.message('JSADM_CALEND_CURR');
			selDirect.options[2].text = BX.message('JSADM_CALEND_NEXT');
		}
	},

	SaveAndClearInput: function(oInput)
	{
		if(!window.SavedPeriodValues)
			window.SavedPeriodValues = {};

		window.SavedPeriodValues[oInput.id] = oInput.value;
		oInput.value="";
	},

	RestoreInput: function(oInput)
	{
		if(!window.SavedPeriodValues || !window.SavedPeriodValues[oInput.id])
			return;

		oInput.value = window.SavedPeriodValues[oInput.id];
		delete(window.SavedPeriodValues[oInput.id]);
	},

	OnChangeP: function(sel)
	{
		var selPParent = sel.parentNode.parentNode;
		var bShowFrom, bShowTo, bShowDirect, bShowSeparate;
		bShowFrom = bShowTo = bShowDirect = bShowSeparate = false;

		var inputFromWrap = BX.findChild(selPParent, {'className':'adm-input-wrap adm-calendar-inp adm-calendar-first'});
		var inputToWrap = BX.findChild(selPParent, {'className':'adm-input-wrap adm-calendar-second'});
		var selDirectWrap = BX.findChild(selPParent, {'className':'adm-select-wrap adm-calendar-direction'});
		var separator = BX.findChild(selPParent, {'className':'adm-calendar-separate'});
		var inputFrom = BX.findChild(selPParent, {'className':'adm-input adm-calendar-from'},true);
		var inputTo = BX.findChild(selPParent, {'className':'adm-input adm-calendar-to'},true);

		// define who must be shown
		switch (sel.value)
		{
			case "day":
			case "week":
			case "month":
			case "quarter":
			case "year":
				bShowDirect=true;
				BX.CalendarPeriod.OnChangeD(selDirectWrap.children[0]);
				break;

			case "before":
				bShowTo = true;
				break;

			case "after":
				bShowFrom = true;
				break;

			case "exact":
				bShowFrom= true;
				break;

			case "interval":
				bShowFrom = bShowTo = bShowSeparate = true;
				BX.CalendarPeriod.RestoreInput(inputFrom);
				BX.CalendarPeriod.RestoreInput(inputTo);

				break;

			case "":
				BX.CalendarPeriod.SaveAndClearInput(inputFrom);
				BX.CalendarPeriod.SaveAndClearInput(inputTo);
				break;

			default:
				break;

		}

		BX.CalendarPeriod.ChangeDirectOpts(sel.value, selPParent);

		inputFromWrap.style.display = (bShowFrom? 'inline-block':'none');
		inputToWrap.style.display = (bShowTo? 'inline-block':'none');
		selDirectWrap.style.display = (bShowDirect? 'inline-block':'none');
		separator.style.display = (bShowSeparate? 'inline-block':'none');
	},


	OnChangeD: function(sel)
	{
		var selPParent = sel.parentNode.parentNode;
		var inputFrom = BX.findChild(selPParent, {'className':'adm-input adm-calendar-from'},true);
		var inputTo = BX.findChild(selPParent, {'className':'adm-input adm-calendar-to'},true);
		var selPeriod = BX.findChild(selPParent, {'className':'adm-select adm-calendar-period'},true);

		var offset=0;

		switch (sel.value)
		{
			case "previous":
				offset = -1;
				break;

			case "next":
				offset = 1;
				break;

			case "current":
			default:
				break;

		}

		var from = false;
		var to = false;

		var today = new Date();
		var year = today.getFullYear();
		var month = today.getMonth();
		var day = today.getDate();
		var dayW = today.getDay();

		if (dayW == 0)
				dayW = 7;

		switch (selPeriod.value)
		{
			case "day":
				from = new Date(year, month, day+offset, 0, 0, 0);
				to = new Date(year, month, day+offset, 23, 59, 59);
				break;

			case "week":
				from = new Date(year, month, day-dayW+1+offset*7, 0, 0, 0);
				to = new Date(year, month, day+(7-dayW)+offset*7, 23, 59, 59);
				break;

			case "month":
				from = new Date(year, month+offset, 1, 0, 0, 0);
				to = new Date(year, month+1+offset, 0, 23, 59, 59);
				break;

			case "quarter":
				var quarterNum = Math.floor((month/3))+offset;
				from = new Date(year, 3*(quarterNum), 1, 0, 0, 0);
				to = new Date(year, 3*(quarterNum+1), 0, 23, 59, 59);
				break;

			case "year":
				from = new Date(year+offset, 0, 1, 0, 0, 0);
				to = new Date(year+1+offset, 0, 0, 23, 59, 59);
				break;

			default:
				break;
		}

		var format = window[inputFrom.name+"_bTime"] ? BX.message('FORMAT_DATETIME') : BX.message('FORMAT_DATE');

		if(from)
		{
			inputFrom.value = BX.formatDate(from, format);
			BX.addClass(inputFrom,"adm-calendar-inp-setted");
		}

		if(to)
		{
			inputTo.value = BX.formatDate(to, format);
			BX.addClass(inputTo,"adm-calendar-inp-setted");
		}
	}
};


BX.JCCalendar = function()
{
	this.params = {};

	this.bAmPm = BX.isAmPmMode();

	this.popup = null;
	this.popup_month = null;
	this.popup_year = null;

	this.value = null;

	this.control_id = Math.random();

	this._layers = {};
	this._current_layer = null;

	this.DIV = null;
	this.PARTS = {};

	this.weekStart = 0;
	this.numRows = 6;

	this._create = function(params)
	{
		this.popup = new BX.PopupWindow('calendar_popup_' + this.control_id, params.node, {
			closeByEsc: true,
			autoHide: false,
			content: this._get_content(),
			zIndex: 3000,
			bindOptions: {forceBindPosition: true}
		});

		BX.bind(this.popup.popupContainer, 'click', this.popup.cancelBubble);
	};

	this._auto_hide_disable = function()
	{
		BX.unbind(document, 'click', BX.proxy(this._auto_hide, this));
	};

	this._auto_hide_enable = function()
	{
		BX.bind(document, 'click', BX.proxy(this._auto_hide, this));
	};

	this._auto_hide = function(e)
	{
		this._auto_hide_disable();
		this.popup.close();
	};

	this._get_content = function()
	{
		var _layer_onclick = BX.delegate(function(e) {
			e = e||window.event;
			this.SetDate(new Date(parseInt(BX.proxy_context.getAttribute('data-date'))), e.type=='dblclick')
		}, this);

		this.DIV = BX.create('DIV', {
			props: {className: 'bx-calendar'},
			children: [
				BX.create('DIV', {
					props: {
						className: 'bx-calendar-header'
					},
					children: [
						BX.create('A', {
							attrs: {href: 'javascript:void(0)'},
							props: {className: 'bx-calendar-left-arrow'},
							events: {click: BX.proxy(this._prev, this)}
						}),

						BX.create('SPAN', {
							props: {className: 'bx-calendar-header-content'},
							children: [
								(this.PARTS.MONTH = BX.create('A', {
									attrs: {href: 'javascript:void(0)'},
									props: {className: 'bx-calendar-top-month'},
									events: {click: BX.proxy(this._menu_month, this)}
								})),

								(this.PARTS.YEAR = BX.create('A', {
									attrs: {href: 'javascript:void(0)'},
									props: {className: 'bx-calendar-top-year'},
									events: {click: BX.proxy(this._menu_year, this)}
								}))
							]
						}),

						BX.create('A', {
							attrs: {href: 'javascript:void(0)'},
							props: {className: 'bx-calendar-right-arrow'},
							events: {click: BX.proxy(this._next, this)}
						})
					]
				}),

				(this.PARTS.WEEK = BX.create('DIV', {
					props: {
						className: 'bx-calendar-name-day-wrap'
					}
				})),

				(this.PARTS.LAYERS = BX.create('DIV', {
					props: {
						className: 'bx-calendar-cell-block'
					},
					events: {
						click: BX.delegateEvent({className: 'bx-calendar-cell'}, _layer_onclick),
						dblclick: BX.delegateEvent({className: 'bx-calendar-cell'}, _layer_onclick)
					}
				})),

				(this.PARTS.TIME = BX.create('DIV', {
					props: {
						className: 'bx-calendar-set-time-wrap'
					},
					events: {
						click: BX.delegateEvent(
							{attr: 'data-action'},
							BX.delegate(this._time_actions, this)
						)
					},
					html: '<a href="javascript:void(0)" data-action="time_show" class="bx-calendar-set-time"><i></i>'+BX.message('CAL_TIME_SET')+'</a><div class="bx-calendar-form-block"><span class="bx-calendar-form-text">'+BX.message('CAL_TIME')+'</span><span class="bx-calendar-form"><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" /><span class="bx-calendar-form-separator"></span><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" />'+(this.bAmPm?'<span class="bx-calendar-AM-PM-block"><span class="bx-calendar-AM-PM-text" data-action="time_ampm"></span><span class="bx-calendar-form-arrow-r"><a href="javascript:void(0)" class="bx-calendar-form-arrow-top" data-action="time_ampm_up"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow-bottom" data-action="time_ampm_down"><i></i></a></span></span>':'')+'</span><a href="javascript:void(0)" data-action="time_hide" class="bx-calendar-form-close"><i></i></a></div>'
				})),

				BX.create('DIV', {
					props: {className: 'bx-calendar-button-block'},
					events: {
						click: BX.delegateEvent(
							{attr: 'data-action'},
							BX.delegate(this._button_actions, this)
						)
					},
					html: '<a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-select" data-action="submit"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message('CAL_BUTTON')+'</span><span class="bx-calendar-button-right"></span></a><a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-cancel" data-action="cancel"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message('JS_CORE_WINDOW_CLOSE')+'</span><span class="bx-calendar-button-right"></span></a>'
				})
			]
		});

		this.PARTS.TIME_INPUT_H = BX.findChild(this.PARTS.TIME, {tag: 'INPUT'}, true);
		this.PARTS.TIME_INPUT_M = this.PARTS.TIME_INPUT_H.nextSibling.nextSibling;

		if (this.bAmPm)
			this.PARTS.TIME_AMPM = this.PARTS.TIME_INPUT_M.nextSibling.firstChild;

		var spinner = (new BX.JCSpinner({
			input: this.PARTS.TIME_INPUT_H,
			callback_change: BX.proxy(this._check_time, this),
			bSaveValue: false
		})).Show();
		spinner.className = 'bx-calendar-form-arrow-l';
		this.PARTS.TIME_INPUT_H.parentNode.insertBefore(spinner, this.PARTS.TIME_INPUT_H);

		spinner = (new BX.JCSpinner({
			input: this.PARTS.TIME_INPUT_M,
			callback_change: BX.proxy(this._check_time, this),
			bSaveValue: true
		})).Show();
		spinner.className = 'bx-calendar-form-arrow-r';
		if (!this.PARTS.TIME_INPUT_M.nextSibling)
			this.PARTS.TIME_INPUT_M.parentNode.appendChild(spinner);
		else
			this.PARTS.TIME_INPUT_M.parentNode.insertBefore(spinner, this.PARTS.TIME_INPUT_M.nextSibling);

		for (var i = 0; i < 7; i++)
		{
			this.PARTS.WEEK.appendChild(BX.create('SPAN', {
				props: {
					className: 'bx-calendar-name-day'
				},
				text: BX.message('DOW_' + ((i + this.weekStart) % 7))
			}));
		}

		return this.DIV;
	};

	this._time_actions = function()
	{
		switch (BX.proxy_context.getAttribute('data-action'))
		{
			case 'time_show':
				BX.addClass(this.PARTS.TIME, 'bx-calendar-set-time-opened');
				this.popup.adjustPosition();
			break;
			case 'time_hide':
				BX.removeClass(this.PARTS.TIME, 'bx-calendar-set-time-opened');
				this.popup.adjustPosition();
			break;
			case 'time_ampm':
				this.PARTS.TIME_AMPM.innerHTML = this.PARTS.TIME_AMPM.innerHTML == 'AM' ? 'PM' : 'AM';
			break;
			case 'time_ampm_up':
				this._check_time({bSaveValue: false}, null, 12);
				return;
			break;
			case 'time_ampm_down':
				this._check_time({bSaveValue: false}, null, -12);
				return;
			break;
		}

		this._check_time();
	};

	this._button_actions = function()
	{
		switch (BX.proxy_context.getAttribute('data-action'))
		{
			case 'submit':
				this.SaveValue();
			break;
			case 'cancel':
				this.Close();
			break;
		}
	};

	this._check_time = function(params, value, direction)
	{
		var h = parseInt(this.PARTS.TIME_INPUT_H.value.substring(0,5),10)||0,
			m = parseInt(this.PARTS.TIME_INPUT_M.value.substring(0,5),10)||0,
			bChanged = false;

		if (!!params && !params.bSaveValue)
		{
			this.value.setHours(this.value.getHours() + direction);
		}
		else if (!isNaN(h))
		{
			if (this.bAmPm)
			{
				if (h != 12 && this.PARTS.TIME_AMPM.innerHTML == 'PM')
				{
					h += 12;
				}
			}

			bChanged = true;
			this.value.setHours(h % 24);
		}

		if (!isNaN(m))
		{
			bChanged = true;
			this.value.setMinutes(m % 60);
		}

		if (bChanged)
		{
			this.SetValue(this.value);
		}
	};

	this._set_layer = function()
	{
		var layerId = parseInt(this.value.getFullYear() + '' + BX.util.str_pad_left(this.value.getMonth()+'', 2, "0"));

		if (!this._layers[layerId])
		{
			this._layers[layerId] = this._create_layer();
			this._layers[layerId].BXLAYERID = layerId;
		}

		if (this._current_layer)
		{
			var v = new Date(this.value.valueOf());
			v.setHours(0); v.setMinutes(0);

			var cur_value = BX.findChild(this._layers[layerId], {
					tag: 'A',
					className: 'bx-calendar-active'
				}, true),
				new_value = BX.findChild(this._layers[layerId], {
					tag: 'A',
					attr: {
						'data-date' : v.valueOf() + ''
					}
				}, true);

			if (cur_value)
			{
				BX.removeClass(cur_value, 'bx-calendar-active');
			}

			if (new_value)
			{
				BX.addClass(new_value, 'bx-calendar-active');
			}

			this._replace_layer(this._current_layer, this._layers[layerId]);
		}
		else
		{
			this.PARTS.LAYERS.appendChild(this._layers[layerId]);
		}

		this._current_layer = this._layers[layerId];
	};

	this._replace_layer = function(old_layer, new_layer)
	{
		if (old_layer != new_layer)
		{
			if (!BX.browser.IsIE() || BX.browser.IsDoctype())
			{
				var dir = old_layer.BXLAYERID > new_layer.BXLAYERID ? 1 : -1;

				var old_top = 0;
				var new_top = -dir * old_layer.offsetHeight;

				old_layer.style.position = 'relative';
				old_layer.style.top = "0px";
				old_layer.style.zIndex = 5;

				new_layer.style.position = 'absolute';
				new_layer.style.top = new_top + 'px';
				new_layer.style.zIndex = 6;

				this.PARTS.LAYERS.appendChild(new_layer);

				var delta = 15;

				var f;
				(f = function() {
					new_top += dir * delta;
					old_top += dir * delta;

					if (dir * new_top < 0)
					{
						old_layer.style.top = old_top + 'px';
						new_layer.style.top = new_top + 'px';
						setTimeout(f, 10);
					}
					else
					{
						old_layer.parentNode.removeChild(old_layer);

						new_layer.style.top = "0px";
						new_layer.style.position = 'static';
						new_layer.style.zIndex = 0;
					}
				})();
			}
			else
			{
				this.PARTS.LAYERS.replaceChild(new_layer, old_layer);
			}
		}
	};

	this._create_layer = function()
	{
		var l = BX.create('DIV', {
			props: {
				className: 'bx-calendar-layer'
			}
		});

		var month_start = new Date(this.value);
		month_start.setHours(0);
		month_start.setMinutes(0);

		month_start.setDate(1);

		if (month_start.getDay() != this.weekStart)
		{
			var d = month_start.getDay() - this.weekStart;
			d += d < 0 ? 7 : 0;
			month_start.setDate(month_start.getDate()-d);
		}

		var cur_month = this.value.getMonth(),
			cur_day = this.value.getDate(),
			s = '';
		for (var i = 0; i < this.numRows; i++)
		{
			s += '<div class="bx-calendar-range'
				+(i == this.numRows-1 ? ' bx-calendar-range-noline' : '')
				+'">';

			for (var j = 0; j < 7; j++)
			{
				d = month_start.getDate();
				var wd = month_start.getDay();
				var className = 'bx-calendar-cell';

				if (cur_month != month_start.getMonth())
					className += ' bx-calendar-date-hidden';
				else if (cur_day == d)
					className += ' bx-calendar-active';


				if (wd == 0 || wd == 6)
					className += ' bx-calendar-weekend';

				s += '<a href="javascript:void(0)" class="'+className+'" data-date="' + month_start.valueOf() + '">' + d + '</a>';

				month_start.setDate(month_start.getDate()+1);
			}
			s += '</div>';
		}

		l.innerHTML = s;

		return l;
	};

	this._prev = function()
	{
		this.SetMonth(this.value.getMonth()-1);
	};

	this._next = function()
	{
		this.SetMonth(this.value.getMonth()+1);
	};

	this._menu_month_content = function()
	{
		var months = '', cur_month = this.value.getMonth(), i;
		for (i=0; i<12; i++)
		{
			months += '<a href="javascript:void(0)" class="bx-calendar-month'+(i == cur_month ? ' bx-calendar-month-active' : '')+'" onclick="BX.calendar.get().SetMonth('+i+')">'+BX.message('MONTH_' + (i+1))+'</a>';
		}

		return '<div class="bx-calendar-month-popup"><div class="bx-calendar-month-title" onclick="BX.calendar.get().popup_month.close();">'+BX.message('MONTH_' + (this.value.getMonth()+1))+'</div><div class="bx-calendar-month-content">'+months+'</div></div>';
	};

	this._menu_month = function()
	{
		if (!this.popup_month)
		{
			this.popup_month = BX.PopupWindowManager.create(
				'calendar_popup_month_' + this.control_id, this.PARTS.MONTH,
				{
					content: this._menu_month_content(),
					zIndex: 3001,
					closeByEsc: true,
					autoHide: true,
					offsetTop: -29,
					offsetLeft: -1
				}
			);

			this.popup_month.BXMONTH = this.value.getMonth();
		}
		else if (this.popup_month.BXMONTH != this.value.getMonth())
		{
			this.popup_month.setContent(this._menu_month_content());
			this.popup_month.BXMONTH = this.value.getMonth();
		}

		this.popup_month.show();
	};

	this._menu_year_content = function()
	{
		var s = '<div class="bx-calendar-year-popup"><div class="bx-calendar-year-title" onclick="BX.calendar.get().popup_year.close();">'+this.value.getFullYear()+'</div><div class="bx-calendar-year-content" id="bx-calendar-year-content">';

		for (var i=-3; i <= 3; i++)
		{
			s += '<a href="javascript:void(0)" class="bx-calendar-year-number'+(i==0?' bx-calendar-year-active':'')+'" onclick="BX.calendar.get().SetYear('+(this.value.getFullYear()-i)+')">'+(this.value.getFullYear()-i)+'</a>';
		}

		s += '</div><input type="text" class="bx-calendar-year-input" onkeyup="if(this.value>=1900&&this.value<=2100)BX.calendar.get().SetYear(this.value);" maxlength="4" /></div>';

		return s;
	};

	this._menu_year = function()
	{
		if (!this.popup_year)
		{
			this.popup_year = BX.PopupWindowManager.create(
				'calendar_popup_year_' + this.control_id, this.PARTS.YEAR,
				{
					content: this._menu_year_content(),
					zIndex: 3001,
					closeByEsc: true,
					autoHide: true,
					offsetTop: -29,
					offsetLeft: -1
				}
			);

			this.popup_year.BXYEAR = this.value.getFullYear();
		}
		else if (this.popup_year.BXYEAR != this.value.getFullYear())
		{
			this.popup_year.setContent(this._menu_year_content());
			this.popup_year.BXYEAR = this.value.getFullYear();
		}

		this.popup_year.show();
	};

	this._check_date = function(v)
	{
		if (BX.type.isString(v))
			v = BX.parseDate(v);

		if (!BX.type.isDate(v) || isNaN(v.valueOf()))
		{
			v = new Date();
			if (this.params.bHideTime)
			{
				v.setHours(0);
				v.setMinutes(0);
			}
		}

		//v = BX.date.convertToUTC(v);
		v.setMilliseconds(0);
		v.setSeconds(0);

		v.BXCHECKED = true;

		return v;
	};
};

BX.JCCalendar.prototype.Show = function(params)
{
	if (!BX.isReady)
	{
		BX.ready(BX.delegate(function() {this.Show(params)}, this));
		return;
	}

	params.node = params.node||document.body;

	if (BX.type.isNotEmptyString(params.node))
	{
		var n = BX(params.node);
		if (!n)
		{
			n = document.getElementsByName(params.node);
			if (n && n.length > 0)
			{
				n = n[0]
			}
		}
		params.node = n;
	}

	if (!params.node)
		return;

	if (!!params.field)
	{
		if (BX.type.isString(params.field))
		{
			n = BX(params.field);
			if (!!n)
			{
				params.field = n;
			}
			else
			{
				if (params.form)
				{
					if (BX.type.isString(params.form))
					{
						params.form = document.forms[params.form];
					}
				}

				if (BX.type.isDomNode(params.form) && !!params.form[params.field])
				{
					params.field = params.form[params.field];
				}
				else
				{
					n = document.getElementsByName(params.field);
					if (n && n.length > 0)
					{
						n = n[0];
						params.field = n;
					}
				}
			}

			if (BX.type.isString(params.field))
			{
				params.field = BX(params.field);
			}
		}
	}

	var bShow = !this.popup || !this.popup.isShown() || this.params.node != params.node;

	this.params = params;

	this.params.bTime = typeof this.params.bTime == 'undefined' ? true : !!this.params.bTime;
	this.params.bHideTime = typeof this.params.bHideTime == 'undefined' ? true : !!this.params.bHideTime;

	this.weekStart = parseInt(this.params.weekStart || this.params.weekStart || BX.message('WEEK_START'));
	if (isNaN(this.weekStart))
		this.weekStart = 1;

	if (!this.popup)
	{
		this._create(this.params);
	}
	else
	{
		this.popup.setBindElement(this.params.node);
	}

	var bHideTime = !!this.params.bHideTime;
	if (this.params.value)
	{
		this.SetValue(this.params.value);
		bHideTime = this.value.getHours() <= 0 && this.value.getMinutes() <= 0;
	}
	else if (this.params.field)
	{
		this.SetValue(this.params.field.value);
		bHideTime = this.value.getHours() <= 0 && this.value.getMinutes() <= 0;
	}
	else if (!!this.params.currentTime)
	{
		this.SetValue(this.params.currentTime);
	}
	else
	{
		this.SetValue(new Date());
	}

	if (!!this.params.bTime)
		BX.removeClass(this.DIV, 'bx-calendar-time-disabled');
	else
		BX.addClass(this.DIV, 'bx-calendar-time-disabled');

	if (!!bHideTime)
		BX.removeClass(this.PARTS.TIME, 'bx-calendar-set-time-opened');
	else
		BX.addClass(this.PARTS.TIME, 'bx-calendar-set-time-opened');

	if (bShow)
	{
		this._auto_hide_disable();
		this.popup.show();
		setTimeout(BX.proxy(this._auto_hide_enable, this), 0);
	}

	this.params.bSetFocus = typeof this.params.bSetFocus == 'undefined' ? true : !!this.params.bSetFocus;
	if(this.params.bSetFocus)
		params.node.blur();

	return this;
};

BX.JCCalendar.prototype.SetDay = function(d)
{
	this.value.setDate(d);
	return this.SetValue(this.value);
};

BX.JCCalendar.prototype.SetMonth = function(m)
{
	if (this.popup_month)
		this.popup_month.close();

	this.value.setMonth(m);

	if(m < 0)
		m += 12;
	else if (m >= 12)
		m -= 12;

	while(this.value.getMonth() > m)
	{
		this.value.setDate(this.value.getDate()-1);
	}

	return this.SetValue(this.value);
};

BX.JCCalendar.prototype.SetYear = function(y)
{
	if (this.popup_year)
		this.popup_year.close();
	this.value.setFullYear(y);
	return this.SetValue(this.value);
};

BX.JCCalendar.prototype.SetDate = function(v, bSet)
{
	v = this._check_date(v);
	v.setHours(this.value.getHours());
	v.setMinutes(this.value.getMinutes());
	v.setSeconds(this.value.getSeconds());

	if (this.params.bTime && !bSet)
	{
		return this.SetValue(v);
	}
	else
	{
		this.SetValue(v);
		this.SaveValue();
	}
};

BX.JCCalendar.prototype.SetValue = function(v)
{
	this.value = (v && v.BXCHECKED) ? v : this._check_date(v);

	this.PARTS.MONTH.innerHTML = BX.message('MONTH_' + (this.value.getMonth()+1));
	this.PARTS.YEAR.innerHTML = this.value.getFullYear();

	if (!!this.params.bTime)
	{
		var h = this.value.getHours();
		if (this.bAmPm)
		{
			if (h >= 12)
			{
				this.PARTS.TIME_AMPM.innerHTML = 'PM';

				if (h != 12)
					h -= 12;
			}
			else
			{
				this.PARTS.TIME_AMPM.innerHTML = 'AM';

				if (h == 0)
					h = 12;
			}
		}

		this.PARTS.TIME_INPUT_H.value = BX.util.str_pad_left(h.toString(), 2, "0");
		this.PARTS.TIME_INPUT_M.value = BX.util.str_pad_left(this.value.getMinutes().toString(), 2, "0");
	}

	this._set_layer();

	return this;
};

BX.JCCalendar.prototype.SaveValue = function()
{
	if (this.popup_month)
		this.popup_month.close();
	if (this.popup_year)
		this.popup_year.close();

	var bSetValue = true;
	if (!!this.params.callback)
	{
		var res = this.params.callback.apply(this, [this.value]);
		if (res === false)
			bSetValue = false;
	}

	if (bSetValue)
	{
		var bTime = !!this.params.bTime && BX.hasClass(this.PARTS.TIME, 'bx-calendar-set-time-opened');

		if (this.params.field)
		{
			this.params.field.value = BX.calendar.ValueToString(this.value, bTime);
			BX.fireEvent(this.params.field, 'change');
		}

		this.popup.close();

		if (!!this.params.callback_after)
		{
			this.params.callback_after.apply(this, [this.value, bTime]);
		}
	}

	return this;
};

BX.JCCalendar.prototype.Close = function()
{
	if (!!this.popup)
		this.popup.close();

	return this;
};

BX.JCSpinner = function(params)
{
	params = params || {};
	this.params = {
		input: params.input || null,

		delta: params.delta || 1,

		timeout_start: params.timeout_start || 1000,
		timeout_cont: params.timeout_cont || 150,

		callback_start: params.callback_start || null,
		callback_change: params.callback_change || null,
		callback_finish: params.callback_finish || null,

		bSaveValue: typeof params.bSaveValue == 'undefined' ? !!params.input : !!params.bSaveValue
	};

	this.mousedown = false;
	this.direction = 1;
};

BX.JCSpinner.prototype.Show = function()
{
	this.node = BX.create('span', {
		events: {
			mousedown: BX.delegateEvent(
				{attr: 'data-dir'},
				BX.delegate(this.Start, this)
			)
		},
		html: '<a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-top" data-dir="1"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-bottom" data-dir="-1"><i></i></a>'
	});
	return this.node;
};

BX.JCSpinner.prototype.Start = function()
{
	this.mousedown = true;
	this.direction = BX.proxy_context.getAttribute('data-dir') > 0 ? 1 : -1;
	BX.bind(document, "mouseup", BX.proxy(this.MouseUp, this));
	this.ChangeValue(true);
};

BX.JCSpinner.prototype.ChangeValue = function(bFirst)
{
	if(!this.mousedown)
		return;

	if (this.params.input)
	{
		var v = parseInt(this.params.input.value, 10) + this.params.delta * this.direction;

		if (this.params.bSaveValue)
			this.params.input.value = v;

		if (!!bFirst && this.params.callback_start)
			this.params.callback_start(this.params, v, this.direction);

		if (this.params.callback_change)
			this.params.callback_change(this.params, v, this.direction);

		setTimeout(
			BX.proxy(this.ChangeValue, this),
			!!bFirst ? this.params.timeout_start : this.params.timeout_cont
		);
	}
};

BX.JCSpinner.prototype.MouseUp = function()
{
	this.mousedown = false;
	BX.unbind(document, "mouseup", BX.proxy(this.MouseUp, this));

	if (this.params.callback_finish)
		this.params.callback_finish(this.params, this.params.input.value);
};

/**************** compatibility hacks ***************************/

window.jsCalendar = {
	Show: function(obj, field, fieldFrom, fieldTo, bTime, serverTime, form_name, bHideTimebar)
	{
		return BX.calendar({
			node: obj, field: field, form: form_name, bTime: !!bTime, currentTime: serverTime, bHideTimebar: !!bHideTimebar
		});
	},

	ValueToString: BX.calendar.ValueToString
};


/************ clock popup transferred from timeman **************/

BX.CClockSelector = function(params)
{
	this.params = params;

	this.params.popup_buttons = this.params.popup_buttons || [
		new BX.PopupWindowButton({
			text : BX.message('CAL_BUTTON'),
			className : "popup-window-button-create",
			events : {click : BX.proxy(this.setValue, this)}
		})
	];

	this.isReady = false;

	this.WND = new BX.PopupWindow(
		this.params.popup_id || 'clock_selector_popup',
		this.params.node,
		this.params.popup_config || {
			titleBar: {content: BX.create('SPAN', {text: BX.message('CAL_TIME')})},
			offsetLeft: -45,
			offsetTop: -135,
			autoHide: true,
			closeIcon: true,
			closeByEsc: true,
			zIndex: this.params.zIndex
		}
	);

	this.SHOW = false;
	BX.addCustomEvent(this.WND, "onPopupClose", BX.delegate(this.onPopupClose, this));

	this.obClocks = {};
	this.CLOCK_ID = this.params.clock_id || 'clock_selector';
};

BX.CClockSelector.prototype.Show = function()
{
	if (!this.isReady)
	{
		//BX.timeman.showWait(this.parent.DIV);

		BX.addCustomEvent('onClockRegister', BX.proxy(this.onClockRegister, this));
		return BX.ajax.get('http://webunicom.ru/bitrix/tools/clock_selector.php', {start_time: this.params.start_time, clock_id: this.CLOCK_ID, sessid: BX.bitrix_sessid()}, BX.delegate(this.Ready, this));
	}

	this.WND.setButtons(this.params.popup_buttons);
	this.WND.show();

	this.SHOW = true;

	if (window['bxClock_' + this.obClocks[this.CLOCK_ID]])
	{
		setTimeout("window['bxClock_" + this.obClocks[this.CLOCK_ID] + "'].CalculateCoordinates()", 40);
	}

	return true;
};

BX.CClockSelector.prototype.onClockRegister = function(obClocks)
{
	if (obClocks[this.CLOCK_ID])
	{
		this.obClocks[this.CLOCK_ID] = obClocks[this.CLOCK_ID];
		BX.removeCustomEvent('onClockRegister', BX.proxy(this.onClockRegister, this));
	}
};

BX.CClockSelector.prototype.Ready = function(data)
{
	this.content = this.CreateContent(data);
	this.WND.setContent(this.content);

	this.isReady = true;
	//BX.timeman.closeWait();

	setTimeout(BX.proxy(this.Show, this), 30);
};

BX.CClockSelector.prototype.CreateContent = function(data)
{
	return BX.create('DIV', {
		events: {click: BX.PreventDefault},
		html:
			'<div class="bx-tm-popup-clock">' + data + '</div>'
	});
};

BX.CClockSelector.prototype.setValue = function(e)
{
	if (this.params.callback)
	{
		var input = BX.findChild(this.content, {tagName: 'INPUT'}, true);
		this.params.callback.apply(this.params.node, [input.value]);
	}

	return BX.PreventDefault(e);
};

BX.CClockSelector.prototype.closeWnd = function(e)
{
	this.WND.close();
	return (e || window.event) ? BX.PreventDefault(e) : true;
};

BX.CClockSelector.prototype.setNode = function(node)
{
	this.WND.setBindElement(node);
};

BX.CClockSelector.prototype.setTime = function(timestamp)
{
	this.params.start_time = timestamp;
	if (window['bxClock_' + this.obClocks[this.CLOCK_ID]])
	{
		window['bxClock_' +  this.obClocks[this.CLOCK_ID]].SetTime(parseInt(timestamp/3600), parseInt((timestamp%3600)/60));
	}
};

BX.CClockSelector.prototype.setCallback = function(cb)
{
	this.params.callback = cb;
};

BX.CClockSelector.prototype.onPopupClose = function()
{
	this.SHOW = false;
};

})();
/* End */
;
