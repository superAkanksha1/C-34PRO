
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("images/GamingBackground.png");
}

function setup() {
	createCanvas(900,500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (350, 400, 700, 5);
  superhero= new Superhero(400,300,100,100);
  attach=new Rope(superhero.body,{x:100,y:100});

  block1 = new Block(300,350,30,40);
  block2 = new Block(300,310,30,40);
  block3 = new Block(300,270,30,40);      
  block4 = new Block(300,230,30,40);  
  block5 = new Block(300,190,30,40);  
  block6 = new Block(300,150,30,40);  
  block7 = new Block(300,110,30,40);  
  block8 = new Block(300,70,30,40);  
  
  block9 = new Block(350,350,30,40);
  block10 = new Block(350,310,30,40);
  block11 = new Block(350,270,30,40);      
  block12 = new Block(350,230,30,40);  
  block13 = new Block(350,190,30,40);  
  block14 = new Block(350,150,30,40);  
  block15 = new Block(350,110,30,40);  

  block16 = new Block(400,350,30,40);
  block17 = new Block(400,310,30,40);
  block18 = new Block(400,270,30,40);      
  block19 = new Block(400,230,30,40);  
  block20 = new Block(400,190,30,40);  
  block21 = new Block(400,150,30,40);  
  block22 = new Block(400,110,30,40);  
  block23 = new Block(400,70,30,40);  
  block24 = new Block(400,30,30,40);  

  block25 = new Block(450,350,30,40);  
  block26 = new Block(450,310,30,40);  
  block27 = new Block(450,270,30,40);  
  block28 = new Block(450,230,30,40);  
  block29 = new Block(450,190,30,40);

  monster = new Monster(580,200,100,100);
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  
   superhero.display();
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  monster.display();
  attach.display();
 
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}


