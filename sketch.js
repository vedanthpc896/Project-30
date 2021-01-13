const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world;
var stand1,stand2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var slingshot;
var ground;
var polygon, polygon_img;


function preload(){
  polygon_img=loadImage("polygon.png");
}


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world; 
  
  ground = new Ground(300,780,800,20)
  stand1 = new Ground(300,700,400,20);
  stand2 = new Ground(500,400,400,20);
//level two boxes
  b1 = new Box(330,235,30,40);
  b2 = new Box(360,235,30,40);
  b3 = new Box(390,235,30,40);
  b4 = new Box(420,235,30,40);
  b5 = new Box(450,235,30,40);

//level three boxes

  b6 = new Box(360,195,30,40);
  b7 = new Box(390,195,30,40);
  b8 = new Box(420,195,30,40);

   //top level

   b9 = new Box(390,155,30,40);

   polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
 
  slingshot = new SlingShot(this.polygon,{x:250,y:200});
 
 }

 function draw() {
   
  background("black");  
Engine.update(engine);

  stand1.display();
  stand2.display();
  ground.display();
  strokeWeight(3);
  stroke(10);
  fill('lightblue');
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  strokeWeight(3);
  fill('pink');
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  strokeWeight(3);
  fill('grey');
  b9.display();
  
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,60,60);
  slingshot.display();
    //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}