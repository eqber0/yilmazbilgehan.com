<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__text">
          <h1 class="txt txt--rem128 txt--font900 c-white">
            <div class="text-line route-transition">
              <p class="text-line-inner route-transition-inner">
                Good design is
              </p>
            </div>
            <div class="text-line route-transition">
              <p
                class="text-line-inner route-transition-inner route-transition-inner--second"
              >
                about
                <span class="c-primary">process</span>,
              </p>
            </div>
            <div class="text-line route-transition">
              <p
                class="text-line-inner route-transition-inner route-transition-inner--third"
              >
                not
                <span class="c-secondary">product</span>.
              </p>
            </div>
          </h1>
        </div>
        <div class="route-transition">
          <div
            class="hero__scroll route-transition-inner route-transition-inner--fourth"
          >
            <div class="hero__scroll-line"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const heroText = document.querySelectorAll(".hero__text .text-line-inner");
    setTimeout(() => {
      heroText.forEach((e) => {
        e.classList.add("loaded");
      });
    }, 1500);
  },
};
</script>
