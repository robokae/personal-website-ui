import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./LandingSection.scss";

function LandingSection() {
    return (
        <section className="landing-section">
            <div className="landing-section__content">
                <h1 className="landing-section__heading">
                    Hello, my name is 
                    <br></br>
                    <span className="landing-section__heading--highlight">Alexander Hom</span>
                    <br></br>
                    and I am a full-stack web developer 
                    <br></br> 
                    from San Francisco.
                </h1>
                <div className="landing-section__quick-links-container">
                    <a 
                        href="https://github.com/robokae"
                        className="landing-section__quick-link"
                    >
                        <FontAwesomeIcon 
                            className="landing-section__quick-link-icon" 
                            icon={faGithub} 
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/alexander-hom-94811b188/"
                        className="landing-section__quick-link"
                    > 
                        <FontAwesomeIcon 
                            className="landing-section__quick-link-icon" 
                            icon={faLinkedin} 
                        />
                    </a>
                </div>
            </div>
        </section>

    );
}

export default LandingSection;