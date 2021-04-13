const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a2405719ce4c428b2e660cca6bd3b288","url":"./404.html"},{"revision":"157c8a3e1e99f9061b60aeee2b662463","url":"./about/index.html"},{"revision":"a9d63e5b72a125015fdb41b93a798c60","url":"./archives/2020/02/index.html"},{"revision":"e877b63b8569246f3ab80b4b786a2df7","url":"./archives/2020/03/index.html"},{"revision":"1edf26729b3d3119e8bd82c0237579f9","url":"./archives/2020/06/index.html"},{"revision":"70f28cf89938c732e79c4d7ae1bc5405","url":"./archives/2020/07/index.html"},{"revision":"4cc440c1186df234d2f803b92056aa32","url":"./archives/2020/08/index.html"},{"revision":"11f05d7ec0c3eb348114778b78b3ef73","url":"./archives/2020/11/index.html"},{"revision":"4da640f0203002a5fd06e04223ab9c7d","url":"./archives/2020/12/index.html"},{"revision":"4431c779d332224657aac50a577bcade","url":"./archives/2020/index.html"},{"revision":"096983162935f728641f3ac30ee7ad8c","url":"./archives/2021/03/index.html"},{"revision":"0a3403b1f0644cdfd0326386697019d0","url":"./archives/2021/index.html"},{"revision":"0e3029897dff2278838349118919fc4f","url":"./archives/index.html"},{"revision":"7a6390e24836413757b6de689727c81b","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"49791f0ac7a5a2df96f117507a3fe6aa","url":"./bing/index.html"},{"revision":"dbd4d0253f2f076b42225897a6700efe","url":"./categories/51单片机/index.html"},{"revision":"8982fdb03a02c874a1d34776f044708f","url":"./categories/黑苹果/index.html"},{"revision":"5986d6f741d022e1843610292584c4d8","url":"./categories/教程/index.html"},{"revision":"011ecce2e718bbc878e90ca130e51184","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"65bccce3f402547d92261aab1f5d3a58","url":"./categories/软件/index.html"},{"revision":"1878807c623f3b2e80188749f78ebb0f","url":"./categories/随笔/index.html"},{"revision":"0b8cd0404d0635882f68f916bef374ce","url":"./categories/呓语/index.html"},{"revision":"a0ff05b2263d678ead138347bc6f71c1","url":"./categories/index.html"},{"revision":"bb0ebfb476e7f5dc4fb541e58e3180e8","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"b75c0a64c9569777147210dc86a78bab","url":"./categories/Python学习笔记/index.html"},{"revision":"45fe74cf5f6596dde52d122fe0e9e240","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b78f2b34c6092219a598375e93c491b7","url":"./Gallery/index.html"},{"revision":"9e44029de2a1663e477b327f1a864f5d","url":"./Gallery/wallpaper/index.html"},{"revision":"6b806d4d8edde07a1b0ffb9718170050","url":"./hackintosh/index.html"},{"revision":"34d9791a984579de310f8b3e336be4b3","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"4edcd52c0259a5a2069d488f9a13a34b","url":"./link/index.html"},{"revision":"e17a651afd18f37a1a1490ff03341c9c","url":"./love/food/index.html"},{"revision":"871078747d6e78d0a3806c376d6fd932","url":"./love/index.html"},{"revision":"2c61c88d9e3207758f4497a2a7b73a1e","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"9e9ced2439468f2d4e03434a52aa03d2","url":"./ncre-c/index.html"},{"revision":"0fe5f9d7a5150c145bb97d82050aed28","url":"./page/2/index.html"},{"revision":"4f64f59712f6fb83c45c213de02154ea","url":"./page/3/index.html"},{"revision":"f9e856db5716bb207c5fea0e37c67b23","url":"./post/12136/index.html"},{"revision":"ad9d232f7dbc60f44f15f3b2562465fd","url":"./post/1490/index.html"},{"revision":"d4f81bf65ceb47c570013a366221498d","url":"./post/19561/index.html"},{"revision":"b30b8d65c11e9bd5b14938feb13e8777","url":"./post/28299/index.html"},{"revision":"ed2ec3368f9069cf48faa55ab60e72c0","url":"./post/30170/index.html"},{"revision":"96df235ad702fe86d09f065744e4ee62","url":"./post/34236/index.html"},{"revision":"ded8e93d374e26a5224dc3831e82f536","url":"./post/36a1c976/index.html"},{"revision":"5df41b7cf9945a48ab6f470d063973e8","url":"./post/39520/index.html"},{"revision":"20e537aaa6c1efa1030d1f156900af31","url":"./post/39697/index.html"},{"revision":"dbaab8b2c31bffde167ae2463ddd455e","url":"./post/44703/index.html"},{"revision":"da298069a401c40562e571d87c7452a9","url":"./post/497570a1/index.html"},{"revision":"b896501aae5c9e48c50248840ff38b98","url":"./post/49f9/index.html"},{"revision":"db317c01f690352189e56566898960d4","url":"./post/4dd30b69/index.html"},{"revision":"0ecc6813e120292e84f4dae0ccc954a0","url":"./post/5632/index.html"},{"revision":"b6567e7d01589a490a4b0ba115a8705d","url":"./post/62d3/index.html"},{"revision":"fc044e4b29d833c9516bf03268c64788","url":"./post/67f8/index.html"},{"revision":"e3b8ac22e3bf4eb6307362c320c3750f","url":"./post/68f544ac/index.html"},{"revision":"efb270264b96286bf8c0d0b9c0a26681","url":"./post/7a13585/index.html"},{"revision":"12924969a0be3d49f9e7e64a625f196e","url":"./post/7dc5e7b1/index.html"},{"revision":"6cdb8e7c3d5b334d731d78f53c16a7b0","url":"./post/8251/index.html"},{"revision":"1c5282dc6544bed9155cc6f1e4cc73e0","url":"./post/84b9/index.html"},{"revision":"b5a094180275257e7c47b22a533e0795","url":"./post/9ff9620/index.html"},{"revision":"1c90eebe083297e2e90123e23e126b85","url":"./post/a423/index.html"},{"revision":"8b11476062ed0ac69d7a82b30504241c","url":"./post/f43a2906/index.html"},{"revision":"3c50e4714dadf9acb50bd57a536bb588","url":"./tags/51单片机/index.html"},{"revision":"f375b7ed6dd99e1596525dd55708706b","url":"./tags/博客/index.html"},{"revision":"c871278b584fb6e5e03d7ddeacd0cdcd","url":"./tags/博客统计插件/index.html"},{"revision":"1a8870e7f07bf9917bb9dc627ef84c0a","url":"./tags/不蒜子/index.html"},{"revision":"1c53feb0e57aed2ccea7e247bfba2212","url":"./tags/二级/index.html"},{"revision":"e95d7d8ae95996a9b731e7ceb8170b72","url":"./tags/黑苹果/index.html"},{"revision":"03e4134c61b84fd1da476534cda4afec","url":"./tags/汇编语言/index.html"},{"revision":"21c1e1be72fc8ea966563940f3f5704a","url":"./tags/爬虫/index.html"},{"revision":"89c9d757bec1e461a5cdcbbb4f796741","url":"./tags/软件/index.html"},{"revision":"315afeb9a18e685bd503e75f0a30bc48","url":"./tags/图床/index.html"},{"revision":"b308814d88a0eedd274dca976f112b87","url":"./tags/中断/index.html"},{"revision":"3e02300379b47c78917ca43560920044","url":"./tags/Github/index.html"},{"revision":"8dac0dc81399a6fcbe99762b1a2d2e88","url":"./tags/index.html"},{"revision":"79bc56353666ec32dceadb2d211557ca","url":"./tags/jsdelivr/index.html"},{"revision":"77772ba6ecfa85835f71d25890c6e1da","url":"./tags/m3u8/index.html"},{"revision":"25abd536e1c1d55c2d962085ca9b7513","url":"./tags/macOS/index.html"},{"revision":"ef6f6cc0818fce62d6a79581c5651748","url":"./tags/Markdown/index.html"},{"revision":"210ccb48cfe292c836412d031fac3500","url":"./tags/OC/index.html"},{"revision":"b6c0ea20cdce75f0c4f2333ffe921abc","url":"./tags/OpenCore/index.html"},{"revision":"114e7e6d84f9a5913efff15814f9ec95","url":"./tags/Python/index.html"},{"revision":"def8c5d74925bf275e663b13b6f9cf41","url":"./tags/Scrapy/index.html"},{"revision":"95ba58dffb34900de29764e804fa125e","url":"./tags/urllib/index.html"},{"revision":"e41ee15481d4ead6d7b6ed07e7a4ca76","url":"./tags/VMware/index.html"},{"revision":"1089d45fa226895b5a3af7fcc386f1f4","url":"./tags/Windows/index.html"}], {
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
