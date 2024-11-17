import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Layout.GAP_MD};

  @media ${Breakpoint.TABLET} {
    grid-template-columns: 1fr;
  }
`;
