import { RxExternalLink } from "react-icons/rx";

export default function ProjectCard(props) {

    const { name, repoUrl, liveDemoUrl, img, technologies, gif } = props;

    return (
        <div className="project-card">

            <div className="project-img-container">
                <img src={`/project-images/${img}`} alt={name} onMouseOver={e => e.target.src = `/project-images/${gif}`} onMouseLeave={e => e.target.src = `/project-images/${img}`} />
            </div>

            <div className="card-info">
                <h3 className="sec-header-2">{name}.</h3>

                <span>Tech used: {technologies.join(", ")}</span>
                
                <div className="card-links">

                    <a href={liveDemoUrl} target="_blank">
                        live demo
                        <RxExternalLink />
                    </a>

                    <a href={repoUrl} target="_blank">
                        github repo
                        <RxExternalLink />
                    </a>

                </div>

            </div>
        </div>
    );
}