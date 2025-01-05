$(".hamburger").click(function (ev) {
  $(".mobile-header-list").slideToggle("slow", function () {});
});

$(".btn-menu").click(function () {
  $(".desk-menu").toggleClass("desk-menu-opened");
});

window.onpopstate = (e) => {
  if (e.state !== 1) {
    $(".exit").click();
  } else {
    if ($(".btn-call-mobile").is(":visible")) {
      $(".btn-call-mobile").click();
      console.log(".btn-call-mobile");
    } else {
      $(".btn-call").click();
      console.log(".btn-call");
    }
  }
};
$(".reviews-block").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,

  arrows: true,

  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 800,
      settings: "unslick",
    },
  ],
});
