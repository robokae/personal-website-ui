import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../content/icon.json";

export const getFontAwesomeIcon = (iconName) => {
  if (iconMap[iconName]) {
    return <FontAwesomeIcon icon={iconMap[iconName]} />;
  }
  return null;
};
