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
    "revision": "0b50ad72fdb6c8dfc169ec62815b0c16"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "e2438a81f21ac530ac570b17a474e2af"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "80b07f15b72e5ea89167b3b7e0f90643"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "7c7342bf956cab7679cef1e964565a72"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "0368e70d347534562a834674d25f7ef2"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "5e94e820800306d7f7cc7808eb029b38"
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
    "url": "assets/js/10.ff4ddb3a.js",
    "revision": "f7f085ead3374a63827daba700bff927"
  },
  {
    "url": "assets/js/11.40d3a68f.js",
    "revision": "68bf740523b5c74aeaa9d9beb26ae034"
  },
  {
    "url": "assets/js/12.1ce3eda5.js",
    "revision": "a62306b3582339a71becd680f6670972"
  },
  {
    "url": "assets/js/13.60e1e779.js",
    "revision": "dd5ed9ed7e1791430655cc004302ec08"
  },
  {
    "url": "assets/js/14.5784d3dc.js",
    "revision": "750b69b8c201d46275393e4e58591f07"
  },
  {
    "url": "assets/js/15.200563fb.js",
    "revision": "3ee30cac222870ae6459b499d84fb51a"
  },
  {
    "url": "assets/js/16.67497469.js",
    "revision": "a06d8a0cfb50551aa834045668cda8da"
  },
  {
    "url": "assets/js/17.1b8ed13d.js",
    "revision": "a3140dc875d67bd7adb5716438dadafb"
  },
  {
    "url": "assets/js/18.d3ad94c5.js",
    "revision": "84a2c3453112d9e3a5c2fe632c03fe87"
  },
  {
    "url": "assets/js/19.754195e7.js",
    "revision": "9f3f15e7ae038da32c59bb793b1f2b7e"
  },
  {
    "url": "assets/js/2.b9bd59f6.js",
    "revision": "161c8515cfd2cba06d6c071313efb93f"
  },
  {
    "url": "assets/js/20.766c805d.js",
    "revision": "a0e3e1fa7e2cba74eb3d8138796fe4c0"
  },
  {
    "url": "assets/js/21.2e3a259d.js",
    "revision": "c4e7b964bc09241114767a65aaa42a23"
  },
  {
    "url": "assets/js/22.8c664430.js",
    "revision": "607f2d8bbcb5a612efae626e6f8a2614"
  },
  {
    "url": "assets/js/23.93fa7ade.js",
    "revision": "4c204b3ee629f64aceca61152aee83f8"
  },
  {
    "url": "assets/js/24.c1f1707f.js",
    "revision": "f431699459864253872269a0bb708b77"
  },
  {
    "url": "assets/js/25.e55e1eda.js",
    "revision": "ac64763327cc5f49a149a5c833e05232"
  },
  {
    "url": "assets/js/26.ae3a940e.js",
    "revision": "5f7bae6d9ddbdc8dafc3af06a82b29b4"
  },
  {
    "url": "assets/js/27.47be07f4.js",
    "revision": "b4b2a72a142d150d69ae8764594af9b1"
  },
  {
    "url": "assets/js/3.40b45883.js",
    "revision": "96168f0789dd7aec07f2020a74c5c012"
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
    "url": "assets/js/app.27da52e4.js",
    "revision": "94c555de1c08e6d4863fe2b01a6b7130"
  },
  {
    "url": "golang/learning.html",
    "revision": "14db3c1318d7a0016c9b82f4a2cc36af"
  },
  {
    "url": "golang/weexdemogo/index.html",
    "revision": "218c2aa5a0dfa3ddd4f198a4caab6025"
  },
  {
    "url": "index.html",
    "revision": "30e942afe842ef43e41f77ffcce1ce12"
  },
  {
    "url": "issue/golang.html",
    "revision": "241d1bd42a1dacad7e1f5b1621f263c3"
  },
  {
    "url": "issue/vue.html",
    "revision": "daa0316211a1f0afcd7242c652a3963f"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "7993f5f9d9b507ea1538081acdc8aa0c"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "95ec6e197b507dbd4e4ced48738e1c40"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "20c2ca4dab0335373aa8b9fdd232ddb7"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "646f3a48bf3069eda497a2e6fa4b687e"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "89688d456fe5943c09e0a37c74280130"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "2e0c6ab7d7aa701a3123d55686a15dfb"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "cfe5089e7d623e4dc6135b918d7bd1d6"
  },
  {
    "url": "server/server.html",
    "revision": "f84def7763b0524fff38c06eb7ae3538"
  },
  {
    "url": "webpack/learning.html",
    "revision": "9e051661f4f813d9bc2e277a7a87367c"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "26e1b118a7e983c9c9878e05a4375b8e"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "91cb67d9390ea7dd84307f24f7f472cb"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "7609b36284df711ded5f976fcc958032"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "57239a8d526e5479eca356d34855465f"
  },
  {
    "url": "xp-review/index.html",
    "revision": "f20639bee920c96418837d8b0f7eeb82"
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
