const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2df9e79b10577c701c148892f1bbbe93","url":"./404.html"},{"revision":"80c58d1d103e29e0a52196a8c564095f","url":"./about/index.html"},{"revision":"ad65d7aa6fbea4d8ed3296d6be40bdee","url":"./archives/2020/02/index.html"},{"revision":"2b7a3958ac65d4b3f5ae37fa9c97abeb","url":"./archives/2020/03/index.html"},{"revision":"3835e698aa415e472a58f667b3840bcb","url":"./archives/2020/06/index.html"},{"revision":"834c4e5222bfa89cbc60cb234408cdbb","url":"./archives/2020/07/index.html"},{"revision":"44e9a88154b4005fe39653a26040f710","url":"./archives/2020/08/index.html"},{"revision":"0b58ff784211d5669d0db7f7a01fa49b","url":"./archives/2020/11/index.html"},{"revision":"c3e1ed8b386654cd1c71859658df8133","url":"./archives/2020/12/index.html"},{"revision":"173b6a8b8cab351a6a5194d5cbbc9444","url":"./archives/2020/index.html"},{"revision":"d8339b0e769d10400cb8b1e9d412ed34","url":"./archives/2021/03/index.html"},{"revision":"2f5442e6dc03f3f6d36e3c22f97481b4","url":"./archives/2021/index.html"},{"revision":"e170665faf7a864fe6d49ae4b8a938a3","url":"./archives/index.html"},{"revision":"ade68105ecafd51cbb151ddf213e26e2","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"39ba45ade61e3cd5b396aa688093ecb0","url":"./bing/index.html"},{"revision":"0aa65d23f687390c0ffe275dfb00d1dc","url":"./categories/51单片机/index.html"},{"revision":"82bacefab3b5b86b9721fbb85234c4b1","url":"./categories/黑苹果/index.html"},{"revision":"0296a7437b8c0773401b82dac02e1060","url":"./categories/教程/index.html"},{"revision":"a1faff741e34073728595fc7a7738c09","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"d6f676850a56d561ee35bd55e80996e4","url":"./categories/软件/index.html"},{"revision":"d59760177755991065bc7df744d90ca9","url":"./categories/随笔/index.html"},{"revision":"2c5db03dea3463e568914da34c618470","url":"./categories/呓语/index.html"},{"revision":"cf2985f2911b3d703aeda4e26a6b9c2d","url":"./categories/index.html"},{"revision":"f094460028a7dfc8f55cdf233c030d93","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"7f8d9767f2114717965e790f686861d5","url":"./categories/Python学习笔记/index.html"},{"revision":"45fe74cf5f6596dde52d122fe0e9e240","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fc39420f9c57867f82806c391c8ada37","url":"./Gallery/index.html"},{"revision":"f62006467a36a8535b9ea9bfe0f86f86","url":"./Gallery/wallpaper/index.html"},{"revision":"96b9f3ef86eb635731600fb654f8a54d","url":"./hackintosh/index.html"},{"revision":"dbb0b15c104a95ea46bb98fae88b8116","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"b0c02e7e6c1e151cf8e54a05fc383e10","url":"./link/index.html"},{"revision":"5eadfee64729b53eb3569253954a0631","url":"./love/food/index.html"},{"revision":"29968269bc4cec5a6b38c643a54ea447","url":"./love/index.html"},{"revision":"8161aedabc0c2774f1164ed1a3f1f2ff","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"1df95d9d98fb8766d4c98b539a22752d","url":"./ncre-c/index.html"},{"revision":"5665c7b241a8336ce063f0567c777918","url":"./page/2/index.html"},{"revision":"cfb471c0f1e5f6d31e900dbf336b10ed","url":"./page/3/index.html"},{"revision":"143842c4b4cb6e5c631d38e70aaf3ccf","url":"./post/12136/index.html"},{"revision":"78f60a5342e410f0b9cff8a08a93ca50","url":"./post/1490/index.html"},{"revision":"636d5297514ef44c654683eb46095b13","url":"./post/19561/index.html"},{"revision":"8dbe5a169a137af7a272872f86efefea","url":"./post/28299/index.html"},{"revision":"b6aa0bc5f8c139e6b9afcf07f4368d53","url":"./post/30170/index.html"},{"revision":"8316880ccc23c32427b910896f34d1c0","url":"./post/34236/index.html"},{"revision":"ee273bf8a6c39e28ae861df92440f8ce","url":"./post/36a1c976/index.html"},{"revision":"5fe283e35ee5babfc6e760cb5addeb46","url":"./post/39520/index.html"},{"revision":"c534be8d123e982331faf55a75778334","url":"./post/39697/index.html"},{"revision":"b68d253fdfaff4f9c1642cc58c3fcec3","url":"./post/44703/index.html"},{"revision":"2c82a730dca301becfa45cc13a0fa73b","url":"./post/497570a1/index.html"},{"revision":"27a22f3d8a003830b36d9d0a08fe180f","url":"./post/49f9/index.html"},{"revision":"fe747b010037cab1ffff92da2df362d5","url":"./post/4dd30b69/index.html"},{"revision":"8a980436774948a0f601e824450db9dc","url":"./post/5632/index.html"},{"revision":"e0d7a5badbd683de4c16dfb136b49126","url":"./post/62d3/index.html"},{"revision":"d33a71aca75f7fd537ae56b03a9fc2e1","url":"./post/67f8/index.html"},{"revision":"1ddd0700126acb331a7c60dabf49bc35","url":"./post/68f544ac/index.html"},{"revision":"0c650a4ae4fced9202ade1685d648a79","url":"./post/7a13585/index.html"},{"revision":"a872b46765e6b6da986de07fad199c31","url":"./post/7dc5e7b1/index.html"},{"revision":"bc0d69627806eb424ff82a0247332c8b","url":"./post/8251/index.html"},{"revision":"cd8a0d71ad8db8a4c546b5dc5b80d43f","url":"./post/84b9/index.html"},{"revision":"cb35d88a41def1c4517eaf1306929286","url":"./post/9ff9620/index.html"},{"revision":"0a44d84ebcedd13532683c7479b1153e","url":"./post/a423/index.html"},{"revision":"5a1e70fabb6b6447e9c9383eb9b9cc84","url":"./post/f43a2906/index.html"},{"revision":"1ed2441d9c34ef4593996e5fbea8dd0d","url":"./tags/51单片机/index.html"},{"revision":"66fb3900e804bdc9412d3c247459584f","url":"./tags/博客/index.html"},{"revision":"6ffbb0b4fe5493632f6203ddeaa78dc0","url":"./tags/博客统计插件/index.html"},{"revision":"c5a15b05b840dc3c40dbedd9f2cad3cf","url":"./tags/不蒜子/index.html"},{"revision":"39e04dadd90274f03eaa18984ef80fb3","url":"./tags/二级/index.html"},{"revision":"193680e55c9c0cdfb42dbb365f493fd0","url":"./tags/黑苹果/index.html"},{"revision":"55d3759013f15475b1b11834b7550a40","url":"./tags/汇编语言/index.html"},{"revision":"f82ebf87fc881c57b7a02a9823566ebd","url":"./tags/爬虫/index.html"},{"revision":"0760fa45851339f98003fe117ec900f3","url":"./tags/软件/index.html"},{"revision":"92bddb910311b1f2c9896cc1fc105765","url":"./tags/图床/index.html"},{"revision":"4e9dfcfd6df8565e38f7477f0f6e454b","url":"./tags/中断/index.html"},{"revision":"6af1b0b9e72b9d775aa95cc2b9660935","url":"./tags/Github/index.html"},{"revision":"0664ee66bbdc8fa496fb3e187bca7387","url":"./tags/index.html"},{"revision":"baaad311bd12035e94388c00419333f9","url":"./tags/jsdelivr/index.html"},{"revision":"704f7627e3e4b86b58486913f081681f","url":"./tags/m3u8/index.html"},{"revision":"e1273d0b7daf74ee081e6524f19d532e","url":"./tags/macOS/index.html"},{"revision":"61fda904c7605fb72d8e7857e6d9dd87","url":"./tags/Markdown/index.html"},{"revision":"122e4a043ff412f18f6df3571012efd9","url":"./tags/OC/index.html"},{"revision":"d71ba7067cc9a3d412d394f14b32a20d","url":"./tags/OpenCore/index.html"},{"revision":"8aa7f799fbad5381d3132dd29563e839","url":"./tags/Python/index.html"},{"revision":"741f48cd6c046c0d8a379da5bf415aa3","url":"./tags/Scrapy/index.html"},{"revision":"8e4c596e2eec66323c9fa7b1c03c63bb","url":"./tags/urllib/index.html"},{"revision":"159da6bab9b1f9ea9d20dbef957792c7","url":"./tags/VMware/index.html"},{"revision":"443f142b502aab1ba18162b17829f3b2","url":"./tags/Windows/index.html"}], {
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
