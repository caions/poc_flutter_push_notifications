self.addEventListener('install', (event) => {
  console.log('✅ Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker ativado');
});

self.addEventListener('fetch', (event) => {
  console.log('🔍 Interceptando requisição para:', event.request.url);
});

// Escutando mensagens enviadas pelo app
self.addEventListener('message', function (event) {
  if (event.data && event.data.type === "SHOW_NOTIFICATION") {
    self.registration.showNotification(event.data.title, {
      body: event.data.body,
      icon: 'icons/icon-192.png',
      badge: 'icons/icon-192.png',
    });
  }
});

self.addEventListener('push', function (event) {
  console.log('pushed nova notificação')
  const options = {
    body: event.data ? event.data.text() : 'Nova notificação recebida!',
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
  };


  event.waitUntil(
    self.registration.showNotification('📢 Notificação!', options)
  );
});
