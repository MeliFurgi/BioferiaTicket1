// Placeholder de interacción: acá enganchás tu lógica real
// (abrir cámara, mostrar QR ampliado, animar el ticket, etc.)
document.getElementById('ticket').addEventListener('click', function () {
  this.classList.toggle('is-active');
  // Ejemplo: window.location.href = 'qr.html';
  console.log('Ticket presionado: disparar acá tu flujo de escaneo de QR');
});