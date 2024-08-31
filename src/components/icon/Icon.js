import styled, { css } from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Style, IconSize } from "constants/style";

const defaultStyles = css`
  width: max-content;
  height: max-content;
  border-radius: ${Style.BORDER_RADIUS};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${IconSize.SIZE_SM};
  color: ${({ theme }) => theme.primaryFontCol};
  box-sizing: border-box;
  ${(props) =>
    props.$clickable &&
    css`
      cursor: pointer;
    `}
`;

const IconContainer = styled(({ children, ...props }) =>
  React.createElement("div", props, children)
)`
  ${defaultStyles};
`;

const Icon = ({ name, clickable, children, ...props }) => {
  return (
    <IconContainer $clickable={clickable} style={{ ...props }}>
      <FontAwesomeIcon icon={name} fixedWidth />
    </IconContainer>
  );
};

export default Icon;
