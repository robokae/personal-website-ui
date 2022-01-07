import { useState } from "react";
import "./ExperienceSection.scss";

import ExperienceCard from "../../../../components/experienceCard/ExperienceCard";
import experience from "../../../../data/experience";
const { options } = experience;

function ExperienceSection() {
    const [optionsIndex, setOptionsIndex] = useState(0);
    let experienceToDisplay = experience[options[optionsIndex]];
    
    return (
        <section className="my-experience-section">
            <div className="my-experience-section__content">
                <h2 className="my-experience-section__heading">Programming Experience</h2>
                <div className="my-experience-section__experience-details">
                    <ul className="my-experience-section__experience-details-options">
                        {options.map((option, index) => (
                            <li 
                                key={index}
                                className={index === optionsIndex ? "my-experience-section__experience-details-options--selected" : null}
                                onClick={() => setOptionsIndex(index)}
                            >
                                {option}
                            </li>
                        ))} 
                    </ul>
                    <div className="my-experience-section__experience-cards">
                        {experienceToDisplay.map((value, index) => (
                            <div key={index} className="my-experience-section__experience-card">
                                <h3>{value.name}</h3>
                                <p>
                                    {value.experience === 1 
                                        ? `${value.experience} year, ${value.proficiency}` 
                                        : `${value.experience} years, ${value.proficiency}`}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;