<template>
  <main class="detail-page">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title">
          <mainTitle v-if="workData?.name" :title="workData?.name" />
        </div>
      </div>
    </div>
    <work-detail-hero
      :sliderImages="workData?.sliderImgs"
      :heroImage="workData?.heroImg"
    />
    <work-detail-about
      :websiteHref="workData?.website"
      :aboutDesc="workData?.desc"
      :aboutName="workData?.name"
    />

    <work-detail-compare />
    <work-detail-info
      :infoName="workData?.name"
      :infoCountry="workData?.country"
      :infoDuration="workData?.duration"
      :infoType="workData?.type"
    />
    <work-detail-gallery :imageList="workData?.gallery" />
    <section class="section">
      <div class="container">
        <h2 class="txt txt--rem48 txt--font300 c-white text-center">
          Do you want to same <b>Website?</b>
        </h2>
        <br />
        <p class="txt txt--rem32 txt--font300 c-white text-center">
          If you like this website, you can get the offer below and have the
          most special website designed for you. Contact us now and let's bring
          your dream website to the
          <span class="color: var(--c-primary)">real world!</span>
        </p>
        <br />
        <br />
        <nuxtLink to="works">
          <v-button
            color=""
            icon="iconArrow"
            hover="primary"
            text="Get an Offer"
            type="centered"
          />
        </nuxtLink>
      </div>
    </section>
  </main>
</template>

<script>
import mainTitle from "../../components/mainTitle.vue";
export default {
  components: {
    mainTitle,
  },
  data() {
    return {
      routeId: this.$route.params.workDetail,
      workData: null,
      infoList: [],
    };
  },
  async mounted() {
    this.$nextTick();
    this.workData = await this.$store.state.works.filter(
      (item) => this.routeId === item.slug
    )[0];
  },
};
</script>
