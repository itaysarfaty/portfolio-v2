import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home.mjs";
import { ContactPage } from "../pages/Contact.mjs";

export const router = (props) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home themeToggle={props.toggleTheme} />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ]);
};
