import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import header from "content/layout/header.json";
import Footer from "components/footer/Footer";
import Header from "./header/Header";
import { useLayoutEffect } from "react";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function MainLayout({ theme, onChangeTheme }) {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Container>
      <ScrollToTop />
      <Header
        links={header.links}
        isActive={false}
        theme={theme}
        onChangeTheme={onChangeTheme}
        transitionBackgroundOnScroll
      />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default MainLayout;
