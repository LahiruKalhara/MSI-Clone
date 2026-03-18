(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Gf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var id={exports:{}},Ya={},rd={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function G_(){if(km)return vt;km=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function y(k,J,Ee){this.props=k,this.context=J,this.refs=C,this.updater=Ee||S}y.prototype.isReactComponent={},y.prototype.setState=function(k,J){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,J,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=y.prototype;function b(k,J,Ee){this.props=k,this.context=J,this.refs=C,this.updater=Ee||S}var L=b.prototype=new x;L.constructor=b,M(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,O=Object.prototype.hasOwnProperty,U={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function A(k,J,Ee){var Le,De={},te=null,he=null;if(J!=null)for(Le in J.ref!==void 0&&(he=J.ref),J.key!==void 0&&(te=""+J.key),J)O.call(J,Le)&&!B.hasOwnProperty(Le)&&(De[Le]=J[Le]);var de=arguments.length-2;if(de===1)De.children=Ee;else if(1<de){for(var be=Array(de),Ue=0;Ue<de;Ue++)be[Ue]=arguments[Ue+2];De.children=be}if(k&&k.defaultProps)for(Le in de=k.defaultProps,de)De[Le]===void 0&&(De[Le]=de[Le]);return{$$typeof:r,type:k,key:te,ref:he,props:De,_owner:U.current}}function N(k,J){return{$$typeof:r,type:k.type,key:J,ref:k.ref,props:k.props,_owner:k._owner}}function le(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function D(k){var J={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ee){return J[Ee]})}var z=/\/+/g;function X(k,J){return typeof k=="object"&&k!==null&&k.key!=null?D(""+k.key):J.toString(36)}function $(k,J,Ee,Le,De){var te=typeof k;(te==="undefined"||te==="boolean")&&(k=null);var he=!1;if(k===null)he=!0;else switch(te){case"string":case"number":he=!0;break;case"object":switch(k.$$typeof){case r:case e:he=!0}}if(he)return he=k,De=De(he),k=Le===""?"."+X(he,0):Le,P(De)?(Ee="",k!=null&&(Ee=k.replace(z,"$&/")+"/"),$(De,J,Ee,"",function(Ue){return Ue})):De!=null&&(le(De)&&(De=N(De,Ee+(!De.key||he&&he.key===De.key?"":(""+De.key).replace(z,"$&/")+"/")+k)),J.push(De)),1;if(he=0,Le=Le===""?".":Le+":",P(k))for(var de=0;de<k.length;de++){te=k[de];var be=Le+X(te,de);he+=$(te,J,Ee,be,De)}else if(be=g(k),typeof be=="function")for(k=be.call(k),de=0;!(te=k.next()).done;)te=te.value,be=Le+X(te,de++),he+=$(te,J,Ee,be,De);else if(te==="object")throw J=String(k),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return he}function Y(k,J,Ee){if(k==null)return k;var Le=[],De=0;return $(k,Le,"","",function(te){return J.call(Ee,te,De++)}),Le}function Q(k){if(k._status===-1){var J=k._result;J=J(),J.then(function(Ee){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ee)},function(Ee){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ee)}),k._status===-1&&(k._status=0,k._result=J)}if(k._status===1)return k._result.default;throw k._result}var G={current:null},K={transition:null},ne={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:K,ReactCurrentOwner:U};function ce(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:Y,forEach:function(k,J,Ee){Y(k,function(){J.apply(this,arguments)},Ee)},count:function(k){var J=0;return Y(k,function(){J++}),J},toArray:function(k){return Y(k,function(J){return J})||[]},only:function(k){if(!le(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},vt.Component=y,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=b,vt.StrictMode=s,vt.Suspense=p,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,vt.act=ce,vt.cloneElement=function(k,J,Ee){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Le=M({},k.props),De=k.key,te=k.ref,he=k._owner;if(J!=null){if(J.ref!==void 0&&(te=J.ref,he=U.current),J.key!==void 0&&(De=""+J.key),k.type&&k.type.defaultProps)var de=k.type.defaultProps;for(be in J)O.call(J,be)&&!B.hasOwnProperty(be)&&(Le[be]=J[be]===void 0&&de!==void 0?de[be]:J[be])}var be=arguments.length-2;if(be===1)Le.children=Ee;else if(1<be){de=Array(be);for(var Ue=0;Ue<be;Ue++)de[Ue]=arguments[Ue+2];Le.children=de}return{$$typeof:r,type:k.type,key:De,ref:te,props:Le,_owner:he}},vt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},vt.createElement=A,vt.createFactory=function(k){var J=A.bind(null,k);return J.type=k,J},vt.createRef=function(){return{current:null}},vt.forwardRef=function(k){return{$$typeof:d,render:k}},vt.isValidElement=le,vt.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:Q}},vt.memo=function(k,J){return{$$typeof:h,type:k,compare:J===void 0?null:J}},vt.startTransition=function(k){var J=K.transition;K.transition={};try{k()}finally{K.transition=J}},vt.unstable_act=ce,vt.useCallback=function(k,J){return G.current.useCallback(k,J)},vt.useContext=function(k){return G.current.useContext(k)},vt.useDebugValue=function(){},vt.useDeferredValue=function(k){return G.current.useDeferredValue(k)},vt.useEffect=function(k,J){return G.current.useEffect(k,J)},vt.useId=function(){return G.current.useId()},vt.useImperativeHandle=function(k,J,Ee){return G.current.useImperativeHandle(k,J,Ee)},vt.useInsertionEffect=function(k,J){return G.current.useInsertionEffect(k,J)},vt.useLayoutEffect=function(k,J){return G.current.useLayoutEffect(k,J)},vt.useMemo=function(k,J){return G.current.useMemo(k,J)},vt.useReducer=function(k,J,Ee){return G.current.useReducer(k,J,Ee)},vt.useRef=function(k){return G.current.useRef(k)},vt.useState=function(k){return G.current.useState(k)},vt.useSyncExternalStore=function(k,J,Ee){return G.current.useSyncExternalStore(k,J,Ee)},vt.useTransition=function(){return G.current.useTransition()},vt.version="18.3.1",vt}var Bm;function Wf(){return Bm||(Bm=1,rd.exports=G_()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function W_(){if(zm)return Ya;zm=1;var r=Wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,h){var v,_={},g=null,S=null;h!==void 0&&(g=""+h),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)s.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:d,key:g,ref:S,props:_,_owner:o.current}}return Ya.Fragment=t,Ya.jsx=c,Ya.jsxs=c,Ya}var Vm;function j_(){return Vm||(Vm=1,id.exports=W_()),id.exports}var T=j_(),fe=Wf();const X_=Gf(fe);var Rl={},sd={exports:{}},Fn={},ad={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function q_(){return Hm||(Hm=1,(function(r){function e(K,ne){var ce=K.length;K.push(ne);e:for(;0<ce;){var k=ce-1>>>1,J=K[k];if(0<o(J,ne))K[k]=ne,K[ce]=J,ce=k;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var ne=K[0],ce=K.pop();if(ce!==ne){K[0]=ce;e:for(var k=0,J=K.length,Ee=J>>>1;k<Ee;){var Le=2*(k+1)-1,De=K[Le],te=Le+1,he=K[te];if(0>o(De,ce))te<J&&0>o(he,De)?(K[k]=he,K[te]=ce,k=te):(K[k]=De,K[Le]=ce,k=Le);else if(te<J&&0>o(he,ce))K[k]=he,K[te]=ce,k=te;else break e}}return ne}function o(K,ne){var ce=K.sortIndex-ne.sortIndex;return ce!==0?ce:K.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var p=[],h=[],v=1,_=null,g=3,S=!1,M=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(K){for(var ne=t(h);ne!==null;){if(ne.callback===null)s(h);else if(ne.startTime<=K)s(h),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=t(h)}}function P(K){if(C=!1,L(K),!M)if(t(p)!==null)M=!0,Q(O);else{var ne=t(h);ne!==null&&G(P,ne.startTime-K)}}function O(K,ne){M=!1,C&&(C=!1,x(A),A=-1),S=!0;var ce=g;try{for(L(ne),_=t(p);_!==null&&(!(_.expirationTime>ne)||K&&!D());){var k=_.callback;if(typeof k=="function"){_.callback=null,g=_.priorityLevel;var J=k(_.expirationTime<=ne);ne=r.unstable_now(),typeof J=="function"?_.callback=J:_===t(p)&&s(p),L(ne)}else s(p);_=t(p)}if(_!==null)var Ee=!0;else{var Le=t(h);Le!==null&&G(P,Le.startTime-ne),Ee=!1}return Ee}finally{_=null,g=ce,S=!1}}var U=!1,B=null,A=-1,N=5,le=-1;function D(){return!(r.unstable_now()-le<N)}function z(){if(B!==null){var K=r.unstable_now();le=K;var ne=!0;try{ne=B(!0,K)}finally{ne?X():(U=!1,B=null)}}else U=!1}var X;if(typeof b=="function")X=function(){b(z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Y=$.port2;$.port1.onmessage=z,X=function(){Y.postMessage(null)}}else X=function(){y(z,0)};function Q(K){B=K,U||(U=!0,X())}function G(K,ne){A=y(function(){K(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,Q(O))},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(K){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var ce=g;g=ne;try{return K()}finally{g=ce}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(K,ne){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ce=g;g=K;try{return ne()}finally{g=ce}},r.unstable_scheduleCallback=function(K,ne,ce){var k=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?k+ce:k):ce=k,K){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ce+J,K={id:v++,callback:ne,priorityLevel:K,startTime:ce,expirationTime:J,sortIndex:-1},ce>k?(K.sortIndex=ce,e(h,K),t(p)===null&&K===t(h)&&(C?(x(A),A=-1):C=!0,G(P,ce-k))):(K.sortIndex=J,e(p,K),M||S||(M=!0,Q(O))),K},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(K){var ne=g;return function(){var ce=g;g=ne;try{return K.apply(this,arguments)}finally{g=ce}}}})(od)),od}var Gm;function $_(){return Gm||(Gm=1,ad.exports=q_()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function Y_(){if(Wm)return Fn;Wm=1;var r=Wf(),e=$_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return p.call(_,n)?!0:p.call(v,n)?!1:h.test(n)?_[n]=!0:(v[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,u,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,b);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,b);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,b);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,f,u)&&(a=null),u||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,u=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),U=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),D=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),K=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,k;function J(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ee=!1;function Le(n,i){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var u=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){u=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){u=oe}n()}}catch(oe){if(oe&&u&&typeof oe.stack=="string"){for(var f=oe.stack.split(`
`),m=u.stack.split(`
`),w=f.length-1,F=m.length-1;1<=w&&0<=F&&f[w]!==m[F];)F--;for(;1<=w&&0<=F;w--,F--)if(f[w]!==m[F]){if(w!==1||F!==1)do if(w--,F--,0>F||f[w]!==m[F]){var V=`
`+f[w].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=w&&0<=F);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?J(n):""}function De(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Le(n.type,!1),n;case 11:return n=Le(n.type.render,!1),n;case 1:return n=Le(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case U:return"Portal";case N:return"Profiler";case A:return"StrictMode";case X:return"Suspense";case $:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case le:return(n._context.displayName||"Context")+".Provider";case z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:te(n.type)||"Memo";case Q:i=n._payload,n=n._init;try{return te(n(i))}catch{}}return null}function he(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(n){var i=be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function et(n){n._valueTracker||(n._valueTracker=Ue(n))}function Pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=be(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function $e(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ye(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ft(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function at(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Ut(n,i){at(n,i);var a=de(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Vt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Vt(n,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function H(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Vt(n,i,a){(i!=="number"||$e(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var _t=Array.isArray;function Et(n,i,a,u){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&u&&(n[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Xe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function I(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(_t(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:de(a)}}function E(n,i){var a=de(i.value),u=de(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function q(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ge(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ge(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pe,He=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(pe=pe||document.createElement("div"),pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=pe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ce(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ot=["Webkit","ms","Moz","O"];Object.keys(Je).forEach(function(n){ot.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Je[i]=Je[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Je.hasOwnProperty(n)&&Je[n]?(""+i).trim():i+"px"}function Ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=Se(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,f):n[a]=f}}var qe=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(qe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Fe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,we=null,Oe=null;function Me(n){if(n=Da(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Go(i),Re(n.stateNode,n.type,i))}}function me(n){we?Oe?Oe.push(n):Oe=[n]:we=n}function We(){if(we){var n=we,i=Oe;if(Oe=we=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function lt(n,i){return n(i)}function It(){}var wt=!1;function qn(n,i,a){if(wt)return n(i,a);wt=!0;try{return lt(n,i,a)}finally{wt=!1,(we!==null||Oe!==null)&&(It(),We())}}function Mn(n,i){var a=n.stateNode;if(a===null)return null;var u=Go(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ps=!1;if(d)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){ps=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{ps=!1}function Tu(n,i,a,u,f,m,w,F,V){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(xe){this.onError(xe)}}var or=!1,Br=null,$n=!1,zr=null,So={onError:function(n){or=!0,Br=n}};function Mo(n,i,a,u,f,m,w,F,V){or=!1,Br=null,Tu.apply(So,arguments)}function ms(n,i,a,u,f,m,w,F,V){if(Mo.apply(this,arguments),or){if(or){var oe=Br;or=!1,Br=null}else throw Error(t(198));$n||($n=!0,zr=oe)}}function yi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Vr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ga(n){if(yi(n)!==n)throw Error(t(188))}function Eo(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return ga(f),n;if(m===u)return ga(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=f,u=m;else{for(var w=!1,F=f.child;F;){if(F===a){w=!0,a=f,u=m;break}if(F===u){w=!0,u=f,a=m;break}F=F.sibling}if(!w){for(F=m.child;F;){if(F===a){w=!0,a=m,u=f;break}if(F===u){w=!0,u=m,a=f;break}F=F.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function wo(n){return n=Eo(n),n!==null?To(n):null}function To(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=To(n);if(i!==null)return i;n=n.sibling}return null}var Ao=e.unstable_scheduleCallback,Co=e.unstable_cancelCallback,Au=e.unstable_shouldYield,Cu=e.unstable_requestPaint,R=e.unstable_now,Z=e.unstable_getCurrentPriorityLevel,ue=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,Ne=e.unstable_LowPriority,ze=e.unstable_IdlePriority,Pe=null,ke=null;function tt(n){if(ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Pe,n,void 0,(n.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Nt,pt=Math.log,nt=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(pt(n)/nt|0)|0}var Ot=64,Ft=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,f=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var F=w&~f;F!==0?u=St(F):(m&=w,m!==0&&(u=St(m)))}else w=a&~f,w!==0?u=St(w):m!==0&&(u=St(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-it(i),f=1<<a,u|=n[a],i&=~f;return u}function Ze(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-it(m),F=1<<w,V=f[w];V===-1?((F&a)===0||(F&u)!==0)&&(f[w]=Ze(F,i)):V<=i&&(n.expiredLanes|=F),m&=~F}}function xt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),n}function Pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function kn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-it(i),n[i]=a}function lr(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-it(a),m=1<<f;i[f]=0,u[f]=-1,n[f]=-1,a&=~m}}function Lt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-it(a),f=1<<u;f&i|n[u]&i&&(n[u]|=i),a&=~f}}var ut=0;function oi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Kt,Yn,zi,va,yh,Ru=!1,Ro=[],ur=null,cr=null,dr=null,_a=new Map,xa=new Map,fr=[],dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(n,i){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":_a.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(i.pointerId)}}function ya(n,i,a,u,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Da(i),i!==null&&Yn(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function fv(n,i,a,u,f){switch(i){case"focusin":return ur=ya(ur,n,i,a,u,f),!0;case"dragenter":return cr=ya(cr,n,i,a,u,f),!0;case"mouseover":return dr=ya(dr,n,i,a,u,f),!0;case"pointerover":var m=f.pointerId;return _a.set(m,ya(_a.get(m)||null,n,i,a,u,f)),!0;case"gotpointercapture":return m=f.pointerId,xa.set(m,ya(xa.get(m)||null,n,i,a,u,f)),!0}return!1}function Mh(n){var i=Hr(n.target);if(i!==null){var a=yi(i);if(a!==null){if(i=a.tag,i===13){if(i=Vr(a),i!==null){n.blockedOn=i,yh(n.priority,function(){zi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Pu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ht=u,a.target.dispatchEvent(u),ht=null}else return i=Da(a),i!==null&&Yn(i),n.blockedOn=a,!1;i.shift()}return!0}function Eh(n,i,a){bo(n)&&a.delete(i)}function hv(){Ru=!1,ur!==null&&bo(ur)&&(ur=null),cr!==null&&bo(cr)&&(cr=null),dr!==null&&bo(dr)&&(dr=null),_a.forEach(Eh),xa.forEach(Eh)}function Sa(n,i){n.blockedOn===i&&(n.blockedOn=null,Ru||(Ru=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hv)))}function Ma(n){function i(f){return Sa(f,n)}if(0<Ro.length){Sa(Ro[0],n);for(var a=1;a<Ro.length;a++){var u=Ro[a];u.blockedOn===n&&(u.blockedOn=null)}}for(ur!==null&&Sa(ur,n),cr!==null&&Sa(cr,n),dr!==null&&Sa(dr,n),_a.forEach(i),xa.forEach(i),a=0;a<fr.length;a++)u=fr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Mh(a),a.blockedOn===null&&fr.shift()}var gs=P.ReactCurrentBatchConfig,Po=!0;function pv(n,i,a,u){var f=ut,m=gs.transition;gs.transition=null;try{ut=1,bu(n,i,a,u)}finally{ut=f,gs.transition=m}}function mv(n,i,a,u){var f=ut,m=gs.transition;gs.transition=null;try{ut=4,bu(n,i,a,u)}finally{ut=f,gs.transition=m}}function bu(n,i,a,u){if(Po){var f=Pu(n,i,a,u);if(f===null)qu(n,i,u,Lo,a),Sh(n,u);else if(fv(f,n,i,a,u))u.stopPropagation();else if(Sh(n,u),i&4&&-1<dv.indexOf(n)){for(;f!==null;){var m=Da(f);if(m!==null&&Kt(m),m=Pu(n,i,a,u),m===null&&qu(n,i,u,Lo,a),m===f)break;f=m}f!==null&&u.stopPropagation()}else qu(n,i,u,null,a)}}var Lo=null;function Pu(n,i,a,u){if(Lo=null,n=W(u),n=Hr(n),n!==null)if(i=yi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Vr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Lo=n,null}function wh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z()){case ue:return 1;case ae:return 4;case ie:case Ne:return 16;case ze:return 536870912;default:return 16}default:return 16}}var hr=null,Lu=null,No=null;function Th(){if(No)return No;var n,i=Lu,a=i.length,u,f="value"in hr?hr.value:hr.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===f[m-u];u++);return No=f.slice(n,1<u?1-u:void 0)}function Io(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Do(){return!0}function Ah(){return!1}function Bn(n){function i(a,u,f,m,w){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Do:Ah,this.isPropagationStopped=Ah,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=Bn(vs),Ea=ce({},vs,{view:0,detail:0}),gv=Bn(Ea),Iu,Du,wa,Uo=ce({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wa&&(wa&&n.type==="mousemove"?(Iu=n.screenX-wa.screenX,Du=n.screenY-wa.screenY):Du=Iu=0,wa=n),Iu)},movementY:function(n){return"movementY"in n?n.movementY:Du}}),Ch=Bn(Uo),vv=ce({},Uo,{dataTransfer:0}),_v=Bn(vv),xv=ce({},Ea,{relatedTarget:0}),Uu=Bn(xv),yv=ce({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=Bn(yv),Mv=ce({},vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ev=Bn(Mv),wv=ce({},vs,{data:0}),Rh=Bn(wv),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Cv[n])?!!i[n]:!1}function Fu(){return Rv}var bv=ce({},Ea,{key:function(n){if(n.key){var i=Tv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Io(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Av[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(n){return n.type==="keypress"?Io(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Io(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Pv=Bn(bv),Lv=ce({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=Bn(Lv),Nv=ce({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),Iv=Bn(Nv),Dv=ce({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uv=Bn(Dv),Fv=ce({},Uo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=Bn(Fv),kv=[9,13,27,32],Ou=d&&"CompositionEvent"in window,Ta=null;d&&"documentMode"in document&&(Ta=document.documentMode);var Bv=d&&"TextEvent"in window&&!Ta,Ph=d&&(!Ou||Ta&&8<Ta&&11>=Ta),Lh=" ",Nh=!1;function Ih(n,i){switch(n){case"keyup":return kv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function zv(n,i){switch(n){case"compositionend":return Dh(i);case"keypress":return i.which!==32?null:(Nh=!0,Lh);case"textInput":return n=i.data,n===Lh&&Nh?null:n;default:return null}}function Vv(n,i){if(_s)return n==="compositionend"||!Ou&&Ih(n,i)?(n=Th(),No=Lu=hr=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ph&&i.locale!=="ko"?null:i.data;default:return null}}var Hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Hv[n.type]:i==="textarea"}function Fh(n,i,a,u){me(u),i=zo(i,"onChange"),0<i.length&&(a=new Nu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Aa=null,Ca=null;function Gv(n){ep(n,0)}function Fo(n){var i=Es(n);if(Pt(i))return n}function Wv(n,i){if(n==="change")return i}var Oh=!1;if(d){var ku;if(d){var Bu="oninput"in document;if(!Bu){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),Bu=typeof kh.oninput=="function"}ku=Bu}else ku=!1;Oh=ku&&(!document.documentMode||9<document.documentMode)}function Bh(){Aa&&(Aa.detachEvent("onpropertychange",zh),Ca=Aa=null)}function zh(n){if(n.propertyName==="value"&&Fo(Ca)){var i=[];Fh(i,Ca,n,W(n)),qn(Gv,i)}}function jv(n,i,a){n==="focusin"?(Bh(),Aa=i,Ca=a,Aa.attachEvent("onpropertychange",zh)):n==="focusout"&&Bh()}function Xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fo(Ca)}function qv(n,i){if(n==="click")return Fo(i)}function $v(n,i){if(n==="input"||n==="change")return Fo(i)}function Yv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var li=typeof Object.is=="function"?Object.is:Yv;function Ra(n,i){if(li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!p.call(i,f)||!li(n[f],i[f]))return!1}return!0}function Vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hh(n,i){var a=Vh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vh(a)}}function Gh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Gh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Wh(){for(var n=window,i=$e();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=$e(n.document)}return i}function zu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Kv(n){var i=Wh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Gh(a.ownerDocument.documentElement,a)){if(u!==null&&zu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(u.start,f);u=u.end===void 0?m:Math.min(u.end,f),!n.extend&&m>u&&(f=u,u=m,m=f),f=Hh(a,m);var w=Hh(a,u);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zv=d&&"documentMode"in document&&11>=document.documentMode,xs=null,Vu=null,ba=null,Hu=!1;function jh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hu||xs==null||xs!==$e(u)||(u=xs,"selectionStart"in u&&zu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ba&&Ra(ba,u)||(ba=u,u=zo(Vu,"onSelect"),0<u.length&&(i=new Nu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=xs)))}function Oo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ys={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Gu={},Xh={};d&&(Xh=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function ko(n){if(Gu[n])return Gu[n];if(!ys[n])return n;var i=ys[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Xh)return Gu[n]=i[a];return n}var qh=ko("animationend"),$h=ko("animationiteration"),Yh=ko("animationstart"),Kh=ko("transitionend"),Zh=new Map,Jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,i){Zh.set(n,i),l(i,[n])}for(var Wu=0;Wu<Jh.length;Wu++){var ju=Jh[Wu],Jv=ju.toLowerCase(),Qv=ju[0].toUpperCase()+ju.slice(1);pr(Jv,"on"+Qv)}pr(qh,"onAnimationEnd"),pr($h,"onAnimationIteration"),pr(Yh,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(Kh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function Qh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,ms(u,i,void 0,n),n.currentTarget=null}function ep(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],f=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var w=u.length-1;0<=w;w--){var F=u[w],V=F.instance,oe=F.currentTarget;if(F=F.listener,V!==m&&f.isPropagationStopped())break e;Qh(f,F,oe),m=V}else for(w=0;w<u.length;w++){if(F=u[w],V=F.instance,oe=F.currentTarget,F=F.listener,V!==m&&f.isPropagationStopped())break e;Qh(f,F,oe),m=V}}}if($n)throw n=zr,$n=!1,zr=null,n}function Bt(n,i){var a=i[Qu];a===void 0&&(a=i[Qu]=new Set);var u=n+"__bubble";a.has(u)||(tp(i,n,2,!1),a.add(u))}function Xu(n,i,a){var u=0;i&&(u|=4),tp(a,n,u,i)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function La(n){if(!n[Bo]){n[Bo]=!0,s.forEach(function(a){a!=="selectionchange"&&(e_.has(a)||Xu(a,!1,n),Xu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bo]||(i[Bo]=!0,Xu("selectionchange",!1,i))}}function tp(n,i,a,u){switch(wh(i)){case 1:var f=pv;break;case 4:f=mv;break;default:f=bu}a=f.bind(null,i,a,n),f=void 0,!ps||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function qu(n,i,a,u,f){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var F=u.stateNode.containerInfo;if(F===f||F.nodeType===8&&F.parentNode===f)break;if(w===4)for(w=u.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;w=w.return}for(;F!==null;){if(w=Hr(F),w===null)return;if(V=w.tag,V===5||V===6){u=m=w;continue e}F=F.parentNode}}u=u.return}qn(function(){var oe=m,xe=W(a),ye=[];e:{var _e=Zh.get(n);if(_e!==void 0){var Be=Nu,je=n;switch(n){case"keypress":if(Io(a)===0)break e;case"keydown":case"keyup":Be=Pv;break;case"focusin":je="focus",Be=Uu;break;case"focusout":je="blur",Be=Uu;break;case"beforeblur":case"afterblur":Be=Uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=Iv;break;case qh:case $h:case Yh:Be=Sv;break;case Kh:Be=Uv;break;case"scroll":Be=gv;break;case"wheel":Be=Ov;break;case"copy":case"cut":case"paste":Be=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=bh}var Ke=(i&4)!==0,Zt=!Ke&&n==="scroll",ee=Ke?_e!==null?_e+"Capture":null:_e;Ke=[];for(var j=oe,se;j!==null;){se=j;var Te=se.stateNode;if(se.tag===5&&Te!==null&&(se=Te,ee!==null&&(Te=Mn(j,ee),Te!=null&&Ke.push(Na(j,Te,se)))),Zt)break;j=j.return}0<Ke.length&&(_e=new Be(_e,je,null,a,xe),ye.push({event:_e,listeners:Ke}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",_e&&a!==ht&&(je=a.relatedTarget||a.fromElement)&&(Hr(je)||je[Vi]))break e;if((Be||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Be?(je=a.relatedTarget||a.toElement,Be=oe,je=je?Hr(je):null,je!==null&&(Zt=yi(je),je!==Zt||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=oe),Be!==je)){if(Ke=Ch,Te="onMouseLeave",ee="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=bh,Te="onPointerLeave",ee="onPointerEnter",j="pointer"),Zt=Be==null?_e:Es(Be),se=je==null?_e:Es(je),_e=new Ke(Te,j+"leave",Be,a,xe),_e.target=Zt,_e.relatedTarget=se,Te=null,Hr(xe)===oe&&(Ke=new Ke(ee,j+"enter",je,a,xe),Ke.target=se,Ke.relatedTarget=Zt,Te=Ke),Zt=Te,Be&&je)t:{for(Ke=Be,ee=je,j=0,se=Ke;se;se=Ss(se))j++;for(se=0,Te=ee;Te;Te=Ss(Te))se++;for(;0<j-se;)Ke=Ss(Ke),j--;for(;0<se-j;)ee=Ss(ee),se--;for(;j--;){if(Ke===ee||ee!==null&&Ke===ee.alternate)break t;Ke=Ss(Ke),ee=Ss(ee)}Ke=null}else Ke=null;Be!==null&&np(ye,_e,Be,Ke,!1),je!==null&&Zt!==null&&np(ye,Zt,je,Ke,!0)}}e:{if(_e=oe?Es(oe):window,Be=_e.nodeName&&_e.nodeName.toLowerCase(),Be==="select"||Be==="input"&&_e.type==="file")var Qe=Wv;else if(Uh(_e))if(Oh)Qe=$v;else{Qe=Xv;var rt=jv}else(Be=_e.nodeName)&&Be.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Qe=qv);if(Qe&&(Qe=Qe(n,oe))){Fh(ye,Qe,a,xe);break e}rt&&rt(n,_e,oe),n==="focusout"&&(rt=_e._wrapperState)&&rt.controlled&&_e.type==="number"&&Vt(_e,"number",_e.value)}switch(rt=oe?Es(oe):window,n){case"focusin":(Uh(rt)||rt.contentEditable==="true")&&(xs=rt,Vu=oe,ba=null);break;case"focusout":ba=Vu=xs=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,jh(ye,a,xe);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":jh(ye,a,xe)}var st;if(Ou)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else _s?Ih(n,a)&&(ct="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(Ph&&a.locale!=="ko"&&(_s||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&_s&&(st=Th()):(hr=xe,Lu="value"in hr?hr.value:hr.textContent,_s=!0)),rt=zo(oe,ct),0<rt.length&&(ct=new Rh(ct,n,null,a,xe),ye.push({event:ct,listeners:rt}),st?ct.data=st:(st=Dh(a),st!==null&&(ct.data=st)))),(st=Bv?zv(n,a):Vv(n,a))&&(oe=zo(oe,"onBeforeInput"),0<oe.length&&(xe=new Rh("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:oe}),xe.data=st))}ep(ye,i)})}function Na(n,i,a){return{instance:n,listener:i,currentTarget:a}}function zo(n,i){for(var a=i+"Capture",u=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Mn(n,a),m!=null&&u.unshift(Na(n,m,f)),m=Mn(n,i),m!=null&&u.push(Na(n,m,f))),n=n.return}return u}function Ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function np(n,i,a,u,f){for(var m=i._reactName,w=[];a!==null&&a!==u;){var F=a,V=F.alternate,oe=F.stateNode;if(V!==null&&V===u)break;F.tag===5&&oe!==null&&(F=oe,f?(V=Mn(a,m),V!=null&&w.unshift(Na(a,V,F))):f||(V=Mn(a,m),V!=null&&w.push(Na(a,V,F)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var t_=/\r\n?/g,n_=/\u0000|\uFFFD/g;function ip(n){return(typeof n=="string"?n:""+n).replace(t_,`
`).replace(n_,"")}function Vo(n,i,a){if(i=ip(i),ip(n)!==i&&a)throw Error(t(425))}function Ho(){}var $u=null,Yu=null;function Ku(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,i_=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,r_=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(n){return rp.resolve(null).then(n).catch(s_)}:Zu;function s_(n){setTimeout(function(){throw n})}function Ju(n,i){var a=i,u=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){n.removeChild(f),Ma(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);Ma(i)}function mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function sp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Si="__reactFiber$"+Ms,Ia="__reactProps$"+Ms,Vi="__reactContainer$"+Ms,Qu="__reactEvents$"+Ms,a_="__reactListeners$"+Ms,o_="__reactHandles$"+Ms;function Hr(n){var i=n[Si];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Vi]||a[Si]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=sp(n);n!==null;){if(a=n[Si])return a;n=sp(n)}return i}n=a,a=n.parentNode}return null}function Da(n){return n=n[Si]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Es(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Go(n){return n[Ia]||null}var ec=[],ws=-1;function gr(n){return{current:n}}function zt(n){0>ws||(n.current=ec[ws],ec[ws]=null,ws--)}function kt(n,i){ws++,ec[ws]=n.current,n.current=i}var vr={},hn=gr(vr),Ln=gr(!1),Gr=vr;function Ts(n,i){var a=n.type.contextTypes;if(!a)return vr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(n){return n=n.childContextTypes,n!=null}function Wo(){zt(Ln),zt(hn)}function ap(n,i,a){if(hn.current!==vr)throw Error(t(168));kt(hn,i),kt(Ln,a)}function op(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,he(n)||"Unknown",f));return ce({},a,u)}function jo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,Gr=hn.current,kt(hn,n),kt(Ln,Ln.current),!0}function lp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=op(n,i,Gr),u.__reactInternalMemoizedMergedChildContext=n,zt(Ln),zt(hn),kt(hn,n)):zt(Ln),kt(Ln,a)}var Hi=null,Xo=!1,tc=!1;function up(n){Hi===null?Hi=[n]:Hi.push(n)}function l_(n){Xo=!0,up(n)}function _r(){if(!tc&&Hi!==null){tc=!0;var n=0,i=ut;try{var a=Hi;for(ut=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Hi=null,Xo=!1}catch(f){throw Hi!==null&&(Hi=Hi.slice(n+1)),Ao(ue,_r),f}finally{ut=i,tc=!1}}return null}var As=[],Cs=0,qo=null,$o=0,Kn=[],Zn=0,Wr=null,Gi=1,Wi="";function jr(n,i){As[Cs++]=$o,As[Cs++]=qo,qo=n,$o=i}function cp(n,i,a){Kn[Zn++]=Gi,Kn[Zn++]=Wi,Kn[Zn++]=Wr,Wr=n;var u=Gi;n=Wi;var f=32-it(u)-1;u&=~(1<<f),a+=1;var m=32-it(i)+f;if(30<m){var w=f-f%5;m=(u&(1<<w)-1).toString(32),u>>=w,f-=w,Gi=1<<32-it(i)+f|a<<f|u,Wi=m+n}else Gi=1<<m|a<<f|u,Wi=n}function nc(n){n.return!==null&&(jr(n,1),cp(n,1,0))}function ic(n){for(;n===qo;)qo=As[--Cs],As[Cs]=null,$o=As[--Cs],As[Cs]=null;for(;n===Wr;)Wr=Kn[--Zn],Kn[Zn]=null,Wi=Kn[--Zn],Kn[Zn]=null,Gi=Kn[--Zn],Kn[Zn]=null}var zn=null,Vn=null,Ht=!1,ui=null;function dp(n,i){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function fp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Vn=mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Wr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Vn=null,!0):!1;default:return!1}}function rc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function sc(n){if(Ht){var i=Vn;if(i){var a=i;if(!fp(n,i)){if(rc(n))throw Error(t(418));i=mr(a.nextSibling);var u=zn;i&&fp(n,i)?dp(u,a):(n.flags=n.flags&-4097|2,Ht=!1,zn=n)}}else{if(rc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,zn=n}}}function hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Yo(n){if(n!==zn)return!1;if(!Ht)return hp(n),Ht=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ku(n.type,n.memoizedProps)),i&&(i=Vn)){if(rc(n))throw pp(),Error(t(418));for(;i;)dp(n,i),i=mr(i.nextSibling)}if(hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=mr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=zn?mr(n.stateNode.nextSibling):null;return!0}function pp(){for(var n=Vn;n;)n=mr(n.nextSibling)}function Rs(){Vn=zn=null,Ht=!1}function ac(n){ui===null?ui=[n]:ui.push(n)}var u_=P.ReactCurrentBatchConfig;function Ua(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var f=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var F=f.refs;w===null?delete F[m]:F[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ko(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function mp(n){var i=n._init;return i(n._payload)}function gp(n){function i(ee,j){if(n){var se=ee.deletions;se===null?(ee.deletions=[j],ee.flags|=16):se.push(j)}}function a(ee,j){if(!n)return null;for(;j!==null;)i(ee,j),j=j.sibling;return null}function u(ee,j){for(ee=new Map;j!==null;)j.key!==null?ee.set(j.key,j):ee.set(j.index,j),j=j.sibling;return ee}function f(ee,j){return ee=Ar(ee,j),ee.index=0,ee.sibling=null,ee}function m(ee,j,se){return ee.index=se,n?(se=ee.alternate,se!==null?(se=se.index,se<j?(ee.flags|=2,j):se):(ee.flags|=2,j)):(ee.flags|=1048576,j)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,j,se,Te){return j===null||j.tag!==6?(j=Zc(se,ee.mode,Te),j.return=ee,j):(j=f(j,se),j.return=ee,j)}function V(ee,j,se,Te){var Qe=se.type;return Qe===B?xe(ee,j,se.props.children,Te,se.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&mp(Qe)===j.type)?(Te=f(j,se.props),Te.ref=Ua(ee,j,se),Te.return=ee,Te):(Te=yl(se.type,se.key,se.props,null,ee.mode,Te),Te.ref=Ua(ee,j,se),Te.return=ee,Te)}function oe(ee,j,se,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==se.containerInfo||j.stateNode.implementation!==se.implementation?(j=Jc(se,ee.mode,Te),j.return=ee,j):(j=f(j,se.children||[]),j.return=ee,j)}function xe(ee,j,se,Te,Qe){return j===null||j.tag!==7?(j=Qr(se,ee.mode,Te,Qe),j.return=ee,j):(j=f(j,se),j.return=ee,j)}function ye(ee,j,se){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Zc(""+j,ee.mode,se),j.return=ee,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case O:return se=yl(j.type,j.key,j.props,null,ee.mode,se),se.ref=Ua(ee,null,j),se.return=ee,se;case U:return j=Jc(j,ee.mode,se),j.return=ee,j;case Q:var Te=j._init;return ye(ee,Te(j._payload),se)}if(_t(j)||ne(j))return j=Qr(j,ee.mode,se,null),j.return=ee,j;Ko(ee,j)}return null}function _e(ee,j,se,Te){var Qe=j!==null?j.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Qe!==null?null:F(ee,j,""+se,Te);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case O:return se.key===Qe?V(ee,j,se,Te):null;case U:return se.key===Qe?oe(ee,j,se,Te):null;case Q:return Qe=se._init,_e(ee,j,Qe(se._payload),Te)}if(_t(se)||ne(se))return Qe!==null?null:xe(ee,j,se,Te,null);Ko(ee,se)}return null}function Be(ee,j,se,Te,Qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(se)||null,F(j,ee,""+Te,Qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case O:return ee=ee.get(Te.key===null?se:Te.key)||null,V(j,ee,Te,Qe);case U:return ee=ee.get(Te.key===null?se:Te.key)||null,oe(j,ee,Te,Qe);case Q:var rt=Te._init;return Be(ee,j,se,rt(Te._payload),Qe)}if(_t(Te)||ne(Te))return ee=ee.get(se)||null,xe(j,ee,Te,Qe,null);Ko(j,Te)}return null}function je(ee,j,se,Te){for(var Qe=null,rt=null,st=j,ct=j=0,on=null;st!==null&&ct<se.length;ct++){st.index>ct?(on=st,st=null):on=st.sibling;var Ct=_e(ee,st,se[ct],Te);if(Ct===null){st===null&&(st=on);break}n&&st&&Ct.alternate===null&&i(ee,st),j=m(Ct,j,ct),rt===null?Qe=Ct:rt.sibling=Ct,rt=Ct,st=on}if(ct===se.length)return a(ee,st),Ht&&jr(ee,ct),Qe;if(st===null){for(;ct<se.length;ct++)st=ye(ee,se[ct],Te),st!==null&&(j=m(st,j,ct),rt===null?Qe=st:rt.sibling=st,rt=st);return Ht&&jr(ee,ct),Qe}for(st=u(ee,st);ct<se.length;ct++)on=Be(st,ee,ct,se[ct],Te),on!==null&&(n&&on.alternate!==null&&st.delete(on.key===null?ct:on.key),j=m(on,j,ct),rt===null?Qe=on:rt.sibling=on,rt=on);return n&&st.forEach(function(Cr){return i(ee,Cr)}),Ht&&jr(ee,ct),Qe}function Ke(ee,j,se,Te){var Qe=ne(se);if(typeof Qe!="function")throw Error(t(150));if(se=Qe.call(se),se==null)throw Error(t(151));for(var rt=Qe=null,st=j,ct=j=0,on=null,Ct=se.next();st!==null&&!Ct.done;ct++,Ct=se.next()){st.index>ct?(on=st,st=null):on=st.sibling;var Cr=_e(ee,st,Ct.value,Te);if(Cr===null){st===null&&(st=on);break}n&&st&&Cr.alternate===null&&i(ee,st),j=m(Cr,j,ct),rt===null?Qe=Cr:rt.sibling=Cr,rt=Cr,st=on}if(Ct.done)return a(ee,st),Ht&&jr(ee,ct),Qe;if(st===null){for(;!Ct.done;ct++,Ct=se.next())Ct=ye(ee,Ct.value,Te),Ct!==null&&(j=m(Ct,j,ct),rt===null?Qe=Ct:rt.sibling=Ct,rt=Ct);return Ht&&jr(ee,ct),Qe}for(st=u(ee,st);!Ct.done;ct++,Ct=se.next())Ct=Be(st,ee,ct,Ct.value,Te),Ct!==null&&(n&&Ct.alternate!==null&&st.delete(Ct.key===null?ct:Ct.key),j=m(Ct,j,ct),rt===null?Qe=Ct:rt.sibling=Ct,rt=Ct);return n&&st.forEach(function(H_){return i(ee,H_)}),Ht&&jr(ee,ct),Qe}function Zt(ee,j,se,Te){if(typeof se=="object"&&se!==null&&se.type===B&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case O:e:{for(var Qe=se.key,rt=j;rt!==null;){if(rt.key===Qe){if(Qe=se.type,Qe===B){if(rt.tag===7){a(ee,rt.sibling),j=f(rt,se.props.children),j.return=ee,ee=j;break e}}else if(rt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&mp(Qe)===rt.type){a(ee,rt.sibling),j=f(rt,se.props),j.ref=Ua(ee,rt,se),j.return=ee,ee=j;break e}a(ee,rt);break}else i(ee,rt);rt=rt.sibling}se.type===B?(j=Qr(se.props.children,ee.mode,Te,se.key),j.return=ee,ee=j):(Te=yl(se.type,se.key,se.props,null,ee.mode,Te),Te.ref=Ua(ee,j,se),Te.return=ee,ee=Te)}return w(ee);case U:e:{for(rt=se.key;j!==null;){if(j.key===rt)if(j.tag===4&&j.stateNode.containerInfo===se.containerInfo&&j.stateNode.implementation===se.implementation){a(ee,j.sibling),j=f(j,se.children||[]),j.return=ee,ee=j;break e}else{a(ee,j);break}else i(ee,j);j=j.sibling}j=Jc(se,ee.mode,Te),j.return=ee,ee=j}return w(ee);case Q:return rt=se._init,Zt(ee,j,rt(se._payload),Te)}if(_t(se))return je(ee,j,se,Te);if(ne(se))return Ke(ee,j,se,Te);Ko(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,j!==null&&j.tag===6?(a(ee,j.sibling),j=f(j,se),j.return=ee,ee=j):(a(ee,j),j=Zc(se,ee.mode,Te),j.return=ee,ee=j),w(ee)):a(ee,j)}return Zt}var bs=gp(!0),vp=gp(!1),Zo=gr(null),Jo=null,Ps=null,oc=null;function lc(){oc=Ps=Jo=null}function uc(n){var i=Zo.current;zt(Zo),n._currentValue=i}function cc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ls(n,i){Jo=n,oc=Ps=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(In=!0),n.firstContext=null)}function Jn(n){var i=n._currentValue;if(oc!==n)if(n={context:n,memoizedValue:i,next:null},Ps===null){if(Jo===null)throw Error(t(308));Ps=n,Jo.dependencies={lanes:0,firstContext:n}}else Ps=Ps.next=n;return i}var Xr=null;function dc(n){Xr===null?Xr=[n]:Xr.push(n)}function _p(n,i,a,u){var f=i.interleaved;return f===null?(a.next=a,dc(i)):(a.next=f.next,f.next=a),i.interleaved=a,ji(n,u)}function ji(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var xr=!1;function fc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,ji(n,a)}return f=u.interleaved,f===null?(i.next=i,dc(u)):(i.next=f.next,f.next=i),u.interleaved=i,ji(n,a)}function Qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Lt(n,a)}}function yp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function el(n,i,a,u){var f=n.updateQueue;xr=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,F=f.shared.pending;if(F!==null){f.shared.pending=null;var V=F,oe=V.next;V.next=null,w===null?m=oe:w.next=oe,w=V;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,F=xe.lastBaseUpdate,F!==w&&(F===null?xe.firstBaseUpdate=oe:F.next=oe,xe.lastBaseUpdate=V))}if(m!==null){var ye=f.baseState;w=0,xe=oe=V=null,F=m;do{var _e=F.lane,Be=F.eventTime;if((u&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=n,Ke=F;switch(_e=i,Be=a,Ke.tag){case 1:if(je=Ke.payload,typeof je=="function"){ye=je.call(Be,ye,_e);break e}ye=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ke.payload,_e=typeof je=="function"?je.call(Be,ye,_e):je,_e==null)break e;ye=ce({},ye,_e);break e;case 2:xr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,_e=f.effects,_e===null?f.effects=[F]:_e.push(F))}else Be={eventTime:Be,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},xe===null?(oe=xe=Be,V=ye):xe=xe.next=Be,w|=_e;if(F=F.next,F===null){if(F=f.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(xe===null&&(V=ye),f.baseState=V,f.firstBaseUpdate=oe,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Yr|=w,n.lanes=w,n.memoizedState=ye}}function Sp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var Fa={},Mi=gr(Fa),Oa=gr(Fa),ka=gr(Fa);function qr(n){if(n===Fa)throw Error(t(174));return n}function hc(n,i){switch(kt(ka,i),kt(Oa,n),kt(Mi,Fa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ve(i,n)}zt(Mi),kt(Mi,i)}function Ns(){zt(Mi),zt(Oa),zt(ka)}function Mp(n){qr(ka.current);var i=qr(Mi.current),a=ve(i,n.type);i!==a&&(kt(Oa,n),kt(Mi,a))}function pc(n){Oa.current===n&&(zt(Mi),zt(Oa))}var Gt=gr(0);function tl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mc=[];function gc(){for(var n=0;n<mc.length;n++)mc[n]._workInProgressVersionPrimary=null;mc.length=0}var nl=P.ReactCurrentDispatcher,vc=P.ReactCurrentBatchConfig,$r=0,Wt=null,en=null,sn=null,il=!1,Ba=!1,za=0,c_=0;function pn(){throw Error(t(321))}function _c(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!li(n[a],i[a]))return!1;return!0}function xc(n,i,a,u,f,m){if($r=m,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,nl.current=n===null||n.memoizedState===null?p_:m_,n=a(u,f),Ba){m=0;do{if(Ba=!1,za=0,25<=m)throw Error(t(301));m+=1,sn=en=null,i.updateQueue=null,nl.current=g_,n=a(u,f)}while(Ba)}if(nl.current=al,i=en!==null&&en.next!==null,$r=0,sn=en=Wt=null,il=!1,i)throw Error(t(300));return n}function yc(){var n=za!==0;return za=0,n}function Ei(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Wt.memoizedState=sn=n:sn=sn.next=n,sn}function Qn(){if(en===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=sn===null?Wt.memoizedState:sn.next;if(i!==null)sn=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},sn===null?Wt.memoizedState=sn=n:sn=sn.next=n}return sn}function Va(n,i){return typeof i=="function"?i(n):i}function Sc(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=en,f=u.baseQueue,m=a.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}u.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,u=u.baseState;var F=w=null,V=null,oe=m;do{var xe=oe.lane;if(($r&xe)===xe)V!==null&&(V=V.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),u=oe.hasEagerState?oe.eagerState:n(u,oe.action);else{var ye={lane:xe,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};V===null?(F=V=ye,w=u):V=V.next=ye,Wt.lanes|=xe,Yr|=xe}oe=oe.next}while(oe!==null&&oe!==m);V===null?w=u:V.next=F,li(u,i.memoizedState)||(In=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=V,a.lastRenderedState=u}if(n=a.interleaved,n!==null){f=n;do m=f.lane,Wt.lanes|=m,Yr|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Mc(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do m=n(m,w.action),w=w.next;while(w!==f);li(m,i.memoizedState)||(In=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Ep(){}function wp(n,i){var a=Wt,u=Qn(),f=i(),m=!li(u.memoizedState,f);if(m&&(u.memoizedState=f,In=!0),u=u.queue,Ec(Cp.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Ha(9,Ap.bind(null,a,u,f,i),void 0,null),an===null)throw Error(t(349));($r&30)!==0||Tp(a,i,f)}return f}function Tp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ap(n,i,a,u){i.value=a,i.getSnapshot=u,Rp(i)&&bp(n)}function Cp(n,i,a){return a(function(){Rp(i)&&bp(n)})}function Rp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!li(n,a)}catch{return!0}}function bp(n){var i=ji(n,1);i!==null&&hi(i,n,1,-1)}function Pp(n){var i=Ei();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},i.queue=n,n=n.dispatch=h_.bind(null,Wt,n),[i.memoizedState,n]}function Ha(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Lp(){return Qn().memoizedState}function rl(n,i,a,u){var f=Ei();Wt.flags|=n,f.memoizedState=Ha(1|i,a,void 0,u===void 0?null:u)}function sl(n,i,a,u){var f=Qn();u=u===void 0?null:u;var m=void 0;if(en!==null){var w=en.memoizedState;if(m=w.destroy,u!==null&&_c(u,w.deps)){f.memoizedState=Ha(i,a,m,u);return}}Wt.flags|=n,f.memoizedState=Ha(1|i,a,m,u)}function Np(n,i){return rl(8390656,8,n,i)}function Ec(n,i){return sl(2048,8,n,i)}function Ip(n,i){return sl(4,2,n,i)}function Dp(n,i){return sl(4,4,n,i)}function Up(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Fp(n,i,a){return a=a!=null?a.concat([n]):null,sl(4,4,Up.bind(null,i,n),a)}function wc(){}function Op(n,i){var a=Qn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&_c(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function kp(n,i){var a=Qn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&_c(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Bp(n,i,a){return($r&21)===0?(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=a):(li(a,i)||(a=bn(),Wt.lanes|=a,Yr|=a,n.baseState=!0),i)}function d_(n,i){var a=ut;ut=a!==0&&4>a?a:4,n(!0);var u=vc.transition;vc.transition={};try{n(!1),i()}finally{ut=a,vc.transition=u}}function zp(){return Qn().memoizedState}function f_(n,i,a){var u=wr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Vp(n))Hp(i,a);else if(a=_p(n,i,a,u),a!==null){var f=Tn();hi(a,n,u,f),Gp(a,i,u)}}function h_(n,i,a){var u=wr(n),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vp(n))Hp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,F=m(w,a);if(f.hasEagerState=!0,f.eagerState=F,li(F,w)){var V=i.interleaved;V===null?(f.next=f,dc(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}a=_p(n,i,f,u),a!==null&&(f=Tn(),hi(a,n,u,f),Gp(a,i,u))}}function Vp(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function Hp(n,i){Ba=il=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Gp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Lt(n,a)}}var al={readContext:Jn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},p_={readContext:Jn,useCallback:function(n,i){return Ei().memoizedState=[n,i===void 0?null:i],n},useContext:Jn,useEffect:Np,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,rl(4194308,4,Up.bind(null,i,n),a)},useLayoutEffect:function(n,i){return rl(4194308,4,n,i)},useInsertionEffect:function(n,i){return rl(4,2,n,i)},useMemo:function(n,i){var a=Ei();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ei();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=f_.bind(null,Wt,n),[u.memoizedState,n]},useRef:function(n){var i=Ei();return n={current:n},i.memoizedState=n},useState:Pp,useDebugValue:wc,useDeferredValue:function(n){return Ei().memoizedState=n},useTransition:function(){var n=Pp(!1),i=n[0];return n=d_.bind(null,n[1]),Ei().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Wt,f=Ei();if(Ht){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),an===null)throw Error(t(349));($r&30)!==0||Tp(u,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Np(Cp.bind(null,u,m,n),[n]),u.flags|=2048,Ha(9,Ap.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=Ei(),i=an.identifierPrefix;if(Ht){var a=Wi,u=Gi;a=(u&~(1<<32-it(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=za++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=c_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},m_={readContext:Jn,useCallback:Op,useContext:Jn,useEffect:Ec,useImperativeHandle:Fp,useInsertionEffect:Ip,useLayoutEffect:Dp,useMemo:kp,useReducer:Sc,useRef:Lp,useState:function(){return Sc(Va)},useDebugValue:wc,useDeferredValue:function(n){var i=Qn();return Bp(i,en.memoizedState,n)},useTransition:function(){var n=Sc(Va)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Ep,useSyncExternalStore:wp,useId:zp,unstable_isNewReconciler:!1},g_={readContext:Jn,useCallback:Op,useContext:Jn,useEffect:Ec,useImperativeHandle:Fp,useInsertionEffect:Ip,useLayoutEffect:Dp,useMemo:kp,useReducer:Mc,useRef:Lp,useState:function(){return Mc(Va)},useDebugValue:wc,useDeferredValue:function(n){var i=Qn();return en===null?i.memoizedState=n:Bp(i,en.memoizedState,n)},useTransition:function(){var n=Mc(Va)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Ep,useSyncExternalStore:wp,useId:zp,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Tc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ol={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Tn(),f=wr(n),m=Xi(u,f);m.payload=i,a!=null&&(m.callback=a),i=yr(n,m,f),i!==null&&(hi(i,n,f,u),Qo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Tn(),f=wr(n),m=Xi(u,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=yr(n,m,f),i!==null&&(hi(i,n,f,u),Qo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Tn(),u=wr(n),f=Xi(a,u);f.tag=2,i!=null&&(f.callback=i),i=yr(n,f,u),i!==null&&(hi(i,n,u,a),Qo(i,n,u))}};function Wp(n,i,a,u,f,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,w):i.prototype&&i.prototype.isPureReactComponent?!Ra(a,u)||!Ra(f,m):!0}function jp(n,i,a){var u=!1,f=vr,m=i.contextType;return typeof m=="object"&&m!==null?m=Jn(m):(f=Nn(i)?Gr:hn.current,u=i.contextTypes,m=(u=u!=null)?Ts(n,f):vr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ol,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function Xp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&ol.enqueueReplaceState(i,i.state,null)}function Ac(n,i,a,u){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},fc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Jn(m):(m=Nn(i)?Gr:hn.current,f.context=Ts(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Tc(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ol.enqueueReplaceState(f,f.state,null),el(n,a,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,i){try{var a="",u=i;do a+=De(u),u=u.return;while(u);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function Cc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Rc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var v_=typeof WeakMap=="function"?WeakMap:Map;function qp(n,i,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){pl||(pl=!0,Gc=u),Rc(n,i)},a}function $p(n,i,a){a=Xi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;a.payload=function(){return u(f)},a.callback=function(){Rc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Rc(n,i),typeof u!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Yp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new v_;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(f.add(a),n=L_.bind(null,n,i,a),i.then(n,n))}function Kp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Zp(n,i,a,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Xi(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var __=P.ReactCurrentOwner,In=!1;function wn(n,i,a,u){i.child=n===null?vp(i,null,a,u):bs(i,n.child,a,u)}function Jp(n,i,a,u,f){a=a.render;var m=i.ref;return Ls(i,f),u=xc(n,i,a,u,m,f),a=yc(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,qi(n,i,f)):(Ht&&a&&nc(i),i.flags|=1,wn(n,i,u,f),i.child)}function Qp(n,i,a,u,f){if(n===null){var m=a.type;return typeof m=="function"&&!Kc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,em(n,i,m,u,f)):(n=yl(a.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(w,u)&&n.ref===i.ref)return qi(n,i,f)}return i.flags|=1,n=Ar(m,u),n.ref=i.ref,n.return=i,i.child=n}function em(n,i,a,u,f){if(n!==null){var m=n.memoizedProps;if(Ra(m,u)&&n.ref===i.ref)if(In=!1,i.pendingProps=u=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(In=!0);else return i.lanes=n.lanes,qi(n,i,f)}return bc(n,i,a,u,f)}function tm(n,i,a){var u=i.pendingProps,f=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Us,Hn),Hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Us,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,kt(Us,Hn),Hn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,kt(Us,Hn),Hn|=u;return wn(n,i,f,a),i.child}function nm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function bc(n,i,a,u,f){var m=Nn(a)?Gr:hn.current;return m=Ts(i,m),Ls(i,f),a=xc(n,i,a,u,m,f),u=yc(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,qi(n,i,f)):(Ht&&u&&nc(i),i.flags|=1,wn(n,i,a,f),i.child)}function im(n,i,a,u,f){if(Nn(a)){var m=!0;jo(i)}else m=!1;if(Ls(i,f),i.stateNode===null)ul(n,i),jp(i,a,u),Ac(i,a,u,f),u=!0;else if(n===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var V=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=Jn(oe):(oe=Nn(a)?Gr:hn.current,oe=Ts(i,oe));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==u||V!==oe)&&Xp(i,w,u,oe),xr=!1;var _e=i.memoizedState;w.state=_e,el(i,u,w,f),V=i.memoizedState,F!==u||_e!==V||Ln.current||xr?(typeof xe=="function"&&(Tc(i,a,xe,u),V=i.memoizedState),(F=xr||Wp(i,a,F,u,_e,V,oe))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),w.props=u,w.state=V,w.context=oe,u=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,xp(n,i),F=i.memoizedProps,oe=i.type===i.elementType?F:ci(i.type,F),w.props=oe,ye=i.pendingProps,_e=w.context,V=a.contextType,typeof V=="object"&&V!==null?V=Jn(V):(V=Nn(a)?Gr:hn.current,V=Ts(i,V));var Be=a.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==ye||_e!==V)&&Xp(i,w,u,V),xr=!1,_e=i.memoizedState,w.state=_e,el(i,u,w,f);var je=i.memoizedState;F!==ye||_e!==je||Ln.current||xr?(typeof Be=="function"&&(Tc(i,a,Be,u),je=i.memoizedState),(oe=xr||Wp(i,a,oe,u,_e,je,V)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,je,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,je,V)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=je),w.props=u,w.state=je,w.context=V,u=oe):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),u=!1)}return Pc(n,i,a,u,m,f)}function Pc(n,i,a,u,f,m){nm(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return f&&lp(i,a,!1),qi(n,i,m);u=i.stateNode,__.current=i;var F=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=bs(i,n.child,null,m),i.child=bs(i,null,F,m)):wn(n,i,F,m),i.memoizedState=u.state,f&&lp(i,a,!0),i.child}function rm(n){var i=n.stateNode;i.pendingContext?ap(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ap(n,i.context,!1),hc(n,i.containerInfo)}function sm(n,i,a,u,f){return Rs(),ac(f),i.flags|=256,wn(n,i,a,u),i.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function am(n,i,a){var u=i.pendingProps,f=Gt.current,m=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=n!==null&&n.memoizedState===null?!1:(f&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),kt(Gt,f&1),n===null)return sc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,m?(u=i.mode,m=i.child,w={mode:"hidden",children:w},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=Sl(w,u,0,null),n=Qr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Nc(a),i.memoizedState=Lc,n):Ic(i,w));if(f=n.memoizedState,f!==null&&(F=f.dehydrated,F!==null))return x_(n,i,w,u,F,f,a);if(m){m=u.fallback,w=i.mode,f=n.child,F=f.sibling;var V={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=Ar(f,V),u.subtreeFlags=f.subtreeFlags&14680064),F!==null?m=Ar(F,m):(m=Qr(m,w,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,w=n.child.memoizedState,w=w===null?Nc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=Lc,u}return m=n.child,n=m.sibling,u=Ar(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Ic(n,i){return i=Sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ll(n,i,a,u){return u!==null&&ac(u),bs(i,n.child,null,a),n=Ic(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function x_(n,i,a,u,f,m,w){if(a)return i.flags&256?(i.flags&=-257,u=Cc(Error(t(422))),ll(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,f=i.mode,u=Sl({mode:"visible",children:u.children},f,0,null),m=Qr(m,f,w,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&bs(i,n.child,null,w),i.child.memoizedState=Nc(w),i.memoizedState=Lc,m);if((i.mode&1)===0)return ll(n,i,w,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var F=u.dgst;return u=F,m=Error(t(419)),u=Cc(m,u,void 0),ll(n,i,w,u)}if(F=(w&n.childLanes)!==0,In||F){if(u=an,u!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,ji(n,f),hi(u,n,f,-1))}return Yc(),u=Cc(Error(t(421))),ll(n,i,w,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=N_.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Vn=mr(f.nextSibling),zn=i,Ht=!0,ui=null,n!==null&&(Kn[Zn++]=Gi,Kn[Zn++]=Wi,Kn[Zn++]=Wr,Gi=n.id,Wi=n.overflow,Wr=i),i=Ic(i,u.children),i.flags|=4096,i)}function om(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),cc(n.return,i,a)}function Dc(n,i,a,u,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=f)}function lm(n,i,a){var u=i.pendingProps,f=u.revealOrder,m=u.tail;if(wn(n,i,u.children,a),u=Gt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&om(n,a,i);else if(n.tag===19)om(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(Gt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&tl(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Dc(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&tl(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Dc(i,!0,a,null,m);break;case"together":Dc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ul(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function qi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ar(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ar(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function y_(n,i,a){switch(i.tag){case 3:rm(i),Rs();break;case 5:Mp(i);break;case 1:Nn(i.type)&&jo(i);break;case 4:hc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;kt(Zo,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?am(n,i,a):(kt(Gt,Gt.current&1),n=qi(n,i,a),n!==null?n.sibling:null);kt(Gt,Gt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return lm(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),kt(Gt,Gt.current),u)break;return null;case 22:case 23:return i.lanes=0,tm(n,i,a)}return qi(n,i,a)}var um,Uc,cm,dm;um=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Uc=function(){},cm=function(n,i,a,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,qr(Mi.current);var m=null;switch(a){case"input":f=Ye(n,f),u=Ye(n,u),m=[];break;case"select":f=ce({},f,{value:void 0}),u=ce({},u,{value:void 0}),m=[];break;case"textarea":f=Xe(n,f),u=Xe(n,u),m=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ho)}Ge(a,u);var w;a=null;for(oe in f)if(!u.hasOwnProperty(oe)&&f.hasOwnProperty(oe)&&f[oe]!=null)if(oe==="style"){var F=f[oe];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in u){var V=u[oe];if(F=f!=null?f[oe]:void 0,u.hasOwnProperty(oe)&&V!==F&&(V!=null||F!=null))if(oe==="style")if(F){for(w in F)!F.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in V)V.hasOwnProperty(w)&&F[w]!==V[w]&&(a||(a={}),a[w]=V[w])}else a||(m||(m=[]),m.push(oe,a)),a=V;else oe==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(m=m||[]).push(oe,V)):oe==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(oe,""+V):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(V!=null&&oe==="onScroll"&&Bt("scroll",n),m||F===V||(m=[])):(m=m||[]).push(oe,V))}a&&(m=m||[]).push("style",a);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},dm=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ga(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function S_(n,i,a){var u=i.pendingProps;switch(ic(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Nn(i.type)&&Wo(),mn(i),null;case 3:return u=i.stateNode,Ns(),zt(Ln),zt(hn),gc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Yo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(Xc(ui),ui=null))),Uc(n,i),mn(i),null;case 5:pc(i);var f=qr(ka.current);if(a=i.type,n!==null&&i.stateNode!=null)cm(n,i,a,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=qr(Mi.current),Yo(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[Si]=i,u[Ia]=m,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",u),Bt("close",u);break;case"iframe":case"object":case"embed":Bt("load",u);break;case"video":case"audio":for(f=0;f<Pa.length;f++)Bt(Pa[f],u);break;case"source":Bt("error",u);break;case"img":case"image":case"link":Bt("error",u),Bt("load",u);break;case"details":Bt("toggle",u);break;case"input":ft(u,m),Bt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",u);break;case"textarea":I(u,m),Bt("invalid",u)}Ge(a,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var F=m[w];w==="children"?typeof F=="string"?u.textContent!==F&&(m.suppressHydrationWarning!==!0&&Vo(u.textContent,F,n),f=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Vo(u.textContent,F,n),f=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Bt("scroll",u)}switch(a){case"input":et(u),H(u,m,!0);break;case"textarea":et(u),q(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ho)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ge(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[Si]=i,n[Ia]=u,um(n,i,!1,!1),i.stateNode=n;e:{switch(w=Fe(a,u),a){case"dialog":Bt("cancel",n),Bt("close",n),f=u;break;case"iframe":case"object":case"embed":Bt("load",n),f=u;break;case"video":case"audio":for(f=0;f<Pa.length;f++)Bt(Pa[f],n);f=u;break;case"source":Bt("error",n),f=u;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),f=u;break;case"details":Bt("toggle",n),f=u;break;case"input":ft(n,u),f=Ye(n,u),Bt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=ce({},u,{value:void 0}),Bt("invalid",n);break;case"textarea":I(n,u),f=Xe(n,u),Bt("invalid",n);break;default:f=u}Ge(a,f),F=f;for(m in F)if(F.hasOwnProperty(m)){var V=F[m];m==="style"?Ae(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&He(n,V)):m==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Ce(n,V):typeof V=="number"&&Ce(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Bt("scroll",n):V!=null&&L(n,m,V,w))}switch(a){case"input":et(n),H(n,u,!1);break;case"textarea":et(n),q(n);break;case"option":u.value!=null&&n.setAttribute("value",""+de(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?Et(n,!!u.multiple,m,!1):u.defaultValue!=null&&Et(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ho)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)dm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=qr(ka.current),qr(Mi.current),Yo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Si]=i,(m=u.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:Vo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vo(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Si]=i,i.stateNode=u}return mn(i),null;case 13:if(zt(Gt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)pp(),Rs(),i.flags|=98560,m=!1;else if(m=Yo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Si]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else ui!==null&&(Xc(ui),ui=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?tn===0&&(tn=3):Yc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return Ns(),Uc(n,i),n===null&&La(i.stateNode.containerInfo),mn(i),null;case 10:return uc(i.type._context),mn(i),null;case 17:return Nn(i.type)&&Wo(),mn(i),null;case 19:if(zt(Gt),m=i.memoizedState,m===null)return mn(i),null;if(u=(i.flags&128)!==0,w=m.rendering,w===null)if(u)Ga(m,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=tl(n),w!==null){for(i.flags|=128,Ga(m,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Gt,Gt.current&1|2),i.child}n=n.sibling}m.tail!==null&&R()>Fs&&(i.flags|=128,u=!0,Ga(m,!1),i.lanes=4194304)}else{if(!u)if(n=tl(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ga(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ht)return mn(i),null}else 2*R()-m.renderingStartTime>Fs&&a!==1073741824&&(i.flags|=128,u=!0,Ga(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=R(),i.sibling=null,a=Gt.current,kt(Gt,u?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return $c(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function M_(n,i){switch(ic(i),i.tag){case 1:return Nn(i.type)&&Wo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ns(),zt(Ln),zt(hn),gc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return pc(i),null;case 13:if(zt(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Gt),null;case 4:return Ns(),null;case 10:return uc(i.type._context),null;case 22:case 23:return $c(),null;case 24:return null;default:return null}}var cl=!1,gn=!1,E_=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){qt(n,i,u)}else a.current=null}function Fc(n,i,a){try{a()}catch(u){qt(n,i,u)}}var fm=!1;function w_(n,i){if($u=Po,n=Wh(),zu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,F=-1,V=-1,oe=0,xe=0,ye=n,_e=null;t:for(;;){for(var Be;ye!==a||f!==0&&ye.nodeType!==3||(F=w+f),ye!==m||u!==0&&ye.nodeType!==3||(V=w+u),ye.nodeType===3&&(w+=ye.nodeValue.length),(Be=ye.firstChild)!==null;)_e=ye,ye=Be;for(;;){if(ye===n)break t;if(_e===a&&++oe===f&&(F=w),_e===m&&++xe===u&&(V=w),(Be=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Be}a=F===-1||V===-1?null:{start:F,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yu={focusedElem:n,selectionRange:a},Po=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ke=je.memoizedProps,Zt=je.memoizedState,ee=i.stateNode,j=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:ci(i.type,Ke),Zt);ee.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){qt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return je=fm,fm=!1,je}function Wa(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&Fc(i,a,m)}f=f.next}while(f!==u)}}function dl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Oc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function hm(n){var i=n.alternate;i!==null&&(n.alternate=null,hm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Si],delete i[Ia],delete i[Qu],delete i[a_],delete i[o_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pm(n){return n.tag===5||n.tag===3||n.tag===4}function mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ho));else if(u!==4&&(n=n.child,n!==null))for(kc(n,i,a),n=n.sibling;n!==null;)kc(n,i,a),n=n.sibling}function Bc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Bc(n,i,a),n=n.sibling;n!==null;)Bc(n,i,a),n=n.sibling}var un=null,di=!1;function Sr(n,i,a){for(a=a.child;a!==null;)gm(n,i,a),a=a.sibling}function gm(n,i,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Pe,a)}catch{}switch(a.tag){case 5:gn||Ds(a,i);case 6:var u=un,f=di;un=null,Sr(n,i,a),un=u,di=f,un!==null&&(di?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(di?(n=un,a=a.stateNode,n.nodeType===8?Ju(n.parentNode,a):n.nodeType===1&&Ju(n,a),Ma(n)):Ju(un,a.stateNode));break;case 4:u=un,f=di,un=a.stateNode.containerInfo,di=!0,Sr(n,i,a),un=u,di=f;break;case 0:case 11:case 14:case 15:if(!gn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&Fc(a,i,w),f=f.next}while(f!==u)}Sr(n,i,a);break;case 1:if(!gn&&(Ds(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(F){qt(a,i,F)}Sr(n,i,a);break;case 21:Sr(n,i,a);break;case 22:a.mode&1?(gn=(u=gn)||a.memoizedState!==null,Sr(n,i,a),gn=u):Sr(n,i,a);break;default:Sr(n,i,a)}}function vm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new E_),i.forEach(function(u){var f=I_.bind(null,n,u);a.has(u)||(a.add(u),u.then(f,f))})}}function fi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var m=n,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:un=F.stateNode,di=!1;break e;case 3:un=F.stateNode.containerInfo,di=!0;break e;case 4:un=F.stateNode.containerInfo,di=!0;break e}F=F.return}if(un===null)throw Error(t(160));gm(m,w,f),un=null,di=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(oe){qt(f,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)_m(i,n),i=i.sibling}function _m(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(i,n),wi(n),u&4){try{Wa(3,n,n.return),dl(3,n)}catch(Ke){qt(n,n.return,Ke)}try{Wa(5,n,n.return)}catch(Ke){qt(n,n.return,Ke)}}break;case 1:fi(i,n),wi(n),u&512&&a!==null&&Ds(a,a.return);break;case 5:if(fi(i,n),wi(n),u&512&&a!==null&&Ds(a,a.return),n.flags&32){var f=n.stateNode;try{Ce(f,"")}catch(Ke){qt(n,n.return,Ke)}}if(u&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&at(f,m),Fe(F,w);var oe=Fe(F,m);for(w=0;w<V.length;w+=2){var xe=V[w],ye=V[w+1];xe==="style"?Ae(f,ye):xe==="dangerouslySetInnerHTML"?He(f,ye):xe==="children"?Ce(f,ye):L(f,xe,ye,oe)}switch(F){case"input":Ut(f,m);break;case"textarea":E(f,m);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Be=m.value;Be!=null?Et(f,!!m.multiple,Be,!1):_e!==!!m.multiple&&(m.defaultValue!=null?Et(f,!!m.multiple,m.defaultValue,!0):Et(f,!!m.multiple,m.multiple?[]:"",!1))}f[Ia]=m}catch(Ke){qt(n,n.return,Ke)}}break;case 6:if(fi(i,n),wi(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Ke){qt(n,n.return,Ke)}}break;case 3:if(fi(i,n),wi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ma(i.containerInfo)}catch(Ke){qt(n,n.return,Ke)}break;case 4:fi(i,n),wi(n);break;case 13:fi(i,n),wi(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Hc=R())),u&4&&vm(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(oe=gn)||xe,fi(i,n),gn=oe):fi(i,n),wi(n),u&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!xe&&(n.mode&1)!==0)for(Ve=n,xe=n.child;xe!==null;){for(ye=Ve=xe;Ve!==null;){switch(_e=Ve,Be=_e.child,_e.tag){case 0:case 11:case 14:case 15:Wa(4,_e,_e.return);break;case 1:Ds(_e,_e.return);var je=_e.stateNode;if(typeof je.componentWillUnmount=="function"){u=_e,a=_e.return;try{i=u,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ke){qt(u,a,Ke)}}break;case 5:Ds(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Sm(ye);continue}}Be!==null?(Be.return=_e,Ve=Be):Sm(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{f=ye.stateNode,oe?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=ye.stateNode,V=ye.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=Se("display",w))}catch(Ke){qt(n,n.return,Ke)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=oe?"":ye.memoizedProps}catch(Ke){qt(n,n.return,Ke)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:fi(i,n),wi(n),u&4&&vm(n);break;case 21:break;default:fi(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(pm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(Ce(f,""),u.flags&=-33);var m=mm(n);Bc(n,m,f);break;case 3:case 4:var w=u.stateNode.containerInfo,F=mm(n);kc(n,F,w);break;default:throw Error(t(161))}}catch(V){qt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function T_(n,i,a){Ve=n,xm(n)}function xm(n,i,a){for(var u=(n.mode&1)!==0;Ve!==null;){var f=Ve,m=f.child;if(f.tag===22&&u){var w=f.memoizedState!==null||cl;if(!w){var F=f.alternate,V=F!==null&&F.memoizedState!==null||gn;F=cl;var oe=gn;if(cl=w,(gn=V)&&!oe)for(Ve=f;Ve!==null;)w=Ve,V=w.child,w.tag===22&&w.memoizedState!==null?Mm(f):V!==null?(V.return=w,Ve=V):Mm(f);for(;m!==null;)Ve=m,xm(m),m=m.sibling;Ve=f,cl=F,gn=oe}ym(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ve=m):ym(n)}}function ym(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||dl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(a===null)u.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Sp(i,m,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Sp(i,w,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var xe=oe.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Ma(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&Oc(i)}catch(_e){qt(i,i.return,_e)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Sm(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Mm(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{dl(4,i)}catch(V){qt(i,a,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(V){qt(i,f,V)}}var m=i.return;try{Oc(i)}catch(V){qt(i,m,V)}break;case 5:var w=i.return;try{Oc(i)}catch(V){qt(i,w,V)}}}catch(V){qt(i,i.return,V)}if(i===n){Ve=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Ve=F;break}Ve=i.return}}var A_=Math.ceil,fl=P.ReactCurrentDispatcher,zc=P.ReactCurrentOwner,ei=P.ReactCurrentBatchConfig,Tt=0,an=null,Jt=null,cn=0,Hn=0,Us=gr(0),tn=0,ja=null,Yr=0,hl=0,Vc=0,Xa=null,Dn=null,Hc=0,Fs=1/0,$i=null,pl=!1,Gc=null,Mr=null,ml=!1,Er=null,gl=0,qa=0,Wc=null,vl=-1,_l=0;function Tn(){return(Tt&6)!==0?R():vl!==-1?vl:vl=R()}function wr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&cn!==0?cn&-cn:u_.transition!==null?(_l===0&&(_l=bn()),_l):(n=ut,n!==0||(n=window.event,n=n===void 0?16:wh(n.type)),n)}function hi(n,i,a,u){if(50<qa)throw qa=0,Wc=null,Error(t(185));kn(n,a,u),((Tt&2)===0||n!==an)&&(n===an&&((Tt&2)===0&&(hl|=a),tn===4&&Tr(n,cn)),Un(n,u),a===1&&Tt===0&&(i.mode&1)===0&&(Fs=R()+500,Xo&&_r()))}function Un(n,i){var a=n.callbackNode;En(n,i);var u=Yt(n,n===an?cn:0);if(u===0)a!==null&&Co(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Co(a),i===1)n.tag===0?l_(wm.bind(null,n)):up(wm.bind(null,n)),r_(function(){(Tt&6)===0&&_r()}),a=null;else{switch(oi(u)){case 1:a=ue;break;case 4:a=ae;break;case 16:a=ie;break;case 536870912:a=ze;break;default:a=ie}a=Nm(a,Em.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Em(n,i){if(vl=-1,_l=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Os()&&n.callbackNode!==a)return null;var u=Yt(n,n===an?cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=xl(n,u);else{i=u;var f=Tt;Tt|=2;var m=Am();(an!==n||cn!==i)&&($i=null,Fs=R()+500,Zr(n,i));do try{b_();break}catch(F){Tm(n,F)}while(!0);lc(),fl.current=m,Tt=f,Jt!==null?i=0:(an=null,cn=0,i=tn)}if(i!==0){if(i===2&&(f=xt(n),f!==0&&(u=f,i=jc(n,f))),i===1)throw a=ja,Zr(n,0),Tr(n,u),Un(n,R()),a;if(i===6)Tr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!C_(f)&&(i=xl(n,u),i===2&&(m=xt(n),m!==0&&(u=m,i=jc(n,m))),i===1))throw a=ja,Zr(n,0),Tr(n,u),Un(n,R()),a;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Jr(n,Dn,$i);break;case 3:if(Tr(n,u),(u&130023424)===u&&(i=Hc+500-R(),10<i)){if(Yt(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){Tn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Zu(Jr.bind(null,n,Dn,$i),i);break}Jr(n,Dn,$i);break;case 4:if(Tr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var w=31-it(u);m=1<<w,w=i[w],w>f&&(f=w),u&=~m}if(u=f,u=R()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*A_(u/1960))-u,10<u){n.timeoutHandle=Zu(Jr.bind(null,n,Dn,$i),u);break}Jr(n,Dn,$i);break;case 5:Jr(n,Dn,$i);break;default:throw Error(t(329))}}}return Un(n,R()),n.callbackNode===a?Em.bind(null,n):null}function jc(n,i){var a=Xa;return n.current.memoizedState.isDehydrated&&(Zr(n,i).flags|=256),n=xl(n,i),n!==2&&(i=Dn,Dn=a,i!==null&&Xc(i)),n}function Xc(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function C_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],m=f.getSnapshot;f=f.value;try{if(!li(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(n,i){for(i&=~Vc,i&=~hl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-it(i),u=1<<a;n[a]=-1,i&=~u}}function wm(n){if((Tt&6)!==0)throw Error(t(327));Os();var i=Yt(n,0);if((i&1)===0)return Un(n,R()),null;var a=xl(n,i);if(n.tag!==0&&a===2){var u=xt(n);u!==0&&(i=u,a=jc(n,u))}if(a===1)throw a=ja,Zr(n,0),Tr(n,i),Un(n,R()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Jr(n,Dn,$i),Un(n,R()),null}function qc(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(Fs=R()+500,Xo&&_r())}}function Kr(n){Er!==null&&Er.tag===0&&(Tt&6)===0&&Os();var i=Tt;Tt|=1;var a=ei.transition,u=ut;try{if(ei.transition=null,ut=1,n)return n()}finally{ut=u,ei.transition=a,Tt=i,(Tt&6)===0&&_r()}}function $c(){Hn=Us.current,zt(Us)}function Zr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,i_(a)),Jt!==null)for(a=Jt.return;a!==null;){var u=a;switch(ic(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Wo();break;case 3:Ns(),zt(Ln),zt(hn),gc();break;case 5:pc(u);break;case 4:Ns();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:uc(u.type._context);break;case 22:case 23:$c()}a=a.return}if(an=n,Jt=n=Ar(n.current,null),cn=Hn=i,tn=0,ja=null,Vc=hl=Yr=0,Dn=Xa=null,Xr!==null){for(i=0;i<Xr.length;i++)if(a=Xr[i],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,m=a.pending;if(m!==null){var w=m.next;m.next=f,u.next=w}a.pending=u}Xr=null}return n}function Tm(n,i){do{var a=Jt;try{if(lc(),nl.current=al,il){for(var u=Wt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}il=!1}if($r=0,sn=en=Wt=null,Ba=!1,za=0,zc.current=null,a===null||a.return===null){tn=1,ja=i,Jt=null;break}e:{var m=n,w=a.return,F=a,V=i;if(i=cn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var oe=V,xe=F,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=Kp(w);if(Be!==null){Be.flags&=-257,Zp(Be,w,F,m,i),Be.mode&1&&Yp(m,oe,i),i=Be,V=oe;var je=i.updateQueue;if(je===null){var Ke=new Set;Ke.add(V),i.updateQueue=Ke}else je.add(V);break e}else{if((i&1)===0){Yp(m,oe,i),Yc();break e}V=Error(t(426))}}else if(Ht&&F.mode&1){var Zt=Kp(w);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Zp(Zt,w,F,m,i),ac(Is(V,F));break e}}m=V=Is(V,F),tn!==4&&(tn=2),Xa===null?Xa=[m]:Xa.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=qp(m,V,i);yp(m,ee);break e;case 1:F=V;var j=m.type,se=m.stateNode;if((m.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Mr===null||!Mr.has(se)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=$p(m,F,i);yp(m,Te);break e}}m=m.return}while(m!==null)}Rm(a)}catch(Qe){i=Qe,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function Am(){var n=fl.current;return fl.current=al,n===null?al:n}function Yc(){(tn===0||tn===3||tn===2)&&(tn=4),an===null||(Yr&268435455)===0&&(hl&268435455)===0||Tr(an,cn)}function xl(n,i){var a=Tt;Tt|=2;var u=Am();(an!==n||cn!==i)&&($i=null,Zr(n,i));do try{R_();break}catch(f){Tm(n,f)}while(!0);if(lc(),Tt=a,fl.current=u,Jt!==null)throw Error(t(261));return an=null,cn=0,tn}function R_(){for(;Jt!==null;)Cm(Jt)}function b_(){for(;Jt!==null&&!Au();)Cm(Jt)}function Cm(n){var i=Lm(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?Rm(n):Jt=i,zc.current=null}function Rm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=S_(a,i,Hn),a!==null){Jt=a;return}}else{if(a=M_(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);tn===0&&(tn=5)}function Jr(n,i,a){var u=ut,f=ei.transition;try{ei.transition=null,ut=1,P_(n,i,a,u)}finally{ei.transition=f,ut=u}return null}function P_(n,i,a,u){do Os();while(Er!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(lr(n,m),n===an&&(Jt=an=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ml||(ml=!0,Nm(ie,function(){return Os(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ei.transition,ei.transition=null;var w=ut;ut=1;var F=Tt;Tt|=4,zc.current=null,w_(n,a),_m(a,n),Kv(Yu),Po=!!$u,Yu=$u=null,n.current=a,T_(a),Cu(),Tt=F,ut=w,ei.transition=m}else n.current=a;if(ml&&(ml=!1,Er=n,gl=f),m=n.pendingLanes,m===0&&(Mr=null),tt(a.stateNode),Un(n,R()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(pl)throw pl=!1,n=Gc,Gc=null,n;return(gl&1)!==0&&n.tag!==0&&Os(),m=n.pendingLanes,(m&1)!==0?n===Wc?qa++:(qa=0,Wc=n):qa=0,_r(),null}function Os(){if(Er!==null){var n=oi(gl),i=ei.transition,a=ut;try{if(ei.transition=null,ut=16>n?16:n,Er===null)var u=!1;else{if(n=Er,Er=null,gl=0,(Tt&6)!==0)throw Error(t(331));var f=Tt;for(Tt|=4,Ve=n.current;Ve!==null;){var m=Ve,w=m.child;if((Ve.flags&16)!==0){var F=m.deletions;if(F!==null){for(var V=0;V<F.length;V++){var oe=F[V];for(Ve=oe;Ve!==null;){var xe=Ve;switch(xe.tag){case 0:case 11:case 15:Wa(8,xe,m)}var ye=xe.child;if(ye!==null)ye.return=xe,Ve=ye;else for(;Ve!==null;){xe=Ve;var _e=xe.sibling,Be=xe.return;if(hm(xe),xe===oe){Ve=null;break}if(_e!==null){_e.return=Be,Ve=_e;break}Ve=Be}}}var je=m.alternate;if(je!==null){var Ke=je.child;if(Ke!==null){je.child=null;do{var Zt=Ke.sibling;Ke.sibling=null,Ke=Zt}while(Ke!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ve=w;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Wa(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,Ve=ee;break e}Ve=m.return}}var j=n.current;for(Ve=j;Ve!==null;){w=Ve;var se=w.child;if((w.subtreeFlags&2064)!==0&&se!==null)se.return=w,Ve=se;else e:for(w=j;Ve!==null;){if(F=Ve,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:dl(9,F)}}catch(Qe){qt(F,F.return,Qe)}if(F===w){Ve=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,Ve=Te;break e}Ve=F.return}}if(Tt=f,_r(),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Pe,n)}catch{}u=!0}return u}finally{ut=a,ei.transition=i}}return!1}function bm(n,i,a){i=Is(a,i),i=qp(n,i,1),n=yr(n,i,1),i=Tn(),n!==null&&(kn(n,1,i),Un(n,i))}function qt(n,i,a){if(n.tag===3)bm(n,n,a);else for(;i!==null;){if(i.tag===3){bm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Mr===null||!Mr.has(u))){n=Is(a,n),n=$p(i,n,1),i=yr(i,n,1),n=Tn(),i!==null&&(kn(i,1,n),Un(i,n));break}}i=i.return}}function L_(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Tn(),n.pingedLanes|=n.suspendedLanes&a,an===n&&(cn&a)===a&&(tn===4||tn===3&&(cn&130023424)===cn&&500>R()-Hc?Zr(n,0):Vc|=a),Un(n,i)}function Pm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=Tn();n=ji(n,i),n!==null&&(kn(n,i,a),Un(n,a))}function N_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Pm(n,a)}function I_(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Pm(n,a)}var Lm;Lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)In=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return In=!1,y_(n,i,a);In=(n.flags&131072)!==0}else In=!1,Ht&&(i.flags&1048576)!==0&&cp(i,$o,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ul(n,i),n=i.pendingProps;var f=Ts(i,hn.current);Ls(i,a),f=xc(null,i,u,n,f,a);var m=yc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(u)?(m=!0,jo(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,fc(i),f.updater=ol,i.stateNode=f,f._reactInternals=i,Ac(i,u,n,a),i=Pc(null,i,u,!0,m,a)):(i.tag=0,Ht&&m&&nc(i),wn(null,i,f,a),i=i.child),i;case 16:u=i.elementType;e:{switch(ul(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=U_(u),n=ci(u,n),f){case 0:i=bc(null,i,u,n,a);break e;case 1:i=im(null,i,u,n,a);break e;case 11:i=Jp(null,i,u,n,a);break e;case 14:i=Qp(null,i,u,ci(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),bc(n,i,u,f,a);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),im(n,i,u,f,a);case 3:e:{if(rm(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,f=m.element,xp(n,i),el(i,u,null,a);var w=i.memoizedState;if(u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Is(Error(t(423)),i),i=sm(n,i,u,a,f);break e}else if(u!==f){f=Is(Error(t(424)),i),i=sm(n,i,u,a,f);break e}else for(Vn=mr(i.stateNode.containerInfo.firstChild),zn=i,Ht=!0,ui=null,a=vp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),u===f){i=qi(n,i,a);break e}wn(n,i,u,a)}i=i.child}return i;case 5:return Mp(i),n===null&&sc(i),u=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,w=f.children,Ku(u,f)?w=null:m!==null&&Ku(u,m)&&(i.flags|=32),nm(n,i),wn(n,i,w,a),i.child;case 6:return n===null&&sc(i),null;case 13:return am(n,i,a);case 4:return hc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=bs(i,null,u,a):wn(n,i,u,a),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),Jp(n,i,u,f,a);case 7:return wn(n,i,i.pendingProps,a),i.child;case 8:return wn(n,i,i.pendingProps.children,a),i.child;case 12:return wn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,kt(Zo,u._currentValue),u._currentValue=w,m!==null)if(li(m.value,w)){if(m.children===f.children&&!Ln.current){i=qi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){w=m.child;for(var V=F.firstContext;V!==null;){if(V.context===u){if(m.tag===1){V=Xi(-1,a&-a),V.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var xe=oe.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),oe.pending=V}}m.lanes|=a,V=m.alternate,V!==null&&(V.lanes|=a),cc(m.return,a,i),F.lanes|=a;break}V=V.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),cc(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}wn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Ls(i,a),f=Jn(f),u=u(f),i.flags|=1,wn(n,i,u,a),i.child;case 14:return u=i.type,f=ci(u,i.pendingProps),f=ci(u.type,f),Qp(n,i,u,f,a);case 15:return em(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),ul(n,i),i.tag=1,Nn(u)?(n=!0,jo(i)):n=!1,Ls(i,a),jp(i,u,f),Ac(i,u,f,a),Pc(null,i,u,!0,n,a);case 19:return lm(n,i,a);case 22:return tm(n,i,a)}throw Error(t(156,i.tag))};function Nm(n,i){return Ao(n,i)}function D_(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,a,u){return new D_(n,i,a,u)}function Kc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function U_(n){if(typeof n=="function")return Kc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z)return 11;if(n===Y)return 14}return 2}function Ar(n,i){var a=n.alternate;return a===null?(a=ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yl(n,i,a,u,f,m){var w=2;if(u=n,typeof n=="function")Kc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case B:return Qr(a.children,f,m,i);case A:w=8,f|=8;break;case N:return n=ti(12,a,i,f|2),n.elementType=N,n.lanes=m,n;case X:return n=ti(13,a,i,f),n.elementType=X,n.lanes=m,n;case $:return n=ti(19,a,i,f),n.elementType=$,n.lanes=m,n;case G:return Sl(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case le:w=10;break e;case D:w=9;break e;case z:w=11;break e;case Y:w=14;break e;case Q:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(w,a,i,f),i.elementType=n,i.type=u,i.lanes=m,i}function Qr(n,i,a,u){return n=ti(7,n,u,i),n.lanes=a,n}function Sl(n,i,a,u){return n=ti(22,n,u,i),n.elementType=G,n.lanes=a,n.stateNode={isHidden:!1},n}function Zc(n,i,a){return n=ti(6,n,null,i),n.lanes=a,n}function Jc(n,i,a){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function F_(n,i,a,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pn(0),this.expirationTimes=Pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Qc(n,i,a,u,f,m,w,F,V){return n=new F_(n,i,a,F,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(m),n}function O_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Im(n){if(!n)return vr;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Nn(a))return op(n,a,i)}return i}function Dm(n,i,a,u,f,m,w,F,V){return n=Qc(a,u,!0,n,f,m,w,F,V),n.context=Im(null),a=n.current,u=Tn(),f=wr(a),m=Xi(u,f),m.callback=i??null,yr(a,m,f),n.current.lanes=f,kn(n,f,u),Un(n,u),n}function Ml(n,i,a,u){var f=i.current,m=Tn(),w=wr(f);return a=Im(a),i.context===null?i.context=a:i.pendingContext=a,i=Xi(m,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=yr(f,i,w),n!==null&&(hi(n,f,w,m),Qo(n,f,w)),w}function El(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Um(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ed(n,i){Um(n,i),(n=n.alternate)&&Um(n,i)}function k_(){return null}var Fm=typeof reportError=="function"?reportError:function(n){console.error(n)};function td(n){this._internalRoot=n}wl.prototype.render=td.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ml(n,i,null,null)},wl.prototype.unmount=td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Kr(function(){Ml(null,n,null,null)}),i[Vi]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var i=va();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&Mh(n)}};function nd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Om(){}function B_(n,i,a,u,f){if(f){if(typeof u=="function"){var m=u;u=function(){var oe=El(w);m.call(oe)}}var w=Dm(i,u,n,0,null,!1,!1,"",Om);return n._reactRootContainer=w,n[Vi]=w.current,La(n.nodeType===8?n.parentNode:n),Kr(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var F=u;u=function(){var oe=El(V);F.call(oe)}}var V=Qc(n,0,!1,null,null,!1,!1,"",Om);return n._reactRootContainer=V,n[Vi]=V.current,La(n.nodeType===8?n.parentNode:n),Kr(function(){Ml(i,V,a,u)}),V}function Al(n,i,a,u,f){var m=a._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var F=f;f=function(){var V=El(w);F.call(V)}}Ml(i,w,n,f)}else w=B_(a,i,n,f,u);return El(w)}Kt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=St(i.pendingLanes);a!==0&&(Lt(i,a|1),Un(i,R()),(Tt&6)===0&&(Fs=R()+500,_r()))}break;case 13:Kr(function(){var u=ji(n,1);if(u!==null){var f=Tn();hi(u,n,1,f)}}),ed(n,1)}},Yn=function(n){if(n.tag===13){var i=ji(n,134217728);if(i!==null){var a=Tn();hi(i,n,134217728,a)}ed(n,134217728)}},zi=function(n){if(n.tag===13){var i=wr(n),a=ji(n,i);if(a!==null){var u=Tn();hi(a,n,i,u)}ed(n,i)}},va=function(){return ut},yh=function(n,i){var a=ut;try{return ut=n,i()}finally{ut=a}},Re=function(n,i,a){switch(i){case"input":if(Ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var f=Go(u);if(!f)throw Error(t(90));Pt(u),Ut(u,f)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&Et(n,!!a.multiple,i,!1)}},lt=qc,It=Kr;var z_={usingClientEntryPoint:!1,Events:[Da,Es,Go,me,We,qc]},$a={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V_={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wo(n),n===null?null:n.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||k_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Pe=Cl.inject(V_),ke=Cl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(i))throw Error(t(200));return O_(n,i,null,a)},Fn.createRoot=function(n,i){if(!nd(n))throw Error(t(299));var a=!1,u="",f=Fm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Qc(n,1,!1,null,null,a,!1,u,f),n[Vi]=i.current,La(n.nodeType===8?n.parentNode:n),new td(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=wo(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Kr(n)},Fn.hydrate=function(n,i,a){if(!Tl(i))throw Error(t(200));return Al(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!nd(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,f=!1,m="",w=Fm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Dm(i,null,n,1,a??null,f,!1,m,w),n[Vi]=i.current,La(n),u)for(n=0;n<u.length;n++)a=u[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new wl(i)},Fn.render=function(n,i,a){if(!Tl(i))throw Error(t(200));return Al(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!Tl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){Al(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},Fn.unstable_batchedUpdates=qc,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Tl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Al(n,i,a,!1,u)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var jm;function K_(){if(jm)return sd.exports;jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),sd.exports=Y_(),sd.exports}var Xm;function Z_(){if(Xm)return Rl;Xm=1;var r=K_();return Rl.createRoot=r.createRoot,Rl.hydrateRoot=r.hydrateRoot,Rl}var J_=Z_();const Q_=Gf(J_);/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qm="popstate";function $m(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function ex(r={}){function e(s,o){var h;let l=(h=o.state)==null?void 0:h.masked,{pathname:c,search:d,hash:p}=l||s.location;return $d("",{pathname:c,search:d,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,o){return typeof o=="string"?o:oo(o)}return nx(e,t,null,r)}function jt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ui(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tx(){return Math.random().toString(36).substring(2,10)}function Ym(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function $d(r,e,t=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?oa(e):e,state:t,key:e&&e.key||s||tx(),unstable_mask:o}}function oo({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function oa(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function nx(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,d="POP",p=null,h=v();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function v(){return(c.state||{idx:null}).idx}function _(){d="POP";let y=v(),x=y==null?null:y-h;h=y,p&&p({action:d,location:C.location,delta:x})}function g(y,x){d="PUSH";let b=$m(y)?y:$d(C.location,y,x);h=v()+1;let L=Ym(b,h),P=C.createHref(b.unstable_mask||b);try{c.pushState(L,"",P)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(P)}l&&p&&p({action:d,location:C.location,delta:1})}function S(y,x){d="REPLACE";let b=$m(y)?y:$d(C.location,y,x);h=v();let L=Ym(b,h),P=C.createHref(b.unstable_mask||b);c.replaceState(L,"",P),l&&p&&p({action:d,location:C.location,delta:0})}function M(y){return ix(y)}let C={get action(){return d},get location(){return r(o,c)},listen(y){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(qm,_),p=y,()=>{o.removeEventListener(qm,_),p=null}},createHref(y){return e(o,y)},createURL:M,encodeLocation(y){let x=M(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:S,go(y){return c.go(y)}};return C}function ix(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),jt(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:oo(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function i0(r,e,t="/"){return rx(r,e,t,!1)}function rx(r,e,t,s){let o=typeof e=="string"?oa(e):e,l=ir(o.pathname||"/",t);if(l==null)return null;let c=r0(r);sx(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let h=gx(l);d=px(c[p],h,s)}return d}function r0(r,e=[],t=[],s="",o=!1){let l=(c,d,p=o,h)=>{let v={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&p)return;jt(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let _=Li([s,v.relativePath]),g=t.concat(v);c.children&&c.children.length>0&&(jt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),r0(c.children,e,g,_,p)),!(c.path==null&&!c.index)&&e.push({path:_,score:fx(_,c.index),routesMeta:g})};return r.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,d);else for(let h of s0(c.path))l(c,d,!0,h)}),e}function s0(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=s0(s.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>r.startsWith("/")&&p===""?"/":p)}function sx(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:hx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var ax=/^:[\w-]+$/,ox=3,lx=2,ux=1,cx=10,dx=-2,Km=r=>r==="*";function fx(r,e){let t=r.split("/"),s=t.length;return t.some(Km)&&(s+=dx),e&&(s+=lx),t.filter(o=>!Km(o)).reduce((o,l)=>o+(ax.test(l)?ox:l===""?ux:cx),s)}function hx(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function px(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",c=[];for(let d=0;d<s.length;++d){let p=s[d],h=d===s.length-1,v=l==="/"?e:e.slice(l.length)||"/",_=uu({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},v),g=p.route;if(!_&&h&&t&&!s[s.length-1].route.index&&(_=uu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:Li([l,_.pathname]),pathnameBase:yx(Li([l,_.pathnameBase])),route:g}),_.pathnameBase!=="/"&&(l=Li([l,_.pathnameBase]))}return c}function uu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=mx(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((h,{paramName:v,isOptional:_},g)=>{if(v==="*"){let M=d[g]||"";c=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const S=d[g];return _&&!S?h[v]=void 0:h[v]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:r}}function mx(r,e=!1,t=!0){Ui(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p,h,v)=>{if(s.push({paramName:d,isOptional:p!=null}),p){let _=v.charAt(h+c.length);return _&&_!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function gx(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ui(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ir(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}var vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function _x(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?oa(r):r,l;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?l=Zm(t.substring(1),"/"):l=Zm(t,e)):l=e,{pathname:l,search:Sx(s),hash:Mx(o)}}function Zm(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ld(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xx(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function a0(r){let e=xx(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function jf(r,e,t,s=!1){let o;typeof r=="string"?o=oa(r):(o={...r},jt(!o.pathname||!o.pathname.includes("?"),ld("?","pathname","search",o)),jt(!o.pathname||!o.pathname.includes("#"),ld("#","pathname","hash",o)),jt(!o.search||!o.search.includes("#"),ld("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let _=e.length-1;if(!s&&c.startsWith("..")){let g=c.split("/");for(;g[0]==="..";)g.shift(),_-=1;o.pathname=g.join("/")}d=_>=0?e[_]:"/"}let p=_x(o,d),h=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(h||v)&&(p.pathname+="/"),p}var Li=r=>r.join("/").replace(/\/\/+/g,"/"),yx=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Sx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Mx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Ex=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function wx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Tx(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var o0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function l0(r,e){let t=r;if(typeof t!="string"||!vx.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(o0)try{let l=new URL(window.location.href),c=t.startsWith("//")?new URL(l.protocol+t):new URL(t),d=ir(c.pathname,e);c.origin===l.origin&&d!=null?t=d+c.search+c.hash:o=!0}catch{Ui(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var u0=["POST","PUT","PATCH","DELETE"];new Set(u0);var Ax=["GET",...u0];new Set(Ax);var la=fe.createContext(null);la.displayName="DataRouter";var gu=fe.createContext(null);gu.displayName="DataRouterState";var Cx=fe.createContext(!1),c0=fe.createContext({isTransitioning:!1});c0.displayName="ViewTransition";var Rx=fe.createContext(new Map);Rx.displayName="Fetchers";var bx=fe.createContext(null);bx.displayName="Await";var ai=fe.createContext(null);ai.displayName="Navigation";var po=fe.createContext(null);po.displayName="Location";var ar=fe.createContext({outlet:null,matches:[],isDataRoute:!1});ar.displayName="Route";var Xf=fe.createContext(null);Xf.displayName="RouteError";var d0="REACT_ROUTER_ERROR",Px="REDIRECT",Lx="ROUTE_ERROR_RESPONSE";function Nx(r){if(r.startsWith(`${d0}:${Px}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Ix(r){if(r.startsWith(`${d0}:${Lx}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Ex(e.status,e.statusText,e.data)}catch{}}function Dx(r,{relative:e}={}){jt(mo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=fe.useContext(ai),{hash:o,pathname:l,search:c}=go(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Li([t,l])),s.createHref({pathname:d,search:c,hash:o})}function mo(){return fe.useContext(po)!=null}function kr(){return jt(mo(),"useLocation() may be used only in the context of a <Router> component."),fe.useContext(po).location}var f0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function h0(r){fe.useContext(ai).static||fe.useLayoutEffect(r)}function Ux(){let{isDataRoute:r}=fe.useContext(ar);return r?$x():Fx()}function Fx(){jt(mo(),"useNavigate() may be used only in the context of a <Router> component.");let r=fe.useContext(la),{basename:e,navigator:t}=fe.useContext(ai),{matches:s}=fe.useContext(ar),{pathname:o}=kr(),l=JSON.stringify(a0(s)),c=fe.useRef(!1);return h0(()=>{c.current=!0}),fe.useCallback((p,h={})=>{if(Ui(c.current,f0),!c.current)return;if(typeof p=="number"){t.go(p);return}let v=jf(p,JSON.parse(l),o,h.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Li([e,v.pathname])),(h.replace?t.replace:t.push)(v,h.state,h)},[e,t,l,o,r])}fe.createContext(null);function go(r,{relative:e}={}){let{matches:t}=fe.useContext(ar),{pathname:s}=kr(),o=JSON.stringify(a0(t));return fe.useMemo(()=>jf(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Ox(r,e){return p0(r,e)}function p0(r,e,t){var y;jt(mo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=fe.useContext(ai),{matches:o}=fe.useContext(ar),l=o[o.length-1],c=l?l.params:{},d=l?l.pathname:"/",p=l?l.pathnameBase:"/",h=l&&l.route;{let x=h&&h.path||"";g0(d,!h||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let v=kr(),_;if(e){let x=typeof e=="string"?oa(e):e;jt(p==="/"||((y=x.pathname)==null?void 0:y.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${x.pathname}" was given in the \`location\` prop.`),_=x}else _=v;let g=_.pathname||"/",S=g;if(p!=="/"){let x=p.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let M=i0(r,{pathname:S});Ui(h||M!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Ui(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Hx(M&&M.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:Li([p,s.encodeLocation?s.encodeLocation(x.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?p:Li([p,s.encodeLocation?s.encodeLocation(x.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),o,t);return e&&C?fe.createElement(po.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,..._},navigationType:"POP"}},C):C}function kx(){let r=qx(),e=wx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=fe.createElement(fe.Fragment,null,fe.createElement("p",null,"💿 Hey developer 👋"),fe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",fe.createElement("code",{style:l},"ErrorBoundary")," or"," ",fe.createElement("code",{style:l},"errorElement")," prop on your route.")),fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),t?fe.createElement("pre",{style:o},t):null,c)}var Bx=fe.createElement(kx,null),m0=class extends fe.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=Ix(r.digest);t&&(r=t)}let e=r!==void 0?fe.createElement(ar.Provider,{value:this.props.routeContext},fe.createElement(Xf.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?fe.createElement(zx,{error:r},e):e}};m0.contextType=Cx;var ud=new WeakMap;function zx({children:r,error:e}){let{basename:t}=fe.useContext(ai);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Nx(e.digest);if(s){let o=ud.get(e);if(o)throw o;let l=l0(s.location,t);if(o0&&!ud.get(e))if(l.isExternal||s.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw ud.set(e,c),c}return fe.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return r}function Vx({routeContext:r,match:e,children:t}){let s=fe.useContext(la);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),fe.createElement(ar.Provider,{value:r},t)}function Hx(r,e=[],t){let s=t==null?void 0:t.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,l=s==null?void 0:s.errors;if(l!=null){let v=o.findIndex(_=>_.route.id&&(l==null?void 0:l[_.route.id])!==void 0);jt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,v+1))}let c=!1,d=-1;if(t&&s){c=s.renderFallback;for(let v=0;v<o.length;v++){let _=o[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(d=v),_.route.id){let{loaderData:g,errors:S}=s,M=_.route.loader&&!g.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||M){t.isStatic&&(c=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let p=t==null?void 0:t.onError,h=s&&p?(v,_)=>{var g,S;p(v,{location:s.location,params:((S=(g=s.matches)==null?void 0:g[0])==null?void 0:S.params)??{},unstable_pattern:Tx(s.matches),errorInfo:_})}:void 0;return o.reduceRight((v,_,g)=>{let S,M=!1,C=null,y=null;s&&(S=l&&_.route.id?l[_.route.id]:void 0,C=_.route.errorElement||Bx,c&&(d<0&&g===0?(g0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,y=null):d===g&&(M=!0,y=_.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,g+1)),b=()=>{let L;return S?L=C:M?L=y:_.route.Component?L=fe.createElement(_.route.Component,null):_.route.element?L=_.route.element:L=v,fe.createElement(Vx,{match:_,routeContext:{outlet:v,matches:x,isDataRoute:s!=null},children:L})};return s&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?fe.createElement(m0,{location:s.location,revalidation:s.revalidation,component:C,error:S,children:b(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):b()},null)}function qf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gx(r){let e=fe.useContext(la);return jt(e,qf(r)),e}function Wx(r){let e=fe.useContext(gu);return jt(e,qf(r)),e}function jx(r){let e=fe.useContext(ar);return jt(e,qf(r)),e}function $f(r){let e=jx(r),t=e.matches[e.matches.length-1];return jt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function Xx(){return $f("useRouteId")}function qx(){var s;let r=fe.useContext(Xf),e=Wx("useRouteError"),t=$f("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function $x(){let{router:r}=Gx("useNavigate"),e=$f("useNavigate"),t=fe.useRef(!1);return h0(()=>{t.current=!0}),fe.useCallback(async(o,l={})=>{Ui(t.current,f0),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Jm={};function g0(r,e,t){!e&&!Jm[r]&&(Jm[r]=!0,Ui(!1,t))}fe.memo(Yx);function Yx({routes:r,future:e,state:t,isStatic:s,onError:o}){return p0(r,void 0,{state:t,isStatic:s,onError:o})}function Dr(r){jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Kx({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,unstable_useTransitions:c}){jt(!mo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),p=fe.useMemo(()=>({basename:d,navigator:o,static:l,unstable_useTransitions:c,future:{}}),[d,o,l,c]);typeof t=="string"&&(t=oa(t));let{pathname:h="/",search:v="",hash:_="",state:g=null,key:S="default",unstable_mask:M}=t,C=fe.useMemo(()=>{let y=ir(h,d);return y==null?null:{location:{pathname:y,search:v,hash:_,state:g,key:S,unstable_mask:M},navigationType:s}},[d,h,v,_,g,S,s,M]);return Ui(C!=null,`<Router basename="${d}"> is not able to match the URL "${h}${v}${_}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:fe.createElement(ai.Provider,{value:p},fe.createElement(po.Provider,{children:e,value:C}))}function Zx({children:r,location:e}){return Ox(Yd(r),e)}function Yd(r,e=[]){let t=[];return fe.Children.forEach(r,(s,o)=>{if(!fe.isValidElement(s))return;let l=[...e,o];if(s.type===fe.Fragment){t.push.apply(t,Yd(s.props.children,l));return}jt(s.type===Dr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Yd(s.props.children,l)),t.push(c)}),t}var eu="get",tu="application/x-www-form-urlencoded";function vu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Jx(r){return vu(r)&&r.tagName.toLowerCase()==="button"}function Qx(r){return vu(r)&&r.tagName.toLowerCase()==="form"}function ey(r){return vu(r)&&r.tagName.toLowerCase()==="input"}function ty(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ny(r,e){return r.button===0&&(!e||e==="_self")&&!ty(r)}var bl=null;function iy(){if(bl===null)try{new FormData(document.createElement("form"),0),bl=!1}catch{bl=!0}return bl}var ry=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cd(r){return r!=null&&!ry.has(r)?(Ui(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):r}function sy(r,e){let t,s,o,l,c;if(Qx(r)){let d=r.getAttribute("action");s=d?ir(d,e):null,t=r.getAttribute("method")||eu,o=cd(r.getAttribute("enctype"))||tu,l=new FormData(r)}else if(Jx(r)||ey(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||d.getAttribute("action");if(s=p?ir(p,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||eu,o=cd(r.getAttribute("formenctype"))||cd(d.getAttribute("enctype"))||tu,l=new FormData(d,r),!iy()){let{name:h,type:v,value:_}=r;if(v==="image"){let g=h?`${h}.`:"";l.append(`${g}x`,"0"),l.append(`${g}y`,"0")}else h&&l.append(h,_)}}else{if(vu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=eu,s=null,o=tu,c=r}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ay(r,e,t,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&ir(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function oy(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ly(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function uy(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await oy(l,t);return c.links?c.links():[]}return[]}));return hy(s.flat(1).filter(ly).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Qm(r,e,t,s,o,l){let c=(p,h)=>t[h]?p.route.id!==t[h].route.id:!0,d=(p,h)=>{var v;return t[h].pathname!==p.pathname||((v=t[h].route.path)==null?void 0:v.endsWith("*"))&&t[h].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,h)=>c(p,h)||d(p,h)):l==="data"?e.filter((p,h)=>{var _;let v=s.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,h)||d(p,h))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=t[0])==null?void 0:_.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function cy(r,e,{includeHydrateFallback:t}={}){return dy(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function dy(r){return[...new Set(r)]}function fy(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function hy(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(fy(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function v0(){let r=fe.useContext(la);return Yf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function py(){let r=fe.useContext(gu);return Yf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Kf=fe.createContext(void 0);Kf.displayName="FrameworkContext";function _0(){let r=fe.useContext(Kf);return Yf(r,"You must render this element inside a <HydratedRouter> element"),r}function my(r,e){let t=fe.useContext(Kf),[s,o]=fe.useState(!1),[l,c]=fe.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:h,onMouseLeave:v,onTouchStart:_}=e,g=fe.useRef(null);fe.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let C=x=>{x.forEach(b=>{c(b.isIntersecting)})},y=new IntersectionObserver(C,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[r]),fe.useEffect(()=>{if(s){let C=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(C)}}},[s]);let S=()=>{o(!0)},M=()=>{o(!1),c(!1)};return t?r!=="intent"?[l,g,{}]:[l,g,{onFocus:Ka(d,S),onBlur:Ka(p,M),onMouseEnter:Ka(h,S),onMouseLeave:Ka(v,M),onTouchStart:Ka(_,S)}]:[!1,g,{}]}function Ka(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function gy({page:r,...e}){let{router:t}=v0(),s=fe.useMemo(()=>i0(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?fe.createElement(_y,{page:r,matches:s,...e}):null}function vy(r){let{manifest:e,routeModules:t}=_0(),[s,o]=fe.useState([]);return fe.useEffect(()=>{let l=!1;return uy(r,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[r,e,t]),s}function _y({page:r,matches:e,...t}){let s=kr(),{future:o,manifest:l,routeModules:c}=_0(),{basename:d}=v0(),{loaderData:p,matches:h}=py(),v=fe.useMemo(()=>Qm(r,e,h,l,s,"data"),[r,e,h,l,s]),_=fe.useMemo(()=>Qm(r,e,h,l,s,"assets"),[r,e,h,l,s]),g=fe.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,y=!1;if(e.forEach(b=>{var P;let L=l.routes[b.route.id];!L||!L.hasLoader||(!v.some(O=>O.route.id===b.route.id)&&b.route.id in p&&((P=c[b.route.id])!=null&&P.shouldRevalidate)||L.hasClientLoader?y=!0:C.add(b.route.id))}),C.size===0)return[];let x=ay(r,d,o.unstable_trailingSlashAwareDataRequests,"data");return y&&C.size>0&&x.searchParams.set("_routes",e.filter(b=>C.has(b.route.id)).map(b=>b.route.id).join(",")),[x.pathname+x.search]},[d,o.unstable_trailingSlashAwareDataRequests,p,s,l,v,e,r,c]),S=fe.useMemo(()=>cy(_,l),[_,l]),M=vy(_);return fe.createElement(fe.Fragment,null,g.map(C=>fe.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...t})),S.map(C=>fe.createElement("link",{key:C,rel:"modulepreload",href:C,...t})),M.map(({key:C,link:y})=>fe.createElement("link",{key:C,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function xy(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var yy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yy&&(window.__reactRouterVersion="7.13.1")}catch{}function Sy({basename:r,children:e,unstable_useTransitions:t,window:s}){let o=fe.useRef();o.current==null&&(o.current=ex({window:s,v5Compat:!0}));let l=o.current,[c,d]=fe.useState({action:l.action,location:l.location}),p=fe.useCallback(h=>{t===!1?d(h):fe.startTransition(()=>d(h))},[t]);return fe.useLayoutEffect(()=>l.listen(p),[l,p]),fe.createElement(Kx,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:t})}var x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vi=fe.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,unstable_mask:d,state:p,target:h,to:v,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:S,...M},C){let{basename:y,navigator:x,unstable_useTransitions:b}=fe.useContext(ai),L=typeof v=="string"&&x0.test(v),P=l0(v,y);v=P.to;let O=Dx(v,{relative:o}),U=kr(),B=null;if(d){let Y=jf(d,[],U.unstable_mask?U.unstable_mask.pathname:"/",!0);y!=="/"&&(Y.pathname=Y.pathname==="/"?y:Li([y,Y.pathname])),B=x.createHref(Y)}let[A,N,le]=my(s,M),D=Ty(v,{replace:c,unstable_mask:d,state:p,target:h,preventScrollReset:_,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:S,unstable_useTransitions:b});function z(Y){e&&e(Y),Y.defaultPrevented||D(Y)}let X=!(P.isExternal||l),$=fe.createElement("a",{...M,...le,href:(X?B:void 0)||P.absoluteURL||O,onClick:X?z:e,ref:xy(C,N),target:h,"data-discover":!L&&t==="render"?"true":void 0});return A&&!L?fe.createElement(fe.Fragment,null,$,fe.createElement(gy,{page:O})):$});vi.displayName="Link";var My=fe.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:d,children:p,...h},v){let _=go(c,{relative:h.relative}),g=kr(),S=fe.useContext(gu),{navigator:M,basename:C}=fe.useContext(ai),y=S!=null&&Py(_)&&d===!0,x=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,b=g.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(b=b.toLowerCase(),L=L?L.toLowerCase():null,x=x.toLowerCase()),L&&C&&(L=ir(L,C)||L);const P=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let O=b===x||!o&&b.startsWith(x)&&b.charAt(P)==="/",U=L!=null&&(L===x||!o&&L.startsWith(x)&&L.charAt(x.length)==="/"),B={isActive:O,isPending:U,isTransitioning:y},A=O?e:void 0,N;typeof s=="function"?N=s(B):N=[s,O?"active":null,U?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let le=typeof l=="function"?l(B):l;return fe.createElement(vi,{...h,"aria-current":A,className:N,ref:v,style:le,to:c,viewTransition:d},typeof p=="function"?p(B):p)});My.displayName="NavLink";var Ey=fe.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=eu,action:d,onSubmit:p,relative:h,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:g,...S},M)=>{let{unstable_useTransitions:C}=fe.useContext(ai),y=Ry(),x=by(d,{relative:h}),b=c.toLowerCase()==="get"?"get":"post",L=typeof d=="string"&&x0.test(d),P=O=>{if(p&&p(O),O.defaultPrevented)return;O.preventDefault();let U=O.nativeEvent.submitter,B=(U==null?void 0:U.getAttribute("formmethod"))||c,A=()=>y(U||O.currentTarget,{fetcherKey:e,method:B,navigate:t,replace:o,state:l,relative:h,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:g});C&&t!==!1?fe.startTransition(()=>A()):A()};return fe.createElement("form",{ref:M,method:b,action:x,onSubmit:s?p:P,...S,"data-discover":!L&&r==="render"?"true":void 0})});Ey.displayName="Form";function wy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function y0(r){let e=fe.useContext(la);return jt(e,wy(r)),e}function Ty(r,{target:e,replace:t,unstable_mask:s,state:o,preventScrollReset:l,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:h}={}){let v=Ux(),_=kr(),g=go(r,{relative:c});return fe.useCallback(S=>{if(ny(S,e)){S.preventDefault();let M=t!==void 0?t:oo(_)===oo(g),C=()=>v(r,{replace:M,unstable_mask:s,state:o,preventScrollReset:l,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:p});h?fe.startTransition(()=>C()):C()}},[_,v,g,t,s,o,e,r,l,c,d,p,h])}var Ay=0,Cy=()=>`__${String(++Ay)}__`;function Ry(){let{router:r}=y0("useSubmit"),{basename:e}=fe.useContext(ai),t=Xx(),s=r.fetch,o=r.navigate;return fe.useCallback(async(l,c={})=>{let{action:d,method:p,encType:h,formData:v,body:_}=sy(l,e);if(c.navigate===!1){let g=c.fetcherKey||Cy();await s(g,t,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:_,formMethod:c.method||p,formEncType:c.encType||h,flushSync:c.flushSync})}else await o(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:_,formMethod:c.method||p,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,o,e,t])}function by(r,{relative:e}={}){let{basename:t}=fe.useContext(ai),s=fe.useContext(ar);jt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...go(r||".",{relative:e})},c=kr();if(r==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(_=>_).forEach(_=>d.append("index",_));let v=d.toString();l.search=v?`?${v}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Li([t,l.pathname])),oo(l)}function Py(r,{relative:e}={}){let t=fe.useContext(c0);jt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=y0("useViewTransitionState"),o=go(r,{relative:e});if(!t.isTransitioning)return!1;let l=ir(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=ir(t.nextLocation.pathname,s)||t.nextLocation.pathname;return uu(o.pathname,c)!=null||uu(o.pathname,l)!=null}var nu={exports:{}},Ly=nu.exports,eg;function Ny(){return eg||(eg=1,(function(r,e){(function(t,s){r.exports=s()})(Ly,function(){return(function(t){function s(l){if(o[l])return o[l].exports;var c=o[l]={exports:{},id:l,loaded:!1};return t[l].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}var o={};return s.m=t,s.c=o,s.p="dist/",s(0)})([function(t,s,o){function l($){return $&&$.__esModule?$:{default:$}}var c=Object.assign||function($){for(var Y=1;Y<arguments.length;Y++){var Q=arguments[Y];for(var G in Q)Object.prototype.hasOwnProperty.call(Q,G)&&($[G]=Q[G])}return $},d=o(1),p=(l(d),o(6)),h=l(p),v=o(7),_=l(v),g=o(8),S=l(g),M=o(9),C=l(M),y=o(10),x=l(y),b=o(11),L=l(b),P=o(14),O=l(P),U=[],B=!1,A={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},N=function(){var $=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if($&&(B=!0),B)return U=(0,L.default)(U,A),(0,x.default)(U,A.once),U},le=function(){U=(0,O.default)(),N()},D=function(){U.forEach(function($,Y){$.node.removeAttribute("data-aos"),$.node.removeAttribute("data-aos-easing"),$.node.removeAttribute("data-aos-duration"),$.node.removeAttribute("data-aos-delay")})},z=function($){return $===!0||$==="mobile"&&C.default.mobile()||$==="phone"&&C.default.phone()||$==="tablet"&&C.default.tablet()||typeof $=="function"&&$()===!0},X=function($){A=c(A,$),U=(0,O.default)();var Y=document.all&&!window.atob;return z(A.disable)||Y?D():(A.disableMutationObserver||S.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),A.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",A.easing),document.querySelector("body").setAttribute("data-aos-duration",A.duration),document.querySelector("body").setAttribute("data-aos-delay",A.delay),A.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?N(!0):A.startEvent==="load"?window.addEventListener(A.startEvent,function(){N(!0)}):document.addEventListener(A.startEvent,function(){N(!0)}),window.addEventListener("resize",(0,_.default)(N,A.debounceDelay,!0)),window.addEventListener("orientationchange",(0,_.default)(N,A.debounceDelay,!0)),window.addEventListener("scroll",(0,h.default)(function(){(0,x.default)(U,A.once)},A.throttleDelay)),A.disableMutationObserver||S.default.ready("[data-aos]",le),U)};t.exports={init:X,refresh:N,refreshHard:le}},function(t,s){},,,,,function(t,s){(function(o){function l(z,X,$){function Y(Ye){var ft=Le,at=De;return Le=De=void 0,Ue=Ye,he=z.apply(at,ft)}function Q(Ye){return Ue=Ye,de=setTimeout(ne,X),et?Y(Ye):he}function G(Ye){var ft=Ye-be,at=Ye-Ue,Ut=X-ft;return Pt?le(Ut,te-at):Ut}function K(Ye){var ft=Ye-be,at=Ye-Ue;return be===void 0||ft>=X||ft<0||Pt&&at>=te}function ne(){var Ye=D();return K(Ye)?ce(Ye):void(de=setTimeout(ne,G(Ye)))}function ce(Ye){return de=void 0,$e&&Le?Y(Ye):(Le=De=void 0,he)}function k(){de!==void 0&&clearTimeout(de),Ue=0,Le=be=De=de=void 0}function J(){return de===void 0?he:ce(D())}function Ee(){var Ye=D(),ft=K(Ye);if(Le=arguments,De=this,be=Ye,ft){if(de===void 0)return Q(be);if(Pt)return de=setTimeout(ne,X),Y(be)}return de===void 0&&(de=setTimeout(ne,X)),he}var Le,De,te,he,de,be,Ue=0,et=!1,Pt=!1,$e=!0;if(typeof z!="function")throw new TypeError(g);return X=v(X)||0,d($)&&(et=!!$.leading,Pt="maxWait"in $,te=Pt?N(v($.maxWait)||0,X):te,$e="trailing"in $?!!$.trailing:$e),Ee.cancel=k,Ee.flush=J,Ee}function c(z,X,$){var Y=!0,Q=!0;if(typeof z!="function")throw new TypeError(g);return d($)&&(Y="leading"in $?!!$.leading:Y,Q="trailing"in $?!!$.trailing:Q),l(z,X,{leading:Y,maxWait:X,trailing:Q})}function d(z){var X=typeof z>"u"?"undefined":_(z);return!!z&&(X=="object"||X=="function")}function p(z){return!!z&&(typeof z>"u"?"undefined":_(z))=="object"}function h(z){return(typeof z>"u"?"undefined":_(z))=="symbol"||p(z)&&A.call(z)==M}function v(z){if(typeof z=="number")return z;if(h(z))return S;if(d(z)){var X=typeof z.valueOf=="function"?z.valueOf():z;z=d(X)?X+"":X}if(typeof z!="string")return z===0?z:+z;z=z.replace(C,"");var $=x.test(z);return $||b.test(z)?L(z.slice(2),$?2:8):y.test(z)?S:+z}var _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},g="Expected a function",S=NaN,M="[object Symbol]",C=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,b=/^0o[0-7]+$/i,L=parseInt,P=(typeof o>"u"?"undefined":_(o))=="object"&&o&&o.Object===Object&&o,O=(typeof self>"u"?"undefined":_(self))=="object"&&self&&self.Object===Object&&self,U=P||O||Function("return this")(),B=Object.prototype,A=B.toString,N=Math.max,le=Math.min,D=function(){return U.Date.now()};t.exports=c}).call(s,(function(){return this})())},function(t,s){(function(o){function l(D,z,X){function $($e){var Ye=Ee,ft=Le;return Ee=Le=void 0,be=$e,te=D.apply(ft,Ye)}function Y($e){return be=$e,he=setTimeout(K,z),Ue?$($e):te}function Q($e){var Ye=$e-de,ft=$e-be,at=z-Ye;return et?N(at,De-ft):at}function G($e){var Ye=$e-de,ft=$e-be;return de===void 0||Ye>=z||Ye<0||et&&ft>=De}function K(){var $e=le();return G($e)?ne($e):void(he=setTimeout(K,Q($e)))}function ne($e){return he=void 0,Pt&&Ee?$($e):(Ee=Le=void 0,te)}function ce(){he!==void 0&&clearTimeout(he),be=0,Ee=de=Le=he=void 0}function k(){return he===void 0?te:ne(le())}function J(){var $e=le(),Ye=G($e);if(Ee=arguments,Le=this,de=$e,Ye){if(he===void 0)return Y(de);if(et)return he=setTimeout(K,z),$(de)}return he===void 0&&(he=setTimeout(K,z)),te}var Ee,Le,De,te,he,de,be=0,Ue=!1,et=!1,Pt=!0;if(typeof D!="function")throw new TypeError(_);return z=h(z)||0,c(X)&&(Ue=!!X.leading,et="maxWait"in X,De=et?A(h(X.maxWait)||0,z):De,Pt="trailing"in X?!!X.trailing:Pt),J.cancel=ce,J.flush=k,J}function c(D){var z=typeof D>"u"?"undefined":v(D);return!!D&&(z=="object"||z=="function")}function d(D){return!!D&&(typeof D>"u"?"undefined":v(D))=="object"}function p(D){return(typeof D>"u"?"undefined":v(D))=="symbol"||d(D)&&B.call(D)==S}function h(D){if(typeof D=="number")return D;if(p(D))return g;if(c(D)){var z=typeof D.valueOf=="function"?D.valueOf():D;D=c(z)?z+"":z}if(typeof D!="string")return D===0?D:+D;D=D.replace(M,"");var X=y.test(D);return X||x.test(D)?b(D.slice(2),X?2:8):C.test(D)?g:+D}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},_="Expected a function",g=NaN,S="[object Symbol]",M=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,x=/^0o[0-7]+$/i,b=parseInt,L=(typeof o>"u"?"undefined":v(o))=="object"&&o&&o.Object===Object&&o,P=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,O=L||P||Function("return this")(),U=Object.prototype,B=U.toString,A=Math.max,N=Math.min,le=function(){return O.Date.now()};t.exports=l}).call(s,(function(){return this})())},function(t,s){function o(v){var _=void 0,g=void 0;for(_=0;_<v.length;_+=1)if(g=v[_],g.dataset&&g.dataset.aos||g.children&&o(g.children))return!0;return!1}function l(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!l()}function d(v,_){var g=window.document,S=l(),M=new S(p);h=_,M.observe(g.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(v){v&&v.forEach(function(_){var g=Array.prototype.slice.call(_.addedNodes),S=Array.prototype.slice.call(_.removedNodes),M=g.concat(S);if(o(M))return h()})}Object.defineProperty(s,"__esModule",{value:!0});var h=function(){};s.default={isSupported:c,ready:d}},function(t,s){function o(g,S){if(!(g instanceof S))throw new TypeError("Cannot call a class as a function")}function l(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var c=(function(){function g(S,M){for(var C=0;C<M.length;C++){var y=M[C];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(S,y.key,y)}}return function(S,M,C){return M&&g(S.prototype,M),C&&g(S,C),S}})(),d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,v=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,_=(function(){function g(){o(this,g)}return c(g,[{key:"phone",value:function(){var S=l();return!(!d.test(S)&&!p.test(S.substr(0,4)))}},{key:"mobile",value:function(){var S=l();return!(!h.test(S)&&!v.test(S.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),g})();s.default=new _},function(t,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(c,d,p){var h=c.node.getAttribute("data-aos-once");d>c.position?c.node.classList.add("aos-animate"):typeof h<"u"&&(h==="false"||!p&&h!=="true")&&c.node.classList.remove("aos-animate")},l=function(c,d){var p=window.pageYOffset,h=window.innerHeight;c.forEach(function(v,_){o(v,h+p,d)})};s.default=l},function(t,s,o){function l(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(s,"__esModule",{value:!0});var c=o(12),d=l(c),p=function(h,v){return h.forEach(function(_,g){_.node.classList.add("aos-init"),_.position=(0,d.default)(_.node,v.offset)}),h};s.default=p},function(t,s,o){function l(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(s,"__esModule",{value:!0});var c=o(13),d=l(c),p=function(h,v){var _=0,g=0,S=window.innerHeight,M={offset:h.getAttribute("data-aos-offset"),anchor:h.getAttribute("data-aos-anchor"),anchorPlacement:h.getAttribute("data-aos-anchor-placement")};switch(M.offset&&!isNaN(M.offset)&&(g=parseInt(M.offset)),M.anchor&&document.querySelectorAll(M.anchor)&&(h=document.querySelectorAll(M.anchor)[0]),_=(0,d.default)(h).top,M.anchorPlacement){case"top-bottom":break;case"center-bottom":_+=h.offsetHeight/2;break;case"bottom-bottom":_+=h.offsetHeight;break;case"top-center":_+=S/2;break;case"bottom-center":_+=S/2+h.offsetHeight;break;case"center-center":_+=S/2+h.offsetHeight/2;break;case"top-top":_+=S;break;case"bottom-top":_+=h.offsetHeight+S;break;case"center-top":_+=h.offsetHeight/2+S}return M.anchorPlacement||M.offset||isNaN(v)||(g=v),_+g};s.default=p},function(t,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(l){for(var c=0,d=0;l&&!isNaN(l.offsetLeft)&&!isNaN(l.offsetTop);)c+=l.offsetLeft-(l.tagName!="BODY"?l.scrollLeft:0),d+=l.offsetTop-(l.tagName!="BODY"?l.scrollTop:0),l=l.offsetParent;return{top:d,left:c}};s.default=o},function(t,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(l){return l=l||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(l,function(c){return{node:c}})};s.default=o}])})})(nu)),nu.exports}var Iy=Ny();const Dy=Gf(Iy),Uy="/assets/msi-logo-B7wAG9yI.png",Fy="/assets/add-user-B6n0jn29.png",Oy="/assets/search-interface-symbol-BUuyfvl0.png";function ky({darkMode:r,onToggle:e}){const[t,s]=fe.useState(!1);return T.jsx("header",{children:T.jsxs("div",{className:"headerContainer",children:[T.jsx(vi,{to:"/",children:T.jsx("img",{className:"logo",src:Uy,alt:"MSI Logo"})}),T.jsxs("button",{className:"hamburger",onClick:()=>s(!t),"aria-label":"Toggle menu",children:[T.jsx("span",{className:t?"bar open":"bar"}),T.jsx("span",{className:t?"bar open":"bar"}),T.jsx("span",{className:t?"bar open":"bar"})]}),T.jsxs("ul",{className:t?"navOpen":"",children:[T.jsx("li",{children:T.jsx(vi,{to:"/products",onClick:()=>s(!1),children:"Products"})}),T.jsx("li",{children:T.jsx(vi,{to:"/aiot-solutions",onClick:()=>s(!1),children:"AIoT Solutions"})}),T.jsx("li",{children:T.jsx(vi,{to:"/community",onClick:()=>s(!1),children:"Community"})}),T.jsx("li",{children:T.jsx(vi,{to:"/whats-new",onClick:()=>s(!1),children:"What's New"})}),T.jsx("li",{children:T.jsx(vi,{to:"/support",onClick:()=>s(!1),children:"Support"})}),T.jsx("li",{children:T.jsx(vi,{to:"/future-trends",onClick:()=>s(!1),children:"Future Trends"})})]}),T.jsxs("div",{className:"headerRight",children:[T.jsxs("div",{className:"themeSwitch",children:[T.jsxs("label",{className:"toggleLabel",children:[T.jsx("input",{type:"checkbox",checked:r,onChange:e}),T.jsx("span",{className:"toggleTrack",children:T.jsx("span",{className:"toggleThumb"})})]}),T.jsx("span",{className:"themeText",children:r?"Dark":"Light"})]}),T.jsxs("div",{className:"icons",children:[T.jsx("img",{src:Fy,alt:"User"}),T.jsx("img",{src:Oy,alt:"Search"})]})]})]})})}const By="/assets/banner-slide1-BR-B3P_T.jpg",zy="/assets/banner-slide2-DEiOMG_X.jpg",Vy="/assets/banner-slide3-DriQZZFM.jpg",Hy="/assets/banner-slide4-xPKHq11D.jpg",Gy="/assets/banner-slide5-CuQXhNvw.jpg",Wy="/assets/banner-slide6-B5PqN27c.jpg",dd=[By,zy,Vy,Hy,Gy,Wy];function jy(){const[r,e]=fe.useState(0);return fe.useEffect(()=>{const t=setInterval(()=>{e(s=>(s+1)%dd.length)},2500);return()=>clearInterval(t)},[]),T.jsxs("div",{className:"bodyContainer1",children:[T.jsxs("div",{className:"carousel",children:[dd.map((t,s)=>T.jsx("img",{src:t,alt:`Banner ${s+1}`,className:`carouselSlide${s===r?" active":""}`},s)),T.jsx("div",{className:"carouselDots",children:dd.map((t,s)=>T.jsx("button",{className:`dot${s===r?" activeDot":""}`,onClick:()=>e(s),"aria-label":`Go to slide ${s+1}`},s))})]}),T.jsx("div",{children:T.jsxs("ul",{children:[T.jsx("li",{children:"MSI Center"}),T.jsx("li",{children:"After-Burner"}),T.jsx("li",{children:"MSI App Player"}),T.jsx("li",{children:"MyMSI App"})]})})]})}const hs="/assets/card1-CiYpQ2qC.jpeg",ua="/assets/card2-DPJmkn92.jpeg",ca="/assets/card3-BbHhAQxg.jpeg",vo="/assets/card4-Dz_PJWsN.jpeg",_u="/assets/card5-C3kmOm6R.jpeg",xu="/assets/card6-hix90dS0.jpeg",Xy="/assets/dss-CmmVdWbh.jpeg",qy=[{img:hs,name:"Creator A16 AI Copilot + PC",desc:"Next-Level AI PC"},{img:ua,name:"Stealth 18 AI Studio",desc:"Ultimate Creator Laptop"},{img:ca,name:"Titan 18 HX",desc:"Extreme Gaming Power"},{img:vo,name:"Prestige 16 AI Evo",desc:"Business & Productivity"},{img:_u,name:"Raider GE78 HX",desc:"Gaming Domination"},{img:xu,name:"Summit E16 Flip Evo",desc:"Versatile 2-in-1"}];function $y(){return T.jsxs("div",{className:"bodyContainer2","data-aos":"fade-up",children:[T.jsx("h1",{children:"Discover the Latest MSI Innovation"}),T.jsx("div",{className:"cardContainer",children:qy.map((r,e)=>T.jsxs(vi,{to:"/products",className:"card","data-aos":"fade-up","data-aos-delay":e*100,children:[T.jsx("img",{src:r.img,alt:r.name}),T.jsx("h3",{children:r.name}),T.jsx("p",{children:r.desc})]},e))}),T.jsx(vi,{to:"/products",className:"img2","data-aos":"zoom-in","data-aos-delay":"200",children:T.jsx("img",{src:Xy,alt:"MSI Showcase"})})]})}const S0="/assets/cardddd-DEjkH1hV.jpeg",Zf="/assets/c1-Dk8lrCam.jpeg",Jf="/assets/c2-CbNotMvY.jpeg",Qf="/assets/c3-DjvTE-Np.jpeg",eh="/assets/c4-jKnxvN5J.jpeg",M0="/assets/c5-Drhc_Gkp.jpeg",E0="/assets/c6-DAio9T8G.jpeg",Yy=[Zf,Jf,Qf,eh,M0,E0];function Ky(){return T.jsxs("div",{className:"bodyContainer3","data-aos":"fade-up",children:[T.jsx("h1",{children:"Empower Your Business with AIoT Solutions"}),T.jsxs("div",{className:"cardGrid",children:[T.jsx("div",{className:"cardContainer1","data-aos":"fade-right","data-aos-delay":"100",children:T.jsxs("div",{className:"card",children:[T.jsx("img",{src:S0,alt:"EV Charging Solutions"}),T.jsx("h3",{children:"EV Charging Solutions"}),T.jsx("p",{children:"Smart Charging for Business and Home"})]})}),T.jsx("div",{className:"cardContainer2",children:Yy.map((r,e)=>T.jsxs("div",{className:"card","data-aos":"fade-up","data-aos-delay":e*80,children:[T.jsx("img",{src:r,alt:`AMR ${e+1}`}),T.jsx("h3",{children:"Autonomous Mobile Robot (AMR)"}),T.jsx("p",{children:"AI, Automation and Robotics"})]},e))})]})]})}const th="/assets/ev%20charger-Bmtmmke4.png",nh="/assets/ev%20charger2-DTtW3GUi.png",ih="/assets/ev%20charger3-Bki_p4T8.png",w0="/assets/ev%20charger4-e_IUdbVR.png",T0="/assets/ev%20charger5-D3LckElW.png",A0="/assets/ev%20charger6-BZ7fumLX.png",C0="/assets/ev%20charger7-PG4i7jW4.png",Zy=[{img:th,title:"EV Charger"},{img:nh,title:"AIoT & Industrial"},{img:ih,title:T.jsxs(T.Fragment,{children:["Automotive &",T.jsx("br",{}),"Commercial"]})},{img:w0,title:"Funtoro"},{img:T0,title:T.jsxs(T.Fragment,{children:["Autonomous",T.jsx("br",{}),"Mobile Robot"]})},{img:A0,title:"Server"},{img:C0,title:"Rugged Tablet"}];function Jy(){return T.jsxs("div",{className:"bodyContainer4","data-aos":"fade-up",children:[T.jsx("h1",{children:"The Future of Smart"}),T.jsx("div",{className:"cardContainer",children:Zy.map((r,e)=>T.jsxs("div",{className:"card","data-aos":"zoom-in","data-aos-delay":e*80,children:[T.jsx("img",{src:r.img,alt:typeof r.title=="string"?r.title:`Category ${e+1}`}),T.jsx("h3",{children:r.title})]},e))})]})}const R0="/assets/reward2-BFuLxpXa.webp",b0="/assets/insider-Du2bSJ9_.webp";function Qy(){return T.jsxs("div",{className:"bodyContainer5","data-aos":"fade-up",children:[T.jsx("img",{src:R0,alt:"MSI Reward Program","data-aos":"fade-right","data-aos-delay":"100"}),T.jsx("img",{src:b0,alt:"MSI Insider","data-aos":"fade-left","data-aos-delay":"200"})]})}const eS=["Gaming & Creation","Business & Productivity","Limited Editions","Handhelds","Accessories"],tS=["About Gaming Series","Titan Series","Raider / Vector Series","Stealth Series","Crosshair / Katana Series","Cyborg / Thin Series"],nS=["Copilot+ PC Consumer","Windows 11","Xbox Game Pass","Limited Editions","Design Award","AI Robot","MSI Center","MSI App Player","SteelSeriesGG","Nahimic","Laptops for Business","20+ Years of MSI Laptops - The Story","MSI AI PC"];function da(){const[r,e]=fe.useState(0);return T.jsxs("footer",{children:[T.jsxs("div",{className:"footerContainer",children:[T.jsx("div",{className:"footerCategories",children:eS.map((t,s)=>T.jsxs("div",{className:`footerCatItem${r===s?" active":""}`,onClick:()=>e(s),children:[T.jsx("span",{children:t}),T.jsx("span",{className:"catArrow",children:"›"})]},s))}),T.jsx("div",{className:"footerDivider"}),T.jsxs("div",{className:"footerSeries",children:[T.jsx("h4",{children:"SERIES"}),T.jsx("ul",{children:tS.map((t,s)=>T.jsx("li",{children:t},s))})]}),T.jsx("div",{className:"footerDivider"}),T.jsxs("div",{className:"footerExplore",children:[T.jsx("h4",{children:"EXPLORE"}),T.jsx("ul",{children:nS.map((t,s)=>T.jsx("li",{children:t},s))})]}),T.jsx("div",{className:"footerDivider"}),T.jsxs("div",{className:"footerFeatured",children:[T.jsx("img",{src:hs,alt:"Gaming Laptops"}),T.jsx("h4",{children:"Gaming Laptops"}),T.jsx("p",{children:"For the gamer in all of us"})]})]}),T.jsxs("div",{className:"footerBottom",children:[T.jsxs("div",{className:"socialIcons",children:[T.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:T.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),T.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:T.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})}),T.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:T.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),T.jsx("a",{href:"https://x.com",target:"_blank",rel:"noopener noreferrer","aria-label":"X",children:T.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),T.jsx("a",{href:"https://reddit.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Reddit",children:T.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 000-.462.342.342 0 00-.462 0c-.545.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.205-.095z"})})})]}),T.jsx("p",{className:"footerCopyright",children:"© 2026 MSI. All rights reserved."})]})]})}function iS(){return T.jsxs(T.Fragment,{children:[T.jsx(jy,{}),T.jsx($y,{}),T.jsx(Ky,{}),T.jsx(Jy,{}),T.jsx(Qy,{}),T.jsx(da,{})]})}const rS=[{img:hs,name:"Creator A16 AI Copilot+ PC",desc:"Next-Level AI PC",price:"$1,499"},{img:ua,name:"Stealth 16 AI Studio",desc:"Ultra-Thin Powerhouse",price:"$2,199"},{img:ca,name:"Titan 18 HX",desc:"Desktop-Level Performance",price:"$3,499"},{img:vo,name:"Prestige 16 AI Evo",desc:"Business & Productivity",price:"$1,299"},{img:_u,name:"Raider 18 HX",desc:"Dominate the Game",price:"$2,799"},{img:xu,name:"Crosshair 16 HX",desc:"Built for Victory",price:"$1,899"}],sS=[{img:th,name:"EV Charger"},{img:nh,name:"AIoT & Industrial"},{img:ih,name:"Automotive & Commercial"},{img:w0,name:"Funtoro"},{img:T0,name:"Autonomous Mobile Robot"},{img:A0,name:"Server"},{img:C0,name:"Rugged Tablet"}];function aS(){return T.jsxs("div",{className:"productsPage",children:[T.jsxs("div",{className:"productsHero",children:[T.jsx("h1",{"data-aos":"fade-down",children:"Our Products"}),T.jsx("p",{"data-aos":"fade-up","data-aos-delay":"100",children:"Explore MSI's lineup of laptops, desktops, and smart solutions"})]}),T.jsxs("section",{className:"productsSection",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Featured Products"}),T.jsx("div",{className:"productsGrid",children:rS.map((r,e)=>T.jsxs("div",{className:"productCard","data-aos":"fade-up","data-aos-delay":e*100,children:[T.jsx("div",{className:"productImgWrap",children:T.jsx("img",{src:r.img,alt:r.name})}),T.jsxs("div",{className:"productInfo",children:[T.jsx("h3",{children:r.name}),T.jsx("p",{children:r.desc}),T.jsx("span",{className:"productPrice",children:r.price})]})]},e))})]}),T.jsxs("section",{className:"categoriesSection",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Product Categories"}),T.jsx("div",{className:"categoriesGrid",children:sS.map((r,e)=>T.jsxs("div",{className:"categoryCard","data-aos":"zoom-in","data-aos-delay":e*80,children:[T.jsx("img",{src:r.img,alt:r.name}),T.jsx("h3",{children:r.name})]},e))})]}),T.jsx(da,{})]})}const oS=[{img:Zf,name:"Warehouse Automation",desc:"Streamline logistics with intelligent AMR systems that optimize picking, packing, and sorting operations."},{img:Jf,name:"Smart Manufacturing",desc:"AI-driven quality inspection and predictive maintenance for production lines."},{img:Qf,name:"Healthcare Robotics",desc:"Autonomous delivery and disinfection robots for hospitals and clinics."},{img:eh,name:"Retail Intelligence",desc:"Smart inventory management and customer analytics powered by edge AI."},{img:M0,name:"Smart Building",desc:"Integrated building management with IoT sensors and AI-driven energy optimization."},{img:E0,name:"Logistics & Delivery",desc:"Last-mile delivery solutions with autonomous mobile robots."}],lS=[{img:th,name:"NVIDIA",role:"AI Computing Partner"},{img:nh,name:"Intel",role:"Edge AI Partner"},{img:ih,name:"Microsoft",role:"Cloud & AI Partner"}];function uS(){return T.jsxs("div",{className:"aiotPage",children:[T.jsxs("div",{className:"aiotHero",children:[T.jsx("h1",{"data-aos":"fade-down",children:"AIoT Solutions"}),T.jsx("p",{"data-aos":"fade-up","data-aos-delay":"100",children:"Empower your business with AI-powered IoT solutions for every industry"})]}),T.jsx("section",{className:"aiotOverview",children:T.jsxs("div",{className:"overviewContent",children:[T.jsxs("div",{className:"overviewText","data-aos":"fade-right",children:[T.jsx("h2",{children:"EV Charging Solutions"}),T.jsx("p",{children:"MSI's smart EV charging solutions combine cutting-edge hardware with intelligent software to deliver reliable, efficient, and scalable charging infrastructure for businesses and homes."}),T.jsxs("ul",{children:[T.jsx("li",{children:"Smart load balancing & energy management"}),T.jsx("li",{children:"Remote monitoring & diagnostics"}),T.jsx("li",{children:"Scalable from single unit to fleet deployment"}),T.jsx("li",{children:"Compatible with all major EV standards"})]})]}),T.jsx("div",{className:"overviewImg","data-aos":"fade-left","data-aos-delay":"200",children:T.jsx("img",{src:S0,alt:"EV Charging Solutions"})})]})}),T.jsxs("section",{className:"aiotSolutions",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Industry Solutions"}),T.jsx("div",{className:"solutionsGrid",children:oS.map((r,e)=>T.jsxs("div",{className:"solutionCard","data-aos":"fade-up","data-aos-delay":e*100,children:[T.jsx("div",{className:"solutionImgWrap",children:T.jsx("img",{src:r.img,alt:r.name})}),T.jsxs("div",{className:"solutionInfo",children:[T.jsx("h3",{children:r.name}),T.jsx("p",{children:r.desc})]})]},e))})]}),T.jsxs("section",{className:"aiotPartners",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Technology Partners"}),T.jsx("div",{className:"partnersGrid",children:lS.map((r,e)=>T.jsxs("div",{className:"partnerCard","data-aos":"zoom-in","data-aos-delay":e*100,children:[T.jsx("img",{src:r.img,alt:r.name}),T.jsx("h3",{children:r.name}),T.jsx("p",{children:r.role})]},e))})]}),T.jsx(da,{})]})}const cS=[{title:"Gaming Discussion",members:"125K",posts:"1.2M",desc:"Talk about the latest games, settings, and performance tips."},{title:"Hardware & Builds",members:"89K",posts:"650K",desc:"Share your MSI builds, get advice, and troubleshoot hardware."},{title:"Overclocking Lab",members:"45K",posts:"320K",desc:"Push your hardware to the limit with community-tested profiles."},{title:"Content Creators",members:"38K",posts:"210K",desc:"Tips, workflows, and showcases from MSI creator community."}],dS=[{img:hs,author:"TechEnthusiast",title:"My Creator A16 Setup for Video Editing",likes:342,comments:56},{img:ua,author:"ProGamer99",title:"Stealth 16 - 6 Months Later Review",likes:518,comments:89},{img:ca,author:"BuildMaster",title:"Ultimate MSI Battlestation Tour",likes:721,comments:134}],fS=[{date:"Mar 25",title:"MSI Gaming Tournament 2026",location:"Online",status:"Registration Open"},{date:"Apr 10",title:"Creator Showcase Livestream",location:"YouTube Live",status:"Upcoming"},{date:"Apr 22",title:"MSI Modding Competition",location:"Global",status:"Coming Soon"}];function hS(){return T.jsxs("div",{className:"communityPage",children:[T.jsxs("div",{className:"communityHero",children:[T.jsx("h1",{"data-aos":"fade-down",children:"MSI Community"}),T.jsx("p",{"data-aos":"fade-up","data-aos-delay":"100",children:"Connect with gamers, creators, and tech enthusiasts worldwide"})]}),T.jsx("section",{className:"communityPrograms",children:T.jsxs("div",{className:"programsGrid",children:[T.jsxs("div",{className:"programCard","data-aos":"fade-right",children:[T.jsx("img",{src:R0,alt:"MSI Reward Program"}),T.jsx("h3",{children:"MSI Reward Program"}),T.jsx("p",{children:"Earn points with every purchase and redeem exclusive rewards."})]}),T.jsxs("div",{className:"programCard","data-aos":"fade-left","data-aos-delay":"100",children:[T.jsx("img",{src:b0,alt:"MSI Insider"}),T.jsx("h3",{children:"MSI Insider"}),T.jsx("p",{children:"Get early access to products, beta software, and exclusive content."})]})]})}),T.jsxs("section",{className:"communityForums",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Forums"}),T.jsx("div",{className:"forumsGrid",children:cS.map((r,e)=>T.jsxs("div",{className:"forumCard","data-aos":"fade-up","data-aos-delay":e*100,children:[T.jsx("h3",{children:r.title}),T.jsx("p",{children:r.desc}),T.jsxs("div",{className:"forumStats",children:[T.jsxs("span",{children:[r.members," members"]}),T.jsxs("span",{children:[r.posts," posts"]})]})]},e))})]}),T.jsxs("section",{className:"communityFeatured",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Featured Posts"}),T.jsx("div",{className:"featuredGrid",children:dS.map((r,e)=>T.jsxs("div",{className:"featuredCard","data-aos":"fade-up","data-aos-delay":e*100,children:[T.jsx("div",{className:"featuredImgWrap",children:T.jsx("img",{src:r.img,alt:r.title})}),T.jsxs("div",{className:"featuredInfo",children:[T.jsxs("span",{className:"featuredAuthor",children:["@",r.author]}),T.jsx("h3",{children:r.title}),T.jsxs("div",{className:"featuredMeta",children:[T.jsxs("span",{children:[r.likes," likes"]}),T.jsxs("span",{children:[r.comments," comments"]})]})]})]},e))})]}),T.jsxs("section",{className:"communityEvents",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Upcoming Events"}),T.jsx("div",{className:"eventsGrid",children:fS.map((r,e)=>T.jsxs("div",{className:"eventCard","data-aos":"fade-left","data-aos-delay":e*100,children:[T.jsx("div",{className:"eventDate",children:r.date}),T.jsxs("div",{className:"eventDetails",children:[T.jsx("h3",{children:r.title}),T.jsx("p",{children:r.location})]}),T.jsx("span",{className:"eventStatus",children:r.status})]},e))})]}),T.jsx(da,{})]})}const pS="/assets/headbanner-DFHHhfgi.jpeg",mS=[{img:pS,tag:"Product Launch",date:"Mar 15, 2026",title:"MSI Unveils Next-Gen Creator A16 with AI Copilot+ at CES 2026",desc:"MSI introduces revolutionary AI-powered laptops designed for creators, featuring the latest Intel processors and NVIDIA graphics."}],gS=[{img:hs,tag:"Innovation",date:"Mar 12, 2026",title:"How AI is Transforming PC Gaming",desc:"Explore how MSI integrates AI technology to enhance gaming performance and user experience."},{img:ua,tag:"Review",date:"Mar 10, 2026",title:"Stealth 16 AI Studio - Editor's Choice Award",desc:"Our ultra-thin powerhouse earns top honors for performance and portability."},{img:ca,tag:"Technology",date:"Mar 8, 2026",title:"MSI Cooler Boost 5 Technology Explained",desc:"A deep dive into the thermal engineering that keeps MSI laptops cool under pressure."},{img:vo,tag:"Event",date:"Mar 5, 2026",title:"MSI at Mobile World Congress 2026",desc:"Highlights from our showcase of AIoT solutions and smart business products."},{img:_u,tag:"Gaming",date:"Mar 3, 2026",title:"Raider 18 HX Breaks Performance Records",desc:"The flagship gaming laptop sets new benchmarks in 3DMark and real-world gaming tests."},{img:xu,tag:"Update",date:"Feb 28, 2026",title:"MSI Center 2.0 - Major Software Update",desc:"Redesigned interface with AI-powered optimization and one-click performance tuning."}],vS=[{date:"Mar 14, 2026",title:"MSI Reports Record Q1 2026 Revenue"},{date:"Mar 11, 2026",title:"MSI Partners with Leading Game Studios for Optimized Drivers"},{date:"Mar 7, 2026",title:"MSI Expands AIoT Solutions to European Market"},{date:"Mar 2, 2026",title:"MSI Launches Global Sustainability Initiative"},{date:"Feb 25, 2026",title:"MSI Creator Awards 2026 - Call for Submissions"}];function _S(){return T.jsxs("div",{className:"whatsNewPage",children:[T.jsxs("div",{className:"whatsNewHero",children:[T.jsx("h1",{"data-aos":"fade-down",children:"What's New"}),T.jsx("p",{"data-aos":"fade-up","data-aos-delay":"100",children:"Latest news, product launches, and stories from MSI"})]}),T.jsx("section",{className:"heroArticle","data-aos":"fade-up",children:mS.map((r,e)=>T.jsxs("div",{className:"heroArticleCard",children:[T.jsx("img",{src:r.img,alt:r.title}),T.jsxs("div",{className:"heroArticleOverlay",children:[T.jsx("span",{className:"articleTag",children:r.tag}),T.jsx("h2",{children:r.title}),T.jsx("p",{children:r.desc}),T.jsx("span",{className:"articleDate",children:r.date})]})]},e))}),T.jsxs("section",{className:"articlesSection",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Latest Articles"}),T.jsx("div",{className:"articlesGrid",children:gS.map((r,e)=>T.jsxs("div",{className:"articleCard","data-aos":"fade-up","data-aos-delay":e*100,children:[T.jsxs("div",{className:"articleImgWrap",children:[T.jsx("img",{src:r.img,alt:r.title}),T.jsx("span",{className:"articleTag",children:r.tag})]}),T.jsxs("div",{className:"articleInfo",children:[T.jsx("span",{className:"articleDate",children:r.date}),T.jsx("h3",{children:r.title}),T.jsx("p",{children:r.desc})]})]},e))})]}),T.jsxs("section",{className:"pressSection",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Press Releases"}),T.jsx("div",{className:"pressList",children:vS.map((r,e)=>T.jsxs("div",{className:"pressItem","data-aos":"fade-left","data-aos-delay":e*80,children:[T.jsx("span",{className:"pressDate",children:r.date}),T.jsx("h3",{children:r.title})]},e))})]}),T.jsx(da,{})]})}const xS=[{icon:"📥",title:"Downloads",desc:"Drivers, BIOS, utilities, and software updates for your MSI products."},{icon:"📋",title:"Register Product",desc:"Register your MSI product to activate warranty and access support."},{icon:"🔧",title:"Troubleshooting",desc:"Step-by-step guides to resolve common issues with your device."},{icon:"📞",title:"Contact Us",desc:"Reach our support team via phone, email, or live chat."}],yS=[{q:"How do I update my BIOS?",a:"Download the latest BIOS from the MSI support page for your product model. Use MSI Center or a USB flash drive to install the update. Always ensure your laptop is plugged in during the process."},{q:"How do I check my warranty status?",a:"Visit the MSI warranty check page and enter your product serial number. You can find the serial number on the bottom of your laptop or on the product box."},{q:"My laptop is overheating. What should I do?",a:"Clean the air vents, ensure proper ventilation, update BIOS and EC firmware, and use MSI Center to adjust fan curves. If the issue persists, contact MSI support."},{q:"How do I reset my MSI laptop to factory settings?",a:"Use the MSI built-in recovery by pressing F3 during boot, or use Windows Settings > System > Recovery > Reset this PC."},{q:"Where can I find drivers for my product?",a:"Go to the MSI official website, navigate to Support > Downloads, search for your product model, and download the latest drivers."}],SS=[{region:"North America",phone:"1-888-MSI-HELP",hours:"Mon-Fri 9AM-6PM PST"},{region:"Europe",phone:"+31-45-XXX-XXXX",hours:"Mon-Fri 9AM-6PM CET"},{region:"Asia Pacific",phone:"+886-2-XXXX-XXXX",hours:"Mon-Fri 9AM-6PM CST"}];function MS(){return T.jsxs("div",{className:"supportPage",children:[T.jsxs("div",{className:"supportHero",children:[T.jsx("h1",{"data-aos":"fade-down",children:"Support"}),T.jsx("p",{"data-aos":"fade-up","data-aos-delay":"100",children:"We're here to help you get the most out of your MSI products"}),T.jsxs("div",{className:"searchBox","data-aos":"fade-up","data-aos-delay":"200",children:[T.jsx("input",{type:"text",placeholder:"Search by product name or serial number..."}),T.jsx("button",{children:"Search"})]})]}),T.jsx("section",{className:"quickLinksSection",children:T.jsx("div",{className:"quickLinksGrid",children:xS.map((r,e)=>T.jsxs("div",{className:"quickLinkCard","data-aos":"fade-up","data-aos-delay":e*100,children:[T.jsx("span",{className:"quickLinkIcon",children:r.icon}),T.jsx("h3",{children:r.title}),T.jsx("p",{children:r.desc})]},e))})}),T.jsxs("section",{className:"faqSection",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Frequently Asked Questions"}),T.jsx("div",{className:"faqList",children:yS.map((r,e)=>T.jsxs("details",{className:"faqItem","data-aos":"fade-up","data-aos-delay":e*80,children:[T.jsx("summary",{children:r.q}),T.jsx("p",{children:r.a})]},e))})]}),T.jsxs("section",{className:"serviceSection",children:[T.jsx("h2",{"data-aos":"fade-up",children:"Service Centers"}),T.jsx("div",{className:"serviceGrid",children:SS.map((r,e)=>T.jsxs("div",{className:"serviceCard","data-aos":"zoom-in","data-aos-delay":e*100,children:[T.jsx("h3",{children:r.region}),T.jsx("p",{className:"servicePhone",children:r.phone}),T.jsx("p",{className:"serviceHours",children:r.hours})]},e))})]}),T.jsx(da,{})]})}/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=r=>{const e=wS(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=fe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...d},p)=>fe.createElement("svg",{ref:p,...TS,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:P0("lucide",o),...!l&&!AS(d)&&{"aria-hidden":"true"},...d},[...c.map(([h,v])=>fe.createElement(h,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=(r,e)=>{const t=fe.forwardRef(({className:s,...o},l)=>fe.createElement(CS,{ref:l,iconNode:e,className:P0(`lucide-${ES(tg(r))}`,`lucide-${r}`,s),...o}));return t.displayName=tg(r),t};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z",key:"11gyqh"}],["path",{d:"M9 11v2",key:"1ueba0"}]],bS=ki("bot-message-square",RS);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],LS=ki("brain",PS);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],IS=ki("cog",NS);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],US=ki("globe",DS);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],OS=ki("hand",FS);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",key:"1m329m"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],BS=ki("landmark",kS);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],VS=ki("link",zS);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],GS=ki("puzzle",HS);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],jS=ki("radio",WS);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],qS=ki("target",XS);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="183",$S=0,ng=1,YS=2,iu=1,KS=2,so=3,Or=0,Rn=1,Ri=2,tr=0,ea=1,cu=2,ig=3,rg=4,ZS=5,os=100,JS=101,QS=102,eM=103,tM=104,nM=200,iM=201,rM=202,sM=203,Kd=204,Zd=205,aM=206,oM=207,lM=208,uM=209,cM=210,dM=211,fM=212,hM=213,pM=214,Jd=0,Qd=1,ef=2,na=3,tf=4,nf=5,rf=6,sf=7,sh=0,mM=1,gM=2,Ni=0,L0=1,N0=2,I0=3,ah=4,D0=5,U0=6,F0=7,O0=300,fs=301,ia=302,fd=303,hd=304,yu=306,af=1e3,er=1001,of=1002,dn=1003,vM=1004,Pl=1005,xn=1006,pd=1007,cs=1008,jn=1009,k0=1010,B0=1011,lo=1012,oh=1013,Fi=1014,bi=1015,rr=1016,lh=1017,uh=1018,uo=1020,z0=35902,V0=35899,H0=1021,G0=1022,xi=1023,sr=1026,ds=1027,W0=1028,ch=1029,ra=1030,dh=1031,fh=1033,ru=33776,su=33777,au=33778,ou=33779,lf=35840,uf=35841,cf=35842,df=35843,ff=36196,hf=37492,pf=37496,mf=37488,gf=37489,vf=37490,_f=37491,xf=37808,yf=37809,Sf=37810,Mf=37811,Ef=37812,wf=37813,Tf=37814,Af=37815,Cf=37816,Rf=37817,bf=37818,Pf=37819,Lf=37820,Nf=37821,If=36492,Df=36494,Uf=36495,Ff=36283,Of=36284,kf=36285,Bf=36286,_M=3200,j0=0,xM=1,Ur="",ii="srgb",sa="srgb-linear",du="linear",Dt="srgb",ks=7680,sg=519,yM=512,SM=513,MM=514,hh=515,EM=516,wM=517,ph=518,TM=519,ag=35044,og="300 es",Pi=2e3,co=2001;function AM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function CM(){const r=fo("canvas");return r.style.display="block",r}const lg={};function ug(...r){const e="THREE."+r.shift();console.log(e,...r)}function X0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function dt(...r){r=X0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Rt(...r){r=X0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function fu(...r){const e=r.join(" ");e in lg||(lg[e]=!0,dt(...r))}function RM(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const bM={[Jd]:Qd,[ef]:rf,[tf]:sf,[na]:nf,[Qd]:Jd,[rf]:ef,[sf]:tf,[nf]:na};class fa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],md=Math.PI/180,zf=180/Math.PI;function _o(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function PM(r,e){return(r%e+e)%e}function gd(r,e,t){return(1-t)*r+t*e}function Za(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ha{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,d){let p=s[o+0],h=s[o+1],v=s[o+2],_=s[o+3],g=l[c+0],S=l[c+1],M=l[c+2],C=l[c+3];if(_!==C||p!==g||h!==S||v!==M){let y=p*g+h*S+v*M+_*C;y<0&&(g=-g,S=-S,M=-M,C=-C,y=-y);let x=1-d;if(y<.9995){const b=Math.acos(y),L=Math.sin(b);x=Math.sin(x*b)/L,d=Math.sin(d*b)/L,p=p*x+g*d,h=h*x+S*d,v=v*x+M*d,_=_*x+C*d}else{p=p*x+g*d,h=h*x+S*d,v=v*x+M*d,_=_*x+C*d;const b=1/Math.sqrt(p*p+h*h+v*v+_*_);p*=b,h*=b,v*=b,_*=b}}e[t]=p,e[t+1]=h,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,c){const d=s[o],p=s[o+1],h=s[o+2],v=s[o+3],_=l[c],g=l[c+1],S=l[c+2],M=l[c+3];return e[t]=d*M+v*_+p*S-h*g,e[t+1]=p*M+v*g+h*_-d*S,e[t+2]=h*M+v*S+d*g-p*_,e[t+3]=v*M-d*_-p*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,p=Math.sin,h=d(s/2),v=d(o/2),_=d(l/2),g=p(s/2),S=p(o/2),M=p(l/2);switch(c){case"XYZ":this._x=g*v*_+h*S*M,this._y=h*S*_-g*v*M,this._z=h*v*M+g*S*_,this._w=h*v*_-g*S*M;break;case"YXZ":this._x=g*v*_+h*S*M,this._y=h*S*_-g*v*M,this._z=h*v*M-g*S*_,this._w=h*v*_+g*S*M;break;case"ZXY":this._x=g*v*_-h*S*M,this._y=h*S*_+g*v*M,this._z=h*v*M+g*S*_,this._w=h*v*_-g*S*M;break;case"ZYX":this._x=g*v*_-h*S*M,this._y=h*S*_+g*v*M,this._z=h*v*M-g*S*_,this._w=h*v*_+g*S*M;break;case"YZX":this._x=g*v*_+h*S*M,this._y=h*S*_+g*v*M,this._z=h*v*M-g*S*_,this._w=h*v*_-g*S*M;break;case"XZY":this._x=g*v*_-h*S*M,this._y=h*S*_-g*v*M,this._z=h*v*M+g*S*_,this._w=h*v*_+g*S*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],d=t[5],p=t[9],h=t[2],v=t[6],_=t[10],g=s+d+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-p)*S,this._y=(l-h)*S,this._z=(c-o)*S}else if(s>d&&s>_){const S=2*Math.sqrt(1+s-d-_);this._w=(v-p)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+h)/S}else if(d>_){const S=2*Math.sqrt(1+d-s-_);this._w=(l-h)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+_-s-d);this._w=(c-o)/S,this._x=(l+h)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,d=t._x,p=t._y,h=t._z,v=t._w;return this._x=s*v+c*d+o*h-l*p,this._y=o*v+c*p+l*d-s*h,this._z=l*v+c*h+s*p-o*d,this._w=c*v-s*d-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(s=-s,o=-o,l=-l,c=-c,d=-d);let p=1-t;if(d<.9995){const h=Math.acos(d),v=Math.sin(h);p=Math.sin(p*h)/v,t=Math.sin(t*h)/v,this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,d=e.z,p=e.w,h=2*(c*o-d*s),v=2*(d*t-l*o),_=2*(l*s-c*t);return this.x=t+p*h+c*_-d*v,this.y=s+p*v+d*h-l*_,this.z=o+p*_+l*v-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*c-s*p,this.z=s*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vd=new re,cg=new ha;class mt{constructor(e,t,s,o,l,c,d,p,h){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,p,h)}set(e,t,s,o,l,c,d,p,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=p,v[6]=s,v[7]=c,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[3],p=s[6],h=s[1],v=s[4],_=s[7],g=s[2],S=s[5],M=s[8],C=o[0],y=o[3],x=o[6],b=o[1],L=o[4],P=o[7],O=o[2],U=o[5],B=o[8];return l[0]=c*C+d*b+p*O,l[3]=c*y+d*L+p*U,l[6]=c*x+d*P+p*B,l[1]=h*C+v*b+_*O,l[4]=h*y+v*L+_*U,l[7]=h*x+v*P+_*B,l[2]=g*C+S*b+M*O,l[5]=g*y+S*L+M*U,l[8]=g*x+S*P+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],h=e[7],v=e[8];return t*c*v-t*d*h-s*l*v+s*d*p+o*l*h-o*c*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],h=e[7],v=e[8],_=v*c-d*h,g=d*p-v*l,S=h*l-c*p,M=t*_+s*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=_*C,e[1]=(o*h-v*s)*C,e[2]=(d*s-o*c)*C,e[3]=g*C,e[4]=(v*t-o*p)*C,e[5]=(o*l-d*t)*C,e[6]=S*C,e[7]=(s*p-h*t)*C,e[8]=(c*t-s*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,d){const p=Math.cos(l),h=Math.sin(l);return this.set(s*p,s*h,-s*(p*c+h*d)+c+e,-o*h,o*p,-o*(-h*c+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(_d.makeScale(e,t)),this}rotate(e){return this.premultiply(_d.makeRotation(-e)),this}translate(e,t){return this.premultiply(_d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _d=new mt,dg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LM(){const r={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(o.r=ta(o.r),o.g=ta(o.g),o.b=ta(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?du:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return fu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return fu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[sa]:{primaries:e,whitePoint:s,transfer:du,toXYZ:dg,fromXYZ:fg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:s,transfer:Dt,toXYZ:dg,fromXYZ:fg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),r}const At=LM();function nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bs;class NM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Bs===void 0&&(Bs=fo("canvas")),Bs.width=e.width,Bs.height=e.height;const o=Bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Bs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=nr(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(nr(t[s]/255)*255):t[s]=nr(t[s]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IM=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(xd(o[c].image)):l.push(xd(o[c]))}else l=xd(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function xd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?NM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let DM=0;const yd=new re;class yn extends fa{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,s=er,o=er,l=xn,c=cs,d=xi,p=jn,h=yn.DEFAULT_ANISOTROPY,v=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=_o(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case af:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case af:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=O0;yn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,s=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const p=e.elements,h=p[0],v=p[4],_=p[8],g=p[1],S=p[5],M=p[9],C=p[2],y=p[6],x=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(M-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,P=(S+1)/2,O=(x+1)/2,U=(v+g)/4,B=(_+C)/4,A=(M+y)/4;return L>P&&L>O?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=U/s,l=B/s):P>O?P<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),s=U/o,l=A/o):O<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),s=B/l,o=A/l),this.set(s,o,l,t),this}let b=Math.sqrt((y-M)*(y-M)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(b)<.001&&(b=1),this.x=(y-M)/b,this.y=(_-C)/b,this.z=(g-v)/b,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UM extends fa{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new yn(o),c=s.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new mh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends UM{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class q0 extends yn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FM extends yn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt{constructor(e,t,s,o,l,c,d,p,h,v,_,g,S,M,C,y){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,p,h,v,_,g,S,M,C,y)}set(e,t,s,o,l,c,d,p,h,v,_,g,S,M,C,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=c,x[9]=d,x[13]=p,x[2]=h,x[6]=v,x[10]=_,x[14]=g,x[3]=S,x[7]=M,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/zs.setFromMatrixColumn(e,0).length(),l=1/zs.setFromMatrixColumn(e,1).length(),c=1/zs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),p=Math.cos(o),h=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=c*v,S=c*_,M=d*v,C=d*_;t[0]=p*v,t[4]=-p*_,t[8]=h,t[1]=S+M*h,t[5]=g-C*h,t[9]=-d*p,t[2]=C-g*h,t[6]=M+S*h,t[10]=c*p}else if(e.order==="YXZ"){const g=p*v,S=p*_,M=h*v,C=h*_;t[0]=g+C*d,t[4]=M*d-S,t[8]=c*h,t[1]=c*_,t[5]=c*v,t[9]=-d,t[2]=S*d-M,t[6]=C+g*d,t[10]=c*p}else if(e.order==="ZXY"){const g=p*v,S=p*_,M=h*v,C=h*_;t[0]=g-C*d,t[4]=-c*_,t[8]=M+S*d,t[1]=S+M*d,t[5]=c*v,t[9]=C-g*d,t[2]=-c*h,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){const g=c*v,S=c*_,M=d*v,C=d*_;t[0]=p*v,t[4]=M*h-S,t[8]=g*h+C,t[1]=p*_,t[5]=C*h+g,t[9]=S*h-M,t[2]=-h,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){const g=c*p,S=c*h,M=d*p,C=d*h;t[0]=p*v,t[4]=C-g*_,t[8]=M*_+S,t[1]=_,t[5]=c*v,t[9]=-d*v,t[2]=-h*v,t[6]=S*_+M,t[10]=g-C*_}else if(e.order==="XZY"){const g=c*p,S=c*h,M=d*p,C=d*h;t[0]=p*v,t[4]=-_,t[8]=h*v,t[1]=g*_+C,t[5]=c*v,t[9]=S*_-M,t[2]=M*_-S,t[6]=d*v,t[10]=C*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OM,e,kM)}lookAt(e,t,s){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Rr.crossVectors(s,Gn),Rr.lengthSq()===0&&(Math.abs(s.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Rr.crossVectors(s,Gn)),Rr.normalize(),Ll.crossVectors(Gn,Rr),o[0]=Rr.x,o[4]=Ll.x,o[8]=Gn.x,o[1]=Rr.y,o[5]=Ll.y,o[9]=Gn.y,o[2]=Rr.z,o[6]=Ll.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[4],p=s[8],h=s[12],v=s[1],_=s[5],g=s[9],S=s[13],M=s[2],C=s[6],y=s[10],x=s[14],b=s[3],L=s[7],P=s[11],O=s[15],U=o[0],B=o[4],A=o[8],N=o[12],le=o[1],D=o[5],z=o[9],X=o[13],$=o[2],Y=o[6],Q=o[10],G=o[14],K=o[3],ne=o[7],ce=o[11],k=o[15];return l[0]=c*U+d*le+p*$+h*K,l[4]=c*B+d*D+p*Y+h*ne,l[8]=c*A+d*z+p*Q+h*ce,l[12]=c*N+d*X+p*G+h*k,l[1]=v*U+_*le+g*$+S*K,l[5]=v*B+_*D+g*Y+S*ne,l[9]=v*A+_*z+g*Q+S*ce,l[13]=v*N+_*X+g*G+S*k,l[2]=M*U+C*le+y*$+x*K,l[6]=M*B+C*D+y*Y+x*ne,l[10]=M*A+C*z+y*Q+x*ce,l[14]=M*N+C*X+y*G+x*k,l[3]=b*U+L*le+P*$+O*K,l[7]=b*B+L*D+P*Y+O*ne,l[11]=b*A+L*z+P*Q+O*ce,l[15]=b*N+L*X+P*G+O*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],d=e[5],p=e[9],h=e[13],v=e[2],_=e[6],g=e[10],S=e[14],M=e[3],C=e[7],y=e[11],x=e[15],b=p*S-h*g,L=d*S-h*_,P=d*g-p*_,O=c*S-h*v,U=c*g-p*v,B=c*_-d*v;return t*(C*b-y*L+x*P)-s*(M*b-y*O+x*U)+o*(M*L-C*O+x*B)-l*(M*P-C*U+y*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],h=e[7],v=e[8],_=e[9],g=e[10],S=e[11],M=e[12],C=e[13],y=e[14],x=e[15],b=t*d-s*c,L=t*p-o*c,P=t*h-l*c,O=s*p-o*d,U=s*h-l*d,B=o*h-l*p,A=v*C-_*M,N=v*y-g*M,le=v*x-S*M,D=_*y-g*C,z=_*x-S*C,X=g*x-S*y,$=b*X-L*z+P*D+O*le-U*N+B*A;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/$;return e[0]=(d*X-p*z+h*D)*Y,e[1]=(o*z-s*X-l*D)*Y,e[2]=(C*B-y*U+x*O)*Y,e[3]=(g*U-_*B-S*O)*Y,e[4]=(p*le-c*X-h*N)*Y,e[5]=(t*X-o*le+l*N)*Y,e[6]=(y*P-M*B-x*L)*Y,e[7]=(v*B-g*P+S*L)*Y,e[8]=(c*z-d*le+h*A)*Y,e[9]=(s*le-t*z-l*A)*Y,e[10]=(M*U-C*P+x*b)*Y,e[11]=(_*P-v*U-S*b)*Y,e[12]=(d*N-c*D-p*A)*Y,e[13]=(t*D-s*N+o*A)*Y,e[14]=(C*L-M*O-y*b)*Y,e[15]=(v*O-_*L+g*b)*Y,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,d=e.y,p=e.z,h=l*c,v=l*d;return this.set(h*c+s,h*d-o*p,h*p+o*d,0,h*d+o*p,v*d+s,v*p-o*c,0,h*p-o*d,v*p+o*c,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,d=t._z,p=t._w,h=l+l,v=c+c,_=d+d,g=l*h,S=l*v,M=l*_,C=c*v,y=c*_,x=d*_,b=p*h,L=p*v,P=p*_,O=s.x,U=s.y,B=s.z;return o[0]=(1-(C+x))*O,o[1]=(S+P)*O,o[2]=(M-L)*O,o[3]=0,o[4]=(S-P)*U,o[5]=(1-(g+x))*U,o[6]=(y+b)*U,o[7]=0,o[8]=(M+L)*B,o[9]=(y-b)*B,o[10]=(1-(g+C))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let c=zs.set(o[0],o[1],o[2]).length();const d=zs.set(o[4],o[5],o[6]).length(),p=zs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),pi.copy(this);const h=1/c,v=1/d,_=1/p;return pi.elements[0]*=h,pi.elements[1]*=h,pi.elements[2]*=h,pi.elements[4]*=v,pi.elements[5]*=v,pi.elements[6]*=v,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,t.setFromRotationMatrix(pi),s.x=c,s.y=d,s.z=p,this}makePerspective(e,t,s,o,l,c,d=Pi,p=!1){const h=this.elements,v=2*l/(t-e),_=2*l/(s-o),g=(t+e)/(t-e),S=(s+o)/(s-o);let M,C;if(p)M=l/(c-l),C=c*l/(c-l);else if(d===Pi)M=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(d===co)M=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,d=Pi,p=!1){const h=this.elements,v=2/(t-e),_=2/(s-o),g=-(t+e)/(t-e),S=-(s+o)/(s-o);let M,C;if(p)M=1/(c-l),C=c/(c-l);else if(d===Pi)M=-2/(c-l),C=-(c+l)/(c-l);else if(d===co)M=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const zs=new re,pi=new Xt,OM=new re(0,0,0),kM=new re(1,1,1),Rr=new re,Ll=new re,Gn=new re,hg=new Xt,pg=new ha;class Oi{constructor(e=0,t=0,s=0,o=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],p=o[1],h=o[5],v=o[9],_=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pg.setFromEuler(this),this.setFromQuaternion(pg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BM=0;const mg=new re,Vs=new ha,Yi=new Xt,Nl=new re,Ja=new re,zM=new re,VM=new ha,gg=new re(1,0,0),vg=new re(0,1,0),_g=new re(0,0,1),xg={type:"added"},HM={type:"removed"},Hs={type:"childadded",child:null},Sd={type:"childremoved",child:null};class fn extends fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new re,t=new Oi,s=new ha,o=new re(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xt},normalMatrix:{value:new mt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(gg,e)}rotateY(e){return this.rotateOnAxis(vg,e)}rotateZ(e){return this.rotateOnAxis(_g,e)}translateOnAxis(e,t){return mg.copy(e).applyQuaternion(this.quaternion),this.position.add(mg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gg,e)}translateY(e){return this.translateOnAxis(vg,e)}translateZ(e){return this.translateOnAxis(_g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Nl.copy(e):Nl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Ja,Nl,this.up):Yi.lookAt(Nl,Ja,this.up),this.quaternion.setFromRotationMatrix(Yi),o&&(Yi.extractRotation(o.matrixWorld),Vs.setFromRotationMatrix(Yi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xg),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HM),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xg),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,zM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,VM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=c(e.geometries),p=c(e.materials),h=c(e.textures),v=c(e.images),_=c(e.shapes),g=c(e.skeletons),S=c(e.animations),M=c(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=o,s;function c(d){const p=[];for(const h in d){const v=d[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}fn.DEFAULT_UP=new re(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qs extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,s),x=this._getHandJoint(h,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=v.position.distanceTo(_.position),S=.02,M=.005;h.inputState.pinching&&g>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Qs;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const Y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Ed(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Mt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=s,At.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=At.workingColorSpace){if(e=PM(e,1),t=yt(t,0,1),s=yt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Ed(c,l,e+1/3),this.g=Ed(c,l,e),this.b=Ed(c,l,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,t=ii){function s(l){l!==void 0&&parseFloat(l)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const s=Y0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return At.workingToColorSpace(_n.copy(this),e),Math.round(yt(_n.r*255,0,255))*65536+Math.round(yt(_n.g*255,0,255))*256+Math.round(yt(_n.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(_n.copy(this),t);const s=_n.r,o=_n.g,l=_n.b,c=Math.max(s,o,l),d=Math.min(s,o,l);let p,h;const v=(d+c)/2;if(d===c)p=0,h=0;else{const _=c-d;switch(h=v<=.5?_/(c+d):_/(2-c-d),c){case s:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-s)/_+2;break;case l:p=(s-o)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ii){At.workingToColorSpace(_n.copy(this),e);const t=_n.r,s=_n.g,o=_n.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Il);const s=gd(br.h,Il.h,t),o=gd(br.s,Il.s,t),l=gd(br.l,Il.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Mt;Mt.NAMES=Y0;class WM extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mi=new re,Ki=new re,wd=new re,Zi=new re,Gs=new re,Ws=new re,yg=new re,Td=new re,Ad=new re,Cd=new re,Rd=new $t,bd=new $t,Pd=new $t;class _i{constructor(e=new re,t=new re,s=new re){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),mi.subVectors(e,t),o.cross(mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){mi.subVectors(o,t),Ki.subVectors(s,t),wd.subVectors(e,t);const c=mi.dot(mi),d=mi.dot(Ki),p=mi.dot(wd),h=Ki.dot(Ki),v=Ki.dot(wd),_=c*h-d*d;if(_===0)return l.set(0,0,0),null;const g=1/_,S=(h*p-d*v)*g,M=(c*v-d*p)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,s,o,l,c,d,p){return this.getBarycoord(e,t,s,o,Zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Zi.x),p.addScaledVector(c,Zi.y),p.addScaledVector(d,Zi.z),p)}static getInterpolatedAttribute(e,t,s,o,l,c){return Rd.setScalar(0),bd.setScalar(0),Pd.setScalar(0),Rd.fromBufferAttribute(e,t),bd.fromBufferAttribute(e,s),Pd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Rd,l.x),c.addScaledVector(bd,l.y),c.addScaledVector(Pd,l.z),c}static isFrontFacing(e,t,s,o){return mi.subVectors(s,t),Ki.subVectors(e,t),mi.cross(Ki).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),mi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return _i.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,d;Gs.subVectors(o,s),Ws.subVectors(l,s),Td.subVectors(e,s);const p=Gs.dot(Td),h=Ws.dot(Td);if(p<=0&&h<=0)return t.copy(s);Ad.subVectors(e,o);const v=Gs.dot(Ad),_=Ws.dot(Ad);if(v>=0&&_<=v)return t.copy(o);const g=p*_-v*h;if(g<=0&&p>=0&&v<=0)return c=p/(p-v),t.copy(s).addScaledVector(Gs,c);Cd.subVectors(e,l);const S=Gs.dot(Cd),M=Ws.dot(Cd);if(M>=0&&S<=M)return t.copy(l);const C=S*h-p*M;if(C<=0&&h>=0&&M<=0)return d=h/(h-M),t.copy(s).addScaledVector(Ws,d);const y=v*M-S*_;if(y<=0&&_-v>=0&&S-M>=0)return yg.subVectors(l,o),d=(_-v)/(_-v+(S-M)),t.copy(o).addScaledVector(yg,d);const x=1/(y+C+g);return c=C*x,d=g*x,t.copy(s).addScaledVector(Gs,c).addScaledVector(Ws,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xo{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,gi):gi.fromBufferAttribute(l,c),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Dl.copy(s.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),Ul.subVectors(this.max,Qa),js.subVectors(e.a,Qa),Xs.subVectors(e.b,Qa),qs.subVectors(e.c,Qa),Pr.subVectors(Xs,js),Lr.subVectors(qs,Xs),es.subVectors(js,qs);let t=[0,-Pr.z,Pr.y,0,-Lr.z,Lr.y,0,-es.z,es.y,Pr.z,0,-Pr.x,Lr.z,0,-Lr.x,es.z,0,-es.x,-Pr.y,Pr.x,0,-Lr.y,Lr.x,0,-es.y,es.x,0];return!Ld(t,js,Xs,qs,Ul)||(t=[1,0,0,0,1,0,0,0,1],!Ld(t,js,Xs,qs,Ul))?!1:(Fl.crossVectors(Pr,Lr),t=[Fl.x,Fl.y,Fl.z],Ld(t,js,Xs,qs,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new re,new re,new re,new re,new re,new re,new re,new re],gi=new re,Dl=new xo,js=new re,Xs=new re,qs=new re,Pr=new re,Lr=new re,es=new re,Qa=new re,Ul=new re,Fl=new re,ts=new re;function Ld(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){ts.fromArray(r,l);const d=o.x*Math.abs(ts.x)+o.y*Math.abs(ts.y)+o.z*Math.abs(ts.z),p=e.dot(ts),h=t.dot(ts),v=s.dot(ts);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>d)return!1}return!0}const Qt=new re,Ol=new bt;let jM=0;class Di{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=ag,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Za(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=On(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Za(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Za(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Za(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),s=On(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),s=On(s,this.array),o=On(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),s=On(s,this.array),o=On(o,this.array),l=On(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ag&&(e.usage=this.usage),e}}class K0 extends Di{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Z0 extends Di{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Sn extends Di{constructor(e,t,s){super(new Float32Array(e),t,s)}}const XM=new xo,eo=new re,Nd=new re;class Su{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):XM.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(eo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Nd)),this.expandByPoint(eo.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qM=0;const ni=new Xt,Id=new fn,$s=new re,Wn=new xo,to=new xo,ln=new re;class Xn extends fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AM(e)?Z0:K0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new mt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,s){return ni.makeTranslation(e,t,s),this.applyMatrix4(ni),this}scale(e,t,s){return ni.makeScale(e,t,s),this.applyMatrix4(ni),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Sn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];to.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Wn.min,to.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,to.max),Wn.expandByPoint(ln)):(Wn.expandByPoint(to.min),Wn.expandByPoint(to.max))}Wn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],p=this.morphTargetsRelative;for(let h=0,v=d.count;h<v;h++)ln.fromBufferAttribute(d,h),p&&($s.fromBufferAttribute(e,h),ln.add($s)),o=Math.max(o,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let A=0;A<s.count;A++)d[A]=new re,p[A]=new re;const h=new re,v=new re,_=new re,g=new bt,S=new bt,M=new bt,C=new re,y=new re;function x(A,N,le){h.fromBufferAttribute(s,A),v.fromBufferAttribute(s,N),_.fromBufferAttribute(s,le),g.fromBufferAttribute(l,A),S.fromBufferAttribute(l,N),M.fromBufferAttribute(l,le),v.sub(h),_.sub(h),S.sub(g),M.sub(g);const D=1/(S.x*M.y-M.x*S.y);isFinite(D)&&(C.copy(v).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(D),y.copy(_).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(D),d[A].add(C),d[N].add(C),d[le].add(C),p[A].add(y),p[N].add(y),p[le].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,N=b.length;A<N;++A){const le=b[A],D=le.start,z=le.count;for(let X=D,$=D+z;X<$;X+=3)x(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const L=new re,P=new re,O=new re,U=new re;function B(A){O.fromBufferAttribute(o,A),U.copy(O);const N=d[A];L.copy(N),L.sub(O.multiplyScalar(O.dot(N))).normalize(),P.crossVectors(U,N);const D=P.dot(p[A])<0?-1:1;c.setXYZW(A,L.x,L.y,L.z,D)}for(let A=0,N=b.length;A<N;++A){const le=b[A],D=le.start,z=le.count;for(let X=D,$=D+z;X<$;X+=3)B(e.getX(X+0)),B(e.getX(X+1)),B(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const o=new re,l=new re,c=new re,d=new re,p=new re,h=new re,v=new re,_=new re;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,y),v.subVectors(c,l),_.subVectors(o,l),v.cross(_),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,C),h.fromBufferAttribute(s,y),d.add(v),p.add(v),h.add(v),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,l),_.subVectors(o,l),v.cross(_),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,p){const h=d.array,v=d.itemSize,_=d.normalized,g=new h.constructor(p.length*v);let S=0,M=0;for(let C=0,y=p.length;C<y;C++){d.isInterleavedBufferAttribute?S=p[C]*d.data.stride+d.offset:S=p[C]*v;for(let x=0;x<v;x++)g[M++]=h[S++]}return new Di(g,v,_)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,s=this.index.array,o=this.attributes;for(const d in o){const p=o[d],h=e(p,s);t.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const p=[],h=l[d];for(let v=0,_=h.length;v<_;v++){const g=h[v],S=e(g,s);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const h=s[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let _=0,g=h.length;_<g;_++){const S=h[_];v.push(S.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(t))}const l=e.morphAttributes;for(const h in l){const v=[],_=l[h];for(let g=0,S=_.length;g<S;g++)v.push(_[g].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,v=c.length;h<v;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $M=0;class pa extends fa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=ea,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Zd,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(s.blending=this.blending),this.side!==Or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Zd&&(s.blendDst=this.blendDst),this.blendEquation!==os&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const d in l){const p=l[d];delete p.metadata,c.push(p)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new re,Dd=new re,kl=new re,Nr=new re,Ud=new re,Bl=new re,Fd=new re;class J0{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Dd.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(Dd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(kl),d=Nr.dot(this.direction),p=-Nr.dot(kl),h=Nr.lengthSq(),v=Math.abs(1-c*c);let _,g,S,M;if(v>0)if(_=c*p-d,g=c*d-p,M=l*v,_>=0)if(g>=-M)if(g<=M){const C=1/v;_*=C,g*=C,S=_*(_+c*g+2*d)+g*(c*_+g+2*p)+h}else g=l,_=Math.max(0,-(c*g+d)),S=-_*_+g*(g+2*p)+h;else g=-l,_=Math.max(0,-(c*g+d)),S=-_*_+g*(g+2*p)+h;else g<=-M?(_=Math.max(0,-(-c*l+d)),g=_>0?-l:Math.min(Math.max(-l,-p),l),S=-_*_+g*(g+2*p)+h):g<=M?(_=0,g=Math.min(Math.max(-l,-p),l),S=g*(g+2*p)+h):(_=Math.max(0,-(c*l+d)),g=_>0?l:Math.min(Math.max(-l,-p),l),S=-_*_+g*(g+2*p)+h);else g=c>0?-l:l,_=Math.max(0,-(c*g+d)),S=-_*_+g*(g+2*p)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Dd).addScaledVector(kl,g),S}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const s=Qi.dot(this.direction),o=Qi.dot(Qi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=s-c,p=s+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,d,p;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),v>=0?(l=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),_>=0?(d=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(d=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,s,o,l){Ud.subVectors(t,e),Bl.subVectors(s,e),Fd.crossVectors(Ud,Bl);let c=this.direction.dot(Fd),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Nr.subVectors(this.origin,e);const p=d*this.direction.dot(Bl.crossVectors(Nr,Bl));if(p<0)return null;const h=d*this.direction.dot(Ud.cross(Nr));if(h<0||p+h>c)return null;const v=-d*Nr.dot(Fd);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hu extends pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sg=new Xt,ns=new J0,zl=new Su,Mg=new re,Vl=new re,Hl=new re,Gl=new re,Od=new re,Wl=new re,Eg=new re,jl=new re;class Cn extends fn{constructor(e=new Xn,t=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Wl.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const v=d[p],_=l[p];v!==0&&(Od.fromBufferAttribute(_,e),c?Wl.addScaledVector(Od,v):Wl.addScaledVector(Od.sub(t),v))}t.add(Wl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),zl.copy(s.boundingSphere),zl.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(zl.containsPoint(ns.origin)===!1&&(ns.intersectSphere(zl,Mg)===null||ns.origin.distanceToSquared(Mg)>(e.far-e.near)**2))&&(Sg.copy(l).invert(),ns.copy(e.ray).applyMatrix4(Sg),!(s.boundingBox!==null&&ns.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,d=l.index,p=l.attributes.position,h=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,C=g.length;M<C;M++){const y=g[M],x=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,O=L;P<O;P+=3){const U=d.getX(P),B=d.getX(P+1),A=d.getX(P+2);o=Xl(this,x,e,s,h,v,_,U,B,A),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let y=M,x=C;y<x;y+=3){const b=d.getX(y),L=d.getX(y+1),P=d.getX(y+2);o=Xl(this,c,e,s,h,v,_,b,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let M=0,C=g.length;M<C;M++){const y=g[M],x=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,O=L;P<O;P+=3){const U=P,B=P+1,A=P+2;o=Xl(this,x,e,s,h,v,_,U,B,A),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let y=M,x=C;y<x;y+=3){const b=y,L=y+1,P=y+2;o=Xl(this,c,e,s,h,v,_,b,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function YM(r,e,t,s,o,l,c,d){let p;if(e.side===Rn?p=s.intersectTriangle(c,l,o,!0,d):p=s.intersectTriangle(o,l,c,e.side===Or,d),p===null)return null;jl.copy(d),jl.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(jl);return h<t.near||h>t.far?null:{distance:h,point:jl.clone(),object:r}}function Xl(r,e,t,s,o,l,c,d,p,h){r.getVertexPosition(d,Vl),r.getVertexPosition(p,Hl),r.getVertexPosition(h,Gl);const v=YM(r,e,t,s,Vl,Hl,Gl,Eg);if(v){const _=new re;_i.getBarycoord(Eg,Vl,Hl,Gl,_),o&&(v.uv=_i.getInterpolatedAttribute(o,d,p,h,_,new bt)),l&&(v.uv1=_i.getInterpolatedAttribute(l,d,p,h,_,new bt)),c&&(v.normal=_i.getInterpolatedAttribute(c,d,p,h,_,new re),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:p,c:h,normal:new re,materialIndex:0};_i.getNormal(Vl,Hl,Gl,g.normal),v.face=g,v.barycoord=_}return v}class KM extends yn{constructor(e=null,t=1,s=1,o,l,c,d,p,h=dn,v=dn,_,g){super(null,c,d,p,h,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kd=new re,ZM=new re,JM=new mt;class as{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=kd.subVectors(s,t).cross(ZM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(kd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||JM.getNormalMatrix(e),o=this.coplanarPoint(kd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Su,QM=new bt(.5,.5),ql=new re;class gh{constructor(e=new as,t=new as,s=new as,o=new as,l=new as,c=new as){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Pi,s=!1){const o=this.planes,l=e.elements,c=l[0],d=l[1],p=l[2],h=l[3],v=l[4],_=l[5],g=l[6],S=l[7],M=l[8],C=l[9],y=l[10],x=l[11],b=l[12],L=l[13],P=l[14],O=l[15];if(o[0].setComponents(h-c,S-v,x-M,O-b).normalize(),o[1].setComponents(h+c,S+v,x+M,O+b).normalize(),o[2].setComponents(h+d,S+_,x+C,O+L).normalize(),o[3].setComponents(h-d,S-_,x-C,O-L).normalize(),s)o[4].setComponents(p,g,y,P).normalize(),o[5].setComponents(h-p,S-g,x-y,O-P).normalize();else if(o[4].setComponents(h-p,S-g,x-y,O-P).normalize(),t===Pi)o[5].setComponents(h+p,S+g,x+y,O+P).normalize();else if(t===co)o[5].setComponents(p,g,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=QM.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(ql.x=o.normal.x>0?e.max.x:e.min.x,ql.y=o.normal.y>0?e.max.y:e.min.y,ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Q0 extends pa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new re,mu=new re,wg=new Xt,no=new J0,$l=new Su,Bd=new re,Tg=new re;class eE extends fn{constructor(e=new Xn,t=new Q0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)pu.fromBufferAttribute(t,o-1),mu.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new Sn(s,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),$l.copy(s.boundingSphere),$l.applyMatrix4(o),$l.radius+=l,e.ray.intersectsSphere($l)===!1)return;wg.copy(o).invert(),no.copy(e.ray).applyMatrix4(wg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const S=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let C=S,y=M-1;C<y;C+=h){const x=v.getX(C),b=v.getX(C+1),L=Yl(this,e,no,p,x,b,C);L&&t.push(L)}if(this.isLineLoop){const C=v.getX(M-1),y=v.getX(S),x=Yl(this,e,no,p,C,y,M-1);x&&t.push(x)}}else{const S=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let C=S,y=M-1;C<y;C+=h){const x=Yl(this,e,no,p,C,C+1,C);x&&t.push(x)}if(this.isLineLoop){const C=Yl(this,e,no,p,M-1,S,M-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Yl(r,e,t,s,o,l,c){const d=r.geometry.attributes.position;if(pu.fromBufferAttribute(d,o),mu.fromBufferAttribute(d,l),t.distanceSqToSegment(pu,mu,Bd,Tg)>s)return;Bd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Bd);if(!(h<e.near||h>e.far))return{distance:h,point:Tg.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}class ev extends yn{constructor(e=[],t=fs,s,o,l,c,d,p,h,v){super(e,t,s,o,l,c,d,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ho extends yn{constructor(e,t,s=Fi,o,l,c,d=dn,p=dn,h,v=sr,_=1){if(v!==sr&&v!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,c,d,p,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tE extends ho{constructor(e,t=Fi,s=fs,o,l,c=dn,d=dn,p,h=sr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,s,o,l,c,d,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tv extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yo extends Xn{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],v=[],_=[];let g=0,S=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,o,c,2),M("x","z","y",1,-1,e,s,-t,o,c,3),M("x","y","z",1,-1,e,t,s,o,l,4),M("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new Sn(h,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(_,2));function M(C,y,x,b,L,P,O,U,B,A,N){const le=P/B,D=O/A,z=P/2,X=O/2,$=U/2,Y=B+1,Q=A+1;let G=0,K=0;const ne=new re;for(let ce=0;ce<Q;ce++){const k=ce*D-X;for(let J=0;J<Y;J++){const Ee=J*le-z;ne[C]=Ee*b,ne[y]=k*L,ne[x]=$,h.push(ne.x,ne.y,ne.z),ne[C]=0,ne[y]=0,ne[x]=U>0?1:-1,v.push(ne.x,ne.y,ne.z),_.push(J/B),_.push(1-ce/A),G+=1}}for(let ce=0;ce<A;ce++)for(let k=0;k<B;k++){const J=g+k+Y*ce,Ee=g+k+Y*(ce+1),Le=g+(k+1)+Y*(ce+1),De=g+(k+1)+Y*ce;p.push(J,Ee,De),p.push(Ee,Le,De),K+=6}d.addGroup(S,K,N),S+=K,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mu extends Xn{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(s),p=Math.floor(o),h=d+1,v=p+1,_=e/d,g=t/p,S=[],M=[],C=[],y=[];for(let x=0;x<v;x++){const b=x*g-c;for(let L=0;L<h;L++){const P=L*_-l;M.push(P,-b,0),C.push(0,0,1),y.push(L/d),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let b=0;b<d;b++){const L=b+h*x,P=b+h*(x+1),O=b+1+h*(x+1),U=b+1+h*x;S.push(L,P,U),S.push(P,O,U)}this.setIndex(S),this.setAttribute("position",new Sn(M,3)),this.setAttribute("normal",new Sn(C,3)),this.setAttribute("uv",new Sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class vh extends Xn{constructor(e=.5,t=1,s=32,o=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:s,phiSegments:o,thetaStart:l,thetaLength:c},s=Math.max(3,s),o=Math.max(1,o);const d=[],p=[],h=[],v=[];let _=e;const g=(t-e)/o,S=new re,M=new bt;for(let C=0;C<=o;C++){for(let y=0;y<=s;y++){const x=l+y/s*c;S.x=_*Math.cos(x),S.y=_*Math.sin(x),p.push(S.x,S.y,S.z),h.push(0,0,1),M.x=(S.x/t+1)/2,M.y=(S.y/t+1)/2,v.push(M.x,M.y)}_+=g}for(let C=0;C<o;C++){const y=C*(s+1);for(let x=0;x<s;x++){const b=x+y,L=b,P=b+s+1,O=b+s+2,U=b+1;d.push(L,P,U),d.push(P,O,U)}}this.setIndex(d),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ls extends Xn{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const p=Math.min(c+d,Math.PI);let h=0;const v=[],_=new re,g=new re,S=[],M=[],C=[],y=[];for(let x=0;x<=s;x++){const b=[],L=x/s;let P=0;x===0&&c===0?P=.5/t:x===s&&p===Math.PI&&(P=-.5/t);for(let O=0;O<=t;O++){const U=O/t;_.x=-e*Math.cos(o+U*l)*Math.sin(c+L*d),_.y=e*Math.cos(c+L*d),_.z=e*Math.sin(o+U*l)*Math.sin(c+L*d),M.push(_.x,_.y,_.z),g.copy(_).normalize(),C.push(g.x,g.y,g.z),y.push(U+P,1-L),b.push(h++)}v.push(b)}for(let x=0;x<s;x++)for(let b=0;b<t;b++){const L=v[x][b+1],P=v[x][b],O=v[x+1][b],U=v[x+1][b+1];(x!==0||c>0)&&S.push(L,P,U),(x!==s-1||p<Math.PI)&&S.push(P,O,U)}this.setIndex(S),this.setAttribute("position",new Sn(M,3)),this.setAttribute("normal",new Sn(C,3)),this.setAttribute("uv",new Sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function aa(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function An(r){const e={};for(let t=0;t<r.length;t++){const s=aa(r[t]);for(const o in s)e[o]=s[o]}return e}function nE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const iE={clone:aa,merge:An};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=nE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class aE extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ag extends pa{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Mt(16777215),this.specular=new Mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j0,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=sh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oE extends pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lE extends pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Cg(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Cg(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Cg(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class uE{constructor(e,t,s){const o=this;let l=!1,c=0,d=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this._abortController=null,this.itemStart=function(v){d++,l===!1&&o.onStart!==void 0&&o.onStart(v,c,d),l=!0},this.itemEnd=function(v){c++,o.onProgress!==void 0&&o.onProgress(v,c,d),c===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return h.push(v,_),this},this.removeHandler=function(v){const _=h.indexOf(v);return _!==-1&&h.splice(_,2),this},this.getHandler=function(v){for(let _=0,g=h.length;_<g;_+=2){const S=h[_],M=h[_+1];if(S.global&&(S.lastIndex=0),S.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cE=new uE;class _h{constructor(e){this.manager=e!==void 0?e:cE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_h.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ys=new WeakMap;class dE extends _h{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=zd.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let _=Ys.get(c);_===void 0&&(_=[],Ys.set(c,_)),_.push({onLoad:t,onError:o})}return c}const d=fo("img");function p(){v(),t&&t(this);const _=Ys.get(this)||[];for(let g=0;g<_.length;g++){const S=_[g];S.onLoad&&S.onLoad(this)}Ys.delete(this),l.manager.itemEnd(e)}function h(_){v(),o&&o(_),zd.remove(`image:${e}`);const g=Ys.get(this)||[];for(let S=0;S<g.length;S++){const M=g[S];M.onError&&M.onError(_)}Ys.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){d.removeEventListener("load",p,!1),d.removeEventListener("error",h,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),zd.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class fE extends _h{constructor(e){super(e)}load(e,t,s,o){const l=new yn,c=new dE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class iv extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Vd=new Xt,Rg=new re,bg=new re;class hE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gh,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Rg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rg),bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bg),t.updateMatrixWorld(),Vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===co||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kl=new re,Zl=new ha,Ti=new re;class rv extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kl,Zl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,Zl,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Kl,Zl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,Zl,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new re,Pg=new bt,Lg=new bt;class ri extends rv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(md*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(md*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,Pg,Lg),t.subVectors(Lg,Pg)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(md*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/p,t-=c.offsetY*s/h,o*=c.width/p,s*=c.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xh extends rv{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pE extends hE{constructor(){super(new xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ng extends iv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new pE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class mE extends iv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ks=-90,Zs=1;class gE extends fn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const l=new ri(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const c=new ri(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const d=new ri(Ks,Zs,e,t);d.layers=this.layers,this.add(d);const p=new ri(Ks,Zs,e,t);p.layers=this.layers,this.add(p);const h=new ri(Ks,Zs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,d,p]=t;for(const h of t)this.remove(h);if(e===Pi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===co)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,p,h,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(s,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class vE extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _E{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,dt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ig(r,e,t,s){const o=xE(s);switch(t){case H0:return r*e;case W0:return r*e/o.components*o.byteLength;case ch:return r*e/o.components*o.byteLength;case ra:return r*e*2/o.components*o.byteLength;case dh:return r*e*2/o.components*o.byteLength;case G0:return r*e*3/o.components*o.byteLength;case xi:return r*e*4/o.components*o.byteLength;case fh:return r*e*4/o.components*o.byteLength;case ru:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case au:case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uf:case df:return Math.max(r,16)*Math.max(e,8)/4;case lf:case cf:return Math.max(r,8)*Math.max(e,8)/2;case ff:case hf:case mf:case gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pf:case vf:case _f:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Cf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case bf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case If:case Df:case Uf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ff:case Of:return Math.ceil(r/4)*Math.ceil(e/4)*8;case kf:case Bf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xE(r){switch(r){case jn:case k0:return{byteLength:1,components:1};case lo:case B0:case rr:return{byteLength:2,components:1};case lh:case uh:return{byteLength:2,components:4};case Fi:case oh:case bi:return{byteLength:4,components:1};case z0:case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sv(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function yE(r){const e=new WeakMap;function t(d,p){const h=d.array,v=d.usage,_=h.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,h,v),d.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=r.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,p,h){const v=p.array,_=p.updateRanges;if(r.bindBuffer(h,d),_.length===0)r.bufferSubData(h,0,v);else{_.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<_.length;S++){const M=_[g],C=_[S];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++g,_[g]=C)}_.length=g+1;for(let S=0,M=_.length;S<M;S++){const C=_[S];r.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,d,p),h.version=d.version}}return{get:o,remove:l,update:c}}var SE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ME=`#ifdef USE_ALPHAHASH
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
#endif`,EE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CE=`#ifdef USE_AOMAP
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
#endif`,RE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,PE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DE=`#ifdef USE_IRIDESCENCE
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
#endif`,UE=`#ifdef USE_BUMPMAP
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
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,WE=`#define PI 3.141592653589793
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
} // validated`,jE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,XE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZE="gl_FragColor = linearToOutputTexel( gl_FragColor );",JE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l1=`#ifdef USE_GRADIENTMAP
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
}`,u1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,h1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,p1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P1=`#if defined( USE_POINTS_UV )
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
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
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
#endif`,W1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ow=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uw=`#ifdef USE_SKINNING
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
#endif`,cw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hw=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sw=`uniform sampler2D t2D;
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
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Cw=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dw=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Uw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Fw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ow=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bw=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Vw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Gw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ww=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jw=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Xw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,qw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$w=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Yw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Zw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Jw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Qw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,gt={alphahash_fragment:SE,alphahash_pars_fragment:ME,alphamap_fragment:EE,alphamap_pars_fragment:wE,alphatest_fragment:TE,alphatest_pars_fragment:AE,aomap_fragment:CE,aomap_pars_fragment:RE,batching_pars_vertex:bE,batching_vertex:PE,begin_vertex:LE,beginnormal_vertex:NE,bsdfs:IE,iridescence_fragment:DE,bumpmap_pars_fragment:UE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:kE,clipping_planes_vertex:BE,color_fragment:zE,color_pars_fragment:VE,color_pars_vertex:HE,color_vertex:GE,common:WE,cube_uv_reflection_fragment:jE,defaultnormal_vertex:XE,displacementmap_pars_vertex:qE,displacementmap_vertex:$E,emissivemap_fragment:YE,emissivemap_pars_fragment:KE,colorspace_fragment:ZE,colorspace_pars_fragment:JE,envmap_fragment:QE,envmap_common_pars_fragment:e1,envmap_pars_fragment:t1,envmap_pars_vertex:n1,envmap_physical_pars_fragment:h1,envmap_vertex:i1,fog_vertex:r1,fog_pars_vertex:s1,fog_fragment:a1,fog_pars_fragment:o1,gradientmap_pars_fragment:l1,lightmap_pars_fragment:u1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:d1,lights_pars_begin:f1,lights_toon_fragment:p1,lights_toon_pars_fragment:m1,lights_phong_fragment:g1,lights_phong_pars_fragment:v1,lights_physical_fragment:_1,lights_physical_pars_fragment:x1,lights_fragment_begin:y1,lights_fragment_maps:S1,lights_fragment_end:M1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:w1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:A1,map_fragment:C1,map_pars_fragment:R1,map_particle_fragment:b1,map_particle_pars_fragment:P1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:N1,morphinstance_vertex:I1,morphcolor_vertex:D1,morphnormal_vertex:U1,morphtarget_pars_vertex:F1,morphtarget_vertex:O1,normal_fragment_begin:k1,normal_fragment_maps:B1,normal_pars_fragment:z1,normal_pars_vertex:V1,normal_vertex:H1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:W1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:q1,opaque_fragment:$1,packing:Y1,premultiplied_alpha_fragment:K1,project_vertex:Z1,dithering_fragment:J1,dithering_pars_fragment:Q1,roughnessmap_fragment:ew,roughnessmap_pars_fragment:tw,shadowmap_pars_fragment:nw,shadowmap_pars_vertex:iw,shadowmap_vertex:rw,shadowmask_pars_fragment:sw,skinbase_vertex:aw,skinning_pars_vertex:ow,skinning_vertex:lw,skinnormal_vertex:uw,specularmap_fragment:cw,specularmap_pars_fragment:dw,tonemapping_fragment:fw,tonemapping_pars_fragment:hw,transmission_fragment:pw,transmission_pars_fragment:mw,uv_pars_fragment:gw,uv_pars_vertex:vw,uv_vertex:_w,worldpos_vertex:xw,background_vert:yw,background_frag:Sw,backgroundCube_vert:Mw,backgroundCube_frag:Ew,cube_vert:ww,cube_frag:Tw,depth_vert:Aw,depth_frag:Cw,distance_vert:Rw,distance_frag:bw,equirect_vert:Pw,equirect_frag:Lw,linedashed_vert:Nw,linedashed_frag:Iw,meshbasic_vert:Dw,meshbasic_frag:Uw,meshlambert_vert:Fw,meshlambert_frag:Ow,meshmatcap_vert:kw,meshmatcap_frag:Bw,meshnormal_vert:zw,meshnormal_frag:Vw,meshphong_vert:Hw,meshphong_frag:Gw,meshphysical_vert:Ww,meshphysical_frag:jw,meshtoon_vert:Xw,meshtoon_frag:qw,points_vert:$w,points_frag:Yw,shadow_vert:Kw,shadow_frag:Zw,sprite_vert:Jw,sprite_frag:Qw},Ie={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ci={basic:{uniforms:An([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:An([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:An([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:An([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:An([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:An([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:An([Ie.points,Ie.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:An([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:An([Ie.common,Ie.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:An([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:An([Ie.sprite,Ie.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:An([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:An([Ie.lights,Ie.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ci.physical={uniforms:An([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Jl={r:0,b:0,g:0},rs=new Oi,eT=new Xt;function tT(r,e,t,s,o,l){const c=new Mt(0);let d=o===!0?0:1,p,h,v=null,_=0,g=null;function S(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){const P=b.backgroundBlurriness>0;L=e.get(L,P)}return L}function M(b){let L=!1;const P=S(b);P===null?y(c,d):P&&P.isColor&&(y(P,1),L=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(b,L){const P=S(L);P&&(P.isCubeTexture||P.mapping===yu)?(h===void 0&&(h=new Cn(new yo(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:aa(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(L.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(rs)),h.material.toneMapped=At.getTransfer(P.colorSpace)!==Dt,(v!==P||_!==P.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,v=P,_=P.version,g=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Cn(new Mu(2,2),new si({name:"BackgroundMaterial",uniforms:aa(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=At.getTransfer(P.colorSpace)!==Dt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=P,_=P.version,g=r.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function y(b,L){b.getRGB(Jl,nv(r)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,L,l)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,L=1){c.set(b),d=L,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(c,d)},render:M,addToRenderList:C,dispose:x}}function nT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=g(null);let l=o,c=!1;function d(D,z,X,$,Y){let Q=!1;const G=_(D,$,X,z);l!==G&&(l=G,h(l.object)),Q=S(D,$,X,Y),Q&&M(D,$,X,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(Q||c)&&(c=!1,P(D,z,X,$),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function p(){return r.createVertexArray()}function h(D){return r.bindVertexArray(D)}function v(D){return r.deleteVertexArray(D)}function _(D,z,X,$){const Y=$.wireframe===!0;let Q=s[z.id];Q===void 0&&(Q={},s[z.id]=Q);const G=D.isInstancedMesh===!0?D.id:0;let K=Q[G];K===void 0&&(K={},Q[G]=K);let ne=K[X.id];ne===void 0&&(ne={},K[X.id]=ne);let ce=ne[Y];return ce===void 0&&(ce=g(p()),ne[Y]=ce),ce}function g(D){const z=[],X=[],$=[];for(let Y=0;Y<t;Y++)z[Y]=0,X[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:$,object:D,attributes:{},index:null}}function S(D,z,X,$){const Y=l.attributes,Q=z.attributes;let G=0;const K=X.getAttributes();for(const ne in K)if(K[ne].location>=0){const k=Y[ne];let J=Q[ne];if(J===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;G++}return l.attributesNum!==G||l.index!==$}function M(D,z,X,$){const Y={},Q=z.attributes;let G=0;const K=X.getAttributes();for(const ne in K)if(K[ne].location>=0){let k=Q[ne];k===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(k=D.instanceColor));const J={};J.attribute=k,k&&k.data&&(J.data=k.data),Y[ne]=J,G++}l.attributes=Y,l.attributesNum=G,l.index=$}function C(){const D=l.newAttributes;for(let z=0,X=D.length;z<X;z++)D[z]=0}function y(D){x(D,0)}function x(D,z){const X=l.newAttributes,$=l.enabledAttributes,Y=l.attributeDivisors;X[D]=1,$[D]===0&&(r.enableVertexAttribArray(D),$[D]=1),Y[D]!==z&&(r.vertexAttribDivisor(D,z),Y[D]=z)}function b(){const D=l.newAttributes,z=l.enabledAttributes;for(let X=0,$=z.length;X<$;X++)z[X]!==D[X]&&(r.disableVertexAttribArray(X),z[X]=0)}function L(D,z,X,$,Y,Q,G){G===!0?r.vertexAttribIPointer(D,z,X,Y,Q):r.vertexAttribPointer(D,z,X,$,Y,Q)}function P(D,z,X,$){C();const Y=$.attributes,Q=X.getAttributes(),G=z.defaultAttributeValues;for(const K in Q){const ne=Q[K];if(ne.location>=0){let ce=Y[K];if(ce===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),ce!==void 0){const k=ce.normalized,J=ce.itemSize,Ee=e.get(ce);if(Ee===void 0)continue;const Le=Ee.buffer,De=Ee.type,te=Ee.bytesPerElement,he=De===r.INT||De===r.UNSIGNED_INT||ce.gpuType===oh;if(ce.isInterleavedBufferAttribute){const de=ce.data,be=de.stride,Ue=ce.offset;if(de.isInstancedInterleavedBuffer){for(let et=0;et<ne.locationSize;et++)x(ne.location+et,de.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let et=0;et<ne.locationSize;et++)y(ne.location+et);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let et=0;et<ne.locationSize;et++)L(ne.location+et,J/ne.locationSize,De,k,be*te,(Ue+J/ne.locationSize*et)*te,he)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<ne.locationSize;de++)x(ne.location+de,ce.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<ne.locationSize;de++)y(ne.location+de);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let de=0;de<ne.locationSize;de++)L(ne.location+de,J/ne.locationSize,De,k,J*te,J/ne.locationSize*de*te,he)}}else if(G!==void 0){const k=G[K];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(ne.location,k);break;case 3:r.vertexAttrib3fv(ne.location,k);break;case 4:r.vertexAttrib4fv(ne.location,k);break;default:r.vertexAttrib1fv(ne.location,k)}}}}b()}function O(){N();for(const D in s){const z=s[D];for(const X in z){const $=z[X];for(const Y in $){const Q=$[Y];for(const G in Q)v(Q[G].object),delete Q[G];delete $[Y]}}delete s[D]}}function U(D){if(s[D.id]===void 0)return;const z=s[D.id];for(const X in z){const $=z[X];for(const Y in $){const Q=$[Y];for(const G in Q)v(Q[G].object),delete Q[G];delete $[Y]}}delete s[D.id]}function B(D){for(const z in s){const X=s[z];for(const $ in X){const Y=X[$];if(Y[D.id]===void 0)continue;const Q=Y[D.id];for(const G in Q)v(Q[G].object),delete Q[G];delete Y[D.id]}}}function A(D){for(const z in s){const X=s[z],$=D.isInstancedMesh===!0?D.id:0,Y=X[$];if(Y!==void 0){for(const Q in Y){const G=Y[Q];for(const K in G)v(G[K].object),delete G[K];delete Y[Q]}delete X[$],Object.keys(X).length===0&&delete s[z]}}}function N(){le(),c=!0,l!==o&&(l=o,h(l.object))}function le(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:N,resetDefaultState:le,dispose:O,releaseStatesOfGeometry:U,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:y,disableUnusedAttributes:b}}function iT(r,e,t){let s;function o(h){s=h}function l(h,v){r.drawArrays(s,h,v),t.update(v,s,1)}function c(h,v,_){_!==0&&(r.drawArraysInstanced(s,h,v,_),t.update(v,s,_))}function d(h,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,v,0,_);let S=0;for(let M=0;M<_;M++)S+=v[M];t.update(S,s,1)}function p(h,v,_,g){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)c(h[M],v[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(s,h,0,v,0,g,0,_);let M=0;for(let C=0;C<_;C++)M+=v[C]*g[C];t.update(M,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function rT(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(B){return!(B!==xi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const A=B===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==jn&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==bi&&!A)}function p(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=p(h);v!==h&&(dt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:P,maxSamples:O,samples:U}}function sT(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new as,d=new mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||s!==0||o;return o=g,s=_.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,S){const M=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!o||M===null||M.length===0||l&&!y)l?v(null):h();else{const b=l?0:s,L=b*4;let P=x.clippingState||null;p.value=P,P=v(M,g,L,S);for(let O=0;O!==L;++O)P[O]=t[O];x.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,g,S,M){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=p.value,M!==!0||y===null){const x=S+C*4,b=g.matrixWorldInverse;d.getNormalMatrix(b),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,P=S;L!==C;++L,P+=4)c.copy(_[L]).applyMatrix4(b,d),c.normal.toArray(y,P),y[P+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const Fr=4,Dg=[.125,.215,.35,.446,.526,.582],us=20,aT=256,io=new xh,Ug=new Mt;let Hd=null,Gd=0,Wd=0,jd=!1;const oT=new re;class Fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:c=256,position:d=oT}=l;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Gd,Wd),this._renderer.xr.enabled=jd,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:rr,format:xi,colorSpace:sa,depthBuffer:!1},o=Og(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Og(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lT(l)),this._blurMaterial=cT(l,e,t),this._ggxMaterial=uT(l,e,t)}return o}_compileMaterial(e){const t=new Cn(new Xn,e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,s,o,l){const p=new ri(90,1,t,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(Ug),_.toneMapping=Ni,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Cn(new yo,new hu({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,x=!0):(y.color.copy(Ug),x=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,h[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[L],l.y,l.z)):P===1?(p.up.set(0,0,h[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[L],l.z)):(p.up.set(0,h[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[L]));const O=this._cubeSize;Js(o,P*O,L>2?O:0,O,O),_.setRenderTarget(o),x&&_.render(C,p),_.render(e,p)}_.toneMapping=S,_.autoClear=g,e.background=b}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===fs||e.mapping===ia;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Js(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(c,io)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[s];d.material=c;const p=c.uniforms,h=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),g=0+h*1.25,S=_*g,{_lodMax:M}=this,C=this._sizeLods[s],y=3*C*(s>M-Fr?s-M+Fr:0),x=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=M-t,Js(l,y,x,3*C,2*C),o.setRenderTarget(l),o.render(d,io),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-s,Js(e,y,x,3*C,2*C),o.setRenderTarget(e),o.render(d,io)}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,d){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=h;const g=h.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*us-1),C=l/M,y=isFinite(l)?1+Math.floor(v*C):us;y>us&&dt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${us}`);const x=[];let b=0;for(let B=0;B<us;++B){const A=B/C,N=Math.exp(-A*A/2);x.push(N),B===0?b+=N:B<y&&(b+=2*N)}for(let B=0;B<x.length;B++)x[B]=x[B]/b;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=M,g.mipInt.value=L-s;const P=this._sizeLods[o],O=3*P*(o>L-Fr?o-L+Fr:0),U=4*(this._cubeSize-P);Js(t,O,U,3*P,2*P),p.setRenderTarget(t),p.render(_,io)}}function lT(r){const e=[],t=[],s=[];let o=r;const l=r-Fr+1+Dg.length;for(let c=0;c<l;c++){const d=Math.pow(2,o);e.push(d);let p=1/d;c>r-Fr?p=Dg[c-r+Fr-1]:c===0&&(p=0),t.push(p);const h=1/(d-2),v=-h,_=1+h,g=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,M=6,C=3,y=2,x=1,b=new Float32Array(C*M*S),L=new Float32Array(y*M*S),P=new Float32Array(x*M*S);for(let U=0;U<S;U++){const B=U%3*2/3-1,A=U>2?0:-1,N=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];b.set(N,C*M*U),L.set(g,y*M*U);const le=[U,U,U,U,U,U];P.set(le,x*M*U)}const O=new Xn;O.setAttribute("position",new Di(b,C)),O.setAttribute("uv",new Di(L,y)),O.setAttribute("faceIndex",new Di(P,x)),s.push(new Cn(O,null)),o>Fr&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function Og(r,e,t){const s=new Ii(r,e,t);return s.texture.mapping=yu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function uT(r,e,t){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function cT(r,e,t){const s=new Float32Array(us),o=new re(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function kg(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Bg(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}class av extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new ev(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new yo(5,5,5),l=new si({name:"CubemapFromEquirect",uniforms:aa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Rn,blending:tr});l.uniforms.tEquirect.value=t;const c=new Cn(o,l),d=t.minFilter;return t.minFilter===cs&&(t.minFilter=xn),new gE(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}function dT(r){let e=new WeakMap,t=new WeakMap,s=null;function o(g,S=!1){return g==null?null:S?c(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===fd||S===hd)if(e.has(g)){const M=e.get(g).texture;return d(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const C=new av(M.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",h),d(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,M=S===fd||S===hd,C=S===fs||S===ia;if(M||C){let y=t.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new Fg(r)),y=M?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const b=g.image;return M&&b&&b.height>0||C&&b&&p(b)?(s===null&&(s=new Fg(r)),y=M?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function d(g,S){return S===fd?g.mapping=fs:S===hd&&(g.mapping=ia),g}function p(g){let S=0;const M=6;for(let C=0;C<M;C++)g[C]!==void 0&&S++;return S===M}function h(g){const S=g.target;S.removeEventListener("dispose",h);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function fT(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&fu("WebGLRenderer: "+s+" extension not supported."),o}}}function hT(r,e,t,s){const o={},l=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function h(_){const g=[],S=_.index,M=_.attributes.position;let C=0;if(M===void 0)return;if(S!==null){const b=S.array;C=S.version;for(let L=0,P=b.length;L<P;L+=3){const O=b[L+0],U=b[L+1],B=b[L+2];g.push(O,U,U,B,B,O)}}else{const b=M.array;C=M.version;for(let L=0,P=b.length/3-1;L<P;L+=3){const O=L+0,U=L+1,B=L+2;g.push(O,U,U,B,B,O)}}const y=new(M.count>=65535?Z0:K0)(g,1);y.version=C;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function v(_){const g=l.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&h(_)}else h(_);return l.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function pT(r,e,t){let s;function o(g){s=g}let l,c;function d(g){l=g.type,c=g.bytesPerElement}function p(g,S){r.drawElements(s,S,l,g*c),t.update(S,s,1)}function h(g,S,M){M!==0&&(r.drawElementsInstanced(s,S,l,g*c,M),t.update(S,s,M))}function v(g,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,g,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];t.update(y,s,1)}function _(g,S,M,C){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)h(g[x]/c,S[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,g,0,C,0,M);let x=0;for(let b=0;b<M;b++)x+=S[b]*C[b];t.update(x,s,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function mT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:Rt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function gT(r,e,t){const s=new WeakMap,o=new $t;function l(c,d,p){const h=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(d);if(g===void 0||g.count!==_){let le=function(){A.dispose(),s.delete(d),d.removeEventListener("dispose",le)};var S=le;g!==void 0&&g.texture.dispose();const M=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let P=0;M===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let O=d.attributes.position.count*P,U=1;O>e.maxTextureSize&&(U=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*U*4*_),A=new q0(B,O,U,_);A.type=bi,A.needsUpdate=!0;const N=P*4;for(let D=0;D<_;D++){const z=x[D],X=b[D],$=L[D],Y=O*U*4*D;for(let Q=0;Q<z.count;Q++){const G=Q*N;M===!0&&(o.fromBufferAttribute(z,Q),B[Y+G+0]=o.x,B[Y+G+1]=o.y,B[Y+G+2]=o.z,B[Y+G+3]=0),C===!0&&(o.fromBufferAttribute(X,Q),B[Y+G+4]=o.x,B[Y+G+5]=o.y,B[Y+G+6]=o.z,B[Y+G+7]=0),y===!0&&(o.fromBufferAttribute($,Q),B[Y+G+8]=o.x,B[Y+G+9]=o.y,B[Y+G+10]=o.z,B[Y+G+11]=$.itemSize===4?o.w:1)}}g={count:_,texture:A,size:new bt(O,U)},s.set(d,g),d.addEventListener("dispose",le)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const C=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(r,"morphTargetBaseInfluence",C),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function vT(r,e,t,s,o){let l=new WeakMap;function c(h){const v=o.render.frame,_=h.geometry,g=e.get(h,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==v&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),l.set(h,v))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function d(){l=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:d}}const _T={[L0]:"LINEAR_TONE_MAPPING",[N0]:"REINHARD_TONE_MAPPING",[I0]:"CINEON_TONE_MAPPING",[ah]:"ACES_FILMIC_TONE_MAPPING",[U0]:"AGX_TONE_MAPPING",[F0]:"NEUTRAL_TONE_MAPPING",[D0]:"CUSTOM_TONE_MAPPING"};function xT(r,e,t,s,o){const l=new Ii(e,t,{type:r,depthBuffer:s,stencilBuffer:o}),c=new Ii(e,t,{type:rr,depthBuffer:!1,stencilBuffer:!1}),d=new Xn;d.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const p=new aE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Cn(d,p),v=new xh(-1,1,1,-1,0,1);let _=null,g=null,S=!1,M,C=null,y=[],x=!1;this.setSize=function(b,L){l.setSize(b,L),c.setSize(b,L);for(let P=0;P<y.length;P++){const O=y[P];O.setSize&&O.setSize(b,L)}},this.setEffects=function(b){y=b,x=y.length>0&&y[0].isRenderPass===!0;const L=l.width,P=l.height;for(let O=0;O<y.length;O++){const U=y[O];U.setSize&&U.setSize(L,P)}},this.begin=function(b,L){if(S||b.toneMapping===Ni&&y.length===0)return!1;if(C=L,L!==null){const P=L.width,O=L.height;(l.width!==P||l.height!==O)&&this.setSize(P,O)}return x===!1&&b.setRenderTarget(l),M=b.toneMapping,b.toneMapping=Ni,!0},this.hasRenderPass=function(){return x},this.end=function(b,L){b.toneMapping=M,S=!0;let P=l,O=c;for(let U=0;U<y.length;U++){const B=y[U];if(B.enabled!==!1&&(B.render(b,O,P,L),B.needsSwap!==!1)){const A=P;P=O,O=A}}if(_!==b.outputColorSpace||g!==b.toneMapping){_=b.outputColorSpace,g=b.toneMapping,p.defines={},At.getTransfer(_)===Dt&&(p.defines.SRGB_TRANSFER="");const U=_T[g];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(C),b.render(h,v),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),c.dispose(),d.dispose(),p.dispose()}}const ov=new yn,Vf=new ho(1,1),lv=new q0,uv=new FM,cv=new ev,zg=[],Vg=[],Hg=new Float32Array(16),Gg=new Float32Array(9),Wg=new Float32Array(4);function ma(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=zg[o];if(l===void 0&&(l=new Float32Array(o),zg[o]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(l,d)}return l}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function wu(r,e){let t=Vg[e];t===void 0&&(t=new Int32Array(e),Vg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function yT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ST(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function MT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function ET(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function wT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;Wg.set(s),r.uniformMatrix2fv(this.addr,!1,Wg),rn(t,s)}}function TT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;Gg.set(s),r.uniformMatrix3fv(this.addr,!1,Gg),rn(t,s)}}function AT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;Hg.set(s),r.uniformMatrix4fv(this.addr,!1,Hg),rn(t,s)}}function CT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function RT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function bT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function PT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function LT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function NT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function IT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function DT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function UT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Vf.compareFunction=t.isReversedDepthBuffer()?ph:hh,l=Vf):l=ov,t.setTexture2D(e||l,o)}function FT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||uv,o)}function OT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||cv,o)}function kT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||lv,o)}function BT(r){switch(r){case 5126:return yT;case 35664:return ST;case 35665:return MT;case 35666:return ET;case 35674:return wT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return bT;case 35669:case 35673:return PT;case 5125:return LT;case 36294:return NT;case 36295:return IT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return kT}}function zT(r,e){r.uniform1fv(this.addr,e)}function VT(r,e){const t=ma(e,this.size,2);r.uniform2fv(this.addr,t)}function HT(r,e){const t=ma(e,this.size,3);r.uniform3fv(this.addr,t)}function GT(r,e){const t=ma(e,this.size,4);r.uniform4fv(this.addr,t)}function WT(r,e){const t=ma(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jT(r,e){const t=ma(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function XT(r,e){const t=ma(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function qT(r,e){r.uniform1iv(this.addr,e)}function $T(r,e){r.uniform2iv(this.addr,e)}function YT(r,e){r.uniform3iv(this.addr,e)}function KT(r,e){r.uniform4iv(this.addr,e)}function ZT(r,e){r.uniform1uiv(this.addr,e)}function JT(r,e){r.uniform2uiv(this.addr,e)}function QT(r,e){r.uniform3uiv(this.addr,e)}function eA(r,e){r.uniform4uiv(this.addr,e)}function tA(r,e,t){const s=this.cache,o=e.length,l=wu(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=Vf:c=ov;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,l[d])}function nA(r,e,t){const s=this.cache,o=e.length,l=wu(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||uv,l[c])}function iA(r,e,t){const s=this.cache,o=e.length,l=wu(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||cv,l[c])}function rA(r,e,t){const s=this.cache,o=e.length,l=wu(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||lv,l[c])}function sA(r){switch(r){case 5126:return zT;case 35664:return VT;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return jT;case 35676:return XT;case 5124:case 35670:return qT;case 35667:case 35671:return $T;case 35668:case 35672:return YT;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return JT;case 36295:return QT;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}class aA{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=BT(t.type)}}class oA{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sA(t.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function jg(r,e){r.seq.push(e),r.map[e.id]=e}function uA(r,e,t){const s=r.name,o=s.length;for(Xd.lastIndex=0;;){const l=Xd.exec(s),c=Xd.lastIndex;let d=l[1];const p=l[2]==="]",h=l[3];if(p&&(d=d|0),h===void 0||h==="["&&c+2===o){jg(t,h===void 0?new aA(d,r,e):new oA(d,r,e));break}else{let _=t.map[d];_===void 0&&(_=new lA(d),jg(t,_)),t=_}}}class lu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const d=e.getActiveUniform(t,c),p=e.getUniformLocation(t,d.name);uA(d,p,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function Xg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const cA=37297;let dA=0;function fA(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}const qg=new mt;function hA(r){At._getMatrix(qg,At.workingColorSpace,r);const e=`mat3( ${qg.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(r)){case du:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $g(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+fA(r.getShaderSource(e),d)}else return l}function pA(r,e){const t=hA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mA={[L0]:"Linear",[N0]:"Reinhard",[I0]:"Cineon",[ah]:"ACESFilmic",[U0]:"AgX",[F0]:"Neutral",[D0]:"Custom"};function gA(r,e){const t=mA[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new re;function vA(){At.getLuminanceCoefficients(Ql);const r=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function xA(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function yA(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function ao(r){return r!==""}function Yg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(r){return r.replace(SA,EA)}const MA=new Map;function EA(r,e){let t=gt[e];if(t===void 0){const s=MA.get(e);if(s!==void 0)t=gt[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Hf(t)}const wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(r){return r.replace(wA,TA)}function TA(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Jg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const AA={[iu]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function CA(r){return AA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RA={[fs]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE",[yu]:"ENVMAP_TYPE_CUBE_UV"};function bA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":RA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const PA={[ia]:"ENVMAP_MODE_REFRACTION"};function LA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":PA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NA={[sh]:"ENVMAP_BLENDING_MULTIPLY",[mM]:"ENVMAP_BLENDING_MIX",[gM]:"ENVMAP_BLENDING_ADD"};function IA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":NA[r.combine]||"ENVMAP_BLENDING_NONE"}function DA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function UA(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const p=CA(t),h=bA(t),v=LA(t),_=IA(t),g=DA(t),S=_A(t),M=xA(l),C=o.createProgram();let y,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ao).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ao).join(`
`),x.length>0&&(x+=`
`)):(y=[Jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),x=[Jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?gA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,pA("linearToOutputTexel",t.outputColorSpace),vA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),c=Hf(c),c=Yg(c,t),c=Kg(c,t),d=Hf(d),d=Yg(d,t),d=Kg(d,t),c=Zg(c),d=Zg(d),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===og?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=b+y+c,P=b+x+d,O=Xg(o,o.VERTEX_SHADER,L),U=Xg(o,o.FRAGMENT_SHADER,P);o.attachShader(C,O),o.attachShader(C,U),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function B(D){if(r.debug.checkShaderErrors){const z=o.getProgramInfoLog(C)||"",X=o.getShaderInfoLog(O)||"",$=o.getShaderInfoLog(U)||"",Y=z.trim(),Q=X.trim(),G=$.trim();let K=!0,ne=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,C,O,U);else{const ce=$g(o,O,"vertex"),k=$g(o,U,"fragment");Rt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+ce+`
`+k)}else Y!==""?dt("WebGLProgram: Program Info Log:",Y):(Q===""||G==="")&&(ne=!1);ne&&(D.diagnostics={runnable:K,programLog:Y,vertexShader:{log:Q,prefix:y},fragmentShader:{log:G,prefix:x}})}o.deleteShader(O),o.deleteShader(U),A=new lu(o,C),N=yA(o,C)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let le=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return le===!1&&(le=o.getProgramParameter(C,cA)),le},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=U,this}let FA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new kA(e),t.set(e,s)),s}}class kA{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}}function BA(r,e,t,s,o,l){const c=new $0,d=new OA,p=new Set,h=[],v=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return p.add(A),A===0?"uv":`uv${A}`}function C(A,N,le,D,z){const X=D.fog,$=z.geometry,Y=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?D.environment:null,Q=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,G=e.get(A.envMap||Y,Q),K=G&&G.mapping===yu?G.image.height:null,ne=S[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&dt("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,k=ce!==void 0?ce.length:0;let J=0;$.morphAttributes.position!==void 0&&(J=1),$.morphAttributes.normal!==void 0&&(J=2),$.morphAttributes.color!==void 0&&(J=3);let Ee,Le,De,te;if(ne){const wt=Ci[ne];Ee=wt.vertexShader,Le=wt.fragmentShader}else Ee=A.vertexShader,Le=A.fragmentShader,d.update(A),De=d.getVertexShaderID(A),te=d.getFragmentShaderID(A);const he=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),be=z.isInstancedMesh===!0,Ue=z.isBatchedMesh===!0,et=!!A.map,Pt=!!A.matcap,$e=!!G,Ye=!!A.aoMap,ft=!!A.lightMap,at=!!A.bumpMap,Ut=!!A.normalMap,H=!!A.displacementMap,Vt=!!A.emissiveMap,_t=!!A.metalnessMap,Et=!!A.roughnessMap,Xe=A.anisotropy>0,I=A.clearcoat>0,E=A.dispersion>0,q=A.iridescence>0,ge=A.sheen>0,ve=A.transmission>0,pe=Xe&&!!A.anisotropyMap,He=I&&!!A.clearcoatMap,Ce=I&&!!A.clearcoatNormalMap,Je=I&&!!A.clearcoatRoughnessMap,ot=q&&!!A.iridescenceMap,Se=q&&!!A.iridescenceThicknessMap,Ae=ge&&!!A.sheenColorMap,qe=ge&&!!A.sheenRoughnessMap,Ge=!!A.specularMap,Fe=!!A.specularColorMap,ht=!!A.specularIntensityMap,W=ve&&!!A.transmissionMap,Re=ve&&!!A.thicknessMap,we=!!A.gradientMap,Oe=!!A.alphaMap,Me=A.alphaTest>0,me=!!A.alphaHash,We=!!A.extensions;let lt=Ni;A.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(lt=r.toneMapping);const It={shaderID:ne,shaderType:A.type,shaderName:A.name,vertexShader:Ee,fragmentShader:Le,defines:A.defines,customVertexShaderID:De,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Ue,batchingColor:Ue&&z._colorsTexture!==null,instancing:be,instancingColor:be&&z.instanceColor!==null,instancingMorph:be&&z.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:sa,alphaToCoverage:!!A.alphaToCoverage,map:et,matcap:Pt,envMap:$e,envMapMode:$e&&G.mapping,envMapCubeUVHeight:K,aoMap:Ye,lightMap:ft,bumpMap:at,normalMap:Ut,displacementMap:H,emissiveMap:Vt,normalMapObjectSpace:Ut&&A.normalMapType===xM,normalMapTangentSpace:Ut&&A.normalMapType===j0,metalnessMap:_t,roughnessMap:Et,anisotropy:Xe,anisotropyMap:pe,clearcoat:I,clearcoatMap:He,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Je,dispersion:E,iridescence:q,iridescenceMap:ot,iridescenceThicknessMap:Se,sheen:ge,sheenColorMap:Ae,sheenRoughnessMap:qe,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:ht,transmission:ve,transmissionMap:W,thicknessMap:Re,gradientMap:we,opaque:A.transparent===!1&&A.blending===ea&&A.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Me,alphaHash:me,combine:A.combine,mapUv:et&&M(A.map.channel),aoMapUv:Ye&&M(A.aoMap.channel),lightMapUv:ft&&M(A.lightMap.channel),bumpMapUv:at&&M(A.bumpMap.channel),normalMapUv:Ut&&M(A.normalMap.channel),displacementMapUv:H&&M(A.displacementMap.channel),emissiveMapUv:Vt&&M(A.emissiveMap.channel),metalnessMapUv:_t&&M(A.metalnessMap.channel),roughnessMapUv:Et&&M(A.roughnessMap.channel),anisotropyMapUv:pe&&M(A.anisotropyMap.channel),clearcoatMapUv:He&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:qe&&M(A.sheenRoughnessMap.channel),specularMapUv:Ge&&M(A.specularMap.channel),specularColorMapUv:Fe&&M(A.specularColorMap.channel),specularIntensityMapUv:ht&&M(A.specularIntensityMap.channel),transmissionMapUv:W&&M(A.transmissionMap.channel),thicknessMapUv:Re&&M(A.thicknessMap.channel),alphaMapUv:Oe&&M(A.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ut||Xe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(et||Oe),fog:!!X,useFog:A.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||$.attributes.normal===void 0&&Ut===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:de,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:J,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&le.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:et&&A.map.isVideoTexture===!0&&At.getTransfer(A.map.colorSpace)===Dt,decodeVideoTextureEmissive:Vt&&A.emissiveMap.isVideoTexture===!0&&At.getTransfer(A.emissiveMap.colorSpace)===Dt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ri,flipSided:A.side===Rn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:We&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&A.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function y(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const le in A.defines)N.push(le),N.push(A.defines[le]);return A.isRawShaderMaterial===!1&&(x(N,A),b(N,A),N.push(r.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function x(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function b(A,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),A.push(c.mask)}function L(A){const N=S[A.type];let le;if(N){const D=Ci[N];le=iE.clone(D.uniforms)}else le=A.uniforms;return le}function P(A,N){let le=v.get(N);return le!==void 0?++le.usedTimes:(le=new UA(r,N,A,o),h.push(le),v.set(N,le)),le}function O(A){if(--A.usedTimes===0){const N=h.indexOf(A);h[N]=h[h.length-1],h.pop(),v.delete(A.cacheKey),A.destroy()}}function U(A){d.remove(A)}function B(){d.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:L,acquireProgram:P,releaseProgram:O,releaseShaderCache:U,programs:h,dispose:B}}function zA(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function s(c){r.delete(c)}function o(c,d,p){r.get(c)[d]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function VA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Qg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function e0(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,M,C,y,x){let b=r[e];return b===void 0?(b={id:g.id,object:g,geometry:S,material:M,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:x},r[e]=b):(b.id=g.id,b.object=g,b.geometry=S,b.material=M,b.materialVariant=c(g),b.groupOrder=C,b.renderOrder=g.renderOrder,b.z=y,b.group=x),e++,b}function p(g,S,M,C,y,x){const b=d(g,S,M,C,y,x);M.transmission>0?s.push(b):M.transparent===!0?o.push(b):t.push(b)}function h(g,S,M,C,y,x){const b=d(g,S,M,C,y,x);M.transmission>0?s.unshift(b):M.transparent===!0?o.unshift(b):t.unshift(b)}function v(g,S){t.length>1&&t.sort(g||VA),s.length>1&&s.sort(S||Qg),o.length>1&&o.sort(S||Qg)}function _(){for(let g=e,S=r.length;g<S;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:p,unshift:h,finish:_,sort:v}}function HA(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new e0,r.set(s,[c])):o>=l.length?(c=new e0,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function GA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Mt};break;case"SpotLight":t={position:new re,direction:new re,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=t,t}}}function WA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let jA=0;function XA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function qA(r){const e=new GA,t=WA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new re);const o=new re,l=new Xt,c=new Xt;function d(h){let v=0,_=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,M=0,C=0,y=0,x=0,b=0,L=0,P=0,O=0,U=0,B=0;h.sort(XA);for(let N=0,le=h.length;N<le;N++){const D=h[N],z=D.color,X=D.intensity,$=D.distance;let Y=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ra?Y=D.shadow.map.texture:Y=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)v+=z.r*X,_+=z.g*X,g+=z.b*X;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(D.sh.coefficients[Q],X);B++}else if(D.isDirectionalLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,K=t.get(D);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,s.directionalShadow[S]=K,s.directionalShadowMap[S]=Y,s.directionalShadowMatrix[S]=D.shadow.matrix,b++}s.directional[S]=Q,S++}else if(D.isSpotLight){const Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(z).multiplyScalar(X),Q.distance=$,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,s.spot[C]=Q;const G=D.shadow;if(D.map&&(s.spotLightMap[O]=D.map,O++,G.updateMatrices(D),D.castShadow&&U++),s.spotLightMatrix[C]=G.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,s.spotShadow[C]=K,s.spotShadowMap[C]=Y,P++}C++}else if(D.isRectAreaLight){const Q=e.get(D);Q.color.copy(z).multiplyScalar(X),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=Q,y++}else if(D.isPointLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const G=D.shadow,K=t.get(D);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,s.pointShadow[M]=K,s.pointShadowMap[M]=Y,s.pointShadowMatrix[M]=D.shadow.matrix,L++}s.point[M]=Q,M++}else if(D.isHemisphereLight){const Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(X),Q.groundColor.copy(D.groundColor).multiplyScalar(X),s.hemi[x]=Q,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=g;const A=s.hash;(A.directionalLength!==S||A.pointLength!==M||A.spotLength!==C||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==b||A.numPointShadows!==L||A.numSpotShadows!==P||A.numSpotMaps!==O||A.numLightProbes!==B)&&(s.directional.length=S,s.spot.length=C,s.rectArea.length=y,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+O-U,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=B,A.directionalLength=S,A.pointLength=M,A.spotLength=C,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=b,A.numPointShadows=L,A.numSpotShadows=P,A.numSpotMaps=O,A.numLightProbes=B,s.version=jA++)}function p(h,v){let _=0,g=0,S=0,M=0,C=0;const y=v.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){const L=h[x];if(L.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),_++}else if(L.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const P=s.rectArea[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const P=s.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const P=s.hemi[C];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),C++}}}return{setup:d,setupView:p,state:s}}function t0(r){const e=new qA(r),t=[],s=[];function o(v){h.camera=v,t.length=0,s.length=0}function l(v){t.push(v)}function c(v){s.push(v)}function d(){e.setup(t)}function p(v){e.setupView(t,v)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:c}}function $A(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new t0(r),e.set(o,[d])):l>=c.length?(d=new t0(r),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZA=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],JA=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],n0=new Xt,ro=new re,qd=new re;function QA(r,e,t){let s=new gh;const o=new bt,l=new bt,c=new $t,d=new oE,p=new lE,h={},v=t.maxTextureSize,_={[Or]:Rn,[Rn]:Or,[Ri]:Ri},g=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:YA,fragmentShader:KA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new Xn;M.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Cn(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let x=this.type;this.render=function(U,B,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===KS&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=iu);const N=r.getRenderTarget(),le=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),z=r.state;z.setBlending(tr),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=x!==this.type;X&&B.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(Y=>Y.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,Y=U.length;$<Y;$++){const Q=U[$],G=Q.shadow;if(G===void 0){dt("WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const K=G.getFrameExtents();o.multiply(K),l.copy(G.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/K.x),o.x=l.x*K.x,G.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/K.y),o.y=l.y*K.y,G.mapSize.y=l.y));const ne=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ne,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===so){if(Q.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ii(o.x,o.y,{format:ra,type:rr,minFilter:xn,magFilter:xn,generateMipmaps:!1}),G.map.texture.name=Q.name+".shadowMap",G.map.depthTexture=new ho(o.x,o.y,bi),G.map.depthTexture.name=Q.name+".shadowMapDepth",G.map.depthTexture.format=sr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn}else Q.isPointLight?(G.map=new av(o.x),G.map.depthTexture=new tE(o.x,Fi)):(G.map=new Ii(o.x,o.y),G.map.depthTexture=new ho(o.x,o.y,Fi)),G.map.depthTexture.name=Q.name+".shadowMap",G.map.depthTexture.format=sr,this.type===iu?(G.map.depthTexture.compareFunction=ne?ph:hh,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn);G.camera.updateProjectionMatrix()}const ce=G.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ce;k++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,k),r.clear();else{k===0&&(r.setRenderTarget(G.map),r.clear());const J=G.getViewport(k);c.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),z.viewport(c)}if(Q.isPointLight){const J=G.camera,Ee=G.matrix,Le=Q.distance||J.far;Le!==J.far&&(J.far=Le,J.updateProjectionMatrix()),ro.setFromMatrixPosition(Q.matrixWorld),J.position.copy(ro),qd.copy(J.position),qd.add(ZA[k]),J.up.copy(JA[k]),J.lookAt(qd),J.updateMatrixWorld(),Ee.makeTranslation(-ro.x,-ro.y,-ro.z),n0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(n0,J.coordinateSystem,J.reversedDepth)}else G.updateMatrices(Q);s=G.getFrustum(),P(B,A,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===so&&b(G,A),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(N,le,D)};function b(U,B){const A=e.update(C);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ii(o.x,o.y,{format:ra,type:rr})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(B,null,A,g,C,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(B,null,A,S,C,null)}function L(U,B,A,N){let le=null;const D=A.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(D!==void 0)le=D;else if(le=A.isPointLight===!0?p:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const z=le.uuid,X=B.uuid;let $=h[z];$===void 0&&($={},h[z]=$);let Y=$[X];Y===void 0&&(Y=le.clone(),$[X]=Y,B.addEventListener("dispose",O)),le=Y}if(le.visible=B.visible,le.wireframe=B.wireframe,N===so?le.side=B.shadowSide!==null?B.shadowSide:B.side:le.side=B.shadowSide!==null?B.shadowSide:_[B.side],le.alphaMap=B.alphaMap,le.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,le.map=B.map,le.clipShadows=B.clipShadows,le.clippingPlanes=B.clippingPlanes,le.clipIntersection=B.clipIntersection,le.displacementMap=B.displacementMap,le.displacementScale=B.displacementScale,le.displacementBias=B.displacementBias,le.wireframeLinewidth=B.wireframeLinewidth,le.linewidth=B.linewidth,A.isPointLight===!0&&le.isMeshDistanceMaterial===!0){const z=r.properties.get(le);z.light=A}return le}function P(U,B,A,N,le){if(U.visible===!1)return;if(U.layers.test(B.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&le===so)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,U.matrixWorld);const X=e.update(U),$=U.material;if(Array.isArray($)){const Y=X.groups;for(let Q=0,G=Y.length;Q<G;Q++){const K=Y[Q],ne=$[K.materialIndex];if(ne&&ne.visible){const ce=L(U,ne,N,le);U.onBeforeShadow(r,U,B,A,X,ce,K),r.renderBufferDirect(A,null,X,ce,U,K),U.onAfterShadow(r,U,B,A,X,ce,K)}}}else if($.visible){const Y=L(U,$,N,le);U.onBeforeShadow(r,U,B,A,X,Y,null),r.renderBufferDirect(A,null,X,Y,U,null),U.onAfterShadow(r,U,B,A,X,Y,null)}}const z=U.children;for(let X=0,$=z.length;X<$;X++)P(z[X],B,A,N,le)}function O(U){U.target.removeEventListener("dispose",O);for(const A in h){const N=h[A],le=U.target.uuid;le in N&&(N[le].dispose(),delete N[le])}}}function eC(r,e){function t(){let W=!1;const Re=new $t;let we=null;const Oe=new $t(0,0,0,0);return{setMask:function(Me){we!==Me&&!W&&(r.colorMask(Me,Me,Me,Me),we=Me)},setLocked:function(Me){W=Me},setClear:function(Me,me,We,lt,It){It===!0&&(Me*=lt,me*=lt,We*=lt),Re.set(Me,me,We,lt),Oe.equals(Re)===!1&&(r.clearColor(Me,me,We,lt),Oe.copy(Re))},reset:function(){W=!1,we=null,Oe.set(-1,0,0,0)}}}function s(){let W=!1,Re=!1,we=null,Oe=null,Me=null;return{setReversed:function(me){if(Re!==me){const We=e.get("EXT_clip_control");me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Re=me;const lt=Me;Me=null,this.setClear(lt)}},getReversed:function(){return Re},setTest:function(me){me?he(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(me){we!==me&&!W&&(r.depthMask(me),we=me)},setFunc:function(me){if(Re&&(me=bM[me]),Oe!==me){switch(me){case Jd:r.depthFunc(r.NEVER);break;case Qd:r.depthFunc(r.ALWAYS);break;case ef:r.depthFunc(r.LESS);break;case na:r.depthFunc(r.LEQUAL);break;case tf:r.depthFunc(r.EQUAL);break;case nf:r.depthFunc(r.GEQUAL);break;case rf:r.depthFunc(r.GREATER);break;case sf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=me}},setLocked:function(me){W=me},setClear:function(me){Me!==me&&(Me=me,Re&&(me=1-me),r.clearDepth(me))},reset:function(){W=!1,we=null,Oe=null,Me=null,Re=!1}}}function o(){let W=!1,Re=null,we=null,Oe=null,Me=null,me=null,We=null,lt=null,It=null;return{setTest:function(wt){W||(wt?he(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(wt){Re!==wt&&!W&&(r.stencilMask(wt),Re=wt)},setFunc:function(wt,qn,Mn){(we!==wt||Oe!==qn||Me!==Mn)&&(r.stencilFunc(wt,qn,Mn),we=wt,Oe=qn,Me=Mn)},setOp:function(wt,qn,Mn){(me!==wt||We!==qn||lt!==Mn)&&(r.stencilOp(wt,qn,Mn),me=wt,We=qn,lt=Mn)},setLocked:function(wt){W=wt},setClear:function(wt){It!==wt&&(r.clearStencil(wt),It=wt)},reset:function(){W=!1,Re=null,we=null,Oe=null,Me=null,me=null,We=null,lt=null,It=null}}}const l=new t,c=new s,d=new o,p=new WeakMap,h=new WeakMap;let v={},_={},g=new WeakMap,S=[],M=null,C=!1,y=null,x=null,b=null,L=null,P=null,O=null,U=null,B=new Mt(0,0,0),A=0,N=!1,le=null,D=null,z=null,X=null,$=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,G=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),Q=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Q=G>=2);let ne=null,ce={};const k=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),Ee=new $t().fromArray(k),Le=new $t().fromArray(J);function De(W,Re,we,Oe){const Me=new Uint8Array(4),me=r.createTexture();r.bindTexture(W,me),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<we;We++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Re+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return me}const te={};te[r.TEXTURE_2D]=De(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=De(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=De(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=De(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),he(r.DEPTH_TEST),c.setFunc(na),at(!1),Ut(ng),he(r.CULL_FACE),Ye(tr);function he(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function de(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function be(W,Re){return _[W]!==Re?(r.bindFramebuffer(W,Re),_[W]=Re,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Re),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ue(W,Re){let we=S,Oe=!1;if(W){we=g.get(Re),we===void 0&&(we=[],g.set(Re,we));const Me=W.textures;if(we.length!==Me.length||we[0]!==r.COLOR_ATTACHMENT0){for(let me=0,We=Me.length;me<We;me++)we[me]=r.COLOR_ATTACHMENT0+me;we.length=Me.length,Oe=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(we)}function et(W){return M!==W?(r.useProgram(W),M=W,!0):!1}const Pt={[os]:r.FUNC_ADD,[JS]:r.FUNC_SUBTRACT,[QS]:r.FUNC_REVERSE_SUBTRACT};Pt[eM]=r.MIN,Pt[tM]=r.MAX;const $e={[nM]:r.ZERO,[iM]:r.ONE,[rM]:r.SRC_COLOR,[Kd]:r.SRC_ALPHA,[cM]:r.SRC_ALPHA_SATURATE,[lM]:r.DST_COLOR,[aM]:r.DST_ALPHA,[sM]:r.ONE_MINUS_SRC_COLOR,[Zd]:r.ONE_MINUS_SRC_ALPHA,[uM]:r.ONE_MINUS_DST_COLOR,[oM]:r.ONE_MINUS_DST_ALPHA,[dM]:r.CONSTANT_COLOR,[fM]:r.ONE_MINUS_CONSTANT_COLOR,[hM]:r.CONSTANT_ALPHA,[pM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ye(W,Re,we,Oe,Me,me,We,lt,It,wt){if(W===tr){C===!0&&(de(r.BLEND),C=!1);return}if(C===!1&&(he(r.BLEND),C=!0),W!==ZS){if(W!==y||wt!==N){if((x!==os||P!==os)&&(r.blendEquation(r.FUNC_ADD),x=os,P=os),wt)switch(W){case ea:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cu:r.blendFunc(r.ONE,r.ONE);break;case ig:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case ea:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ig:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rg:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}b=null,L=null,O=null,U=null,B.set(0,0,0),A=0,y=W,N=wt}return}Me=Me||Re,me=me||we,We=We||Oe,(Re!==x||Me!==P)&&(r.blendEquationSeparate(Pt[Re],Pt[Me]),x=Re,P=Me),(we!==b||Oe!==L||me!==O||We!==U)&&(r.blendFuncSeparate($e[we],$e[Oe],$e[me],$e[We]),b=we,L=Oe,O=me,U=We),(lt.equals(B)===!1||It!==A)&&(r.blendColor(lt.r,lt.g,lt.b,It),B.copy(lt),A=It),y=W,N=!1}function ft(W,Re){W.side===Ri?de(r.CULL_FACE):he(r.CULL_FACE);let we=W.side===Rn;Re&&(we=!we),at(we),W.blending===ea&&W.transparent===!1?Ye(tr):Ye(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Oe=W.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Vt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(W){le!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),le=W)}function Ut(W){W!==$S?(he(r.CULL_FACE),W!==D&&(W===ng?r.cullFace(r.BACK):W===YS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),D=W}function H(W){W!==z&&(Q&&r.lineWidth(W),z=W)}function Vt(W,Re,we){W?(he(r.POLYGON_OFFSET_FILL),(X!==Re||$!==we)&&(X=Re,$=we,c.getReversed()&&(Re=-Re),r.polygonOffset(Re,we))):de(r.POLYGON_OFFSET_FILL)}function _t(W){W?he(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function Et(W){W===void 0&&(W=r.TEXTURE0+Y-1),ne!==W&&(r.activeTexture(W),ne=W)}function Xe(W,Re,we){we===void 0&&(ne===null?we=r.TEXTURE0+Y-1:we=ne);let Oe=ce[we];Oe===void 0&&(Oe={type:void 0,texture:void 0},ce[we]=Oe),(Oe.type!==W||Oe.texture!==Re)&&(ne!==we&&(r.activeTexture(we),ne=we),r.bindTexture(W,Re||te[W]),Oe.type=W,Oe.texture=Re)}function I(){const W=ce[ne];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ge(){try{r.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ve(){try{r.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function pe(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function He(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ce(){try{r.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Je(){try{r.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ot(){try{r.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Se(){try{r.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ae(W){Ee.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Ee.copy(W))}function qe(W){Le.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Le.copy(W))}function Ge(W,Re){let we=h.get(Re);we===void 0&&(we=new WeakMap,h.set(Re,we));let Oe=we.get(W);Oe===void 0&&(Oe=r.getUniformBlockIndex(Re,W.name),we.set(W,Oe))}function Fe(W,Re){const Oe=h.get(Re).get(W);p.get(Re)!==Oe&&(r.uniformBlockBinding(Re,Oe,W.__bindingPointIndex),p.set(Re,Oe))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ne=null,ce={},_={},g=new WeakMap,S=[],M=null,C=!1,y=null,x=null,b=null,L=null,P=null,O=null,U=null,B=new Mt(0,0,0),A=0,N=!1,le=null,D=null,z=null,X=null,$=null,Ee.set(0,0,r.canvas.width,r.canvas.height),Le.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:he,disable:de,bindFramebuffer:be,drawBuffers:Ue,useProgram:et,setBlending:Ye,setMaterial:ft,setFlipSided:at,setCullFace:Ut,setLineWidth:H,setPolygonOffset:Vt,setScissorTest:_t,activeTexture:Et,bindTexture:Xe,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ot,texImage3D:Se,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:Ce,texStorage3D:Je,texSubImage2D:ge,texSubImage3D:ve,compressedTexSubImage2D:pe,compressedTexSubImage3D:He,scissor:Ae,viewport:qe,reset:ht}}function tC(r,e,t,s,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,v=new WeakMap;let _;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,E){return S?new OffscreenCanvas(I,E):fo("canvas")}function C(I,E,q){let ge=1;const ve=Xe(I);if((ve.width>q||ve.height>q)&&(ge=q/Math.max(ve.width,ve.height)),ge<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pe=Math.floor(ge*ve.width),He=Math.floor(ge*ve.height);_===void 0&&(_=M(pe,He));const Ce=E?M(pe,He):_;return Ce.width=pe,Ce.height=He,Ce.getContext("2d").drawImage(I,0,0,pe,He),dt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+pe+"x"+He+")."),Ce}else return"data"in I&&dt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){r.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,E,q,ge,ve=!1){if(I!==null){if(r[I]!==void 0)return r[I];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pe=E;if(E===r.RED&&(q===r.FLOAT&&(pe=r.R32F),q===r.HALF_FLOAT&&(pe=r.R16F),q===r.UNSIGNED_BYTE&&(pe=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(pe=r.R8UI),q===r.UNSIGNED_SHORT&&(pe=r.R16UI),q===r.UNSIGNED_INT&&(pe=r.R32UI),q===r.BYTE&&(pe=r.R8I),q===r.SHORT&&(pe=r.R16I),q===r.INT&&(pe=r.R32I)),E===r.RG&&(q===r.FLOAT&&(pe=r.RG32F),q===r.HALF_FLOAT&&(pe=r.RG16F),q===r.UNSIGNED_BYTE&&(pe=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(pe=r.RG8UI),q===r.UNSIGNED_SHORT&&(pe=r.RG16UI),q===r.UNSIGNED_INT&&(pe=r.RG32UI),q===r.BYTE&&(pe=r.RG8I),q===r.SHORT&&(pe=r.RG16I),q===r.INT&&(pe=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),q===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),q===r.UNSIGNED_INT&&(pe=r.RGB32UI),q===r.BYTE&&(pe=r.RGB8I),q===r.SHORT&&(pe=r.RGB16I),q===r.INT&&(pe=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),q===r.UNSIGNED_INT&&(pe=r.RGBA32UI),q===r.BYTE&&(pe=r.RGBA8I),q===r.SHORT&&(pe=r.RGBA16I),q===r.INT&&(pe=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),E===r.RGBA){const He=ve?du:At.getTransfer(ge);q===r.FLOAT&&(pe=r.RGBA32F),q===r.HALF_FLOAT&&(pe=r.RGBA16F),q===r.UNSIGNED_BYTE&&(pe=He===Dt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(I,E){let q;return I?E===null||E===Fi||E===uo?q=r.DEPTH24_STENCIL8:E===bi?q=r.DEPTH32F_STENCIL8:E===lo&&(q=r.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Fi||E===uo?q=r.DEPTH_COMPONENT24:E===bi?q=r.DEPTH_COMPONENT32F:E===lo&&(q=r.DEPTH_COMPONENT16),q}function O(I,E){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==dn&&I.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function U(I){const E=I.target;E.removeEventListener("dispose",U),A(E),E.isVideoTexture&&v.delete(E)}function B(I){const E=I.target;E.removeEventListener("dispose",B),le(E)}function A(I){const E=s.get(I);if(E.__webglInit===void 0)return;const q=I.source,ge=g.get(q);if(ge){const ve=ge[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&N(I),Object.keys(ge).length===0&&g.delete(q)}s.remove(I)}function N(I){const E=s.get(I);r.deleteTexture(E.__webglTexture);const q=I.source,ge=g.get(q);delete ge[E.__cacheKey],c.memory.textures--}function le(I){const E=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let ve=0;ve<E.__webglFramebuffer[ge].length;ve++)r.deleteFramebuffer(E.__webglFramebuffer[ge][ve]);else r.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)r.deleteFramebuffer(E.__webglFramebuffer[ge]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=I.textures;for(let ge=0,ve=q.length;ge<ve;ge++){const pe=s.get(q[ge]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),c.memory.textures--),s.remove(q[ge])}s.remove(I)}let D=0;function z(){D=0}function X(){const I=D;return I>=o.maxTextures&&dt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),D+=1,I}function $(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function Y(I,E){const q=s.get(I);if(I.isVideoTexture&&_t(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){const ge=I.image;if(ge===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,I,E);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function Q(I,E){const q=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){te(q,I,E);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function G(I,E){const q=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){te(q,I,E);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function K(I,E){const q=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&q.__version!==I.version){he(q,I,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const ne={[af]:r.REPEAT,[er]:r.CLAMP_TO_EDGE,[of]:r.MIRRORED_REPEAT},ce={[dn]:r.NEAREST,[vM]:r.NEAREST_MIPMAP_NEAREST,[Pl]:r.NEAREST_MIPMAP_LINEAR,[xn]:r.LINEAR,[pd]:r.LINEAR_MIPMAP_NEAREST,[cs]:r.LINEAR_MIPMAP_LINEAR},k={[yM]:r.NEVER,[TM]:r.ALWAYS,[SM]:r.LESS,[hh]:r.LEQUAL,[MM]:r.EQUAL,[ph]:r.GEQUAL,[EM]:r.GREATER,[wM]:r.NOTEQUAL};function J(I,E){if(E.type===bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xn||E.magFilter===pd||E.magFilter===Pl||E.magFilter===cs||E.minFilter===xn||E.minFilter===pd||E.minFilter===Pl||E.minFilter===cs)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,ne[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,ne[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,ne[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ce[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,k[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===dn||E.minFilter!==Pl&&E.minFilter!==cs||E.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Ee(I,E){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",U));const ge=E.source;let ve=g.get(ge);ve===void 0&&(ve={},g.set(ge,ve));const pe=$(E);if(pe!==I.__cacheKey){ve[pe]===void 0&&(ve[pe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ve[pe].usedTimes++;const He=ve[I.__cacheKey];He!==void 0&&(ve[I.__cacheKey].usedTimes--,He.usedTimes===0&&N(E)),I.__cacheKey=pe,I.__webglTexture=ve[pe].texture}return q}function Le(I,E,q){return Math.floor(Math.floor(I/q)/E)}function De(I,E,q,ge){const pe=I.updateRanges;if(pe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,ge,E.data);else{pe.sort((Se,Ae)=>Se.start-Ae.start);let He=0;for(let Se=1;Se<pe.length;Se++){const Ae=pe[He],qe=pe[Se],Ge=Ae.start+Ae.count,Fe=Le(qe.start,E.width,4),ht=Le(Ae.start,E.width,4);qe.start<=Ge+1&&Fe===ht&&Le(qe.start+qe.count-1,E.width,4)===Fe?Ae.count=Math.max(Ae.count,qe.start+qe.count-Ae.start):(++He,pe[He]=qe)}pe.length=He+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Je=r.getParameter(r.UNPACK_SKIP_PIXELS),ot=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Se=0,Ae=pe.length;Se<Ae;Se++){const qe=pe[Se],Ge=Math.floor(qe.start/4),Fe=Math.ceil(qe.count/4),ht=Ge%E.width,W=Math.floor(Ge/E.width),Re=Fe,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),t.texSubImage2D(r.TEXTURE_2D,0,ht,W,Re,we,q,ge,E.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),r.pixelStorei(r.UNPACK_SKIP_ROWS,ot)}}function te(I,E,q){let ge=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=r.TEXTURE_3D);const ve=Ee(I,E),pe=E.source;t.bindTexture(ge,I.__webglTexture,r.TEXTURE0+q);const He=s.get(pe);if(pe.version!==He.__version||ve===!0){t.activeTexture(r.TEXTURE0+q);const Ce=At.getPrimaries(At.workingColorSpace),Je=E.colorSpace===Ur?null:At.getPrimaries(E.colorSpace),ot=E.colorSpace===Ur||Ce===Je?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Se=C(E.image,!1,o.maxTextureSize);Se=Et(E,Se);const Ae=l.convert(E.format,E.colorSpace),qe=l.convert(E.type);let Ge=L(E.internalFormat,Ae,qe,E.colorSpace,E.isVideoTexture);J(ge,E);let Fe;const ht=E.mipmaps,W=E.isVideoTexture!==!0,Re=He.__version===void 0||ve===!0,we=pe.dataReady,Oe=O(E,Se);if(E.isDepthTexture)Ge=P(E.format===ds,E.type),Re&&(W?t.texStorage2D(r.TEXTURE_2D,1,Ge,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,Ge,Se.width,Se.height,0,Ae,qe,null));else if(E.isDataTexture)if(ht.length>0){W&&Re&&t.texStorage2D(r.TEXTURE_2D,Oe,Ge,ht[0].width,ht[0].height);for(let Me=0,me=ht.length;Me<me;Me++)Fe=ht[Me],W?we&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Ae,qe,Fe.data):t.texImage2D(r.TEXTURE_2D,Me,Ge,Fe.width,Fe.height,0,Ae,qe,Fe.data);E.generateMipmaps=!1}else W?(Re&&t.texStorage2D(r.TEXTURE_2D,Oe,Ge,Se.width,Se.height),we&&De(E,Se,Ae,qe)):t.texImage2D(r.TEXTURE_2D,0,Ge,Se.width,Se.height,0,Ae,qe,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Ge,ht[0].width,ht[0].height,Se.depth);for(let Me=0,me=ht.length;Me<me;Me++)if(Fe=ht[Me],E.format!==xi)if(Ae!==null)if(W){if(we)if(E.layerUpdates.size>0){const We=Ig(Fe.width,Fe.height,E.format,E.type);for(const lt of E.layerUpdates){const It=Fe.data.subarray(lt*We/Fe.data.BYTES_PER_ELEMENT,(lt+1)*We/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,lt,Fe.width,Fe.height,1,Ae,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,Se.depth,Ae,Fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Ge,Fe.width,Fe.height,Se.depth,0,Fe.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?we&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,Se.depth,Ae,qe,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,Ge,Fe.width,Fe.height,Se.depth,0,Ae,qe,Fe.data)}else{W&&Re&&t.texStorage2D(r.TEXTURE_2D,Oe,Ge,ht[0].width,ht[0].height);for(let Me=0,me=ht.length;Me<me;Me++)Fe=ht[Me],E.format!==xi?Ae!==null?W?we&&t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Ae,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,Ge,Fe.width,Fe.height,0,Fe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?we&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Ae,qe,Fe.data):t.texImage2D(r.TEXTURE_2D,Me,Ge,Fe.width,Fe.height,0,Ae,qe,Fe.data)}else if(E.isDataArrayTexture)if(W){if(Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Ge,Se.width,Se.height,Se.depth),we)if(E.layerUpdates.size>0){const Me=Ig(Se.width,Se.height,E.format,E.type);for(const me of E.layerUpdates){const We=Se.data.subarray(me*Me/Se.data.BYTES_PER_ELEMENT,(me+1)*Me/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,Ae,qe,We)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ae,qe,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ge,Se.width,Se.height,Se.depth,0,Ae,qe,Se.data);else if(E.isData3DTexture)W?(Re&&t.texStorage3D(r.TEXTURE_3D,Oe,Ge,Se.width,Se.height,Se.depth),we&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ae,qe,Se.data)):t.texImage3D(r.TEXTURE_3D,0,Ge,Se.width,Se.height,Se.depth,0,Ae,qe,Se.data);else if(E.isFramebufferTexture){if(Re)if(W)t.texStorage2D(r.TEXTURE_2D,Oe,Ge,Se.width,Se.height);else{let Me=Se.width,me=Se.height;for(let We=0;We<Oe;We++)t.texImage2D(r.TEXTURE_2D,We,Ge,Me,me,0,Ae,qe,null),Me>>=1,me>>=1}}else if(ht.length>0){if(W&&Re){const Me=Xe(ht[0]);t.texStorage2D(r.TEXTURE_2D,Oe,Ge,Me.width,Me.height)}for(let Me=0,me=ht.length;Me<me;Me++)Fe=ht[Me],W?we&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ae,qe,Fe):t.texImage2D(r.TEXTURE_2D,Me,Ge,Ae,qe,Fe);E.generateMipmaps=!1}else if(W){if(Re){const Me=Xe(Se);t.texStorage2D(r.TEXTURE_2D,Oe,Ge,Me.width,Me.height)}we&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,qe,Se)}else t.texImage2D(r.TEXTURE_2D,0,Ge,Ae,qe,Se);y(E)&&x(ge),He.__version=pe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function he(I,E,q){if(E.image.length!==6)return;const ge=Ee(I,E),ve=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+q);const pe=s.get(ve);if(ve.version!==pe.__version||ge===!0){t.activeTexture(r.TEXTURE0+q);const He=At.getPrimaries(At.workingColorSpace),Ce=E.colorSpace===Ur?null:At.getPrimaries(E.colorSpace),Je=E.colorSpace===Ur||He===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const ot=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!ot&&!Se?Ae[me]=C(E.image[me],!0,o.maxCubemapSize):Ae[me]=Se?E.image[me].image:E.image[me],Ae[me]=Et(E,Ae[me]);const qe=Ae[0],Ge=l.convert(E.format,E.colorSpace),Fe=l.convert(E.type),ht=L(E.internalFormat,Ge,Fe,E.colorSpace),W=E.isVideoTexture!==!0,Re=pe.__version===void 0||ge===!0,we=ve.dataReady;let Oe=O(E,qe);J(r.TEXTURE_CUBE_MAP,E);let Me;if(ot){W&&Re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ht,qe.width,qe.height);for(let me=0;me<6;me++){Me=Ae[me].mipmaps;for(let We=0;We<Me.length;We++){const lt=Me[We];E.format!==xi?Ge!==null?W?we&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,0,0,lt.width,lt.height,Ge,lt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,ht,lt.width,lt.height,0,lt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,0,0,lt.width,lt.height,Ge,Fe,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,ht,lt.width,lt.height,0,Ge,Fe,lt.data)}}}else{if(Me=E.mipmaps,W&&Re){Me.length>0&&Oe++;const me=Xe(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ht,me.width,me.height)}for(let me=0;me<6;me++)if(Se){W?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,Ge,Fe,Ae[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,Ae[me].width,Ae[me].height,0,Ge,Fe,Ae[me].data);for(let We=0;We<Me.length;We++){const It=Me[We].image[me].image;W?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,0,0,It.width,It.height,Ge,Fe,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,ht,It.width,It.height,0,Ge,Fe,It.data)}}else{W?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ge,Fe,Ae[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,Ge,Fe,Ae[me]);for(let We=0;We<Me.length;We++){const lt=Me[We];W?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,0,0,Ge,Fe,lt.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,ht,Ge,Fe,lt.image[me])}}}y(E)&&x(r.TEXTURE_CUBE_MAP),pe.__version=ve.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function de(I,E,q,ge,ve,pe){const He=l.convert(q.format,q.colorSpace),Ce=l.convert(q.type),Je=L(q.internalFormat,He,Ce,q.colorSpace),ot=s.get(E),Se=s.get(q);if(Se.__renderTarget=E,!ot.__hasExternalTextures){const Ae=Math.max(1,E.width>>pe),qe=Math.max(1,E.height>>pe);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,pe,Je,Ae,qe,E.depth,0,He,Ce,null):t.texImage2D(ve,pe,Je,Ae,qe,0,He,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Vt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,ve,Se.__webglTexture,0,H(E)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,ve,Se.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(I,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const ge=E.depthTexture,ve=ge&&ge.isDepthTexture?ge.type:null,pe=P(E.stencilBuffer,ve),He=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Vt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(E),pe,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(E),pe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,He,r.RENDERBUFFER,I)}else{const ge=E.textures;for(let ve=0;ve<ge.length;ve++){const pe=ge[ve],He=l.convert(pe.format,pe.colorSpace),Ce=l.convert(pe.type),Je=L(pe.internalFormat,He,Ce,pe.colorSpace);Vt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(E),Je,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(E),Je,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Je,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(I,E,q){const ge=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=s.get(E.depthTexture);if(ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,E.depthTexture.addEventListener("dispose",U)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),J(r.TEXTURE_CUBE_MAP,E.depthTexture);const ot=l.convert(E.depthTexture.format),Se=l.convert(E.depthTexture.type);let Ae;E.depthTexture.format===sr?Ae=r.DEPTH_COMPONENT24:E.depthTexture.format===ds&&(Ae=r.DEPTH24_STENCIL8);for(let qe=0;qe<6;qe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Ae,E.width,E.height,0,ot,Se,null)}}else Y(E.depthTexture,0);const pe=ve.__webglTexture,He=H(E),Ce=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Je=E.depthTexture.format===ds?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===sr)Vt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Je,Ce,pe,0,He):r.framebufferTexture2D(r.FRAMEBUFFER,Je,Ce,pe,0);else if(E.depthTexture.format===ds)Vt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Je,Ce,pe,0,He):r.framebufferTexture2D(r.FRAMEBUFFER,Je,Ce,pe,0);else throw new Error("Unknown depthTexture format")}function et(I){const E=s.get(I),q=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const ge=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",ve)};ge.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=ge}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ge=0;ge<6;ge++)Ue(E.__webglFramebuffer[ge],I,ge);else{const ge=I.texture.mipmaps;ge&&ge.length>0?Ue(E.__webglFramebuffer[0],I,0):Ue(E.__webglFramebuffer,I,0)}else if(q){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=r.createRenderbuffer(),be(E.__webglDepthbuffer[ge],I,!1);else{const ve=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,pe)}}else{const ge=I.texture.mipmaps;if(ge&&ge.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),be(E.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,pe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(I,E,q){const ge=s.get(I);E!==void 0&&de(ge.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&et(I)}function $e(I){const E=I.texture,q=s.get(I),ge=s.get(E);I.addEventListener("dispose",B);const ve=I.textures,pe=I.isWebGLCubeRenderTarget===!0,He=ve.length>1;if(He||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=E.version,c.memory.textures++),pe){q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ce]=[];for(let Je=0;Je<E.mipmaps.length;Je++)q.__webglFramebuffer[Ce][Je]=r.createFramebuffer()}else q.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)q.__webglFramebuffer[Ce]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(He)for(let Ce=0,Je=ve.length;Ce<Je;Ce++){const ot=s.get(ve[Ce]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),c.memory.textures++)}if(I.samples>0&&Vt(I)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Je=ve[Ce];q.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const ot=l.convert(Je.format,Je.colorSpace),Se=l.convert(Je.type),Ae=L(Je.internalFormat,ot,Se,Je.colorSpace,I.isXRRenderTarget===!0),qe=H(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Ae,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),be(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),J(r.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)de(q.__webglFramebuffer[Ce][Je],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Je);else de(q.__webglFramebuffer[Ce],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(E)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ce=0,Je=ve.length;Ce<Je;Ce++){const ot=ve[Ce],Se=s.get(ot);let Ae=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Se.__webglTexture),J(Ae,ot),de(q.__webglFramebuffer,I,ot,r.COLOR_ATTACHMENT0+Ce,Ae,0),y(ot)&&x(Ae)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ge.__webglTexture),J(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)de(q.__webglFramebuffer[Je],I,E,r.COLOR_ATTACHMENT0,Ce,Je);else de(q.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,Ce,0);y(E)&&x(Ce),t.unbindTexture()}I.depthBuffer&&et(I)}function Ye(I){const E=I.textures;for(let q=0,ge=E.length;q<ge;q++){const ve=E[q];if(y(ve)){const pe=b(I),He=s.get(ve).__webglTexture;t.bindTexture(pe,He),x(pe),t.unbindTexture()}}}const ft=[],at=[];function Ut(I){if(I.samples>0){if(Vt(I)===!1){const E=I.textures,q=I.width,ge=I.height;let ve=r.COLOR_BUFFER_BIT;const pe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=s.get(I),Ce=E.length>1;if(Ce)for(let ot=0;ot<E.length;ot++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Je=I.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let ot=0;ot<E.length;ot++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[ot]);const Se=s.get(E[ot]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,q,ge,0,0,q,ge,ve,r.NEAREST),p===!0&&(ft.length=0,at.length=0,ft.push(r.COLOR_ATTACHMENT0+ot),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ft.push(pe),at.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,at)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let ot=0;ot<E.length;ot++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,He.__webglColorRenderbuffer[ot]);const Se=s.get(E[ot]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function H(I){return Math.min(o.maxSamples,I.samples)}function Vt(I){const E=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _t(I){const E=c.render.frame;v.get(I)!==E&&(v.set(I,E),I.update())}function Et(I,E){const q=I.colorSpace,ge=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==sa&&q!==Ur&&(At.getTransfer(q)===Dt?(ge!==xi||ve!==jn)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",q)),E}function Xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=Q,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=Pt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nC(r,e){function t(s,o=Ur){let l;const c=At.getTransfer(o);if(s===jn)return r.UNSIGNED_BYTE;if(s===lh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===uh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===z0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===V0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===k0)return r.BYTE;if(s===B0)return r.SHORT;if(s===lo)return r.UNSIGNED_SHORT;if(s===oh)return r.INT;if(s===Fi)return r.UNSIGNED_INT;if(s===bi)return r.FLOAT;if(s===rr)return r.HALF_FLOAT;if(s===H0)return r.ALPHA;if(s===G0)return r.RGB;if(s===xi)return r.RGBA;if(s===sr)return r.DEPTH_COMPONENT;if(s===ds)return r.DEPTH_STENCIL;if(s===W0)return r.RED;if(s===ch)return r.RED_INTEGER;if(s===ra)return r.RG;if(s===dh)return r.RG_INTEGER;if(s===fh)return r.RGBA_INTEGER;if(s===ru||s===su||s===au||s===ou)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ru)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ou)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ru)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ou)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lf||s===uf||s===cf||s===df)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===lf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===df)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ff||s===hf||s===pf||s===mf||s===gf||s===vf||s===_f)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ff||s===hf)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===pf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===mf)return l.COMPRESSED_R11_EAC;if(s===gf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===vf)return l.COMPRESSED_RG11_EAC;if(s===_f)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===xf||s===yf||s===Sf||s===Mf||s===Ef||s===wf||s===Tf||s===Af||s===Cf||s===Rf||s===bf||s===Pf||s===Lf||s===Nf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===xf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ef)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Af)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===If||s===Df||s===Uf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===If)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Uf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ff||s===Of||s===kf||s===Bf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Ff)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Of)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===uo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const iC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new tv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new si({vertexShader:iC,fragmentShader:rC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new Mu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aC extends fa{constructor(e,t){super();const s=this;let o=null,l=1,c=null,d="local-floor",p=1,h=null,v=null,_=null,g=null,S=null,M=null;const C=typeof XRWebGLBinding<"u",y=new sC,x={},b=t.getContextAttributes();let L=null,P=null;const O=[],U=[],B=new bt;let A=null;const N=new ri;N.viewport=new $t;const le=new ri;le.viewport=new $t;const D=[N,le],z=new vE;let X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=O[te];return he===void 0&&(he=new Md,O[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=O[te];return he===void 0&&(he=new Md,O[te]=he),he.getGripSpace()},this.getHand=function(te){let he=O[te];return he===void 0&&(he=new Md,O[te]=he),he.getHandSpace()};function Y(te){const he=U.indexOf(te.inputSource);if(he===-1)return;const de=O[he];de!==void 0&&(de.update(te.inputSource,te.frame,h||c),de.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",G);for(let te=0;te<O.length;te++){const he=U[te];he!==null&&(U[te]=null,O[te].disconnect(he))}X=null,$=null,y.reset();for(const te in x)delete x[te];e.setRenderTarget(L),S=null,g=null,_=null,o=null,P=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",G),b.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,be=null,Ue=null;b.depth&&(Ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?ds:sr,be=b.stencil?uo:Fi);const et={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(et),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Ii(g.textureWidth,g.textureHeight,{format:xi,type:jn,depthTexture:new ho(g.textureWidth,g.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Ii(S.framebufferWidth,S.framebufferHeight,{format:xi,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await o.requestReferenceSpace(d),De.setContext(o),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(te){for(let he=0;he<te.removed.length;he++){const de=te.removed[he],be=U.indexOf(de);be>=0&&(U[be]=null,O[be].disconnect(de))}for(let he=0;he<te.added.length;he++){const de=te.added[he];let be=U.indexOf(de);if(be===-1){for(let et=0;et<O.length;et++)if(et>=U.length){U.push(de),be=et;break}else if(U[et]===null){U[et]=de,be=et;break}if(be===-1)break}const Ue=O[be];Ue&&Ue.connect(de)}}const K=new re,ne=new re;function ce(te,he,de){K.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(de.matrixWorld);const be=K.distanceTo(ne),Ue=he.projectionMatrix.elements,et=de.projectionMatrix.elements,Pt=Ue[14]/(Ue[10]-1),$e=Ue[14]/(Ue[10]+1),Ye=(Ue[9]+1)/Ue[5],ft=(Ue[9]-1)/Ue[5],at=(Ue[8]-1)/Ue[0],Ut=(et[8]+1)/et[0],H=Pt*at,Vt=Pt*Ut,_t=be/(-at+Ut),Et=_t*-at;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Et),te.translateZ(_t),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ue[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=Pt+_t,I=$e+_t,E=H-Et,q=Vt+(be-Et),ge=Ye*$e/I*Xe,ve=ft*$e/I*Xe;te.projectionMatrix.makePerspective(E,q,ge,ve,Xe,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function k(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let he=te.near,de=te.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(de=y.depthFar)),z.near=le.near=N.near=he,z.far=le.far=N.far=de,(X!==z.near||$!==z.far)&&(o.updateRenderState({depthNear:z.near,depthFar:z.far}),X=z.near,$=z.far),z.layers.mask=te.layers.mask|6,N.layers.mask=z.layers.mask&-5,le.layers.mask=z.layers.mask&-3;const be=te.parent,Ue=z.cameras;k(z,be);for(let et=0;et<Ue.length;et++)k(Ue[et],be);Ue.length===2?ce(z,N,le):z.projectionMatrix.copy(N.projectionMatrix),J(te,z,be)};function J(te,he,de){de===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(de.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=zf*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(te){p=te,g!==null&&(g.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(z)},this.getCameraTexture=function(te){return x[te]};let Ee=null;function Le(te,he){if(v=he.getViewerPose(h||c),M=he,v!==null){const de=v.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let be=!1;de.length!==z.cameras.length&&(z.cameras.length=0,be=!0);for(let $e=0;$e<de.length;$e++){const Ye=de[$e];let ft=null;if(S!==null)ft=S.getViewport(Ye);else{const Ut=_.getViewSubImage(g,Ye);ft=Ut.viewport,$e===0&&(e.setRenderTargetTextures(P,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(P))}let at=D[$e];at===void 0&&(at=new ri,at.layers.enable($e),at.viewport=new $t,D[$e]=at),at.matrix.fromArray(Ye.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ye.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ft.x,ft.y,ft.width,ft.height),$e===0&&(z.matrix.copy(at.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),be===!0&&z.cameras.push(at)}const Ue=o.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const $e=_.getDepthInformation(de[0]);$e&&$e.isValid&&$e.texture&&y.init($e,o.renderState)}if(Ue&&Ue.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let $e=0;$e<de.length;$e++){const Ye=de[$e].camera;if(Ye){let ft=x[Ye];ft||(ft=new tv,x[Ye]=ft);const at=_.getCameraImage(Ye);ft.sourceTexture=at}}}}for(let de=0;de<O.length;de++){const be=U[de],Ue=O[de];be!==null&&Ue!==void 0&&Ue.update(be,he,h||c)}Ee&&Ee(te,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),M=null}const De=new sv;De.setAnimationLoop(Le),this.setAnimationLoop=function(te){Ee=te},this.dispose=function(){}}}const ss=new Oi,oC=new Xt;function lC(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,nv(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,b,L,P){x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,P)):x.isMeshMatcapMaterial?(l(y,x),M(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),C(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?p(y,x,b,L):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Rn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Rn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const b=e.get(x),L=b.envMap,P=b.envMapRotation;L&&(y.envMap.value=L,ss.copy(P),ss.x*=-1,ss.y*=-1,ss.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),y.envMapRotation.value.setFromMatrix4(oC.makeRotationFromEuler(ss)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,b,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*b,y.scale.value=L*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,b){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Rn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const b=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function uC(r,e,t,s){let o={},l={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,L){const P=L.program;s.uniformBlockBinding(b,P)}function h(b,L){let P=o[b.id];P===void 0&&(M(b),P=v(b),o[b.id]=P,b.addEventListener("dispose",y));const O=L.program;s.updateUBOMapping(b,O);const U=e.render.frame;l[b.id]!==U&&(g(b),l[b.id]=U)}function v(b){const L=_();b.__bindingPointIndex=L;const P=r.createBuffer(),O=b.__size,U=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,O,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function _(){for(let b=0;b<d;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const L=o[b.id],P=b.uniforms,O=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let U=0,B=P.length;U<B;U++){const A=Array.isArray(P[U])?P[U]:[P[U]];for(let N=0,le=A.length;N<le;N++){const D=A[N];if(S(D,U,N,O)===!0){const z=D.__offset,X=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let Y=0;Y<X.length;Y++){const Q=X[Y],G=C(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,r.bufferSubData(r.UNIFORM_BUFFER,z+$,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,$),$+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(b,L,P,O){const U=b.value,B=L+"_"+P;if(O[B]===void 0)return typeof U=="number"||typeof U=="boolean"?O[B]=U:O[B]=U.clone(),!0;{const A=O[B];if(typeof U=="number"||typeof U=="boolean"){if(A!==U)return O[B]=U,!0}else if(A.equals(U)===!1)return A.copy(U),!0}return!1}function M(b){const L=b.uniforms;let P=0;const O=16;for(let B=0,A=L.length;B<A;B++){const N=Array.isArray(L[B])?L[B]:[L[B]];for(let le=0,D=N.length;le<D;le++){const z=N[le],X=Array.isArray(z.value)?z.value:[z.value];for(let $=0,Y=X.length;$<Y;$++){const Q=X[$],G=C(Q),K=P%O,ne=K%G.boundary,ce=K+ne;P+=ne,ce!==0&&O-ce<G.storage&&(P+=O-ce),z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=P,P+=G.storage}}}const U=P%O;return U>0&&(P+=O-U),b.__size=P,b.__cache={},this}function C(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",b),L}function y(b){const L=b.target;L.removeEventListener("dispose",y);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function x(){for(const b in o)r.deleteBuffer(o[b]);c=[],o={},l={}}return{bind:p,update:h,dispose:x}}const cC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function dC(){return Ai===null&&(Ai=new KM(cC,16,16,ra,rr),Ai.name="DFG_LUT",Ai.minFilter=xn,Ai.magFilter=xn,Ai.wrapS=er,Ai.wrapT=er,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class fC{constructor(e={}){const{canvas:t=CM(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:S=jn}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=c;const C=S,y=new Set([fh,dh,ch]),x=new Set([jn,Fi,lo,uo,lh,uh]),b=new Uint32Array(4),L=new Int32Array(4);let P=null,O=null;const U=[],B=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let le=!1;this._outputColorSpace=ii;let D=0,z=0,X=null,$=-1,Y=null;const Q=new $t,G=new $t;let K=null;const ne=new Mt(0);let ce=0,k=t.width,J=t.height,Ee=1,Le=null,De=null;const te=new $t(0,0,k,J),he=new $t(0,0,k,J);let de=!1;const be=new gh;let Ue=!1,et=!1;const Pt=new Xt,$e=new re,Ye=new $t,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Ut(){return X===null?Ee:1}let H=s;function Vt(R,Z){return t.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rh}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",It,!1),H===null){const Z="webgl2";if(H=Vt(Z,R),H===null)throw Vt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Rt("WebGLRenderer: "+R.message),R}let _t,Et,Xe,I,E,q,ge,ve,pe,He,Ce,Je,ot,Se,Ae,qe,Ge,Fe,ht,W,Re,we,Oe;function Me(){_t=new fT(H),_t.init(),Re=new nC(H,_t),Et=new rT(H,_t,e,Re),Xe=new eC(H,_t),Et.reversedDepthBuffer&&g&&Xe.buffers.depth.setReversed(!0),I=new mT(H),E=new zA,q=new tC(H,_t,Xe,E,Et,Re,I),ge=new dT(N),ve=new yE(H),we=new nT(H,ve),pe=new hT(H,ve,I,we),He=new vT(H,pe,ve,we,I),Fe=new gT(H,Et,q),Ae=new sT(E),Ce=new BA(N,ge,_t,Et,we,Ae),Je=new lC(N,E),ot=new HA,Se=new $A(_t),Ge=new tT(N,ge,Xe,He,M,p),qe=new QA(N,He,Et),Oe=new uC(H,I,Et,Xe),ht=new iT(H,_t,I),W=new pT(H,_t,I),I.programs=Ce.programs,N.capabilities=Et,N.extensions=_t,N.properties=E,N.renderLists=ot,N.shadowMap=qe,N.state=Xe,N.info=I}Me(),C!==jn&&(A=new xT(C,t.width,t.height,o,l));const me=new aC(N,H);this.xr=me,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=_t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(R){R!==void 0&&(Ee=R,this.setSize(k,J,!1))},this.getSize=function(R){return R.set(k,J)},this.setSize=function(R,Z,ue=!0){if(me.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,J=Z,t.width=Math.floor(R*Ee),t.height=Math.floor(Z*Ee),ue===!0&&(t.style.width=R+"px",t.style.height=Z+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(k*Ee,J*Ee).floor()},this.setDrawingBufferSize=function(R,Z,ue){k=R,J=Z,Ee=ue,t.width=Math.floor(R*ue),t.height=Math.floor(Z*ue),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(C===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Q)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,Z,ue,ae){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,Z,ue,ae),Xe.viewport(Q.copy(te).multiplyScalar(Ee).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,Z,ue,ae){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,Z,ue,ae),Xe.scissor(G.copy(he).multiplyScalar(Ee).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(R){Xe.setScissorTest(de=R)},this.setOpaqueSort=function(R){Le=R},this.setTransparentSort=function(R){De=R},this.getClearColor=function(R){return R.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ue=!0){let ae=0;if(R){let ie=!1;if(X!==null){const Ne=X.texture.format;ie=y.has(Ne)}if(ie){const Ne=X.texture.type,ze=x.has(Ne),Pe=Ge.getClearColor(),ke=Ge.getClearAlpha(),tt=Pe.r,it=Pe.g,pt=Pe.b;ze?(b[0]=tt,b[1]=it,b[2]=pt,b[3]=ke,H.clearBufferuiv(H.COLOR,0,b)):(L[0]=tt,L[1]=it,L[2]=pt,L[3]=ke,H.clearBufferiv(H.COLOR,0,L))}else ae|=H.COLOR_BUFFER_BIT}Z&&(ae|=H.DEPTH_BUFFER_BIT),ue&&(ae|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&H.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",It,!1),Ge.dispose(),ot.dispose(),Se.dispose(),E.dispose(),ge.dispose(),He.dispose(),we.dispose(),Oe.dispose(),Ce.dispose(),me.dispose(),me.removeEventListener("sessionstart",or),me.removeEventListener("sessionend",Br),$n.stop()};function We(R){R.preventDefault(),ug("WebGLRenderer: Context Lost."),le=!0}function lt(){ug("WebGLRenderer: Context Restored."),le=!1;const R=I.autoReset,Z=qe.enabled,ue=qe.autoUpdate,ae=qe.needsUpdate,ie=qe.type;Me(),I.autoReset=R,qe.enabled=Z,qe.autoUpdate=ue,qe.needsUpdate=ae,qe.type=ie}function It(R){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function wt(R){const Z=R.target;Z.removeEventListener("dispose",wt),qn(Z)}function qn(R){Mn(R),E.remove(R)}function Mn(R){const Z=E.get(R).programs;Z!==void 0&&(Z.forEach(function(ue){Ce.releaseProgram(ue)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ue,ae,ie,Ne){Z===null&&(Z=ft);const ze=ie.isMesh&&ie.matrixWorld.determinant()<0,Pe=wo(R,Z,ue,ae,ie);Xe.setMaterial(ae,ze);let ke=ue.index,tt=1;if(ae.wireframe===!0){if(ke=pe.getWireframeAttribute(ue),ke===void 0)return;tt=2}const it=ue.drawRange,pt=ue.attributes.position;let nt=it.start*tt,Nt=(it.start+it.count)*tt;Ne!==null&&(nt=Math.max(nt,Ne.start*tt),Nt=Math.min(Nt,(Ne.start+Ne.count)*tt)),ke!==null?(nt=Math.max(nt,0),Nt=Math.min(Nt,ke.count)):pt!=null&&(nt=Math.max(nt,0),Nt=Math.min(Nt,pt.count));const Ot=Nt-nt;if(Ot<0||Ot===1/0)return;we.setup(ie,ae,Pe,ue,ke);let Ft,St=ht;if(ke!==null&&(Ft=ve.get(ke),St=W,St.setIndex(Ft)),ie.isMesh)ae.wireframe===!0?(Xe.setLineWidth(ae.wireframeLinewidth*Ut()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(ie.isLine){let Yt=ae.linewidth;Yt===void 0&&(Yt=1),Xe.setLineWidth(Yt*Ut()),ie.isLineSegments?St.setMode(H.LINES):ie.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else ie.isPoints?St.setMode(H.POINTS):ie.isSprite&&St.setMode(H.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)fu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))St.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Yt=ie._multiDrawStarts,Ze=ie._multiDrawCounts,En=ie._multiDrawCount,xt=ke?ve.get(ke).bytesPerElement:1,bn=E.get(ae).currentProgram.getUniforms();for(let Pn=0;Pn<En;Pn++)bn.setValue(H,"_gl_DrawID",Pn),St.render(Yt[Pn]/xt,Ze[Pn])}else if(ie.isInstancedMesh)St.renderInstances(nt,Ot,ie.count);else if(ue.isInstancedBufferGeometry){const Yt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ze=Math.min(ue.instanceCount,Yt);St.renderInstances(nt,Ot,Ze)}else St.render(nt,Ot)};function ps(R,Z,ue){R.transparent===!0&&R.side===Ri&&R.forceSinglePass===!1?(R.side=Rn,R.needsUpdate=!0,Vr(R,Z,ue),R.side=Or,R.needsUpdate=!0,Vr(R,Z,ue),R.side=Ri):Vr(R,Z,ue)}this.compile=function(R,Z,ue=null){ue===null&&(ue=R),O=Se.get(ue),O.init(Z),B.push(O),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(O.pushLight(ie),ie.castShadow&&O.pushShadow(ie))}),R!==ue&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(O.pushLight(ie),ie.castShadow&&O.pushShadow(ie))}),O.setupLights();const ae=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ne=ie.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){const Pe=Ne[ze];ps(Pe,ue,ie),ae.add(Pe)}else ps(Ne,ue,ie),ae.add(Ne)}),O=B.pop(),ae},this.compileAsync=function(R,Z,ue=null){const ae=this.compile(R,Z,ue);return new Promise(ie=>{function Ne(){if(ae.forEach(function(ze){E.get(ze).currentProgram.isReady()&&ae.delete(ze)}),ae.size===0){ie(R);return}setTimeout(Ne,10)}_t.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Bi=null;function Tu(R){Bi&&Bi(R)}function or(){$n.stop()}function Br(){$n.start()}const $n=new sv;$n.setAnimationLoop(Tu),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(R){Bi=R,me.setAnimationLoop(R),R===null?$n.stop():$n.start()},me.addEventListener("sessionstart",or),me.addEventListener("sessionend",Br),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(le===!0)return;const ue=me.enabled===!0&&me.isPresenting===!0,ae=A!==null&&(X===null||ue)&&A.begin(N,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(Z),Z=me.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,Z,X),O=Se.get(R,B.length),O.init(Z),B.push(O),Pt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),be.setFromProjectionMatrix(Pt,Pi,Z.reversedDepth),et=this.localClippingEnabled,Ue=Ae.init(this.clippingPlanes,et),P=ot.get(R,U.length),P.init(),U.push(P),me.enabled===!0&&me.isPresenting===!0){const ze=N.xr.getDepthSensingMesh();ze!==null&&zr(ze,Z,-1/0,N.sortObjects)}zr(R,Z,0,N.sortObjects),P.finish(),N.sortObjects===!0&&P.sort(Le,De),at=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,at&&Ge.addToRenderList(P,R),this.info.render.frame++,Ue===!0&&Ae.beginShadows();const ie=O.state.shadowsArray;if(qe.render(ie,R,Z),Ue===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&A.hasRenderPass())===!1){const ze=P.opaque,Pe=P.transmissive;if(O.setupLights(),Z.isArrayCamera){const ke=Z.cameras;if(Pe.length>0)for(let tt=0,it=ke.length;tt<it;tt++){const pt=ke[tt];Mo(ze,Pe,R,pt)}at&&Ge.render(R);for(let tt=0,it=ke.length;tt<it;tt++){const pt=ke[tt];So(P,R,pt,pt.viewport)}}else Pe.length>0&&Mo(ze,Pe,R,Z),at&&Ge.render(R),So(P,R,Z)}X!==null&&z===0&&(q.updateMultisampleRenderTarget(X),q.updateRenderTargetMipmap(X)),ae&&A.end(N),R.isScene===!0&&R.onAfterRender(N,R,Z),we.resetDefaultState(),$=-1,Y=null,B.pop(),B.length>0?(O=B[B.length-1],Ue===!0&&Ae.setGlobalState(N.clippingPlanes,O.state.camera)):O=null,U.pop(),U.length>0?P=U[U.length-1]:P=null};function zr(R,Z,ue,ae){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||be.intersectsSprite(R)){ae&&Ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);const ze=He.update(R),Pe=R.material;Pe.visible&&P.push(R,ze,Pe,ue,Ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||be.intersectsObject(R))){const ze=He.update(R),Pe=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ye.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ye.copy(ze.boundingSphere.center)),Ye.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Pe)){const ke=ze.groups;for(let tt=0,it=ke.length;tt<it;tt++){const pt=ke[tt],nt=Pe[pt.materialIndex];nt&&nt.visible&&P.push(R,ze,nt,ue,Ye.z,pt)}}else Pe.visible&&P.push(R,ze,Pe,ue,Ye.z,null)}}const Ne=R.children;for(let ze=0,Pe=Ne.length;ze<Pe;ze++)zr(Ne[ze],Z,ue,ae)}function So(R,Z,ue,ae){const{opaque:ie,transmissive:Ne,transparent:ze}=R;O.setupLightsView(ue),Ue===!0&&Ae.setGlobalState(N.clippingPlanes,ue),ae&&Xe.viewport(Q.copy(ae)),ie.length>0&&ms(ie,Z,ue),Ne.length>0&&ms(Ne,Z,ue),ze.length>0&&ms(ze,Z,ue),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Mo(R,Z,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ae.id]===void 0){const nt=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ae.id]=new Ii(1,1,{generateMipmaps:!0,type:nt?rr:jn,minFilter:cs,samples:Math.max(4,Et.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Ne=O.state.transmissionRenderTarget[ae.id],ze=ae.viewport||Q;Ne.setSize(ze.z*N.transmissionResolutionScale,ze.w*N.transmissionResolutionScale);const Pe=N.getRenderTarget(),ke=N.getActiveCubeFace(),tt=N.getActiveMipmapLevel();N.setRenderTarget(Ne),N.getClearColor(ne),ce=N.getClearAlpha(),ce<1&&N.setClearColor(16777215,.5),N.clear(),at&&Ge.render(ue);const it=N.toneMapping;N.toneMapping=Ni;const pt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),O.setupLightsView(ae),Ue===!0&&Ae.setGlobalState(N.clippingPlanes,ae),ms(R,ue,ae),q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne),_t.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Nt=0,Ot=Z.length;Nt<Ot;Nt++){const Ft=Z[Nt],{object:St,geometry:Yt,material:Ze,group:En}=Ft;if(Ze.side===Ri&&St.layers.test(ae.layers)){const xt=Ze.side;Ze.side=Rn,Ze.needsUpdate=!0,yi(St,ue,ae,Yt,Ze,En),Ze.side=xt,Ze.needsUpdate=!0,nt=!0}}nt===!0&&(q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne))}N.setRenderTarget(Pe,ke,tt),N.setClearColor(ne,ce),pt!==void 0&&(ae.viewport=pt),N.toneMapping=it}function ms(R,Z,ue){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let ie=0,Ne=R.length;ie<Ne;ie++){const ze=R[ie],{object:Pe,geometry:ke,group:tt}=ze;let it=ze.material;it.allowOverride===!0&&ae!==null&&(it=ae),Pe.layers.test(ue.layers)&&yi(Pe,Z,ue,ke,it,tt)}}function yi(R,Z,ue,ae,ie,Ne){R.onBeforeRender(N,Z,ue,ae,ie,Ne),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(N,Z,ue,ae,R,Ne),ie.transparent===!0&&ie.side===Ri&&ie.forceSinglePass===!1?(ie.side=Rn,ie.needsUpdate=!0,N.renderBufferDirect(ue,Z,ae,ie,R,Ne),ie.side=Or,ie.needsUpdate=!0,N.renderBufferDirect(ue,Z,ae,ie,R,Ne),ie.side=Ri):N.renderBufferDirect(ue,Z,ae,ie,R,Ne),R.onAfterRender(N,Z,ue,ae,ie,Ne)}function Vr(R,Z,ue){Z.isScene!==!0&&(Z=ft);const ae=E.get(R),ie=O.state.lights,Ne=O.state.shadowsArray,ze=ie.state.version,Pe=Ce.getParameters(R,ie.state,Ne,Z,ue),ke=Ce.getProgramCacheKey(Pe);let tt=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,ae.fog=Z.fog;const it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=ge.get(R.envMap||ae.environment,it),ae.envMapRotation=ae.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",wt),tt=new Map,ae.programs=tt);let pt=tt.get(ke);if(pt!==void 0){if(ae.currentProgram===pt&&ae.lightsStateVersion===ze)return Eo(R,Pe),pt}else Pe.uniforms=Ce.getUniforms(R),R.onBeforeCompile(Pe,N),pt=Ce.acquireProgram(Pe,ke),tt.set(ke,pt),ae.uniforms=Pe.uniforms;const nt=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(nt.clippingPlanes=Ae.uniform),Eo(R,Pe),ae.needsLights=Ao(R),ae.lightsStateVersion=ze,ae.needsLights&&(nt.ambientLightColor.value=ie.state.ambient,nt.lightProbe.value=ie.state.probe,nt.directionalLights.value=ie.state.directional,nt.directionalLightShadows.value=ie.state.directionalShadow,nt.spotLights.value=ie.state.spot,nt.spotLightShadows.value=ie.state.spotShadow,nt.rectAreaLights.value=ie.state.rectArea,nt.ltc_1.value=ie.state.rectAreaLTC1,nt.ltc_2.value=ie.state.rectAreaLTC2,nt.pointLights.value=ie.state.point,nt.pointLightShadows.value=ie.state.pointShadow,nt.hemisphereLights.value=ie.state.hemi,nt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,nt.spotLightMatrix.value=ie.state.spotLightMatrix,nt.spotLightMap.value=ie.state.spotLightMap,nt.pointShadowMatrix.value=ie.state.pointShadowMatrix),ae.currentProgram=pt,ae.uniformsList=null,pt}function ga(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=lu.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Eo(R,Z){const ue=E.get(R);ue.outputColorSpace=Z.outputColorSpace,ue.batching=Z.batching,ue.batchingColor=Z.batchingColor,ue.instancing=Z.instancing,ue.instancingColor=Z.instancingColor,ue.instancingMorph=Z.instancingMorph,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function wo(R,Z,ue,ae,ie){Z.isScene!==!0&&(Z=ft),q.resetTextureUnits();const Ne=Z.fog,ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Z.environment:null,Pe=X===null?N.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:sa,ke=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,tt=ge.get(ae.envMap||ze,ke),it=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pt=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),nt=!!ue.morphAttributes.position,Nt=!!ue.morphAttributes.normal,Ot=!!ue.morphAttributes.color;let Ft=Ni;ae.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ft=N.toneMapping);const St=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Yt=St!==void 0?St.length:0,Ze=E.get(ae),En=O.state.lights;if(Ue===!0&&(et===!0||R!==Y)){const Kt=R===Y&&ae.id===$;Ae.setState(ae,R,Kt)}let xt=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==En.state.version||Ze.outputColorSpace!==Pe||ie.isBatchedMesh&&Ze.batching===!1||!ie.isBatchedMesh&&Ze.batching===!0||ie.isBatchedMesh&&Ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ze.instancing===!1||!ie.isInstancedMesh&&Ze.instancing===!0||ie.isSkinnedMesh&&Ze.skinning===!1||!ie.isSkinnedMesh&&Ze.skinning===!0||ie.isInstancedMesh&&Ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ze.instancingMorph===!1&&ie.morphTexture!==null||Ze.envMap!==tt||ae.fog===!0&&Ze.fog!==Ne||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ae.numPlanes||Ze.numIntersection!==Ae.numIntersection)||Ze.vertexAlphas!==it||Ze.vertexTangents!==pt||Ze.morphTargets!==nt||Ze.morphNormals!==Nt||Ze.morphColors!==Ot||Ze.toneMapping!==Ft||Ze.morphTargetsCount!==Yt)&&(xt=!0):(xt=!0,Ze.__version=ae.version);let bn=Ze.currentProgram;xt===!0&&(bn=Vr(ae,Z,ie));let Pn=!1,kn=!1,lr=!1;const Lt=bn.getUniforms(),ut=Ze.uniforms;if(Xe.useProgram(bn.program)&&(Pn=!0,kn=!0,lr=!0),ae.id!==$&&($=ae.id,kn=!0),Pn||Y!==R){Xe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Lt.setValue(H,"projectionMatrix",R.projectionMatrix),Lt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Yn=Lt.map.cameraPosition;Yn!==void 0&&Yn.setValue(H,$e.setFromMatrixPosition(R.matrixWorld)),Et.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,kn=!0,lr=!0)}if(Ze.needsLights&&(En.state.directionalShadowMap.length>0&&Lt.setValue(H,"directionalShadowMap",En.state.directionalShadowMap,q),En.state.spotShadowMap.length>0&&Lt.setValue(H,"spotShadowMap",En.state.spotShadowMap,q),En.state.pointShadowMap.length>0&&Lt.setValue(H,"pointShadowMap",En.state.pointShadowMap,q)),ie.isSkinnedMesh){Lt.setOptional(H,ie,"bindMatrix"),Lt.setOptional(H,ie,"bindMatrixInverse");const Kt=ie.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Lt.setValue(H,"boneTexture",Kt.boneTexture,q))}ie.isBatchedMesh&&(Lt.setOptional(H,ie,"batchingTexture"),Lt.setValue(H,"batchingTexture",ie._matricesTexture,q),Lt.setOptional(H,ie,"batchingIdTexture"),Lt.setValue(H,"batchingIdTexture",ie._indirectTexture,q),Lt.setOptional(H,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Lt.setValue(H,"batchingColorTexture",ie._colorsTexture,q));const oi=ue.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&Fe.update(ie,ue,bn),(kn||Ze.receiveShadow!==ie.receiveShadow)&&(Ze.receiveShadow=ie.receiveShadow,Lt.setValue(H,"receiveShadow",ie.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Z.environment!==null&&(ut.envMapIntensity.value=Z.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=dC()),kn&&(Lt.setValue(H,"toneMappingExposure",N.toneMappingExposure),Ze.needsLights&&To(ut,lr),Ne&&ae.fog===!0&&Je.refreshFogUniforms(ut,Ne),Je.refreshMaterialUniforms(ut,ae,Ee,J,O.state.transmissionRenderTarget[R.id]),lu.upload(H,ga(Ze),ut,q)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(lu.upload(H,ga(Ze),ut,q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Lt.setValue(H,"center",ie.center),Lt.setValue(H,"modelViewMatrix",ie.modelViewMatrix),Lt.setValue(H,"normalMatrix",ie.normalMatrix),Lt.setValue(H,"modelMatrix",ie.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Kt=ae.uniformsGroups;for(let Yn=0,zi=Kt.length;Yn<zi;Yn++){const va=Kt[Yn];Oe.update(va,bn),Oe.bind(va,bn)}}return bn}function To(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Ao(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Z,ue){const ae=E.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Z,E.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ue=E.get(R);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0};const Co=H.createFramebuffer();this.setRenderTarget=function(R,Z=0,ue=0){X=R,D=Z,z=ue;let ae=null,ie=!1,Ne=!1;if(R){const Pe=E.get(R);if(Pe.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(H.FRAMEBUFFER,Pe.__webglFramebuffer),Q.copy(R.viewport),G.copy(R.scissor),K=R.scissorTest,Xe.viewport(Q),Xe.scissor(G),Xe.setScissorTest(K),$=-1;return}else if(Pe.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Pe.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(Pe.__boundDepthTexture!==it){if(it!==null&&E.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ne=!0);const tt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[Z])?ae=tt[Z][ue]:ae=tt[Z],ie=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?ae=E.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?ae=tt[ue]:ae=tt,Q.copy(R.viewport),G.copy(R.scissor),K=R.scissorTest}else Q.copy(te).multiplyScalar(Ee).floor(),G.copy(he).multiplyScalar(Ee).floor(),K=de;if(ue!==0&&(ae=Co),Xe.bindFramebuffer(H.FRAMEBUFFER,ae)&&Xe.drawBuffers(R,ae),Xe.viewport(Q),Xe.scissor(G),Xe.setScissorTest(K),ie){const Pe=E.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe.__webglTexture,ue)}else if(Ne){const Pe=Z;for(let ke=0;ke<R.textures.length;ke++){const tt=E.get(R.textures[ke]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ke,tt.__webglTexture,ue,Pe)}}else if(R!==null&&ue!==0){const Pe=E.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pe.__webglTexture,ue)}$=-1},this.readRenderTargetPixels=function(R,Z,ue,ae,ie,Ne,ze,Pe=0){if(!(R&&R.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){Xe.bindFramebuffer(H.FRAMEBUFFER,ke);try{const tt=R.textures[Pe],it=tt.format,pt=tt.type;if(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),!Et.textureFormatReadable(it)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(pt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ae&&ue>=0&&ue<=R.height-ie&&H.readPixels(Z,ue,ae,ie,Re.convert(it),Re.convert(pt),Ne)}finally{const tt=X!==null?E.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ue,ae,ie,Ne,ze,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke)if(Z>=0&&Z<=R.width-ae&&ue>=0&&ue<=R.height-ie){Xe.bindFramebuffer(H.FRAMEBUFFER,ke);const tt=R.textures[Pe],it=tt.format,pt=tt.type;if(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),!Et.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,nt),H.bufferData(H.PIXEL_PACK_BUFFER,Ne.byteLength,H.STREAM_READ),H.readPixels(Z,ue,ae,ie,Re.convert(it),Re.convert(pt),0);const Nt=X!==null?E.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,Nt);const Ot=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await RM(H,Ot,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,nt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ne),H.deleteBuffer(nt),H.deleteSync(Ot),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ue=0){const ae=Math.pow(2,-ue),ie=Math.floor(R.image.width*ae),Ne=Math.floor(R.image.height*ae),ze=Z!==null?Z.x:0,Pe=Z!==null?Z.y:0;q.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ue,0,0,ze,Pe,ie,Ne),Xe.unbindTexture()};const Au=H.createFramebuffer(),Cu=H.createFramebuffer();this.copyTextureToTexture=function(R,Z,ue=null,ae=null,ie=0,Ne=0){let ze,Pe,ke,tt,it,pt,nt,Nt,Ot;const Ft=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(ue!==null)ze=ue.max.x-ue.min.x,Pe=ue.max.y-ue.min.y,ke=ue.isBox3?ue.max.z-ue.min.z:1,tt=ue.min.x,it=ue.min.y,pt=ue.isBox3?ue.min.z:0;else{const ut=Math.pow(2,-ie);ze=Math.floor(Ft.width*ut),Pe=Math.floor(Ft.height*ut),R.isDataArrayTexture?ke=Ft.depth:R.isData3DTexture?ke=Math.floor(Ft.depth*ut):ke=1,tt=0,it=0,pt=0}ae!==null?(nt=ae.x,Nt=ae.y,Ot=ae.z):(nt=0,Nt=0,Ot=0);const St=Re.convert(Z.format),Yt=Re.convert(Z.type);let Ze;Z.isData3DTexture?(q.setTexture3D(Z,0),Ze=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(q.setTexture2DArray(Z,0),Ze=H.TEXTURE_2D_ARRAY):(q.setTexture2D(Z,0),Ze=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const En=H.getParameter(H.UNPACK_ROW_LENGTH),xt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),bn=H.getParameter(H.UNPACK_SKIP_PIXELS),Pn=H.getParameter(H.UNPACK_SKIP_ROWS),kn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,pt);const lr=R.isDataArrayTexture||R.isData3DTexture,Lt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const ut=E.get(R),oi=E.get(Z),Kt=E.get(ut.__renderTarget),Yn=E.get(oi.__renderTarget);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let zi=0;zi<ke;zi++)lr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,E.get(R).__webglTexture,ie,pt+zi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Ne,Ot+zi)),H.blitFramebuffer(tt,it,ze,Pe,nt,Nt,ze,Pe,H.DEPTH_BUFFER_BIT,H.NEAREST);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||E.has(R)){const ut=E.get(R),oi=E.get(Z);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,Au),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Cu);for(let Kt=0;Kt<ke;Kt++)lr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ut.__webglTexture,ie,pt+Kt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ut.__webglTexture,ie),Lt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,oi.__webglTexture,Ne,Ot+Kt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,oi.__webglTexture,Ne),ie!==0?H.blitFramebuffer(tt,it,ze,Pe,nt,Nt,ze,Pe,H.COLOR_BUFFER_BIT,H.NEAREST):Lt?H.copyTexSubImage3D(Ze,Ne,nt,Nt,Ot+Kt,tt,it,ze,Pe):H.copyTexSubImage2D(Ze,Ne,nt,Nt,tt,it,ze,Pe);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ze,Ne,nt,Nt,Ot,ze,Pe,ke,St,Yt,Ft.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Ze,Ne,nt,Nt,Ot,ze,Pe,ke,St,Ft.data):H.texSubImage3D(Ze,Ne,nt,Nt,Ot,ze,Pe,ke,St,Yt,Ft):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ne,nt,Nt,ze,Pe,St,Yt,Ft.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ne,nt,Nt,Ft.width,Ft.height,St,Ft.data):H.texSubImage2D(H.TEXTURE_2D,Ne,nt,Nt,ze,Pe,St,Yt,Ft);H.pixelStorei(H.UNPACK_ROW_LENGTH,En),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,bn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,kn),Ne===0&&Z.generateMipmaps&&H.generateMipmap(Ze),Xe.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Xe.unbindTexture()},this.resetState=function(){D=0,z=0,X=null,Xe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const hC=[{name:"USA",lat:38.9,lon:-77,region:"na"},{name:"Canada",lat:45.4,lon:-75.7,region:"na"},{name:"Germany",lat:52.5,lon:13.4,region:"eu"},{name:"UK",lat:51.5,lon:-.1,region:"eu"},{name:"Japan",lat:35.7,lon:139.7,region:"ap"},{name:"S. Korea",lat:37.6,lon:127,region:"ap"},{name:"Singapore",lat:1.35,lon:103.8,region:"ap"},{name:"Australia",lat:-33.9,lon:151.2,region:"ap"},{name:"India",lat:28.6,lon:77.2,region:"ap"},{name:"UAE",lat:24.5,lon:54.6,region:"me"}],pC={na:51455,eu:9055202,ap:16753920,me:58998};function mC(r,e,t){const s=(90-r)*(Math.PI/180),o=(e+180)*(Math.PI/180);return new re(-t*Math.sin(s)*Math.cos(o),t*Math.cos(s),t*Math.sin(s)*Math.sin(o))}function gC({size:r=200}){const e=fe.useRef(null);return fe.useEffect(()=>{const t=e.current;if(!t)return;const s=r,o=r,l=new fE,c=new WM,d=new ri(45,s/o,.1,100);d.position.z=3;const p=new fC({antialias:!0,alpha:!0});p.setSize(s,o),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setClearColor(0,0),p.toneMapping=ah,p.toneMappingExposure=1.2,t.appendChild(p.domElement);const h=new Qs;h.rotation.z=23.4*(Math.PI/180),c.add(h);const v=new ls(1,64,64),_=l.load("/textures/earth-albedo.jpg"),g=l.load("/textures/earth-bump.jpg"),S=l.load("/textures/earth-specular.png"),M=new Ag({map:_,bumpMap:g,bumpScale:.04,specularMap:S,specular:new Mt(3355443),shininess:25}),C=new Cn(v,M);h.add(C);const y=new ls(1.01,64,64),x=l.load("/textures/earth-clouds.png"),b=new Ag({map:x,transparent:!0,opacity:.35,depthWrite:!1}),L=new Cn(y,b);h.add(L);const P=l.load("/textures/earth-night.png"),O=new si({uniforms:{nightTexture:{value:P},sunDirection:{value:new re(5,3,5).normalize()}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D nightTexture;
        uniform vec3 sunDirection;
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          float sunDot = dot(vNormal, sunDirection);
          float nightFactor = smoothstep(-0.1, -0.4, sunDot);
          vec4 nightColor = texture2D(nightTexture, vUv);
          gl_FragColor = vec4(nightColor.rgb * nightFactor * 1.5, nightFactor * nightColor.a);
        }
      `,transparent:!0,depthWrite:!1,blending:cu}),U=new Cn(new ls(1.002,64,64),O);h.add(U);const B=new ls(1.12,64,64),A=new si({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
          vec3 atmosColor = mix(vec3(0.1, 0.4, 1.0), vec3(0.0, 0.8, 1.0), intensity);
          gl_FragColor = vec4(atmosColor, 1.0) * intensity * 0.7;
        }
      `,blending:cu,side:Rn,transparent:!0}),N=new Cn(B,A);c.add(N);const le=new Qs;le.rotation.z=23.4*(Math.PI/180),hC.forEach(G=>{const K=mC(G.lat,G.lon,1.025),ne=pC[G.region],ce=new ls(.022,16,16),k=new hu({color:ne}),J=new Cn(ce,k);J.position.copy(K),le.add(J);const Ee=new vh(.028,.05,32),Le=new hu({color:ne,transparent:!0,opacity:.5,side:Ri}),De=new Cn(Ee,Le);De.position.copy(K),De.lookAt(new re(0,0,0)),De.userData={baseScale:1,phase:Math.random()*Math.PI*2},le.add(De);const te=K.clone().multiplyScalar(1.12),he=new Xn().setFromPoints([K,te]),de=new Q0({color:ne,transparent:!0,opacity:.35}),be=new eE(he,de);le.add(be)}),c.add(le);const D=new mE(4482696,.4);c.add(D);const z=new Ng(16777215,2);z.position.set(5,3,5),c.add(z);const X=new Ng(4491468,.3);X.position.set(-5,-2,-3),c.add(X);let $;const Y=new _E,Q=()=>{$=requestAnimationFrame(Q);const G=Y.getElapsedTime();C.rotation.y=G*.12,L.rotation.y=G*.08,U.rotation.y=G*.12,le.children.forEach(K=>{if(K.userData&&K.userData.baseScale!==void 0){const ne=1+.3*Math.sin(G*2+K.userData.phase);K.scale.set(ne,ne,ne),K.material.opacity=.3+.2*Math.sin(G*2+K.userData.phase)}}),le.rotation.y=G*.12,p.render(c,d)};return Q(),()=>{cancelAnimationFrame($),p.dispose(),t.contains(p.domElement)&&t.removeChild(p.domElement)}},[r]),T.jsx("div",{ref:e,className:"globe3dMount"})}const vC=[{id:1,title:"Digital Employees",desc:"AI-powered digital workers that automate complex business processes, handle customer interactions, and make data-driven decisions — transforming workforce productivity across industries.",Icon:bS,img:hs,tags:["AI Automation","NLP","RPA"]},{id:2,title:"Personal Assistant Robots",desc:"Intelligent robotic assistants that learn user preferences, manage daily tasks, and provide hands-free support in homes and offices through natural language and gesture recognition.",Icon:OS,img:ua,tags:["Robotics","Voice AI","Smart Home"]},{id:3,title:"Physical AI + Smart Robotics Integration",desc:"Bridging the gap between digital intelligence and physical automation — enabling robots to perceive, reason, and act in real-world environments with unprecedented precision.",Icon:IS,img:ca,tags:["Computer Vision","Embodied AI","Sensor Fusion"]},{id:4,title:"IoT + Edge Computing",desc:"Processing data at the source with distributed intelligence — reducing latency, enhancing privacy, and enabling real-time decision making across billions of connected devices.",Icon:jS,img:vo,tags:["IoT","Edge AI","5G Networks"]},{id:5,title:"Composable & Modular MIS",desc:"Flexible, plug-and-play information systems built from interchangeable components — enabling organizations to rapidly adapt their tech stack to evolving business needs.",Icon:GS,img:_u,tags:["Microservices","API-First","Low-Code"]},{id:6,title:"Hyper-Personalized Systems",desc:"AI-driven platforms that deliver uniquely tailored experiences for every user — from adaptive interfaces to predictive recommendations powered by behavioral analytics.",Icon:qS,img:xu,tags:["Machine Learning","User Analytics","Adaptive UX"]},{id:7,title:"Domain-Specific AI",desc:"Purpose-built AI models trained on specialized industry data — delivering superior performance in healthcare diagnostics, financial modeling, legal analysis, and manufacturing.",Icon:LS,img:Zf,tags:["Vertical AI","Fine-Tuning","Industry 4.0"]},{id:8,title:"Multi-Agent Systems",desc:"Autonomous AI agents that collaborate, negotiate, and coordinate to solve complex problems — creating emergent intelligence greater than the sum of its parts.",Icon:VS,img:Jf,tags:["Agent AI","Swarm Intelligence","Orchestration"]},{id:9,title:"Metaverse & Virtual Workspaces",desc:"Immersive 3D environments for collaboration, training, and digital twin simulation — redefining how teams work, learn, and innovate in shared virtual spaces.",Icon:US,img:Qf,tags:["XR","Digital Twins","Spatial Computing"]},{id:10,title:"Smart Governance + Explainable AI",desc:"Transparent, accountable AI systems that provide clear reasoning for their decisions — building trust through interpretability, fairness auditing, and regulatory compliance.",Icon:BS,img:eh,tags:["XAI","AI Ethics","Compliance"]}];function _C(){const[r,e]=fe.useState(null);return T.jsxs("div",{className:"futurePage",children:[T.jsxs("section",{className:"futureHero",children:[T.jsxs("div",{className:"futureHeroContent",children:[T.jsx("span",{className:"futureBadge","data-aos":"fade-down","data-aos-delay":"100",children:"Exploring Tomorrow"}),T.jsx("h1",{"data-aos":"fade-right","data-aos-delay":"200",children:"Future Trends in MSI"}),T.jsx("p",{"data-aos":"fade-right","data-aos-delay":"300",children:"Discover the technologies reshaping Management Information Systems — from intelligent automation to immersive digital experiences"})]}),T.jsx("div",{className:"futureHeroGrid",children:[hs,ua,ca,vo].map((t,s)=>T.jsx("div",{className:"heroGridItem","data-aos":"zoom-in","data-aos-delay":150+s*100,children:T.jsx("img",{src:t,alt:""})},s))})]}),T.jsxs("section",{className:"futureStats",children:[T.jsxs("div",{className:"statItem","data-aos":"fade-up","data-aos-delay":"0",children:[T.jsx("span",{className:"statNumber",children:"10"}),T.jsx("span",{className:"statLabel",children:"Key Trends"})]}),T.jsx("div",{className:"statDivider"}),T.jsxs("div",{className:"statItem","data-aos":"fade-up","data-aos-delay":"100",children:[T.jsx("span",{className:"statNumber",children:"2026"}),T.jsx("span",{className:"statLabel",children:"& Beyond"})]}),T.jsx("div",{className:"statDivider"}),T.jsxs("div",{className:"statItem","data-aos":"fade-up","data-aos-delay":"200",children:[T.jsx("span",{className:"statNumber",children:"AI"}),T.jsx("span",{className:"statLabel",children:"Powered Future"})]}),T.jsx("div",{className:"statDivider"}),T.jsxs("div",{className:"statItem","data-aos":"fade-up","data-aos-delay":"300",children:[T.jsx("span",{className:"statNumber",children:"360°"}),T.jsx("span",{className:"statLabel",children:"Integration"})]})]}),T.jsxs("section",{className:"trendsSection",children:[T.jsx("h2",{"data-aos":"fade-up",children:"The 10 Pillars of Next-Gen MIS"}),T.jsx("div",{className:"trendsGrid",children:vC.map(t=>T.jsxs("div",{className:`trendCard${r===t.id?" expanded":""}`,onClick:()=>e(r===t.id?null:t.id),"data-aos":"fade-up","data-aos-delay":(t.id-1)%2*100,children:[T.jsxs("div",{className:"trendImgWrap",children:[T.jsx("img",{src:t.img,alt:t.title}),T.jsxs("span",{className:"trendNumber",children:["0",t.id]})]}),T.jsxs("div",{className:"trendInfo",children:[T.jsxs("div",{className:"trendTitleRow",children:[T.jsx("span",{className:"trendIcon",children:T.jsx(t.Icon,{size:22,strokeWidth:2})}),T.jsx("h3",{children:t.title})]}),T.jsx("p",{children:t.desc}),T.jsx("div",{className:"trendTags",children:t.tags.map((s,o)=>T.jsx("span",{className:"trendTag",children:s},o))})]})]},t.id))})]}),T.jsx("section",{className:"globalReachBar",children:T.jsxs("div",{className:"reachContent",children:[T.jsx("div",{className:"reachGlobeWrap","data-aos":"zoom-in",children:T.jsx(gC,{size:200})}),T.jsxs("div",{className:"reachInfo","data-aos":"fade-left","data-aos-delay":"200",children:[T.jsx("span",{className:"reachBadge",children:"Global Reach"}),T.jsx("h3",{children:"Deployed Across 45+ Countries Worldwide"}),T.jsx("p",{children:"Pioneering next-gen MIS solutions across every continent with 24/7 enterprise support"})]}),T.jsxs("div",{className:"reachStats","data-aos":"fade-left","data-aos-delay":"300",children:[T.jsxs("div",{className:"reachStat",children:[T.jsx("strong",{children:"45+"}),T.jsx("span",{children:"Countries"})]}),T.jsx("div",{className:"reachStatDivider"}),T.jsxs("div",{className:"reachStat",children:[T.jsx("strong",{children:"120+"}),T.jsx("span",{children:"Partners"})]}),T.jsx("div",{className:"reachStatDivider"}),T.jsxs("div",{className:"reachStat",children:[T.jsx("strong",{children:"6"}),T.jsx("span",{children:"Continents"})]}),T.jsx("div",{className:"reachStatDivider"}),T.jsxs("div",{className:"reachStat",children:[T.jsx("strong",{children:"24/7"}),T.jsx("span",{children:"Support"})]})]})]})}),T.jsxs("section",{className:"futureTimeline",children:[T.jsxs("div",{className:"tlHeader","data-aos":"fade-up",children:[T.jsx("span",{className:"tlBadge",children:"Roadmap"}),T.jsx("h2",{children:"Evolution Roadmap"}),T.jsx("p",{className:"tlSubtitle",children:"Tracing the journey from early AI adoption to full digital convergence"})]}),T.jsxs("div",{className:"timelineContainer",children:[T.jsx("div",{className:"tlLine"}),[{year:"2024",label:"Foundation",desc:"AI integration begins across core MIS platforms with initial automation of workflows and data pipelines.",status:"done"},{year:"2025",label:"Acceleration",desc:"Multi-agent systems and edge computing go mainstream, enabling real-time distributed intelligence.",status:"done"},{year:"2026",label:"Transformation",desc:"Digital employees and hyper-personalization become standard across enterprise ecosystems.",status:"active"},{year:"2027+",label:"Convergence",desc:"Full physical-digital AI convergence with metaverse workspaces and autonomous governance.",status:"upcoming"}].map((t,s)=>T.jsxs("div",{className:`tlItem tlItem--${t.status}`,"data-aos":"fade-right","data-aos-delay":s*150,children:[T.jsx("div",{className:"tlDotWrap",children:T.jsxs("div",{className:"tlDot",children:[t.status==="done"&&T.jsx("span",{className:"tlCheck",children:"✓"}),t.status==="active"&&T.jsx("span",{className:"tlPulse"})]})}),T.jsxs("div",{className:"tlCard",children:[T.jsxs("div",{className:"tlCardInner",children:[T.jsx("span",{className:"tlYear",children:t.year}),T.jsx("span",{className:`tlStatus tlStatus--${t.status}`,children:t.status==="done"?"Completed":t.status==="active"?"In Progress":"Upcoming"})]}),T.jsx("h4",{children:t.label}),T.jsx("p",{children:t.desc})]})]},s))]})]})]})}function xC(){const[r,e]=fe.useState(!1);return fe.useEffect(()=>{Dy.init({duration:800,once:!0,easing:"ease-out"})},[]),fe.useEffect(()=>{document.body.classList.toggle("dark",r)},[r]),T.jsxs(Sy,{children:[T.jsx(ky,{darkMode:r,onToggle:()=>e(!r)}),T.jsxs(Zx,{children:[T.jsx(Dr,{path:"/",element:T.jsx(iS,{})}),T.jsx(Dr,{path:"/products",element:T.jsx(aS,{})}),T.jsx(Dr,{path:"/aiot-solutions",element:T.jsx(uS,{})}),T.jsx(Dr,{path:"/community",element:T.jsx(hS,{})}),T.jsx(Dr,{path:"/whats-new",element:T.jsx(_S,{})}),T.jsx(Dr,{path:"/support",element:T.jsx(MS,{})}),T.jsx(Dr,{path:"/future-trends",element:T.jsx(_C,{})})]})]})}Q_.createRoot(document.getElementById("root")).render(T.jsx(X_.StrictMode,{children:T.jsx(xC,{})}));
