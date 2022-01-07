import "./ProjectCard.scss";

function ProjectCard(props) {
    const { projectThumbnailSrc, projectName, projectDescription } = props;

    return (
        <div className="project-card-container">
            <div className="project-card-container__thumbnail-container">
                <img className="project-card-container__thumbnail" src={require(`../../../public/images/${projectThumbnailSrc}`).default} />
            </div>
            <div className="project-card-container__details-container">
                <h3 className="project-card-container__text--heading">{projectName}</h3>
                <p className="project-card-container__text--paragraph">{projectDescription}</p>
            </div>
        </div>
    );
}

export default ProjectCard;