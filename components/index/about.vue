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
        <div class="index-about__skills">
          <div class="index-about__skills-progress" v-if="about.skills">
            <div
              v-for="(item, index) in about.skills"
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
                ></div>
              </div>
            </div>
          </div>
          <div class="index-about__skills-image">
            <img :src="about.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapState, mapGetters } from "vuex";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      about: {
        image: "images/bilgehan.png",
        skills: [
          { title: "HTML 5", percent: 87 },
          { title: "CSS", percent: 93 },
          { title: "Javascript", percent: 76 },
          { title: "Vue.js", percent: 66 },
          { title: "Nuxt.js", percent: 57 },
        ],
      },
    };
  },
  mounted() {
    gsap.from(this.$refs.progressItem, {
      scrollTrigger: {
        trigger: this.$refs.progressItem,
        start: "center-=100 center",
        end: "center-=100 center",
      },
      width: 0,
      ease: "power2",
      duration: 1,
    });
  },
};
</script>
