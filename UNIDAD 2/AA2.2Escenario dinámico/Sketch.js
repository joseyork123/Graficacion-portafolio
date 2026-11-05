function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Fondo de noche mística
  background(30, 10, 50); 

  // ==========================================
  // FONDO: LUNA GRANDE CON MANCHAS Y CRÁTERES
  // ==========================================
  push();
    let lunaX = width * 0.15;
    let lunaY = height * 0.16;
    
    // Resplandor exterior de la luna
    stroke(67);
    fill(255, 255, 230, 30); 
    ellipse(lunaX, lunaY, 150, 150);
    
    // Cuerpo principal de la luna (Más grande: radio de 115)
    fill(255, 255, 235);     
    ellipse(lunaX, lunaY, 115, 115);
    
    // Manchas y Cráteres de la Luna
    fill(225, 220, 200, 180);
    noStroke();
    ellipse(lunaX - 25, lunaY - 15, 28, 20);
    ellipse(lunaX + 20, lunaY + 25, 22, 18);
    ellipse(lunaX - 10, lunaY + 30, 32, 14);
    ellipse(lunaX + 25, lunaY - 20, 15, 15);
    
    // Detalles de cráteres menores
    fill(205, 200, 180, 150);
    ellipse(lunaX - 20, lunaY - 12, 10, 8);
    ellipse(lunaX + 18, lunaY + 22, 8, 6);
  pop();

  // ==========================================
  // FONDO: ESTRELLAS CON DESTELLOS ANIMADOS
  // ==========================================
  push();
    let brilloEstrella = 155 + sin(frameCount * 0.1) * 100;
    stroke(255, 255, 255, brilloEstrella);
    
    // Dibujar estrellas detalladas con destellos cruzados
    dibujarEstrellaConDestello(width * 0.05, height * 0.28, 3);
    dibujarEstrellaConDestello(width * 0.28, height * 0.12, 4);
    dibujarEstrellaConDestello(width * 0.42, height * 0.25, 3);
    dibujarEstrellaConDestello(width * 0.62, height * 0.12, 5);
    dibujarEstrellaConDestello(width * 0.78, height * 0.30, 4);
    dibujarEstrellaConDestello(width * 0.88, height * 0.15, 3);
    dibujarEstrellaConDestello(width * 0.94, height * 0.38, 3);
    
    // Estrellas grandes y brillantes
    dibujarEstrellaConDestello(width * 0.35, height * 0.07, 7);
    dibujarEstrellaConDestello(width * 0.82, height * 0.08, 8);
  pop();

  // PAPEL PICADO EN FORMA DE FANTASMA COLGANTE A LOS LADOS
  dibujarPapelPicadoLateral(width * 0.03, 70, color(255, 50, 150)); 
  dibujarPapelPicadoLateral(width * 0.03, 200, color(0, 150, 255)); 
  dibujarPapelPicadoLateral(width * 0.93, 70, color(0, 200, 100));   
  dibujarPapelPicadoLateral(width * 0.93, 200, color(255, 150, 0));  

  // ==========================================
  // FILA DE PAPEL PICADO SUPERIOR (MOVIMIENTO EXTREMO A EXTREMO)
  // ==========================================
  dibujarGuirnaldaPapelPicado();

  // ==========================================
  // MITAD DEL LIENZO EN COLOR CAFÉ CLARO (MÁS COLOR AL ENTORNO)
  // ==========================================
  fill(140, 100, 70); 
  stroke(40, 25, 15);
  strokeWeight(2);
  rect(0, height / 1.5, width, height / 1.5);

  // ==========================================
  // EFECTO: LUZ DEL CURSOR EN TIEMPO REAL
  // ==========================================
  push();
    fill(255, 220, 150, 20); 
    ellipse(mouseX, mouseY, 10, 10); 
    fill(255, 240, 200, 40); 
    ellipse(mouseX, mouseY, 20, 20); 
  pop();

  // ==========================================
  // ESTRUCTURA: ALTAR DE 3 NIVELES (CON MÁS CONTRASTE Y DOLOR/COLOR)
  // ==========================================
  let baseH = height * 0.95; 
  
  stroke(180, 170, 160);
  strokeWeight(3);
  
  // Nivel 1 (Inferior) con sombreado base
  fill(210, 205, 195); rect(width * 0.09, baseH - 120, width * 0.82, 130);
  fill(240, 238, 233); rect(width * 0.1, baseH - 120, width * 0.8, 125);
  
  // Nivel 2 (Medio) con sombreado base
  fill(210, 205, 195); rect(width * 0.19, baseH - 240, width * 0.62, 120);
  fill(245, 243, 238); rect(width * 0.2, baseH - 240, width * 0.6, 115);
  
  // Nivel 3 (Superior) con sombreado base
  fill(210, 205, 195); rect(width * 0.29, baseH - 340, width * 0.42, 100);
  fill(250, 248, 245); rect(width * 0.3, baseH - 340, width * 0.4, 95);

  // MANTELES DE PAPEL PICADO COLOR NARANJA BRILANTE
  dibujarOndasMantel(width * 0.1, width * 0.9, baseH + 5);      
  dibujarOndasMantel(width * 0.2, width * 0.8, baseH - 125);     
  dibujarOndasMantel(width * 0.3, width * 0.7, baseH - 245);     

  // FLORES EN LAS ESQUINAS DE LOS RECTÁNGULOS BLANCOS
  dibujarFlorEsquina(width * 0.1, baseH - 120);
  dibujarFlorEsquina(width * 0.9, baseH - 120);
  dibujarFlorEsquina(width * 0.2, baseH - 240);
  dibujarFlorEsquina(width * 0.8, baseH - 240);
  dibujarFlorEsquina(width * 0.3, baseH - 340);
  dibujarFlorEsquina(width * 0.7, baseH - 340);

  // CRUZ VERDE EN EL RECTÁNGULO DE ARRIBA
  push();
    stroke(34, 139, 34); 
    strokeWeight(10);
    line(width * 0.5, baseH - 330, width * 0.5, baseH - 250);
    line(width * 0.5 - 25, baseH - 305, width * 0.5 + 25, baseH - 305);
  pop();

  // DOS CUADROS CON CALAVERITAS DENTRO
  dibujarCuadroConCalavera(width * 0.38, baseH - 295);
  dibujarCuadroConCalavera(width * 0.62, baseH - 295);

  // HARDWARE DE SISTEMAS
  push();
    translate(width * 0.72, baseH - 75);
    fill(60, 65, 70); rect(0, 0, 80, 45, 3);
    stroke(30); line(0, 15, 80, 15); line(0, 30, 80, 30);
    let ledTick = sin(frameCount * 0.3) > 0; noStroke();
    fill(ledTick ? color(0, 255, 0) : color(0, 100, 0)); ellipse(10, 8, 5, 5); ellipse(10, 23, 5, 5);
    fill(!ledTick ? color(255, 100, 0) : color(100, 30, 0)); ellipse(20, 8, 5, 5); ellipse(20, 38, 5, 5);
    fill(40); rect(35, 5, 38, 6); rect(35, 20, 38, 6); rect(35, 35, 38, 6);
  pop();

  dibujarMicrochip(width * 0.32, baseH - 155);
  dibujarMicrochip(width * 0.68, baseH - 155);

  // VELAS CON ANIMACIÓN DE FLAMA
  let tFlama = 1.0 + sin(frameCount * 0.2) * 0.15;
  dibujarVelaNegra(width * 0.33, baseH - 280, tFlama);
  dibujarVelaNegra(width * 0.67, baseH - 280, tFlama);
  dibujarVelaNegra(width * 0.22, baseH - 180, tFlama);
  dibujarVelaNegra(width * 0.78, baseH - 180, tFlama);
  dibujarVelaNegra(width * 0.13, baseH - 75, tFlama);
  dibujarVelaNegra(width * 0.87, baseH - 75, tFlama);

  // COMIDA TRADICIONAL
  push();
    translate(width * 0.27, baseH - 150);
    fill(200); ellipse(0, 0, 45, 12);
    fill(255, 100, 0); ellipse(-8, -4, 12, 12); ellipse(8, -4, 12, 12);
    fill(255, 210, 0); ellipse(0, -7, 10, 10);
  pop();

  push();
    translate(width * 0.5, baseH - 150);
    fill(180); ellipse(0, 0, 45, 12);
    fill(255, 50, 50); ellipse(-8, -4, 12, 12); ellipse(6, -4, 12, 12);
    fill(140, 200, 60); ellipse(0, -6, 10, 10);
  pop();

  push();
    translate(width * 0.73, baseH - 150);
    fill(200); ellipse(0, 0, 45, 12);
    fill(255, 130, 0); ellipse(-6, -4, 12, 12); ellipse(6, -4, 12, 12);
  pop();

  push();
    translate(width * 0.37, baseH - 150);
    fill(210, 140, 60); ellipse(0, 0, 40, 22); 
    fill(240, 190, 120); ellipse(0, -7, 12, 6); ellipse(0, -10, 6, 6); 
  pop();

  push();
    translate(width * 0.63, baseH - 150);
    fill(190, 120, 50); ellipse(0, 0, 40, 22); 
    fill(230, 170, 100); ellipse(0, -7, 12, 6); ellipse(0, -10, 6, 6); 
  pop();

  push();
    translate(width * 0.5, baseH - 30);
    fill(100, 60, 20); rect(-45, -5, 90, 20, 5);
    fill(180, 110, 40); rect(-40, -12, 80, 10, 2);
    fill(34, 139, 34); rect(-25, -14, 50, 3);
  pop();

  push();
    translate(width * 0.33, baseH - 30);
    fill(110, 65, 25); rect(-35, -5, 70, 18, 4);
    fill(190, 120, 50); rect(-30, -10, 60, 8, 2);
    fill(44, 149, 44); rect(-15, -12, 30, 3);
  pop();

  push();
    translate(width * 0.62, baseH - 30);
    fill(80, 40, 15); ellipse(0, 0, 35, 25);
    fill(120, 75, 45); ellipse(0, -6, 31, 10);
  pop();

  // FLOR DE CEMPASÚCHIL FLOTANTE Y LOGOTIPO DE SISTEMAS JUNTOS
  push();
    let flotar = (baseH - 380) + sin(frameCount * 0.04) * 20;
    
    push();
      translate(width * 0.5, flotar);
      fill(255, 130, 0); ellipse(0, 0, 40, 40);
      fill(255, 200, 0); ellipse(0, 0, 20, 20);
    pop();
    
    // LOGO AL LADO DE LA FLOR (Escala fija a 0.5)
    dibujarLogoSistemas(width * 0.5 + 65, flotar, 0.5);
  pop();

  // CALAVERITA INTERACTIVA
  push();
    translate(width * 0.18, baseH - 45); 
    fill(200); ellipse(0, -25, 50, 50); 
    fill(200); rect(-18, 0, 36, 30, 5); 
    fill(0, 150, 200); rect(-13, -35, 10, 10); rect(3, -35, 10, 10);
    
    push();
      translate(18, 5); 
      let angulo = map(mouseY, 0, height, -0.6, 0.6);
      rotate(angulo);
      stroke(200); strokeWeight(8); line(0, 0, 30, -10); 
    pop();
  pop();
}

