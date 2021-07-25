export default {
  pages: [
    // layout
    'pages/index/index',
    'pages/about/index',
    'pages/panel/index',
    // env
    'pages/useEnv/index',
    // basic
    'pages/useRouter/index',
    'pages/usePromise/index',
    'pages/useBase64ToArrayBuffer/index',
    'pages/useArrayBufferToBase64/index',
    'pages/useClipboardData/index',
    'pages/useSystemInfo/index',
    'pages/useEvent/index',
    'pages/useVisible/index',
    'pages/useSelectorQuery/index',
    'pages/useSelectorQuery/getBoundingClientRect/index',
    'pages/useSelectorQuery/getFields/index',
    'pages/useSelectorQuery/getNode/index',
    'pages/useSelectorQuery/getContext/index',
    'pages/useSelectorQuery/getScrollOffset/index',
    'pages/useStorage/index',
    // feedback
    'pages/useToast/index',
    'pages/useModal/index',
    'pages/useLoading/index',
    'pages/useActionSheet/index',
    'pages/useNavigationBar/index',
    // wechat
    'pages/useAPICheck/index',
    'pages/useUpdateManager/index',
    'pages/useLaunchOptions/index',
    // network
    'pages/useRequest/index',
    'pages/useRequest/defaultRequest/index',
    'pages/useRequest/manual/index',
    'pages/useRequest/polling/index',
    'pages/useRequest/concurrent/index',
    'pages/useRequest/ready/index',
    'pages/useRequest/debounce/index',
    'pages/useRequest/throttle/index',
    'pages/useRequest/cacheKey/index',
    'pages/useRequest/preload/index',
    'pages/useRequest/refreshOnWindowFocus/index',
    'pages/useRequest/mutate/index',
    'pages/useRequest/loadingDelay/index',
    'pages/useRequest/refreshDeps/index',
    'pages/useRequest/fetch/index',
    'pages/useRequest/axios/index',
    'pages/useRequest/pagination/index',
    'pages/useRequest/paginationCache/index',
    'pages/useRequest/loadMore/index',
    'pages/useRequest/loadMoreRef/index',
    'pages/useNetworkType/index',
    'pages/useOnline/index',
    // device
    'pages/useBattery/index',
    'pages/useVibrate/index',
    'pages/useMotion/index',
    'pages/useBrightness/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#f8f8f8',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro hooks',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#6a6a77',
    selectedColor: '#78a4fa',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/icon/index.png',
        selectedIconPath: './assets/icon/index-select.png',
      },
      {
        pagePath: 'pages/about/index',
        text: '关于',
        iconPath: './assets/icon/about.png',
        selectedIconPath: './assets/icon/about-select.png',
      },
    ],
  },
};
