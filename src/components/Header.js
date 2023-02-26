import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SlideOutMenu from "./SlideOutMenu";
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
} from "../constants/StyleConstants";
import ThemeSwitcher from "./ThemeSwitcher";
import Icon from "./icon/Icon";
import IconWithTooltip from "./icon/IconWithTooltip";

const Container = styled.header`
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
  transition: background-color ${TRANSITION_DURATION} ease-in,
    border-bottom ${TRANSITION_DURATION} ease-in;
`;

const Content = styled.div`
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

const Link = styled(NavLink)`
  color: ${(props) =>
    props.$isActive
      ? ({ theme }) => theme.primaryFontCol
      : ({ theme }) => theme.headerInitialFontCol};
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled(Link)`
  font-family: ${LOGO_FONT};
  text-transform: uppercase;
`;

const LinkContainer = styled.div`
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

const getLinkFromObject = (linkObj, headerState) =>
  Object.keys(linkObj.icon).length > 0 ? (
    <Link
      key={linkObj.id}
      id={linkObj.tooltip.anchorId}
      to={linkObj.to}
      $isActive={headerState}
    >
      <IconWithTooltip
        iconDetails={linkObj.icon}
        tooltipDetails={linkObj.tooltip}
      />
    </Link>
  ) : (
    <Link key={linkObj.id} to={linkObj.to} $isActive={headerState}>
      {linkObj.name}
    </Link>
  );

function Header({ logo, links, theme, onChangeTheme, isActive }) {
  const [displaySlideOutMenu, setDisplaySlideOutMenu] = useState(false);
  const [headerIsActive, setHeaderIsActive] = useState(false);

  const handlePageScroll = () => {
    window.scrollY > 20 ? setHeaderIsActive(true) : setHeaderIsActive(false);
  };

  useEffect(() => window.addEventListener("scroll", handlePageScroll));

  return (
    <Container isActive={headerIsActive}>
      <Content>
        <Logo to={logo.to} $isActive={headerIsActive}>
          {logo.name}
        </Logo>
        <LinkContainer>
          {links.length > 0 &&
            links.map((link) => getLinkFromObject(link, headerIsActive))}
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
      </Content>
      <SlideOutMenu
        display={displaySlideOutMenu}
        setDisplay={setDisplaySlideOutMenu}
        onChangeTheme={onChangeTheme}
      />
    </Container>
  );
}

export default Header;
