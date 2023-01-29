export default function Intro() {

    const skillsArr = () => {

        const skills = [
            "HTML + CSS",
            "JavaScript",
            "React.js",
            "Bootstrap",
            "Tailwind",
            "MongoDB + Mongoose",
            "Postman",
            "REST API's",
            "Express.js"];
        
        return skills.map(skill => <span className="skill-card">{skill}</span>)
    }


    return (
        
            <section className="sec1" id="about-me">

                <h2 className="sec-header">Howdy! My name is Anjanique Mackey.<br />
                    <span className="pronounciation">(Anne-Juh-Neek Mack-ee)</span>
                </h2>

                <p>I'm a MERN Web Developer who has a burning passion for web design and building web applications. I love learning, taking opportunities to be creative, doing hard stuff, reading science fiction books, and helping others. I am a Dallas, Texas native, but am currently stationed in Las Vegas, Nevada with my husband and our annoying (but, cute) cat-friend. Don't forget to check out my codes <a href="https://github.com/Milkdromeda-333" target="_blank">here</a>.</p>

                <h3 className="sec-header-2">My mission is:</h3>
            
                <p>To use my knowledge, problem solving and creative thinking abilities to build beautiful and efficient software solutions.</p>
            
            <div className="skills-sec">
                
                <h3 className="sec-header-2">My skills:</h3>
                
                <div className="skill-cards-container">
                    {skillsArr()}
                </div>
                    
                <span>.. plus more to come!</span>
                
            </div>
            
            </section>
    );
}