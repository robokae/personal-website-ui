import { Layout } from "constants/layout";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  display: ${(props) => (props.display ? "block" : "none")};
  transition: 0.3s;
  position: fixed;
  box-sizing: border-box;
  backdrop-filter: blur(0.5rem);
  z-index: 5;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.overlayCol};
`;

export const Content = styled.section`
  width: 100%;
  height: max-content;
  top: -${(props) => props.height}px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryBgCol};
  border-bottom: 1px solid ${({ theme }) => theme.lineCol};
  padding-bottom: 1.5rem;
  ${(props) =>
    props.display &&
    css`
      transform: translateY(
        calc(${(props) => props.height}px + ${Layout.HEADER_HEIGHT})
      );
      transition: transform 0.3s ease-out;
    `}
`;

export const Header = styled.nav`
  width: 100%;
  height: ${Layout.HEADER_HEIGHT};
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 ${Layout.SECTION_PADDING};
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.primaryBgCol};
  z-index: 6;
`;

export const MenuOptionsContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const MenuOption = styled.li`
  width: 100%;
  height: 100%;

  & > a {
    display: block;
    text-align: center;
    font-size: 1.25rem;
    padding: 1rem ${Layout.SECTION_PADDING};

    &:hover {
      text-decoration: underline;
    }
  }
`;
