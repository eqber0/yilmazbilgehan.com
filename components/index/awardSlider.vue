<template>
  <section class="section award-slider">
    <div class="container">
      <div
        class="award-slider__wrapper row g-4 g-md-5 align-items-center c-white flex-column-reverse flex-lg-row"
      >
        <div class="award-slider__text col-12 col-lg-5">
          <div ref="textSlider" class="swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(slide, index) in awardSlider"
                :key="index"
                class="swiper-slide"
              >
                <NuxtLink
                  :to="{
                    path: `work-detail/${slide.title
                      .toLowerCase()
                      .replace(/ /g, '-')}`,
                  }"
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
                </NuxtLink>
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
import { Swiper, Thumbs, Autoplay } from "swiper";
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
    Swiper.use([Thumbs, Autoplay]);
    await this.$nextTick();
    const swiperText = new Swiper(this.$refs.textSlider, {
      loop: true,
      direction: "vertical",
      slidesPerView: 1,
      speed: 1000,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      onlyExternal: true,
      breakpoints: {
        320: {
          direction: "horizontal",
          spaceBetween: 75,
          slidesPerView: 1,
        },
        991: {
          direction: "vertical",
        },
      },
    });

    const swiperThumb = new Swiper(this.$refs.thumbSlider, {
      loop: true,
      modules: [Thumbs, Autoplay],
      slidesPerView: 1,
      speed: 1000,
      direction: "vertical",
      autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
      },
      thumbs: {
        swiper: swiperText,
      },
      breakpoints: {
        320: {
          direction: "horizontal",
          spaceBetween: 75,
          slidesPerView: 1,
        },
        991: {
          direction: "vertical",
        },
      },
    });
  },
};
</script>
