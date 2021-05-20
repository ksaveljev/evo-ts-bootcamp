import { Reducer } from 'redux'
import { PizzaAdded, PizzaRemoved } from '../actions'

type BasketAction = PizzaAdded | PizzaRemoved
type PizzaIds = string[]

export const basketReducer: Reducer<PizzaIds, BasketAction> = (state = [], action) => {
    switch (action.type) {
        case "PIZZA_ADDED_INTO_BASKET":
            return [...state, action.payload._id ]

        case "PIZZA_REMOVED_FROM_BASKET":
            const index = state.indexOf(action.payload._id)
            const newState = state.filter((_, i) => i !== index)
            return newState

        default:
            return state
    }
}
