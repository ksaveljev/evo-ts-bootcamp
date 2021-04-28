export type PizzaId = string

export type Pizza = {
    name: string
    price: number
    _id: PizzaId
}

export type State = {
    pizza: Pizza[]
    basket: PizzaId[]
}
