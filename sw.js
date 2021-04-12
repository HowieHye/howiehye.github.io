const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b2b3a23fc09570c019a6b903e7ea8398","url":"./404.html"},{"revision":"4923208dda45793bbf6dca13697e88f5","url":"./about/index.html"},{"revision":"ac728b0c39439457eb1b959884ec9cf1","url":"./archives/2020/02/index.html"},{"revision":"8fcd85a2d070fecd78ea541d1731f350","url":"./archives/2020/03/index.html"},{"revision":"52c27540238e64896f1cb23f2733dc06","url":"./archives/2020/06/index.html"},{"revision":"c47e40e272a59f48bd69a27278b10308","url":"./archives/2020/07/index.html"},{"revision":"777d7842fabdc73aaa3ddc42bf92bb13","url":"./archives/2020/08/index.html"},{"revision":"5e4ba48c2bc7e6f16cf3d5048816019b","url":"./archives/2020/11/index.html"},{"revision":"6178827651064b9f2c77e0250767289f","url":"./archives/2020/12/index.html"},{"revision":"096b10a12eb85d7e389726d8fbb7089e","url":"./archives/2020/index.html"},{"revision":"1b144eec7678c521cca0cbd3a4a990eb","url":"./archives/2021/03/index.html"},{"revision":"14b091dbf895e883088011d6917fc072","url":"./archives/2021/index.html"},{"revision":"ffe4d29cb2f83d36e9b8838fa1b1dc8e","url":"./archives/index.html"},{"revision":"7a6390e24836413757b6de689727c81b","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"49791f0ac7a5a2df96f117507a3fe6aa","url":"./bing/index.html"},{"revision":"4f32b65fe9bd4bd2dd1f65e2da28bcee","url":"./categories/51单片机/index.html"},{"revision":"447b5cebd6fe44dfd80633dfffe9bc7e","url":"./categories/黑苹果/index.html"},{"revision":"9b6748980b33779803b95b8cf90f5e8a","url":"./categories/教程/index.html"},{"revision":"dc4a42e26acc8778d3a8e0ffbfff88bc","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"f7b75658e35858e027e335ccea03a362","url":"./categories/软件/index.html"},{"revision":"e1db49964be37bb11ee8d9c8e515a184","url":"./categories/随笔/index.html"},{"revision":"4614e64e6e8339caa37356d47dbd0daa","url":"./categories/呓语/index.html"},{"revision":"d6ee2a3c6dd12d0cbbc2d137d2eb6f96","url":"./categories/index.html"},{"revision":"006f599611ea03c25150f8b1c455fabe","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"95906d5c25109998c66ab2e7b1cc614c","url":"./categories/Python学习笔记/index.html"},{"revision":"45fe74cf5f6596dde52d122fe0e9e240","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"10f8c71859bb5d1c29dc974f2fd0be8d","url":"./Gallery/index.html"},{"revision":"55df4423298cf720488481ae0e8576da","url":"./Gallery/wallpaper/index.html"},{"revision":"376d913f952239a5152cf1abe49a70c8","url":"./hackintosh/index.html"},{"revision":"8275070449018c113749f5176ed85fc8","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"04ae35a4a8532c3d1dff9f651938a9f2","url":"./link/index.html"},{"revision":"4319167fdcd1d23d67c1b35d4dcdf66c","url":"./love/food/index.html"},{"revision":"ed0f2493e424d2b131697ebeb54350aa","url":"./love/index.html"},{"revision":"fb212adb03cd34a6f1044b4a104eb0cd","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"3173dcf4e67cbdb5e28572f3bc948c98","url":"./ncre-c/index.html"},{"revision":"10cc1d8e17b70163265c7100c3ea3331","url":"./page/2/index.html"},{"revision":"77bb8f47590aefb9f8880c6513a53ca3","url":"./page/3/index.html"},{"revision":"f9e856db5716bb207c5fea0e37c67b23","url":"./post/12136/index.html"},{"revision":"123f32ab0cd898be4398ae479a844908","url":"./post/1490/index.html"},{"revision":"d4f81bf65ceb47c570013a366221498d","url":"./post/19561/index.html"},{"revision":"78cd673db804f4c7b6c1b29161782abe","url":"./post/28299/index.html"},{"revision":"ed2ec3368f9069cf48faa55ab60e72c0","url":"./post/30170/index.html"},{"revision":"96df235ad702fe86d09f065744e4ee62","url":"./post/34236/index.html"},{"revision":"ded8e93d374e26a5224dc3831e82f536","url":"./post/36a1c976/index.html"},{"revision":"5df41b7cf9945a48ab6f470d063973e8","url":"./post/39520/index.html"},{"revision":"b0fbad70f58c05110ac8a38d328fa94c","url":"./post/39697/index.html"},{"revision":"8a3c82490d29969294dbf5c8e43424e7","url":"./post/44703/index.html"},{"revision":"1565defd3834c1b4ff4a40875189597a","url":"./post/497570a1/index.html"},{"revision":"b896501aae5c9e48c50248840ff38b98","url":"./post/49f9/index.html"},{"revision":"db317c01f690352189e56566898960d4","url":"./post/4dd30b69/index.html"},{"revision":"0ecc6813e120292e84f4dae0ccc954a0","url":"./post/5632/index.html"},{"revision":"b6567e7d01589a490a4b0ba115a8705d","url":"./post/62d3/index.html"},{"revision":"fc044e4b29d833c9516bf03268c64788","url":"./post/67f8/index.html"},{"revision":"e3b8ac22e3bf4eb6307362c320c3750f","url":"./post/68f544ac/index.html"},{"revision":"efb270264b96286bf8c0d0b9c0a26681","url":"./post/7a13585/index.html"},{"revision":"12924969a0be3d49f9e7e64a625f196e","url":"./post/7dc5e7b1/index.html"},{"revision":"4d74819f9c8241dd36fae4a53d797463","url":"./post/8251/index.html"},{"revision":"1c5282dc6544bed9155cc6f1e4cc73e0","url":"./post/84b9/index.html"},{"revision":"b5a094180275257e7c47b22a533e0795","url":"./post/9ff9620/index.html"},{"revision":"527aca9e1ac954ee01b27b7e2dccc15b","url":"./post/a423/index.html"},{"revision":"8b11476062ed0ac69d7a82b30504241c","url":"./post/f43a2906/index.html"},{"revision":"f45f89162d09f88ba4565d52256b5e48","url":"./tags/51单片机/index.html"},{"revision":"7557e2a5951e9ddc9e2aa081ed4a1fba","url":"./tags/博客/index.html"},{"revision":"c1f176c0ec455e9177ae0bb2aea6997c","url":"./tags/博客统计插件/index.html"},{"revision":"4ffb1b4129217f50603745ce21a00ff3","url":"./tags/不蒜子/index.html"},{"revision":"d86a574d538978b07ac9a89011e5c769","url":"./tags/二级/index.html"},{"revision":"81516b4fdd351f393993e7861a6a9b03","url":"./tags/黑苹果/index.html"},{"revision":"84f26282fb43c7da1f40500256b4b41d","url":"./tags/汇编语言/index.html"},{"revision":"a42014a44e8cfce4b4a9b1c90c11efec","url":"./tags/爬虫/index.html"},{"revision":"85d8b6e02a9409f7780bd8edbbc144cb","url":"./tags/软件/index.html"},{"revision":"36c75e0685a4010e74e298197fdde2e3","url":"./tags/图床/index.html"},{"revision":"7aeb251e1e849b614d24300888b75171","url":"./tags/中断/index.html"},{"revision":"1d4619ef4081e1a33ba3f1a64d457e21","url":"./tags/Github/index.html"},{"revision":"f6184e4fe90cd41429619aa419f91b3b","url":"./tags/index.html"},{"revision":"989ada56eba28dbaff58d602fe9f3db3","url":"./tags/jsdelivr/index.html"},{"revision":"a081fe6d670aec0514401808920e1c60","url":"./tags/m3u8/index.html"},{"revision":"d0550a0aa59a52035422d8b96615dd60","url":"./tags/macOS/index.html"},{"revision":"86285e238319af15ce476f8e894770bd","url":"./tags/Markdown/index.html"},{"revision":"81d6577f35915766bc78afaad4773af4","url":"./tags/OC/index.html"},{"revision":"e9356de74cee286abef88c8cb7259106","url":"./tags/OpenCore/index.html"},{"revision":"7b23fcef55405309e71f742aa9e366f5","url":"./tags/Python/index.html"},{"revision":"0d364460b85291ad6f28c13aebd3a2c0","url":"./tags/Scrapy/index.html"},{"revision":"9f8925dffdcc0c532e5bb48de0440060","url":"./tags/urllib/index.html"},{"revision":"91a4574278fd03e16856dc34d10ed62c","url":"./tags/VMware/index.html"},{"revision":"c2c9346b40f709b10a20f417ae89dbb1","url":"./tags/Windows/index.html"}], {
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
