import $ from "jquery";
// import Swiper from 'swiper'

$(document).ready(function () {
  
  // Sidebar
  $('.level-1 > a').on('click',function (e) {
    e.preventDefault();
    $(this).toggleClass('open')
  })

  // Sort
  var currentSort = localStorage.getItem('data-sort');

  if (currentSort) {
    updateSortDisplay(currentSort);
  } else {
    updateSortDisplay('popularity_desc');
  }   
  
  $('.sort-dropdown a').on('click', function(e) {
    e.preventDefault();
    var newSort = $(this).attr('data-sort');
    localStorage.setItem('data-sort', newSort);
    updateSortDisplay(newSort);
    
    $('.sort-dropdown').hide();
  });
  
  $('.sort-container').on('mouseenter touchstart', function() {
    $('.sort-dropdown').show();
  }).on('mouseleave touchend', function() {
    $('.sort-dropdown').hide();
  });

  function updateSortDisplay(sortValue) {
    var sortTextMap = {
      'popularity_asc': 'Популярности ↑',
      'popularity_desc': 'Популярности ↓',
      'price_asc': 'Цене ↑',
      'price_desc': 'Цене ↓',
      'date_asc': 'Дате ↑',
      'date_desc': 'Дате ↓',
      'rating_asc': 'Рейтингу ↑',
      'rating_desc': 'Рейтингу ↓'
    };

    var displayText = sortTextMap[sortValue] || sortValue;
    $('.sort-current').attr('data-sort', sortValue).text(displayText);
  }

  // tags
  $('.tags-wrapper a').on('click', function(e) {
    e.preventDefault();
    $('.tags-wrapper a').removeClass('active');
    $(this).addClass('active');
  });

  // Product cards
  $('.card-favourites i').on('click',function () {
    $(this).toggleClass('heart-full heart-empty')
  })

  // Services
  $('.item-buttons .button-outline').on('click',function () {
    var $container = $(this).closest('.services-item-container');    

    $container.toggleClass('open').find('.button-outline').text($container.hasClass('open') ? 'Свернуть' : 'Подробнее');
  })

  // QnA
  $('.qna-item-title').on('click',function () {
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
