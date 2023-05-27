import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";

export const gallery = (() => {
  const main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    lazyLoad: true,
  });

  const thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 120,
    fixedHeight: 60,
    gap: 10,
    rewind: false,
    pagination: false,
    isNavigation: true,
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
})();
