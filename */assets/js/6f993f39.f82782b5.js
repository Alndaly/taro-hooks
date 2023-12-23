"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[685],{4399:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>k});n(79);var a=n(8570),r=n(6417),o=n(9497);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={title:"useVibrate",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},p="useVibrate",c={unversionedId:"useVibrate/index",id:"useVibrate/index",title:"useVibrate",description:"\u63d0\u4f9b\u9707\u52a8\u53cd\u9988",source:"@site/../packages/hooks/src/useVibrate/index.md",sourceDirName:"useVibrate",slug:"/useVibrate/",permalink:"/taro-hooks/hooks/useVibrate/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useVibrate/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1703302291,formattedLastUpdatedAt:"2023\u5e7412\u670823\u65e5",frontMatter:{title:"useVibrate",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},sidebar:"hooks",previous:{title:"useScanCode",permalink:"/taro-hooks/hooks/useScanCode/"},next:{title:"useKeyboard",permalink:"/taro-hooks/hooks/useKeyboard/"}},b={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:k},d="wrapper";function h(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(d,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usevibrate"},"useVibrate"),(0,a.kt)("p",null,"\u63d0\u4f9b\u9707\u52a8\u53cd\u9988"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u64cd\u4f5c\u6216\u8005\u4f7f\u7528\u9707\u52a8\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const { vibrate, clear } = useVibrate(interval?: boolean, gap?: number);\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6301\u7eed\u9707\u52a8"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gap"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6301\u7eed\u9707\u52a8\u95f4\u9694"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},"200")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vibrate"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u51fd\u6570, \u53ef\u6839\u636e\u53c2\u6570\u6267\u884c\u957f\u77ed\u9707\u52a8"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(long?: boolean) => Promise<General.CallbackResult>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clear"),(0,a.kt)("td",{parentName:"tr",align:null},"\u82e5\u4e3a\u6301\u7eed\u9707\u52a8\u53ef\u53d6\u6d88\u9707\u52a8"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(o.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"device/useVibrate/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/device/useVibrate/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/device/useVibrate/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="vibrate()"\n      >\u77ed\u9707\u52a8\u89e6\u611f\u6309\u94ae</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="vibrate(true)"\n      >\u957f\u9707\u52a8\u89e6\u611f\u6309\u94ae</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="vibrateInterval()"\n      >\u6301\u7eed\u77ed\u9707\u52a8\u89e6\u611f\u6309\u94ae</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="vibrateInterval(true)"\n      >\u6301\u7eed\u957f\u9707\u52a8\u89e6\u611f\u6309\u94ae</nut-button\n    >\n    <nut-button shape="square" type="primary" class="gap" block @click="clear()"\n      >\u5173\u95ed\u6301\u7eed\u9707\u52a8</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useVibrate } from \'taro-hooks\';\n\nconst { vibrate } = useVibrate();\nconst { vibrate: vibrateInterval, clear } = useVibrate(true);\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"device/useVibrate/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/device/useVibrate/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/device/useVibrate/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useVibrate } from \'taro-hooks\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button } from \'@taroify/core\';\n\nexport default () => {\n  const { vibrate } = useVibrate();\n  const { vibrate: vibrateInterval, clear } = useVibrate(true);\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => vibrate()}\n        shape="square"\n      >\n        \u77ed\u9707\u52a8\u89e6\u611f\u6309\u94ae\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => vibrate(true)}\n        shape="square"\n      >\n        \u957f\u9707\u52a8\u89e6\u611f\u6309\u94ae\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => vibrateInterval()}\n        shape="square"\n      >\n        \u6301\u7eed\u77ed\u9707\u52a8\u89e6\u611f\u6309\u94ae\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => vibrateInterval(true)}\n        shape="square"\n      >\n        \u6301\u7eed\u957f\u9707\u52a8\u89e6\u611f\u6309\u94ae\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => clear()}\n        shape="square"\n      >\n        \u5173\u95ed\u6301\u7eed\u9707\u52a8\n      </Button>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}h.isMDXComponent=!0}}]);