import { useDispatch, useSelector } from "react-redux";
import { hide } from "features/hamburgerMenuSlice";
import {
  Container,
  Content,
  MenuOption,
  MenuOptionsContainer,
  Overlay,
} from "./HamburgerMenu.styles";
import { setTransition } from "features/headerSlice";
import { Link } from "components/Link";

function HamburgerMenu({ links }) {
  const display = useSelector((state) => state.hamburgerMenu.display);
  const dispatch = useDispatch();
  const TRANSITION_DURATION_MS = 350;

  const closeMenu = () => {
    // Disable transition effect when closing menu
    dispatch(setTransition(false));

    dispatch(hide());

    // Enable transition effect after the menu has been closed
    setTimeout(() => dispatch(setTransition(true)), TRANSITION_DURATION_MS);
  };

  return (
    <Container display={display}>
      <Overlay onClick={closeMenu} />
      <Content>
        <MenuOptionsContainer>
          {links.map((link) => (
            <MenuOption key={link.id} onClick={closeMenu}>
              {<Link to={link.to}>{link.label}</Link>}
            </MenuOption>
          ))}
        </MenuOptionsContainer>
      </Content>
    </Container>
  );
}

export default HamburgerMenu;
