self.addEventListener('push', event => {
  console.log('📩 Notificação recebida!');

  let data = { title: 'Nova Notificação!', body: 'Você recebeu uma mensagem.' };

  try {
    if (event.data) {
      data = event.data.json();
    }
  } catch (error) {
    console.error('❌ Erro ao processar dados da notificação:', error);
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'icon.png',
      badge: 'icon.png',
      vibrate: [200, 100, 200], // Pequena vibração no celular
    })
  );
});

// Fecha a notificação quando o usuário clicar nela
self.addEventListener('notificationclick', event => {
  event.notification.close();
});
