
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree_img,tree;
var ground;
var boy_img;

function preload(){
	tree_img = loadImage("Plucking mangoes/tree.png")
	boy_img = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

//	boy = Bodies.rectangle(100,630,10,10)
	//World.add(world, boy)


	ground = Bodies.rectangle(400,690,800,5,{isStatic:true})
    World.add(world,ground)

	tree = new Tree(600,400,10,10)

	mango1 = new Mango(370,380,18)
	mango2 = new Mango(430,300,18)
	mango3 = new Mango(550,250,18)
	mango4 = new Mango(750,330,18)
	mango5 = new Mango(650,280,18)

	stone = new Stone(85,595,10)

    chain = new Slingshot(stone.body,{x:85, y:595})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);

  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  imageMode(CENTER)
  image(boy_img,150,640,200,200)
  
  stone.display();
 

  rect(ground.position.x,ground.position.y,800,5)

  chain.display()

  detectcollison(stone,mango1);
  detectcollison(stone,mango2);
  detectcollison(stone,mango3);
  detectcollison(stone,mango4);
  detectcollison(stone,mango5);
 
 
  
  drawSprites();
 
}
function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})  
	}
	function mouseReleased(){
	
		chain.detach()
	
	}
	function keyPressed(){
		if(keyCode === 32){
			Matter.Body.setPosition(stone.body,{x:85, y:595})
			chain.attach(stone.body);
		}
	}
	function detectcollison(stone,mango){

		mangoBodyPosition = mango.body.position
		stoneBodyPosition = stone.body.position

		var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		//console.log(distance)
		console.log(mango.radius + stone.radius)
		if (distance<=mango.radius+stone.radius){
			Matter.Body.setStatic(mango.body,false)
		}
	}



