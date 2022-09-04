import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SlideOutMenu.scss";

function SlideOutMenu(props) {
    const { display, setDisplay, toggleTheme } = props;
    
    return (
        <div className={`slide-out-menu ${display ? "slide-out-menu--display" : ""}`}>
            <div className="slide-out-menu__content">
                <div className="slide-out-menu__top">
                    <FontAwesomeIcon 
                        className="slide-out-menu__close-button" 
                        icon={faTimes} 
                        onClick={() => setDisplay(false)}
                    />
                </div>
                <h2 className="slide-out-menu__heading">Menu</h2>
                <div className="slide-out-menu__bottom">
                    <ul className="slide-out-menu__options">
                        <li className="slide-out-menu__option">
                            <NavLink to="/" className="slide-out-menu__link">Home</NavLink>
                        </li> 
                        <li className="slide-out-menu__option">
                            <NavLink to="/#contact" className="slide-out-menu__link">Contact</NavLink>
                        </li>
                        <li className="slide-out-menu__option">
                            <p className="slide-out-menu__option-text" onClick={toggleTheme}>Toggle Theme</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SlideOutMenu;