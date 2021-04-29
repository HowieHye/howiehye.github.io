const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f2547aee11b9a004a4d8d0f6a4d15d3b","url":"./404.html"},{"revision":"b38377c0d1095da48ec8c5a70d3dd950","url":"./about/index.html"},{"revision":"6f3c1b67491081ec34c5da0c8c96ed26","url":"./archives/2020/02/index.html"},{"revision":"49b1b03490dd628443e66c9e56b78f88","url":"./archives/2020/03/index.html"},{"revision":"c78ba8501cecdf6ef9638edc9184aa83","url":"./archives/2020/06/index.html"},{"revision":"e8575f65e438dbcd15c9bbd825ed8720","url":"./archives/2020/07/index.html"},{"revision":"2bb0172071669d5f46fadb005fc2436f","url":"./archives/2020/08/index.html"},{"revision":"96fd034543005c6f2e7bbe9da93383f5","url":"./archives/2020/11/index.html"},{"revision":"b39732e5b5ff30cd2687ba1594ff30e0","url":"./archives/2020/12/index.html"},{"revision":"e6a6c4d7fc144585a96c60cfd48a25b0","url":"./archives/2020/index.html"},{"revision":"80ae966bd02e497de8a43a22b2842fa0","url":"./archives/2021/03/index.html"},{"revision":"9c15a64dce831bf405467609717dcdb7","url":"./archives/2021/04/index.html"},{"revision":"c3816a1e8d57195c6fac64c87724ed8b","url":"./archives/2021/index.html"},{"revision":"50a2c6889d23ff092245fa3437432398","url":"./archives/index.html"},{"revision":"374170e2bd3b35626b7e83b316e6516d","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"7927094f6c3f804c9227badb43eb05cb","url":"./bing/index.html"},{"revision":"7a2f2be247895d4246b401985ca0a2a9","url":"./categories/51单片机/index.html"},{"revision":"e0cc823d1190c7249d2e0a17b9f7aa47","url":"./categories/黑苹果/index.html"},{"revision":"f20770c22c9f735e479680b1f2dd62e3","url":"./categories/教程/index.html"},{"revision":"4e5daff317402d3b2e90cdc5070e638b","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"93117566df0100ebe3c9875f2c629775","url":"./categories/软件/index.html"},{"revision":"6e9bd97a67d57406f5db8bf058f4c01a","url":"./categories/随笔/index.html"},{"revision":"0fc2b1ca36e31c7c2d928ae8b7c7c02f","url":"./categories/呓语/index.html"},{"revision":"0e621f17a2ff7325f1e0c72a2ff7cdab","url":"./categories/index.html"},{"revision":"3f6935df0012ce5070695750b818a8ba","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"2c6bb2ca2c7eb3ee81ebdd40a0a7a5b3","url":"./categories/Python学习笔记/index.html"},{"revision":"a2f9adeb5834b1f8e9db19c901814337","url":"./categories/Tensorflow笔记/index.html"},{"revision":"c9c9c5e739b44b1960991ede1917bad3","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a07b578d6bb8d6c810f7a442364a8890","url":"./Gallery/index.html"},{"revision":"a537dcd3c565c8750ff3b6865718770c","url":"./Gallery/wallpaper/index.html"},{"revision":"c8394818fe05c9561f208915adf92853","url":"./hackintosh/index.html"},{"revision":"a0f0d94699c7d766fb3e2337061f63c4","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"c02977bd46ebd350c258d949ff98f2e5","url":"./link/index.html"},{"revision":"0177199ed5ff2da4a0135095b89d7649","url":"./love/food/index.html"},{"revision":"57ad88ec82f6116464c90fc23e8d6805","url":"./love/index.html"},{"revision":"079f8e6b7acff6f440021c647144adfe","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"89ea1f136dba333c0c74e5fd7a6e8d0e","url":"./ncre-c/index.html"},{"revision":"6261584f79cf93fb2a3bc5e0a4fb3798","url":"./page/2/index.html"},{"revision":"3832e2e340f61ebf6527e38665ac4561","url":"./page/3/index.html"},{"revision":"c2ddd7621cbe01220a582ff43ac9f8f1","url":"./post/12136/index.html"},{"revision":"1832b6457b9186e2e72b1a2030e08726","url":"./post/1490/index.html"},{"revision":"34ff2574a0dcbd7c2c4a8b2b5e05635c","url":"./post/19561/index.html"},{"revision":"2444cb17bb93bb938ff28e62b837b1d3","url":"./post/28299/index.html"},{"revision":"0b536574c8bdc8a158efc823fcdd0655","url":"./post/30170/index.html"},{"revision":"6957a5135e6d0276065fb80a273ab49d","url":"./post/34236/index.html"},{"revision":"18547d952714b0594eebc0c66c1d2ab5","url":"./post/36a1c976/index.html"},{"revision":"50b15cd289b071b014a3517197b10980","url":"./post/39520/index.html"},{"revision":"31f78ea67c6d16f29697ffcb08680a07","url":"./post/39697/index.html"},{"revision":"fe21db520ec6941bd7898d7d2b129e73","url":"./post/44703/index.html"},{"revision":"80c8d980f552cc2cd5bde328bdadfb54","url":"./post/497570a1/index.html"},{"revision":"5a0c037a815d7feba0c4d215e6c103f8","url":"./post/49f9/index.html"},{"revision":"7c6f90cdc87447be0630557ce5bb3b60","url":"./post/4a9c3af0/index.html"},{"revision":"b7b32b45585d910d82321c247924745a","url":"./post/4dd30b69/index.html"},{"revision":"c49b917f8ac2b3c6aa95632acb8c09b8","url":"./post/5632/index.html"},{"revision":"b93bc961bf535adb06ac6a45f010f0cd","url":"./post/62d3/index.html"},{"revision":"a36a05f6e19363f81f2d57aa6c4e9610","url":"./post/67f8/index.html"},{"revision":"05c6605746db4a8a51e23dba64321a0c","url":"./post/68f544ac/index.html"},{"revision":"b65ccdd054a139c52d6403baea8667bb","url":"./post/7a13585/index.html"},{"revision":"e9a687a6901c4d11917e9d72f80cd2f7","url":"./post/7dc5e7b1/index.html"},{"revision":"8e1688c1a3e0a6308f5c37cf23f8efdc","url":"./post/8251/index.html"},{"revision":"e996f04171e14e3932d87d6d8dd495d7","url":"./post/84b9/index.html"},{"revision":"02719aedc11e5b1852924aebf09baa21","url":"./post/9ff9620/index.html"},{"revision":"ca54f42a68e7ca9ce445acbcc9b4ca98","url":"./post/a423/index.html"},{"revision":"c8d384bcca7dfa1d10d8152362e3fbfe","url":"./post/f43a2906/index.html"},{"revision":"2f4ca3f440ce8f6cd6fc7943081dfbad","url":"./tags/51单片机/index.html"},{"revision":"0d3bac9201fee3e1d4cf344d814c218a","url":"./tags/博客/index.html"},{"revision":"d3eb551b089ed619e1a5ab6e4da74009","url":"./tags/博客统计插件/index.html"},{"revision":"589c59891c06b8788b0cd838d54fa739","url":"./tags/不蒜子/index.html"},{"revision":"4d3722232f695dc188ed253e599d2efa","url":"./tags/二级/index.html"},{"revision":"ac298bde0a283d6eb483e0a35a9de3c1","url":"./tags/黑苹果/index.html"},{"revision":"dfcb279357798cefe09a6e9219efc242","url":"./tags/汇编语言/index.html"},{"revision":"38325e3ccb9596dfee26e7b76e57fec8","url":"./tags/爬虫/index.html"},{"revision":"894d6d2fae6b9724caf0e7f555f7be7b","url":"./tags/软件/index.html"},{"revision":"d55c4d0402c9350cf669de25a62479f3","url":"./tags/图床/index.html"},{"revision":"52f0d8d9ba40c6e548627dc04e045f9a","url":"./tags/中断/index.html"},{"revision":"c72a42f7f242b727dfaea138cceaea52","url":"./tags/Github/index.html"},{"revision":"2565c822fa533929bca8467a5cef68c2","url":"./tags/index.html"},{"revision":"e1022038d70e961d0e138de516faca36","url":"./tags/jsdelivr/index.html"},{"revision":"6b0c7f3c39fc1c95d288887c8becc84b","url":"./tags/m3u8/index.html"},{"revision":"bea7b2bd7dd3db6d4e64950fd4571607","url":"./tags/macOS/index.html"},{"revision":"e1d280ba4a62b4967e5e14baea1a3712","url":"./tags/Markdown/index.html"},{"revision":"18d654a325089099e2fcdde7c4069ff6","url":"./tags/OC/index.html"},{"revision":"9acb33771744d00bfb187e5a7484f106","url":"./tags/OpenCore/index.html"},{"revision":"95bb9c9e510aa326816d81fe087cba09","url":"./tags/Python/index.html"},{"revision":"9a2141564d76939901aefbead91632df","url":"./tags/Scrapy/index.html"},{"revision":"0ea52cae01ef23fc3c7a188d82032220","url":"./tags/Tensorflow/index.html"},{"revision":"727627b2f1c1b99e67ba99c389b10179","url":"./tags/urllib/index.html"},{"revision":"16ff0da3393d99dda36884272905d317","url":"./tags/VMware/index.html"},{"revision":"2bf857baac3244b5572365ba811fe557","url":"./tags/Windows/index.html"}], {
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
