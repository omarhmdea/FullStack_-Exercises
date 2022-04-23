const E_Commerce = function() {

    const _cart = []
    const _products = [
        {
            id: "product0",
            name: "ARSENAL 21/22 HOME JERSEY", 
            price : "$72",
            img : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0c22de08e8614d48aafface100a6f0fb_9366/Arsenal_21-22_Home_Jersey_White_GM0217_21_model.jpg"
        },
        {
            id: "product1",
            name: "JUVENTUS 21/22 HOME JERSEY", 
            price : "$63",
            img : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fec4fdd6285c4b9e9c2eace8008d04f8_9366/Juventus_21-22_Home_Jersey_White_GS1442_21_model.jpg"
        },
        {
            id: "product2",
            name: "MANCHESTER UNITED 21/22 HOME AUTHENTIC JERSEY", 
            price : "$130",
            img : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/89fd6cd48e1c4cd6a299ad1700755ec9_9366/Manchester_United_21-22_Home_Authentic_Jersey_Red_H31090_21_model.jpg"
        },
        {
            id: "product3",
            name: "REAL MADRID 21/22 AWAY JERSEY", 
            price : "$90",
            img : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f091e370497e4020b3c2acf60084dd7a_9366/Real_Madrid_21-22_Away_Jersey_Blue_H40942_21_model.jpg"
        },
        
    ]

    let itemProductCounter = 3
    let itemCartCounter = 0

    const getProducts = () => _products
    const getCart = () => _cart

    

    const getItemIndex = itemId => {
        for (const index in _products) 
            if( _products[index].id === itemId )
                return index
    }

    const addToCart = itemId => {
        const itemIndex = getItemIndex(itemId)
        _cart.push(_products[itemIndex])
    }

    const removeFromCart = itemId => { 
        for (const index in _cart) 
            if( _cart[index].id === itemId )
                _cart.splice((index),1)
    }

    const addComment = (text,postID) => {
        let comment = {}
        comment['id'] = `c${commentIdCounter++}`
        comment['text'] = text

        const index = getPostIndex(postID)
        if(index)
            _posts[index].comments.push(comment)
        else
            console.log("There is no post with id " + postID);
    }

    const removeCommentById = (index,commentID) => {
        for (const comment in _posts[index].comments) 
            if( _posts[index].comments[comment].id === commentID )
                _posts[index].comments.splice(comment,1)
    }

    const removeComment = (postID, commentID) => {
        const index = getPostIndex(postID)
        if(index)
            removeCommentById(index,commentID)
        else
            console.log("There is no post with id " + postID);
    }
    
    return {getProducts,getCart,addToCart,removeFromCart,addComment,removeComment}

}


