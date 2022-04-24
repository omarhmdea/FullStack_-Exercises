const addRow = function(text) {
    $("ul").append(`<li>${text}</li>`);
};
  
$("button").on("click", function() {
    addRow($("#input").val());
});
