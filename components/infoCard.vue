<template>
  <div class="info-card__item">
    <div
      class="info-card__item-title txt txt--rem28 txt--font300"
      :class="color == 'paragrah' ? 'c-paragraph' : 'c-primary'"
    >
      {{ title }}
    </div>
    <div
      v-if="type == 'socials' && socials"
      class="footer__info-content__item-socials justify-content-start"
    >
      <div
        v-for="(social, index) in socials"
        :key="index"
        class="footer__info-content__item-socials__item me-5"
      >
        <a target="_blank" :href="social.link">
          <svg-icon :name="social.icon" />
        </a>
      </div>
    </div>
    <div
      v-else
      class="info-card__item-subtitle txt txt--rem32 txt--font700 c-white"
    >
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "title", "value", "socials", "color"],
};
</script>
