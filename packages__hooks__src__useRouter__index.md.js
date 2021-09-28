(self["webpackChunk"]=self["webpackChunk"]||[]).push([[3713],{27832:function(e,t,n){"use strict";n.r(t);var l=n(13378),a=n(3911),r=n(67294),c=n(9790);t["default"]=e=>{var t=e.hidden,n=(0,a.Z)(e,["hidden"]);return r.createElement(c.Z,(0,l.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},73392:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),r=n(27832),c=n(65659),o=n(83979),m=l.memo(o.default["pages-userouter"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"userouter"},l.createElement(a.AnchorLink,{to:"#userouter","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useRouter"),l.createElement("p",null,"\u8def\u7531\u76f8\u5173, \u6269\u5145 ",l.createElement("code",null,"Taro useRouter")," , \u5e76\u878d\u5408\u8df3\u8f6c\u5c0f\u7a0b\u5e8f ",l.createElement("code",null,"api")),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u8def\u7531\uff0c\u6216\u8005\u8fdb\u884c\u8def\u7531\u4ee5\u53ca\u5c0f\u7a0b\u5e8f\u8df3\u8f6c\u64cd\u4f5c\u65f6"),l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const [\n  routerInfo,\n  { switchTab, reLaunch, redirectTo, navigateTo, navigateBack },\n] = useRouter();",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("p",null,"\u65e0"),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u53c2\u6570:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",null,"url: string"),": \u9700\u8981\u8df3\u8f6c\u7684\u5e94\u7528\u5185\u8def\u5f84"),l.createElement("li",null,l.createElement("code",null,"options: ","{"," [_string]: any ","}"),": \u8df3\u8f6c\u643a\u5e26\u53c2\u6570(\u53ef\u9009)",l.createElement("br",null))),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"routerInfo"),l.createElement("td",null,"\u5f53\u524d\u9875\u9762\u8def\u7531\u4fe1\u606f"),l.createElement("td",null,l.createElement("code",null,"RouterInfo<Partial<Record<string, string>>>"))),l.createElement("tr",null,l.createElement("td",null,"switchTab"),l.createElement("td",null,"\u5f02\u6b65\u8df3\u8f6c tabBar \u9875\u9762"),l.createElement("td",null,l.createElement("code",null,"(url: string, options?: TRecord) => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"reLaunch"),l.createElement("td",null,"\u5f02\u6b65\u5173\u95ed\u6240\u6709\u9875\u9762\uff0c\u6253\u5f00\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762"),l.createElement("td",null,l.createElement("code",null,"(url: string, options?: TRecord) => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"redirectTo"),l.createElement("td",null,"\u5f02\u6b65\u5173\u95ed\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762"),l.createElement("td",null,l.createElement("code",null,"(url: string, options?: TRecord) => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"navigateTo"),l.createElement("td",null,"\u5f02\u6b65\u4fdd\u7559\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762\u6216\u8df3\u8f6c\u81f3\u5c0f\u7a0b\u5e8f"),l.createElement("td",null,l.createElement("code",null,"(urlOrMark: string | boolean, options?: TRecord | INavigateToMiniProgramSyncOptions) => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"navigateBack"),l.createElement("td",null,"\u5f02\u6b65\u5173\u95ed\u5f53\u524d\u9875\u9762\uff0c\u8fd4\u56de\u4e0a\u4e00\u9875\u9762\u6216\u591a\u7ea7\u9875\u9762\u6216\u8fd4\u56de\u5c0f\u7a0b\u5e8f"),l.createElement("td",null,l.createElement("code",null,"(deltaOrMark?: number | boolean, extraData?: TRecord) => Promise<General.CallbackResult>"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(r.default,o.default["pages-userouter"].previewerProps,l.createElement(m,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f")))),l.createElement("h2",{id:"faq"},l.createElement(a.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"FAQ"),l.createElement("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#1-\u66f4\u591a\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"1. \u66f4\u591a\u8bf4\u660e"),l.createElement("p",null,"\u89c1",l.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html"},"\u5c0f\u7a0b\u5e8f\u76f8\u5173\u6587\u6863"),l.createElement("br",null),"\u89c1",l.createElement(a.Link,{to:"https://taro-docs.jd.com/taro/docs/hooks#userouter"},"Taro \u6587\u6863"))))))}}]);