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
    "revision": "9fbccc30570fcebf1ab319426d1a242e"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "44428e45d95ff8bc941df33d0058df9e"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "32ba6867ab9bc23ba99e853d3f1820ab"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "d070dc2293a76fd8f96b10883274a0c3"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "6194aa03ee9b1c58cc35ff5b30dab609"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "c9a10eee41b105b913d924529dca4798"
  },
  {
    "url": "assets/css/0.styles.d1975d99.css",
    "revision": "942fd68386e8b7c2a79c2d42f62d166d"
  },
  {
    "url": "assets/img/070012140173654.6179cb30.png",
    "revision": "6179cb30c5646d739e53b8720e16558c"
  },
  {
    "url": "assets/img/a.2d2c2d65.gif",
    "revision": "2d2c2d659a5241bfa960337860a01c02"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.31c235e4.js",
    "revision": "24fcb6fe3765f226eaf30900bef5788a"
  },
  {
    "url": "assets/js/11.81748a7e.js",
    "revision": "e0eed3d04c038cd37455bccaf39b221f"
  },
  {
    "url": "assets/js/12.6235182f.js",
    "revision": "46dc861fbf351796c65fd200745c1db8"
  },
  {
    "url": "assets/js/13.32b3b475.js",
    "revision": "706307bc668122d29f4c51925b8663a1"
  },
  {
    "url": "assets/js/14.dbc4f460.js",
    "revision": "8e3f4903f24fb07a2e7c11054f7d41ab"
  },
  {
    "url": "assets/js/15.39461c5f.js",
    "revision": "a4be99e2fa247d712a5b37691d242659"
  },
  {
    "url": "assets/js/16.117d0bf0.js",
    "revision": "20858ddf91360fd4de049010e1e5164d"
  },
  {
    "url": "assets/js/17.b8f7e26e.js",
    "revision": "2eac8bfc2f65adf93a59c26df591b164"
  },
  {
    "url": "assets/js/18.c3d8e97e.js",
    "revision": "5b23186d5cbe1d623a9dc73e364f8dbd"
  },
  {
    "url": "assets/js/19.aeef5b58.js",
    "revision": "1b7852eae8d49b9769da9660c0446ca9"
  },
  {
    "url": "assets/js/2.6c361633.js",
    "revision": "07ed66f9ab8923b346a27db57772a384"
  },
  {
    "url": "assets/js/20.a0437a78.js",
    "revision": "dcd6ed16a43b76222ba4056fdc9d86f3"
  },
  {
    "url": "assets/js/21.42668dad.js",
    "revision": "54460e4ae66c4b505d9dc3d2c8004bb0"
  },
  {
    "url": "assets/js/22.279c97b3.js",
    "revision": "236ef949aa74459ae1beea026d74dbbc"
  },
  {
    "url": "assets/js/23.d636d1ca.js",
    "revision": "bc5f3a88d84cf45990086f84c6d7db35"
  },
  {
    "url": "assets/js/24.de262d5f.js",
    "revision": "1d3f21c0c601f21e574385c2c90cf633"
  },
  {
    "url": "assets/js/25.4512127c.js",
    "revision": "7cd87be754570a5babf6cb6cf1a37c45"
  },
  {
    "url": "assets/js/26.2d5b3228.js",
    "revision": "8347fbfb246f97ea5e5971049993ca38"
  },
  {
    "url": "assets/js/27.28574e39.js",
    "revision": "49e2307b40dd38e9d3d09507a0b97a09"
  },
  {
    "url": "assets/js/28.d13be817.js",
    "revision": "4a2b4609826ffc2610e956842b70997f"
  },
  {
    "url": "assets/js/29.88daecec.js",
    "revision": "2c78ca8cf499b6c2eda74c30cac74e43"
  },
  {
    "url": "assets/js/3.4219fd62.js",
    "revision": "45a1cb114f3fd0f7e156e76634dcbd88"
  },
  {
    "url": "assets/js/30.0e749893.js",
    "revision": "0672d73f9a26c72a33b23a0de2b70ce1"
  },
  {
    "url": "assets/js/31.53b8db71.js",
    "revision": "f7bc4b265ba1b0c895cd0cca6232c28f"
  },
  {
    "url": "assets/js/32.31d25d08.js",
    "revision": "3132d45e9391bc0f830a6f0e2bf43a08"
  },
  {
    "url": "assets/js/33.4b58f6e8.js",
    "revision": "ec0ecf0512f37c9126cdad47346d8a9a"
  },
  {
    "url": "assets/js/34.d88ffd6f.js",
    "revision": "e2cbfc364904846eff3ff4ae1e6b06cd"
  },
  {
    "url": "assets/js/35.867db40a.js",
    "revision": "ec72982c970ebf83fa4e9f7e08bca5df"
  },
  {
    "url": "assets/js/36.d11197be.js",
    "revision": "282842aacc3cbad90588b72458c716b9"
  },
  {
    "url": "assets/js/4.1deaba69.js",
    "revision": "9bc08a94083dfd47fa600c72478f6f79"
  },
  {
    "url": "assets/js/5.6593d058.js",
    "revision": "9bb99b099134f47594f1e129ef00cbfc"
  },
  {
    "url": "assets/js/6.2f28569f.js",
    "revision": "febea4b45ae958844b2a6cfdb8d71378"
  },
  {
    "url": "assets/js/7.56cc06be.js",
    "revision": "68daced835f75473939612d5fcc89d56"
  },
  {
    "url": "assets/js/8.4658eea2.js",
    "revision": "6444edf7afd1551d6d1262fc26fb0f7d"
  },
  {
    "url": "assets/js/9.865d5af2.js",
    "revision": "0150be409866c080c83d2e07fd238b3f"
  },
  {
    "url": "assets/js/app.642c68df.js",
    "revision": "19579ac408fc8c85df462e68f1f2c222"
  },
  {
    "url": "cache/mongodb/mongodb.html",
    "revision": "ac91004bf20bc0d70a3be29510f270ec"
  },
  {
    "url": "cache/redis/leveldb.html",
    "revision": "fbfbf6709c9d79514b66c1d1bad28ee7"
  },
  {
    "url": "cache/redis/redis.html",
    "revision": "bc484d99711f921d2f51cd541156a0e1"
  },
  {
    "url": "cache/redis/rocksdb.html",
    "revision": "7cf88ec4fe94ad0f9023357c0cd328b6"
  },
  {
    "url": "golang/learning.html",
    "revision": "cf31d3458c1c9e1e9a8d8696d1a6ddc8"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "1e4f0163f60094d6ba884fea4a4e7169"
  },
  {
    "url": "index.html",
    "revision": "5b957c4fb365d34f01b03a7c0482e39d"
  },
  {
    "url": "issue/golang.html",
    "revision": "754339bcd5cef946a69e1d3f29d91a37"
  },
  {
    "url": "issue/mysql.html",
    "revision": "b848dd335e02bc4a39a634bcd6d2bef1"
  },
  {
    "url": "issue/vue.html",
    "revision": "47572429901868c29c4c9b165684fa81"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "4c4452964d50f5bdd5ab7f883f49108f"
  },
  {
    "url": "nginx/nginx.html",
    "revision": "f0c12b942c44a69534fe35e3396ae827"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "b23e50018fbcc57cc232ebf46bac55e5"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "457f8c6a36f077c6277065dd95421699"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "ddf1453be6020ff585b58beca1f9beef"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "f41a48662efbee8b8fef9018d487e2ec"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "d92bdb6f8fb14db658d11525b7fb4830"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "e024962c89d258105ae3173a0f5511c5"
  },
  {
    "url": "server/server.html",
    "revision": "d18b124fa550b13e78dc82d47ed8ee9c"
  },
  {
    "url": "vue/primary/primary.html",
    "revision": "73da8ce2482711072736e360a0cd522e"
  },
  {
    "url": "webpack/learning.html",
    "revision": "c42b3ac4488eb8a56119b82b0890fc29"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "d9749683e10c4f11af6d885dbbd0708d"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "13ac715b8031e645627cd6c05bf4ae9e"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "3cdc5d39c307c21db86b15502de9e219"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "6b25f18f29f988e7f5fc25e9d12b00e4"
  },
  {
    "url": "weex/weex.html",
    "revision": "afb8771bbecc983dd26cf5e89fb8a13d"
  },
  {
    "url": "xp-review/index.html",
    "revision": "a6c7b6c29277b259bf3cde1b53b1497d"
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
