import React from "react";
import '../styles/main.css'
import { Carousel } from "./Carousel.js";
import { CollapseCard } from "./CollapseCard.js";
import { Intro } from "./Intro.js";

// I like function better because it looks like... well a function
export function Main() {
    return (
        <main className="theEntireBody">
            <div className="intros">
                <Intro />
            </div>
            <div className="collpaseCard">
                <CollapseCard />
            </div>
            <div className="carousel">
                <Carousel />
            </div>
        </main>
    )
}