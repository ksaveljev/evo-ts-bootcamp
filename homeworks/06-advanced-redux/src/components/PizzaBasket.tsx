import React from "react"
import { connect } from 'react-redux'
import { Pizza, State } from "../types"
import { PizzaBasketItem } from "./PizzaBasketItem"
import { removePizzaFromBasket } from '../actions'

interface PizzaBasketProps {
    pizza: Array<Pizza & { count: number }>
    onMinus: (id: string) => void
}

const PizzaBasket: React.FC<PizzaBasketProps> = ({pizza, onMinus}) => {
    return (
        <>
            {pizza.map((p) =>
            <PizzaBasketItem
                _id={p._id}
                key={p._id}
                price={p.price * p.count}
                name={p.name}
                count={p.count}
                onMinus={onMinus}
            />)}
        </>
    )
}

type StateFromProps = Omit<PizzaBasketProps, "onMinus">

const mapStateToProps = (state: State): StateFromProps => {
    const pizzas = Object.fromEntries(state.pizza.map((p) => [p._id, p]))
    const count = state.basket.reduce((acc, id) => {
        acc[id] = 1 + acc[id] || 1
        return acc
    }, {} as { [key: string]: number })
    const basket = Array.from(new Set(state.basket)).map((id) => ({ ...pizzas[id], count: count[id] }))
    return { pizza: basket }
}

export default connect(mapStateToProps, { onMinus: removePizzaFromBasket })(PizzaBasket)
