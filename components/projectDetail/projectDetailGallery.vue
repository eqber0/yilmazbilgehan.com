<script setup>
import { Fancybox } from "@fancyapps/ui"

const gallery = ref(props.imageList)
function startFancy(image, index) {
  const fancyboxArr = []
  gallery.value.map((item) => {
    fancyboxArr.push({ src: item })
  })
  Fancybox.show(fancyboxArr, {
    startIndex: index,
  })
}

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
        <div
          :href="image"
          data-fancybox="gallery"
          class="work-detail__gallery-item"
          v-for="(image, imageIndex) in props.imageList"
          :key="imageIndex"
          @click="startFancy(image, imageIndex)"
        >
          <img :src="image" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "/node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
</style>
