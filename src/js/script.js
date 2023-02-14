$(document).ready(function(){
  $('.carousel__inner').slick({
    // speed: 1000,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></img></button>',
    // arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 575,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
  });
});
