<script setup>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const socials = ref([
  {
    icon: "iconLinkedin",
    link: "https://www.linkedin.com/in/bilgehan-y%C4%B1lmaz-a723b0220/",
  },
  {
    icon: "iconGithub",
    link: "https://github.com/eqber0",
  },
  {
    icon: "iconTwitter",
    link: "https://twitter.com/eqbeR_",
  },
])
const skills = ref([
  { title: "HTML 5", percent: 87 },
  { title: "CSS", percent: 93 },
  { title: "Javascript", percent: 76 },
  { title: "Vue.js", percent: 66 },
  { title: "Nuxt.js", percent: 37 },
])
const languages = ref([
  {
    language: "Turkish",
    level: "Native",
  },
  {
    language: "English",
    level: "B1",
  },
])

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
</script>

<template>
  <main class="detail-page">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title route-transition">
          <mainTitle title="About Me" />
        </div>
      </div>
      <div class="about__wrapper route-transition">
        <div class="row g-4 g-md-5">
          <div class="col-12 col-xl-4">
            <div class="about__sticky">
              <div class="about__image">
                <img src="~/assets/images/bilgehan.png" alt="" />
              </div>

              <div class="about__info c-white mt-5">
                <authorCard name="Bilgehan Yılmaz" title="Frontend Developer" />
                <div class="about__info-cards mt-5">
                  <infoCard title="email" value="eqber00@gmail.com" />
                  <infoCard title="adress" value="Bursa / Nilüfer" />
                  <infoCard type="socials" title="socials" :socials="socials" />
                  <infoCard title="phone" value="0555 685 77 45" />
                </div>
                <div class="about__info-languages mt-5">
                  <div
                    class="about__info-languages__item"
                    v-for="(item, index) in languages"
                    :key="index"
                  >
                    {{ item.language }}
                    <span v-if="item.level">{{ item.level }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-8">
            <div class="about__section about__section--pb0">
              <div class="about__section-title">
                <mainTitle type="bold" title="About Me" />
              </div>
              <div class="about__section-content">
                <div class="txt txt--rem32 txt--font300 c-white">
                  I am a passionate and results-driven
                  <span>Frontend Developer</span> who is dedicated to staying
                  updated with the latest technologies. My fearless
                  experimentation has led me to craft award-winning websites.
                  Committed to excellence, I ensure satisfaction by leveraging
                  efficient technologies. I aspire to be an ever-evolving
                  developer, pushing innovation and embracing challenges to
                  continuously refine my skills. With relentless drive, I
                  consistently exceed expectations, delivering exceptional
                  results in every project.
                </div>
              </div>
            </div>
            <div class="about__section">
              <div class="about__section-title">
                <mainTitle type="bold" title="Education Phase" />
              </div>
              <div class="about__section-content">
                <experienceItem
                  date="2016-2020"
                  title=" High School Graduate"
                  text="Süleyman Çelebi High School"
                />
              </div>
            </div>
            <div class="about__section">
              <div class="about__section-content">
                <div class="index-about__skills-progress p-0" v-if="skills">
                  <div
                    v-for="(item, index) in skills"
                    :key="index"
                    class="index-about__skills-progress__item"
                  >
                    <div class="index-about__skills-progress__item-title">
                      <h4 class="txt txt--rem32 txt--font400 c-white">
                        {{ item.title }}
                      </h4>
                    </div>
                    <div
                      class="index-about__skills-progress__item-line progress"
                    >
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
              </div>
            </div>
            <div class="about__section about__section--bb0">
              <div class="about__section-title">
                <mainTitle type="bold" title="Work Experience" />
              </div>
              <div class="about__section-content">
                <experienceItem
                  date="July 2021 - Now"
                  title="Babel Agency"
                  text="Frontend Developer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
