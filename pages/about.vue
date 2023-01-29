<template>
  <main class="detail-page">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title txt txt--rem128 txt--font900 c-white">
          <h1>About <span class="c-primary">Me</span></h1>
        </div>
      </div>
      <div class="about__wrapper row g-4 g-md-5">
        <div class="col-12 col-lg-4">
          <div class="about__sticky">
            <div class="about__image">
              <img src="~/static/images/bilgehan.png" alt="" />
            </div>
            <div class="about__info c-white mt-5">
              <div class="txt txt--rem48 txt--font300">Bilgehan Yılmaz</div>
              <div class="txt txt--rem24 txt--font300 c-paragraph">
                Frontend Developer
              </div>
              <div class="about__info-cards mt-5">
                <div class="about__info-cards__item">
                  <div
                    class="about__info-cards__item-title txt txt--rem28 txt--font300 c-primary"
                  >
                    mail
                  </div>
                  <div
                    class="about__info-cards__item-subtitle txt txt--rem32 txt--font700 c-white"
                  >
                    eqber@gmail.com
                  </div>
                </div>
                <div class="about__info-cards__item">
                  <div
                    class="about__info-cards__item-title txt txt--rem28 txt--font300 c-primary"
                  >
                    address
                  </div>
                  <div
                    class="about__info-cards__item-subtitle txt txt--rem32 txt--font700 c-white"
                  >
                    Bursa / Nilüfer
                  </div>
                </div>
                <div class="about__info-cards__item">
                  <div
                    class="about__info-cards__item-title txt txt--rem28 txt--font300 c-primary"
                  >
                    socials
                  </div>
                  <div
                    class="about__info-cards__item-subtitle txt txt--rem32 txt--font700 c-white"
                  >
                    <div
                      v-if="socials"
                      class="footer__info-content__item-socials justify-content-start"
                    >
                      <div
                        v-for="(social, index) in socials"
                        :key="index"
                        class="footer__info-content__item-socials__item me-5"
                      >
                        <a target="_blank" :href="social.link">
                          <svg-icon :name="social.icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="about__info-cards__item">
                  <div
                    class="about__info-cards__item-title txt txt--rem28 txt--font300 c-primary"
                  >
                    phone
                  </div>
                  <div
                    class="about__info-cards__item-subtitle txt txt--rem32 txt--font700 c-white"
                  >
                    0555 685 77 45
                  </div>
                </div>
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
        <div class="col-12 col-lg-8">
          <div class="about__content">
            <h1 class="txt txt--rem48 txt--font300 c-white mb-5">
              About <span class="txt--font400">Me</span>
            </h1>
            <div
              class="about__content__text txt txt--rem32 txt--font300 c-white"
            >
              I am a <span>Frontend Developer</span> who has been keeping up
              with the developing technologies for almost 2 years, not afraid to
              experiment, and has been developing award-winning websites in this
              process. With my results-oriented mindset, I have ensured
              unequivocal satisfaction with the product or service by searching,
              learning and applying efficient technologies. While developing
              award-winning projects, I always aimed my vision at the top and
              used the most appropriate technology for the projects. I am
              experienced in working with a team and I see myself as someone who
              can contribute to teamwork. my vision; is to improve myself and
              where I am to always be the best you can be.
            </div>
          </div>
          <div class="about__education">
            <h1 class="txt txt--rem48 txt--font300 c-white mb-5">
              Education <span class="txt--font400">Phase</span>
            </h1>
            <div class="about__education__wrapper">
              <div class="about__education-item d-flex align-items-center">
                <div
                  class="about__education-item__date txt txt--rem32 txt--font700 c-white"
                >
                  2023-2019
                </div>
                <div class="about__education-item__content">
                  <div class="txt txt--rem32 txt--font700 c-white">
                    BACHELORS DEGREE
                    <br />
                    <span class="txt txt--rem24 txt--font400 c-paragraph">
                      Atatürk University / Advertising Managament
                    </span>
                  </div>
                </div>
              </div>
              <div class="about__education-item d-flex align-items-center">
                <div
                  class="about__education-item__date txt txt--rem32 txt--font700 c-white"
                >
                  2019-2015
                </div>
                <div class="about__education-item__content">
                  <div class="txt txt--rem32 txt--font700 c-white">
                    HIGH SCHOOL GRADUATE
                    <br />
                    <span class="txt txt--rem24 txt--font400 c-paragraph">
                      Süleyman Çelebi High School
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about__skills">
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
          </div>
          <div class="about__experience">
            <h1 class="txt txt--rem48 txt--font300 c-white mb-5">
              Work <span class="txt--font400">Experience</span>
            </h1>
            <div class="about__education__wrapper">
              <div class="about__education-item d-flex align-items-center">
                <div
                  class="about__education-item__date txt txt--rem32 txt--font700 c-white"
                >
                  Now-2021
                </div>
                <div class="about__education-item__content">
                  <div class="txt txt--rem32 txt--font700 c-white">
                    BABEL AGENCY
                    <br />
                    <span class="txt txt--rem24 txt--font400 c-paragraph">
                      UX/UI Designer
                    </span>
                  </div>
                </div>
              </div>
              <div class="about__education-item d-flex align-items-center">
                <div
                  class="about__education-item__date txt txt--rem32 txt--font700 c-white"
                >
                  2019-2017
                </div>
                <div class="about__education-item__content">
                  <div class="txt txt--rem32 txt--font700 c-white">
                    MCC AGENCY
                    <br />
                    <span class="txt txt--rem24 txt--font400 c-paragraph">
                      Graphic Designer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      socials: [
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
        {
          icon: "iconInstagram",
          link: "https://www.instagram.com/eqber_/",
        },
      ],
      skills: [
        { title: "HTML 5", percent: 87 },
        { title: "CSS", percent: 93 },
        { title: "Javascript", percent: 76 },
        { title: "Vue.js", percent: 66 },
        { title: "Nuxt.js", percent: 57 },
      ],
      languages: [
        {
          language: "Turkish",
          level: "Native",
        },
        {
          language: "English",
          level: "B2",
        },
        {
          language: "Deutch",
          level: "Fluent",
        },
      ],
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
