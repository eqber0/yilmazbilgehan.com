<template>
  <section class="work-detail__info">
    <div class="container">
      <div class="row g-4 g-md-5">
        <div class="col-6 col-md-4 col-lg-3">
          <div class="work-detail__info-card">
            <div
              class="work-detail__info-card__title txt txt--rem48 txt--font400 c-white"
            >
              {{ infoName }}
            </div>
            <div
              class="work-detail__info-card__value txt txt--rem32 txt--font300 c-white"
            >
              Client
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <div class="work-detail__info-card">
            <div
              class="work-detail__info-card__title txt txt--rem48 txt--font400 c-white"
            >
              {{ infoCountry }}
            </div>
            <div
              class="work-detail__info-card__value txt txt--rem32 txt--font300 c-white"
            >
              Country
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <div class="work-detail__info-card">
            <div
              class="work-detail__info-card__title txt txt--rem48 txt--font400 c-white"
            >
              {{ infoType }}
            </div>
            <div
              class="work-detail__info-card__value txt txt--rem32 txt--font300 c-white"
            >
              Type
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <div class="work-detail__info-card">
            <div
              class="work-detail__info-card__title txt txt--rem48 txt--font400 c-white"
            >
              {{ infoDuration }}
            </div>
            <div
              class="work-detail__info-card__value txt txt--rem32 txt--font300 c-white"
            >
              Duration
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["infoName", "infoType", "infoCountry", "infoDuration"],
};
</script>
