import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "../components/Link";
import { ICON, ICONTEXT, TEXT } from "../constants/AppConstants";
import Icon from "../components/icon/Icon";
import { getIcon } from "./IconUtil";

const IconTextLink = styled(Link)`
  display: flex;
  gap: 1.5rem;
`;

/**
 * Converts a JSON to a React Router Link object
 * @example
 * "link": {
 *   "id": "id",
 *   "type": "text"|"icon"|"icontext",
 *   "name": "linkTitle",
 *   "to": "linkUrl",
 *   "icon": {
 *      "name": "iconName",
 *      "isBrandIcon": "isFontAwesomeBrandIcon"
 *   }
 * }
 * @param linkJson link in JSON format
 * @param linkColor custom text color for Link
 */
export const getLinkFromJson = (linkJson, linkColor) => {
  const linkType = linkJson.type;
  if (linkType === null) {
    return null;
  }
  switch (linkType.toLowerCase()) {
    case ICON:
      return (
        <Link
          key={linkJson.id}
          id={linkJson.tooltip.anchorId}
          to={linkJson.to}
          $textColor={linkColor}
        >
          <Icon icon={getIcon(linkJson.icon)} color={linkColor} />
        </Link>
      );
    case TEXT:
      return (
        <Link key={linkJson.id} to={linkJson.to} $textColor={linkColor}>
          {linkJson.name}
        </Link>
      );
    case ICONTEXT:
      return (
        <IconTextLink key={linkJson.id} to={linkJson.to} $textColor={linkColor}>
          <FontAwesomeIcon icon={linkJson.icon} />
          {linkJson.name}
        </IconTextLink>
      );
    default:
      return null;
  }
};
