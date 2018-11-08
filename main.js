$(document).ready(function () {
  $(".nav-icon4").on("click", function (event) {
    $(this).toggleClass('open');
    $('.myNav').toggleClass('overlay-content');
    $('.dspr').toggleClass('disappear');
    $('.circles').toggleClass('disappear');
  });
  var header = $(".bar");
  var brand = $(".navbar-brand");
  var navbar = $(".navbar"); 

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 630) {
        header.addClass("scrolled");
        brand.addClass("scrolled-brand");
        navbar.addClass("scrolled-nav");
      } else {
        header.removeClass("scrolled");
        brand.removeClass("scrolled-brand");
        navbar.css("background-color", "#131116");
        body.css("overflow", "hidden");

      }
    });

  var typed = new Typed('.text', {
    strings: [ "","Data Scientist", "Full Stack Developer"],
    startDelay:40,
    typeSpeed: 50,
    backDelay: 700,
    backSpeed: 50,
    showCursor: false
  });

});
