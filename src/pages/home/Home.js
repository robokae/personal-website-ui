import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Landing from "./Landing";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./contact/Contact";

import landing from "../../content/home/landing.json";
import about from "../../content/home/about.json";
import reflection from "../../content/home/reflection.json";
import experience from "../../content/home/experience.json";
import projects from "../../content/home/projects.json";
import Reflection from "../../components/home/Reflection";
import contact from "../../content/home/contact.json";
import { PageContentLayout } from "../../components/layout/Layout";

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
    <PageContentLayout>
      <Landing content={landing.content} />
      <About content={about.content} />
      <Reflection content={reflection.content} />
      <Experience heading={experience.heading} content={experience.content} />
      <Projects heading={projects.heading} content={projects.content} />
      <Contact content={contact.content} />
    </PageContentLayout>
  );
}

export default Home;
