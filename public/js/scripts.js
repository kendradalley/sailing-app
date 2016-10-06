$(document).ready(function() {

// Navigation Toggle
$(document).on('click', ".menu-toggle", function() {
  console.log('clicked');
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

$('.eventDate').each(function(index, elem) {
  var dateHTML = elem.innerHTML;
  console.log(dateHTML);
  if($(elem).hasClass('eventDate')) {
    var formattedDate = moment(dateHTML).format("MMM Do YY");
    $(elem).html(formattedDate); 
  } 

});

$('.eventTime').each(function(index, elem) {
    // console.log('h4');
    var dateHTML = elem.innerHTML;
    console.log(dateHTML);
    if($(elem).hasClass('eventTime')) {
      var formattedTime = moment(dateHTML, "hh").format('h:00a');
      $(elem).html(formattedTime);
    } 

  });


});