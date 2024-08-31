import styled from "styled-components";
import { BORDER_RADIUS } from "constants/style";
import Icon from "../icon/Icon";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
`;

function ThemeSwitcher({ onChangeTheme, theme, isBgTransparent }) {
  const iconName = theme === "light" ? faMoon : faSun;

  return (
    <Button id="theme-switcher" onClick={onChangeTheme}>
      <Icon icon={iconName} />
    </Button>
  );
}

export default ThemeSwitcher;
