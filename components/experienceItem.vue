<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>
<template>
  <div class="experience-item">
    <div class="experience-item__content">
      <div
        class="experience-item__content-title txt txt--rem28 txt--font700 c-white"
      >
        {{ props.item.title }}
      </div>
      <span
        class="experience-item__content-text txt txt--rem24 txt--font400 c-white"
      >
        {{ props.item.company }}
      </span>
      <div
        class="experience-item__date txt txt--rem20 txt--font700 c-paragraph"
      >
        {{ props.item.start_date }} - {{ props.item.end_date }}
      </div>
    </div>
  </div>
</template>
