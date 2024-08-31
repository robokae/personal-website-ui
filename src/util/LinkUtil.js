import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "../components/Link";
import { ICONTEXT, TEXT } from "../constants/AppConstants";

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
export const getLinkFromJson = (linkJson) => {
  const linkType = linkJson.type;
  if (linkType === null) {
    return null;
  }
  switch (linkType.toLowerCase()) {
    case TEXT:
      return (
        <Link key={linkJson.id} to={linkJson.to}>
          {linkJson.name}
        </Link>
      );
    case ICONTEXT:
      return (
        <IconTextLink key={linkJson.id} to={linkJson.to}>
          <FontAwesomeIcon icon={linkJson.icon} />
          {linkJson.name}
        </IconTextLink>
      );
    default:
      return null;
  }
};
