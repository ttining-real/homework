$(document).ready(function() {
  $('.header .navigation-icon').click(function() {
    $('.header .navigation-icon, .navigation .navigation-icon').removeClass('is-active');
    $(this).addClass('is-active');
    $('.navigation').addClass('is-active');
  });
  
  $('.navigation .navigation-icon').click(function() {
    $('.header .navigation-icon, .navigation .navigation-icon').removeClass('is-active');
    $(this).addClass('is-active');
    $('.navigation').removeClass('is-active');
  });
})
