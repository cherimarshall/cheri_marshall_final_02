var scribble;
var gui;


function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  noFill();
  
  scribble = new Scribble();
  gui = new Gui();
  let gui_setup = new dat.GUI();
  
  gui_setup.add(gui,'num', 1, 10).step(1);
  gui_setup.add(gui,'steps', 10, 75).step(1);
  gui_setup.add(gui, 'r', 0, 255);
  gui_setup.add(gui, 'g', 0, 255);
  gui_setup.add(gui, 'b', 0, 255);
  gui_setup.add(gui, 'alpha', 0, 100);
  gui_setup.add(gui, 'roughness', 1, 10).step(1);
  gui_setup.add(gui, 'text');
  gui_setup.add(gui, 'text_size', 1, 600);
  gui_setup.add(gui, 'showDescription').onChange(description);
 
  
  frameRate (5);
}

function draw() {
  background(220);
 
  //provide value for arguments

  for (let i = windowWidth * .25; i <= windowWidth * .75; i += windowWidth * .25) {
  for (let y = windowHeight * .25; y <= windowHeight * .75; y+= windowHeight * .25) {
    target(i, y , gui.steps, gui.num, gui.aplha );

  }
  }
  


}
//custom function
//define variables for arguments
function description(){
  if(gui.showDescription){
    d.style('display', 'block');
  } else {
    d.style('display', 'none');
  }
}
function target(xPos, yPos, steps, num, r,g,b) {

  //declare variable for steps bt ellipses 

  //var steps = random(100);
  rectMode(CENTER);

  for (var i = 0; i <= num; i++) {
    //pass in variables
    //multiply w and h by i
    stroke(gui.r, gui.g, gui.b, gui.alpha);
    scribble.roughness = (gui.roughness);
    scribble.scribbleRect(xPos, yPos, steps * i, steps * i);
    fill(255, 100);
    noLoop();
  }

textSize(gui.text_size);
  textAlign(CENTER);
  textFont("Helvetica Nueue");
  text(gui.text, windowWidth / 2, windowHeight / 2 + gui.text_size / 3);
}

function mousePressed() {
  redraw();
}

function Gui(){
  this.num = random (0,10);
  this.steps = random (0, 75);
   this.r = random (0, 255);
  this.g = random (0, 255);
  this.b = random (0, 255);
  this.alpha = random(0, 100);
  this.roughness = random(1,10);
  this.text = "ORDER INTO DISORDER"
  this.text_size = 100;
  this.showDescription = true;
  
}

function keyPressed() {
if (keyCode === DOWN_ARROW){
  save("mySVG.svg");
  print ("saved svg");
  noLoop();
}
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}