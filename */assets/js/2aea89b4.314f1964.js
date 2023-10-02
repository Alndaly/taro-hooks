"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[3456],{7897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(79);var o=n(8570),r=n(6417),a=n(9497);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={title:"useOnline",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u7f51\u7edc",path:"/network"}},u=void 0,c={unversionedId:"useOnline/index",id:"useOnline/index",title:"useOnline",description:"useNetworkType\u884d\u751f hook, \u65b9\u4fbf\u7528\u6237\u662f\u5426\u9700\u8981\u5224\u65ad\u5f53\u524d\u7f51\u7edc\u662f\u5426\u53ef\u7528. \u521d\u59cb\u503c\u4e3atrue. \u4e14\u8be5\u72b6\u6001\u4e3a\u81ea\u52a8\u76d1\u542c",source:"@site/../packages/hooks/src/useOnline/index.md",sourceDirName:"useOnline",slug:"/useOnline/",permalink:"/taro-hooks/hooks/useOnline/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useOnline/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1696224942,formattedLastUpdatedAt:"2023\u5e7410\u67082\u65e5",frontMatter:{title:"useOnline",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u7f51\u7edc",path:"/network"}},sidebar:"hooks",previous:{title:"useNetworkType",permalink:"/taro-hooks/hooks/useNetworkType/"},next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/taro-hooks/hooks/useRequest/"}},k={},d=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:d},h="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){l(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"useNetworkType"),"\u884d\u751f hook, \u65b9\u4fbf\u7528\u6237\u662f\u5426\u9700\u8981\u5224\u65ad\u5f53\u524d\u7f51\u7edc\u662f\u5426\u53ef\u7528. \u521d\u59cb\u503c\u4e3a",(0,o.kt)("strong",{parentName:"p"},"true"),". \u4e14\u8be5\u72b6\u6001\u4e3a\u81ea\u52a8\u76d1\u542c")),(0,o.kt)("h1",{id:"useonline"},"useOnline"),(0,o.kt)("p",null,"\u83b7\u53d6\u7f51\u7edc\u662f\u5426\u53ef\u7528"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u6839\u636e\u5f53\u524d\u7f51\u7edc\u72b6\u6001\u505a\u5224\u65ad\u65f6"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"| pure","|":!0,pure:!0},"const online: boolean = useOnline();\n")),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"online"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7f51\u7edc\u72b6\u6001"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,o.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)(a.ZP,{VueTab:(0,o.kt)(r.Z,{language:"html",title:"network/useOnline/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useOnline/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/network/useOnline/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell-group>\n      <nut-cell title="\u5f53\u524d\u7f51\u7edc\u72b6\u6001">\n        <template v-slot:link>\n          <nut-switch disable :model-value="online" />\n        </template>\n      </nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useOnline } from \'taro-hooks\';\n\nconst online = useOnline();\n<\/script>\n'),ReactTab:(0,o.kt)(r.Z,{language:"tsx",title:"network/useOnline/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useOnline/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/network/useOnline/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useOnline } from 'taro-hooks';\n\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell, Switch } from '@taroify/core';\n\nexport default () => {\n  const online = useOnline();\n\n  return (\n    <DemoContent>\n      <Cell.Group clickable>\n        <Cell title=\"\u5f53\u524d\u7f51\u7edc\u72b6\u6001\">\n          <Switch disabled checked={online} />\n        </Cell>\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,o.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}b.isMDXComponent=!0}}]);