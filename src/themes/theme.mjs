// Screens
export const smScreen = "480px";
export const mdScreen = "769px";
export const lgScreen = "1024px";

export const darkTheme = {
  primary: "#0F0F0F",
  secondary: "#111111",
  tertiary: "#ffffff",

  // primary: "#080418",
  // secondary: "#0A061D",
  // tertiary: "#ffffff",
};

export const lightTheme = {
  primary: "#f9f9f9",
  secondary: "#FDFDFD",
  tertiary: "#0F0F0F",
};

export const theme = (isDarkTheme) => {
  const colorTheme = isDarkTheme ? darkTheme : lightTheme;

  // Accessible to in css
  var root = document.querySelector(":root");
  root.style.setProperty("--primary-color", colorTheme.primary);
  root.style.setProperty("--secondary-color", colorTheme.secondary);
  root.style.setProperty("--tertiary-color", colorTheme.tertiary);

  return {
    // Containers
    ctrWidth: "1100px",
    ctrPadding: "60px",

    // Nav bar
    navBarHeight: "120px",

    // Colors
    primaryColor: colorTheme.primary,
    secondaryColor: colorTheme.secondary,
    tertiaryColor: colorTheme.tertiary,
    dropShadow: "drop-shadow(0px 0px 30px #00000005)",

    // Borders
    borderRadius: "15px",
    lightBorder: `1px dashed ${colorTheme.tertiary}20`,
    darkBorder: `1px dashed ${colorTheme.tertiary}40`,
  };
};
