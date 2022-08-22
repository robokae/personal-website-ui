import "./ProjectCard.scss";

function ProjectCard(props) {
    const { 
        projectThumbnailSrc, 
        projectStack,
        projectName, 
        projectDescription,
        isProjectDeployed,
        projectGitHubLink,
        projectProdLink
    } = props;

    return (
        <div className="project-card-container">
            {/* <div className="project-card-container__thumbnail-container">
                <img className="project-card-container__thumbnail" src={require(`../../../public/images/${projectThumbnailSrc}`).default} />
            </div> */}
            <div className="project-card-container__details-container">
                <h3 className="project-card-container__heading">{projectName}</h3>
                <div className="project-card-container__tag-container">
                    {projectStack.map((e, index) => (
                        <div key={index} className="project-card-container__tag">{e}</div>
                    ))}
                </div>
                <p className="project-card-container__text">{projectDescription}</p>
                <div className="project-card-container__links">
                    <a href={projectGitHubLink} className="project-card-container__project-link">GitHub</a>
                    {isProjectDeployed && (
                        <a 
                            href={projectProdLink} 
                            className="project-card-container__project-link project-card-container__project-link--secondary"
                        >
                            Live App
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;