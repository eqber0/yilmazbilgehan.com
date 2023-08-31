<script setup>
import { usePersonalStore } from "~/stores/personal-info"

const personalStore = usePersonalStore()

const footerDatas = ref([
  {
    id: 0,
    title: "Mail",
    value: personalStore.mail,
  },
  {
    id: 1,
    title: "Address",
    value: personalStore.address,
  },
  {
    id: 2,
    title: "Phone",
    value: personalStore.phone,
  },
  {
    id: 3,
    title: "Socials",
    socials: personalStore.socials,
    type: "socials",
  },
])

const profiles = ref([
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
])
</script>
<template>
  <footer ref="footer" class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer__info row">
          <div class="col-12 col-lg-3">
            <div class="footer__info-logo">
              <img src="~/assets/images/qbr-logo.svg" alt="" />
            </div>
          </div>
          <div class="col-12 col-lg-9">
            <div class="footer__info-content">
              <infoCard
                v-for="(item, index) in footerDatas"
                :key="index"
                :title="item.title"
                :value="item.value"
                :type="item.type"
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
          All Rights Reserverd by <span>QBR</span>
        </div>
      </div>
    </div>
  </footer>
</template>
