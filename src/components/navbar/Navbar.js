import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ThemeToggler from "../themeToggler/ThemeToggler";
import SlideOutMenu from "../slideOutMenu/SlideOutMenu";
import "../../scss/layout/_navbar.scss";

function Navbar(props) {
    const { toggleTheme, theme } = props;

    const [displaySlideOutMenu, setDisplaySlideOutMenu] = useState(false);

    return (
        <div className="navbar-container">
            <div className="navbar-container__content">
                <NavLink to="/" className="navbar-container__logo">
                    alexander hom
                </NavLink>
                <div className="navbar-container__links">
                    {/* <NavLink 
                        to="/#about"
                        className="navbar-container__link"
                    >
                        About
                    </NavLink> */}
                    {/* <NavLink 
                        to="/blog" 
                        className="navbar-container__link"
                    >
                        Blog
                    </NavLink>
                    <NavLink 
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
                        className="navbar-container__link"
                        // onClick={() => setDisplaySlideOutMenu(false)}
                    >
                        Contact
                    </NavLink>
                    <div className="navbar-container__theme-toggler-container">
                        <ThemeToggler className="navbar-container__theme-toggler" toggleTheme={toggleTheme} theme={theme} />
                    </div> 
                </div>
                <FontAwesomeIcon 
                    className="navbar-container__hamburger-menu-icon" 
                    icon={faBars} 
                    onClick={() => setDisplaySlideOutMenu(true)} 
                /> 
            </div>
            <SlideOutMenu display={displaySlideOutMenu} setDisplay={setDisplaySlideOutMenu} toggleTheme={toggleTheme} />
        </div>
    );
}   

export default Navbar;