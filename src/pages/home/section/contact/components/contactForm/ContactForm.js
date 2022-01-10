import "./ContactForm.scss";

function ContactForm() {
    return (
        <form className="contact-form">
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

            <button type="submit" className="contact-form__submit-button">Submit</button>
        </form>
    );
}

export default ContactForm;