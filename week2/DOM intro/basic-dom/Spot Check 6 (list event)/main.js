
function AddNewRow() {
  const newRow = document.createElement("li")
  newRow.innerHTML = "A new item!"
  document.getElementById("List").appendChild(newRow)

}