import { openLink } from "./utils.js";
import { Project } from "../objects/project.mjs";

export const myFacts = [
  "I'm Itay",
  "Pronounced [EE-tie]",
  "I'm a UI/UX Developer",
  "I prioritize the end user",
  "I use a human-centric approach",
  "I work at CargoMatrix Inc.",
  "You're still here?",
  "Scroll down!",
];

export const mySkills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Express JS",
  "Node.js",
  "HTML5",
  "CSS",
  "UI/UX",
  "Adobe XD",
  "Rest API",
  "xState",
  "OOP",
  "SQL",
  "Python",
  "Jest",
  "Storybook",
  "Git",
  "Postman",
  "Power Apps",
  "Dataverse",
];

export const myProjects = [
  new Project("CORPWRIT", ["ChatGPT ", "React.js"], () =>
    openLink("https://www.corpwrit.xyz/")
  ),
  new Project("Weight Tracker", ["Python ", "React.js"], () =>
    openLink("https://www.youtube.com/watch?v=p7LKRz_m1nk")
  ),
  new Project("Algorithm API", ["TypeScript", "Express JS"], () =>
    openLink("https://github.com/itaysarfaty/compare-sorts")
  ),
  new Project("Bubble Sort Visualizer", ["TypeScript ", "React.js"], () =>
    openLink("https://bubble-sort-visualizer.pages.dev/")
  ),
  new Project("Nutrition Coach DB", ["Entity Relationship Diagram"], () =>
    openLink("/jportal-erd.svg")
  ),
  new Project("This Website", ["React.js"], () =>
    openLink("https://github.com/itaysarfaty/portfolio-v2")
  ),
  new Project("The Kitchen Guy", ["Gatsby.js", "AWS Lambda"], () =>
    openLink("https://portfolio.thekitchenguy.pro/")
  ),
  new Project("The Kitchen Guy", ["Webflow"], () =>
    openLink("https://www.thekitchenguy.pro/")
  ),
];
