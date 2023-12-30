"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[1979],{5441:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>h});e(79);var o=e(8570),a=e(6417),r=e(9497);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t}function c(t,n){if(null==t)return{};var e,o,a=function(t,n){if(null==t)return{};var e,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}const i={title:"useLocation",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},u="useLocation",p={unversionedId:"useLocation/index",id:"useLocation/index",title:"useLocation",description:"\u5730\u7406\u4f4d\u7f6e",source:"@site/../packages/hooks/src/useLocation/index.md",sourceDirName:"useLocation",slug:"/useLocation/",permalink:"/taro-hooks/hooks/useLocation/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useLocation/index.md",tags:[],version:"current",lastUpdatedBy:"rhliu1996",lastUpdatedAt:1703912664,formattedLastUpdatedAt:"2023\u5e7412\u670830\u65e5",frontMatter:{title:"useLocation",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},sidebar:"hooks",previous:{title:"useBrightness",permalink:"/taro-hooks/hooks/useBrightness/"},next:{title:"useMotion",permalink:"/taro-hooks/hooks/useMotion/"}},d={},h=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],k={toc:h},m="wrapper";function g(t){var{components:n}=t,e=c(t,["components"]);return(0,o.kt)(m,s(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),o.forEach((function(n){l(t,n,e[n])}))}return t}({},k,e),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uselocation"},"useLocation"),(0,o.kt)("p",null,"\u5730\u7406\u4f4d\u7f6e"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u5f53\u9700\u4f7f\u7528\u5730\u7406\u4f4d\u7f6e\u65f6"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const [\n  location,\n  {\n    get,\n    choose,\n    choosePOI,\n    open,\n    toggleUpdate,\n    on,\n    off,\n  },\n] = useLocation(options?);\n")),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u5730\u7406\u4fe1\u606f\u914d\u7f6e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ExcludeOption<Taro.getLocation.Option>")),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"location"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u521d\u59cb\u5316\u914d\u7f6e\u83b7\u53d6\u7684\u5730\u7406\u4fe1\u606f"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"WithUndefind<Taro.getLocation.SuccessCallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"get"),(0,o.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e\u3001\u901f\u5ea6(h5 \u652f\u6301)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<Option, Taro.getLocation.SuccessCallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"choose"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ExcludeOption<Taro.chooseLocation.Option>, Taro\u3002chooseLocation.SuccessCallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"choosePOI"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<Taro.choosePoi.SuccessCallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"toggleUpdate"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f/\u5173\u95ed\u5c0f\u7a0b\u5e8f\u8fdb\u5165\u524d\u53f0(\u6216\u540e\u53f0)\u65f6\u63a5\u6536\u4f4d\u7f6e\u6d88\u606f"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseParamsAction<(onOff?: boolean, background?: boolean) => void>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"open"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5fae\u4fe1\u5185\u7f6e\u5730\u56fe\u67e5\u770b\u4f4d\u7f6e"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseAction<ExcludeOption<Taro.openLocation.Option>>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"on"),(0,o.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6(h5 \u652f\u6301)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(callback: ChangeCallback \\| ChangErrorCallback, error?: boolean) => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"off"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6(h5 \u652f\u6301)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(callback: Callback \\| ChangErrorCallback, error?: boolean) => void"))))),(0,o.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)(r.ZP,{VueTab:(0,o.kt)(a.Z,{language:"html",title:"device/useLocation/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/device/useLocation/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/device/useLocation/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell-group title="\u4f4d\u7f6e\u4fe1\u606f">\n      <nut-cell\n        v-for="(value, index) in locationInfo"\n        :key="index"\n        :title="index"\n        :sub-title="$filters.stringify(value)"\n      >\n      </nut-cell>\n    </nut-cell-group>\n    <nut-button shape="square" type="primary" class="gap" block @click="get()"\n      >\u83b7\u53d6\u5f53\u524d\u4f4d\u7f6e</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleChoose()"\n      >\u9009\u62e9\u5730\u7406\u4f4d\u7f6e</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleChoosePOI()"\n      >\u9009\u62e9POI\u4f4d\u7f6e</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleOpen()"\n      >\u67e5\u770b\u4f4d\u7f6e</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleToggle()"\n      >\u5207\u6362\u524d\u53f0\u63a5\u53d7\u5730\u7406</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleToggleListener()"\n      >\u5207\u6362\u76d1\u542c\u5730\u7406\u4f4d\u7f6e</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useState, useEffect, useRef } from \'@taro-hooks/core\';\nimport { escapeState } from \'@taro-hooks/shared\';\nimport { useLocation, useModal } from \'taro-hooks\';\n\nconst [locationInfo, setLocationInfo] = useState({});\nconst updateStatus = useRef<boolean>(false);\nconst listenStatus = useRef<boolean>(false);\n\nconst show = useModal({ title: \'useLocation\', mask: true, showCancel: false });\n\nconst [location, { get, choose, choosePOI, open, toggleUpdate, on, off }] =\n  useLocation({\n    isHighAccuracy: true,\n    altitude: true,\n    type: \'gcj02\',\n  });\n\nuseEffect(() => {\n  setLocationInfo(escapeState(location));\n}, [location]);\n\nconst handleChoose = async () => {\n  try {\n    const chooseInfo = await choose();\n    setLocationInfo(chooseInfo);\n    show({ content: JSON.stringify(chooseInfo) });\n  } catch (e) {\n    show({ content: \'\u83b7\u53d6\u4f4d\u7f6e\u5931\u8d25\' });\n  }\n};\n\nconst handleChoosePOI = async () => {\n  try {\n    const chooseInfo = await choosePOI();\n    show({ content: JSON.stringify(chooseInfo) });\n  } catch (e) {\n    show({ content: \'\u83b7\u53d6POI\u5931\u8d25\' });\n  }\n};\n\nconst handleOpen = () => {\n  open({\n    latitude: escapeState(locationInfo).latitude,\n    longitude: escapeState(locationInfo).longitude,\n  });\n};\n\nconst handleToggle = async () => {\n  try {\n    await toggleUpdate(!updateStatus.current);\n    show({\n      content: (updateStatus.current ? \'\u5173\u95ed\' : \'\u6253\u5f00\') + \'\u524d\u53f0\u63a5\u6536\u6210\u529f\',\n    });\n    updateStatus.current = !updateStatus.current;\n  } catch (e) {\n    show({\n      content: (updateStatus.current ? \'\u5173\u95ed\' : \'\u6253\u5f00\') + \'\u524d\u53f0\u63a5\u6536\u5931\u8d25\',\n    });\n  }\n};\n\nconst listener = (result) => {\n  setLocationInfo(result);\n};\n\nconst handleToggleListener = async () => {\n  try {\n    const method = listenStatus.current ? off : on;\n    await method(listener);\n    show({ content: (listenStatus.current ? \'\u5173\u95ed\' : \'\u6253\u5f00\') + \'\u76d1\u542c\u6210\u529f\' });\n    listenStatus.current = !listenStatus.current;\n  } catch (e) {\n    show({ content: (listenStatus.current ? \'\u5173\u95ed\' : \'\u6253\u5f00\') + \'\u76d1\u542c\u5931\u8d25\' });\n  }\n};\n<\/script>\n'),ReactTab:(0,o.kt)(a.Z,{language:"tsx",title:"device/useLocation/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/device/useLocation/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/device/useLocation/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useRef, useEffect, useState } from '@taro-hooks/core';\nimport { escapeState } from '@taro-hooks/shared';\nimport { useLocation, useModal } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Cell } from '@taroify/core';\n\nexport default () => {\n  const [locationInfo, setLocationInfo] = useState({});\n  const updateStatus = useRef<boolean>(false);\n  const listenStatus = useRef<boolean>(false);\n\n  const show = useModal({\n    title: 'useLocation',\n    showCancel: false,\n  });\n\n  const [location, { get, choose, choosePOI, open, toggleUpdate, on, off }] =\n    useLocation({\n      isHighAccuracy: true,\n      altitude: true,\n      type: 'gcj02',\n    });\n\n  useEffect(() => {\n    setLocationInfo(escapeState(location));\n  }, [location]);\n\n  const handleChoose = async () => {\n    try {\n      const chooseInfo = await choose();\n      setLocationInfo(chooseInfo);\n      show({ content: JSON.stringify(chooseInfo) });\n    } catch (e) {\n      show({ content: '\u83b7\u53d6\u4f4d\u7f6e\u5931\u8d25' });\n    }\n  };\n\n  const handleChoosePOI = async () => {\n    try {\n      const chooseInfo = await choosePOI();\n      show({ content: JSON.stringify(chooseInfo) });\n    } catch (e) {\n      show({ content: '\u83b7\u53d6POI\u5931\u8d25' });\n    }\n  };\n\n  const handleOpen = () => {\n    open({\n      latitude: escapeState(locationInfo).latitude,\n      longitude: escapeState(locationInfo).longitude,\n    });\n  };\n\n  const handleToggle = async () => {\n    try {\n      await toggleUpdate(!updateStatus.current);\n      show({\n        content: (updateStatus.current ? '\u5173\u95ed' : '\u6253\u5f00') + '\u524d\u53f0\u63a5\u6536\u6210\u529f',\n      });\n      updateStatus.current = !updateStatus.current;\n    } catch (e) {\n      show({\n        content: (updateStatus.current ? '\u5173\u95ed' : '\u6253\u5f00') + '\u524d\u53f0\u63a5\u6536\u5931\u8d25',\n      });\n    }\n  };\n\n  const listener = (result) => {\n    setLocationInfo(result);\n  };\n\n  const handleToggleListener = async () => {\n    try {\n      const method = listenStatus.current ? off : on;\n      await method(listener);\n      show({ content: (listenStatus.current ? '\u5173\u95ed' : '\u6253\u5f00') + '\u76d1\u542c\u6210\u529f' });\n      listenStatus.current = !listenStatus.current;\n    } catch (e) {\n      show({ content: (listenStatus.current ? '\u5173\u95ed' : '\u6253\u5f00') + '\u76d1\u542c\u5931\u8d25' });\n    }\n  };\n\n  return (\n    <DemoContent>\n      <Cell.Group title=\"\u4f4d\u7f6e\u4fe1\u606f\">\n        {Object.entries(locationInfo ?? {}).map(([key, value]) => (\n          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n        ))}\n      </Cell.Group>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => get()}\n        shape=\"square\"\n      >\n        \u83b7\u53d6\u5f53\u524d\u4f4d\u7f6e\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleChoose()}\n        shape=\"square\"\n      >\n        \u9009\u62e9\u5730\u7406\u4f4d\u7f6e\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleChoosePOI()}\n        shape=\"square\"\n      >\n        \u9009\u62e9POI\u4f4d\u7f6e\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleOpen()}\n        shape=\"square\"\n      >\n        \u67e5\u770b\u4f4d\u7f6e\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleToggle()}\n        shape=\"square\"\n      >\n        \u5207\u6362\u524d\u53f0\u63a5\u53d7\u5730\u7406\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleToggleListener()}\n        shape=\"square\"\n      >\n        \u5207\u6362\u76d1\u542c\u5730\u7406\u4f4d\u7f6e\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,o.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}g.isMDXComponent=!0}}]);