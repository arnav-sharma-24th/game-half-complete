  var snake;
  var wall;
  var wall1;
  var wall2;
  var wall3;
  var food;
  var canvas

  function preload(){
  

  }

  function setup(){
  canvas = createCanvas(1550,800);
  ball = createSprite(200,200);

  }

  function draw(){
  
  background("green");
  ellipse(20,20,30);
 drawSprites();
  }
  