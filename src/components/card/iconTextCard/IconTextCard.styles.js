import styled, { css } from "styled-components";
import {
  MEDIA_QUERY_BREAKPOINT_SM,
  MED_GAP,
  SMALL_GAP,
} from "../../../constants/StyleConstants";

const baseStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.verticalAlign ? props.verticalAlign : "flex-start"};
  align-items: ${(props) =>
    props.horizontalAlign ? props.horizontalAlign : "left"};
`;

export const IconContainer = styled.div`
  ${baseStyles}
  flex-direction: row;
  gap: ${SMALL_GAP};
`;

export const Content = styled.div`
  ${baseStyles}
  width: 100%;
  height: 100%;
  gap: ${MED_GAP};

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    display: grid;
    grid-template-columns: 1fr 5fr;
    text-align: left;
  }
`;
