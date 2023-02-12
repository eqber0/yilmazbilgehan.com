<template>
  <main class="detail-page">
    <div class="container container--fluid">
      <div class="subheader">
        <div class="subheader__title">
          <mainTitle title="My Works" />
        </div>
      </div>
    </div>
    <section class="section works">
      <!-- <div class="container container--fluid">
        <div class="works__tab">
          <div class="works__tab-filter">
            <div
              class="works__tab-filter__item txt txt--rem64 txt--font400 active"
            >
              All
            </div>
            <div class="works__tab-filter__item txt txt--rem64 txt--font400">
              Website
            </div>
            <div class="works__tab-filter__item txt txt--rem64 txt--font400">
              Mobile
            </div>
          </div>
          <div class="works__tab-sort">
            <div
              class="works__tab-sort__item txt txt--rem32 txt--font400 active"
            >
              Date
              <svg-icon name="iconArrow" />
            </div>
            <div class="works__tab-sort__item txt txt--rem32 txt--font400">
              Alphabetical
              <svg-icon name="iconArrow" />
            </div>
          </div>
        </div>
      </div> -->
      <div class="container container--fluid">
        <div class="row g-4 g-md-5">
          <div
            class="col-12 col-md-6 col-xl-4"
            v-for="(item, index) in workList"
            :key="index"
          >
            <NuxtLink
              :to="{ path: 'work-detail/' + item.slug }"
              class="works-card"
            >
              <div class="works-card__image">
                <img :src="item.cover_img" alt="" />
              </div>
              <div class="works-card__content">
                <div class="works-card__content-title">
                  <h3 class="txt txt--rem32 txt--font900 c-white">
                    {{ item.name }}
                  </h3>
                  <p class="txt txt--rem20 txt--font300 c-white">
                    {{ item.type }}
                  </p>
                </div>
                <div class="works-card__content-button c-white">
                  <svg-icon name="iconArrow" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import mainTitle from "../components/mainTitle.vue";
export default {
  components: {
    mainTitle,
  },
  data() {
    return {
      workList: [],
    };
  },
  async asyncData({ store }) {
    return {
      workList: store.state.works,
    };
  },
};
</script>
