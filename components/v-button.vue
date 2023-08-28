<script setup>
const props = defineProps({
  color: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  hover: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  element: {
    type: String,
    default: null,
  },
  submit: {
    type: Boolean,
    default: false,
  },
  form: {
    type: String,
    default: null,
  },
  target: {
    type: Boolean,
    default: null,
  },
})
</script>

<template>
  <component
    :is="props.element"
    :href="props.href"
    :type="props.submit ? 'submit' : undefined"
    :form="props.form ? props.form : undefined"
    :to="props.element == 'nuxt-link' ? props.href : undefined"
    :target="props.target == true ? '_blank' : undefined"
    :class="[
      'btn',
      props.color == 'primary' ? 'btn--primary' : '',
      props.color == 'secondary' ? 'btn--secondary' : '',
      props.hover == 'primary' ? 'btn--primary-hover' : '',
      props.hover == 'secondary' ? 'btn--secondary-hover' : '',
      props.type == 'centered' ? 'btn--centered' : '',
    ]"
  >
    <div class="btn-txt">
      {{ props.text }}
    </div>
    <div class="btn-icon">
      <nuxt-icon class="icon icon-font" :name="props.icon" />
    </div>
  </component>
</template>
