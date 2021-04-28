import React from "react"
import { connect } from 'react-redux'
import PizzaPrice from "./PizzaPrice"
import { State } from '../types'

interface TotalPriceProps {
    price: number
}

const TotalPrice: React.FC<TotalPriceProps> = ({ price }) => {
    return (
        <div className="flex">
            <span>Total price:</span><PizzaPrice price={price} />
        </div>
    )
}

const mapStateToProps = (state: State): TotalPriceProps => {
    const pizzaPrices = Object.fromEntries(state.pizza.map((p) => [p._id, p.price]))
    const price = state.basket.map((id) => pizzaPrices[id]).reduce((a,b) => a+b, 0)
    return { price }
}

export default connect(mapStateToProps)(TotalPrice)
