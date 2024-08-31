import CallToActionCard from "components/card/callToActionCard/CallToActionCard";
import styled from "styled-components";
import { ContentLayout, SectionLayout } from "components/layout/Layout";
import { useState } from "react";
import HorizontalCategoryPanel from "components/menu/HorizontalCategoryPanel";
import Typography from "components/typography/Typography";
import { Breakpoint, Layout } from "constants/layout";
import { Typography as TypographyConstants } from "constants/typography";

const StyledSection = styled(SectionLayout)``;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(${Layout.GAP_MD} * 1.5);
`;

const CardLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${Layout.GAP_MD};

  @media ${Breakpoint.MOBILE_LG} {
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
        <Typography
          tag={TypographyConstants.SECTION_TITLE_TAG}
          textAlign="center"
        >
          {heading}
        </Typography>
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
