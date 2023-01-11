import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import SlideOutMenu from "./SlideOutMenu";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header(props) {
  const { toggleTheme, theme } = props;

  const [displaySlideOutMenu, setDisplaySlideOutMenu] = useState(false);

  return (
    <div className="header">
      <div className="header__content">
        <NavLink to="/" className="header__logo">
          alexander hom
        </NavLink>
        <div className="header__links">
          {/* <NavLink 
                        to="/#about"
                        className="navbar-container__link"
                    >
                        About
                    </NavLink> */}
          <NavLink to="/blog" className="header__link">
            Blog
          </NavLink>
          {/* <NavLink 
                        to="/portfolio" 
                        className="navbar-container__link"
                    >
                        Portfolio
                    </NavLink> */}
          {/* <NavLink
                        to="/resume"
                        className="navbar-container__link"
                    >
                        Resume
                    </NavLink> */}
          <NavLink
            to="/#contact"
            className="header__link"
            // onClick={() => setDisplaySlideOutMenu(false)}
          >
            Contact
          </NavLink>
          <a href="https://github.com/robokae" className="header__link">
            <FontAwesomeIcon className="header__icon" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-hom-94811b188/"
            className="header__link"
          >
            <FontAwesomeIcon className="header__icon" icon={faLinkedin} />
          </a>
          <button className="header__theme-toggler" onClick={toggleTheme}>
            <FontAwesomeIcon
              className="header__icon"
              icon={theme === "light" ? faMoon : faSun}
            />
          </button>
        </div>
        <FontAwesomeIcon
          className="header__hamburger-menu-icon"
          icon={faBars}
          onClick={() => setDisplaySlideOutMenu(true)}
        />
      </div>
      <SlideOutMenu
        display={displaySlideOutMenu}
        setDisplay={setDisplaySlideOutMenu}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}

export default Header;
