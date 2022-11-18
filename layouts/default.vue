<template>
  <div>
    <appHeader />
    <Nuxt />
    <appFooter />
    <div class="cursor">
      <div class="cursor__txt"></div>
      <div class="cursor__icon"></div>
    </div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="particleOptions"
    />
  </div>
</template>

<script>
import Vue from "vue";
import appHeader from "../components/common/appHeader.vue";
import appFooter from "../components/common/appFooter.vue";
import Particles from "particles.vue";
import { loadFull } from "tsparticles";
Vue.use(Particles);
export default {
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      particleOptions: {
        particles: {
          number: {
            value: 500,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#ffffff",
            },
            polygon: {
              nb_sides: 8,
            },
          },
          opacity: {
            value: 0.7,
            random: false,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        detectRetina: true,
      },
    };
  },
  mounted() {
    const dragMoveField = document.querySelectorAll(".js-drag-move-field");
    const linkField = document.querySelectorAll(".js-link-field");
    const cursor = document.querySelector(".cursor");

    dragMoveField.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        cursor.classList.add("is-drag");
        let cursorText = e.getAttribute("data-cursor-text");
        cursor.querySelector(".cursor__txt").innerHTML = cursorText;
      });
      e.addEventListener("mouseleave", () => {
        cursor.classList.remove("is-drag");
      });
    });
    linkField.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        cursor.classList.add("is-link");
        let cursorText = e.getAttribute("data-cursor-text");
        cursor.querySelector(".cursor__txt").innerHTML = cursorText;
      });
      e.addEventListener("mouseleave", () => {
        cursor.classList.remove("is-link");
        cursor.querySelector(".cursor__txt").innerHTML = "";
      });
    });
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });
    document.addEventListener("pointermove", movecursor);
    function movecursor(e) {
      gsap.to(cursor, {
        duration: false,
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "slow",
      });
    }
  },
  methods: {
    particlesInit(engine) {
      loadFull(engine);
    },
    particlesLoaded(container) {
      console.log("Particles container loaded", container);
    },
  },
};
</script>

AppHeader
