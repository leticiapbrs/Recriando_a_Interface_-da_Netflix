$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 30) {
            $('.container').addClass('container-black');
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $('.container').removeClass('container-black');
        }
    });
});