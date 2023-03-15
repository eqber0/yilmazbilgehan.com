<template>
  <div
    v-if="loading"
    class="preloader"
    ref="preloader"
    :class="this.loading == false ? 'loaded' : ''"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      loading: null,
    };
  },
  mounted() {
    this.loading = true;
    if (this.loading !== null) {
      console.log("loading");
      // this.$refs.preloader.classList.add("loading");
      setTimeout(() => {
        console.log("loaded");
        console.log(this.$refs.preloader);
        this.$refs.preloader.classList.add("loaded");
      }, 250);
      setTimeout(() => {
        this.loading = false;
        console.log("loaded");
        console.log(this.$refs.preloader);
      }, 750);
    }
  },
};
</script>
