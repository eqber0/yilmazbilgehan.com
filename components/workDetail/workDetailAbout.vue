<template>
  <section class="section">
    <div class="container">
      <div class="work-detail__about">
        <!-- <h2 class="txt txt--rem48 txt--font300 c-white text-center">About</h2> -->
        <mainTitle
          class="text-center"
          type="bold"
          :title="'About ' + aboutName"
        />
        <br />
        <p
          v-if="aboutDesc"
          class="txt txt--rem32 txt--font300 c-white text-center"
          v-html="aboutDesc"
        >
          <!-- {{ aboutDesc }} -->
        </p>
        <br />
        <br />
        <v-button
          v-if="websiteHref"
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
