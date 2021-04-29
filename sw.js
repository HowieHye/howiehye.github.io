const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d3e73d798c866526c63761631a95f1f0","url":"./404.html"},{"revision":"a2b3dfc00fa755f95a1f5f52226a300e","url":"./about/index.html"},{"revision":"7d2fd25d7755bd2cfcd42d470e3bb11f","url":"./archives/2020/02/index.html"},{"revision":"e540a05f5d92dfc5e54acb46160dc684","url":"./archives/2020/03/index.html"},{"revision":"8eac8ddc89dd0952e3f4a60bcdcc553a","url":"./archives/2020/06/index.html"},{"revision":"8eeb058e911016a3b2272044caa397da","url":"./archives/2020/07/index.html"},{"revision":"62ea51eab9431054b86b7dac9974148b","url":"./archives/2020/08/index.html"},{"revision":"caab8b0b59918df17150af0efe9386e7","url":"./archives/2020/11/index.html"},{"revision":"6deeded729077c9c8c6ce7debff2a69e","url":"./archives/2020/12/index.html"},{"revision":"5abe82f095c395274141fa3289d45fa0","url":"./archives/2020/index.html"},{"revision":"e00044fb1875d0c567899d9384b49294","url":"./archives/2021/03/index.html"},{"revision":"0be7940f23eb240d4cc16e19f6dc4a76","url":"./archives/2021/04/index.html"},{"revision":"e94b9dc2a1b2b092f8ed7a672b541ac6","url":"./archives/2021/index.html"},{"revision":"9ef9665c2159425c13de113b4fbd4d3c","url":"./archives/index.html"},{"revision":"c73537c7fb98e56a62ffabe2e6c7fa20","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"8fae3674bba5ed5805f50804c6a123dd","url":"./bing/index.html"},{"revision":"16525ad9129c03576667d98302b2fd91","url":"./categories/51单片机/index.html"},{"revision":"4c79cc1e939ef43311daefe9b503fdf0","url":"./categories/黑苹果/index.html"},{"revision":"92c17e37dbed914a7309a56de764f7df","url":"./categories/教程/index.html"},{"revision":"8ce96a68a2dd5a65250e5922d1089541","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"9245152a8eb2239253bdedaa2186fc4e","url":"./categories/软件/index.html"},{"revision":"b1e613935215de866b1805b35862a148","url":"./categories/随笔/index.html"},{"revision":"fa1ad6986d24247ecd588fcab8184d63","url":"./categories/呓语/index.html"},{"revision":"2f04fa165e1e6134a4404e0859b0ccee","url":"./categories/index.html"},{"revision":"3dd8d20d5c21d32d5b7addf978171f28","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"78c3f1bab17486a531fef7fa600ec873","url":"./categories/Python学习笔记/index.html"},{"revision":"d03adda9ffff1b6e19a5ea4664ab6cc2","url":"./categories/Tensorflow笔记/index.html"},{"revision":"c9c9c5e739b44b1960991ede1917bad3","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"68644f1a96f361a0d49722732c7482cd","url":"./Gallery/index.html"},{"revision":"91235694fe6670cc7522c22b9a4a6f34","url":"./Gallery/wallpaper/index.html"},{"revision":"136908503558c766bfea4cfb10e931f8","url":"./hackintosh/index.html"},{"revision":"5e66cd53e00b8a6d061bde2264b2c41e","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"c81b059a87ca999f994487e3814bec71","url":"./link/index.html"},{"revision":"d370947d66ace59dbeb64d7a3d18cb40","url":"./love/food/index.html"},{"revision":"077a6f86f23a5a3d2724b4d345494976","url":"./love/index.html"},{"revision":"c7d9b66c4d205575901d8249345d68ff","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"4773ca59e2841d9d921bbfb05fb7bb5f","url":"./ncre-c/index.html"},{"revision":"28d4b3bf46ccd493f01fe02fabf55142","url":"./page/2/index.html"},{"revision":"09df37cc8f5119b7dbd3af25f37d3036","url":"./page/3/index.html"},{"revision":"7269d34c260790ee02f9d5082edb01d6","url":"./post/12136/index.html"},{"revision":"afb83a2e70015d6a23a6ab37611381f5","url":"./post/1490/index.html"},{"revision":"a18e7707a7dcddb1f0f44934816d48c4","url":"./post/19561/index.html"},{"revision":"f9502166c4c63e26c03409c770108484","url":"./post/28299/index.html"},{"revision":"0c557660102aded95279c0b8a1410e4b","url":"./post/30170/index.html"},{"revision":"af7f8cf4f74133f4da1a252f636dc1a3","url":"./post/34236/index.html"},{"revision":"7ab34e4a2aab482467e78166f4f67928","url":"./post/36a1c976/index.html"},{"revision":"4fb7e7bacd0d1a325cd70608fea6545f","url":"./post/39520/index.html"},{"revision":"a3e4fd45cc1bc3e31e66fcacd9accaf0","url":"./post/39697/index.html"},{"revision":"393dfb2fe5d59fcc72f9e29966e48a45","url":"./post/44703/index.html"},{"revision":"98fa0c20f58368c0b0fcafadb68ba436","url":"./post/497570a1/index.html"},{"revision":"7658d668996da80c1e7f6716b2a0dbc5","url":"./post/49f9/index.html"},{"revision":"83721dc72a6cdaeea5b040b7696fae70","url":"./post/4a9c3af0/index.html"},{"revision":"4bcfb36b63a75c8514921465424c54e2","url":"./post/4dd30b69/index.html"},{"revision":"815c1dc04cf3fbf07cb01b80c305e7bb","url":"./post/5632/index.html"},{"revision":"1eb9fb487124015f1f0cd5dd3ae88553","url":"./post/62d3/index.html"},{"revision":"79d9fc0e771645b7115a3b3de89afdd1","url":"./post/67f8/index.html"},{"revision":"caffbf9fd603d6638bea05378c9e45a2","url":"./post/68f544ac/index.html"},{"revision":"5a9097f9b18963f2702960cf1063652e","url":"./post/7a13585/index.html"},{"revision":"c8a6da2eb9a8cd59064a655a9ffda5be","url":"./post/7dc5e7b1/index.html"},{"revision":"13257c9c0194ca88a7476dfeecc2abf9","url":"./post/8251/index.html"},{"revision":"bc9e0928064086610a46d10be3e5312e","url":"./post/84b9/index.html"},{"revision":"c1d002eeb0b4a137096c802f7fbfd4e7","url":"./post/9ff9620/index.html"},{"revision":"0d04c1e5b1d10b02e4832ffafa5a3e4d","url":"./post/a423/index.html"},{"revision":"d14040278b8efbd9f78c422bbc0813fc","url":"./post/f43a2906/index.html"},{"revision":"c5710aa687fb97b9d8964d98b3261bbb","url":"./tags/51单片机/index.html"},{"revision":"46010b177f2198b12da2f8ffc06f8c78","url":"./tags/博客/index.html"},{"revision":"c065802fb4bd2175401e67db5caa2e32","url":"./tags/博客统计插件/index.html"},{"revision":"ecf97eea2285b7d31c09a4a39c00681c","url":"./tags/不蒜子/index.html"},{"revision":"3d805ba93bae53304e00026e2ce19df5","url":"./tags/二级/index.html"},{"revision":"6a01508dfb74217b13844eff89c83cd2","url":"./tags/黑苹果/index.html"},{"revision":"ce0dc698e39aa56200608a9f36b02981","url":"./tags/汇编语言/index.html"},{"revision":"9afb60e601757d3b160bfab7d9d3c357","url":"./tags/爬虫/index.html"},{"revision":"9c081420268434182c94a1bf084fadfa","url":"./tags/软件/index.html"},{"revision":"0c48d61acc3c9782ff749bc9732daeb1","url":"./tags/图床/index.html"},{"revision":"25375f66a9470e466c472a155ec539d3","url":"./tags/中断/index.html"},{"revision":"8a0fc239eb7b55f8374c800f9f94f480","url":"./tags/Github/index.html"},{"revision":"6ceabe94837ded57330a435be0df9526","url":"./tags/index.html"},{"revision":"fae2f742a0f7718d12d2152ff340af1d","url":"./tags/jsdelivr/index.html"},{"revision":"efae4551f0bc99bc28626ffb1e421496","url":"./tags/m3u8/index.html"},{"revision":"e01fa48464896d9f1d6d556de5550d04","url":"./tags/macOS/index.html"},{"revision":"f6633ac38fd31f3d524931997f0c73b8","url":"./tags/Markdown/index.html"},{"revision":"36b163f00a9992b0e719b4fe18992c51","url":"./tags/OC/index.html"},{"revision":"81ccb6e6b8e880b16cd983400cbe717e","url":"./tags/OpenCore/index.html"},{"revision":"53931991695ebc06d3a5eb07566796e4","url":"./tags/Python/index.html"},{"revision":"cb167432305eb98bd2bc74582c8225f1","url":"./tags/Scrapy/index.html"},{"revision":"36f8ee5a25bd2fc7f67b66f99655a7c9","url":"./tags/Tensorflow/index.html"},{"revision":"6aacb88c56cd3b67ec6213b3db316a86","url":"./tags/urllib/index.html"},{"revision":"9c6535c0a19120a53e9fad584d5f316c","url":"./tags/VMware/index.html"},{"revision":"20dc2e48bbca38446154fc67ba06bf7c","url":"./tags/Windows/index.html"}], {
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
