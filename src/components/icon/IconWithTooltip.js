import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import { FAB } from "../../constants/AppConstants";
import Icon from "./Icon";

const StyledTooltip = styled(Tooltip)`
  background-color: ${({ theme }) => theme.tooltipBgCol};
  color: ${({ theme }) => theme.tooltipFontCol};
`;

function IconWithTooltip({ iconDetails, tooltipDetails, color }) {
  return (
    <>
      <Icon
        icon={
          iconDetails.isBrandIcon ? [FAB, iconDetails.name] : iconDetails.name
        }
        $color={color}
      />
      <StyledTooltip
        anchorId={tooltipDetails.anchorId}
        content={tooltipDetails.content}
        place={tooltipDetails.place}
      />
    </>
  );
}

export default IconWithTooltip;
