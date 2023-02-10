<template>
  <section class="section section--pt0">
    <div class="container">
      <div class="work-detail__compare">
        <image-compare
          :before="compareImgs[0].image"
          :after="compareImgs[1].image"
        >
          <div slot="icon-left" class="work-detail__compare-arrowL">
            <svg-icon name="iconArrow" />
          </div>
          <div slot="icon-right" class="work-detail__compare-arrowR">
            <svg-icon name="iconArrow" />
          </div>
        </image-compare>
      </div>
    </div>
  </section>
</template>

<script>
import imageCompare from "vue-image-compare2";
export default {
  components: {
    imageCompare,
  },
  props: ["compareImgs"],
};
</script>
