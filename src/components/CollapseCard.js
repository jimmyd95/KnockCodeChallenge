import React , { useState } from "react"
import '../styles/collapseCard.css'
import { cards } from "./Cards";

export function CollapseCard() {
    const [expandedCard, setExpandedCard] = useState(null);

    return (
        <div className="collapseCard">
            <div className="collapseCard-title">
                <span>OUR BLENDS</span>
            </div>
            <div className="card-deck">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${expandedCard === index ? 'expanded' : ''}`}
                        onClick={() => setExpandedCard(index)}
                        style={{backgroundImage: `url(${card.background})`, backgroundSize: 'cover'}}
                    >
                    <div className="vertical-text">{card.verticalText}</div>
                    {expandedCard === index && (
                        <div className="columns">
                            <div className="column1">
                                <h1>{card.column1.bigTitle}</h1>
                                <h2>{card.column1.smallTitle}</h2>
                            </div>

                            <div className="column2">
                                <div className="row">
                                    {card.column2.items.map((item, index) => (
                                    <div key={index} className="item">
                                        <img src={item.img} alt={item.text} onError={(e) => console.log(e)} />
                                        <p>{item.text}</p>
                                    </div>
                                    ))}
                                </div>
                                <p>{card.column2.paragraph}</p>
                            </div>
                        </div>
                        )}
                    {!expandedCard}
                    {/* {card.content} */}  
                  </div>
                ))}
            </div>
        </div>
    )
}