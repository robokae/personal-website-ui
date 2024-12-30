import Card from "components/card/Card";
import Icon from "components/icon/Icon";
import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";
import { Style } from "constants/style";
import { SectionLayout } from "components/layout/Layout";

export const ResponsiveSectionLayout = styled(SectionLayout)`
  @media ${Breakpoint.MOBILE_LG} {
    padding: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: ${Layout.GAP_MD};

  @media ${Breakpoint.MOBILE_LG} {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 0.5rem;
  }
`;

export const ResponsiveCard = styled(Card)`
  @media ${Breakpoint.MOBILE_LG} {
    align-items: center;
    text-align: center;
    border-radius: 0;
  }
`;

export const IconContainer = styled.div`
  width: 100%;

  @media ${Breakpoint.MOBILE_LG} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const ResponsiveIcon = styled(Icon)`
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  color: ${(props) => props.color ?? (({ theme }) => theme.primaryFontCol)};
  padding: 0.75rem;

  @media ${Breakpoint.MOBILE_LG} {
    font-size: 1rem;
  }
`;
