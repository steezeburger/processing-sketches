let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave


const RED = [176, 0, 12]
const ORANGE = [231, 65, 6]
const YELLOW = [207, 136, 8]
const GREEN = [79, 151, 3]
const BLUE = [13, 107, 159]

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = windowWidth + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));

}

function draw() {
  background(...BLUE);
  calcWave();
  drawBackground();
  renderWave();
  renderTriangles();
}

function drawBackground() {
  for (var x = 0; x < width; x += width / 40) {
    for (var y = 0; y < height; y += height / 40) {
      stroke(...ORANGE);
      strokeWeight(2);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
  for (var x = 0; x < width; x += width / 40) {
    for (var y = 0; y < height; y += height / 40) {
      stroke(...ORANGE);
      strokeWeight(2);
      triangle(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}

function renderTriangles() {
  let x = width * 0.008;
  let y = height * 0.008;
  let x1 = x * 2;
  let x2 = x * 3;
  let y1 = y * 3;
  let speed1 = frameCount * 7 % height;

  // let speed = frameCount * 5 % height * 2;
  // for (let o1 = x; o1 <= width - x2; o1 += x2 * 1.5) {
  //   for (let o2 = y; o2 <= height - y1; o2 += x2 * 1.5) {
  //     push();
  //     rotate(90)
  //     translate(o1 - 550, o2 - 550);
  //     triangle(x, y + speed, x1, y1 + speed, x2, y + speed);
  //     pop();
  //   }
  // }

  fill(YELLOW);
  for (let o1 = x; o1 <= width - x2; o1 += x2 * .9) {
    for (let o2 = y; o2 <= height - y1; o2 += x2 * .9) {
      push();
      // rotate(90)
      translate(o1, o2);
      if (y > 100) {
        y = height * 0.008;
      }
      if (y1 > 100) {
        y1 = y * 3;
      }
      triangle(x, y - speed1, x1, y1 - speed1, x2, y - speed1);
      pop();
    }
  }
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(...GREEN);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height + 50 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 0 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 50 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 100 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 150 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 200 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 250 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 300 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 350 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 400 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 450 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 500 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 550 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 600 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 650 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 700 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 750 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 800 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 850 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 900 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 950 + yvalues[x], 16, 16);
    ellipse(x * xspacing, height - 1000 + yvalues[x], 16, 16);
  }
}
