const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"622dd2269907fa6ab4d1ca9635270344","url":"./404.html"},{"revision":"1abadc0395e22b20ad2df6a1a703cf79","url":"./about/index.html"},{"revision":"6b5553dbd4b5ded57497f5bee0e9e683","url":"./archives/2020/02/index.html"},{"revision":"49f6156273d46ccf8650933f7b8fe8c1","url":"./archives/2020/03/index.html"},{"revision":"706a0b694a203a73573eecd82318d229","url":"./archives/2020/06/index.html"},{"revision":"37c208dba92ca8a9578a908c49eac167","url":"./archives/2020/07/index.html"},{"revision":"3357b9e3a4dda2a22c3360428a037d0d","url":"./archives/2020/08/index.html"},{"revision":"e3f31c1d99fc009d409e01ba20c0fde5","url":"./archives/2020/11/index.html"},{"revision":"7c48c5bd6caedb60db3a22cd81dbc839","url":"./archives/2020/12/index.html"},{"revision":"827a218cc6bafafb354edf167064da71","url":"./archives/2020/index.html"},{"revision":"eb7f9d1080a9ed391ceb84e81400a555","url":"./archives/2021/03/index.html"},{"revision":"ecfdf6bba507fc2aac24c5ea7e62fadb","url":"./archives/2021/04/index.html"},{"revision":"cc77b15a71e86a69745c7b31e74b0be7","url":"./archives/2021/06/index.html"},{"revision":"7be424705528dfff08a2cd3533c84a4d","url":"./archives/2021/index.html"},{"revision":"301bcff45824681e9d3ebe80f581bda3","url":"./archives/index.html"},{"revision":"bd91322f2db5ec241dfae55bd5205df4","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"f78162e130998b10e9f5a724a62c448f","url":"./bing/index.html"},{"revision":"aae85e1fa5b71c9a1c9b3caa0e6dadc6","url":"./categories/51单片机/index.html"},{"revision":"567291b4e9a71b5583fa49fb4b976c40","url":"./categories/黑苹果/index.html"},{"revision":"14a255d80798796ac37a0801eaab8879","url":"./categories/教程/index.html"},{"revision":"36faf053e8d12931b1d11f3b35fe998c","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"909f6f68156d30335c821499c24aa42c","url":"./categories/软件/index.html"},{"revision":"1beed834add75198e128f034530a01e6","url":"./categories/随笔/index.html"},{"revision":"32338f909cc50cd74e8a2c359ef815dc","url":"./categories/呓语/index.html"},{"revision":"be95e321e6f86f9ee8b2433ac65c801f","url":"./categories/index.html"},{"revision":"298c462c17a2ff2361ecf07b40d33b88","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"66520c164f1bdbd5c83e5b0e85d99b2b","url":"./categories/Python学习笔记/index.html"},{"revision":"9bcabd970135d90c810cc25d007b4fee","url":"./categories/Tensorflow笔记/index.html"},{"revision":"9c60d0e4fb86643726a523beac7e0b9a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"08d815b72a046a03213c315c47f219c3","url":"./Gallery/index.html"},{"revision":"1698d87070804015ee408a5e41962399","url":"./Gallery/wallpaper/index.html"},{"revision":"a8007658cd9f2a7dfb2d71aa9e0bcc37","url":"./hackintosh/index.html"},{"revision":"e8cc6beeae6c435d1bea76d2b79d5a1d","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"9d93847f6bf630eb76862432c424ac05","url":"./link/index.html"},{"revision":"6e2c7f750982216c7576160e348b26a9","url":"./love/food/index.html"},{"revision":"17884c09aea60705aa70fffce9c3fbaa","url":"./love/index.html"},{"revision":"daabd949ec40a08a459384a027a4eb32","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"123c1e6d07eaca06e740499f66e5775d","url":"./ncre-c/index.html"},{"revision":"7b9425dbcbaaff770751b7d8d8cff287","url":"./page/2/index.html"},{"revision":"327e0261f2179aaf3e132e44675803df","url":"./page/3/index.html"},{"revision":"0195510ee471d773e430f4e9e49e54be","url":"./post/12136/index.html"},{"revision":"948263f16785b2b4628f9621163f5bcc","url":"./post/1490/index.html"},{"revision":"8d3a610c72db47ce8a4cefa38d433f42","url":"./post/19561/index.html"},{"revision":"d36c54b05ec678e08c221150bfebe309","url":"./post/28299/index.html"},{"revision":"7677dd173e331008ec167d5888d128e6","url":"./post/30170/index.html"},{"revision":"ee9347d5e0392932ee70b6ec74b3d934","url":"./post/34236/index.html"},{"revision":"7419111091f3acd24fd310c576692563","url":"./post/36a1c976/index.html"},{"revision":"2cd7ca5b3dcab681650e4e5e69086020","url":"./post/39520/index.html"},{"revision":"0f2d9a59886f0b2509029d5f2f16b3b5","url":"./post/39697/index.html"},{"revision":"4c0a4e7b9578bafe5eb7a32460595938","url":"./post/44703/index.html"},{"revision":"32d21a2bc51afef43314c72362dfda2f","url":"./post/45b2259a/index.html"},{"revision":"316cfa1da5c9bd7efbf7e041343a101d","url":"./post/497570a1/index.html"},{"revision":"04ba73fa6bdb730af7887eff0cc00a0e","url":"./post/49f9/index.html"},{"revision":"71205578aa7738319cfeae029b6ccff4","url":"./post/4a9c3af0/index.html"},{"revision":"ad443e68090b160c75fe0822e525737f","url":"./post/4dd30b69/index.html"},{"revision":"9d1c7291e158a22a48a01b113c695173","url":"./post/5632/index.html"},{"revision":"caf74774989d75aee6115f116dc9817f","url":"./post/62d3/index.html"},{"revision":"ed2372b3edb7987a9fca90a1e8c014c9","url":"./post/67f8/index.html"},{"revision":"d5c36b31bee000bd5f66dd9d7d68e269","url":"./post/68f544ac/index.html"},{"revision":"d3e800d91be1f2edd2fa6d043c5cb98b","url":"./post/7a13585/index.html"},{"revision":"e6dd558717de34b7e420b7c94cfb1311","url":"./post/7dc5e7b1/index.html"},{"revision":"d20cf058d139ebe848732379397fc812","url":"./post/8251/index.html"},{"revision":"514e8cc3cdab51c4c01af0ad18db910d","url":"./post/84b9/index.html"},{"revision":"1694632565c48073a3e2062a2139107e","url":"./post/9ff9620/index.html"},{"revision":"c250667a82efd4ee54986318838ae6c4","url":"./post/a423/index.html"},{"revision":"668821da989740b0bf73dc8f2762508b","url":"./post/f43a2906/index.html"},{"revision":"d3d77a53f6ca704e6aaf16202f457b63","url":"./tags/51单片机/index.html"},{"revision":"e5e3fe5533db5c28bf93fb79f1725f46","url":"./tags/博客/index.html"},{"revision":"336806dba534bc8fd36cf5dfabee5427","url":"./tags/博客统计插件/index.html"},{"revision":"71c7b1bf755c85ee58f816ae3d23c7d2","url":"./tags/不蒜子/index.html"},{"revision":"4250f0139818ba02fd459fa2f6089d4a","url":"./tags/二级/index.html"},{"revision":"0ef3729f0014e9e19922a13b46a598bb","url":"./tags/黑苹果/index.html"},{"revision":"9bfc895288413a4e159ec05ce534bec8","url":"./tags/汇编语言/index.html"},{"revision":"6e071697d60a1bedd161c61538a94b76","url":"./tags/爬虫/index.html"},{"revision":"e35abfdbb95650d77dcacc05c08932a2","url":"./tags/软件/index.html"},{"revision":"1bea9c6956582e0dbf5c422372f09474","url":"./tags/图床/index.html"},{"revision":"5164286a242413275c18c00f881b30a9","url":"./tags/中断/index.html"},{"revision":"477fa582ccebb38b7f1ed207fa000105","url":"./tags/Github/index.html"},{"revision":"6ea7d930594bc6137325f099f9506874","url":"./tags/index.html"},{"revision":"a0dbded322f83a7e8457de55630ad7f5","url":"./tags/jsdelivr/index.html"},{"revision":"76eb8c6a844728880e76ebe3872549f6","url":"./tags/m3u8/index.html"},{"revision":"6977bde3197b25b7a66f6b2b83e77f86","url":"./tags/macOS/index.html"},{"revision":"05f304c238acf0d744481e976644d318","url":"./tags/Markdown/index.html"},{"revision":"2ad84f9046acce787c476da978bddbba","url":"./tags/OC/index.html"},{"revision":"33c18aab0b15ec78f1ced57618c97ac6","url":"./tags/OpenCore/index.html"},{"revision":"bba28cfdd36fe7649211750fee141e5f","url":"./tags/Python/index.html"},{"revision":"35004597aa7b472be73e519937be3a51","url":"./tags/Requests/index.html"},{"revision":"d32d24558f6032b6e5616c1db24d34df","url":"./tags/Scrapy/index.html"},{"revision":"d3a352b82bac1451a70841a7d36a60ee","url":"./tags/Tensorflow/index.html"},{"revision":"c4f324922ca670a8609d664f3c315680","url":"./tags/urllib/index.html"},{"revision":"6d4d88f68c1adf44c44c322f355697a0","url":"./tags/VMware/index.html"},{"revision":"b5f7c16be1fb7fb903e3ef62fdbb28fc","url":"./tags/Windows/index.html"}], {
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
