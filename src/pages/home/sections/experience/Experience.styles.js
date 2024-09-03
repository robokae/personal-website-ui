import styled from "styled-components";
import { Breakpoint, Layout } from "constants/layout";
import { Style } from "constants/style";
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
`;

export const CardLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: ${Layout.GAP_MD};
  position: relative;

  & > * {
    height: auto;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${Layout.CARD_PADDING};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${Style.BORDER_RADIUS} ${Style.BORDER_RADIUS} 0 0;

  @media ${Breakpoint.LAPTOP} {
    padding: 0.5rem 0;
    flex-direction: column;
    align-items: flex-start;

    & > ${Typography.CARD_TITLE_TAG} {
      font-size: 1.25rem;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Layout.CARD_PADDING};
  gap: ${Layout.GAP_MD};
`;

export const List = styled.ul`
  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.lineCol};
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 1rem;
`;
