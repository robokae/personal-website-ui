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
    .landing-section {
        &__heading {
            color: ${({ theme }) => theme.primaryFontCol};

            &--highlight {
                background: linear-gradient(98.68deg, #2566A3 0%, #942FE4 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        &__quick-link-icon {
            color: ${({ theme }) => theme.primaryFontCol};

        }
    }

    .about-me-section {
        background-color: ${({ theme }) => theme.secondaryBgCol};
        /* &__content {
        } */
    }

    .my-experience-section {
        &__experience-details-options {
            &--selected {
                background-color: ${({ theme }) => theme.secondaryBgCol};

                &::before {
                    background-color: ${({ theme }) => theme.accentCol};
                }
            }
        }

        &__experience-card {
            border: 1px solid ${({ theme }) => theme.lineCol};
        }
    }

   .projects-section {
       background-color: ${({ theme }) => theme.secondaryBgCol};
   } 

    .project-card-container {
        background-color: ${({ theme }) => theme.primaryBgCol};
        border: 1px solid ${({ theme }) => theme.lineCol};

        &__thumbnail {
            border-bottom: 1px solid ${({ theme }) => theme.lineCol};
        }

        &__project-link {
            color: ${({ theme }) => theme.primaryFontCol};

            /* &:hover {
                border-bottom: 2px solid ${({ theme }) => theme.primaryFontCol};
            } */
        }


    }

    .contact-form {
        border: 1px solid ${({ theme }) => theme.lineCol};
        background-color: ${({ theme }) => theme.secondaryBgCol};

        &__input {
            background-color: ${({ theme }) => theme.primaryBgCol};
            color: ${({ theme }) => theme.primaryFontCol};
            border: 1px solid ${({ theme }) => theme.lineCol};

            &:focus {
                border-color: ${({ theme }) => theme.accentCol};
            }
        }

        &__submit-button {
            background-color: ${({ theme }) => theme.accentCol};
            color: ${({ theme }) => theme.primaryBgCol};
            border: 1px solid ${({ theme }) => theme.accentCol};
        }
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

        &__text-separator {
            background-color: ${({ theme }) => theme.primaryFontCol};
        }
    }

`;