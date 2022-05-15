$.get('/randomWord')
    .then(function (word) {
        return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    })
    .then(function (books) {
        $("body").append(`<div>${books.items[0].volumeInfo.title}`)
    }) 