import { createGlobalStyle } from "styled-components";

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

    /* Home page theme styling */
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
`;
