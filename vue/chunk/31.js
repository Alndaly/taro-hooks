(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"187":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return generateGeneralFail})),n.d(t,"a",(function(){return combineOptions})),n.d(t,"d",(function(){return stringfiyUrl}));var r=n(19),o=n(189);var c=!0,a=function typeOf(e,t){return[t].flat().some((function(t){return Object.prototype.toString.call(e)==="[object "+t+"]"}))};function generateGeneralFail(e,t){var n="[API "+e+"] "+(t=t||"调用失败");return c||Object(r.m)(n),{"errMsg":n}}function combineOptions(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.assign({},e,t)}function stringfiyUrl(e,t){var n=e;if(t&&Object(r.n)(t,"Object")){var c=n.includes("?");n+=(c?"&":"?")+Object(o.stringify)(t)}return n}},"188":function(e,t,n){"use strict";var r=n(19),o=n(187);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function usePromise(e){return function(t){var n;if(!e)return Promise.reject(Object(o.b)(e,"please input a valid method name"));var c=null!=(n=null==e?void 0:e.name)?n:"usePromise::implementMethod";return new Promise((function(n,a){try{if(!Object(r.g)(e))throw new TypeError("["+c+"] not vaild for Taro");var u;null==(u=e(_extends({},t||{},{"success":n,"fail":a})))||null==u.catch||u.catch(a)}catch(e){a(Object(o.b)(c,e.message))}}))}}},"189":function(e,t,n){"use strict";t.decode=t.parse=n(190),t.encode=t.stringify=n(191)},"190":function(e,t,n){"use strict";function hasOwnProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var c={};if("string"!=typeof e||0===e.length)return c;var a=/\+/g;e=e.split(t);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var i=e.length;u>0&&i>u&&(i=u);for(var s=0;s<i;++s){var l,f,p,b,d=e[s].replace(a,"%20"),O=d.indexOf(n);O>=0?(l=d.substr(0,O),f=d.substr(O+1)):(l=d,f=""),p=decodeURIComponent(l),b=decodeURIComponent(f),hasOwnProperty(c,p)?r(c[p])?c[p].push(b):c[p]=[c[p],b]:c[p]=b}return c};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},"191":function(e,t,n){"use strict";var r=n(22).default,o=function stringifyPrimitive(e){switch(r(e)){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,u){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===r(e)?map(a(e),(function(r){var a=encodeURIComponent(o(r))+n;return c(e[r])?map(e[r],(function(e){return a+encodeURIComponent(o(e))})).join(t):a+encodeURIComponent(o(e[r]))})).join(t):u?encodeURIComponent(o(u))+n+encodeURIComponent(o(e)):""};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function map(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"192":function(e,t,n){"use strict";var r=n(8),o=n(333),c=n(188),a=n(187);t.a=function useModal(e){var t=r.a.useTaroRef(e);r.a.useTaroEffect((function(){t.current=e}),[e]);var n=Object(c.a)(o.g);return function show(e){if(!e&&!t.current)return Promise.reject(Object(a.b)("showModal","please provide a option"));var r=Object(a.a)(t.current,e);return n(r)}}},"306":function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(12),c=n(15),a=n(192),u=n(11),i=Object(u.h)("chooseAddress"),s=n(188);var l=function useChooseAddress(){return Object(s.a)(i)},f=n(0),p=n(8),b=Object(f.createTextVNode)("获取收货地址");const d=Object(f.defineComponent)({"name":"index","setup":function setup(e){var t=l(),n=Object(a.a)({"mask":!0,"title":"获取结果","showCancel":!1}),u=p.a.useTaroState(),i=Object(c.a)(u,2),s=i[0],d=i[1],O=function(){var e=Object(o.a)(Object(r.a)().mark((function _callee(){var e,o;return Object(r.a)().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return e="获取成功",r.prev=1,r.next=4,t();case 4:o=r.sent,d(o),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),e=r.t0.errMsg||r.t0.message;case 11:n({"content":e});case 12:case"end":return r.stop()}}),_callee,null,[[1,8]])})));return function handleChoose(){return e.apply(this,arguments)}}();return function(e,t){var n=Object(f.resolveComponent)("nut-button"),r=Object(f.resolveComponent)("nut-cell"),o=Object(f.resolveComponent)("nut-cell-group"),c=Object(f.resolveComponent)("demo-content");return Object(f.openBlock)(),Object(f.createBlock)(c,null,{"default":Object(f.withCtx)((function(){return[Object(f.createVNode)(n,{"class":"gap","shape":"square","type":"primary","block":"","onClick":t[0]||(t[0]=function(e){return O()})},{"default":Object(f.withCtx)((function(){return[b]})),"_":1}),Object(f.createVNode)(o,{"title":"地址信息"},{"default":Object(f.withCtx)((function(){return[(Object(f.openBlock)(!0),Object(f.createElementBlock)(f.Fragment,null,Object(f.renderList)(Object(f.unref)(s),(function(e,t){return Object(f.openBlock)(),Object(f.createBlock)(r,{"key":t,"title":t,"desc":e},null,8,["title","desc"])})),128))]})),"_":1})]})),"_":1})}}});t.default=d}}]);