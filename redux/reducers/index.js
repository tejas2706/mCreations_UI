import { combineReducers } from 'redux'
import cartItems from './cartItems'
import token from './token'

let rootReducer = combineReducers({cartItems,token})

export default rootReducer;