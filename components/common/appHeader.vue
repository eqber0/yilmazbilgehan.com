<script setup>
import { onMounted } from "vue"

const isMenuOpen = ref(false)
const isPinned = ref(false)
const isUnpinned = ref(false)
const prevScrollPos = ref()

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

function handleScroll() {
  const currentScrollPos = window.pageYOffset
  if (currentScrollPos > 100) {
    isUnpinned.value = true
    isPinned.value = false
  } else {
    isPinned.value = false
    isUnpinned.value = false
  }

  if (prevScrollPos.value > currentScrollPos && currentScrollPos > 100) {
    isUnpinned.value = false
    isPinned.value = true
  }
  prevScrollPos.value = currentScrollPos
}

function toggleMenu(status) {
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
    :class="{
      'menu-opened': isMenuOpen,
      'header--pinned': isPinned,
      'header--unpinned': isUnpinned,
    }"
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
          <NuxtLink to="/projects">
            <div
              class="header__menu__item c-white txt txt--rem24 txt--font400"
              @click="toggleMenu(false)"
            >
              Projects
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
