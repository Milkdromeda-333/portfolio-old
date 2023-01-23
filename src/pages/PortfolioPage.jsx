import { BsCodeSlash } from 'react-icons/bs';
import data from "../components/project-data.json"
import ProjectCard from '../components/ProjectCard';


/*

ideas:

Idea:
Have this be populated with my work
Bring to its own seperate page
Have a file that houses my information for my projects to be mapped to project cards.

*/
export default function PortfolioPage() {

    const projects = data.map(proj => <ProjectCard {...proj} key={proj.name} />)

    return (
        <section className='portfolio-page'>
            <h2 className='sec-header'>Notable Projects</h2>
            <div className="project-cards">{projects}</div>
        </section>
    );
}