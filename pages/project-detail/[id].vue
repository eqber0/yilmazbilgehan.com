<script setup>
import { storeToRefs } from "pinia"
import { useProjectStore } from "/stores/project-store.js"
import { onMounted } from "vue"

const projectStore = useProjectStore()
const { fetchProjects, getProject } = projectStore
const { currentProject } = storeToRefs(projectStore)
onMounted(() => {
  fetchProjects()
})

const route = useRoute()
getProject(route.params.id)

const currentProjectData = await useAsyncData("currentProject", () => {
  return currentProject
}).data.value
</script>
<template>
  <main class="detail-page">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title">
          <mainTitle :title="currentProject?.name" />
        </div>
      </div>
    </div>
    <project-detail-hero :video="currentProject?.video" />
    <project-detail-about
      :websiteHref="currentProject?.website"
      :aboutDesc="currentProject?.description"
      :aboutName="currentProject?.name"
    />
    <project-detail-info
      :infoName="currentProject?.name"
      :infoCountry="currentProject?.country"
      :infoDuration="currentProject?.duration"
      :infoType="currentProject?.type"
    />
    <project-detail-gallery :imageList="currentProject?.gallery" />
    <section class="section section--pt0">
      <div class="container">
        <h2 class="txt txt--rem48 txt--font300 c-white text-center">
          Do you want to same <b>Website?</b>
        </h2>
        <br />
        <p class="txt txt--rem32 txt--font300 c-white text-center">
          If you like this website, you can get the offer below and have the
          most special website designed for you. Contact us now and let's bring
          your dream website to the
          <span class="color: var(--c-primary)">real world!</span>
        </p>
        <br />
        <br />
        <NuxtLink to="/contact">
          <v-button
            element="button"
            color=""
            icon="iconArrow"
            hover="primary"
            text="Get an Offer"
            type="centered"
            href=""
          />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
