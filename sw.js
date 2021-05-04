const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "Howie Hye",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"01adfa1094d2651896f278552a95313f","url":"./404.html"},{"revision":"5dbb222be234573427deb3690d84d9bc","url":"./about/index.html"},{"revision":"15158447a4f9d3f838e5350c1f2bcb8c","url":"./archives/2020/02/index.html"},{"revision":"f083e41bba38260a1e948b5524819674","url":"./archives/2020/03/index.html"},{"revision":"69558d326d2f62e167c0fab355db6fa0","url":"./archives/2020/06/index.html"},{"revision":"83acad7f1a77f325d250875990b290ec","url":"./archives/2020/07/index.html"},{"revision":"e106ebce1a1b6713c07f55696b65152b","url":"./archives/2020/08/index.html"},{"revision":"0c787f73d46cefa1f6935e95b9b2cdad","url":"./archives/2020/11/index.html"},{"revision":"0e915bee2d79690520271d9a5fa7245c","url":"./archives/2020/12/index.html"},{"revision":"ca23e25da4f57b19eaace05986c28816","url":"./archives/2020/index.html"},{"revision":"f7fa614ae1ac74462cbb89d51fecf85d","url":"./archives/2021/03/index.html"},{"revision":"1e37fad44316ffd7a9a531d8ae1d8bfc","url":"./archives/2021/04/index.html"},{"revision":"dc26153b67e9ba6695cf80a33aa99987","url":"./archives/2021/index.html"},{"revision":"f928b37c333f85053538724b77ff89b6","url":"./archives/index.html"},{"revision":"f71d76bdc1769b3aa01012301c5dca07","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"81fbea61f4ecc2f417d9b0a378ecd7d2","url":"./bing/index.html"},{"revision":"e2aa9376a50e34658f69e8b2737ffec7","url":"./categories/51单片机/index.html"},{"revision":"4e90be8304d223bcb4fec14a97e9baf8","url":"./categories/黑苹果/index.html"},{"revision":"a46386e1b6a4ec9a029674386b5027f5","url":"./categories/教程/index.html"},{"revision":"70012ec51807e4421c6fac82c8259a1b","url":"./categories/全国计算机二级C语言过关攻略/index.html"},{"revision":"456bf68356bc9454c0b5f43a00e711ab","url":"./categories/软件/index.html"},{"revision":"b142811b0dd2af193d009e236a499b86","url":"./categories/随笔/index.html"},{"revision":"54cdd30008b4cc4a4b46c16878023a40","url":"./categories/呓语/index.html"},{"revision":"3341208e868e1a68b89acb284aec051c","url":"./categories/index.html"},{"revision":"8021cf0dc003669f22eec16e3380df6e","url":"./categories/Python爬虫学习笔记/index.html"},{"revision":"d29e79c277c2d96fe77c7ee8fc053bb5","url":"./categories/Python学习笔记/index.html"},{"revision":"10d47d4e5d271ed29aa83049e4c75d9d","url":"./categories/Tensorflow笔记/index.html"},{"revision":"e10939a81aacb2d3b92801e0515b00af","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a87ecebe2f7dd034fdf6cfe2516ad859","url":"./Gallery/index.html"},{"revision":"2bbd4f7401f8f4821f9afd5f82ee81d2","url":"./Gallery/wallpaper/index.html"},{"revision":"b918f9312a2a094a212e20b677bc74b4","url":"./hackintosh/index.html"},{"revision":"1f3a6c0bda6d2b28d36077df5ae5a137","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"fc200653dec6a2ff1fec42ec0f74ff80","url":"./link/index.html"},{"revision":"e884077ce68392767ecf9a4d51f866f5","url":"./love/food/index.html"},{"revision":"beb700fe687ac9eab33e3d74adc586a8","url":"./love/index.html"},{"revision":"bd49936b36ae441fb4a8b31fbdb20be3","url":"./love/play/index.html"},{"revision":"802530c0cf11b386f838844454b62ae8","url":"./manifest.json"},{"revision":"a040ecd2d3392be2f57978b103e467a0","url":"./music/data/main/main.json"},{"revision":"b8a57288da5ef5712cd4a4ec7f6b4ce7","url":"./music/data/track/track.json"},{"revision":"cfb72771043f9fc50e276a552c499b0d","url":"./music/index.html"},{"revision":"3dc2e89c79dab7b6c50150ae0114423e","url":"./ncre-c/index.html"},{"revision":"f729efafebcb6482c015a47e54fe7a75","url":"./page/2/index.html"},{"revision":"bf2d806cdd091a86be9f439730c98cec","url":"./page/3/index.html"},{"revision":"55bae55d21a8f6b9aaea99f543fa449b","url":"./post/12136/index.html"},{"revision":"bf3d4e4cab277b5dd53fb6f21dee2a01","url":"./post/1490/index.html"},{"revision":"b698468e815a064c173d1c6482976bdd","url":"./post/19561/index.html"},{"revision":"5a1396df1420cb03b562e871b18d1a26","url":"./post/28299/index.html"},{"revision":"91c6f15c0a388f703c19a4b56f0fe44d","url":"./post/30170/index.html"},{"revision":"2748644a85fb91a34e1d8f60eb60c505","url":"./post/34236/index.html"},{"revision":"7de2e6f9debd22fab4bf6e8f8414f534","url":"./post/36a1c976/index.html"},{"revision":"3dbed4b9ddaa00f76ed3e8576be420a8","url":"./post/39520/index.html"},{"revision":"de67e75925fdc6546455ae877720e6b1","url":"./post/39697/index.html"},{"revision":"676203050ead98894cca2db650f44d3b","url":"./post/44703/index.html"},{"revision":"1b4bb876ac981cc431096a1b970b0c5c","url":"./post/497570a1/index.html"},{"revision":"8aec96cea81b01d1fb7d369e9dff5c35","url":"./post/49f9/index.html"},{"revision":"6410388f85e43e92c2dbf14a18161a56","url":"./post/4a9c3af0/index.html"},{"revision":"463623f25c5e0d34611c09c2b7c4f715","url":"./post/4dd30b69/index.html"},{"revision":"0b4572f2658fa24fd66b667c99ffd151","url":"./post/5632/index.html"},{"revision":"993183a7037966fc3c27d16485070b1b","url":"./post/62d3/index.html"},{"revision":"0e7effa054634f25070f832e5fda8ae3","url":"./post/67f8/index.html"},{"revision":"9925c57ad96c6d1d5b014877a77a4d22","url":"./post/68f544ac/index.html"},{"revision":"28e23dcb38b48b068c1e43be8f0e69fe","url":"./post/7a13585/index.html"},{"revision":"721c6daeb3d5edecb01da623ec0ef263","url":"./post/7dc5e7b1/index.html"},{"revision":"bb1cf80e94366087e351c6b3bfe6093a","url":"./post/8251/index.html"},{"revision":"1cf22d24d8b501f9ffb820abf42a7f27","url":"./post/84b9/index.html"},{"revision":"057876cdc79283ac6f209b089565375c","url":"./post/9ff9620/index.html"},{"revision":"2a814206d233239e5be5f97c0be973fa","url":"./post/a423/index.html"},{"revision":"60aa55f664d6eb31f9738e79101d7958","url":"./post/f43a2906/index.html"},{"revision":"37844c20acec8affd2d0be54930052a4","url":"./tags/51单片机/index.html"},{"revision":"2ae427fee929edadfce8dba7a35c093a","url":"./tags/博客/index.html"},{"revision":"516a332eb4a3db9f1fa9e2d8c887a039","url":"./tags/博客统计插件/index.html"},{"revision":"dd1a709ecc3286348680034dc17668ec","url":"./tags/不蒜子/index.html"},{"revision":"14a2316d9862cbf6b84be271b39c197c","url":"./tags/二级/index.html"},{"revision":"9c478ac962778197886b9668bf9f418c","url":"./tags/黑苹果/index.html"},{"revision":"8bbbbc6b7811562ec16e904af8206a52","url":"./tags/汇编语言/index.html"},{"revision":"8676af1b468341a8cbbb1b762edd68aa","url":"./tags/爬虫/index.html"},{"revision":"ce9d05bec082ba9b89e7668cd05b8fdf","url":"./tags/软件/index.html"},{"revision":"7bcb7c676c1d7f94871054ec860cd297","url":"./tags/图床/index.html"},{"revision":"3bbe78d21013d693acba58497745ba41","url":"./tags/中断/index.html"},{"revision":"cd19cc770f719c6a1df15935c95e581f","url":"./tags/Github/index.html"},{"revision":"65cca368279dbc42a89816dcc036b52b","url":"./tags/index.html"},{"revision":"4b060835df2307532982f38a1f115c52","url":"./tags/jsdelivr/index.html"},{"revision":"2f246ac902dcafbc6b39d4e71c2bb197","url":"./tags/m3u8/index.html"},{"revision":"1790353913359e4777977163d2737bd4","url":"./tags/macOS/index.html"},{"revision":"fe3304ae09000da4abaa575dfab10778","url":"./tags/Markdown/index.html"},{"revision":"76faf49ca11ec977c88102866788a23a","url":"./tags/OC/index.html"},{"revision":"fe78aa492c188f9605f2d6757bb99117","url":"./tags/OpenCore/index.html"},{"revision":"125f3a224aabb22b003bf35c6ecc0cad","url":"./tags/Python/index.html"},{"revision":"c849eb67242d40b195d832f8934f619e","url":"./tags/Scrapy/index.html"},{"revision":"ce953efae5b6820b4bec9a30e35fdd6b","url":"./tags/Tensorflow/index.html"},{"revision":"9f4237660e354d70604c66e86246d8b3","url":"./tags/urllib/index.html"},{"revision":"0def9267e9fc601efc8f655caf8269ba","url":"./tags/VMware/index.html"},{"revision":"9b56b701cccdc203e98c8baa980218fe","url":"./tags/Windows/index.html"}], {
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
