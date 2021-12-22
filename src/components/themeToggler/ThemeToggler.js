import "./ThemeToggler.scss";

function ThemeToggler() {
    return (
        <label className="theme-toggler" htmlFor="toggle">
            <input type="checkbox" className="toggle" id="toggle" />
            <span className="slider"></span>
        </label>
    );
}   

export default ThemeToggler;