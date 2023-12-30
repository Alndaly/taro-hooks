"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[8419],{451:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>m});n(79);var a=n(8570),o=n(6417),r=n(9497);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const u={title:"useMotion",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},p="useMotion",c={unversionedId:"useMotion/index",id:"useMotion/index",title:"useMotion",description:"\u76d1\u542c\u8bbe\u5907\u65b9\u5411",source:"@site/../packages/hooks/src/useMotion/index.md",sourceDirName:"useMotion",slug:"/useMotion/",permalink:"/taro-hooks/hooks/useMotion/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useMotion/index.md",tags:[],version:"current",lastUpdatedBy:"rhliu1996",lastUpdatedAt:1703912664,formattedLastUpdatedAt:"2023\u5e7412\u670830\u65e5",frontMatter:{title:"useMotion",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},sidebar:"hooks",previous:{title:"useLocation",permalink:"/taro-hooks/hooks/useLocation/"},next:{title:"useScanCode",permalink:"/taro-hooks/hooks/useScanCode/"}},d={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],k={toc:m},h="wrapper";function g(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(h,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usemotion"},"useMotion"),(0,a.kt)("p",null,"\u76d1\u542c\u8bbe\u5907\u65b9\u5411"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const [\n  motion,\n  {\n    start,\n    stop,\n    add,\n    off,\n  },\n] = useMotion(\n  autoListen?: boolean,\n  interval?: interval\n);\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"autoListen"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u5f00\u59cb\u76d1\u542c"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u9891\u7387"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"game / ui / normal")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"normal"))))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"motion"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u65b9\u5411\u4fe1\u606f"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ alpha: number; beta: number; gamma: number; }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f\u76d1\u542c(\u82e5\u521d\u59cb\u672a\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"td"},"autoListen"),"\u9700\u5728\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"td"},"addListener"),"\u4e4b\u524d\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"td"},"start"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(interval?: Interval) => Promise<boolean>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stop"),(0,a.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u76d1\u542c(\u4f1a\u6e05\u7a7a\u4e4b\u524d\u8bbe\u7f6e\u7684\u6240\u6709\u76d1\u542c\u51fd\u6570)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(callback) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"add"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u76d1\u542c\u51fd\u6570(\u53ef\u961f\u5217\u8bbe\u7f6e. \u6bcf\u6b21\u8bbe\u7f6e\u7684\u90fd\u4f1a\u88ab\u961f\u5217\u76d1\u542c)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(callback: onDeviceMotionChange.Callback) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"off"),(0,a.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664\u76d1\u542c\u51fd\u6570(\u79fb\u9664\u5339\u914d\u7684\u76d1\u542c\u51fd\u6570)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(callback) => void"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"device/useMotion/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/device/useMotion/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/device/useMotion/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleListen()"\n      >\u589e\u52a0\u4e00\u6b21\u76d1\u542c\u5e76\u53d6\u6d88</nut-button\n    >\n    <nut-button shape="square" type="primary" class="gap" block @click="stop()"\n      >\u505c\u6b62\u6240\u6709</nut-button\n    >\n\n    <nut-cell-group title="\u65b9\u5411\u4fe1\u606f">\n      <nut-cell\n        v-for="(value, key) in motion"\n        :key="key"\n        :title="key"\n        :sub-title="$filters.stringify(value)"\n      ></nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useModal, useMotion } from \'taro-hooks\';\n\nconst [motion, { start, stop, add, off }] = useMotion(true);\n\nconsole.log(motion);\n\nconst show = useModal({\n  title: \'useMotion\',\n  showCancel: false,\n  mask: true,\n});\n\nconst customListen = (result) => {\n  show({\n    content: JSON.stringify(result),\n  });\n  off(customListen);\n};\n\nconst handleListen = async () => {\n  try {\n    await add(customListen);\n  } catch (e) {\n    show({ content: \'\u76d1\u542c\u5931\u8d25\' });\n  }\n};\n<\/script>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"device/useMotion/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/device/useMotion/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/device/useMotion/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useModal, useMotion } from \'taro-hooks\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button, Cell } from \'@taroify/core\';\n\nexport default () => {\n  const [motion, { start, stop, add, off }] = useMotion(true);\n\n  console.log(motion);\n\n  const show = useModal({\n    title: \'useMotion\',\n    showCancel: false,\n    mask: true,\n  });\n\n  const customListen = (result) => {\n    show({\n      content: JSON.stringify(result),\n    });\n    off(customListen);\n  };\n\n  const handleListen = async () => {\n    try {\n      await add(customListen);\n    } catch (e) {\n      show({ content: \'\u76d1\u542c\u5931\u8d25\' });\n    }\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleListen()}\n        shape="square"\n      >\n        \u589e\u52a0\u4e00\u6b21\u76d1\u542c\u5e76\u53d6\u6d88\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => stop()}\n        shape="square"\n      >\n        \u505c\u6b62\u6240\u6709\n      </Button>\n      <Cell.Group title="\u65b9\u5411\u4fe1\u606f">\n        {Object.entries(motion).map(([key, value]) => (\n          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n        ))}\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}g.isMDXComponent=!0}}]);