import styled, { css } from "styled-components";
import { BORDER_RADIUS } from "../../constants/StyleConstants";
import React from "react";
import {
  CARD_PADDING,
  MEDIA_QUERY_BREAKPOINT_MED,
  MEDIUM_GAP,
  MEDIUM_PADDING,
} from "../../constants/LayoutConstants";

const defaultStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${CARD_PADDING};
  border-radius: ${BORDER_RADIUS};
  background-color: ${({ theme }) => theme.secondaryBgCol};
  gap: ${MEDIUM_GAP};

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    padding: ${MEDIUM_PADDING};
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
