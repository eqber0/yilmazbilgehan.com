<script setup>
const props = defineProps({
  date: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
})
</script>
<template>
  <div class="experience-item">
    <div class="experience-item__date txt txt--rem32 txt--font700 c-white">
      {{ props.date }}
    </div>
    <div class="experience-item__content">
      <div
        class="experience-item__content-title txt txt--rem32 txt--font700 c-white"
      >
        {{ props.title }}
        <br />
        <span
          class="experience-item__content-text txt txt--rem24 txt--font400 c-paragraph"
        >
          {{ props.text }}
        </span>
      </div>
    </div>
  </div>
</template>
