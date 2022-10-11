import { Navbar } from "../components/navigation/Navbar.mjs";
import { Hero } from "../components/hero/Hero.mjs";
import { Education } from "../components/Education.mjs";
import { Skills } from "../components/skills/Skills.mjs";
import { Projects } from "../components/projects/Projects.mjs";
import { Socials } from "../components/Socials.mjs";
import { Quote } from "../components/Quote.mjs";
import { Footer } from "../components/Footer.mjs";
import { useRef } from "react";
import { useIsInViewport } from "../hooks/isInViewPort.mjs";

export const Home = (props) => {
  // Keep track of what section is above the fold
  const aboutRef = useRef(null);
  const about = useIsInViewport(aboutRef);

  const projectsRef = useRef(null);
  const projects = useIsInViewport(projectsRef);

  const quoteRef = useRef(null);
  const quote = useIsInViewport(quoteRef);

  const educationRef = useRef(null);

  const scrollOptions = { behavior: "smooth" };
  const scrollTo = {
    about: () => aboutRef.current.scrollIntoView(scrollOptions),
    projects: () =>
      projectsRef.current.scrollIntoView({
        ...scrollOptions,
        ...{ block: "center" },
      }),
    quote: () => quoteRef.current.scrollIntoView(scrollOptions),
  };

  return (
    <>
      <Navbar sectionState={{ about, projects, quote }} scrollTo={scrollTo} />
      <section ref={aboutRef} className="about">
        <Hero
          scrollHandler={() =>
            educationRef.current.scrollIntoView({
              ...scrollOptions,
              ...{ block: "center" },
            })
          }
        />
        <Education setRef={educationRef} />

        <Skills />
      </section>
      <section ref={projectsRef} className="projects">
        <Projects />
      </section>
      <Socials />

      <section ref={quoteRef} className="quote">
        <Quote />
      </section>
      <Footer themeToggle={props.toggleTheme} />
    </>
  );
};
