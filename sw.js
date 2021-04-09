const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"6707d39ef99f08e32fdac52ccfd2d627","url":"./404.html"},{"revision":"923205c6ed1bb40bb74812808cb3a976","url":"./about/index.html"},{"revision":"fe4778b19aac4806f06a3ba1e80ddfdd","url":"./archives/2020/02/index.html"},{"revision":"388703d952ec1c513246008d61b4c6e1","url":"./archives/2020/03/index.html"},{"revision":"f94a72b79d05d966e3ed5ecfe8feb139","url":"./archives/2020/06/index.html"},{"revision":"4ca040966f9067932aba195db7abdfa0","url":"./archives/2020/07/index.html"},{"revision":"815d64f359a36ff5c8a733fa9b41741f","url":"./archives/2020/08/index.html"},{"revision":"817d7f394a19d0a87558dc01786e8812","url":"./archives/2020/11/index.html"},{"revision":"bfbf2044a6555deaaeb7aa03a90d81d7","url":"./archives/2020/12/index.html"},{"revision":"ddfeac5bdedd6082bd61609f922022e7","url":"./archives/2020/index.html"},{"revision":"ced28d5bce1343ab243c0ebf197fa752","url":"./archives/2021/03/index.html"},{"revision":"5403a6dac8b069a2c75050a331a340f9","url":"./archives/2021/index.html"},{"revision":"ea158628a777a399894b9fef8ce3d809","url":"./archives/index.html"},{"revision":"7a6390e24836413757b6de689727c81b","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"49791f0ac7a5a2df96f117507a3fe6aa","url":"./bing/index.html"},{"revision":"1db5fffb3cc0c9d50f8ca44a0973d359","url":"./categories/51单片机/index.html"},{"revision":"7c0d2bef2e338e43fe38fbdf4ffd233b","url":"./categories/黑苹果/index.html"},{"revision":"fc4d3ab38f11842153fbc5d38fe34a79","url":"./categories/教程/index.html"},{"revision":"274da1d17b4e8fd23484834baf4d9e6b","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"a3f739a41c381c77415074874988d804","url":"./categories/软件/index.html"},{"revision":"f139e1fba863d55c13640f9b414c2c1b","url":"./categories/随笔/index.html"},{"revision":"9089a11b4db112541955cde66714e63b","url":"./categories/呓语/index.html"},{"revision":"6cc9bb2a16ca16287bf47b6a6dc28f6f","url":"./categories/index.html"},{"revision":"646a00b0c66cba91a0a83272ce969285","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"345a93d482fbfc70f8e348fba8a69576","url":"./categories/Python学习笔记/index.html"},{"revision":"45fe74cf5f6596dde52d122fe0e9e240","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"7670fe76886c2ec99a6841e9a1a9c19d","url":"./Gallery/index.html"},{"revision":"5a621e6f59d56f3cdd39200e964c5b14","url":"./Gallery/wallpaper/index.html"},{"revision":"d296717cc693cf7fbf001893afc8f8b3","url":"./hackintosh/index.html"},{"revision":"358ea1a6b89ab31d582ef5c986378b4c","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ea207acc85c370a1d082a1a500a478c3","url":"./link/index.html"},{"revision":"3aad0d8bd6ffca2072f861f3996b5067","url":"./love/food/index.html"},{"revision":"283868193874b0c330312af18a133809","url":"./love/index.html"},{"revision":"fa12cf866c76e7c41e9084b14dedfc67","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"85a0161c671e6cde752d8dc4d240b626","url":"./ncre-c/index.html"},{"revision":"234aa16ccf6568c3dec2ce8fa5a7a9d0","url":"./page/2/index.html"},{"revision":"7954c7a38fcd6eb23b99818492fd51c8","url":"./page/3/index.html"},{"revision":"16d0143a24b18c41fac384fcbf5ee082","url":"./post/12136/index.html"},{"revision":"544d5e4a474349d0daec22c9b485758b","url":"./post/1490/index.html"},{"revision":"50d17f8a106fcb637faba860b6e59a24","url":"./post/19561/index.html"},{"revision":"cb2bc05b040405393ec938a72d4948f0","url":"./post/28299/index.html"},{"revision":"3a2b8f094d5b2693a9d7d824b9190d1a","url":"./post/30170/index.html"},{"revision":"39ad6268b336afd8ff7ec2f3b7d4bad8","url":"./post/34236/index.html"},{"revision":"bcda963ba8603598c97998e6dd1a8b8b","url":"./post/36a1c976/index.html"},{"revision":"3d397cbf79b91006f072a1dd9cf2e1a9","url":"./post/39520/index.html"},{"revision":"9e2229ed7c0ba1ee6b6eaee8c33f4975","url":"./post/39697/index.html"},{"revision":"2108ef8cb0c7fd949e69ddd3cdd07e31","url":"./post/44703/index.html"},{"revision":"7e731cc3d705e602c7b730bc9594557c","url":"./post/497570a1/index.html"},{"revision":"5ca53f5bfa500f0f55643deba85d76e3","url":"./post/49f9/index.html"},{"revision":"f02f9828a131417f2fd3be21c7beeb97","url":"./post/4dd30b69/index.html"},{"revision":"dbba46682f8a592b056b61839dd76708","url":"./post/5632/index.html"},{"revision":"29cc1e158e1d739d60ce9c210fdaf3e6","url":"./post/62d3/index.html"},{"revision":"7fe23b3f8c74daae1ddf4698d048874e","url":"./post/67f8/index.html"},{"revision":"cf54f3165f9d819dfc04ffff25538fc5","url":"./post/68f544ac/index.html"},{"revision":"5c8d0a5cc1fb2f2057cbcc93bd5e8466","url":"./post/7a13585/index.html"},{"revision":"9e3f57c1fc67d7019325f75df32c6d81","url":"./post/7dc5e7b1/index.html"},{"revision":"660a0696860aa38bafd40aa88ed96fac","url":"./post/8251/index.html"},{"revision":"076bb98b6ad9fc09e50034657a1e8672","url":"./post/84b9/index.html"},{"revision":"c6e4fc6812ce44b07efc5acd82933865","url":"./post/9ff9620/index.html"},{"revision":"036cebaea52ab5beddfed8c40b60012b","url":"./post/a423/index.html"},{"revision":"41fd4a1c07b8c35596e8f68a3ce4c63e","url":"./post/f43a2906/index.html"},{"revision":"ba38a5be6897b649e4f62db9518310ce","url":"./tags/51单片机/index.html"},{"revision":"0f60106ee4be39cfc24d312c05601d49","url":"./tags/博客/index.html"},{"revision":"19092c3132f7f684652a939f573ecdfb","url":"./tags/博客统计插件/index.html"},{"revision":"48462814739640edc9473022e2238ce0","url":"./tags/不蒜子/index.html"},{"revision":"3b4ab1550afe77c5b3fb7a029b240e7b","url":"./tags/二级/index.html"},{"revision":"83922f300c1c4114647aac9818171b5b","url":"./tags/黑苹果/index.html"},{"revision":"91a901ac369457a7b882eeb6f61f3eb4","url":"./tags/汇编语言/index.html"},{"revision":"729f1f404ce9e60066a26f39dc965bd0","url":"./tags/爬虫/index.html"},{"revision":"78889fff72dd660ae540a3c13647757e","url":"./tags/软件/index.html"},{"revision":"838ee9955eee3fcfb937ebcfb6dcabfc","url":"./tags/图床/index.html"},{"revision":"7ab502011d67cf47421039b2f9a1ed16","url":"./tags/中断/index.html"},{"revision":"48deb630bb0d36a17f25b6f9c4567077","url":"./tags/Github/index.html"},{"revision":"0e1f4c6c8bebd8a3ed05eb24b949a4d4","url":"./tags/index.html"},{"revision":"d6c89ff085629d8ab23ff88af260d006","url":"./tags/jsdelivr/index.html"},{"revision":"29c03620d92b331ebf78b710298b5281","url":"./tags/m3u8/index.html"},{"revision":"e77017e5f2f14b10d23e135abc386f59","url":"./tags/macOS/index.html"},{"revision":"ee8e736d1a033b312f94efacb09ba385","url":"./tags/Markdown/index.html"},{"revision":"41a14061cb942ea2fdbf9f9631548a49","url":"./tags/OC/index.html"},{"revision":"a0f3461a922cfe47ce39a6d90456d300","url":"./tags/OpenCore/index.html"},{"revision":"f67669d673d2b5e11261eab2a65cadf3","url":"./tags/Python/index.html"},{"revision":"6b190a60f9ea1f3a3ca015c29b798af7","url":"./tags/Scrapy/index.html"},{"revision":"440b0f6cf08eaa8dfc426306b2fa4b0c","url":"./tags/urllib/index.html"},{"revision":"dc136d102a8c86558c30f479d655a28d","url":"./tags/VMware/index.html"},{"revision":"603af1b13cc7daf6be68f6e99b256a07","url":"./tags/Windows/index.html"}], {
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
