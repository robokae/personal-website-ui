import styled from "styled-components";
import { DARK_THEME, LIGHT, LIGHT_THEME } from "../../constants/AppConstants";
import { BORDER_RADIUS } from "../../constants/StyleConstants";
import IconWithTooltip from "../icon/IconWithTooltip";

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
`;

function ThemeSwitcher({ onChangeTheme, theme, isBgTransparent }) {
  const iconName = theme === LIGHT ? "MOON_ICON" : "SUN_ICON";

  const tooltipDetails = {
    anchorId: "theme-switcher",
    content: theme === LIGHT ? DARK_THEME : LIGHT_THEME,
    place: "bottom",
  };

  return (
    <Button id="theme-switcher" onClick={onChangeTheme}>
      <IconWithTooltip
        icon={iconName}
        tooltipDetails={tooltipDetails}
        color={
          isBgTransparent
            ? ({ theme }) => theme.headerInitialFontCol
            : ({ theme }) => theme.primaryFontCol
        }
      />
    </Button>
  );
}

export default ThemeSwitcher;
