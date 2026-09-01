/* ============================================================================
 * Service Worker —— 学术简历离线壳层
 * ----------------------------------------------------------------------------
 * 策略：
 *   - 导航请求：网络优先，断网时回退到已缓存的首页（保证简历随时可读）
 *   - 静态资源：网络优先（保证最新版本），离线回退缓存
 *   - 仅缓存同源 GET 请求，POST / 跨域一律放行
 * 版本升级时改 CACHE 版本号即可触发清理旧缓存。
 * ========================================================================== */
var CACHE = 'cv-shell-v3.3';
var CORE = [
  './',
  'assets/css/style.css',
  'assets/js/resume-data.js',
  'assets/js/main.js',
  'assets/files/avatar.jpg',
  'assets/files/favicon.svg',
  'assets/files/og-banner.png',
  'assets/files/icon-512.png',
  'assets/files/manifest.webmanifest'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // addAll 是原子的：任一失败则整体回滚；coreCache 容错逐项添加，避免单文件 404 阻断安装
      return Promise.all(CORE.map(function (url) {
        return c.add(url).catch(function () { /* 忽略个别可选资源 */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  // 导航：网络优先，离线回退缓存首页
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (r) {
        var cp = r.clone();
        caches.open(CACHE).then(function (c) { c.put('./', cp); }).catch(function () {});
        return r;
      }).catch(function () {
        return caches.match('./').then(function (m) { return m || caches.match(req); });
      })
    );
    return;
  }

  // 静态资源：网络优先（保证每次访问最新版本），离线回退缓存
  e.respondWith(
    fetch(req).then(function (r) {
      if (r && r.status === 200 && r.type === 'basic') {
        var cp = r.clone();
        caches.open(CACHE).then(function (c) { c.put(req, cp); }).catch(function () {});
      }
      return r;
    }).catch(function () {
      return caches.match(req);
    })
  );
});
