$(window).on('load',function () {
    $(".loading-overly").fadeOut(1500,
        function () {
            $(this).remove();
        });
});
$(window).scroll(function () {
    var sticky = $('.navbar'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) {
        sticky.addClass('fixed');
        $('.homeHeader').addClass('nav-is-fixed');
    }
    else{
        sticky.removeClass('fixed');
        $('.homeHeader').removeClass('nav-is-fixed');
    }
});
