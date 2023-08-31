<script setup>
const mainTitle = ref()

function makeLastWordColored() {
  const words = mainTitle.value.innerHTML.split(" ")
  const lastWord = mainTitle.value.innerHTML.split(" ").pop()
  mainTitle.value.innerHTML = ""
  words.forEach((item) => {
    if (item === lastWord) {
      mainTitle.value.innerHTML += `<span class="c-primary">${item}</span>`
    } else {
      mainTitle.value.innerHTML += `<span>${item} </span>`
    }
  })
}

function makeLastWordBold() {
  const words = mainTitle.value.innerText.split(" ")
  const lastWord = mainTitle.value.innerText.split(" ").pop()
  mainTitle.value.innerHTML = ""
  words.forEach((item) => {
    if (item === lastWord) {
      mainTitle.value.innerHTML += `<span class="txt--font400">${item}</span>`
    } else {
      mainTitle.value.innerHTML += `<span>${item} </span>`
    }
  })
}

onMounted(() => {
  if (props.type == "bold") {
    makeLastWordBold()
  } else {
    makeLastWordColored()
  }
})

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <h1
    ref="mainTitle"
    :class="{
      'main-title txt txt--rem128 txt--font900 c-white': props.type !== 'bold',
      'main-title txt txt--rem48 txt--font300 c-white': props.type == 'bold',
    }"
  >
    {{ props.title }}
  </h1>
</template>
