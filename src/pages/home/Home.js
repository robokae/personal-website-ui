import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import LandingSection from "./landing/LandingSection";
import AboutSection from "./about/AboutSection";
import ExperienceSection from "./experience/ExperienceSection";
import ProjectsSection from "./projects/ProjectsSection";
import ContactSection from "./contact/ContactSection";
import Footer from "../../components/footer/Footer";

import "./Home.scss";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let sectionId = location.hash;
      let scrollToSection = document.querySelector(sectionId);

      if (scrollToSection) {
        scrollToSection.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="home-page">
      <LandingSection className="home-page__section" />
      <AboutSection className="home-page__section" />
      <ExperienceSection className="home-page__section" />
      <ProjectsSection className="home-page__section" />
      <ContactSection className="home-page__section" />
      <Footer />
    </div>
  );
}

export default Home;
