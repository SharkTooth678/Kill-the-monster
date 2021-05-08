const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope;
var ground;
var box1, box2, box3, box4, box5, 
box6, box7, box8, box9, box10;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,400,70,70);
    box3 = new Box(700,480,70,70);
    box4 = new Box(700,550,70,70);
    box5 = new Box(700,250,70,70);
    box6 = new Box(900,320,70,70);
    box7 = new Box(900,400,70,70);
    box8 = new Box(900,480,70,70);
    box9 = new Box(900,550,70,70);
    box10 = new Box(900,250,70,70);
    
    

    ball = new Ball(500,350,80);

    rope = new Rope(ball.body,{x:500, y:50});
}

function draw(){
    background("red");
 
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    //pig1.score();
   

    box3.display();
    box4.display();
    //pig3.score();
   

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();


    ball.display();
    //log6.display();
    rope.display();    
}

function mouseDragged(){
     Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
     
}

