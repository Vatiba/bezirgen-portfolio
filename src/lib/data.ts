import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import yuzharytMainPageImg from "@/assets/images/100haryt_mainPage.png";
import yuzharytMobileAppImg from "@/assets/images/100haryt_mobileApp.png";
import yuzharytShopAdminImg from "@/assets/images/100haryt_shopsAdmin.png";
import yuzharytInternalAppsImg from "@/assets/images/100haryt_internalApps.png";
import dowrebaphyzmat from "@/assets/images/dowrebaphyzmat.png";
import burty from "@/assets/images/burty.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Montra - React native dev",
    location: "Malaysia - Kuala Lumpur (Remote)",
    description:
      "Building and maintaining cross-platform mobile apps. I focus on UI development, API integration, and state management using Zustand and React Query, ensuring smooth performance and a great user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - Present days",
  },
  {
    title: "100haryt.com - Front end engineer",
    location: "Turkmenistan - Ashgabat (On-site)",
    description:
      "A new version of the 100haryt.com website, admin panels, mobile application and internal system web applications, mobile applications (from scratch) has been developed.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2021 - May 2025",
  },
  {
    title: "Oguz han scientific and technological center",
    location: "Oguz han engineering and technology university of Turkmenistan",
    description:
      "Developed an e‐library platform for university students and teachers to publish books, audiobooks, articles, and news for internal use. Developed Leetcode like platform offering a variety of coding challenges and algorithmic problems aimed at providing users with opportunities to enhance their coding skills.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2023 - Semtember 2024",
  },
  {
    title: "Freelance",
    location: "Worldwide",
    description:
      "Worked as a freelance developer and part-time programming teacher. Built and maintained web apps for various clients using JavaScript, Bootstrap, jQuery, and PHP. Key projects include a company site with an admin panel (Hoshamay), a multilingual Japanese dictionary, an English grammar reference app, and a poetry archive. Taught software development fundamentals, focusing on practical skills and real-world application.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2020 - Semtember 2021",
  }
] as const;

export const projectsData = [
  {
    title: "100haryt.com",
    description:
      "100haryt.com is a modern online marketplace connecting buyers with a wide range of sellers across Turkmenistan. Built with Next.js, Zustand, React Query, and Axios, the platform offers fast product browsing, smooth state management, and reliable data fetching for an excellent user experience.",
    tags: ["Next js", "Typescript", "React query", "Zustand", "Axios"],
    icons: [
      "skill-icons:nextjs-light",
      "skill-icons:typescript",
      "logos:react-query-icon",
      "devicon:zustand",
    ],
    imageUrl: yuzharytMainPageImg,
    urlLink: "https://100haryt.com/",
  },
  {
    title: "100haryt.com - mobile app",
    description:
      "The 100haryt.com mobile app is a modern marketplace solution that allows users across Turkmenistan to shop from multiple sellers on the go. Built with React Native, Zustand, and React Query, the app delivers smooth navigation and efficient state management. It is available on both iOS and Android platforms.",
    tags: ["React native", "Typescript", "React query", "Zustand"],
    icons: [
      "devicon:reactnative-wordmark",
      "skill-icons:typescript",
      "logos:react-query-icon",
      "devicon:zustand",
    ],
    imageUrl: yuzharytMobileAppImg,
    urlLink: "https://play.google.com/store/apps/details?id=com.yuzharyt&hl=ru",
  },
  {
    title: "100haryt.com - shops admin",
    description:
      "The 100haryt.com Shops Admin app is a mobile tool for sellers to manage their storefronts on the go. Built with React Native, Zustand, and React Query, the app allows vendors to add and edit products, track orders, and monitor sales, all from their mobile devices.",
    tags: ["React native", "Typescript", "React query", "Zustand"],
    icons: [
      "devicon:reactnative-wordmark",
      "skill-icons:typescript",
      "logos:react-query-icon",
      "devicon:zustand",
    ],
    imageUrl: yuzharytShopAdminImg,
    urlLink: "https://play.google.com/store/apps/details?id=com.yuzharyt.shops&hl=ru",
  },
  {
    title: "100haryt.com - internal system apps",
    description:
      "100haryt.com includes a set of internal system apps to manage and streamline marketplace operations. Two web admin panels are built with React—one for super admins using Material UI, and another for shop owners using Ant Design—providing full control over users, products, and orders. Mobile apps for couriers and pickers, built with React Native, support order fulfillment in the field. The pickers app includes a barcode scanner that helps staff confirm each item during collection.",
    tags: ["React", "React native", "Typescript", "Material UI", "Ant design"],
    icons: [
      "devicon:react",
      "skill-icons:typescript",
      "devicon:materialui",
      "devicon:antdesign",
    ],
    imageUrl: yuzharytInternalAppsImg,
  },
  {
    title: "Döwrebap hyzmat",
    description:
      "A website created to promote a company on the Internet. This page contains the company's services, information, and other important information. It is user-friendly and useful for its intended purpose.",
    tags: ["Next js"],
    icons: ["skill-icons:nextjs-light"],
    imageUrl: dowrebaphyzmat,
    urlLink: "https://dowrebaphyzmat.com.tm/en",
  },
  {
    title: "Burty",
    description:
      "A universal application for sports fans. Allows you to find and book halls and sites, organize matches between teams.",
    tags: ["React native", "Typescript", "React query", "Zustand"],
    icons: [
      "devicon:reactnative-wordmark",
      "skill-icons:typescript",
      "logos:react-query-icon",
      "devicon:zustand",
    ],
    imageUrl: burty,
    githubLink: "https://github.com/rahimwws/burty/tree/dev",
  },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Next js",
    icon: "skill-icons:nextjs-light",
  },
  {
    name: "React native",
    icon: "devicon:reactnative-wordmark",
  },
  {
    name: "Redux",
    icon: "skill-icons:redux",
  },
  {
    name: "Zustand",
    icon: "devicon:zustand",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Material UI",
    icon: "devicon:materialui",
  },
  {
    name: "Ant design",
    icon: "devicon:antdesign",
  },
] as const;
