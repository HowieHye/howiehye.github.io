const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"67383b6f7830ee8f1dd2b70cc948c649","url":"./404.html"},{"revision":"3f1a661bdfb644946665c7462021995e","url":"./about/index.html"},{"revision":"bc4522e9495053797f6eb725a44d607a","url":"./archives/2020/02/index.html"},{"revision":"9c3998464eb9db50c54e15e82c7f313f","url":"./archives/2020/03/index.html"},{"revision":"2f0588ee3877fe768d68c0b1af7224e4","url":"./archives/2020/06/index.html"},{"revision":"43eec4395d4c03f2af7f96fea4310ae3","url":"./archives/2020/07/index.html"},{"revision":"56a45b2d163bf1685cf3749d09dd565f","url":"./archives/2020/08/index.html"},{"revision":"004bfcc6ded621d6e05f7a0b08f871c2","url":"./archives/2020/11/index.html"},{"revision":"7dbb17b497511b8fab17ec219d8774e7","url":"./archives/2020/12/index.html"},{"revision":"48c53c072435dc6223d05592ad4b488c","url":"./archives/2020/index.html"},{"revision":"e1a643e3dc566ed58a083a4c4be9ca90","url":"./archives/2021/03/index.html"},{"revision":"d1b388d128a4845fa5cd93065083b5c7","url":"./archives/2021/04/index.html"},{"revision":"17a4747fdf81d1f359e062b620f474d3","url":"./archives/2021/index.html"},{"revision":"51d715b57df4131a42ebfba34ca92937","url":"./archives/index.html"},{"revision":"c73537c7fb98e56a62ffabe2e6c7fa20","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"8fae3674bba5ed5805f50804c6a123dd","url":"./bing/index.html"},{"revision":"fac7dcf7ce64d060af6b58af7cafa6d7","url":"./categories/51单片机/index.html"},{"revision":"3ba2c487e70f4274c2b8cac66944304e","url":"./categories/黑苹果/index.html"},{"revision":"e37f6ae53c6e57bbe12fd180dbb31fbc","url":"./categories/教程/index.html"},{"revision":"ff3a93b6348fb6713b11c9a548e0f58c","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"e9318911703f279d265cf5c568b526ee","url":"./categories/软件/index.html"},{"revision":"af91520aa73b0983124c31a6ca951a86","url":"./categories/随笔/index.html"},{"revision":"a94a316edbbaf7b47547d42859be0852","url":"./categories/呓语/index.html"},{"revision":"363b99a91bd1abb057e15ff8e69f161f","url":"./categories/index.html"},{"revision":"f5200dc89cb814e6e4782b03fba43b0b","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"2be3325d84bf4d00f4d37b496e388e2e","url":"./categories/Python学习笔记/index.html"},{"revision":"d6815a9b3cd40b53c9b963b11d32a4ca","url":"./categories/Tensorflow笔记/index.html"},{"revision":"c9c9c5e739b44b1960991ede1917bad3","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"dd28482121f41d3a9f96a22dcb7eff1e","url":"./Gallery/index.html"},{"revision":"2771ae5ae297e9c4e5e32a4066237b1c","url":"./Gallery/wallpaper/index.html"},{"revision":"31d8104214d44cf2f2ad67bd95c51d4b","url":"./hackintosh/index.html"},{"revision":"87defdaceb2d72680d11b3c61fe537dd","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"38216f0112d69fb947a6fc4af869263e","url":"./link/index.html"},{"revision":"63ae49701adb56713a7261ebcd33234a","url":"./love/food/index.html"},{"revision":"68944616a0d307b70d3afe469a42e90d","url":"./love/index.html"},{"revision":"8c331ada8299476d8bb3787bfb9b7be8","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"69bb602b62381837f55d0f6485f6f3fe","url":"./ncre-c/index.html"},{"revision":"631eb7c692471d4f838f62ba189d56bd","url":"./page/2/index.html"},{"revision":"0b3898d4eb95c055673c4a939b449232","url":"./page/3/index.html"},{"revision":"18e3d67ce111f21fae55dae3f66e3228","url":"./post/12136/index.html"},{"revision":"fd90a92612b41cb5520d8ca1a565ff2b","url":"./post/1490/index.html"},{"revision":"ac68240a5d57c4d4434d2bec49af9e04","url":"./post/19561/index.html"},{"revision":"062172b383be7ebedfc7f5d73eb6937a","url":"./post/28299/index.html"},{"revision":"963220872df58e91b42f40f740eb24fa","url":"./post/30170/index.html"},{"revision":"3f3e191b8d1bed349066da5950f65758","url":"./post/34236/index.html"},{"revision":"790743f026a4bfb94ccb90a5477d37bf","url":"./post/36a1c976/index.html"},{"revision":"b52dbaf7ee7c1fa47f3e2b386b9a239f","url":"./post/39520/index.html"},{"revision":"1bf9f62c1afebd7bbcc386cd3a5e89c5","url":"./post/39697/index.html"},{"revision":"33d99542af8509440f41a6a3957ed3bb","url":"./post/44703/index.html"},{"revision":"d989fd95abdbfa2175789486d40d0935","url":"./post/497570a1/index.html"},{"revision":"5330bba5242a36edaa963d36768e0d0e","url":"./post/49f9/index.html"},{"revision":"14712e6d1daf1f19cb4b83f8b0b4da57","url":"./post/4a9c3af0/index.html"},{"revision":"f2937a78d91f97b5791e26cefa8b8272","url":"./post/4dd30b69/index.html"},{"revision":"a5c313611df4238fba3ea1d7bf9029f5","url":"./post/5632/index.html"},{"revision":"18807dbeae6d9541877b238dc0c9b256","url":"./post/62d3/index.html"},{"revision":"caf69e0dad70cf752173634a2af40094","url":"./post/67f8/index.html"},{"revision":"01222b6a3c3740f3489885a64fca62c5","url":"./post/68f544ac/index.html"},{"revision":"cbbcec31a5bf20d002e06f9428bf0f70","url":"./post/7a13585/index.html"},{"revision":"fb97b9bc4a32ac63e924c80ea2c1ea43","url":"./post/7dc5e7b1/index.html"},{"revision":"8d2d08f9f2df28e2bf68a982b14eddcd","url":"./post/8251/index.html"},{"revision":"8d2fda184def97752be68c8256dd36ce","url":"./post/84b9/index.html"},{"revision":"26fef0dd787f3630e3ec024ce9defac3","url":"./post/9ff9620/index.html"},{"revision":"3df8af8f5f335bc8223653cd340ae3da","url":"./post/a423/index.html"},{"revision":"946863c2768bde53da26fdc803734519","url":"./post/f43a2906/index.html"},{"revision":"905a5259d2fb51a0e29b2a0d77c5ca85","url":"./tags/51单片机/index.html"},{"revision":"b8708e2ee945a5b52181ee2c0b7c6d9a","url":"./tags/博客/index.html"},{"revision":"12e0a650477a126f36091f01c71f28be","url":"./tags/博客统计插件/index.html"},{"revision":"e43724b876acb7989507a16e4c474e9c","url":"./tags/不蒜子/index.html"},{"revision":"699d5185018c8f563c908ce64d3df148","url":"./tags/二级/index.html"},{"revision":"cf46e62b1b5ddb406edda7ab4dc7b8f3","url":"./tags/黑苹果/index.html"},{"revision":"6987d39f2ead270a78fac94a09e72d02","url":"./tags/汇编语言/index.html"},{"revision":"6b84f5e35bb87aa4cab9f0e987eb9470","url":"./tags/爬虫/index.html"},{"revision":"9810453d616239f407d2d68d4602b162","url":"./tags/软件/index.html"},{"revision":"e2218d19fd30284ffe841ba28c68e14d","url":"./tags/图床/index.html"},{"revision":"6aeba926e4fccb0ba8d06c4efa24a0f4","url":"./tags/中断/index.html"},{"revision":"7434c294fa1152a8d3d3b3ab04dbc2e8","url":"./tags/Github/index.html"},{"revision":"3f952a2386938592067c00ec8bc97fcf","url":"./tags/index.html"},{"revision":"7dbb6d8d6572b0a1234aced7a01115ac","url":"./tags/jsdelivr/index.html"},{"revision":"776e2c792b3764fad8c08ca4ec3499d8","url":"./tags/m3u8/index.html"},{"revision":"35d098989502c001e5ee5e40af7b74fc","url":"./tags/macOS/index.html"},{"revision":"0aa8a1a03d8a9746b2c4f703ed63c67d","url":"./tags/Markdown/index.html"},{"revision":"47dfa0c4a6bf89ff1c3c59af21c011f0","url":"./tags/OC/index.html"},{"revision":"6ed8ff86e57f2387f2fb01d6230c3318","url":"./tags/OpenCore/index.html"},{"revision":"27812778ab0dee388fa44d3c07b842be","url":"./tags/Python/index.html"},{"revision":"868191f653ee6362e3ff97c49b0ff7db","url":"./tags/Scrapy/index.html"},{"revision":"7f3e4a9d988e42a2a40d6f356a89bd20","url":"./tags/Tensorflow/index.html"},{"revision":"30f567075023c13ab317e6f85eebea83","url":"./tags/urllib/index.html"},{"revision":"1c86e3cd80d695742bc7c11cd68bc056","url":"./tags/VMware/index.html"},{"revision":"45fd694e8e75c669535e175893dbe485","url":"./tags/Windows/index.html"}], {
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
