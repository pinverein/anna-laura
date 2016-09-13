(function ($) {

  toggleMobileMenu = function() {
    $('.mobile-nav-toggle').on('click', function() {
      var $this = $(this);
      $this.toggleClass('is-active');
      $('.mobile-nav').toggleClass('is-active');
      $('.news-box.is-active').removeClass('is-active');
      $('.toggle-news.is-active').removeClass('is-active');

    });
  };

  toggleMobileNews = function() {
    $('.toggle-news').on('click', function() {
      var $this = $(this);
      $this.toggleClass('is-active');
      $('.news-box').toggleClass('is-active');
    });
  };

  showLogoOnScroll = function() {
    var wScroll = $(window).scrollTop();
    var wantedTop = $('#start').height() / 2 + 100;
    if (wScroll >= wantedTop) {
      $('.logo').removeClass('logo--invisible');
    }
    else if (wScroll <= wantedTop - 100) {
      $('.logo').addClass('logo--invisible');
    }
  };


  makeLinksActive = function() {
    // var wScroll = $(window).scrollTop();
    var scrollPos = $(window).scrollTop();
    $('.link-list li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.link-list li a').removeClass("link--active");
            currLink.addClass("link--active");
        }
        else{
            currLink.removeClass("link--active");
        }
    });
  };


  // scrollBackground = function() {
  //   var wScroll = $(window).scrollTop(),
  //       bgElementParticipate = $('.col--participate'),
  //       bgElementDonate = $('.col--donate'),
  //       bgTop = $('section.participate .col-1').offset().top;
  //
  //   bgElementParticipate.css({'background-position': (wScroll / 6) + 'px, '+ (wScroll + bgTop) / 5 +'px'});
  //
  //   bgElementDonate.css({'background-position': '-'+ (wScroll / 6) + 'px, '+ (wScroll + bgTop) / 5 +'px'});

    // launchingElements(wScroll);

  // };

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
        // e.preventDefault();
      });
    }
  };

  $(window).scroll(function() {
    showLogoOnScroll();
    makeLinksActive();
    // scrollBackground();
  });


  $(document).ready(function() {
    $.mark.jump();
    toggleMobileMenu();
    toggleMobileNews();

    $('.about-cta').click(function(){
      $('.block--about').toggleClass('is-open');
      $('.about-cta').toggleClass('hidden');
    });

  });

})(jQuery);
