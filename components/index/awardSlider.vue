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
                    path: `work-detail/${slide.slug}`,
                  }"
                >
                  <div
                    ref="linkCursor"
                    class="award-slider__text-item"
                    data-cursor-text="View Project"
                  >
                    <div
                      class="award-slider__text-item__title txt txt--rem64 txt--font900 c-white"
                    >
                      {{ slide.name }}
                    </div>
                    <div
                      class="award-slider__text-item__subtitle txt txt--rem28 txt--font300 c-paragraph"
                    >
                      {{ slide.awardText }}
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div
          ref="dragCursor"
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
                  <div class="award-image">
                    <img :src="slide.awardImage" alt="" />
                  </div>
                  <div class="award-slider__right-item__image">
                    <img :src="slide.heroImg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="award-slider__buttons">
        <div class="award-slider__buttons-prev">
          <svg-icon name="iconArrow" />
        </div>
        <div class="award-slider__buttons-next">
          <svg-icon name="iconArrow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Thumbs, Autoplay, Navigation } from "swiper";
Swiper.use([Thumbs, Autoplay, Navigation]);
export default {
  data() {
    return {
      awardSlider: [],
    };
  },
  async mounted() {
    this.awardSlider = await this.$store.state.works.filter(
      (item) => item.awarded === true
    );
    this.$nextTick(() => {
      const swiperText = new Swiper(this.$refs.textSlider, {
        loop: false,
        direction: "vertical",
        slidesPerView: 1,
        speed: 1000,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        allowTouchMove: false,
        breakpoints: {
          320: {
            direction: "horizontal",
            spaceBetween: 40,
            slidesPerView: 1,
            loop: true,
          },
          991: {
            loop: false,
            direction: "vertical",
          },
        },
      });
      const swiperThumb = new Swiper(this.$refs.thumbSlider, {
        loop: false,
        slidesPerView: 1,
        speed: 1000,
        direction: "vertical",
        thumbs: {
          swiper: swiperText,
        },
        breakpoints: {
          320: {
            direction: "horizontal",
            spaceBetween: 40,
            slidesPerView: 1,
            loop: true,
          },
          991: {
            loop: false,
            direction: "vertical",
          },
        },
        navigation: {
          prevEl: ".award-slider__buttons-prev",
          nextEl: ".award-slider__buttons-next",
        },
        on: {
          touchStart: function (e) {
            e.el.classList.add("award-slider-touch");
            document.querySelector(".cursor").classList.add("is-drag-active");
          },
          touchEnd: function (e) {
            e.el.classList.remove("award-slider-touch");
            document
              .querySelector(".cursor")
              .classList.remove("is-drag-active");
          },
        },
      });

      this.cursorFn();
    });
  },
  methods: {
    cursorFn() {
      const cursor = document.querySelector(".cursor");
      const dragMoveField = this.$refs.dragCursor;
      const linkField = this.$refs.linkCursor;

      dragMoveField.addEventListener("mouseenter", () => {
        let cursorText = dragMoveField.getAttribute("data-cursor-text");
        cursor.querySelector(".cursor__txt").innerHTML = cursorText;
        cursor.classList.add("is-drag");
      });
      dragMoveField.addEventListener("mouseleave", () => {
        cursor.classList.remove("is-drag");
        cursor.classList.remove("is-drag-loading");
        cursor.querySelector(".cursor__txt").innerHTML = "";
      });
      linkField.map((item) => {
        item.addEventListener("mouseenter", () => {
          cursor.classList.add("is-link");
          let cursorText = item.getAttribute("data-cursor-text");
          cursor.querySelector(".cursor__txt").innerHTML = cursorText;
        });
        item.addEventListener("mouseleave", () => {
          cursor.classList.remove("is-link");
          cursor.querySelector(".cursor__txt").innerHTML = "";
        });
      });
    },
  },
};
</script>
