<template>
  <main>
    <div class="container">
      <div class="c-white">{{ routeId }}</div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      routeId: this.$route.params.workDetail,
    };
  },
};
</script>
