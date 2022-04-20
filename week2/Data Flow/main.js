const posts = [
  {
      name: "Uncle Jerome",
      text: "Happy birthday kido!"
  },
  {
      name: "BFF Charlene",
      text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
  },
  {
      name: "Old High School Teacher",
      text: "Hey ace, have a good one."
  }
]

let count = 0
const render = function () {
  $( "#timeline" ).empty();
  for (let post of posts) {
      let postBox = $(`<div> <b> ${post.name} </b> : ${post.text} </div>`)
      $("#timeline").append(postBox)
  }
}


$("#post").on("click", function () {
  posts.push({
      name: $("#name").val(),
      text: $("#wish").val()
  })
  render()
})

$("#timeline div").on("click", function() {
  console.log($("#timeline div").index(this));
  render()
});


