import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  disableTransparentHeader,
  enableTransparentHeader,
  setTransition,
  setTransparentHeader,
} from "features/headerSlice";
import { toggle } from "features/hamburgerMenuSlice";
import {
  Container,
  DynamicLink,
  HamburgerMenuButton,
  LinkContainer,
  Nav,
} from "./Header.styles";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/icon/Icon";

function Header({ links, changeBgOnScroll }) {
  const displayHamburgerMenu = useSelector(
    (state) => state.hamburgerMenu.display
  );
  const isTransparent = useSelector((state) => state.header.isTransparent);
  const transition = useSelector((state) => state.header.transition);
  const dispatch = useDispatch();
  const SCROLL_THRESHOLD = 20;
  const TRANSITION_DURATION_MS = 350;

  useEffect(() => {
    if (
      displayHamburgerMenu ||
      (!displayHamburgerMenu && window.scrollY >= SCROLL_THRESHOLD)
    ) {
      dispatch(disableTransparentHeader());
      dispatch(setTransition(false));
      return;
    }

    dispatch(setTransparentHeader(changeBgOnScroll));
  }, [displayHamburgerMenu, changeBgOnScroll, dispatch]);

  const handleScroll = () => {
    if (changeBgOnScroll && !displayHamburgerMenu) {
      window.scrollY <= SCROLL_THRESHOLD
        ? dispatch(enableTransparentHeader())
        : dispatch(disableTransparentHeader());
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

  const leftLinks = links.filter((link) => link.position === "left");
  const rightLinks = links.filter((link) => link.position === "right");

  return (
    <Container transition={transition} transparent={isTransparent}>
      <Nav>
        {[leftLinks, rightLinks].map((links, index) => (
          <LinkContainer key={index}>
            {links.map((link, index) => (
              <DynamicLink
                key={index}
                to={link.to}
                $display={link.displayOnMobile}
              >
                {link.label ?? <Icon name={link.icon} />}
              </DynamicLink>
            ))}
          </LinkContainer>
        ))}
        <HamburgerMenuButton onClick={handleMenuClick}>
          <Icon clickable name={displayHamburgerMenu ? faTimes : faBars} />
        </HamburgerMenuButton>
      </Nav>
    </Container>
  );
}

export default Header;
