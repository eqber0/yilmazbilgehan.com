<template>
  <div class="btn" :class="(color = 'primary' ? 'btn--primary' : '')">
    <div class="btn-txt">
      {{ text }}
    </div>
    <div class="btn-icon">
      <svg-icon class="icon icon-font" :name="icon" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "icon", "hover", "text"],
};
</script>
