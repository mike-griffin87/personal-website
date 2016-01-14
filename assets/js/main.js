$(document).ready(function(){

// ADD
// ABOUT PANEL & NO SCROLL/OVERLAY
  $('.about').on('click', function(){
    $('.about-container, .about-panel-overlay').addClass('show');
    $('body').addClass('no-scroll');
  });

// REMOVE
// ABOUT PANEL & NO SCROLL/OVERLAY
  $('.close, .about-panel-overlay').on('click', function(){
    $('.about-container, .about-panel-overlay, .contact-section').removeClass('show');
    $('body').removeClass('no-scroll');
  });

// ADD
// CONTACT PANEL & NO SCROLL/OVERLAY
  $('.contact').on('click', function (){
    $('.contact-section, .about-panel-overlay').addClass('show');
    $('.contact-section').css('display','block');
    $('body').addClass('no-scroll');
  });

//NAVIGATE THROUGH WORK ITEMS
  $('.work-item').on('click', function(){
    var current = this;
    showWork(current);

    $('.large-image-container').addClass('show-large-image');
    $('.work-text-container').addClass('show-work-item-text');
    $('body').addClass('no-scroll');

    $('.next-button').on('click', function() {
      current = $(current).next('.work-item');
      indexCheck(current);
      showWork(current);
    });

    $('.prev-button').on('click', function() {
      current = $(current).prev('.work-item');
      showWork(current);
      indexCheck(current);
      console.log(current.index());
    });
    indexCheck(current);
  });

  function indexCheck(itemIndex) {
    var numWork = 9;
    if ($(itemIndex).index() <= 0){
      $('.prev-button').hide();
    } else {$('.prev-button').show();}

    if ($(itemIndex).index() >= numWork -1){
      $('.next-button').hide();
    } else {$('.next-button').show();}
  }

  function showWork(el) {
    var text = $(el).find('.work-item-text').html();
    var image = $(el).css('background-image');

    $('.project-text').html(text);
    $('.large-image-container').css('background-image', image);
  }

// CLOSE LARGE IMAGE VIEW AND REMOVE APPENDED HTML
  $('.close-work-large-container, .close-mobile-work-image').on('click', function(){
    $('.large-image-container').removeClass('show-large-image');
    $('.work-text-container').removeClass('show-work-item-text');
    $('.project-text').html("");
    $('body').removeClass('no-scroll');
  });

$('.blog-item-text, a').hover(function(){
  $(this).prev('.date').addClass('animated tada');
},
function(){
$(this).prev('.date').removeClass('animated tada');});

});
