import styled, { css } from "styled-components";
import { MED_GAP } from "../../constants/StyleConstants";

export const PageHeading = styled.h1`
  color: ${(props) =>
    props.$color ? props.$color : ({ theme }) => theme.primaryFontCol};
  ${(props) =>
    props.$align &&
    css`
      text-align: ${(props) => props.$align};
    `};
`;

export const SectionHeading = styled.h2`
  color: ${(props) =>
    props.$color ? props.$color : ({ theme }) => theme.primaryFontCol};
`;

export const CardHeading = styled.h4`
  width: 100%;
  padding-bottom: 0.5rem;
  display: flex;
  place-items: center;
  gap: ${MED_GAP};
  color: ${(props) =>
    props.$color ? props.$color : ({ theme }) => theme.primaryFontCol};
  ${(props) =>
    props.$border &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.lineCol};
    `};
`;

export const SubHeading = styled.h5`
  font-weight: normal;
  ${(props) =>
    props.$align &&
    css`
      text-align: ${(props) => props.$align};
    `};
`;

export const LargeText = styled.h4`
  font-weight: normal;
`;
