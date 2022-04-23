const ECommerce = E_Commerce()
const renderer = Renderer()

$(".about").click(function(){
    renderer.displayAbout()
})

$(".products").on("click",function(){
    renderer.renderProducts(ECommerce.getProducts())
})

$(".cart").on("click",function(){
    renderer.renderCartProducts(ECommerce.getCart())
})

$("#content-container").on("click",'.addToBag',function(){
    const itemId = $(this).closest(".product").data().id
    ECommerce.addToCart(itemId)
    alert("Item added successfully")
})
$("#content-container").on("click",'.removeFromBag',function(){
    const itemId = $(this).closest(".product").data().id
    ECommerce.removeFromCart(itemId)
    alert("Item removed successfully")
    renderer.renderCartProducts(ECommerce.getCart())
})



