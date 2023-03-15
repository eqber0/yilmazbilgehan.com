<template>
  <main class="route-transition">
    <!-- <preloader v-if="loader" /> -->
    <hero :isLoaded="isLoaded" />
    <works class="route-transition-inner route-transition-inner--fourth" />
    <about class="route-transition-inner route-transition-inner--fourth" />
    <awardSlider
      class="route-transition-inner route-transition-inner--fourth"
    />
    <footerTop class="route-transition-inner route-transition-inner--fourth" />
  </main>
</template>

<script>
import hero from "../components/index/hero.vue";
import works from "../components/index/works.vue";
import about from "../components/index/about.vue";
import awardSlider from "../components/index/awardSlider.vue";
import footerTop from "../components/index/footerTop.vue";
export default {
  components: {
    hero,
    works,
    about,
    awardSlider,
    footerTop,
  },
  data() {
    return {
      // loader: null,
      isLoaded: null,
    };
  },
  created() {
    // this.loader = true;
    this.isLoaded = true;
    setTimeout(() => {
      // this.loader = false;
      this.isLoaded = false;
    }, 500);
  },
};
</script>
