var lane, laneGroup;
var player, playerRunning, playerCrashed;
var score;
var shield8, shield8Image, shield8Group;
var knife, knifeImage, knifeGroup;
var gameOver, gameOverImage;

var PLAY = 1;
var END = 0;

var gameState = PLAY;

function preload() {
  playerRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  playerCrashed = loadAnimation("trex_collided.png");

  gameOverImage = loadImage("gameOver.png");

  knifeImage = loadImage("knife.png");

  shield8Image = loadImage("900px-I-8svg.png");
  
}

function setup() {
 createCanvas(600,400);

  gameOver = createSprite(200,200,20,20);
  gameOver.addImage("gameover",gameOverImage);
  gameOver.visible = false;
  
  score = 0;

  
  //sunakshi :create group for lane shield & knife
  shield8Group = new Group();
  knifeGroup = new Group();


  player = createSprite(200,350,100,20);
  player.addAnimation("running",playerRunning);
  player.addAnimation("crashed",playerCrashed);

  
}


function draw() 
{
    background("Yellow");
    
    text("Score: " + score,25,25);
    
   
   
   
    if(gameState === PLAY)
    {
        //write code for gamestate play
   
    }
 
 
 
 if (gameState == END) {

   //write code for gameState end 

   player.changeAnimation("crashed",playerCrashed);
   gameOver.visible = true;
 
 }


 //sunakshi: Don't write gameState in the function createObstacle which you were doing
    player.x = mouseX;

     

      //this is the code when shield isTouching the player as player is not moving but the shield is moving so whichever move should be placed on the left side of isTouching()
      //hit is a callback function which is getting called inside another function
      //hit is defined outside draw()
      shield8Group.isTouching(player,hit)

    
      if (player.isTouching(knifeGroup)) 
      {
        gameState = END;
      }

 
   drawSprites();
   }
 

 //sunakshi : this is called callback function  
 function hit(shield,player)
 {
    shield.destroy();
    score = score + 1;
 }  
   

//sunakshi : once you define the function(user defined) then call the function inside draw()

function createShield() {

  if (frameCount % 60 === 0) {
    shield8 = createSprite(200,0,40,40);
    shield8.addImage("interstate8",shield8Image);
    shield8.scale = 0.07;
    shield8.x = Math.round(random(20,380));
    shield8.velocityY = 3;
    shield8.lifetime = 400;
    shield8Group.add(shield8);
    }


}


function createKnife()
{

  //sunakshi: write code for knife like shield

}

function createLane()
{
  //sunakshi: write code for lane creation like knife & shield

} 


