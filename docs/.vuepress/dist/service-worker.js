/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "17228b0742b9a7e180d4a620bbc5c7a7"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "772efc4343785b7592ed71d932a81ca5"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "b0da173b5701903acc7aa9f53f732ad6"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "249fda8c201db20568c941006c1bd88c"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "a6a2407bf3c8fe23c2ec3d6ca9172e8f"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "109d1c4c84d083a17e4537e1ce34e8ed"
  },
  {
    "url": "assets/css/0.styles.05c040d9.css",
    "revision": "808c4f2ce5a76b3b2cf8450f1481361c"
  },
  {
    "url": "assets/img/070012140173654.6179cb30.png",
    "revision": "6179cb30c5646d739e53b8720e16558c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f87685cd.js",
    "revision": "8bd035287c0e29abd6d4d31e02feaa28"
  },
  {
    "url": "assets/js/11.6a7d9171.js",
    "revision": "6de1a2e859922bffa04aeccfa4df76e2"
  },
  {
    "url": "assets/js/12.c8581ba8.js",
    "revision": "9bb4aee8789ca2a5b534921ed9bdcdc1"
  },
  {
    "url": "assets/js/13.79a22245.js",
    "revision": "38638978025df1f48d7390c748864b8d"
  },
  {
    "url": "assets/js/14.7d40d46d.js",
    "revision": "813d4b39cc5886c7f229eb1feb392588"
  },
  {
    "url": "assets/js/15.587ab61c.js",
    "revision": "93db4586635e4b175ba270ddc707bd81"
  },
  {
    "url": "assets/js/16.882f81b6.js",
    "revision": "67b3b79d6f1eb685f92d54e7d1c337dc"
  },
  {
    "url": "assets/js/17.465d69d4.js",
    "revision": "bb9d70ffccc1c82ce7db85d2eaaa49ca"
  },
  {
    "url": "assets/js/18.ea14570d.js",
    "revision": "ea40a90efe1256a64e7430ab7d1afc87"
  },
  {
    "url": "assets/js/19.3be0d9b9.js",
    "revision": "8a1714fea176a59587bd350ad481f2fc"
  },
  {
    "url": "assets/js/2.e4aa99c2.js",
    "revision": "82548d6327ccbfe9c2153436334b99d8"
  },
  {
    "url": "assets/js/20.171a35e8.js",
    "revision": "6b082186d034f8c5f1c215f1527eef09"
  },
  {
    "url": "assets/js/21.beeb2acc.js",
    "revision": "7d4b75865908e2e7639e8c801b586b4f"
  },
  {
    "url": "assets/js/22.f5b4f5b9.js",
    "revision": "666bcd34ebc3cc2ce9e71d4e2e8c92fd"
  },
  {
    "url": "assets/js/23.63b72c97.js",
    "revision": "1e14a01b52d9817e9fc6fe0df66cb64a"
  },
  {
    "url": "assets/js/24.587a57c2.js",
    "revision": "9084a6368a6731f6a9a0045448e55d85"
  },
  {
    "url": "assets/js/25.b62c8319.js",
    "revision": "e3d6cf9ea6833ed015b060464a6e8613"
  },
  {
    "url": "assets/js/26.e5d00832.js",
    "revision": "c417e2bda370473afad1fd79227283bf"
  },
  {
    "url": "assets/js/27.2a211952.js",
    "revision": "53633b0cd1524f7a48bad64f6f24d81f"
  },
  {
    "url": "assets/js/28.011cfa70.js",
    "revision": "6aa0e8dc956280f0738af5359e720c2b"
  },
  {
    "url": "assets/js/3.a72fd15f.js",
    "revision": "295c36eff00931ed7dfc135c062fca46"
  },
  {
    "url": "assets/js/4.e2f6be75.js",
    "revision": "15d9a426d0827d331e578b0f9550560c"
  },
  {
    "url": "assets/js/5.3ff94dfd.js",
    "revision": "f45950322040b67c806d098f253d8193"
  },
  {
    "url": "assets/js/6.e0c85bd7.js",
    "revision": "85ef651b43638dd0d9524572572375cb"
  },
  {
    "url": "assets/js/7.93c52bec.js",
    "revision": "81fba816f28a90e0a7157ce267146671"
  },
  {
    "url": "assets/js/8.00d685c6.js",
    "revision": "c15e5f3fcdae9b877b61503211b28026"
  },
  {
    "url": "assets/js/9.778875c0.js",
    "revision": "63def96ef1b52ed39a73a932e24b0121"
  },
  {
    "url": "assets/js/app.56668791.js",
    "revision": "76f13f5c31b6c90b9061f6b4737250b5"
  },
  {
    "url": "golang/learning.html",
    "revision": "a09a64a1b7b5436db9263ed274ebc76b"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "f85ca72ff2264a72c61abd85f2d58811"
  },
  {
    "url": "index.html",
    "revision": "3c3dad3b29553c5ff2f6c6b3e5b781fe"
  },
  {
    "url": "issue/golang.html",
    "revision": "cce934ad1fce326b9d8e89f8fa883acf"
  },
  {
    "url": "issue/mysql.html",
    "revision": "242e10e74b8047f2db482b4d7c485095"
  },
  {
    "url": "issue/vue.html",
    "revision": "442b53e242a9a2f108c649d2ad77c8b4"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "a90ee53c906592a7c497a8393efb57b0"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "f6ef6a7ae7a1b2c1272bd46eb1ba4dd7"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "d85e4404a92d03ed025ac7caac34139b"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "8eae01f453c8b6ea623282723374bf73"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "d3130066cff7b8fbf670da5608850ac5"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "dadc6debaa69f6eb2aa1af37560b8ada"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "c35a7865858785c37b50922337200342"
  },
  {
    "url": "server/server.html",
    "revision": "adf023ad6457bfac99a2ef891f371eb3"
  },
  {
    "url": "webpack/learning.html",
    "revision": "9ff85faf05130a25b43efa9740b5d57f"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "0be2f4eabd9797267b2878967282ad0a"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "a7486ad3a68796ba13af91b53de0d2f5"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "b7bc0a3cd1654084d67ee639b8042d64"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "8aa0bf3b23665d977abced9276453a82"
  },
  {
    "url": "xp-review/index.html",
    "revision": "c87a72ee33ac408dbc353041e928df38"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
