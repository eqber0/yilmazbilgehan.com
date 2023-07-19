<script setup>
import { onMounted } from "vue"
import { storeToRefs } from "pinia"
import { useProjectStore } from "/stores/project-store.js"
const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)
const route = useRoute()

const routeId = ref(route.params.id)
const workData = ref(null)
const infoList = ref()

onMounted(() => {
  console.log(routeId.value)
  console.log(projects.value)
  workData.value = projects.value.filter(
    (project) => project.slug === routeId.value
  )[0]
  console.log(workData.value)
})

// export default {
//   data() {
//     return {
//       routeId: this.$route.params.workDetail,
//       workData: null,
//       infoList: [],
//     }
//   },
//   async mounted() {
//     this.$nextTick()
//     this.workData = await this.$store.state.works.filter(
//       (item) => this.routeId === item.slug
//     )[0]
//   },
// }
</script>
<template>
  <main class="detail-page route-transition">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title route-transition">
          <mainTitle
            class="route-transition-inner"
            v-if="workData?.name"
            :title="workData?.name"
          />
        </div>
      </div>
    </div>
    <work-detail-hero
      class="route-transition-inner route-transition-inner--second"
      v-if="workData?.sliderImgs && workData?.heroImg"
      :sliderImages="workData?.sliderImgs"
      :heroImage="workData?.heroImg"
    />
    <work-detail-about
      class="route-transition-inner route-transition-inner--fourth"
      v-if="workData?.desc && workData?.name"
      :websiteHref="workData?.website"
      :aboutDesc="workData?.desc"
      :aboutName="workData?.name"
    />
    <work-detail-compare
      class="route-transition-inner route-transition-inner--fourth"
      v-if="workData?.compareImgs.length > 0"
      :compareImgs="workData?.compareImgs"
    />

    <work-detail-info
      class="route-transition-inner route-transition-inner--fourth"
      v-if="
        workData?.name &&
        workData?.country &&
        workData?.duration &&
        workData?.type
      "
      :infoName="workData?.name"
      :infoCountry="workData?.country"
      :infoDuration="workData?.duration"
      :infoType="workData?.type"
    />
    <work-detail-gallery
      class="route-transition-inner route-transition-inner--fourth"
      v-if="workData?.gallery"
      :imageList="workData?.gallery"
    />
    <section
      class="section route-transition-inner route-transition-inner--fourth"
    >
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
