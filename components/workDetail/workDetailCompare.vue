<template>
  <section class="section section--pt0">
    <div class="container">
      <div class="work-detail__compare">
        <image-compare :before="before" :after="after">
          <div slot="icon-left" class="work-detail__compare-arrowL">
            <svg-icon name="iconArrow" />
          </div>
          <div slot="icon-right" class="work-detail__compare-arrowR">
            <svg-icon name="iconArrow" />
          </div>
        </image-compare>
      </div>
      {{ compareImgs }}
    </div>
  </section>
</template>

<script>
import imageCompare from "vue-image-compare2";
export default {
  components: {
    imageCompare,
  },
  data() {
    return {
      before: "/images/chace-fullpage.jpg",
      after: "/images/trowas-fullpage.jpg",
    };
  },
  props: ["compareImgs"],
};
</script>
