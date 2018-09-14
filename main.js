$(document).ready(function () {
  $(".nav-icon4").on("click", function (event) {
    $(this).toggleClass('open');
    $('.myNav').toggleClass('overlay');
    $('.dspr').toggleClass('disappear');
    $('.circles').toggleClass('disappear');
  });

  var header = $(".navbar");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= window.innerHeight) {
      header.addClass(".bg-transparent");
      header.removeClass("")
    } else {
      header.removeClass("navbar-dark");
      header.addClass("navbar-light");
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

