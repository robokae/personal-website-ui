import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ICON_SIZE } from "../../constants/StyleConstants";

const Icon = styled(FontAwesomeIcon)`
  font-size: ${ICON_SIZE};
  color: ${(props) => (props.$color ? props.$color : "")};
  cursor: ${(props) => (props.$isClickable ? "pointer" : "")};
`;

export default Icon;
