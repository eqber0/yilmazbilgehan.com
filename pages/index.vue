<script setup>
import heroSection from "~/components/index/heroSection.vue"
import projectsSection from "~/components/index/projectsSection.vue"
import aboutSection from "~/components/index/aboutSection.vue"
import awardSliderSection from "~/components/index/awardSlider.vue"
// import footerTop from "~/components/index/footerTop.vue"

import { storeToRefs } from "pinia"
import { useProjectStore } from "~/stores/project-store.js"

const projectStore = useProjectStore()
const { fetchProjects } = projectStore
const { awardedProjects } = storeToRefs(projectStore)
// fetchProjects()
onMounted(() => {
  fetchProjects()
})

const awardSliderData = await useAsyncData("awardedProjects", () => {
  return awardedProjects
})
</script>

<template>
  <main>
    <heroSection />
    <projectsSection />
    <aboutSection />
    <awardSliderSection :projects="awardedProjects" />
    <!-- <footerTop /> -->
  </main>
</template>
