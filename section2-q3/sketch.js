// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  let cx = width/2; // 中心は (cx, cy)
  let cy = height/2;
  let maxR = min(width, height); // 大きさは幅と高さのうち小さい方
  
  fill(0);
  ellipse(cx,cy,maxR)
  
  //drawArcs(green, red, maxR * 0.8);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  for(let i = 0; i<20; i++){
    let start = TWO_PI / 20 *i;
    let stop = TWO_PI / 20 * (i+1);
    if (i % 2 == 0){
      fill(0,255,0)
    }
    if (i % 2 == 1){
      fill(255,0,0)
    }
  arc(cx, cy, maxR*0.8, maxR*0.8, start, stop, PIE);
  }

  for(let i = 0; i<20; i++){
    let start = TWO_PI / 20 *i;
    let stop = TWO_PI / 20 * (i+1);
    if (i % 2 == 0){
      fill(242, 212, 147)
    }
    if (i % 2 == 1){
      fill(0)
    }
  arc(cx, cy, maxR*0.75, maxR*0.75, start, stop, PIE);
  }

  for(let i = 0; i<20; i++){
    let start = TWO_PI / 20 *i;
    let stop = TWO_PI / 20 * (i+1);
    if (i % 2 == 0){
      fill(0,255,0)
    }
    if (i % 2 == 1){
      fill(255,0,0)
    }
  arc(cx, cy, maxR*0.5, maxR*0.5, start, stop, PIE);
  }

  for(let i = 0; i<20; i++){
    let start = TWO_PI / 20 *i;
    let stop = TWO_PI / 20 * (i+1);
    if (i % 2 == 0){
      fill(242, 212, 147)
    }
    if (i % 2 == 1){
      fill(0)
    }
  arc(cx, cy, maxR*0.45, maxR*0.45, start, stop, PIE);
  }

  fill(0, 255, 0);
  ellipse(cx,cy,maxR*0.1)

  fill(255, 0, 0);
  ellipse(cx,cy,maxR*0.05)
}
