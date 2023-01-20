const PINKISH = '#FF8FDB'
const YELLOWISH = '#FFF2A8'

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(PINKISH)
  generateSquares(1024)
  setNoise()
}

function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function render() {
  setNoise()
}

/**
 * Generates squares in a circular pattern.
 * @param numSquares - number of squares you'd like to generate
 * @param fill - true if the squares should be solidly colored, false otherwise
 */
function generateSquares(numSquares = 53) {
  for (let i = 0; i < numSquares; i++) {
    push()
    fill(PINKISH)
    stroke(YELLOWISH)
    translate(windowWidth / 2, windowHeight / 2)
    rotate(i/100)
    rect(0, 0, 300, 300)
    pop()
  }
}

function setNoise() {
  loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (random(1) > 0.98) {
        const index = (x + y * width * 5)
        const n = noise(x / 255, y / 255)
        pixels[index] = n * 255
        pixels[index + 1] = 1
        pixels[index + 2] = 255
        pixels[index + 3] = 1
      }
    }
  }
  updatePixels()
}
