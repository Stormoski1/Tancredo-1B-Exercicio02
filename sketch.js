let cor;
let posicaoHorizontal;
let posicaoVertical;
let tamanho;

function setup() {
  createCanvas(400, 400);
  background("black");
  cor = color(random(0,255),random(0,255),random(0,255))
  posicaoHorizontal = 200;
  posicaoVertical = 200;
  tamanho=20
              
}

function draw() {
   fill(cor)
  
   circle(posicaoHorizontal, posicaoVertical,tamanho );
  
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal -= 5
     } 
  
    
    if(mouseX> posicaoHorizontal) 
      posicaoHorizontal += 5
   
    if(mouseY > posicaoVertical) {
      posicaoVertical += 5
    }
     
 if(mouseY < posicaoVertical) {
      posicaoVertical -= 5
   cor=color(random(0,255), random(0,255), random(0,255), random(0,100))
    }
     
     

  
  
  
  
}