<script setup>
const props = defineProps({
  imageList: {
    type: Array,
    default: [],
  },
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="work-detail__gallery">
        <a
          :href="image"
          data-fancybox="gallery"
          class="work-detail__gallery-item"
          v-for="(image, index) in props.imageList"
          :key="index"
        >
          <img :src="image" alt="" />
        </a>
      </div>
    </div>
  </section>
</template>
