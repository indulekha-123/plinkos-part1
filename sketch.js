
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles= [];
var plinkos=[];
var divisions=[];
var divisionHeight=300;



function setup() {

  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
 
 ground = new Ground(100,200,1200,20);

 for(var k=0;k <=width;k=k+80){
division.push(new Division(k,height -divisionHeight/2,10,divisionHeight));

 }



 for (var j=40; j<=width;j=j +50)
{
 plinkos.push(new Plinkos(j,75));
}
for (var j= 15; j <=width  -10 ; j=j+50)
{
plinkos.push(new Plinkos(j,175));

}


for (var j=0; j<particle.length ;j++){
  particles[j].display();

}
for (var k =0;k< divisions.length; k++){
  divisions[k].display();

}




 
 particle= new Particle(100,20,200,20);
 division = new Division(10,200,1200,20);
 plinkos1=new Plinkos(300,380, 10)
	plinkos2=new Plinkos (340,380, 10)
	plinkos3=new  Plinkos(259,380, 10)
	plinkos4=new  Plinkos(220,380, 10)
	plinkos5=new Plinkos(380,380, 10)
}

function draw() {
  background(red);  
  Engine.update(engine);
  plinkos1.display();
  plinkos2.display();
  plinkos3.display();
  plinkos4.display();
  plinkos5.display();
  ground.display();
division.display();
particle.display();


for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
if(frameCount%60===0){
  particles.push(new particle(random(width/2-30, width/2+30), 10,10));
  score++;
}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}
for (var k = 0; k < divisions.length; k++) {
  
  divisions[k].display();
}


  drawSprites();


  
}