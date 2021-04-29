const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7aecebe29582793e2085d4f8982dc5d1","url":"./404.html"},{"revision":"705d7ac4a85f7559a7a1401134bf861f","url":"./about/index.html"},{"revision":"b15e489363b20a9d43f4adbe6b7b55a9","url":"./archives/2020/02/index.html"},{"revision":"f470316efb6d395ab70b709ac3d946db","url":"./archives/2020/03/index.html"},{"revision":"c21f61f82a491b20506490128bf180ee","url":"./archives/2020/06/index.html"},{"revision":"4bb26ada9be680d66731f3b898c6012f","url":"./archives/2020/07/index.html"},{"revision":"4c8b3ab7cfb96342518122452bbcbe5b","url":"./archives/2020/08/index.html"},{"revision":"9bbda686092d16bed8dabd655ae5ed34","url":"./archives/2020/11/index.html"},{"revision":"b41c0dc59b21347c4eae5eb4dc2fe592","url":"./archives/2020/12/index.html"},{"revision":"5d2a57de95fed6c66fc346a4033fe1f4","url":"./archives/2020/index.html"},{"revision":"683a80a42c2bcde0765eded076582b3c","url":"./archives/2021/03/index.html"},{"revision":"75f5a6e00964ebfaec5de5defbf8f977","url":"./archives/2021/04/index.html"},{"revision":"11a8823638babafa78f0002e2d956512","url":"./archives/2021/index.html"},{"revision":"cf1e574e46bac4256ebddb53abee2e66","url":"./archives/index.html"},{"revision":"f71d76bdc1769b3aa01012301c5dca07","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"81fbea61f4ecc2f417d9b0a378ecd7d2","url":"./bing/index.html"},{"revision":"72eb85c5256779b7189761d09c0f7c2d","url":"./categories/51单片机/index.html"},{"revision":"caf5a377a13b9d93f873e6d28b8d222d","url":"./categories/黑苹果/index.html"},{"revision":"130d5605b326ad2c011d275819788f94","url":"./categories/教程/index.html"},{"revision":"36a9f35a4ad74f6b1aa88a55cd7c631a","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"5921dbdb2f774c8affb934f6f52d4542","url":"./categories/软件/index.html"},{"revision":"1b0d26b160143a77186909aad7c17746","url":"./categories/随笔/index.html"},{"revision":"a03d1830e379d1ebee80c59217006074","url":"./categories/呓语/index.html"},{"revision":"1b15b8686c294399cf720250b34946eb","url":"./categories/index.html"},{"revision":"a2bd9d0e306789faed5e82b6dcdf6e43","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"07f09cdfaec591fe70546e2e7cf2c902","url":"./categories/Python学习笔记/index.html"},{"revision":"92b6d794c3eed9ed769216352b148d7d","url":"./categories/Tensorflow笔记/index.html"},{"revision":"e10939a81aacb2d3b92801e0515b00af","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8d5ce13894fd5f9c68068261044e445d","url":"./Gallery/index.html"},{"revision":"ed715bbe4a4af5af24394ec215075ed4","url":"./Gallery/wallpaper/index.html"},{"revision":"6c6e37ccd3c77e4ec8ba9bdb6897881e","url":"./hackintosh/index.html"},{"revision":"a9334c242378b8c86b7840b6cc427ffc","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5fcd0eac7e1d4c331c695eb4dd298964","url":"./link/index.html"},{"revision":"37d21e91432f16f6a541585e3eb1e468","url":"./love/food/index.html"},{"revision":"2bc95ec5cf3a2828afb680de182e619e","url":"./love/index.html"},{"revision":"0f8d2bf0048c53f159857e6d3b74ba66","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"e968a61af385347ab1ee3ed4d85a0c36","url":"./ncre-c/index.html"},{"revision":"136ad212cab9777d361670d27e6bf911","url":"./page/2/index.html"},{"revision":"000657c157b8da23af7e98a52ef5319a","url":"./page/3/index.html"},{"revision":"835245899d4bdb381d653bead3290568","url":"./post/12136/index.html"},{"revision":"1ba24925016b78fa413a7e4240270685","url":"./post/1490/index.html"},{"revision":"5b36da267a5c98957d502dbb9874128f","url":"./post/19561/index.html"},{"revision":"9a50e17961613b61a2c7ee2ee2b881e4","url":"./post/28299/index.html"},{"revision":"caf93edbf8a7376b6b1f8e6d674b934b","url":"./post/30170/index.html"},{"revision":"994c875ec411dff551577caf15cbb427","url":"./post/34236/index.html"},{"revision":"f4e83f8eb970482995139f4df7849893","url":"./post/36a1c976/index.html"},{"revision":"ee274913a44a03a36354ce95ae0b7775","url":"./post/39520/index.html"},{"revision":"67154ba5d28aa549e512520a6f488ce3","url":"./post/39697/index.html"},{"revision":"e85086b3ec77b864a46143b253ff4a42","url":"./post/44703/index.html"},{"revision":"337eb3a55269de1acc05a246eb94cacd","url":"./post/497570a1/index.html"},{"revision":"5ce3981a5f9e5b804892c0f2f4fa5b7a","url":"./post/49f9/index.html"},{"revision":"0c4d062c10d00921c4a9a69ef6ad0fc4","url":"./post/4a9c3af0/index.html"},{"revision":"165da80b16e4b37b41aed1e24ebd1623","url":"./post/4dd30b69/index.html"},{"revision":"5336aa44181cc19bb45b7556014b71b6","url":"./post/5632/index.html"},{"revision":"34bc8d57b5eb54dabd047cf919ff3f2c","url":"./post/62d3/index.html"},{"revision":"08796261842d7da9c23d8b3d8bd422ca","url":"./post/67f8/index.html"},{"revision":"f11452fdf1c703c2d7ccb95395352bce","url":"./post/68f544ac/index.html"},{"revision":"d27c14ffb4b932e0f4ebb6871f413a57","url":"./post/7a13585/index.html"},{"revision":"5719e85fd514e13e209130ac67c5075a","url":"./post/7dc5e7b1/index.html"},{"revision":"1dee2ca5f9e05ef514a50b6af846f624","url":"./post/8251/index.html"},{"revision":"379e377843dfa6b519c4e0ffc63eb79a","url":"./post/84b9/index.html"},{"revision":"f79a0e5020ea4e9c7e45bab46f05b641","url":"./post/9ff9620/index.html"},{"revision":"50ab165e96f1d92bc29b0759e9fc6238","url":"./post/a423/index.html"},{"revision":"fc31ca27eebf8c8c25eb92f73f25c333","url":"./post/f43a2906/index.html"},{"revision":"e385841e145bd06b3637317149641e50","url":"./tags/51单片机/index.html"},{"revision":"421faaf3765f5d5ec596623bdbb3c56a","url":"./tags/博客/index.html"},{"revision":"2f7b5360e9cbdf6944fbcc9c69afce53","url":"./tags/博客统计插件/index.html"},{"revision":"5fc1cf87b32b0b6e761705474e96b6c3","url":"./tags/不蒜子/index.html"},{"revision":"b067925de32cedd4c12dd4e873b537b3","url":"./tags/二级/index.html"},{"revision":"20d8591d427019d5c33c356daa518d32","url":"./tags/黑苹果/index.html"},{"revision":"ce6b7be0f0f197513b53af8ff4a0000a","url":"./tags/汇编语言/index.html"},{"revision":"87218ac89b257d317ad8ed552846a3fe","url":"./tags/爬虫/index.html"},{"revision":"73437fbc7ff6009d8424bac0fac38a58","url":"./tags/软件/index.html"},{"revision":"a5f67e5ab36b76c377d5606f93381c44","url":"./tags/图床/index.html"},{"revision":"97c481140003ab28de7660ddbe4b073f","url":"./tags/中断/index.html"},{"revision":"3bb922dd669d6c425ed99a062bfaa9c1","url":"./tags/Github/index.html"},{"revision":"0af4f547a97a96d93b81314dd60bd070","url":"./tags/index.html"},{"revision":"ad4c51539c20e7a97a6db1d354501845","url":"./tags/jsdelivr/index.html"},{"revision":"379688d79e736c40b47bb92654439ff9","url":"./tags/m3u8/index.html"},{"revision":"90fe1f85ac87dbdb6ce110727d2d9d81","url":"./tags/macOS/index.html"},{"revision":"3df3ae5dd2bdbebbbc1db1c1e4ab56ec","url":"./tags/Markdown/index.html"},{"revision":"d9711979b9f2dfa96c3195b13991dc1d","url":"./tags/OC/index.html"},{"revision":"2f7f696d86e69dbf1cbcd5ee230a3f8c","url":"./tags/OpenCore/index.html"},{"revision":"c33ce82ec31fe8fbea876a3a218fc3f3","url":"./tags/Python/index.html"},{"revision":"cf819da32a057e9ece9bcce28250d382","url":"./tags/Scrapy/index.html"},{"revision":"901698e774fc10ae84e948ac75eabeb8","url":"./tags/Tensorflow/index.html"},{"revision":"5a03449774fe3bdfa819c654c3ee31d6","url":"./tags/urllib/index.html"},{"revision":"bf94b920d739bc6949a537a4486419ab","url":"./tags/VMware/index.html"},{"revision":"edb97564f73f71b79a1a6652cc797711","url":"./tags/Windows/index.html"}], {
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
