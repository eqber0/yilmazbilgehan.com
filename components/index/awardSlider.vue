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
                <a href="#0" class="award-slider__text-item">
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
        <div class="col-12 col-lg-7">
          <div ref="thumbSlider" class="swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(slide, index) in awardSlider"
                :key="index"
                class="swiper-slide"
              >
                <div class="award-slider__image">
                  <img :src="slide.img" alt="" />
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
export default {
  data() {
    return {
      awardSlider: [
        {
          title: "Chace people",
          subTitle: "Job Search Website",
          img: "/images/work-chace.jpg",
        },
        {
          title: "Latro",
          subTitle: "Corporate Website",
          img: "/images/work-latro.jpg",
        },
        {
          title: "Trowas",
          subTitle: "E Commerce Website",
          img: "/images/work-trowas.jpg",
        },
      ],
    };
  },
  mounted() {
    // Thumb Slider
    this.swiperThumb = new this.$swiper(this.$refs.thumbSlider, {
      loop: true,
      // configure Swiper to use modules
      modules: [this.$swiperModules.Thumbs, this.$swiperModules.EffectFade],
      slidesPerView: 1,
      effect: "fade",
      speed: 800,
    });

    this.swiper = new this.$swiper(this.$refs.textSlider, {
      loop: true,
      // configure Swiper to use modules
      modules: [this.$swiperModules.Thumbs],
      direction: "vertical",
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 200,
      speed: 800,
      thumbs: {
        swiper: this.swiperThumb,
      },
    });
  },
};
</script>
