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

  // Check if the icon type (e.g., Font Awesome) is in the map
  if (icon[iconType] === null) {
    throw new Error("Icon type is not supported");
  }

  // Get the icon families (e.g., fas, fab for Font Awesome) for the icon type
  const iconFamilies = Object.keys(icon[iconType]);

  const iconDetails = {};
  iconDetails.type = iconType;
  iconDetails.families = iconFamilies;

  // Get the icon name from the map
  let iconName =
    iconFamilies.length > 1
      ? icon[iconType][getIconFamily(iconDetails, name)][name]
      : icon[iconType][name];

  if (!iconName) {
    throw new Error(`Icon not found: ${name}`);
  }

  iconDetails.name = iconName;

  return getIconFromType(iconDetails);
};

const getIconFamily = (iconDetails, name) => {
  let family = iconDetails.families.find(
    (family) => icon[iconDetails.type][family][name]
  );

  if (family) {
    iconDetails.family = family;
    return family;
  } else {
    throw new Error(`Icon not found: ${name}`);
  }
};

const getIconFromType = (iconDetails) => {
  switch (iconDetails.type) {
    case FONT_AWESOME:
      return <FontAwesomeIcon icon={[iconDetails.family, iconDetails.name]} />;
    default:
      return null;
  }
};
