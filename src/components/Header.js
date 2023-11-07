import React, { useState } from "react";
import '../styles/header.css'
import primary_logo from "../images/logos/HONOUR_PRIMARY_logo.svg";

// I like function better because it looks like... well a function
export function Header() {

    const isMobile = window.innerWidth <= 1000;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <nav className = 'nav'>
                {/* set the primary_logo to a higher resolution and bigger size */}
                <img src={primary_logo} alt="logo" className="nav-logo"/>
                {isMobile ? (
                    <>
                        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>MENU</button>
                        {isMenuOpen && (
                            <div className="dropdown-menu">
                                <button>THE BLENDS</button>
                                <button>OUT STORY</button>
                                <span className="dropdown-menu-shop">SHOP</span>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <ul className="nav-items">
                            <button>THE BLENDS</button>
                            <button>OUT STROY</button>
                        </ul>
                        <span className="nav-shop">SHOP</span>
                    </>
                )}
            </nav>
        </header>
    )
}