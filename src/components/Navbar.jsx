import {Link} from "react-router-dom"
import Logo from "../assets/logo2.gif"

export default function Navbar() {

    return (
        <nav className="navbar">
            <Link to="/" >
                <img src={Logo} alt="logo" className="logo" />
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact me</Link>
            </div>
        </nav>
    );
}