// ==========================================
// FUNCIONES AUXILIARES DE DISEÑO
// ==========================================

function dibujarEstrellaConDestello(x, y, tam) {
  push();
    strokeWeight(1);
    // Líneas de destello cruzadas
    line(x - tam * 2, y, x + tam * 2, y);
    line(x, y - tam * 2, x, y + tam * 2);
    // Centro de la estrella
    strokeWeight(tam);
    point(x, y);
  pop();
}

function dibujarGuirnaldaPapelPicado() {
  let colores = [
    color(255, 50, 150),  
    color(0, 191, 255),   
    color(255, 165, 0),   
    color(148, 0, 211),   
    color(0, 230, 118)    
  ];
  
  let anchoPapel = 55;
  let espaciado = 65;
  let yCuerda = 35; // Bajada un poco para que se note debajo del marco superior
  
  stroke(100, 80, 100, 150);
  strokeWeight(2);
  line(0, yCuerda, width, yCuerda);

  let indexColor = 0;
  for (let x = 15; x < width; x += espaciado) {
    push();
      let oscilacion = sin(frameCount * 0.05 + x * 0.01) * 0.12;
      translate(x + anchoPapel / 2, yCuerda);
      rotate(oscilacion);
      
      fill(colores[indexColor % colores.length]);
      noStroke();
      rect(-anchoPapel / 2, 0, anchoPapel, 55, 2);
      
      fill(30, 10, 50); 
      ellipse(0, 15, 12, 12);
      ellipse(-14, 30, 8, 8);
      ellipse(14, 30, 8, 8);
      rect(-18, 43, 36, 4);
      
      fill(colores[indexColor % colores.length]);
      for (let i = -anchoPapel / 2; i < anchoPapel / 2; i += 11) {
        arc(i + 5.5, 55, 11, 10, 0, PI);
      }
    pop();
    indexColor++;
  }
}

