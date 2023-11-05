import styled from "styled-components";
import { ICON_SIZE } from "../../constants/StyleConstants";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.$size ?? ICON_SIZE};
  color: ${(props) =>
    props.$color ? props.$color : ({ theme }) => theme.primaryFontCol};
  cursor: ${(props) => props.$isClickable && "pointer"};
`;

const Icon = ({ icon, color, background, size, isClickable }) => {
  return (
    <IconContainer
      $color={color}
      $background={background}
      $size={size}
      $isClickable={isClickable}
    >
      {icon}
    </IconContainer>
  );
};

export default Icon;
