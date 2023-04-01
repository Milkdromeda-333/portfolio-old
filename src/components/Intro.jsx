
export default function Intro() {

    const skillsArr = () => {

        const skills = [
            "HTML + CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Responsive design",
            "JWTs",
            "Git",
            "SASS/SCSS",
            "Tailwind",
            "MongoDB",
            "Mongoose",
            "Postman",
            "REST API's",
            "Express.js",
            "Github"];
        
        return skills.map(skill => <span className="skill-card" key={skill}>{skill}</span>)
    }


    return (
        
            <section className="sec1" id="about-me">

            <h2 className="sec1-header">
                Howdy! My name is Anjanique Mackey
            </h2>

            <div className="intro">

                <div className="intro-about-me">
                    <ul>
                        <li>My name is pronounced "Anne-Juh-Neek Mack-EE"</li>

                        <li>
                            I am a MERN stack web developer with a keen eye for details and a love for continuous learning and self-improvement.
                             You can check out my codes
                            <a href="https://github.com/Milkdromeda-333" target="_blank">here</a>.
                        </li>
                        
                        <li>
                            My goal in software developing is to develop user-friendly software that will thoroughly satisfy user needs, and expectations.
                        </li>

                        <li>
                            My hobbies include: learning American Sign Language, coding, reading, eating good food, drawing, knitting, and surfing the web.
                        </li>
                        
                        <li>
                            I am a Dallas, Texas native, and am currently stationed in Las Vegas with my husband and cat-baby.
                        </li>

                        
                        <li>I am a graduate from the Full-stack Web development course at a bootcamp named V-School.</li>
                    </ul>
                </div>
                
                
                <div className="skills-sec">
                
                    <h3 className="sec-header-2">My skills:</h3>
                
                    <div className="skill-cards-container">
                        {skillsArr()}
                    </div>
                
                    <span>... and more to come!</span>
                
                </div>
            </div>
            
            </section>
    );
}