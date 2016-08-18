(function ($) {

  showLogoOnScroll = function() {
    var wScroll = $(window).scrollTop();
    console.log(wScroll);
    var wantedTop = $('#start').height() / 2 + 100;
    if (wScroll >= wantedTop) {
      $('.logo').removeClass('logo--invisible');
    }
    else if (wScroll <= wantedTop - 100) {
      $('.logo').addClass('logo--invisible');
    }
  };

  $.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = $.extend(defaults, options);
      return $(options.selector).click(function (e) {
        var jumpobj = $(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = $(target).offset().top;
        $('.link--active').removeClass('link--active');
        jumpobj.addClass('link--active');
        $('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };

  $(window).scroll(function() {
    showLogoOnScroll();
  });


  $(document).ready(function() {
    $.mark.jump();

  });

})(jQuery);
