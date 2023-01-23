import { DiHtml5, DiCss3, DiGit, DiGithubBadge, DiSqllite, DiMongodb} from "react-icons/di";
import { SiJavascript, SiReact  } from "react-icons/si";
export default function Intro() {

    return (
        
            <section className="sec1">

                <h2 className="sec-header">Howdy! My name is Anjanique Mackey.<br />
                    <span className="pronounciation">(Anne-Juh-Neek Mack-ee)</span>
                </h2>

                <p>I'm a MERN Full-stack Web Developer who has a soft spot for JavaScript and web design. My motto is that I build beautiful user experiences and write smart code. Learning is my greatest hobby, and web development has been the perfect endeavor. Check out my Github <a href="https://github.com/Milkdromeda-333" target="_blank">here</a>.</p>

                <h3 className="sec-header">My mission is:</h3>
            
                <p>To use my knowledge, problem solving and creative thinking abilities to build beautiful and efficient software solutions.</p>
            
                {/* <div>
                    <h3>My skills:</h3>

                    <div className="skills-icons">
                        <DiHtml5 />
                        <DiCss3/>
                        <SiJavascript/>
                        <DiGit/>
                        <DiGithubBadge/>
                        <DiMongodb/>
                        <SiReact/>
                        <DiSqllite/>
                    </div>

                </div> */}
                
            </section>
    );
}