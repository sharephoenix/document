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
    "revision": "e3a0f1169546dcffdfdc1a7f7025bd47"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "c8c2f64a11f4c5f91471bebf791d83ce"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "2ac834d742e9398de8afd8f3c9736187"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "a02ea5ef4c5866941ef48dbd21269642"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "f8b4894320f19d9daa291e87c76ff29d"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "3c581e6ff20f557d72d0c3228bd6ec37"
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
    "url": "assets/js/app.28357b66.js",
    "revision": "750e203a089d6bb8d01475b4d04a3f45"
  },
  {
    "url": "cache/mongodb/mongodb.html",
    "revision": "1968113d221f753d245ec17550b4be12"
  },
  {
    "url": "cache/redis/leveldb.html",
    "revision": "5a0f18c8b3ec81c568d45bd6d2d41d74"
  },
  {
    "url": "cache/redis/redis.html",
    "revision": "222a8878c1a0d4f445c23d4f63b165e8"
  },
  {
    "url": "cache/redis/rocksdb.html",
    "revision": "a223aa0cb6d7a3bdc700e5d3256b12f9"
  },
  {
    "url": "golang/learning.html",
    "revision": "e519f13be4bc885236dbe39d1d820d8a"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "bf60996e15027bcd02c5dfe54dad85ae"
  },
  {
    "url": "index.html",
    "revision": "6a4a508a875505537b40dde2cfff5cf4"
  },
  {
    "url": "issue/golang.html",
    "revision": "ebb13f5349518b5f6da95114b9e4c246"
  },
  {
    "url": "issue/mysql.html",
    "revision": "f0459198b96d30068253d4b407cd4fa2"
  },
  {
    "url": "issue/vue.html",
    "revision": "e2d415641b0d7184da96fea93636ef78"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "f8b56ed19d79c19babb3b549a262541e"
  },
  {
    "url": "nginx/nginx.html",
    "revision": "803371b4866723a7da91daaad7ff710e"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "912952743e642abeec0de3f19ccae6d0"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "e22dc2df69565a17a8533a5e3e8353b5"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "884be749156e78f3bfffceafff28f17c"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "e16723ccb7b2e8dc6022634154132ea7"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "87a128eb124fb7614a138c9e753591cd"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "5f3c2b00caaad89f8f4474315f90e55e"
  },
  {
    "url": "server/server.html",
    "revision": "7ef28435dd57dbab01dd8f4e6a58da50"
  },
  {
    "url": "vue/primary/primary.html",
    "revision": "b4ece9de73a5d07934dc38230998a045"
  },
  {
    "url": "webpack/learning.html",
    "revision": "b429b5e16e2e130f59ac10cd8a146f2d"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "0434020f34d845be314e17a6554c3ca5"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "7ed7a8a5e82ec5e7328a90b7ebe3754d"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "48190a5e2bff9b4949c4aba29d3a7b1a"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "24ea8354d096f9529598b903ecf7c69a"
  },
  {
    "url": "weex/weex.html",
    "revision": "5c83627d0e8518b4a4d067efd3854ae7"
  },
  {
    "url": "xp-review/index.html",
    "revision": "67f8de3e4182035f085e4adb293564f1"
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
