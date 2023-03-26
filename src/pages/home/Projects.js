import ItemDetailCard from "../../components/card/ItemDetailCard";
import styled from "styled-components";
import { GAP } from "../../constants/StyleConstants";
import { ContentLayout, SectionLayout } from "../../components/layout/Layout";
import { useState } from "react";
import HorizontalCategoryPanel from "../../components/menu/HorizontalCategoryPanel";

const StyledSection = styled(SectionLayout)``;

const Heading = styled.h2`
  width: 100%;
  text-align: center;
`;

const CardLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${GAP};
`;

function Projects({ heading, content }) {
  const [projectCategoryId, setProjectCategoryId] = useState(0);

  const projectCategories = [];
  content.projects.forEach((projectCategory) => {
    projectCategories.push({
      id: projectCategory.id,
      name: projectCategory.name,
    });
  });

  return (
    <StyledSection>
      <ContentLayout>
        <Heading>{heading}</Heading>
        <CardLayout>
          <HorizontalCategoryPanel
            content={projectCategories}
            currentlySelected={projectCategoryId}
            setCategory={setProjectCategoryId}
          />
          {content.projects
            .find((projectCategory) => projectCategory.id === projectCategoryId)
            .projects.map((project) => (
              <ItemDetailCard
                key={project.id}
                name={project.name}
                tags={project.stack}
                description={project.description}
                links={project.links}
              />
            ))}
        </CardLayout>
      </ContentLayout>
    </StyledSection>
  );
}

export default Projects;
