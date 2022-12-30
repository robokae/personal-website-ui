function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__content">
        <p className="footer-container__text">Made with React and Sass</p>
        <div>&#8226;</div>
        <p className="footer-container__text">
          Alexander Hom {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
