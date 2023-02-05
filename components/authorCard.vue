<template>
  <div class="author-card">
    <mainTitle type="bold" :title="name" />
    <div class="txt txt--rem24 txt--font300 c-paragraph">
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "title"],
};
</script>
