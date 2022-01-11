import { NavLink } from "react-router-dom";
import ThemeToggler from "../themeToggler/ThemeToggler";
import "./Navbar.scss";

function Navbar(props) {
    const { toggleTheme } = props;

    return (
        <div className="navbar-container">
            <div className="navbar-container__content">
                <NavLink to="/" className="navbar-container__logo">
                    Alexander Hom
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
                    {/* <NavLink
                        to="/#contact"
                        className="navbar-container__link"
                    >
                        Contact
                    </NavLink> */}
                </div>
                <ThemeToggler className="navbar-container__theme-toggler" toggleTheme={toggleTheme} />
            </div>
        </div>
    );
}   

export default Navbar;