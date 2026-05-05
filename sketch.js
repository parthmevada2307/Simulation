let buttons = [];
let buttonLabels = [
  "Fundamental Wave",
  "Superposition Lab",  
  "Composite Output"
];

let buttonColors = ["darkviolet", "cyan", "yellow"]; 
let osc; 
let bgImage; 

function preload() {
  bgImage = loadImage("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1470&q=80");
}

function buildLayout() {
  buttons = [];
  let s = min(windowWidth / 1200, windowHeight / 800);
  s = max(s, 0.45);
  
  let btnHeight = max(70 * s, 50);
  let spacing = max(50 * s, 30);
  let btnWidth = max(400 * s, windowWidth * 0.8);
  let startY = max(320 * s, windowHeight * 0.35);

  for (let i = 0; i < 3; i++) {
    buttons.push({
      x: windowWidth / 2 - btnWidth / 2,
      y: startY + i * (btnHeight + spacing),
      w: btnWidth,
      h: btnHeight,
      label: buttonLabels[i],
      color: buttonColors[i]
    });
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  background(240, 50, 10);  // Dark blue with 10% brightness
  textFont("Helvetica");
  
  buildLayout();

  osc = new p5.Oscillator('square');
  osc.freq(1000);
  osc.amp(0);
  osc.start();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildLayout();
}

function draw() {
  background(0);
  
  if (bgImage) {
    image(bgImage, 0, 0, windowWidth, windowHeight);
  } else {
    background(50);
  }

  let s = min(windowWidth / 1200, windowHeight / 800);
  s = max(s, 0.45);

  fill(180, 100, 100); // pure bright cyan
  textAlign(CENTER, TOP);
  textSize(max(60 * s, 30));
  textStyle(BOLD);
  text("Tune The Universe", windowWidth / 2, max(130 * s, 60));

  for (let btn of buttons) {
    drawButton(btn, s);
  }
}

function drawButton(btn, s) {
  noStroke();
  fill(btn.color);
  rect(btn.x, btn.y, btn.w, btn.h, 20);

  fill(0);
  textSize(max(18 * s, 14));
  textAlign(CENTER, CENTER);
  text(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2);
}

function mouseClicked() {
  handleClick(mouseX, mouseY);
}

function handleClick(px, py) {
  for (let btn of buttons) {
    if (
      px > btn.x &&
      px < btn.x + btn.w &&
      py > btn.y &&
      py < btn.y + btn.h
    ) {
      userStartAudio(); // Important for Safari mobile

      if (btn.label === "Fundamental Wave") {
        window.location.href = "https://parthmevada2307.github.io/Simulation1/";
      }
      
      if (btn.label === "Composite Output") {
        window.location.href = "https://parthmevada2307.github.io/Simulation2/";
      }
      
      if (btn.label === "Superposition Lab") {
        window.location.href = "https://parthmevada2307.github.io/Simulation3/";
      }
    }
  }
}
