(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{"292":function(e,t,n){"use strict";n.r(t);var o=n(0),r=Object(o.createTextVNode)(" run "),c=Object(o.createTextVNode)(" stop ");var u=n(195),a=n(194),i=n.n(a);function getUsername(){return new Promise((function(e){setTimeout((function(){e(i.a.mock("@name()"))}),1e3)}))}var l={"setup":function setup(){return{"request":Object(u.a)(getUsername,{"pollingInterval":1e3,"pollingWhenHidden":!1})}}},s=n(40);const d=n.n(s)()(l,[["render",function render(e,t,n,u,a,i){var l=Object(o.resolveComponent)("taro-view"),s=Object(o.resolveComponent)("nut-button"),d=Object(o.resolveComponent)("nut-col"),b=Object(o.resolveComponent)("nut-row"),j=Object(o.resolveComponent)("demo-content"),O=Object(o.resolveComponent)("taro-block");return Object(o.openBlock)(),Object(o.createBlock)(O,null,{"default":Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{"title":"轮询"},{"default":Object(o.withCtx)((function(){return[Object(o.createVNode)(l,null,{"default":Object(o.withCtx)((function(){return[Object(o.createTextVNode)("Username: "+Object(o.toDisplayString)(u.request.loading?"Loading...":u.request.data),1)]})),"_":1}),Object(o.createVNode)(b,{"justify":"space-between"},{"default":Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{"span":11},{"default":Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{"loading":u.request.loading,"size":"small","type":"primary","shape":"square","block":"","onClick":t[0]||(t[0]=function(e){return u.request.run()})},{"default":Object(o.withCtx)((function(){return[r]})),"_":1},8,["loading"])]})),"_":1}),Object(o.createVNode)(d,{"span":11},{"default":Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{"loading":u.request.loading,"size":"small","type":"danger","shape":"square","block":"","onClick":t[1]||(t[1]=function(e){return u.request.cancel()})},{"default":Object(o.withCtx)((function(){return[c]})),"_":1},8,["loading"])]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})}]]);t.default=d}}]);