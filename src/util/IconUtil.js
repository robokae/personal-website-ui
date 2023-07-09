import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../content/icon.json";
import { FAB } from "../constants/AppConstants";

const { iconMap } = icon;

export const getFontAwesomeIcon = (iconName, isBrandIcon) => {
  if (iconMap[iconName]) {
    return (
      <FontAwesomeIcon
        icon={isBrandIcon ? [FAB, iconMap[iconName]] : iconMap[iconName]}
      />
    );
  }
  return null;
};
