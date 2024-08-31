import styled, { css } from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  HEADER_HEIGHT,
  MEDIA_QUERY_BREAKPOINT_MED,
  MEDIA_QUERY_BREAKPOINT_XL,
} from "constants/LayoutConstants";
import { TRANSITION_DURATION } from "constants/StyleConstants";
import { Link } from "components/Link";

export const Container = styled.header`
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
  box-sizing: border-box;
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

export const Nav = styled.nav`
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

export const LinkContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

export const DynamicLink = styled(Link)`
  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    display: ${(props) => (props.$display ? "inline-block" : "none")};
  }
`;

export const HamburgerMenuButton = styled.div`
  display: none;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    display: inline-block;
    justify-self: flex-end;
  }
`;
