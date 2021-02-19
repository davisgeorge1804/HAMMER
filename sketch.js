
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer1,ground1,stone1,rubber1;


function setup() {
createCanvas(800,560 );

   engine=Engine.create();
   world = engine.world;

   hammer1=new Hammer(100,25)
   ground1=new Ground(400,550,800,20)
   stone1=new Stone(100,518)
   rubber1= new Rubber(300,518)

	

	
  
}

function draw(){
	rectMode(CENTER);
    background(38, 222, 173);
    Engine.update(engine);

    hammer1.display();
    ground1.display();
    stone1.display();
    rubber1.display();

	drawSprites();

    
}





    
    

