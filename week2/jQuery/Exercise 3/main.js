$("body").append(`<div class="box" id="box1"></div>`);
$("body").append(`<div class="box" id="box2"></div>`);



const changeColor = function(element){
  console.log(element.attr("style"));
  if(element.attr("style") == undefined){
    element.css("background-color","orange")   
  }
  if(element.attr("style").replace("background-color:", "") == " orange;")
  {
    console.log("object");
    element.css("background-color","#8e44a")
  }else
    element.css("background-color","#8e44a")


}
  $(".box").hover(function() {
    if($(this).attr('id') == "box1"){
      changeColor($("#box2"))
    }
    else{
      changeColor($("#box1"))
    }
  });
