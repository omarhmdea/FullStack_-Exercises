const furnitureSerach = function () {
    let furnitureName = $("#furniture-input").val()

    $.get(`/priceCheck/${furnitureName}`, function (furnitureData) {
        $("body").append(`<div>${furnitureName} - ${furnitureData.price}`)
    })
} 
const furnitureBuy = function () {
    let furnitureName = $("#furniture-name").val()

    $.get(`/buy/${furnitureName}`, function (furnitureData) {
        $("body").append(`<div>Congratulations, you've just bought ${furnitureName} for ${furnitureData.price}.
          There are ${furnitureData.inventory} left now in the store.`)
    })
} 