$(document).ready(function(){console.log("ready"),$(".about").on("click",function(){$(".about-container, .about-panel-overlay").addClass("show")}),$(".close").on("click",function(){$(".about-container, .about-panel-overlay").removeClass("show")}),$(".about-panel-overlay").on("click",function(){$(".about-container, .about-panel-overlay").removeClass("show")}),$(".work-item").on("click",function(){var a=$(this).css("background-image");$(".large-image-container").addClass("show-image"),$(".work-text-container").addClass("show-image"),$(".large-image-container").css("background-image",a)})});