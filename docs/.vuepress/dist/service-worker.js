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
    "revision": "12c2a7313b0511e10134f01825f27e46"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "8fe0810f839d62a8c3d5b73731af495f"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "523a55d00a794f9a350fb8c2a3c0f4a8"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "7387f04ec56fad6b3ba30da72b7be170"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "8ebba254f0f2860b1d68f27b6999de10"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "3948db6285409aa87661e20b31f32fa9"
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
    "url": "assets/js/14.6fc89b16.js",
    "revision": "cff32101bf42318baa4cd88425387364"
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
    "url": "assets/js/25.a0e97ab1.js",
    "revision": "4a9b1931681d76f9b33b38c773b368ab"
  },
  {
    "url": "assets/js/26.ee28db47.js",
    "revision": "70b851fe3dcc1910804a15938ee821ff"
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
    "url": "assets/js/5.61c18e08.js",
    "revision": "51e81f757a0f0c88ebc197c18b7da321"
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
    "url": "assets/js/app.93318a60.js",
    "revision": "e21d327d7c18cea293ae8322d3e352a5"
  },
  {
    "url": "golang/learning.html",
    "revision": "c064e7075b2654b1030b7dcfb586836a"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "e9dd63874f63d715707429583d6d813c"
  },
  {
    "url": "index.html",
    "revision": "eed57ccb3280e6bea13d58a3dd0884ad"
  },
  {
    "url": "issue/golang.html",
    "revision": "0a094b978a6ecf2ff65fe5b23bbda5f4"
  },
  {
    "url": "issue/mysql.html",
    "revision": "a26dedcaed7c0410c4c1488fac77b0cf"
  },
  {
    "url": "issue/vue.html",
    "revision": "ac14edf13606e5e27523a97f1761588e"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "437065f1631bd3e2ea74737ba6fd01bf"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "4d4745b68da4a2ce28525e3eb5b322fb"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "053b06fc8a60ead054c967d7a62d7a52"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "e25a95dc69e6b17e784c45c04246c690"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "1d0e118f963c1ad048ffe27818346a17"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "7d1d19b6562f295feea58889829b5333"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "f38516afbccdf9d7cbb60bbc996fe84a"
  },
  {
    "url": "server/server.html",
    "revision": "37f5beb9281431fdd42f9265db170a4d"
  },
  {
    "url": "webpack/learning.html",
    "revision": "5c0a932d62cc20b3fe9d5735cea9e1f4"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "6e7573ff20e28a745bf145052e7d5076"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "9951790c8b74a69fea8c5dea859e99ae"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "bc11b58c0369c3d74fa49b71b44fdaa1"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "eebb6438090ba0ddc92ba05f117d4175"
  },
  {
    "url": "xp-review/index.html",
    "revision": "843ae14bdac42f28449c538bd1b5c6e1"
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
