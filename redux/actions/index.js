exports.addToCart = (product)=>({
    type: "ADD_TO_CART", 
    payload: product
})

exports.removeFromCart = (productId)=>({
    type: "REMOVE_FROM_CART", 
    payload: productId
})