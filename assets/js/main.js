$(document).ready(function(){

  alert("hello");

  console.log("ready");

  $('.about').on('click', function(){
    $('.about-container, .about-panel-overlay').addClass('show');
  });

  $('.close').on('click', function(){
    $('.about-container, .about-panel-overlay').removeClass('show');
  });

  $('.about-panel-overlay').on('click', function(){
    $('.about-container, .about-panel-overlay').removeClass('show');
  });


  //work section

  $('.work-item').on('click', function(){
    var _myWorkImage = ($(this).css('background-image'));

    $('.large-image-container').addClass('show-image');
    $('.work-text-container').addClass('show-image');
    $('.large-image-container').css('background-image', _myWorkImage);

  });

});
