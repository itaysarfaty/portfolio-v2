import { ThemeProvider } from "styled-components";
import { theme } from "./../themes/theme.mjs";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lightTheme, darkTheme } from "./../themes/theme.mjs";
import { useState } from "react";
import { Home } from "./Home.js";

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme(isDarkTheme)}>
        <Home themeToggle={toggleTheme} />
        <Helmet>
          <meta
            name="theme-color"
            content={isDarkTheme ? darkTheme.secondary : lightTheme.secondary}
          />
        </Helmet>
      </ThemeProvider>
    </HelmetProvider>
  );
};
