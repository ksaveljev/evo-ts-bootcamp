import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'
import {
    Loading,
    Missing,
    PizzaList,
    PizzaBasket,
    TotalPrice
} from './components'
import { Pizza, State } from './types'
import { getPizza } from './services/api'
import { pizzaListLoaded } from './actions'

type AppProps = {
    pizzaEmpty: boolean
    basketEmpty: boolean
    onLoad: (pizza: Pizza[]) => void
}

const App: React.FC<AppProps> = ({ pizzaEmpty, basketEmpty, onLoad }) => {
    useEffect(() => {
        getPizza()
            .then(response => onLoad(response.items))
    }, [onLoad])

    return (
        <div className="grid grid-cols-3 gap-4 h-full">
            <div className="col-span-2 p-8">
                <div className="grid grid-cols-4 gap-4">
                    { pizzaEmpty ? <Loading /> : <PizzaList /> }
                </div>
            </div>
            <div className="col-span-1 bg-white overflow-y-auto h-full">
                <div className="flex flex-col p-8">
                    <TotalPrice />
                    { basketEmpty ? <Missing /> : <PizzaBasket /> }
                    <div className="flex flex-col">
                        <button
                            className="bg-yellow-400 rounded-xl pt-2 pb-2"
                        >Make Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

type StateFromProps = Omit<AppProps, "onLoad">

const mapStateToProps = (state: State): StateFromProps => {
    return {
        pizzaEmpty: state.pizza.length === 0,
        basketEmpty: state.basket.length === 0
    }
}

export default connect(mapStateToProps, { onLoad: pizzaListLoaded })(App)
