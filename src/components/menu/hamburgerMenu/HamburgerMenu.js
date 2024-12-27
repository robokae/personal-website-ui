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

function HamburgerMenu({ display, clickHandler }) {
  const { links } = content;
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
        <CSSTransition in={display} classNames="content" timeout={100}>
          <Content ref={menuRef} height={height}>
            <MenuOptionsContainer>
              {links.map((link, index) => (
                <CSSTransition
                  key={index}
                  in={display}
                  classNames="link"
                  timeout={350}
                  unmountOnExit
                >
                  <MenuOption>
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
