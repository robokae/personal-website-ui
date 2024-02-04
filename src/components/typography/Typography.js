import styled, { css } from "styled-components";

const baseStyles = css`
  width: 100%;
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.primaryFontCol};
  ${(props) =>
    props.align &&
    css`
      text-align: ${(props) => props.align};
    `};
`;

export const PageHeading = styled.h1`
  ${baseStyles}
`;

export const SectionHeading = styled.h2`
  ${baseStyles}
`;

export const MultiLineHeading = styled.div`
  width: 100%;
`;

export const CardHeading = styled.h3`
  ${baseStyles}
  ${(props) =>
    props.border &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.lineCol};
    `};
`;

export const SubHeading = styled.h5`
  ${baseStyles}
  font-weight: normal;
`;

export const LargeText = styled.h3`
  ${baseStyles}
  font-weight: normal;
`;
