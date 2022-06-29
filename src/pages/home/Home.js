import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import LandingSection from "./section/landing/LandingSection";
import AboutSection from "./section/about/AboutSection";
import ExperienceSection from "./section/experience/ExperienceSection";
import ProjectsSection from "./section/projects/ProjectsSection";
import ContactSection from "./section/contact/ContactSection";
import Footer from "../../components/footer/Footer";

import "../../scss/pages/_home.scss";

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            let sectionId = location.hash;
            let scrollToSection = document.querySelector(sectionId);

            if (scrollToSection) {
                scrollToSection.scrollIntoView();
            }
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [location,]);


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
