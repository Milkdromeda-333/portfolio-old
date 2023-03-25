
export default function Intro() {

    const skillsArr = () => {

        const skills = [
            "HTML + CSS",
            "JavaScript",
            "Node.js",
            "React.js",
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
                {/* <p>
                    I'm a MERN Web Developer who has a burning passion for web design and building web applications. I love learning, taking opportunities to be creative, doing hard stuff, reading science fiction books, and helping others. I am a Dallas, Texas native, but am currently stationed in Las Vegas, Nevada with my husband and our cat baby. You can check out my codes
                    <a href="https://github.com/Milkdromeda-333" target="_blank">here</a>.
                </p> */}

                <div className="intro-about-me">
                    <ul>
                        <li>My name is pronounced "Anne-Juh-Neek Mack-EE"</li>
                        <li>I am a MERN stack web developer with a keen eye for details. I engineer responsive, aesthetically pleasing front-end programs, as well efficient backend software solutions. You can check out my codes
                    <a href="https://github.com/Milkdromeda-333" target="_blank">here</a>.</li>
                        <li>I enjoy learning, problem-solving/trouble-shooting, working with my hands, being productive, self-development, and being creative.</li>
                        <li>I am a Dallas, Texas native, and am currently stationed in Las Vegas with my husband and cat-child.</li>
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