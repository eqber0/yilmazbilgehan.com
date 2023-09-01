<script setup>
const textSliderBreakpoints = {
  sm: 320,
  direction: "horizontal",
  spaceBetween: 40,
  slidesPerView: 1,
  loop: true,
  md: 992,
  loop: false,
  direction: "vertical",
}
const thumbSliderBreakpoints = {
  sm: 320,
  direction: "horizontal",
  spaceBetween: 40,
  slidesPerView: 1,
  loop: true,
  md: 992,
  loop: false,
  direction: "vertical",
}
const textSlider = ref()
const awardSlider = ref()
function onSwiper(swiper) {
  textSlider.value = swiper
}
function onAwardSwiper(swiper) {
  awardSlider.value = swiper
}

// Cursor Functions
const cursor = ref()
const cursorText = ref()
function dragMoveCursor(text, status) {
  if (status) {
    cursor.value.classList.add("is-drag")
    cursorText.value.innerHTML = text
  } else {
    cursor.value.classList.remove("is-drag")
    cursorText.value.innerHTML = ""
  }
}
function linkFieldCursor(text, status) {
  if (status) {
    cursor.value.classList.add("is-link")
    cursorText.value.innerHTML = text
  } else {
    cursor.value.classList.remove("is-link")
    cursorText.value.innerHTML = ""
  }
}
function touchStartFn() {
  awardSlider.value.el.classList.add("award-slider-touch")
}
function touchEndFn() {
  awardSlider.value.el.classList.remove("award-slider-touch")
}

onMounted(() => {
  cursor.value = document.querySelector(".cursor")
  cursorText.value = cursor.value.querySelector(".cursor__txt")
})
onUnmounted(() => {
  cursor.value.classList.remove("is-drag")
  cursor.value.classList.remove("is-link")
  cursorText.value.innerHTML = ""
})

const props = defineProps({
  projects: {
    type: Array,
    default: [],
  },
})
</script>

<template>
  <section class="section award-slider">
    <div class="container">
      <div
        class="award-slider__wrapper row g-4 g-md-5 align-items-center c-white flex-column-reverse flex-lg-row"
      >
        <div class="award-slider__text col-12 col-lg-5">
          <Swiper
            :slides-per-view="1"
            :loop="false"
            :speed="1000"
            :watchSlidesProgress="true"
            :watchSlidesVisibility="true"
            :allowTouchMove="false"
            :breakpoints="{
              320: {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 40,
              },
              992: {
                direction: 'vertical',
              },
            }"
            @swiper="onSwiper"
          >
            <SwiperSlide v-for="(slide, index) in props.projects" :key="index">
              <NuxtLink
                :to="{
                  path: `project-detail/${slide?.slug}`,
                }"
              >
                <div
                  class="award-slider__text-item"
                  @mouseenter="linkFieldCursor('View Project', true)"
                  @mouseleave="linkFieldCursor('View Project', false)"
                >
                  <div
                    class="award-slider__text-item__title txt txt--rem64 txt--font900 c-white"
                  >
                    {{ slide?.name }}
                  </div>
                  <div
                    class="award-slider__text-item__subtitle txt txt--rem28 txt--font300 c-paragraph"
                  >
                    {{ slide?.awardName }}
                  </div>
                </div>
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          class="award-slider__right col-12 col-lg-7 c-none"
          @mouseenter="dragMoveCursor('Drag', true)"
          @mouseleave="dragMoveCursor('Drag', false)"
        >
          <Swiper
            ref="thumbSlider"
            :modules="[
              SwiperThumbs,
              SwiperNavigation,
              SwiperNavigation,
              SwiperManipulation,
            ]"
            :slides-per-view="1"
            :thumbs="{ swiper: textSlider }"
            :speed="1000"
            :loop="false"
            :breakpoints="{
              320: {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 40,
              },
              992: {
                direction: 'vertical',
              },
            }"
            :navigation="{
              prevEl: '.award-slider__buttons-prev',
              nextEl: '.award-slider__buttons-next',
            }"
            @swiper="onAwardSwiper"
            @touch-start="touchStartFn"
            @touch-end="touchEndFn"
          >
            <SwiperSlide v-for="(image, index) in props.projects" :key="index">
              <div class="award-slider__right-item">
                <div class="award-image">
                  <img :src="image?.awardImage" alt="" />
                </div>
                <div class="award-slider__right-item__image">
                  <img :src="image?.cover" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <div class="award-slider__buttons">
              <div class="award-slider__buttons-prev">
                <nuxt-icon class="icon icon-font" name="iconArrow" />
              </div>
              <div class="award-slider__buttons-next">
                <nuxt-icon class="icon icon-font" name="iconArrow" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
