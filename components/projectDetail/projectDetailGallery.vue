<script setup>
import { Fancybox } from "@fancyapps/ui"

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const gallery = ref(props?.item?.gallery)
function startFancy(image, index) {
  const fancyboxArr = []
  gallery.value.map((item) => {
    fancyboxArr.push({ src: item })
  })
  Fancybox.show(fancyboxArr, {
    startIndex: index,
  })
}
</script>

<template>
  <section v-if="props.item?.gallery" class="section">
    <div class="container">
      <div class="work-detail__gallery">
        <div
          :href="image"
          data-fancybox="gallery"
          class="work-detail__gallery-item"
          v-for="(image, imageIndex) in props.item?.gallery"
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
