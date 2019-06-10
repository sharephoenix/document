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
    "revision": "47189b37b6505622bd0374f3ee640164"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "8feeeff18daf7847dec6e1259b433b19"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "a20eec891348c406ddf0eaf8ea1545df"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "6c6747b54ab95d022876f8a5c6763b0c"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "5fecbb50a10f56460c7c171722ef362c"
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
    "url": "assets/js/app.bc5baf3a.js",
    "revision": "e8e032c0676fe291fb9a4881cbe32d0f"
  },
  {
    "url": "index.html",
    "revision": "e02e596153e64cac2cd4904812b2e85a"
  },
  {
    "url": "issue/golang.html",
    "revision": "d9de03207585153062e3f99de409b80b"
  },
  {
    "url": "issue/vue.html",
    "revision": "d0afcbcb7a049c7e049b726d1219be33"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "6dcc2ea62ae358b88e2df5d8bce61699"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "6c2ea6cd07dd453eaf6549166b23e9c2"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "e69b79ff202b23fe6414d2981be88d5a"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "632993c28c52753b6b1e7562f1fe8103"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "351bbaf2de6111e61106d47a7d3850f4"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "47c8658198ee7676a46b6afe78264798"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "757dd1cb29b1ffee2b547218b373192b"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "80d150bce2b2467b11168f53757c19be"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "5c353814e1e0199e2729189c6c093720"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "5441f801e18c84b5d5d01b01998011db"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "66034f1f148d05314359b8eaa2bc9706"
  },
  {
    "url": "xp-review/index.html",
    "revision": "8991a13858d61ecd4cbd47baf540de1d"
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
