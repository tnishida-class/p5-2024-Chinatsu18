function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(85,22,99);
  triangle(12,120,116,120,116,10);
  fill(255);
  triangle(0,108,106,108,106,0);
  fill(252,194,249);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
