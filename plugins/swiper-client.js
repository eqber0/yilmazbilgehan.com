import Vue from "vue";
import Swiper, {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper";
const swiper = {
  install(Vue, options) {
    Vue.prototype.$swiper = Swiper;
    Vue.prototype.$swiperModules = {
      Navigation,
      Pagination,
      EffectCoverflow,
      Autoplay,
    };
  },
};

Vue.use(swiper);
