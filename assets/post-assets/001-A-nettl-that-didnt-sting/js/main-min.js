$(document).ready(function(){$(".lightbox-trigger").on("click",function(){var i=$(this).attr("href"),s=$(".lightbox");s.addClass("is-showing"),$(".lightbox-image").attr("src",i),s.show(),$(".content img").addClass("img-is-showing"),s.one("click",function(){$(this).removeClass("is-showing"),$(".lightbox-image").attr("src",""),$(".content img").removeClass("img-is-showing")})})});