import { Link } from "react-router-dom";
import Img from "../assets/girl-coding.svg"

export default function Hero() {

    return (
        <header className="hero">

            <div>
                    
                <h1>Anjanique Mackey</h1>

                <span>
                 Full Stack JavaScript Developer |<wbr/> Creative Problem Solver |<wbr/> Life Long Learner
                </span>

                <Link to="#contact" className="hero-btn">Contact me</Link>

            </div>

            <img src={Img} alt="person working and drinking coffee" />
            
            </header>
    );
}