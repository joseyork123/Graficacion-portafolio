// Conectamos con el canvas del HTML
const canvas = document.getElementById('miLienzo');
const ctx = canvas.getContext('2d');

// ==========================================
// CARA: Cuadrado azul
// ==========================================

ctx.fillStyle = '#24658c';
ctx.strokeStyle = '#222222';
ctx.lineWidth = 2;

// x = 175, y = 50, ancho = 250, alto = 250
ctx.fillRect(175, 50, 250, 250);
ctx.strokeRect(175, 50, 250, 250);


// ==========================================
// OJO IZQUIERDO
// ==========================================

ctx.beginPath();
ctx.arc(225, 125, 25, 0, Math.PI * 2);

ctx.fillStyle = 'white';
ctx.strokeStyle = '#222222';
ctx.lineWidth = 2;

ctx.fill();
ctx.stroke();

// Pupila izquierda
ctx.beginPath();
ctx.arc(225, 125, 10, 0, Math.PI * 2);

ctx.fillStyle = 'black';
ctx.fill();


// ==========================================
// OJO DERECHO
// ==========================================

ctx.beginPath();
ctx.arc(375, 125, 25, 0, Math.PI * 2);

ctx.fillStyle = 'white';
ctx.strokeStyle = '#222222';
ctx.lineWidth = 2;

ctx.fill();
ctx.stroke();

// Pupila derecha
ctx.beginPath();
ctx.arc(375, 125, 10, 0, Math.PI * 2);

ctx.fillStyle = 'black';
ctx.fill();


// ==========================================
// NARIZ: Triángulo naranja
// ==========================================

ctx.beginPath();

ctx.moveTo(300, 145);
ctx.lineTo(285, 180);
ctx.lineTo(315, 180);

ctx.closePath();

ctx.fillStyle = '#f58220';
ctx.strokeStyle = '#222222';
ctx.lineWidth = 2;

ctx.fill();
ctx.stroke();


// ==========================================
// BOCA
// ==========================================

ctx.beginPath();

ctx.moveTo(255, 225);
ctx.lineTo(345, 225);

ctx.strokeStyle = 'black';
ctx.lineWidth = 4;
ctx.lineCap = 'round';

ctx.stroke();

