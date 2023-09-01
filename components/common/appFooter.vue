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
