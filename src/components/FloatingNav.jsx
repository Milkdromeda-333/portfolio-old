import { useState, useRef, useEffect } from 'react';
import { BsFillArrowUpLeftCircleFill as OpenMenuIcon, BsArrowUpLeftCircle as ClosedMenuIcon } from "react-icons/bs";

export default function FloatingNav() {

    const [isNavActive, setIsNavActive] = useState(false);

    
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
                <a href="#" onClick={()=> setIsNavActive(false)}>Back to the top</a>
                <a href="#about-me" onClick={()=> setIsNavActive(false)}>About me</a>
                <a href="#portfolio-page" onClick={()=> setIsNavActive(false)}>Portfolio</a>
                <a href="#contact-page" onClick={()=> setIsNavActive(false)}>Contact me</a>
            </nav>

            {isNavActive ?
                <OpenMenuIcon  className={`navigation-icon ${isNavActive && "active"}`} onClick={toggleNav} /> :
                <ClosedMenuIcon className={`navigation-icon ${isNavActive && "active"}`} onClick={toggleNav} />}
            
        </div>
    );
}