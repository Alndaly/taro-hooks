(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"136":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"d",(function(){return d})),e.d(t,"e",(function(){return isBoolean})),e.d(t,"f",(function(){return isFunction})),e.d(t,"g",(function(){return isNumber})),e.d(t,"h",(function(){return isObject})),e.d(t,"i",(function(){return isString})),e.d(t,"j",(function(){return isUndef})),e.d(t,"k",(function(){return f})),e.d(t,"l",(function(){return l})),e.d(t,"m",(function(){return strictOf}));var r,c=e(6);!function(n){n.WEAPP="WEAPP",n.WEB="WEB",n.RN="RN",n.SWAN="SWAN",n.ALIPAY="ALIPAY",n.TT="TT",n.QQ="QQ",n.JD="JD"}(r||(r={}));r.WEAPP,r.WEB,r.RN,r.SWAN,r.ALIPAY,r.TT,r.QQ,r.JD;var o="🎮[taro-hooks]",i="react",u="vue"===i,a="react"===i,s=("\n/**\n MIT License\n\n Copyright (c) ".concat((new Date).getFullYear()," innocces\n\n Power by TARO-HOOKS\n */\n"),"color: #8843e7; font-weight: bold;");function logCtor(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach((function(t){"string"==typeof t?console.debug("%c".concat(o,"---").concat(t),s+n):console.debug(o,"---",t)}))}}var f=logCtor(),l=logCtor("color: #d14; text-decoration: underline;");function isObject(n){return null!==n&&"object"===Object(c.a)(n)}function isFunction(n){return"function"==typeof n}function isString(n){return"string"==typeof n}function isBoolean(n){return"boolean"==typeof n}function isNumber(n){return"number"==typeof n}function isUndef(n){return void 0===n}function strictOf(n,t){return Object.prototype.toString.call(n)==="[object ".concat(function camelIndex(n){return isString(n)?n.replace(/^([a-z]{1})/,(function(n,t){var e;return t?null==t||null===(e=t.toUpperCase)||void 0===e?void 0:e.call(t):null})):n}(t),"]")}var d=function escapeState(n){return function isRef(n){return!(!n||!0!==n.__v_isRef)}(n)?n.value:n}},"150":function(n,t,e){"use strict";var r=e(17),c=(e(173),e(174)),o=(e(10),e(133)),i=e(140),u=e(26),a=(e(151),e(138));t.a=function DemoContent(n){var t=n.title,e=n.desc,s=n.children,f=u.a.useRouter().params,l=function transferParams(n){return Object.fromEntries(Object.entries(n).map((function(n){var t=Object(r.a)(n,2),e=t[0],c=t[1];return[e,decodeURIComponent(c)]})))}(void 0===f?{}:f),d=l.title,b=l.onlyMini;return Object(a.jsxs)(a.Fragment,{"children":[Boolean(+b)&&Object(a.jsxs)(c.a,{"scrollable":!0,"children":[Object(a.jsx)(c.a.Icon,{"children":Object(a.jsx)(i.k,{})}),"该hook仅可在小程序使用"]}),Object(a.jsxs)(o.l,{"className":"demo-content","children":[Object(a.jsx)(o.l,{"className":"demo-content-title","children":null!=d?d:t}),Object(a.jsx)(o.l,{"className":"demo-content-desc","children":e}),Object(a.jsx)(o.l,{"className":"demo-content-wrapper","children":s})]})]})}},"151":function(n,t,e){},"153":function(n,t,e){"use strict";e.d(t,"c",(function(){return o})),e.d(t,"e",(function(){return i})),e.d(t,"b",(function(){return generateGeneralFail})),e.d(t,"a",(function(){return combineOptions})),e.d(t,"d",(function(){return stringfiyUrl}));var r=e(136),c=e(183);var o=!0,i=function typeOf(n,t){return[t].flat().some((function(t){return Object.prototype.toString.call(n)==="[object "+t+"]"}))};function generateGeneralFail(n,t){var e="[API "+n+"] "+(t=t||"调用失败");return o||Object(r.l)(e),{"errMsg":e}}function combineOptions(n,t){return void 0===n&&(n={}),void 0===t&&(t={}),Object.assign({},n,t)}function stringfiyUrl(n,t){var e=n;if(t&&Object(r.m)(t,"Object")){var o=e.includes("?");e+=(o?"&":"?")+Object(c.stringify)(t)}return e}},"337":function(n,t,e){"use strict";e.d(t,"a",(function(){return createUseInfoHook}));var r=e(26),c=e(136),o=e(153);function createUseInfoHook(n,t){return function(){return r.a.useTaroRef(function safeExcute(){try{if(!o.c){var e,r=null==(e=n())||null==e.then?void 0:e.then((function(n){return n}),c.k);return Object(o.e)(r,"Promise")&&"then"in r?t:r||n()}return n()}catch(e){return Object(c.l)("[createUseInfoHook]: "+e.message+". "+String(n)),t}}()).current}}},"613":function(n,t,e){"use strict";e.r(t);e(167);var r=e(155),c=e(17),o=e(369),i=e(337),u=Object(i.a)(o.b,{}),a=(e(10),e(150)),s=e(138);t.default=function(){var n=u();return Object(s.jsx)(a.a,{"children":Object.keys(n).length?Object(s.jsx)(r.d.Group,{"clickable":!0,"children":Object.entries(n).map((function(n){var t=Object(c.a)(n,2),e=t[0],o=t[1];return Object(s.jsx)(r.d,{"title":e,"children":JSON.stringify(o)},e)}))}):Object(s.jsx)(r.d,{"children":"暂无信息"})})}}}]);