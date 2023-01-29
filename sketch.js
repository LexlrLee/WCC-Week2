let num = 0.0;
let a = 60.0;
let button;


function setup() {
  createCanvas(640, 640);
    addGUI();
}

function draw() {
  background(220);
  fill(255,20);
  noStroke();
  rect(0,0,width,height);
  translate(width/2,height/2);
  for(let i = 0; i<360; i+=2){
    
    //Let the angle of movement of the petals change constantly
    angle = sin(i+num)*a;
    
    //Use sin and cos to make the flower move with the curve
    x1 = sin(radians(i))*(150+angle);
    y1 = cos(radians(i))*(150+angle);
  
    x2 = sin(radians(i))*(100+angle);
    y2 = cos(radians(i))*(100+angle);
    
    stroke(187,88,255);
    fill(187,88,255);
    
    //Drawing the first layer of petals
    ellipse(x1, y1, angle/5, angle/5);
    
    //Drawing the second layer of petals
    ellipse(y2, x2, 6, 5);
    
    //Draw lines and form them into a flower
    line(x1, y1, x2, y2); 
    
    
  }
  //Acceleration of motion
  num+=0.03;
  a+= 0.6;
}



function addGUI()
{
  button = createButton("STOP GROWING");
  button.addClass("button");
  button.parent("gui-container");
  button.mousePressed(MousePressed); 


}

function MousePressed(){
   a -= 20;
   console.log("Pressed");
  

    }