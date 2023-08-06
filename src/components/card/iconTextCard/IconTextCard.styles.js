import styled from "styled-components";
import { MEDIA_QUERY_BREAKPOINT_SM } from "../../../constants/StyleConstants";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 1rem;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    display: grid;
    grid-template-columns: 1fr 5fr;
    text-align: left;
  }
`;
