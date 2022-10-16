"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[5213],{5074:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});t(3262);var a=t(5318),l=t(2984),r=t(9018);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const s={title:"\u8f6e\u8be2",sidebar_position:4},u=void 0,p={unversionedId:"useRequest/polling",id:"useRequest/polling",title:"\u8f6e\u8be2",description:"\u901a\u8fc7\u8bbe\u7f6e options.pollingInterval\uff0c\u8fdb\u5165\u8f6e\u8be2\u6a21\u5f0f\uff0cuseRequest \u4f1a\u5b9a\u65f6\u89e6\u53d1 service \u6267\u884c\u3002",source:"@site/../packages/hooks/src/useRequest/polling.mdx",sourceDirName:"useRequest",slug:"/useRequest/polling",permalink:"/site/hooks/useRequest/polling",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useRequest/polling.mdx",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1665888816,formattedLastUpdatedAt:"2022\u5e7410\u670816\u65e5",sidebarPosition:4,frontMatter:{title:"\u8f6e\u8be2",sidebar_position:4},sidebar:"hooks",previous:{title:"Loading Delay",permalink:"/site/hooks/useRequest/loadingDelay"},next:{title:"Ready",permalink:"/site/hooks/useRequest/ready"}},m={},d=[{value:"API",id:"api",level:3},{value:"Return",id:"return",level:4},{value:"Options",id:"options",level:4},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3}],k={toc:d};function c(e){var{components:n}=e,t=i(e,["components"]);return(0,a.kt)("wrapper",o({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"options.pollingInterval"),"\uff0c\u8fdb\u5165\u8f6e\u8be2\u6a21\u5f0f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"useRequest")," \u4f1a\u5b9a\u65f6\u89e6\u53d1 service \u6267\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0}),"const { data, run, cancel } = useRequest(getUsername, {\n  pollingInterval: 3000,\n});\n")),(0,a.kt)("p",null,"\u4f8b\u5982\u4e0a\u9762\u7684\u573a\u666f\uff0c\u4f1a\u6bcf\u9694 3000ms \u8bf7\u6c42\u4e00\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"getUsername"),"\u3002\u540c\u65f6\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," \u6765\u505c\u6b62\u8f6e\u8be2\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"run/runAsync")," \u6765\u542f\u52a8\u8f6e\u8be2\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u793a\u4f8b\u6765\u4f53\u9a8c\u6548\u679c"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(l.Z,{language:"html",title:"network/useRequest/polling/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useRequest/polling/index.vue",url:"https://next-version-taro-hooks.vercel.app/taro-hooks/vue/pages/network/useRequest/polling/index",mdxType:"CodeDisplay"},'<template>\n  <block>\n    <demo-content title="\u8f6e\u8be2">\n      <view>Username: {{ request.loading ? \'Loading...\' : request.data }}</view>\n      <nut-row justify="space-between">\n        <nut-col :span="11">\n          <nut-button\n            :loading="request.loading"\n            size="small"\n            type="primary"\n            shape="square"\n            block\n            @click="request.run()"\n          >\n            run\n          </nut-button>\n        </nut-col>\n        <nut-col :span="11">\n          <nut-button\n            :loading="request.loading"\n            size="small"\n            type="danger"\n            shape="square"\n            block\n            @click="request.cancel()"\n          >\n            stop\n          </nut-button>\n        </nut-col>\n      </nut-row>\n    </demo-content>\n  </block>\n</template>\n\n<script>\nimport { useRequest } from \'taro-hooks\';\n\nimport Mock from \'mockjs\';\n\nfunction getUsername() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock(\'@name()\'));\n    }, 1000);\n  });\n}\nexport default {\n  setup() {\n    const request = useRequest(getUsername, {\n      pollingInterval: 1000,\n      pollingWhenHidden: false,\n    });\n\n    return { request };\n  },\n};\n<\/script>\n'),ReactTab:(0,a.kt)(l.Z,{language:"tsx",title:"network/useRequest/polling/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useRequest/polling/index.tsx",url:"https://next-version-taro-hooks.vercel.app/taro-hooks/react/pages/network/useRequest/polling/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Flex, Field } from '@taroify/core';\n\nimport { useRequest } from 'taro-hooks';\nimport Mock from 'mockjs';\n\nfunction getUsername(): Promise<string> {\n  console.log('polling getUsername');\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name()'));\n    }, 1000);\n  });\n}\n\nexport default () => {\n  const { data, loading, run, cancel } = useRequest(getUsername, {\n    pollingInterval: 1000,\n    pollingWhenHidden: false,\n  });\n\n  return (\n    <DemoContent title=\"\u8f6e\u8be2\">\n      <Field align=\"start\">Username: {loading ? 'Loading' : data}</Field>\n      <Flex align=\"center\" gutter={10}>\n        <Flex.Item span={12}>\n          <Button\n            loading={loading}\n            color=\"primary\"\n            size=\"small\"\n            block\n            onClick={run}\n          >\n            start\n          </Button>\n        </Flex.Item>\n        <Flex.Item span={12}>\n          <Button color=\"danger\" size=\"small\" block onClick={cancel}>\n            stop\n          </Button>\n        </Flex.Item>\n      </Flex>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h3",o({},{id:"api"}),"API"),(0,a.kt)("h4",o({},{id:"return"}),"Return"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"run"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u542f\u52a8\u8f6e\u8be2"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(...params: TParams) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"runAsync"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u542f\u52a8\u8f6e\u8be2"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(...params: TParams) => Promise<TData>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"cancel"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u505c\u6b62\u8f6e\u8be2"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,a.kt)("h4",o({},{id:"options"}),"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"pollingInterval"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u8f6e\u8be2\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002\u5982\u679c\u503c\u5927\u4e8e 0\uff0c\u5219\u542f\u52a8\u8f6e\u8be2\u6a21\u5f0f\u3002"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"pollingWhenHidden"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5728\u9875\u9762\u9690\u85cf\u65f6\uff0c\u662f\u5426\u7ee7\u7eed\u8f6e\u8be2\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a false\uff0c\u5728\u9875\u9762\u9690\u85cf\u65f6\u4f1a\u6682\u65f6\u505c\u6b62\u8f6e\u8be2\uff0c\u9875\u9762\u91cd\u65b0\u663e\u793a\u65f6\u7ee7\u7eed\u4e0a\u6b21\u8f6e\u8be2\u3002"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h3",o({},{id:"\u5907\u6ce8"}),"\u5907\u6ce8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options.pollingInterval"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"options.pollingWhenHidden")," \u652f\u6301\u52a8\u6001\u53d8\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"options.manual = true"),"\uff0c\u5219\u521d\u59cb\u5316\u4e0d\u4f1a\u542f\u52a8\u8f6e\u8be2\uff0c\u9700\u8981\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"run/runAsync")," \u89e6\u53d1\u5f00\u59cb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8f6e\u8be2\u539f\u7406\u662f\u5728\u6bcf\u6b21\u8bf7\u6c42\u5b8c\u6210\u540e\uff0c\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"li"},"pollingInterval")," \u65f6\u95f4\uff0c\u53d1\u8d77\u4e0b\u4e00\u6b21\u8bf7\u6c42\u3002")))}c.isMDXComponent=!0}}]);