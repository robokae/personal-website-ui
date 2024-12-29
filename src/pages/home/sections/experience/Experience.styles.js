import styled from "styled-components";
import { Breakpoint, Layout } from "constants/layout";
import { Typography } from "constants/typography";
import { ContentLayout, SectionLayout } from "components/layout/Layout";

export const Section = styled(SectionLayout)`
  @media ${Breakpoint.TABLET} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Content = styled(ContentLayout)`
  @media ${Breakpoint.TABLET} {
    ${Typography.SECTION_TITLE_TAG} {
      padding: 0 ${Layout.SECTION_PADDING};
    }
  }

  @media ${Breakpoint.MOBILE_LG} {
    ${Typography.SECTION_TITLE_TAG} {
      padding: 0 ${Layout.SECION_PADDING_SM};
    }
  }
`;

export const CardLayout = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: ${Layout.GAP_MD};
  position: relative;

  & > * {
    height: auto;
  }
`;

export const CardHeader = styled.div`
  @media ${Breakpoint.LAPTOP} {
    & > ${Typography.CARD_TITLE_TAG} {
      font-size: 1.25rem;
    }
  }
`;
