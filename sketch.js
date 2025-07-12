let buttons = [];
let buttonLabels = [
  "Fundamental Wave",
  "Superposition Lab",  
  "Composite Output"
];


let buttonColors = ["darkviolet", "cyan", "yellow"]; 
let buttonWidths = [400, 400, 400]; 

let osc; 
let bgImage; 
let clickSound;

function preload() {
  // Replace with a clearer, better-quality image if you want
  bgImage = loadImage("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1470&q=80");
}

function setup() {
  createCanvas(1200, 800);
  colorMode(HSB, 360, 100, 100);
background(240, 50, 10);  // Dark blue with 10% brightness

  textFont("Helvetica");
 
  let btnHeight = 70;
  let spacing = 50;

  for (let i = 0; i < 3; i++) {
    let btnWidth = buttonWidths[i];
    buttons.push({
      x: width / 2 - btnWidth / 2,
      y: 320 + i * (btnHeight + spacing),
      w: btnWidth,
      h: btnHeight,
      label: buttonLabels[i],
      color: buttonColors[i]
    });
  }

  osc = new p5.Oscillator('square');
  osc.freq(1000);
  osc.amp(0);
  osc.start();
}

function draw() {
  background(0);
  
  if (bgImage) {
    image(bgImage, 0, 0, width, height);
  } else {
    background(50);
  }

  fill(180, 100, 100); // pure bright cyan// slightly darker cyan
 
// HSB: bright yellow
  textAlign(CENTER, TOP);
  textSize(60);
  textStyle(BOLD);
  text("Tune The Universe", width / 2, 130);

  for (let btn of buttons) {
    drawButton(btn);
  }
}

function drawButton(btn) {
  noStroke();
  fill(btn.color);
  rect(btn.x, btn.y, btn.w, btn.h, 20);

  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2);
}

function mousePressed() {
  for (let btn of buttons) {
    if (
      mouseX > btn.x &&
      mouseX < btn.x + btn.w &&
      mouseY > btn.y &&
      mouseY < btn.y + btn.h
    ) {
      playClickSound();

      if (btn.label === "Fundamental Wave") {
        window.open("https://editor.p5js.org/parth.m3/full/QHiWOjrMJ");
      }
      
      if (btn.label === "Composite Output") {
        window.open("https://editor.p5js.org/parth.m3/full/cjcsJ2Drz");
      }
      
      if (btn.label === "Superposition Lab") {
        window.open("https://editor.p5js.org/parth.m3/full/BMW6cSwvA");
      }
    }
  }
}

function playClickSound() {
  if (clickSound && clickSound.isPlaying()) {
    clickSound.stop();
  }
  if (clickSound) {
    clickSound.play();
  }
}
