import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  color: ${(props) =>
    props.$isActive
      ? ({ theme }) => theme.primaryFontCol
      : ({ theme }) => theme.headerInitialFontCol};
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const AnimatedLink = styled(NavLink)``;
