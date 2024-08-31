import styled from "styled-components";
import { HEADER_HEIGHT } from "constants/LayoutConstants";

export const Container = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT});
  top: ${HEADER_HEIGHT};
  display: ${(props) => (props.display ? "block" : "none")};
  width: 100vw;
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
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
  background-color: ${({ theme }) => theme.primaryBgCol};
`;

export const MenuOptionsContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const MenuOption = styled.li`
  & > a {
    font-size: 1.25rem;
    padding: 1rem 5%;
    width: 100%;
    height: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.secondaryBgCol};
    }
  }
`;
