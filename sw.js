const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"27c111a4073ac463d97c96028b458fc4","url":"./404.html"},{"revision":"5153a5ba37b53d59fb9f6615e196ce8f","url":"./about/index.html"},{"revision":"7eee55e3562e44b2d304c5965b0866a4","url":"./archives/2020/02/index.html"},{"revision":"b14865b0d68473c8f2d656cc619b816e","url":"./archives/2020/03/index.html"},{"revision":"494df97da2fbc32ab54dff743ee4c132","url":"./archives/2020/06/index.html"},{"revision":"c64a0bf071c35580a2d465b67c7d0f96","url":"./archives/2020/07/index.html"},{"revision":"55585ce429c7b0afcc278c0cbbf9a059","url":"./archives/2020/08/index.html"},{"revision":"0aee2c493eb626dae89dd7994d27c234","url":"./archives/2020/11/index.html"},{"revision":"726e8da4e3754676985dd4d9b813f5fa","url":"./archives/2020/12/index.html"},{"revision":"d40dcfb36ec5cd514ead40d431713c2b","url":"./archives/2020/index.html"},{"revision":"b52e1aabd52a3da084660dde5c8bb0c1","url":"./archives/2021/03/index.html"},{"revision":"6f2e821e3edbe0e6d14026059bd411bc","url":"./archives/2021/04/index.html"},{"revision":"d9b05a877bda341bd0423953855bda06","url":"./archives/2021/index.html"},{"revision":"ff0c35cdd6c5819d7a604a16cf6fe811","url":"./archives/index.html"},{"revision":"c9b5ad5b117d761c1d7a832d14affcd0","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"e92391cb91b7d447c1ca0baa0b1e04bc","url":"./bing/index.html"},{"revision":"ed7c3589e2d6e54aab721794d0ccd0e3","url":"./categories/51单片机/index.html"},{"revision":"046fd4e721b30b04704d16df9783f19e","url":"./categories/黑苹果/index.html"},{"revision":"497916a4abaa7d3e9372dba771921355","url":"./categories/教程/index.html"},{"revision":"13130a67e3703cec8905b589f2d45a58","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"98c311ba1ea8bd15fe554c170c51d159","url":"./categories/软件/index.html"},{"revision":"89f3667535d6689159998922a992fe1f","url":"./categories/随笔/index.html"},{"revision":"32d597abfd1964d1b3054b96e0a73627","url":"./categories/呓语/index.html"},{"revision":"432536dba0bf471ef3db31913f5aaeb8","url":"./categories/index.html"},{"revision":"45d9b9f6a567481b3992a2150f49363a","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"dd9827c94c8a2db0c531c8d3362b50c6","url":"./categories/Python学习笔记/index.html"},{"revision":"b2396a25de8f4f2725be7721e17fffba","url":"./categories/Tensorflow笔记/index.html"},{"revision":"45fe74cf5f6596dde52d122fe0e9e240","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8ab87bf3c3094f6a02d81a740413b7c8","url":"./Gallery/index.html"},{"revision":"43729f7f62e7579439697797c25781fe","url":"./Gallery/wallpaper/index.html"},{"revision":"9937b8bccccd3fe12585c7be469dbbca","url":"./hackintosh/index.html"},{"revision":"1ca83d216ee6c7d03291a04d20367d04","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"2f79939cd6f037f8cfb9fdfa61b6fa2d","url":"./link/index.html"},{"revision":"0a750ff27d0a38fb45ef767a1dfc8858","url":"./love/food/index.html"},{"revision":"292133b725c40eee8563ce68f1998e32","url":"./love/index.html"},{"revision":"81f98ac02f6f394b1191470faee0789a","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"35974f9c058bb6e49becb2293cdaadcf","url":"./ncre-c/index.html"},{"revision":"e3a5454f81eb0d3709fcc71bb9ae15cd","url":"./page/2/index.html"},{"revision":"ba31e897033d76badaee270b794f6c8b","url":"./page/3/index.html"},{"revision":"0123a2c8e956a999a8e4a4177c7464f4","url":"./post/12136/index.html"},{"revision":"a9eba57d9936e0e5eaf2b8692c35032c","url":"./post/1490/index.html"},{"revision":"32b195fd6633c51f268f33a352585245","url":"./post/19561/index.html"},{"revision":"23d8742695c32dc38abe316fb7151ed5","url":"./post/28299/index.html"},{"revision":"dfefc95129a7f48bfe703921c1ad027e","url":"./post/30170/index.html"},{"revision":"b5faff87f148fdfa5b8f0715aa15a8f7","url":"./post/34236/index.html"},{"revision":"021bdb94988726bbdf5f94d7a454a30b","url":"./post/36a1c976/index.html"},{"revision":"f146a1a2df627ab1ee88ca329c0d9e3c","url":"./post/39520/index.html"},{"revision":"ab001715231edf9e68b36315f91ccd8b","url":"./post/39697/index.html"},{"revision":"9dcba9b8d3d4eea36d6d818995673e0d","url":"./post/44703/index.html"},{"revision":"2dcdb5507f7c6fa017437714c6959d66","url":"./post/497570a1/index.html"},{"revision":"06d8a2986f5d8d3986e99a486f26b15b","url":"./post/49f9/index.html"},{"revision":"31df3e61c99857e14120658eefa2c355","url":"./post/4a9c3af0/index.html"},{"revision":"971560d5df82d9231266d5342acc863d","url":"./post/4dd30b69/index.html"},{"revision":"02315c965a6d02ba337a6b635e0866a0","url":"./post/5632/index.html"},{"revision":"76e53baa0c4f3c80710aa266b408f050","url":"./post/62d3/index.html"},{"revision":"3d48744c57fd7eec6862b01b8e1580cb","url":"./post/67f8/index.html"},{"revision":"4af9a111e3814a62aec8c5e3c169460f","url":"./post/68f544ac/index.html"},{"revision":"2e029a57d73fbc496ec83fc0119241bd","url":"./post/7a13585/index.html"},{"revision":"cad150245fc7802387f0210328fe2273","url":"./post/7dc5e7b1/index.html"},{"revision":"369c2a9076623b9c10e5bf595a1cc15d","url":"./post/8251/index.html"},{"revision":"17f1bcea145d3e04efb2263cf27f44e8","url":"./post/84b9/index.html"},{"revision":"443b3718db50329efe975905243b84b0","url":"./post/9ff9620/index.html"},{"revision":"c19d8058e54a39f6015ee8482773f7c0","url":"./post/a423/index.html"},{"revision":"66e17292171292859a823a1b38f7d48f","url":"./post/f43a2906/index.html"},{"revision":"d88aff0c145c089632a090855d366729","url":"./tags/51单片机/index.html"},{"revision":"0a3351c73db96af10e62853618c1a70d","url":"./tags/博客/index.html"},{"revision":"da01cff1967f0ded0a77d9ef5e05ecc2","url":"./tags/博客统计插件/index.html"},{"revision":"5a3e558cdf562941814678e78867b9f6","url":"./tags/不蒜子/index.html"},{"revision":"67bba79269c90a75ceea1381cf2fdc78","url":"./tags/二级/index.html"},{"revision":"31fe587b1d6be0531f1e5b59d1f76749","url":"./tags/黑苹果/index.html"},{"revision":"6fa28ae71dc44c04912f37fac9511019","url":"./tags/汇编语言/index.html"},{"revision":"a9af7f115dd6b8478fe3abffc82d979f","url":"./tags/爬虫/index.html"},{"revision":"5dfc83bd02665a56acbd497b17c40ff0","url":"./tags/软件/index.html"},{"revision":"35bc07facf06b01f6483e466d7d38512","url":"./tags/图床/index.html"},{"revision":"aa524392c177b5dbc7337c21bc29aea1","url":"./tags/中断/index.html"},{"revision":"0f9e9df2a9e84bf74b5d3cc7d3e09542","url":"./tags/Github/index.html"},{"revision":"7eeebf20b8578747454b8e002a995226","url":"./tags/index.html"},{"revision":"9e7042dda9b3799b91745fbfb231d6c6","url":"./tags/jsdelivr/index.html"},{"revision":"2c9062317202528161e4c508a74204db","url":"./tags/m3u8/index.html"},{"revision":"e664271f4306b54a9d488ccba28b4f75","url":"./tags/macOS/index.html"},{"revision":"a30f249f48329016183d3d00fc2fb0f3","url":"./tags/Markdown/index.html"},{"revision":"23e5f2c58001974e3b8f4819224f3c7c","url":"./tags/OC/index.html"},{"revision":"c6f60e941de7bab8d45349ac5fd04090","url":"./tags/OpenCore/index.html"},{"revision":"275cf6183f92d353cfbb2225d6ce378b","url":"./tags/Python/index.html"},{"revision":"1f2c10214afc42406157871cc9d2a1bd","url":"./tags/Scrapy/index.html"},{"revision":"c46670ac2a53eb2f9c67fab39271f846","url":"./tags/Tensorflow/index.html"},{"revision":"5c9ccc1aa5ede22bb3fcea366cecca17","url":"./tags/urllib/index.html"},{"revision":"be1093c0a5159a6227dd669b7bfc568d","url":"./tags/VMware/index.html"},{"revision":"b1d272060caefd9a0d99656dd212d481","url":"./tags/Windows/index.html"}], {
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
