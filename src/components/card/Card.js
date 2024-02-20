import styled, { css } from "styled-components";
import {
  BORDER_RADIUS,
  CARD_PADDING,
  MEDIA_QUERY_BREAKPOINT_MED,
  MEDIA_QUERY_BREAKPOINT_SM,
  MED_GAP,
  MED_PADDING,
} from "../../constants/StyleConstants";
import React from "react";

const defaultStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${CARD_PADDING};
  border-radius: ${BORDER_RADIUS};
  background-color: ${({ theme }) => theme.secondaryBgCol};
  gap: ${MED_GAP};

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    padding: ${MED_PADDING};
  }

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
