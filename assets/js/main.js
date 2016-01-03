$(document).ready(function(){

// OPEN ABOUT PANEL & ADD NO SCROLL/OVERLAY
  $('.about').on('click', function(){
    $('.about-container, .about-panel-overlay').addClass('show');
    $('body').addClass('no-scroll');
  });

// CLOSE ABOUT PANEL & REMOVE NO SCROLL/OVERLAY
  $('.close, .about-panel-overlay').on('click', function(){
    $('.about-container, .about-panel-overlay, .contact-section').removeClass('show');
    $('body').removeClass('no-scroll');
  });

// OPEN CONTACT PANEL & ADD NO SCROLL/OVERLAY
  $('.contact').on('click', function (){
    $('.contact-section, .about-panel-overlay').addClass('show');
  });



  $('.work-item').on('click', function(){
    var _myWorkImage = ($(this).css('background-image'));
    var _workItemText = ($(this).find('.work-item-text'));
//next project
    var _CurrentWorkItem = $(this).attr('class');
    var _next = $(_CurrentWorkItem).hide().next('.work-item');
//end next project

    $('.project-text').append(_workItemText.html());

    $('.large-image-container').addClass('show-large-image');
    $('.work-text-container').addClass('show-work-item-text');
    $('.large-image-container').css('background-image', _myWorkImage);

//next project
      $('.next-button').on('click', function(){
      console.log(_CurrentWorkItem);
      });
//end next project
  });

// CLOSE LARGE IMAGE VIEW AND REMOVE APPENDED HTML
  $('.close-work-large-container').on('click', function(){
    $('.large-image-container').removeClass('show-large-image');
    $('.work-text-container').removeClass('show-work-item-text');
    $('.project-text').html("");
  });

});
