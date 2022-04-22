const addRow = function(text) {
    $("ul").append(`<li>${text}</li>`);
  };


$("#add").on("click", function() {
  addRow($("#input").val());
});

$("#remove").on("click", function() {
  $("ul").find("li:last").remove();
});

