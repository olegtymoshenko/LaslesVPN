$('.icon-menu').click(function(){
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
})



$(document).ready(function(){
    $('.comments__slider').slick({
        infinite: false,
        slidesToShow: 3,
        dots: true,
		  arrows: true,		  
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            }
          }, {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });
  });