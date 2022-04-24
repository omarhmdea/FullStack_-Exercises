const nameList = $("ul")
const nameInput = $("#input")

const addRow = function(text) {
  nameList.append(`<li>${text}</li>`);
  };


$("#add").on("click", function() {
  addRow(nameInput.val());
});

$("#remove").on("click", function() {
  nameList.find("li:last").remove();
});

