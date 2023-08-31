<script setup>
const props = defineProps({
  infoName: {
    type: String,
    default: null,
  },
  infoType: {
    type: String,
    default: null,
  },
  infoCountry: {
    type: String,
    default: null,
  },
  infoDuration: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <section
    v-if="
      props.infoName &&
      props.infoType &&
      props.infoCountry &&
      props.infoDuration
    "
    class="work-detail__info"
  >
    <div class="container">
      <div class="row g-4 g-md-5">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="work-detail__info-card">
            <div
              class="work-detail__info-card__title txt txt--rem32 txt--font400 c-white"
            >
              {{ props.infoName }}
            </div>
            <div
              class="work-detail__info-card__value txt txt--rem30 txt--font300 c-white"
            >
              Client
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="work-detail__info-card">
            <div
              class="work-detail__info-card__title txt txt--rem32 txt--font400 c-white"
            >
              {{ props.infoCountry }}
            </div>
            <div
              class="work-detail__info-card__value txt txt--rem30 txt--font300 c-white"
            >
              Country
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="work-detail__info-card">
            <div
              class="work-detail__info-card__title txt txt--rem32 txt--font400 c-white"
            >
              {{ props.infoType }}
            </div>
            <div
              class="work-detail__info-card__value txt txt--rem30 txt--font300 c-white"
            >
              Type
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="work-detail__info-card">
            <div
              class="work-detail__info-card__title txt txt--rem32 txt--font400 c-white"
            >
              {{ props.infoDuration }}
            </div>
            <div
              class="work-detail__info-card__value txt txt--rem30 txt--font300 c-white"
            >
              Duration
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
