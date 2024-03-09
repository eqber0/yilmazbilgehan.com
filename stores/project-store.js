import { defineStore } from "pinia"

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: null,
    awardedProjects: null,
    currentProject: null,
  }),
  actions: {
    async fetchProjects() {
      //
    },
    async getProject(slug) {
      //
    },
  },
})
