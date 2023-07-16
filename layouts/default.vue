<script setup>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const cursor = ref()

onMounted(() => {
  cursor.value = document.querySelector(".cursor")
  gsap.set(cursor.value, {
    xPercent: -50,
    yPercent: -50,
  })
  document.addEventListener("pointermove", movecursor)
  function movecursor(e) {
    gsap.to(cursor.value, {
      duration: false,
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "slow",
    })
  }
})
</script>
<template>
  <div>
    <appHeader />
    <slot />

    <!-- <AppFooter /> -->
    <div class="cursor">
      <div class="cursor__txt"></div>
      <div class="cursor__icon"></div>
    </div>
  </div>
</template>
