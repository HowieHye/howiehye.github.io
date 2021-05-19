const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"59bfca26aac98c06dad533a556c9a11c","url":"./404.html"},{"revision":"139c6191fc5590dde27f3adb9fde9e94","url":"./about/index.html"},{"revision":"bb112c67dd4de83109d95bc951d1c9ce","url":"./archives/2020/02/index.html"},{"revision":"e6d93918f7362308e3919254f607758b","url":"./archives/2020/03/index.html"},{"revision":"add3daa0580582cb6e3c392be459c3a9","url":"./archives/2020/06/index.html"},{"revision":"c27f4f1050d8c7487fb87c26735bb03d","url":"./archives/2020/07/index.html"},{"revision":"d48b3f221489b33bf6737b9e00d7ef32","url":"./archives/2020/08/index.html"},{"revision":"6bcbf0934c5df38ad31f802b4d9bfacf","url":"./archives/2020/11/index.html"},{"revision":"027725be5825559fd9882faffe956de8","url":"./archives/2020/12/index.html"},{"revision":"03e801b3d12599caa19e0cd05f8b903b","url":"./archives/2020/index.html"},{"revision":"12deb48f09768db0ec4ec73859aa71cf","url":"./archives/2021/03/index.html"},{"revision":"3221293ebddb3599dd60b0505305094d","url":"./archives/2021/04/index.html"},{"revision":"d4a3802aeb9f543a54f22a04e4c2518a","url":"./archives/2021/index.html"},{"revision":"c1addbefcabbfe004eb08312d107107d","url":"./archives/index.html"},{"revision":"f71d76bdc1769b3aa01012301c5dca07","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"81fbea61f4ecc2f417d9b0a378ecd7d2","url":"./bing/index.html"},{"revision":"2c3b344126d0bde1102d15076be8e1ca","url":"./categories/51单片机/index.html"},{"revision":"57acbb35a16f8a4c7666d563df1acd79","url":"./categories/黑苹果/index.html"},{"revision":"c866b950332d4e2bf3749dcabdabc10b","url":"./categories/教程/index.html"},{"revision":"2639b544f2b17fd0de5f5ba2d0f4d95d","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"b3100efd66d770b1b0c66b8af2710d6a","url":"./categories/软件/index.html"},{"revision":"c51f95f34548551a89393674ee358934","url":"./categories/随笔/index.html"},{"revision":"eff1f3412f4d0faa83cbb5e6d3e8bccd","url":"./categories/呓语/index.html"},{"revision":"e705b0b5b20991543d15c14d68491418","url":"./categories/index.html"},{"revision":"776631fa269447f324d5721c7f39559d","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"f2c9a5f12108df581f28b77b2c46e808","url":"./categories/Python学习笔记/index.html"},{"revision":"e55f0344e6556e346279521bba084117","url":"./categories/Tensorflow笔记/index.html"},{"revision":"e10939a81aacb2d3b92801e0515b00af","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4caec9f5339d4124e2b7ca3881d5b45c","url":"./Gallery/index.html"},{"revision":"f8dd558e8f5afd0b999ea634bb0e5cf3","url":"./Gallery/wallpaper/index.html"},{"revision":"d0a6a6feb77af28851a4394b3512985d","url":"./hackintosh/index.html"},{"revision":"8665048246c1f5747735c0f39dc38927","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"6877824c98b1fcab15f2d065323d6fff","url":"./link/index.html"},{"revision":"c3e4662f6c62223d62a574b04428511a","url":"./love/food/index.html"},{"revision":"c0bb4efa634bb0ae1c62da3ef6b6d291","url":"./love/index.html"},{"revision":"e943e01d3ff2e007c66cd7598e7a3e8e","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"ea585dffc0eac6447981effafb826504","url":"./ncre-c/index.html"},{"revision":"2743109e8d21dd115796286cf3a6d35c","url":"./page/2/index.html"},{"revision":"5ffe35a319958dea187d7f2e2ead7334","url":"./page/3/index.html"},{"revision":"55bae55d21a8f6b9aaea99f543fa449b","url":"./post/12136/index.html"},{"revision":"0e48523fc6c60a9666889e8064bfbf5c","url":"./post/1490/index.html"},{"revision":"b698468e815a064c173d1c6482976bdd","url":"./post/19561/index.html"},{"revision":"4080c8a63853894129aa6a28fbf12924","url":"./post/28299/index.html"},{"revision":"91c6f15c0a388f703c19a4b56f0fe44d","url":"./post/30170/index.html"},{"revision":"2748644a85fb91a34e1d8f60eb60c505","url":"./post/34236/index.html"},{"revision":"7de2e6f9debd22fab4bf6e8f8414f534","url":"./post/36a1c976/index.html"},{"revision":"3dbed4b9ddaa00f76ed3e8576be420a8","url":"./post/39520/index.html"},{"revision":"a7f1ece40c36aa037910d8ec56368e2d","url":"./post/39697/index.html"},{"revision":"58fcf6f887769b9c70475013f8b1345b","url":"./post/44703/index.html"},{"revision":"1b4bb876ac981cc431096a1b970b0c5c","url":"./post/497570a1/index.html"},{"revision":"8aec96cea81b01d1fb7d369e9dff5c35","url":"./post/49f9/index.html"},{"revision":"6410388f85e43e92c2dbf14a18161a56","url":"./post/4a9c3af0/index.html"},{"revision":"463623f25c5e0d34611c09c2b7c4f715","url":"./post/4dd30b69/index.html"},{"revision":"0b4572f2658fa24fd66b667c99ffd151","url":"./post/5632/index.html"},{"revision":"993183a7037966fc3c27d16485070b1b","url":"./post/62d3/index.html"},{"revision":"0e7effa054634f25070f832e5fda8ae3","url":"./post/67f8/index.html"},{"revision":"9925c57ad96c6d1d5b014877a77a4d22","url":"./post/68f544ac/index.html"},{"revision":"28e23dcb38b48b068c1e43be8f0e69fe","url":"./post/7a13585/index.html"},{"revision":"721c6daeb3d5edecb01da623ec0ef263","url":"./post/7dc5e7b1/index.html"},{"revision":"81c81f71fde051fa069533bb64f82ce4","url":"./post/8251/index.html"},{"revision":"1cf22d24d8b501f9ffb820abf42a7f27","url":"./post/84b9/index.html"},{"revision":"057876cdc79283ac6f209b089565375c","url":"./post/9ff9620/index.html"},{"revision":"2a814206d233239e5be5f97c0be973fa","url":"./post/a423/index.html"},{"revision":"60aa55f664d6eb31f9738e79101d7958","url":"./post/f43a2906/index.html"},{"revision":"b4a89c7bf840650b3c89fc4830dfe630","url":"./tags/51单片机/index.html"},{"revision":"986c26f145fd3e24f3daef9bbe6587f7","url":"./tags/博客/index.html"},{"revision":"b3c5bcdd8011e53fe0b7de88177db748","url":"./tags/博客统计插件/index.html"},{"revision":"cf00c367f70fa0dab47ec0e5cd2eaedd","url":"./tags/不蒜子/index.html"},{"revision":"8fa4ef285db4224e8697836dc4c4fe79","url":"./tags/二级/index.html"},{"revision":"39e770435f60db5704b2a5cfd86e00f4","url":"./tags/黑苹果/index.html"},{"revision":"9f16d6d4f79bde3b1c811403c191b867","url":"./tags/汇编语言/index.html"},{"revision":"69c21ac9411507b67f0e62427dba085e","url":"./tags/爬虫/index.html"},{"revision":"ebc0e8a530a1401fb52a6a8fa43dfd95","url":"./tags/软件/index.html"},{"revision":"ad31038c786ffd9646652efaeb8c442c","url":"./tags/图床/index.html"},{"revision":"385757529c4b83ea796414d004ae61dd","url":"./tags/中断/index.html"},{"revision":"3f9740aa3eded8460ef3585a8d2abcd5","url":"./tags/Github/index.html"},{"revision":"8da460ffb918ff26fd0d54b17512db29","url":"./tags/index.html"},{"revision":"8afa099fe19b10e833604a9a3676bb03","url":"./tags/jsdelivr/index.html"},{"revision":"0926cc8736acdd10d51542f7a3b7e0b5","url":"./tags/m3u8/index.html"},{"revision":"e6045b4f143686f1c23278ada0267c77","url":"./tags/macOS/index.html"},{"revision":"c6faf60e2c083f2b2f5215bce84ffac2","url":"./tags/Markdown/index.html"},{"revision":"20193bdd21684c2d84bc15c822af2980","url":"./tags/OC/index.html"},{"revision":"d2bd2cbee57eaa5ff8d1c995e5e7367c","url":"./tags/OpenCore/index.html"},{"revision":"188ca1316cebf6fd18e148f60d9e8d30","url":"./tags/Python/index.html"},{"revision":"cd66f7a0e71026ef14247d4af62b4493","url":"./tags/Scrapy/index.html"},{"revision":"b43c109a3358501b1030e9fbbc4eac0d","url":"./tags/Tensorflow/index.html"},{"revision":"0042fd39f88283c487f6fdfb6d2d88be","url":"./tags/urllib/index.html"},{"revision":"c0d3596972477ce6cbf4ea27c9b4f9e0","url":"./tags/VMware/index.html"},{"revision":"b2f0c11120c10bb43cc4f9be265690ea","url":"./tags/Windows/index.html"}], {
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
