const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ba381d814f1d4ec3040984aca544b3d7","url":"./404.html"},{"revision":"b8b6791f81583c5645f93f606e8c6706","url":"./about/index.html"},{"revision":"a2c8276a89239be36ef3c40ce009597c","url":"./archives/2020/02/index.html"},{"revision":"2a6ec9d774b24d60adbf5f561e0b8d02","url":"./archives/2020/03/index.html"},{"revision":"a6fdfa157815a9811253f17a5e8c0d6f","url":"./archives/2020/06/index.html"},{"revision":"a02ec51597f53cd54d269c8ee69ffd6b","url":"./archives/2020/07/index.html"},{"revision":"c9de28f66fb0dbc86af980ba4f10dab7","url":"./archives/2020/08/index.html"},{"revision":"f3af0fd06e4225dc0f32b5fec99e76e2","url":"./archives/2020/11/index.html"},{"revision":"3e610125e9167406ea3c8408296fe65a","url":"./archives/2020/12/index.html"},{"revision":"927162278f2e87c9b5354c80e1275b23","url":"./archives/2020/index.html"},{"revision":"12a3c0f7bb15366b18722a16d11ac44b","url":"./archives/2021/03/index.html"},{"revision":"9429b01a6b6d8ccf8f2ac596fd500212","url":"./archives/2021/index.html"},{"revision":"526dd7fe6b0ae14d4c1fc49cbdaccc75","url":"./archives/index.html"},{"revision":"7a6390e24836413757b6de689727c81b","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"49791f0ac7a5a2df96f117507a3fe6aa","url":"./bing/index.html"},{"revision":"2169812f5968497811adbc949a5c43be","url":"./categories/51单片机/index.html"},{"revision":"d9c270f3e81460e2b4b66f78f3a76b99","url":"./categories/黑苹果/index.html"},{"revision":"fdbac9aafda97adcea596c393e3fb7ce","url":"./categories/教程/index.html"},{"revision":"0fc20efaf4608d4ca49e10395d1e43b1","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"b76c79579b2e5dea356349567f183050","url":"./categories/软件/index.html"},{"revision":"6955f8d5be3c9b909d9a77514990bead","url":"./categories/随笔/index.html"},{"revision":"5e354340a9fd9ad09143af3656a3d7f6","url":"./categories/呓语/index.html"},{"revision":"11636f2ccc4fcbcf4f33864afdda8338","url":"./categories/index.html"},{"revision":"3e69df35dffb8707a5eb304c27fa1cfc","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"174b0dc62836034be9c73afa7e3de398","url":"./categories/Python学习笔记/index.html"},{"revision":"45fe74cf5f6596dde52d122fe0e9e240","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"660fbad98e4e49de9a97e2cbfd57c9cd","url":"./Gallery/index.html"},{"revision":"147a5acfd07075d5fb58b465e368bcc2","url":"./Gallery/wallpaper/index.html"},{"revision":"e1550d290668d9d30ed1705d2616f229","url":"./hackintosh/index.html"},{"revision":"87750489b7eae92f0fef16f95a8cd26e","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"95afa1fc68393e260dbdb9b965d57eec","url":"./link/index.html"},{"revision":"dd90029b633a7d22e690ce7500142b56","url":"./love/food/index.html"},{"revision":"c815a3a5858208d6a4bfc7b1116f3060","url":"./love/index.html"},{"revision":"939f2f34bc5a728a628fd73442540a9e","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"817464adcd4409cc5c2bad261ebbc426","url":"./ncre-c/index.html"},{"revision":"122dc9abc80d889d1b0a1957ee6ed3ac","url":"./page/2/index.html"},{"revision":"222e4eb16a1e082d4e646fad4acba671","url":"./page/3/index.html"},{"revision":"f9e856db5716bb207c5fea0e37c67b23","url":"./post/12136/index.html"},{"revision":"123f32ab0cd898be4398ae479a844908","url":"./post/1490/index.html"},{"revision":"d4f81bf65ceb47c570013a366221498d","url":"./post/19561/index.html"},{"revision":"78cd673db804f4c7b6c1b29161782abe","url":"./post/28299/index.html"},{"revision":"ed2ec3368f9069cf48faa55ab60e72c0","url":"./post/30170/index.html"},{"revision":"96df235ad702fe86d09f065744e4ee62","url":"./post/34236/index.html"},{"revision":"ded8e93d374e26a5224dc3831e82f536","url":"./post/36a1c976/index.html"},{"revision":"5df41b7cf9945a48ab6f470d063973e8","url":"./post/39520/index.html"},{"revision":"b0fbad70f58c05110ac8a38d328fa94c","url":"./post/39697/index.html"},{"revision":"8a3c82490d29969294dbf5c8e43424e7","url":"./post/44703/index.html"},{"revision":"1565defd3834c1b4ff4a40875189597a","url":"./post/497570a1/index.html"},{"revision":"b896501aae5c9e48c50248840ff38b98","url":"./post/49f9/index.html"},{"revision":"db317c01f690352189e56566898960d4","url":"./post/4dd30b69/index.html"},{"revision":"0ecc6813e120292e84f4dae0ccc954a0","url":"./post/5632/index.html"},{"revision":"b6567e7d01589a490a4b0ba115a8705d","url":"./post/62d3/index.html"},{"revision":"fc044e4b29d833c9516bf03268c64788","url":"./post/67f8/index.html"},{"revision":"e3b8ac22e3bf4eb6307362c320c3750f","url":"./post/68f544ac/index.html"},{"revision":"efb270264b96286bf8c0d0b9c0a26681","url":"./post/7a13585/index.html"},{"revision":"12924969a0be3d49f9e7e64a625f196e","url":"./post/7dc5e7b1/index.html"},{"revision":"4d74819f9c8241dd36fae4a53d797463","url":"./post/8251/index.html"},{"revision":"1c5282dc6544bed9155cc6f1e4cc73e0","url":"./post/84b9/index.html"},{"revision":"b5a094180275257e7c47b22a533e0795","url":"./post/9ff9620/index.html"},{"revision":"527aca9e1ac954ee01b27b7e2dccc15b","url":"./post/a423/index.html"},{"revision":"8b11476062ed0ac69d7a82b30504241c","url":"./post/f43a2906/index.html"},{"revision":"000bd0bd6bba17ea434a94828a0150f7","url":"./tags/51单片机/index.html"},{"revision":"77ab58bebd73b44f7e5a9e0b9a546317","url":"./tags/博客/index.html"},{"revision":"8067efabd448532eb72bd23c364e6a47","url":"./tags/博客统计插件/index.html"},{"revision":"04b2dda3208e47699cdf3eb40bd5e5b1","url":"./tags/不蒜子/index.html"},{"revision":"2a2eb385168bd0c3346100073c16df8b","url":"./tags/二级/index.html"},{"revision":"cbc8cb2ddb93cd4ab4a63018829a0521","url":"./tags/黑苹果/index.html"},{"revision":"ce2833b35ff69e2deabc9f750da62739","url":"./tags/汇编语言/index.html"},{"revision":"024a36d056f0c60f46eabbcd91db7fcd","url":"./tags/爬虫/index.html"},{"revision":"3d345032094eece9dd6142bb55f04d9e","url":"./tags/软件/index.html"},{"revision":"d11aa03abc98cd6a4647a017506af058","url":"./tags/图床/index.html"},{"revision":"dc6905fcd42c63131460048e4049d1d1","url":"./tags/中断/index.html"},{"revision":"a5101a47db3092cdc1b39c6a890648d5","url":"./tags/Github/index.html"},{"revision":"1456e4181faf154ca319664038d5a4fe","url":"./tags/index.html"},{"revision":"575838f1eaa91f9de8c6e22cea99e9f2","url":"./tags/jsdelivr/index.html"},{"revision":"7ea4c47bfb11cbf8a9df421fe50233c6","url":"./tags/m3u8/index.html"},{"revision":"489331b45bb4bfc865b1f6372b1ac436","url":"./tags/macOS/index.html"},{"revision":"3bc80a924a7f4e7eb3407e62a5862155","url":"./tags/Markdown/index.html"},{"revision":"a15c8f51e336cb9d58628100cbff8e81","url":"./tags/OC/index.html"},{"revision":"982c56693021aaa213a65e4ff82bdd50","url":"./tags/OpenCore/index.html"},{"revision":"badd4bab41b9bf901ddaad9e00534e68","url":"./tags/Python/index.html"},{"revision":"3881a350cf63ddf6c0fdb5722c7f689b","url":"./tags/Scrapy/index.html"},{"revision":"3cec9bcd7f3881d0b8f761f63dc9ee09","url":"./tags/urllib/index.html"},{"revision":"dae1eba3dfd9daca0f1bbb8e7032b7d6","url":"./tags/VMware/index.html"},{"revision":"289fa6fdf928cf2062f23df1713ecd93","url":"./tags/Windows/index.html"}], {
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
