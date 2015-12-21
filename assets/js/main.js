$(document).ready(function(){


  $('.about').on('click', function(){
    $('.about-container, .about-panel-overlay').addClass('show');
    //$('.content').addClass('content-slide');
    //$('.blur-section').addClass('blur-activated');
  });

  $('.close').on('click', function(){
    $('.about-container, .about-panel-overlay').removeClass('show');
    //$('.content').removeClass('content-slide');
    //$('.blur-section').removeClass('blur-activated');
  });

  $('.about-panel-overlay').on('click', function(){
    $('.about-container, .about-panel-overlay').removeClass('show');
  });

});
