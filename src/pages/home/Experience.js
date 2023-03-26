import styled from "styled-components";
import TextCard from "../../components/card/TextCard";
import Grid from "../../components/layout/Grid";
import { ContentLayout, SectionLayout } from "../../components/layout/Layout";

const Heading = styled.h2`
  width: 100%;
  text-align: center;
`;

function Experience({ heading, content }) {
  return (
    <SectionLayout>
      <ContentLayout>
        <Heading>{heading}</Heading>
        <Grid size={content.length}>
          {content.map((experience, index) => (
            <TextCard key={index} content={experience} />
          ))}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
}

export default Experience;
