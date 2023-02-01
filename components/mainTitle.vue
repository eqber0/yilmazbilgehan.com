<template>
  <h1 ref="mainTitle" class="main-title txt txt--rem128 txt--font900 c-white">
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
  },
  mounted() {
    this.mainTitle = this.$refs.mainTitle;
    this.makeLastWordColored();
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
