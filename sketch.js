const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,
  world,
  ground,
  ball,
  background_image,
  containerground,
  containerwall1,
  containerwall2;

function preload() {
  background_image = loadImage("hello.png");
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(400, 400, 800, 10, ground_options);
  World.add(world, ground);

  var ball_options = {
    restitution: 0.3,
    isStatic: false,
    friction: 0.3,
    density: 1.2,
  };
  ball = Bodies.circle(100, 200, 10, ball_options);

  World.add(world, ball);

  var containerground_options = {
    isStatic: true,
  };

  containerground = Bodies.rectangle(
    550,
    395,
    300,
    10,
    containerground_options
  );

  World.add(world, containerground);

  var containerwall1_options = {
    isStatic: true,
  };

  containerwall1 = Bodies.rectangle(400, 390, 10, 150, containerwall1_options);

  World.add(world, containerwall1);

  var containerwall2_options = {
    isStatic: true,
  };

  containerwall2 = Bodies.rectangle(700, 390, 10, 150, containerwall1_options);

  World.add(world, containerwall2);
}

function draw() {
  background(background_image);
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  rectMode(CENTER);
  rect(containerground.position.x, containerground.position.y, 300, 10);

  rectMode(CENTER);
  rect(containerwall1.position.x, containerwall1.position.y, 10, 150);

  rectMode(CENTER);
  rect(containerwall2.position.x, containerwall2.position.y, 10, 150);

  keyPressed(ball);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, {
      x: 85,
      y: -85,
    });
  }
}
