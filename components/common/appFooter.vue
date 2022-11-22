<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer__profiles">
          <div
            class="footer__profiles__item"
            v-for="(profile, index) in profiles"
            :key="index"
            :class="
              index == 0
                ? 'footer__profiles__item--left'
                : 'footer__profiles__item--right'
            "
          >
            <div class="footer__profiles__item-bg">
              <img :src="profile.bgImage" alt="" />
            </div>
            <div class="footer__profiles__item-image">
              <img :src="profile.image" alt="" />
            </div>
            <div class="footer__profiles__item-author c-white">
              <div
                class="footer__profiles__item-author__name txt txt--rem32 txt--font300"
              >
                {{ profile.name }}
              </div>
              <div
                class="footer__profiles__item-author__sector txt txt--rem24 txt--font300 c-paragraph"
              >
                {{ profile.author }}
              </div>
            </div>
            <div class="footer__profiles__item-button">
              <v-button
                :color="index == 0 ? 'primary' : 'secondary'"
                :hover="index == 0 ? 'primary' : 'secondary'"
                :text="index == 0 ? 'contact me' : ' contact him'"
                icon="iconArrow"
                type="centered"
              />
            </div>
          </div>
        </div>
        <div class="footer__info row">
          <div class="col-12 col-lg-3">
            <div class="footer__info-logo">
              <img src="~/static/images/qbr-logo.svg" alt="" />
            </div>
          </div>
          <div class="col-12 col-lg-9">
            <div class="footer__info-content">
              <div
                v-for="(item, index) in profiles[0]?.items"
                :key="index"
                class="footer__info-content__item"
              >
                <div
                  class="footer__info-content__item-title txt txt--rem28 txt--font300 c-paragraph"
                >
                  {{ item.title }}
                </div>
                <div
                  class="footer__info-content__item-text txt txt--rem28 txt--font900 c-white"
                >
                  {{ item.text }}
                </div>
                <div
                  v-if="item.socials"
                  class="footer__info-content__item-socials"
                >
                  <div
                    v-for="(social, index) in item.socials"
                    :key="index"
                    class="footer__info-content__item-socials__item"
                  >
                    <a target="_blank" :href="social.link">
                      <svg-icon :name="social.icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__rights">
      <div class="container">
        <div class="footer__rights-text txt txt--rem24 txt--font300">
          ALL RIGHTS RESERVED BY <span>QBR</span> & TORE
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      profiles: [],
    };
  },
  created() {
    this.getData();
  },
  async mounted() {
    await this.$store.dispatch("getData");
    this.profiles = this.yilmazbilgehan.profiles;
    console.log(this.profiles);
  },
  computed: {
    ...mapGetters(["yilmazbilgehan"]),
  },
  methods: {
    ...mapState(["getData"]),
  },
};
</script>
