const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"06ca8ccda3d3d6a054b9b6d71ce1bad8","url":"./404.html"},{"revision":"8642dae9c03e471ec49e2e3f54223bd7","url":"./about/index.html"},{"revision":"e69f0293b2185b7efe63797ccf4a3894","url":"./archives/2020/02/index.html"},{"revision":"8509551029fff21c71252558badcbfef","url":"./archives/2020/03/index.html"},{"revision":"87fee08607028b33e5f93fafb4811bfe","url":"./archives/2020/06/index.html"},{"revision":"a10b7a442579b42140f6858b43d56c12","url":"./archives/2020/07/index.html"},{"revision":"f8a9fc43dc778d7a0541309e1a5c8b80","url":"./archives/2020/08/index.html"},{"revision":"b8863297e57d659dda8c0109622927c7","url":"./archives/2020/11/index.html"},{"revision":"d6fc189394ca9dc2a128d7a65e142b05","url":"./archives/2020/12/index.html"},{"revision":"47d6ff116580fcd82438cd8f9ad1ffc5","url":"./archives/2020/index.html"},{"revision":"4d46a9c50022d12fe0713a84aee78305","url":"./archives/2021/03/index.html"},{"revision":"5bc344e4f3d22612bbf032373011b360","url":"./archives/2021/04/index.html"},{"revision":"b99313eaec0b3b93bb876350a329ffa5","url":"./archives/2021/06/index.html"},{"revision":"38fad010374b100610d1191ba5298580","url":"./archives/2021/index.html"},{"revision":"e33922ff162c2c4f948ccff25c694a79","url":"./archives/index.html"},{"revision":"b2776d8691acb3962b56aa3783c64c9c","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"646dd0ccd7b8adf6a05bb3f68bf63797","url":"./bing/index.html"},{"revision":"9de6e1b6f3f6eeb389f498d2d7d38848","url":"./categories/51单片机/index.html"},{"revision":"027be7dcf42fbcef1113b83e8547895e","url":"./categories/黑苹果/index.html"},{"revision":"8687628be80e725d34de806dfd0754df","url":"./categories/教程/index.html"},{"revision":"42b948a5f13bae107c83022f93f31ab8","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"35fc0d9928a18f90f7689e711a11c374","url":"./categories/软件/index.html"},{"revision":"fc79793c34daed55047b43583d93621d","url":"./categories/随笔/index.html"},{"revision":"f26dfde48c61622e4957cad9e2b9580c","url":"./categories/呓语/index.html"},{"revision":"d676fc7d2f6b7bc5e8f07b1025977500","url":"./categories/index.html"},{"revision":"d78be8c7c05e4bc70afb925d1d4dc09f","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"606ea3614ea1eaed4bae455aeadecdf1","url":"./categories/Python学习笔记/index.html"},{"revision":"abe2e91c14f7bef572ac63762c9918f4","url":"./categories/Tensorflow笔记/index.html"},{"revision":"e10939a81aacb2d3b92801e0515b00af","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8eea7678d7071982c549682de249a83c","url":"./Gallery/index.html"},{"revision":"75aeee987fc177b64a267c6b377b5d15","url":"./Gallery/wallpaper/index.html"},{"revision":"dbb59fbb4f819aef81dc39d204f258de","url":"./hackintosh/index.html"},{"revision":"1f894cf0e627c7a9602c6c602fc6ffed","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"05abe4a3cc2cf8ee9dc14a8fb93a1d79","url":"./link/index.html"},{"revision":"bb09b8dbe8a6eb248b86dc716847a56a","url":"./love/food/index.html"},{"revision":"a5f1c8fe4b2db3fd9f9f197a782495cb","url":"./love/index.html"},{"revision":"7f33fdbfb2c8c761bfaa68abe20cec37","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"6d895b5a331ce71361b3a0515ef6f736","url":"./ncre-c/index.html"},{"revision":"c41b6c96e4729a7aa347f734bc81fe39","url":"./page/2/index.html"},{"revision":"ac07be1d951fe79f589166e84e9a6e52","url":"./page/3/index.html"},{"revision":"659cb571ac810cd85b3c5bc1427b93d4","url":"./post/12136/index.html"},{"revision":"df0ef7dcb654a718ee299cf145708e70","url":"./post/1490/index.html"},{"revision":"f4a10d6a3f60ee178e72ecbe911912ad","url":"./post/19561/index.html"},{"revision":"505766f13d7f7e10540e8a77cf014f4a","url":"./post/28299/index.html"},{"revision":"28e59ced9eab426cf140ba8817fbb99b","url":"./post/30170/index.html"},{"revision":"a436c084dc6c1698a008078903d01db2","url":"./post/34236/index.html"},{"revision":"d18857f5e1486c18dd7f2e21ea7950de","url":"./post/36a1c976/index.html"},{"revision":"778cb5d31b3f269f0d11cda151d47f5e","url":"./post/39520/index.html"},{"revision":"92838db034add1b88c9c54e6c7b76a34","url":"./post/39697/index.html"},{"revision":"9643f8a76ae2ab6777ffebf8c59b3871","url":"./post/44703/index.html"},{"revision":"08f944eba5c0ade6f7e1bb3c0ca6e501","url":"./post/45b2259a/index.html"},{"revision":"94f80965fea6d0006be2b6b8b15c44a7","url":"./post/497570a1/index.html"},{"revision":"eacbc141dbe0fabe294dd83a4196925b","url":"./post/49f9/index.html"},{"revision":"c9e856ddbc4f36efc2e766960ac4f930","url":"./post/4a9c3af0/index.html"},{"revision":"adb5b0fde4d306eeb65337651bf0fba6","url":"./post/4dd30b69/index.html"},{"revision":"8522128e140fbf4788d00aa94b473e95","url":"./post/5632/index.html"},{"revision":"a22cf44f11335cfe3874b01d9e2914ac","url":"./post/62d3/index.html"},{"revision":"9bdaf89781603cd1a75caec8b0923294","url":"./post/67f8/index.html"},{"revision":"4f93bf5d3553e644f80c47f829f06467","url":"./post/68f544ac/index.html"},{"revision":"d45a532e8025da071d140f5def143f31","url":"./post/7a13585/index.html"},{"revision":"077f0929a51d7fe3cbd87db02fdfcfc6","url":"./post/7dc5e7b1/index.html"},{"revision":"ed81f83948d090e93d9eb0aa9d57c891","url":"./post/8251/index.html"},{"revision":"bbddabadf472ec8a975c8e372b0167ee","url":"./post/84b9/index.html"},{"revision":"434b0be9e2c397fb33e32ceb4c6b4559","url":"./post/9ff9620/index.html"},{"revision":"d6215b31e84b37e0c9d49894d22c8dd1","url":"./post/a423/index.html"},{"revision":"350d8bcf74ca9506b0a705fca2ce1e74","url":"./post/f43a2906/index.html"},{"revision":"cb877d1e4fa1d9e1eea1ad009fc4532c","url":"./tags/51单片机/index.html"},{"revision":"11249294577d3c42d3a41f2ff27aed7c","url":"./tags/博客/index.html"},{"revision":"ef84b0ee37b26ada494baadd941550b5","url":"./tags/博客统计插件/index.html"},{"revision":"97d9492ef563c6a246943f40611a38fe","url":"./tags/不蒜子/index.html"},{"revision":"55acfb1f1adf5553773bc3594ab2c3cb","url":"./tags/二级/index.html"},{"revision":"a022c10c1b15eaf31de16a27c8974209","url":"./tags/黑苹果/index.html"},{"revision":"0f90305a1c7d48b3b269b8b020639c30","url":"./tags/汇编语言/index.html"},{"revision":"67ab3a99d96205ccba230c6f5f711f7a","url":"./tags/爬虫/index.html"},{"revision":"4390003aaa7d9b24bffe9edd17bd9788","url":"./tags/软件/index.html"},{"revision":"785c2392f3c5233a5ca566a29025b0fb","url":"./tags/图床/index.html"},{"revision":"2ba32b29d5b4b30977f4efe635a46db5","url":"./tags/中断/index.html"},{"revision":"22c10851049556c9483c11e5f27b62af","url":"./tags/Github/index.html"},{"revision":"a271f42c96dae84c4acaa3eb9a6110bd","url":"./tags/index.html"},{"revision":"4b4331a479ad6f407764aa1b50b40e06","url":"./tags/jsdelivr/index.html"},{"revision":"fa7eb2160fcdb61279ff33d6c8b73fb4","url":"./tags/m3u8/index.html"},{"revision":"fc72078789a07ba37c5c9d8726309d1d","url":"./tags/macOS/index.html"},{"revision":"e58aa2eae50d515f44ecfcdb1fc43987","url":"./tags/Markdown/index.html"},{"revision":"4129662eb6f010a3f5d9b4d5f5b4efef","url":"./tags/OC/index.html"},{"revision":"d84e72bf9bc9f88a7790ddc4450f39e0","url":"./tags/OpenCore/index.html"},{"revision":"b5eb4134b3fe014dbc7189157bdd9d68","url":"./tags/Python/index.html"},{"revision":"9db237d0ea668abdef131e1c7d5071fd","url":"./tags/Requests/index.html"},{"revision":"181761d9c0d9897872c0c2bea8d13ea3","url":"./tags/Scrapy/index.html"},{"revision":"8abe4d821be45c29d127e6668f578ba0","url":"./tags/Tensorflow/index.html"},{"revision":"b5778b945d55347420bde11575c4b1f4","url":"./tags/urllib/index.html"},{"revision":"da8b6dfc2c007c3bd6fc9efbf25476f3","url":"./tags/VMware/index.html"},{"revision":"2b522b159c3edb544e9f223d9f7848d1","url":"./tags/Windows/index.html"}], {
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
