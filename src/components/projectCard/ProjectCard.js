import "./ProjectCard.scss";

function ProjectCard(props) {
    const { 
        projectThumbnailSrc, 
        projectName, 
        projectDescription,
        projectLink
    } = props;

    return (
        <div className="project-card-container">
            <div className="project-card-container__thumbnail-container">
                <img className="project-card-container__thumbnail" src={require(`../../../public/images/${projectThumbnailSrc}`).default} />
            </div>
            <div className="project-card-container__details-container">
                <a href={projectLink} className="project-card-container__project-link">
                    <h3 className="project-card-container__heading">{projectName}</h3>
                </a>                
                <p className="project-card-container__text">{projectDescription}</p>
            </div>
        </div>
    );
}

export default ProjectCard;