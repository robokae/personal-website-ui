import { useState } from "react";
import "./ExperienceSection.scss";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import experience from "../../../../data/experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExperienceSection() {
    const [dropdownIsActive, setDropdownIsActive] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const displayDropdown = (id) => {
        activeDropdown === id ? setActiveDropdown(null) : setActiveDropdown(id);
        setDropdownIsActive(!dropdownIsActive);
    };

    return (
        <section className="my-experience-section">
            <div className="my-experience-section__content">
            <h2 className="my-experience-section__heading">My Experience</h2>
                <div className="my-experience-section__experience-details">
                    {experience.map((experience) => (
                        <div 
                            key={experience.id}
                            className="my-experience-section__experience-detail"
                        >
                            <div 
                                className="my-experience-section__experience-detail-title-container"
                                onClick={() => displayDropdown(experience.id)} 
                            >
                                <h3 className="my-experience-section__experience-detail-title">{experience.title}</h3>
                                <FontAwesomeIcon 
                                    icon={dropdownIsActive && activeDropdown == experience.id ? faChevronUp : faChevronDown} 
                                    className="my-experience-section__dropdown-icon" 
                                />
                            </div>
                            <div 
                                className={`my-experience-section__experience-cards 
                                    ${dropdownIsActive && activeDropdown == experience.id 
                                        ? "" 
                                        : "my-experience-section__experience-cards--hide"}`}
                            >
                                {experience.data.map((value, index) => (
                                    <div key={index} className="my-experience-section__experience-card">
                                        <p className="my-experience-section__experience-card-heading">{value.name}</p>
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