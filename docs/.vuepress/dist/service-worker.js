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
    "revision": "802c077ae2b2f26b7c91af282e69303f"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "8ce2473c2fdcba4093163f724474aec7"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "e4f0932b6de8e3425a2a821b3e3a0863"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "f2fcca8f1740e7ad58a5837432615554"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "5a3df8eb966c0ecfd106518bd769f191"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "54bb1e334d7e56c33648b2977ca4a3d8"
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
    "url": "assets/js/5.d4035d78.js",
    "revision": "8745f881e2f7ee6a2815781543a56bf9"
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
    "url": "assets/js/app.ee77e54e.js",
    "revision": "e720be23c37fa483583160cb87f2c9ab"
  },
  {
    "url": "index.html",
    "revision": "2a39771de97d009ee6e6c68a1e2b2d69"
  },
  {
    "url": "issue/golang.html",
    "revision": "b94fcd2d3cdeac8678a8395fc3ce424a"
  },
  {
    "url": "issue/vue.html",
    "revision": "b9ef34dc941089b976c553ea53ae53b3"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "b5310d67c44b1acf59e012b05c496916"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "c624eb935e5b8b7e24e2315fd27a934e"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "55a4cfdd0a07fd07ff11589bc9a1c091"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "a35445481ce270d145fa6f51849c0878"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "dd76509f684286fc6c196ccaa8da7249"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "88badabd0d67212072b9ac48df523528"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "2920b2a77685fef04fbd26be0e5b7de5"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "43b6db84b037533fab4e0be717e48824"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "318558cae1bd7d3e5e482417cbe246cf"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "4add24ee47c2c464b155b6edb00ab7b3"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "80268333b27d1031bca3f693859068ad"
  },
  {
    "url": "xp-review/index.html",
    "revision": "453b455af7086a170b6e85cffe7af7b0"
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
