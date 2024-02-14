<script setup>
const props = defineProps({
  type: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
  socials: {
    type: Array,
    default: [],
  },
  color: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="info-card__item">
    <div
      class="info-card__item-title txt txt--rem28 txt--font300"
      :class="props.color == 'paragrah' ? 'c-paragraph' : 'c-primary'"
    >
      {{ props.title }}
    </div>
    <div
      v-if="props.type == 'socials' && props.socials"
      class="footer__info-content__item-socials justify-content-start"
    >
      <div
        v-for="(social, index) in props.socials"
        :key="index"
        class="footer__info-content__item-socials__item me-5"
      >
        <a target="_blank" :href="social.link">
          <nuxt-icon class="icon icon-font" :name="social.icon" />
        </a>
      </div>
    </div>
    <div
      v-else
      class="info-card__item-subtitle txt txt--rem24 txt--font700 c-white"
    >
      {{ props.value }}
    </div>
  </div>
</template>
