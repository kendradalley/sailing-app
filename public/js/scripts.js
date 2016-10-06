$(document).ready(function() {

// Navigation Toggle
$(document).on('click', ".menu-toggle", function() {
  console.log('clicked');
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});




});