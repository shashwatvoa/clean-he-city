const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var pig1;
var dust;
var box;
function preload(){

   garbage = loadImage("sprites/dustbin.png");

}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create(); 
    world = engine.world;
	
dustbin1 = createSprite(1200,560,40,40); 
dustbin1.addImage(garbage);
dustbin1.scale = 0.6
dustbin1.visible = true;


dustbin2 = createSprite(990,570,30,40); 
dustbin2.addImage(garbage);
dustbin2.scale = 0.5
dustbin2.visible = true;

dustbin3 = createSprite(1400,590,30,40); 
dustbin3.addImage(garbage);
dustbin3.scale = 0.4;
dustbin3.visible = true;

   ground1 = new ground(750,680,1500,50);
   ground2 = new ground(750,20,1500,50);
   ground3 = new ground(20,350,50,800);
   ground5 = new ground(1256,583,10,140);
   ground6 = new ground(1130,583,10,140);
   ground7 = new ground(1050,583,10,140);
   ground8 = new ground(930,583,10,140);
   ground9 = new ground(1450,594,10,120);
   ground10 = new ground(1350,590,10,120);
   
   pig1 = new Pig(300,400,150,150);
   pig2 = new Pig(320,350,50,50);
   pig3 = new Pig(280,320,50,50);
   pig4 = new Pig(320,300,50,50);
   pig5 = new Pig(280,280,50,50);

   pig6 = new Pig(1200,220,50,50);
   pig7 = new Pig(1220,300,50,50);
   pig8 = new Pig(1280,280,50,50);


   dust = new dustbin(1120,580,15,150);
   
   box = new Box1(400,400,40,40);


}


function draw() {

	    Engine.update(engine);
  background("lightgray");

ground1.display();
ground2.display();
ground3.display();
ground5.display();
ground6.display();
ground7.display();
ground8.display();
ground9.display();
ground10.display();

pig1.display();
pig2.display();
pig3.display();
pig4.display();
pig5.display();
pig6.display();
pig7.display();
pig8.display();

dust.display();

box.display();






    drawSprites();
  
  

 
}
