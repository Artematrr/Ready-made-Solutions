import $ from "jquery";
import Swiper from 'swiper'

$(document).ready(function () {
  $('.level-1 > a').click(function () {
    $(this).toggleClass('open')
  })

  $('.card-favourites i').click(function () {
    $(this).toggleClass('heart-full heart-empty')
  
})
})

new Swiper('.works-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  // loop: true,
  simulateTouch: true,
  // grabCursor: true,
  speed: 200,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 4
    }
  },
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.works-swiper', 
  }
}) 
