function setup() {
  createCanvas(710, 400)
  background(102)
}

function draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY)
}

/**
 * Calculates speed of mouse and draws an ellipse that is relative in size.
 * Each ellipse is filled with a random color.
 */
function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py)
  stroke(speed)
  fill(random(255), random(255), random(255))
  ellipse(x, y, speed, speed)
}
