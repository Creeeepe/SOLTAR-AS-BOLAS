
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2, plane;
var rotator1, rotator2, rotator3;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic: true
	}

	block1 = Bodies.rectangle(100,430,150,20,plane_options);
	World.add(world,block1);
	block2 = Bodies.rectangle(500,430,150,20,plane_options);
	World.add(world,block2);
	plane = Bodies.rectangle(300,602,600,30,plane_options);
	World.add(world,plane);

	rotator1 = Bodies.rectangle(300,200,150,20,plane_options);
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(300,200,150,20,plane_options);
	World.add(world,rotator2);
	rotator3 = Bodies.rectangle(300,200,150,20,plane_options);
	World.add(world,rotator3);

	var particle_options = {
		restituition:0.4,
		friction:0.02
	}

	particle1 = Bodies.circle(300,10,10,particle_options);
	World.add(world,particle1);
	particle2 = Bodies.circle(300,10,10,particle_options);
	World.add(world,particle2);
	particle3 = Bodies.circle(300,10,10,particle_options);
	World.add(world,particle3);
	particle4 = Bodies.circle(300,10,10,particle_options);
	World.add(world,particle4);
	particle5 = Bodies.circle(300,10,10,particle_options);
	World.add(world,particle5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(50,205,50);

  Engine.update(engine);
  
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);
  rect(plane.position.x,plane.position.y,602,30);

  ellipse(particle1.position.x,particle1.position.y,10)
  ellipse(particle2.position.x,particle2.position.y,10)
  ellipse(particle3.position.x,particle3.position.y,10)
  ellipse(particle4.position.x,particle4.position.y,10)
  ellipse(particle5.position.x,particle5.position.y,10)


  Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=10;

  Matter.Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=20;

  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=30;
  
  drawSprites();
 
}



