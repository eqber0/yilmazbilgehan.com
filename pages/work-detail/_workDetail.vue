<template>
  <main>
    <div class="container">
      <div class="c-white py-5" style="height: 100vh">{{ routeId }}</div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      // workDetail: [],
      routeId: this.$route.params.workDetail,
    };
  },
  mounted() {
    // const result = this.$store.state.workList.filter((obj) => {
    //   return obj.title.toLowerCase().replace(/ /g, "-") === this.routeId;
    // });
    // this.workDetail = result[0];
  },
};
</script>
