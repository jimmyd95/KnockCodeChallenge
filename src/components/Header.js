import React from "react";
import '../styles/header.css'
import primary_logo from "../images/logos/HONOUR_PRIMARY_logo.svg";

// I like function better because it looks like... well a function
export function Header() {
    return (
        <header>
            <nav className = 'nav'>
                {/* set the primary_logo to a higher resolution and bigger size */}
                <img src={primary_logo} alt="logo" className="nav-logo"/>
                <ul className="nav-items">
                    <li>THE BLENDS</li>
                    <li>OUR STORY</li>
                </ul>
                <p className="nav-shop">SHOP</p>
            </nav>
        </header>
    )
}