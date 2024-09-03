import styled from "styled-components";
import { ContentLayout, SectionLayout } from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Breakpoint, Layout } from "constants/layout";
import { Typography as TypographyConstants } from "constants/typography";

const Section = styled(SectionLayout)`
  width: 100%;
  height: max-content;
  background-color: #212d38;
  display: flex;
  justify-content: center;
`;

const Content = styled(ContentLayout)`
  position: relative;
  height: 100%;
  display: flex;
  padding: ${Layout.PADDING_LG} 0;

  @media ${Breakpoint.LAPTOP} {
    display: flex;
    flex-direction: column;
  }
`;

const ResponsiveTypography = styled.div`
  width: 100%;
  text-align: center;

  @media ${Breakpoint.LAPTOP} {
    text-align: left;
  }
`;

const Description = styled(ContentLayout)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${Layout.GAP_LG};
  z-index: 2;

  @media ${Breakpoint.LAPTOP} {
    width: 100%;
    position: relative;
    padding-left: 0rem;
  }
`;

const Reflection = ({ data }) => {
  return (
    <Section>
      <Content>
        <Description>
          <ResponsiveTypography>
            {data.headings.map((line, index) => (
              <Typography
                tag={TypographyConstants.SECTION_TITLE_TAG}
                key={index}
              >
                {line}
              </Typography>
            ))}
          </ResponsiveTypography>
          <ResponsiveTypography>
            {data.text.map((line, index) => (
              <Typography
                tag={TypographyConstants.H5}
                fontWeight="normal"
                key={index}
              >
                {line}
              </Typography>
            ))}
          </ResponsiveTypography>
        </Description>
      </Content>
    </Section>
  );
};

export default Reflection;
