"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[7491],{8240:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>k});n(79);var a=n(8570),o=n(6417),r=n(9497);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const s={title:"useActionSheet",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u64cd\u4f5c\u53cd\u9988",path:"/feedback"}},c="useActionSheet",u={unversionedId:"useActionSheet/index",id:"useActionSheet/index",title:"useActionSheet",description:"\u663e\u793a\u64cd\u4f5c\u83dc\u5355",source:"@site/../packages/hooks/src/useActionSheet/index.md",sourceDirName:"useActionSheet",slug:"/useActionSheet/",permalink:"/taro-hooks/hooks/useActionSheet/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useActionSheet/index.md",tags:[],version:"current",lastUpdatedBy:"rhliu1996",lastUpdatedAt:1703912664,formattedLastUpdatedAt:"2023\u5e7412\u670830\u65e5",frontMatter:{title:"useActionSheet",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u64cd\u4f5c\u53cd\u9988",path:"/feedback"}},sidebar:"hooks",previous:{title:"\u64cd\u4f5c\u53cd\u9988",permalink:"/taro-hooks/hooks/category/feedback"},next:{title:"useLoading",permalink:"/taro-hooks/hooks/useLoading/"}},m={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"<code>initialOption: ActionSheetOption</code>",id:"initialoption-actionsheetoption",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"tapItem",id:"tapitem",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:k},h="wrapper";function g(t){var{components:e}=t,n=p(t,["components"]);return(0,a.kt)(h,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){i(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useactionsheet"},"useActionSheet"),(0,a.kt)("p",null,"\u663e\u793a\u64cd\u4f5c\u83dc\u5355"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528\u64cd\u4f5c\u83dc\u5355"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { tapItem, show } = useActionSheet(initialOption);\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("h3",{id:"initialoption-actionsheetoption"},(0,a.kt)("inlineCode",{parentName:"h3"},"initialOption: ActionSheetOption")),(0,a.kt)("p",null,"\u521d\u59cb\u64cd\u4f5c\u83dc\u5355\u914d\u7f6e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alertText"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8b66\u793a\u6587\u6848"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"itemList"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6309\u94ae\u7684\u6587\u5b57\u6570\u7ec4\uff0c\u6570\u7ec4\u957f\u5ea6\u6700\u5927\u4e3a 6"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string[]")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"itemColor"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6309\u94ae\u7684\u6587\u5b57\u989c\u8272"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u64cd\u4f5c\u83dc\u5355"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ActionSheetOption, ActionSheetTapItem>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tapItem"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9009\u4e2d\u6570\u636e"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ActionSheetTapItem"))))),(0,a.kt)("h3",{id:"tapitem"},"tapItem"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tapIndex"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u70b9\u51fb\u7684\u6309\u94ae\u5e8f\u53f7\uff0c\u4ece\u4e0a\u5230\u4e0b\u7684\u987a\u5e8f\uff0c\u4ece 0 \u5f00\u59cb"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tapItem"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u70b9\u51fb\u7684\u6309\u94ae\u5e8f\u53f7\u5bf9\u5e94 itemList \u7684\u5b57\u7b26\u4e32"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"feedback/useActionSheet/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/feedback/useActionSheet/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/feedback/useActionSheet/index",mdxType:"CodeDisplay"},"<template>\n  <demo-content>\n    <nut-button shape=\"square\" type=\"primary\" class=\"gap\" block @click=\"show()\"\n      >\u5c55\u793a\u5e26\u521d\u59cb\u914d\u7f6e\u7684ActionSheet</nut-button\n    >\n    <nut-button\n      shape=\"square\"\n      type=\"primary\"\n      class=\"gap\"\n      block\n      @click=\"handleChangeOption()\"\n      >\u5c55\u793a\u65b0\u914d\u7f6e\u7684ActionSheet</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang=\"ts\">\nimport { useActionSheet, useToast } from 'taro-hooks';\nimport { escapeState } from '@taro-hooks/shared';\nimport { useEffect } from '@taro-hooks/core';\n\nconst { show, tapItem } = useActionSheet({ itemList: ['A', 'B', 'C'] });\nconst { show: showToast } = useToast({ duration: 2000, mask: true });\n\nuseEffect(() => {\n  if (escapeState(tapItem)) {\n    const { tapIndex, tapItem: item } = escapeState(tapItem);\n    showToast({ title: '${tapIndex}/${item}' });\n  }\n}, [tapItem]);\n\nconst handleChangeOption = () => {\n  show({\n    itemColor: '#C5D9E8',\n    itemList: ['taro', 'hooks', 'taro-hooks'],\n  });\n};\n<\/script>\n"),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"feedback/useActionSheet/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/feedback/useActionSheet/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/feedback/useActionSheet/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useActionSheet, useToast } from 'taro-hooks';\nimport { escapeState } from '@taro-hooks/shared';\nimport { useEffect } from '@taro-hooks/core';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button } from '@taroify/core';\n\nexport default () => {\n  const { show, tapItem } = useActionSheet({ itemList: ['A', 'B', 'C'] });\n  const { show: showToast } = useToast({ duration: 2000, mask: true });\n\n  useEffect(() => {\n    if (escapeState(tapItem)) {\n      const { tapIndex, tapItem: item } = escapeState(tapItem);\n      showToast({ title: '${tapIndex}/${item}' });\n    }\n  }, [tapItem]);\n\n  const handleChangeOption = () => {\n    show({\n      itemColor: '#C5D9E8',\n      itemList: ['taro', 'hooks', 'taro-hooks'],\n    });\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => show()}\n        shape=\"square\"\n      >\n        \u5c55\u793a\u5e26\u521d\u59cb\u914d\u7f6e\u7684ActionSheet\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleChangeOption}\n        shape=\"square\"\n      >\n        \u5c55\u793a\u65b0\u914d\u7f6e\u7684ActionSheet\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}g.isMDXComponent=!0}}]);