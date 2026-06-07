import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";
import focus from "@alpinejs/focus";
import intersect from "@alpinejs/intersect";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default (Alpine: Alpine) => {
  Alpine.plugin(intersect);
  Alpine.plugin(collapse);
  Alpine.plugin(focus);
};

// Consolidated Desktop Banner Slider
new Swiper(".banner-slider", {
  modules: [Navigation],
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".banner-button-next",
    prevEl: ".banner-button-prev",
  },
});
