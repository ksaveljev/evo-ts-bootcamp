import { Reducer } from 'redux'
import { Pizza } from '../types'
import { PizzaListLoaded } from '../actions'

export const pizzaListReducer: Reducer<Pizza[], PizzaListLoaded> = (state = [], action) => {
    switch (action.type) {
        case "PIZZA_LIST_LOADED":
            return action.payload.pizza

        default:
            return state
    }
}
