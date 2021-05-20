import React from "react"
import { connect } from 'react-redux'
import { Pizza, State } from '../types'
import PizzaItem from "./PizzaItem"
import { addPizzaToBasket, onPizzaSelected } from '../actions'

type PizzaListProps = {
    pizza: Pizza[]
    onAdd: (id: string) => void
    onClick: (id: string) => void
}

const PizzaList: React.FC<PizzaListProps> = ({ pizza, onAdd, onClick }) => {
    return (
        <>
            {pizza.map((p) =>
            <PizzaItem
                key={p._id}
                _id={p._id}
                name={p.name}
                price={p.price}
                onAdd={onAdd}
                onClick={onClick}
            />)}
        </>
   )
}

type StateFromProps = Omit<PizzaListProps, "onAdd" | "onClick">

const mapStateToProps = (state: State): StateFromProps => {
    return { pizza: state.pizza }
}

export default connect(
    mapStateToProps,
    {
        onAdd: addPizzaToBasket,
        onClick: onPizzaSelected
    }
)(PizzaList)
