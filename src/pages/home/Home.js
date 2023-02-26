import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import LandingSection from "./LandingSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./contact/ContactSection";
import styled from "styled-components";

import landing from "../../content/home/landing.json";
import about from "../../content/home/about.json";
import reflection from "../../content/home/reflection.json";
import experience from "../../content/home/experience.json";
import projects from "../../content/home/projects.json";

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
      <LandingSection
        className="home-page__section"
        content={landing.content}
      />
      <AboutSection className="home-page__section" content={about.content} />
      <ExperienceSection
        className="home-page__section"
        content={experience.content}
      />
      <ProjectsSection
        className="home-page__section"
        content={projects.content}
      />
      <ContactSection className="home-page__section" />
    </Container>
  );
}

export default Home;
