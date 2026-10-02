function setup() {
  createCanvas(650, 300); // Lienzo ancho para ver las 5 etapas en fila
}

function draw() {
  background(240);

  // --- ETAPA 1: Pollito bebé recién nacido (Color amarillo claro) ---
  push();
    translate(60, 160);
    scale(0.8);
    rotate(radians(-8));
    drawChicken(1, color(253, 226, 179)); 
  pop();

  // --- ETAPA 2: Pollito joven (Color amarillo vivo) ---
  push();
    translate(170, 160);
    scale(1.1);
    rotate(radians(0));
    drawChicken(2, color(254, 219, 78)); 
  pop();

  // --- ETAPA 3: Pollo adolescente (Color naranja claro) ---
  push();
    translate(290, 160);
    scale(1.4);
    rotate(radians(5));
    drawChicken(3, color(237, 157, 91)); 
  pop();

  // --- ETAPA 4: Pollo maduro (Color marrón claro + CRESTA ROJA) ---
  push();
    translate(420, 160);
    scale(1.7);
    rotate(radians(-3));
    drawChicken(4, color(210, 114, 53)); 
  pop();

  // --- ETAPA 5: Pollo adulto (Color marrón oscuro + CRESTA ROJA) ---
  push();
    translate(560, 160);
    scale(2.0);
    rotate(radians(4));
    drawChicken(5, color(160, 68, 30)); 
  pop();
}

// Función para dibujar el pollo de forma sencilla
// Recibe el número de etapa (1 a 5) y el color del cuerpo
function drawChicken(etapa, colorCuerpo) {
  ellipseMode(CENTER);
  stroke(0);        // Contorno negro grueso
  strokeWeight(3.5);

  // 1. Patas
  line(-8, 15, -8, 35); 
  line(8, 15, 8, 35);   

  // 2. Cresta Roja (Solo se dibuja si estamos en la etapa 4 o en la etapa 5)
  if (etapa >= 4) {
    fill(215, 40, 40); // Color rojo
    ellipse(12, -35, 12, 16); // Elipse de la cresta
  }

  // 3. Cuerpo principal (Círculo grande)
  fill(colorCuerpo);
  ellipse(0, 0, 46, 44);

  // 4. Cabeza (Círculo mediano arriba a la derecha)
  ellipse(15, -15, 30, 30);

  // 5. Pico (Triángulo negro)
  fill(0); 
  triangle(28, -17, 28, -11, 38, -14);

  // 6. Ojo (Punto negro)
  fill(0);
  noStroke();
  ellipse(18, -18, 5, 5);
}
