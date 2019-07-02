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
    "revision": "bb046cd3b1eca8ef7aee057962e38bc4"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "7d3d274180b81fabf349907018aa1ec2"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "2a7e46f649db98fb6100e08a06b56028"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "a9071d7d8c2d57f36c906e682ae1ffcd"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "86fc3877839f5a150eb7ccb923681ed0"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "ee35882e785dd33375ac3084b7adecbe"
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
    "url": "assets/js/app.9ccc462d.js",
    "revision": "e74b8d526b05989764cd9bbffa441e37"
  },
  {
    "url": "golang/learning.html",
    "revision": "290bd03e11ccf313d29e602acd66ca63"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "668005986ca75fa1815c78e548dc53ea"
  },
  {
    "url": "index.html",
    "revision": "2c3d06eeafea9ebed120866760903855"
  },
  {
    "url": "issue/golang.html",
    "revision": "d26e5b25431219f8dfb26bc2f05963d5"
  },
  {
    "url": "issue/mysql.html",
    "revision": "5df762c10d4b97c1f61b30dd3fc35897"
  },
  {
    "url": "issue/vue.html",
    "revision": "f2b57d3ae35422700823c7c96dcd8828"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "c3dadd58fea8486bc1476a5d0921c9b6"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "d5d4f66110141458b2199f611dc21a36"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "e2d61bb8602b3651be4685df2b001b46"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "e377dc1d6647bbdf7b7d0aedd8e11528"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "ab669eb280756a13e6393ec1b8a9106d"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "76b9408a51d9afa988b94ae2eb528878"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "c1b2e77368447d50515cb2e389e07f86"
  },
  {
    "url": "server/server.html",
    "revision": "3b2bbf5f310bc83dfd009f7551713646"
  },
  {
    "url": "webpack/learning.html",
    "revision": "c19dff2cd7f37a65a6a144bd3516a681"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "f99d6c9305985719bd59d4fb28c77925"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "c337c97978ca712b6e990aaf0082f590"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "bcafdb60f9bac84401e93530bd6421d6"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "9bc4b6709a1581419e4a5b7ff316c4dd"
  },
  {
    "url": "xp-review/index.html",
    "revision": "c00f93a31ead1adbb97c81778f005923"
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
