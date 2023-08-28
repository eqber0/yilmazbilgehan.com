<script setup>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePersonalStore } from "~/stores/personal-info"
gsap.registerPlugin(ScrollTrigger)

const personalStore = usePersonalStore()
const skillData = ref(personalStore.skills)

const progressItem = ref()
onMounted(() => {
  gsap.from(progressItem.value, {
    scrollTrigger: {
      trigger: progressItem.value,
      start: "center-=100 center",
      end: "center-=100 center",
    },
    width: 0,
    ease: "power2",
    duration: 1,
  })
})

const props = defineProps({
  skillData: {
    type: Array,
    default: [],
  },
})
</script>

<template>
  <section class="section section--pt0 index-about">
    <div class="container">
      <div class="index-about__wrapper">
        <div class="index-about__text">
          <h4 class="txt txt--rem48 txt--font900 c-white">
            Hi, <span>Bilgehan</span> here.
            <br />
            I am a
            <span>Frontend Developer</span> who constantly seeks out innovative
            solutions to everyday problems. For whatever reason it is you are
            here, <span>welcome</span>.
          </h4>
        </div>
        <div v-if="skillData" class="index-about__skills">
          <div class="index-about__skills-progress" v-if="skillData">
            <div
              v-for="(item, index) in skillData"
              :key="index"
              class="index-about__skills-progress__item"
            >
              <div class="index-about__skills-progress__item-title">
                <h4 class="txt txt--rem32 txt--font400 c-white">
                  {{ item.title }}
                </h4>
              </div>
              <div class="index-about__skills-progress__item-line progress">
                <div
                  class="progress-bar"
                  ref="progressItem"
                  role="progressbar"
                  :style="'width:' + item.percent + '%'"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  @load="progressItemFn($event)"
                ></div>
              </div>
            </div>
          </div>
          <div class="index-about__skills-image">
            <img src="~/assets/images/bilgehan.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
