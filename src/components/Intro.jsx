
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
                            I am a MERN stack web developer with a keen eye for details, and with the user experience in mind. I engineer both front-end and backend software. You can check out my codes
                            <a href="https://github.com/Milkdromeda-333" target="_blank">here</a>.
                        </li>
                        
                        <li>
                            I enjoy learning, problem-solving/trouble-shooting, working with my hands, being productive, self-development, and being creative.
                        </li>

                        <li>
                            I am a Dallas, Texas native, and am currently stationed in Las Vegas with my husband and cat-child.

                        </li>
                        <li>
                            I am a graduate from a Full-stack JavaScript course bootcamp called V-School.

                        </li>
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