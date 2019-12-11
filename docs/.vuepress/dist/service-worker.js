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
    "revision": "b7f11b4962e1b57241cb415e3c36c285"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "64279e1c8d1cfeef682c4a6a06fc6bf4"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "ef80f9a3635ecee8b1b08703b25ea46e"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "84965623d59c85b5b824da24f4b6f56c"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "0d18c0ccfe81165bbf350ab123ac2a79"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "4605177c2f190b6d7b21ea80eb57b081"
  },
  {
    "url": "assets/css/0.styles.e521e81d.css",
    "revision": "525a752c8615d0110c4ce0bd4439443e"
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
    "url": "assets/js/2.b7ae8144.js",
    "revision": "88a91680441694317ca6cdfe646e493d"
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
    "url": "assets/js/app.a01c244f.js",
    "revision": "407cc1b6adc8f081e32d513a3b543bdc"
  },
  {
    "url": "cache/mongodb/mongodb.html",
    "revision": "8050778f080d6221aa86b3556ede37db"
  },
  {
    "url": "cache/redis/leveldb.html",
    "revision": "d827b41c7595d63e0a75bdfebcaa0abe"
  },
  {
    "url": "cache/redis/redis.html",
    "revision": "ec022b25c6b4cdce4842320a89f4b447"
  },
  {
    "url": "cache/redis/rocksdb.html",
    "revision": "ac87a5109c4f75bcca6dd106d28af808"
  },
  {
    "url": "golang/learning.html",
    "revision": "f0560012416c0c787720fe72918030ee"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "4741f83fc810090ab68f5f83b1ce404a"
  },
  {
    "url": "index.html",
    "revision": "1f0531f061396dbfe3e7221a28e044c8"
  },
  {
    "url": "issue/golang.html",
    "revision": "089348421a09a5812f0cebf060c09b07"
  },
  {
    "url": "issue/mysql.html",
    "revision": "91b66625c3a4252efd1f00d9d1174ed0"
  },
  {
    "url": "issue/vue.html",
    "revision": "e1f35bdadb01eb7abefb6c172fa79dee"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "e451c1318cf711d8a92a2b31595b8cfc"
  },
  {
    "url": "nginx/nginx.html",
    "revision": "f5eabdc1c65a0216c798eff125a7600f"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "2932fd4dd0ad7e3413d059b3727c6033"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "f056363c50535b6dea7905cb09edab56"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "dcdb85605e4a66383879534d8df89a85"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "53aee8ab8e57851a24420a27c5077ab2"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "29743143c1dc4a678ae9192e2d27e3ad"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "362646d613e48ea9e8657d78114fa6ed"
  },
  {
    "url": "server/server.html",
    "revision": "ac61b1292723ba23d5fbd9378cbcfe3c"
  },
  {
    "url": "vue/primary/primary.html",
    "revision": "f9eae55f984546d03adfcd87ef454b02"
  },
  {
    "url": "webpack/learning.html",
    "revision": "4b7fe07b32e62f688da936da3d056f1a"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "03fd0de5ecdb95f908c456cdf1aa0168"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "33794ea60a8e1018706d75e2461a483c"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "ee6f369f37e87abec15853e39d427143"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "c2a8b8947a755e900854418efe17d89c"
  },
  {
    "url": "weex/weex.html",
    "revision": "7a018dba3a064112fe0b7793bc028a61"
  },
  {
    "url": "xp-review/index.html",
    "revision": "3c1b0e9b82371cea51a23999ebfb5698"
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
