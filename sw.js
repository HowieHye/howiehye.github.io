const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"590d6408a3be64c7ff714c15cc5a79d5","url":"./404.html"},{"revision":"fdd265ee57eb15fb71884561c1c9d6af","url":"./about/index.html"},{"revision":"cce6ab3c6c6227f456886da3c5f43d7a","url":"./archives/2020/02/index.html"},{"revision":"c9cc8e12d631e37a52d87933c2f90d75","url":"./archives/2020/03/index.html"},{"revision":"2adf8e7ead63bd4db7c7a1ce8ca7a8a7","url":"./archives/2020/06/index.html"},{"revision":"46afd367a40c50742c88220a77fe3742","url":"./archives/2020/07/index.html"},{"revision":"1c6936832c6c06bd281e743ecbd69882","url":"./archives/2020/08/index.html"},{"revision":"d93a533f11acea409cd83f15bb5bc5e6","url":"./archives/2020/11/index.html"},{"revision":"7864ad7389b37c79b080569a9a5ee098","url":"./archives/2020/12/index.html"},{"revision":"4c354ca65d6f611e844483c7dc429526","url":"./archives/2020/index.html"},{"revision":"815af426d2de2eb5f0d1ff370ee6d7c8","url":"./archives/2021/03/index.html"},{"revision":"ea657d689c91c7e54ee93c30130eaebe","url":"./archives/2021/04/index.html"},{"revision":"13ec868d442e9fb2c741f9316133bb90","url":"./archives/2021/06/index.html"},{"revision":"e9eaa10bad0b7ee5a852f39b254e4226","url":"./archives/2021/index.html"},{"revision":"7152e3a83968649dd7ef5e878dfdf02d","url":"./archives/index.html"},{"revision":"bd91322f2db5ec241dfae55bd5205df4","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"f78162e130998b10e9f5a724a62c448f","url":"./bing/index.html"},{"revision":"cc1b40e8449e5054b3e7d2c490edf50b","url":"./categories/51单片机/index.html"},{"revision":"78736b739a5cad55006629dfbabb0abb","url":"./categories/黑苹果/index.html"},{"revision":"44ec04f731b6401e86dfc68c0655b6fe","url":"./categories/教程/index.html"},{"revision":"97a8cd8c4afaad582270533ebc90f6ae","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"7436dfcd7d72d98228becdaffdc849cd","url":"./categories/软件/index.html"},{"revision":"dd5b2a49e966cf10401a8cd47f3b6195","url":"./categories/随笔/index.html"},{"revision":"f0c148ad6dddbae22b92b3d5112c4cb2","url":"./categories/呓语/index.html"},{"revision":"866ceb5ef216ebe4dd175f542f0b4bdb","url":"./categories/index.html"},{"revision":"2dc58eecc8cf72af76a028568560b1a7","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"d2fc5743c4d211337b98d0b45ac81629","url":"./categories/Python学习笔记/index.html"},{"revision":"c86a5018c989ac9e1c07a9b511da3650","url":"./categories/Tensorflow笔记/index.html"},{"revision":"9c60d0e4fb86643726a523beac7e0b9a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"56a5f8b819426a9d6a877f50abd9d57b","url":"./Gallery/index.html"},{"revision":"eee7ffde436688e712c83506ed7baa82","url":"./Gallery/wallpaper/index.html"},{"revision":"1c6c51495cf43089b45e72d3507f03b8","url":"./hackintosh/index.html"},{"revision":"b76cd9c0ef2f1b5214d911e90a1bd574","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"db98d04ad0df9aad3fda7ebcaf95e1bf","url":"./link/index.html"},{"revision":"1544008d221b46580dd8117cbb9d6e25","url":"./love/food/index.html"},{"revision":"ed1685642bc04f59831540e961d0e3ec","url":"./love/index.html"},{"revision":"c3e4b125f6b8bdcfbb05c32bc626ed5d","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"77c1d6730b88f5b5159d2ee83f4912bd","url":"./ncre-c/index.html"},{"revision":"fa65b74447a0688864e02b8d7e7a93be","url":"./page/2/index.html"},{"revision":"37cf082da523f41015454314a3c92e38","url":"./page/3/index.html"},{"revision":"00a54b5314e12663d1f671009961003c","url":"./post/12136/index.html"},{"revision":"be549139d79c99279a3ff5ede1d58e7d","url":"./post/1490/index.html"},{"revision":"c2ae0a0ec4d5ea759edf874e7275aa13","url":"./post/19561/index.html"},{"revision":"e705de417530e650fa2b3682f3405292","url":"./post/28299/index.html"},{"revision":"d15118beada7890f84573cce5f3d87ee","url":"./post/30170/index.html"},{"revision":"8c35c472ce3ce4816fe37d0274b278f7","url":"./post/34236/index.html"},{"revision":"7e07730f86af0e5a449a81a8b0bc47ae","url":"./post/36a1c976/index.html"},{"revision":"6b40a74c4ac94dcc4fea04b83792e4f5","url":"./post/39520/index.html"},{"revision":"904eb446c23df225341e48b26b60d859","url":"./post/39697/index.html"},{"revision":"79e0338da1b101143d8ea0e2a6c84bc3","url":"./post/44703/index.html"},{"revision":"7de01253771f96b42a74001d772466b5","url":"./post/45b2259a/index.html"},{"revision":"e2753d750d1093aa798a0afa0db502f0","url":"./post/497570a1/index.html"},{"revision":"74bbf679cb7383cbc10d03dd543c482e","url":"./post/49f9/index.html"},{"revision":"7241f034067f657119d2d62e8839ba89","url":"./post/4a9c3af0/index.html"},{"revision":"7dae990aab7db637c9d931bc4d21804f","url":"./post/4dd30b69/index.html"},{"revision":"fa24db18abbed24b828ae4ef61bd041e","url":"./post/5632/index.html"},{"revision":"68d5a68c8a1a280175854799d99a0a6e","url":"./post/62d3/index.html"},{"revision":"f021eccc0a887d895708a1b7e3ca046e","url":"./post/67f8/index.html"},{"revision":"4c98124a6d70d0b8cf124d5d2d5c240a","url":"./post/68f544ac/index.html"},{"revision":"f8d5f34b1b0a7378a297bc844a7f1b5c","url":"./post/7a13585/index.html"},{"revision":"66fd806b0f4dc427382bce1719cb84ab","url":"./post/7dc5e7b1/index.html"},{"revision":"072fc331aea97ee4bd45c454cc2c2d8d","url":"./post/8251/index.html"},{"revision":"abda7805a814459961e74833f066eb58","url":"./post/84b9/index.html"},{"revision":"c80c157647c7ea5692da56c314e2c5df","url":"./post/9ff9620/index.html"},{"revision":"42dcf85cd19c4fcd223ffec99fd57a40","url":"./post/a423/index.html"},{"revision":"27e46088c60cda91a09eb9412e44a578","url":"./post/f43a2906/index.html"},{"revision":"8c7b8e8f26c96323092bb958434dbc05","url":"./tags/51单片机/index.html"},{"revision":"24e96e8485f929483b9e9f75e6a7062b","url":"./tags/博客/index.html"},{"revision":"0c20e808202b501797cefc5bbc89d492","url":"./tags/博客统计插件/index.html"},{"revision":"b0cfc324e414a7b0887c9163925bd4b8","url":"./tags/不蒜子/index.html"},{"revision":"2f04922eff5a930c3f649770e3089e7d","url":"./tags/二级/index.html"},{"revision":"011fadd30bc2d8e4725faf425b8a9ba6","url":"./tags/黑苹果/index.html"},{"revision":"f8154e3716505b0a00d8c5d707992da7","url":"./tags/汇编语言/index.html"},{"revision":"8c95b47105a7f7bf04957169abf05957","url":"./tags/爬虫/index.html"},{"revision":"23b649b7a1dd56541dbccff18b21b569","url":"./tags/软件/index.html"},{"revision":"06162199ab510fde3677f9c1d0f67e5a","url":"./tags/图床/index.html"},{"revision":"4c2b205ce7354f56e90a5b029b479671","url":"./tags/中断/index.html"},{"revision":"33d267d9d7b9aa965fa1843242f18c10","url":"./tags/Github/index.html"},{"revision":"7b561b854db5c0c5d7f2b7475c044bdc","url":"./tags/index.html"},{"revision":"d93b6e9dbc4ad112f1ea9a31206d323c","url":"./tags/jsdelivr/index.html"},{"revision":"f03aebc8f35d8ed0c06c62eb7f3502f0","url":"./tags/m3u8/index.html"},{"revision":"2c65583a619b80f7bf0a14f3b2b7eea6","url":"./tags/macOS/index.html"},{"revision":"3a81e7c16c43ed3c6f0934cf5d0471bd","url":"./tags/Markdown/index.html"},{"revision":"75e3fd7c41d18f1b201ce7f860bd9718","url":"./tags/OC/index.html"},{"revision":"51a8b01094b94ca3edfbfbc6d325c531","url":"./tags/OpenCore/index.html"},{"revision":"c9054237a62b53931866e981fa8dad0e","url":"./tags/Python/index.html"},{"revision":"f5af52d1f5c179dc0d3070cc4d3efc51","url":"./tags/Requests/index.html"},{"revision":"170232db3937a9af88a5c9eba5d15428","url":"./tags/Scrapy/index.html"},{"revision":"3be12b435d616aa57acf4052b3e09be1","url":"./tags/Tensorflow/index.html"},{"revision":"5a508bb59d2b8f80f74c55b3f4c70919","url":"./tags/urllib/index.html"},{"revision":"4a3dd822ad726d86430e7e723651ecd4","url":"./tags/VMware/index.html"},{"revision":"1da8d8bc6ae27f33ccd835fab3464c96","url":"./tags/Windows/index.html"}], {
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
