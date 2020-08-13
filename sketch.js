var car, carImg1, carImg2, carImg3, carImg4, rndm;
var dummy, dummyImg;
var speed, weight;
var testingState;
var start, wait, finished;
var deformation;

function preload(){
  
  carImg1 = loadImage("corvette.jpg");
  carImg2 = loadImage("ferrari.jpg");
  carImg3 = loadImage("lambo.jpg");
  carImg4 = loadImage("mciAmg.png");

  dummyImg = loadImage("dummy.jpg");

}

function setup() {
  createCanvas(1600,400);

  rndm = random(1, 4);

  car = createSprite(20, 200, 50, 50);

  switch(rndm){
    case 1 : car.addImage("corvette", carImg1);
    break;

    case 2 : car.addImage("ferrari", carImg2);
    break;

    case 3 : car.addImagea("lambo", carImg3);
    break;

    case 4 : car.addImage("mciAmg", carImg4);
    break;

    default : break; 
  }

  dummy = createSprite(15980, 200, 10, 10);
  dummy.addImage("dummy", "dummy.jpg");

  speed = random(55, 90);
  weight = random(400, 1500);

  start = 0;
  wait = 1;
  finished = 2;

  testingState = start;

  deformation = "Your Result:  + 0.5*speed*weight*speed/2250, 800, 20";

}

function draw() {
  
  background(175, 238, 238);
  
  if(testingState === start){

    text("Press Space to Start your Testing", 800, 20);

    switch(rndm){

      case 1 : text("Your Supercar is Corvette", 800, 50);
      break;

      case 2: text("Your Supercar is Ferrari", 800, 50);
      break;

      case 3: text("Your Supercar is Lamborghini", 800, 50);
      break;

      case 4: text("Your Supercar is Mercedes", 800, 50);

    }

    if(keyDown("space")){
      car.velocityX = speed;
      testingState = wait;
    }

  } else if(testingState === wait){

    text("Kindly Wait for your Result", 800, 20);

    if(car.isTouching(dummy)){
      testingState = result;
    }

  } else if(testingState === result){

    text("Press Space to try another Car", 800, 200);

    if(keyDown("space")){
      testingState = start;
    }

    if(deformation < 100){
      deformation.fontColor(0, 0, 225);
    } else if(deformation > 100 && deformation < 180){
      deformation.fontColor(230, 230, 0);
    } else if(deformation > 180){
      deformation.fontColor(255, 0, 0);
    }

  }
  
  drawSprites();

}