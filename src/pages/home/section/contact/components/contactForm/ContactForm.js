import axios from "axios";
import { useState } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { StyledButton } from "../../../../../../components/globalStyles";
import "./ContactForm.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactForm() {
    const handleSubmitContactForm = (event) => {
        event.preventDefault();
        const url = "http://localhost:8080"
        let dataToSend = {
            "name": event.target.name.value,
            "email": event.target.email.value,
            "message": event.target.message.value
        };

        axios.post(`${url}/message`, dataToSend);
    };

    return (
        <form className="contact-form"  onSubmit={handleSubmitContactForm}>
            <div className="contact-form__input-container">
                <label 
                    htmlFor="contact-form__name" 
                    className="contact-form__label"
                >
                    Name
                </label>
                <input 
                    type="text" 
                    id="contact-form__name" 
                    className="contact-form__input"
                    name="name"
                /> 
            </div>

            <div className="contact-form__input-container">
                <label 
                    htmlFor="contact-form__email" 
                    className="contact-form__label"
                >
                    Email
                </label>
                <input 
                    type="text" 
                    id="contact-form__email" 
                    className="contact-form__input"
                    name="email"
                />
            </div>

            <div className="contact-form__input-container">
                <label 
                    htmlFor="contact-form__message" 
                    className="contact-form__label"
                >
                    Message
                </label>
                <textarea 
                    id="contact-form__message" 
                    className="contact-form__input contact-form__input--message"
                    name="message"
                ></textarea> 
            </div>

            <StyledButton type="submit" className="contact-form__submit-button">Submit</StyledButton>
        </form>
    );
}

export default ContactForm;