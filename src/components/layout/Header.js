import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import styled from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  HEADER_HEIGHT,
  LOGO_FONT,
  MEDIA_QUERY_BREAKPOINT_MED,
  MEDIA_QUERY_BREAKPOINT_XL,
  TRANSPARENT,
} from "../../constants/StyleConstants";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { Link } from "../Link";
import SlideOutMenu from "../menu/SlideOutMenu";
import { getLinkFromJson } from "../../util/LinkUtil";
import {
  DYNAMIC_HEADER_SCROLL_AMOUNT,
  ENABLE_BLOG,
  ENABLE_THEME_SWITCHER,
} from "../../constants/AppConstants";
import Icon from "../icon/Icon";
import { getIcon } from "../../util/IconUtil";

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
    props.isBgTransparent ? TRANSPARENT : ({ theme }) => theme.primaryBgCol};
  border-bottom: 1px solid
    ${(props) =>
      props.isBgTransparent ? TRANSPARENT : ({ theme }) => theme.lineCol};
  z-index: 5;
`;

const Nav = styled.nav`
  width: ${CONTENT_MAX_WIDTH};
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_XL}) {
    width: 90%;
  }
`;

const Logo = styled(Link)`
  color: ${(props) => props.$color};
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

const MenuIcon = styled.div`
  display: none;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    display: inline-block;
    justify-self: flex-end;
  }
`;

function Header({
  logo,
  links,
  theme,
  onChangeTheme,
  changeBgOnScroll,
  slideOutMenuContent,
}) {
  const [displaySlideOutMenu, setDisplaySlideOutMenu] = useState(false);
  const [isHeaderBgTransparent, setIsHeaderBgTransparent] = useState(true);

  const getLinkColor = () =>
    isHeaderBgTransparent
      ? ({ theme }) => theme.headerInitialFontCol
      : ({ theme }) => theme.primaryFontCol;

  useEffect(() => {
    changeBgOnScroll
      ? setIsHeaderBgTransparent(true)
      : setIsHeaderBgTransparent(false);
  }, [changeBgOnScroll]);

  const handleScroll = () => {
    if (changeBgOnScroll) {
      if (window.scrollY <= DYNAMIC_HEADER_SCROLL_AMOUNT) {
        setIsHeaderBgTransparent(true);
      } else {
        setIsHeaderBgTransparent(false);
      }
    } else {
      setIsHeaderBgTransparent(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <HeaderContainer isBgTransparent={isHeaderBgTransparent}>
      <Nav>
        <Logo to={logo.to} $color={getLinkColor()}>
          {logo.name}
        </Logo>

        <LinkContainer>
          {links.length > 0 &&
            links
              .filter(
                (link) => !ENABLE_BLOG && link.name.toLowerCase() !== "blog"
              )
              .map((link) => getLinkFromJson(link, getLinkColor(), true))}
          {ENABLE_THEME_SWITCHER && (
            <ThemeSwitcher
              onChangeTheme={onChangeTheme}
              theme={theme}
              isBgTransparent={isHeaderBgTransparent}
            />
          )}
        </LinkContainer>

        <MenuIcon onClick={() => setDisplaySlideOutMenu(true)}>
          <Icon
            icon={getIcon("HAMBURGER_MENU_ICON")}
            color={getLinkColor()}
            isClickable={true}
          />
        </MenuIcon>
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
