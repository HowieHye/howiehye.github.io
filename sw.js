const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9b5d9458ee3704022d598c520bb93d5c","url":"./404.html"},{"revision":"c4c22dfcd10f1e9c8df3af251ad2dac5","url":"./about/index.html"},{"revision":"c9f2aa732a07a084e5835762c37842a2","url":"./archives/2020/02/index.html"},{"revision":"b1501fee9114d03afea3b5d4fdb14623","url":"./archives/2020/03/index.html"},{"revision":"60fafa0aacfeaf2c328c6844d2a57de7","url":"./archives/2020/06/index.html"},{"revision":"190354dc34fa7382e38c4c51d78fa488","url":"./archives/2020/07/index.html"},{"revision":"bfdd3660beb7f5b71ea11b8d766ebd63","url":"./archives/2020/08/index.html"},{"revision":"07083d0e20c1b9cf2029033893154492","url":"./archives/2020/11/index.html"},{"revision":"944c382584b13fccea1ae5277f898ecb","url":"./archives/2020/12/index.html"},{"revision":"86601323e05bd5ce1d3dbcfc3c7cefd0","url":"./archives/2020/index.html"},{"revision":"72fa3359b8749eae84a64b86f8ff52b0","url":"./archives/2021/03/index.html"},{"revision":"b3e6361495c507f81ba267da57eda511","url":"./archives/2021/04/index.html"},{"revision":"8c9a846b043b5518299ab71b68c699c8","url":"./archives/2021/index.html"},{"revision":"b7f7d919d2da38d7a9949985234e4a7f","url":"./archives/index.html"},{"revision":"f71d76bdc1769b3aa01012301c5dca07","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"81fbea61f4ecc2f417d9b0a378ecd7d2","url":"./bing/index.html"},{"revision":"70d74c9d8da4014fffe16ec77abadd39","url":"./categories/51单片机/index.html"},{"revision":"03dd140f5ad6a24fa916b0dcb9838834","url":"./categories/黑苹果/index.html"},{"revision":"7467465c877b1798c45810f5bf303282","url":"./categories/教程/index.html"},{"revision":"7adc53fc7ccdc0d9b8eadb5b2c66dbd0","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"ff81c1682371409985bc12842c3305e5","url":"./categories/软件/index.html"},{"revision":"8f1ab2d44326a3634015581b1e62dc10","url":"./categories/随笔/index.html"},{"revision":"e8f84a19d638d280100628109c0fabe1","url":"./categories/呓语/index.html"},{"revision":"b8a3030c096ac39473fa0573c2fc58c0","url":"./categories/index.html"},{"revision":"8991d2fcc69551d67260b7c17eff982d","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"b17ff5c0c1737811a923b52f41b24a65","url":"./categories/Python学习笔记/index.html"},{"revision":"9814d97f51bac69a6fefa5d310b14307","url":"./categories/Tensorflow笔记/index.html"},{"revision":"e10939a81aacb2d3b92801e0515b00af","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"726ecc725be45364ba62f65fa9bd344f","url":"./Gallery/index.html"},{"revision":"1b20097328bddfa3ff954302caabdb72","url":"./Gallery/wallpaper/index.html"},{"revision":"4e5b76bb9fd01168bde8f9f840b42f41","url":"./hackintosh/index.html"},{"revision":"23f218d8b9c2edf25caf8a2c46a59815","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"4f9e826e6c61ac2d4aad35e855552802","url":"./link/index.html"},{"revision":"12742246f705330ed6ea2dda882aeb43","url":"./love/food/index.html"},{"revision":"ac723a3d4f667f8df6a8f34ade22e9ed","url":"./love/index.html"},{"revision":"ee5e2ccfc59b6a2cb2a23575790e6387","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"8f611f6122f342632a9e978fc799c953","url":"./ncre-c/index.html"},{"revision":"2dbfcf39b8c665dc8f10c76b5ea75812","url":"./page/2/index.html"},{"revision":"9b03a9ffb46ad42cfc35f2a3e9c7a212","url":"./page/3/index.html"},{"revision":"55d8816a36ea5eb91d8c2b5cada5adc5","url":"./post/12136/index.html"},{"revision":"8d880d59550cabdabbe3090c7c558405","url":"./post/1490/index.html"},{"revision":"abc6573aa88872a1256433abbdb59b76","url":"./post/19561/index.html"},{"revision":"9811c6de53867fc0eb7ebb6d169517ea","url":"./post/28299/index.html"},{"revision":"89da2bbb3c659f36a0ff553184428a1a","url":"./post/30170/index.html"},{"revision":"b8085d402eef8d997e636dafeeee5579","url":"./post/34236/index.html"},{"revision":"3a33efc40f088993a927d2a9b283d594","url":"./post/36a1c976/index.html"},{"revision":"7a273af9f995d36ca38339b2768444e5","url":"./post/39520/index.html"},{"revision":"53c7467057bb3512a628e0b8f144c47d","url":"./post/39697/index.html"},{"revision":"0ebb738d866534aa4b7d438dff9d3158","url":"./post/44703/index.html"},{"revision":"c3c96078873cbc92c171544bdfda3143","url":"./post/497570a1/index.html"},{"revision":"dbb7e50ae0b37d2a616286a10c77da08","url":"./post/49f9/index.html"},{"revision":"a6c3d3c5f34bd4676e802d9fecd6078e","url":"./post/4a9c3af0/index.html"},{"revision":"af40c06191a377d4a716ca6ce2a3a085","url":"./post/4dd30b69/index.html"},{"revision":"98a68c3198d71b661363751538bc3b6b","url":"./post/5632/index.html"},{"revision":"6960457c28132c1748efc2b1acd30cee","url":"./post/62d3/index.html"},{"revision":"706de0719069f1ad4735c1f7c5f930ed","url":"./post/67f8/index.html"},{"revision":"7a9e2cfa9495fa4b8d290b05a7e795d8","url":"./post/68f544ac/index.html"},{"revision":"e50bf58abf12c5b861ae81f0af6437d1","url":"./post/7a13585/index.html"},{"revision":"6a38ee231452a8d400290ab260b1e900","url":"./post/7dc5e7b1/index.html"},{"revision":"6be3f812d3b631d9093b7dc43997e480","url":"./post/8251/index.html"},{"revision":"5f9e3ed5df8d7fcdbf04f21455266009","url":"./post/84b9/index.html"},{"revision":"1e03d8beee6d6c07258b5dda79a18be8","url":"./post/9ff9620/index.html"},{"revision":"586bf4dd40a011288cd35763e65a7d58","url":"./post/a423/index.html"},{"revision":"372108a3ea2d84339fddbde6eae709c1","url":"./post/f43a2906/index.html"},{"revision":"9ffccb4d5e8747047e5837ec9c533914","url":"./tags/51单片机/index.html"},{"revision":"a1865a80fe7888cf819599666a199c60","url":"./tags/博客/index.html"},{"revision":"cb68d182808140df126f433f74defb96","url":"./tags/博客统计插件/index.html"},{"revision":"826e6435da37fb0d54a1f932e4d7a4fe","url":"./tags/不蒜子/index.html"},{"revision":"408f747d4a2273e3ab5ed0aabc0266fd","url":"./tags/二级/index.html"},{"revision":"ed8c16550ca6a65b09c7b8f7d1365861","url":"./tags/黑苹果/index.html"},{"revision":"d69626d7943277c3d321d1005c675008","url":"./tags/汇编语言/index.html"},{"revision":"a2e31b95172418e358911f2368a8303a","url":"./tags/爬虫/index.html"},{"revision":"487b655ba6fb2aeafd0d2724d819bd98","url":"./tags/软件/index.html"},{"revision":"4962c41c4a4d539b4ba4ab43b0149b99","url":"./tags/图床/index.html"},{"revision":"6e3e50f0327514e48c94e030afd494dc","url":"./tags/中断/index.html"},{"revision":"c23f1415062eebd9160269914b9a9a4b","url":"./tags/Github/index.html"},{"revision":"28a81731a56e6fe66f1d62fd52c6dfcb","url":"./tags/index.html"},{"revision":"911910880b92bf7c56990d7bfa911bb7","url":"./tags/jsdelivr/index.html"},{"revision":"0d1cfa5c898f50f6b21c49c441bfd180","url":"./tags/m3u8/index.html"},{"revision":"d08484c1f6c5bbc761cdd0c80f004f57","url":"./tags/macOS/index.html"},{"revision":"444727f39aacaba44d6cea910a0f4893","url":"./tags/Markdown/index.html"},{"revision":"dd061fbed25528ba0f77a722424f271c","url":"./tags/OC/index.html"},{"revision":"59e1781bcc96c5dd8ab887ecb9d77a54","url":"./tags/OpenCore/index.html"},{"revision":"4fa0625fd292a5d990522e0fa467923c","url":"./tags/Python/index.html"},{"revision":"552eb654f5e49de5a274169a69b50bb1","url":"./tags/Scrapy/index.html"},{"revision":"fe8b3141d6d0230bd4fba4645696dbc8","url":"./tags/Tensorflow/index.html"},{"revision":"63be09f9e4599efecb7fcffc6ed7eff4","url":"./tags/urllib/index.html"},{"revision":"6fb6a2666077a6f1792f3189664d5b6c","url":"./tags/VMware/index.html"},{"revision":"8b7b76ac7d4e6a6b24cec962d4e94b82","url":"./tags/Windows/index.html"}], {
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
