import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./contact/Contact";

import home from "../../content/home/home.json";
import about from "../../content/home/about.json";
import experience from "../../content/home/experience.json";
import projects from "../../content/home/projects.json";
import contact from "../../content/home/contact.json";
import {
  ContentLayout,
  HeroLayout,
  PageContentLayout,
} from "../../components/layout/Layout";
import styled from "styled-components";
import {
  LARGE_GAP,
  MEDIA_QUERY_BREAKPOINT_MED,
  X_LARGE_PADDING,
} from "../../constants/StyleConstants";
import { PageHeading, SubHeading } from "../../components/typography/Heading";
import { heroHeadingColor } from "../../global/colors";

const Hero = styled(HeroLayout)`
  background: ${({ theme }) => theme.homePageHeroGradient};
`;

const Content = styled(ContentLayout)`
  height: max-content;
  padding: ${X_LARGE_PADDING} 0;
  justify-content: center;
  gap: ${LARGE_GAP};
`;

const MultiLineHeading = styled.div`
  width: 100%;
`;

const HeroHeading = styled(PageHeading)`
  text-shadow: 0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3);

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    text-align: left;
  }
`;

const HeroSubHeading = styled(SubHeading)`
  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    text-align: left;
  }
`;

function Home() {
  const location = useLocation();
  const sections = home.pageSections;
  const heroSection = sections.find((section) => section.name === "hero");
  const overviewSection = sections.find(
    (section) => section.name === "overview"
  );
  const reflectionSection = sections.find(
    (section) => section.name === "reflection"
  );
  const experienceSection = sections.find(
    (section) => section.name === "experience"
  );
  const projectsSection = sections.find(
    (section) => section.name === "projects"
  );
  const contactSection = sections.find((section) => section.name === "contact");

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
      <Hero>
        <Content>
          <MultiLineHeading>
            {heroSection.multiLineHeading.map((line, index) => (
              <HeroHeading
                $color={heroHeadingColor}
                $align="center"
                key={index}
              >
                {line}
              </HeroHeading>
            ))}
          </MultiLineHeading>
          <HeroSubHeading $align="center">
            {heroSection.subHeading}
          </HeroSubHeading>
        </Content>
      </Hero>
      <About content={about.content} />
      <Experience heading={experience.heading} content={experience.content} />
      <Projects heading={projects.heading} content={projects.content} />
      <Contact content={contact.content} />
    </PageContentLayout>
  );
}

export default Home;
