import styled from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  FOOTER_HEIGHT,
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

export const PageContentLayout = styled(BaseLayout)`
  margin-top: ${HEADER_HEIGHT};
  margin-bottom: ${FOOTER_HEIGHT};
`;

export const ContentLayout = styled(BaseLayout)`
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_XL}) {
    width: 90%;
  }
`;

export const HeroLayout = styled(BaseLayout)`
  margin-top: -${HEADER_HEIGHT};
  padding: ${SECTION_PADDING} 0;
  padding-bottom: 0;
`;

export const SectionLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SECTION_PADDING} 0;
  gap: 3.5rem;
  position: relative;
`;

export const TwoPaneLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
`;
