import Section from "../../components/layout/SectionLayout";
import Content from "../../components/layout/ContentLayout";
import styled from "styled-components";
import TextCard from "../../components/card/TextCard";
import Grid from "../../components/layout/Grid";

const Heading = styled.h2`
  width: 100%;
  text-align: center;
`;

function ExperienceSection({ content }) {
  return (
    <Section>
      <Content>
        <Heading>My Experience</Heading>
        <Grid size={content.length}>
          {content.map((experience, index) => (
            <TextCard key={index} content={experience} />
          ))}
        </Grid>
      </Content>
    </Section>
  );
}

export default ExperienceSection;
