<template>
  <main class="detail-page">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title txt txt--rem128 txt--font900 c-white">
          <h1>Work <span class="c-primary">Detail</span></h1>
          <div class="mt-5 c-secondary">
            {{ routeId }}
          </div>
        </div>
      </div>
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
