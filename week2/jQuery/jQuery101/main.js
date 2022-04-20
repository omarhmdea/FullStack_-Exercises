const addDiv = function() {
    $("body").append("<div class=box></div>");
  };
  
  $("button").on("click", function() {
    addDiv();
  });
  
  $("#blogs").on("click", ".blog", function(){
    $(this).text("uncool blog") 
  })