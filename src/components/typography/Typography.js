import React from "react";
import styled, { css } from "styled-components";
import PropTypes, { oneOf } from "prop-types";

const baseStyles = css`
  width: 100%;
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.primaryFontCol};
`;

const DEFAULT_TAG = "p";
const TAG_VARIANTS = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];

const DynamicTypography = styled(({ tag, children, ...props }) =>
  React.createElement(tag, props, children)
)`
  ${baseStyles}
`;

export default function Typography({ tag, children, ...props }) {
  return (
    <DynamicTypography tag={tag ?? DEFAULT_TAG} style={{ ...props }}>
      {children}
    </DynamicTypography>
  );
}

Typography.propTypes = {
  tag: oneOf(TAG_VARIANTS),
};
