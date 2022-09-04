import "./ExperienceCard.scss";

function ExperienceCard(props) {
    const { language, yearsOfExperience } = props;

    return (
        <div className="experience-card-container">
            <div className="experience-card-content">
                <h3>{ language }</h3>
                <p>{ yearsOfExperience === 1 ? `${yearsOfExperience} year` : `${yearsOfExperience} years` } </p>
            </div>
        </div>
    );
}

export default ExperienceCard;

