import styled from "styled-components";

export const StyledPageHeading = styled.h1`
  color: ${(props) =>
    props.$color ? props.$color : ({ theme }) => theme.primaryFontCol};
`;

export const StyledSectionHeading = styled.h2`
  color: ${(props) =>
    props.$color ? props.$color : ({ theme }) => theme.primaryFontCol};
`;

export const StyledCardHeading = styled.h4`
  color: ${(props) =>
    props.$color ? props.$color : ({ theme }) => theme.primaryFontCol};
`;
