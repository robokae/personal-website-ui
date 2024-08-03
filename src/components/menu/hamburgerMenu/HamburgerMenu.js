import { getLinkFromJson } from "../../../util/LinkUtil";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../../features/hamburgerMenuSlice";
import { useEffect, useRef, useState } from "react";
import {
  Container,
  Content,
  MenuOption,
  MenuOptionsContainer,
  Overlay,
} from "./HamburgerMenu.styles";
import { setTransition } from "../../../features/headerSlice";
import { TRANSITION_DURATION_MS } from "../../../constants/StyleConstants";

function HamburgerMenu({ theme, onChangeTheme, content }) {
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(0);
  const display = useSelector((state) => state.hamburgerMenu.display);
  const dispatch = useDispatch();

  useEffect(() => {
    menuRef.current.clientHeight && setMenuHeight(menuRef.current.clientHeight);
  }, [menuRef.current.clientHeight]);

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
      <Content
        ref={menuRef}
        display={display}
        height={menuHeight !== 0 && menuHeight}
      >
        <MenuOptionsContainer>
          <>
            {content.links &&
              content.links.map((link) => (
                <MenuOption key={link.id} onClick={closeMenu}>
                  {getLinkFromJson(
                    link,
                    ({ theme }) => theme.primaryFontCol,
                    false
                  )}
                </MenuOption>
              ))}
          </>
        </MenuOptionsContainer>
      </Content>
    </Container>
  );
}

export default HamburgerMenu;
