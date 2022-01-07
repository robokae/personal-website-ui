import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Home.scss";

import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

import experienceData from "../../data/experience.json";
import projects from "../../data/project";

const { options } = experienceData;

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

    const [optionsIndex, setOptionsIndex] = useState(0);
    
    let experienceToDisplay = experienceData[options[optionsIndex]];

    return (
        <div className="home-page-container">
            <section className="landing-section home-page-section">
                <div className="landing-section-content">
                    <h1 className="landing-heading">
                        {/* Hello there! 
                        <br></br> */}
                        My name is <span>Alexander Hom</span>,
                        <br></br>
                        and I'm a full-stack web developer
                        <br></br>
                        from San Francisco
                    </h1>
                    <div className="quick-links-container">
                        <a href="https://github.com/robokae">
                            <FontAwesomeIcon className="quick-link" icon={faGithub} />
                        </a>
                       <a href="https://www.linkedin.com/in/alexander-hom-94811b188/"> 
                            <FontAwesomeIcon className="quick-link" icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </section>
            <section id="about" className="about-me-section home-page-section">
                <div className="about-me-section-content">
                    <p>I am a computer science student who is passionate about UI/UX and full stack web development. In my free time, I enjoy designing and coding up websites. My current tech stack in 2021 consists of React and Flask. In addition to making websites, I also enjoy coding in general. Python, JavaScript, and C++ are among my favorite programming languages. Other topics I am interested in are operating systems and computer networks.</p>
                </div>
            </section>
            <section className="my-experience-section home-page-section">
                <div className="my-experience-section-content">
                    <h2>Experience</h2>
                    <div className="experience-container">
                        <ul className="experience-options">
                            {options.map((option, index) => (
                                <li 
                                    key={index}
                                    className={index === optionsIndex ? "selected" : null}
                                    onClick={() => setOptionsIndex(index)}
                                >
                                    {option}
                                </li>
                            ))} 
                        </ul>
                        <div className="experience-cards">
                            {experienceToDisplay.map((value, index) => (
                                <div key={index} className="experience-card">
                                    <h3>{value.name}</h3>
                                    <p>
                                        {value.experience === 1 ? `${value.experience} year` : `${value.experience} years`}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className="projects-section home-page-section">
                <div className="projects-section-content">
                    <h2>Projects</h2>
                    <div className="projects-container">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                className="project-card"
                                projectName={project.name}
                                projectThumbnailSrc={project.thumbnailSrc}
                                projectStack={project.stack}
                                projectDescription={project.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section id="contact" className="contact-section home-page-section">
                <div className="contact-section-content">
                    <h2 className="section-heading">Contact</h2>
                    <p>I am currently looking for a full-time full stack web development job. If you are interested in my being a member of your web development team, feel free to email me at alexanderhom19@gmail.com.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
