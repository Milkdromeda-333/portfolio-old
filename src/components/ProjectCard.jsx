import { useState } from "react";

export default function ProjectCard(props) {

    const { name, repoUrl, liveDemoUrl, img, technologies, gif, description } = props;

    return (
        <div className="project-card">

            <div className="project-img-container">
                <img src={`/project-images/${img}`} alt={name} onMouseOver={e => e.target.src = `/project-images/${gif}`} onMouseLeave={e => e.target.src = `/project-images/${img}`} />
            </div>

            <div className="card-info">
                <h3 className="sec-header-2">{name}.</h3>

                <span>Tech used: {technologies.join(", ")}</span>

                <p>{ description }</p>
                
                <div className="card-links">

                    <a href={liveDemoUrl} target="_blank">
                        live demo
                    </a>

                    <a href={repoUrl} target="_blank">
                        github repo
                    </a>
                    

                </div>

            </div>
        </div>
    );
}