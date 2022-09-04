import "../../scss/layout/_footer.scss";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-container__content">
                <p className="footer-container__text">Made with React, Sass, and Spring Boot</p>
                <p className="footer-container__text-separator">&#8226;</p>
                <p className="footer-container__text">Alexander Hom 2022</p>
            </div>
        </div>
    );
}

export default Footer;