import styled from "styled-components";
import header from "../content/layout/header.json";
import footer from "../content/layout/footer.json";
import hamburgerMenu from "../content/hamburgerMenu.json";
import Header from "../components/layout/header/Header";
import Footer from "../components/footer/Footer";
import error from "../content/error/error.json";
import { LinkButton } from "../components/Link";
import { HEADER_HEIGHT } from "../constants/LayoutConstants";
import HamburgerMenu from "../components/menu/hamburgerMenu/HamburgerMenu";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const ContentContainer = styled.section`
  width: 100%;
  top: ${HEADER_HEIGHT};
  padding-top: 3rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const { home } = header;
const { content } = error;

function Error({ theme, onChangeTheme }) {
  return (
    <Container>
      <Header
        logo={home.logo}
        links={home.links}
        isActive={false}
        theme={theme}
        onChangeTheme={onChangeTheme}
        changeBgOnScroll={false}
      />
      <HamburgerMenu
        theme={theme}
        onChangeTheme={onChangeTheme}
        content={hamburgerMenu.content}
      />
      <ContentContainer>
        <h2>{content.heading}</h2>
        <p>{content.text}</p>
        <LinkButton to={content.ctaUrl}>{content.ctaText}</LinkButton>
      </ContentContainer>
      <Footer textContent={footer.text} />
    </Container>
  );
}

export default Error;
