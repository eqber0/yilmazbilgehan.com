<script setup>
const props = defineProps({
  compareImgs: {
    type: Array,
    default: [],
  },
})
</script>

<template>
  <section v-if="props.compareImgs" class="section section--pt0">
    <div class="container">
      <div class="work-detail__compare">
        <VueCompareImage
          :leftImage="props.compareImgs[0]?.image"
          :rightImage="props.compareImgs[1]?.image"
        />
      </div>
    </div>
  </section>
</template>
