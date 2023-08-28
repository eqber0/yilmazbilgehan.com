<script setup>
import gsap from "gsap"
import { storeToRefs } from "pinia"
import { useProjectStore } from "~/stores/project-store.js"

const projectStore = useProjectStore()
const { fetchProjects } = projectStore
const { projects } = storeToRefs(projectStore)
fetchProjects()

const projectList = ref([])

onMounted(async () => {
  projectList.value = projects.value

  if (projectList.value.length > 0) {
    setTimeout(() => {
      initHomeWork()
    }, 250)
  }
})

const carousel_tl = ref()
const carouselGroup = ref()
const carouselSpinner = ref()
const thumbWrap = ref()
function initHomeWork() {
  var carouselOn = true
  var startRot
  var cTot
  var cSpeed
  var rotLoop
  var cRot = 13
  var startRot = -26
  var cTot = thumbWrap.value.length
  var cSpeed = 25
  var rotLoop = -cTot * cRot

  thumbWrap.value.forEach((element, index) => {
    gsap.set(element, { rotation: cRot * index })
  })

  const clonedGroup = carouselGroup.value.cloneNode(true)
  clonedGroup.classList.add("loop")

  carouselSpinner.value.appendChild(clonedGroup)
  gsap.set(clonedGroup, {
    rotation: startRot + cRot * cTot,
  })

  carouselOn = true
  carousel_tl.value = gsap.timeline({ repeat: -1 }).to($(".carousel-spinner"), {
    duration: cSpeed,
    rotation: rotLoop,
    ease: "none",
  })
}
function moveCarousel() {
  carousel_tl.value.play()
}
function stopCarousel() {
  carousel_tl.value.pause()
}
</script>

<template>
  <section class="section index-works">
    <div class="container">
      <div class="index-works__wrapper">
        <div ref="indexWorksSlider" class="index-works__slider">
          <div class="work-carousel" data-min="900" style="" data-height="1140">
            <div ref="carouselSpinner" id="mod-swiper" class="carousel-spinner">
              <div ref="carouselGroup" class="carousel-group">
                <div
                  ref="thumbWrap"
                  v-for="(item, i) in projectList"
                  :key="i"
                  class="thumb-wrap"
                >
                  <div
                    class="work-thumb"
                    @mouseover="stopCarousel()"
                    @mouseleave="moveCarousel()"
                  >
                    <NuxtLink
                      :to="{
                        path: `project-detail/${item.slug}`,
                      }"
                      class="index-works__slider-item"
                    >
                      <div class="index-works__slider-item__image">
                        <img loading="lazy" :src="item.fullpage" alt="" />
                      </div>
                      <div class="index-works__slider-item__content">
                        <div class="index-works__slider-item__content-title">
                          <h3 class="txt txt--rem32 txt--font900 c-white">
                            {{ item.name }}
                          </h3>
                          <p class="txt txt--rem20 txt--font300 c-white">
                            {{ item.type }}
                          </p>
                        </div>
                        <div
                          class="index-works__slider-item__content-button c-white"
                        >
                          <nuxt-icon class="icon icon-font" name="iconArrow" />
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="index-works__mobile">
            <NuxtLink
              v-for="(item, index) in projectList"
              :key="index"
              :to="{
                path: `project-detail/${item.slug}`,
              }"
              class="index-works__slider-item"
            >
              <div class="index-works__slider-item__image">
                <img quality="80" format="webp" :src="item.fullpage" />
              </div>
              <div class="index-works__slider-item__content">
                <div class="index-works__slider-item__content-title">
                  <h3 class="txt txt--rem32 txt--font900 c-white">
                    {{ item.name }}
                  </h3>
                  <p class="txt txt--rem20 txt--font300 c-white">
                    {{ item.type }}
                  </p>
                </div>
                <div class="index-works__slider-item__content-button c-white">
                  <nuxt-icon class="icon icon-font" name="iconArrow" />
                </div>
              </div>
            </NuxtLink>
          </div>
          <NuxtLink to="/projects">
            <v-button
              element="button"
              href=""
              color=""
              icon="iconArrow"
              hover="primary"
              text="All Projects"
              type="centered"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
