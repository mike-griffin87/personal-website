$(document).ready(function(){

function checkBodyForClass (){
  if (!$('body').hasClass('no-scroll')) {
  $('body').addClass('no-scroll');
} else {
  $('body').removeClass('no-scroll');}
}

// ADD
// ABOUT PANEL & NO SCROLL/OVERLAY
  $('.about').on('click', function(){
    $('.about-container, .about-panel-overlay').addClass('show');
    $('.main-nav').removeClass('is-showing');
    $('.mobile-nav-toggle').removeClass('is-showing');
    checkBodyForClass();
  });

// REMOVE
// ABOUT PANEL & NO SCROLL/OVERLAY
  $('.close, .about-panel-overlay').on('click', function(){
    $('.about-container, .about-panel-overlay, .contact-section').removeClass('show');
    checkBodyForClass();
  });

// ADD
// CONTACT PANEL & NO SCROLL/OVERLAY
  $('.contact').on('click', function (){
    $('.contact-section, .about-panel-overlay').addClass('show');
    $('.contact-section').css('display','block');
    $('.main-nav').removeClass('is-showing');
    $('.mobile-nav-toggle').removeClass('is-showing');
    checkBodyForClass();
  });

//NAVIGATE THROUGH WORK ITEMS
  $('.work-item').on('click', function(){
    var current = this;
    showWork(current);

    $('.large-image-container').addClass('show-large-image');
    $('.work-text-container').addClass('show-work-item-text');
    $('.mobile-prev, .mobile-next').addClass('mobile-project-buttons-showing');
    checkBodyForClass();

    $('.next-button, .mobile-next').on('click', function() {
      current = $(current).next('.work-item');
      indexCheck(current);
      showWork(current);
    });

    $('.prev-button, .mobile-prev').on('click', function() {
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
      $('.prev-button, .mobile-prev').hide();
    } else {$('.prev-button, .mobile-prev').show();}

    if ($(itemIndex).index() >= numWork -1){
      $('.next-button, .mobile-next').hide();
    } else {$('.next-button, .mobile-next').show();}
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
    $('.mobile-prev, .mobile-next').removeClass('mobile-project-buttons-showing');
    $('.project-text').html("");
    checkBodyForClass();
  });

$('.blog-item-text, a').hover(function(){
  $(this).prev('.date').addClass('animated tada');
},
function(){
$(this).prev('.date').removeClass('animated tada');});

//MOBILE NAV TOGGLE

$('.mobile-nav-toggle').on('click', function(){
  $('.main-nav').toggleClass('is-showing');
  $('.mobile-nav-toggle').toggleClass('is-showing');
});

});
