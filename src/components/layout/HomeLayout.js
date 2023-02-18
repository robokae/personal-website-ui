import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { homeHeader } from "../../data/header";
import Footer from "../Footer";
import Header from "../Header";
import { BaseLayout } from "./BaseLayout";

const Home = styled(BaseLayout)`
  width: 100%;
  max-height: max-content;
  position: absolute;
`;

function HomeLayout({ theme, onChangeTheme, children }) {
  return (
    <Home>
      <Header
        logo={homeHeader.logo}
        links={homeHeader.links}
        isActive={false}
        theme={theme}
        onChangeTheme={onChangeTheme}
      />
      {children}
      <Footer />
      <Outlet />
    </Home>
  );
}

export default HomeLayout;
