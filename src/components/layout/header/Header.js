import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  disableTransparentHeader,
  enableTransparentHeader,
  setTransparentHeader,
} from "features/headerSlice";
import { toggle } from "features/hamburgerMenuSlice";
import {
  Container,
  DynamicLink,
  LinkContainer,
  Nav,
  NavContainer,
} from "./Header.styles";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/icon/Icon";
import { useResize } from "hooks/useResize";
import { DeviceSize } from "constants/layout";
import HamburgerMenu from "components/menu/hamburgerMenu/HamburgerMenu";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function Header({ links, transitionBackgroundOnScroll }) {
  const displayHamburgerMenu = useSelector(
    (state) => state.hamburgerMenu.display
  );
  const { isTransparent, transition } = useSelector((state) => state.header);
  const { width } = useResize();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [enableTransition, setEnableTransition] = useState(true);
  const leftLinks = links.filter((link) => link.position === "left");
  const rightLinks = links.filter((link) => link.position === "right");
  const SCROLL_THRESHOLD = 20;

  useEffect(() => {
    if (
      displayHamburgerMenu ||
      (!displayHamburgerMenu && window.scrollY >= SCROLL_THRESHOLD)
    ) {
      // Disable the transparent header when the hamburger menu is displayed or
      // when a certain amount has been scrolled down
      dispatch(disableTransparentHeader());
      return;
    }

    dispatch(setTransparentHeader(transitionBackgroundOnScroll));
  }, [displayHamburgerMenu, transitionBackgroundOnScroll, dispatch]);

  useEffect(() => {
    // Closes the menu after going to a new page (after link is clicked)
    !enableTransition && setEnableTransition(true);
  }, [enableTransition, navigate]);

  const handleScroll = () => {
    if (transitionBackgroundOnScroll && !displayHamburgerMenu) {
      window.scrollY <= SCROLL_THRESHOLD
        ? dispatch(enableTransparentHeader())
        : dispatch(disableTransparentHeader());
      return;
    }
    dispatch(disableTransparentHeader());
  };

  const toggleMenu = () => dispatch(toggle());

  window.addEventListener("scroll", handleScroll);

  return (
    <Container>
      <CSSTransition
        in={!isTransparent}
        classNames="nav-container"
        timeout={{ exit: 10 }}
      >
        <NavContainer transition={transition}>
          <Nav>
            {[leftLinks, rightLinks].map((links, index) => (
              <LinkContainer key={index}>
                {links.map((link, index) => (
                  <DynamicLink
                    key={index}
                    to={link.to}
                    $display={link.displayOnMobile}
                    onClick={displayHamburgerMenu && toggleMenu}
                  >
                    {link.label ?? <Icon name={link.icon} />}
                  </DynamicLink>
                ))}
              </LinkContainer>
            ))}
            {width < DeviceSize.TABLET && (
              <Icon
                clickable
                onClick={toggleMenu}
                name={displayHamburgerMenu ? faTimes : faBars}
              />
            )}
          </Nav>
        </NavContainer>
      </CSSTransition>
      <HamburgerMenu clickHandler={toggleMenu} />
    </Container>
  );
}

export default Header;
