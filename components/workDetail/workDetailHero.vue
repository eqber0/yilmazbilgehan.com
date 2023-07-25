<script setup>
const workDetailImg = ref()
onMounted(() => {
  console.log(props.heroImage)
  if (props.heroImage) {
    console.log(workDetailImg.value)
    workDetailImg.value.style.backgroundImage = "url(" + props.heroImage + ")"
  }
})

const workSliderBp = {
  xm: 320,
  slidesPerView: 1.25,
  sm: 569,
  slidesPerView: 1.5,
  m: 768,
  slidesPerView: 2.25,
  md: 992,
  slidesPerView: 3,
}

const props = defineProps({
  sliderImages: {
    type: Array,
    default: () => [],
  },
  heroImage: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <section class="work-detail">
    <div class="container">
      <div ref="workDetailImg" class="work-detail-image"></div>
      <div v-if="props.sliderImages.length > 0" class="work-detail__slider">
        <Swiper
          ref="workSlider"
          :modules="[SwiperAutoplay]"
          :slidesPerView="3"
          :loop="true"
          :spaceBetween="40"
          :speed="1500"
          :autoplay="{ delay: 3000 }"
          :breakpoints="workSliderBp"
        >
          <SwiperSlide v-for="slide in props.sliderImages" :key="slide.id">
            <div class="work-detail__slider-item">
              <img :src="slide.image" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
