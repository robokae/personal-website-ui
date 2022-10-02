import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ThemeToggler.scss";

function ThemeToggler(props) {
  const { toggleTheme, theme } = props;

  return (
    <button className="ThemeToggler" onClick={toggleTheme}>
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
    </button>
  );
}

export default ThemeToggler;
