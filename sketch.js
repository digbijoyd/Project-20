var car, wall; 
var speed, weight;

function setup() {
  createCanvas(830,400);
 car=createSprite(80, 200, 50, 50);
 wall=createSprite(730, 200, 35, 300);
}

function draw() {
 background("black");  
 createEdgeSprites;
 car.shapeColor="green";  
 car.velocityX=random(55,90);
 
 if(car.isTouching(wall)){
 car.velocityX=0;
 }
 
  drawSprites();
}