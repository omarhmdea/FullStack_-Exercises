const ball = document.getElementById("block")

const moveRight = function() {
  let size = parseInt(ball.style.left) || 0
  ball.style.left = (size + 15) + "px"
}
const moveLeft = function() {
  let size = parseInt(ball.style.left) || 0
  ball.style.left = (size - 15) + "px"
}
const moveUp = function() {
  let size = parseInt(ball.style.top) || 0
  ball.style.top = (size - 15) + "px"
}
const moveDown = function() {
  let size = parseInt(ball.style.top) || 0
  ball.style.top = (size + 15) + "px"
}
