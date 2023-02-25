import {
  BOOK_ICON,
  CODE_ICON,
  HEART_ICON,
  SCHOOL_ICON,
} from "../constants/StyleConstants";

export const terminalDetails = [
  {
    command: "describe",
    output: [
      `I am a software engineer from San Francisco who enjoys designing 
    user interfaces and developing applications using a variety of programming 
    languages, tools, and software.`,
    ],
  },
  {
    command: "technical-skills",
    output: [
      "JavaScript",
      "Java",
      "HTML",
      "CSS",
      "Python",
      "SQL",
      "MongoDB",
      "Google Cloud",
    ],
  },
  {
    command: "interests",
    output: [
      "Web design",
      "Cloud",
      "DevOps",
      "Linux",
      "Distributed systems",
      "Databases",
    ],
  },
];

export const about = [
  {
    id: 0,
    icon: SCHOOL_ICON,
    description:
      "B.S. in computer science from the University of California, Merced",
  },
  {
    id: 1,
    icon: HEART_ICON,
    description: "Passionate about UI/UX and full-stack software development",
  },
  {
    id: 2,
    icon: CODE_ICON,
    description:
      "Skilled in React, Spring Boot, SQL databases, and cloud technologies",
  },
  {
    id: 3,
    icon: BOOK_ICON,
    description:
      "Love learning about technology, designing application UIs, and programming",
  },
];

export const reflection = `
  Growing up, I was fascinated with computers. At the same time, I also enjoyed 
  making art and building stuff out of Legos and paper. Software development 
  combines my love of computers, art, and building things, providing me with a 
  canvas to design and create applications with elegant user interfaces.
`;

export const projects = [
  {
    id: 0,
    name: "Emazon",
    stack: ["React", "Flask"],
    thumbnailSrc: "Emazon.png",
    deployed: true,
    prodLink: "https://emazon-final-project.herokuapp.com/",
    githubLink: "https://github.com/kennyjung0223/emazon",
    description: "Full-stack e-commerce web application.",
  },
  {
    id: 1,
    name: "Encapsulate",
    stack: ["React", "Flask", "SQLite"],
    thumbnailSrc: "Encapsulate.png",
    deployed: false,
    prodLink: "",
    githubLink: "https://github.com/robokae/Encapsulate",
    description: "Full-stack social networking web application.",
  },
  {
    id: 2,
    name: "Nocturnal",
    stack: ["Java", "Parse"],
    thumbnailSrc: "",
    deployed: false,
    prodLink: "",
    githubLink: "https://github.com/UCM-CodePath-Social-Media/Nocturnal",
    description:
      "Minimalistic social networking Android application. Final project for CodePath Android course.",
  },
  {
    id: 3,
    name: "UCM ACM Chapter Website",
    stack: ["React", "Sass", "Firebase"],
    thumbnailSrc: "",
    deployed: true,
    prodLink: "https://acm-chapter-website.web.app/",
    githubLink: "https://github.com/UCMercedACM/Chapter-Website",
    description:
      "Fully re-designed website for UC Merced's Association for Computing Machinery (ACM) chapter.",
  },
  {
    id: 4,
    name: "Education Hackathon Project",
    stack: ["Spring Boot"],
    thumbnailSrc: "",
    deployed: false,
    prodLink: "",
    githubLink: "https://github.com/HackMerced-2022-Team/Education-Project",
    description:
      "Education-themed full-stack web application built during UC Merced's HackMerced 2022 hackathon. My first Spring Boot project.",
  },
  {
    id: 5,
    name: "Minimalistic Todo List",
    stack: ["React"],
    thumbnailSrc: "",
    deployed: false,
    prodLink: "",
    githubLink: "https://github.com/robokae/Minimal-React-Todo-List",
    description: "Simple todo list. My first major React project.",
  },
];
