import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import Portrait from "./Portrait.jpg";
import "./Home.scss";

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            let sectionId = location.hash;
            let scrollToSection = document.querySelector(sectionId);

            if (scrollToSection) {
                scrollToSection.scrollIntoView();
            }
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [location,]);

    return (
        <div className="home-page-container">
            <section className="landing-section home-page-section">
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
            <section id="about" className="about-me-section home-page-section">
                <div className="about-me-section-content">
                    <h2 className="section-heading">About Me</h2>
                    <p>I am a computer science student from San Francisco who is passionate about UI/UX and full stack web development. In my free time, I enjoy designing and coding up websites. My current tech stack in 2021 consists of React and Flask. In addition to making websites, I also enjoy coding in general. Python, JavaScript, and C++ are among my favorite programming languages. Other topics I am interested in are operating systems and computer networks.</p>
                </div>
            </section>
            <section className="my-experience-section home-page-section">
                <div className="my-experience-section-content">
                    <h2>My Experience</h2>
                    <div className="experience-cards-container">
                        <ExperienceCard language="HTML" yearsOfExperience={2} />
                        <ExperienceCard language="CSS" yearsOfExperience={2} />
                        <ExperienceCard language="JavaScript" yearsOfExperience={1.5} />
                        <ExperienceCard language="React" yearsOfExperience={1.5} />
                        <ExperienceCard language="Flask" yearsOfExperience={1} />
                        <ExperienceCard language="SQL" yearsOfExperience={1} />
                        <ExperienceCard language="Python" yearsOfExperience={1.5} />
                        <ExperienceCard language="C++" yearsOfExperience={2} />
                        <ExperienceCard language="Java" yearsOfExperience={2} />
                    </div>
                </div>
            </section>
            <section id="contact" className="contact-section home-page-section">
                <div className="contact-section-content">
                    <h2 className="section-heading">Reaching Out</h2>
                    <p>I am currently looking for a full-time full stack web development job. If you are interested in my being a member of your web development team, feel free to contact me through email at alexanderhom19@gmail.com or by leaving me a message.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
