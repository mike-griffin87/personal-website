$(document).ready(function(){function o(o){var e=9;$(o).index()<=0?$(".prev-button, .mobile-prev").hide():$(".prev-button, .mobile-prev").show(),$(o).index()>=e-1?$(".next-button, .mobile-next").hide():$(".next-button, .mobile-next").show()}function e(o){var e=$(o).find(".work-item-text").html(),t=$(o).css("background-image");$(".project-text").html(e),$(".large-image-container").css("background-image",t)}$(".about").on("click",function(){$(".about-container, .about-panel-overlay").addClass("show"),$("body").addClass("no-scroll")}),$(".close, .about-panel-overlay").on("click",function(){$(".about-container, .about-panel-overlay, .contact-section").removeClass("show"),$("body").removeClass("no-scroll")}),$(".contact").on("click",function(){$(".contact-section, .about-panel-overlay").addClass("show"),$(".contact-section").css("display","block"),$("body").addClass("no-scroll")}),$(".work-item").on("click",function(){var t=this;e(t),$(".large-image-container").addClass("show-large-image"),$(".work-text-container").addClass("show-work-item-text"),$(".mobile-prev, .mobile-next").addClass("mobile-project-buttons-showing"),$("body").addClass("no-scroll"),$(".next-button, .mobile-next").on("click",function(){t=$(t).next(".work-item"),o(t),e(t)}),$(".prev-button, .mobile-prev").on("click",function(){t=$(t).prev(".work-item"),e(t),o(t),console.log(t.index())}),o(t)}),$(".close-work-large-container, .close-mobile-work-image").on("click",function(){$(".large-image-container").removeClass("show-large-image"),$(".work-text-container").removeClass("show-work-item-text"),$(".mobile-prev, .mobile-next").removeClass("mobile-project-buttons-showing"),$(".project-text").html(""),$("body").removeClass("no-scroll")}),$(".blog-item-text, a").hover(function(){$(this).prev(".date").addClass("animated tada")},function(){$(this).prev(".date").removeClass("animated tada")})});