(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{"280":function(e,t,n){"use strict";n.r(t);var o=n(0);var r=n(195),a=n(15),c=n(8),s=n(333);function editUsername(e){return new Promise((function(e,t){setTimeout((function(){Math.random()>.5?e():t(new Error("Failed to modify username"))}),1e3)}))}var u={"setup":function setup(){var e=c.a.useTaroState(""),t=Object(a.a)(e,2),n=t[0],o=t[1],u=c.a.useTaroState(0),i=Object(a.a)(u,2),l=i[0],d=i[1],b=c.a.useTaroState(),p=Object(a.a)(b,2),f=p[0],j=p[1];return{"request":Object(r.a)(editUsername,{"manual":!0,"onBefore":function onBefore(e){d(0),j(),Object(s.h)({"icon":"none","title":"Start Request: ".concat(e[0])})},"onSuccess":function onSuccess(e,t){o(""),j("heart-fill"),Object(s.h)({"icon":"success","title":'The username was changed to "'.concat(t[0],'" !')})},"onError":function onError(e){j("del2"),Object(s.h)({"icon":"error","title":e.message})},"onFinally":function onFinally(e,t,n){d(100)}}),"state":n,"progress":l,"status":f}}},i=n(40);const l=n.n(i)()(u,[["render",function render(e,t,n,r,a,c){var s=Object(o.resolveComponent)("nut-button"),u=Object(o.resolveComponent)("nut-input"),i=Object(o.resolveComponent)("nut-progress"),l=Object(o.resolveComponent)("demo-content"),d=Object(o.resolveComponent)("taro-block");return Object(o.openBlock)(),Object(o.createBlock)(d,null,{"default":Object(o.withCtx)((function(){return[Object(o.createVNode)(l,{"title":"Basic - 生命周期"},{"default":Object(o.withCtx)((function(){var e,n;return[Object(o.createVNode)(u,{"disabled":r.request.loading,"modelValue":r.state,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.state=e}),"placeholder":"Please enter username"},{"button":Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{"loading":r.request.loading,"size":"small","type":"primary","shape":"square","onClick":t[0]||(t[0]=function(e){return r.request.run(r.state)})},{"default":Object(o.withCtx)((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(r.request.loading?"Loading":"Edit"),1)]})),"_":1},8,["loading"])]})),"_":1},8,["disabled","modelValue"]),Object(o.createVNode)(i,{"percentage":r.progress,"text-inside":!(null!==(e=r.status)&&void 0!==e&&e.length),"status":null!==(n=r.status)&&void 0!==n&&n.length?"icon":"text","icon-name":r.status,"icon-color":"#a773ed"},null,8,["percentage","text-inside","status","icon-name"])]})),"_":1})]})),"_":1})}]]);t.default=l}}]);