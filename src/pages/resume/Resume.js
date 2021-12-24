import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Resume.scss";

function Resume() {
    return (
        <div className="resume-page-container">
            <div className="resume-page-content">
                <div className="resume-container">
                    <div className="resume-title-section">
                        <h3 className="name">Alexander Hom</h3>
                        <div className="contact-info-container">
                            <div className="contact-info">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>alexanderhom19@gmail.com</p>
                            </div>
                            <div className="dot"></div> 
                            <div className="contact-info">
                                <FontAwesomeIcon icon={faGithub} />
                                <a href="https://github.com/robokae">GitHub</a>
                            </div>
                            <div className="dot"></div>
                            <div className="contact-info">
                                <FontAwesomeIcon icon={faLinkedin} />
                                <a href="https://www.linkedin.com/in/alexander-hom-94811b188/">LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h4 className="resume-section-title">Objective</h4>

                        <div className="section-body">
                            <p>Computer science student with an interest in full-stack website development who is enthusiastic about applying a passion for design and programming to create modern and responsive websites using the latest technologies.</p>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h4 className="resume-section-title">Education</h4>

                        <div className="section-body">
                            <div className="subsection">
                                <div className="subsection-heading heading-with-date">
                                    <p>University of California, Merced</p>
                                    <p>August 2018 - May 2022</p>
                                </div>

                                <p>
                                    Bachelor of Science, Computer Science and Engineering
                                </p>

                                <ul>
                                    <li>Relevant courses: Full-stack Development, Database Systems, Computer Networks, Algorithm Design and Analysis, Data Structures</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h4 className="resume-section-title">Skills</h4>
                        <div className="section-body">
                            <div className="subsection">
                                <div className="subsection-heading">
                                    <p>Technical Skills</p>
                                </div>

                                <ul>
                                    <li>Languages: HTML, CSS, JavaScript, Python, SQL (SQLite), Java, C++</li>
                                    <li>Frameworks and libraries: React, Flask, JDBC</li>
                                    <li>Software: Figma, Git, Bash</li>
                                </ul>
                            </div>

                            <div className="subsection">
                                <div className="subsection-heading">
                                    <p>Soft Skills</p>
                                </div>

                                <ul>
                                    <li>Excellent verbal and written communicator, team leader and team player, detail-oriented, problem solver</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h4 className="resume-section-title">Projects</h4>
                        <div className="section-body">
                            <div className="subsection">
                                <div className="subsection-heading heading-with-date">
                                    <p>Emazon</p>
                                    <p>November 2021 - Present</p>
                                </div>

                                <p>
                                    Team project | React, CSS, Flask, Figma
                                </p>

                                <ul>
                                    <li>Led the front-end team in designing Figma mockups for an eight-page e-commerce web application</li>
                                    <li>Implemented four webpages with React and CSS, and connected them with the Flask back end</li>
                                    <li>Collaborated closely with the back-end team using Agile practices</li>
                                </ul>
                            </div>
                            
                            <div className="subsection">
                                <div className="subsection-heading heading-with-date">
                                    <p>Encapsulate</p>
                                    <p>September 2021 - Present</p>
                                </div>

                                <p>
                                    Team project | React, CSS, Flask, SQL, Figma
                                </p>

                                <ul>
                                    <li>Worked in a team to design and implement Figma mockups for a full-stack social media application</li>
                                    <li>Developed a REST API using Flask to transfer data between the client and the SQLite database</li>
                                    <li>Implemented a user authentication system using Flask and JSON Web Token (JWT)</li>
                                </ul>
                            </div>
                            
                            <div className="subsection">
                                <div className="subsection-heading heading-with-date">
                                    <p>Personal Website</p>
                                    <p>June 2020 - Present</p>
                                </div>

                                <p>
                                    Personal project | React, SCSS, Flask, Figma
                                </p>

                                <ul>
                                    <li>Developed Figma mockups for a portfolio website and implemented them using React and SCSS</li>
                                </ul>
                            </div>

                            <div className="subsection">
                                <div className="subsection-heading heading-with-date">
                                    <p>ACM Website</p>
                                    <p>February 2020 - Present</p>
                                </div>

                                <p>
                                    Team project | React, SCSS, Figma
                                </p>

                                <ul>
                                    <li>Updated Figma mockups and designed a dashboard page as part of a redesign of the organization website</li>
                                    <li>Wrote the markup and styling of the Events page and the dashboard page using JSX and SCSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;