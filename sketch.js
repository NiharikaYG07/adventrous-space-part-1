var bullet,player,ground,enemyBullet
var enemiesGroup,enemyBulletGroup,bulletGroup
var gameState=1;
var score=0;

function preload(){
  alien1=loadImage("alien1.png");
  alien2=loadImage("alien2.png");
  alien3=loadImage("alien3.png");
  player_img=loadImage("shipfighter.png")
  bg_img=loadImage("skyBg.png");
  bullet_img=loadImage("bullet.png")
  enemyBullet_img=loadImage("ebullet.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);

  player=createSprite(width/2,height-100);
  player.addImage(player_img);
  player.scale=0.5
  //player.debug=true
  player.setCollider("rectangle",0,0,200,400)

  ground=createSprite(width/2,height/2,width,height);
  ground.addImage(bg_img)
  ground.scale=2

  enemiesGroup=createGroup();
  bulletGroup=createGroup();
  enemyBulletGroup=createGroup();
  
 
  
}

function draw() {
  background(0);

  if(gameState===1){
    fill("white");
    textSize(30);
    text("Press space for starting the game",width/2-200,height/2);
    fill("lightBlue");
    textSize(20);
    text("Destory all enemies and score 1000 for winning",width/2-180,height/2+50);
    if(keyDown("space")){
      gameState=2;
    }
  }

  if(gameState===2){
    spawnEnemies();
    spawnBullet();
    drawSprites();
    fill("white");
    textSize(25);
    text("score="+score,width-150,100)
    ground.setVelocity(0,2)
    if(ground.y>height-200){
      ground.y=ground.height/2
    }
    if(keyDown("right")){
        player.x= player.x+10;
      }
    if(keyDown("left")){
        player.x= player.x-10;
    } 
      if(keyDown("up")){
        bullet=createSprite(player.x,player.y,20,20);
       bullet.setVelocity(0,-8)
       bullet.addImage(bullet_img);
       bullet.scale=0.05
       bulletGroup.add(bullet);
       bullet.lifetime=width/10;
    }
    if(enemyBulletGroup.isTouching(player)){
      gameState=3;
    }
    for(var i=0;i<bulletGroup.length;i++){
      for(var j=0;j<enemiesGroup.length;j++){
        if(bulletGroup[i].isTouching(enemiesGroup[j])){
          //bulletGroup[i].destroy();
          enemiesGroup[j].destroy();
          score+=10
        }
      }
    }
    if(score===1000){
      gameState=4
    }
}
if(gameState===3){
  fill("white");
  textSize(35);
  text("GAME OVER",width/2-130,height/2);
}
if(gameState===4){
  fill("white");
  textSize(35);
  text("YOU WON!",width/2-130,height/2);
}
  
  player.depth+=1;

  
}

function spawnEnemies(){
if(frameCount%200===0){
 enemyA1 = createSprite(50,50,20,20);
 enemyA2 = createSprite(windowWidth/7,50,20,20);
  enemyA3 =  createSprite(2*windowWidth/7,50,20,20);
  enemyA4 = createSprite(windowWidth/7*3,50,20,20);
  enemyA5 = createSprite(windowWidth/7*4,50,20,20);
  enemyA6 = createSprite(windowWidth/7*5,50,20,20);
  enemyA7 = createSprite(windowWidth/7*6,50,20,20);

  enemyA1.addImage(alien1);
  enemyA2.addImage(alien1);
  enemyA3.addImage(alien1);
  enemyA4.addImage(alien1);
  enemyA5.addImage(alien1);
  enemyA6.addImage(alien1);

  enemyA1.velocityY=0.1
  enemyA2.velocityY=0.1
  enemyA3.velocityY=0.1
  enemyA4.velocityY=0.1
  enemyA5.velocityY=0.1
  enemyA6.velocityY=0.1
  enemyA7.velocityY=0.1

  enemyA1.scale=0.03
  enemyA2.scale=0.03
  enemyA3.scale=0.03
  enemyA4.scale=0.03
  enemyA5.scale=0.03
  enemyA6.scale=0.03
  enemyA7.scale=0.03

  enemiesGroup.add(enemyA1);
  enemiesGroup.add(enemyA2);
  enemiesGroup.add(enemyA3);
  enemiesGroup.add(enemyA4);
  enemiesGroup.add(enemyA5);
  enemiesGroup.add(enemyA6);
  enemiesGroup.add(enemyA7);

}

if(frameCount%300===0){
  enemyB1 = createSprite(windowWidth/6,100,20,20);
  enemyB2 = createSprite(windowWidth/6*2,100,20,20);
  enemyB3 = createSprite(windowWidth/6*3,100,20,20);
  enemyB4 = createSprite(windowWidth/6*4,100,20,20);
  enemyB5 = createSprite(windowWidth/6*5,100,20,20); 
  enemyB6 = createSprite(100,100,20,20);

  enemyB1.addImage(alien2);
  enemyB2.addImage(alien2);
  enemyB3.addImage(alien2);
  enemyB4.addImage(alien2);
  enemyB5.addImage(alien2);
  enemyB6.addImage(alien2);

  enemyB1.scale=0.1
  enemyB2.scale=0.1
  enemyB3.scale=0.1
  enemyB4.scale=0.1
  enemyB5.scale=0.1
  enemyB6.scale=0.1

  enemyB1.velocityY=0.1
  enemyB2.velocityY=0.1
  enemyB3.velocityY=0.1
  enemyB4.velocityY=0.1
  enemyB5.velocityY=0.1
  enemyB6.velocityY=0.1
  

  enemiesGroup.add(enemyB1)
  enemiesGroup.add(enemyB2);
  enemiesGroup.add(enemyB3);
  enemiesGroup.add(enemyB4);
  enemiesGroup.add(enemyB5);
  enemiesGroup.add(enemyB6);
}

if(frameCount%600===0){
  enemyC1 = createSprite(50,150,20,20);
  enemyC2 = createSprite(windowWidth/7+50,150,20,20);
  enemyC3 = createSprite(windowWidth/7*2+102,150,20,20);
  enemyC4 = createSprite(windowWidth/7*3-20,150,20,20);
  enemyC5 = createSprite(windowWidth/7*4+80,150,20,20);
  enemyC6 = createSprite(windowWidth/7*5+10,150,20,20);
  enemyC7 = createSprite(windowWidth/7*6-200,150,20,20);

  enemyC1.addImage(alien3);
  enemyC2.addImage(alien3);
  enemyC3.addImage(alien3);
  enemyC4.addImage(alien3);
  enemyC5.addImage(alien3);
  enemyC6.addImage(alien3);
  enemyC7.addImage(alien3);

  enemyC1.scale=0.1
  enemyC2.scale=0.1
  enemyC3.scale=0.1
  enemyC4.scale=0.1
  enemyC5.scale=0.1
  enemyC6.scale=0.1
  enemyC7.scale=0.1

  enemyC1.velocityY=0.09
  enemyC2.velocityY=0.09
  enemyC3.velocityY=0.09
  enemyC4.velocityY=0.09
  enemyC5.velocityY=0.09
  enemyC6.velocityY=0.09
  enemyC7.velocityY=0.09

  enemiesGroup.add(enemyC1);
  enemiesGroup.add(enemyC2);
  enemiesGroup.add(enemyC3);
  enemiesGroup.add(enemyC4);
  enemiesGroup.add(enemyC5);
  enemiesGroup.add(enemyC6);
  enemiesGroup.add(enemyC7);
}}
function  spawnBullet(){
  if(frameCount%20===0){
    enemyBullet=createSprite(random(0,width),0,10,10);
    enemyBullet.setVelocity(0,8+score/300);
    enemyBullet.lifetime=width/3
    enemyBullet.addImage(enemyBullet_img);
    enemyBullet.scale=0.2;
    enemyBullet.depth+=2;
    enemyBulletGroup.add(enemyBullet);
    //enemyBullet.debug=true;
    enemyBullet.setCollider("rectangle",0,0,10,5)
  }
}

