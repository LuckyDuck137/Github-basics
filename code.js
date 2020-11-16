var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","f5c6a2e2-15f0-4adc-89d9-04ddd42c303d","7c9c81da-a3ad-41db-a0d6-ec69d908314a","58d82dfc-193a-407e-94a7-a8965b65dc07"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"iHxjVw5_N5bqJ60GQLrNT8P4BEaHi1ye","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":2456},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"Ua0ExDRvHiOmgfqVCOieTCN.8m9rMuiO","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"5aHwWI1jgF9T2z2N9lTgZYGaJvk8kX0Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"f5c6a2e2-15f0-4adc-89d9-04ddd42c303d":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png"},"7c9c81da-a3ad-41db-a0d6-ec69d908314a":{"name":"cloud_1","sourceUrl":"assets/api/v1/animation-library/gamelab/BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9/category_environment/cloud.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9/category_environment/cloud.png"},"58d82dfc-193a-407e-94a7-a8965b65dc07":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"hW85tI5h71ktN6mPT0_yYBqLGt6_6n8D","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/58d82dfc-193a-407e-94a7-a8965b65dc07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var scene=createSprite(0,0,400,400);
scene.setAnimation("city_1");
scene.scale=2;
scene.velocityX=-2;


var monkey = createSprite(25,375,20,50);
monkey.scale=0.10;
monkey.setAnimation("monkey");


monkey.setCollider("circle",0,0,30);


monkey.scale =0.10;



var ground = createSprite(20,375,800,10);


//invisible Ground to support Trex
var invisibleGround = createSprite(20,375,800,10);
invisibleGround.visible = false;
monkey.collide(invisibleGround);

//create Obstacle and Cloud Groups
var ObstaclesGroup = createGroup();
var CloudsGroup = createGroup();

//place gameOver and restart icon on the screen
var gameOver = createSprite(200,200);
var restart = createSprite(200,340);
gameOver.scale = 0.5;
restart.scale = 0.5;

gameOver.visible = true;
restart.visible = false;

//set text
textSize(18);
textFont("Georgia");
textStyle(BOLD);

//score
var count = 0;

function draw() {
  //set background to white
  background(255);
  //display score
  text("Score: "+ count, 250, 100);
  console.log(gameState);
  if (scene.x<0) {
  scene.x = scene.width/2;
}
   text("Score: "+ count, 250, 100);
  console.log(gameState);
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    count = count+Math.round(World.frameRate/80);
    count=count+1;
    if (count>0 && count%100 === 0){
      playSound("checkPoint.mp3");
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     //jump when the space key is pressed
    if(keyDown("space") && monkey.y >= 359){
      monkey.velocityY = -12 ;
      playSound("jump.mp3");
    }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
    
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles
    spawnObstacles();
    
    //End the game when trex is touching the obstacle
    if(ObstaclesGroup.isTouching(monkey)){
      playSound("jump.mp3");
      gameState = END;
      playSound("die.mp3");
    }
  }
  
  else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    monkey.velocityY = 0;
    stonesGroup.setVelocityXEach(0);
    CloudsGroup.setVelocityXEach(0);
    BananaGroup.setVelocityXEach(0);
    //change the trex animation
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    CloudsGroup.setLifetimeEach(-1);
    
  createBanana();  
  }
  
  if(mousePressedOver(restart)) {
    reset();
  }
  
  //console.log(trex.y);
  
  //stop trex from falling down
  monkey.collide(invisibleGround);
  
  drawSprites();
  
}

function reset(){
 gameState = PLAY;
 gameOver.visible=false;
 restart.visible=false;
 ObstaclesGroup.destroyEach();
 CloudsGroup.destroyEach();
 monkey.setAnimation("monkey");
 count=0;
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var stone = createSprite(400,365,10,40);
    stone.velocityX = - (6 + 3*count/100);
    stone.setAnimation("Stone");
    //generate random obstacles
   
    
    //assign scale and lifetime to the obstacle           
    stone.scale = 0.10;
    stone.lifetime = 70;
    //add each obstacle to the group
    
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud_1");
  
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  
}
function createBanana(){
if (World.frameCount % 60 === 0) {
var banana = createSprite(400,320,40,10);
  banana.y = randomNumber(280,320);
  banana.setAnimation("Banana");
  
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    BananaGroup.add(banana);
  } 

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
