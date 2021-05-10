var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(700,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.velocityX = 4;
  movingRect.velocityX = -4;
}

function draw() {
  background(0,0,0);  
  
  /*if (isTouching(movingRect,game)){
    movingRect.shapeColor = "red";
    game.shapeColor = "red";
    
  }
  else{
    movingRect.shapeColor = "green";
    game.shapeColor = "blue";
  }*/
  
  bounce(fixedRect, movingRect);
  
  drawSprites();
}

