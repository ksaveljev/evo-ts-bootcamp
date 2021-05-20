import React from "react"

interface PizzaDescriptionProps {
    desc: string
}

const PizzaDescription: React.FC<PizzaDescriptionProps> = ({ desc }) => {
    return (
        <p className="mt-2 text-gray-500">{desc}</p>
    )
}

export default PizzaDescription
