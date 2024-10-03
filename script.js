// Mostrar la hora en tiempo real
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

// Generar el código QR
const qr = new QRious({
    element: document.getElementById('qr-code'),
    value: 'https://uma.es',
    size: 150
});
