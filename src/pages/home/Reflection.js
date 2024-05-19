import styled from "styled-components";
import { ContentLayout, SectionLayout } from "../../components/layout/Layout";
import { SECTION_TITLE_HTML_TAG } from "../../constants/StyleConstants";
import Typography from "../../components/typography/Typography";
import ComputerIllustration from "../../components/illustrations/ComputerIllustration";
import {
  MEDIA_QUERY_BREAKPOINT_LG,
  MEDIA_QUERY_BREAKPOINT_MED,
} from "../../constants/LayoutConstants";

const ReflectionSectionLayout = styled(SectionLayout)`
  background-color: ${({ theme }) => theme.secondaryBgCol};
`;

const ReflectionContentLayout = styled(ContentLayout)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: left;
  align-items: start;
  position: relative;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    display: flex;
    flex-direction: column;
  }
`;

const ResponsiveTypography = styled.div`
  text-align: left;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    text-align: center;
  }
`;

const Description = styled(ContentLayout)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  z-index: 1;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    top: 10%;
  }

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    width: 100%;
    position: relative;
    padding-left: 0rem;

    & > * {
      color: ${({ theme }) => theme.primaryFontCol};
    }
  }
`;

const Reflection = ({ data }) => {
  return (
    <ReflectionSectionLayout>
      <ReflectionContentLayout>
        <Description>
          <ResponsiveTypography>
            {data.headings.map((line, index) => (
              <Typography
                tag={SECTION_TITLE_HTML_TAG}
                key={index}
                textAlign="left"
              >
                {line}
              </Typography>
            ))}
          </ResponsiveTypography>
          {data.text.map((line, index) => (
            <Typography key={index} textAlign="left">
              {line}
            </Typography>
          ))}
        </Description>
        <ComputerIllustration />
      </ReflectionContentLayout>
    </ReflectionSectionLayout>
  );
};

export default Reflection;
