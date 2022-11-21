<template>
  <div v-if="loading" class="preloader">LOADING...</div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 99;
}
</style>
