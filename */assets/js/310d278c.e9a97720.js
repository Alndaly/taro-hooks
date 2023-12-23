"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[9630],{6401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>h});n(79);var a=n(8570),r=n(6417),o=n(9497);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={title:"useWeRun",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},c="useWeRun",p={unversionedId:"useWeRun/index",id:"useWeRun/index",title:"useWeRun",description:"\u83b7\u53d6\u5fae\u4fe1\u8fd0\u52a8\u6570\u636e",source:"@site/../packages/hooks/src/useWeRun/index.md",sourceDirName:"useWeRun",slug:"/useWeRun/",permalink:"/taro-hooks/hooks/useWeRun/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useWeRun/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1703302291,formattedLastUpdatedAt:"2023\u5e7412\u670823\u65e5",frontMatter:{title:"useWeRun",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"useUserInfo",permalink:"/taro-hooks/hooks/useUserInfo/"},next:{title:"\u64cd\u4f5c\u53cd\u9988",permalink:"/taro-hooks/hooks/category/feedback"}},d={},h=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2},{value:"FAQ",id:"faq",level:2},{value:"1. \u66f4\u591a\u8bf4\u660e",id:"1-\u66f4\u591a\u8bf4\u660e",level:3}],m={toc:h},k="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usewerun"},"useWeRun"),(0,a.kt)("p",null,"\u83b7\u53d6\u5fae\u4fe1\u8fd0\u52a8\u6570\u636e"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528\u7528\u6237\u5fae\u4fe1\u8fd0\u52a8\u6570\u636e\u65f6"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u83b7\u53d6\u7528\u6237\u5fae\u4fe1\u6570\u636e\u65f6, \u9700\u8981\u5148\u8c03\u7528 ",(0,a.kt)("code",null,"wx.login")," \u63a5\u53e3\u3002\u6b65\u6570\u4fe1\u606f\u4f1a\u5728\u7528\u6237\u4e3b\u52a8\u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u66f4\u65b0. \u6b64\u5916, \u5206\u4eab\u5fae\u4fe1\u8fd0\u52a8\u9700\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u300c\u5f00\u53d1\u300d-\u300c\u63a5\u53e3\u8bbe\u7f6e\u300d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002 \u53ea\u9488\u5bf9\u300c\u4f53\u80b2-\u5728\u7ebf\u5065\u8eab\u300d\u7c7b\u76ee\u7684\u5c0f\u7a0b\u5e8f\u5f00\u653e\u3002")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const { get, share } = useWeRun();\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"get"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<Taro.getWeRunData.SuccessCallbackResult>")),(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7528\u6237\u8fc7\u53bb\u4e09\u5341\u5929\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"share"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PromiseAction<Taro.shareToWeRun.record[]>")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5206\u4eab\u6570\u636e\u5230\u5fae\u4fe1\u8fd0\u52a8")))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(o.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"wechat/useWeRun/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useWeRun/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useWeRun/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      class="gap"\n      shape="square"\n      type="primary"\n      block\n      @click="handleGet()"\n      >\u83b7\u53d6\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570</nut-button\n    >\n    <nut-button\n      class="gap"\n      shape="square"\n      type="primary"\n      block\n      @click="handleShare()"\n      >\u5206\u4eab\u6570\u636e\u81f3\u5fae\u4fe1\u8fd0\u52a8</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useWeRun, useModal, useLogin } from \'taro-hooks\';\n\nconst { login } = useLogin();\nconst { get, share } = useWeRun();\nconst show = useModal({ mask: true, title: \'\u8bbe\u7f6e\u7ed3\u679c\', showCancel: false });\n\nconst handleGet = async () => {\n  let content = \'\';\n  try {\n    await login(true);\n    const result = await get();\n    content = JSON.stringify(result);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n\nconst handleShare = async () => {\n  let content = \'\';\n  try {\n    await login(true);\n    const recordList = [\n      { typeId: 1000, time: 200, calorie: 100 },\n      { typeId: 3000, time: 300, calorie: 1000, distance: 1000 },\n      { typeId: 4000, calorie: 1000, number: 100 },\n    ];\n    const result = await share(recordList);\n    content = JSON.stringify(result);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"wechat/useWeRun/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useWeRun/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useWeRun/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useWeRun, useModal, useLogin } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button } from '@taroify/core';\n\nexport default () => {\n  const { login } = useLogin();\n  const { get, share } = useWeRun();\n  const show = useModal({ mask: true, title: '\u8bbe\u7f6e\u7ed3\u679c', showCancel: false });\n\n  const handleGet = async () => {\n    let content = '';\n    try {\n      await login(true);\n      const result = await get();\n      content = JSON.stringify(result);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  const handleShare = async () => {\n    let content = '';\n    try {\n      await login(true);\n      const recordList = [\n        { typeId: 1000, time: 200, calorie: 100 },\n        { typeId: 3000, time: 300, calorie: 1000, distance: 1000 },\n        { typeId: 4000, calorie: 1000, number: 100 },\n      ];\n      const result = await share(recordList);\n      content = JSON.stringify(result);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleGet}\n        shape=\"square\"\n      >\n        \u83b7\u53d6\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleShare}\n        shape=\"square\"\n      >\n        \u5206\u4eab\u6570\u636e\u81f3\u5fae\u4fe1\u8fd0\u52a8\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},"1. \u66f4\u591a\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html"},"getWeRunData")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.shareToWeRun.html"},"shareToWeRun"))))}g.isMDXComponent=!0}}]);