import styled from "styled-components";
import {
  GAP,
  MAX_GRID_ELEMENTS_PER_ROW,
  MEDIA_QUERY_BREAKPOINT_LG,
  MEDIA_QUERY_BREAKPOINT_SM,
} from "../../constants/StyleConstants";

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props) =>
      props.size >= MAX_GRID_ELEMENTS_PER_ROW
        ? MAX_GRID_ELEMENTS_PER_ROW
        : props.size},
    1fr
  );
  gap: ${GAP};
  grid-auto-rows: 1fr;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export default Grid;
