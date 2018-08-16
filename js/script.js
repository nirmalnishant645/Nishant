$(window).on('load', function() {
  $('#preloader').delay(350).fadeOut('slow');
});

$(function () {

  $(window).scroll(function(){
    if( $(window).scrollTop() > 100 ) {

      $("nav").addClass("white-nav-top");
      //$(".navbar-brand img").attr("src", "img/logo/1.png")

    } else {

      $("nav").removeClass("white-nav-top");
      //$(".navbar-brand img").attr("src", "img/logo/2.png")

    }
  });
})
