import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./components/contactForm/ContactForm";
import "./ContactSection.scss";

function ContactSection() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-section__content">
                <h2 className="contact-section__heading">Let's Work Together</h2>
                <div className="contact-section__details">
                    <p className="contact-section__text">I am currently seeking a full-time or freelance full-stack web development job. If you like my work and is interested in my working for you or your company, feel free to leave me a message or send me an email, and I will try to get back to you as soon as possible.</p>
                    <div className="contact-section__contact-details-container">
                        <div className="contact-section__contact-detail">
                            <FontAwesomeIcon className="contact-section__contact-detail-icon" icon={faEnvelope} />
                            <p className="contact-section__text">alexanderhom19@gmail.com</p>
                        </div>     
                        <div className="contact-section__contact-detail">
                            <FontAwesomeIcon className="contact-section__contact-detail-icon" icon={faGithub} />
                            <a className="contact-section__link" href="https://github.com/robokae">GitHub</a> 
                        </div>
                        <div className="contact-section__contact-detail">
                            <FontAwesomeIcon className="contact-section__contact-detail-icon" icon={faLinkedin} />
                            <a className="contact-section__link" href="https://www.linkedin.com/in/alexander-hom-94811b188/">LinkedIn</a>
                        </div>
                    </div> 
                    <ContactForm className="contact-section__contact-form" />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;