<template>
  <headroom
    :speed="400"
    :upTolerance="10"
    :downTolerance="10"
    :classes="{
      pinned: 'header--pinned',
      unpinned: 'header--unpinned',
      top: 'header--top',
      notTop: 'header--not-top',
    }"
  >
    <header ref="header" class="header">
      <div class="container">
        <div class="header__wrapper">
          <NuxtLink to="/">
            <div class="header__logo">
              <img src="~/static/images/qbr-logo.svg" alt="" />
            </div>
          </NuxtLink>
          <div @click="toggleMenu" class="header__menu-btn">
            <div class="header__menu-btn-line"></div>
            <div class="header__menu-btn-line"></div>
          </div>
          <div ref="headerMenu" class="header__menu">
            <NuxtLink to="/">
              <div
                class="header__menu__item c-white txt txt--rem24 txt--font400"
                @click="closeMenu"
              >
                Home
              </div>
            </NuxtLink>
            <NuxtLink to="/about">
              <div
                class="header__menu__item c-white txt txt--rem24 txt--font400"
                @click="closeMenu"
              >
                About
              </div>
            </NuxtLink>
            <NuxtLink to="/works">
              <div
                class="header__menu__item c-white txt txt--rem24 txt--font400"
                @click="closeMenu"
              >
                Works
              </div>
            </NuxtLink>
            <NuxtLink to="/contact">
              <div
                class="header__menu__item c-white txt txt--rem24 txt--font400"
                @click="closeMenu"
              >
                Contact
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
  </headroom>
</template>

<script>
import { headroom } from "vue-headroom";

export default {
  components: { headroom },
  methods: {
    toggleMenu(e) {
      const header = this.$refs.header;
      const headerMenu = this.$refs.headerMenu;
      headerMenu.classList.toggle("opened");
      header.classList.toggle("menu-opened");
    },
    closeMenu(e) {
      const header = this.$refs.header;
      const headerMenu = this.$refs.headerMenu;
      headerMenu.classList.remove("opened");
      header.classList.remove("menu-opened");
    },
  },
};
</script>
