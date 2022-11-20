import age from "s-age";
import { openLink } from "./utils.js";
import { Project } from "../objects/project.mjs";

export const myFacts = [
  "My name is Itay",
  "Pronounced [EE-tie]",
  "I'm a developer",
  "I enjoy solving problems",
  "I'm product oriented",
  "You know elephants can't jump?",
  "I speak 2 languages",
  "My favorite colors are black & white",
  `I'm ${age("Nov 3 1999")} years old`,
  "Do aliens exists?",
  "You're still here?",
  "Scroll down!",
];

export const mySkills = [
  "Typescript",
  "Java Script",
  "Python",
  "Node.js",
  "Express JS",
  "React.js",
  "Rest API",
  "OOP",
  "SQL",
  "Git",
  "Postman",
  "HTML5",
  "CSS",
  "UI/UX",
  "Adobe XD",
];

export const myProjects = [
  new Project("Algorithm Performance API", "TypeScript & Express JS", () =>
    openLink("https://github.com/itaysarfaty/compare-sorts")
  ),

  new Project("Bubble Sort Visualizer", "TypeScript & React.js", () =>
    openLink("https://bubble-sort-visualizer.pages.dev/")
  ),
  new Project("Vanilla Form", "TypeScript", () =>
    openLink("https://github.com/itaysarfaty/vanilla-form")
  ),
  new Project("Weight Tracker", "Python & React.js", () =>
    openLink("https://github.com/itaysarfaty/FitTrack")
  ),
  new Project("Nutrition Coach DB", "Entity Relationship Diagram", () =>
    openLink("/jportal-erd.svg")
  ),
  new Project("This Website", "React.js", () =>
    openLink("https://github.com/itaysarfaty/portfolio-v2")
  ),
  new Project("The Kitchen Guy", "Gatsby.js", () =>
    openLink("https://portfolio.thekitchenguy.pro/")
  ),
  new Project("The Kitchen Guy", "Webflow", () =>
    openLink("https://www.thekitchenguy.pro/")
  ),
];
