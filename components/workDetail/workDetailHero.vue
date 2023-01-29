<template>
  <section class="work-detail">
    <div class="container">
      <div class="work-detail-image"></div>
      <div class="work-detail__slider">
        <div ref="workSlider" class="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="slide in sliderImages"
              :key="slide.id"
            >
              <div class="work-detail__slider-item">
                <img :src="slide.image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, Autoplay } from "swiper";
Swiper.use([Autoplay]);
export default {
  props: {
    sliderImages: {
      type: Array,
      default: () => [],
    },
    heroImg: {
      type: String,
      default: "",
    },
  },
  mounted() {
    const workSlider = new Swiper(this.$refs.workSlider, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 40,
      speed: 1500,
      autoplay: {
        delay: 3000,
      },
    });
  },
};
</script>
