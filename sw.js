self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // ปล่อยผ่านไปก่อน ยังไม่ต้อง Intercept อะไร
});
