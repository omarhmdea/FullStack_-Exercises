const users_template = $('#users-template')
const resultsContainer = $("#results")

const renderUsers = function (data) {
    resultsContainer.empty()

    const source = users_template.html()
    const template = Handlebars.compile(source);
    const newHTML = template({data:data})
    console.log(newHTML);

    resultsContainer.append(newHTML)
    
}

