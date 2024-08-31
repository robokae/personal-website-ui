import { Outlet } from "react-router-dom";
import styled from "styled-components";
import header from "content/layout/header.json";
import footer from "content/layout/footer.json";
import hamburgerMenu from "content/hamburgerMenu.json";
import Footer from "components/footer/Footer";
import Header from "./header/Header";
import HamburgerMenu from "components/menu/hamburgerMenu/HamburgerMenu";
import { Layout } from "constants/layout";

const Container = styled.div`
  margin-bottom: ${Layout.FOOTER_HEIGHT};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function HomeLayout({ theme, onChangeTheme, dynamicHeader }) {
  return (
    <Container>
      <Header
        links={header.links}
        isActive={false}
        theme={theme}
        onChangeTheme={onChangeTheme}
        changeBgOnScroll={dynamicHeader}
      />
      <HamburgerMenu
        theme={theme}
        onChangeTheme={onChangeTheme}
        links={hamburgerMenu.links}
      />
      <Outlet />
      <Footer textContent={footer.text} />
    </Container>
  );
}

export default HomeLayout;
