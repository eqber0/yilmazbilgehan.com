<script setup>
const props = defineProps({
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
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="work-detail__about">
        <mainTitle
          class="text-center"
          type="bold"
          :title="'About ' + props.aboutName"
        />
        <br />
        <p
          v-if="props.aboutDesc"
          class="txt txt--rem32 txt--font300 c-white text-center"
        >
          {{ props.aboutDesc }}
        </p>
        <br />
        <br />
        <v-button
          v-if="props.websiteHref"
          color=""
          icon="iconArrow"
          hover="primary"
          text="Visit Website"
          type="centered"
          element="a"
          :href="props.websiteHref"
          :target="true"
        />
      </div>
    </div>
  </section>
</template>
