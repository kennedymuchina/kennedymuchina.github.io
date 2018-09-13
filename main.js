$(document).ready(function () {
  $(".nav-icon4").on("click", function (event) {
    $(this).toggleClass('open');
    $('.myNav').toggleClass('overlay');
  });
});