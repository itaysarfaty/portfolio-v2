import { Navbar } from "../components/navigation/Navbar.mjs";
import { Hero } from "../components/hero/Hero.mjs";
import { Education } from "../components/Education.mjs";
import { Skills } from "../components/skills/Skills.mjs";
import { Projects } from "../components/Projects.mjs";
import { Socials } from "../components/Socials.mjs";
import { Quote } from "../components/Quote.mjs";
import { Footer } from "../components/Footer.mjs";
import { ThemeProvider } from "styled-components";
import { theme } from "./../themes/theme.mjs";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lightTheme, darkTheme } from "./../themes/theme.mjs";
import { useRef, useState } from "react";
import { useIsInViewport } from "../hooks/isInViewPort.mjs";

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Keep track of what section is above the fold
  const aboutRef = useRef(null);
  const about = useIsInViewport(aboutRef);

  const projectsRef = useRef(null);
  const projects = useIsInViewport(projectsRef);

  const quoteRef = useRef(null);
  const quote = useIsInViewport(quoteRef);

  const scrollOptions = { behavior: "smooth" };
  const scrollTo = {
    about: () => aboutRef.current.scrollIntoView(scrollOptions),
    projects: () =>
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      }),
    quote: () => quoteRef.current.scrollIntoView(scrollOptions),
  };
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme(isDarkTheme)}>
        <Navbar sectionState={{ about, projects, quote }} scrollTo={scrollTo} />
        <section ref={aboutRef} className="about">
          <Hero />
          <Education />
          <Skills />
        </section>
        <section ref={projectsRef} className="projects">
          <Projects />
        </section>
        <Socials />

        <section ref={quoteRef} className="quote">
          <Quote />
        </section>
        <Footer themeToggle={toggleTheme} />
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
