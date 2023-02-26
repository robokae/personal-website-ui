import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExperienceSection({ content }) {
  const [activeDropdowns, setActiveDropdowns] = useState([]);

  const displayDropdown = (id) => {
    activeDropdowns.indexOf(id) >= 0
      ? setActiveDropdowns(
          activeDropdowns.filter((dropdownId) => dropdownId !== id)
        )
      : setActiveDropdowns((activeDropdowns) => [...activeDropdowns, id]);
  };

  return (
    <section className="my-experience-section">
      <div className="my-experience-section__content">
        <h2 className="my-experience-section__heading">My Experience</h2>
        <div className="my-experience-section__experience-details">
          {content.map((experience) => (
            <div
              key={experience.id}
              className="my-experience-section__experience-detail"
            >
              <div
                className="my-experience-section__experience-detail-title-container"
                onClick={() => displayDropdown(experience.id)}
              >
                <h4 className="my-experience-section__experience-detail-title">
                  {experience.title}
                </h4>
                <FontAwesomeIcon
                  icon={
                    activeDropdowns.indexOf(experience.id) >= 0
                      ? faChevronUp
                      : faChevronDown
                  }
                  className="my-experience-section__dropdown-icon"
                />
              </div>
              <div
                className={`my-experience-section__experience-cards 
                                    ${
                                      activeDropdowns.indexOf(experience.id) >=
                                      0
                                        ? ""
                                        : "my-experience-section__experience-cards--hide"
                                    }`}
              >
                {experience.data.map((value, index) => (
                  <div
                    key={index}
                    className="my-experience-section__experience-card"
                  >
                    <p className="my-experience-section__experience-card-heading">
                      {value.name}
                    </p>
                    <p className="my-experience-section__experience-card-text">
                      {value.experience === 1
                        ? `${value.experience} year `
                        : `${value.experience} years `}
                      {/* ({value.proficiency}) */}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
