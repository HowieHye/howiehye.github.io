const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e817c7ff5eadb4076c54a9e20e8dd428","url":"./404.html"},{"revision":"358811293934cd4c4147633d9899d06d","url":"./about/index.html"},{"revision":"49149f02ce32dabb62c78b34d560b534","url":"./archives/2020/02/index.html"},{"revision":"648485b89cf3830ddc226509f63b9d67","url":"./archives/2020/03/index.html"},{"revision":"e6fbba67d305e0e4c815be1cbf9e6721","url":"./archives/2020/06/index.html"},{"revision":"33e82ffdcfcc7ab518b6308b458b3caf","url":"./archives/2020/07/index.html"},{"revision":"cf20e67e29d379a6df3258d13a74ad5f","url":"./archives/2020/08/index.html"},{"revision":"cd258b7744f90550c81690c4c2ff5241","url":"./archives/2020/11/index.html"},{"revision":"5038f599b5b222be16c19b71a5571744","url":"./archives/2020/12/index.html"},{"revision":"46719d4d2d3af90fa90ad2f4adb5bfac","url":"./archives/2020/index.html"},{"revision":"65400abde6c5e921d0af494a38faa493","url":"./archives/2021/03/index.html"},{"revision":"910fd81018ab0b7c397d47a70d916b69","url":"./archives/2021/04/index.html"},{"revision":"efddf88dad395578e91e7490bea2a203","url":"./archives/2021/06/index.html"},{"revision":"20510b3c56dcbc8ebda99e67705c69ca","url":"./archives/2021/index.html"},{"revision":"92924cfbe4601505e6663547097c6df3","url":"./archives/index.html"},{"revision":"b2776d8691acb3962b56aa3783c64c9c","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"646dd0ccd7b8adf6a05bb3f68bf63797","url":"./bing/index.html"},{"revision":"27c00fab64628d2a7c4b84ea673ef6a8","url":"./categories/51单片机/index.html"},{"revision":"8341f9f329b00be8b694d09bbe08ddbe","url":"./categories/黑苹果/index.html"},{"revision":"6e37c9f3ea721f9f6a5edea57c0a33e3","url":"./categories/教程/index.html"},{"revision":"6b0771a8a2a7904a45d5a5383c42f91e","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"a19ef7639aa56205db573e9d45585e63","url":"./categories/软件/index.html"},{"revision":"7b224b1abd4df9a5aa939a605e72c035","url":"./categories/随笔/index.html"},{"revision":"4b3f2d546e84ed83f48d45b7a50e79bd","url":"./categories/呓语/index.html"},{"revision":"741bc228aee718847e48b78a05b1fb63","url":"./categories/index.html"},{"revision":"fb7ebee8f649b308791140a23dec71b2","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"ef57e92fa467bce1c048b3207a0b7443","url":"./categories/Python学习笔记/index.html"},{"revision":"407262ed8ab345676e7fa211ef238283","url":"./categories/Tensorflow笔记/index.html"},{"revision":"e10939a81aacb2d3b92801e0515b00af","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4a15057aa043eb670622b58f8aef09ed","url":"./Gallery/index.html"},{"revision":"2e524a0d4eb44f863c67f0a482bb3c33","url":"./Gallery/wallpaper/index.html"},{"revision":"100d147f3711bb3db2f97c2a5ab29a1b","url":"./hackintosh/index.html"},{"revision":"b23a686d3e8f83f3315f9e8508854e0d","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"6c4d5c898afc81e03738eb74e4397396","url":"./link/index.html"},{"revision":"acde1beb02830e3f06a860c2a006ef00","url":"./love/food/index.html"},{"revision":"c3d372944fe510684cf3d7467b3702da","url":"./love/index.html"},{"revision":"01409e9947f6f19045a7d85c25366b48","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"2edf0bed81d08b023c0f8c9f420c83ce","url":"./ncre-c/index.html"},{"revision":"f334a9fd3703f453e90773289a59b622","url":"./page/2/index.html"},{"revision":"5e2d027174768012cad6948735bd0c72","url":"./page/3/index.html"},{"revision":"5a85aa423a44de4e143db553855a4ff6","url":"./post/12136/index.html"},{"revision":"3c98c43329da6076baf3c9b9e168ed46","url":"./post/1490/index.html"},{"revision":"29baed715760299967219addcb44e811","url":"./post/19561/index.html"},{"revision":"3a15df9e8e45ae568a2ae9996a9e6228","url":"./post/28299/index.html"},{"revision":"5b28db8ef5a63ae252bdf11c6236384b","url":"./post/30170/index.html"},{"revision":"038ab233042a7148d2a4a109902c95cf","url":"./post/34236/index.html"},{"revision":"a43d4043e145711bd4eea666ed363b26","url":"./post/36a1c976/index.html"},{"revision":"0ca404878f8718e21cbc15031cdfd2b6","url":"./post/39520/index.html"},{"revision":"27f675b639739220699f95fd3ad7b191","url":"./post/39697/index.html"},{"revision":"ba8233a8505e01cd41668c9eedbc1542","url":"./post/44703/index.html"},{"revision":"07083f4935129f45dedcde940211e27c","url":"./post/45b2259a/index.html"},{"revision":"963b77145135bc87e47cd337020e7523","url":"./post/497570a1/index.html"},{"revision":"daf444a747cbd406acb68fd8fbd9021f","url":"./post/49f9/index.html"},{"revision":"17a98302711a9a8f1e56e056d167999a","url":"./post/4a9c3af0/index.html"},{"revision":"ce8a6e26527a4f039c3d6b0d763814bc","url":"./post/4dd30b69/index.html"},{"revision":"8803677de3b6582342f7ec338754a854","url":"./post/5632/index.html"},{"revision":"6a098834c3aa7e975ce5d98a023d9459","url":"./post/62d3/index.html"},{"revision":"66bca17c61697732fa56ebfe64cb4d04","url":"./post/67f8/index.html"},{"revision":"73c3359a661e1420917a0c65bf097091","url":"./post/68f544ac/index.html"},{"revision":"f21166209b0fc89ad7cc47f0e0514208","url":"./post/7a13585/index.html"},{"revision":"5a3f8a35952971882b1a0ceb575817d3","url":"./post/7dc5e7b1/index.html"},{"revision":"5c2471118e410911234d18a0bcd1a82a","url":"./post/8251/index.html"},{"revision":"56df6c820ad3f9da9637bf7f2beade1e","url":"./post/84b9/index.html"},{"revision":"c161c8e4f50e980f6a2ee76e936694f2","url":"./post/9ff9620/index.html"},{"revision":"7143dd8eb65b5778df112f67ecf7bc8c","url":"./post/a423/index.html"},{"revision":"2a43f62d244234e0726be2a2b737df14","url":"./post/f43a2906/index.html"},{"revision":"f5ec95917f740144df86f30192f36789","url":"./tags/51单片机/index.html"},{"revision":"f33565f59fab6f6d8832f23ba3dc00ca","url":"./tags/博客/index.html"},{"revision":"10afddb70252dc98fda55960da1a8be6","url":"./tags/博客统计插件/index.html"},{"revision":"b35e2c06335fc85780d9fae33f5b9e6e","url":"./tags/不蒜子/index.html"},{"revision":"1e8bfb741ccbc5314c03573fe4696572","url":"./tags/二级/index.html"},{"revision":"ca24e157266aa3d14727e70b54aacf1a","url":"./tags/黑苹果/index.html"},{"revision":"2cd6fd9728c8afddad9c6cabaa6be23b","url":"./tags/汇编语言/index.html"},{"revision":"0dd848b5d82d659177704cf77ba45890","url":"./tags/爬虫/index.html"},{"revision":"98eb6be701c522031f10e5d214de4b6a","url":"./tags/软件/index.html"},{"revision":"15f4cb1277a5717b96839a51715fdc9b","url":"./tags/图床/index.html"},{"revision":"a718bd294ca170e4a34ad98976f7171d","url":"./tags/中断/index.html"},{"revision":"c4df40b706141b84f4347e02625c1835","url":"./tags/Github/index.html"},{"revision":"07fb62bfc17f0716abd6b4ec66bc669e","url":"./tags/index.html"},{"revision":"6f3958f6db4aa39a85d8f39ffe37b152","url":"./tags/jsdelivr/index.html"},{"revision":"471e05964fcb400a712b73b7cfb6be50","url":"./tags/m3u8/index.html"},{"revision":"6702ed4eecdae129d50c77231a1edfd6","url":"./tags/macOS/index.html"},{"revision":"b16a35804d72c7aa9428a2fe658c6a00","url":"./tags/Markdown/index.html"},{"revision":"cefc45cc703d7c581d8c5a0212756e23","url":"./tags/OC/index.html"},{"revision":"2d5c98e790d3bc17cd1dfdb857aaf678","url":"./tags/OpenCore/index.html"},{"revision":"66fd5f2df97d4ad3836f872714e9a17e","url":"./tags/Python/index.html"},{"revision":"2a077f8c68d863d0f745312e94dc08a0","url":"./tags/Requests/index.html"},{"revision":"928d9c04445286447d80820c4d28d1d9","url":"./tags/Scrapy/index.html"},{"revision":"aa01bfb259fda81e0f46aef892213c2a","url":"./tags/Tensorflow/index.html"},{"revision":"8a8e7fe00786266db1c6095477f7cdb5","url":"./tags/urllib/index.html"},{"revision":"267f4fcce8d2dd603c29a8f2d8a8c9ef","url":"./tags/VMware/index.html"},{"revision":"dec33586d7f6a6e95884464296d2e687","url":"./tags/Windows/index.html"}], {
  directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Fonts
workbox.routing.registerRoute(
  /\.(?:eot|ttf|woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Google Fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
  })
);
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Static Libraries
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: "static-libs",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

workbox.googleAnalytics.initialize();
