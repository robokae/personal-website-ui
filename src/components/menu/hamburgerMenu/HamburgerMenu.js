import { useSelector } from "react-redux";
import content from "content/hamburgerMenu.json";
import {
  Container,
  Content,
  MenuOption,
  MenuOptionsContainer,
  Overlay,
} from "./HamburgerMenu.styles";
import { Link } from "components/Link";
import { useLayoutEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function HamburgerMenu({ clickHandler }) {
  const { links } = content;
  const display = useSelector((state) => state.hamburgerMenu.display);
  const menuRef = useRef(null);
  const [height, setHeight] = useState(null);

  useLayoutEffect(() => {
    if (menuRef.current) {
      display && setHeight(menuRef.current.offsetHeight);
    }
  }, [display]);

  return (
    <TransitionGroup component={null}>
      <Container>
        <CSSTransition in={display} classNames="overlay" timeout={0}>
          <Overlay onClick={clickHandler} />
        </CSSTransition>
        <CSSTransition in={display} classNames="content" timeout={150}>
          <Content ref={menuRef} height={height}>
            <MenuOptionsContainer>
              {links.map((link) => (
                <CSSTransition
                  in={display}
                  classNames="link"
                  timeout={300}
                  unmountOnExit
                >
                  <MenuOption key={link.id}>
                    {
                      <Link onClick={clickHandler} to={link.to}>
                        {link.label}
                      </Link>
                    }
                  </MenuOption>
                </CSSTransition>
              ))}
            </MenuOptionsContainer>
          </Content>
        </CSSTransition>
      </Container>
    </TransitionGroup>
  );
}

export default HamburgerMenu;
