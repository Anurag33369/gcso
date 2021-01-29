function setup() {
  createCanvas(1370,400);
  car =  createSprite(50, 200, 70, 50);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
  wall = createSprite(1360,200,100,400);
  car.shapeColor = "green";
  wall.shapeColor = "red";
}

function draw()
 {
  background(0);  
  if(wall.x - car.x < (car.width + wall.width)/2)
  { 
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      
      car.shapeColor = rgb(255,0,0);
      
    }  

    if(deformation > 100 && deformation < 180)
    {
      
      car.shapeColor = rgb(230,230,0);
    }
    
    if(deformation <100 )
    {
      
      car.shapeColor =  rgb(0,255,0);
     }
  } 
  drawSprites();
}