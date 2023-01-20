const YELLOW = [255, 254, 156]
const SALMON = [255, 207, 207]

const BOX_LENGTH = 55
const MARGIN = 20

const FULL_LENGTH = BOX_LENGTH + MARGIN

function setup() {
  createCanvas(windowWidth, windowHeight)
  renderBoxes(getColumnLength())
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  renderBoxes(getColumnLength())
}

function getColumnLength() {
  const columnLength = windowWidth / FULL_LENGTH - 1
  return columnLength
}

function renderBoxes(columnLength) {
  background(181, 227, 255)
  for (let i = 0; i < columnLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (i == j) {
        fill(...YELLOW)
      } else {
        fill(...SALMON)
      }
      noStroke()
      rect(
        i * FULL_LENGTH + MARGIN,
        j * FULL_LENGTH + MARGIN,
        BOX_LENGTH,
        BOX_LENGTH)
    }
  }
}