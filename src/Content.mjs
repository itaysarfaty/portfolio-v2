import age from "s-age";
import { openLink } from "./Utils.js";
import { Project } from "./components/projects/Project.mjs";

export const TypingContent = [
  "My name is Itay",
  "Pronounced [EE-tie]",
  "I'm a developer",
  "I enjoy solving problems",
  "I'm product oriented",
  "You know elephants can't jump?",
  "I speak two languages",
  "My favorite color is black",
  `I'm ${age("Nov 3 1999")} years old`,
  "Do aliens exists?",
  "You're still here?",
  "Scroll down!",
];

export const myProjects = [
  new Project("My Portfolio", "React.js", () => openLink("/")),
  new Project("Weight Management System", "Fullstack", () =>
    openLink("https://github.com/itaysarfaty/FitTrack")
  ),
  new Project("Journey by Michal", "Entity Relationship Diagram", () =>
    openLink()
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
