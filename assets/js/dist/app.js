(function() {
  $(document).ready(function() {
    jQuery.easing.def = "easeInOutExpo";
    $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function() {
      return $('html, body').stop();
    });
    $('#navigate-to').click(function(e) {
      $("html,body").stop().animate({
        scrollTop: $('.info-text').offset().top
      }, 1000);
      return e.preventDefault();
    });
    return $('.brand-heading').waypoint(function() {
      if ($('.sticky-navbar').hasClass('sticky-hide')) {
        return $('.sticky-navbar').removeClass('sticky-hide');
      } else {
        return $('.sticky-navbar').addClass('sticky-hide');
      }
    }, {
      offset: -150
    });
  });

}).call(this);
