<template>
  <h1
    ref="mainTitle"
    :class="{
      'main-title txt txt--rem128 txt--font900 c-white': type !== 'bold',
      'main-title txt txt--rem48 txt--font300 c-white': type == 'bold',
    }"
  >
    {{ title }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      mainTitle: null,
    };
  },
  methods: {
    makeLastWordColored() {
      const words = this.mainTitle.innerText.split(" ");
      const lastWord = this.mainTitle.innerText.split(" ").pop();
      this.mainTitle.innerHTML = "";
      words.forEach((item) => {
        if (item === lastWord) {
          this.mainTitle.innerHTML += `<span class="c-primary">${item}</span>`;
        } else {
          this.mainTitle.innerHTML += `<span>${item} </span>`;
        }
      });
    },
    makeLastWordBold() {
      const words = this.mainTitle.innerText.split(" ");
      const lastWord = this.mainTitle.innerText.split(" ").pop();
      this.mainTitle.innerHTML = "";
      words.forEach((item) => {
        if (item === lastWord) {
          this.mainTitle.innerHTML += `<span class="txt--font400">${item}</span>`;
        } else {
          this.mainTitle.innerHTML += `<span>${item} </span>`;
        }
      });
    },
  },
  mounted() {
    this.mainTitle = this.$refs.mainTitle;
    if (this.type == "bold") {
      this.makeLastWordBold();
    } else {
      this.makeLastWordColored();
    }
  },
  props: ["title", "type"],
};
</script>
