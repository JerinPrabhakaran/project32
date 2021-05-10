const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here

    //bg = loadImage("sunset9.png");
   getBackgroundImg();
}

function setup(){
     createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
     // add condition to check if any background image is there to add

if (bg) {
    background(bg)
}


    Engine.update(engine);
    
    // write code to display time in correct format here


   getBackgroundImg();
}

async function getBackgroundImg(){

    // write code to fetch time from API
   var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
   var responseJson = await response.json();
    // write code slice the datetime
   var dateTime =  responseJson.datetime;
   var hour = dateTime.slice(11 ,13);
   console.log (hour);
    // add conditions to change the background images from sunrise to sunset
   if (hour<=02)
   {
       backgroundImg = "sunrise1.png"
       console.log("1");
   }else if (hour>02 && hour<=04)
   {
       backgroundImg = "sunrise2.png"
       console.log("2");
   }else if (hour>04 && hour<=06)
   {
       backgroundImg = "sunrise3.png"
       console.log("3");
   }else if (hour>06 && hour<=08)
   {
       backgroundImg = "sunrise4.png"
       console.log("4");
   }else if (hour>08 && hour<=10)
   {
       backgroundImg = "sunrise5.png"
       console.log("5");
   }else if (hour>10 && hour<=12)
   {
       backgroundImg = "sunrise6.png"
       console.log("6");
   }else if (hour>12 && hour<=14)
   {
       backgroundImg = "sunset7.png"
       console.log("7");
   }else if (hour>14 && hour<=16)
   {
       backgroundImg = "sunset8.png"
       console.log("8");
   }else if (hour>16 && hour<=18)
   {
       backgroundImg = "sunset9.png"
       console.log("9");
   }else if (hour>18 && hour<=20)
   {
       backgroundImg = "sunset10.png"
       console.log("10");
   }else if (hour>20 && hour<=22)
   {
       backgroundImg = "sunset11.png"
       console.log("11");
   }else if (hour>22 && hour<=24)
   {
       backgroundImg = "sunset12.png"
       console.log("12");
   }else{
    backgroundImg = "sunset12.png"
   }


    //load the image in backgroundImg variable here
  bg = loadImage(backgroundImg);
}
