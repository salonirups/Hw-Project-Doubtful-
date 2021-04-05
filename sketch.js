var background1,background_1;
var bullet,bull_et;
var balloon, ball_oon, balloonsGroup;
var gun_shot;
var score;
var hand,hand_img;

function preload() {
  background_1=loadImage("bg2.jpg");
  bull_et=loadImage("bullet2.png");
  ball_oon=loadImage("balloon.png");
  gun_shot=loadSound("Gun Shot.mp3");
  hand_img=loadImage("man4.png")
}

function setup() {
  createCanvas(600, 600);

  background1 = createSprite(300, 300, 3000, 3000);
  background1.addImage(background_1);
  background1.scale = 1;
  
  score=0

  hand=createSprite(490,50,10,10);
  hand.addImage(hand_img);
  hand.scale = 0.4

  balloonsGroup=new Group();
}

function draw() 
{
background("cyan");

  hand.y = mouseY;

  if (keyDown("space")) 
  {
    shootbullet();
    gun_shot.play();
  }

  if(balloonsGroup.isTouching(bullet)){
    score=score+1;
    balloonsGroup.destroyEach();

  }

  spawnBalloons();

  //drawSprites
  drawSprites();

  stroke("red")
  fill("red")
  textSize(25);
  text("Score!!:"+score,200,50)
  textSize(20);
  text("Press'SPACE'to fire bullet and use MOUSE to move",100,100)
}

//shoot Arrow
function shootbullet() {
  bullet = createSprite(hand.x-80, 50, 50, 20);
  bullet.addImage(bull_et);
  bullet.y = hand.y-20;
  bullet.scale = 0.1;
  bullet.velocityX = -20;
}

//spawn Balloons
function spawnBalloons(){
  if (frameCount % 60 === 0) {
    var balloon = createSprite(50,120,40,10);
    balloon.y = Math.round(random(80,620));
    balloon.addImage(ball_oon);
    balloon.scale = 0.1;
    balloon.lifetime=40
    
    //add each balloon to the group
    balloonsGroup.add(balloon);
  }
}