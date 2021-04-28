import React from "react"

interface PizzaNameProps {
    name: string
}

const PizzaName: React.FC<PizzaNameProps> = ({ name }) => {
   return (
       <div className="block mt-1 text-lg leading-tight font-medium text-black">{name}</div>
   )
}

export default PizzaName
