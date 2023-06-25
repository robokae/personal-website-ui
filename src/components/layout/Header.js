import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import styled from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  HAMBURGER_MENU_ICON,
  HEADER_HEIGHT,
  LOGO_FONT,
  MEDIA_QUERY_BREAKPOINT_MED,
  MEDIA_QUERY_BREAKPOINT_XL,
  TRANSITION_DURATION,
} from "../../constants/StyleConstants";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import Icon from "../icon/Icon";
import { Link } from "../Link";
import SlideOutMenu from "../menu/SlideOutMenu";
import { getLinkFromObject } from "../../util/LinkUtil";

const HeaderContainer = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? ({ theme }) => theme.primaryBgCol : "transparent"};
  border-bottom: 1px solid
    ${(props) =>
      props.isActive ? ({ theme }) => theme.lineCol : "transparent"};
  z-index: 5;
  /* transition: background-color ${TRANSITION_DURATION} ease-in,
    border-bottom ${TRANSITION_DURATION} ease-in; */
`;

const Nav = styled.nav`
  width: ${CONTENT_MAX_WIDTH};
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_XL}) {
    width: 95%;
  }
`;

const Logo = styled(Link)`
  font-family: ${LOGO_FONT};
  text-transform: uppercase;
`;

const LinkContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    display: none;
  }
`;

const MenuIcon = styled(Icon)`
  display: none;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    display: inline-block;
    justify-self: flex-end;
    cursor: pointer;
  }
`;

function Header({
  logo,
  links,
  theme,
  onChangeTheme,
  changeBgOnScroll = true,
  slideOutMenuContent,
}) {
  const [displaySlideOutMenu, setDisplaySlideOutMenu] = useState(false);
  const [headerIsActive, setHeaderIsActive] = useState(false);

  const handlePageScroll = () => {
    window.scrollY > 20 ? setHeaderIsActive(true) : setHeaderIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
    !changeBgOnScroll && setHeaderIsActive(true);
  }, [changeBgOnScroll]);

  return (
    <HeaderContainer isActive={headerIsActive}>
      <Nav>
        <Logo to={logo.to} $isActive={headerIsActive}>
          {logo.name}
        </Logo>
        <LinkContainer>
          {links.length > 0 &&
            links.map((link) => getLinkFromObject(link, headerIsActive, true))}
          <ThemeSwitcher
            onChangeTheme={onChangeTheme}
            theme={theme}
            headerIsActive={headerIsActive}
          />
        </LinkContainer>
        <MenuIcon
          icon={HAMBURGER_MENU_ICON}
          $color={
            headerIsActive
              ? ({ theme }) => theme.primaryFontCol
              : ({ theme }) => theme.headerInitialFontCol
          }
          onClick={() => setDisplaySlideOutMenu(true)}
        />
      </Nav>
      <SlideOutMenu
        display={displaySlideOutMenu}
        setDisplay={setDisplaySlideOutMenu}
        theme={theme}
        onChangeTheme={onChangeTheme}
        content={slideOutMenuContent}
      />
    </HeaderContainer>
  );
}

export default Header;
