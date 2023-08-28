<script setup>
import { storeToRefs } from "pinia"
import { useProjectStore } from "/stores/project-store.js"

const projectStore = useProjectStore()
const { fetchProjects } = projectStore
const { projects } = storeToRefs(projectStore)
fetchProjects()

const projectList = ref()
onMounted(() => {
  projectList.value = projects.value
})
</script>

<template>
  <main class="detail-page">
    <div class="container container--fluid">
      <div class="subheader">
        <div class="subheader__title">
          <mainTitle title="Projects" />
        </div>
      </div>
    </div>
    <section class="section works">
      <div class="container container--fluid">
        <div v-if="projectList" class="row g-4 g-md-5">
          <div
            class="col-12 col-md-6 col-xl-4"
            v-for="item in projectList"
            :key="item.id"
          >
            <NuxtLink
              :to="{ path: 'project-detail/' + item.slug }"
              class="works-card"
            >
              <div class="works-card__image">
                <img :src="item.cover" alt="" />
              </div>
              <div class="works-card__content">
                <div class="works-card__content-title">
                  <h3 class="txt txt--rem32 txt--font900 c-white">
                    {{ item.name }}
                  </h3>
                  <p class="txt txt--rem20 txt--font300 c-white">
                    {{ item.type }}
                  </p>
                </div>
                <div class="works-card__content-button c-white">
                  <nuxt-icon class="icon icon-font" name="iconArrow" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
