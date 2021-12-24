import { NavLink } from "react-router-dom";
import ThemeToggler from "../themeToggler/ThemeToggler";
import "./Navbar.scss";

function Navbar(props) {
    const { toggleTheme } = props;

    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <NavLink to="/" className="logo">Alexander Hom</NavLink>
                <div className="nav-links">
                    <NavLink 
                        to="/#about-me"
                        duration={500}
                        className="nav-link"
                    >
                        About Me
                    </NavLink>
                    <NavLink 
                        to="/blog" 
                        className="nav-link"
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to="/portfolio" 
                        className="nav-link"
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className="nav-link"
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        to="/#contact"
                        duration={500}
                        className="nav-link"
                    >
                        Contact
                    </NavLink>
                </div>
                <ThemeToggler toggleTheme={toggleTheme} />
            </div>
        </div>
    );
}   

export default Navbar;