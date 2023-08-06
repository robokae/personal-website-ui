import {
  StyledCardHeading,
  StyledPageHeading,
  StyledSectionHeading,
} from "./Heading.styles";

export const PageHeading = ({ color, children }) => {
  return <StyledPageHeading $color={color}>{children}</StyledPageHeading>;
};

export const SectionHeading = ({ color, children }) => {
  return <StyledSectionHeading $color={color}>{children}</StyledSectionHeading>;
};

export const CardHeading = ({ color, children }) => {
  return <StyledCardHeading $color={color}>{children}</StyledCardHeading>;
};
