<template>
  <div
    v-if="this.loading"
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
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      if (this.$refs.preloader) {
        this.$refs.preloader.classList.add("loading");
        setTimeout(() => {
          this.$refs.preloader.classList.add("loaded");
        }, 250);
        setTimeout(() => {
          this.loading = false;
        }, 750);
      }
    },
  },
};
</script>
