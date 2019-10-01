$(document).ready(function () {
  $("#aboutme__nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#aboutme").offset().top
    }, 700);
  });
  $("#skill__nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#skills").offset().top
    }, 700);
  });
  $("#works__nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#works").offset().top
    }, 700);
  });

})
