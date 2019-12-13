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
    "revision": "a3900594ae2a554f470976fc24a65daa"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "307c7b27d567240b99e8b9d9a9450680"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "e4fba399c4393d2d3a40771316f478b9"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "5607419eaf9fe36d40b8e6fd51f953c1"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "d1f36ae8247211e3152e72855d197411"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "fe1d03ccff21bed563c6f46d3766849c"
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
    "url": "assets/js/10.0e8bcb13.js",
    "revision": "fd41f32473faa4d019eeda74cc350b2d"
  },
  {
    "url": "assets/js/11.c1d8fb0a.js",
    "revision": "cc496f1c7405d7e6004fd69743864449"
  },
  {
    "url": "assets/js/12.f835442a.js",
    "revision": "03b124c9543b830e474fe7c925dafaaa"
  },
  {
    "url": "assets/js/13.5ddda774.js",
    "revision": "25fe8c27818dbb63c90dd48fae88e358"
  },
  {
    "url": "assets/js/14.bad9018c.js",
    "revision": "f2cc7f2970c4be4b8515cafc01495bc8"
  },
  {
    "url": "assets/js/15.c51d215b.js",
    "revision": "7ea0805e42aad8b976a6271d722021f2"
  },
  {
    "url": "assets/js/16.5812469c.js",
    "revision": "51f0771cee8fb5f724ac0e000a7080c2"
  },
  {
    "url": "assets/js/17.1568c945.js",
    "revision": "cc1e674069c8aacea96c44e923db3636"
  },
  {
    "url": "assets/js/18.be6432c0.js",
    "revision": "efa48562803e11fb18936522bf43116c"
  },
  {
    "url": "assets/js/19.d3073bc3.js",
    "revision": "dc56a3f68af266aa1033ab0f1909bc37"
  },
  {
    "url": "assets/js/2.b7ae8144.js",
    "revision": "88a91680441694317ca6cdfe646e493d"
  },
  {
    "url": "assets/js/20.7004beae.js",
    "revision": "a165686d43ae273a915994079fb48437"
  },
  {
    "url": "assets/js/21.0e012ada.js",
    "revision": "29d06b5d3a8a7d0cb2a8d631d770b95f"
  },
  {
    "url": "assets/js/22.0cb9d559.js",
    "revision": "cc354bffb0fd26e3273d8dfa5d842280"
  },
  {
    "url": "assets/js/23.7a64dd77.js",
    "revision": "d458e3cf0cd47f70e5478a281b6fb7b2"
  },
  {
    "url": "assets/js/24.8a69aa65.js",
    "revision": "a87678c2e15709141c891b321a9bf3de"
  },
  {
    "url": "assets/js/25.dc8cdaa4.js",
    "revision": "08b528f8b56a3c2367935c68a2a3bf38"
  },
  {
    "url": "assets/js/26.ee8b98af.js",
    "revision": "5d66974c86ad58e82d73afba1c46870d"
  },
  {
    "url": "assets/js/27.3c89a374.js",
    "revision": "de97ce9ae10922b3536b3228099fab26"
  },
  {
    "url": "assets/js/28.83383986.js",
    "revision": "4aeb529139f950a3f19f0aef88ab5b18"
  },
  {
    "url": "assets/js/29.34a17616.js",
    "revision": "627c720f0363492730011fb0b4ace869"
  },
  {
    "url": "assets/js/3.cbd07064.js",
    "revision": "f3155ce3ece9dacc8e4a74599f344e15"
  },
  {
    "url": "assets/js/30.a4219489.js",
    "revision": "ab2a43732140b718e8253275b63d068a"
  },
  {
    "url": "assets/js/31.3252188c.js",
    "revision": "71f51912a27549f9511561b43313b0dd"
  },
  {
    "url": "assets/js/32.33aece0e.js",
    "revision": "0098ba3f87001cc6e6cc73cb01888366"
  },
  {
    "url": "assets/js/33.83c825fd.js",
    "revision": "816376855de12b6aecc30daa36853e09"
  },
  {
    "url": "assets/js/34.969229f1.js",
    "revision": "d6ea17c660e5e89598a50afe03fae030"
  },
  {
    "url": "assets/js/35.7187a90b.js",
    "revision": "f0bfb503963aed49ef17e793ba945b76"
  },
  {
    "url": "assets/js/36.9033744b.js",
    "revision": "4b616a2f301caa276358939bbddd28c8"
  },
  {
    "url": "assets/js/37.5f140afc.js",
    "revision": "4dc22be9f77abe752194a3d22a71034e"
  },
  {
    "url": "assets/js/4.34d1c829.js",
    "revision": "01ddb344266efb2c90828f5840459d16"
  },
  {
    "url": "assets/js/5.98787390.js",
    "revision": "432336b33d8a9969fd85258fc8f1fdb2"
  },
  {
    "url": "assets/js/6.120535e7.js",
    "revision": "85fabaa070a4ce0db116c9e248671220"
  },
  {
    "url": "assets/js/7.97f6a704.js",
    "revision": "15a6362aaa1bf3f3f523951f26623bd1"
  },
  {
    "url": "assets/js/8.116c1654.js",
    "revision": "ffda194d833c09fa5790334bd3c57366"
  },
  {
    "url": "assets/js/9.67c68ced.js",
    "revision": "74121d5a4d0f1d215c3d6ddd50570301"
  },
  {
    "url": "assets/js/app.ad894107.js",
    "revision": "13cc6056f23922c63ad8e0bd5aa84b64"
  },
  {
    "url": "cache/mongodb/mongodb.html",
    "revision": "d8c53bee0428e18cb96f447a7c776fed"
  },
  {
    "url": "cache/redis/leveldb.html",
    "revision": "ff2359cf4d9557ac4adfc70e1234dc55"
  },
  {
    "url": "cache/redis/redis.html",
    "revision": "645dd54b2d74ea43e70bd44131ff0bf1"
  },
  {
    "url": "cache/redis/rocksdb.html",
    "revision": "f029a5a3978c0f3e2935bd509a9e21ab"
  },
  {
    "url": "golang/learning.html",
    "revision": "dbfc9b488f24dfcc449e828da71d318f"
  },
  {
    "url": "golang/weexdemogo/read.html",
    "revision": "daadc5d62cbd391d91088458b60c3503"
  },
  {
    "url": "index.html",
    "revision": "a697784b01bcf67cc51ce3bfd9155037"
  },
  {
    "url": "issue/golang.html",
    "revision": "6b8ebd3b234db56ce434143dbeba0528"
  },
  {
    "url": "issue/mysql.html",
    "revision": "b0dc4133da2beca3a282731cc28998ab"
  },
  {
    "url": "issue/vue.html",
    "revision": "a10c2eccda496cfd24b0d7e7176cd401"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "feba2e8c6c07b1265d5cfef1951dbffe"
  },
  {
    "url": "nginx/nginx.html",
    "revision": "6190369b82d4abe410e01bdcfc88e0ee"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "b1f2a2bfbb6f06d53e3d854989d7dbe5"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "8e782ed9e426c32fe5537c26f23f24a8"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "6d7a8f472fbcf5aa85a26a851961f64c"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "321e82b71bd334ce1d561721cb240456"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "7c37039d86e22989e7b80a3bf4d7e81d"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "9e9b10a5c3142d8cb922c822952aeb3f"
  },
  {
    "url": "server/server.html",
    "revision": "57fefb31352c945fef3e64e32f922971"
  },
  {
    "url": "vue/primary/primary.html",
    "revision": "6183623d921d7537ba18a751f579f845"
  },
  {
    "url": "webpack/learning.html",
    "revision": "f681df4d95f2909035acdc8162c130b2"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "673e81a04fe029fa342a8505aff4343a"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "6cc5de71e6c98f1d220b119fe17a9287"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "a16152830bbdd65e264eccef560956c9"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "cca0fa7a50a75686ef0a79ce715050bb"
  },
  {
    "url": "weex/weex.html",
    "revision": "b19df524bfbb4937446865b8b753a97f"
  },
  {
    "url": "xp-review/index.html",
    "revision": "3811bc42746d193f3dc0c07d52b6dbc0"
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
