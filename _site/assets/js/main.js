
$(document).ready(function(){

  $('.about').on('click', function(){
    $('.about-container, .about-panel-overlay').addClass('show');
    _currentWorkItems();
  });

  $('.close').on('click', function(){
    $('.about-container, .about-panel-overlay').removeClass('show');
  });

  $('.about-panel-overlay').on('click', function(){
    $('.about-container, .about-panel-overlay').removeClass('show');
  });



  $('.work-item').on('click', function(){
    var _myWorkImage = ($(this).css('background-image'));
    var _workItemText = ($(this).find('.work-item-text'));
    var _CurrentWorkItem = $(this).attr('class');
    var _next = $(_CurrentWorkItem).hide().next('.work-item');

    $('.project-text').append(_workItemText.html());

    $('.large-image-container').addClass('show-large-image');
    $('.work-text-container').addClass('show-work-item-text');
    $('.large-image-container').css('background-image', _myWorkImage);

    //Click on next project button
      $('.next-button').on('click', function(){
      console.log(_CurrentWorkItem);
      });

  });

  //Close large image view and remove appended html
  $('.close-work-large-container').on('click', function(){
    $('.large-image-container').removeClass('show-large-image');
    $('.work-text-container').removeClass('show-work-item-text');
    $('.project-text').html("");
  });

});
