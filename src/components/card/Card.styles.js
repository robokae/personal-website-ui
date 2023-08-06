import styled, { css } from "styled-components";
import {
  BORDER_RADIUS,
  BOTTOM,
  CARD_PADDING,
  CENTER,
  FLEX_END,
  FLEX_START,
  GAP,
  LEFT,
  OUTLINE,
  RIGHT,
  SHADOW,
  TOP,
} from "../../constants/StyleConstants";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.variation === SHADOW &&
    css`
      box-shadow: ${({ theme }) => theme.boxShadow};
    `}
  ${(props) =>
    props.variation === OUTLINE &&
    css`
      border: 1px solid ${({ theme }) => theme.lineCol};
    `};
  border-radius: ${BORDER_RADIUS};
  background-color: ${({ theme }) => theme.secondaryBgCol};
  padding: ${CARD_PADDING};
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.horizontalAlign === LEFT
      ? FLEX_START
      : props.horizontalAlign === RIGHT
      ? FLEX_END
      : CENTER};
  justify-content: ${(props) =>
    props.verticalAlign === TOP
      ? FLEX_START
      : props.verticalAlign === BOTTOM
      ? FLEX_END
      : CENTER};
  gap: ${GAP};
`;
