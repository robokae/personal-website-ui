import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import IconWithTooltip from "../components/icon/IconWithTooltip";
import { Link } from "../components/Link";
import { ICON, ICONTEXT, TEXT } from "../constants/AppConstants";

const IconTextLink = styled(Link)`
  display: flex;
  gap: 1.5rem;
`;

export const getLinkFromObject = (linkObj, headerState, displayTooltip) => {
  const linkType = linkObj.type.toLowerCase();
  switch (linkType) {
    case ICON:
      return (
        <Link
          key={linkObj.id}
          id={linkObj.tooltip.anchorId}
          to={linkObj.to}
          $isActive={headerState}
        >
          {displayTooltip && (
            <IconWithTooltip
              iconDetails={linkObj.icon}
              tooltipDetails={linkObj.tooltip}
            />
          )}
        </Link>
      );
    case TEXT:
      return (
        <Link key={linkObj.id} to={linkObj.to} $isActive={headerState}>
          {linkObj.name}
        </Link>
      );
    case ICONTEXT:
      return (
        <IconTextLink key={linkObj.id} to={linkObj.to} $isActive={headerState}>
          <FontAwesomeIcon icon={linkObj.icon} />
          {linkObj.name}
        </IconTextLink>
      );
    default:
      return null;
  }
};
