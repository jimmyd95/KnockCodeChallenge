import React , { useState } from "react"
import '../styles/collapseCard.css'
import { cards } from "./Cards";

export function CollapseCard() {
    const [expandedCard, setExpandedCard] = useState(null);

    return (
      <div className="card-deck">
        {cards.map((card, index) => (
            <div
                key={index}
                className={`card ${expandedCard === index ? 'expanded' : ''}`}
                onClick={() => setExpandedCard(index)}
            >
                {card.content}
            </div>
        ))}
      </div>
    )
}