function dibujarLogoSistemas(x, y, escala) {
  push();
    translate(x, y);
    scale(escala);
stroke(17, 29, 66);
strokeWeight(6);
fill(255);
ellipse(0, 0, 160, 160);
strokeWeight(1.5);
noFill();
ellipse(0, 0, 144, 144);
strokeWeight(5);
stroke(76, 175, 80);
noFill();
arc(-10, 15, 100, 80, HALF_PI, PI + QUARTER_PI);
stroke(229, 57, 53);
arc(15, -10, 90, 110, PI + QUARTER_PI, TWO_PI + HALF_PI);
push();
translate(-20, -35);
stroke(17, 29, 66);
strokeWeight(3);
fill(255);
rect(-20, -20, 36, 24, 2);
quad(-24, 4, 20, 4, 14, 14, -30, 14);
pop();
push();
translate(-25, 20);
stroke(17, 29, 66);
strokeWeight(3);
noFill();
arc(-5, 5, 10, 10, PI + HALF_PI, TWO_PI);
arc(-5, 5, 22, 22, PI + HALF_PI, TWO_PI);
arc(-5, 5, 34, 34, PI + HALF_PI, TWO_PI);
pop();
push();
translate(30, 10);
fill(17, 29, 66);
noStroke();
ellipse(-5, -15, 18, 18);
ellipse(15, -5, 16, 16);
ellipse(0, 12, 14, 14);
pop();
push();
rotate(-HALF_PI);
textSize(9);
fill(17, 29, 66);
noStroke();
textAlign(CENTER, CENTER);
text("INGENIERÍA EN SISTEMAS", 0, -62);
pop();
stroke(17, 29, 66);
strokeWeight(2);
noFill();
beginShape();
for(let i = -40; i <= 40; i += 10) {
vertex(i, 60);
vertex(i, 53);
vertex(i + 5, 53);
vertex(i + 5, 60);
}
endShape();
pop();
}
function dibujarPapelPicadoLateral(x, y, col) {
push();
translate(x, y);
fill(col);
noStroke();
rect(0, 0, 50, 70, 2);
fill(30, 10, 50);
ellipse(15, 20, 10, 10); ellipse(35, 20, 10, 10); rect(12, 45, 26, 8);
fill(col);
for(let i=0; i<50; i+=12.5) {
arc(i+6.25, 70, 12.5, 12, 0, PI);
}
pop();
}
function dibujarMicrochip(x, y) {
push();
translate(x, y);
fill(35, 40, 35); rect(-20, -12, 40, 24, 2);
fill(80); ellipse(-14, 0, 4, 4);
stroke(200, 205, 210); strokeWeight(3);
for(let i = -14; i <= 14; i += 7) {
line(i, -12, i, -17); line(i, 12, i, 17);
}
pop();
}
function dibujarOndasMantel(xInicio, xFin, yPos) {
push();
fill(255, 100, 0);
noStroke();
for (let x = xInicio; x < xFin; x += 25) {
arc(x + 12.5, yPos, 25, 20, 0, PI);
}
pop();
}
function dibujarFlorEsquina(x, y) {
push();
translate(x, y);
fill(255, 140, 0);
noStroke();
ellipse(-8, 0, 12, 12);
ellipse(8, 0, 12, 12);
ellipse(0, -8, 12, 12);
ellipse(0, 8, 12, 12);
fill(255, 210, 0);
ellipse(0, 0, 10, 10);
pop();
}
function dibujarCuadroConCalavera(x, y) {
push();
translate(x, y);
fill(120, 70, 150); rect(-25, -30, 50, 60, 4);
fill(255); ellipse(0, -5, 24, 24); rect(-8, 5, 16, 14, 2);
fill(0); ellipse(-5, -5, 6, 6); ellipse(5, -5, 6, 6);
stroke(0); strokeWeight(2); line(-4, 12, -4, 16); line(0, 12, 0, 16); line(4, 12, 4, 16);
pop();
}
function dibujarVelaNegra(x, y, escalaFlama) {
push();
translate(x, y);
fill(25); noStroke(); rect(-6, 0, 12, 45, 1);
stroke(180); strokeWeight(1.5); line(0, 0, 0, -5);
translate(0, -5); scale(escalaFlama); noStroke();
fill(255, 90, 0); ellipse(0, -8, 11, 20);
fill(255, 235, 60); ellipse(0, -5, 6, 13);
pop();
}
