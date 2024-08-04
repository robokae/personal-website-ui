import styled from "styled-components";
import {
  MAX_GRID_ELEMENTS_PER_ROW,
  MEDIA_QUERY_BREAKPOINT_SM,
  MEDIA_QUERY_BREAKPOINT_XL,
  MEDIUM_GAP,
} from "../../constants/LayoutConstants";

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props) =>
      props.size >= MAX_GRID_ELEMENTS_PER_ROW
        ? MAX_GRID_ELEMENTS_PER_ROW
        : props.size},
    1fr
  );
  gap: ${(props) => (props.gap ? props.gap : MEDIUM_GAP)};
  grid-auto-rows: 1fr;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_XL}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    grid-template-columns: 1fr;
  }
`;

const Grid = ({ size, gap, children }) => {
  return (
    <StyledGrid size={size} gap={gap}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
