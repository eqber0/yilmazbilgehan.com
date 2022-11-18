<template>
  <section class="award-slider">
    <div class="container">
      <div
        class="award-slider__wrapper row g-4 g-md-5 align-items-center c-white"
      >
        <div class="award-slider__text col-12 col-lg-5">
          <div ref="textSlider" class="swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(slide, index) in awardSlider"
                :key="index"
                class="swiper-slide"
              >
                <a
                  href="#0"
                  class="award-slider__text-item js-link-field"
                  data-cursor-text="View Project"
                >
                  <div
                    class="award-slider__text-item__title txt txt--rem64 txt--font900 c-white"
                  >
                    {{ slide.title }}
                  </div>
                  <div
                    class="award-slider__text-item__subtitle txt txt--rem28 txt--font300 c-paragraph"
                  >
                    {{ slide.subTitle }}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="award-slider__right col-12 col-lg-7 js-drag-move-field c-none"
          data-cursor-text="Drag"
        >
          <div ref="thumbSlider" class="swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(slide, index) in awardSlider"
                :key="index"
                class="swiper-slide"
              >
                <div class="award-slider__right-item">
                  <div class="award-slider__right-item__image">
                    <div class="award-image">
                      <img :src="slide.awardImg" alt="" />
                    </div>
                    <img :src="slide.img" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  Swiper,
  Navigation,
  Pagination,
  EffectCoverflow,
  Thumbs,
} from "swiper";
export default {
  data() {
    return {
      awardSlider: [
        {
          title: "Chace people",
          subTitle: "KRİSTAL ELMA SILVER AWARD",
          img: "/images/work-chace.jpg",
          awardImg: "/images/kristal.png",
        },
        {
          title: "Latro",
          subTitle: "Horizon Silver Winner",
          img: "/images/work-latro.jpg",
          awardImg: "/images/horizon.png",
        },
        {
          title: "Trowas",
          subTitle: "Altin Orumcek Finalist",
          img: "/images/work-trowas.jpg",
          awardImg: "/images/orumcek.png",
        },
      ],
    };
  },
  async mounted() {
    Swiper.use([Navigation, Pagination, EffectCoverflow, Thumbs]);
    await this.$nextTick();
    const swiperText = new Swiper(this.$refs.textSlider, {
      loop: true,
      direction: "vertical",
      slidesPerView: 1,
      speed: 800,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      onlyExternal: true,
    });

    const swiperThumb = new Swiper(this.$refs.thumbSlider, {
      loop: true,
      modules: [Thumbs],
      slidesPerView: 1,
      speed: 800,
      direction: "vertical",
      thumbs: {
        swiper: swiperText,
      },
    });
  },
};
</script>
