import{n as Q,r as Oe,a as ie,t as _,e as oe,p as A}from"./create.Bit1cZk2.js";import{s as ge}from"./portal.DrANUrbR.js";import{V as Re}from"./scheduler.DQu3tbww.js";import{b as ue,w as se}from"./entry.CNWWqpSN.js";import{l as ke}from"./array.Bw4CkYDH.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="78609c51-61e9-4eb4-9eee-b67a646eb106",r._sentryDebugIdIdentifier="sentry-dbid-78609c51-61e9-4eb4-9eee-b67a646eb106")}catch{}})();const me=()=>typeof window<"u";function Ce(){const r=navigator.userAgentData;return(r==null?void 0:r.platform)??navigator.platform}const ye=r=>me()&&r.test(Ce().toLowerCase()),Ae=()=>me()&&!!navigator.maxTouchPoints,xe=()=>ye(/^mac/)&&!Ae(),Le=()=>ye(/mac|iphone|ipad|ipod/i),Be=()=>Le()&&!xe(),z="data-melt-scroll-lock";function ce(r,e){if(!r)return;const t=r.style.cssText;return Object.assign(r.style,e),()=>{r.style.cssText=t}}function Me(r,e,t){if(!r)return;const a=r.style.getPropertyValue(e);return r.style.setProperty(e,t),()=>{a?r.style.setProperty(e,a):r.style.removeProperty(e)}}function Ke(r){const e=r.getBoundingClientRect().left;return Math.round(e)+r.scrollLeft?"paddingLeft":"paddingRight"}function mt(r){const e=document,t=e.defaultView??window,{documentElement:a,body:u}=e;if(u.hasAttribute(z))return Q;u.setAttribute(z,"");const n=t.innerWidth-a.clientWidth,f=()=>Me(a,"--scrollbar-width",`${n}px`),l=Ke(a),d=t.getComputedStyle(u)[l],m=()=>ce(u,{overflow:"hidden",[l]:`calc(${d} + ${n}px)`}),v=()=>{const{scrollX:F,scrollY:h,visualViewport:T}=t,P=(T==null?void 0:T.offsetLeft)??0,D=(T==null?void 0:T.offsetTop)??0,I=ce(u,{position:"fixed",overflow:"hidden",top:`${-(h-Math.floor(D))}px`,left:`${-(F-Math.floor(P))}px`,right:"0",[l]:`calc(${d} + ${n}px)`});return()=>{I==null||I(),t.scrollTo(F,h)}},w=[f(),Be()?v():m()];return()=>{w.forEach(F=>F==null?void 0:F()),u.removeAttribute(z)}}async function yt(r){const{prop:e,defaultEl:t}=r;if(await Promise.all([ge(1),Re]),e===void 0){t==null||t.focus();return}const a=Oe(e)?e(t):e;if(typeof a=="string"){const u=document.querySelector(a);if(!ie(u))return;u.focus()}else ie(a)&&a.focus()}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var we=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],G=we.join(","),Te=typeof Element>"u",C=Te?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,V=!Te&&Element.prototype.getRootNode?function(r){var e;return r==null||(e=r.getRootNode)===null||e===void 0?void 0:e.call(r)}:function(r){return r==null?void 0:r.ownerDocument},q=function r(e,t){var a;t===void 0&&(t=!0);var u=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"inert"),s=u===""||u==="true",n=s||t&&e&&r(e.parentNode);return n},je=function(e){var t,a=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return a===""||a==="true"},Ne=function(e,t,a){if(q(e))return[];var u=Array.prototype.slice.apply(e.querySelectorAll(G));return t&&C.call(e,G)&&u.unshift(e),u=u.filter(a),u},Fe=function r(e,t,a){for(var u=[],s=Array.from(e);s.length;){var n=s.shift();if(!q(n,!1))if(n.tagName==="SLOT"){var f=n.assignedElements(),l=f.length?f:n.children,d=r(l,!0,a);a.flatten?u.push.apply(u,d):u.push({scopeParent:n,candidates:d})}else{var m=C.call(n,G);m&&a.filter(n)&&(t||!e.includes(n))&&u.push(n);var v=n.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(n),w=!q(v,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(n));if(v&&w){var F=r(v===!0?n.children:v.children,!0,a);a.flatten?u.push.apply(u,F):u.push({scopeParent:n,candidates:F})}else s.unshift.apply(s,n.children)}}return u},Ee=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},k=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||je(e))&&!Ee(e)?0:e.tabIndex},Ue=function(e,t){var a=k(e);return a<0&&t&&!Ee(e)?0:a},$e=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Se=function(e){return e.tagName==="INPUT"},Ge=function(e){return Se(e)&&e.type==="hidden"},Ve=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},qe=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},We=function(e){if(!e.name)return!0;var t=e.form||V(e),a=function(f){return t.querySelectorAll('input[type="radio"][name="'+f+'"]')},u;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")u=a(window.CSS.escape(e.name));else try{u=a(e.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var s=qe(u,e.form);return!s||s===e},Xe=function(e){return Se(e)&&e.type==="radio"},Ye=function(e){return Xe(e)&&!We(e)},Ze=function(e){var t,a=e&&V(e),u=(t=a)===null||t===void 0?void 0:t.host,s=!1;if(a&&a!==e){var n,f,l;for(s=!!((n=u)!==null&&n!==void 0&&(f=n.ownerDocument)!==null&&f!==void 0&&f.contains(u)||e!=null&&(l=e.ownerDocument)!==null&&l!==void 0&&l.contains(e));!s&&u;){var d,m,v;a=V(u),u=(d=a)===null||d===void 0?void 0:d.host,s=!!((m=u)!==null&&m!==void 0&&(v=m.ownerDocument)!==null&&v!==void 0&&v.contains(u))}}return s},le=function(e){var t=e.getBoundingClientRect(),a=t.width,u=t.height;return a===0&&u===0},ze=function(e,t){var a=t.displayCheck,u=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=C.call(e,"details>summary:first-of-type"),n=s?e.parentElement:e;if(C.call(n,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof u=="function"){for(var f=e;e;){var l=e.parentElement,d=V(e);if(l&&!l.shadowRoot&&u(l)===!0)return le(e);e.assignedSlot?e=e.assignedSlot:!l&&d!==e.ownerDocument?e=d.host:e=l}e=f}if(Ze(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return le(e);return!1},He=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var u=t.children.item(a);if(u.tagName==="LEGEND")return C.call(t,"fieldset[disabled] *")?!0:!u.contains(e)}return!0}t=t.parentElement}return!1},W=function(e,t){return!(t.disabled||q(t)||Ge(t)||ze(t,e)||Ve(t)||He(t))},J=function(e,t){return!(Ye(t)||k(t)<0||!W(e,t))},Je=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Qe=function r(e){var t=[],a=[];return e.forEach(function(u,s){var n=!!u.scopeParent,f=n?u.scopeParent:u,l=Ue(f,n),d=n?r(u.candidates):f;l===0?n?t.push.apply(t,d):t.push(f):a.push({documentOrder:s,tabIndex:l,item:u,isScope:n,content:d})}),a.sort($e).reduce(function(u,s){return s.isScope?u.push.apply(u,s.content):u.push(s.content),u},[]).concat(t)},_e=function(e,t){t=t||{};var a;return t.getShadowRoot?a=Fe([e],t.includeContainer,{filter:J.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Je}):a=Ne(e,t.includeContainer,J.bind(null,t)),Qe(a)},et=function(e,t){t=t||{};var a;return t.getShadowRoot?a=Fe([e],t.includeContainer,{filter:W.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=Ne(e,t.includeContainer,W.bind(null,t)),a},x=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return C.call(e,G)===!1?!1:J(t,e)},tt=we.concat("iframe").join(","),H=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return C.call(e,tt)===!1?!1:W(t,e)};/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function fe(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),t.push.apply(t,a)}return t}function de(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fe(Object(t),!0).forEach(function(a){rt(r,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(t,a))})}return r}function rt(r,e,t){return e=nt(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function at(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var a=t.call(r,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function nt(r){var e=at(r,"string");return typeof e=="symbol"?e:String(e)}var ve={activateTrap:function(e,t){if(e.length>0){var a=e[e.length-1];a!==t&&a.pause()}var u=e.indexOf(t);u===-1||e.splice(u,1),e.push(t)},deactivateTrap:function(e,t){var a=e.indexOf(t);a!==-1&&e.splice(a,1),e.length>0&&e[e.length-1].unpause()}},it=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},ot=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},j=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},ut=function(e){return j(e)&&!e.shiftKey},st=function(e){return j(e)&&e.shiftKey},be=function(e){return setTimeout(e,0)},pe=function(e,t){var a=-1;return e.every(function(u,s){return t(u)?(a=s,!1):!0}),a},K=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),u=1;u<t;u++)a[u-1]=arguments[u];return typeof e=="function"?e.apply(void 0,a):e},U=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},ct=[],lt=function(e,t){var a=(t==null?void 0:t.document)||document,u=(t==null?void 0:t.trapStack)||ct,s=de({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:ut,isKeyBackward:st},t),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},f,l=function(o,i,c){return o&&o[i]!==void 0?o[i]:s[c||i]},d=function(o,i){var c=typeof(i==null?void 0:i.composedPath)=="function"?i.composedPath():void 0;return n.containerGroups.findIndex(function(b){var p=b.container,y=b.tabbableNodes;return p.contains(o)||(c==null?void 0:c.includes(p))||y.find(function(N){return N===o})})},m=function(o){var i=s[o];if(typeof i=="function"){for(var c=arguments.length,b=new Array(c>1?c-1:0),p=1;p<c;p++)b[p-1]=arguments[p];i=i.apply(void 0,b)}if(i===!0&&(i=void 0),!i){if(i===void 0||i===!1)return i;throw new Error("`".concat(o,"` was specified but was not a node, or did not return a node"))}var y=i;if(typeof i=="string"&&(y=a.querySelector(i),!y))throw new Error("`".concat(o,"` as selector refers to no known node"));return y},v=function(){var o=m("initialFocus");if(o===!1)return!1;if(o===void 0||!H(o,s.tabbableOptions))if(d(a.activeElement)>=0)o=a.activeElement;else{var i=n.tabbableGroups[0],c=i&&i.firstTabbableNode;o=c||m("fallbackFocus")}if(!o)throw new Error("Your focus-trap needs to have at least one focusable element");return o},w=function(){if(n.containerGroups=n.containers.map(function(o){var i=_e(o,s.tabbableOptions),c=et(o,s.tabbableOptions),b=i.length>0?i[0]:void 0,p=i.length>0?i[i.length-1]:void 0,y=c.find(function(E){return x(E)}),N=c.slice().reverse().find(function(E){return x(E)}),S=!!i.find(function(E){return k(E)>0});return{container:o,tabbableNodes:i,focusableNodes:c,posTabIndexesFound:S,firstTabbableNode:b,lastTabbableNode:p,firstDomTabbableNode:y,lastDomTabbableNode:N,nextTabbableNode:function(R){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,O=i.indexOf(R);return O<0?B?c.slice(c.indexOf(R)+1).find(function(M){return x(M)}):c.slice(0,c.indexOf(R)).reverse().find(function(M){return x(M)}):i[O+(B?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(o){return o.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!m("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(o){return o.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},F=function g(o){var i=o.activeElement;if(i)return i.shadowRoot&&i.shadowRoot.activeElement!==null?g(i.shadowRoot):i},h=function g(o){if(o!==!1&&o!==F(document)){if(!o||!o.focus){g(v());return}o.focus({preventScroll:!!s.preventScroll}),n.mostRecentlyFocusedNode=o,it(o)&&o.select()}},T=function(o){var i=m("setReturnFocus",o);return i||(i===!1?!1:o)},P=function(o){var i=o.target,c=o.event,b=o.isBackward,p=b===void 0?!1:b;i=i||U(c),w();var y=null;if(n.tabbableGroups.length>0){var N=d(i,c),S=N>=0?n.containerGroups[N]:void 0;if(N<0)p?y=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:y=n.tabbableGroups[0].firstTabbableNode;else if(p){var E=pe(n.tabbableGroups,function(Y){var Z=Y.firstTabbableNode;return i===Z});if(E<0&&(S.container===i||H(i,s.tabbableOptions)&&!x(i,s.tabbableOptions)&&!S.nextTabbableNode(i,!1))&&(E=N),E>=0){var R=E===0?n.tabbableGroups.length-1:E-1,B=n.tabbableGroups[R];y=k(i)>=0?B.lastTabbableNode:B.lastDomTabbableNode}else j(c)||(y=S.nextTabbableNode(i,!1))}else{var O=pe(n.tabbableGroups,function(Y){var Z=Y.lastTabbableNode;return i===Z});if(O<0&&(S.container===i||H(i,s.tabbableOptions)&&!x(i,s.tabbableOptions)&&!S.nextTabbableNode(i))&&(O=N),O>=0){var M=O===n.tabbableGroups.length-1?0:O+1,ne=n.tabbableGroups[M];y=k(i)>=0?ne.firstTabbableNode:ne.firstDomTabbableNode}else j(c)||(y=S.nextTabbableNode(i))}}else y=m("fallbackFocus");return y},D=function(o){var i=U(o);if(!(d(i,o)>=0)){if(K(s.clickOutsideDeactivates,o)){f.deactivate({returnFocus:s.returnFocusOnDeactivate});return}K(s.allowOutsideClick,o)||o.preventDefault()}},I=function(o){var i=U(o),c=d(i,o)>=0;if(c||i instanceof Document)c&&(n.mostRecentlyFocusedNode=i);else{o.stopImmediatePropagation();var b,p=!0;if(n.mostRecentlyFocusedNode)if(k(n.mostRecentlyFocusedNode)>0){var y=d(n.mostRecentlyFocusedNode),N=n.containerGroups[y].tabbableNodes;if(N.length>0){var S=N.findIndex(function(E){return E===n.mostRecentlyFocusedNode});S>=0&&(s.isKeyForward(n.recentNavEvent)?S+1<N.length&&(b=N[S+1],p=!1):S-1>=0&&(b=N[S-1],p=!1))}}else n.containerGroups.some(function(E){return E.tabbableNodes.some(function(R){return k(R)>0})})||(p=!1);else p=!1;p&&(b=P({target:n.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(n.recentNavEvent)})),h(b||n.mostRecentlyFocusedNode||v())}n.recentNavEvent=void 0},De=function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=o;var c=P({event:o,isBackward:i});c&&(j(o)&&o.preventDefault(),h(c))},ee=function(o){if(ot(o)&&K(s.escapeDeactivates,o)!==!1){o.preventDefault(),f.deactivate();return}(s.isKeyForward(o)||s.isKeyBackward(o))&&De(o,s.isKeyBackward(o))},te=function(o){var i=U(o);d(i,o)>=0||K(s.clickOutsideDeactivates,o)||K(s.allowOutsideClick,o)||(o.preventDefault(),o.stopImmediatePropagation())},re=function(){if(n.active)return ve.activateTrap(u,f),n.delayInitialFocusTimer=s.delayInitialFocus?be(function(){h(v())}):h(v()),a.addEventListener("focusin",I,!0),a.addEventListener("mousedown",D,{capture:!0,passive:!1}),a.addEventListener("touchstart",D,{capture:!0,passive:!1}),a.addEventListener("click",te,{capture:!0,passive:!1}),a.addEventListener("keydown",ee,{capture:!0,passive:!1}),f},ae=function(){if(n.active)return a.removeEventListener("focusin",I,!0),a.removeEventListener("mousedown",D,!0),a.removeEventListener("touchstart",D,!0),a.removeEventListener("click",te,!0),a.removeEventListener("keydown",ee,!0),f},Ie=function(o){var i=o.some(function(c){var b=Array.from(c.removedNodes);return b.some(function(p){return p===n.mostRecentlyFocusedNode})});i&&h(v())},X=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Ie):void 0,L=function(){X&&(X.disconnect(),n.active&&!n.paused&&n.containers.map(function(o){X.observe(o,{subtree:!0,childList:!0})}))};return f={get active(){return n.active},get paused(){return n.paused},activate:function(o){if(n.active)return this;var i=l(o,"onActivate"),c=l(o,"onPostActivate"),b=l(o,"checkCanFocusTrap");b||w(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=a.activeElement,i==null||i();var p=function(){b&&w(),re(),L(),c==null||c()};return b?(b(n.containers.concat()).then(p,p),this):(p(),this)},deactivate:function(o){if(!n.active)return this;var i=de({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},o);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,ae(),n.active=!1,n.paused=!1,L(),ve.deactivateTrap(u,f);var c=l(i,"onDeactivate"),b=l(i,"onPostDeactivate"),p=l(i,"checkCanReturnFocus"),y=l(i,"returnFocus","returnFocusOnDeactivate");c==null||c();var N=function(){be(function(){y&&h(T(n.nodeFocusedBeforeActivation)),b==null||b()})};return y&&p?(p(T(n.nodeFocusedBeforeActivation)).then(N,N),this):(N(),this)},pause:function(o){if(n.paused||!n.active)return this;var i=l(o,"onPause"),c=l(o,"onPostPause");return n.paused=!0,i==null||i(),ae(),L(),c==null||c(),this},unpause:function(o){if(!n.paused||!n.active)return this;var i=l(o,"onUnpause"),c=l(o,"onPostUnpause");return n.paused=!1,i==null||i(),w(),re(),L(),c==null||c(),this},updateContainerElements:function(o){var i=[].concat(o).filter(Boolean);return n.containers=i.map(function(c){return typeof c=="string"?a.querySelector(c):c}),n.active&&w(),L(),this}},f.updateContainerElements(e),f};function wt(r={}){let e;const{immediate:t,...a}=r,u=se(!1),s=se(!1),n=v=>e==null?void 0:e.activate(v),f=v=>{e==null||e.deactivate(v)},l=()=>{e&&(e.pause(),s.set(!0))},d=()=>{e&&(e.unpause(),s.set(!1))};return{useFocusTrap:v=>(e=lt(v,{...a,onActivate(){var w;u.set(!0),(w=r.onActivate)==null||w.call(r)},onDeactivate(){var w;u.set(!1),(w=r.onDeactivate)==null||w.call(r)}}),t&&n(),{destroy(){f(),e=void 0}}),hasFocus:ue(u),isPaused:ue(s),activate:n,deactivate:f,pause:l,unpause:d}}const $=[];function Tt(r,e){let t=Q;function a(){const s=$.indexOf(r);s>=0&&$.splice(s,1)}function u(s){t();const{open:n,onClose:f,shouldCloseOnInteractOutside:l,closeOnInteractOutside:d}=s;ge(100).then(()=>{n?$.push(r):a()});function m(){return ke($)===r}function v(){m()&&f&&(f(),a())}function w(h){const T=h.target;_(T)&&T&&m()&&(h.preventDefault(),h.stopPropagation(),h.stopImmediatePropagation())}function F(h){l!=null&&l(h)&&m()&&(h.preventDefault(),h.stopPropagation(),h.stopImmediatePropagation(),v())}t=ft(r,{onInteractOutsideStart:w,onInteractOutside:d?F:void 0,enabled:n}).destroy}return u(e),{update:u,destroy(){a(),t()}}}function ft(r,e){let t=Q,a=!1,u=!1,s=!1;function n(d){t();const{onInteractOutside:m,onInteractOutsideStart:v,enabled:w}=d;if(!w)return;function F(P){m&&he(P,r)&&(v==null||v(P));const D=P.target;_(D)&&Pe(r,D)&&(u=!0),a=!0}function h(P){m==null||m(P)}const T=dt(r);if(typeof PointerEvent<"u"){const P=D=>{f(D)&&h(D),l()};t=oe(A(T,"pointerdown",F,!0),A(T,"pointerup",P,!0))}else{const P=I=>{s?s=!1:f(I)&&h(I),l()},D=I=>{s=!0,f(I)&&h(I),l()};t=oe(A(T,"mousedown",F,!0),A(T,"mouseup",P,!0),A(T,"touchstart",F,!0),A(T,"touchend",D,!0))}}function f(d){return!!(a&&!u&&he(d,r))}function l(){a=!1,u=!1}return n(e),{update:n,destroy:t}}function he(r,e){if("button"in r&&r.button>0)return!1;const t=r.target;if(!_(t))return!1;const a=t.ownerDocument;return!a||!a.documentElement.contains(t)?!1:e&&!Pe(e,t)}function Pe(r,e){return r===e||r.contains(e)}function dt(r){return(r==null?void 0:r.ownerDocument)??document}export{wt as c,yt as h,mt as r,Tt as u};
//# sourceMappingURL=action.DuqT3eFd.js.map