import React from "react"

interface PizzaPriceProps {
    price: number
}

const PizzaPrice: React.FC<PizzaPriceProps> = ({ price }) => {
    return (
        <p><span className="text-yellow-400 mr-1">$</span>{price}</p>
    )
}

export default PizzaPrice
