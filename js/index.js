var carouselWidth = $('.carousel-card')[0].scrollWidth;

var cardWidth = $('.carousel-card-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function () {

    if (scrollPosition < (carouselWidth - (cardWidth * 3))) {

        scrollPosition = scrollPosition + cardWidth;

        $('.carousel-card').animate({
            scrollLeft: scrollPosition
        }, 200);
    }

});

$('.carousel-control-prev').on('click', function () {

    if (scrollPosition > 0) {

        scrollPosition = scrollPosition - cardWidth;

        $('.carousel-card').animate({
            scrollLeft: scrollPosition
        }, 200);
    }

});

/* arreglar la parte de responsive del carousel, para que se adapte a diferentes tamaños de pantalla y ande. */