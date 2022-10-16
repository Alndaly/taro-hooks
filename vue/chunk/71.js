/*! For license information please see 71.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"166":function(n,o,i){"use strict";i.r(o),i.d(o,"taro_pull_to_refresh",(function(){return p}));var a=i(45),s=i(8),c=i(193);function setTransform(n,o){n.transform=o,n.webkitTransform=o,n.MozTransform=o}var l="undefined"!=typeof navigator&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),u={"activate":"release","deactivate":"pull","release":"loading","finish":"finish"},d=!1;try{var f=Object.defineProperty({},"passive",{"get":function(){d=!0}});window.addEventListener("cancel",(function(){return{}}),f)}catch(n){}var h=!!d&&{"passive":!1},p=function(){function e(n){var o=this;Object(a.g)(this,n),this.onRefresh=Object(a.c)(this,"refresh",7),this.prefixCls="rmc-pull-to-refresh",this.distanceToRefresh=50,this.damping=100,this.indicator=u,this.currSt="deactivate",this.dragOnEdge=!1,this._ScreenY=0,this._startScreenY=0,this._lastScreenY=0,this._isMounted=!1,this.triggerPullDownRefresh=function(n){!o.dragOnEdge&&o._isMounted&&(n?(o._lastScreenY=o.distanceToRefresh+1,o.currSt="release",o.setContentStyle(o._lastScreenY)):(o.currSt="finish",o.reset()))},this.init=function(){var n=o.scrollContainer,i=o.el.querySelector("rmc-pull-to-refresh-content");o.el.appendChild=null==i?void 0:i.appendChild.bind(i),o.el.insertBefore=null==i?void 0:i.insertBefore.bind(i),o.el.replaceChild=null==i?void 0:i.replaceChild.bind(i),o.el.removeChild=null==i?void 0:i.removeChild.bind(i),o._to={"touchstart":o.onTouchStart.bind(o,n),"touchmove":o.onTouchMove.bind(o,n),"touchend":o.onTouchEnd.bind(o,n),"touchcancel":o.onTouchEnd.bind(o,n)},Object.keys(o._to).forEach((function(i){n.addEventListener(i,o._to[i],h)}))},this.destroy=function(){var n=o.scrollContainer;Object.keys(o._to).forEach((function(i){n.removeEventListener(i,o._to[i])}))},this.onTouchStart=function(n,i){o._ScreenY=o._startScreenY=i.touches[0].screenY,o._lastScreenY=o._lastScreenY||0},this.isEdge=function(n){var i=o.scrollContainer;return i&&i===document.body?(document.scrollingElement?document.scrollingElement:document.body).scrollTop<=0:n.scrollTop<=0},this.damp=function(n){return Math.abs(o._lastScreenY)>o.damping?0:n*=.6*(1-Math.abs(o._ScreenY-o._startScreenY)/window.screen.height)},this.onTouchMove=function(n,i){var a=i.touches[0].screenY;if(!(o._startScreenY>a)&&o.isEdge(n)){o.dragOnEdge||(o._ScreenY=o._startScreenY=i.touches[0].screenY,o.dragOnEdge=!0),i.cancelable&&i.preventDefault();var s=Math.round(a-o._ScreenY);o._ScreenY=a,o._lastScreenY+=o.damp(s),o.setContentStyle(o._lastScreenY),Math.abs(o._lastScreenY)<o.distanceToRefresh?"deactivate"!==o.currSt&&(o.currSt="deactivate"):"deactivate"===o.currSt&&(o.currSt="activate"),l&&i.changedTouches[0].clientY<0&&o.onTouchEnd()}},this.onTouchEnd=function(){o.dragOnEdge&&(o.dragOnEdge=!1),"activate"===o.currSt?(o.currSt="release",o.onRefresh.emit(o),o._lastScreenY=o.distanceToRefresh+1,o.setContentStyle(o._lastScreenY)):"release"===o.currSt?(o._lastScreenY=o.distanceToRefresh+1,o.setContentStyle(o._lastScreenY)):o.reset()},this.reset=function(){o._lastScreenY=0,o.setContentStyle(0)},this.setContentStyle=function(n){o.contentRef&&setTransform(o.contentRef.style,n?"translate3d(0px,"+n+"px,0)":"")}}return Object.defineProperty(e.prototype,"scrollContainer",{"get":function(){return this.el.parentElement||document.querySelector(".taro_page_stationed")||document.querySelector(".taro_page")||document.querySelector(".taro_router")||document.querySelector(".taro-tabbar__panel")||document.body},"enumerable":!1,"configurable":!0}),e.prototype.statusChange=function(){if("release"===this.currSt){var n=this.el.closest(".taro_page");n&&n.__page&&n.__page.onPullDownRefresh()}},e.prototype.disconnectedCallback=function(){this.destroy()},e.prototype.componentDidLoad=function(){var n=this;this.init(),this._isMounted=!0,s.a.eventCenter.on("__taroStartPullDownRefresh",(function(o){var i=o.successHandler,a=o.errorHandler;try{n.triggerPullDownRefresh(!0),i({"errMsg":"startPullDownRefresh: ok"})}catch(n){a({"errMsg":"startPullDownRefresh: fail"})}})),s.a.eventCenter.on("__taroStopPullDownRefresh",(function(o){var i=o.successHandler,a=o.errorHandler;try{n.triggerPullDownRefresh(!1),i({"errMsg":"stopPullDownRefresh: ok"})}catch(n){a({"errMsg":"stopPullDownRefresh: fail"})}}))},e.prototype.render=function(){var n=this,t=function(o){var i=n,s=i.currSt,l=i.dragOnEdge,u=i.prefixCls,d=Object(c.c)(o,!l&&u+"-transition"),f="activate"===s||"release"===s;return Object(a.e)("div",{"class":u+"-content-wrapper"},Object(a.e)("div",{"class":d,"ref":function(o){n.contentRef=o}},f&&Object(a.e)("div",{"class":u+"-indicator"},Object(a.e)("div",null),Object(a.e)("div",null),Object(a.e)("div",null)),Object(a.e)("slot",null)))};return this.scrollContainer?t(this.prefixCls+"-content "+this.prefixCls+"-down"):Object(a.e)(a.a,{"class":Object(c.c)(this.prefixCls,this.prefixCls+"-down")},t(this.prefixCls+"-content"))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(a.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"currSt":["statusChange"]}},"enumerable":!1,"configurable":!0}),e}();p.style=".rmc-pull-to-refresh-content{-webkit-transform-origin:left top 0;transform-origin:left top 0}.rmc-pull-to-refresh-content-wrapper{overflow:hidden;min-height:100vh}.rmc-pull-to-refresh-transition{-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s}@-webkit-keyframes rmc-pull-to-refresh-indicator{50%{opacity:0.2}100%{opacity:1}}@keyframes rmc-pull-to-refresh-indicator{50%{opacity:0.2}100%{opacity:1}}.rmc-pull-to-refresh-indicator{height:30px;line-height:10px;text-align:center}.rmc-pull-to-refresh-indicator>div{display:inline-block;margin:3px;border-radius:100%;width:6px;height:6px;background-color:grey;-webkit-animation:rmc-pull-to-refresh-indicator 0.5s 0s infinite linear;animation:rmc-pull-to-refresh-indicator 0.5s 0s infinite linear;-webkit-animation-fill-mode:both;animation-fill-mode:both}.rmc-pull-to-refresh-indicator>div:nth-child(0){-webkit-animation-delay:-0.1s !important;animation-delay:-0.1s !important}.rmc-pull-to-refresh-indicator>div:nth-child(1){-webkit-animation-delay:-0.2s !important;animation-delay:-0.2s !important}.rmc-pull-to-refresh-indicator>div:nth-child(2){-webkit-animation-delay:-0.3s !important;animation-delay:-0.3s !important}.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator{margin-top:-25px}"},"193":function(n,o,i){"use strict";(function(n){i.d(o,"a",(function(){return createCommonjsModule})),i.d(o,"b",(function(){return a})),i.d(o,"c",(function(){return s})),i.d(o,"d",(function(){return getDefaultExportFromCjs}));var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function createCommonjsModule(n,o,i){return n(i={"path":o,"exports":{},"require":function(n,o){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports}var s=createCommonjsModule((function(n){!function(){var o={}.hasOwnProperty;function r(){for(var n=[],i=0;i<arguments.length;i++){var a=arguments[i];if(a){var s=typeof a;if("string"===s||"number"===s)n.push(a);else if(Array.isArray(a)){if(a.length){var c=r.apply(null,a);c&&n.push(c)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var l in a)o.call(a,l)&&a[l]&&n.push(l);else n.push(a.toString())}}return n.join(" ")}n.exports?(r.default=r,n.exports=r):window.classNames=r}()}))}).call(this,i(53))}}]);