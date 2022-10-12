import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme.mjs";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lightTheme, darkTheme } from "./themes/theme.mjs";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./common/router.mjs";

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const routerDependencies = { toggleTheme };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme(isDarkTheme)}>
        <RouterProvider router={router(routerDependencies)} />
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
