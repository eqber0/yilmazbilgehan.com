<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
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
// import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      profiles: [
        {
          author: "Frontend Developer",
          bgImage: "images/qbr-footer.svg",
          image: "images/bilgehan-footer.png",
          items: [
            {
              text: "eqber00@gmail.com",
              title: "mail",
            },
            {
              text: "Bursa / Nilüfer",
              title: "address",
            },
            {
              text: "0 555 685 7745",
              title: "Phone",
            },
            {
              socials: [
                {
                  icon: "iconLinkedin",
                  link: "https://www.linkedin.com/in/bilgehan-y%C4%B1lmaz-a723b0220/",
                },
                {
                  icon: "iconGithub",
                  link: "https://github.com/eqber0",
                },
                {
                  icon: "iconTwitter",
                  link: "https://twitter.com/eqbeR_",
                },
                {
                  icon: "iconInstagram",
                  link: "https://www.instagram.com/eqber_/",
                },
              ],
              title: "socials",
            },
          ],
          name: "Bilgehan Yılmaz",
        },
        {
          author: "UI / UX Designer",
          bgImage: "images/tore-footer.svg",
          image: "images/tore-footer.png",
          name: "Tolunay Kurttutar",
        },
      ],
    };
  },
};
</script>
