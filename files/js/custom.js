(function($) {

    "use strict";

    scrollNavBar();

    // Mobile Menu created in here
    mobileNav();


    window.sr = new scrollReveal();


    // Menu Dropdown List 
    if ($('.menu-details').length) {
        $(".menu-details").on('click', function() {
            $(this).toggleClass('active');
            $('.header-section .nav').slideToggle(200);
        });
    }


    // Menu roundable animation
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var width = $(window).width();
                if (width < 991) {
                    $('.menu-details').removeClass('active');
                    $('.header-section .nav').slideUp(200);
                }
                $('html,body').animate({
                    scrollTop: (target.offset().top) - 30
                }, 700);
                return false;
            }
        }
    });



    // Home count
    if ($('.count-item').length) {
        $('.count-item strong').counterUp({
            delay: 10,
            time: 1000
        });
    }


    // Blog main image
    if ($('.what-is-blog-news').length) {
        $('.what-is-blog-news .img').imgfix();
    }


    // About Us Image in about page
    if ($('.about-image').length) {
        $('.about-image').imgfix({
            scale: 1.1
        });
    }


    // contact image
    if ($('.sidebar .box').length) {
        $('.sidebar .box').imgfix();
    }


    // Home Image
    if ($('.home-pic').length) {
        $('.home-pic').imgfix({
            scale: 1.1
        });
    }


    // Page image list
    if ($('.page-gallery').length && $('.image-list-containers').length) {
        $('.page-gallery').imgfix({
            scale: 1.1
        });

        $('.page-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
            }
        });
    }


    // Page searching
    $(window).on('load', function() {
        if ($('.cover').length) {
            $('.cover').parallax({
                imageSrc: $('.cover').data('image'),
                zIndex: '1'
            });
        }

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function() {
            setTimeout(function() {
                // Home Parallax
                if ($('#parallax-text').length) {
                    $('#parallax-text').parallax({
                        imageSrc: 'files/images/parallax.jpg',
                        zIndex: '1'
                    });
                }

                if ($('#counter').length) {
                    $('#counter').parallax({
                        imageSrc: 'files/images/parallax.jpg',
                        zIndex: '1'
                    });
                }
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });


    // Scroll 
    $(window).on('scroll', function() {
        scrollNavBar();
    });


    //  Mobile Menu 
    $(window).on('resize', function() {
        mobileNav();
    });


    //   Mobile  Fix
    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function() {
            if (width < 992) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }


    // Menu second line in proect
    function scrollNavBar() {
        var width = $(window).width();
        if (width > 991) {
            var scroll = $(window).scrollTop();
            if (scroll >= 30) {
                $(".header-section").addClass("header-sticky");
            } else {
                $(".header-section").removeClass("header-sticky");
            }
        }
    }


})(window.jQuery);