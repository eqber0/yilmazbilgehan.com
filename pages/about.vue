<template>
  <main class="detail-page">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title">
          <mainTitle title="About Me" />
        </div>
      </div>
      <div class="about__wrapper row g-4 g-md-5">
        <div class="col-12 col-xl-4">
          <div class="about__sticky">
            <div class="about__image">
              <img src="~/static/images/bilgehan.png" alt="" />
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
                I am a <span>Frontend Developer</span> who has been keeping up
                with the developing technologies for almost 2 years, not afraid
                to experiment, and has been developing award-winning websites in
                this process. With my results-oriented mindset, I have ensured
                unequivocal satisfaction with the product or service by
                searching, learning and applying efficient technologies. While
                developing award-winning projects, I always aimed my vision at
                the top and used the most appropriate technology for the
                projects. I am experienced in working with a team and I see
                myself as someone who can contribute to teamwork. my vision; is
                to improve myself and where I am to always be the best you can
                be.
              </div>
            </div>
          </div>
          <div class="about__section">
            <div class="about__section-title">
              <mainTitle type="bold" title="Education Phase" />
            </div>
            <div class="about__section-content">
              <experienceItem
                date="2023-2019"
                title="BACHELORS DEGREE"
                text="Atatürk University / Advertising Managament"
              />
              <experienceItem
                date="2019-2015"
                title=" HIGH SCHOOL GRADUATE"
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
          </div>
          <div class="about__section about__section--bb0">
            <div class="about__section-title">
              <mainTitle type="bold" title="Work Experience" />
            </div>
            <div class="about__section-content">
              <experienceItem
                date="Now - July 2021"
                title=" BABEL AGENCY"
                text="Frontend Developer"
              />
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
      socials: [],
      skills: [],
      languages: [
        {
          language: "Turkish",
          level: "Native",
        },
        {
          language: "English",
          level: "B1",
        },
      ],
    };
  },
  async mounted() {
    this.socials = await this.$store.state.socials;
    this.skills = await this.$store.state.skills;
    this.$nextTick(() => {
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
    });
  },
};
</script>
