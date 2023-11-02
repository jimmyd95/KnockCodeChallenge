import React from "react";
import '../styles/header.css'
import primary_logo from "../images/logos/HONOUR_PRIMARY_logo.svg";

// I like function better because it looks like... well a function
export function Header() {
    return (
        <header>
            <nav className = 'nav'>
                <img src={primary_logo} alt="logo" className="nav-logo"/>
                <ul className="nav-items">
                    {/* <a href = '#'>Home</a>
                    <a href = '#'>About</a>
                    <a href = '#'>Contact</a> */}
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}