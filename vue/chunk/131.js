(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{"276":function(e,n,t){"use strict";t.r(n);var a=t(0);var l=t(28),c={"setup":function setup(){return{"useRequestDemoItem":[{"name":"basic","title":"基础用法","needIndex":!0},{"name":"basic/manualRun","title":"手动触发(run)"},{"name":"basic/manualRunAsync","title":"手动触发(runAsync)"},{"name":"basic/lifeCycle","title":"生命周期"},{"name":"basic/refresh","title":"刷新（重复上一次请求）"},{"name":"basic/mutate","title":"立即变更数据"},{"name":"basic/params","title":"参数管理"},{"name":"basic/cancel","title":"取消请求"},{"name":"loadingDelay","title":"loading Delay","needIndex":!0},{"name":"polling","title":"轮询","needIndex":!0},{"name":"ready","title":"Ready - 自动模式","needIndex":!0},{"name":"ready/manualReady","title":"Ready - 手动模式"},{"name":"refreshDeps","title":"依赖刷新","needIndex":!0},{"name":"refreshOnWindowFocus","title":"屏幕聚焦重新请求","needIndex":!0},{"name":"debounce","title":"防抖","needIndex":!0},{"name":"throttle","title":"节流","needIndex":!0},{"name":"cache/cacheKey","title":"缓存 & SWR"},{"name":"cache/clearCache","title":"缓存 & SWR - 删除缓存"},{"name":"cache/params","title":"缓存 & SWR - 参数缓存"},{"name":"cache/setCache","title":"缓存 & SWR - 自定义缓存"},{"name":"cache/share","title":"缓存 & SWR - 数据共享"},{"name":"cache/staleTime","title":"缓存 & SWR - 数据保持新鲜"},{"name":"retry","title":"错误重试","needIndex":!0}],"handleNavigate":function handleNavigate(e,n){Object(l.e)({"url":"/pages/network/useRequest/"+e+(n?"/index":"")})}}}},i=t(40);const r=t.n(i)()(c,[["render",function render(e,n,t,l,c,i){var r=Object(a.resolveComponent)("nut-cell"),o=Object(a.resolveComponent)("taro-block");return Object(a.openBlock)(),Object(a.createBlock)(o,null,{"default":Object(a.withCtx)((function(){return[(Object(a.openBlock)(!0),Object(a.createElementBlock)(a.Fragment,null,Object(a.renderList)(l.useRequestDemoItem,(function(e){return Object(a.openBlock)(),Object(a.createBlock)(r,{"key":e.name,"title":e.title,"onClick":function onClick(n){return l.handleNavigate(e.name,e.needIndex)},"is-link":""},null,8,["title","onClick"])})),128))]})),"_":1})}]]);n.default=r}}]);