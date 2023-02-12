import styled from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  MEDIA_QUERY_BREAKPOINT_XL,
  SECTION_PADDING,
} from "../../constants/StyleConstants";

const BaseLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled(BaseLayout)`
  padding: ${SECTION_PADDING};
`;

export const Content = styled(BaseLayout)`
  max-width: ${CONTENT_MAX_WIDTH};
  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_XL}) {
    width: 95%;
  }
`;

export const LandingSection = styled(BaseLayout)``;
