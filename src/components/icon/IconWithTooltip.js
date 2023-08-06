import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import Icon from "./Icon";
import { getIcon } from "../../util/IconUtil";

const StyledTooltip = styled(Tooltip)`
  background-color: ${({ theme }) => theme.tooltipBgCol};
  color: ${({ theme }) => theme.tooltipFontCol};
`;

function IconWithTooltip({ icon, tooltipDetails, color }) {
  return (
    <>
      <Icon icon={getIcon(icon)} color={color} />
      <StyledTooltip
        anchorId={tooltipDetails.anchorId}
        content={tooltipDetails.content}
        place={tooltipDetails.place}
      />
    </>
  );
}

export default IconWithTooltip;
