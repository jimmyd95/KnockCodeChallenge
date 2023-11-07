import React, { useEffect, useRef } from "react";
import '../styles/footer.css'
import secondary from "../images/logos/Secondary_Logo.svg";
import { FaYoutube, FaTwitter, FaFacebook, FaArrowRight} from 'react-icons/fa';

// I like function better because it looks like... well a function
export function Footer() {

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <p className="motivationalSentence">
                        START YOUR DAY WITH HONOUR
                    </p>
                    <div className="footer-email">
                        <input type='text' placeholder="Email address"/>
                        <button className="footer-submit"><FaArrowRight /></button>
                    </div>
                </div>
                <div className="footer-top-mid">
                    <button>HELP DESK</button>
                    <button>PRESS</button>
                    <button>CARRY US</button>
                </div>
                <div className="footer-top-right">
                    <img src={secondary} alt="Secondary Logo" />
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <span>&copy; 2023 HONOUR COFFEE</span>
                    <button>PRIVACY POLICY</button>
                    <button>TERMS AND CONDITIONS</button>
                </div>
                <div className="footer-bottom-right">
                    <button><FaYoutube /></button>
                    <button><FaTwitter /></button>
                    <button><FaFacebook /></button>
                </div>
            </div>
        </footer>
    )
}