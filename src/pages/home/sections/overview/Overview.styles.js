import Card from "components/card/Card";
import Icon from "components/icon/Icon";
import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";
import { Style } from "constants/style";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: ${Layout.GAP_MD};

  @media ${Breakpoint.MOBILE_LG} {
    grid-template-columns: 1fr;
  }
`;

export const ResponsiveCard = styled(Card)`
  @media ${Breakpoint.MOBILE_LG} {
    padding: 0;
    align-items: center;
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  width: 100%;

  @media ${Breakpoint.MOBILE_LG} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.75rem 0;
    border-radius: ${Style.BORDER_RADIUS} ${Style.BORDER_RADIUS} 0 0;
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    opacity: 0.8;
  }
`;

export const ResponsiveIcon = styled(Icon)`
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  color: ${(props) => props.color ?? (({ theme }) => theme.primaryFontCol)};
  padding: 0.75rem;

  @media ${Breakpoint.MOBILE_LG} {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

export const TypographyContainer = styled.div`
  @media ${Breakpoint.MOBILE_LG} {
    padding: ${Layout.CARD_PADDING};
    padding-top: 0;
  }
`;
