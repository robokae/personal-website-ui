import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Style, IconSize } from "constants/style";

const Icon = styled(FontAwesomeIcon)`
  border-radius: ${Style.BORDER_RADIUS};
  font-size: ${IconSize.SIZE_SM};
  color: ${({ theme }) => theme.primaryFontCol};
  ${(props) =>
    props.$clickable &&
    css`
      cursor: pointer;
    `}
`;

export default Icon;
