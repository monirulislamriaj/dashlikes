$(document).ready(function () {
  "use strict";
  // Scroll to top
  $("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Smooth scroll
  $("a.scroll-to").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50,
        },
        700
      );
    event.preventDefault();
  });

  // Review Slider
  $(".review-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // tabs Slider
  $(".tabs-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $(".tabs-slider").slick("setPosition");
  });

  $(".feature-item").matchHeight({
    byRow: 0,
  });

  // faq Item Match Height
  if (window.innerWidth > 991) {
    $(".faq-title").matchHeight({
      byRow: 0,
    });
    $(".faq-content").matchHeight({
      byRow: 0,
    });
  }
  if (window.innerWidth > 991) {
    $(".checkout-top").matchHeight({
      byRow: 0,
    });
    $(".checkout-bottom").matchHeight({
      byRow: 0,
    });
  }
  // -----------------------------
  //  AOS Initialize
  // -----------------------------
  AOS.init();
});

$(window).on("scroll", function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $(".main-navigation").addClass("nav-bg");
  } else {
    $(".main-navigation").removeClass("nav-bg");
  }
});
