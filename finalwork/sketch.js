// 最終課題を制作しよう

let colors = []; // 色データを配列で管理
let baseColorIndex = 0; // 現在の基準色インデックス

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // 色の初期化（アニメーションで切り替え）
  colors = [
    color(255, 100, 100), // 赤系
    color(100, 255, 100), // 緑系
    color(100, 100, 255), // 青系
    color(255, 255, 100), // 黄色系
    color(255, 100, 255), // ピンク系
    color(100, 255, 255), // シアン系
  ];
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); // 薄いグレーの背景（固定）

  // 丸い外枠
  drawCircularFrame();
  
  //　星の描画
  drawStars();

  // カラフルに分割された「IT」の描画
  drawConnectedIT();

  // 色アニメーションの更新
  updateBaseColor();
}

// 自作関数：外枠を描画
function drawCircularFrame() {
  fill(160, 192, 255);
  ellipse(width / 2, height / 2, 380); // キャンバスの中心に丸い円を描画
}

//自作関数：7つの星を描画
function drawStars() {
  push();
  translate(width / 2, height / 2); // 中央に座標を移動
  for (let i = 0; i < 7; i++) {
    let theta = TWO_PI * i / 7;
    let x = 150 * cos(theta); // 円周上のX座標
    let y = 150 * sin(theta); // 円周上のY座標
    fill(255, 255, 100);
    drawStar(x, y, 15);
  }
  pop();
}

// 星を描画する関数
function drawStar(cx, cy, r) {
  beginShape();
  for (let i = 0; i < 5; i++) {
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

// 自作関数：カラフルな「IT」を描画
function drawConnectedIT() {
  push();
  translate(width / 2, height / 2); // 中央に座標を移動

  // I の部分
  for (let i = 0; i < 5; i++) {
    fill(colors[(baseColorIndex + i) % colors.length]);
    rect(-40, -50 + i * 20, 20, 20); // 4つの正方形で描写
  }

  // T の横棒部分
  for (let i = 0; i < 4; i++) {
    fill(colors[(baseColorIndex + i + 1) % colors.length]);
    rect(-5 + i * 20, -50, 20, 20); // 横棒を4つの正方形で描画
  }

  // T の縦棒部分
  for (let i = 0; i < 4; i++) {
    fill(colors[(baseColorIndex + i + 4) % colors.length]);
    rect(25, -30 + i * 20, 20, 20); // 縦棒を4つの正方形で描画
  }

  pop();
}

// 色アニメーションの更新
function updateBaseColor() {
  if (frameCount % 30 === 0) { // 0.5秒ごとに色を変更
    baseColorIndex = (baseColorIndex + 1) % colors.length; // 色を順番に切り替える
  }
}
