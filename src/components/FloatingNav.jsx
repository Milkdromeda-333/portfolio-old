import { useState, useRef, useEffect } from 'react';

import {CgSmile, CgSmileUpside} from "react-icons/cg"

export default function FloatingNav() {

    const [isNavActive, setIsNavActive] = useState(true);

    
    const menuRef = useRef(null);

    const toggleNav = () => {
        setIsNavActive(prev => !prev)
    }

    useEffect(() => {
        menuRef.current.classList.toggle("active");
    }, [isNavActive])

    return (
        <div className='floating-nav'>

            <nav className="menu" ref={menuRef}>
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