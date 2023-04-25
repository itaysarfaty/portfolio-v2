import { Navbar } from "../components/sections/navigation/Navbar.mjs";
import { Hero } from "../components/sections/hero/Hero.mjs";
import { Education } from "../components/sections/Education.mjs";
import { Skills } from "../components/sections/skills/Skills.mjs";
import { Projects } from "../components/projects/Projects.mjs";
import { Socials } from "../components/sections/Socials.mjs";
import { Quote } from "../components/sections/Quote.mjs";
import { Footer } from "../components/sections/Footer.mjs";
import { useRef } from "react";
import { useIsInViewport } from "../hooks/isInViewPort.mjs";

export const Home = (props) => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const quoteRef = useRef(null);
  const educationRef = useRef(null);

  // Keep track of what section is above the fold
  const about = useIsInViewport(aboutRef);
  const projects = useIsInViewport(projectsRef);

  const scrollOptions = { behavior: "smooth" };
  const scrollTo = {
    about: () => aboutRef.current.scrollIntoView(scrollOptions),
    projects: () =>
      projectsRef.current.scrollIntoView({
        ...scrollOptions,
        ...{ block: "center" },
      }),
    education: () =>
      educationRef.current.scrollIntoView({
        ...scrollOptions,
        ...{ block: "center" },
      }),
  };

  return (
    <>
      <Navbar sectionState={{ about, projects }} scrollTo={scrollTo} />
      <section ref={aboutRef} className="about">
        <Hero scrollHandler={scrollTo.education} />
        {/* <Education setRef={educationRef} /> */}
        <Skills />
      </section>
      <section ref={projectsRef} className="projects">
        <Projects />
      </section>
      <Socials />

      <section ref={quoteRef} className="quote">
        <Quote />
      </section>
      <Footer themeToggle={props.themeToggle} />
    </>
  );
};
