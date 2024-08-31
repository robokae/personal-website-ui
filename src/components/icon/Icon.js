import styled, { css } from "styled-components";
import { BORDER_RADIUS, ICON_SIZE } from "constants/StyleConstants";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultStyles = css`
  width: max-content;
  height: max-content;
  border-radius: ${BORDER_RADIUS};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${ICON_SIZE};
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
