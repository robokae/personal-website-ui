import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";

const MAX_GRID_ELEMENTS_PER_ROW = 4;

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
  gap: ${(props) => (props.gap ? props.gap : Layout.GAP_MD)};
  grid-auto-rows: 1fr;

  @media ${Breakpoint.LAPTOP_LG} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Breakpoint.MOBILE_LG} {
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
