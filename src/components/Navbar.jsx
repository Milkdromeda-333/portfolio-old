import { Link } from "react-router-dom"
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"

export default function Navbar() {

    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const handleHamburger = () => setIsHamburgerActive(prev => !prev);

    return (
        <nav className="navbar">
            
            <Link to="/" >
                <img src="/logo.gif" alt="logo" className="logo" />
            </Link>

            {
                isHamburgerActive ?
                    <RxCross1 className="mobile-nav nav-cross" onClick={handleHamburger} /> :
                    <RxHamburgerMenu className="mobile-nav" onClick={handleHamburger}/>
            }

            <div className={`nav-links ${isHamburgerActive ? "is-active" : ""}`} >
                
                <a href="#about-me"onClick={handleHamburger}>About me.</a> 
                <a href="#portfolio-page" onClick={handleHamburger}>Portfolio.</a>
                <a href="#contact-page" onClick={handleHamburger}>Contact me.</a>
                
            </div>
        </nav>
    );
}