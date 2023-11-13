var swiper = new Swiper('.catalog__swiper1', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.catalog__swiper2', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.catalog__button-next',
    prevEl: '.catalog__button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 57,

  breakpoints: {
    310: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 4,
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.querySelector('.catalog__popup4-input');
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  IMask(inputElement, maskOptions);
});

Fancybox.bind('.catalog__btn1', {});
Fancybox.bind('.catalog__btn2', {});
Fancybox.bind('.catalog__btn3', {});
Fancybox.bind('.catalog__btn4', {});
