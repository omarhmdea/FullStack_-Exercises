const fetchBookData = function () {
    let queryValue = $("#book-input").val()

    $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`, function (bookData) {
        console.log("object");
        $("body").append(`<div>${bookData.items[0].volumeInfo.title} - ${bookData.items[0].volumeInfo.authors}`)
    })
} 