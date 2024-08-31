const sizes = {
  MOBILE_SM: "320px",
  MOBILE_MD: "375px",
  MOBILE_LG: "425px",
  TABLET: "768px",
  LAPTOP: "1024px",
  LAPTOP_LG: "1440px",
  DESKTOP: "2560px",
};
export const Breakpoint = Object.freeze({
  MOBILE_S: `(max-width: ${sizes.MOBILE_SM})`,
  MOBILE_MD: `(max-width: ${sizes.MOBILE_MD})`,
  MOBILE_LG: `(max-width: ${sizes.MOBILE_LG})`,
  TABLET: `(max-width: ${sizes.TABLET})`,
  LAPTOP: `(max-width: ${sizes.LAPTOP})`,
  LAPTOP_LG: `(max-width: ${sizes.LAPTOP_LG})`,
  DESKTOP: `(max-width: ${sizes.DESKTOP})`,
});

export const Layout = Object.freeze({
  CONTENT_MAX_WIDTH: sizes.LAPTOP_LG,
  GAP_SM: ".5rem",
  GAP_MD: "1.75rem",
  GAP_LG: "3rem",
  GAP_XL: "5rem",
  PADDING_SM: "1rem",
  PADDING_MD: "2rem",
  PADDING_LG: "3rem",
  PADDING_XL: "5rem",
  SECTION_PADDING: "3.75rem",
  CARD_PADDING: "1.5rem",
  CAROUSEL_PADDING: "3.5rem",
  HEADER_HEIGHT: "4.5rem",
  FOOTER_HEIGHT: "8rem",
});
