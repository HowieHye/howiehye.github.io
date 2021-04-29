const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"3f84bb836f43f243e46b4bc205080d36","url":"./404.html"},{"revision":"07f16bc7b6b40d2a07dce922a0feb28c","url":"./about/index.html"},{"revision":"5b3fd1a23e92104b80ab06a6be9fefb7","url":"./archives/2020/02/index.html"},{"revision":"e73b9c1dd09fbfbba78151ff8e5474b6","url":"./archives/2020/03/index.html"},{"revision":"a8fce1066e88a11df5c47301225ec86f","url":"./archives/2020/06/index.html"},{"revision":"101552899fab31e39e38d34281d1c41a","url":"./archives/2020/07/index.html"},{"revision":"5f72e7a5b66575e4b851588ff0ba24d7","url":"./archives/2020/08/index.html"},{"revision":"f536a3beca7fa03e457dc7379b2caac7","url":"./archives/2020/11/index.html"},{"revision":"ad1356367c2f479fd21d3b4c41ca6799","url":"./archives/2020/12/index.html"},{"revision":"feac1d6354dc73e4a6b2c5abdeeef913","url":"./archives/2020/index.html"},{"revision":"1c8d325536afbf651c42afea72d58b83","url":"./archives/2021/03/index.html"},{"revision":"cc9e206572cfba4f2691527bc1a41977","url":"./archives/2021/04/index.html"},{"revision":"b5f085fe6264cbe050c071ee83bdcc31","url":"./archives/2021/index.html"},{"revision":"cf817325c4326913b702209d8962c74b","url":"./archives/index.html"},{"revision":"374170e2bd3b35626b7e83b316e6516d","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"7927094f6c3f804c9227badb43eb05cb","url":"./bing/index.html"},{"revision":"69d5e6449f376afe4f9908fd25c1b4f8","url":"./categories/51单片机/index.html"},{"revision":"36ec527ec06812f4e6c82e55aa100a7e","url":"./categories/黑苹果/index.html"},{"revision":"35f5159d8be2ae3238b78f2f1dab8d98","url":"./categories/教程/index.html"},{"revision":"4f8930824a485fdbd2b757abea1b6519","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"21e1d88ad4529234152c29c96b189714","url":"./categories/软件/index.html"},{"revision":"1c6e7c7cea76f7c6c96056f2eac7510c","url":"./categories/随笔/index.html"},{"revision":"8a88c96484d82bd4591d17e4382ad91b","url":"./categories/呓语/index.html"},{"revision":"e0526592a7f7c6cd6bad0d52f33a1782","url":"./categories/index.html"},{"revision":"de63b6f1985f7b3865ecbb3b5b70db54","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"fc97c7b057f57cbbf28bcd9a7110c44a","url":"./categories/Python学习笔记/index.html"},{"revision":"5dca7a395b15b965b2efe7927d27c4c7","url":"./categories/Tensorflow笔记/index.html"},{"revision":"c9c9c5e739b44b1960991ede1917bad3","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"54fcc96e1893d13a8aa5e1c986138168","url":"./Gallery/index.html"},{"revision":"1392e7e8b3a2f67f95f724dd3038be62","url":"./Gallery/wallpaper/index.html"},{"revision":"275adc03be7ae043aacffcbe8518aa94","url":"./hackintosh/index.html"},{"revision":"3b2518fe03f92978cbd5f97f5cac2518","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"338901e9e1b54d061cb4a4585e885ee5","url":"./link/index.html"},{"revision":"9ecd8ae9db6d26cd326c27aef176c220","url":"./love/food/index.html"},{"revision":"4033a580a8fe9f232f6892c5b07cb293","url":"./love/index.html"},{"revision":"f70eb9424df57657631f61e4cd09fc16","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"ea00c60f2d6521ac40345eee9bb2fed5","url":"./ncre-c/index.html"},{"revision":"1e2e2eb958598ec89ea5d9051389e05b","url":"./page/2/index.html"},{"revision":"bed90db8ff4e2be7d5a062845cfb48ec","url":"./page/3/index.html"},{"revision":"fe25dfd3bb465a371bd2bee40bd889b4","url":"./post/12136/index.html"},{"revision":"dc54d44f164be83577caeb8a2204c5c0","url":"./post/1490/index.html"},{"revision":"169594256d09310741b401120d367707","url":"./post/19561/index.html"},{"revision":"32f7c65ea2958342de736331ea14e9eb","url":"./post/28299/index.html"},{"revision":"d608d17de8ec4f63b1d30e4d918a4803","url":"./post/30170/index.html"},{"revision":"66faf5b4ce2ea10f1fc56e4f976642d3","url":"./post/34236/index.html"},{"revision":"fdcd25508740b0ac5814019ea11cb9e8","url":"./post/36a1c976/index.html"},{"revision":"1dccbd282aa064388de5c576c0e8b099","url":"./post/39520/index.html"},{"revision":"707530c657b74119dd4eb767d3d402f4","url":"./post/39697/index.html"},{"revision":"f638e8af802f310a224a9df028b446fa","url":"./post/44703/index.html"},{"revision":"dcb5a6604c415f31d1bad0aebdcfb637","url":"./post/497570a1/index.html"},{"revision":"81df684afc21365df882c677d9a8b0e0","url":"./post/49f9/index.html"},{"revision":"7877afb0d1ceb0204ab1122f74a6f691","url":"./post/4a9c3af0/index.html"},{"revision":"4cef1038c76856975a62041c5a14a90d","url":"./post/4dd30b69/index.html"},{"revision":"b00761ed5a725e36ac5da4ceb76e5331","url":"./post/5632/index.html"},{"revision":"c984d238b5ec4fa0496251de59565ad8","url":"./post/62d3/index.html"},{"revision":"844553796363d3b5ccf2a3a9c5426fab","url":"./post/67f8/index.html"},{"revision":"b2cda55a5f659912064c8c185c202f94","url":"./post/68f544ac/index.html"},{"revision":"d50d77153c812e53fb3dd13a741aeca9","url":"./post/7a13585/index.html"},{"revision":"732f1ae0d61ea4399171a22bad4a1dff","url":"./post/7dc5e7b1/index.html"},{"revision":"adbdf53e8a387f486ea7f124fcbf31cc","url":"./post/8251/index.html"},{"revision":"25036a9e89df7d1709a2d8ac31627dc6","url":"./post/84b9/index.html"},{"revision":"8c6acfd937560f7413b77f7ae813b984","url":"./post/9ff9620/index.html"},{"revision":"a0c158219cc83b88baf6972f20421735","url":"./post/a423/index.html"},{"revision":"2d36e2d02a9e787342c3c321b8b01482","url":"./post/f43a2906/index.html"},{"revision":"7092a32ef0c7dea10b3440a1f0adfd85","url":"./tags/51单片机/index.html"},{"revision":"1a76f1d30558e828255182deb67cba88","url":"./tags/博客/index.html"},{"revision":"4b7363ae5f93bff89c63815558684643","url":"./tags/博客统计插件/index.html"},{"revision":"38113af4f446790c8b2f5dfbfd3f9520","url":"./tags/不蒜子/index.html"},{"revision":"e08189f5f0f8a22553ec88db4ad2c279","url":"./tags/二级/index.html"},{"revision":"92ff8af90bb67803163e71666797c3e9","url":"./tags/黑苹果/index.html"},{"revision":"fc4d36ec287e071618e6f2a65fe06ed8","url":"./tags/汇编语言/index.html"},{"revision":"9b1b4c330f28355c7afcf45eedb4ac46","url":"./tags/爬虫/index.html"},{"revision":"9e1f72bbf5eda2f1700cc4092657e9c7","url":"./tags/软件/index.html"},{"revision":"c6ba4a92c7362d517d0023a606e1d6a1","url":"./tags/图床/index.html"},{"revision":"bdb15827df47b084326b05d49472b449","url":"./tags/中断/index.html"},{"revision":"f99aa135c6b7cb5b2b4bb2353162188e","url":"./tags/Github/index.html"},{"revision":"d365eaf36f9a0d2a12f600b4f1db411e","url":"./tags/index.html"},{"revision":"1733efc540b1f3dd7a1baa4160d63063","url":"./tags/jsdelivr/index.html"},{"revision":"60a14f9870bae8274a4f37fee5f90289","url":"./tags/m3u8/index.html"},{"revision":"ae5e4e63a80547d631ce2ef022249aad","url":"./tags/macOS/index.html"},{"revision":"11a34d95c3b156a51a2f85557b515955","url":"./tags/Markdown/index.html"},{"revision":"a0a1ca34772139f70d72a89faf91ad8e","url":"./tags/OC/index.html"},{"revision":"3182550b8e53f2bce20aff55efb7210f","url":"./tags/OpenCore/index.html"},{"revision":"b21b93bae97529314cae76cb83e9386c","url":"./tags/Python/index.html"},{"revision":"5c12dba88d0dc9bebf663e8461c0b3d0","url":"./tags/Scrapy/index.html"},{"revision":"1cd573c5e5a98403b0230c731ad33132","url":"./tags/Tensorflow/index.html"},{"revision":"0f41424a292f7894fb2c2b28edd97151","url":"./tags/urllib/index.html"},{"revision":"583438b28fdbd5f91bed869ca00d4a4b","url":"./tags/VMware/index.html"},{"revision":"d2acbf6beab2dfc8809d44ed038977db","url":"./tags/Windows/index.html"}], {
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
