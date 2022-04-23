const Renderer = function(){


    const renderProducts = function(products){
        $("#content-container").empty()

        const productsContainer = $(`<div class="product-container"></div>`)
        $("#content-container").append($(productsContainer))

        for (const item of products) 
            addProduct(item,productsContainer)
        
    }

    const displayAbout = function(){
        $("#content-container").empty()
        const about = "Everything we do is rooted in sport. Sport plays an increasingly important role in more and more people’s lives, on and off the field of play. It is central to every culture and society and is core to our health and happiness.Key to our success and the execution of our strategy ‘Own the Game’, are our people and our culture. They bring our identity to life, defined by our purpose, mission, and attitude."
        const aboutElement = $(`<div class="about-content">${about}</div>`)
        $("#content-container").append(aboutElement)
    }

    const addProduct = function(product,productsContainer) {
        const newProduct = $(`<div class="product" data-id=${product.id}>
        <img src="${product.img}" width="500" height="600">
        <span class=proudct-name>${product.name}</span>
        <span class=proudct-price>${product.price}</span>
        <span class="addToBag picker">ADD TO BAG</span>
        </div>`)
        $(productsContainer).append(newProduct)
    }

    const addCartProduct = function(product,productsContainer) {
        const newProduct = $(`<div class="product" data-id=${product.id}>
        <img src="${product.img}" width="500" height="600">
        <span class=proudct-name>${product.name}</span>
        <span class=proudct-price>${product.price}</span>
        <span class="removeFromBag pickerRemove">Remove from BAG</span>
        </div>`)
        $(productsContainer).append(newProduct)
    }

    const renderCartProducts = function(cartProducts){
        $("#content-container").empty()

        const ItemCounter = $(`<span class="pickerTotal">Total Items</span>`)
        $("#content-container").append($(ItemCounter))

        const productsContainer = $(`<div class="product-container"></div>`)
        $("#content-container").append($(productsContainer))

        for (const item of cartProducts) 
            addCartProduct(item,productsContainer)
        
    }

    return {renderProducts,displayAbout,renderCartProducts}
}