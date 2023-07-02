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
  font-size: inherit;
`;

export const LinkButton = styled(Link)`
  background-color: ${({ theme }) => theme.accentCol};
  padding: 0.75rem 2rem;
  color: ${({ theme }) => theme.primaryBgCol};
  border: transparent;
  border-radius: 5rem;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

export const BorderedIconLinkButton = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryBgCol};
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.primaryFontCol};
  border: 1px solid ${({ theme }) => theme.lineCol};
  border-radius: 0.25rem;
  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }
`;

export const AnimatedLink = styled(NavLink)``;
