$(document).ready(function() {
    $('.xslideshow').carousel({
        interval:6000
    })
    $('.xslideshow .carousel-inner').swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next'); 
        },
        swipeRight: function() {
            $(this).parent().carousel('prev'); 
        },
        threshold:75
    });
    // init caption
    $('.xslideshow .item.active .carousel-caption').addClass('visible-caption');
    // animate caption
    $('.xslideshow').on('slide.bs.carousel', function () {
        $(this).find('.item.active .carousel-caption').removeClass('visible-caption');
    });
    $('.xslideshow').on('slid.bs.carousel', function () {
        $(this).find('.item.active .carousel-caption').addClass('visible-caption');
    });
});