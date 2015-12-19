$(document).ready(function(){


  $('.about').on('click', function(){
    $('.about-container').addClass('show');
    $('.content').addClass('content-slide');

  });

  $('.close').on('click', function(){
  $('.about-container').removeClass('show');
    $('.content').removeClass('content-slide');
  });

  if($('.about-container').hasClass('show')){
    alert('hello world');
  }

});
