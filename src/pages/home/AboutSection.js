import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faHeart,
  faCode,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return (
    <section id="about" className="about-me-section">
      <div className="about-me-section__content-container">
        <div className="about-me-section__about-squares">
          <div className="about-me-section__about-square">
            <FontAwesomeIcon
              className="about-me-section__icon"
              icon={faSchool}
            />
            <p className="about-me-section__about-square-title">
              Studied computer science at the University of California, Merced
              from 2018 to 2022
            </p>
          </div>
          <div className="about-me-section__about-square">
            <FontAwesomeIcon
              className="about-me-section__icon about-me-section__icon--red"
              icon={faHeart}
            />
            <p className="about-me-section__about-square-title">
              Passionate about UI/UX and full-stack software development
            </p>
          </div>
          <div className="about-me-section__about-square">
            <FontAwesomeIcon className="about-me-section__icon" icon={faCode} />
            <p className="about-me-section__about-square-title">
              Skilled in React, Spring Boot, SQL databases, and cloud
              technologies
            </p>
          </div>
          <div className="about-me-section__about-square">
            <FontAwesomeIcon className="about-me-section__icon" icon={faBook} />
            <p className="about-me-section__about-square-title">
              Love learning about technology, designing application UIs, and
              programming
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
