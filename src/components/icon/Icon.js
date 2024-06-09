import styled, { css } from "styled-components";
import { BORDER_RADIUS, ICON_SIZE } from "../../constants/StyleConstants";
import React from "react";

const defaultStyles = css`
  width: max-content;
  height: max-content;
  border-radius: ${BORDER_RADIUS};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${ICON_SIZE};
  color: ${({ theme }) => theme.primaryFontCol};
  cursor: ${(props) => props.clickable && "pointer"};
  box-sizing: border-box;
`;

const IconContainer = styled(({ children, ...props }) =>
  React.createElement("div", props, children)
)`
  ${defaultStyles};
`;

const Icon = ({ icon, clickable = false, ...props }) => {
  return (
    <IconContainer clickable={clickable} style={{ ...props }}>
      {icon}
    </IconContainer>
  );
};

export default Icon;
