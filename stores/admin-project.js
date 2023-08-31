import { defineStore } from "pinia"

export const useAdminProjectStore = defineStore("project", {
  state: () => ({
    project: null,
  }),
  actions: {
    async updateAdminProject(data) {
      this.project = data
    },
  },
})
