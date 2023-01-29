<template>
  <main>
    <hero />
    <works />
    <about />
    <awardSlider />
    <footerTop />
  </main>
</template>

<script>
import hero from "../components/index/hero.vue";
import works from "../components/index/works.vue";
import about from "../components/index/about.vue";
import awardSlider from "../components/index/awardSlider.vue";
import footerTop from "../components/index/footerTop.vue";
export default {
  components: { hero, works, about, awardSlider, footerTop },
};
</script>
