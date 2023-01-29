import data from "../components/project-data.json"
import ProjectCard from '../components/ProjectCard';

export default function PortfolioPage() {

    const projects = data.map(proj => <ProjectCard {...proj} key={proj.name} />)

    return (
        <section className='portfolio-page' id="portfolio-page">

            <h2 className='sec-header'>Notable Projects.</h2>

            <div className="project-cards">{projects}</div>

            <p> View more of my completed projects on my  github&nbsp;
                <a href="https://github.com/stars/Milkdromeda-333/lists/my-projects"
                    target="_blank" className="portfolio-page-github-link">here</a>.
            </p>
            
        </section>
    );
}