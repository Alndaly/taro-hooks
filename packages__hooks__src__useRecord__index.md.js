(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5773],{27832:function(e,t,l){"use strict";l.r(t);var n=l(13378),a=l(3911),r=l(67294),c=l(9790);t["default"]=e=>{var t=e.hidden,l=(0,a.Z)(e,["hidden"]);return r.createElement(c.Z,(0,n.Z)({className:t?"__dumi_taro-hook-hidden":""},l))}},26218:function(e,t,l){"use strict";l.r(t);var n=l(67294),a=l(96089),r=l(27832),c=l(65659),d=l(83979),m=n.memo(d.default["pages-useaudio"].component);t["default"]=e=>(n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h1",{id:"userecord"},n.createElement(a.AnchorLink,{to:"#userecord","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useRecord"),n.createElement("p",null,"\u5f55\u97f3\u64cd\u4f5c\u7b49."),n.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.createElement("p",null,"\u5f53\u9700\u8981\u8fdb\u884c\u5f55\u97f3\u64cd\u4f5c\u65f6"),n.createElement("h2",{id:"api"},n.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"API"),n.createElement(c.Z,{code:"const [\n  recorderManager,\n  recorderManagerStatus,\n  {\n    onError,\n    onFrameRecorded,\n    onInterruptionBegin,\n    onInterruptionEnd,\n    onPause,\n    onResume,\n    onStart,\n    onStop,\n    startRecord,\n    stopRecord,\n    pauseRecord,\n    resumeRecord,\n  },\n] = useRecord();",lang:"jsx"}),n.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),n.createElement("p",null,"\u65e0"),n.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u8fd4\u56de\u503c"),n.createElement("th",null,"\u8bf4\u660e"),n.createElement("th",null,"\u7c7b\u578b"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"recorderManager"),n.createElement("td",null,"\u5168\u5c40\u552f\u4e00\u5f55\u97f3\u7ba1\u7406\u5668"),n.createElement("td",null,n.createElement("code",null,"RecorderManager | undefined"))),n.createElement("tr",null,n.createElement("td",null,"recorderManagerStatus"),n.createElement("td",null,"\u5f53\u524d\u5f55\u97f3\u7ba1\u7406\u5668\u72b6\u6001"),n.createElement("td",null,n.createElement("code",null,"RecordStatus | undefined"))),n.createElement("tr",null,n.createElement("td",null,"onError"),n.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u9519\u8bef\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: RecorderManager.OnErrorCallback) => void"))),n.createElement("tr",null,n.createElement("td",null,"onFrameRecorded"),n.createElement("td",null,"\u76d1\u542c\u5df2\u5f55\u5236\u5b8c\u6307\u5b9a\u5e27\u5927\u5c0f\u7684\u6587\u4ef6\u4e8b\u4ef6\u3002"),n.createElement("td",null,n.createElement("code",null,"(callback: RecorderManager.OnFrameRecordedCallback) => void"))),n.createElement("tr",null,n.createElement("td",null,"onInterruptionBegin"),n.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u56e0\u4e3a\u53d7\u5230\u7cfb\u7edf\u5360\u7528\u800c\u88ab\u4e2d\u65ad\u5f00\u59cb\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: General.EventCallback) => void"))),n.createElement("tr",null,n.createElement("td",null,"onInterruptionEnd"),n.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u4e2d\u65ad\u7ed3\u675f\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: General.EventCallback) => void"))),n.createElement("tr",null,n.createElement("td",null,"onPause"),n.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u6682\u505c\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: General.EventCallback) => void"))),n.createElement("tr",null,n.createElement("td",null,"onResume"),n.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u7ee7\u7eed\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: General.EventCallback) => void"))),n.createElement("tr",null,n.createElement("td",null,"onStart"),n.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u5f00\u59cb\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: General.EventCallback) => void"))),n.createElement("tr",null,n.createElement("td",null,"onStop"),n.createElement("td",null,"\u76d1\u542c\u5f55\u97f3\u7ed3\u675f\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: RecorderManager.OnStopCallback) => void"))),n.createElement("tr",null,n.createElement("td",null,"startRecord"),n.createElement("td",null,"\u5f00\u59cb\u5f55\u97f3"),n.createElement("td",null,n.createElement("code",null,"(option: RecorderManager.StartOption) => Promise<General.CallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"stopRecord"),n.createElement("td",null,"\u7ed3\u675f\u5f55\u97f3"),n.createElement("td",null,n.createElement("code",null,"() => Promise<General.CallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"pauseRecord"),n.createElement("td",null,"\u6682\u505c\u5f55\u97f3"),n.createElement("td",null,n.createElement("code",null,"() => Promise<General.CallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"resumeRecord"),n.createElement("td",null,"\u7ee7\u7eed\u5f55\u97f3"),n.createElement("td",null,n.createElement("code",null,"() => Promise<General.CallbackResult>"))))),n.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},n.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),n.createElement(r.default,d.default["pages-useaudio"].previewerProps,n.createElement(m,null)),n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},n.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),n.createElement("th",{align:"center"},"H5"),n.createElement("th",{align:"center"},"ReactNative"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"}),n.createElement("td",{align:"center"},"\u2714\ufe0f"))))))))}}]);