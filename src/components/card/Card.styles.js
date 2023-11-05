import styled, { css } from "styled-components";
import {
  BORDER_RADIUS,
  BOTTOM,
  CARD_PADDING,
  CENTER,
  FLEX_END,
  FLEX_START,
  LEFT,
  MEDIA_QUERY_BREAKPOINT_MED,
  MED_GAP,
  MED_PADDING,
  RIGHT,
  TOP,
} from "../../constants/StyleConstants";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.outline &&
    css`
      border: 1px solid ${({ theme }) => theme.lineCol};
    `};
  border-radius: ${BORDER_RADIUS};
  background-color: ${({ theme }) => theme.secondaryBgCol};
  padding: ${(props) => (props.padding ? props.padding : CARD_PADDING)};
  font-size: ${(props) => props.textSize && props.textSize};
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
  gap: ${MED_GAP};
  ${(props) => props.additionalStyles && props.additionalStyles}

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    padding: ${MED_PADDING};
  }
`;
