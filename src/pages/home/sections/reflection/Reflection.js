import styled from "styled-components";
import { ContentLayout, SectionLayout } from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Breakpoint, Layout } from "constants/layout";
import { Typography as TypographyConstants } from "constants/typography";

const Section = styled(SectionLayout)`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
`;

const Content = styled(ContentLayout)`
  position: relative;
  height: 100%;
  display: flex;
  padding: ${Layout.PADDING_MD} 0;

  @media ${Breakpoint.LAPTOP} {
    display: flex;
    flex-direction: column;
  }
`;

const Description = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ResponsiveText = styled.p`
  text-align: left;
`;

const Reflection = ({ data }) => {
  return (
    <Section>
      <Content>
        <>
          {data.headings.map((line, index) => (
            <Typography
              tag={TypographyConstants.SECTION_TITLE_TAG}
              key={index}
              textAlign="center"
            >
              {line}
            </Typography>
          ))}
        </>
        <Description>
          {data.text.map((line, index) => (
            <ResponsiveText key={index}>{line}</ResponsiveText>
          ))}
        </Description>
      </Content>
    </Section>
  );
};

export default Reflection;
