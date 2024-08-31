import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";

export const BaseLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageContentLayout = styled(BaseLayout)`
  margin-top: ${Layout.HEADER_HEIGHT};
  margin-bottom: ${Layout.FOOTER_HEIGHT};
`;

export const ContentLayout = styled(BaseLayout)`
  width: 100%;
  max-width: ${Layout.CONTENT_MAX_WIDTH};

  @media ${Breakpoint.LAPTOP_LG} {
    width: 90%;
  }
`;

export const HeroLayout = styled(BaseLayout)`
  margin-top: -${Layout.HEADER_HEIGHT};
  padding: ${Layout.SECTION_PADDING} 0;
  padding-bottom: 0;
`;

export const SectionLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Layout.SECTION_PADDING} 0;
  gap: 3.5rem;
  position: relative;
`;

export const TwoPaneLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
`;
