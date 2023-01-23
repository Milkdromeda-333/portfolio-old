import { useState } from "react";
import { RxExternalLink } from "react-icons/rx";
// import ProjectPage from "../pages/ProjectPage"

export default function ProjectCard(props) {

    const { name, repoUrl, liveDemoUrl, img, desciption, technologies } = props;

    const [isOffcanvasActive, setIsOffcanvasActive] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasActive(prev => !prev);
    }

    return (
        <div className="project-card">

            <div className="project-img-container" style={{backgroundImage: `url(src/assets/project-images/${img})`}}>
            </div>

            <div className="card-info">
                <h3>{name}</h3>
                <span>Tech used: { technologies.join(", ") }</span>
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

                {/* <button onClick={toggleOffcanvas}>Learn more.</button> */}
            </div>
        </div>
    );
}