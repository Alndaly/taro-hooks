(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"136":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return isBoolean})),n.d(e,"f",(function(){return isFunction})),n.d(e,"g",(function(){return isNumber})),n.d(e,"h",(function(){return isObject})),n.d(e,"i",(function(){return isString})),n.d(e,"j",(function(){return isUndef})),n.d(e,"k",(function(){return l})),n.d(e,"l",(function(){return b})),n.d(e,"m",(function(){return strictOf}));var r,o=n(6);!function(t){t.WEAPP="WEAPP",t.WEB="WEB",t.RN="RN",t.SWAN="SWAN",t.ALIPAY="ALIPAY",t.TT="TT",t.QQ="QQ",t.JD="JD"}(r||(r={}));r.WEAPP,r.WEB,r.RN,r.SWAN,r.ALIPAY,r.TT,r.QQ,r.JD;var c="🎮[taro-hooks]",i="react",a="vue"===i,u="react"===i,s=("\n/**\n MIT License\n\n Copyright (c) ".concat((new Date).getFullYear()," innocces\n\n Power by TARO-HOOKS\n */\n"),"color: #8843e7; font-weight: bold;");function logCtor(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach((function(e){"string"==typeof e?console.debug("%c".concat(c,"---").concat(e),s+t):console.debug(c,"---",e)}))}}var l=logCtor(),b=logCtor("color: #d14; text-decoration: underline;");function isObject(t){return null!==t&&"object"===Object(o.a)(t)}function isFunction(t){return"function"==typeof t}function isString(t){return"string"==typeof t}function isBoolean(t){return"boolean"==typeof t}function isNumber(t){return"number"==typeof t}function isUndef(t){return void 0===t}function strictOf(t,e){return Object.prototype.toString.call(t)==="[object ".concat(function camelIndex(t){return isString(t)?t.replace(/^([a-z]{1})/,(function(t,e){var n;return e?null==e||null===(n=e.toUpperCase)||void 0===n?void 0:n.call(e):null})):t}(e),"]")}var f=function escapeState(t){return function isRef(t){return!(!t||!0!==t.__v_isRef)}(t)?t.value:t}},"150":function(t,e,n){"use strict";var r=n(17),o=(n(173),n(174)),c=(n(10),n(133)),i=n(140),a=n(26),u=(n(151),n(138));e.a=function DemoContent(t){var e=t.title,n=t.desc,s=t.children,l=a.a.useRouter().params,b=function transferParams(t){return Object.fromEntries(Object.entries(t).map((function(t){var e=Object(r.a)(t,2),n=e[0],o=e[1];return[n,decodeURIComponent(o)]})))}(void 0===l?{}:l),f=b.title,p=b.onlyMini;return Object(u.jsxs)(u.Fragment,{"children":[Boolean(+p)&&Object(u.jsxs)(o.a,{"scrollable":!0,"children":[Object(u.jsx)(o.a.Icon,{"children":Object(u.jsx)(i.k,{})}),"该hook仅可在小程序使用"]}),Object(u.jsxs)(c.l,{"className":"demo-content","children":[Object(u.jsx)(c.l,{"className":"demo-content-title","children":null!=f?f:e}),Object(u.jsx)(c.l,{"className":"demo-content-desc","children":n}),Object(u.jsx)(c.l,{"className":"demo-content-wrapper","children":s})]})]})}},"151":function(t,e,n){},"153":function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return generateGeneralFail})),n.d(e,"a",(function(){return combineOptions})),n.d(e,"d",(function(){return stringfiyUrl}));var r=n(136),o=n(183);var c=!0,i=function typeOf(t,e){return[e].flat().some((function(e){return Object.prototype.toString.call(t)==="[object "+e+"]"}))};function generateGeneralFail(t,e){var n="[API "+t+"] "+(e=e||"调用失败");return c||Object(r.l)(n),{"errMsg":n}}function combineOptions(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),Object.assign({},t,e)}function stringfiyUrl(t,e){var n=t;if(e&&Object(r.m)(e,"Object")){var c=n.includes("?");n+=(c?"&":"?")+Object(o.stringify)(e)}return n}},"179":function(t,e,n){"use strict";var r=n(136),o=n(153);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e.a=function usePromise(t){return function(e){var n;if(!t)return Promise.reject(Object(o.b)(t,"please input a valid method name"));var c=null!=(n=null==t?void 0:t.name)?n:"usePromise::implementMethod";return new Promise((function(n,i){try{if(!Object(r.f)(t))throw new TypeError("["+c+"] not vaild for Taro");var a;null==(a=t(_extends({},e||{},{"success":n,"fail":i})))||null==a.catch||a.catch(i)}catch(t){i(Object(o.b)(c,t.message))}}))}}},"183":function(t,e,n){"use strict";e.decode=e.parse=n(184),e.encode=e.stringify=n(185)},"184":function(t,e,n){"use strict";function hasOwnProperty(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,o){e=e||"&",n=n||"=";var c={};if("string"!=typeof t||0===t.length)return c;var i=/\+/g;t=t.split(e);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var u=t.length;a>0&&u>a&&(u=a);for(var s=0;s<u;++s){var l,b,f,p,O=t[s].replace(i,"%20"),j=O.indexOf(n);j>=0?(l=O.substr(0,j),b=O.substr(j+1)):(l=O,b=""),f=decodeURIComponent(l),p=decodeURIComponent(b),hasOwnProperty(c,f)?r(c[f])?c[f].push(p):c[f]=[c[f],p]:c[f]=p}return c};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},"185":function(t,e,n){"use strict";var r=n(15).default,o=function stringifyPrimitive(t){switch(r(t)){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,a){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===r(t)?map(i(t),(function(r){var i=encodeURIComponent(o(r))+n;return c(t[r])?map(t[r],(function(t){return i+encodeURIComponent(o(t))})).join(e):i+encodeURIComponent(o(t[r]))})).join(e):a?encodeURIComponent(o(a))+n+encodeURIComponent(o(t)):""};var c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function map(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var i=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},"186":function(t,e,n){},"187":function(t,e,n){},"188":function(t,e,n){"use strict";var r=n(2),o=(n(161),n(144)),c=n.n(o),i=n(149),a=n.n(i),u=n(171),s=n.n(u),l=n(139),b=n(133),f=n(135),p=n.n(f),O=n(10),j=n(230),d=n(160),m=n(134),y=n(178),g=n.n(y),v=n(158),h=n.n(v),P=n(141),_=n.n(P),w=n(152);function isObjectChildren(t){if(!_()(t))return!1;var e=h()(t);return Object(w.b)(e)}var C={"toArray":O.Children.toArray,"forEach":function forEachChildren(t,e){return(isObjectChildren(t)?g.a:O.Children.forEach)(t,e)},"map":function mapChildren(t,e){return(isObjectChildren(t)?c.a:O.Children.map)(t,e)}},k=["className"];function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}function _objectWithoutProperties(t,e){if(null==t)return{};var n,r,o=function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var x=function ButtonContent(t){var e=t.className,n=_objectWithoutProperties(t,k);return O.createElement(b.l,function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach((function(e){_defineProperty(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({"className":p()(Object(m.a)("button__content"),e)},n))},N=Object(O.createContext)({}),E=Object(O.createContext)({}),S=["className"],A=["className","style","variant","shape","size","color","formType","block","hairline","disabled","loading","icon","children","onClick"];function button_ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function button_objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?button_ownKeys(Object(n),!0).forEach((function(e){button_defineProperty(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):button_ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function button_defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}function button_objectWithoutProperties(t,e){if(null==t)return{};var n,r,o=function button_objectWithoutPropertiesLoose(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function appendButtonIconClassname(t,e){return Object(l.b)(t)?Object(l.a)(t,{"className":e}):t}function useButtonPropertyValue(t,e,n){return Object(O.useMemo)((function(){return t||(e||n)}),[n,t,e])}function Button(t){var e,n=t.className,o=t.style,i=t.variant,u=t.shape,f=t.size,y=t.color,g=t.formType,v=void 0===g?"button":g,h=t.block,P=t.hairline,_=t.disabled,k=t.loading,B=t.icon,T=t.children,I=t.onClick,D=button_objectWithoutProperties(t,A),R=Object(O.useContext)(N),W=R.variant,L=R.shape,U=R.size,K=R.color,F=R.hairline,M=R.disabled,V=Object(O.useContext)(E).onClick,q=useButtonPropertyValue(i,W,"contained"),z=useButtonPropertyValue(u,L),G=useButtonPropertyValue(f,U,"medium"),Q=useButtonPropertyValue(y,K,"default"),J=useButtonPropertyValue(P,F),H=useButtonPropertyValue(_,M),Y=function useButtonLoading(t){return Object(O.useMemo)((function(){if(s()(t)&&t)return O.createElement(d.a,{"className":p()(Object(m.a)("button__loading"),Object(m.a)("button__loading--right"))});if(Object(w.b)(t)){var e=t.className,n=button_objectWithoutProperties(t,S);return O.createElement(d.a,button_objectSpread({"className":p()(Object(m.a)("button__loading"),Object(m.a)("button__loading--right"),e)},n))}return Object(w.a)(t,d.a)?Object(O.cloneElement)(t,{"className":p()(Object(m.a)("button__loading"),Object(m.a)("button__loading--right"))}):t}),[t])}(k),X=function useButtonChildren(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.loading,n=t.icon,r=t.children;if(Object(w.a)(r,x))return r;var o=C.toArray(r),i=a()(o)-1,u=appendButtonIconClassname(n,Object(m.a)("button__icon--right"));return O.createElement(x,null,e||u,c()(o,(function(t,e){return Object(l.b)(t)&&0===e?appendButtonIconClassname(t,Object(m.a)("button__icon--right")):Object(l.b)(t)&&e===i?appendButtonIconClassname(t,Object(m.a)("button__icon--left")):t})))}({"children":T,"loading":Y,"icon":B});return O.createElement(b.l,{"className":p()(Object(m.a)("button"),(e={},Object(r.a)(e,Object(m.a)("button--text"),"text"===q),Object(r.a)(e,Object(m.a)("button--contained"),"contained"===q),Object(r.a)(e,Object(m.a)("button--outlined"),"outlined"===q),Object(r.a)(e,Object(m.a)("button--".concat(Q)),Q),Object(r.a)(e,Object(m.a)("button--round"),"round"===z),Object(r.a)(e,Object(m.a)("button--square"),"square"===z),Object(r.a)(e,Object(m.a)("button--mini"),"mini"===G),Object(r.a)(e,Object(m.a)("button--small"),"small"===G),Object(r.a)(e,Object(m.a)("button--medium"),"medium"===G),Object(r.a)(e,Object(m.a)("button--large"),"large"===G),Object(r.a)(e,Object(m.a)("button--hairline"),J),Object(r.a)(e,Object(m.a)("hairline--surround"),J),Object(r.a)(e,Object(m.a)("button--disabled"),H),Object(r.a)(e,Object(m.a)("button--loading"),Y),Object(r.a)(e,Object(m.a)("button--block"),h),e),n),"style":o,"onClick":function onClick(e){H||Y||(null==I||I(e),null==V||V(e,t))}},X,O.createElement(j.a,button_objectSpread({"className":Object(m.a)("button__button"),"formType":"submit"===v?"submit":"reset"===v?"reset":void 0,"disabled":H||!!Y,"loading":!1},D)))}var B=["className","variant","shape","size","color","block","hairline","disabled"];function button_group_ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function button_group_defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}function button_group_objectWithoutProperties(t,e){if(null==t)return{};var n,r,o=function button_group_objectWithoutPropertiesLoose(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var T=function ButtonGroup(t){var e,n=t.className,o=t.variant,c=t.shape,i=t.size,a=t.color,u=t.block,s=t.hairline,l=t.disabled,f=button_group_objectWithoutProperties(t,B);return O.createElement(N.Provider,{"value":{"variant":o,"size":i,"color":a,"shape":c,"hairline":s,"disabled":l}},O.createElement(b.l,function button_group_objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?button_group_ownKeys(Object(n),!0).forEach((function(e){button_group_defineProperty(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):button_group_ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({"className":p()(Object(m.a)("button-group"),(e={},Object(r.a)(e,Object(m.a)("button-group--contained"),"contained"===o),Object(r.a)(e,Object(m.a)("button-group--text"),"text"===o),Object(r.a)(e,Object(m.a)("button-group--outlined"),"outlined"===o),Object(r.a)(e,Object(m.a)("button-group--round"),"round"===c),Object(r.a)(e,Object(m.a)("button-group--block"),u),e),n)},f)))},I=Button;I.Content=x,I.Group=T;e.a=I},"189":function(t,e,n){"use strict";n(146),n(218),n(186),n(187)},"596":function(t,e,n){"use strict";n.r(e);n(189);var r,o=n(188),c=n(26),i=n(16),a=function vibrator(t){try{return window.navigator.vibrate(t)}catch(t){console.warn("当前浏览器不支持 vibrate。")}},u=function vibrateShort(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.success,n=t.fail,r=t.complete,o=new i.b({"name":"vibrateShort","success":e,"fail":n,"complete":r});return a(15)?o.success():o.fail({"errMsg":"style is not support"})},s=function vibrateLong(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.success,n=t.fail,r=t.complete,o=new i.b({"name":"vibrateLong","success":e,"fail":n,"complete":r});return a(400)?o.success():o.fail({"errMsg":"style is not support"})},l=n(179);!function(t){t[t.SHORT=15]="SHORT",t[t.LONG=400]="LONG",t[t.DEFAULT=200]="DEFAULT"}(r||(r={}));var b=function useVibrate(t,e){void 0===e&&(e=r.DEFAULT);var n=c.a.useTaroRef(),o=function clear(){n.current&&(clearTimeout(n.current),n.current=void 0)},i=Object(l.a)(s),a=Object(l.a)(u);return c.a.useTaroEffect((function(){return function(){n.current&&t&&o()}}),[n,t]),{"vibrate":function vibrate(c){return(c?i:a)().then((function(i){if(t){var a=e+(c?r.LONG:r.SHORT);o(),n.current=setTimeout((function(){vibrate(c)}),a)}return i}))},"clear":o}},f=(n(10),n(150)),p=n(138);e.default=function(){var t=b().vibrate,e=b(!0),n=e.vibrate,r=e.clear;return Object(p.jsxs)(f.a,{"children":[Object(p.jsx)(o.a,{"block":!0,"color":"primary","className":"gap","onClick":function onClick(){return t()},"shape":"square","children":"短震动触感按钮"}),Object(p.jsx)(o.a,{"block":!0,"color":"primary","className":"gap","onClick":function onClick(){return t(!0)},"shape":"square","children":"长震动触感按钮"}),Object(p.jsx)(o.a,{"block":!0,"color":"primary","className":"gap","onClick":function onClick(){return n()},"shape":"square","children":"持续短震动触感按钮"}),Object(p.jsx)(o.a,{"block":!0,"color":"primary","className":"gap","onClick":function onClick(){return n(!0)},"shape":"square","children":"持续长震动触感按钮"}),Object(p.jsx)(o.a,{"block":!0,"color":"primary","className":"gap","onClick":function onClick(){return r()},"shape":"square","children":"关闭持续震动"})]})}}}]);