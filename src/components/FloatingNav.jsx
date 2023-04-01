import { useState } from 'react';

import {CgSmile, CgSmileUpside} from "react-icons/cg"

export default function FloatingNav() {

    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(prev => !prev)
    }

    return (
        <div className='floating-nav'>

            <nav className={`menu ${isNavActive && "active"}`}>
                <a href="#" onClick={toggleNav}>Back to the top</a>
                <a href="#about-me" onClick={toggleNav}>About me</a>
                <a href="#portfolio-page" onClick={toggleNav}>Portfolio</a>
                <a href="#contact-page" onClick={toggleNav}>Contact me</a>
            </nav>

            {isNavActive ?
                <CgSmile className={`navigation-icon ${isNavActive && "active"}`} onClick={toggleNav} /> :
                <CgSmileUpside className={`navigation-icon ${isNavActive && "active"}`} onClick={toggleNav} />}
            
        </div>
    );
}