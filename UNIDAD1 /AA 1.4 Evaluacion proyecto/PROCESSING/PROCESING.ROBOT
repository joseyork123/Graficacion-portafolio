 void setup(){
   size(400,400);
 }
 void draw(){
   background(200);
   stroke(0);//color
   strokeWeight(3);//grozor
   //cabeza
   fill(36,100,151);//color azul
   rect(80,80,240,240);//x,y,ancho,alto
   //ojos
   fill(255);//color blanco
   circle(145,155,45);//ojo izquierdo;xcentro,ycentro,diamentro
   circle(255,155,45);
   //pupilas
   fill(0);
   circle(145,155,20);//pupila izquierda
   circle(255,155,20);
   //nariz
   fill(232,120,35);
   triangle(200,175,182,215,218,215);//x1,y1,x2,y2,x3,y3
   strokeWeight(5);
   line(140,250,260,250);//x1,y1,x2,y2
   }
    
