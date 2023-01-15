import { RxExternalLink } from "react-icons/rx";
export default function ProjectCard(props) {

    const { name, repoUrl, liveDemoUrl, img, desciption, technologies } = props;

    return (
        <div className="project-card">
            <div className="project-img-container" style={{backgroundImage: `url(src/assets/project-images/${img})`}}>
                {/* <img src={`src/assets/project-images/${img}`} alt={name} /> */}
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

                <button>Learn more.</button>
            </div>
        </div>
    );
}