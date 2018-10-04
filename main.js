$(document).ready(function () {
  $(".nav-icon4").on("click", function (event) {
    $(this).toggleClass('open');
    $('.myNav').toggleClass('overlay');
    $('.dspr').toggleClass('disappear');
    $('.circles').toggleClass('disappear');
    $('#services').toggleClass('disappear');
  });
  var header = $(".bar");
  var brand = $(".navbar-brand") 

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 630) {
        header.addClass("scrolled");
        brand.addClass("scrolled-brand");
      } else {
        header.removeClass("scrolled");
        brand.removeClass("scrolled-brand");
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
