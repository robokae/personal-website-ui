import { useState } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { StyledButton } from "../../../../../../components/globalStyles";
import "./ContactForm.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        // prevent page from refreshing after form submit
        e.preventDefault();

        // update form submit state
        setFormSubmitted(true);

        const WAIT_TIME = 3000;
        // revert to previous state after WAIT_TIME milliseconds
        setTimeout(() => {
            setFormSubmitted(false)
        }, WAIT_TIME);
    }

    return (
        <div className="contact-form">
            {formSubmitted == false
                ? (
                    <form className="contact-form__unsubmitted" onSubmit={handleSubmit}>
                        <div className="contact-form__input-container">
                            <label 
                                htmlFor="contact-form__name" 
                                className="contact-form__label"
                            >
                                Name
                            </label>
                            <input type="text" id="contact-form__name" className="contact-form__input"/> 
                        </div>

                        <div className="contact-form__input-container">
                            <label 
                                htmlFor="contact-form__email" 
                                className="contact-form__label"
                            >
                                Email
                            </label>
                            <input type="text" id="contact-form__email" className="contact-form__input"/>
                        </div>

                        <div className="contact-form__input-container">
                            <label 
                                htmlFor="contact-form__message" 
                                className="contact-form__label"
                            >
                                Message
                            </label>
                            <textarea id="contact-form__message" className="contact-form__input contact-form__input--message"></textarea> 
                        </div>

                        <StyledButton type="submit" className="contact-form__submit-button">Submit</StyledButton>
                    </form>)
                : (
                    <div className="contact-form__submitted">
                        <FontAwesomeIcon className="contact-form__submitted-icon" icon={faCheckCircle} />
                        <p className="contact-form__submitted-confirmation-message">Your message has been sent!</p>
                    </div>
                )
            }
        </div>
    );
}

export default ContactForm;