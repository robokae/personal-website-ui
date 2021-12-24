import "./ThemeToggler.scss";

function ThemeToggler(props) {
    const { toggleTheme } = props;

    return (
        <label className="theme-toggler" htmlFor="toggle">
            <input type="checkbox" className="toggle" id="toggle" onClick={toggleTheme} />
            <span className="slider"></span>
        </label>
    );
}   

export default ThemeToggler;