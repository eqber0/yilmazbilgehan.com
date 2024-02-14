import { defineStore } from "pinia"

export const usePersonalStore = defineStore("personal-info", {
  state: () => ({
    name: "Bilgehan Yılmaz",
    title: "Frontend Developer",
    mail: "yilmaz.bilgehan@icloud.com",
    phone: "+90 555 685 77 45",
    address: "Bursa / Nilüfer",
    socials: [
      {
        id: 0,
        name: "Linkedin",
        icon: "iconLinkedin",
        link: "https://www.linkedin.com/in/bilgehan-y%C4%B1lmaz-a723b0220/",
      },
      {
        id: 1,
        name: "Github",
        icon: "iconGithub",
        link: "https://github.com/eqber0",
      },
      {
        id: 2,
        name: "Twitter",
        icon: "iconX",
        link: "https://twitter.com/eqbeR_",
      },
    ],
    skills: [
      {
        id: 0,
        title: "HTML",
        percent: 87,
      },
      {
        id: 1,
        title: "CSS / SCSS",
        percent: 93,
      },
      {
        id: 1,
        title: "Tailwind",
        percent: 78,
      },
      {
        id: 2,
        title: "JavaScript",
        percent: 76,
      },
      {
        id: 3,
        title: "Vue.js",
        percent: 76,
      },
      {
        id: 4,
        title: "Nuxt.js",
        percent: 67,
      },
    ],
    language: [
      {
        id: 0,
        name: "Turkish",
        level: "Native",
      },
      {
        id: 1,
        name: "English",
        level: "B2",
      },
    ],
  }),
})
