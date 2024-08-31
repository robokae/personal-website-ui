import styled, { css } from "styled-components";
import React from "react";
import { Style } from "constants/style";
import { Layout, Breakpoint } from "constants/layout";

const defaultStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${Layout.CARD_PADDING};
  border-radius: ${Style.BORDER_RADIUS};
  background-color: ${({ theme }) => theme.secondaryBgCol};
  gap: ${Layout.GAP_MD};

  @media ${Breakpoint.TABLET} {
    padding: ${Layout.PADDING_MD};
  }
`;

const CardComponent = styled(({ children, ...props }) =>
  React.createElement("div", props, children)
)`
  ${defaultStyles}
`;

const Card = ({ children, ...props }) => {
  return <CardComponent style={{ ...props }}>{children}</CardComponent>;
};

export default Card;
