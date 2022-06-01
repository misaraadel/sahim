$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.nav-content').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });

    $(".show_hide_password .show_pass").on('click', function(event) {
        event.preventDefault();
        if($(this).siblings("input").attr("type") == "text"){
            $(this).siblings("input").attr('type', 'password');
            $(this).addClass( "fa-eye-slash" );
            $(this).removeClass( "fa-eye" );
        }else if($(this).siblings("input").attr("type") == "password"){
            $(this).siblings("input").attr('type', 'text');
            $(this).removeClass( "fa-eye-slash" );
            $(this).addClass( "fa-eye" );
        }
    });

    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-projects').owlCarousel({
        rtl: true,
        loop:true,
        margin: 0,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    

    $("#single-slider-range").slider({
        range:true,
        orientation:"horizontal",
        min: 0,
        isRTL: true,
        max: 10000,
        values: [0, 10000],
        step: 100,
        slide:function (event, ui) {
            if (ui.values[0] == ui.values[1]) {
                return false;
            }     
            $("#single_min_price").val(ui.values[0]);
            $("#single_max_price").val(ui.values[1]);
        }
    });

    $("#single-slider-range-2").slider({
        range:true,
        orientation:"horizontal",
        min: 0,
        isRTL: true,
        max: 10000,
        values: [0, 10000],
        step: 100,
        slide:function (event, ui) {
            if (ui.values[0] == ui.values[1]) {
                return false;
            }     
            $("#single_min_price").val(ui.values[0]);
            $("#single_max_price").val(ui.values[1]);
        }
    });

    $("#single-slider-range-3").slider({
        range:true,
        orientation:"horizontal",
        min: 0,
        isRTL: true,
        max: 10000,
        values: [0, 10000],
        step: 100,
        slide:function (event, ui) {
            if (ui.values[0] == ui.values[1]) {
                return false;
            }     
            $("#single_min_price").val(ui.values[0]);
            $("#single_max_price").val(ui.values[1]);
        }
    });
});