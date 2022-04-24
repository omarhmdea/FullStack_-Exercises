const ballDomNode = document.getElementById("block")
const playingFieldDomNode = document.getElementById("playing-field")

const STEP = 15

const moveRight = function() {
  let leftPosition = parseInt(ballDomNode.style.left) || 0

  if (leftPosition + STEP < (playingFieldDomNode.offsetWidth - ballDomNode.offsetWidth)) 
    ballDomNode.style.left = `${ leftPosition + STEP }px`

}
const moveLeft = function() {
  let leftPosition = parseInt(ballDomNode.style.left) || 0
  
  if (leftPosition - STEP > 0) 
    ballDomNode.style.left = `${ leftPosition - STEP }px`
  
}
const moveUp = function() {
  let topPosition = parseInt(ballDomNode.style.top) || 0

  if (topPosition - STEP > 0) 
    ballDomNode.style.top = `${ topPosition - STEP }px`
  
}
const moveDown = function() {
  let topPosition = parseInt(ballDomNode.style.top) || 0

  if (topPosition + STEP < (playingFieldDomNode.offsetHeight - ballDomNode.offsetHeight)) 
    ballDomNode.style.top = `${ topPosition + STEP }px`
}
