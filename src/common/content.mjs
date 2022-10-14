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
  "Java Script",
  "Python",
  "Node.js",
  "Express.js",
  "React.js",
  "Git",
  "Docker",
  "HTML5",
  "CSS",
  "UI/UX",
  "Adobe XD",
  "Insomnia",
];

export const myProjects = [
  new Project("Management System", "Fullstack", () =>
    openLink("https://github.com/itaysarfaty/FitTrack")
  ),
  new Project("This Website", "React.js", null),

  new Project("Nutrition Coach", "Entity Relationship Diagram", () =>
    openLink("/jportal-erd.svg")
  ),
  new Project("The Kitchen Guy", "Gatsby.js", () =>
    openLink("https://portfolio.thekitchenguy.pro/")
  ),
  new Project("The Kitchen Guy", "Webflow", () =>
    openLink("https://www.thekitchenguy.pro/")
  ),
  new Project("Music Card", "HTML/CSS", () =>
    openLink("https://music-card.pages.dev/")
  ),
];
