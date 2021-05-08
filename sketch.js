const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

 
var particles = [];
var plinkos = [];
var divisions=[];
var particle;
var gameState="start";
var turn=0;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   
     
     //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //  score++;
     
  
    // for (var j = 0; j < particles.length; j++) {
    
    //   particles[j].display();
    // }
    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text ("500",30,520);
 text ("500",105,520);
 text ("500",175,520);
  text ("100",250,520);
 text ("100",330,520);
 text ("100",415,520);
 text ("100",495,520);
 text ("200",585,520);
 text ("200",675,520);
 text ("200",745,520);
 
  //console.log(particle);

  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  for (var k = 0; k < divisions.length; k++) {
      
    divisions[k].display();
  }
  
   
   
   if(particle!==null && particle!==undefined){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
         score=score+500;
         particle=null ;
         if(score>=15) gameState="end";

       }
     }
   }
   if(particle!==null && particle!==undefined){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<450){
        score=score+100;
        particle=null;
        if(score>=15) gameState="end";
        
      }
    }
  }

  if(particle!==null && particle!==undefined){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>450){
        score=score+200;
        particle=null;
        if(score>=15) gameState="end";
        
      }
    }
  }
}

function mousePressed(){
  if(gameState!=="end"){
    score++;
    particle= new Particle(mouseX,10,10,10);
  }
}