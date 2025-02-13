self.addEventListener('push', function (event) {
  const options = {
    body: 'Você recebeu uma nova notificação!',
    icon: 'icon.png', // Substitua por um ícone real
    badge: 'badge.png' // Ícone menor para a notificação
  };

  event.waitUntil(
    self.registration.showNotification('Nova Notificação', options)
  );
});
