import styled, { createGlobalStyle } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.accentCol};
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: ${({ theme }) => theme.primaryBgCol};
  border: transparent;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

export const GlobalStyles = createGlobalStyle`
    /* General theme styling */
    body, .navbar-container {
        /* transition: all .25s ease-in-out; */
    }

    body {
        background-color: ${({ theme }) => theme.primaryBgCol};
        color: ${({ theme }) => theme.primaryFontCol};
    }

    ::placeholder {
        color: ${({ theme }) => theme.secondaryFontCol};
    }

    .dot {
        background-color: ${({ theme }) => theme.primaryFontCol};
    }

    .tooltip-container .custom-tooltip {
        background-color: ${({ theme }) => theme.tooltipBgCol};
        color: ${({ theme }) => theme.tooltipFontCol};
        opacity: 1;
    }

    /* Navbar theme styling */
    .header {
        &--initial {
            border-bottom: 1px solid transparent;
        }

        &--active {
            background-color: ${({ theme }) => theme.primaryBgCol};
            border-bottom: 1px solid ${({ theme }) => theme.lineCol};
        }

        &__link, &__logo, &__icon {
            &--initial {
                color: ${({ theme }) => theme.headerInitialFontCol};
            }

            &--active {
                color: ${({ theme }) => theme.primaryFontCol};
            }
        }

        &__link:hover {
            &--initial {

            }

            &--active {
                background-color: ${({ theme }) => theme.secondaryBgCol};
            }
        }

        /* Theme toggler theme styling */
        &__theme-toggler {
            &--initial {
                color: ${({ theme }) => theme.headerInitialFontCol};
            }

            &--active {
                color: ${({ theme }) => theme.primaryFontCol};

                &:hover {
                    background-color: ${({ theme }) => theme.secondaryBgCol};
                }
            }
        }
    }

    /* Slide out menu styling */
    .slide-out-menu {
        background-color: ${({ theme }) => theme.primaryBgCol};
        border-left: 1px solid ${({ theme }) => theme.lineCol};

        &__heading {
            border-bottom: 1px solid ${({ theme }) => theme.lineCol};
        }

        &__option {
            &:hover {
                background-color: ${({ theme }) => theme.secondaryBgCol};
            }
        }

        &__link {
            color: ${({ theme }) => theme.primaryFontCol};
        }
    }



    /* Home page theme styling */
    .landing-section {
        background: linear-gradient(to right, #348fe3 0%, #942FE4 100%);

        &__heading {
            color: #bde7f4;
            text-shadow: .25rem .25rem 2rem rgba(0,0,0,0.3);

            &--highlight {
                color: ${({ theme }) => theme.accentCol};
            }
        }

        &__quick-link {
            color: ${({ theme }) => theme.primaryFontCol};
        }

        &__quick-link-icon {
            color: ${({ theme }) => theme.primaryFontCol};

        }
    }

    .about-me-section {
        background-color: ${({ theme }) => theme.secondaryBgCol};

        &__text-container {
            border-left: 1px solid ${({ theme }) => theme.lineCol};
        }

        &__icon {
            color: ${({ theme }) => theme.accentCol};
            filter: drop-shadow(0 0 2.75rem ${({ theme }) => theme.accentCol});
        }
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

        &__experience-cards {
            @media screen and (max-width: 768px) {
                border: 1px solid ${({ theme }) => theme.lineCol};
            }

        }

        &__experience-card {
            border: 1px solid ${({ theme }) => theme.lineCol};

            @media screen and (max-width: 768px) {
                border: none;

                :not(:last-of-type) {
                    border-bottom: 1px solid ${({ theme }) => theme.lineCol};
                }
            }
        }

        &__experience-card-text {
            color: ${({ theme }) => theme.secondaryFontCol};
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

        &__tag {
            color: ${({ theme }) => theme.secondaryFontCol};
            border: 1px solid ${({ theme }) => theme.lineCol};
        }

        &__project-link {
            color: ${({ theme }) => theme.accentCol};
            border: 1px solid ${({ theme }) => theme.accentCol};

            &:hover {
                color: ${({ theme }) => theme.primaryBgCol};
                background-color: ${({ theme }) => theme.accentCol};
            }

            &--secondary {
                color: ${({ theme }) => theme.secondaryFontCol};
                border: 1px solid ${({ theme }) => theme.secondaryFontCol};

                &:hover {
                    color: ${({ theme }) => theme.primaryBgCol};
                    background-color: ${({ theme }) => theme.secondaryFontCol};
                }
            }
        }

        /* &__text {
            color: ${({ theme }) => theme.secondaryFontCol};
        } */
    }

    .contact-section {
        &__contact-details-container {
            /* border: 1px solid ${({ theme }) => theme.lineCol}; */
            border-left: none;
            border-right: none;
        }

        &__link {
            color: ${({ theme }) => theme.primaryFontCol};
        }

        &__email-popup {
            background-color: ${({ theme }) => theme.secondaryBgCol};
        }
    }

    .contact-form {
        border: 1px solid ${({ theme }) => theme.lineCol};
        background-color: ${({ theme }) => theme.secondaryBgCol};

        &__label {
            color: ${({ theme }) => theme.secondaryFontCol};
        }

        &__input {
            background-color: ${({ theme }) => theme.primaryBgCol};
            color: ${({ theme }) => theme.primaryFontCol};
            border: 1px solid ${({ theme }) => theme.lineCol};

            &:focus {
                border-color: ${({ theme }) => theme.accentCol};
            }
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

    /* Login page theme styling */
    .login-page {
        &__login-container {
            border: 1px solid ${({ theme }) => theme.lineCol};
        }

        &__input {
            border: 1px solid ${({ theme }) => theme.lineCol};
            background-color: ${({ theme }) => theme.primaryBgCol};
            color: ${({ theme }) => theme.primaryFontCol};

            &:focus {
                border-color: ${({ theme }) => theme.accentCol};
            }
        }

        &__submit-button {
            color: ${({ theme }) => theme.primaryBgCol};
            background-color: ${({ theme }) => theme.accentCol};
        }
    }

    /* Blog page styling */
    .blog-page {
        input {
            border-color: transparent;
            background-color: ${({ theme }) => theme.primaryBgCol};
            color: ${({ theme }) => theme.primaryFontCol};
        }

        a {
            color: ${({ theme }) => theme.primaryFontCol};
        }

        &__icon {
            color: ${({ theme }) => theme.primaryFontCol};
        }

        &__search-bar,
        &__email-updates-input-container {
            border: 1px solid ${({ theme }) => theme.lineCol};
        }

        @media screen and (max-width: 980px) {
            .blog-page {
                &__side-menu-container {
                    border-bottom: 1px solid ${({ theme }) => theme.lineCol};
                }
            } 
        }
    }

    .create-post-page {
        input, textarea {
            color: ${({ theme }) => theme.primaryFontCol};
            background-color: ${({ theme }) => theme.primaryBgCol};
            border: 1px solid ${({ theme }) => theme.lineCol};
        }
    }

    .text-editor {
        &__num-words {
            color: ${({ theme }) => theme.secondaryFontCol};
        }        

        &__action-button {
            border: 1px solid ${({ theme }) => theme.accentCol};
            background-color: ${({ theme }) => theme.primaryBgCol};
            color: ${({ theme }) => theme.accentCol};

            &:hover {
                background-color: ${({ theme }) => theme.accentCol};
                color: ${({ theme }) => theme.primaryBgCol};
            }

            &--warning {
                border-color: ${({ theme }) => theme.warningCol};
                color: ${({ theme }) => theme.warningCol};

                &:hover {
                    background-color: ${({ theme }) => theme.warningCol};
                }
            }

        }
    }

    .post {
        /* &:hover {
            border: 1px solid ${({ theme }) => theme.lineCol};
        } */
        border-bottom: 1px solid ${({ theme }) => theme.lineCol};

        &--no-border {
            border-bottom: none;
        }

        &__publish-date {
            color: ${({ theme }) => theme.secondaryFontCol};
        }
    }

    /* Footer styling */
    .footer-container {
        border-top: 1px solid ${({ theme }) => theme.lineCol};

        &__text-separator {
            color: ${({ theme }) => theme.primaryFontCol};
        }
    }
`;
