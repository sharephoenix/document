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
    "revision": "a0ee73b942ef395024c0d5087c162243"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "efd3a92ccaa71ab2c3026a1ea44b11a8"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "c1bc9d572039dca29cedef8221320d58"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "490ea6f549a6f241edf6bf3ffe10bbc4"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "e5a9c19249daf1adeac88c7ca5ce2313"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "353bf6a4c277b76979b3483cec485ba3"
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
    "url": "assets/js/10.0aeb7a16.js",
    "revision": "ae380d17b97b85e0591281aafa9f8249"
  },
  {
    "url": "assets/js/11.e825eea4.js",
    "revision": "2dfe0d9c104eba9aea90ce8e2e4c1dc1"
  },
  {
    "url": "assets/js/12.5136b35c.js",
    "revision": "dab64aa4e7a34f7c43e64086ede9d36b"
  },
  {
    "url": "assets/js/13.d1145272.js",
    "revision": "a39da2ca5ae1b56107df6484e2cf9612"
  },
  {
    "url": "assets/js/14.e2f9eea2.js",
    "revision": "bb4181837ae89b70895a4830e7e7222b"
  },
  {
    "url": "assets/js/15.6ccbbbd5.js",
    "revision": "01bb6ebbae64f17abe9e55490a344729"
  },
  {
    "url": "assets/js/16.3fa1b0ac.js",
    "revision": "c3db1f34884cb616037392315b128bfa"
  },
  {
    "url": "assets/js/17.67936047.js",
    "revision": "3d8c3ef1c0b09fd3c83306ae3fde0f9c"
  },
  {
    "url": "assets/js/18.44b848e8.js",
    "revision": "147b6fcaa2b3bf6e887f80938b1c843c"
  },
  {
    "url": "assets/js/19.da2e15d4.js",
    "revision": "e5a27678a1b2513a65f2d49310ee0ba7"
  },
  {
    "url": "assets/js/2.b9bd59f6.js",
    "revision": "161c8515cfd2cba06d6c071313efb93f"
  },
  {
    "url": "assets/js/20.8248f999.js",
    "revision": "10b2991b52c6cb674be96152472bb1f4"
  },
  {
    "url": "assets/js/21.02c38f75.js",
    "revision": "77f5d53bfc59bdd72c34fdf27c378abb"
  },
  {
    "url": "assets/js/22.07fd08a4.js",
    "revision": "a30c2e3b52e9429428d251a75232d8ab"
  },
  {
    "url": "assets/js/23.3e7ffc0b.js",
    "revision": "3aaa3287adeac2a1f179a9c459e55bf7"
  },
  {
    "url": "assets/js/3.a394de1e.js",
    "revision": "dbd2f7d0e6055e76882dfbf93374459e"
  },
  {
    "url": "assets/js/4.fa018a22.js",
    "revision": "5ee0e2fd066a80c5c6230b5f8dcaa8d2"
  },
  {
    "url": "assets/js/5.24e62156.js",
    "revision": "e51054a4cdff7368a0ed57f683576ccd"
  },
  {
    "url": "assets/js/6.b931b2eb.js",
    "revision": "0df8b04e8839de76a09b3c56b74c8a36"
  },
  {
    "url": "assets/js/7.0fce9d1d.js",
    "revision": "c2d5cb501cbb08547a0965ff52d21b2c"
  },
  {
    "url": "assets/js/8.48f89ad2.js",
    "revision": "af3e47b61c21dd41db8db8d655f80eb8"
  },
  {
    "url": "assets/js/9.50b9f7a4.js",
    "revision": "33c55ff594f060b166bff3005cb1c87f"
  },
  {
    "url": "assets/js/app.e6b042c4.js",
    "revision": "829ab263961174a3990d12b7f912c0b1"
  },
  {
    "url": "index.html",
    "revision": "2598e8a6f99d1eaa3241cd7046f27269"
  },
  {
    "url": "issue/golang.html",
    "revision": "b667df01b955a3edbef288fcbb3b6fdd"
  },
  {
    "url": "issue/vue.html",
    "revision": "1df69fc422986cd44fc0e615d5b69665"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "2ebcd938075a7205d80587bbf97c8550"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "6ec9c9a27c0476bfc1441141aa9b643f"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "5f13e6d7ce9f0cd6e4ab410bb2516e29"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "ec3b67ee928b11d8b98874913c90e58b"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "4b0ade08565aefec8a5c2abb91fcfe7e"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "eeb9a6d623a2c5122f463bb14f7d288e"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "c1b13b4fe3e29bb8681fc655e93bc74a"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "39d513e9abca20c6f30dac3453d0d275"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "077eab73f638f1cb214b49b0e53bf9d1"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "59539ad6bbafc7010aea4295aa9ce7e4"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "8edc832875e9bf4379d372ec4dd3dc82"
  },
  {
    "url": "xp-review/index.html",
    "revision": "eda22de5fe4769300a47905a2edb0bd7"
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
