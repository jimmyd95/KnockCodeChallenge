import React from "react";
import '../styles/intro.css';
import hero from "../images/Home_Hero_x2.jpg";

export function Intro() {

    return(
        <div className="intro">
            <div className="title">
                <img src={hero} alt="Hero" />
                <p className="title-image-text">START YOUR DAY WITH HONOUR</p>
            </div>
            
            <div className="filler">
                <span className="filler-text">
                    Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. 
                    At vero eos et accusam et justo duo dolores et ea rebum. 
                    Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </span>

                <span>●</span>

                <span className="filler-author">JOHANNES STOLZ <span className="filler-author-title">OWNER</span> </span>
            </div>
        </div>
    )
}