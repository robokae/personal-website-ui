import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { FOOTER_HEIGHT } from "../../constants/StyleConstants";
import { home } from "../../content/header.json";
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

function HomeLayout(props) {
  const { theme, onChangeTheme } = props;
  return (
    <Container>
      <Header
        logo={home.logo}
        links={home.links}
        isActive={false}
        theme={theme}
        onChangeTheme={onChangeTheme}
        slideOutMenuContent={slideOutMenu.content}
      />
      <Outlet />
      <Footer textContent={footer.text} />
    </Container>
  );
}

export default HomeLayout;
