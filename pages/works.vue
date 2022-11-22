<template>
  <main>
    <div class="container">
      <div class="row g-4 g-md-5">
        <div
          class="col-12 col-lg-6 col-xl-4"
          v-for="(item, index) in workList"
          :key="index"
        >
          <NuxtLink
            :to="{
              path: `work-detail/${item.title
                .toLowerCase()
                .replace(/ /g, '-')}`,
            }"
            class="index-works__slider-item"
          >
            <div class="index-works__slider-item__image">
              <img :src="item.img" alt="" />
            </div>
            <div class="index-works__slider-item__content">
              <div class="index-works__slider-item__content-title">
                <h3 class="txt txt--rem32 txt--font900 c-white">
                  {{ item.title }}
                </h3>
                <p class="txt txt--rem20 txt--font300 c-white">
                  {{ item.type }}
                </p>
              </div>
              <div class="index-works__slider-item__content-button">
                <svg-icon name="iconArrow" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      workList: this.$store.state.workList,
    };
  },
};
</script>
