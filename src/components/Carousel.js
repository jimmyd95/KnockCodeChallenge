import React, { useState } from "react";
import '../styles/carousel.css'
import c1 from "../images/carousel_img/1 Hand selected.jpg";
import c2 from "../images/carousel_img/2 Ethically sourced.jpg";
import c3 from "../images/carousel_img/3 Locally roasted.jpg";
import c4 from "../images/carousel_img/4 Small batched.jpg";
import c5 from "../images/carousel_img/5 Quality assured.jpg";


export function Carousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const images = [c1, c2, c3, c4, c5]; // Adjusted the images array

    const nextSlide = () => {
        setActiveIndex((prevActiveIndex) => {
            return (prevActiveIndex - 1 + images.length) % images.length;
        })
    }
    
    const prevSlide = () => {
        setActiveIndex((prevActiveIndex) => {
            return (prevActiveIndex + 1) % images.length;
        })
    }

    return (
        <div className="carousel">
            <div className="carousel-images">
                {images.map((image, index) => (
                    <img key={index} src={image} alt="" 
                    className={index === activeIndex ? 'active' : 'inactive'} 
                    // style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
                    // I tried to use transform to move the images but it didn't work. I'm not going to spend 5 more hours on this thing...
                    // maybe next time I will try out this one... ffs I'm so tired of this carousel
                    // https://dev.to/arindam1997007/creating-an-infinite-looping-image-carousel-with-css-and-javascript-4pao
                    />
                    ))}
            </div>

            <div className="carousel-controls">
                <div className="carousel-text">
                    <span>
                        ETHICALLY SOURCED
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magn.
                    </p>
                </div>
                
                    <button className="carousel-button" onClick={prevSlide}>&#8592;</button>
                    <button className="carousel-button" onClick={nextSlide}>&#8594;</button>
            </div>
        </div>
    )
}
