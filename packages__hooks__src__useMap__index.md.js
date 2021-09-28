(self["webpackChunk"]=self["webpackChunk"]||[]).push([[1563],{27832:function(e,t,n){"use strict";n.r(t);var l=n(13378),a=n(3911),c=n(67294),r=n(9790);t["default"]=e=>{var t=e.hidden,n=(0,a.Z)(e,["hidden"]);return c.createElement(r.Z,(0,l.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},89226:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),c=n(27832),r=n(65659),o=n(83979),i=l.memo(o.default["pages-usemap"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"usemap"},l.createElement(a.AnchorLink,{to:"#usemap","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useMap"),l.createElement("p",null,"\u5730\u56fe"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u64cd\u4f5c\u5730\u56fe\u76f8\u5173"),l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(r.Z,{code:"const [\n  mapContext,\n  {\n    create,\n    getCenterLocation,\n    getRegion,\n    getScale,\n    getRotate,\n    getSkew,\n    includePoints,\n    moveToLocation,\n    translateMarker,\n  },\n] = useMap(mapId, scope?);",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"mapId"),l.createElement("td",null,"\u5bf9\u5e94",l.createElement("code",null,"Map"),"\u7ec4\u4ef6 id"),l.createElement("td",null,l.createElement("code",null,"string")),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"scope"),l.createElement("td",null,"\u82e5\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u5e94\u7ec4\u4ef6\u5b9e\u4f8b"),l.createElement("td",null,l.createElement("code",null,"Record<string, any>")),l.createElement("td",null,"-")))),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("p",null,"| \u8fd4\u56de\u503c            | \u8bf4\u660e                                                               | \u7c7b\u578b                                                                                                                                                                                                | | ----------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | | mapContext        | \u5730\u56fe\u5b9e\u4f8b                                                           | ",l.createElement("code",null,"MapContext                                                                                                                                                                                         | undefined")," | | create            | \u6307\u5b9a id\u3001\u7ec4\u4ef6\u521b\u5efa\u5730\u56fe\u5b9e\u4f8b                                          | ",l.createElement("code",null,"(mapId: string,scope?: Record<string, any>) => IMapContext"),"                                                                                                                                        | | getCenterLocation | \u83b7\u53d6\u5f53\u524d\u5730\u56fe\u4e2d\u5fc3\u7684\u7ecf\u7eac\u5ea6\u3002\u8fd4\u56de\u7684\u662f gcj02 \u5750\u6807\u7cfb                    | ",l.createElement("code",null,"() => Promise<MapContext.GetCenterLocationSuccessCallbackResult | General.CallbackResult>"),"                                                                                                    | | getRegion         | \u83b7\u53d6\u5f53\u524d\u5730\u56fe\u7684\u89c6\u91ce\u8303\u56f4                                             | ",l.createElement("code",null,"() => Promise<MapContext.GetRegionSuccessCallbackResult | General.CallbackResult>"),"                                                                                                            | | getScale          | \u83b7\u53d6\u5f53\u524d\u5730\u56fe\u7684\u7f29\u653e\u7ea7\u522b                                             | ",l.createElement("code",null,"() => Promise<MapContext.GetScaleSuccessCallbackResult | General.CallbackResult>"),"                                                                                                             | | getRotate         | \u83b7\u53d6\u5f53\u524d\u5730\u56fe\u7684\u65cb\u8f6c\u89d2                                               | ",l.createElement("code",null,"() => Promise<MapContext.GetRotateSuccessCallbackResult | General.CallbackResult>"),"                                                                                                            | | getSkew           | \u83b7\u53d6\u5f53\u524d\u5730\u56fe\u7684\u503e\u659c\u89d2                                               | ",l.createElement("code",null,"() => Promise<MapContext.GetSkewSuccessCallbackResult | General.CallbackResult>"),"                                                                                                              | | includePoints     | \u7f29\u653e\u89c6\u91ce\u5c55\u793a\u6240\u6709\u7ecf\u7eac\u5ea6                                             | ",l.createElement("code",null,"(points: MapContext.MapPostion[]) => Promise<General.CallbackResult>"),"                                                                                                                              | | moveToLocation    | \u5c06\u5730\u56fe\u4e2d\u5fc3\u79fb\u7f6e\u5f53\u524d\u5b9a\u4f4d\u70b9\uff0c\u6b64\u65f6\u9700\u8bbe\u7f6e\u5730\u56fe\u7ec4\u4ef6 show-location \u4e3a true | ",l.createElement("code",null,"(options?: Pick<MapContext.MoveToLocationOption, 'longitude' | 'latitude'>) => Promise<General.CallbackResult>"),"                                                                               | | translateMarker   | \u5e73\u79fb marker\uff0c\u5e26\u52a8\u753b                                                | ",l.createElement("code",null,"(options: Pick<MapContext.TranslateMarkerOption, 'animationEnd' | 'autoRotate' | 'destination' | 'duration' | 'markerId' | 'rotate'>) => Promise<General.CallbackResult>")," |"),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(c.default,o.default["pages-usemap"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"}),l.createElement("td",{align:"center"}))))))))}}]);