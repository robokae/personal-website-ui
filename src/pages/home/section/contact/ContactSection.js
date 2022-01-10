import ContactForm from "./components/contactForm/ContactForm";
import "./ContactSection.scss";

function ContactSection() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-section__content">
                <h2 className="contact-section__heading">Let's Work Together</h2>
                <div className="contact-section__details">
                    <p className="contact-section__text">I am currently seeking a full-time or freelance full-stack web development job. If you like my work and is interested in my working for you or your company, feel free to leave me a message or send me an email, and I will try to get back to you as soon as possible</p>
                    <ContactForm className="contact-section__contact-form" />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;