var database;
var form;


function setup() {
	createCanvas(windowWidth, windowHeight);

	form = new Form;
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  form.display();

  drawSprites();
 
}



