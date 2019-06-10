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
    "revision": "f487c2bb58679e7a30b9bd2a59e78bb2"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "721dac4326d06970387770055dfe6852"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "a30f6209fb8077afab9e3ead02e8d84e"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "04df671bec42d05ad446916e8987dd66"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "3f1ffce794252aa7ddea13dfce6e408b"
  },
  {
    "url": "assets/css/0.styles.05c040d9.css",
    "revision": "36e11705f1bd8c27c1cad724c0777f63"
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
    "url": "assets/js/10.b50f8c70.js",
    "revision": "cc60fadb2c1b5dba9b8c85bea11bd513"
  },
  {
    "url": "assets/js/11.e9034936.js",
    "revision": "d7b8ba61a0a461183bb807f1e6163c34"
  },
  {
    "url": "assets/js/12.5d616419.js",
    "revision": "7de98e6c211a909c59cae832bdeb54c3"
  },
  {
    "url": "assets/js/13.08dbace9.js",
    "revision": "67a1e0cbe4a31cfe008c9a8bfd0955cb"
  },
  {
    "url": "assets/js/14.15892687.js",
    "revision": "92837a4afa6ac2a097aba003a27de6aa"
  },
  {
    "url": "assets/js/15.f03b0fe1.js",
    "revision": "0c50529541c5238d1edd514bea1f7d92"
  },
  {
    "url": "assets/js/16.251ecc63.js",
    "revision": "a11ae134839bd398a58b9758e4089ec6"
  },
  {
    "url": "assets/js/17.14d42261.js",
    "revision": "a69e36b8b8fdbee250495a626714c194"
  },
  {
    "url": "assets/js/18.9a229c5c.js",
    "revision": "4c479ec3c90763277d803324ff4342da"
  },
  {
    "url": "assets/js/19.6a01df28.js",
    "revision": "6b1c5cdb49c1149559c2237674755475"
  },
  {
    "url": "assets/js/2.b9bd59f6.js",
    "revision": "161c8515cfd2cba06d6c071313efb93f"
  },
  {
    "url": "assets/js/20.315d39fb.js",
    "revision": "75928554dbbad4cf53ef940552604c29"
  },
  {
    "url": "assets/js/21.10f97b60.js",
    "revision": "f798b0854a9a706941b12ef421379f2b"
  },
  {
    "url": "assets/js/22.257104fa.js",
    "revision": "80ce9c082a3540b04f19f679e3c4ad60"
  },
  {
    "url": "assets/js/3.b258ecb7.js",
    "revision": "ecd14cfdf5a0f758b32a8e16c506ce37"
  },
  {
    "url": "assets/js/4.fa018a22.js",
    "revision": "5ee0e2fd066a80c5c6230b5f8dcaa8d2"
  },
  {
    "url": "assets/js/5.d7b09753.js",
    "revision": "1681093ac71b465ec1ce3f5a0dec4619"
  },
  {
    "url": "assets/js/6.fbf09a7f.js",
    "revision": "299b28ebb94005b99fd4dcfc9a51e506"
  },
  {
    "url": "assets/js/7.b5eaa290.js",
    "revision": "05e3f732a0ff3de0c0904092c263837a"
  },
  {
    "url": "assets/js/8.35330730.js",
    "revision": "26c91eaf6973ec7cfbaf6fea6dc4a85f"
  },
  {
    "url": "assets/js/9.e5270dfa.js",
    "revision": "5a8c517aab77646df996053734f702b7"
  },
  {
    "url": "assets/js/app.a0a7bde6.js",
    "revision": "97fbd45a97cdabe0479120025826cfb5"
  },
  {
    "url": "index.html",
    "revision": "e913451f0328877ef22aa8dacbb75e9b"
  },
  {
    "url": "issue/golang.html",
    "revision": "2e5c7dbbad4966e1aaa0cd3dcb0d57a6"
  },
  {
    "url": "issue/vue.html",
    "revision": "dcf30a9575a8bd194b11b35feac4276c"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "ec3c841056602c733529494d37cf1159"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "19aadb32f377456b86b7ce8ad1ecde06"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "2eb2456989ac1bf81aa3da76e67507fe"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "8f8a262ebadaa3b25bcba46bb96ae5b0"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "01911e3cba13c973ab679ee5119972bf"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "3c48874880a0c6b0210a7cded35d12c2"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "76a35afa2f9784a3ab6fc7d8a5524537"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "43b4d23b6f32cce89ba09f41d6f92c77"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "91e6a374837d712ecf5a109bbb239926"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "3e7c6565c7a06c2317c23c4dd2a0f83e"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "f064ec6f4b36b9b12f79666154e91b60"
  },
  {
    "url": "xp-review/index.html",
    "revision": "3ab4bfd538af56284cec0f3fa366c794"
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
