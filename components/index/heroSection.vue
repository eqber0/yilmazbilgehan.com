<script setup>
const isLoaded = ref(false)

const nuxtApp = useNuxtApp()
nuxtApp.hook("page:finish", () => {
  isLoaded.value = true
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__text">
          <h1 class="txt txt--rem128 txt--font900 c-white">
            <div class="text-line">
              <p
                class="text-line-inner"
                :class="isLoaded ? 'loaded' : undefined"
              >
                Good design is
              </p>
            </div>
            <div class="text-line">
              <p
                class="text-line-inner"
                :class="isLoaded ? 'loaded' : undefined"
              >
                about
                <span class="c-primary">process</span>,
              </p>
            </div>
            <div class="text-line">
              <p
                class="text-line-inner"
                :class="isLoaded ? 'loaded' : undefined"
              >
                not
                <span class="c-secondary">product</span>.
              </p>
            </div>
          </h1>
        </div>
        <div class="">
          <div class="hero__scroll">
            <div class="hero__scroll-line"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["isLoaded"],
  mounted() {
    if (this.isLoaded) {
      const heroText = document.querySelectorAll(".hero__text .text-line-inner")
      setTimeout(() => {
        heroText.forEach((e) => {
          e.classList.add("loaded")
        })
      }, 1500)
    }
  },
}
</script>
