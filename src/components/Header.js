import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import SlideOutMenu from "./SlideOutMenu";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Header(props) {
  const { toggleTheme, theme } = props;
  const [displaySlideOutMenu, setDisplaySlideOutMenu] = useState(false);
  const [headerIsActive, setHeaderIsActive] = useState(false);

  const handlePageScroll = () => {
    window.scrollY > 20 ? setHeaderIsActive(true) : setHeaderIsActive(false);
  };

  useEffect(() => window.addEventListener("scroll", handlePageScroll));

  return (
    <div className={`header header--${headerIsActive ? "active" : "initial"}`}>
      <div className="header__content">
        <NavLink
          to="/"
          className={`header__logo header__logo--${
            headerIsActive ? "active" : "initial"
          }`}
        >
          Alexander Hom
        </NavLink>
        <div className="header__links">
          {/* <NavLink 
                        to="/#about"
                        className="navbar-container__link"
                    >
                        About
                    </NavLink> */}
          <NavLink
            to="/blog"
            className={`header__link header__link--${
              headerIsActive ? "active" : "initial"
            }`}
          >
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
            className={`header__link header__link--${
              headerIsActive ? "active" : "initial"
            }`}
            // onClick={() => setDisplaySlideOutMenu(false)}
          >
            Contact
          </NavLink>
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/alexander-hom-94811b188/"
            className={`header__link header__link--${
              headerIsActive ? "active" : "initial"
            }`}
          >
            <FontAwesomeIcon
              className={`header__icon header__icon--${
                headerIsActive ? "active" : "initial"
              }`}
              icon={faLinkedin}
            />
            <div className="tooltip-container">
              <Tooltip
                anchorId="linkedin"
                content="LinkedIn"
                place="bottom"
                className="custom-tooltip"
              />
            </div>
          </a>
          <a
            id="github"
            href="https://github.com/robokae"
            className={`header__link header__link--${
              headerIsActive ? "active" : "initial"
            }`}
          >
            <FontAwesomeIcon
              className={`header__icon header__icon--${
                headerIsActive ? "active" : "initial"
              }`}
              icon={faGithub}
            />
            <div className="tooltip-container">
              <Tooltip
                anchorId="github"
                content="GitHub"
                place="bottom"
                className="custom-tooltip"
              />
            </div>
          </a>
          <button
            id="toggle-theme"
            className={`header__theme-toggler header__theme-toggler--${
              headerIsActive ? "active" : "initial"
            }`}
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              id="toggle-theme"
              className={`header__icon header__icon--${
                headerIsActive ? "active" : "initial"
              }`}
              icon={theme === "light" ? faMoon : faSun}
            />
            <div className="tooltip-container">
              <Tooltip
                anchorId="toggle-theme"
                content={theme === "light" ? "Dark theme" : "Light theme"}
                place="bottom"
                className="custom-tooltip"
              />
            </div>
          </button>
        </div>
        <FontAwesomeIcon
          className={`header__hamburger-menu-icon header__icon header__icon--${
            headerIsActive ? "active" : "initial"
          }`}
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
