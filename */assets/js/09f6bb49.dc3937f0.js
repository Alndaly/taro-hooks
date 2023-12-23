"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[1378],{6617:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>k});n(79);var r=n(8570),a=n(6417),l=n(9497);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={title:"useMenuButtonBoundingClientRect",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},c="useMenuButtonBoundingClientRect",s={unversionedId:"useMenuButtonBoundingClientRect/index",id:"useMenuButtonBoundingClientRect/index",title:"useMenuButtonBoundingClientRect",description:"\u83b7\u53d6\u83dc\u5355\u6309\u94ae\uff08\u53f3\u4e0a\u89d2\u80f6\u56ca\u6309\u94ae\uff09\u7684\u5e03\u5c40\u4f4d\u7f6e\u4fe1\u606f\u3002\u5750\u6807\u4fe1\u606f\u4ee5\u5c4f\u5e55\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9\u3002",source:"@site/../packages/hooks/src/useMenuButtonBoundingClientRect/index.md",sourceDirName:"useMenuButtonBoundingClientRect",slug:"/useMenuButtonBoundingClientRect/",permalink:"/taro-hooks/hooks/useMenuButtonBoundingClientRect/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useMenuButtonBoundingClientRect/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1703302291,formattedLastUpdatedAt:"2023\u5e7412\u670823\u65e5",frontMatter:{title:"useMenuButtonBoundingClientRect",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"useLogin",permalink:"/taro-hooks/hooks/useLogin/"},next:{title:"useRequestSubscribeMessage",permalink:"/taro-hooks/hooks/useRequestSubscribeMessage/"}},d={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"Rect",id:"rect",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:k},g="wrapper";function h(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(g,u(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usemenubuttonboundingclientrect"},"useMenuButtonBoundingClientRect"),(0,r.kt)("p",null,"\u83b7\u53d6\u83dc\u5355\u6309\u94ae\uff08\u53f3\u4e0a\u89d2\u80f6\u56ca\u6309\u94ae\uff09\u7684\u5e03\u5c40\u4f4d\u7f6e\u4fe1\u606f\u3002\u5750\u6807\u4fe1\u606f\u4ee5\u5c4f\u5e55\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9\u3002"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"\u9700\u8981\u83b7\u53d6\u83dc\u5355\u6309\u94ae\u5e03\u5c40\u4fe1\u606f\u5224\u65ad"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const rect = useMenuButtonBoundingClientRect();\n")),(0,r.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rect"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e03\u5c40\u4f4d\u7f6e\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Rect"))))),(0,r.kt)("h3",{id:"rect"},"Rect"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottom"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8fb9\u754c\u5750\u6807\uff0c\u5355\u4f4d\uff1apx"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ad8\u5ea6\uff0c\u5355\u4f4d\uff1apx"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"left"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5de6\u8fb9\u754c\u5750\u6807\uff0c\u5355\u4f4d\uff1apx"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"right"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53f3\u8fb9\u754c\u5750\u6807\uff0c\u5355\u4f4d\uff1apx"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"top"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u8fb9\u754c\u5750\u6807\uff0c\u5355\u4f4d\uff1apx"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bbd\u5ea6\uff0c\u5355\u4f4d\uff1apx"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,r.kt)(l.ZP,{VueTab:(0,r.kt)(a.Z,{language:"html",title:"wechat/useMenuButtonBoundingClientRect/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useMenuButtonBoundingClientRect/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useMenuButtonBoundingClientRect/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell v-if="!emptyInfo">\u6682\u65e0\u4fe1\u606f</nut-cell>\n    <nut-cell-group v-else>\n      <nut-cell\n        v-for="(value, key) in rect"\n        :key="key"\n        :title="\'\u4f4d\u7f6e - \' + key"\n        :desc="$filters.stringify(value)"\n      ></nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useMenuButtonBoundingClientRect } from \'taro-hooks\';\n\nconst rect = useMenuButtonBoundingClientRect();\n\nconst emptyInfo = Object.keys(rect)?.length;\n<\/script>\n'),ReactTab:(0,r.kt)(a.Z,{language:"tsx",title:"wechat/useMenuButtonBoundingClientRect/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useMenuButtonBoundingClientRect/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useMenuButtonBoundingClientRect/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useMenuButtonBoundingClientRect } from 'taro-hooks';\n\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell } from '@taroify/core';\n\nexport default () => {\n  const rect = useMenuButtonBoundingClientRect();\n\n  return (\n    <DemoContent>\n      {Object.keys(rect).length ? (\n        <Cell.Group clickable>\n          {Object.entries(rect).map(([key, value]) => (\n            <Cell key={key} title={'\u4f4d\u7f6e - ' + key}>\n              {value}\n            </Cell>\n          ))}\n        </Cell.Group>\n      ) : (\n        <Cell>\u6682\u65e0\u4fe1\u606f</Cell>\n      )}\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}h.isMDXComponent=!0}}]);