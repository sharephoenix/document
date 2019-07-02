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
    "revision": "6a72d9729cfc51c17de141cc017458ed"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "dd2c597e6a45f2620d816e541bf3a719"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "b58bdce4c8099e44339d55bd6af18df9"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "7409a0fb13e9515079d5621cb87f3882"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "eee5c1901ee173b304248ed84c153e81"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "59cd8f0055cc8e85e99854a3004c32d1"
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
    "url": "assets/js/5.cea519b6.js",
    "revision": "4a41b6804458471e206c8a167d806570"
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
    "url": "assets/js/app.6e6a5477.js",
    "revision": "a0b6cbb05e2f16e627da78741aed91a3"
  },
  {
    "url": "golang/learning.html",
    "revision": "ec395ff729528950e9b82d77948b8719"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "a082be45f8a6c444ca6627bf950dd52f"
  },
  {
    "url": "index.html",
    "revision": "54fb708051482df0bb8cd7e1576db27d"
  },
  {
    "url": "issue/golang.html",
    "revision": "9f8f5aaba8347d191c4be535a3369b03"
  },
  {
    "url": "issue/mysql.html",
    "revision": "426e79cb888cfe9f33274a6b4fc2206c"
  },
  {
    "url": "issue/vue.html",
    "revision": "1fbb2a778e5eaf605b5159709e058365"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "31db0f5176a0877b72cab14d32af59bd"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "acf0a7169bbb3ff505e045ee37538844"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "5969150126a2adb7ecda6296e6e95429"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "222f57805015a720d9ce319333baf6c7"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "8c9d6543bff732dd4ea3ba9a51d00c76"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "c877958a4b7e5816acb60c2d476d52cc"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "d1da7586ac88fbe551f74b7ad52f2308"
  },
  {
    "url": "server/server.html",
    "revision": "aa1685e123279e2e55fac77870189e1f"
  },
  {
    "url": "webpack/learning.html",
    "revision": "28281e7b5fcee0f602716a683e65498b"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "40124bf3ea3df64c023a3121b86ff8c5"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "84b9f492691fbe2f6d53abfad9e15369"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "95c953cc6e5bbf1e8771818392f88c60"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "80fc8389c420a6afffa76e2bdb5ba00f"
  },
  {
    "url": "xp-review/index.html",
    "revision": "1cdad6872a9d101684395ad9bd272e37"
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
