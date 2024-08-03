import styled, { css } from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  HEADER_HEIGHT,
  MEDIA_QUERY_BREAKPOINT_MED,
  MEDIA_QUERY_BREAKPOINT_XL,
} from "../../../constants/LayoutConstants";
import { Link } from "../../Link";
import { LOGO_FONT } from "../../../constants/TypographyConstants";
import { TRANSITION_DURATION } from "../../../constants/StyleConstants";

export const Container = styled.header.attrs({
  className: "Header__container",
})`
  width: 100%;
  height: ${HEADER_HEIGHT};
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2rem);
  z-index: 5;
  background-color: ${({ theme }) => theme.headerCol};
  border-bottom: 1px solid ${({ theme }) => theme.lineCol};
  ${(props) =>
    props.transparent &&
    css`
      background-color: transparent;
      border-color: transparent;
    `};
  ${(props) =>
    props.transition &&
    css`
      transition: all ${TRANSITION_DURATION} ease-in-out;
    `};
`;

export const Nav = styled.nav.attrs({ className: "Header__nav" })`
  width: ${CONTENT_MAX_WIDTH};
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_XL}) {
    width: 90%;
  }
`;

export const Logo = styled(Link).attrs({ className: "Header__logo" })`
  color: ${(props) => props.$color};
  font-family: ${LOGO_FONT};
  text-transform: uppercase;
`;

export const LinkContainer = styled.section.attrs({
  className: "Header__linkContainer",
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    display: none;
  }
`;

export const MenuIcon = styled.div.attrs({ className: "Header__menuIcon" })`
  display: none;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    display: inline-block;
    justify-self: flex-end;
  }
`;
