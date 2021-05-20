import { Dispatch } from 'redux';
import { Pizza, State } from '../types'
import { log } from '../services/log'

export type PizzaListLoaded = {
    type: "PIZZA_LIST_LOADED",
    payload: {
        pizza: Pizza[]
    }
}

export type PizzaAdded = {
    type: "PIZZA_ADDED_INTO_BASKET",
    payload: {
        _id: string
    }
}

export type PizzaRemoved = {
    type: "PIZZA_REMOVED_FROM_BASKET",
    payload: {
        _id: string
    }
}

export type AppActions = PizzaListLoaded | PizzaAdded | PizzaRemoved

export const addPizzaToBasket = (id: string) => {
    return (dispatch: Dispatch<PizzaAdded>, getState: () => State) => {
        const pizzas = Object.fromEntries(getState().pizza.map((p) => [p._id, p]))
        log({
            eventName: "PIZZA_ADDED_INTO_BASKET",
            pizzaName: pizzas[id].name,
            pizzaPrice: pizzas[id].price
        })
        dispatch({
            type: "PIZZA_ADDED_INTO_BASKET",
            payload: {
                _id: id
            }
        })
    }
}

export const removePizzaFromBasket = (id: string) => {
    return (dispatch: Dispatch<PizzaRemoved>, getState: () => State) => {
        const pizzas = Object.fromEntries(getState().pizza.map((p) => [p._id, p]))
        log({
            eventName: "PIZZA_REMOVED_FROM_BASKET",
            pizzaName: pizzas[id].name,
            pizzaPrice: pizzas[id].price
        })
        dispatch({
            type: "PIZZA_REMOVED_FROM_BASKET",
            payload: {
                _id: id
            }
        })
    }
}

export const pizzaListLoaded = (pizza: Pizza[]) => {
    return (dispatch: Dispatch<PizzaListLoaded>) => {
        log({ eventName: "PIZZA_VIEWED" })
        dispatch({
            type: "PIZZA_LIST_LOADED",
            payload: {
                pizza
            }
        })
    }
}

export const onPizzaSelected = (id: string) => {
    return (_: any, getState: () => State) => {
        const pizzas = Object.fromEntries(getState().pizza.map((p) => [p._id, p]))
        log({
            eventName: "PIZZA_SELECTED",
            pizzaName: pizzas[id].name,
            pizzaPrice: pizzas[id].price
        })
    }
}
