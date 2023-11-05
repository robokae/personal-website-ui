import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEFAULT_ICON_TYPE, FONT_AWESOME } from "../constants/StyleConstants";
import icon from "../content/icon.json";

/**
 * Gets icon from icon map
 * @param name
 * @param type
 * @returns icon object
 */
export const getIcon = (name, type) => {
  // If no icon type is provided in the arguments, use the default type
  const iconType = type ?? DEFAULT_ICON_TYPE;

  // Check if the icon type (e.g., Font Awesome) is in the icon map
  if (!icon[iconType]) {
    throw new Error("Icon type is not supported");
  }

  // Get the icon styles (e.g., fas, fab for Font Awesome) for the icon type
  const iconStyles = Object.keys(icon[iconType]);

  const iconDetails = {};
  iconDetails.type = iconType;
  iconDetails.styles = iconStyles;

  // Get the icon name from the map
  let iconName =
    iconStyles.length > 1
      ? icon[iconType][getIconStyle(iconDetails, name)][name]
      : icon[iconType][name];

  if (!iconName) {
    throw new Error(`Icon not found: ${name}`);
  }

  iconDetails.name = iconName;

  return getIconFromType(iconDetails);
};

const getIconStyle = (iconDetails, name) => {
  let style = iconDetails.styles.find(
    (style) => icon[iconDetails.type][style][name]
  );

  if (style) {
    iconDetails.style = style;
    return style;
  } else {
    throw new Error(`Icon not found: ${name}`);
  }
};

const getIconFromType = (iconDetails) => {
  switch (iconDetails.type) {
    case FONT_AWESOME:
      return <FontAwesomeIcon icon={[iconDetails.style, iconDetails.name]} />;
    default:
      return null;
  }
};
