import { useEffect, useState } from "react";
import { DARK, LIGHT, THEME } from "../constants/AppConstants";

const useTheme = () => {
  const [theme, setTheme] = useState(LIGHT);

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
