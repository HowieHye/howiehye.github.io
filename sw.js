const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"14ace03144b0c6f471b56b1f529c65f4","url":"./404.html"},{"revision":"d97f313c1504de4aa1c045ee825bb9da","url":"./about/index.html"},{"revision":"0473d3b8b9d9ea8523ad20f51d56d1db","url":"./archives/2020/02/index.html"},{"revision":"a1986e07f5c39c86caea6fb4be716006","url":"./archives/2020/03/index.html"},{"revision":"8083c8ae31abd509a493ee4aebeecd51","url":"./archives/2020/06/index.html"},{"revision":"1913952db1ad09a50ce26462106580a3","url":"./archives/2020/07/index.html"},{"revision":"357c1c214faa1c9ee9e8ce830c90497e","url":"./archives/2020/08/index.html"},{"revision":"7894014b93e605828511d8f80c8ebcd7","url":"./archives/2020/11/index.html"},{"revision":"c4348740a033bc857ba873c7636e9401","url":"./archives/2020/12/index.html"},{"revision":"7daf4021742e6d398b8ac27df522ad48","url":"./archives/2020/index.html"},{"revision":"b3878c9c437235f388f7b8a4ba803633","url":"./archives/2021/03/index.html"},{"revision":"572c3faa422c25ce21c819c36dcd9f51","url":"./archives/2021/04/index.html"},{"revision":"e16c9b7039a84913af2575c22d091103","url":"./archives/2021/06/index.html"},{"revision":"048e98ade24284b950ffccfd5b8a6f58","url":"./archives/2021/index.html"},{"revision":"8b058ee133aa6387c699e9c3259451c2","url":"./archives/index.html"},{"revision":"bd91322f2db5ec241dfae55bd5205df4","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"f78162e130998b10e9f5a724a62c448f","url":"./bing/index.html"},{"revision":"09780bd3453bc6d2713d715582f3521e","url":"./categories/51单片机/index.html"},{"revision":"b2923d6757a9e59966a4227ad888daf6","url":"./categories/黑苹果/index.html"},{"revision":"d72fbbbaae7da5a33f05673abdb80e2e","url":"./categories/教程/index.html"},{"revision":"b42be897868f47fb7e69c2c0616d7b56","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"d8a3d058920daf2af33a3a85964f89a3","url":"./categories/软件/index.html"},{"revision":"eafdba4f273cbc74acbec5b4463aab69","url":"./categories/随笔/index.html"},{"revision":"081252868af4a882116bb8fe7d8d7fd2","url":"./categories/呓语/index.html"},{"revision":"48a42181d12be66886da8414cc80516f","url":"./categories/index.html"},{"revision":"63f4c9be61964eb5c97569c0c17dfd94","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"ffebc493ee96fe7761ae2039ba2b0434","url":"./categories/Python学习笔记/index.html"},{"revision":"10d93dc9938d8da8a3fb1d02a3d05ca7","url":"./categories/Tensorflow笔记/index.html"},{"revision":"9c60d0e4fb86643726a523beac7e0b9a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"497425327563c52ffe78d96528d74fcf","url":"./Gallery/index.html"},{"revision":"9a46765d70c79651e547e77343f9d96c","url":"./Gallery/wallpaper/index.html"},{"revision":"3850b4fe7644ea308ca830102c4ee14c","url":"./hackintosh/index.html"},{"revision":"bda30742a0b314b73e2c44abc356b9ed","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5219ca1135feceb4eeaca798fd529043","url":"./link/index.html"},{"revision":"896ea383b2e85a4cfbdace5e77c259c0","url":"./love/food/index.html"},{"revision":"5dcbb9318542f9344aaf67dc455b9fdd","url":"./love/index.html"},{"revision":"15a41fc858c081ba3afd8bdef15b15f6","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"2fe0dc654c1c76190cae607d01ad3395","url":"./ncre-c/index.html"},{"revision":"a82a0ac8891957905897e2d621f8fc92","url":"./page/2/index.html"},{"revision":"6f273fbc1b09590dd9852c29975bb93b","url":"./page/3/index.html"},{"revision":"f6c2e82f7e57e2f8a77d04270d2a60b3","url":"./post/12136/index.html"},{"revision":"4961bc6e4a74904a39f52f9ced2291c6","url":"./post/1490/index.html"},{"revision":"ff26b3c11672bec58966e8000cda3288","url":"./post/19561/index.html"},{"revision":"4f0f9f0f801a8a2998689266cc0ebe15","url":"./post/28299/index.html"},{"revision":"e2c2fbee95f86493a06750d1658fba96","url":"./post/30170/index.html"},{"revision":"fc8a9ceb42340750dfebfcb33a28b8dd","url":"./post/34236/index.html"},{"revision":"e76d8c9b4830975118f111a7f1c019b1","url":"./post/36a1c976/index.html"},{"revision":"f83e41f940bfac4367c377123f181c9f","url":"./post/39520/index.html"},{"revision":"14310829def01929586a3b5001df53e4","url":"./post/39697/index.html"},{"revision":"549d0d5a352be462b5e35a955ca2e2a9","url":"./post/44703/index.html"},{"revision":"761ce7d62e75bb8e35dd42aa4a95cb10","url":"./post/45b2259a/index.html"},{"revision":"af814236cd95245cce9bd11332e2ce03","url":"./post/497570a1/index.html"},{"revision":"cb99cb82935b4880d4bb046a935d7912","url":"./post/49f9/index.html"},{"revision":"6eb9fa4a12021be8fcfa3c979e9059d0","url":"./post/4a9c3af0/index.html"},{"revision":"8a9d43ab399551b25d728237e2f5eac8","url":"./post/4dd30b69/index.html"},{"revision":"8dcab71def0917fa3c74c307fb588158","url":"./post/5632/index.html"},{"revision":"829a8a2808a5a7c132c9893c69535023","url":"./post/62d3/index.html"},{"revision":"c74d0299c7871bacbfdc7b35f8d791ef","url":"./post/67f8/index.html"},{"revision":"d1f006a8e40e5f00dea9af0f86131235","url":"./post/68f544ac/index.html"},{"revision":"f35c36418eb6fb5b8eb678016c4b40b7","url":"./post/7a13585/index.html"},{"revision":"2fe39209ab97d17b2b1bf3ddc5ed246c","url":"./post/7dc5e7b1/index.html"},{"revision":"49a46f8b937abe43cdbdc4c32e4dca83","url":"./post/8251/index.html"},{"revision":"cb6f8a11ff22ab7f58029e2cce488c7e","url":"./post/84b9/index.html"},{"revision":"1ce39c98d04c73817e0cccc87a8a437b","url":"./post/9ff9620/index.html"},{"revision":"0cef33e394f82ea0e4e19bdabfde1fd5","url":"./post/a423/index.html"},{"revision":"a3ad37c0d4cf6484296c7e5220b7523f","url":"./post/f43a2906/index.html"},{"revision":"d0312951bc871fd4ac28b669c8841a16","url":"./tags/51单片机/index.html"},{"revision":"3c1eeca40f42ae94c237965b81515e6c","url":"./tags/博客/index.html"},{"revision":"02e56d81c1fc915574e780a6e069ac35","url":"./tags/博客统计插件/index.html"},{"revision":"89d0cf91b91d939754b230b06d629aa9","url":"./tags/不蒜子/index.html"},{"revision":"2fe0821afc41f7e1a1a4b4c2755de1d5","url":"./tags/二级/index.html"},{"revision":"cf06acd3aa940256b5ad334d8ef7aa1b","url":"./tags/黑苹果/index.html"},{"revision":"11592ab223554ee1c9165eab57fb70dd","url":"./tags/汇编语言/index.html"},{"revision":"f1484b6d87fb807cf9dcf51faa1304b2","url":"./tags/爬虫/index.html"},{"revision":"eb068554dc4debb09b5958025d33dabc","url":"./tags/软件/index.html"},{"revision":"1177885d8c278518863570877517b72f","url":"./tags/图床/index.html"},{"revision":"8ee43d7aa0b5bdb66278af7ff9183e8d","url":"./tags/中断/index.html"},{"revision":"2e61e59948f3af42793ee02afcc73595","url":"./tags/Github/index.html"},{"revision":"c77ff4a2a49222dd415781dc4a02aacc","url":"./tags/index.html"},{"revision":"6aff1e2f455bb453b50ee579149c0850","url":"./tags/jsdelivr/index.html"},{"revision":"8302b0a7dfc119c835c5f9e5345d470b","url":"./tags/m3u8/index.html"},{"revision":"b8d81dc5865662c65c167d909210001a","url":"./tags/macOS/index.html"},{"revision":"2b4c0f24e3a4d724d82741dd9e0002e2","url":"./tags/Markdown/index.html"},{"revision":"dd7963c0d75018203bee8ba5abf0e67a","url":"./tags/OC/index.html"},{"revision":"02f650034c8950d029337af6ddb62879","url":"./tags/OpenCore/index.html"},{"revision":"9eca57e0cc0126e21ff97fc7032b2b02","url":"./tags/Python/index.html"},{"revision":"05091230c7ca928681d7caadbb53530c","url":"./tags/Requests/index.html"},{"revision":"419a88c9c641182fa8d26ba4837648a8","url":"./tags/Scrapy/index.html"},{"revision":"f5988031351ede7d40879656240bb27e","url":"./tags/Tensorflow/index.html"},{"revision":"d2d1f1299b5cbf2ddd26fc895f59f711","url":"./tags/urllib/index.html"},{"revision":"0d58c5d3c1122836537792231aae9c10","url":"./tags/VMware/index.html"},{"revision":"74e507898ccf701c7e4d021441773ff7","url":"./tags/Windows/index.html"}], {
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
