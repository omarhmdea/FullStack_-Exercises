const apartments_template = $('#apartments-template')
const resultsContainer = $("#results")

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    resultsContainer.empty()

    const source = users_template.html()
    const template = Handlebars.compile(source);
    const newHTML = template({apartments:apartments})
    console.log(newHTML);

    resultsContainer.append(newHTML)
    
}

renderApts(apartments) //renders apartments when page loads