self.addEventListener('push', event => {
  console.log('Push recebido:', event);
  self.registration.showNotification('Teste', { body: 'Notificação pelo Service Worker!' });
});
