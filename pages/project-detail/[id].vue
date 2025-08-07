<script setup>
import { useProjectStore } from "/stores/projects.js"

const projectStore = useProjectStore()
const route = useRoute()

const currentProject = computed(() => {
  return projectStore.projects.find(
    (project) => project.slug === route.params.id
  )
})
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
    <project-detail-hero :item="currentProject" />

    <project-detail-about :item="currentProject" />

    <project-detail-gallery :item="currentProject" />
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
