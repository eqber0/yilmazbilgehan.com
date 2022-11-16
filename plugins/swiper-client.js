import Vue from "vue";
import Swiper, {
  Pagination,
  Navigation,
  EffectCoverflow,
  EffectFade,
  Autoplay,
  Thumbs,
} from "swiper";
const swiper = {
  install(Vue, options) {
    Vue.prototype.$swiper = Swiper;
    Vue.prototype.$swiperModules = {
      Navigation,
      Pagination,
      EffectCoverflow,
      EffectFade,
      Autoplay,
      Thumbs,
    };
  },
};

Vue.use(swiper);
