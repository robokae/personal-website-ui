import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { FOOTER_HEIGHT } from "../../constants/StyleConstants";
import header from "../../content/header.json";
import footer from "../../content/footer.json";
import slideOutMenu from "../../content/slideOutMenu.json";
import Header from "./Header";
import Footer from "./Footer";

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
        slideOutMenuContent={slideOutMenu.content}
        changeBgOnScroll={dynamicHeader}
      />
      <Outlet />
      <Footer textContent={footer.text} />
    </Container>
  );
}

export default HomeLayout;
