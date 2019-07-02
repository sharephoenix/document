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
    "revision": "93c3f8f7a7f502ee37fab99fdde7da00"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "31f413f17fabf7050d29266e7ab91de5"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "0c3587b2cb9b97b314d97c5e1a1887a2"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "a0b032b79f8d0083b1283450fa50e9b1"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "d96d7f030440b534fc47f11c292a8833"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "5cdc0180342a1d50698aa652ce45faf0"
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
    "url": "assets/js/5.295dad6d.js",
    "revision": "2c0908f001de60c30b875f885a6d2de9"
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
    "url": "assets/js/app.637f50c1.js",
    "revision": "be1b24689b8a9e596a27b0245d3fa915"
  },
  {
    "url": "golang/learning.html",
    "revision": "3d47ba96f9508b7a59347f1f6fb3044c"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "65f12aada0c1e3f731a07baa4da84947"
  },
  {
    "url": "index.html",
    "revision": "d7dae4952ab5aa7be14108f533281231"
  },
  {
    "url": "issue/golang.html",
    "revision": "3cde4e684ef13fd666bff89e4ec68928"
  },
  {
    "url": "issue/mysql.html",
    "revision": "7b3370a8e9fe7171411ea9f0c25fbcc0"
  },
  {
    "url": "issue/vue.html",
    "revision": "2411e8b5c255c34c02b5e53004bd5209"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "b4e7bfff6f9c084fa2a1013e98189ff4"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "7a1e90ef93158c4d0174d95e2ac77dde"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "419bf8518c37ad6122348c484dad2967"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "0adc00d8a949a0bec07b7ff32292a4f1"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "4765e0c818555e0fea4a3c8b4e05f5d1"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "c52c33c1af5dbf7be25a313e2114c763"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "a4ce332bb4ae3dc8f3af01bf16f15842"
  },
  {
    "url": "server/server.html",
    "revision": "79f56091560365ad7cc23ef73058ef41"
  },
  {
    "url": "webpack/learning.html",
    "revision": "51d3ac8ed4207656aaedfde709551027"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "17dd8dc17fb31df8fa0e9cab97a1fd2c"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "8f7e6b02ed655c7ea2853e3a2d97c54a"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "f9d4a229ce0aff8be799495f6af38a6c"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "173832ff407aeb74f079af324ede28b1"
  },
  {
    "url": "xp-review/index.html",
    "revision": "47befdb486d29c0d470cc98b2d3b5364"
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
