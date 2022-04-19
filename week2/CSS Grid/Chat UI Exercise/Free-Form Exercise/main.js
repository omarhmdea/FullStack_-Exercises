const ball = document.getElementById("block")

const moveRight = function() {
  let size = parseInt(ball.style.left) || 0
  console.log(size);
  ball.style.left = (size + 15) + "px"
}
