import { useState } from "react";

export default function ProjectCard(props) {

    const { name, repoUrl, liveDemoUrl, img, technologies, gif, description, type } = props;

    const techUsed = () => technologies.map(tech => (<span className="project-type" key={tech}>{ tech }</span>))

    return (
        <div className="project-card">

            <div className="project-img-container">
                <img src={`/project-images/${img}`}
                    alt={name}
                    onMouseOver={e => e.target.src = `/project-images/${gif}`}
                    onMouseLeave={e => e.target.src = `/project-images/${img}`}
                />
            </div>

            <div className="card-info">

                <div className="project-card-header">
                    <h3 className="sec-header-2">{name}.</h3>
                    <span>{ type } project.</span>
                </div>

                <div className="tech-used-container">{techUsed()}</div>

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