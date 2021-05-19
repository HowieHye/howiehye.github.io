const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"55b7a37a8d4a62db286701076537fc77","url":"./404.html"},{"revision":"fb4a2df49bd417c30a517267ed0412b0","url":"./about/index.html"},{"revision":"3e2b4f4547e1e95cfdda388e820fd4d1","url":"./archives/2020/02/index.html"},{"revision":"4c48c12b7b31e4ce696722cd1801969e","url":"./archives/2020/03/index.html"},{"revision":"2a3f589d4e2e413b4092b596e5632882","url":"./archives/2020/06/index.html"},{"revision":"09a521efe145c4bbee340a0a5fcc69ba","url":"./archives/2020/07/index.html"},{"revision":"2a3db1873debb2cc0a6f869aa356d95a","url":"./archives/2020/08/index.html"},{"revision":"64855fad142fd66f10737e395e975e77","url":"./archives/2020/11/index.html"},{"revision":"c385a5ea7c914e163a728ebbf3b5df88","url":"./archives/2020/12/index.html"},{"revision":"ed6f8b2040528b3c39ca139cf6d06d88","url":"./archives/2020/index.html"},{"revision":"1938f056b4a4e8cbc4077e60135bcd0a","url":"./archives/2021/03/index.html"},{"revision":"d584b378f81f05d4eb7916f97f7ba8b1","url":"./archives/2021/04/index.html"},{"revision":"eedf6bea52475689129e39e5af9beda3","url":"./archives/2021/index.html"},{"revision":"8d940f8fb70ec8d25ebda5a9efba03cc","url":"./archives/index.html"},{"revision":"f71d76bdc1769b3aa01012301c5dca07","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"81fbea61f4ecc2f417d9b0a378ecd7d2","url":"./bing/index.html"},{"revision":"34780675675b0453075bbee8696fef8e","url":"./categories/51单片机/index.html"},{"revision":"37b54148316c80299314f99cf9b6efce","url":"./categories/黑苹果/index.html"},{"revision":"e91e52c021c55ad0e24480bdea3d879f","url":"./categories/教程/index.html"},{"revision":"71e3afe4aa02841cb2aa4cea8e18eb0d","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"812efbef3fbecbc8f779df42d285d1d1","url":"./categories/软件/index.html"},{"revision":"5fab87826fc48199ece826bf62b02503","url":"./categories/随笔/index.html"},{"revision":"24604c2640dfbcaaf87436b602183c5d","url":"./categories/呓语/index.html"},{"revision":"56a6a949b8a16b52a8a76eceb6cd66e4","url":"./categories/index.html"},{"revision":"fd96a10d9b9486ecb3351997f08d3b82","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"a1602be7f00c456a7b7b6c99110817a8","url":"./categories/Python学习笔记/index.html"},{"revision":"1daadda43221b5bdcbd2ceaeaaa666fd","url":"./categories/Tensorflow笔记/index.html"},{"revision":"e10939a81aacb2d3b92801e0515b00af","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1184bedf5395ae59dee333a8c85019ac","url":"./Gallery/index.html"},{"revision":"8452ee87bee378f70ba5e50ffee19039","url":"./Gallery/wallpaper/index.html"},{"revision":"f4455148d1a0aaacc3a21e85546901a9","url":"./hackintosh/index.html"},{"revision":"9e1d40daf061791fefe18a141c1206f6","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"6889032806f6e0b3e40debbf45eecef0","url":"./link/index.html"},{"revision":"a865fe0244f6bf9c30520b2b8eee1629","url":"./love/food/index.html"},{"revision":"790ae4dd1c9fb907fc3993a853efaaae","url":"./love/index.html"},{"revision":"f1a41b2332040154af251971a1c27bd9","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"c2f24fcaa8316e0498d9ef0cf7c2344e","url":"./ncre-c/index.html"},{"revision":"94fc5b08de3bb15625f01d2d7b9014ba","url":"./page/2/index.html"},{"revision":"617a2213ee3bccce29883dedc821f916","url":"./page/3/index.html"},{"revision":"55bae55d21a8f6b9aaea99f543fa449b","url":"./post/12136/index.html"},{"revision":"bf3d4e4cab277b5dd53fb6f21dee2a01","url":"./post/1490/index.html"},{"revision":"b698468e815a064c173d1c6482976bdd","url":"./post/19561/index.html"},{"revision":"5a1396df1420cb03b562e871b18d1a26","url":"./post/28299/index.html"},{"revision":"91c6f15c0a388f703c19a4b56f0fe44d","url":"./post/30170/index.html"},{"revision":"2748644a85fb91a34e1d8f60eb60c505","url":"./post/34236/index.html"},{"revision":"7de2e6f9debd22fab4bf6e8f8414f534","url":"./post/36a1c976/index.html"},{"revision":"3dbed4b9ddaa00f76ed3e8576be420a8","url":"./post/39520/index.html"},{"revision":"de67e75925fdc6546455ae877720e6b1","url":"./post/39697/index.html"},{"revision":"676203050ead98894cca2db650f44d3b","url":"./post/44703/index.html"},{"revision":"1b4bb876ac981cc431096a1b970b0c5c","url":"./post/497570a1/index.html"},{"revision":"8aec96cea81b01d1fb7d369e9dff5c35","url":"./post/49f9/index.html"},{"revision":"6410388f85e43e92c2dbf14a18161a56","url":"./post/4a9c3af0/index.html"},{"revision":"463623f25c5e0d34611c09c2b7c4f715","url":"./post/4dd30b69/index.html"},{"revision":"0b4572f2658fa24fd66b667c99ffd151","url":"./post/5632/index.html"},{"revision":"993183a7037966fc3c27d16485070b1b","url":"./post/62d3/index.html"},{"revision":"0e7effa054634f25070f832e5fda8ae3","url":"./post/67f8/index.html"},{"revision":"9925c57ad96c6d1d5b014877a77a4d22","url":"./post/68f544ac/index.html"},{"revision":"28e23dcb38b48b068c1e43be8f0e69fe","url":"./post/7a13585/index.html"},{"revision":"721c6daeb3d5edecb01da623ec0ef263","url":"./post/7dc5e7b1/index.html"},{"revision":"bb1cf80e94366087e351c6b3bfe6093a","url":"./post/8251/index.html"},{"revision":"1cf22d24d8b501f9ffb820abf42a7f27","url":"./post/84b9/index.html"},{"revision":"057876cdc79283ac6f209b089565375c","url":"./post/9ff9620/index.html"},{"revision":"2a814206d233239e5be5f97c0be973fa","url":"./post/a423/index.html"},{"revision":"60aa55f664d6eb31f9738e79101d7958","url":"./post/f43a2906/index.html"},{"revision":"61da7c224ce7567c3baa99d1d58d3bce","url":"./tags/51单片机/index.html"},{"revision":"c9ac1beccd10230410287b07316db308","url":"./tags/博客/index.html"},{"revision":"69d65bd11f90fea88b4d144e99520b89","url":"./tags/博客统计插件/index.html"},{"revision":"04ed62121c36ab89220477d6ad390df3","url":"./tags/不蒜子/index.html"},{"revision":"dacc028c3f4e0864af31ceeb6872cd68","url":"./tags/二级/index.html"},{"revision":"2a07730dc87da2bf43698445c9255a1f","url":"./tags/黑苹果/index.html"},{"revision":"67829fde55ebb46e2bce4508d6e7afff","url":"./tags/汇编语言/index.html"},{"revision":"564fce50a99d3d0ec2ec8a1480fb5f4e","url":"./tags/爬虫/index.html"},{"revision":"022361caa7bd89053c8844c8cd73cae2","url":"./tags/软件/index.html"},{"revision":"edd3833b1f0a829e10b6c8667fe91d73","url":"./tags/图床/index.html"},{"revision":"d56d0d5bd8acecaa98279b6cc8debdf4","url":"./tags/中断/index.html"},{"revision":"516012670f9376dfb3b7276b4ce7e90e","url":"./tags/Github/index.html"},{"revision":"389a2a49668ba1381f36092ff153c4dc","url":"./tags/index.html"},{"revision":"cf9f482ee0447fd48c5b6898d92dddfa","url":"./tags/jsdelivr/index.html"},{"revision":"70c3e40cd74ea8f2b8ab2f231bc54e63","url":"./tags/m3u8/index.html"},{"revision":"a0e1f0edf668502a3b7f5615a6e6694b","url":"./tags/macOS/index.html"},{"revision":"26397bf17725f2dbcc7ace75b182d878","url":"./tags/Markdown/index.html"},{"revision":"5cdfa884c188ee7f61bb66de1ff64feb","url":"./tags/OC/index.html"},{"revision":"f24b47280bd551370f1b81055f6919ef","url":"./tags/OpenCore/index.html"},{"revision":"985b9041f5d7028cc4acd46760ac6059","url":"./tags/Python/index.html"},{"revision":"076ee60c470541ed8bdc127c8a554096","url":"./tags/Scrapy/index.html"},{"revision":"54a298eb7bb0313ae2a51d024f5d1d38","url":"./tags/Tensorflow/index.html"},{"revision":"cfa37d003223505e2dc97f2993d1e5eb","url":"./tags/urllib/index.html"},{"revision":"fffbb7a8bdc92f245719b148753b41ad","url":"./tags/VMware/index.html"},{"revision":"c6e9b90549a15c17cfba3f02d3d72c3e","url":"./tags/Windows/index.html"}], {
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
