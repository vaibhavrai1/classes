const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var ground 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
     box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
ground = new Ground(200,380,10,10);
}

function draw(){
    background(0);
    Engine.update(engine);
        rect(ground.position.x,ground.position.y,400,20);
        box2.display();
    box1.display();

    ground.display();
}
