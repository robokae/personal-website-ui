import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function LandingSection() {
  return (
    <section className="landing-section">
      <div className="landing-section__content">
        <h1 className="landing-section__heading">
          <span className="landing-section__heading-text landing-section__heading-text--line-1">
            Hello there!
          </span>
          <span className="landing-section__heading-text landing-section__heading-text--line-2">
            My name is Alexander Hom.
          </span>
          <span className="landing-section__heading-text landing-section__heading-text--line-3">
            I am a full-stack web developer
          </span>
          <span className="landing-section__heading-text landing-section__heading-text--line-4">
            from San Francisco.
          </span>
        </h1>
      </div>
    </section>
  );
}

export default LandingSection;
