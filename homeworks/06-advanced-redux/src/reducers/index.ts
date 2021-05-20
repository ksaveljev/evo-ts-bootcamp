import { combineReducers } from 'redux'
import { pizzaListReducer } from './pizzaListReducer'
import { basketReducer } from './basketReducer'

export default combineReducers({
    pizza: pizzaListReducer,
    basket: basketReducer
})
