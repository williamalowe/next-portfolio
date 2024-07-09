import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Science",
    location: "Deakin University - Burwood",
    description:
      "Gained an understanding of computer systems, software development, algorithms, and problem-solving techniques. Core units provided the foundational basis for concepts including AI, networking, security, programming principles, and more. Completed elective units in UI/UX Design, Responsive Web Applications, and Games Design. Completed Capstone Units working on frontend migration tasks for a live education platform with 1000s of daily users.",
    icon: React.createElement(LuGraduationCap),
    date: "Current",
  },
  {
    title: "Data Entry Team Leader",
    location: "IPSOS Pty Ltd",
    description:
      "Conducted QA on digitized surveys, as well as provided training/feedback to team-members. Assisted with onboarding new staff, and assisted regularly with other projects. Conducted logic checks on datasets, and also tested, documentated, and provided feedback for new internal data entry systems and tools.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Current",
  },
  {
    title: "Foundations + Full Stack Development Course",
    location: "The Odin Project - Online",
    description:
      "Completed foundations course covering basics of HTML, CSS, and JavaScript. Also compeleted the Full Stack JavaScript course, covering more advanced HTML, CSS, and JavaScript as well as React, Node, Jest, Git, web design principles, best practices, and more.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Student Frontend Developer",
    location: "Thoth Tech - Deakin University",
    description:
      "Assisted in frontend-migration tasks of live Doubtfire: Ontrack education platform, built with Angular and Ruby-on-rails, with 1000s of daily users. Updated outdated and depreciated Angular fxLayout properties with equivalent tailwind styles. Provided code reviews, bug resolutions, and PRs for dozens of components. Invited to return as a student mentor for other students.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "IT Technical Support/Advisor",
    location: "Yea Medical Clinic",
    description:
      "Resolved various IT-related issues. Updated hardware and SQL database software across entire practice. Set up backup security measures, and worked with MedicalDirector to oversee system security and management. Provided advice on hardware and software solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Diploma of Information Technology",
    location: "Deakin College - Burwood",
    description:
      "Graduated with a foundational understanding of general IT concepts, including computer hardware, software applications, networking fundamentals, and introductory programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Hospitality Team Leader",
    location: "Grill'd Pty Ltd",
    description:
      "Completed leadership training after 12 months at the request of both management and team-members. Completed team-member duties as well as oversaw day-to-day operations, managed customer inquieries/complaints, created station plans, trained new team-members and upcoming team-leaders. Opened and closed the restaurant, managed stock levels and set team KPIs.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Dockitt",
    description:
      "Currently undergoing a redesign, transitioning to Next.js and MongoDB, Dockitt is a task management application with a kanban-board and productivity dashboard.",
    tags: [
      "React (vite)",
      "css-modules",
      "local-storage",
      "react-router-dom",
      "ContextAPI",
    ],
    imageUrl: "",
    demoURL: "",
    repoURL: "",
  },
  {
    title: "TheadHundred",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "",
    demoURL: "",
    repoURL: "",
  },
  {
    title: "Sentinel",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "",
    demoURL: "",
    repoURL: "",
  },
  {
    title: "Diskord",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "",
    demoURL: "",
    repoURL: "",
  },
  {
    title: "Other Projects",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "",
    demoURL: "",
    repoURL: "",
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "",
    demoURL: "",
    repoURL: "",
  },
] as const;

export const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Framer Motion",
] as const;
