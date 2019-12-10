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
    "revision": "2b21b860b5bd1b95a47f2c2c15560a43"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "e917bd04afe18563db8ad502d3ec3fe9"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "84d0b67f0c1449b2fbd116000d02dd26"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "0bfc6c12e40edefde18db3aae973200f"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "8176f501977d6bf575d4bd4ee07733ce"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "2a42dd794fd40b018a8e6615bd95e674"
  },
  {
    "url": "assets/css/0.styles.d629862c.css",
    "revision": "a8fe37b6d19e5350660d60a7339c221c"
  },
  {
    "url": "assets/img/070012140173654.6179cb30.png",
    "revision": "6179cb30c5646d739e53b8720e16558c"
  },
  {
    "url": "assets/img/a.b515b410.png",
    "revision": "b515b4102344c6f7b0166321a31cb569"
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
    "url": "assets/js/2.3f233758.js",
    "revision": "68f33bf923accfb21f75751282c0213b"
  },
  {
    "url": "assets/js/20.a0437a78.js",
    "revision": "dcd6ed16a43b76222ba4056fdc9d86f3"
  },
  {
    "url": "assets/js/21.30cf8807.js",
    "revision": "1968a85ee29667dd680ce89106ea0d78"
  },
  {
    "url": "assets/js/22.496b55a1.js",
    "revision": "c1788561e12ce35622b2d9ee6fabcce9"
  },
  {
    "url": "assets/js/23.f4523b64.js",
    "revision": "9caadd6c802d547d380b2605b2345c28"
  },
  {
    "url": "assets/js/24.dd56221e.js",
    "revision": "151e7bebc1ecef133ca6f8b49aee1999"
  },
  {
    "url": "assets/js/25.6d601a84.js",
    "revision": "a7a477c47bc0aadbaddc77cd8f305514"
  },
  {
    "url": "assets/js/26.8abea07f.js",
    "revision": "a5c2d4c3c5441d406b01252e598e73f8"
  },
  {
    "url": "assets/js/27.2cb0773e.js",
    "revision": "b63a88aa784965766de99e56710a9b5b"
  },
  {
    "url": "assets/js/28.62b3e884.js",
    "revision": "80663ffe6ea212d8f96c120661ca1d9d"
  },
  {
    "url": "assets/js/29.52fdb15a.js",
    "revision": "c833a1bf22b8ffd47c46e8b4c32fed86"
  },
  {
    "url": "assets/js/3.4219fd62.js",
    "revision": "45a1cb114f3fd0f7e156e76634dcbd88"
  },
  {
    "url": "assets/js/30.9e1ce871.js",
    "revision": "3949661794eae5fd3b98efd2737359f3"
  },
  {
    "url": "assets/js/31.04995098.js",
    "revision": "665d8034f2879e11710032d75da3e900"
  },
  {
    "url": "assets/js/32.74f94fd2.js",
    "revision": "62c624b3c1ad0e8b0745c10535009bf4"
  },
  {
    "url": "assets/js/33.b0e997da.js",
    "revision": "5bcf80bc8970a396bf9c1f2bb25804a2"
  },
  {
    "url": "assets/js/34.46682ce7.js",
    "revision": "2360f709293f2f9375235348fc3cf932"
  },
  {
    "url": "assets/js/35.69f4ae0c.js",
    "revision": "b8608ed55ae3bde9990a759c408e51ad"
  },
  {
    "url": "assets/js/4.5de1ab12.js",
    "revision": "8e559c7f836d4fd2277cd7fc48e2198c"
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
    "url": "assets/js/app.3271fc26.js",
    "revision": "427930b9ce02ab804205824ebf3dab32"
  },
  {
    "url": "cache/mongodb/mongodb.html",
    "revision": "d61fcda46946f10c8e5a4d179687f582"
  },
  {
    "url": "cache/redis/leveldb.html",
    "revision": "d269057fa95ff0e6bb01c385243bf42f"
  },
  {
    "url": "cache/redis/redis.html",
    "revision": "8f6c6c7a72c20f80fb7ed8dc03aa9343"
  },
  {
    "url": "cache/redis/rocksdb.html",
    "revision": "c774615be04355217a027f8edaf007c3"
  },
  {
    "url": "golang/learning.html",
    "revision": "13b8cc52a3a864662fe7e1a8a23f29ab"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "8b02e5863712a7b3ce19487e543e8eaa"
  },
  {
    "url": "index.html",
    "revision": "f1664541f4c897f563f76e972dd18839"
  },
  {
    "url": "issue/golang.html",
    "revision": "e734be4ae94b666c5dce4283e3164cd4"
  },
  {
    "url": "issue/mysql.html",
    "revision": "c9f9d9044e21490f181962af0efdc327"
  },
  {
    "url": "issue/vue.html",
    "revision": "0626ae322a711f41c2b8890996d6e8ee"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "cfa7949da8a92026fb1a9d3a73f04601"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "50086bfb59f95c8ec40381deac428118"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "302981002da9e8fdcba3b9bc5bbf4ead"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "08c339ba8daebc11be32eae13fad113b"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "050358eb8218cdf4daa5def601350f39"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "14e202edee2fdd63aba664802fccea18"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "557e480b8a43ca2c23adf854dada6d23"
  },
  {
    "url": "server/server.html",
    "revision": "a281edb86960137f684cd60f444cb311"
  },
  {
    "url": "vue/primary/primary.html",
    "revision": "06c51b463ac4682d4cdb46f724c45731"
  },
  {
    "url": "webpack/learning.html",
    "revision": "c39d1106cacdc271ed63fb5cf29bf1b5"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "d89d581a4161d61baf24b3c735703185"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "c301c2657fdcebac0d2420028ddd891b"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "f6fb82c5522adc887d17dc3a4684f073"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "ac8f39770b009133d0b6b73247dbaf8f"
  },
  {
    "url": "weex/weex.html",
    "revision": "b7e51bba921272e2f5809b7a67b7186f"
  },
  {
    "url": "xp-review/index.html",
    "revision": "1d857534dda2d91e02e8ac0a1696f752"
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
