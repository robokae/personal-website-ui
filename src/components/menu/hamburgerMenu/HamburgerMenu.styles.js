import { Style } from "constants";
import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  top: ${Layout.HEADER_HEIGHT};
  position: fixed;
  box-sizing: border-box;
  z-index: -1;
  // Set initial visibility to hidden, otherwise the overlay is going to be
  // on top of the elements, causing the elements below to not be interactable
  visibility: hidden;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.overlayCol};
  transition: all ${Style.TRANSITION_DURATION} ease-out;
  opacity: 0;

  &.overlay-enter-done {
    opacity: 1;
    visibility: visible;
  }
`;

export const Content = styled.section`
  width: 100%;
  height: max-content;
  top: -${(props) => props.height}px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryBgCol};
  background-color: #192229;
  transition: all 0.3s ease-out;

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECION_PADDING_SM};
  }

  &.content-enter-done {
    visibility: visible;
    opacity: 1;
    transform: translateY(${(props) => props.height}px);
  }

  &.content-exit-done {
    transform: translateY(0);
  }
`;

export const MenuOptionsContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 2rem 0;
`;

export const MenuOption = styled.li`
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-out;
  opacity: 0;

  & > a {
    display: block;
    text-align: center;
    font-size: 1.25rem;
    padding: 1.25rem ${Layout.SECTION_PADDING};

    &:hover {
      color: ${({ theme }) => theme.accentCol};
    }
  }

  &.link-enter-done {
    opacity: 1;
  }

  &.link-exit-active {
    visibility: hidden;
  }
`;
