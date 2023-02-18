
export default function Intro() {

    const skillsArr = () => {

        const skills = [
            "HTML + CSS",
            "JavaScript",
            "Node.js",
            "React.js",
            "Bootstrap",
            "Tailwind",
            "MongoDB",
            "Mongoose",
            "Postman",
            "REST API's",
            "Express.js",
            "Git",
            "Github"];
        
        return skills.map(skill => <span className="skill-card" key={skill}>{skill}</span>)
    }


    return (
        
            <section className="sec1" id="about-me">

            <h2 className="sec1-header">
                Howdy! My name is&nbsp;

                <div className="tooltip">
                    <span> Anjanique</span>
                    <span> Mackey.</span>
                    <span className="pronounciation">Anne-Juh-Neek Mack-ee</span>
                </div>

                <span>
                </span>
                <br />
                
            </h2>

                <p>I'm a MERN Web Developer who has a burning passion for web design and building web applications. I love learning, taking opportunities to be creative, doing hard stuff, reading science fiction books, and helping others. I am a Dallas, Texas native, but am currently stationed in Las Vegas, Nevada with my husband and our cat baby. You can check out my codes <a href="https://github.com/Milkdromeda-333" target="_blank">here</a>.</p>

                
            
            <div className="skills-sec">
                
                <h3 className="sec-header-2">My skills:</h3>
                
                <div className="skill-cards-container">
                    {skillsArr()}
                </div>
                    
                <span>... and more to come!</span>
                
            </div>
            
            </section>
    );
}