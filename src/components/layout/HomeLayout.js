import { Outlet } from "react-router-dom";
import styled from "styled-components";
import header from "../../content/layout/header.json";
import footer from "../../content/layout/footer.json";
import hamburgerMenu from "../../content/hamburgerMenu.json";
import Header from "./header/Header";
import Footer from "../footer/Footer";
import { FOOTER_HEIGHT } from "../../constants/LayoutConstants";
import HamburgerMenu from "../menu/hamburgerMenu/HamburgerMenu";

const Container = styled.div`
  margin-bottom: ${FOOTER_HEIGHT};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const { home } = header;

function HomeLayout({ theme, onChangeTheme, dynamicHeader }) {
  return (
    <Container>
      <Header
        logo={home.logo}
        links={home.links}
        isActive={false}
        theme={theme}
        onChangeTheme={onChangeTheme}
        changeBgOnScroll={dynamicHeader}
      />
      <HamburgerMenu
        theme={theme}
        onChangeTheme={onChangeTheme}
        content={hamburgerMenu.content}
      />
      <Outlet />
      <Footer textContent={footer.text} />
    </Container>
  );
}

export default HomeLayout;
