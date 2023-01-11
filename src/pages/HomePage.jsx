import { Link } from "react-router-dom";
import Img from "../assets/girl-coding.svg"
export default function HomePage() {

    return (
        <main className="home-page">
            {/* HEADER */}
            <header className="hero">
                <div>
                    
                    <h1>Anjanique Mackey</h1>

                    <span>
                        Full Stack JavaScript Developer |<wbr/> Creative Problem Solver |<wbr/> Life Long Learner
                    </span>
                    <Link to="contact" className="hero-btn">Contact me</Link>
                </div>

                <img src={Img} alt="" />
            </header>

            {/* SEC1 */}
            <section className="sec1">

                <h2>Howdy! My name is Anjanique Mackey.<br />
                    <span className="pronounciation">(Anne-Juh-Neek Mack-ee)</span>
                </h2>

                <p>I'm a Full-stack Web Developer who has a special interest in JavaScript and web design. My motto is that I build beautiful user experiences and write smart code. Learning is my biggest hobby, and web development has been the perfect endeavor. Check out my previous projects {<Link to="/portfolio">here</Link>}.</p>

            </section>
        </main>
    );
}