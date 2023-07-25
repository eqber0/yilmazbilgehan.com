<script setup>
const props = defineProps({
  compareLeft: {
    type: String,
    default: null,
  },
  compareRight: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <section v-if="props.compareImgs" class="section section--pt0">
    <div class="container">
      <div class="work-detail__compare">
        <VueCompareImage
          :leftImage="props.compareLeft"
          :rightImage="props.compareRight"
        />
      </div>
    </div>
  </section>
</template>
