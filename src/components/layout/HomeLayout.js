import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { FOOTER_HEIGHT } from "../../constants/StyleConstants";
import { homeHeader } from "../../data/header";
import Footer from "../Footer";
import Header from "../Header";

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
        logo={homeHeader.logo}
        links={homeHeader.links}
        isActive={false}
        theme={theme}
        onChangeTheme={onChangeTheme}
      />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default HomeLayout;
