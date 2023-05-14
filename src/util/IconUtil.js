import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../content/icon.json";

const { iconMap } = icon;

export const getFontAwesomeIcon = (iconName) => {
  if (iconMap[iconName]) {
    return <FontAwesomeIcon icon={iconMap[iconName]} />;
  }
  return null;
};
