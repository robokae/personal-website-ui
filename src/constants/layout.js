export const DeviceSize = {
  MOBILE_SM: "320",
  MOBILE_MD: "375",
  MOBILE_LG: "525",
  TABLET: "768",
  LAPTOP: "1024",
  LAPTOP_LG: "1440",
  DESKTOP: "2560",
};
export const Breakpoint = Object.freeze({
  MOBILE_S: `(max-width: ${DeviceSize.MOBILE_SM}px)`,
  MOBILE_MD: `(max-width: ${DeviceSize.MOBILE_MD}px)`,
  MOBILE_LG: `(max-width: ${DeviceSize.MOBILE_LG}px)`,
  TABLET: `(max-width: ${DeviceSize.TABLET}px)`,
  LAPTOP: `(max-width: ${DeviceSize.LAPTOP}px)`,
  LAPTOP_LG: `(max-width: ${DeviceSize.LAPTOP_LG}px)`,
  DESKTOP: `(max-width: ${DeviceSize.DESKTOP}px)`,
});

export const Layout = Object.freeze({
  CONTENT_MAX_WIDTH: `${DeviceSize.LAPTOP}px`,
  GAP_SM: ".5rem",
  GAP_MD: "1.75rem",
  GAP_LG: "3rem",
  GAP_XL: "5rem",
  PADDING_SM: "1rem",
  PADDING_MD: "2rem",
  PADDING_LG: "3rem",
  PADDING_XL: "5rem",
  SECTION_PADDING: "3rem",
  CARD_PADDING: "1.5rem",
  HEADER_HEIGHT: "4.5rem",
  FOOTER_HEIGHT: "8rem",
});
