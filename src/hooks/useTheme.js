import { useEffect, useState } from "react";

const THEME = "theme";
const DARK = "dark";
const LIGHT = "light";

const useTheme = () => {
  const [theme, setTheme] = useState(DARK);

  const updateThemeValue = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem(THEME, newTheme);
  };

  const changeTheme = () => {
    theme === LIGHT ? updateThemeValue(DARK) : updateThemeValue(LIGHT);
  };

  useEffect(() => {
    const persistedTheme = localStorage.getItem(THEME);
    persistedTheme && setTheme(persistedTheme);
  }, []);

  return [theme, changeTheme];
};

export default useTheme;
