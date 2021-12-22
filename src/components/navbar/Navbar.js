import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import ThemeToggler from "../themeToggler/ThemeToggler";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <NavLink to="/" className="logo">Alexander Hom</NavLink>
                <div className="nav-links">
                    <NavLink 
                        to="/#about-me-section"
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
                        to="/#contact-section"
                        duration={500}
                        className="nav-link"
                    >
                        Contact
                    </NavLink>
                </div>
                <ThemeToggler />
            </div>
        </div>
    );
}   

export default Navbar;