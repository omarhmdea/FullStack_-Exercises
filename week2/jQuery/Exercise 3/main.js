$("body").append(`<div class="box"></div>`)
$("body").append(`<div class="box"></div>`)
    
let $boxes = $(".box")
    
$(".box").hover(function () {
  $boxes.css("background-color", "rgb(231, 76, 60)")
  $(this).css("background-color", "rgb(142, 68, 173)")
})