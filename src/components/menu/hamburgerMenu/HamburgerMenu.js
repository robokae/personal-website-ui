import { useDispatch, useSelector } from "react-redux";
import { hide } from "features/hamburgerMenuSlice";
import {
  Container,
  Content,
  Header,
  MenuOption,
  MenuOptionsContainer,
  Overlay,
} from "./HamburgerMenu.styles";
import { setTransition } from "features/headerSlice";
import { Link } from "components/Link";
import Icon from "components/icon/Icon";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect, useRef, useState } from "react";

function HamburgerMenu({ links }) {
  const display = useSelector((state) => state.hamburgerMenu.display);
  const dispatch = useDispatch();
  const TRANSITION_DURATION_MS = 350;
  const menuRef = useRef(null);
  const [height, setHeight] = useState(null);

  useLayoutEffect(() => {
    if (menuRef.current) {
      setHeight(menuRef.current.offsetHeight);
    }
  }, [display]);

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
      <Header>
        <Icon clickable name={faClose} clickHandler={closeMenu} />
      </Header>
      <Content ref={menuRef} height={height} display={display}>
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
