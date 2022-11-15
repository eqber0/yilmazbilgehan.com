<template>
  <main>
    <hero />
    <works />
  </main>
</template>

<script>
import hero from "../components/index/hero.vue";
import works from "../components/index/works.vue";
export default {
  components: { hero, works },
  name: "IndexPage",
};
</script>

<style lang="scss"></style>
