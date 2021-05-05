const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,box,plane1,plane2,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    plane1 = new Plane(600,height,1200,20)
    plane2 = new Plane(700,550,50,50)
    hammer = new Hammer(100,300,150,40);
    box = new Box(500,550,70,70);
    rubber = new Rubber(400, 300, 100)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    plane1.display();
    plane2.display();
    hammer.display();
    box.display();
    rubber.display();

}