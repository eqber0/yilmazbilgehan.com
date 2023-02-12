<template>
  <component
    :is="element"
    :href="href"
    :type="submit ? 'submit' : undefined"
    :form="form ? form : undefined"
    :to="element == 'nuxt-link' ? href : undefined"
    :target="target == true ? '_blank' : undefined"
    :class="[
      'btn',
      color == 'primary' ? 'btn--primary' : '',
      color == 'secondary' ? 'btn--secondary' : '',
      hover == 'primary' ? 'btn--primary-hover' : '',
      hover == 'secondary' ? 'btn--secondary-hover' : '',
      type == 'centered' ? 'btn--centered' : '',
    ]"
  >
    <div class="btn-txt">
      {{ text }}
    </div>
    <div class="btn-icon">
      <svg-icon class="icon icon-font" :name="icon" />
    </div>
  </component>
</template>

<script>
export default {
  props: [
    "color",
    "icon",
    "hover",
    "text",
    "type",
    "href",
    "element",
    "submit",
    "form",
    "target",
  ],
};
</script>
