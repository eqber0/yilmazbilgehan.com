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
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__logo">
            <img src="~/static/images/qbr-logo.svg" alt="" />
          </div>
          <div class="header__menu">
            <div class="header__menu-line"></div>
            <div class="header__menu-line"></div>
            <div class="header__menu-line"></div>
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
};
</script>
