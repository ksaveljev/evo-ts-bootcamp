import React from "react"

interface PizzaCountProps {
    count: number
}

const PizzaCount: React.FC<PizzaCountProps> = ({ count }) => {
    return  (
        <p><span className="text-yellow-400 mr-1">x</span>{count}</p>
    )
}

export default PizzaCount
