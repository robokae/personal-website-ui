import styled from "styled-components";
import {
  MEDIA_QUERY_BREAKPOINT_SM,
  MED_GAP,
  SMALL_GAP,
} from "../../../constants/StyleConstants";

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${SMALL_GAP};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: ${MED_GAP};

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    display: grid;
    grid-template-columns: 1fr 5fr;
    text-align: left;
  }
`;
