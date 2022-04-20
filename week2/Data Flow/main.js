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


const render = function () {
  $( "#timeline" ).empty();
  let count = 0
  for (let post of posts) {
      let postBox = $(`<div class="postClass" id="post-${count++}"> <b> ${post.name} </b> : ${post.text} </div>`)
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

$("div").on("click",'.postClass', function() {
  const postId = $(this).attr('id').split('-')[1]
  posts.splice(postId,1)
  render()
});


