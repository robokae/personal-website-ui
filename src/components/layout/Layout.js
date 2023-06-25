import styled from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  HEADER_HEIGHT,
  MEDIA_QUERY_BREAKPOINT_XL,
  SECTION_PADDING,
} from "../../constants/StyleConstants";

export const BaseLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentLayout = styled(BaseLayout)`
  max-width: ${CONTENT_MAX_WIDTH};
  gap: 3.5rem;
  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_XL}) {
    width: 90%;
  }
`;

export const LandingLayout = styled(BaseLayout)`
  padding-top: ${HEADER_HEIGHT};
  background: ${({ theme }) => theme.primaryGradient};
`;

export const SectionLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SECTION_PADDING};
`;
