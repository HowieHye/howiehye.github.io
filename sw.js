const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d0f41d3bbbfa5a2ab99827f8c23017d5","url":"./404.html"},{"revision":"3c439e918474f8a26e4cf068a8d20067","url":"./about/index.html"},{"revision":"1fb2a3c51115aa1e5a3dabaf4e1a59e4","url":"./archives/2020/02/index.html"},{"revision":"1d4d8a67fc5720089e738777c1de467e","url":"./archives/2020/03/index.html"},{"revision":"8877419269fcdccd257c451725b2d4cb","url":"./archives/2020/06/index.html"},{"revision":"7e3181c071fd5ed1c6a2846462f16e80","url":"./archives/2020/07/index.html"},{"revision":"e359f7675b9d6b2f5b6fdb25a715313d","url":"./archives/2020/08/index.html"},{"revision":"de068c1a465f1f21f17fbcfaee632e92","url":"./archives/2020/11/index.html"},{"revision":"d35bd5c67e1251cac7d3a503ba6f48f3","url":"./archives/2020/12/index.html"},{"revision":"c0e9adfffc23eab4dcbd2fd7879c8de4","url":"./archives/2020/index.html"},{"revision":"b3e67f1bdd98d60ddd197056b688d5db","url":"./archives/2021/03/index.html"},{"revision":"1269ef99f55584aba04913d632109873","url":"./archives/2021/04/index.html"},{"revision":"27a3427a29487620821b654bc1a4a097","url":"./archives/2021/06/index.html"},{"revision":"861d3287cee697009c50c74ea7ea9283","url":"./archives/2021/index.html"},{"revision":"33aaf3db08055233ea6e4e654f822838","url":"./archives/index.html"},{"revision":"bd91322f2db5ec241dfae55bd5205df4","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"f78162e130998b10e9f5a724a62c448f","url":"./bing/index.html"},{"revision":"b0bf92ad992e4846ea3a087ed0902fce","url":"./categories/51单片机/index.html"},{"revision":"3b88a73078bb8c972d7d8a23ea155bc7","url":"./categories/黑苹果/index.html"},{"revision":"69e315ab2c5a18a1672508ddc9555dfd","url":"./categories/教程/index.html"},{"revision":"cd15dcc290aa21fe41057fefa647e2a8","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"9bcc04bad129eeab37498f97cc12bd75","url":"./categories/软件/index.html"},{"revision":"ef9b169678ff1e0e558982506a09ffb1","url":"./categories/随笔/index.html"},{"revision":"3cff6fd4eaa107a14ffff9d0af0afdf2","url":"./categories/呓语/index.html"},{"revision":"51ddb013b6b76af372ae96ef08fdca26","url":"./categories/index.html"},{"revision":"549d232d3a5f58373198fd1b20bc26d6","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"e1261861f59a18c34caa647c2959fde7","url":"./categories/Python学习笔记/index.html"},{"revision":"7b401cb987e67fa34cb3faa71d0a522a","url":"./categories/Tensorflow笔记/index.html"},{"revision":"9c60d0e4fb86643726a523beac7e0b9a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"35276b48013c336d2e0849f167432667","url":"./Gallery/index.html"},{"revision":"8288493fa5b32e53de2a91f56a64d608","url":"./Gallery/wallpaper/index.html"},{"revision":"25fd3b4c9f8e122be9f0d3b4157a3978","url":"./hackintosh/index.html"},{"revision":"485b93d0b82b1082e98fb1e6490038db","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"323a5283f16a2aa5dda750f0a36c9659","url":"./link/index.html"},{"revision":"d28c2768b8e4ba27d88bf871f569711b","url":"./love/food/index.html"},{"revision":"f88e4f96ec5db902e91606f4f300ef54","url":"./love/index.html"},{"revision":"d975beb1e9ae9067422aad9f3344b292","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"6a9784a1d15f343beb3a4fe43b542d9e","url":"./ncre-c/index.html"},{"revision":"4b8b7ac93314e5681d8bc784b42790f5","url":"./page/2/index.html"},{"revision":"a6d4a9db9d7e9ee409ce48feb7b9d4a6","url":"./page/3/index.html"},{"revision":"5810b8690a42e6f4c374252217c3a741","url":"./post/12136/index.html"},{"revision":"793648904ee3c1abd5532e36c90ee85d","url":"./post/1490/index.html"},{"revision":"de64a05f1153819bf19b41f0fba2a9a4","url":"./post/19561/index.html"},{"revision":"2987cd7034280b2b1a5e8c5ee35cf4e4","url":"./post/28299/index.html"},{"revision":"d18b935b438638dab2be59429ba77549","url":"./post/30170/index.html"},{"revision":"2335fe5f2648754f4b1e10a49d2f813b","url":"./post/34236/index.html"},{"revision":"799a3fc610d1f28499e0698a2b304c29","url":"./post/36a1c976/index.html"},{"revision":"b914c8cb3fdf8ec94cce81fd336195c5","url":"./post/39520/index.html"},{"revision":"52f7d9bb8ef0bf6b8157e50cbd47e6c2","url":"./post/39697/index.html"},{"revision":"65e926b8938e685b6d4c462ad116e9d4","url":"./post/44703/index.html"},{"revision":"2d05700870826cd3b93ef0f2caad0dd2","url":"./post/45b2259a/index.html"},{"revision":"5e39a57096d5bee800c3a853e8b6551c","url":"./post/497570a1/index.html"},{"revision":"df4eb0d480602edbaaea4649d0a61d1c","url":"./post/49f9/index.html"},{"revision":"e6d2ab3014693ec406bf77372b72fd18","url":"./post/4a9c3af0/index.html"},{"revision":"540169f7addf68ad2a9d7a916e86b927","url":"./post/4dd30b69/index.html"},{"revision":"a9f6916c24d25eda959f2bb852ad0c95","url":"./post/5632/index.html"},{"revision":"335aab0b23e5b42ba1db07eb0f9eda06","url":"./post/62d3/index.html"},{"revision":"1f9275f104beee5e8938c49d2e833582","url":"./post/67f8/index.html"},{"revision":"e43ebe792c33409fc03708cae2d4f6c0","url":"./post/68f544ac/index.html"},{"revision":"df68bf3240c830f2b36203743f3109c5","url":"./post/7a13585/index.html"},{"revision":"0d151e3c5cf00a8b8fe2a0e6bc61bf10","url":"./post/7dc5e7b1/index.html"},{"revision":"db046f8f649c452d608c34c51f6813af","url":"./post/8251/index.html"},{"revision":"18fd09555d176157e8d4763d34344a26","url":"./post/84b9/index.html"},{"revision":"1d758f1761949d7302b7ab751ac6d709","url":"./post/9ff9620/index.html"},{"revision":"4c393743dc5f59288da4d1866190ab66","url":"./post/a423/index.html"},{"revision":"ef30e0d2e74bd72da6334381f1bb8985","url":"./post/f43a2906/index.html"},{"revision":"c7bed775ffd149c647088bc2d0315777","url":"./tags/51单片机/index.html"},{"revision":"3414ab764e2960426e2e278a5d154a8d","url":"./tags/博客/index.html"},{"revision":"2ec4f6c24dc822a6d47527149782fda7","url":"./tags/博客统计插件/index.html"},{"revision":"575844452b6f20c903f58e965516fb64","url":"./tags/不蒜子/index.html"},{"revision":"9fba012af0a1909473137622f576af55","url":"./tags/二级/index.html"},{"revision":"113e0b53c08bda09276900a02db78401","url":"./tags/黑苹果/index.html"},{"revision":"4457a4c034cd4c2914e0f5c2a2356c7e","url":"./tags/汇编语言/index.html"},{"revision":"9abc5c9aea109499b12d373cb5b4adeb","url":"./tags/爬虫/index.html"},{"revision":"9d1ac2368a8f757e2cce96fde698328d","url":"./tags/软件/index.html"},{"revision":"08cc84608da73b22361acd1c960f6e0b","url":"./tags/图床/index.html"},{"revision":"15882a4832ee009a196c786409209afa","url":"./tags/中断/index.html"},{"revision":"30faeb489c704585a103d48454a2d412","url":"./tags/Github/index.html"},{"revision":"1a2f210c2628e4c9adc6587a38c907e3","url":"./tags/index.html"},{"revision":"339a47a1bbd316ca9b382afa4a180160","url":"./tags/jsdelivr/index.html"},{"revision":"4f293e80254c6a81142f9fd9812d81b7","url":"./tags/m3u8/index.html"},{"revision":"e89a2293d23bbc323c80dc20ff37544d","url":"./tags/macOS/index.html"},{"revision":"0d088afb61f3edb746f6decb79b620ce","url":"./tags/Markdown/index.html"},{"revision":"3b8c18875a39da19d1dbab34e3a22d39","url":"./tags/OC/index.html"},{"revision":"24d52d0050f51756a82bd627e0377ffc","url":"./tags/OpenCore/index.html"},{"revision":"9981bc180d81547611a7b9e3fa9104fa","url":"./tags/Python/index.html"},{"revision":"5964404c939ed767f2c1b0f64a486bbd","url":"./tags/Requests/index.html"},{"revision":"fe9d934da3419f1a689deb9d609830f2","url":"./tags/Scrapy/index.html"},{"revision":"a645f96a7d78fc10f7aa6e7a8f2f738f","url":"./tags/Tensorflow/index.html"},{"revision":"073987cf9296a77269e1c0aab5778a32","url":"./tags/urllib/index.html"},{"revision":"007299f3b25aa220312f4bbadef36ea8","url":"./tags/VMware/index.html"},{"revision":"22ae633d4428dcc370a4faf84d5f379e","url":"./tags/Windows/index.html"}], {
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
