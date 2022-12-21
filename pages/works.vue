<template>
  <main class="detail-page">
    <div class="container container--fluid">
      <div class="subheader">
        <div class="subheader__title txt txt--rem128 txt--font900 c-white">
          <h1>My <span class="c-primary">Works</span></h1>
        </div>
      </div>
    </div>
    <section class="section works">
      <div class="container container--fluid">
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
      </div>
      <div class="container container--fluid">
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
              class="works-card"
            >
              <div class="works-card__image">
                <img :src="item.image" alt="" />
              </div>
              <div class="works-card__content">
                <div class="works-card__content-title">
                  <h3 class="txt txt--rem32 txt--font900 c-white">
                    {{ item.title }}
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
export default {
  data() {
    return {
      workList: [
        {
          title: "Chace People",
          type: "Business & Corporate Website",
          image: "images/chace-banner.png",
        },
        {
          title: "Latro",
          type: "Business & Corporate Website",
          image: "images/dakar-cover.jpg",
        },
        {
          title: "Trowas",
          type: "E-Commerce Website",
          image: "images/chace-banner.png",
        },
        {
          title: "FCB Interiors",
          type: "Business & Corporate Website",
          image: "images/chace-banner.png",
        },
      ],
    };
  },
};
</script>
