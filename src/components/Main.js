import React from "react";
import '../styles/main.css'
import hero from "../images/Home_Hero_x2.jpg";
import { Carousel } from "./Carousel.js";
import { CollapseCard } from "./CollpaseCard.js";

// I like function better because it looks like... well a function
export function Main() {
    return (
        <main className="theEntireBody">
            <div className="intro">
                <img src={hero} alt="Hero" />
                <p className="intro-image-text">START YOUR DAY WITH HONOUR</p>
            </div>
            <div className="text-filler">
                <span>
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. 
                    At vero eos et accusam et justo duo dolores et ea rebum. 
                    Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </span>

                <span>●</span>

                <span className="text-filler-author">JOHANNES STOLZ OWNER</span>
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