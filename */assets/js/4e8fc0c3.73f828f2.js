"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[4007],{7297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});n(79);var r=n(8570),a=n(6417),o=n(9497);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"useBluetooth",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},p="useBluetooth",d={unversionedId:"useBluetooth/index",id:"useBluetooth/index",title:"useBluetooth",description:"\u84dd\u7259\u8bbe\u5907",source:"@site/../packages/hooks/src/useBluetooth/index.md",sourceDirName:"useBluetooth",slug:"/useBluetooth/",permalink:"/taro-hooks/hooks/useBluetooth/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useBluetooth/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1703302291,formattedLastUpdatedAt:"2023\u5e7412\u670823\u65e5",frontMatter:{title:"useBluetooth",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},sidebar:"hooks",previous:{title:"useBattery",permalink:"/taro-hooks/hooks/useBattery/"},next:{title:"useBrightness",permalink:"/taro-hooks/hooks/useBrightness/"}},c={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],k={toc:m},g="wrapper";function h(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usebluetooth"},"useBluetooth"),(0,r.kt)("p",null,"\u84dd\u7259\u8bbe\u5907"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528\u84dd\u7259\u529f\u80fd\u65f6"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const [\n  { devices, connectedDevices, adapter },\n  {\n    toggleAdapter,\n    getState,\n    getDevices,\n    getConnected,\n    makePair,\n    isPaired,\n    toggleDiscovery,\n  },\n] = useBluetooth();\n")),(0,r.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"devices"),(0,r.kt)("td",{parentName:"tr",align:null},"\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u641c\u7d22\u5230\u7684\u84dd\u7259\u8bbe\u5907"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Taro.getBluetoothDevices.SuccessCallbackResultBlueToothDevice[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connectedDevices"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u670d\u52a1",(0,r.kt)("inlineCode",{parentName:"td"},"UUID"),"\u83b7\u53d6\u5df2\u8fde\u63a5\u7684\u84dd\u7259\u8bbe\u5907"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Taro.getConnectedBluetoothDevices.BluetoothDeviceInfo[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adapter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u84dd\u7259\u6a21\u5757"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Taro.getBluetoothAdapterState.SuccessCallbackResult"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toggleAdapter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316(\u5173\u95ed)\u84dd\u7259\u6a21\u5757\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"iOS"),"\u4e0a\u5f00\u542f\u4e3b\u673a/\u4ece\u673a\uff08\u5916\u56f4\u8bbe\u5907\uff09\u6a21\u5f0f\u65f6\u9700\u5206\u522b\u8c03\u7528\u4e00\u6b21\uff0c\u5e76\u6307\u5b9a\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ExcludeOption<Taro.startBluetoothDevicesDiscovery.Option>, TaroGeneral.BluetoothError>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getState"),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u672c\u673a\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<AdapterState>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getDevices"),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u5728\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u641c\u7d22\u5230\u7684\u84dd\u7259\u8bbe\u5907\u3002\u5305\u62ec\u5df2\u7ecf\u548c\u672c\u673a\u5904\u4e8e\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<Taro.getBluetoothDevices.SuccessCallbackResult>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getConnected"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u4e3b\u670d\u52a1",(0,r.kt)("inlineCode",{parentName:"td"},"UUID"),"\u83b7\u53d6\u5df2\u8fde\u63a5\u7684\u84dd\u7259\u8bbe\u5907"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<Taro.getConnectedBluetoothDevices.SuccessCallbackResult>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toggleDiscovery"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f00\u59cb(\u505c\u6b62)\u641c\u5bfb\u9644\u8fd1\u7684\u84dd\u7259\u5916\u56f4\u8bbe\u5907"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ExcludeOption<Taro.startBluetoothDevicesDiscovery.Option>, TaroGeneral.BluetoothError>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"makePair"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u5e38\u60c5\u51b5\u4e0b\uff08\u9700\u8981\u6307\u5b9a pin \u7801\u6216\u8005\u5bc6\u7801\u65f6\uff09\u7cfb\u7edf\u4f1a\u63a5\u7ba1\u914d\u5bf9\u6d41\u7a0b\uff0c\u76f4\u63a5\u8c03\u7528 wx.createBLEConnection \u5373\u53ef\u3002\u8be5\u63a5\u53e3\u53ea\u5e94\u5f53\u5728\u5f00\u53d1\u8005\u4e0d\u60f3\u8ba9\u7528\u6237\u624b\u52a8\u8f93\u5165 pin \u7801\u4e14\u771f\u673a\u9a8c\u8bc1\u786e\u8ba4\u53ef\u4ee5\u6b63\u5e38\u751f\u6548\u60c5\u51b5\u4e0b\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseAction<ExcludeOption<Taro.makeBluetoothPair.Option>>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isPaired"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u84dd\u7259\u8bbe\u5907\u662f\u5426\u914d\u5bf9\uff0c\u4ec5\u5b89\u5353\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseAction<string>"))))),(0,r.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,r.kt)(o.ZP,{VueTab:(0,r.kt)(a.Z,{language:"html",title:"device/useBluetooth/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/device/useBluetooth/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/device/useBluetooth/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell-group title="\u9002\u914d\u5668">\n      <nut-cell\n        v-for="(value, key) in adapter ?? {}"\n        :key="key"\n        :title="key"\n        :sub-title="$filters.stringify(value)"\n      ></nut-cell>\n    </nut-cell-group>\n    <nut-divider>\u8bbe\u5907</nut-divider>\n    <nut-cell-group\n      v-for="(item, key) in devices"\n      :key="key"\n      :title="item.name"\n    >\n      <nut-cell\n        v-for="(value, itemKey) in item"\n        :key="itemKey"\n        :title="itemKey"\n        :sub-title="$filters.stringify(value)"\n      ></nut-cell>\n    </nut-cell-group>\n    <nut-divider>\u8fde\u63a5\u8bbe\u5907</nut-divider>\n    <nut-cell-group\n      v-for="(item, key) in connectedDevices"\n      :key="key"\n      :title="item.name"\n    >\n      <nut-cell\n        v-for="(value, itemKey) in item"\n        :key="itemKey"\n        :title="itemKey"\n        :sub-title="$filters.stringify(value)"\n      ></nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useBluetooth } from \'taro-hooks\';\n\nconst [{ devices, connectedDevices, adapter }] = useBluetooth();\n<\/script>\n'),ReactTab:(0,r.kt)(a.Z,{language:"tsx",title:"device/useBluetooth/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/device/useBluetooth/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/device/useBluetooth/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useBluetooth } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell, Divider } from '@taroify/core';\n\nexport default () => {\n  const [{ devices, connectedDevices, adapter }] = useBluetooth();\n\n  return (\n    <DemoContent>\n      <Cell.Group title=\"\u9002\u914d\u5668\">\n        {Object.entries(adapter ?? {}).map(([key, value]) => (\n          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n        ))}\n      </Cell.Group>\n      <Divider>\u8bbe\u5907</Divider>\n      {devices.map((item, key) => (\n        <Cell.Group title={item.name} key={key}>\n          {Object.entries(item).map(([itemKey, value]) => (\n            <Cell\n              key={itemKey}\n              title={itemKey}\n              brief={JSON.stringify(value)}\n            ></Cell>\n          ))}\n        </Cell.Group>\n      ))}\n      <Divider>\u8fde\u63a5\u8bbe\u5907</Divider>\n      {connectedDevices.map((item, key) => (\n        <Cell.Group title={item.name} key={key}>\n          {Object.entries(item).map(([itemKey, value]) => (\n            <Cell\n              key={itemKey}\n              title={itemKey}\n              brief={JSON.stringify(value)}\n            ></Cell>\n          ))}\n        </Cell.Group>\n      ))}\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}h.isMDXComponent=!0}}]);