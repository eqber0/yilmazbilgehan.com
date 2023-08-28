<script setup>
import { storeToRefs } from "pinia"
import { useProjectStore } from "/stores/project-store.js"

const projectStore = useProjectStore()
const { fetchProjects } = projectStore
const { projects } = storeToRefs(projectStore)
const route = useRoute()

const routeId = ref(route.params.id)
const currentProject = ref()

fetchProjects()
onMounted(() => {
  currentProject.value = projects.value.filter(
    (item) => item.slug === routeId.value
  )[0]
})
</script>
<template>
  <main class="detail-page">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title">
          <mainTitle
            v-if="currentProject?.name"
            :title="currentProject?.name"
          />
        </div>
      </div>
    </div>
    <project-detail-hero
      v-if="currentProject?.fullpage"
      :sliderImages="currentProject?.sliderImgs"
      :heroImage="currentProject?.fullpage"
    />
    <project-detail-about
      v-if="currentProject?.description && currentProject?.name"
      :websiteHref="currentProject?.website"
      :aboutDesc="currentProject?.description"
      :aboutName="currentProject?.name"
    />
    <project-detail-info
      v-if="
        currentProject?.name &&
        currentProject?.country &&
        currentProject?.duration &&
        currentProject?.type
      "
      :infoName="currentProject?.name"
      :infoCountry="currentProject?.country"
      :infoDuration="currentProject?.duration"
      :infoType="currentProject?.type"
    />
    <project-detail-gallery
      v-if="currentProject?.gallery"
      :imageList="currentProject?.gallery"
    />
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
        <v-button
          element="nuxt-link"
          color=""
          icon="iconArrow"
          hover="primary"
          text="Get an Offer"
          type="centered"
          href="/contact"
        />
      </div>
    </section>
  </main>
</template>
