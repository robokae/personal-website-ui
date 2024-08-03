import { useEffect } from "react";
import ThemeSwitcher from "../../themeSwitcher/ThemeSwitcher";
import { getLinkFromJson } from "../../../util/LinkUtil";
import {
  DYNAMIC_HEADER_SCROLL_AMOUNT,
  ENABLE_BLOG,
  ENABLE_THEME,
} from "../../../constants/AppConstants";
import Icon from "../../icon/Icon";
import { getIcon } from "../../../util/IconUtil";
import { useDispatch, useSelector } from "react-redux";
import {
  disableTransparentHeader,
  enableTransparentHeader,
  setTransition,
  setTransparentHeader,
} from "../../../features/headerSlice";
import { toggle } from "../../../features/hamburgerMenuSlice";
import { Container, LinkContainer, Logo, MenuIcon, Nav } from "./Header.styles";
import { TRANSITION_DURATION_MS } from "../../../constants/StyleConstants";

function Header({ logo, links, theme, onChangeTheme, changeBgOnScroll }) {
  const displayHamburgerMenu = useSelector(
    (state) => state.hamburgerMenu.display
  );
  const isTransparent = useSelector((state) => state.header.isTransparent);
  const transition = useSelector((state) => state.header.transition);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      displayHamburgerMenu ||
      (!displayHamburgerMenu && window.scrollY >= DYNAMIC_HEADER_SCROLL_AMOUNT)
    ) {
      dispatch(disableTransparentHeader());
      dispatch(setTransition(false));
      return;
    }

    dispatch(setTransparentHeader(changeBgOnScroll));
  }, [displayHamburgerMenu, changeBgOnScroll, dispatch]);

  const handleScroll = () => {
    if (changeBgOnScroll && !displayHamburgerMenu) {
      if (window.scrollY <= DYNAMIC_HEADER_SCROLL_AMOUNT) {
        dispatch(enableTransparentHeader());
      } else {
        dispatch(disableTransparentHeader());
      }
    } else {
      dispatch(disableTransparentHeader());
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleMenuClick = () => {
    // Disable transition effect when closing menu
    displayHamburgerMenu && dispatch(setTransition(false));

    dispatch(toggle());

    // Enable transition effect after the menu has been closed
    setTimeout(() => dispatch(setTransition(true)), TRANSITION_DURATION_MS);
  };

  return (
    <Container transition={transition} transparent={isTransparent}>
      <Nav>
        <Logo to={logo.to} $color={({ theme }) => theme.primaryFontCol}>
          {logo.name}
        </Logo>

        <LinkContainer>
          {links.length > 0 &&
            links
              .filter(
                (link) => !ENABLE_BLOG && link.name.toLowerCase() !== "blog"
              )
              .map((link) =>
                getLinkFromJson(link, ({ theme }) => theme.primaryFontCol)
              )}
          {ENABLE_THEME && (
            <ThemeSwitcher onChangeTheme={onChangeTheme} theme={theme} />
          )}
        </LinkContainer>

        <MenuIcon onClick={handleMenuClick}>
          <Icon
            icon={
              displayHamburgerMenu ? getIcon("times") : getIcon("hamburgerMenu")
            }
            color={({ theme }) => theme.primaryFontCol}
            clickable
          />
        </MenuIcon>
      </Nav>
    </Container>
  );
}

export default Header;
