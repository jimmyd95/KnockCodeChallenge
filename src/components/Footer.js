import React from "react";
import '../styles/footer.css'

// I like function better because it looks like... well a function
export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p className="motivationalSentence">
                    START YOUR DAY WITH HONOUR
                </p>
                <div className="footer-email">
                    <input type='text' placeholder="Email address"/>
                    <button className="footer-submit">&rarr;</button>
                </div>
            </div>
            <div className="footer-mid">
                <button>HELP DESK</button>
                <button>PRESS</button>
                <button>CARRY US</button>
            </div>
            <div>
                <p>HI</p>
            </div>
        </footer>
    )
}