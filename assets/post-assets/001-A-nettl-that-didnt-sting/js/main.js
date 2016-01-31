$(document).ready(function(){

  $('.lightbox-trigger').on('click', function(){
  var image_href = $(this).attr('href');
  var lightbox = $('.lightbox');

  lightbox.addClass('is-showing');
  $('.lightbox-image').attr('src', image_href);
  lightbox.show();

  $('.content img').addClass('img-is-showing');

  lightbox.one('click', function(){
    $(this).removeClass('is-showing');
    $('.lightbox-image').attr('src', "");
    $('.content img').removeClass('img-is-showing');
  });
});
});
