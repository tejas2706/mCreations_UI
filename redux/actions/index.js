exports.addToCart = (product)=>({
    type: "ADD_TO_CART", 
    payload: product
})

exports.removeFromCart = (productId)=>({
    type: "REMOVE_FROM_CART", 
    payload: productId
})

exports.resetCart = () =>({
    type: "RESET_CART"
})

exports.addTokenToStore = (token)=>({
    type: "ADD_TOKEN",
    payload: token
})