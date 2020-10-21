
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0;
var survivalTime=0;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey= createSprite(50,200);
  monkey.scale=0.1;
monkey.addAnimation("running",monkey_running);
  
 ground= createSprite(0,350,400,20); 
  ground.velocityX=-4;
   
  foodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
 background("lightblue"); 
  // console.log(frameRate());
score=score+ Math.ceil(frameCount/100);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/ frameRate());
  text("Survival Time: "+ survivalTime,50,50);
  
  ground.x=ground.width/2;
  
 if(keyDown("space") && monkey.y>300){
   monkey.velocityY= -12;
 } 
  monkey.velocityY=monkey.velocityY+0.5;
 monkey.collide(ground);
  SpawnFood();
  SpawnObstacles();
  drawSprites();

  
}

function SpawnFood(){
  if(frameCount%80===0){
  var banana=         createSprite(600,Math.round(random(120,200)),10,10);
    banana.velocityX = -4;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    foodGroup.add(banana);
    foodGroup.setLifetimeEach(100);
  }
}


function SpawnObstacles(){
  if(frameCount%100===0){
  var obstacle= createSprite(600,ground.y-40,10,10);
    obstacle.velocityX = -4;
    obstacle.addImage( obstaceImage);
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
    obstacleGroup.setLifetimeEach(200);
  }
}



