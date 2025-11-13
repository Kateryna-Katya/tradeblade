import Swiper from 'swiper';
import 'swiper/css';

let dealsSwiper = null;

function initDealsSwiper() {
  const container = document.querySelector('.deals-swiper');
  if (!container) return;


  if (dealsSwiper) {
    dealsSwiper.destroy(true, true);
    dealsSwiper = null;
  }

  dealsSwiper = new Swiper('.deals-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    slideClass: 'deals-swiper-slide',
    wrapperClass: 'deals-swiper-wrapper',
    direction: 'horizontal',
    allowTouchMove: true,
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    on: {
      init() {
        updateProgressBar(this);
      },
      slideChange() {
        updateProgressBar(this);
      },
    },
  });
}

function updateProgressBar(swiper) {
  if (!swiper) return;
  const progressBar = swiper.el.querySelector('.pag_bar');
  if (!progressBar) return;

  const total = swiper.slides.length - (swiper.loopedSlides * 0.1);
  const currentIndex = swiper.realIndex;
  const percent = ((currentIndex + 1) / total) * 100;
  progressBar.style.width = `${percent}%`;
}


document.addEventListener('DOMContentLoaded', initDealsSwiper);
window.addEventListener('resize', initDealsSwiper);