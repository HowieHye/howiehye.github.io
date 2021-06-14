const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"689728f44d62b165b24535f9144ddff7","url":"./404.html"},{"revision":"46a01cd54a630ba679a053a9121e9e7f","url":"./about/index.html"},{"revision":"7545f6402465b09a55c2f12882b8ea73","url":"./archives/2020/02/index.html"},{"revision":"02dd5eed2248d7b6da9c1f3b292af92c","url":"./archives/2020/03/index.html"},{"revision":"6cc34828c5c17a0af61c19a794851e7a","url":"./archives/2020/06/index.html"},{"revision":"ee1c0508b52e8392833a003577e28444","url":"./archives/2020/07/index.html"},{"revision":"53272510de2efdea31a298f7aaa939fa","url":"./archives/2020/08/index.html"},{"revision":"093c583b27a1e6c742477b9c79cd2089","url":"./archives/2020/11/index.html"},{"revision":"4a1198b2235aa09f21d72b42dab1c049","url":"./archives/2020/12/index.html"},{"revision":"d25b6426f7d1e7829be59fee54784a4c","url":"./archives/2020/index.html"},{"revision":"aac4568776e5e971c4d27adc63ba5cb3","url":"./archives/2021/03/index.html"},{"revision":"7e35214ae396c24e6e7b16d59360db9c","url":"./archives/2021/04/index.html"},{"revision":"439cd792c66d614bd64bb33045c659da","url":"./archives/2021/06/index.html"},{"revision":"e444e5e8b5a7d76cc3054dc90d61b329","url":"./archives/2021/index.html"},{"revision":"fc7e46fb471badb5c87d84eaf3bcceee","url":"./archives/index.html"},{"revision":"b2776d8691acb3962b56aa3783c64c9c","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"646dd0ccd7b8adf6a05bb3f68bf63797","url":"./bing/index.html"},{"revision":"a07cbbea8417fe8d08f5467085ffaa84","url":"./categories/51单片机/index.html"},{"revision":"a143b47ec13585fc455b50bb6cffb1ec","url":"./categories/黑苹果/index.html"},{"revision":"ac5b5082a0553b923ce2739952189e1f","url":"./categories/教程/index.html"},{"revision":"d7338d774bcd6757a6d2a35f8be4fbd3","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"6599f12bab612838a8a63db3801755ca","url":"./categories/软件/index.html"},{"revision":"940b5e64a789923ff08ea1cf79df967f","url":"./categories/随笔/index.html"},{"revision":"ac9f69ef06f97b79c796459960fc6141","url":"./categories/呓语/index.html"},{"revision":"c7f5e75953a914177a60dfdb10398a6c","url":"./categories/index.html"},{"revision":"9957a23605b164c7c6e4d4c674b89d3d","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"a3853fc67ba6bed1f392098f0c180aee","url":"./categories/Python学习笔记/index.html"},{"revision":"3c59675707c34261a9fd3d524c593df2","url":"./categories/Tensorflow笔记/index.html"},{"revision":"e10939a81aacb2d3b92801e0515b00af","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"391c0f445f8b0a5feb25e44f3188a926","url":"./Gallery/index.html"},{"revision":"d5e3b2e908efef601b0d8dba444e2b3a","url":"./Gallery/wallpaper/index.html"},{"revision":"8f95597905b6cdcfa23d76c3f231b15f","url":"./hackintosh/index.html"},{"revision":"57fe5ccfcede3cfc92f58e5c12d5b226","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"fa419814125ee0d6df404401952e55e0","url":"./link/index.html"},{"revision":"98d42dff347f336c5dad4bfecfe52b0c","url":"./love/food/index.html"},{"revision":"d96c7d86f46d6060bbdd6b1a04816c22","url":"./love/index.html"},{"revision":"e49a9aca8d32415294d3f8c41392ed0e","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"672423cefb3a63eb399952bf8694d231","url":"./ncre-c/index.html"},{"revision":"dc2473c26b4504555ff4228b74066099","url":"./page/2/index.html"},{"revision":"967e89d15515d1e21131f77668c0c182","url":"./page/3/index.html"},{"revision":"5ffdef39d71e629508b21c6ec25816f5","url":"./post/12136/index.html"},{"revision":"c62fe4be61fa3516ac801aba9eca8bd8","url":"./post/1490/index.html"},{"revision":"f297c11c0ca98718bd04215451b66667","url":"./post/19561/index.html"},{"revision":"b6280c65a4dcc2039d3893ac8e028f24","url":"./post/28299/index.html"},{"revision":"1c47e3eb0cba74977c1adafd3e566ae5","url":"./post/30170/index.html"},{"revision":"6909a185188d7fec3f2d5ab889d8807d","url":"./post/34236/index.html"},{"revision":"d2e18437f943c2819f6878d2f7f798a1","url":"./post/36a1c976/index.html"},{"revision":"059e53dc318bcd0c687e8d07dd94fe52","url":"./post/39520/index.html"},{"revision":"0a6663a310fb80e325537946cf0f1ee7","url":"./post/39697/index.html"},{"revision":"d352a64b9ca0f02f7b58d2170942c545","url":"./post/44703/index.html"},{"revision":"daf257c50e544d01530d255219891f7c","url":"./post/45b2259a/index.html"},{"revision":"dcbe2e1adf284841f43fb3573f848d33","url":"./post/497570a1/index.html"},{"revision":"5765c4faf974bbb511c2bdb25fc1a02d","url":"./post/49f9/index.html"},{"revision":"1efedb0f776d6659c981a68912dfcce0","url":"./post/4a9c3af0/index.html"},{"revision":"f4d1e708bbf5d1b6df7bcc40bbda76f6","url":"./post/4dd30b69/index.html"},{"revision":"2a1a65f73705de965e22d09e74d0730e","url":"./post/5632/index.html"},{"revision":"3611bdee233bcac97f7a1863e7781870","url":"./post/62d3/index.html"},{"revision":"c6125b25f3a934d5e3127cb252593b17","url":"./post/67f8/index.html"},{"revision":"86b249a0dd08a18b77a7538b23573536","url":"./post/68f544ac/index.html"},{"revision":"86da73c97958393260defcd82350c2ac","url":"./post/7a13585/index.html"},{"revision":"d65dde101f0fada9e458e33b8e7ed8d3","url":"./post/7dc5e7b1/index.html"},{"revision":"74228ace3f3faf3721b89cc8818efd9a","url":"./post/8251/index.html"},{"revision":"de8c3a0b644d3e95547e7c118e3b0610","url":"./post/84b9/index.html"},{"revision":"542a13c1c2c738cc3f1418cab43bdbce","url":"./post/9ff9620/index.html"},{"revision":"a567419eb2273d1f25f4bf500e89a11b","url":"./post/a423/index.html"},{"revision":"b3c02247e879ef827e5151ebe7c06d84","url":"./post/f43a2906/index.html"},{"revision":"de667c56e188ae752bd00476a6bfd6d2","url":"./tags/51单片机/index.html"},{"revision":"0cd23b9f8b4f305b232f271851104d31","url":"./tags/博客/index.html"},{"revision":"557ae9d3bc1a5f66453e1ef354555b35","url":"./tags/博客统计插件/index.html"},{"revision":"68c8e00e12c896b7d21c0fabe531fd8f","url":"./tags/不蒜子/index.html"},{"revision":"fe598e4b8ad06740b69b4c854e295b48","url":"./tags/二级/index.html"},{"revision":"786d023178d03e6679e96b2d6fa97e3d","url":"./tags/黑苹果/index.html"},{"revision":"b12cf7bb6856c01803390cd25b873490","url":"./tags/汇编语言/index.html"},{"revision":"26763bf4224c9ada2df3b0c36910f4b8","url":"./tags/爬虫/index.html"},{"revision":"9c21d8206f646bfc7783662f38ee8756","url":"./tags/软件/index.html"},{"revision":"233291e962e3ccfec4e862f711da4326","url":"./tags/图床/index.html"},{"revision":"d71bf067ef80a1a790704a4daab19b0e","url":"./tags/中断/index.html"},{"revision":"94c7255951dfd5c1bf7d81298beb1295","url":"./tags/Github/index.html"},{"revision":"e442d80eb2673934cca4acb1ad251908","url":"./tags/index.html"},{"revision":"960b89068c4c44181b8030a86f4cb3e2","url":"./tags/jsdelivr/index.html"},{"revision":"3f469719573bef37392f9547e4ea50f4","url":"./tags/m3u8/index.html"},{"revision":"f7cd995c931273dce955c97b7e2526a5","url":"./tags/macOS/index.html"},{"revision":"970f2ee466a454be17ad841c8cd4e262","url":"./tags/Markdown/index.html"},{"revision":"0f1c4fded5eb2592a6dc42dace196b22","url":"./tags/OC/index.html"},{"revision":"f5fa85bd794798fa028f6e7606168310","url":"./tags/OpenCore/index.html"},{"revision":"9ac1c2f6cb7f054dd2039c5ac1441fc7","url":"./tags/Python/index.html"},{"revision":"a0534d4b7b12b3b5cf67512e1092cd03","url":"./tags/Requests/index.html"},{"revision":"e9dab1b177e56a938e3437aa80374645","url":"./tags/Scrapy/index.html"},{"revision":"6e3fc6cae751040bc1c1358969221bbe","url":"./tags/Tensorflow/index.html"},{"revision":"e49ddae94eb2333a20937713f8335fef","url":"./tags/urllib/index.html"},{"revision":"79410c2c89728900fd2f684ebaf295d0","url":"./tags/VMware/index.html"},{"revision":"309cb9026440f78b64757ce717050661","url":"./tags/Windows/index.html"}], {
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
