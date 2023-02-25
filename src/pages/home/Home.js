import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import LandingSection from "./LandingSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./contact/ContactSection";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    <Container>
      <LandingSection className="home-page__section" />
      <AboutSection className="home-page__section" />
      <ExperienceSection className="home-page__section" />
      <ProjectsSection className="home-page__section" />
      <ContactSection className="home-page__section" />
    </Container>
  );
}

export default Home;
