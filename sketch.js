var fixedRect,moveRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);
  moveRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "green";
  moveRect.shapeColor = "green";
}

function draw() {
  background(0); 
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY;

  if (moveRect.x-fixedRect.x < moveRect.width/2+fixedRect.width/2 
    && fixedRect.x-moveRect.x<moveRect.width/2+fixedRect.width/2
    && fixedRect.y-moveRect.y<moveRect.height/2+fixedRect.height/2
    && moveRect.y-fixedRect.y<moveRect.height/2+fixedRect.height/2){

      fixedRect.shapeColor = "red";
      moveRect.shapeColor = "red";

    }else{
      fixedRect.shapeColor = "green";
      moveRect.shapeColor = "green";
    }
  drawSprites();
}