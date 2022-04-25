const displayGIF = $('div')
const fetch = function (item, Key){
    $.get(`http://api.giphy.com/v1/gifs/search?q=${item}&api_key=${Key}&limit=5`, function(result){
        const newHtml = `<iframe src=${result.data[0].embed_url} title="GIF"></iframe>`;
        displayGIF.append(newHtml);
    })
}

$("#search").click(function(){
    displayGIF.empty()
    const inputBox = $(this).siblings('input').val()
    fetch(inputBox,"hhZiJAQv9VHbbOJD5Dgc6TxVva8VczDo")

})

