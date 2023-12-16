import $ from "jquery";
// import Swiper from 'swiper'

$(document).ready(function () {
  $('.level-1 > a').click(function () {
    $(this).toggleClass('open')
  })

  $('.card-favourites i').click(function () {
    $(this).toggleClass('heart-full heart-empty')
  })

  $('.item-buttons .button-secondary').click(function () {
    // $(this).closest('.services-item-container').toggleClass('open');
    var $container = $(this).closest('.services-item-container');    

    $container.toggleClass('open').find('.button-secondary').text($container.hasClass('open') ? 'Свернуть' : 'Подробнее');

  })

  $('.qna-item-title').click(function () {
    $(this).parent('.qna-item').toggleClass('open')
  })
})

// new Swiper('.works-swiper', {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   simulateTouch: true,
//   grabCursor: true,
//   speed: 200,
//   observer: true,
//   observeParents: true,
//   observeSlideChildren: true,
//   navigation: {
//     prevEl: '.swiper-button-prev',
//     nextEl: '.swiper-button-next',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20
//     },
//     768: {
//       slidesPerView: 2
//     },
//     1024: {
//       slidesPerView: 3
//     },
//     1440: {
//       slidesPerView: 4
//     }
//   },
//   autoplay: {
//     delay: 2000,
//     stopOnLastSlide: false,
//     disableOnInteraction: false
//   },
//   mousewheel: {
//     sensitivity: 1,
//     eventsTarget: '.works-swiper', 
//   }
// }) 
