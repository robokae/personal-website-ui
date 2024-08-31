import styled from "styled-components";
import { ContentLayout } from "../../components/layout/Layout";
import { SECTION_TITLE_HTML_TAG } from "../../constants/StyleConstants";
import Typography from "../../components/typography/Typography";
import {
  LARGE_GAP,
  LARGE_PADDING,
  MEDIA_QUERY_BREAKPOINT_LG,
  MEDIUM_PADDING,
  X_LARGE_PADDING,
} from "../../constants/LayoutConstants";
import { H5, NORMAL } from "../../constants/TypographyConstants";

const Container = styled.div`
  width: 100%;
  height: max-content;
  background-color: #212d38;
  display: flex;
  justify-content: center;
  padding: ${X_LARGE_PADDING} 0;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    padding: ${MEDIUM_PADDING} 0;
  }
`;

const Content = styled(ContentLayout)`
  position: relative;
  height: 100%;
  display: flex;
  padding: ${LARGE_PADDING} 0;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    display: flex;
    flex-direction: column;
  }
`;

const ResponsiveTypography = styled.div`
  width: 100%;
  text-align: center;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    text-align: left;
  }
`;

const Description = styled(ContentLayout)`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: ${LARGE_GAP};
  z-index: 2;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    width: 100%;
    position: relative;
    padding-left: 0rem;
  }
`;

const Reflection = ({ data }) => {
  return (
    <Container>
      <Content>
        <Description>
          <ResponsiveTypography>
            {data.headings.map((line, index) => (
              <Typography tag={SECTION_TITLE_HTML_TAG} key={index}>
                {line}
              </Typography>
            ))}
          </ResponsiveTypography>
          <ResponsiveTypography>
            {data.text.map((line, index) => (
              <Typography tag={H5} fontWeight={NORMAL} key={index}>
                {line}
              </Typography>
            ))}
          </ResponsiveTypography>
        </Description>
      </Content>
    </Container>
  );
};

export default Reflection;
