<script setup>
const isMenuOpen = ref(false)

function toggleMenu(status) {
  console.log(status)
  if (status) {
    isMenuOpen.value = true
  } else {
    isMenuOpen.value = false
  }
}
</script>
<template>
  <header
    ref="header"
    class="header"
    :class="isMenuOpen == true ? 'menu-opened' : undefined"
  >
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/">
          <div class="header__logo">
            <img src="~/assets/images/qbr-logo.svg" alt="" />
          </div>
        </NuxtLink>
        <div
          @click="isMenuOpen == true ? toggleMenu(false) : toggleMenu(true)"
          class="header__menu-btn"
        >
          <div class="header__menu-btn-line"></div>
          <div class="header__menu-btn-line"></div>
        </div>
        <div
          ref="headerMenu"
          class="header__menu"
          :class="isMenuOpen == true ? 'opened' : undefined"
        >
          <NuxtLink to="/">
            <div
              class="header__menu__item c-white txt txt--rem24 txt--font400"
              @click="toggleMenu(false)"
            >
              Home
            </div>
          </NuxtLink>
          <NuxtLink to="/about">
            <div
              class="header__menu__item c-white txt txt--rem24 txt--font400"
              @click="toggleMenu(false)"
            >
              About
            </div>
          </NuxtLink>
          <NuxtLink to="/works">
            <div
              class="header__menu__item c-white txt txt--rem24 txt--font400"
              @click="toggleMenu(false)"
            >
              Works
            </div>
          </NuxtLink>
          <NuxtLink to="/contact">
            <div
              class="header__menu__item c-white txt txt--rem24 txt--font400"
              @click="toggleMenu(false)"
            >
              Contact
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
