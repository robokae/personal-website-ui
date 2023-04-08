import styled from "styled-components";
import { getLinkFromObject } from "../../util/LinkUtil";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  visibility: ${(props) => (props.$display ? "" : "hidden")};
  z-index: 2;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.overlayCol};
`;

const Content = styled.section`
  min-width: 60%;
  height: 100%;
  padding: 2rem 0;
  position: absolute;
  top: 0;
  left: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  background-color: ${({ theme }) => theme.secondaryBgCol};
  transform: ${(props) => (props.$display ? "translateX(-100%)" : "")};
  transition: all 0.2s ease-in-out;
  overflow-y: auto;
  z-index: 3;
`;

const Header = styled.h3`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

const MenuOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const MenuOption = styled.li`
  padding: 1rem 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.primaryBgCol};
  }
`;

const CloseButton = styled.button`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.accentCol};
  color: ${({ theme }) => theme.primaryBgCol};
  border: 1px solid ${({ theme }) => theme.accentCol};
  outline: none;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
`;

function SlideOutMenu({ display, setDisplay, onChangeTheme, content }) {
  return (
    <Container $display={display}>
      <Overlay onClick={() => setDisplay(false)} />
      <Content $display={display}>
        <Header>{content.heading}</Header>
        <MenuOptionsContainer>
          {content.links &&
            content.links.map((link) => (
              <MenuOption key={link.id}>
                {getLinkFromObject(link, true, false)}
              </MenuOption>
            ))}
        </MenuOptionsContainer>
        <CloseButton onClick={() => setDisplay(false)}>Close</CloseButton>
      </Content>
    </Container>
  );
}

export default SlideOutMenu;
