jQuery(function($) {

    // alert('Lorem Ipsum!!!');
    $('.testimonials__slider').slick({
        horizontal: true,
        arrows: true,
        // dots: true,
        // autoplay: false,
        // autoplaySpeed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        speed: 300,
        easing: 'easeInOutBack',
        // appendArrows: $('.arrows'),
        // fade: true,
        responsive:[{
            breakpoint: 479,
            settings: {
                arrows: false,
                dots: true,
            }
        }]

    });


});

// //====================FUNCTION========================

//***Eto to ze samoje chto

//var doSomething=function(){};