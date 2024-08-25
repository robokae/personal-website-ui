import styled from "styled-components";
import { LIGHT } from "../../constants/AppConstants";
import { BORDER_RADIUS } from "../../constants/StyleConstants";
import Icon from "../icon/Icon";

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
`;

function ThemeSwitcher({ onChangeTheme, theme, isBgTransparent }) {
  const iconName = theme === LIGHT ? "MOON_ICON" : "SUN_ICON";

  return (
    <Button id="theme-switcher" onClick={onChangeTheme}>
      <Icon icon={iconName} />
    </Button>
  );
}

export default ThemeSwitcher;
