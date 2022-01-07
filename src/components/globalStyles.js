import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* General theme styling */
    body, .navbar-container {
        transition: all .2s ease-in-out;
    }

    body {
        background-color: ${({ theme }) => theme.primaryBgCol};
        color: ${({ theme }) => theme.primaryFontCol};
    }

    .dot {
        background-color: ${({ theme }) => theme.primaryFontCol};
    }

    /* Navbar theme styling */
    .navbar-container {
        background-color: ${({ theme }) => theme.primaryBgCol};
        border-bottom: 1px solid ${({ theme }) => theme.lineCol};
    }

    .nav-link, .logo {
        color: ${({ theme }) => theme.primaryFontCol};
    }

    .nav-link:hover {
        background-color: ${({ theme }) => theme.secondaryBgCol};
    }

    /* Theme toggler theme styling */
    .slider {
        background-color: ${({ theme }) => theme.themeTogglerBgCol};

        &::before {
            background-color: ${({ theme }) => theme.themeTogglerSliderBgCol};
        }
    }

    /* Home page theme styling */
    
    .landing-heading {
        color: ${({ theme }) => theme.primaryFontCol};
    }

    .landing-heading span {
        background: linear-gradient(98.68deg, #2566A3 0%, #942FE4 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .quick-link {
        color: ${({ theme }) => theme.primaryFontCol};
    }

    .contact-section {
        background-color: ${({ theme }) => theme.secondaryBgCol};
    }

    .about-me-section-content {
        background-color: ${({ theme }) => theme.secondaryBgCol};
    }

    .experience-options {

        .selected {
            background-color: ${({ theme }) => theme.secondaryBgCol};

            &::before {
                background-color: ${({ theme }) => theme.accentCol};
            }
        }
        
    }

    .experience-card {
        border: 1px solid ${({ theme }) => theme.lineCol};
    }

    .project-card-container {
        border: 1px solid ${({ theme }) => theme.lineCol};
    }

    /* Resume page theme styling */
    .resume-page-content a:hover {
        border-bottom: 1px solid ${({ theme }) => theme.primaryFontCol};
    }

    .contact-info a {
        color: ${({ theme }) => theme.primaryFontCol};
    }

    .resume-section-title {
        border-bottom: 1px solid ${({ theme }) => theme.primaryFontCol};
    }

    /* Footer styling */
    .footer-container {
        border-top: 1px solid ${({ theme }) => theme.lineCol};
    }

`;