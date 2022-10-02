import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./LandingSection.scss";

function LandingSection() {
    return (
        <section className="landing-section">
            <div className="landing-section__content">
                <h1 className="landing-section__heading">
                    Hello there! 
                    <br></br>
                    My name is <span className="landing-section__heading--highlight">Alexander Hom</span>.
                    <br></br>
                    I am a <span className="landing-section__heading--highlight">full-stack web developer</span>
                    <br></br> 
                    from San Francisco.
                </h1>
                <div className="landing-section__quick-links-container">
                    <div className="landing-section__quick-link">
                        <a 
                            href="https://github.com/robokae"
                            className="landing-section__quick-link"
                        >
                            <FontAwesomeIcon 
                                className="landing-section__quick-link-icon" 
                                icon={faGithub} 
                            />
                            <p>GitHub</p>
                        </a>
                    </div>
                    <div className="landing-section__quick-link">
                        <a 
                            href="https://www.linkedin.com/in/alexander-hom-94811b188/"
                            className="landing-section__quick-link"
                        > 
                            <FontAwesomeIcon 
                                className="landing-section__quick-link-icon" 
                                icon={faLinkedin} 
                            />
                            <p>LinkedIn</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default LandingSection;