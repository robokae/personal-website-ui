import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <NavLink to="/" className="logo">Alexander Hom</NavLink>
                <div className="nav-links">
                    <Link 
                        to="about-me-section"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                    >
                        About Me
                    </Link>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <Link
                        to="contact-section"
                        smooth={true}
                        duration={500}
                        activeClass="active-link"
                    >
                        Contact
                    </Link>
                </div>
                <div className="theme-toggle-switch">

                </div>
            </div>
        </div>
    );
}   

export default Navbar;