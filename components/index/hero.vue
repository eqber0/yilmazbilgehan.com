<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__text">
          <h1 class="txt txt--rem128 txt--font900 c-white">
            Good design is about <span class="c-primary">process</span>, not
            <span class="c-secondary">product</span>.
          </h1>
        </div>
        <div class="hero__scroll">
          <div class="hero__scroll-line"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const heroText = document.querySelector(".hero__text .txt");
    setTimeout(() => {
      heroText.classList.add("loaded");
    }, 1500);
  },
};
</script>
