
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(51)

  const NUM_CIRCLES = 5
  const NUM_RAYS = 30
  const ANGLE = TWO_PI / NUM_RAYS
  // generate list starting at 16 like [16, 32, 64, 128, 256, ...]
  const COUNTER_VALUES = new Array(NUM_CIRCLES).fill().map((x, i) => 2 ** (i + 4))

  for (let circleIndex = 0; circleIndex < NUM_CIRCLES; circleIndex++) {
    for (let counter = 0; counter < COUNTER_VALUES[circleIndex]; counter++) {
      for (let rayIndex = 0; rayIndex < NUM_RAYS; rayIndex++) {
        push()
        stroke(counter % 255)
        translate(windowWidth / circleIndex, windowHeight / circleIndex)
        rotate(ANGLE + rayIndex * TWO_PI / NUM_RAYS + counter)
        line(0, 0, 300, 0)
        pop()
      }
    }
  }
}

function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
