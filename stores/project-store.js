import { defineStore } from "pinia"

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: null,
    awardedProjects: null,
    currentProject: null,
  }),
  actions: {
    async fetchProjects() {
      const nuxtApp = useNuxtApp()
      const projects = await nuxtApp.$projects
      this.projects = projects
      this.awardedProjects = projects.filter((item) => {
        if (item.awarded == true) {
          return item
        }
      })
    },
    async getProject(slug) {
      const nuxtApp = useNuxtApp()
      const projects = await nuxtApp.$projects
      console.log(slug)
      this.currentProject = projects.filter((item) => item.slug === slug)[0]
    },
  },
})
