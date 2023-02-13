<template>
  <footer ref="footer" class="footer">
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
              <infoCard
                v-for="(item, index) in profiles[0]?.items"
                :key="index"
                :title="item.title"
                :value="item.text"
                :type="item.socials ? 'socials' : undefined"
                :socials="item.socials"
              />
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
              socials: [],
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
  async mounted() {
    this.$refs.footer.classList.add("loaded");
    this.profiles[0].items.filter(
      (item) => item.title === "socials"
    )[0].socials = await this.$store.state.socials;
  },
};
</script>
