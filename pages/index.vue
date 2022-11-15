<template>
  <main>
    <hero />
    <v-button color="" hover="primary" icon="iconArrow" text="view more" />
    <hero />
  </main>
</template>

<script>
import hero from "../components/index/hero.vue";
export default {
  components: { hero },
  name: "IndexPage",
};
</script>

<style lang="scss"></style>
