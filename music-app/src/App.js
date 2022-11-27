import { AppRoutes } from "./routes";
import GlobalStyles from "./components/styled-components/global-styles";
import { useState, useEffect } from "react";
import { ThemeContext, themes } from "./components/context";
import { Provider } from "react-redux";
import { store } from "./store";

export function App() {
  const [currentTheme, setCurrentTheme] = useState("");
  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setCurrentTheme(themes.light);
    } else {
      setCurrentTheme(themes.dark);
    }
  }, []);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      localStorage.setItem("theme", "light");
      return;
    }

    setCurrentTheme(themes.dark);
    localStorage.setItem("theme", "dark");
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <AppRoutes />
        <GlobalStyles />
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
