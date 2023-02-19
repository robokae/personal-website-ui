import styled from "styled-components";
import { DARK_THEME, LIGHT, LIGHT_THEME } from "../constants/AppConstants";
import {
  BORDER_RADIUS,
  MOON_ICON,
  SUN_ICON,
} from "../constants/StyleConstants";
import IconWithTooltip from "./icon/IconWithTooltip";

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
`;

function ThemeSwitcher({ onChangeTheme, theme, headerIsActive }) {
  const iconDetails = {
    name: theme === LIGHT ? MOON_ICON : SUN_ICON,
    brandIcon: false,
  };

  const tooltipDetails = {
    anchorId: "theme-switcher",
    content: theme === LIGHT ? DARK_THEME : LIGHT_THEME,
    place: "bottom",
  };

  return (
    <Button id="theme-switcher" onClick={onChangeTheme}>
      <IconWithTooltip
        iconDetails={iconDetails}
        tooltipDetails={tooltipDetails}
        color={
          headerIsActive
            ? ({ theme }) => theme.primaryFontCol
            : ({ theme }) => theme.headerInitialFontCol
        }
      />
    </Button>
  );
}

export default ThemeSwitcher;
