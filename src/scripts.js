import $ from "jquery";

$(document).ready(function () {
  $('.level-1 > a').click(function () {
    $(this).toggleClass('open')
  })

  $('.card-favourites i').click(function () {
    $(this).toggleClass('heart-full heart-empty')
  
})
})
