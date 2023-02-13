<template>
  <div style="position: relative; z-index: 1">
    <appHeader />
    <Nuxt />
    <appFooter />
    <div class="cursor">
      <div class="cursor__txt"></div>
      <div class="cursor__icon"></div>
    </div>
  </div>
</template>

<script>
import appHeader from "../components/common/appHeader.vue";
import appFooter from "../components/common/appFooter.vue";
import gsap from "gsap";

export default {
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
    this.cursorFunction();
  },
  methods: {
    cursorFunction() {
      const cursor = document.querySelector(".cursor");

      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
      });
      document.addEventListener("pointermove", movecursor);
      function movecursor(e) {
        gsap.to(cursor, {
          duration: false,
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "slow",
        });
      }
    },
  },
  scrollToTop: true,
};
</script>

AppHeader
