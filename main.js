var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
        300: {
          mousewheel: true,
          keyboard: true,
          slidesPerView: 1,
          spaceBetween: 24,
          allowSlidePrev: true,
          allowSlideNext: true
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 24,
          allowSlidePrev: true,
          allowSlideNext: true
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
          allowSlidePrev: true,
          allowSlideNext: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 56,
          allowSlidePrev: true,
          allowSlideNext: true
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 56,
          allowSlidePrev: true,
          allowSlideNext: true
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 28,
          allowSlidePrev: false,
          allowSlideNext: false
        }
      }
  });