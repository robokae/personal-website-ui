import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Portrait from "./Portrait.jpg";
import "./Home.scss";

function Home() {
    return (
        <div className="home-page-container">
            <section className="landing-section">
                <div className="landing-section-content">
                    <div className="landing-section-content-left">
                        <h1 className="landing-heading">
                            Hello there, 
                            <br></br>
                            my name is 
                            <br></br>
                            <span>Alexander Hom</span>
                        </h1>
                        <h3>Full Stack Developer | San Francisco, CA</h3>
                        <div className="quick-links-container">
                            <FontAwesomeIcon className="quick-link" icon={faGithub} />
                            <FontAwesomeIcon className="quick-link" icon={faLinkedin} />
                        </div>
                    </div>
                    <div className="landing-section-content-right">
                        <img src={Portrait} alt="portrait of Alex" />
                    </div>
                </div>
            </section>
            <section className="about-me-section">
                <div className="about-me-section-content">

                </div>
            </section>
            <section className="my-experience-section">
                <div className="my-experience-section-content">

                </div>
            </section>
            <section className="contact-section">
                <div className="contact-section-content">

                </div>
            </section>
        </div>
    );
}

export default Home;
