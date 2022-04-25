const fetch = function (Key){
    $.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${Key}&limit=5`, function(result){
        const newHtml = `<iframe src=${result.data[0].embed_url} title="GIF"></iframe>`;
        $('div').append(newHtml);
    })
}


fetch("hhZiJAQv9VHbbOJD5Dgc6TxVva8VczDo")

