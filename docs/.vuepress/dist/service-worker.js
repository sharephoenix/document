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
    "revision": "cae3a198e21af125a6e857faa906d248"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "2703232aee11e3f62acacfb822cbe69f"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "99f792273bae2a4026f4c508a4f67656"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "06da120c7fa94f3100488dd0bc105740"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "9be6b02ac4176398cdf766b803fd5e1d"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "262e17e285c25ed83ebdd39c6b3d97ed"
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
    "url": "assets/js/10.c53a33f8.js",
    "revision": "bf038971933919a9db67c0794b8ba4d2"
  },
  {
    "url": "assets/js/11.7408ff17.js",
    "revision": "ebcb8c6aeebdaff66f5e908cfdbfd470"
  },
  {
    "url": "assets/js/12.c165a6b6.js",
    "revision": "f497dbd639dbba9876e9035ab5622118"
  },
  {
    "url": "assets/js/13.079d3c40.js",
    "revision": "9ddaf3aadd221dc43a4288eaa93b4459"
  },
  {
    "url": "assets/js/14.bdb93f62.js",
    "revision": "4e4868bcca282cf18e5cd60686638539"
  },
  {
    "url": "assets/js/15.5d99b1ee.js",
    "revision": "1233a9a625379da2df94031a4f7dc262"
  },
  {
    "url": "assets/js/16.bbb5ce0c.js",
    "revision": "5762cb3f1ec68defd21faefcedd14729"
  },
  {
    "url": "assets/js/17.bce53e5e.js",
    "revision": "ef8453eafbdf80b4a568017fd0d6caa2"
  },
  {
    "url": "assets/js/18.deb5b8e0.js",
    "revision": "4273fed2ceb4e299fbddf588ea7ea8a4"
  },
  {
    "url": "assets/js/19.64f1ff42.js",
    "revision": "bd4ad596683e73e935af7ecb2ad40b49"
  },
  {
    "url": "assets/js/2.b9bd59f6.js",
    "revision": "161c8515cfd2cba06d6c071313efb93f"
  },
  {
    "url": "assets/js/20.c9280106.js",
    "revision": "39833c2844fffd2c4969a20f4c2393b0"
  },
  {
    "url": "assets/js/21.83cbab71.js",
    "revision": "f8eba5f5a540afd9a48d172b6ac365f0"
  },
  {
    "url": "assets/js/22.a98791e8.js",
    "revision": "4d827d0128a8763c3e7fd6bb2fcbd4d4"
  },
  {
    "url": "assets/js/23.639e3aab.js",
    "revision": "b9b4814d72357745015ff3c100dd82d5"
  },
  {
    "url": "assets/js/24.2b797836.js",
    "revision": "4b1cd3b6ba72ceecf06a1ad7e292458b"
  },
  {
    "url": "assets/js/25.dd32082f.js",
    "revision": "a77077fe2d6ee5400a2c30ec3fc96845"
  },
  {
    "url": "assets/js/26.30c225a0.js",
    "revision": "ff6e298d50541bdd15cf662c07f6d710"
  },
  {
    "url": "assets/js/27.b6735e06.js",
    "revision": "230e3f66a5b79d5606e52af82eadea25"
  },
  {
    "url": "assets/js/28.b9e99d2f.js",
    "revision": "b942e5d5736debb6f141a51a491999c5"
  },
  {
    "url": "assets/js/29.c9628a06.js",
    "revision": "344fcb70ed06364cdc300976455a6249"
  },
  {
    "url": "assets/js/3.6613fc6b.js",
    "revision": "ab80c4c4944fabc1116986913cb2edbc"
  },
  {
    "url": "assets/js/30.71cab0c9.js",
    "revision": "81fdd3ef995a614d45e30f103e850d6b"
  },
  {
    "url": "assets/js/31.62e37a69.js",
    "revision": "61b721087db9a031dd331c6d0d70a76a"
  },
  {
    "url": "assets/js/32.195d9921.js",
    "revision": "9b3fda71f7ba33af8ab439af2c4e27cc"
  },
  {
    "url": "assets/js/4.6036d6fd.js",
    "revision": "f45b54acee633989dc8562ec4897a141"
  },
  {
    "url": "assets/js/5.362490f2.js",
    "revision": "222735af5f35613799014d8d0ab9dcc7"
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
    "url": "assets/js/app.5f27bb78.js",
    "revision": "8fcf49bb96915ed850cdf3be35082dba"
  },
  {
    "url": "cache/mongodb/mongodb.html",
    "revision": "d893325cad3c84998ef6749553ad2faf"
  },
  {
    "url": "cache/redis/leveldb.html",
    "revision": "3c53bd8145f53f55ea22261c4b64f70a"
  },
  {
    "url": "cache/redis/rocksdb.html",
    "revision": "adc7e22165be74c309102d578d4c53fb"
  },
  {
    "url": "golang/learning.html",
    "revision": "c4ab7964f982ecb6775fafd8d7e7880c"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "d8343ac6a81af4779ee822ecdffba9a8"
  },
  {
    "url": "index.html",
    "revision": "152efd48a099d8cfbdee10f0badd7340"
  },
  {
    "url": "issue/golang.html",
    "revision": "777c8ba09ae0b29b0422d70e817c68ca"
  },
  {
    "url": "issue/mysql.html",
    "revision": "61735950fe2fbc1612fe86ebb6f1e675"
  },
  {
    "url": "issue/vue.html",
    "revision": "0e6148f570fcf8cfb78e7d0f616e6d3d"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "dbbe3904b5038095dddd7569299e520b"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "68bf9ed74fb211329ac84edd86fb910a"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "7b2087edf5b397795a2a7d33b8a8f218"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "e7a4873698b0b9e58cdad519f6495103"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "2a7baa4464b6e53d25dd34c24031a99a"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "163a98b160a8e8f45f1f7d25b9467d23"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "6897086500fefe3770d56439ccefa931"
  },
  {
    "url": "server/server.html",
    "revision": "a649861db023baa6133cc7462bf1c2f3"
  },
  {
    "url": "webpack/learning.html",
    "revision": "3c36286bc14ff80a727a48e4c972892b"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "36cf73ec614db1274ccd1f1161a69b48"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "22d68f6a3c950fd16f3ce9cefde24787"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "74229bce1b4481e922e5002c6d418171"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "8f02ffc42861207a9014ddea136ceef5"
  },
  {
    "url": "weex/weex.html",
    "revision": "05773cb05811c35649abe0b31e2161d0"
  },
  {
    "url": "xp-review/index.html",
    "revision": "0f5c8edc5b55c82012deb8f3c6b4a744"
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
