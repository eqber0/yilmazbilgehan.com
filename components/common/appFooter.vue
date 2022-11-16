<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer__profiles">
          <div class="footer__profiles__item footer__profiles__item--left">
            <div class="footer__profiles__item-bg">
              <img src="~/static/images/qbr-footer.svg" alt="" />
            </div>
            <div class="footer__profiles__item-image">
              <img src="~/static/images/bilgehan-footer.png" alt="" />
            </div>
            <div class="footer__profiles__item-author c-white">
              <div
                class="footer__profiles__item-author__name txt txt--rem32 txt--font300"
              >
                Bilgehan <span>YILMAZ</span>
              </div>
              <div
                class="footer__profiles__item-author__sector txt txt--rem24 txt--font300 c-paragraph"
              >
                Frontend Developer
              </div>
            </div>
            <div class="footer__profiles__item-button">
              <v-button
                color="primary"
                hover="primary"
                text="contact me"
                icon="iconArrow"
                type="centered"
              />
            </div>
          </div>
          <div class="footer__profiles__item footer__profiles__item--right">
            <div class="footer__profiles__item-bg">
              <img src="~/static/images/tore-footer.svg" alt="" />
            </div>
            <div class="footer__profiles__item-image">
              <img src="~/static/images/tore-footer.png" alt="" />
            </div>
            <div class="footer__profiles__item-author c-white">
              <div
                class="footer__profiles__item-author__name txt txt--rem32 txt--font300"
              >
                Tolunay <span>KURTTUTAR</span>
              </div>
              <div
                class="footer__profiles__item-author__sector txt txt--rem24 txt--font300 c-paragraph"
              >
                UI / UX Designer
              </div>
            </div>
            <div class="footer__profiles__item-button">
              <v-button
                color="secondary"
                hover="secondary"
                text="contact him"
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
                v-for="(item, index) in footerInfos"
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
                  v-if="item.type == 'social'"
                  class="footer__info-content__item-socials"
                >
                  <div
                    v-for="(social, index) in item.socials"
                    :key="index"
                    class="footer__info-content__item-socials__item"
                  >
                    <a :href="social.href">
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
export default {
  data() {
    return {
      footerInfos: [
        {
          type: "default",
          title: "mail",
          text: "eqber00@gmail.com",
        },
        {
          type: "default",
          title: "address",
          text: "Bursa / Nilüfer",
        },
        {
          type: "default",
          title: "phone",
          text: "0555 685 77 45",
        },
        {
          type: "social",
          title: "socials",
          text: "",
          socials: [
            {
              href: "#0",
              icon: "iconArrow",
            },
            {
              href: "#0",
              icon: "iconArrow",
            },
            {
              href: "#0",
              icon: "iconArrow",
            },
            {
              href: "#0",
              icon: "iconArrow",
            },
          ],
        },
      ],
    };
  },
};
</script>
