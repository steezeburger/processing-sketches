const BLUISH = '#59C5FF'
const PINKISH = '#FCC5FF'
const DARK_PINKISH = '#FB87FF'
const LIGHT_BLUISH = '#73CEFF'
const ORANGISH = '#FFB659'
const GREENISH = '#A6FF69'

function setup() {
  createCanvas(windowWidth, windowHeight)
  render()
}

function draw() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  render()
}

function render() {
  background(GREENISH)
  generateSquares(53, true)
  // setNoise()
}

/**
 * Generates squares in a circular pattern.
 * @param numSquares - number of squares you'd like to generate
 * @param fill - true if the squares should be solidly colored, false otherwise
 */
function generateSquares(numSquares = 53, isFilled = false) {
  for (let i = 0; i < numSquares; i++) {
    push()
    if (isFilled) {
      fill(PINKISH)
    }
    stroke(DARK_PINKISH)
    translate(windowWidth / 2, windowHeight / 2)
    rotate(PI / i)
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