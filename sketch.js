
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var retan;
var retan2;
var ground;


function setup() {
	createCanvas(800, 700);                    

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }

	var retan2_options = {
		retruction: 0.5,
	}

	var retan_options = {
		frictionAir:0.01
	}

	var ground_options = {
		isStatic: true
	};

	//Crie os Corpos Aqui.

	ground = Bodies.rectangle(200,390,400,20,ground_options);
	World.add(world,ground);
	ball = bodies.circle(100,20,ball_options);
	World.add(world.ball);
	retan2 = bodies.rectangle(50,200,20,20,retan2_options);
	World.add(world.retan2);
	retan = bodies.rectangle(250,50,20,20,retan_options);
	World.add(world.retan);


	
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  background(0);
  Engine.update(engine);

 	ellipse(ball.position.x,ball.position.y,20);
	rect(retan.position.x,retan.position.y,400,200);
	rect(retan2.position.x,retan2.position.y,30);
	rect(ground.position.x,ground.position.y,200,20);

  drawSprites();
 
}



