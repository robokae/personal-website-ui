import CallToActionCard from "../../components/card/callToActionCard/CallToActionCard";
import styled from "styled-components";
import {
  MEDIA_QUERY_BREAKPOINT_SM,
  MED_GAP,
} from "../../constants/StyleConstants";
import { ContentLayout, SectionLayout } from "../../components/layout/Layout";
import { useState } from "react";
import HorizontalCategoryPanel from "../../components/menu/HorizontalCategoryPanel";
import { SectionHeading } from "../../components/typography/Typography";

const StyledSection = styled(SectionLayout)``;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(${MED_GAP} * 1.5);
`;

const CardLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${MED_GAP};

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    gap: 1rem;
  }
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
        <SectionHeading>{heading}</SectionHeading>
        <MainContent>
          <HorizontalCategoryPanel
            content={projectCategories}
            currentlySelected={projectCategoryId}
            setCategory={setProjectCategoryId}
          />
          <CardLayout>
            {content.projects
              .find(
                (projectCategory) => projectCategory.id === projectCategoryId
              )
              .projects.map((project) => (
                <CallToActionCard
                  key={project.id}
                  heading={project.name}
                  tags={project.stack}
                  description={project.description}
                  links={project.links}
                />
              ))}
          </CardLayout>
        </MainContent>
      </ContentLayout>
    </StyledSection>
  );
}

export default Projects;
