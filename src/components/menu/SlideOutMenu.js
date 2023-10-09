import styled from "styled-components";
import { getLinkFromJson } from "../../util/LinkUtil";
import { MEDIA_QUERY_BREAKPOINT_SM } from "../../constants/StyleConstants";
import MobileThemeSwitcher from "../themeSwitcher/MobileThemeSwitcher";
import { ENABLE_THEME_SWITCHER } from "../../constants/AppConstants";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  visibility: ${(props) => (props.$display ? "" : "hidden")};
  z-index: 2;
  box-sizing: border-box;
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
  justify-content: center;
  align-items: center;
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
  transition: font-size 0.2s ease-in-out;
`;

const ThemeSwitcherContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  text-align: left;
  padding: 1rem 2.5rem;
`;

const CloseButton = styled.button`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryFontCol};
  border: transparent;
  border-top: 1px solid ${({ theme }) => theme.lineCol};
  outline: none;
  cursor: pointer;
`;

function SlideOutMenu({ display, setDisplay, theme, onChangeTheme, content }) {
  return (
    <Container $display={display}>
      <Overlay onClick={() => setDisplay(false)} />
      <Content $display={display}>
        <MenuOptionsContainer>
          <>
            {content.links &&
              content.links.map((link) => (
                <MenuOption key={link.id}>
                  {getLinkFromJson(
                    link,
                    ({ theme }) => theme.primaryFontCol,
                    false
                  )}
                </MenuOption>
              ))}
            {content.additionalItems.socialLinks.map((socialLink) => (
              <MenuOption key={socialLink.id}>
                {getLinkFromJson(
                  socialLink,
                  ({ theme }) => theme.primaryFontCol,
                  false
                )}
              </MenuOption>
            ))}
          </>
        </MenuOptionsContainer>
        {ENABLE_THEME_SWITCHER && (
          <ThemeSwitcherContainer>
            <MobileThemeSwitcher
              content={content.additionalItems.themeSwitcher}
              theme={theme}
              onChangeTheme={onChangeTheme}
            />
          </ThemeSwitcherContainer>
        )}
        <CloseButton onClick={() => setDisplay(false)}>
          {content.closeText}
        </CloseButton>
      </Content>
    </Container>
  );
}

export default SlideOutMenu;
