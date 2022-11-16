<template>
  <div>
    <appHeader />
    <Nuxt />
    <appFooter />
  </div>
</template>

<script>
import appHeader from "../components/common/appHeader.vue";
import appFooter from "../components/common/appFooter.vue";
export default {
  components: {
    appHeader,
    appFooter,
  },
};
</script>

AppHeader
