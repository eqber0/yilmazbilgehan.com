<script setup>
import { storeToRefs } from "pinia"
import { useProjectStore } from "/stores/project-store.js"
import { useAdminProjectStore } from "/stores/admin-project.js"

const projectStore = useProjectStore()
const { fetchProjects } = projectStore
const { projects } = storeToRefs(projectStore)
fetchProjects()

const adminProjectStore = useAdminProjectStore()
const { updateAdminProject } = adminProjectStore
</script>

<template>
  <div class="admin-page">
    <div class="container">
      Admin Panel
      <br />
      <br />
      <NuxtLink :to="'/admin/add-project'">Add New Project </NuxtLink>
      <br />
      <br />

      <div class="admin-page-wrapper">
        <NuxtLink
          :to="'/admin/projects/' + item.slug"
          class="admin-page__item"
          v-for="item in projects"
          :key="item.id"
          @click="updateAdminProject(item)"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
