<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="work-detail__about">
        <mainTitle
          v-if="props.item.name"
          class="text-center"
          type="bold"
          :title="'About ' + props.item.name"
        />
        <!-- eslint-disable vue/no-v-html -->
        <p
          v-if="props.item.description"
          class="txt txt--rem32 txt--font300 c-white text-center"
          v-html="props.item.description"
        ></p>
        <!--eslint-enable-->
        <br />
        <v-button
          v-if="props.item.website"
          color=""
          icon="iconArrow"
          hover="primary"
          text="Visit Website"
          type="centered"
          element="a"
          :href="props.item.website"
          :target="true"
        />
      </div>
    </div>
  </section>
</template>
