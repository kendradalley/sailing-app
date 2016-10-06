$(document).ready(function() {

// Navigation Toggle
$(document).on('click', ".menu-toggle", function() {
  console.log('clicked');
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

// $(document).on('click', "na")
  // $( function() {
  //   $( "#accordion" ).accordion();
  // } );


    $('.eventDate').each(function(index, elem) {
    // console.log('h4');
    var dateHTML = elem.innerHTML;
    console.log(dateHTML);
    if($(elem).hasClass('eventDate')) {
      var formattedDate = moment(dateHTML).format('dddd, MMM Do');
      $(elem).html(formattedDate);
    } 
      });

// Accordion with Toggle
  function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);



});