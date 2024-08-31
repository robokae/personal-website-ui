import { Breakpoint, Layout } from "constants/layout";
import styled, { css } from "styled-components";

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
  gap: ${Layout.GAP_SM};
`;

export const Content = styled.div`
  ${baseStyles}
  width: 100%;
  height: 100%;
  gap: ${Layout.GAP_MD};

  @media ${Breakpoint.MOBILE_LG} {
    display: grid;
    grid-template-columns: 1fr 5fr;
    text-align: left;
  }
`;
