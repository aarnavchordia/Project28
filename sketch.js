const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,stone,ground,boy,boy_img,tree_img

function preload(){
  boy_img = loadImage("boy.png")
  tree_img = loadImage("tree.png")
}
function setup() {
	createCanvas(1525,700);

	engine = Engine.create();
	world = engine.world;
	stone = new Stone(160,500,20);
	mango1 = new Mango(1300,300,30);
	mango2 = new Mango(1400,250,30);
	mango3 = new Mango(1300,200,30);
	mango4 = new Mango(1390,300,30);
	mango5 = new Mango(1300,300,30);
	mango6 = new Mango(1200,300,30);
  mango7 = new Mango(1500,280,30);
  ground = new Ground(0,680,4000,20);
	
	chain = new Chain(stone.body,{x:160, y:500});
	Engine.run(engine);
}


function draw() {
  background("cyan")
  rectMode(CENTER);
  imageMode(CENTER);
  image(boy_img,250,575,300,300);
  image(tree_img,1280,405,600,600)

  fill('green');
  textSize(29);
  text("PRESS SPACE FOR A RERUN", 200,200);
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  chain.display();

  

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
