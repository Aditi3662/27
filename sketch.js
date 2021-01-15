
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roofobj;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	roofobj=new roof(300,100,350,40);

bobObj1=new bob(200,400,50);
bobObj2=new bob(250,400,50);
bobObj3=new bob(300,400,50);
bobObj4=new bob(350,400,50);
bobObj5=new bob(400,400,50);

rope1= new rope(bobObj1.body,roofobj.body,-100,0);
World.add(world,rope1);


rope2=new rope(bobObj2.body,roofobj.body,-70,0);

rope3= new rope(bobObj3.body,roofobj.body)


rope4= new rope(bobObj4.body,roofobj.body)


rope5= new rope(bobObj5.body,roofobj.body,0,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");


  roofobj.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

 rope1.display();
 rope2.display();
 rope3.display();
rope4.display();
 rope5.display();

  drawSprites();
 
}



