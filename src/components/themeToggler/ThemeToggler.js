import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ThemeToggler.scss";

function ThemeToggler(props) {
    const { toggleTheme } = props;

    return (
        <button className="ThemeToggler" onClick={toggleTheme}>
            <FontAwesomeIcon icon={faMoon} />
        </button>
    );
}   

export default ThemeToggler;