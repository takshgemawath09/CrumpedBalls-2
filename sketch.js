
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground;
var paper;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	ground= new Ground(400,700,1600,20);
	
	
	
	box1= new Box(565,625,20,150);
	
	box2 =new Box(650,690,150,10);

	box3 =new Box(725,625,20,150);
	

	 paper = new Paper(100,650,20);
	 
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255)
  rectMode(CENTER);





  
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
 
  
}
 function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:62.0,y:-64.0})
	}
 }


