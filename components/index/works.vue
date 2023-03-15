<template>
  <section class="section index-works">
    <div class="container">
      <div class="index-works__wrapper">
        <div ref="indexWorksSlider" class="index-works__slider">
          <div
            class="work-carousel animResize tc"
            data-min="900"
            style=""
            data-height="1140"
          >
            <div id="mod-swiper" class="carousel-spinner" style="">
              <div ref="carouselGroup" class="carousel-group">
                <div
                  v-for="(item, i) in workList.slice(0, 5)"
                  :key="i"
                  class="thumb-wrap"
                >
                  <div class="work-thumb">
                    <NuxtLink
                      :to="{
                        path: `work-detail/${item.slug}`,
                      }"
                      class="index-works__slider-item"
                    >
                      <div class="index-works__slider-item__image">
                        <nuxt-img loading="lazy" :src="item.heroImg" alt="" />
                      </div>
                      <div class="index-works__slider-item__content">
                        <div class="index-works__slider-item__content-title">
                          <h3 class="txt txt--rem32 txt--font900 c-white">
                            {{ item.name }}
                          </h3>
                          <p class="txt txt--rem20 txt--font300 c-white">
                            {{ item.type }}
                          </p>
                        </div>
                        <div
                          class="index-works__slider-item__content-button c-white"
                        >
                          <svg-icon name="iconArrow" />
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="index-works__mobile">
            <NuxtLink
              v-for="(item, index) in workList.slice(0, 3)"
              :key="index"
              :to="{
                path: `work-detail/${item.slug}`,
              }"
              class="index-works__slider-item"
            >
              <div class="index-works__slider-item__image">
                <nuxt-img quality="80" format="webp" :src="item.heroImg" />
              </div>
              <div class="index-works__slider-item__content">
                <div class="index-works__slider-item__content-title">
                  <h3 class="txt txt--rem32 txt--font900 c-white">
                    {{ item.name }}
                  </h3>
                  <p class="txt txt--rem20 txt--font300 c-white">
                    {{ item.type }}
                  </p>
                </div>
                <div class="index-works__slider-item__content-button c-white">
                  <svg-icon name="iconArrow" />
                </div>
              </div>
            </NuxtLink>
          </div>
          <v-button
            element="nuxt-link"
            href="/works"
            color=""
            icon="iconArrow"
            hover="primary"
            text="More Work"
            type="centered"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapState, mapGetters } from "vuex";

import gsap from "gsap";
export default {
  data() {
    return {
      workList: [],
    };
  },

  mounted() {
    this.workList = this.$store.state.works;
    this.$nextTick(() => {
      this.initHomeWork();
    });
  },
  methods: {
    initHomeWork() {
      var carouselOn = true;
      var carousel_tl;
      var startRot;
      var cTot;
      var cSpeed;
      var rotLoop;
      var cRot = 13;
      var startRot = -26;
      var cTot = $(".carousel-spinner").find(".work-thumb").length;
      var cSpeed = 25;
      var rotLoop = -cTot * cRot;
      // set position of thumbs around carousel

      $(".index-works__slider")
        .find(".thumb-wrap")
        .each(function (i) {
          gsap.set($(this), { rotation: cRot * i });
        });

      // duplicate carousel for looping

      $(".carousel-group")
        .clone()
        .addClass("loop")
        .appendTo(".carousel-spinner");
      gsap.set($(".carousel-group.loop"), {
        rotation: startRot + cRot * cTot,
      });

      // carousel mover

      carouselOn = true;
      carousel_tl = gsap.timeline({ repeat: -1 }).to($(".carousel-spinner"), {
        duration: cSpeed,
        rotation: rotLoop,
        ease: "none",
      });

      // carousel control

      $(".work-thumb").mouseenter(function () {
        if (carouselOn) {
          stopCarousel();
        }
      });

      $(".work-thumb").mouseleave(function () {
        if (carouselOn) {
          moveCarousel();
        }
      });
      function moveCarousel() {
        carousel_tl.play();
      }
      function stopCarousel() {
        carousel_tl.pause();
      }
    },
  },
};
</script>
