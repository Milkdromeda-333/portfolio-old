import { Link } from "react-router-dom"
import { useState } from "react";
import Logo from "../assets/logo2.gif"
import "../assets/hamburger.css"

export default function Navbar() {

    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const handleHamburger = () => setIsHamburgerActive(prev => !prev);

    return (
        <nav className="navbar">
            
            <Link to="/" >
                <img src={Logo} alt="logo" className="logo" />
            </Link>

            <button className={`hamburger hamburger--elastic ${isHamburgerActive ? "is-active" : ""}`} type="button" onClick={handleHamburger} aria-label="Open the menu" aria-expanded={isHamburgerActive ? "true" : "false"}>

                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>

            </button>  

            <div className={`nav-links ${isHamburgerActive ? "is-active" : "" }`} >
                <a href="#about-me"onClick={handleHamburger}>About me</a> 
                <a href="#portfolio-page" onClick={handleHamburger}>Portfolio</a>
                <a href="#contact-page" onClick={handleHamburger}>Contact me</a>
            </div>
        </nav>
    );
}