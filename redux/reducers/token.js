const token = (state=[], action)=>{
    switch(action.type){
        case "ADD_TOKEN":
            state.token = action.payload; 
        case "RESET_TOKEN": 
            state.token = {}
    }
    return state;
}

export default token;