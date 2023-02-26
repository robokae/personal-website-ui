import ProjectCard from "../../components/home/ProjectCard";

function ProjectsSection({ content }) {
  return (
    <section className="projects-section">
      <div className="projects-section__content">
        <h2 className="projects-section__heading">Projects I've Worked On</h2>
        <div className="projects-section__project-cards-container">
          {content.map((project, index) => (
            <ProjectCard
              key={index}
              className="projects-section__project-card"
              projectName={project.name}
              projectThumbnailSrc={project.thumbnailSrc}
              isProjectDeployed={project.deployed}
              projectProdLink={project.prodLink}
              projectGitHubLink={project.githubLink}
              projectStack={project.stack}
              projectDescription={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
