"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[3190],{4490:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>m});n(79);var a=n(8570),o=n(6417),r=n(9497);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const i={title:"useManualPullDownRefresh",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5e03\u5c40",path:"/layout"}},p=void 0,c={unversionedId:"useManualPullDownRefresh/index",id:"useManualPullDownRefresh/index",title:"useManualPullDownRefresh",description:"\u533a\u5206\u5b98\u65b9\u7684usePullDownRefresh, \u5b98\u65b9\u4e3a\u76d1\u542c\u4e0b\u62c9\u5237\u65b0, \u800c\u672c hook \u5219\u4e3a\u624b\u52a8\u63a7\u5236\u754c\u9762\u5c55\u793a\u4e0b\u62c9\u5237\u65b0",source:"@site/../packages/hooks/src/useManualPullDownRefresh/index.md",sourceDirName:"useManualPullDownRefresh",slug:"/useManualPullDownRefresh/",permalink:"/taro-hooks/hooks/useManualPullDownRefresh/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useManualPullDownRefresh/index.md",tags:[],version:"current",lastUpdatedBy:"rhliu1996",lastUpdatedAt:1703912664,formattedLastUpdatedAt:"2023\u5e7412\u670830\u65e5",frontMatter:{title:"useManualPullDownRefresh",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5e03\u5c40",path:"/layout"}},sidebar:"hooks",previous:{title:"useBackground",permalink:"/taro-hooks/hooks/useBackground/"},next:{title:"useTabBar",permalink:"/taro-hooks/hooks/useTabBar/"}},k={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:m},h="wrapper";function b(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(h,u(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u533a\u5206\u5b98\u65b9\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"usePullDownRefresh"),", \u5b98\u65b9\u4e3a\u76d1\u542c\u4e0b\u62c9\u5237\u65b0, \u800c\u672c hook \u5219\u4e3a\u624b\u52a8\u63a7\u5236\u754c\u9762\u5c55\u793a\u4e0b\u62c9\u5237\u65b0")),(0,a.kt)("p",null,"\u624b\u52a8\u4e0b\u62c9\u5237\u65b0"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u624b\u52a8\u8bbe\u7f6e\u4e0b\u62c9\u5237\u65b0\u72b6\u6001\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const [start, stop] = useManualPullDownRefresh();\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(duration?: number) => Promise<General.CallbackResult>")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u59cb\u4e0b\u62c9\u5237\u65b0\u3002\u8c03\u7528\u540e\u89e6\u53d1\u4e0b\u62c9\u5237\u65b0\u52a8\u753b\uff0c\u6548\u679c\u4e0e\u7528\u6237\u624b\u52a8\u4e0b\u62c9\u5237\u65b0\u4e00\u81f4(\u82e5\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"td"},"duration"),", \u5219\u4f1a\u5728\u8bbe\u7f6e\u65f6\u95f4\u7ed3\u675f\u540e\u81ea\u52a8\u505c\u6b62\u4e0b\u62c9\u5237\u65b0)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stop"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"() => Promise<General.CallbackResult>")),(0,a.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u5f53\u524d\u9875\u9762\u4e0b\u62c9\u5237\u65b0")))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"layout/useManualPullDownRefresh/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/layout/useManualPullDownRefresh/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/layout/useManualPullDownRefresh/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button shape="square" type="primary" class="gap" block @click="start()"\n      >\u5f00\u59cb\u4e0b\u62c9\u5237\u65b0</nut-button\n    >\n    <nut-button shape="square" type="primary" class="gap" block @click="stop()"\n      >\u7ed3\u675f\u4e0b\u62c9\u5237\u65b0</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="start(2000)"\n      >\u5f00\u59cb\u4e0b\u62c9\u5237\u65b02S\u540e\u505c\u6b62</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useManualPullDownRefresh, useBackground } from \'taro-hooks\';\nimport Mock from \'mockjs\';\n\nuseBackground({ textStyle: \'dark\', backgroundColor: Mock.Random.color() });\n\nconst [start, stop] = useManualPullDownRefresh();\n<\/script>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"layout/useManualPullDownRefresh/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/layout/useManualPullDownRefresh/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/layout/useManualPullDownRefresh/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useManualPullDownRefresh, useBackground } from \'taro-hooks\';\nimport Mock from \'mockjs\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button } from \'@taroify/core\';\n\nexport default () => {\n  const [start, stop] = useManualPullDownRefresh();\n  useBackground({ textStyle: \'dark\', backgroundColor: Mock.Random.color() });\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => start()}\n        shape="square"\n      >\n        \u5f00\u59cb\u4e0b\u62c9\u5237\u65b0\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={stop}\n        shape="square"\n      >\n        \u7ed3\u675f\u4e0b\u62c9\u5237\u65b0\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => start(2000)}\n        shape="square"\n      >\n        \u5f00\u59cb\u4e0b\u62c9\u5237\u65b02S\u540e\u505c\u6b62\n      </Button>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(\u65e0\u52a8\u753b\u6548\u679c)")))))}b.isMDXComponent=!0}}]);