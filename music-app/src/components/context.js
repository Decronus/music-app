import { createContext, useContext } from "react";

export const themes = {
  dark: {
    containerBackgroundColor: "#181818",
    containerColor: "#FFFFFF",
    mainNavBackgroundColor: "#1c1c1c",
    menuLinkColor: "#ffffff",
    centerblockSearchBorderBottom: "1px solid #4e4e4e",
    searchTextColor: "#ffffff",
    placeholderColor: "#ffffff",
    activeFilterButtonBorderColor: "1px solid #AD61FF",
    nonActiveFilterButtonBorderColor: "1px solid #ffffff",
    activeFilterButtonTextColor: "#AD61FF",
    nonActiveFilterButtonTextColor: "#ffffff",
    hoverBorderColor: "#d9b6ff",
    avatarColor: "#313131",
    contentTitleColor: "#4E4E4E",
    barPlayerProgressColor: "#2E2E2E",
  },
  light: {
    containerBackgroundColor: "#FFFFFF",
    containerColor: "#000000",
    mainNavBackgroundColor: "#F6F5F3",
    menuLinkColor: "#000000",
    centerblockSearchBorderBottom: "1px solid #D9D9D9",
    searchTextColor: "#000000",
    placeholderColor: "#000000",
    activeFilterButtonBorderColor: "1px solid #AD61FF",
    nonActiveFilterButtonBorderColor: "1px solid #000000",
    activeFilterButtonTextColor: "#AD61FF",
    nonActiveFilterButtonTextColor: "#000000",
    hoverBorderColor: "#580EA2",
    avatarColor: "#F6F5F3",
    contentTitleColor: "#B1B1B1",
    barPlayerProgressColor: "#D9D9D9",
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) return theme.light;

  return theme;
};
