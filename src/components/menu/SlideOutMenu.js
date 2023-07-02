import styled from "styled-components";
import { getLinkFromObject } from "../../util/LinkUtil";
import { MEDIA_QUERY_BREAKPOINT_SM } from "../../constants/StyleConstants";
import MobileThemeSwitcher from "../themeSwitcher/MobileThemeSwitcher";

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
  position: absolute;
  top: 0;
  left: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3rem;
  background-color: ${({ theme }) => theme.secondaryBgCol};
  transform: ${(props) =>
    props.$display ? "translateX(-100%)" : "translateX(0)"};
  transition: transform 0.2s ease-in-out;
  overflow-y: auto;
  z-index: 3;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    min-width: 80%;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  text-align: left;
  padding: 1rem 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.lineCol};
`;

const MenuOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const MenuOption = styled.li`
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
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
  cursor: pointer;
`;

const SocialLinkContainer = styled.div`
  width: 100%;
`;

function SlideOutMenu({ display, setDisplay, theme, onChangeTheme, content }) {
  return (
    <Container $display={display}>
      <Overlay onClick={() => setDisplay(false)} />
      <Content $display={display}>
        <Header>
          {/* {content.heading} */}
          <MobileThemeSwitcher
            content={content.additionalItems.themeSwitcher}
            theme={theme}
            onChangeTheme={onChangeTheme}
          />
        </Header>
        <MenuOptionsContainer>
          <>
            {content.links &&
              content.links.map((link) => (
                <MenuOption key={link.id}>
                  {getLinkFromObject(link, true, false)}
                </MenuOption>
              ))}
          </>
          <SocialLinkContainer>
            {content.additionalItems.socialLinks.map((socialLink) => (
              <MenuOption key={socialLink.id}>
                {getLinkFromObject(socialLink, true, false)}
              </MenuOption>
            ))}
          </SocialLinkContainer>
        </MenuOptionsContainer>
        <CloseButton onClick={() => setDisplay(false)}>
          {content.closeText}
        </CloseButton>
      </Content>
    </Container>
  );
}

export default SlideOutMenu;
