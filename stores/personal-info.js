import { defineStore } from "pinia"

export const usePersonalStore = defineStore("personal-info", {
  state: () => ({
    name: "Bilgehan Yılmaz",
    title: "Frontend Developer",
    mail: "yilmaz.bilgehan@icloud.com",
    phone: "+90 555 685 77 45",
    address: "Bursa / Nilüfer",
    resume: "/bilgehan-resume.pdf",
    aboutText: `
    I am a passionate and results-driven
    <span>Frontend Developer</span> who is dedicated to staying
    updated with the latest technologies. My fearless
    experimentation has led me to craft award-winning websites.
    Committed to excellence, I ensure satisfaction by leveraging
    efficient technologies. I aspire to be an ever-evolving
    developer, pushing innovation and embracing challenges to
    continuously refine my skills. With relentless drive, I
    consistently exceed expectations, delivering exceptional
    results in every project.
    `,

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
        title: "CSS",
        percent: 93,
      },
      {
        id: 2,
        title: "Javascript",
        percent: 76,
      },
      {
        id: 3,
        title: "Vue.js",
        percent: 66,
      },
      {
        id: 4,
        title: "Nuxt.js",
        percent: 37,
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
        level: "B1",
      },
    ],

    experience: [
      {
        id: 0,
        title: "Frontend Developer",
        company: "Babel Agency",
        start_date: "Jul 2021",
        end_date: "Sep 2024",
      },
      {
        id: 1,
        title: "Frontend Developer",
        company: "ISM  YAZILIM",
        start_date: "Feb 2025",
        end_date: "Present",
      },
    ],
  }),
})
