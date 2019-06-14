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
    "revision": "02bb45e044e9d8ada2edccc1be05cac5"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "c6e47485537108d1e7701bbdc2eb28fe"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "74b49f4864e9df4239efa7914c3e7011"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "cc55caf77bc3499fd8195b57a2871ea9"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "2c95c01edd74fb187717b5f4b597c1b8"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "ef1c19ecb069fc9dbf37f76de49764dd"
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
    "url": "assets/js/10.b86c13dd.js",
    "revision": "d8c5c83cfb174c33da7e494dd31bcfd6"
  },
  {
    "url": "assets/js/11.2a7276b5.js",
    "revision": "d89402df9e7a168de2270a022b1fddeb"
  },
  {
    "url": "assets/js/12.9110c2b0.js",
    "revision": "75ea7a24d8fac17b5e7d2f14505faed4"
  },
  {
    "url": "assets/js/13.fb181116.js",
    "revision": "7b62d05601bc5efc76e9fb8b7ddec9cf"
  },
  {
    "url": "assets/js/14.7a22718f.js",
    "revision": "fddc4aaf72f34c0091bf94196060a755"
  },
  {
    "url": "assets/js/15.06e9de09.js",
    "revision": "5509a872a5c0f75470728875dc85ea17"
  },
  {
    "url": "assets/js/16.589bef67.js",
    "revision": "f708d63685e93dc0a351508b6ad06dbe"
  },
  {
    "url": "assets/js/17.83701c69.js",
    "revision": "1bc9c0a01e70e4745dfba6bc70163df7"
  },
  {
    "url": "assets/js/18.e45acbfc.js",
    "revision": "90e80d684d4be6d13348dc2427fd6c7b"
  },
  {
    "url": "assets/js/19.38fb9b01.js",
    "revision": "f2406f9341dc4986686b212c5135a82e"
  },
  {
    "url": "assets/js/2.b9bd59f6.js",
    "revision": "161c8515cfd2cba06d6c071313efb93f"
  },
  {
    "url": "assets/js/20.ecbd1662.js",
    "revision": "ed7468269f07456530f82c06884474ec"
  },
  {
    "url": "assets/js/21.37dd8270.js",
    "revision": "ff9fca3c7baeaec86108ea3047b90893"
  },
  {
    "url": "assets/js/22.48246968.js",
    "revision": "28960c6a5b2a941a9694c9912330334c"
  },
  {
    "url": "assets/js/23.da8b2947.js",
    "revision": "7503b51cdf0d12a2c637b7bd2b43d398"
  },
  {
    "url": "assets/js/24.83cfd6e2.js",
    "revision": "bc53ea80310b9a73cc68ab7e61d35bfc"
  },
  {
    "url": "assets/js/25.6c5a1aeb.js",
    "revision": "41fa4adbd232cfb75d5e33aa33c2b7ef"
  },
  {
    "url": "assets/js/3.66cedd25.js",
    "revision": "42f49fb6620f0bc7a219b6bee2bc0fee"
  },
  {
    "url": "assets/js/4.6036d6fd.js",
    "revision": "f45b54acee633989dc8562ec4897a141"
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
    "url": "assets/js/app.feb8e494.js",
    "revision": "067cb35038a89a423d8cd7023d1726e8"
  },
  {
    "url": "golang/learning.html",
    "revision": "da3207d2b8ecf74b227cd3cbcd8d38c9"
  },
  {
    "url": "index.html",
    "revision": "3ebc7a81b56c6b21265dc817d389d9ef"
  },
  {
    "url": "issue/golang.html",
    "revision": "561e48c23cc97ec82302967a728956b0"
  },
  {
    "url": "issue/vue.html",
    "revision": "5261b2d55942c18692541ea618854541"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "8aed14357d78eabbf6aca7eafd0d122c"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "d859ac44c6a99cb293119b2af9b7fd33"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "d197c3c52c3373e1c7a7ed0691b130d7"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "d03bcf6c229e3b872c8e817979fc532d"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "34490713132774f50059be5eb4a50566"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "956822f6451c53b8ecf75b8ff16c0bc4"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "f710e8c679693a2dc0da932c09d46e67"
  },
  {
    "url": "webpack/learning.html",
    "revision": "f0cfb32cfd6bf2eb6c2daba50a34c926"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "1a6b04901d2a214a4370551b89730150"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "7f218bf3745d189f5ba9f7b75f79d693"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "26af20f5bad485993524333d97de7dc3"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "6132f1fe4b4aefa5be5ad5bb25b930df"
  },
  {
    "url": "xp-review/index.html",
    "revision": "2c28044afbb4444ad9468ef86bcfa5ca"
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
