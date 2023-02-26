import { RxExternalLink } from "react-icons/rx";

export default function ProjectCard(props) {

    const { name, repoUrl, liveDemoUrl, img, technologies } = props;

    return (
        <div className="project-card">

            <img src={`/project-images/${img}`} alt={name} className="project-img-container" />

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