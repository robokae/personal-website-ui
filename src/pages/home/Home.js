import { Element } from "react-scroll";
import "./Home.scss";

function Home() {
    return (
        <div className="home-page-container">
            <h1>Home page</h1>
            <Element id="about-me-section">
                <h2>About Me</h2>
            </Element>
            <Element id="contact-section">
                <h2>Reaching Out</h2>
            </Element>
        </div>
    );
}

export default Home;
