const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e323474ed897ca5d4d506e0aacd6d302","url":"./404.html"},{"revision":"425518a1b8d95232ab28c9ffe93b1325","url":"./about/index.html"},{"revision":"91efdae555e8517171261f948263a71a","url":"./archives/2020/02/index.html"},{"revision":"357cdd81c4cf157d6d78c6a8c1a18427","url":"./archives/2020/03/index.html"},{"revision":"e37c208adae1e46b9c68d815303fac28","url":"./archives/2020/06/index.html"},{"revision":"44c8b89c199bacc38b4fbb4a27552966","url":"./archives/2020/07/index.html"},{"revision":"68ad57dfb62a2306757bfdb56fe78e7f","url":"./archives/2020/08/index.html"},{"revision":"765b479afe53df764151215e58c0f21c","url":"./archives/2020/11/index.html"},{"revision":"acbe874c871f62b7564956eae421216b","url":"./archives/2020/12/index.html"},{"revision":"efea5b1bceb4ef658c9e589176fb5954","url":"./archives/2020/index.html"},{"revision":"635e8ef062e0734b03bf4b4ac6e99a43","url":"./archives/2021/03/index.html"},{"revision":"ba8ef832b64bba02df73cc6ee3cf45a7","url":"./archives/2021/index.html"},{"revision":"dba923c0f01a01780b70c3b13669c892","url":"./archives/index.html"},{"revision":"ade68105ecafd51cbb151ddf213e26e2","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"39ba45ade61e3cd5b396aa688093ecb0","url":"./bing/index.html"},{"revision":"7f51974df9fc80874c0404eed0405539","url":"./categories/51单片机/index.html"},{"revision":"c34d9ca7b3cdd9719f4bed98beced30a","url":"./categories/黑苹果/index.html"},{"revision":"c953c3e99259aed2878858aeedd6bc0d","url":"./categories/教程/index.html"},{"revision":"3b57be15eb8f5db681397a06ab666f41","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"0f2f71b93da3321f6ef45cd8b5ba3032","url":"./categories/软件/index.html"},{"revision":"1db362731441991acfbc62bf0c2525c8","url":"./categories/随笔/index.html"},{"revision":"08df2d278c60ccfdfc745f739d3b3c01","url":"./categories/呓语/index.html"},{"revision":"73124de350fc05a9d2440a9228185dd5","url":"./categories/index.html"},{"revision":"304e2a5a1f19c47271d8d4ab8e52ed7d","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"60ba2d72376d4f075bcd6c1cd35baf79","url":"./categories/Python学习笔记/index.html"},{"revision":"45fe74cf5f6596dde52d122fe0e9e240","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"800c92b1ae3851296749257c052eb1f6","url":"./Gallery/index.html"},{"revision":"1adcd222a12415054884b7c662c2f99e","url":"./Gallery/wallpaper/index.html"},{"revision":"22a3f13fe17bf6a30cd7fbf9a9bb9a2d","url":"./hackintosh/index.html"},{"revision":"a13aa3c0e2da0a5720a289723745184a","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"50a563aba57a79dde05238c9b21079a0","url":"./link/index.html"},{"revision":"0b93316d92a54ca6dbc0cf9718d58762","url":"./love/food/index.html"},{"revision":"bda399a220b516ddf73e49b99fdbf36c","url":"./love/index.html"},{"revision":"cb7bf7a679fc146842766414b3bd942e","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"14496f83b0b8ed7f2d3744f38df4ac6d","url":"./ncre-c/index.html"},{"revision":"5c9ae3244c28d8fc7245941bd6503aaa","url":"./page/2/index.html"},{"revision":"8a9d52e02300b10bc0f885b0b86c72d0","url":"./page/3/index.html"},{"revision":"037713002156863bb35e20bc33786cce","url":"./post/12136/index.html"},{"revision":"1764310e214c8dcc1250b34c49bcebca","url":"./post/1490/index.html"},{"revision":"5cc912269689f803ffe7a895825a5d09","url":"./post/19561/index.html"},{"revision":"0188b6a88a28fb40cfea1499a508a138","url":"./post/28299/index.html"},{"revision":"118df1a3f2c348257d70fc222c317ce6","url":"./post/30170/index.html"},{"revision":"ff9cb7dc6814d10f4d7461823aeaae4a","url":"./post/34236/index.html"},{"revision":"687d98ba13d73d2009a2f8e2d546399f","url":"./post/36a1c976/index.html"},{"revision":"f623c48e096cfbed62fcad97444b7782","url":"./post/39520/index.html"},{"revision":"bc7371480e4bdbcf33e63908dd084feb","url":"./post/39697/index.html"},{"revision":"504631fb3a867e7e286802a2d2132d87","url":"./post/44703/index.html"},{"revision":"d181960620ddbf9600a5c195e04ecead","url":"./post/497570a1/index.html"},{"revision":"91486f40dba5a1dd6086ece3fb4a4fee","url":"./post/49f9/index.html"},{"revision":"b609fe4b566010672821dca4fb36fc14","url":"./post/4dd30b69/index.html"},{"revision":"245170061fe9845e3ddd9a83c6cf4f90","url":"./post/5632/index.html"},{"revision":"dd0b75e00b8b8cd5040a52cd25f2b895","url":"./post/62d3/index.html"},{"revision":"1ec50c954cd46d26d80c85ef5735d24e","url":"./post/67f8/index.html"},{"revision":"81d27e0a1bb853ff9e5393ce609c46bb","url":"./post/68f544ac/index.html"},{"revision":"c5717ef6e0170e34ed914088bfad3319","url":"./post/7a13585/index.html"},{"revision":"794a8aa3cb6e1945592080a170f02059","url":"./post/7dc5e7b1/index.html"},{"revision":"4afe8fb9363984cfc4e09beb5e07e5b2","url":"./post/8251/index.html"},{"revision":"a2fab1bb66804c606f1b1c723d1d0088","url":"./post/84b9/index.html"},{"revision":"f4abdc9b8113a42c4f5903148ef707c4","url":"./post/9ff9620/index.html"},{"revision":"db22fb05ef6744ff0635c7f857ab4aaa","url":"./post/a423/index.html"},{"revision":"1265e9b3cd1964c1c0bcb11d9735faa7","url":"./post/f43a2906/index.html"},{"revision":"616b477020d943a8a1adbd638a19bed2","url":"./tags/51单片机/index.html"},{"revision":"ede440a34a75be4731572ca8f45a9e6b","url":"./tags/博客/index.html"},{"revision":"804a71718687f83157da0f511e7b000e","url":"./tags/博客统计插件/index.html"},{"revision":"f0f90bee8424160e50aead4dd70d33ea","url":"./tags/不蒜子/index.html"},{"revision":"3f28bd778a1f92b61b105af83f92d177","url":"./tags/二级/index.html"},{"revision":"6598a3751d73a402196b946bd821909d","url":"./tags/黑苹果/index.html"},{"revision":"2e6f5a9a14c45e130813740b80ff5e2f","url":"./tags/汇编语言/index.html"},{"revision":"896d1c51c570fdae725cc2bdc3f5c4c7","url":"./tags/爬虫/index.html"},{"revision":"9e91d2cd94417e688ac95a7292df8d88","url":"./tags/软件/index.html"},{"revision":"2763f6f4a0e7439570e5ae57abe8ee73","url":"./tags/图床/index.html"},{"revision":"7aab82d5b103c10747ecf9f90cd2c625","url":"./tags/中断/index.html"},{"revision":"b746412716a44987142338b7f09a30b6","url":"./tags/Github/index.html"},{"revision":"09622c5d0151b12e6a020d7f3c66d52c","url":"./tags/index.html"},{"revision":"ce4eae89dc0e82661b68bd7df1bf8deb","url":"./tags/jsdelivr/index.html"},{"revision":"a1ce4b9eaa932417d35e1dc414676c40","url":"./tags/m3u8/index.html"},{"revision":"4ea5aa768485dfc98145bea1a8791e40","url":"./tags/macOS/index.html"},{"revision":"1f99f2b32c843483d3c545166deea380","url":"./tags/Markdown/index.html"},{"revision":"46497ca65520dff8ce2fec3987c50985","url":"./tags/OC/index.html"},{"revision":"30e49ee005fef4d9e3ff4f8c9b40bf37","url":"./tags/OpenCore/index.html"},{"revision":"970990149640cd1fbc5552dbbe7d9967","url":"./tags/Python/index.html"},{"revision":"e11afaeacb6a8de864017613f0cfaff6","url":"./tags/Scrapy/index.html"},{"revision":"4d63dc5370919182c610cc8f35c06d4c","url":"./tags/urllib/index.html"},{"revision":"bdb10831b5e09aa3c2c67bf53828fb23","url":"./tags/VMware/index.html"},{"revision":"1aadaace7bd9856499fe788a6f49e7ef","url":"./tags/Windows/index.html"}], {
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
