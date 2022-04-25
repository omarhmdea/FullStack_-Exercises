const fetch = function (queryType, queryValue){
    if( queryType == "title")
        $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function(result){
            console.log("book by: " + result.items[0].volumeInfo.authors)
        })
    else
        $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function(result){
            console.log(result.items[0].volumeInfo.title)
        })
}

fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")