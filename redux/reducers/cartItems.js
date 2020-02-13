const cartItems = (state=[], action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return [...state,action.payload]

        case "REMOVE_FROM_CART":
            let index = state.findIndex(cartItem => cartItem.id == action.payload);
            state.splice(index,1)
            return [...state];
            // return state.splice(state.find((cartItem,i)))
            // return state.filter( cartItem =>  cartItem.id !== _action.payload)
        case "RESET_CART": 
            state=[]
    }
    return state;
}

export default cartItems;