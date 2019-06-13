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
    "revision": "72eedd941d60c15ead100c343553763f"
  },
  {
    "url": "arithmetic/golang.html",
    "revision": "55a59076bc8fe65b10ddebfe40ad1552"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "564bc83ce8a14dbd94e351cebc111c7b"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "9ccb64a4fc9aab79a536185474063715"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "be7907313a530b1db4ddf783ca03fb8a"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "04d13c3bbb1af76199f88c778e4a1b28"
  },
  {
    "url": "assets/css/0.styles.05c040d9.css",
    "revision": "808c4f2ce5a76b3b2cf8450f1481361c"
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
    "url": "assets/js/11.b021af64.js",
    "revision": "933f4fb2eb2816d5d3fce99f758638dd"
  },
  {
    "url": "assets/js/12.03709a7a.js",
    "revision": "78ea99c2ecd9324ac2b06aa40542164e"
  },
  {
    "url": "assets/js/13.a466c035.js",
    "revision": "78b18f36d03cc608aa6b537b1dc77c7b"
  },
  {
    "url": "assets/js/14.e04ce222.js",
    "revision": "e67d41bf9e84105c967b3b6fe1987cd0"
  },
  {
    "url": "assets/js/15.667dc7eb.js",
    "revision": "03c4623d5ce0eb77337c6e0baecad068"
  },
  {
    "url": "assets/js/16.2a6b107c.js",
    "revision": "7f2b347a81c04dcced7e9b6b6dc0485a"
  },
  {
    "url": "assets/js/17.5ee45f2a.js",
    "revision": "379ea6ebe9bf341f68a85809fca8ed7d"
  },
  {
    "url": "assets/js/18.35d32359.js",
    "revision": "66f0b3af3420360694c9196e558ee495"
  },
  {
    "url": "assets/js/19.da7099f3.js",
    "revision": "e54aabc2c81201381a13fdbee20a37e0"
  },
  {
    "url": "assets/js/2.86350470.js",
    "revision": "0447bcc4d0e13f91ed7fa0b87f9d8783"
  },
  {
    "url": "assets/js/20.ecbd1662.js",
    "revision": "ed7468269f07456530f82c06884474ec"
  },
  {
    "url": "assets/js/21.f7ff950f.js",
    "revision": "484e3d3f19b5cd3933b4fcf2682acdb4"
  },
  {
    "url": "assets/js/22.8dbdfd2d.js",
    "revision": "6042d11f6840f3bf4351d8bca78b97bc"
  },
  {
    "url": "assets/js/23.d6f36c1a.js",
    "revision": "0086126b5837fed3b606b37791a87359"
  },
  {
    "url": "assets/js/24.70956b84.js",
    "revision": "d6f06cb97098d0e83961997381aff97f"
  },
  {
    "url": "assets/js/25.6c5a1aeb.js",
    "revision": "41fa4adbd232cfb75d5e33aa33c2b7ef"
  },
  {
    "url": "assets/js/3.12871e0a.js",
    "revision": "877a52ce85d6efe581df9236b0c448e5"
  },
  {
    "url": "assets/js/4.94819aa7.js",
    "revision": "14c40d65bd87ecfb75127177846a89a4"
  },
  {
    "url": "assets/js/5.acb67728.js",
    "revision": "ac1f9ddbc61f0aa900e4aafc0a098316"
  },
  {
    "url": "assets/js/6.dff9f22a.js",
    "revision": "e11c7cebe2e03065c934a86cda8975f2"
  },
  {
    "url": "assets/js/7.26d1f7de.js",
    "revision": "bc4b3ad1bc04eaf5add2d752c23d5b0f"
  },
  {
    "url": "assets/js/8.aaa2d750.js",
    "revision": "0da39105a24e28a30c5ea60abd544b0e"
  },
  {
    "url": "assets/js/9.3d8971cc.js",
    "revision": "e5fda336d9868722227c69ec24f1a8cb"
  },
  {
    "url": "assets/js/app.8d3f8657.js",
    "revision": "5b01e97ba2a938b63c34a848cba49679"
  },
  {
    "url": "golang/learning.html",
    "revision": "a7e9364cf02b79a5c9f24993f3d1804f"
  },
  {
    "url": "index.html",
    "revision": "5a9791de212061a24bd2178e11c3fd0f"
  },
  {
    "url": "issue/golang.html",
    "revision": "24b1d1d83013b4c09a2e54ee6e50ceb5"
  },
  {
    "url": "issue/vue.html",
    "revision": "9bff244a41141fcecd865cad01f20e57"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "0850645041d814fc3bfc117104b2537d"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "af7c3b96fed41f345ef56beb9ef5eb04"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "aec292465a9908ed19553bd8aee63992"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "632e9057ba6526ce4f45ab25d6584a5d"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "939c1464a084da912c56389ad288defd"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "b18d00aed71f458080e65910bddc5a94"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "f4990c55eb5d3516452fd3aa7c5f0fe3"
  },
  {
    "url": "webpack/learning.html",
    "revision": "6511d1f45c593c83583aa279c9f9e384"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "83380c9efe3902603389462d685213c2"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "14ec65b6bee6db9433b412e32c4ee4fa"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "43ba23dbf23fed31df566a249a76ffba"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "bac64cb886394251c6217470036cbe97"
  },
  {
    "url": "xp-review/index.html",
    "revision": "8d69532b7b58bb902fdc095adf00cba7"
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
