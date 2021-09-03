var jake,jakeImage
var path,pathImg
var coin,coinImg
var leftboundary , rightboundary
var subway , subwayImg

function preload() {
  
  //pre-load images
  jakeImage=loadAnimation("Runner-1.png","Runner-2.png")
  pathImg=loadImage("path.png")
  coinImg=loadImage("coin.png")
  subwayImg=loadImage("subway.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=2

  subway=createSprite(200,100,20,20)
  subway.addImage(subwayImg)

  jake=createSprite(200,340,20,20)
  jake.addAnimation("running",jakeImage)
  jake.scale=0.5

  coin=createSprite(200,200,20,20)
  coin.addImage(coinImg)
  coin.scale=0.5

  rightboundary = createSprite(390,300,80,600)
  rightboundary.visible=false

  leftboundary = createSprite(0,300,100,600)
  leftboundary.visible=false
}  

  

function draw() {
  

  if(path.y>400){
    path.y = height/2
  }
  jake.x=World.mouseX
  

  jake.collide(leftboundary)
  jake.collide(rightboundary)
  edges=createEdgeSprites()
  jake.collide(edges);

  drawSprites();
}
