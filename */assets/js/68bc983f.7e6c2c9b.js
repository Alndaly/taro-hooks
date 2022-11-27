"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[8806],{4742:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});n(3262);var a=n(5318),r=n(2984),o=n(9018);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},l.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={title:"useAudio",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},s="useAudio",d={unversionedId:"useAudio/index",id:"useAudio/index",title:"useAudio",description:"\u97f3\u9891\u64cd\u4f5c\u7b49.",source:"@site/../packages/hooks/src/useAudio/index.md",sourceDirName:"useAudio",slug:"/useAudio/",permalink:"/taro-hooks/hooks/useAudio/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useAudio/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1669533966,formattedLastUpdatedAt:"2022\u5e7411\u670827\u65e5",frontMatter:{title:"useAudio",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},sidebar:"hooks",previous:{title:"\u5a92\u4f53",permalink:"/taro-hooks/hooks/category/media"},next:{title:"useCamera",permalink:"/taro-hooks/hooks/useCamera/"}},p={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4ee5\u4e0b\u5747\u4e3a<code>initOptions</code>",id:"\u4ee5\u4e0b\u5747\u4e3ainitoptions",level:5},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2},{value:"FAQ",id:"faq",level:2}],k={toc:m};function c(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)("wrapper",l({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"useaudio"}),"useAudio"),(0,a.kt)("p",null,"\u97f3\u9891\u64cd\u4f5c\u7b49."),(0,a.kt)("h2",l({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u8fdb\u884c\u97f3\u9891\u64cd\u4f5c\u65f6"),(0,a.kt)("h2",l({},{id:"api"}),"API"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"const [audioContext, { sources, setOption, play }] = useAudio(initOptions);\n")),(0,a.kt)("h2",l({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("h5",l({},{id:"\u4ee5\u4e0b\u5747\u4e3ainitoptions"}),"\u4ee5\u4e0b\u5747\u4e3a",(0,a.kt)("inlineCode",{parentName:"h5"},"initOptions")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"autoplay"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u662f\u5426\u81ea\u52a8\u5f00\u59cb\u64ad\u653e (\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"loop"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u662f\u5426\u5faa\u73af\u64ad\u653e (\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"src"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u97f3\u9891\u8d44\u6e90\u7684\u5730\u5740\uff0c\u7528\u4e8e\u76f4\u63a5\u64ad\u653e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"volume"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u97f3\u91cf\u3002\u8303\u56f4 0~1(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"startTime"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5f00\u59cb\u64ad\u653e\u7684\u4f4d\u7f6e\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u9ed8\u8ba4\u4e3a 0 (\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"mixWithOther"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u662f\u5426\u4e0e\u5176\u4ed6\u97f3\u9891\u6df7\u64ad(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"obeyMuteSwitch"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u662f\u5426\u9075\u5faa\u7cfb\u7edf\u9759\u97f3\u5f00\u5173\uff0c\u9ed8\u8ba4\u4e3a true\u3002\u5f53\u6b64\u53c2\u6570\u4e3a false \u65f6\uff0c\u5373\u4f7f\u7528\u6237\u6253\u5f00\u4e86\u9759\u97f3\u5f00\u5173\uff0c\u4e5f\u80fd\u7ee7\u7eed\u53d1\u51fa\u58f0\u97f3 (\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h2",l({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8fd4\u56de\u503c"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"audioContext"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5168\u5c40\u552f\u4e00\u97f3\u9891\u5b9e\u4f8b"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"InnerAudioContext"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"sources"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"getAvailableAudioSources.SuccessCallbackResult['audioSources']"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"setOption"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u97f3\u9891\u5b9e\u4f8b"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(option?: Partial<initOptions>) => Promise<General.CallbackResult>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"play"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u64ad\u653e(\u53ef\u6307\u5b9a\u64ad\u653e\u6587\u4ef6 src)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(src?: string) => void"))))),(0,a.kt)("h2",l({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(o.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"media/useAudio/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/media/useAudio/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/media/useAudio/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button shape="square" type="primary" class="gap" block @click="start()"\n      >\u5f00\u59cb\u5f55\u5236</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleStop()"\n      >\u7ed3\u675f\u5f55\u5236</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      :disabled="!audioSource?.tempFilePath"\n      @click="play(audioSource?.tempFilePath)"\n      >\u64ad\u653e\u97f3\u9891</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      :disabled="!audioSource?.tempFilePath"\n      @click="audioContext?.stop?.()"\n      >\u505c\u6b62\u64ad\u653e\u97f3\u9891</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useTaroState } from \'@tarojs/taro\';\nimport { useToast, useRecord, useAudio } from \'taro-hooks\';\n\nconst [audioSource, setAudioSource] =\n  useTaroState<Taro.RecorderManager.OnStopCallbackResult>();\n\nconst [audioContext, { play }] = useAudio();\nconst [, { start, stop }] = useRecord();\n\nconst { show } = useToast({\n  title: \'useVoice\',\n  duration: 500,\n  mask: true,\n});\n\nconst handleStop = async () => {\n  try {\n    show({ title: \'\u6b63\u5728\u505c\u6b62\', duration: 20000000 });\n    const result = await stop();\n    setAudioSource(result);\n\n    show({ title: \'\u505c\u6b62\u5f55\u5236\u6210\u529f\' });\n  } catch (e) {\n    show({ title: \'\u505c\u6b62\u5f55\u5236\u5931\u8d25\', icon: \'error\' });\n  }\n};\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"media/useAudio/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/media/useAudio/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/media/useAudio/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useTaroState } from \'@tarojs/taro\';\nimport { useToast, useRecord, useAudio } from \'taro-hooks\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button } from \'@taroify/core\';\n\nexport default () => {\n  const [audioSource, setAudioSource] =\n    useTaroState<Taro.RecorderManager.OnStopCallbackResult>();\n\n  const [audioContext, { play }] = useAudio();\n  const [, { start, stop }] = useRecord();\n\n  const { show } = useToast({\n    title: \'useVoice\',\n    duration: 500,\n    mask: true,\n  });\n\n  const handleStop = async () => {\n    try {\n      show({ title: \'\u6b63\u5728\u505c\u6b62\', duration: 20000000 });\n      const result = await stop();\n      setAudioSource(result);\n\n      show({ title: \'\u505c\u6b62\u5f55\u5236\u6210\u529f\' });\n    } catch (e) {\n      show({ title: \'\u505c\u6b62\u5f55\u5236\u5931\u8d25\', icon: \'error\' });\n    }\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => start()}\n        shape="square"\n      >\n        \u5f00\u59cb\u5f55\u5236\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleStop()}\n        shape="square"\n      >\n        \u7ed3\u675f\u5f55\u5236\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        disabled={!audioSource?.tempFilePath}\n        onClick={() => play(audioSource?.tempFilePath)}\n        shape="square"\n      >\n        \u64ad\u653e\u97f3\u9891\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        disabled={!audioSource?.tempFilePath}\n        onClick={() => audioContext?.stop?.()}\n        shape="square"\n      >\n        \u505c\u6b62\u64ad\u653e\u97f3\u9891\n      </Button>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",l({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,a.kt)("h2",l({},{id:"faq"}),"FAQ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6ce8\u610f: iOS \u5728\u9759\u97f3\u72b6\u6001\u4e0b, ",(0,a.kt)("inlineCode",{parentName:"p"},"innerAudio"),"\u4f1a\u9075\u5faa\u9759\u97f3\u539f\u5219\u65e0\u58f0\u97f3. \u82e5\u9700\u8981\u5728\u9759\u97f3\u72b6\u6001\u4e0b\u64ad\u653e\u58f0\u97f3. \u53ef\u589e\u52a0\u914d\u7f6e\u9879\u5982\u4e0b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-js"}),"{\n  obeyMuteSwitch: false;\n}\n")))))}c.isMDXComponent=!0}}]);