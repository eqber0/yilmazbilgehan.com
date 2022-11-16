<template>
  <main>
    <hero />
    <works />
    <about />
  </main>
</template>

<script>
import hero from "../components/index/hero.vue";
import works from "../components/index/works.vue";
import about from "../components/index/about.vue";
export default {
  components: { hero, works, about },
  name: "IndexPage",
};
</script>

<style lang="scss"></style>
