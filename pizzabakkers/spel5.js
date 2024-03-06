let cheeseXSpeed, pepperoniXSpeed, tomatoXSpeed, pepperXSpeed, onionXSpeed, bomXSpeed;
let cheeseX, cheeseY;
let pepperoniX, pepperoniY;
let tomatoX, tomatoY;
let pepperX, pepperY;
let onionX, onionY;
let bomX, bomY;
let verloren = false;
let perfect = false;
let goed = false;
let slecht = false;
let explosie = false;

function setup() {
  createCanvas(1000, 600);
 
  // Initialisatie van variabelen
  cheeseXSpeed = 13;
  pepperoniXSpeed = 15;
  tomatoXSpeed = 15;
  pepperXSpeed = 18;
  onionXSpeed = 20;
  bomXSpeed = 16;
 
  cheeseX = width+150;
  cheeseY = height/2;
 
  pepperoniX = width+150;
  pepperoniY = height/2;
 
  tomatoX = width+150;
  tomatoY = height/2;
 
  pepperX = width+150;
  pepperY = height/2;
 
  onionX = width+150;
  onionY = height/2;
  
  bomX = width+150;
  bomY = height/2;
 
  currentTopping = "cheese";
}

function draw() {
 background('#CEE4F4');
 
 // Teken uitleg over de bom
  fill('blue');
  rect(0,0,1000,100);
  fill('black');
  textSize(37);
  text('Pas op bommen horen niet op de pizza!',80,60);
 
  // Teken de korst
  fill(210, 105, 30);
  noStroke();
  ellipse(width/2, height/2, 350, 350);
 
 
  // Teken de kaas
  fill(255, 215, 0);
  noStroke();
  ellipse(cheeseX, cheeseY, 310, 310);
 
// teken goed of slecht

  if (perfect) {
    fill('blue');
    textSize(37);
    text('Perfect',80,150);
  }
   if (goed) {
    fill('green');
    textSize(37);
    text('Goed',80,150);
  }
   if (slecht) {
    fill('#E9211C');
    textSize(37);
    text('Slecht',80,150);
    verloren = true;
  }
   if (explosie) {
    fill('#E9211C');
    textSize(37);
    text('Biem, dat was een bom!',80,150);
    verloren = true;
   }
   
  // Beweeg de toppings
  
  if (currentTopping === "cheese") {
    cheeseX -= cheeseXSpeed;
    if (cheeseX < -160) {
      currentTopping = "pepperoni";
      verloren = true;
    }
    else if (cheeseXSpeed === 0) {
      currentTopping = "pepperoni";
      let afstand = abs((width/2) - cheeseX);
      if (afstand <= 15) {
        perfect = true;
        goed = false;
        slecht = false;
        explosie = false;
      }
      else if (afstand <= 50 && afstand >= 15 ) {
       perfect = false;
        goed = true;
        slecht = false;
        explosie = false;
        }
      else {
        perfect = false;
        goed = false;
        slecht = true;
        explosie = false;
      }
    }
  }
  
  if (currentTopping === "pepperoni") {
    pepperoniX -= pepperoniXSpeed;
    if (pepperoniX < -160) {
      currentTopping = "bom";
      verloren = true;
    }
    else if (pepperoniXSpeed === 0){
      currentTopping = "bom";
      let afstand = abs((width/2) - pepperoniX);
      if (afstand <= 15) {
        perfect = true;
        goed = false;
        slecht = false;
        explosie = false;
      }
      else if (afstand <= 50 && afstand >= 15 ) {
       perfect = false;
        goed = true;
        slecht = false;
        explosie = false;
        }
      else {
        perfect = false;
        goed = false;
        slecht = true;
        explosie = false;
      }
    }
   }
 
  if (currentTopping === "bom") {
    bomX -= bomXSpeed;
    if (bomX < -160) {
      currentTopping = "tomato";
    }
    else if (bomXSpeed === 0){
      currentTopping = "tomato";
      let afstand = abs((width/2) - bomX);
      if (afstand <= 50 && afstand >= 0 ) {
       perfect = false;
        goed = false;
        slecht = false;
        explosie = true;
        
        }
      else {
        perfect = false;
        goed = true;
        slecht = false;
        explosie = false;
      }
    }
  }
  
  if (currentTopping === "tomato") {
    tomatoX -= tomatoXSpeed;
    if (tomatoX < -160) {
      currentTopping = "pepper";
      verloren = true;
    }
    else if (tomatoXSpeed === 0){
      currentTopping = "pepper";
      let afstand = abs((width/2) - tomatoX);
      if (afstand <= 15) {
        perfect = true;
        goed = false;
        slecht = false;
        explosie = false;
      }
      else if (afstand <= 50 && afstand >= 15 ) {
       perfect = false;
        goed = true;
        slecht = false;
        explosie = false;
        }
      else {
        perfect = false;
        goed = false;
        slecht = true;
        explosie = false;
      }
    }
  }
  
  
  if (currentTopping === "pepper") {
    pepperX -= pepperXSpeed;
    if (pepperX < -160) {
      currentTopping = "onion";
      verloren = true;
    }
    else if (pepperXSpeed === 0){
      currentTopping = "onion";
      let afstand = abs((width/2) - pepperX);
      if (afstand <= 15) {
        perfect = true;
        goed = false;
        slecht = false;
        explosie = false;
      }
      else if (afstand <= 50 && afstand >= 15 ) {
       perfect = false;
        goed = true;
        slecht = false;
        explosie = false;
        }
      else {
        perfect = false;
        goed = false;
        slecht = true;
        explosie = false;
      }
    }
  }
 
  if (currentTopping === "onion") {
    onionX -= onionXSpeed;
    if (onionX < -160) {
    verloren = true;
    }
    if (onionXSpeed === 0 || onionX < -160){
      let afstand = abs((width/2) - onionX);
      if (afstand <= 15) {
        perfect = true;
        goed = false;
        slecht = false;
        explosie = false;
      }
      else if (afstand <= 50 && afstand >= 15 ) {
       perfect = false;
        goed = true;
        slecht = false;
        explosie = false;
        }
      else {
        perfect = false;
        goed = false;
        slecht = true;
        explosie = false;
      }
      
      if (!verloren) {
      fill('green');
      rect(0,0,1000,100);
      fill('black');
      textSize(37);
      text('Gefeliciteerd, je hebt een heerlijke pizza gebakken!',80,60);
      }
      else {
      fill('red');
      rect(0,0,1000,100);
      fill('black');
      textSize(37);
      text('Jammer knul, ga terug en probeer het opnieuw',80,60);
      }
      
    
    }
  }



  // Teken de toppings
 
  fill('#B5301C');
  ellipse(pepperoniX, pepperoniY, 32, 32);
  ellipse(pepperoniX+60, pepperoniY, 32, 32);
  ellipse(pepperoniX+120, pepperoniY, 32, 32);
  ellipse(pepperoniX-60, pepperoniY, 32, 32);
  ellipse(pepperoniX-120, pepperoniY, 32, 32);
  
  ellipse(pepperoniX+35, pepperoniY+50, 32, 32);
  ellipse(pepperoniX-35, pepperoniY+50, 32, 32);
  ellipse(pepperoniX+110, pepperoniY+50, 32, 32);
  ellipse(pepperoniX-110, pepperoniY+50, 32, 32);
   
  ellipse(pepperoniX+35, pepperoniY-50, 32, 32);
  ellipse(pepperoniX-35, pepperoniY-50, 32, 32);
  ellipse(pepperoniX+110, pepperoniY-50, 32, 32);
  ellipse(pepperoniX-110, pepperoniY-50, 32, 32);
   
  ellipse(pepperoniX, pepperoniY+100, 32, 32);
  ellipse(pepperoniX-80, pepperoniY+100, 32, 32);
  ellipse(pepperoniX+80, pepperoniY+100, 32, 32);
    
  ellipse(pepperoniX, pepperoniY-100, 32, 32);
  ellipse(pepperoniX-80, pepperoniY-100, 32, 32);
  ellipse(pepperoniX+80, pepperoniY-100, 32, 32);
   
  ellipse(pepperoniX-40, pepperoniY+130, 32, 32);
  ellipse(pepperoniX+40, pepperoniY+130, 32, 32);
  
  ellipse(pepperoniX-40, pepperoniY-130, 32, 32 );
  ellipse(pepperoniX+40, pepperoniY-130, 32, 32);
  
  fill('#E9491B');
  ellipse(tomatoX-40, tomatoY, 25, 25);
  ellipse(tomatoX+40, tomatoY, 25, 25);
  ellipse(tomatoX-120, tomatoY, 25, 25);
  ellipse(tomatoX+120, tomatoY, 25, 25);
  
  ellipse(tomatoX, tomatoY+80, 25, 25);
  ellipse(tomatoX+80, tomatoY+80, 25, 25);
  ellipse(tomatoX-80, tomatoY+80, 25, 25);

  ellipse(tomatoX, tomatoY-80, 25, 25);
  ellipse(tomatoX+80, tomatoY-80, 25, 25);
  ellipse(tomatoX-80, tomatoY-80, 25, 25);
  
  ellipse(tomatoX-40, tomatoY+125, 25, 25);
  ellipse(tomatoX+40, tomatoY+125, 25, 25);
  
  ellipse(tomatoX-40, tomatoY-125, 25, 25);
  ellipse(tomatoX+40, tomatoY-125, 25, 25);
  
  
  fill('#3D7F3B');
  ellipse(pepperX, pepperY, 22, 22);
  ellipse(pepperX-100, pepperY, 22, 22);
  ellipse(pepperX+100, pepperY, 22, 22);
  
  ellipse(pepperX+50, pepperY+100, 22, 22);
  ellipse(pepperX-50, pepperY+100, 22, 22);
  ellipse(pepperX+50, pepperY-100, 22, 22);
  ellipse(pepperX-50, pepperY-100, 22, 22);
  
  
  fill('#FFF656');
  ellipse(onionX,onionY,25,25);
  ellipse(onionX-100,onionY,25,25);
  ellipse(onionX+100,onionY,25,25);
  
  ellipse(onionX-50,onionY+100,25,25);
  ellipse(onionX+50,onionY+100,25,25);
  ellipse(onionX-50,onionY-100,25,25);
  ellipse(onionX+50,onionY-100,25,25);
  
  fill('black');
  ellipse(bomX,bomY,70,70);
  
}

function mousePressed() {
 if (currentTopping === "cheese") {
    cheeseXSpeed = 0;
  }
  
  if (currentTopping === "pepperoni") {
    pepperoniXSpeed = 0;
  }
    
  if (currentTopping === "bom") {
    bomXSpeed = 0;
  }
  
  if (currentTopping === "tomato") {
    tomatoXSpeed = 0;
  }
    
  if (currentTopping === "pepper") {
    pepperXSpeed = 0;
  }
    
  if (currentTopping === "onion") {
    onionXSpeed = 0;
  }
}