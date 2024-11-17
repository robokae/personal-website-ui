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

const Description = styled(ContentLayout)`
  width: 100%;
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
              textAlign="left"
            >
              {line}
            </Typography>
          ))}
        </>
        <Description>
          {data.text.map((line, index) => (
            <Typography
              tag={TypographyConstants.H5}
              fontWeight="normal"
              key={index}
              textAlign="left"
            >
              {line}
            </Typography>
          ))}
        </Description>
      </Content>
    </Section>
  );
};

export default Reflection;
