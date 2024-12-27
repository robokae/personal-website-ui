import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        overscroll-behavior-y: none;
        background-color: ${({ theme }) => theme.primaryBgCol};
        color: ${({ theme }) => theme.primaryFontCol};
        font-family: "Plus Jakarta Sans", Arial, Helvetica, sans-serif;
        line-height: 1.75;
    }

    ::placeholder {
        color: ${({ theme }) => theme.secondaryFontCol};
    }

    .dot {
        background-color: ${({ theme }) => theme.primaryFontCol};
    }

    html {
        height: 100%;
        font-size: 100%;
    }

    h1, h2, h3, h4, h5 {
        width: 100%;
        font-weight: bold;
        // line-height: 1.3;
    }

    h1 {
        font-size: 3.052rem;
    }

    h2 {
        font-size: 2.441rem;
    }

    h3 {
        font-size: 1.953rem;
    }

    h4 {
        font-size: 1.563rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    a {
        text-decoration: none;
    }

    li, a {
        font-size: 1rem;
    }

    input, textarea, button {
        font-family: "Plus Jakarta Sans", Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }

    .tooltip-container .custom-tooltip {
        font-size: .8rem;
        line-height: normal;
    }

    @media screen and (max-width: 1024px) {
        /* Minor Third type scale */
        html {
            font-size: 100%; /* 16px */
        }

        h1 {
            font-size: 2.488rem;
        }

        h2 {
            font-size: 2.074rem;
        }

        h3 {
            font-size: 1.728rem;
        }

        h4 {
            font-size: 1.44rem;
        }

        h5 {
            font-size: 1.2rem;
        }

        a {
            text-decoration: none;
        }

        li {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 768px) {
        /* Major Second type scale */
        // html {
        //     font-size: 87.5%; /* 14px */
        // }

        h1 {
            font-size: 2.027rem;
        }

        h2 {
            font-size: 1.802rem;
        }

        h3 {
            font-size: 1.602rem;
        }

        h4 {
            font-size: 1.424rem;
        }

        h5 {
            font-size: 1.266rem;
        }

        a {
            text-decoration: none;
        }

        li {
            font-size: 1rem;
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
