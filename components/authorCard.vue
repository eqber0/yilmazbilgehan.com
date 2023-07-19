<script setup>
const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="author-card">
    <mainTitle type="bold" :title="props.name" />
    <div class="txt txt--rem24 txt--font300 c-paragraph">
      {{ props.title }}
    </div>
  </div>
</template>
