"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75181],{75181:function(e,t,n){n.d(t,{O:function(){return v}});var a=n(49111),o=n(26133),d=n(62424),r=n(28195),i=n(56471),u=n(86248),l={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},c=n(9632),s=n(22103);function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{isDisabled:t,isReadOnly:n,isRequired:v,isInvalid:p,id:h,onBlur:b,onFocus:y,"aria-describedby":k}=(0,a.K)(e),{defaultChecked:m,isChecked:w,isFocusable:B,onChange:P,isIndeterminate:g,name:E,value:L,tabIndex:C,"aria-label":M,"aria-labelledby":S,"aria-invalid":D,...K}=e,T=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(K,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),q=(0,r.W)(P),x=(0,r.W)(b),F=(0,r.W)(y),[O,U]=(0,s.useState)(!1),[_,G]=(0,s.useState)(!1),[N,R]=(0,s.useState)(!1),[W,A]=(0,s.useState)(!1);(0,s.useEffect)(()=>(0,c.BT)(U),[]);let H=(0,s.useRef)(null),[I,j]=(0,s.useState)(!0),[z,J]=(0,s.useState)(!!m),Q=void 0!==w,V=Q?w:z,X=(0,s.useCallback)(e=>{if(n||t){e.preventDefault();return}Q||(V?J(e.target.checked):J(!!g||e.target.checked)),null==q||q(e)},[n,t,V,Q,g,q]);(0,o.G)(()=>{H.current&&(H.current.indeterminate=!!g)},[g]),(0,d.r)(()=>{t&&G(!1)},[t,G]),(0,o.G)(()=>{let e=H.current;if(!(null==e?void 0:e.form))return;let t=()=>{J(!!m)};return e.form.addEventListener("reset",t),()=>{var n;return null==(n=e.form)?void 0:n.removeEventListener("reset",t)}},[]);let Y=t&&!B,Z=(0,s.useCallback)(e=>{" "===e.key&&A(!0)},[A]),$=(0,s.useCallback)(e=>{" "===e.key&&A(!1)},[A]);(0,o.G)(()=>{H.current&&H.current.checked!==V&&J(H.current.checked)},[H.current]);let ee=(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:a,"data-active":(0,u.PB)(W),"data-hover":(0,u.PB)(N),"data-checked":(0,u.PB)(V),"data-focus":(0,u.PB)(_),"data-focus-visible":(0,u.PB)(_&&O),"data-indeterminate":(0,u.PB)(g),"data-disabled":(0,u.PB)(t),"data-invalid":(0,u.PB)(p),"data-readonly":(0,u.PB)(n),"aria-hidden":!0,onMouseDown:(0,u.v0)(e.onMouseDown,e=>{_&&e.preventDefault(),A(!0)}),onMouseUp:(0,u.v0)(e.onMouseUp,()=>A(!1)),onMouseEnter:(0,u.v0)(e.onMouseEnter,()=>R(!0)),onMouseLeave:(0,u.v0)(e.onMouseLeave,()=>R(!1))}},[W,V,t,_,O,N,g,p,n]),et=(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:a,"data-active":(0,u.PB)(W),"data-hover":(0,u.PB)(N),"data-checked":(0,u.PB)(V),"data-focus":(0,u.PB)(_),"data-focus-visible":(0,u.PB)(_&&O),"data-indeterminate":(0,u.PB)(g),"data-disabled":(0,u.PB)(t),"data-invalid":(0,u.PB)(p),"data-readonly":(0,u.PB)(n)}},[W,V,t,_,O,N,g,p,n]),en=(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...T,...e,ref:(0,i.lq)(n,e=>{e&&j("LABEL"===e.tagName)}),onClick:(0,u.v0)(e.onClick,()=>{var e;I||(null==(e=H.current)||e.click(),requestAnimationFrame(()=>{var e;null==(e=H.current)||e.focus({preventScroll:!0})}))}),"data-disabled":(0,u.PB)(t),"data-checked":(0,u.PB)(V),"data-invalid":(0,u.PB)(p)}},[T,t,V,p,I]),ea=(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,i.lq)(H,a),type:"checkbox",name:E,value:L,id:h,tabIndex:C,onChange:(0,u.v0)(e.onChange,X),onBlur:(0,u.v0)(e.onBlur,x,()=>G(!1)),onFocus:(0,u.v0)(e.onFocus,F,()=>G(!0)),onKeyDown:(0,u.v0)(e.onKeyDown,Z),onKeyUp:(0,u.v0)(e.onKeyUp,$),required:v,checked:V,disabled:Y,readOnly:n,"aria-label":M,"aria-labelledby":S,"aria-invalid":D?!!D:p,"aria-describedby":k,"aria-disabled":t,style:l}},[E,L,h,X,x,F,Z,$,v,V,Y,n,M,S,D,p,k,t,C]),eo=(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:n,onMouseDown:(0,u.v0)(e.onMouseDown,f),"data-disabled":(0,u.PB)(t),"data-checked":(0,u.PB)(V),"data-invalid":(0,u.PB)(p)}},[V,t,p]);return{state:{isInvalid:p,isFocused:_,isChecked:V,isActive:W,isHovered:N,isIndeterminate:g,isDisabled:t,isReadOnly:n,isRequired:v},getRootProps:en,getCheckboxProps:ee,getIndicatorProps:et,getInputProps:ea,getLabelProps:eo,htmlProps:T}}function f(e){e.preventDefault(),e.stopPropagation()}},9632:function(e,t,n){n.d(t,{BT:function(){return y}});var a=()=>"undefined"!=typeof document,o=!1,d=null,r=!1,i=!1,u=new Set;function l(e,t){u.forEach(n=>n(e,t))}var c="undefined"!=typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function s(e){r=!0,e.metaKey||!c&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(d="keyboard",l("keyboard",e))}function v(e){if(d="pointer","mousedown"===e.type||"pointerdown"===e.type){r=!0;let t=e.composedPath?e.composedPath()[0]:e.target,n=!1;try{n=t.matches(":focus-visible")}catch{}n||l("pointer",e)}}function f(e){(0===e.mozInputSource&&e.isTrusted||0===e.detail&&!e.pointerType)&&(r=!0,d="virtual")}function p(e){e.target!==window&&e.target!==document&&(r||i||(d="virtual",l("virtual",e)),r=!1,i=!1)}function h(){r=!1,i=!0}function b(){return"pointer"!==d}function y(e){!function(){if(!a()||o)return;let{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...t){r=!0,e.apply(this,t)},document.addEventListener("keydown",s,!0),document.addEventListener("keyup",s,!0),document.addEventListener("click",f,!0),window.addEventListener("focus",p,!0),window.addEventListener("blur",h,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",v,!0),document.addEventListener("pointermove",v,!0),document.addEventListener("pointerup",v,!0)):(document.addEventListener("mousedown",v,!0),document.addEventListener("mousemove",v,!0),document.addEventListener("mouseup",v,!0)),o=!0}(),e(b());let t=()=>e(b());return u.add(t),()=>{u.delete(t)}}}}]);