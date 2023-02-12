<template>
  <section class="section">
    <div class="container">
      <div class="work-detail__about">
        <h2 class="txt txt--rem48 txt--font300 c-white text-center">
          About Chace <b>People</b>
        </h2>
        <br />
        <p class="txt txt--rem32 txt--font300 c-white text-center">
          {{ aboutDesc }}
        </p>
        <br />
        <br />
        <v-button
          color=""
          icon="iconArrow"
          hover="primary"
          text="Visit Website"
          type="centered"
          element="a"
          :href="websiteHref"
          :target="true"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    websiteHref: {
      type: String,
      default: "",
    },
    aboutDesc: {
      type: String,
      default: "",
    },
    aboutName: {
      type: String,
      default: "",
    },
  },
};
</script>
