<template>
  <section class="section section--pt0">
    <div class="container">
      <div class="work-detail__compare">
        <VueCompareImage
          :leftImage="compareImgs[0].image"
          :rightImage="compareImgs[1].image"
        />;
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["compareImgs"],
};
</script>
