import content from "content/hamburgerMenu.json";
import {
  Container,
  Content,
  MenuLink,
  MenuOption,
  MenuOptionsContainer,
  Overlay,
} from "./HamburgerMenu.styles";
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
        <CSSTransition
          in={display}
          classNames="overlay"
          timeout={{ enter: 100, exit: 250 }}
        >
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
                >
                  <MenuOption>
                    {
                      <MenuLink onClick={clickHandler} to={link.to}>
                        {link.label}
                      </MenuLink>
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
